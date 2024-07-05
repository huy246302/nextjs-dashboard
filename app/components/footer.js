// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} Your App. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  