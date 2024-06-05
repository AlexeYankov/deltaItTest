import s from './button.module.scss';
import sprite from '../../../public/sprite.svg';

type BtnType = {
  iconId?: string;
  label: string;
  color?: string;
  onClickAction?: () => void;
  disabled?: boolean;
};

export const Button = ({
  iconId,
  label,
  color,
  onClickAction,
  disabled,
}: BtnType) => {
  const styleBtn = color === 'primary' ? s.primary : '';
  const styleDisabledBtn = disabled ? s.disabled : ''
  return (
    <button
      className={s.container + ' ' + styleBtn + ' ' + styleDisabledBtn}
      onClick={onClickAction}
    >
      {iconId && (
        <svg
          fill={'white'}
          height={20}
          viewBox={'0 0 20 20'}
          width={20}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <use xlinkHref={`${sprite}#${iconId}`} />
        </svg>
      )}
      {label}
    </button>
  );
};
