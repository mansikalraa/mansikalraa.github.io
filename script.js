let checkPro = document.getElementById("check-project");
let checkAbo = document.getElementById("check-about");
let checkSkill = document.getElementById("check-skill");
let checkCon = document.getElementById("check-contact");



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


// form validations

let yname = document.getElementById("name");
let email = document.getElementById("email");
let msg = document.getElementById("msg");
let sendbtn = document.getElementById("sendbtn");
let sendmsg = document.getElementById("sendmsg");

sendbtn.addEventListener("click", function() {
    let i = validations();
    if (i == 1) {
        sendEmail();
    }
});

function validations() {
    yname.style.borderColor = "initial";
    email.style.borderColor = "initial";
    msg.style.borderColor = "initial";
    if (yname.value == '') {
        yname.placeholder = "Name?";
        yname.style.borderColor = "red";
        return 0;
    }
    if (email.value == '') {
        email.placeholder = "Email?";
        email.style.borderColor = "red";
        return 0;
    }
    if (email.value != '') {
        let atpos = email.value.indexOf("@");
        let dotpos = email.value.lastIndexOf(".");

        if (atpos < 1 || (dotpos - atpos < 2)) {
            email.value = '';
            email.placeholder = "Incorrect Email.";
            email.focus();
            email.style.borderColor = "red";
            return 0;
        }
    }

    if (msg.value == '') {
        msg.placeholder = "Message?";
        msg.style.borderColor = "red";
        return 0;
    }
    return 1;
}

function sendEmail() {
    let sub = "Message from " + yname.value;
    let bod = "Name : " + yname.value + "\nEmail : " + email.value + "\nMessage : " + msg.value;

    Email.send({
            Host: "smtp.gmail.com",
            Username: "mansiwebsitequiries@gmail.com",
            Password: "idontknowwhattodo",
            To: 'mansi.kalra23@gmail.com',
            From: "mansiwebsitequiries@gmail.com",
            Subject: sub,
            Body: bod,
        })
        .then(function(message) {
            yname.value = '';
            email.value = '';
            msg.value = '';
            sendmsg.innerHTML = "Message sent!";
        });
}