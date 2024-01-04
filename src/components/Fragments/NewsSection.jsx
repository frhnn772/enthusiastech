const NewsSection = () => {
  return (
    <div id="news" className="bg-primary w-full">
      <div className="container py-10">
        <h1 className="font-bold text-2xl">News & Update</h1>
        <p className="text-lg">Berita terbaru akan terus terupdate disini!</p>
        <div className="grid grid-cols-3 gap-8 pt-8">
          <div className="bg-[#242424] text-primary pb-4">
            <span className="text-acient font font-semibold uppercase absolute px-8 py-4">
              News
            </span>
            <img src="img/news-img.png" className="w-full " alt="" />
            <div className="px-8 py-4">
              <span className="text-xs">November 21 2023</span>
              <h1 className="font-bold text-3xl py-4">What is Programming ?</h1>
              <p className="pb-6 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, provident ipsum fuga doloribus consequatur id
                repudiandae illum repellendus?
              </p>
              <a
                className="text-acient text-sm font-semibold uppercase"
                href="#"
              >
                Find Out More
              </a>
            </div>
          </div>
          <div className="bg-[#242424] text-primary pb-4">
            <span className="text-acient font font-semibold uppercase absolute px-8 py-4">
              News
            </span>
            <img src="img/news-img.png" className="w-full " alt="" />
            <div className="px-8 py-4">
              <span className="text-xs">November 21 2023</span>
              <h1 className="font-bold text-3xl py-4">What is Programming ?</h1>
              <p className="pb-6 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, provident ipsum fuga doloribus consequatur id
                repudiandae illum repellendus?
              </p>
              <a
                className="text-acient text-sm font-semibold uppercase"
                href="#"
              >
                Find Out More
              </a>
            </div>
          </div>
          <div className="bg-[#242424] text-primary pb-4">
            <span className="text-acient font font-semibold uppercase absolute px-8 py-4">
              News
            </span>
            <img src="img/news-img.png" className="w-full " alt="" />
            <div className="px-8 py-4">
              <span className="text-xs">November 21 2023</span>
              <h1 className="font-bold text-3xl py-4">What is Programming ?</h1>
              <p className="pb-6 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, provident ipsum fuga doloribus consequatur id
                repudiandae illum repellendus?
              </p>
              <a
                className="text-acient text-sm font-semibold uppercase"
                href="#"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
