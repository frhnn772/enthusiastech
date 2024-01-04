const FiturSection = () => {
  const datafitur = [
    {
      id: 1,
      title: "Tonton Video",
      desc: "Beberapa video interaktif disediakan!",
      img: "img/thumbnail.jpg",
    },
    {
      id: 2,
      title: "Rangkuman",
      desc: "Ilustrasi dan teks yang mudah dibaca!",
      img: "img/thumbnail.jpg",
    },
    {
      id: 3,
      title: "Diskusi sesama pelajar",
      desc: "Saling berdiskusi melalui whatsapp, discord dan website Enthusiastech",
      img: "img/thumbnail.jpg",
    },
  ];
  return (
    <div className="bg-secondary w-full">
      <div className="container pt-14 pb-16 text-white">
        <h1 className="font-medium text-xl">Fitur Yang Tersedia</h1>
        <p>Tentukan cara belajar yang pas buatmu!</p>
        <div className="grid grid-cols-3 gap-5 mt-8">
          {datafitur.map((fitur) => (
            <div
              key={fitur.id}
              className="rounded-lg bg-gray-100/40 pt-4 px-8 h-56 relative"
            >
              <div className="flex items-center justify-between">
                <div className="">
                  <h2 className="font-semibold text-xl">{fitur.title}</h2>
                  <p className="text-xs me-8">{fitur.desc}</p>
                </div>
                <div className="text-acient">&gt;</div>
              </div>
              <div className="flex justify-center mt-4">
                <img
                  src={fitur.img}
                  className="w-60 absolute bottom-0"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FiturSection;
