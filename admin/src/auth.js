// توكن الـ API: في sessionStorage افتراضياً، وفي localStorage عند اختيار "تذكرني"
const TOKEN_KEY = 'ibram-token';

export function getToken() {
  try {
    return sessionStorage.getItem(TOKEN_KEY) ?? localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export const isAuthed = () => Boolean(getToken());

export function clearSession() {
  try {
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY);
  } catch {}
}

export function setSession(token, remember) {
  clearSession();
  try {
    (remember ? localStorage : sessionStorage).setItem(TOKEN_KEY, token);
  } catch {}
}
