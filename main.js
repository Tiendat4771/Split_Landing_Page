// Create Vairiable selector class

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Hover left effect
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () =>{
    container.classList.remove('hover-left');
});

// Hover Right programer
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave',() =>{
    container.classList.remove('hover-right');
});
