"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const EditPage = () => {
  const initial = {
    name: "",
    role: "",
    text: "",
  };
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  const [user, setUser] = useState(initial);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:7000/employee/${id}`);
        setUser(res.data);
        console.log("Response:", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:7000/employee/${id}`,
        user
      );
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
          value={user.name}
          onChange={(e) => onValueChange(e)}
        />
        <label className="block w-full pb-1 text-sm mt-3 font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
          Role
        </label>
        <input
          className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          type="text"
          name="role"
          value={user.role}
          onChange={(e) => onValueChange(e)}
        />
        <label className="block w-full pb-1 text-sm mt-3 font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
          Text
        </label>
        <input
          className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          type="text"
          name="text"
          value={user.text}
          onChange={(e) => onValueChange(e)}
        />
        <button
          type="submit"
          className="block w-full text-sm mt-7 bg-teal-500 py-5 justify-center text-center font-medium text-gray-700 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditPage;
