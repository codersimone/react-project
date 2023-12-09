import React, { createContext, useState } from "react";
import { json } from "react-router-dom";

const Context = createContext();
export const ContextApi = (props) => {
  const [dictionary, setDictionary] = useState([]);
  fetch("http://itgirlschool.justmakeit.ru/api/words")
    .then((response) => response.json())

    .then((data) => {
      setDictionary(data);
    })
    .catch((err) => {
      console.log(err);
    });

  const addWord = (addNewWord) => {
    fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addWord),
    })
      .then((response) => console.log(response.json()))
      .catch((err) => console.log(err));
  };

  // const deleteWord = (id) => {
  //   console.log(id);
  //   fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
  //     method: "POST",
  //   })
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // };
  return (
    <Context.Provider value={{ dictionary, setDictionary, addWord }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
