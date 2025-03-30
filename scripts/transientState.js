const transientState = {
    interiorId: 0,
    paintId: 0,
    technologyId: 0,
    wheelsId: 0
}

// Setter functions
export const setInterior = (selectedInterior) => {
    transientState.interiorId = selectedInterior;
}

export const setPaint = (selectedPaint) => {
    transientState.paintId = selectedPaint;
}

export const setTechnology = (selectedTechnology) => {
    transientState.technologyId = selectedTechnology;
}

export const setWheels = (selectedWheels) => {
    transientState.wheelsId = selectedWheels;
}

// Return transientState
export const getTransientState = () => {
    return structuredClone(transientState);
}

// Reset transientState
export const resetTransientState = () => {
    transientState.interiorId = 0;
    transientState.paintId = 0;
    transientState.technologyId = 0;
    transientState.wheelsId = 0;
}

// PLace an order
export const saveOrder = async () => {

    console.log(transientState)
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