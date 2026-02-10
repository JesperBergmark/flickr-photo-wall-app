import { useQuery } from '@tanstack/react-query';
import { fetchFlickrPhotos } from '@/services/flickrApi';
import { usePhotoWallStore } from '@/store/photoWallStore';

export const useFlickrPhotos = () => {
  const { searchTags, refreshInterval } = usePhotoWallStore();

  return useQuery({
    queryKey: ['flickr-photos', searchTags],
    queryFn: () => fetchFlickrPhotos(searchTags),
    refetchInterval: refreshInterval,
    staleTime: 5000,
    enabled: searchTags.length > 0,
  });
};
