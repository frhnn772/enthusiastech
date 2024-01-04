import Input from "../Elements/Input/Input";

const FormSignIn = () => {
  return (
    <>
      <form>
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            name="email/phone"
            id="email/phone"
            placeholder="Enter Email/Phone No"
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />

          <span className="font-semibold pt-2">Having Trouble In Sign In?</span>
          <button
            type="submit"
            className="bg-acient rounded-full py-1 font-bold"
          >
            Sign In
          </button>
        </div>
      </form>

      <span className="text-center text-sm py-4"> -Or Sign In With- </span>
      <div className="flex flex-row justify-center gap-5 pb-8">
        <a
          href="#"
          className="px-2 py-0.5 bg-[#E8E8E8] rounded-full flex flex-nowrap items-center gap-2 font-bold text-xs ring-1 ring-gray-500"
        >
          <img src="icon/pngwing2.svg" width={20} alt="" />
          Google
        </a>
        <a
          href="#"
          className="px-2 py-0.5 bg-[#E8E8E8] rounded-full flex flex-nowrap items-center gap-2 font-bold text-xs ring-1 ring-gray-500"
        >
          <img src="icon/pngwing1.svg" width={20} alt="" />
          Apple ID
        </a>
        <a
          href="#"
          className="px-2 py-0.5 bg-[#E8E8E8] rounded-full flex flex-nowrap items-center gap-2 font-bold text-xs ring-1 ring-gray-500"
        >
          <img src="icon/pngwing3.svg" width={20} alt="" />
          Facebook
        </a>
      </div>
      <p className="text-center text-sm">
        Don&apos;t Have Account?{" "}
        <a href="#" className="font-bold hover:underline">
          Request Now
        </a>
      </p>
      {/* {loginFailed && (
          <p className="text-red-500 text-center mt-5">{loginFailed}</p>
        )} */}
    </>
  );
};
export default FormSignIn;
