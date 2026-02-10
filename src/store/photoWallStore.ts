import { create } from 'zustand';
import { PhotoWallState } from '@/types';

export const usePhotoWallStore = create<PhotoWallState>((set) => ({
  searchTags: 'nature',
  setSearchTags: (tags) => set({ searchTags: tags }),
  refreshInterval: 10000, //ändra här för antalet sekunder för re-fetch
  setRefreshInterval: (interval) => set({ refreshInterval: interval }),
}));
