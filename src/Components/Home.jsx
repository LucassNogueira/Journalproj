import React, { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const submitHandler = () => {
    setPosts([
      ...posts,
      {
        title: title,
        content: content,
      },
    ]);
    console.log(posts);
  };

  return (
    <>
      <div className="mt-10 mb-10 text-center">
        <h1 className="text-6xl font-semibold">Journal Entry</h1>
      </div>
      <div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className=" mx-auto w-[30vw] flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-4 resize-none	"
          name="email"
          placeholder="Entry Title"
        />

        <label className=" text-gray-700" for="name">
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className=" mx-auto w-[30vw] flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-4 resize-none	"
            id="comment"
            placeholder="Enter your comment"
            name="comment"
            rows="5"
            cols="40"
          ></textarea>
          <button
            onClick={submitHandler}
            type="button"
            className="py-2 px-4 mx-auto w-[30vw] flex  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  mt-4"
          >
            Submit!
          </button>
        </label>
      </div>
    </>
  );
};

export default Home;
