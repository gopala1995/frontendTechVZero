"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Create = () => {
  const initial = {
    name: "",
    role: "",
    text: "",
  };
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const [user, setUser] = useState(initial);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/employee", user);
      setResponse(response.data);
      router.push("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="border justify-center items-center content-center bg-slate-200 p-10">
      <form onSubmit={handleSubmit} className="items-center content-center">
        <label className="block w-full pb-1 text-sm mt-3 font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
          Name
        </label>
        <input
          className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          type="text"
          name="name"
          onChange={(e) => onValueChange(e)}
        />
        <label className="block w-full pb-1 text-sm mt-3 font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
          Role
        </label>-
        <input
          className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          type="text"
          name="role"
          onChange={(e) => onValueChange(e)}
        />
        <label className="block w-full pb-1 text-sm mt-3 font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
          Text
        </label>
        <input
          className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          type="text"
          name="text"
          onChange={(e) => onValueChange(e)}
        />
        <button
          type="submit"
          className="block w-full text-sm mt-7 bg-teal-500 py-5 justify-center text-center font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Create;
