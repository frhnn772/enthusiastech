const KelasSection = () => {
  const datakelas = [
    {
      id: 1,
      img: "img/thumbnail.jpg",
      judul: "Belajar C++ untuk Pemula",
      talent: "Ucokk Heker",
    },
    {
      id: 2,
      img: "img/thumbnail.jpg",
      judul: "Dasar Pemograman",
      talent: "Riski Slebew",
    },
    {
      id: 3,
      img: "img/thumbnail.jpg",
      judul: "Tipe Data",
      talent: "Gak tau laa",
    },
    {
      id: 4,
      img: "img/thumbnail.jpg",
      judul: "Belajar C++ untuk Pemula",
      talent: "Ucokk Heker",
    },
    {
      id: 5,
      img: "img/thumbnail.jpg",
      judul: "Dasar Pemograman",
      talent: "Riski Slebew",
    },
    {
      id: 6,
      img: "img/thumbnail.jpg",
      judul: "Tipe Data",
      talent: "Gak tau laa",
    },
    {
      id: 7,
      img: "img/thumbnail.jpg",
      judul: "Belajar C++ untuk Pemula",
      talent: "Ucokk Heker",
    },
    {
      id: 8,
      img: "img/thumbnail.jpg",
      judul: "Dasar Pemograman",
      talent: "Riski Slebew",
    },
  ];
  const pilihanKelas = [
    {
      id: 1,
      kelas: "Kalkulus",
    },
    {
      id: 2,
      kelas: "Dasar Pemograman",
    },
    {
      id: 3,
      kelas: "Bahasa Indonesia",
    },
    {
      id: 4,
      kelas: "Bahasa Inggris",
    },
    {
      id: 5,
      kelas: "Pengenalan Teknologi Informasi",
    },
    {
      id: 6,
      kelas: "Pancasila",
    },
    {
      id: 7,
      kelas: "Organisasi Arsitektur dan Komputer",
    },
  ];

  return (
    <div id="kelas" className="bg-secondary w-full py-12">
      <div className="container">
        <div className="flex flex-col">
          <div className="text-primary">
            <h3 className="font-bold text-3xl py-1 ">Kelas</h3>
            <p className="text-lg pb-4">
              Beberapa teman yang akan berbagi ilmu
            </p>
          </div>
          <div className="flex pb-2">
            <input
              className=" rounded-full py-1 px-12 w-3/12 text-sm"
              type="text"
              placeholder="Cari materi yang anda inginkan"
            />
          </div>
          <div className="flex gap-4 py-4 overflow-x-auto overscroll-x-hidden ">
            {pilihanKelas.map((pilihanKelas) => (
              <div
                key={pilihanKelas.id}
                className="group whitespace-nowrap hover:bg-white border border-gray-400 rounded-full px-6 py-0.5 "
              >
                <span className="text-white text-sm group-hover:text-secondary">
                  {pilihanKelas.kelas}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 py-4">
            {datakelas.map((kelas) => (
              <div key={kelas.id} className="rounded-lg py-2">
                <img className="rounded-lg" src={kelas.img}></img>
                <div className="flex items-center gap-3 pt-2">
                  <img
                    className="rounded-full w-12"
                    src="img/user-img.jpg"
                    alt=""
                  />
                  <div className="text-primary">
                    <p>{kelas.judul}</p>
                    <span>{kelas.talent}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default KelasSection;
