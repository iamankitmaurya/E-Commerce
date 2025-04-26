export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are your one-stop shop for the best products at unbeatable
              prices. Our mission is to provide quality products with excellent
              customer service.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
