function chkPasswords() {
    var init = document.getElementById("initial");
    var sec = document.getElementById("second");

    if (init.value == "") {
        alert("You did not enter a password\nPlease enter one now");
        init.focus();
        return false;
    }

    if (init.value != sec.value) {
        alert("Please enter the correct password");
        sec.focus();
        return false;
    }
    else {
        alert("Correct password!");
    }
}