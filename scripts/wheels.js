import { getTransientState, setWheels } from "./transientState.js";

export const DisplayWheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels");
    const wheels = await response.json();

    let html = `<h2>Wheels</h2>`;
    html += `<select id="wheels">`;
    html += `<option value="0">Select a wheel</option>`;

    const arrayOfOptions = wheels.map ( (wheel) => {
        return `<option value="${wheel.id}>${wheel.wheels}</option>`;
    })

    html += arrayOfOptions.join("");
    html += `</select>`;

    return html;
}

// Wheels dropdown event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "wheels") {
        // Get text content
        const selectedOption = event.target.selectedOptions[0].textContent; 
        // Set transient state
        setWheels(selectedOption);
    }
})

