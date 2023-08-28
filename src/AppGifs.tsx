import { useState } from 'react';
import { AddCategory } from './components';
import { GifGrid } from './components';

export const AppGifs = () => {
  const [ categories, setCategories ] = useState<string[]>([ 'Dragon Ball Super', ]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories(c => [ newCategory, ...c ]);
  };
  return (
    <>
      <h1>App Gifs</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(newCategory: string) => onAddCategory(newCategory)}
      />

      {categories.map(category => <GifGrid key={category} category={category} />)}
    </>
  );
};
