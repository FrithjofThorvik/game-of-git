import type { FC } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import logo from '@/assets/images/logo.png';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SidebarItem from './sidebar/SidebarItem';
import SecurityIcon from '@mui/icons-material/Security';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SidebarSection from './sidebar/SidebarSection';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

/**
 * Sidebar component
 * @return {JSX.Element} - The JSX code for Sidebar component
 */
const Sidebar: FC = (): JSX.Element => {
  const { user } = useUser();
  const { isAdmin } = useIsAdmin();
  const isLoggedOut = user ? false : true;

  return (
    <div className="absolute top-0 left-0 bottom-0 flex flex-col items-start justify-start py-10 px-5 z-10 w-[12rem] bg-gray">
      <div className="flex justify-center items-center mb-10 w-full">
        <a href="/">
          <img src={logo.src} alt="GitMMO" className="w-20 mx-auto" />
          <div className="flex flex-col justify-center items-center -mt-3">
            <div className="secondary-heading">GoG</div>
            <div className="content-text -mt-2">Game Of Git</div>
          </div>
        </a>
      </div>
      <SidebarSection title="General">
        <SidebarItem
          icon={<DashboardOutlinedIcon />}
          text="Dashboard"
          link="/"
          disabled={isLoggedOut}
        />
        <SidebarItem
          icon={<SportsEsportsIcon />}
          text="Game"
          link="/game"
          disabled={isLoggedOut}
        />
      </SidebarSection>
      <SidebarSection title="Info">
        <SidebarItem
          icon={<MenuBookIcon />}
          text="Cheat sheet"
          link="/cheat-sheet"
        />
        <SidebarItem
          icon={<InfoOutlinedIcon />}
          text="About us"
          link="/about"
        />
        <SidebarItem
          icon={<AccountCircleOutlinedIcon />}
          text="Profile"
          link="/profile"
          disabled={isLoggedOut}
        />
        {isAdmin ? (
          <SidebarItem icon={<SecurityIcon />} text="Admin" link="/admin" />
        ) : (
          <></>
        )}
      </SidebarSection>
      <div className="mt-auto">
        <SidebarItem
          icon={isLoggedOut ? <LoginIcon /> : <LogoutIcon />}
          text={isLoggedOut ? 'Login' : 'Logout'}
          link={isLoggedOut ? '/api/auth/login' : '/api/auth/logout'}
        />
      </div>
      <div className="absolute -right-10 top-0 bottom-0 w-10 bg-gray">
        <div className="w-full h-full rounded-tl-[10rem] border-l border-l-line-gray bg-dark-blue"></div>
      </div>
    </div>
  );
};

export default Sidebar;
