// Order
var menu = document.getElementsByClassName("menu")[0];
var menuVisible = localStorage.getItem('menuVisible') === 'true';

// Khôi phục trạng thái hiển thị của menu
menu.style.display = menuVisible ? "block" : "none";

function order_Menu() {
    menuVisible = !menuVisible;
    menu.style.display = menuVisible ? "block" : "none";
    // Lưu trạng thái hiển thị của menu
    localStorage.setItem('menuVisible', menuVisible);
}

// Staff
var staff = document.getElementsByClassName("staff")[0];
var staffVisible = localStorage.getItem('staffVisible') === 'true';

staff.style.display = staffVisible ? "block" : "none";

function staff_Menu() {
    staffVisible = !staffVisible;
    staff.style.display = staffVisible ? "block" : "none";
    localStorage.setItem('staffVisible', staffVisible);
}