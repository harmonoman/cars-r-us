import { getTransientState, setWheels } from "./transientState.js";

export const DisplayWheelOptions = () => {
    const html = `<select id="wheels">
        <option value="" disabled selected>Choose a wheel set</option>
        <option value="0">17-inch Pair Radial</option>
        <option value="1">17-inch Pair Radial Black</option>
        <option value="2">18-inch Pair Spoke Silver</option>
        <option value="3">18-inch Pair Spoke Black</option>
    </select>`;
    
    return html;
};

// Wheels dropdown event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "wheels") {
        // Get text content
        const selectedOption = event.target.selectedOptions[0].textContent; 
        // Set transient state
        setWheels(selectedOption);

        const transientState = getTransientState();
        console.log(transientState);
    }
})

