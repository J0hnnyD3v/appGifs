import { useState } from 'react';

type Props = {
  // setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  onNewCategory: (category: string) => void;
}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setInputValue(ev.target.value);
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (inputValue.trim().length <= 2) {
      return;
    }
    // setCategories(cat => [ inputValue, ...cat ])
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={(ev: React.FormEvent<HTMLFormElement>) => onSubmit(ev)} aria-label="form">
      <input
        type="text"
        name="category"
        id="category"
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => onInputChange(ev)}
      />
    </form>
  );
};
