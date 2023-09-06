import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from '../../src/components';

describe('Pruebas en <Spinner />', () => {
  test('should match with snapshot', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
