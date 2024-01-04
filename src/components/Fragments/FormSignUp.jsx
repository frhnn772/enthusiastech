import Input from "../Elements/Input/Input";

const FormSignUp = () => {
  return (
    <>
      <form>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Username"
            />
            <Input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <Input type="tel" name="tel" id="tel" placeholder="Phone Number" />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <Input
            type="password"
            name="re-password"
            id="re-password"
            placeholder="Re-Password"
          />
          <span className="px-1 pt-20 text-sm flex items-center gap-1 font-medium text-[#292A2E]">
            <Input type="checkbox" name="" id="" />I Agree To The{" "}
            <a href="#" className="text-blue-500 underline">
              {" "}
              Term And Conditions{" "}
            </a>
          </span>
          <button
            type="submit"
            className="bg-acient rounded-full py-1 font-bold"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
export default FormSignUp;
