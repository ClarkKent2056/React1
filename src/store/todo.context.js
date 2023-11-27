import { createContext } from "react"
import id from "shortid";

export const dataToDo = [
    {
      text: "some text",
      isActive: false,
      id : id(),
    },
    {
      text: "new home",
      isActive: true,
      id : id()
    },
  ];

  

export const contextToDo = createContext(dataToDo)