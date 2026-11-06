mainTable(); {
    const tableData = [];
    // Populate tableData with your data
    this.createTable(tableData);
}
DOMContentLoaded(); {
    if (localStorage.getItem("table-container")) {
        const tableData = JSON.parse(localStorage.getItem("table-container"));
        this.createTable(tableData);
    }
}
function updateTable() {
    const it = document.getElementById("start-time").value;
    const et = document.getElementById("end-time").value;
    if (it == "" || et == "") {
        return; // Exit the function if both initial time and end time are null
    }
    const tbody = document.getElementById("table-container").querySelector("tbody");
    currentDate = new Date();
        const previousDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);

    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const splitDate = date.toISOString().split(" ");
    const initialTime = it;
    const endTime = et;
    /*if (initialTime > endTime) {
        const duration = calculateDuration(initialTime, "24:00:00") + calculateDuration("00:00:00", endTime);
    }
    const duration = calculateDuration(initialTime, endTime);
    if (tableData.length > 1) {
        const lastRowIT = tableData[tableData.length - 4];
        const offset = calculateDuration(lastRowIT, initialTime);
    }
    const needed = calculateDuration(calculateDuration(initialTime, endTime), calculateDuration("00:00:00", "08:00:00"));bugged rn*/

    const newData = [date, it, et, "temp", "temp", "temp"]; 
    const row = tbody.insertRow(-1);
    let num = 0;
    newData.forEach(value => {
        cell.textContent = value;
        const cell = row.insertCell(num);
        num++;
    });
    //finish
    localStorage.setItem("table-container", JSON.stringify(tableData));
}
function fullClear() {
    localStorage.clear();
    const table = document.getElementById("table-container").querySelector("table");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = ""; // Clear existing rows
}