const fileInput = document.getElementById('file-input');
const fileInputBtn = document.getElementById('file-input-btn');
const submit = document.getElementById('submit');

fileInput.addEventListener('change', (event) => {
    const fileList = event.target.files;
    getAsText(fileList[0]);
});

fileInputBtn.addEventListener('click', () => {
    fileInput.click();
})

function getAsText(fileToRead) {
    const reader = new FileReader();
    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function loadHandler(event) {
    const file = event.target.result;
    userParse(file);
}

function errorHandler(evt) {
    if (evt.target.error.name == 'NotReadableError') {
        alert('No se puede leer el fichero');
    } else {
        alert(evt);
    }
}

function userParse(file) {
    [header, data] = file.split('\n');
    header = header.split(',');
    data = data.split(',');

    const user = {};

    for (let i = 0; i < header.length; i++) {
        user[header[i]] = data[i]
    }

    saveOnStorage(user);
    assignData(user)
}

function assignData(user) {
    document.getElementById('birthday').value = user.birthday;
    document.getElementById('height').value = user.height;
    document.getElementById('gender').value = user.gender;
}

submit.addEventListener('click', () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const birthday = document.getElementById('birthday').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;

    if (user) {
        user.birthday = birthday;
        user.height = height;
        user.gender = gender;
        saveOnStorage(user);

    } else {
        let user = {};
        user.birthday = birthday;
        user.height = height;
        user.gender = gender;
        saveOnStorage(user);
    }

    window.location.href = "/upload.html";
});

loadStored();

function loadStored() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        window.location.href = "/profile.html";
    }
}

function saveOnStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
}