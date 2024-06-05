import { useGetImages } from '@/api/imagesApi';
import { useState } from 'react';
import ImageCard from '@/ui/imageCard';
import Modal from '@/ui/modal';
import Loader from '@/ui/loader/loader';
import s from './imageSection.module.scss';

export const ImageSection = () => {
  const [id, setId] = useState('');
  const [open, setOpen] = useState(false);
  const { data, isFetching, isLoading } = useGetImages();

  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.wrapper}>
      {data?.map((el) => {
        return (
          <ImageCard
            image={el.image}
            id={el.id}
            key={el.id}
            setId={(id: string) => setId(id)}
            setOpen={() => setOpen(true)}
          />
        );
      })}
      <Modal
        id={id}
        open={open}
        handleClose={() => setOpen(false)}
        handleOpen={() => setOpen(true)}
      />
    </div>
  );
};
