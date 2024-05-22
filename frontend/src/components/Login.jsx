// import React from 'react'

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(data);
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("loggedin successful");
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded-md outline-none w-80 px-3"
                {...register("email", { required: true })}
              ></input>
              <br />
              {errors.email && (
                <span className="text-sm text-red-900">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="border rounded-md outline-none w-80 px-3"
                {...register("password", { required: true })}
              ></input>
              <br />
              {errors.password && (
                <span className="text-sm text-red-900">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
