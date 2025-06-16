// document.querySelector('a[href *="facebook"]').innerHTML = '<i class="fa-brands fa-facebook"></i>';




// وسائل التواصل

document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "facebook" 
&& (e.innerHTML = '<i class="fa-brands fa-facebook"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "youtube" 
&& (e.innerHTML = '<i class="fa fa-youtube" aria-hidden="true"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "blogger" 
&& (e.innerHTML = '<i class="fa-brands fa-blogger-b"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "wordpress" 
&& (e.innerHTML = '<i class="fa-brands fa-wordpress-simple"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "twitter" 
&& (e.innerHTML = '<i class="fa-brands fa-twitter"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "whatsapp" 
&& (e.innerHTML = '<i class="fa-brands fa-square-whatsapp"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "instagram" 
&& (e.innerHTML = '<i class="fa-brands fa-square-instagram"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "website" 
&& (e.innerHTML = '<i class="fa-solid fa-globe"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "telegram" 
&& (e.innerHTML = '<i class="fa-brands fa-telegram"></i>'));

// زر البحث
// document.querySelector('input[type*="submit"]').outerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
  // 1. نجيب العنصر اللي عايزين نضيف قبله (اللي هو BlogSearch1)
let targetElement = document.getElementById("BlogSearch1");

// 2. نجهز الزرار اللي هنضيفه
let button = document.createElement("button");
button.id = "searchToggle";
button.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

// 3. نضيف الزرار قبل BlogSearch1
targetElement.parentNode.insertBefore(button, targetElement);


// اخفاء زر البحث
document.getElementById("searchToggle").addEventListener("click", function () {
    var box = document.getElementById("BlogSearch1");
    if (box.style.display === "none" || box.style.display === "") {
      box.style.display = "block";
      
    } else {
        box.style.display = "none";

    }
  });



  