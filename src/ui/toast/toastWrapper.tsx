import { toast } from 'react-toastify';

export const toastWrapper = (message: string, error: boolean = false) => {
  if (error) {
    return toast.error(message);
  }
  toast.success(message);
};