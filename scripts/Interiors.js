import { setInterior } from "./transientState.js";

export const DisplayInteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors");
    const interiors = await response.json();

    let html = `<h2>Interiors</h2>`;

    html += `<select id="interior">`;
    html += `<option value="0">Select an interior</option>`;

    const arrayOfOptions = interiors.map( (interior) => {
        return `<option value="${interior.id}">${interior.fabric}</option>`;
    })

    html += arrayOfOptions.join("");
    html += `</select>`;

    return html;
}

// Interior dropdown event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "interior") {
        const selectedOption = parseInt(event.target.value);

        // Set transient state
        setInterior(selectedOption);
    }
});