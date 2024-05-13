document.querySelector('.resources').addEventListener('click', function() {
    var lis = this.querySelectorAll('ul > li');
    lis.forEach(function(li) {
      li.style.display = (li.style.display === 'block') ? 'none' : 'block';
    });
  });
  



  document.querySelector('.top-funded').addEventListener('click', function() {
    var lis = this.querySelectorAll('ul > li');
    lis.forEach(function(li) {
      li.style.display = (li.style.display === 'block') ? 'none' : 'block';
    });
  });
  

document.querySelector('.Quick-links').addEventListener('click', function(){
    var lis = this.querySelectorAll ('ul > li');
    lis.forEach(function(li){
        li.style.display = (li.style.display === "block")? "none" : 'block';
    })
})




















//   Menu bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}