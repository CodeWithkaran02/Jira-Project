let addbtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");

let addModal = true;

addbtn.addEventListener("click", function () {
    if (addModal) {
        modalCont.style.display = "flex";

    }
    else {
        modalCont.style.display = "none";
    }
    addModal = !addModal;
})

modalCont.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key == 'Enter') {
        createTicket(taskAreaCont.value);
        taskAreaCont.value = " ";
        modalCont.style.display = "none";
        addModal = !addModal;
    }
})
function createTicket(task) {

    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class', 'ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color "></div>
                             <div class="ticket-id">#qx03q</div>
                              <div class="task-area">${task}</div>`;


    mainCont.appendChild(ticketCont);

    //console.log("it will run ")


}
