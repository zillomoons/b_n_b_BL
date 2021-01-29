const menuBtn = document.getElementById('toggleBtn');
const menuOverlay = document.querySelector('.menu_container');
//const menuList = document.querySelector('#menuList')
const body = document.querySelector('body');
const header = document.querySelector('header');

// Open mobile menu
menuBtn.addEventListener('click', function () {
    menuOverlay.classList.toggle('open');
    menuBtn.classList.toggle('active');
    body.classList.toggle('noscroll');

})
// Checks whether to collapse open mobile menu
function checkMenu() {
    if (visualViewport.width > 640 && menuOverlay.classList.contains('open')) {
        menuOverlay.classList.remove('open');
        menuBtn.classList.remove('active');
        body.classList.remove('noscroll');
    }
}

window.addEventListener('resize', checkMenu);  // If viewport expanding collapse open mobile menu
window.addEventListener('resize', menuPosition);
window.addEventListener('scroll', stickyHeader); // If scroll -- sticky header
window.addEventListener('scroll', menuPosition);


// check Menu position
function menuPosition() {
    if (window.scrollY == 0 && visualViewport.width > 1024) {
        menuOverlay.style.cssText = 'top: 3%';
    } else {
        menuOverlay.style.cssText = 'top: 0%';
    }
}
function stickyHeader() {
    header.classList.toggle('sticky', window.scrollY > 0);
}

// Removes sr-only on menuList for desktop
// function removeSR_Only() {
//     if (visualViewport.width > 1024) {
//         menuList.classList.toggle('sr-only');  // NOT TOGGLE BUT REMOVE WHEN WIDTH 1024PX
//     }
// }
//If viewport for desktop remove sr-only
//window.addEventListener('resize', removeSR_Only)

const next_btn = document.querySelector('#btn_next');
const prev_btn = document.querySelector('#btn_prev');
const slider = document.querySelector('.slider');
let first_slide;
let last_slide;

let rooms = [
    {
        title: 'Room 1',
        content: 'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.',
        image: '/images/rooms/room1.jpg'
    },
    {
        title: 'Room 2',
        content: 'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.',
        image: '/images/rooms/room2.jpg'
    },
    {
        title: 'Room 3',
        content: 'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.',
        image: '/images/rooms/room3.jpg'
    },
    {
        title: 'Room 4',
        content: 'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.',
        image: '/images/rooms/room4.jpg'
    },
    {
        title: 'Room 5',
        content: 'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.',
        image: '/images/rooms/room5.jpg'
    },
    {
        title: 'Room 6',
        content: 'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.',
        image: '/images/rooms/room6.jpg'
    }
]

rooms.forEach(({ title, content, image }, i) => {
    const slide = document.createElement('div');
    slide.classList.add('slider__slide');
    slide.style.backgroundImage = "url('" + image + "')";

    if (i == 0) {
        first_slide = slide;

        slide.classList.add('active');
    } else if (i + 1 == rooms.length) {
        last_slide = slide;
    }

    const slide_content = document.createElement('div');
    slide_content.classList.add('slider__content');

    const content_title = document.createElement('h3');
    content_title.classList.add('slider__title');
    content_title.textContent = title;

    const content_content = document.createElement('div');
    content_content.classList.add('slider__descrip');
    content_content.textContent = content;

    slide_content.appendChild(content_title);
    slide_content.appendChild(content_content);
    slide.appendChild(slide_content);
    slider.appendChild(slide);
});

next_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active');
    let nextSibling = active_slide.nextElementSibling;

    if (nextSibling == null) {
        nextSibling = first_slide;
    }

    if (nextSibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        nextSibling.classList.add('active');
    }
})
prev_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active');
    let nextSibling = active_slide.previousElementSibling;

    if (nextSibling == null || !nextSibling.classList.contains('slider__slide')) {
        nextSibling = last_slide;
    }

    if (nextSibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        nextSibling.classList.add('active');
    }
})


//