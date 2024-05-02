import {Link} from 'react-router-dom'

function Header() {
  return (
    
        <nav className="  text-white  bg-[#2b3638] px-4 py-6">
          <ul className="flex justify-evenly ">
            <Link tp="/" ><li className="p-2 group hover:underline decoration-white-700 decoration-3 hover: rounded-lg hover:decoration-[#fcba03]">Home</li></Link>
            <Link to="/about"><li className="p-2 group hover:underline decoration-white-700 decoration-3 hover: rounded-lg hover:decoration-[#fcba03]">About</li></Link>
            <Link to="/project"><li className="p-2 group hover:underline decoration-white-700 decoration-3 hover: rounded-lg hover:decoration-[#fcba03]">Project</li></Link>

          </ul>
        </nav>
  );
}

export default Header;