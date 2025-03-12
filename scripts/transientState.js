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