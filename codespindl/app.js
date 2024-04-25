const counters = document.querySelectorAll('.num');
const counters2 = document.querySelectorAll('.num2')
const speed = 100;
const speed2 = 20;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('target');
		const count = +counter.innerText;


		const inc = target / speed;

		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

counters2.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('target');
		const count = +counter.innerText;


		const inc = target / speed2;

		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show-dropdown-menu');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target)) {
            dropdownMenu.classList.remove('show-dropdown-menu');
        }
    });
});





