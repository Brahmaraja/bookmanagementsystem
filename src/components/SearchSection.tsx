import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { SearchFilters } from '../types';

const genres = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Fantasy'];
const authors = ['J.K. Rowling', 'George R.R. Martin', 'Stephen King', 'Jane Austen'];

export function SearchSection({ onSearch }: { onSearch: (filters: SearchFilters) => void }) {
  const [filters, setFilters] = useState<SearchFilters>({
    genre: '',
    author: '',
    query: '',
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={filters.query}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            />
          </div>
          <select
            className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={filters.genre}
            onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={filters.author}
            onChange={(e) => setFilters({ ...filters, author: e.target.value })}
          >
            <option value="">All Authors</option>
            {authors.map((author) => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>
          <button
            onClick={() => onSearch(filters)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition-colors flex items-center gap-2"
          >
            <Search className="h-5 w-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}