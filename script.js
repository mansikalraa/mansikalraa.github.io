let checkPro = document.getElementById("check-project");
let checkAbo = document.getElementById("check-about");
let checkSkill = document.getElementById("check-skill");
let checkCon = document.getElementById("check-contact");

console.log(checkPro.value);
console.log(checkAbo.value);
console.log(checkSkill.value);
console.log(checkCon.value);

checkPro.addEventListener("click", function() {
    if (checkPro.checked) {
        checkAbo.checked = false;
        checkSkill.checked = false;
        checkCon.checked = false;
    }
});

checkAbo.addEventListener("click", function() {
    if (checkAbo.checked) {
        checkPro.checked = false;
        checkSkill.checked = false;
        checkCon.checked = false;
    }
});
checkSkill.addEventListener("click", function() {
    if (checkSkill.checked) {
        checkPro.checked = false;
        checkAbo.checked = false;
        checkCon.checked = false;
    }
});
checkCon.addEventListener("click", function() {
    if (checkCon.checked) {
        checkPro.checked = false;
        checkSkill.checked = false;
        checkAbo.checked = false;
    }
});