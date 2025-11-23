import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "./Input";
import Label from "./Label";

const AuthForm = ({ title, type }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-sm bg-white shadow-md rounded-xl p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-5 text-center">
          {title}
        </h1>

        <form className="space-y-4">
          {/* REGISTER: TAMBAHI FULL NAME */}
          {type === "register" && (
            <>
              <Label>Full Name</Label>
              <Input type="text" placeholder="Enter your name" />
            </>
          )}

          <Label>Email</Label>
          <Input type="email" placeholder="email@example.com" />

          <Label>Password</Label>
          <Input type="password" placeholder="****" />

          {/* REGISTER: CONFIRM PASSWORD */}
          {type === "register" && (
            <>
              <Label>Confirm Password</Label>
              <Input type="password" placeholder="****" />
            </>
          )}

          <Button>{title}</Button>
          <p className="text-sm text-gray-600 text-center">
            {type === "register"
              ? "Already have an account? "
              : "Don't have an account? "}
            <Link
              to={type === "register" ? "/" : "/register"}
              className="text-blue-500 font-medium"
            >
              {type === "register" ? "Login" : "Register"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
