import { getTransientState, setInterior } from "./transientState.js";

export const DisplayInteriorOptions = () => {
    const html = `<select id="interior">
        <option value="" disabled selected>Choose an interior</option>
        <option value="0">Beige Fabric</option>
        <option value="1">Charcoal Fabric</option>
        <option value="2">White Leather</option>
        <option value="3">Black Leather</option>
    </select>`;

    return html;
}

// Interior dropdown event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "interior") {
        // Get text content
        const selectedOption = event.target.selectedOptions[0].textContent; 
        // Set transient state
        setInterior(selectedOption);

        const transientState = getTransientState();
        console.log(transientState);
    }
})