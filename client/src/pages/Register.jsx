import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="transform scale-90">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
};
export default Register;
