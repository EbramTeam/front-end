# Fetching from the backend with React Query

How the `internal` and `public` apps call the API. Both apps work the same way, using `@tanstack/react-query` v5.

## The layers

```text
Component          renders; never calls the API
  └─ Hook          hooks/use-*.ts: useQuery / useMutation, toasts, invalidation
      └─ API       api/*.ts: one typed function per endpoint
          └─ api   lib/api-client.ts: token, language, refresh, error toast, unwraps the envelope
```

| Layer | Owns | Does not own |
| --- | --- | --- |
| `api/*.ts` | The URL, the params, the request and response types | React, toasts, query keys |
| `hooks/use-*.ts` | Query key, loading flags, success toast, what reloads afterwards | The URL |
| Component | Rendering from what the hook returns | `useQuery`, `axios`, `useEffect` that fetches |

## React Query is not a cache here

Both `lib/query-client.ts` files turn caching off. React Query gives us shared loading and error state, and nothing else.

| Option | Value | What it means |
| --- | --- | --- |
| `staleTime` | `0` | Data is always considered old |
| `gcTime` | `0` | Data is dropped once no component uses it, so reopening a page fetches again |
| `placeholderData` | previous data | The old data stays on screen while a new key loads, which stops the grid jumping back to page 1 |
| `retry` | `false` | A failed call fails once, and shows one toast |
| `refetchOnWindowFocus`, `refetchOnReconnect` | `false` | No background reloads |

Don't rely on data being kept between pages, and don't set `staleTime` to work around a double call. Fix the double call instead.

## Step 1: the API function

Call `api` from `@/lib/api-client`, never `axios` directly. It returns the contents of `ApiResponse.data`, so type the function with the DTO itself.

```ts
const endpoint = 'CourseQualifications';

export const CourseQualificationsService = {
    getById(id: string): Promise<UserTilawaQualificationDto> {
        return api.get<UserTilawaQualificationDto>(`${endpoint}/TilawaQualification`, { params: { id } });
    },

    create(request: CreateTilawaQualificationsRequest): Promise<number> {
        return api.post<number>(`${endpoint}/TilawaQualifications`, request);
    },
};
```

Available methods: `api.get`, `api.post`, `api.put`, `api.delete` and `api.getBlob`.

The client already handles these, so don't repeat them:

- The `Authorization` and `Accept-Language` headers.
- Refreshing an expired token and retrying the request once.
- Treating `isSuccess: false` as a failure, even on a 200.
- Showing the backend's message as an error toast.

## Step 2: reading with `useQuery`

```ts
export function useQualificationDetails(id: string) {
    const { t } = useTranslation();

    const { data, isLoading } = useQuery({
        queryKey: ['courseQualifications', 'details', id],
        queryFn: () => CourseQualificationsService.getById(id),
    });

    return {
        sections: data ? getDetailSections(data, t) : null,
        isLoading,
    };
}
```

- **Query key:** start with the module name, then the kind of data, then every value the request depends on. A value missing from the key means the query won't reload when that value changes.
- **Waiting for a value:** use `enabled`, for example `enabled: requestId !== ''`.
- **Return what the screen needs:** shape the data in the hook, not in the component.
- **Load on mount with `useQuery`:** never with a `useEffect` that sets state (see `pre-commit-rules.md`).

### `isPending` or `isLoading`

| Flag | True when | Use it for |
| --- | --- | --- |
| `isPending` | There is no data yet, including while `enabled` is `false` | Queries that always run |
| `isLoading` | There is no data yet and a fetch is running | Queries with `enabled` that can be off |

### The placeholder catch

When a key changes inside the same mounted component, `data` still holds the **previous** record until the new one arrives. If showing the old record would mislead the user, check `isPlaceholderData`.

## Step 3: writing with `useMutation`

```ts
export function useSaveRating(requestId: string, onDone: () => void) {
    const { t } = useTranslation();
    const { showSuccess } = useNotify();

    const save = useMutation({
        mutationFn: saveRating,
        onSuccess: () => {
            showSuccess(t('enrollmentInQuranRecitationLevels.courseProgress.saved'));
            onDone();
        },
    });

    const saveRatingAction = (action: Action) => save.mutate({ requestId, actionId: action.actionId! });

    return { saveRatingAction, isSaving: save.isPending };
}
```

- Add the success toast in `onSuccess`, with a translated message.
- Don't add `onError` just to show the error. The client has already shown it.
- Disable the submit button with `isPending`.

### A read the user triggers

A search button that runs a GET is a `useMutation`, because it runs on a click and not on mount. See `find` in `use-add-qualification.ts`.

## Step 4: reloading after a write

`invalidateQueries` refetches the queries that are currently mounted. Pass the same key, or the start of it.

```ts
const queryClient = useQueryClient();

onSuccess: () => {
    void queryClient.invalidateQueries({ queryKey: ['courseQualifications', 'holderQualifications'] });
};
```

## Lists

Don't write `useQuery` for a table. Give the list screen a `fetchPage` and it fetches through `@msbes/data-table`:

```ts
const definition: ListScreenDefinition<UserTilawaQualificationListItem> = {
    getRowId: (row) => row.id,
    getColumns: getCoursesColumns,
    useFilterFields,
    fetchPage: CourseQualificationsService.getAll,
    searchParam: 'search',
    actions: [viewAction<UserTilawaQualificationListItem>()],
};
```

In the internal app, a row action that writes and then reloads the list uses `{ behavior: { kind: 'run', run, refresh: true } }`. All lists share the `['server-list']` key. See `apps/internal/src/components/list-screen/README.md`.

## Lookups

For a shared dropdown, use `useLookup` from `@/lib/lookups`:

```ts
const types = useLookup('entityTypes', entityTypeFilters);
```

A lookup that belongs to one service is an API function plus a `useQuery` in that module, as in `use-course-lookups.ts`.

## Errors

Every failure shows a toast automatically unless the request is `silent`.

| You want | Do this |
| --- | --- |
| The backend's message as a toast | Nothing |
| Your own message | Add `{ silent: true }` in the API function and call `showError(t(...))` in `onError` |
| No message, for example a lookup that may render empty | Add `{ silent: true }` |

`{ silent: true }` goes in the API function, because whether to show the toast is decided per endpoint. Without it, your own `showError` becomes a second toast.

An expired session never shows a toast. The client refreshes the token, or sends the user to sign in.

## The full-screen loader

`GlobalLoader` is mounted once per app and blocks the screen while a call runs.

| Call | Default | To change it |
| --- | --- | --- |
| `useMutation` | Blocks the screen | `meta: { globalLoader: false }` when it has its own progress |
| `useQuery` | Does not block | `meta: { globalLoader: true }` when the page has nothing to show until it loads |

Lists, lookups and background reloads should not use the loader.

## Checklist for a new endpoint

1. Add the types, then one function in `api/*.ts`.
2. Add `{ silent: true }` only if the screen handles the error itself.
3. Add a hook in `hooks/use-*.ts`, with a key that includes every value the request depends on.
4. After a write, add a success toast and reload what changed.
5. Use `enabled` if a value may not be ready.
6. In the component, use only what the hook returns.
