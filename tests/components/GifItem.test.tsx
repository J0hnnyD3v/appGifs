import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

import { images } from '../data/images';

describe('Pruebas en <GifItem />', () => {
  test('should match with snapshot', () => {
    const img = images[ 0 ];
    const { container } = render(<GifItem key={img.id} img={img} />);
    expect(container).toMatchSnapshot();
  });

  test('should display right image and alt according to url indicated', () => {
    const img = images[ 0 ];
    render(<GifItem key={img.id} img={img} />);
    // screen.debug();
    /* tomar la imagen */
    const image = screen.getByRole<HTMLImageElement>('img');
    expect(image.src).toBe(img.images.downsized_medium.url);
    expect(image.alt).toBe(img.title);
  });

  test('should display the tittle in the component', () => {
    const img = images[ 0 ];
    render(<GifItem key={img.id} img={img} />);
    /* tomar el titulo */
    const title = screen.getByText<HTMLParagraphElement>(img.title);
    expect(title).toBeTruthy();
  });
});
