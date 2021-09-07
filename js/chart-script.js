
let dataTable;
let observator = {
    y: [],
    label: '',
    mean: false,
    median: false,
    mode: false,
    pointRadius: 2,
    x: ''
};

function defaultObservator() {
    observator = {
        y: [],
        label: '',
        mean: false,
        median: false,
        mode: false,
        pointRadius: 2,
        x: ''
    };
}


const meanCard = document.getElementById('mean-card');
meanCard.addEventListener('click', () => {
    if (!observator.mean) {
        horizontalDataset(meanDisplay.innerHTML, 'Media');
        observator.mean = true;
    } else {
        removeDataset('Media');
        observator.mean = false;
    }
});
const medianCard = document.getElementById('median-card');
medianCard.addEventListener('click', () => {
    if (!observator.median) {
        horizontalDataset(medianDisplay.innerHTML, 'Mediana', 'purple');
        observator.median = true;
    } else {
        removeDataset('Mediana');
        observator.median = false;
    }

});
const modeCard = document.getElementById('mode-card');
modeCard.addEventListener('click', () => {
    if (!observator.mode) {
        horizontalDataset(modeDisplay.innerHTML, 'Moda', 'orange');
        observator.mode = true;
    } else {
        removeDataset('Moda');
        observator.mode = false;
    }
});
const maxCard = document.getElementById('max-card');
maxCard.addEventListener('click', () => {
    if (!observator.max) {
        hiliteValue(max(observator.y), observator.y);
        dataChart.update();
        observator.max = true;
        observator.min = false;
    }
});
const minCard = document.getElementById('min-card');
minCard.addEventListener('click', () => {
    if (!observator.min) {
        hiliteValue(min(observator.y), observator.y);
        dataChart.update();
        observator.min = true;
        observator.max = false;
    }
});

const movingAverage = document.getElementById('moving-average');
const movigAverageNum = document.getElementById('moving-average-num');
movingAverage.addEventListener('change', () => {
    addMovingAverage()
});
movigAverageNum.addEventListener('change', () => {
    addMovingAverage()

});

const interpolation = document.getElementById('interpolation');
interpolation.addEventListener('change', () => {
    removeDataset(observator.label);

    if (interpolation.checked) {
        let interpolated = interpolate(observator.rawX, observator.y);
        addDataset(interpolated.values, observator.label, { fill: true, pointRadius: observator.pointRadius, borderWidth: 1.5 })
    } else {
        addDataset(observator.y, observator.label, { fill: true, pointRadius: observator.pointRadius, borderWidth: 1.5 });
    }
});

const linearregression = document.getElementById('linear-regression');
linearregression.addEventListener('change', () => {
    addLinearRegression()
});

function addLinearRegression() {
    removeDataset('Regresión lineal')
    if (linearregression.checked) {
        let interpolated = interpolate(observator.rawX, observator.y);
        addDataset(linearRegression(observator.rawX, interpolated.values).values, 'Regresión lineal', { pointRadius: 0, borderColor: 'red' })
    }
}

function addMovingAverage() {
    removeDataset('Moving average');
    if (movingAverage.checked) {
        const moveAve = centralMovingAverage(observator.y, movigAverageNum.value);
        addDataset(moveAve, 'Moving average', { pointRadius: 0, borderColor: 'indigo' });
    }
}

const meanDisplay = document.getElementById('mean-display');
const medianDisplay = document.getElementById('median-display');
const modeDisplay = document.getElementById('mode-display');
const maxDisplay = document.getElementById('max-display');
const minDisplay = document.getElementById('min-display');
const rangeDisplay = document.getElementById('range-display');
const samplesDisplay = document.getElementById('samples-display');
const samplesLostDisplay = document.getElementById('samples-lost-files');
let data = {
    datasets: []
};


const dataOptions = {
    type: 'line',
    data: data,
    responsive: false,
    options: {
        animation: {
            duration: 0
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    // displayFormats: timeFormat,
                    unit: 'day'
                }
            }
        }
    }
}

const datactx = document.getElementById('dataChart').getContext('2d');
const dataChart = new Chart(datactx, dataOptions);

const datasetSelect = document.getElementById('dataset-select');
datasetSelect.addEventListener('change', () => {
    defaultObservator();
    run(datasetSelect.value);
    if (interpolation.checked) {
        let interpolated = interpolate(observator.rawX, observator.y);
        removeDataset(observator.label);
        addDataset(interpolated.values, observator.label, { fill: true, pointRadius: observator.pointRadius, borderWidth: 1.5 })
    } else {
        removeDataset(observator.label);
        addDataset(observator.y, observator.label, { fill: true, pointRadius: observator.pointRadius, borderWidth: 1.5 });
    }
});

function checkSaved() {
    const saved = sessionStorage.getItem('saved');

    if (saved) {
        dataTable = JSON.parse(sessionStorage.getItem(saved));
        datasetSelect.innerHTML = '';
        dataTable.header.forEach(dataset => {
            const opt = document.createElement('option');
            opt.value = dataset;
            opt.innerHTML = dataset;
            datasetSelect.appendChild(opt);
        })
    }
}

run();
function run(dataset) {
    data.datasets.length = 0;
    checkSaved();
    let current = dataTable.defaultY;
    let name = dataTable.defaultYName;
    datasetSelect.value = dataTable.defaultYName;
    if (dataset) {
        current = dataTable.data[dataset];
        datasetSelect.value = dataset;
        name = dataset;
    }
    observator.y = current;
    observator.label = name;
    generateStats(current);
    data.labels = dataTable.x;
    observator.x = dataTable.x;
    observator.rawX = dataTable.rawX;

    if (!dataset) {
        addDataset(observator.y, observator.label, { fill: true, pointRadius: observator.pointRadius, borderWidth: 1.5 });
    }
    addLinearRegression();
    addMovingAverage()
}

function addDataset(points, label, options) {
    const newDataset = {
        data: points,
        label: label,
        fill: options.fill || false,
        pointRadius: options.pointRadius,
        borderWidth: options.borderWidth || 1,
        borderColor: options.borderColor || '#0d6efd',
    }

    data.datasets.push(newDataset);
    dataChart.update();
}

function removeDataset(label) {
    dataChart.data.datasets = dataChart.data.datasets.filter(function (obj) {
        return (obj.label != label);
    });
    dataChart.update()
}

function generateStats(current) {
    meanDisplay.innerHTML = mean(current);
    medianDisplay.innerHTML = median(current);
    modeDisplay.innerHTML = mode(current);
    maxDisplay.innerHTML = max(current);
    minDisplay.innerHTML = min(current);
    rangeDisplay.innerHTML = range(current);
    // samplesDisplay.innerHTML = samplesNumber(current);
    // samplesLostDisplay.innerHTML = samplesLostNumber(current);
}

function horizontalDataset(value, label, color) {
    const valueArray = new Array(dataTable.x.length).fill(value);
    const options = {
        pointRadius: 0,
        borderWidth: 1,
        borderColor: color || 'green',
        fill: false
    }

    addDataset(valueArray, label, options);
}

function hiliteValue(value, list) {
    let index = [];
    for (let i = 0; i < list.length; i++) {
        if (parseFloat(list[i]) == parseFloat(value)) {
            index.push(i);
        }
    }
    let color = new Array(list.length).fill('rgba(0, 0, 0, 0.1)');
    let radius = new Array(list.length).fill(observator.pointRadius);
    index.forEach(x => color[x] = 'orange');
    index.forEach(x => radius[x] = 6);
    data.datasets[0].pointBackgroundColor = color;
    data.datasets[0].pointRadius = radius;
}

