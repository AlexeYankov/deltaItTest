import s from './commentForm.module.scss';

type CommentFormType = {
  comment: string;
  setComment: (value: string) => void;
};

export const CommentForm = ({ setComment, comment }: CommentFormType) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="commentForm">
        Comment
      </label>
      <textarea
        value={comment}
        className={s.textArea}
        onChange={(e) => setComment(e.currentTarget.value)}
        name="comment-form"
        id="commentForm"
      />
      <label className={s.description} htmlFor="commentForm">
        Write a few sentiences about the photo.
      </label>
    </div>
  );
};
