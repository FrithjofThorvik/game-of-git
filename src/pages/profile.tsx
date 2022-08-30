import type { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';
import UserInfo from '@/components/pages/profile/UserInfo';

/**
 * Profile component
 * @return {JSX.Element} - The JSX code for Profile component
 */
const Profile: NextPage = (): JSX.Element => {
  const { user } = useUser();

  return (
    <div>
      <div className="primary-heading">Profile</div>
      <UserInfo name={user?.name} picture={user?.picture} email={user?.email} />
    </div>
  );
};

export default Profile;
