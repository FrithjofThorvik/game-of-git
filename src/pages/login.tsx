import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import logo from '@/assets/images/logo.png';
import Button from '@/components/Button';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import useProtectedRoutes from '@/hooks/useProtectedRoutes';

/**
 * Login component
 * @return {JSX.Element} - The JSX code for Login component
 */
const Login: NextPage = (): JSX.Element => {
  useProtectedRoutes();
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center w-[20rem]">
        <img src={logo.src} alt="logo" />
        <div className="primary-heading -mt-5">GoG</div>
        <div className="content-text">Learn git through Game of Git</div>
        <Button
          onClick={() => router.push('/api/auth/login')}
          className="w-full my-5"
        >
          Login
        </Button>
        <div className="content-text px-5 text-center">
          Sign up or login to your account with Google or GitHub
        </div>
        <div className="flex justify-center items-center space-x-3 my-3">
          <div className="box-blue rounded-full p-2">
            <GoogleIcon />
          </div>
          <div className="box-blue rounded-full p-2">
            <GitHubIcon />
          </div>
        </div>
        <div className="content-text px-5 text-center font-extralight text-opacity-60">
          Supported by Auth0
        </div>
      </div>
    </div>
  );
};

export default Login;
