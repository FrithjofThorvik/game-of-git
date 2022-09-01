import type { GetServerSidePropsContext, NextPage } from 'next';
import { prisma } from '@/utils/prisma';
import { setCookie } from 'nookies';
import { getServerSidePropsWrapper, getSession } from '@auth0/nextjs-auth0';

const Home: NextPage = (): JSX.Element => {
  return <div>Index</div>;
};

export const getServerSideProps = getServerSidePropsWrapper(
  async (ctx: GetServerSidePropsContext) => {
    const auth0User = getSession(ctx.req, ctx.res);
    const email = auth0User?.user.email;
    const name =
      typeof auth0User?.user.name === 'string' ? auth0User?.user.name : null;

    if (email) {
      let user = await prisma.user.findUnique({ where: { email } });
      if (!user) user = await prisma.user.create({ data: { email, name } });
      setCookie(ctx, 'userId', user.id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }

    return { props: {} };
  },
);

export default Home;
