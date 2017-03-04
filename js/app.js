
function compareCountryFlag(countryName, guessedFlag) {
  paths.map((el, idx) => {

  if (el.text.match(/\<h1\>(.*?)\<\/h1\>/)[1] === countryName) {
           console.log(el.text.match(/\<h1\>(.*?)\<\/h1\>/)[1])
      console.log(idx)

      if (el.name === guessedCapital) {
        paths[idx].enable = false;
        alert('you guessed it right!');
      }
      else {
        alert('you guessed it wrong!');
      }
      console.log(el);
    }
  })
}



document.getElementById('button').addEventListener('click', function(e){
let countryName = $('h1').text();
 console.log(countryName);

$('input').each(function(index,element){

if(element.checked) {
 console.log(element.value);
}

if (element.checked && element.value === countryName) {
  alert('Woop Woop!!!!');
}
if (element.checked && element.value !== countryName) {
  alert('try again');
}
});
});


var count=30;

var counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     alert('time up!!')
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs";
}
