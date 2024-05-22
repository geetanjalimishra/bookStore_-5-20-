// import React from 'react'

import Login from "./Login";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    // console.log(data);
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert();
          toast.success("signup successful");
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
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box  dark:bg-slate-700 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border rounded-md outline-none w-80 px-3"
                  {...register("fullname", { required: true })}
                ></input>
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-900">
                    This field is required
                  </span>
                )}
              </div>
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
              <div className="mt-4 space-y-2 ">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border rounded-md outline-none  w-80 px-3"
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
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
