import { createContext } from "react";

export const store = {
    theme : {
        color : 'grey',
        bg : 'grey'
    },
    user : {
        name : 'asdas'
    }  ,
    change  : {
        changeThemeBg : () => {}
    },

}

export const Context = createContext(store)