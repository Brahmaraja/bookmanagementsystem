import React from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
import type { Book } from '../types';

export function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-8">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600 mb-2">by {book.author}</p>
            <p className="text-gray-500 mb-4">{book.genre}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {new Date(book.publishedDate).toLocaleDateString()}
              </span>
              <div className="flex gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                  <Eye className="h-5 w-5" />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
                  <Edit2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}