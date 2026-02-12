import jsonp from 'jsonp';
import { FlickrFeedResponse } from '@/types';

const FLICKR_API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne';

export const fetchFlickrPhotos = (tags: string): Promise<FlickrFeedResponse> => {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams({
      format: 'json',
      tags: tags.trim(),
      tagmode: 'any',
    });

    const url = `${FLICKR_API_URL}?${params.toString()}`;

    jsonp(url, { param: 'jsoncallback' }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data as FlickrFeedResponse);
      }
    });
  });
};
