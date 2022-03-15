// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("webpage").style.display = "block";
// }

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  } 
  return;
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}
 
// $( document ).ready(async function() {
//   await typeSentence("Mr. Stark, I don't feel so good..", "#sentence");
//   await waitForMs(2000);
//   deleteSentence("#sentence");
// });
const carouselText=[ {text:"BARTENDER ba"},{text:"WEB DEVELOPER"}];
async function carousel(carouselList, eleRef) {
  var i = 0;
  while(true) {
    // updateFontColor(eleRef, carouselList[i].color)
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    if(i >= carouselList.length) {i = 0;}
  }
}
$( document ).ready(async function() {
  carousel(carouselText, "#sentence")
});


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

  // var cv=document.getElementById('cv');
  // cv.addEventListener("click", function(){
  
  //     alert('Downloading CV...');
  // })
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