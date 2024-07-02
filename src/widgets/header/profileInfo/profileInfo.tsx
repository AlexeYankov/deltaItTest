import Button from '@/ui/button';
import s from './profileInfo.module.scss';

type ProfileType = {
  data: { name: string; avatar: string };
};

const listener = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  console.log(e.currentTarget.id);
  console.log('click');
  console.time('test');
};

const handler = () => {
  console.timeEnd('test');
};

document
  .getElementById('2')
  ?.addEventListener('click', (e) => {
    console.log('before deep')
    e.stopPropagation()
  }, {
    capture: true,
  });

export const ProfileInfo = ({ data: { name, avatar } }: ProfileType) => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatar_container} id="1" onClick={handler}>
        <img
          src={avatar}
          alt="user_avatar"
          id="2"
          onClick={(e) => listener(e)}
        />
        <div className={s.profile__data_container}>{name}</div>
      </div>
      <div className={s.buttonWrapper}>
        <Button label="Message" iconId="mail" />
        <Button label="Call" iconId="phone" />
      </div>
    </div>
  );
};
