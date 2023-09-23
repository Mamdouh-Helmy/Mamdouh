// dark mode
const dark = document.getElementById('dark')
const body = document.getElementById('body')
dark.addEventListener('click',  (event) => {
    body.classList.toggle("dark")
})
// scroll
let scroll = document.getElementById('scroll')
window.onscroll = function () {
    if(this.scrollY >= 90){
        scroll.classList.add("show")
    }
    else{
        scroll.classList.remove("show")
    }
};
// toggle Menu
let togglebtn = document.getElementById('toggle-menu')
let tlinks = document.getElementById('linkes')
togglebtn.onclick = function(e) {
    e.stopPropagation()
    tlinks.classList.toggle("opne")
    togglebtn.classList.toggle("burger")
}
document.addEventListener("click" , (e) => {
    if(e.target !== togglebtn && e.target !== tlinks){
        if(tlinks.classList.contains("opne")){
            tlinks.classList.toggle("opne")
        togglebtn.classList.toggle("burger")
        }
    }
});
tlinks.onclick = function (e){
    e.stopPropagation();
}
// Gmail
function sendEmail(){
    Email.send({
        SecureToken : "5ccb66e5-fc13-4f75-bfa3-8a393a13f9ec",
        To : 'mm9349263@gmail.com',
        From : "mm9349263@gmail.com",
        Subject : "Gmail",
        Body : "Name: " + document.getElementById("name").value
                +"<br> Email: " + document.getElementById("email").value
                +"<br> Phono: " + document.getElementById("phono").value
                +"<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent succesfully 🤗🤗")
    );
}
