import 'whatwg-fetch';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('pruebas en useFetchGifs hook', () => {
  test('sholud return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return array images and isLoading equal to false', async () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
