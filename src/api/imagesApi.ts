import { useQuery } from '@tanstack/react-query';
import { instance } from './baseApi';
import { GetImagesType } from './types';

const imagesApi = {
  getImages() {
    return instance.get<Array<GetImagesType>>('/images');
  },
  getImageContent(id: string) {
    return instance.get<GetImagesType>(`/image/` + `${id}`);
  }, 
  sendComment(id: string, data: string) {
    console.log(data)
    return instance.post<GetImagesType>(`/image/` + `${id}` + '/comments', data);
  },
};

const useGetImages = () => {
    return useQuery({
      queryKey: ['images'],
      queryFn: async () =>
        await imagesApi.getImages().then((res) => {
          return res.data;
        }),
        // }), enabled: false
    });
    
  
};

export { useGetImages, imagesApi };
