function SendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rtc57359@cdfaq.com",
        Password : "**********01E35",
        To : 'xyz@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "Hii"+document.getElementById("name").value+"<br>"+document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}