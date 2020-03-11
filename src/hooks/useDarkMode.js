import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";


export const useDarkMode = (key,initialValue) => {
const [someValue, setSomeValue] = useLocalStorage('darkmode',initialValue)

    useEffect(() => {
        const darkModeSelect = document.querySelector("body")
        if(someValue === true){
            return darkModeSelect.classList.add("dark-mode")
        } else{
            return darkModeSelect.classList.remove("dark-mode")
        }


  }, [someValue]);

return [someValue, setSomeValue];
}
