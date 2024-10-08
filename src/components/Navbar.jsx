import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center bg-gray-800 py-5 px-7 capitalize text-white">
    <h1 className="text-lg cursor-pointer font-bold">logseq marketplace</h1>
    <ul className="flex">
      <li><Link to="/" className="text-1xl mx-3 hover:border-b-2">plugins</Link></li>
      <li><Link to="/themes" className="text-1xl mx-3 hover:border-b-2">themes</Link></li>
    </ul>
  </nav>
);

export default Navbar;
