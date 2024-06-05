import s from './imageCard.module.scss';

type ImageCardType = {
  image: string;
  id: string;
  setId: (id: string) => void;
  setOpen: () => void;
};

export const ImageCard = (prop: ImageCardType) => {
  const { image, id, setId, setOpen} = prop;
  const openHandler = () => {
    setOpen()
    setId(id)
  }
  return (
    <div className={s.wrapper} onClick={openHandler}>
      <img src={image} alt="" />
      id: {id}
    </div>
  );
};
