import React, { FunctionComponent } from 'react';
import { Product } from './data/entities';
import { ProductList } from './productList';
import { useAppDispatch, useAppSelector, reducers } from './data/dataStore';

let testData: Product[] = [1, 2, 3, 4, 5].map(num =>
  ({ id: num, name: `Prod${num}`, category: `Cat${num % 2}`, description: `Product ${num}`, price: 100 }))

export const App: FunctionComponent = () => {

  const selections = useAppSelector(state => state.selections);
  const dispatch = useAppDispatch();

  const addToOrder = (product: Product, quantity: number) =>
    dispatch(reducers.addToOrder([product, quantity]));

  const categories = [...new Set(testData.map(p => p.category))];

  return <div className="App">
    <ProductList products={testData}
      categories={categories}
      selections={selections}
      addToOrder={addToOrder} />
  </div>
}

export default App;
