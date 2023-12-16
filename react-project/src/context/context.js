import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const Context = createContext();
export const ContextApi = (props) => {
  const [dictionary, setDictionary] = useState([]);
  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((data) => {
        setDictionary(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addWord = (addNewWord) => {
    fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewWord),
    })
      .then((response) => {
        console.log("Response:", response);
        console.log("Response Status:", response.status);
        if (response.status === 0) {
          console.log("Word added successfully");
        } else {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      })
      .then((data) => {
        dictionary.push(addNewWord);
        setDictionary([...dictionary]);
      })
      .catch((err) => {
        console.error("Error during the fetch operation:", err.message);
      });
  };

  const deleteWord = (id) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed");
        }
        const newDictionary = [...dictionary].filter(
          (object) => object.id !== id
        );
        setDictionary(newDictionary);
      })
      .catch((err) => console.log(err));
  };

  const editWord = (object) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${object.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Context.Provider
      value={{ dictionary, setDictionary, addWord, deleteWord, editWord }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
