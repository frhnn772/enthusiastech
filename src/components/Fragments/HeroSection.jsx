const HeroSection = () => {
  return (
    <div id="home" className="bg-primary w-full ">
      <div className="container">
        <div className="flex-row flex justify-between">
          {/* left */}
          <div className="w-1/2 mt-10">
            <h3 className="font-semibold text-2xl">Enthusiastech</h3>
            <h1 className="text-6xl font-bold ">Observe. Learn.</h1>
            <h1 className="text-6xl font-bold ">Modification.</h1>
            <p className="font-medium text-xl pb-10 py-4">
              Ketahuilah bahwa masih banyak ilmu di dunia ini yang belum kamu
              pelajari. Pengamatan yang Anda lakukan akan menjadi pengetahuan
              yang akan Anda kembangkan di kemudian hari. Mulai sekarang!
            </p>
            <a href="#" className="bg-acient px-16 py-2 rounded-md font-medium">
              Gabung
            </a>
          </div>
          {/* right */}
          <div className=" flex justify-center items-center">
            <a href="#">
              <img src="hero.svg" width={550} className="" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
