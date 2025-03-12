import { getTransientState, setPaint } from "./transientState.js";

export const DisplayPaintOptions = () => {
    const html = `<select id="paint">
        <option value="" disabled selected>Choose a paint color</option>
        <option value="0">Silver</option>
        <option value="1">Midnight Blue</option>
        <option value="2">Firebrick Red</option>
        <option value="3">Spring Green</option>
    </select>`;

    return html;
};

// Paints dropdown event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "paint") {
        // Get text content
        const selectedOption = event.target.selectedOptions[0].textContent; 
        // Set transient state
        setPaint(selectedOption);

        const transientState = getTransientState();
        console.log(transientState);
    }
})