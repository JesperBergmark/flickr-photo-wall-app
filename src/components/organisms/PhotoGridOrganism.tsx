import { AnimatePresence } from 'framer-motion';
import { PhotoCardMolecule } from '@/components/molecules/PhotoCardMolecule';
import { LoadingSpinnerMolecule } from '@/components/molecules/LoadingSpinnerMolecule';
import { useFlickrPhotos } from '@/hooks/useFlickrPhotos';

export const PhotoGridOrganism = () => {
  const { data, isLoading, isError, error } = useFlickrPhotos();

  if (isLoading) {
    return <LoadingSpinnerMolecule />;
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 text-lg">Ett fel uppstod vid hämtning av bilder: {error?.message}</p>
      </div>
    );
  }

  if (!data?.items || data.items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">Inga bilder hittades. Prova att söka efter något annat.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
      <AnimatePresence mode="popLayout">
        {data.items.map((photo, index) => (
          <PhotoCardMolecule key={`${photo.link}-${photo.published}`} photo={photo} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};
