import { 
  AiOutlineFacebook, 
  AiOutlineX, 
  AiOutlineGithub, 
  AiOutlineLinkedin, 
  AiOutlineInstagram,
  AiOutlineMail 
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
        
        {/* Company Name and Rights */}
        <p className="ml-4">
          &copy; {currentYear} Quorvex Institute. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-2 mr-4 sm:mt-0">
          <a href="https://www.facebook.com/Quorvex Institute" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <AiOutlineFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/kgomotsonkosi-l" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <AiOutlineLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <AiOutlineInstagram className="w-5 h-5" />
          </a>
          <a href="https://x.com" aria-label="X (formerly Twitter)" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <AiOutlineX className="w-5 h-5" />
          </a>
          <a href="https://github.com/Ymffuture" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <AiOutlineGithub className="w-5 h-5" />
          </a>
          <a href="mailto:futurekgomotso@gmail.com" aria-label="Email" className="hover:text-gray-300">
            <AiOutlineMail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
