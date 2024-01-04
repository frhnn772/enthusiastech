import FormSignIn from "../components/Fragments/FormSignIn";
import SignLayouts from "../components/Layouts/SignLayouts";

const SignIn = () => {
  return (
    <SignLayouts type="signin">
     <FormSignIn/>
    </SignLayouts>
  );
};

export default SignIn;
