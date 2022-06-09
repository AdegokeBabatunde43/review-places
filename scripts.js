const review= [
    {id:1,
        Name: 'Olumo Rock',
        Country: 'Nigeria',
        img: "Olumo.jpg",
        Info:'Olumo Rock is located in the city of Abeokuta, Ogun State. Historically, the rock was a natural fortress for the Egbas during inter-tribal warfare in the 19th century.',



    },
    {
        id:2,
        Name: 'Effel Tower',
        Country: 'France',
        img: "eiffel.jpg",
        Info:'For 130 years, the Eiffel Tower has been a powerful and distinctive symbol of the city of Paris, and by extension, of France. At first, when it was built for the 1889 World s Fair',

        
    },
    {
        id:3,
        Name: 'Statue of Liberty',
        Country: 'United State',
        img: "liberty.jpg",
        Info:'The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City ',


        
    },
    {
        id:4,
        Name: 'Pyramid of Gizza',
        Country: 'Eygpt',
        img: "pyramid.webp",
        Info:'The last surviving wonder of the ancient world, the Great Pyramid of Giza is also known as the Khufu Pyramid or Pyramid of Cheops, in honor of the pharaoh who built it around 2570 BC. ',
        

        
    }


  


    


]

const img= document.querySelector('.img')
const name=document.querySelector('.name')
const country=document.querySelector('.country')
const info=document.querySelector('.info')
const btn1=document.querySelector('.prev')
const btn2=document.querySelector('.next')

let showReview= 0;

window.addEventListener('DOMContentLoaded', () =>{
    showPerson(showReview);
})
function showPerson() {
     const item = review[showReview]
     img.src=item.img
     name.textContent=item.Name
     info.textContent=item.Info
     country.textContent=item.Country


}
btn2.addEventListener("click", ()=>{
    showReview++;
if (showReview > review.length -1){
    showReview=0
}

    showPerson()
})
btn1.addEventListener("click", ()=>{
    showReview--;
    if(showReview < 0){
        showReview= review.length - 1
    }
    showPerson()
})

