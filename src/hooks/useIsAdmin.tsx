import { useUser } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react';

export const useIsAdmin = () => {
  const { user, isLoading } = useUser();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAdminLoading, setIsAdminLoading] = useState<boolean>(true);

  useEffect(() => {
    if (user) {
      const roles = user?.['http://localhost:3000/roles'] || [];
      const isAdmin = Array.isArray(roles) ? roles.includes('admin') : false;
      setIsAdminLoading(false);
      setIsAdmin(isAdmin);
    }
  }, [user, setIsAdmin]);

  return { isAdmin, isAdminLoading };
};
