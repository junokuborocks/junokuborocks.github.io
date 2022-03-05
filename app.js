// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("webpage").style.display = "block";
// }


function changeClass() {
  document.getElementById("change").className = "fa-solid fa-tree";
}
function changeBack() {
  document.getElementById("change").className = "fa-solid fa-seedling";
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  var cv=document.getElementById('cv');
  cv.addEventListener("click", function(){
  
      alert('Downloading CV...');
  })
  // window.addEventListener("scroll", reveal);

  // document.onreadystatechange = function () {
  //   var state = document.readyState
  //   if (state == 'interactive') {
  //        document.getElementById('body').style.visibility="hidden";
  //   } else if (state == 'complete') {
  //       setTimeout(function(){
  //         //  document.getElementById('interactive');
  //          document.getElementById('load').style.visibility="hidden";
  //          document.getElementById('body').style.visibility="visible";
  //       },1000);
  //   }
  // }

// 

// var flipCards=document.querySelectorAll('.flipCard');
// [...flipCards].forEach((card)=>{
//   card.addEventListener('click', function(){
//     card.classList.toggle('is-flipped');
//   })
// })

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});