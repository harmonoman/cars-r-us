import { getTransientState, setInterior } from "./transientState.js";

export const DisplayInteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interior");
    const interiors = await response.json();

    let html = `<h2>Interiors</h2>`;

    html += `<select id="interior">`;
    html += `<option value="0">Select an interior</option>`;

    for(const interior of interiors) {
        html += `<option value=${interior.id}>${interior.interior}</option>`;
    }

    html += `</select>`;
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
});