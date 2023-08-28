import { useEffect, useState } from 'react';
import { getGifs } from '../helpers';
import { Datum } from '../models';

export const useFetchGifs = (category: string) => {
  const [ images, setImages ] = useState<Datum[]>([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const getImages = async () => {
    const datum: Datum[] = await getGifs(category);
    setImages(datum);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  };
};
