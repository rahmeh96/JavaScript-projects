const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];



const personReview = document.querySelector('.container');
const btn = document.querySelector('.right');
const reverseBtn = document.querySelector('.left');
const surprise = document.querySelector('.surprise-btn');
let currIndex = 0;

function getReviews(index){
  const review = reviews[index];
  personReview.innerHTML = `<img class="person-img" src=${review.img}>
<p> ${review.name}</p>
<p>${review.job}</p>
<p>${review.text}</p>

`
}
getReviews(currIndex);

btn.addEventListener('click', ()=>{
  currIndex++;
  if (currIndex >= reviews.length) {
    currIndex = 0;
  }
  getReviews(currIndex);

}
)

reverseBtn.addEventListener('click', () => {
  
    currIndex--;
    if (currIndex < 0) {
      currIndex = reviews.length - 1;
  }
  getReviews(currIndex);
})

// Display the object at the new index

surprise.addEventListener('click', () =>{
  getReviews(Math.floor(Math.random() * reviews.length));
})