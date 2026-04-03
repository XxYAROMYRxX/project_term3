// const openEl = document.querySelector(".modal__mod-window");
const backdropEl = document.querySelector(".backdrop");
const closeEl = document.querySelector(".modal__close");
// openEl.addEventListener("click", (event) =>{
//     backdropEl.classList.remove("modal__is-hidden");
// })
closeEl.addEventListener("click", (event)=>{
    backdropEl.classList.add("modal__is-hidden");
})
document.addEventListener("keydown", (event) => {
    console.log(event.code);
    if(event.code === "Escape"){
        backdropEl.classList.add("modal__is-hidden");
    }
})
backdropEl.addEventListener("click", (event) => {
    if(event.target === event.currentTarget){
        backdropEl.classList.add("modal__is-hidden");
    };
})
const formEl = document.querySelector(".modal__form");
const nameEL = document.querySelector(".header__name");
formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const value = event.currentTarget.elements.name.value;
    nameEL.textContent = value
    formEl.reset();
    backdropEl.classList.add("modal__is-hidden")
})



// Чекбокс (header)
const checkWrap = document.querySelector(".header__check");
const checkBox = document.querySelector(".header__checkbox");
const checkIcon = document.querySelector(".header__icon");
/* .header__check:hover{
  .header__checkbox{
    transform: translateX(20px);
  }
} */
checkWrap.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("active");             
            checkIcon.src = "./images/moon.png";
        if(!event.currentTarget.classList.contains("active")){
            checkIcon.src = "./images/ellipse.png";
        }
})
