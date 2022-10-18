let barIcon=document.querySelector('.menuBar');
let tools=document.querySelector('.tools');
let barChild=barIcon.children[0];
barChild.addEventListener('click',() => {
    if(barChild.classList[1] =='fa-bars'){
        barChild.classList.remove('fa-bars');
        barChild.classList.add('fa-circle-xmark');
        tools.style.display='flex';
    }
    else{
        barChild.classList.remove('fa-circle-xmark');
        barChild.classList.add('fa-bars');
        tools.style.display='none';  
    }      
});

