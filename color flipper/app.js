const colors = ['red', 'green','rgba(133,122,200)',' #f15025'];
const btn = document.getElementById('btn');
const  color = document.querySelector('.color');

btn.addEventListener('click', function (){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    })

    
    /* let index = 0;

    document.getElementById("btn").addEventListener("click", function() {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // Loop back when reaching the end
    });*/

    function getRandomNumber(){
        return Math.floor(Math.random()* colors.length)
    }