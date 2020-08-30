const main=document.querySelector("#main");
const adduser=document.querySelector("#adduser");
const dbluser=document.querySelector("#dblwealth");
const millionare=document.querySelector("#millionare");
const sort=document.querySelector("#sort");
const twealth=document.querySelector("#twealth");


let data=[];

randomuser();



async function randomuser() {
const response= await fetch("https://randomuser.me/api/");
const data=await response.json();
const user=data.results[0];

const newuser = {
  firstname:user.name.first,
  lastname:user.name.last,
  wealth:Math.floor(Math.random()*1000000)
}
addUser(newuser);

}

function addUser(obj) {
  data.push(obj);
addtodom();
}

function doublemoney(){
  data=data.map(function(user){
    return {...user,wealth:user.wealth*2}
  })
addtodom();
}

function sortppl(){
  data.sort(function(a,b){
    return b.wealth-a.wealth;
  })
  addtodom();
}

function showmil(){
    data=data.filter(function(item){
    return item.wealth>1000000;
  })
  addtodom();
}

function total(){
const tamount=data.reduce((acc,item)=>(acc+item.wealth),0);
const totala=document.createElement("div");
totala.innerHTML=`<strong>Total</strong> $${tamount}`
totala.classList.add("person");
totala.style.cssText="background-color:green;color:white;font-size:110%;padding:0 2%;border:1px white solid;box-shadow:1px 1px white;margin-top:4%";
main.appendChild(totala);
}

function addtodom(prodata=data) {
  main.innerHTML=`<h2><strong>Person</strong> Wealth</h2>`;

  prodata.forEach((item) => {
      const ele=document.createElement("div");
      ele.classList.add("person");
      ele.innerHTML=`<strong>${item.firstname} ${item.lastname}</strong> <span>$${item.wealth}</span>`
      main.appendChild(ele);
  });

}

adduser.addEventListener("click",randomuser);
dbluser.addEventListener("click",doublemoney);
sort.addEventListener("click",sortppl);
millionare.addEventListener("click",showmil);
twealth.addEventListener("click",total);
console.log(data);
