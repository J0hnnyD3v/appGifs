import { Datum } from '../models/GifResponse';

type Props = {
  img: Datum
}

export const GifItem = ({ img }: Props) => {
  return (
    <article className="card">
      <p>{img.title}</p>
      <img alt={img.title} src={img.images.downsized_medium.url} />
    </article>
  );
};
