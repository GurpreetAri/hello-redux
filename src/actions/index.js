export function setTechnology (text) {
    return {
        type: "SET_TECHNOLOGY",
        text: text
    }
}

//Alternatively
//const setTechnology = text => ({ type: "SET_TECHNOLOGY", text });
