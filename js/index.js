document.addEventListener('DOMContentLoaded', function () {
    // Desktop dropdown handling
    const menuItems = document.querySelectorAll('.ENO-H-links > li');
    menuItems.forEach(item => {
        const dropdown = item.querySelector('.ENO-H-dropdownn');
        item.addEventListener('mouseenter', function () {
            if (dropdown && window.innerWidth > 1024) {
                dropdown.style.maxHeight = dropdown.scrollHeight + "px";
                dropdown.classList.add('show');
            }
        });
        item.addEventListener('mouseleave', function () {
            if (dropdown && window.innerWidth > 1024) {
                dropdown.classList.remove('show');
                setTimeout(() => {
                    dropdown.style.maxHeight = null;
                }, 500);
            }
        });
    });
    // Mobile menu handling
    let navLinks = document.querySelector(".ENO-H-nav-links");
    let menuOpenBtn = document.querySelector(".ENO-H-navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".ENO-H-nav-links .bx-x");
    let originalOverflow = window.getComputedStyle(document.body).overflow;

    menuOpenBtn.onclick = function () {
        navLinks.style.left = "0";
        navLinks.style.overflowY = "scroll";
        document.body.style.overflow = 'hidden';
    }
    menuCloseBtn.onclick = function () {
        navLinks.style.left = "-100%";
        document.body.style.overflow = originalOverflow;

        setTimeout(() => {
            navLinks.style.overflowY = "hidden";
        }, 500);
    }
    // Handle main menu dropdowns
    window.addEventListener('resize', function () {
        let jsArrows = document.querySelectorAll(".ENO-H-js-arrow");
        let moreArrows = document.querySelectorAll(".ENO-H-more-arrow");

        if (window.innerWidth < 1024) {
            // Function to handle click events
            function addClickHandlers() {
                jsArrows.forEach(jsArrow => {
                    jsArrow.onclick = function () {
                        let parentLi = this.closest('li');
                        let subMenu = parentLi.querySelector('.ENO-H-js-sub-menu');
                        if (subMenu) {
                            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
                            this.style.transform = subMenu.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
                        }
                    }
                });
                moreArrows.forEach(moreArrow => {
                    moreArrow.onclick = function () {
                        let parentLi = this.closest('.ENO-H-more');
                        let moreSubMenu = parentLi.querySelector('.ENO-H-js-sub-menu,.ENO-H-more-sub-menu');
                        if (moreSubMenu) {
                            moreSubMenu.style.display = moreSubMenu.style.display === 'block' ? 'none' : 'block';
                            this.style.transform = moreSubMenu.style.display === 'block' ? 'rotate(90deg)' : 'rotate(0deg)';
                        }
                    }
                });
            }
            // Function to reset submenus and arrow styles
            function resetSubMenus() {
                jsArrows.forEach(jsArrow => {
                    let parentLi = jsArrow.closest('li');
                    let subMenu = parentLi.querySelector('.ENO-H-js-sub-menu');
                    if (subMenu) {
                        subMenu.style.display = '';
                        jsArrow.style.transform = '';
                    }
                });
                moreArrows.forEach(moreArrow => {
                    let parentLi = moreArrow.closest('.ENO-H-more');
                    let moreSubMenu = parentLi.querySelector('.ENO-H-js-sub-menu,.ENO-H-more-sub-menu');
                    if (moreSubMenu) {
                        moreSubMenu.style.display = '';
                        moreArrow.style.transform = '';
                    }
                });
            }
            addClickHandlers();

            window.addEventListener('resize', () => {
                resetSubMenus();
                addClickHandlers();
            });

        } else {

            jsArrows.forEach(jsArrow => {
                jsArrow.onclick = null; // Remove the click event
            });

            moreArrows.forEach(moreArrow => {
                moreArrow.onclick = null; // Remove the click event
            });

        }
    });
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {

            navLinks.style.left = "0";
            navLinks.style.overflowY = "visible";
            document.body.style.overflow = 'auto';
        } else {
            navLinks.style.left = "-100%";
            navLinks.style.overflowY = "hidden";
        }
    });

    document.querySelectorAll('.sliderButtons button').forEach(button => {
        button.addEventListener('click', function () {
            const amount = this.getAttribute('data-amount');
            const imageUrl = this.getAttribute('data-image');
            const h2 = this.closest('.innerSliderDiv').querySelector('span');
            const img = this.closest('.innerSliderDiv').querySelector('.sliderImage');

            // Update the price
            h2.textContent = amount;

            // Update the image source
            img.src = imageUrl;

            // Remove active class from all buttons and add it to the clicked button
            this.closest('.sliderButtons').querySelectorAll('button').forEach(btn => {
                btn.classList.remove('active');
                // Reset button styles
                btn.style.backgroundColor = ''; // Remove any previous background color
                btn.style.color = ''; // Remove any previous text color
            });

            // Add active class to the clicked button and change styles
            this.classList.add('active');
            this.style.backgroundColor = 'black';
            this.style.color = 'white';
        });
    });

    document.querySelectorAll('.ENO-H-DynamicContentVisibleDiv').forEach(function (element) {
        element.addEventListener('click', function () {
            var hiddenDiv = this.nextElementSibling;
            var toggleIcon = this.querySelector('.ENO-H-toggle-icon a');

            if (hiddenDiv.style.height === '0px' || hiddenDiv.style.height === '') {
                hiddenDiv.style.height = hiddenDiv.scrollHeight + 'px';
                hiddenDiv.style.opacity = 1;
                toggleIcon.textContent = '-';
            } else {
                hiddenDiv.style.height = '0px';
                hiddenDiv.style.opacity = 0;
                toggleIcon.textContent = '+';
            }
        });
    });


});


const swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});