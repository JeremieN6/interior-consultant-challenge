
var x = document.getElementById("nav_mobile");
var fullPage = document.getElementById("container_full_page");
var logo = document.getElementById("logo");
var icon_burger = document.getElementById("icon_burger");
var ul_style = document.getElementById("ul_style");
var footer = document.querySelector("footer");
var iconClose = document.getElementById("icon_close");

function menuOpen() {
if (x.style.display === "block") {
    x.style.display = "none";
} else {
    x.style.display = "flex";
    icon_burger.style.display = "none";
    fullPage.style.display = "none";
    logo.style.display = "none";
    ul_style.style.listStyleType = "none";
    footer.style.display = "none";
    iconClose.style.display = "block";
}
}
function menuClose() {
    x.style.display = "none";
    icon_burger.style.display = "block";
    fullPage.style.display = "flex";
    logo.style.display = "block";
    footer.style.display = "flex";
    iconClose.style.display = "none";
}