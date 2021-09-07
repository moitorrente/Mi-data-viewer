const table = document.getElementById('table');

function checkSaved() {
    const saved = sessionStorage.getItem('saved');
    if(saved){
        const obj = JSON.parse(sessionStorage.getItem(saved));
        displayHeader(obj.header);
        displayData(obj.data);
    }
}

checkSaved();


function displayHeader(header) {
    const thead = document.createElement('thead');
    thead.classList.add('head')
    const tr = document.createElement('tr');
    const tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'table-body');
    header.forEach(x => {
        const th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerHTML = x;
        tr.appendChild(th);
    });
    thead.appendChild(tr)
    table.appendChild(thead);
}

function displayData(data) {
    let displayData = Object.entries(data);
    let onlyData = displayData.map(row => row[1]);
    const numberRows = onlyData[1].length;
    const tbody = document.createElement('tbody');

    for (let i = 0; i < numberRows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < displayData.length; j++) {
            const td = document.createElement('td');
            td.innerHTML = onlyData[j][i];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}