import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import s from './modalCard.module.scss';
import { ModalDataCard } from '../modalDataCard/modalDataCard';

type UnitCardType = {
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
  id: string;
};

export const ModalCard = (prop: UnitCardType) => {
  return (
    <div className={s.wrapper}>
      <Modal
        open={prop.open}
        onClose={prop.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={s.card}>
          <ModalDataCard id={prop.id} />
        </Box>
      </Modal>
    </div>
  );
};
