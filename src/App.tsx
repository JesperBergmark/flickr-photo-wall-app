import { useState } from 'react';
import { MainLayoutTemplate } from './components/templates';
import { PhotoGridOrganism, HeaderOrganism } from './components/organisms';
import { useFlickrPhotos } from '@/hooks/useFlickrPhotos';

function App() {
  const [searchTags, setSearchTags] = useState('nature');
  const { data, isLoading, isError, error } = useFlickrPhotos(searchTags);

  return (
    <MainLayoutTemplate header={<HeaderOrganism onSearch={setSearchTags} />}>
      <PhotoGridOrganism photos={data?.items || []} isLoading={isLoading} isError={isError} error={error?.message} />
    </MainLayoutTemplate>
  );
}

export default App;
