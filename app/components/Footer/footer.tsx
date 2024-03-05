import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-4 mt-8">
      <div className="mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <p className="text-center text-sm lg:text-left">
          © 2024 Website Rating Anime By Kang Baso. All Rights Reserved.
        </p>
        <form className="mt-4 lg:mt-0 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full lg:w-auto bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
            required
          />
          <textarea
            placeholder="Message"
            className="px-4 py-2 w-full lg:w-auto bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 font-bold bg-primary text-accent2 rounded-lg hover:bg-accent2 hover:text-dark transition-colors focus:outline-none lg:mr-4"
          >
            Send
          </button>
        </form>
        <div className="flex space-x-4 lg:space-x-8">
          <Link href="#" className="text-gray-300 hover:text-accent lg:ml-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-300 hover:text-accent">
            Terms of Service
          </Link>
          <Link href="#" className="text-gray-300 hover:text-accent">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
