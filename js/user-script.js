const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');

const avatar = document.getElementById('avatar');
const userId = document.getElementById('userId');
const nickName = document.getElementById('nickName');
const birthday = document.getElementById('birthday');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const gender = document.getElementById('gender');

saveBtn.addEventListener('click', () => {
    let user = {};
    user.avatar = avatar.value;
    user.userId = userId.value;
    user.nickName = nickName.value;
    user.birthday = birthday.value;
    user.height = height.value;
    user.weight = weight.value;
    user.gender = gender.value;

    saveOnStorage(user);
    window.location.href = "/upload.html";
});

cancelBtn.addEventListener('click', () => {
    window.location.href = "/upload.html";
});

loadStored();
function loadStored() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        if (user.avatar == undefined) {
            avatar.classList.add('hide')
        } else {
            avatar.value = user.avatar;
        }
        if (user.userId == undefined) {
            userId.classList.add('hide')
        } else {
            userId.value = user.userId;
        }
        if (user.nickName == undefined) {
            nickName.value = '';
        } else {
            nickName.value = user.nickName;
        }

        birthday.value = user.birthday;
        height.value = user.height;
        weight.value = user.weight;
        gender.value = user.gender;
    } else {
        alert('Datos de usuario no cargados.\r\nSe redirigirá a la página de carga de datos.');
        window.location.href = "/index.html";
    }
}

function saveOnStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
}