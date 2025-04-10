import { DisplayWheelOptions } from "./wheels.js";
import { DisplayPaintOptions } from "./Paints.js";
import { DisplayTechnologyOptions } from "./Technologies.js";
import { DisplayInteriorOptions } from "./Interiors.js";
import { FetchAndDisplayOrders, PlaceOrderButton } from "./orders.js";
import { DisplayModelOptions } from "./model-options.js";


const container = document.querySelector("#container");

const optionRenderers = [DisplayInteriorOptions, DisplayPaintOptions, DisplayTechnologyOptions, DisplayWheelOptions];

const render = async () => {
    const dropdowns = await Promise.all(optionRenderers.map(fn => fn()));
    const displayModelOptions = await DisplayModelOptions();
    const orderButtonHTML = PlaceOrderButton();


    container.innerHTML = `
        <div class="dropdown-container">
            ${dropdowns.map(dropdown => `<div class="dropdown">${dropdown}</div>`).join("")}
        </div>
        <div class="model-options">
            ${displayModelOptions}
        </div>
        <div id="orders-container">
            ${orderButtonHTML}
        </div>`;

    await FetchAndDisplayOrders();
}

render();

document.addEventListener("stateChanged", render);