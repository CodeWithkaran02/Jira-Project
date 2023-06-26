let addbtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");

let addModal = true;

addbtn.addEventListener("click", function () {
    if (addModal) {
        model.style.display = "flex";

    }
    else {
        model.style.display = "none";
    }
    addModal = !addModal;
})