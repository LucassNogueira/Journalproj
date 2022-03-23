import React, { useEffect, useState } from "react";
import { entriesDB } from "./Home";
import EntryCard from "./EntryCard";

const Feed = ({ currentUser, setCurrentUser }) => {
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

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data.map((entry) => (
        <EntryCard entry={entry} />
      ))}
    </>
  );
};

export default Feed;
