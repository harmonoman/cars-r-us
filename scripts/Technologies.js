import { getTransientState, setTechnology } from "./transientState.js";

export const DisplayTechnologyOptions = () => {
    const html = `<select id="technology">
        <option value="" disabled selected>Choose a technology package</option>
        <option value="0">Basic Package</option>
        <option value="1">Navigation Package</option>
        <option value="2">Visibility Package</option>
        <option value="3">Ultra Package</option>
    </select>`;

    return html;
}

// Technologies dropdown event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "technology") {
        // Get text content
        const selectedOption = event.target.selectedOptions[0].textContent; 
        // Set transient state
        setTechnology(selectedOption);

        const transientState = getTransientState();
        console.log(transientState);
    }
})