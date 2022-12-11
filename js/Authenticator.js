const container1 = document.querySelector(".container1"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", ()=> {
            pwFields.forEach(pwField => {
                if(pwField.type === "password") {
                    pwField.type = "text";
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("fa-eye-slash", "fa-eye");
                    })
                } else {
                    pwField.type = "password";
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                }
            })
        })
    })
 
    signUp.addEventListener("click", ( )=> {
        container1.classList.add("active");
    });
    login.addEventListener("click", ( )=> {
        container1.classList.remove("active");
    });

    const listAccountuser = [
        {
            name: "user1",
            password: "1234567890"
        },
        {
            name: "user2",
            password: "1234567890"
        },
        {
            name: "user3",
            password: "1234567890"
        },
    ]


    var checkusername = document.querySelector("#username")
    checkusername.addEventListener('input',function(event){
        var valueusername = event.target.value
        var createaccount = localStorage.getItem("create") ? JSON.parse(localStorage.getItem("create")) : [];
        var xmarkcircle = document.querySelector(".xmarkcircle")
        var checkcircle = document.querySelector(".checkcircle")
        var wrongname = document.querySelector(".wrongname")
        if(valueusername == "") {
            checkcircle.classList.add("hide")
            xmarkcircle.classList.add("hide")
            wrongname.classList.add("hide")
            return
        } if(valueusername.length < 5 ) {
            wrongname.innerText = "Account name must be at least 5 character."
            wrongname.classList.remove("hide")
            xmarkcircle.classList.remove("hide")
            checkcircle.classList.add("hide")
            return
        } if(createaccount.find(value => value.username == valueusername) || listAccountuser.find(value => value.name == valueusername)) {
            wrongname.innerText = "Account already exists."
            wrongname.classList.remove("hide")
            xmarkcircle.classList.remove("hide")
            checkcircle.classList.add("hide")
            return
        } if(createaccount.find(item => item.username != valueusername) || listAccountuser.find(value => value.name != valueusername)){
            checkcircle.classList.remove("hide")
            xmarkcircle.classList.add("hide")
            wrongname.classList.add('hide')
        } else {
            xmarkcircle.classList.remove("hide")
            checkcircle.classList.add("hide")
            wrongname.classList.add('hide')
        }
    });

    var checkpass = document.querySelector("#password1")
    checkpass.addEventListener('input',function(event){
        var valuepass = event.target.value
        var wrongpass = document.querySelector(".wrongpassword")
        if(valuepass =="") {
            wrongpass.classList.add('hide')
            return
        } if(valuepass.length < 8) {
                wrongpass.innerText = "Password must be at least 8 character."
                wrongpass.classList.remove('hide')
        }  else {
            wrongpass.classList.add('hide')
        }
    })

    const form = document.getElementById('formes');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var email1 = document.getElementById('email1').value;
        var password1 = document.getElementById('password1').value;
        var cfmpass = document.querySelector("#confirmpsw").value
        var createaccount = localStorage.getItem("create") ? JSON.parse(localStorage.getItem("create")) : [];
        var user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
        if (cfmpass !== password1) {
            var wrongcfm = document.querySelector(".wrongcfmpass")
                wrongcfm.innerText = "Passwords doesn't match"
                wrongcfm.classList.remove('hide')
        } else {
            createaccount.push({
                email1: email1,
                username: username,
                password: password1,
            }) 
            localStorage.setItem("create",JSON.stringify(createaccount)) 
            localStorage.setItem("user", username)
            window.location.href="../Html/Home.html"
        }
        var username1 = document.getElementById('username');
        var email2 = document.getElementById('email1');
        var password2 = document.getElementById('password1');
        var confirmpsw = document.getElementById('confirmpsw');
        username1.addEventListener('input',function(check){
            var wrongname = document.querySelector(".wrongname")
            wrongname.classList.add('hide')
        })
        email2.addEventListener('input',function(check){
            var wrongemail = document.querySelector(".wrongemail")
                wrongemail.classList.add('hide')
        })
        password2.addEventListener('input',function(check){
            var wrongpass = document.querySelector(".wrongpassword")
                wrongpass.classList.add('hide')
        })
        confirmpsw.addEventListener('input',function(check){
            var wrongcfm = document.querySelector(".wrongcfmpass")
                wrongcfm.classList.add('hide')
        })
    })
        


const listAccountadmin = [
    {
        name: "admin1",
        password: "1234567890"
    },
    {
        name: "admin2",
        password: "1234567890"
    },
    {
        name: "admin3",
        password: "1234567890"
    },
]


function Logins(check) {
    check.preventDefault;
}
var createaccount = localStorage.getItem("create") ? JSON.parse(localStorage.getItem("create")) : [];
const formlogin = document.getElementById("formlogin")
formlogin.addEventListener('submit', check => {
    check.preventDefault();
    let nameLogin = document.getElementById("email").value
    let passwordLogin = document.getElementById("password").value
    var createaccount = localStorage.getItem("create") ? JSON.parse(localStorage.getItem("create")) : []; 
    if(listAccountadmin.find(value => value.name === nameLogin && value.password === passwordLogin)) {
            window.location.href = "../Html/Admin.html"
            return
    }  if (createaccount.find(value => value.username === nameLogin && value.password === passwordLogin) || listAccountuser.find(value => value.name === nameLogin && value.password === passwordLogin)) {
        localStorage.setItem("user",nameLogin)
            window.location.href = "../Html/Home.html"
            return
    }  else {
        var wrong = document.querySelector(".wrong")
            wrong.classList.remove('hide')
        let name1 = document.getElementById("email")
        let password1 = document.getElementById("password")
        name1.addEventListener('input',function(check) {
            wrong.classList.add('hide')
        })
        password1.addEventListener('input',function(check) {
            wrong.classList.add('hide')
        })
    }
})





