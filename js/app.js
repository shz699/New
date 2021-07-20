let hamBtn = document.querySelector('.hamburger');
let navLink = document.querySelectorAll('.nav_link');
let navBar = document.getElementById('nav');

function navTog() {
    navBar.querySelector('#nav__ul').classList.toggle('active');
    navBar.querySelector('#nav__ul').classList.toggle('mobile_view');
    hamBtn.classList.toggle('active');           
};

navLink.forEach((item) =>{
    item.addEventListener('click', () => {
        navTog();
    })
})

window.onload = function(){
    let navBar = document.getElementById('nav');
    window.addEventListener("scroll" , ()=>{
        navBar.classList.toggle('active' , window.scrollY > 0);
    })
    let btn = document.querySelector('#submitButton');
    let inputFeild = document.querySelector('#newsletter_input');
    let form = document.getElementById('contactForm');
    function validateEmail(email)
    {
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }
    inputFeild.addEventListener('input', (event) => {
        let low = inputFeild.value.toLowerCase();
        // if(low.length >= 7){
        //     if(low.includes('@') && low.includes('.') && low.includes('com')){
        //         btn.classList.remove('disabled')
        //     }
        //     else{
        //         btn.classList.add('disabled')
        //     }
        // }
        let res = validateEmail(low)
        if(res){
            btn.classList.remove('disabled');
        }
        else{
            btn.classList.add('disabled')
        }
    });
    form.addEventListener('submit', (event) => {
        let val = document.querySelector(".validation");
        event.preventDefault()
        inputFeild.classList.add('submitted')
        btn.classList.add('submitted')
        val.style.display = 'block';
        inputFeild.value = "";
        inputFeild.placeholder = 'Thanks for your feedback....';
    });
};