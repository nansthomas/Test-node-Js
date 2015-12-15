var buttonPlay    = document.querySelector('.submit'),
    photo         = document.querySelector('.photo'),
    result        = document.querySelector('.result');

var starWarsName;


buttonPlay.addEventListener('click', function(){

  // VARIABLE DECLARATION

  var firstName = document.querySelector('.first_name').value.toUpperCase(),
  lastName      = document.querySelector('.last_name').value.toUpperCase(),
  birthCity     = document.querySelector('.birth_city').value.toUpperCase(),
  subFirst,
  subLast;

  // GENERATE NAME STYLE STAR WARS
  subFirst  = lastName.substring(0,3) + firstName.substring(0,2);
  subLast   = birthCity.substring(0,3) + lastName.substring(3,4);

  starWarsName = subFirst + ' ' + subLast;

  // GENERATE RANDOM AVATAR
  photo.src = "images/avatar/starwar_tk-" + Math.round((Math.random()*11)+1) + ".png";

  // TROLL FOR BRUNO SIMON

  if (lastName == 'SIMON' && firstName == 'BRUNO') {
    starWarsName = 'THE COMMANDER';
    photo.src = "images/avatar/bruno.png";
  }

  result.innerHTML = starWarsName;

});

result.innerHTML = starWarsName;

if(Modernizr.touchevents) {
  document.location.href="ok.html";
} else {
  
}
