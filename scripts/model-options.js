import { setModel } from "./transientState.js";

export const DisplayModelOptions = async () => {
    const models = await fetch ("http://localhost:8088/models").then(res => res.json());

    const optionsHTML = models.map((model) => {
        return `<input type="radio" name="model" value=${model.id} /> ${model.type}`;
}).join("");

return optionsHTML;
}

const handleModelChoice = (event) => {
    if (event.target.name === "model") {
        setModel(parseInt(event.target.value));
    }
}

document.addEventListener("change", handleModelChoice);