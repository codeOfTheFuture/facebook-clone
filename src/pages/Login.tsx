import { FormEvent, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  // Handle Sign In
  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();

    signInWithFacebook()
      .then(() => {
        console.log("Logged In", user);
      })
      .catch(() => {
        console.log("Problem Logging In");
      });
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <img
        className="object-contain my-8"
        src={Logo}
        alt="Logo"
        height={400}
        width={400}
      />

      <form onSubmit={handleSignIn}>
        <button
          className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer uppercase"
          type="submit">
          Login with FaceBook
        </button>
      </form>
    </div>
  );
};

export default Login;
