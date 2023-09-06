import 'whatwg-fetch';
import { getGifs } from '../../src/helpers';

describe('Pruebas en GetGifs', () => {
  test('should return gifs array', async () => {
    const gifs = await getGifs('Dragon Ball Super');

    expect(gifs.length).toBeGreaterThan(0);

    const gif = gifs[ 0 ];

    expect(gif).toEqual({
      type: expect.any(String),
      id: expect.any(String),
      url: expect.any(String),
      slug: expect.any(String),
      bitly_gif_url: expect.any(String),
      bitly_url: expect.any(String),
      embed_url: expect.any(String),
      username: expect.any(String),
      source: expect.any(String),
      title: expect.any(String),
      rating: expect.any(String),
      content_url: expect.any(String),
      source_tld: expect.any(String),
      source_post_url: expect.any(String),
      is_sticker: expect.any(Number),
      import_datetime: expect.any(String),
      trending_datetime: expect.any(String),
      images: expect.any(Object),
      user: expect.any(Object),
      analytics_response_payload: expect.any(String),
      analytics: expect.any(Object),
    });
  });
});
