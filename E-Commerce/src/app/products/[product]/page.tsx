// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import {
//   FiFilter,
//   FiMenu,
//   FiSearch,
//   FiShoppingCart,
//   FiUser,
//   FiX,
// } from "react-icons/fi";

// // Define product type
// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

// const categories = [
//   "All",
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing",
// ];
// const ratings = [5, 4, 3, 2, 1];

// export default function ProductsPage() {
//   // Use Product type for state variables
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filtered, setFiltered] = useState<Product[]>([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);
//   const [priceRange, setPriceRange] = useState(1000);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedRating, setSelectedRating] = useState(0);
//   const [searchText, setSearchText] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   // Fetch products
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setFiltered(data);
//         setIsLoading(false);
//       });
//   }, []);

//   // Filtering logic
//   const filterProducts = () => {
//     let filteredData = products;

//     if (searchText) {
//       filteredData = filteredData.filter((product) =>
//         product.title.toLowerCase().includes(searchText.toLowerCase())
//       );
//     }

//     if (selectedCategory !== "All") {
//       filteredData = filteredData.filter(
//         (product) => product.category === selectedCategory
//       );
//     }

//     if (selectedRating > 0) {
//       filteredData = filteredData.filter(
//         (product) => Math.round(product.rating.rate) === selectedRating
//       );
//     }

//     filteredData = filteredData.filter(
//       (product) => product.price <= priceRange
//     );

//     setFiltered(filteredData);
//   };

//   useEffect(() => {
//     filterProducts();
//   }, [searchText, selectedCategory, selectedRating, priceRange, products]);

//   // Clear filters function
//   const handleClearFilters = () => {
//     setSearchText("");
//     setPriceRange(1000);
//     setSelectedCategory("All");
//     setSelectedRating(0);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       {/* Navbar */}
//       <nav className="bg-gray-900 px-4 md:px-8 py-4 text-white">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <button
//               className="text-2xl md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <FiX /> : <FiMenu />}
//             </button>
//             <div className="font-bold text-xl">Ecommerce Store.pk</div>
//           </div>

//           <div className="hidden md:flex items-center bg-[#F7EDE4] rounded-full px-4 py-2 w-[400px] mr-4">
//             <FiSearch className="text-gray-500 text-lg mr-2" />
//             <input
//               type="text"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               placeholder="Search for products..."
//               className="bg-transparent focus:outline-none text-sm placeholder-gray-500 text-black w-full"
//             />
//           </div>

//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="border border-white px-2 py-1 rounded-md flex items-center gap-1 hover:bg-white hover:text-black transition"
//             >
//               <FiFilter />
//               Filters
//             </button>
//             <FiShoppingCart className="text-2xl cursor-pointer" />
//             <FiUser className="text-2xl cursor-pointer" />
//           </div>
//         </div>
//       </nav>

//       {/* Filters */}
//       {showFilters && (
//         <div className="bg-white mt-4 p-4 rounded-md shadow-md grid md:grid-cols-4 gap-4 text-black mx-4">
//           <div>
//             <label className="block mb-2 font-semibold">Price Range</label>
//             <input
//               type="range"
//               min={0}
//               max={1000}
//               value={priceRange}
//               onChange={(e) => setPriceRange(Number(e.target.value))}
//               className="w-full"
//             />
//             <p className="text-sm">Up to ₹{priceRange}</p>
//           </div>

//           <div>
//             <label className="block mb-2 font-semibold">Category</label>
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="w-full border rounded px-2 py-1"
//             >
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block mb-2 font-semibold">Rating</label>
//             <div className="flex gap-2 flex-wrap">
//               {ratings.map((rate) => (
//                 <button
//                   key={rate}
//                   onClick={() => setSelectedRating(rate)}
//                   className={`px-2 py-1 rounded border ${
//                     selectedRating === rate
//                       ? "bg-yellow-300 border-yellow-500"
//                       : "bg-white"
//                   }`}
//                 >
//                   {rate} ★
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-end">
//             <button
//               onClick={handleClearFilters}
//               className="w-full border border-red-400 text-red-500 px-2 py-1 rounded hover:bg-red-100"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Loading State */}
//       {isLoading ? (
//         <div className="flex justify-center items-center h-[calc(100vh-100px)]">
//           <div
//             className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
//             role="status"
//           >
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       ) : selectedProduct ? (
//         <div className="p-6 max-w-xl mx-auto">
//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="mb-4 text-blue-600 hover:underline"
//           >
//             ← Back to Products
//           </button>
//           <div className="bg-white p-6 rounded-md shadow-md">
//             <Image
//               src={selectedProduct.image}
//               alt={selectedProduct.title}
//               width={300}
//               height={300}
//               className="object-contain mx-auto h-64"
//             />
//             <h2 className="mt-4 text-2xl font-bold">{selectedProduct.title}</h2>
//             <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
//             <p className="mt-4 font-bold text-indigo-600 text-xl">
//               ₹{selectedProduct.price}
//             </p>
//             <p className="text-yellow-500 mt-1">
//               {selectedProduct.rating.rate} ★ ({selectedProduct.rating.count}{" "}
//               reviews)
//             </p>
//           </div>
//         </div>
//       ) : (
//         <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filtered.length === 0 ? (
//             <div className="col-span-4 text-center text-lg font-semibold">
//               No products found
//             </div>
//           ) : (
//             filtered.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white p-4 rounded-md shadow hover:shadow-lg transition"
//               >
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={200}
//                   height={200}
//                   className="object-contain mx-auto h-48 cursor-pointer"
//                   onClick={() => setSelectedProduct(product)}
//                 />
//                 <h2 className="mt-4 text-lg font-semibold">{product.title}</h2>
//                 <p className="text-sm text-gray-600 truncate">
//                   {product.description}
//                 </p>
//                 <p className="mt-2 font-bold text-indigo-600">
//                   ₹{product.price}
//                 </p>
//                 <p className="text-yellow-500">{product.rating.rate} ★</p>
//               </div>
//             ))
//           )}
//         </section>
//       )}
//     </div>
//   );
// }



"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FiFilter,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";

// Define product type
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const categories = [
  "All",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const ratings = [5, 4, 3, 2, 1];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtering logic wrapped inside useCallback
  const filterProducts = useCallback(() => {
    let filteredData = [...products];

    if (searchText) {
      filteredData = filteredData.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filteredData = filteredData.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedRating > 0) {
      filteredData = filteredData.filter(
        (product) => Math.round(product.rating.rate) === selectedRating
      );
    }

    filteredData = filteredData.filter(
      (product) => product.price <= priceRange
    );

    setFiltered(filteredData);
  }, [products, searchText, selectedCategory, selectedRating, priceRange]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  // Clear filters
  const handleClearFilters = () => {
    setSearchText("");
    setPriceRange(1000);
    setSelectedCategory("All");
    setSelectedRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-gray-900 px-4 md:px-8 py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="text-2xl md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <div className="font-bold text-xl">Ecommerce Store.pk</div>
          </div>

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

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="border border-white px-2 py-1 rounded-md flex items-center gap-1 hover:bg-white hover:text-black transition"
            >
              <FiFilter />
              Filters
            </button>
            <FiShoppingCart className="text-2xl cursor-pointer" />
            <FiUser className="text-2xl cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white mt-4 p-4 rounded-md shadow-md grid md:grid-cols-4 gap-4 text-black mx-4">
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
              onClick={handleClearFilters}
              className="w-full border border-red-400 text-red-500 px-2 py-1 rounded hover:bg-red-100"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center h-[calc(100vh-100px)]">
          <div
            className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
            role="status"
          ></div>
        </div>
      ) : selectedProduct ? (
        <div className="p-6 max-w-xl mx-auto">
          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-4 text-blue-600 hover:underline"
          >
            ← Back to Products
          </button>
          <div className="bg-white p-6 rounded-md shadow-md">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              width={300}
              height={300}
              className="object-contain mx-auto h-64"
            />
            <h2 className="mt-4 text-2xl font-bold">{selectedProduct.title}</h2>
            <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
            <p className="mt-4 font-bold text-indigo-600 text-xl">
              ₹{selectedProduct.price}
            </p>
            <p className="text-yellow-500 mt-1">
              {selectedProduct.rating.rate} ★ ({selectedProduct.rating.count} reviews)
            </p>
          </div>
        </div>
      ) : (
        <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-4 text-center text-lg font-semibold">
              No products found
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-md shadow hover:shadow-lg transition"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain mx-auto h-48 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                />
                <h2 className="mt-4 text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600 truncate">
                  {product.description}
                </p>
                <p className="mt-2 font-bold text-indigo-600">
                  ₹{product.price}
                </p>
                <p className="text-yellow-500">{product.rating.rate} ★</p>
              </div>
            ))
          )}
        </section>
      )}
    </div>
  );
}
