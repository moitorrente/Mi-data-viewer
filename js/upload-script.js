const uploadBodyBtn = document.getElementById('upload-body-btn');
const uploadBody = document.getElementById('upload-body');
const bodyUploaded = document.getElementById('body-uploaded');
const filenameBody = document.getElementById('filename-body');
const bodyTableBtn = document.getElementById('body-table');
const bodyChartBtn = document.getElementById('body-chart');

const uploadActivityBtn = document.getElementById('upload-activity-btn');
const uploadActivity = document.getElementById('upload-activity');
const activityUploaded = document.getElementById('activity-uploaded');
const filenameActivity = document.getElementById('filename-activity');
const activityTableBtn = document.getElementById('activity-table');
const activityChartBtn = document.getElementById('activity-chart');

const uploadActivityMinuteBtn = document.getElementById('upload-activity-minute-btn');
const uploadActivityMinute = document.getElementById('upload-activity-minute');
const activityMinuteUploaded = document.getElementById('activity-minute-uploaded');
const filenameActivityMinute = document.getElementById('filename-activity-minute');
const activityMinuteTableBtn = document.getElementById('activity-minute-table');
const activityMinuteChartBtn = document.getElementById('activity-minute-chart');

const uploadActivityStageBtn = document.getElementById('upload-activity-stage-btn');
const uploadActivityStage = document.getElementById('upload-activity-stage');
const activityStageUploaded = document.getElementById('activity-stage-uploaded');
const filenameActivityStage = document.getElementById('filename-activity-stage');
const activityStageTableBtn = document.getElementById('activity-stage-table');
const activityStageChartBtn = document.getElementById('activity-stage-chart');

const uploadHeartrateBtn = document.getElementById('upload-heartrate-btn');
const uploadHeartrate = document.getElementById('upload-heartrate');
const heartrateUploaded = document.getElementById('heartrate-uploaded');
const filenameHeartrate = document.getElementById('filename-heartrate');
const heartrateTableBtn = document.getElementById('heartrate-table');
const heartrateChartBtn = document.getElementById('heartrate-chart');

const uploadHeartrateAutoBtn = document.getElementById('upload-heartrate-auto-btn');
const uploadHeartrateAuto = document.getElementById('upload-heartrate-auto');
const heartrateAutoUploaded = document.getElementById('heartrate-auto-uploaded');
const filenameHeartrateAuto = document.getElementById('filename-heartrate-auto');
const heartrateAutoTableBtn = document.getElementById('heartrate-auto-table');
const heartrateAutoChartBtn = document.getElementById('heartrate-auto-chart');

const uploadSportBtn = document.getElementById('upload-sport-btn');
const uploadSport = document.getElementById('upload-sport');
const sportUploaded = document.getElementById('sport-uploaded');
const filenameSport = document.getElementById('filename-sport');
const sportTableBtn = document.getElementById('sport-table');
const sportChartBtn = document.getElementById('sport-chart');

const uploadSleepBtn = document.getElementById('upload-sleep-btn');
const uploadSleep = document.getElementById('upload-sleep');
const sleepUploaded = document.getElementById('sleep-uploaded');
const filenameSleep = document.getElementById('filename-sleep');
const sleepTableBtn = document.getElementById('sleep-table');
const sleepChartBtn = document.getElementById('sleep-chart');

const deleteAllBtn = document.getElementById('delete-all');
deleteAllBtn.addEventListener('click', () => {
    sessionStorage.clear();
    checkSaved();
});

const autoUploadBtn = document.getElementById('auto-upload-btn');
const autoUpload = document.getElementById('auto-upload')
autoUploadBtn.addEventListener('click', () => {
    autoUpload.click();
});

autoUpload.addEventListener('change', (event) => {
    const fileList = event.target.files;
    const equival = {
        'ACTIVITY_MINUTE_': 'activity-minute',
        'ACTIVITY_STAGE': 'activity-stage',
        'ACTIVITY_': 'activity',
        'BODY_': 'body',
        'HEARTRATE_': 'heartrate',
        'HEARTRATE_AUTO_': 'heartrate-auto',
        'SLEEP_': 'sleep',
        'SPORT_': 'sport'
    }

    Object.entries(fileList).forEach((file, i) => {
        let type = Object.entries(equival).filter(x => {
            if (file[1].name.startsWith(x[0])) {
                return x[1];
            }
        }).filter(x => x);
        getAsText(fileList[i], type[0][1]);
        checkSaved();
    });
});



