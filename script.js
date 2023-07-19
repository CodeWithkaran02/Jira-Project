let addbtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removebtn = document.querySelector(".remove-btn")
let allPriorityColor = document.querySelectorAll(".prioritu-color");
let modalPriorityColor = "black";

let addModal = true;
let removeflag = false;

addbtn.addEventListener("click", function () {
    if (addModal) {
        modalCont.style.display = "flex";

    }
    else {
        modalCont.style.display = "none";
    }
    addModal = !addModal;
})
for (let i = 0; i < allPriorityColor.length; i++) {
    let priorityDivOnecolor = allPriorityColor[i];
    priorityDivOnecolor.addEventListener("click", function () {
        for (let j = 0; j < allPriorityColor.length; j++) {
            allPriorityColor[j].classList.remove("active");
        }
        priorityDivOnecolor.classList.add("active");
        modalPriorityColor = priorityDivOnecolor.classList[0];
    })
}


modalCont.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key == 'Enter') {
        createTicket(modalPriorityColor, taskAreaCont.value);
        taskAreaCont.value = " ";
        modalCont.style.display = "none";
        addModal = !addModal;
    }
})
removebtn.addEventListener("click", function () {
    if (removeflag) {
        removebtn.style.color = 'black';

    }
    else {
        removebtn.style.color = 'red';
    }
    removeflag = !removeflag;
})

function createTicket(ticketColor, task) {

    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class', 'ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor} "></div>
                             <div class="ticket-id">#qx03q</div>
                              <div class="task-area">${task}</div>`;


    mainCont.appendChild(ticketCont);

    //console.log("it will run ")
    ticketCont.addEventListener("click", function () {
        if (removeflag) {
            ticketCont.remove();
        }
    })
}

