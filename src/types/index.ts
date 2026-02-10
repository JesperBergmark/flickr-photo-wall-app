export interface FlickrPhoto {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export interface FlickrFeedResponse {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items: FlickrPhoto[];
}

export interface PhotoWallState {
  searchTags: string;
  setSearchTags: (tags: string) => void;
  refreshInterval: number;
  setRefreshInterval: (interval: number) => void;
}
