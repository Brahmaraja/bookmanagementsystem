import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SearchSection } from './components/SearchSection';
import { BookGrid } from './components/BookGrid';
import type { Book, SearchFilters } from './types';

// Mock data for demonstration
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    pages: 180,
    publishedDate: '1925-04-10',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    pages: 281,
    publishedDate: '1960-07-11',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Science',
    pages: 256,
    publishedDate: '1988-03-01',
    coverUrl: 'https://images.unsplash.com/photo-1629196914168-3a2652305f8f?auto=format&fit=crop&q=80&w=800',
  },
];

function App() {
  const [books, setBooks] = useState<Book[]>(mockBooks);

  const handleSearch = (filters: SearchFilters) => {
    let filteredBooks = [...mockBooks];
    
    if (filters.query) {
      filteredBooks = filteredBooks.filter(book => 
        book.title.toLowerCase().includes(filters.query!.toLowerCase()) ||
        book.author.toLowerCase().includes(filters.query!.toLowerCase())
      );
    }
    
    if (filters.genre) {
      filteredBooks = filteredBooks.filter(book => book.genre === filters.genre);
    }
    
    if (filters.author) {
      filteredBooks = filteredBooks.filter(book => book.author === filters.author);
    }
    
    setBooks(filteredBooks);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Discover Your Next Great Read
        </h1>
        <SearchSection onSearch={handleSearch} />
        <BookGrid books={books} />
      </main>
    </div>
  );
}

export default App;