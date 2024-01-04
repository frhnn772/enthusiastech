import { Link } from "react-router-dom";

const SignLayouts = (props) => {
  const { children, type } = props;
  return (
    <div
      className={`w-full h-screen flex flex-col ${
        type === "signin" ? "bg-[#D1DCFF]" : "bg-[#F5F5F5]"
      }`}
      style={{
        backgroundImage: 'url("hiasan.svg")',
        backgroundSize: "85%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="flex justify-between pt-4">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="enthusiastech.svg" width={22} alt="" />
              <span className="font-semibold">Enthusiastech</span>
            </div>
            <hr className="w-36 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div className="flex gap-2">
            {type === "signin" ? (
              <Link to={`/signup`} className="font-medium">
                Sign Up
              </Link>
            ) : (
              <Link to={`/signin`} className="font-medium">
                Sign In
              </Link>
            )}

            <button className="px-2 py-0.5 bg-slate-700 rounded-full font-medium text-white">
              Request Demo
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div
          className={`p-8 rounded-[3rem] max-w-md ${
            type === "signin" ? "bg-[#F5F5F5]" : "bg-[#E8E8E8]"
          }`}
        >
          <div className="flex flex-col">
            <h1 className="text-center font-bold text-4xl pb-4">
              {type === "signin" ? "Login" : "Register"}
            </h1>
            <p className="text-center font-semibold pb-8">
              {type === "signin"
                ? "Please, Enter Your Details To Get Sign In To Your Account"
                : null}
            </p>
            {children}
          </div>
        </div>
      </div>

      <span className="text-center pb-8 text-sm">
        Copyright @Enthusiastech 2023|Privacy Policy
      </span>
    </div>
  );
};
export default SignLayouts;
