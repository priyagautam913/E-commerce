import { FaCcVisa } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* About Section */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold mb-3">About Velveta</h2>
          <p className="text-sm leading-relaxed text-white">
            Combining nature and science, we create skincare that nurtures your
            skin and respects the planet. Healthy, radiant skin starts here.
          </p>

          {/* Payment Icons */}
          <div className="flex space-x-4 mt-5 ">
            <span className="text-gray-500 hover:text-pink-600">
              <FaCcVisa size={30} />
            </span>
            <span className="text-gray-500 hover:text-pink-600">
              <FaRupeeSign size={30} />
            </span>
            <span className="text-gray-500 hover:text-pink-600">
              <FaShoppingCart size={30} />
            </span>
            <span className="text-gray-500 hover:text-pink-600">
              <FaMobileRetro size={30} />
            </span>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-medium mb-3  hover:text-pink-600 ">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="home" className="hover:text-pink-600">
                Home
              </a>
            </li>
            <li>
              <a href="about" className="hover:text-pink-600">
                About
              </a>
            </li>
            <li>
              <a href="shop" className="hover:text-pink-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Shop Single
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Blog Single
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                404
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Licensing
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-medium mb-3 hover:text-pink-600">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-600">
                All Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Cleansers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Lotions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Moisturizers
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-medium mb-3 hover:text-pink-600 ">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="contact" className="hover:text-pink-600">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Orders & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-300 pt-5 text-center text-sm text-gray-500">
        <p>
          © Made by{" "}
          <a href="#" className="text-pink-600 text-2xl hover:underline">
            Priya
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
