import { Welcome } from '../models';

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=eYefR1oE4myVOBUHFK4Hd7RlD6acqRLF&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data }: Welcome = await resp.json();
  return data;
};