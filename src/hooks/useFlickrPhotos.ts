import { useQuery } from '@tanstack/react-query';
import { fetchFlickrPhotos } from '@/services/flickrApi';

export const useFlickrPhotos = (searchTags: string) => {
  return useQuery({
    queryKey: ['flickr-photos', searchTags],
    queryFn: () => fetchFlickrPhotos(searchTags),
    refetchInterval: 10000,
    staleTime: 5000,
  });
};
