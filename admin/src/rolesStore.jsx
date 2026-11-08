import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { SEED_ROLES, panelGroupsFor, countChecked } from './rolesData.js';

const Ctx = createContext(null);

const seed = SEED_ROLES.map((r) => ({
  ...r,
  groups: panelGroupsFor(r.id === 'sysadmin' ? Infinity : 8),
}));

export function RolesProvider({ children }) {
  const [roles, setRoles] = useState(seed);

  const addRole = useCallback((role) => {
    const id = 'custom-' + Date.now();
    setRoles((rs) => [...rs, { ...role, id, users: 0, perms: countChecked(role.groups), custom: true }]);
    return id;
  }, []);

  const saveGroups = useCallback((id, groups) => {
    setRoles((rs) =>
      rs.map((r) => (r.id === id ? { ...r, groups, perms: countChecked(groups) } : r))
    );
  }, []);

  const value = useMemo(() => ({ roles, addRole, saveGroups }), [roles, addRole, saveGroups]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useRoles = () => useContext(Ctx);
