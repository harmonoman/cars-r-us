import { getTransientState, setPaint } from "./transientState.js";

export const DisplayPaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paint");
    const paints = await response.json();

    let html = `<h2>Paints</h2>`;

    html += `<select id="paint">`;
    html += `<option value="0">Select a paint</option> `;

    const arrayOfOptions = paints.map( (paint) => {
        return `<option value="${paint.id}">${paint.paint}</option>`;
    })

    html += arrayOfOptions.join("");
    html += `</select>`;

    return html;
}

// Paints dropdown event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "paint") {
        // Get text content
        const selectedOption = event.target.selectedOptions[0].textContent; 
        // Set transient state
        setPaint(selectedOption);
    }
})