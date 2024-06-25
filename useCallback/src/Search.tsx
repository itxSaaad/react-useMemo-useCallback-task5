interface SearchProps {
  onChange: (text: string) => void;
}

import { memo } from 'react';

export default memo(function Search({ onChange }: SearchProps) {
  console.log('Search rendered!');
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => onChange(e.target.value)}
    />
  );
});
