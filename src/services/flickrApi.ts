import { FlickrFeedResponse } from '@/types';

const FLICKR_API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne';

// Use JSONP to bypass CORS restrictions
export const fetchFlickrPhotos = async (tags: string): Promise<FlickrFeedResponse> => {
  return new Promise((resolve, reject) => {
    // Create a unique callback name
    const callbackName = `jsonFlickrFeed_${Date.now()}`;
    
    // Create the callback function
    (window as any)[callbackName] = (data: FlickrFeedResponse) => {
      // Clean up
      delete (window as any)[callbackName];
      document.body.removeChild(script);
      resolve(data);
    };

    // Create script element
    const script = document.createElement('script');
    const params = new URLSearchParams({
      format: 'json',
      tags: tags.trim(),
      tagmode: 'any',
      jsoncallback: callbackName,
    });

    script.src = `${FLICKR_API_URL}?${params.toString()}`;
    script.onerror = () => {
      delete (window as any)[callbackName];
      document.body.removeChild(script);
      reject(new Error('Failed to load Flickr feed'));
    };

    // Add script to document
    document.body.appendChild(script);
  });
};
