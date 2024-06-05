import { useGetImages } from '@/api/imagesApi';
import ImageCard from '@/ui/imageCard';
import s from './imageSection.module.scss'

export const ImageSection = () => {
  const { data } = useGetImages();
  return (
    <div className={s.wrapper}>
      {data?.map((el) => {
        return <ImageCard image={el.image} key={el.id} id={el.id} />;
      })}
    </div>
  );
};
