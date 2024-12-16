import React from 'react';
import { BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">BookShelf</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-200 transition-colors">Home</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Contact</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">About</a>
            <a href="#" className="bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-400 transition-colors">
              Add Book
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}