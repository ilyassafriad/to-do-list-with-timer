const firstPage = document.querySelector('.firstPage');
const add = document.querySelector('.add');
const secondPage = document.querySelector('.secondPage');

add.addEventListener('click', ()=>{
    secondPage.style.display="block";
})

const back = document.querySelector('.back');
back.addEventListener('click', ()=>{
    secondPage.style.display="none";
})


/* const first = document.querySelector('.first');
const second = document.querySelector('.second');
const three = document.querySelector('.three');
const foor = document.querySelector('.foor'); */


const work = document.querySelector('.task');
const date = document.querySelector('.date');
const submit = document.querySelector('.submit');



submit.addEventListener('click', ()=>{
    const create = document.createElement("div");
    const node = document.createTextNode(work.value);
    create.appendChild(node);
    const text = document.querySelector('.text');
    if(work.value === ''){
        alert("please enter your work");
    } else{
        firstPage.appendChild(create);
        secondPage.style.display="none";
        work.value="";
        create.classList.add('change');
        text.style.display="none";
        add.className="place";



         const demo = document.createElement("div");
         create.appendChild(demo);  

var countDownDate = new Date(date.value).getTime();

var x = setInterval(function() {

  
  var now = new Date().getTime();


  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  demo.innerHTML = days + "d " + hours + "h "  + minutes + "m " + seconds + "s "

  demo.className="demo";



  if (distance < 0) {
    clearInterval(x);
    var lert = prompt("the time is finish, you created your work or no");
    if(lert === "yes"){
        alert("good job")
    } else{
        alert("why no, please complete your work");
    }
    demo.innerHTML = "EXPIRED";
  }  
}, 1000);



    }
})

