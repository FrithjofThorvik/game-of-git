import { useUser } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIsAdmin } from './useIsAdmin';

const useProtectedRoutes = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const { isAdmin, isAdminLoading } = useIsAdmin();

  useEffect(() => {
    switch (router.pathname) {
      case '/cheat-sheet':
        break;
      case '/about':
        break;
      case '/login':
        if (user && !isLoading)
          router.push(`${router.query.redirectTo || '/'}`);
        break;
      case '/admin':
        if (!isAdmin && !isAdminLoading) router.push('/');
        break;
      default:
        if (!user && !isLoading)
          router.push(`/login?redirectTo=${router.pathname}`);
        break;
    }
  }, [user, router, isAdmin, isLoading, isAdminLoading]);
};

export default useProtectedRoutes;