uploadBodyBtn.addEventListener('click', () => {
    uploadBody.click();
});

uploadBody.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0], 'body');
});

filenameBody.addEventListener('click', () => {
    uploadBody.click();
});

uploadActivityBtn.addEventListener('click', () => {
    uploadActivity.click();
});

uploadActivity.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0], 'activity');
});

filenameActivity.addEventListener('click', () => {
    uploadActivity.click();
});

uploadActivityMinuteBtn.addEventListener('click', () => {
    uploadActivityMinute.click();
});

uploadActivityMinute.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0], 'activity-minute');
});

filenameActivityMinute.addEventListener('click', () => {
    uploadActivityMinute.click();
});

uploadActivityStageBtn.addEventListener('click', () => {
    uploadActivityStage.click();
});

uploadActivityStage.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0], 'activity-stage');
});

filenameActivityStage.addEventListener('click', () => {
    uploadActivityStage.click();
});

uploadHeartrateBtn.addEventListener('click', () => {
    uploadHeartrate.click();
});

uploadHeartrate.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0], 'heartrate');
});

filenameHeartrate.addEventListener('click', () => {
    uploadHeartrate.click();
});

uploadHeartrateAutoBtn.addEventListener('click', () => {
    uploadHeartrateAuto.click();
});

uploadHeartrateAuto.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0], 'heartrate-auto');
});

filenameHeartrateAuto.addEventListener('click', () => {
    uploadHeartrateAuto.click();
});

uploadSleepBtn.addEventListener('click', () => {
    uploadSleep.click();
});

uploadSleep.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0], 'sleep');
});

filenameSleep.addEventListener('click', () => {
    uploadSleep.click();
});
uploadSportBtn.addEventListener('click', () => {
    uploadSport.click();
});

uploadSport.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0], 'sport');
});

filenameSport.addEventListener('click', () => {
    uploadSport.click();
});

bodyTableBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'body');
    window.location.href = "./table-display.html";
});

bodyChartBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'body');
    window.location.href = "./chart.html";
});

activityTableBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'activity');
    window.location.href = "./table-display.html";
});

activityChartBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'activity');
    window.location.href = "./chart.html";
});

activityMinuteTableBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'activity-minute');
    window.location.href = "./table-display.html";
});

activityMinuteChartBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'activity-minute');
    window.location.href = "./chart.html";
});
activityStageTableBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'activity-stage');
    window.location.href = "./table-display.html";
});

activityStageChartBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'activity-stage');
    window.location.href = "./chart.html";
});
heartrateTableBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'heartrate');
    window.location.href = "./table-display.html";
});

heartrateChartBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'heartrate');
    window.location.href = "./chart.html";
});
heartrateAutoTableBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'heartrate-auto');
    window.location.href = "./table-display.html";
});

heartrateAutoChartBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'heartrate-auto');
    window.location.href = "./chart.html";
});

sleepTableBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'sleep');
    window.location.href = "./table-display.html";
});

sleepChartBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'sleep');
    window.location.href = "./chart.html";
});
sportTableBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'sport');
    window.location.href = "./table-display.html";
});

sportChartBtn.addEventListener('click', () => {
    sessionStorage.setItem('saved', 'sport');
    window.location.href = "./chart.html";
});

checkSaved();

function getAsText(fileToRead, type) {
    const reader = new FileReader();
    reader.readAsText(fileToRead);
    reader.onload = (event) => {
        const file = event.target.result;
        const obj = parse(file, fileToRead, type);
        const alert = document.getElementById('alert');
        alert.classList.add('hide');
        try {
            sessionStorage.setItem(type, JSON.stringify(obj));
        } catch (e) {
            alert.innerHTML = e;
            alert.classList.remove('hide')
        }
        checkSaved();
    };
    reader.onerror = errorHandler;
}

function errorHandler(evt) {
    if (evt.target.error.name == 'NotReadableError') {
        alert('No se puede leer el fichero');
    } else {
        alert(evt);
    }
}

const bodyOptions = {
    type: 'body',
    x: 'time'
}

