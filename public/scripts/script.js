

//menu responsive fonction 
const btnOpen = document.getElementById('btnOpen');
const menuMobile = document.getElementById('menu-mobile');
const btnClose = document.getElementById('btnClose');

btnOpen.addEventListener('click', () => {

 menuMobile.classList.remove('opacity-0');
 menuMobile.classList.remove('-translate-x-full');
 btnOpen.classList.add('hidden');
 btnClose.classList.remove('hidden');

});

btnClose.addEventListener('click', () => {

menuMobile.classList.add('opacity-0');
menuMobile.classList.add('-translate-x-full');
btnOpen.classList.remove('hidden');
btnClose.classList.add('hidden');

});

//filter Btns on "Templates"
const allBtns =  document.querySelectorAll('#categorys_btn a')
const allCards = document.querySelectorAll('#content_templates a');

allBtns.forEach((btn)=>{

    btn.addEventListener('click', () => {
     
    //background of btns when we click
     if(!btn.classList.contains('bg-black')){
        allBtns.forEach((bTn) => {bTn.classList.remove('bg-black'); bTn.classList.remove('text-white')})
        btn.classList.add('bg-black');
        btn.classList.add('text-white');
        
     }
     //show 
        for(let i = 0; i < allCards.length; i++){
         
            allCards[i].classList.add('hidden');
             //here id is the attribute of every templates as link
            if(allCards[i].id === btn.innerText){
              
            allCards[i].classList.remove('hidden');
            }
            //if the btn cliked is "All"
            else if(btn.innerText === "All"){

                allCards[i].classList.remove('hidden');
            }

        }

    })
 
 })


//search input on "Templates"
const inputSearch = document.getElementById('Search');
const allTitles = document.querySelectorAll("#content_templates a > h3");
const submitReq = document.getElementById('submit_req');

inputSearch.addEventListener('input', ()=>{
    const query = inputSearch.value.toLowerCase();
    let hasResults = false;

allTitles.forEach(title =>{
    title.parentElement.classList.add('hidden');
    const text = title.textContent.toLowerCase();

    if(text.includes(query)){
        title.parentElement.classList.remove('hidden');
        hasResults =true;
    }
    // if(document.getElementById('content_templates').innerText= ""){
        //     submitReq.classList.add('hidden');
        // }
        
        //console.log(allTitles.length);
})
if(!hasResults){
    submitReq.classList.remove('hidden');
}else{
    submitReq.classList.add('hidden');
}
})


 



