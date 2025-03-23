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
        const response = await fetch("http://localhost:8088/orders");
        const orders = await response.json();

        const orderContainer = document.querySelector("#orders-container");

        const ordersHTML = orders.map(order => `
            <div class="order">
                <p><strong>Order #${order.id}</strong></p>
                <p>Paint: ${order.paint}</p>
                <p>Interior: ${order.interior}</p>
                <p>Technology: ${order.technology}</p>
                <p>Wheels: ${order.wheels}</p>
            </div>
        `).join("");

        orderContainer.innerHTML += ordersHTML;
    } catch (error) {
        console.log("Error fetching orders:", error);
    }
};