import React, { useState, useEffect } from "react";
import firebase from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { dateString } from "./Date";

const entriesDB = firebase.firestore().collection("Entries");
const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function newEntry(e, newObj) {
    e.preventDefault();
    entriesDB
      .doc(newObj.id)
      .set(newObj)
      .catch((err) => alert(err));
    setContent("");
    setTitle("");
  }
  return (
    <>
      <div className="mt-10 mb-10 text-center">
        <h1 className="text-6xl font-semibold">Journal Entry</h1>
      </div>
      <div>
        <form>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            className=" mx-auto w-[30vw] flex appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-4 resize-none	"
            required
            placeholder="Entry Title"
          />

          <label className=" text-gray-700">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className=" mx-auto w-[30vw] flex appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-4 resize-none	"
              id="comment"
              placeholder="Enter your comment"
              required
              rows="5"
              cols="40"
            ></textarea>
            <button
              disabled={title.length < 1 || content.length < 1}
              onClick={(e) =>
                newEntry(e, {
                  title,
                  content,
                  id: uuidv4(),
                  date: dateString,
                })
              }
              type="submit"
              className={
                !title.length < 1 && !content.length < 1
                  ? "py-2 px-4 mx-auto w-[30vw] flex justify-center  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  mt-4"
                  : " py-2 px-4 mx-auto w-[30vw] flex justify-center bg-indigo-600  text-white  text-base font-semibold   rounded-lg  mt-4 opacity-50 cursor-not-allowed"
              }
            >
              Submit!
            </button>
          </label>
        </form>
      </div>
    </>
  );
};
export { entriesDB };
export default Home;
