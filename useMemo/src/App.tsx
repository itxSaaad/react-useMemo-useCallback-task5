import { useMemo, useState } from 'react';

import './App.css';
import { initialItems } from './utils';

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItems = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <>
      <div>
        <h1>Number of Items: {count}</h1>
        <h1>Selected Items: {selectedItems?.id}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}

export default App;
