const MessageForUser = () =>'Я учу JavaScript!';
console.log(MessageForUser());


const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const image = document.querySelector('.image');

nextButton.addEventListener('click', () =>{
    image.src='https://i.postimg.cc/cLVh9nKk/2.png';
});

prevButton.addEventListener('click' , () =>{
    image.src='https://i.postimg.cc/nhsTGkLQ/1.png';
});