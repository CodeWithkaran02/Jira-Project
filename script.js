let addbtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removebtn = document.querySelector(".remove-btn")
let allPriorityColor = document.querySelectorAll(".prioritu-color");
let colors = ["lightpink", "green ", "blue", "black"]
let modalPriorityColor = colors[colors.length - 1];
var uid = new ShortUniqueId();

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
                             <div class="ticket-id">#${uid()}</div>
                              <div class="task-area">${task}</div>
                              <div class = "lock-unlock "><i class = "fa fa-lock"> </i></div>`

    mainCont.appendChild(ticketCont);

    // unlock and lock 
    let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
    let TicletTaskArea = ticketCont.querySelector(".task-area");
    lockUnlockBtn.addEventListener("click", function () {
        if (lockUnlockBtn.classList.contains("fa-lock")) {
            lockUnlockBtn.classList.remove("fa-lock");
            lockUnlockBtn.classList.add("fa-unlock");
            TicletTaskArea.setAttribute("contenteditable", "true");
        }
        else {
            lockUnlockBtn.classList.remove("fa-unlock");
            lockUnlockBtn.classList.add("fa-lock");
            TicletTaskArea.setAttribute("contenteditable", "false");

        }
    })


    //console.log("it will run ")
    ticketCont.addEventListener("click", function () {
        if (removeflag) {
            ticketCont.remove();
        }
    })

    //handal color 
    let ticketColorBand = ticketCont.querySelector(".ticket-color");
    ticketColorBand.addEventListener("click", function () {
        //update UI
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx = -1;
        for (let i = 0; i < colors.length; i++) {
            if (currentTicketColor == colors[i]) {
                currentTicketColorIdx = i;
                break;
            }
        }
        let nextColorIdx = (currentTicketColorIdx + 1) % colors.length;
        let nextColor = colors[nextColorIdx];
        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(nextColor);
    })
}

