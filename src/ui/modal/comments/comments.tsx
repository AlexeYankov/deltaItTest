import { GetImagesCommentsType } from '@/api/types';
import s from './comments.module.scss';

type CommentsType = {
  data: GetImagesCommentsType;
};

export const Comments = ({ data }: CommentsType) => {
  return (
    <div className={s.wrapper}>
      <div>{data.author}</div>
      <div>{data.text}</div>
    </div>
  );
};
