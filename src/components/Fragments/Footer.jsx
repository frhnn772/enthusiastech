const Footer = () => {
  return (
    <div className="bg-secondary w-full pt-4 pb-8">
      <div className="container">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <a href="#">
              <img src="enthu.svg" className="w-5 " alt="" />
            </a>
            <h1 className="text-acient text-md font-semibold">Enthusiastech</h1>
          </div>
          <div className="flex gap-16">
            <a className="text-acient text-md font-semibold" href="#home">
              Home
            </a>
            <a className="text-acient text-md font-semibold" href="#about">
              About
            </a>
            <a className="text-acient text-md font-semibold" href="#news">
              News & Update
            </a>
            <a className="text-acient text-md font-semibold" href="#kelas">
              Kelas
            </a>
          </div>
          <div className="">
           {/* ini utk icon email yutub ig */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