const xAxis = {
    'body': 'time',
    'activity': 'date',
    'activity-stage': 'date',
    'heartrate': 'date',
    'sleep': 'date',
    'sport': 'startTime'
}

const yAxis = {
    'body': 'weight',
    'activity': 'steps',
    'activity-stage': 'distance',
    'heartrate': 'heartrate',
    'sleep': 'deepSleepTime',
    'sport': 'distance'
}

function parse(file, fileProperties, type) {
    let obj = {};
    [header, ...data] = file.split('\n');
    obj.header = header.split(',');

    if (type == 'heartrate') {
        obj.header = ['date', 'heartrate'];
    }

    let variables = obj.header.reduce((a, v) => ({ ...a, [v]: 0 }), {});

    data = data.map(x => x.split(','));
    const aux = data[0].map((_, colIndex) => data.map(row => row[colIndex])).map(x => x.filter(x => x));

    for (let i = 0; i < obj.header.length; i++) {
        variables[obj.header[i]] = aux[i];
    }

    obj.rawX = variables[xAxis[type]];


    if(type=='heartrate'){
        if (variables.date) variables.date = variables.date.map(timestamp => moment.unix(timestamp).format());
    }
 
    variables.timestamp = variables.time;
    if (variables.lastSyncTime) variables.lastSyncTime = variables.lastSyncTime.map(timestamp => moment.unix(timestamp).format());
    //if (variables.timestamp) variables.timestamp = variables.timestamp.map(timestamp => moment.unix(timestamp).format());
    if (variables.start) variables.start = variables.start.map(timestamp => moment.unix(timestamp).format());
    if (variables.stop) variables.stop = variables.stop.map(timestamp => moment.unix(timestamp).format());
    if (variables.startTime) variables.startTime = variables.startTime.map(timestamp => moment.unix(timestamp).format());

    obj.x = variables[xAxis[type]];
    obj.defaultY = variables[yAxis[type]];
    obj.defaultYName = yAxis[type];

    obj.data = variables;
    obj.name = fileProperties.name;
    return obj;
}

