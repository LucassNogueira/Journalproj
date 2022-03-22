import React, { useEffect, useState } from "react";
import { entriesDB } from "./Home";
import Trash from "./svg/Trash";
import Edit from "./svg/Edit";
const Feed = () => {
  const [data, setData] = useState([]);
  function getData() {
    entriesDB.onSnapshot((querySnapshot) => {
      const entires = [];
      querySnapshot.forEach((doc) => {
        entires.push(doc.data());
      });
      setData(entires);
    });
  }
  function deleteEntry(entry) {
    entriesDB
      .doc(entry.id)
      .delete()
      .catch((err) => alert(err));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data.map((entry) => (
        <div
          key={entry.id}
          className=" relative w-full mx-auto my-10 max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50"
        >
          <div className="w-full">
            <p className=" text-indigo-500 bg-white font-bold text-center text-2xl">
              {entry.title}
            </p>
          </div>
          <br />
          <div className="w-full mb-8">
            <p className="text-sm text-gray-600 bg-white dark:text-gray-100 text-center px-1">
              {entry.content}
            </p>
          </div>
          <p className="text-sm text-gray-600 bg-white dark:text-gray-100 text-center">
            {entry.date}
          </p>
          <div className=" text-indigo-500 bg-white font-bold text-center text-2xl">
            <button
              onClick={() => deleteEntry(entry)}
              className=" absolute bottom-2 left-6"
            >
              <Trash />
            </button>
            <button className=" absolute bottom-2 right-6">
              <Edit />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Feed;
