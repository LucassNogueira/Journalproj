import React, { useState } from "react";
import { entriesDB } from "./Home";
const EditEntry = ({ entry, setEdit }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  function editEntry(e, editedEntry) {
    e.preventDefault();
    entriesDB
      .doc(editedEntry.id)
      .update(editedEntry)
      .catch((err) => console.log(err));
    setEdit(false);
  }
  return (
    <div className="pb-6 pt-4 bg-inherit">
      Edit This Entry
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        type="text"
        className=" mx-auto w-[30vw] flex appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-4 resize-none	"
        required
        placeholder={entry.title}
      />
      <label className=" text-gray-700">
        <textarea
          onChange={(e) => setNewContent(e.target.value)}
          className=" mx-auto w-[30vw] flex appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-4 resize-none	"
          id="comment"
          placeholder={entry.content}
          required
          rows="5"
          cols="40"
        ></textarea>
        <button
          disabled={newTitle.length < 1 || newContent.length < 1}
          onClick={(e) =>
            editEntry(e, {
              title: newTitle,
              content: newContent,
              id: entry.id,
              date: entry.date,
            })
          }
          type="submit"
          className={
            !newTitle.length < 1 && !newContent.length < 1
              ? " py-2 px-4 mx-auto w-[20vw] flex  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  mt-4"
              : " py-2 px-4 mx-auto w-[20vw] flex justify-center bg-indigo-600  text-white  text-base font-semibold   rounded-lg  mt-4 opacity-50 cursor-not-allowed"
          }
        >
          Save Changes
        </button>
      </label>
    </div>
  );
};

export default EditEntry;
