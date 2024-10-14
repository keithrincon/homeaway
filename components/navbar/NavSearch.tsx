import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const searchValue = searchParams.get('search')?.toString() || ''; // Extract value
  const [search, setSearch] = useState(searchValue);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchValue) {
      setSearch('');
    }
  }, [searchValue]); // Use the extracted value here

  return (
    <Input
      type='text'
      placeholder='find a property...'
      className='max-w-xs dark:bg-muted'
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}

export default NavSearch;
