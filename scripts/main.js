import { DisplayWheelOptions } from "./wheels.js";
import { DisplayPaintOptions } from "./Paints.js";
import { DisplayInteriorOptions } from "./Interiors.js";
import { DisplayTechnologyOptions } from "./Technologies.js";
import { getTransientState } from "./transientState.js";


const container = document.querySelector("#container");

const optionRenderers = [DisplayInteriorOptions, DisplayPaintOptions, DisplayTechnologyOptions, DisplayWheelOptions];

const render = () => {
    const html = `<div class="dropdown-container">
    ${optionRenderers.map(fn => `<div class="dropdown">${fn()}</div>`).join("")}
</div>`;
    container.innerHTML = html;
}

render();