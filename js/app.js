// autoplay Services

let tabs = document.querySelectorAll(".services-nav .nav-link");
let tabPanes = document.querySelectorAll("#services-tabContent .tab-pane");

let i = 0;
let autoplay;

function services() {
    autoplay = setTimeout(() => {
        let tab = tabs[i];
        let tabPane = tabPanes[i];
        let nextIndex = (i + 1) % tabs.length;

        let nextTab = tabs[nextIndex];
        let nextTabPane = tabPanes[nextIndex];

        tab.classList.add("active");
        tabPane.classList.add("show");

        setTimeout(() => {
            tab.classList.remove("active");
            nextTab.classList.add("active");
            tabPane.classList.remove("show");
            nextTabPane.classList.add("show");

            i = nextIndex;
            services();
        }, 5000);

    }, 5000);
}

services();

// stop Services autoplay when a tab is clicked

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        clearTimeout(autoplay);

        tabs.forEach(t => t.classList.remove("active"));
        tabPanes.forEach(pane => pane.classList.remove("show"));

        tab.classList.add("active");
        tabPanes[index].classList.add("show");

        i = index;
    });
});
