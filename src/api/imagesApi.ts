import { useQuery } from '@tanstack/react-query';
import { instance } from './baseApi';
import { GetImagesCommentType, GetImagesType } from './types';

const imagesApi = {
  getImages() {
    return instance.get<Array<GetImagesType>>('/images');
  },
  getImageContent(id: string) {
    return instance.get<GetImagesCommentType>(`/image/` + `${id}`);
  }, 
  sendComment(id: string, data: string) {
    return instance.post<GetImagesType>(`/image/` + `${id}` + '/comments', {comment: data});
  },
};

const useGetImages = () => {
    return useQuery({
      queryKey: ['images'],
      queryFn: async () =>
        await imagesApi.getImages().then((res) => {
          return res.data;
        }),
    });
    
  
};
const useGetImageContent = (id: string) => {
    return useQuery({
      queryKey: ['image'],
      queryFn: async () =>
        await imagesApi.getImageContent(id).then((res) => {
          return res.data;
        }),
    });
    
  
};

export { useGetImages, useGetImageContent, imagesApi };
