"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const HomeTable = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const router = useRouter();

  const FetchData = async () => {
    try {
      const response = await axios.get("http://localhost:7000/employee");
      setAllEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const delete1User = (id) => {
    try {
      axios.delete(`http://localhost:7000/employee/${id}`);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="max-w-xlg m-auto px-5 mt-7">
      <a
        href="/create"
        className="justify-end bg-green-700 text-white py-2 px-4 "
      >
        Add Text
      </a>
      <table className="w-full table-collapse">
        <thead>
          <tr>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
              Name
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
              Role
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
              Text
            </th>
            <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-grey-light"></th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          {allEmployees.map((el) => (
            <tr
              key={el._id}
              className="group cursor-pointer hover:bg-grey-lightest"
            >
              <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                {el.name}
              </td>
              <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                {el.role}
              </td>
              <td className="text-sm p-3 border-t border-grey-light wrap ">
                {el.text}
              </td>
              <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible">
                <div className="invisible group-hover:visible ">
                  <button
                    className="no-underline text-blue-500"
                    onClick={() => router.push(`/edit-details/${el._id}`)}
                  >
                    Edit
                  </button>
                  <span className="text-grey mx-3">|</span>
                  <button
                    className="no-underline text-rose-500"
                    onClick={() => delete1User(el._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
