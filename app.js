const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.btn');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const selected = document.querySelector('.selected')

let currentRating;

function main() {
    ratings.forEach((rat, idx) => {
    rat.addEventListener('click', ()=>{
        currentRating = idx+1;
        rate();
    });
    rat.addEventListener('mouseenter', ()=>{
        currentId = idx+1;
        mouseEnter();
    });
    rat.addEventListener('mouseleave', ()=>{
        currentId = idx+1;
        mouseLeave();
        })
    })
}
    
main();

submit.addEventListener('click', ()=> {
    section2.classList.remove('hidden');
    section1.classList.add('hidden');
    selected.innerText = `You selected ${currentRating} out of 5`
})


function rate() {
    ratings.forEach((rat, idx)=>{
        if(idx+1 ===  currentRating) {
            rat.classList.add('active') 
        } else {
            rat.classList.remove('active');
        }
    })
}

function mouseEnter() {
    ratings.forEach((rat, idx)=>{
        if(idx+1 ===  currentId) {
            rat.classList.add('current') 
            } else {
            rat.classList.remove('current');
        }
    })
    
}

function mouseLeave() {
    ratings.forEach((rat, idx)=>{
        if(idx+1 ===  currentId) {
            rat.classList.remove('current') 
                } else {
            rat.classList.remove('current');
                }
    })
}    