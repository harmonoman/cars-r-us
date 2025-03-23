const transientState = {
    interior: null,
    paint: null,
    technology: null,
    wheels: null
}

// Setter functions
export const setInterior = (selectedInterior) => {
    transientState.interior = selectedInterior;
}

export const setPaint = (selectedPaint) => {
    transientState.paint = selectedPaint;
}

export const setTechnology = (selectedTechnology) => {
    transientState.technology = selectedTechnology;
}

export const setWheels = (selectedWheels) => {
    transientState.wheels = selectedWheels;
}

// Return transientState
export const getTransientState = () => {
    return structuredClone(transientState);
}

// Reset transientState
export const resetTransientState = () => {
    transientState.interior = null;
    transientState.paint = null;
    transientState.technology = null;
    transientState.wheels = null;
}

// PLace an order
export const saveOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transientState)
    } 

    try {
        const response = await fetch("http://localhost:8088/orders", postOptions);

        if (!response.ok) {
            throw new Error("Failed to place order!");
        }

        console.log("Order placed successfully!");
        
        resetTransientState();

        document.dispatchEvent(new CustomEvent("stateChanged"));

    } catch (error) {
        console.log("Error:", error);
    }
}