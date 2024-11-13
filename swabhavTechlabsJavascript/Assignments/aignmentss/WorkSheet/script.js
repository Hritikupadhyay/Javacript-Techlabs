document.getElementById("addTimesheetBtn").addEventListener("click", function() {
    const template = document.getElementById("timesheet-template");
    const newTimesheet = template.cloneNode(true);
    newTimesheet.id = ""; 
    newTimesheet.querySelectorAll("input, select, textarea").forEach(input => input.value = "");
    document.getElementById("timesheet-container").appendChild(newTimesheet);
});

document.getElementById("previewBtn").addEventListener("click", function() {
    const modal = document.getElementById("previewModal");
    const tbody = document.getElementById("previewTable").querySelector("tbody");
    tbody.innerHTML = "";

    const rows = document.querySelectorAll(".timesheet-row");
    rows.forEach((row, index) => {
        const date = row.querySelector(".date").value;
        const onLeave = row.querySelector(".onLeave").value;
        const project = row.querySelector(".project").value;
        const subProject = row.querySelector(".subProject").value;
        const batch = row.querySelector(".batch").value;
        const hours = row.querySelector(".hours").value;
        const minutes = row.querySelector(".minutes").value;
        const activity = row.querySelector(".activity").value;

        const totalHours = `${hours.padStart(2, '0')} hrs ${minutes.padStart(2, '0')} mins`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${date}</td>
            <td>${onLeave}</td>
            <td>${project}</td>
            <td>${subProject}</td>
            <td>${batch}</td>
            <td>${activity}</td>
            <td>${totalHours}</td>
        `;
        tbody.appendChild(tr);
    });

    modal.style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("previewModal").style.display = "none";
});

document.getElementById("backBtn").addEventListener("click", function() {
    document.getElementById("previewModal").style.display = "none";
});

// document.getElementById("deleteBtn").addEventListener("click", function() {
//     const deleteBtn = document.addEventListener(this.onclick(document.getElementById("form").appendChild.apply()))
//     const tbody = document.getElementById("previewTable").querySelector("tbody");
//     tbody.innerHTML = "";



