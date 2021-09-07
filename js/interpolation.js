function interpolate(xArray, yArray) {
    let interpolatedArray = Array.from(yArray);
    const noMeasureIndexes = searchNull(yArray);
    let interpolatedColor = [];

    let interpolation = {
        values: [],
        colors: []
    }

    interpolatedColor.length = 0;

    for (let i = 0; i < noMeasureIndexes.length; i++) {
        const previousDataIndex = searchPrevious(yArray, noMeasureIndexes[i]);
        const nextDataIndex = searchNext(yArray, noMeasureIndexes[i]);
        interpolatedArray[noMeasureIndexes[i]] = interpolatedValue(yArray, noMeasureIndexes[i], previousDataIndex, nextDataIndex, interpolatedColor, xArray);
    }

    //Correccion para inicio y fin de array sin valor
    for (let i = 0; i < interpolatedArray.length; i++) {
        if (isNaN(interpolatedArray[i])) {
            if (interpolatedArray[i + 1] == undefined) {
                interpolatedArray[i] = interpolatedArray[i - 1];
            } else {
                interpolatedArray[i] = interpolatedArray[i + 1];
            }
        }
    }
    interpolation.values = interpolatedArray;
    interpolation.colors = interpolatedColor;
    return interpolation;
}

function searchNull(array) {
    let nullArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'null') {
            nullArray.push(i);
        }
    }
    return nullArray;
}

function searchNaN(array){
    return array.filter(x => isNaN(x));
}

function searchPrevious(array, index) {
    for (let i = index; i >= 0; i--) {
        if (array[i] != 'null') {
            return i;
        }
    }
}

function searchNext(array, index) {
    for (let i = index; i < array.length; i++) {
        if (array[i] != 'null') {
            return i;
        }
    }
}

function interpolatedValue(array, index, previousIndex, nextIndex, interpolatedColor, xArray) {
    const tempTimestamp = xArray;
    const firstPonderation = tempTimestamp[nextIndex] - tempTimestamp[index];
    const secondPonderation = tempTimestamp[index] - tempTimestamp[previousIndex];
    const divisor = tempTimestamp[nextIndex] - tempTimestamp[previousIndex];
    const firstValue = parseFloat(array[previousIndex]);
    const secondValue = parseFloat(array[nextIndex]);
    let interpolation = (firstValue * firstPonderation + secondValue * secondPonderation) / divisor;
    interpolation = parseFloat(interpolation.toFixed(2));
    interpolatedColor[index] = 'red';
    return interpolation;
}