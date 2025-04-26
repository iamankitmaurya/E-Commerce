"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiFilter,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";

const categories = ["All", "Electronics", "Clothing", "Books", "Beauty"];
const ratings = [5, 4, 3, 2, 1];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <nav className="bg-gray-900 px-4 md:px-8 py-4 font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className="font-bold text-xl text-white tracking-wide">
            E-Commerce
          </div>
        </div>

        <ul
          className={`${
            isMenuOpen
              ? "absolute left-0 top-16 w-full bg-[#FFFBF0] shadow-lg"
              : "hidden"
          } md:flex md:static md:w-auto space-y-2 md:space-y-0 md:space-x-8 text-base font-medium`}
        >
          <Link href="/">
            <li className="px-4 py-2 hover:text-gray-600">Home</li>
          </Link>
          <Link href="/products">
            <li className="px-4 py-2 hover:text-gray-600">Products</li>
          </Link>
          <Link href="#">
            <li className="px-4 py-2 hover:text-gray-600">Contact</li>
          </Link>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-[#F7EDE4] rounded-full px-4 py-2 w-[400px] mr-4">
            <FiSearch className="text-gray-500 text-lg mr-2" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for products..."
              className="bg-transparent focus:outline-none text-sm placeholder-gray-500 text-black w-full"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-white border border-white px-2 py-1 rounded-md flex items-center gap-1 hover:bg-white hover:text-black transition"
          >
            <FiFilter />
            Filters
          </button>
          <FiShoppingCart className="text-2xl text-white cursor-pointer" />
          <FiUser className="text-2xl text-white cursor-pointer" />
        </div>
      </div>

      {showFilters && (
        <div className="bg-white mt-4 p-4 rounded-md shadow-md grid md:grid-cols-4 gap-4 text-black">
          <div>
            <label className="block mb-2 font-semibold">Price Range</label>
            <input
              type="range"
              min={0}
              max={1000}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-sm">Up to ₹{priceRange}</p>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Rating</label>
            <div className="flex gap-2 flex-wrap">
              {ratings.map((rate) => (
                <button
                  key={rate}
                  onClick={() => setSelectedRating(rate)}
                  className={`px-2 py-1 rounded border ${
                    selectedRating === rate
                      ? "bg-yellow-300 border-yellow-500"
                      : "bg-white"
                  }`}
                >
                  {rate} ★
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchText("");
                setPriceRange(1000);
                setSelectedCategory("All");
                setSelectedRating(0);
              }}
              className="w-full border border-red-400 text-red-500 px-2 py-1 rounded hover:bg-red-100"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
