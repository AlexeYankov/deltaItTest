import Button from '@/ui/button';
import s from './profileInfo.module.scss';

type ProfileType = {
  data: { name: string; avatar: string };
};

export const ProfileInfo = ({ data: { name, avatar } }: ProfileType) => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatar_container}>
        <img src={avatar} alt="user_avatar" />
        <div className={s.profile__data_container}>{name}</div>
      </div>
      <div className={s.buttonWrapper}>
        <Button label="Message" iconId="mail" />
        <Button label="Call" iconId="phone" />
      </div>
    </div>
  );
};
