import axios from "axios";

export const getDialogues = () => {
    return axios.get("data/dialogues.json", {headers: {'Access-Control-Allow-Origin': '*'}});
}

export const getMessages = () => {
    return axios.get("data/messages.json", {headers: {'Access-Control-Allow-Origin': '*'}});
}