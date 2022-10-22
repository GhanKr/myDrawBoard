let barIcon=document.querySelector('.menuBar');
let tools=document.querySelector('.tools');
let barChild=barIcon.children[0];
barChild.addEventListener('click',() => {
    barChild.addEventListener('click',() => {
        barChild.classList.toggle('fa-bars');
        barChild.classList.toggle('fa-circle-xmark');
        tools.classList.toggle('none');
        tools.classList.toggle('active');
});

