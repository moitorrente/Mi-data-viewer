function parseArray(array) {
    return array.map(x => parseFloat(x)).filter(x => x).sort(compare);
}

function mean(array) {
    const filtered = parseArray(array);
    const mean = filtered.reduce((acc, item) => parseFloat(item) + acc, 0) / filtered.length;
    return parseFloat(mean.toFixed(2));
}

function compare(a, b) { return a - b }

function median(array) {
    const filtered = parseArray(array);
    const numsLen = filtered.length;
    if (numsLen % 2 === 0) return ((filtered[numsLen / 2 - 1] + filtered[numsLen / 2]) / 2).toFixed(2);
    return filtered[(numsLen - 1) / 2].toFixed(2);
}

function max(array) {
    const filtered = parseArray(array);
    return filtered[filtered.length - 1].toFixed(2);
}

function min(array) {
    const filtered = parseArray(array)
    return filtered[0].toFixed(2);
}

function range(array) {
    const filtered = parseArray(array);
    return (max(filtered) - min(filtered)).toFixed(2);
}

function mode(array) {
    let modes = [];
    let count = [];
    let i;
    let number;
    let maxIndex = 0;

    const filtered = parseArray(array);

    for (i = 0; i < filtered.length; i += 1) {
        number = filtered[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    }

    modes = modes.map(x => x.toFixed(2));

    if (modes.length > 3) {
        modes.splice(3);
    }
    return modes;
}

function standardDeviation(array) {
    const arrayMean = mean(array);
    const samples = array.length;
    let sum = 0;
    let sDeviation = 0;

    for (let i = 0; i < array.length; i++) {
        sum += ((array[i] - arrayMean) * (array[i] - arrayMean))
    }
    sDeviation = sum / (samples - 1);
    sDeviation = Math.sqrt(sDeviation);
    sDeviation = parseFloat(sDeviation.toFixed(2));
    return sDeviation;
}

function samplesNumber(array) {
    return array.length;
}

function samplesLostNumber(array) {
    const lost = array.filter(x => x === 'null')
    return lost.length;
}

function centralMovingAverage(input, samples) {
    const copiedInput = Array.from(input)
    copiedInput.reverse();
    const tempSamp = Math.floor(samples / 2);
    let moveAve = [];
    for (let i = 0; i < copiedInput.length + 1; i++) {
        let temp = mean(copiedInput.slice(i - tempSamp, i + tempSamp + 1));
        if (!isNaN(temp)) {
            moveAve.push(temp);
        }
    }
    moveAve.reverse();
    return moveAve;
}