import { useState, useCallback } from 'react';

import './App.css';
import Search from './Search';

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

function App() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div className="tutorial">
      <div className="align-center mb-2 flex">
        <button
          onClick={() => {
            setUsers([...users].sort(() => Math.random() - 0.5));
          }}
        >
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
