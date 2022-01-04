let menuToggle = document.querySelector('.toggle');
let menuNavigation = document.querySelector('.navigation');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active-toggle');
    menuNavigation.classList.toggle('active-navigation');
}

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab a.active').classList.remove('active');
            tab_switcher.classList.add('active');

            gantiHalaman(page_id);
        });
        
    }
}

function gantiHalaman(page_id) {
    const halamanSaatIni = document.querySelector('.pages .page.page-active');
    halamanSaatIni.classList.remove('page-active');

    const halamanSelanjutnya = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    halamanSelanjutnya.classList.add('page-active');
}