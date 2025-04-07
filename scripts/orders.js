import { saveOrder } from "./transientState.js";

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "orderButton") {
        saveOrder();
    }
}

export const PlaceOrderButton = () => {
    document.addEventListener("click", handlePlaceOrderClick);
    return "<button id='orderButton'>Place Order</button";
}

export const FetchAndDisplayOrders = async () => {
    try {
        const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheels&_expand=model");
        const orders = await response.json();

        const orderContainer = document.querySelector("#orders-container");

        const ordersHTML = orders.map((order) => {

            // Format prices as currency
            const paintPrice = order.paint.price.toLocaleString("en-US", { style: "currency", currency: "USD" });
            const interiorPrice = order.interior.price.toLocaleString("en-US", { style: "currency", currency: "USD" });
            const technologyPrice = order.technology.price.toLocaleString("en-US", { style: "currency", currency: "USD" });
            const wheelsPrice = order.wheels.price.toLocaleString("en-US", { style: "currency", currency: "USD" });

            const totalPrice = ((order.paint.price + order.interior.price + order.technology.price + order.wheels.price) * order.model.multiplier)
                .toLocaleString("en-US", { style: "currency", currency: "USD" });
        
        return `
            <div class="order">
                <p><strong>Order #${order.id}</strong></p>
                <p>Paint: ${order.paint.color} ${paintPrice}</p>
                <p>Interior: ${order.interior.fabric} ${interiorPrice}</p>
                <p>Technology: ${order.technology.package} ${technologyPrice}</p>
                <p>Wheels: ${order.wheels.style} ${wheelsPrice}</p>
                <p>Model: ${order.model.type}</p>
                <p>Total: ${totalPrice}</p>
            </div>
        `}).join("");

        orderContainer.innerHTML += ordersHTML;
    } catch (error) {
        console.log("Error fetching orders:", error);
    }
};