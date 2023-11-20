let btn = document.querySelector(".side-bar");
let aside = document.getElementsByTagName("aside")[0];

btn.addEventListener("click", () => {
    aside.classList.toggle("js-sidebar");
});

// search js

let open_btn = document.querySelector(".search_open");
let close_btn = document.querySelector(".search_close"); // Fixed missing dot
let search_box = document.querySelector("#search");

open_btn.addEventListener("click", () => {
    search_box.classList.add("js_search-2");
});

close_btn.addEventListener("click", () => {
    search_box.classList.remove("js_search-2");
    
});

// password js

let inp = document.querySelector("#pass");
let showBtn = document.querySelector("#pass_show_hide");
let slas_h = document.querySelector("#slash");

showBtn.addEventListener("click", () => {
    
    if (inp.type === "password") {
        inp.type = "text";
        showBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    } else {
        inp.type = "password";
        showBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
});







