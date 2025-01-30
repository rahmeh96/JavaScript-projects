let counter =0;
const increase = document.querySelector('.btn-increase');
const decrease = document.querySelector('.btn-decrease');
const reset = document.querySelector('.btn-reset');
const showCounter = document.querySelector('.show-counter');

increase.addEventListener('click', function(){
counter++;
showCounter.textContent = counter ;
if (counter > 0)
{showCounter.style.color = 'green';}

});

decrease.addEventListener('click', function(){
    counter--;
    showCounter.textContent = counter ;
    if (counter < 0)
   { showCounter.style.color = 'red';}
    
    });

    reset.addEventListener('click', function(){
        counter =0;
        showCounter.textContent = counter ;
        showCounter.style.color = 'black';
        
        });



