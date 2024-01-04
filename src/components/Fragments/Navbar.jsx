import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-primary w-full ">
      <div className="container">
        <div className="flex justify-between items-center w-full h-20">
          <div className="flex gap-20">
            <a href="#">
              <img src="enthusiastech.svg" className="w-8 " alt="" />
            </a>
            <ul className="flex items-center gap-20 font-semibold ">
              <li className="">
                <a href="#about">About</a>
              </li>
              <li className="">
                <a href="#kelas">Kelas</a>
              </li>
            </ul>
          </div>
          <div className="font-semibold space-x-10">
            <Link to={`signup`}>Sign Up</Link>
            <Link to={`signin`} className="px-4 py-1 bg-acient rounded-2xl">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
