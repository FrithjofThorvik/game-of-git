import type { FC } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface IUserInfoProps {
  name?: string | null;
  picture?: string | null;
  email?: string | null;
}

/**
 * UserInfo component
 * @return {JSX.Element} - The JSX code for UserInfo component
 */
const UserInfo: FC<IUserInfoProps> = ({
  name,
  picture,
  email,
}): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      {picture ? (
        <img
          src={picture}
          alt="Profile picture"
          className="w-20 rounded-full p-2 box-blue"
        />
      ) : (
        <div className="flex justify-center items-center w-16 h-16 box-blue">
          <AccountCircleOutlinedIcon style={{ fontSize: '3.3rem' }} />
        </div>
      )}
      <div className="quaternary-heading mt-2">{name || 'N/A'}</div>
      <div className="content-text rounded-full py-1 px-5 mt-2 text-center box-blue text-light-blue">
        {email}
      </div>
    </div>
  );
};

export default UserInfo;