function checkSaved() {
    const body = sessionStorage.getItem('body');
    const activity = sessionStorage.getItem('activity');
    const activityMinute = sessionStorage.getItem('activity-minute');
    const activityStage = sessionStorage.getItem('activity-stage');
    const heartrate = sessionStorage.getItem('heartrate');
    const heartrateAuto = sessionStorage.getItem('heartrate-auto');
    const sleep = sessionStorage.getItem('sleep');
    const sport = sessionStorage.getItem('sport');

    let count = 0;
    body ? count++ : count;
    activity ? count++ : count;
    activityMinute ? count++ : count;
    activityStage ? count++ : count;
    heartrate ? count++ : count;
    heartrateAuto ? count++ : count;
    sleep ? count++ : count;
    sport ? count++ : count;

    const activityCard = document.getElementById('activity-card');
    const activityMinuteCard = document.getElementById('activity-minute-card');
    const bodyCard = document.getElementById('body-card');
    const activityStageCard = document.getElementById('activity-stage-card');
    const heartrateCard = document.getElementById('heartrate-card');
    const heartrateAutoCard = document.getElementById('heartrate-auto-card');
    const sleepCard = document.getElementById('sleep-card');
    const sportCard = document.getElementById('sport-card');

    if (body) {
        uploadBodyBtn.classList.add('hide');
        bodyUploaded.classList.remove('hide');
        bodyCard.classList.remove('bg-red');
        bodyCard.classList.add('bg-blue');
        filenameBody.innerHTML = JSON.parse(body).name;
    } else {
        uploadBodyBtn.classList.remove('hide');
        bodyUploaded.classList.add('hide');
        bodyCard.classList.add('bg-red');
        bodyCard.classList.remove('bg-blue')
    }

    if (activity) {
        uploadActivityBtn.classList.add('hide');
        activityUploaded.classList.remove('hide');
        activityCard.classList.remove('bg-red');
        activityCard.classList.add('bg-blue');
        filenameActivity.innerHTML = JSON.parse(activity).name;
    } else {
        uploadActivityBtn.classList.remove('hide');
        activityUploaded.classList.add('hide');
        activityCard.classList.add('bg-red');
        activityCard.classList.remove('bg-blue')
    }
    if (activityMinute) {
        uploadActivityMinuteBtn.classList.add('hide');
        activityMinuteUploaded.classList.remove('hide');
        activityMinuteCard.classList.remove('bg-red');
        activityMinuteCard.classList.add('bg-blue');
        filenameActivityMinute.innerHTML = JSON.parse(activityMinute).name;
    } else {
        uploadActivityMinuteBtn.classList.remove('hide');
        activityMinuteUploaded.classList.add('hide');
        activityMinuteCard.classList.add('bg-red');
        activityMinuteCard.classList.remove('bg-blue')
    }
    if (activityStage) {
        uploadActivityStageBtn.classList.add('hide');
        activityStageUploaded.classList.remove('hide');
        activityStageCard.classList.remove('bg-red');
        activityStageCard.classList.add('bg-blue');
        filenameActivityStage.innerHTML = JSON.parse(activityStage).name;
    } else {
        uploadActivityStageBtn.classList.remove('hide');
        activityStageUploaded.classList.add('hide');
        activityStageCard.classList.add('bg-red');
        activityStageCard.classList.remove('bg-blue')
    }
    if (heartrate) {
        uploadHeartrateBtn.classList.add('hide');
        heartrateUploaded.classList.remove('hide');
        heartrateCard.classList.remove('bg-red');
        heartrateCard.classList.add('bg-blue');
        filenameHeartrate.innerHTML = JSON.parse(heartrate).name;
    } else {
        uploadHeartrateBtn.classList.remove('hide');
        heartrateUploaded.classList.add('hide');
        heartrateCard.classList.add('bg-red');
        heartrateCard.classList.remove('bg-blue')
    }
    if (heartrateAuto) {
        uploadHeartrateAutoBtn.classList.add('hide');
        heartrateAutoUploaded.classList.remove('hide');
        heartrateAutoCard.classList.remove('bg-red');
        heartrateAutoCard.classList.add('bg-blue');
        filenameHeartrateAuto.innerHTML = JSON.parse(heartrateAuto).name;
    } else {
        uploadHeartrateAutoBtn.classList.remove('hide');
        heartrateAutoUploaded.classList.add('hide');
        heartrateAutoCard.classList.add('bg-red');
        heartrateAutoCard.classList.remove('bg-blue')
    }
    if (sleep) {
        uploadSleepBtn.classList.add('hide');
        sleepUploaded.classList.remove('hide');
        sleepCard.classList.remove('bg-red');
        sleepCard.classList.add('bg-blue');
        filenameSleep.innerHTML = JSON.parse(sleep).name;
    } else {
        uploadSleepBtn.classList.remove('hide');
        sleepUploaded.classList.add('hide');
        sleepCard.classList.add('bg-red');
        sleepCard.classList.remove('bg-blue')
    }
    if (sport) {
        uploadSportBtn.classList.add('hide');
        sportUploaded.classList.remove('hide');
        sportCard.classList.remove('bg-red');
        sportCard.classList.add('bg-blue');
        filenameSport.innerHTML = JSON.parse(sport).name;
    } else {
        uploadSportBtn.classList.remove('hide');
        sportUploaded.classList.add('hide');
        sportCard.classList.add('bg-red');
        sportCard.classList.remove('bg-blue')
    }

    const storage = getsessionStorageSize();

    const storageSize = document.getElementById('storage-size');
    storageSize.innerHTML = `${storage}MB/10MB`;
    const storagePercentage = document.getElementById('storage-percentage');
    storagePercentage.style.width = `${storage / 10 * 100}%`;

    const uploadedFiles = document.getElementById('uploaded-files');
    uploadedFiles.innerHTML = `${count}/8`;
    const uploadedPercentage = document.getElementById('uploaded-percentage');
    uploadedPercentage.style.width = `${count / 8 * 100}%`;

}

function getsessionStorageSize(element) {
    let total = 0;

    if(element){
        total = sessionStorage[element].length * 2 / 1024 / 1024;
    }else{
        for (let x in sessionStorage) {
            let amount = (sessionStorage[x].length * 2) / 1024 / 1024;
            if (!isNaN(amount) && sessionStorage.hasOwnProperty(x)) {
                total += amount;
            }
        }
    }

    return parseFloat(total.toFixed(2));
};