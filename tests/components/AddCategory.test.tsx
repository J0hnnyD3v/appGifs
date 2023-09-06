import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components';

describe('Pruebas en <AddCategory />', () => {
  test('should match with snapshot', () => {
    const { container } = render(<AddCategory onNewCategory={() => { }} />);
    expect(container).toMatchSnapshot();
  });

  test('should change input text value', () => {
    const inputValue = 'Super Campeones';

    render(<AddCategory onNewCategory={() => { }} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test('should call onNewCategory whether input text has a value', () => {
    const inputValue = 'Vegeta';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    const form = screen.getByRole<HTMLInputElement>('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory whether input text has a short or empty value', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole<HTMLInputElement>('form');

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });

});
