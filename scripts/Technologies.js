import { getTransientState, setTechnology } from "./transientState.js";

export const DisplayTechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technology");
    const technologies = await response.json();

    let html = `<h2>Technologies</h2>`;
;   html += `<select id="technology">`;
    html += `<option value="0">Select a technology package</option>`;

    const arrayOfOptions = technologies.map( (technology) => {
        return `<option value="${technology.id}">${technology.technology}</option>`;
    })

    html += arrayOfOptions.join("");
    html += `</select>`;

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