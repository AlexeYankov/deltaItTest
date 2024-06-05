import s from './header.module.scss';
import ProfileInfo from './profileInfo';
import { data } from './profileInfoData';

export const Header = () => {
  const profileData = data;
  return (
    <header className={s.wrapper}>
      <ProfileInfo data={profileData}/>
    </header>
  );
};
