import s from './button.module.scss'
import sprite from '../../../public/sprite.svg'

type BtnType = {
  iconId: string;
  label: string;
};

export const Button = ({ iconId, label }: BtnType) => {
  return (
    <button className={s.container}>
      <svg
        fill={'white'}
        height={20}
        viewBox={'0 0 20 20'}
        width={20}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use xlinkHref={`${sprite}#${iconId}`} />
      </svg>
      {label}
    </button>
  );
};
