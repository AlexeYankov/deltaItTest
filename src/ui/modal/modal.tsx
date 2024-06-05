import { ModalCard } from './modalCard/modalCard';

type ModalType = {
  id: string;
  open: boolean;
  handleOpen: ()=>void;
  handleClose: ()=>void;
};

export const Modal = (prop: ModalType) => {
  return (
    <ModalCard
      handleClose={prop.handleClose}
      open={prop.open}
      handleOpen={prop.handleOpen}
      id={prop.id}
    />
  );
};
