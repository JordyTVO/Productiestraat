const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})


/*
window.onscroll = function () {scrollFixedHeader()};

var header = document.getElementById("main-menu");
var fixed = header.offsetTop;

function scrollFixedHeader(){
    if (window.pageYOffset > fixed){
        header.classList.add("menu-fixed");
    } else {
        header.classList.remove("menu-fixed");
    }
}*/