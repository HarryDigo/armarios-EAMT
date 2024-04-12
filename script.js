function enterClick(type, next_action, action) {
    let input = self;
    input.addEventListener("keydown",function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            eval("document.querySelector(type+next_action)."+action+"()");
        }
    })
}

function locateUser(rm, name) {
    let aux = localStorage.getItem("user_amount");
    for (let i = 0; i < aux; i++) if (rm == localStorage.getItem("user_rm["+i+"]") || name == localStorage.getItem("user_name["+i+"]")) return i;
    return false;
}
