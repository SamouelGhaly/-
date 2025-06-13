// document.querySelector('a[href *="facebook"]').innerHTML = '<i class="fa-brands fa-facebook"></i>';




// وسائل التواصل

document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "facebook" 
&& (e.innerHTML = '<i class="fa-brands fa-facebook"></i>'));
document.querySelectorAll("a").forEach(e => e.textContent.trim().toLowerCase() === "youtube" 
&& (e.innerHTML = '<i class="fa-brands fa-youtube"></i>'));
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

