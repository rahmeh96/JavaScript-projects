const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
   
  const main =  document.querySelector('.menu-items');
  const btns = document.querySelectorAll('.filter-btn');



  /*allMenu.addEventListener('click', function(){
    main.innerHTML = '';

    menu.forEach((item)=> {
      
      main.innerHTML += `
      <article class="article">
      <img src="images/item-${item.id}.jpeg">
      <div class="flexing">
      <div class="title-price">
      <p class="title">${item.title}</p>
      <p class="price">${item.price}</p>
      </div>
      <p>${item.desc}</p>
      </div>
      
      </article>`
      
    })
  })
breakfast.addEventListener('click', function(){
  main.innerHTML = '';

  menu.forEach((item)=> {
    if (item.category === 'breakfast'){
    main.innerHTML += `
    <article class="article">
    <img src="images/item-${item.id}.jpeg">
    <div class="flexing">
    <div class="title-price">
    <p class="title">${item.title}</p>
    <p class="price">${item.price}</p>
    </div>
    <p>${item.desc}</p>
    </div>
    
    </article>`
  }
  
  })
}
)

lunch.addEventListener('click', function(){
  main.innerHTML = '';

  menu.forEach((item)=> {
    if (item.category === 'lunch'){
    main.innerHTML += `
    <article class="article">
    <img src="images/item-${item.id}.jpeg">
    <div class="flexing">
    <div class="title-price">
    <p class="title">${item.title}</p>
    <p class="price">${item.price}</p>
    </div>
    <p>${item.desc}</p>
    </div>
    
    </article>`
  }
  
  })
}
)

shakes.addEventListener('click', function(){
  main.innerHTML = '';

  menu.forEach((item)=> {
    if (item.category === 'shakes'){
    main.innerHTML += `
    <article class="article">
    <img src="images/item-${item.id}.jpeg">
    <div class="flexing">
    <div class="title-price">
    <p class="title">${item.title}</p>
    <p class="price">${item.price}</p>
    </div>
    <p>${item.desc}</p>
    </div>
    
    </article>`
  }
  
  })
}
)
*/
document.addEventListener('DOMContentLoaded', function(){
   showMenu(menu);
  
})

function showMenu (menuItems){
  main.innerHTML = '';
    let displayMenu = menuItems.map((item)=> {
      
      return main.innerHTML +=`
      <article class="article">
      <img src="images/item-${item.id}.jpeg">
      <div class="flexing">
      <div class="title-price">
      <p class="title">${item.title}</p>
      <p class="price">${item.price}</p>
      </div>
      <p>${item.desc}</p>
      </div>
      
      </article>`
      
    })
    //you can use join as well where you type displayMenu = displayMenu.join('');
      //main.innerHTML= displayMenu; 
}

btns.forEach((btn) =>{
  btn.addEventListener('click', function(e){
const category= e.currentTarget.dataset.id;
const newMenu = menu.filter((menuItem)=>{
  if (menuItem.category === category){
    return menuItem;
  }
})

if(category === 'all' ){
  showMenu(menu);
}

else {
showMenu(newMenu);
}
})
  })

  
    
