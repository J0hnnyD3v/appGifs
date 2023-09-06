import 'whatwg-fetch';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

import { images } from '../data/images';

describe('Pruebas en <GifGrid />', () => {
  const category = 'Dragon Ball Super';

  test('should display the category', () => {
    (useFetchGifs as jest.Mock).mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid key={category} category={category} />);
    expect(screen.getByText(category));
  });

  test('should display images once useFetchGifs return them', () => {
    (useFetchGifs as jest.Mock).mockReturnValue({
      images,
      isLoading: false
    });

    render(<GifGrid key={category} category={category} />);
    expect(screen.getAllByRole('img').length).toBe(10);
  });
});
