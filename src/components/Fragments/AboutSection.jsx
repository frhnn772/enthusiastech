const AboutSection = () => {
  return (
    <div id="about" className="bg-primary w-full ">
      <div className="container">
        <div className="py-40">
          <h3 className="font-bold text-3xl py-8">About</h3>
          <div className="flex space-x-8">
            <div className="w-6/12">
              <div className="border border-gray-500 rounded-xl px-4 py-2">
                <h5 className="font-semibold">Apa sih itu Enthusiastech ?</h5>
                <p>
                  Enthusiastech adalah platform belajar online yang menyediakan
                  akses beberapa materi pembelajaran dalam berbagai bidang ilmu.
                  Beberapa orang yang berkomitmen untuk memberikan pengalaman
                  belajar yang interaktif, terstruktur, dan dapat diakses dari
                  mana saja.{" "}
                </p>
              </div>
            </div>
            <div className="w-6/12">
              <div className="border border-gray-500 rounded-xl px-4 py-2">
                <h5 className="font-semibold">Komunitas Pengguna</h5>
                <ul className="list-disc ms-7 me-8">
                  <li>
                    Media sosial : tersedia media sosial sebagai wadah untuk
                    update informasi tentang materi terbaru
                  </li>
                  <li>
                    Forum diskusi : Grup Whatsapp akan kami sediakan untuk
                    saling berbagi ilmu lorem
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
