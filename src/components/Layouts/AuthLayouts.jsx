import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-black">{title}</h1>
        <p className="font-medium text-slate-700 mb-6">
          Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({type}) => {
  if (type === "login") {
    return (
      <p className="text-center text-sm mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="font-semibold text-slate-700">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center text-sm mt-5">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-slate-700">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
