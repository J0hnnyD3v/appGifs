import { GifItem, Spinner } from './';
import { useFetchGifs } from '../hooks';

type Props = {
  category: string;
}
export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && (<Spinner />)}
      <h3>{category}</h3>
      <section className="card-grid">
        {images.map(img => (<GifItem key={img.id} img={img} />))}
      </section>
    </>
  );
};
