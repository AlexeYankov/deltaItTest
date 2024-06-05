import s from './imageCard.module.scss'

type ImageCardType = {
  image: string;
  id: string;
};

export const ImageCard = (prop: ImageCardType) => {
  const { image, id } = prop;
  return (
    <div className={s.wrapper}>
      <img src={image} alt="" />
      id: {id}
    </div>
  );
};
