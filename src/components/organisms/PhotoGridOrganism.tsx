import { AnimatePresence } from 'framer-motion';
import { PhotoCardMolecule, LoadingSpinnerMolecule } from '../molecules';
import { FlickrPhoto } from '@/types';

interface PhotoGridOrganismProps {
  photos: FlickrPhoto[];
  isLoading: boolean;
  isError: boolean;
  error?: string;
}

export const PhotoGridOrganism = ({ photos, isLoading, isError, error }: PhotoGridOrganismProps) => {
  if (isLoading) {
    return <LoadingSpinnerMolecule />;
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 text-lg">Ett fel uppstod vid hämtning av bilder: {error}</p>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">Inga bilder hittades. Prova att söka efter något annat!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
      <AnimatePresence mode="popLayout">
        {photos.map((photo, index) => (
          <PhotoCardMolecule key={`${photo.link}-${photo.published}`} photo={photo} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};
