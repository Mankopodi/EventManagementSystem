
import { AUTH_TOKEN } from "./tokens/constant";

export const getToken = () => {
    return localStorage.getItem(AUTH_TOKEN);
}

export const setToken = (Token) => {
    if(Token){
        localStorage.setItem(AUTH_TOKEN,Token)
    }
    
}

export const removeToken = () => {
    localStorage.removeItem(AUTH_TOKEN)
}