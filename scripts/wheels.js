import { setWheels } from "./transientState.js";

export const DisplayWheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels");
    const wheels = await response.json();

    let html = `<h2>Wheels</h2>`;
    html += `<select id="wheels">`;
    html += `<option value="0">Select a wheel</option>`;

    const arrayOfOptions = wheels.map ( (wheel) => {
        return `<option value="${wheel.id}">${wheel.style}</option>`;
    })

    html += arrayOfOptions.join("");
    html += `</select>`;

    return html;
}

// Wheels dropdown event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "wheels") {
        const selectedOption = parseInt(event.target.value);

        // Set transient state
        setWheels(selectedOption);
    }
})