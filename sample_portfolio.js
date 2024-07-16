function openFunction(){
    document.querySelector(".contents").style.display = "flex";
    document.querySelector(".cross").style.display = "inline-block";
    document.querySelector(".ham").style.display = "none";
}
function closeFunction(){
    document.querySelector(".contents").style.display = "none";
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".ham").style.display = "inline-block  ";
}

const navbar = document.getElementById("nav")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.replace('affix',"affix-top");
    // navbar.style.backgroundColor = 'skyblue'
  } else {
    navbar.classList.replace("affix-top",'affix');
  }
}


function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("textarea").value;

  if (name == ""||email == ""||text == "")
    {
      alert("Please enter all the fields");
      return false;
    
    }
    else if (name.match(/^[a-zA-Z]+$/)==null){
      alert("please enter your name");
      return false;

    }
    else if (email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)==null) {
      alert("Please enter a valid email address.");
      return false;
  }
    else
    {
      alert("Your form has been submitted");
      return true;
    }
}