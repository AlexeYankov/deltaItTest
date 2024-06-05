import s from './modalDataCard.module.scss';
import { imagesApi, useGetImageContent } from '@/api/imagesApi';
import Loader from '@/ui/loader/loader';
import { Comments } from '../comments/comments';
import Button from '@/ui/button';
import CommentForm from '@/ui/commentForm';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import toastWrapper from '@/ui/toast';

type ModalDataType = {
  id: string | undefined;
};

export const ModalDataCard = ({ id }: ModalDataType) => {
  const { data, isLoading, isFetching } = useGetImageContent(id || '');
  const [comment, setComment] = useState('');
  const mutation = useMutation({
    mutationFn: (payload: string) => imagesApi.sendComment(id || '', payload),
  });
  if (isFetching || isLoading) {
    return <Loader />;
  }

  const sendCommentHandler = () => {
    if (!comment.trim()) {
      return toastWrapper('комментарий не может быть пустым');
    }
    mutation.mutate(comment, {
      onSuccess: () => {
        toastWrapper('комментарий успешно добавлен');
        // queryClient.invalidateQueries({ queryKey: ['image'] });
        setComment('');
        return;
      },
      onError: (error) => {
        toastWrapper(error.message, true);
      },
    });
  };
  return (
    <div className={s.wrapper}>
      <img src={data?.largeImage} alt="" />
      {data?.comments.map((el) => {
        return <Comments data={el} key={el.id} />;
      })}
      <CommentForm comment={comment} setComment={(com) => setComment(com)} />
      <Button
        label={'Save'}
        color="primary"
        onClickAction={sendCommentHandler}
        disabled={isLoading || isFetching || !comment.trim()}
      />
    </div>
  );
};
