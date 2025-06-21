// طريقة اخري لتغير وسائل التواصل الاجتماعي

function SocialMediaIcons() {
  const iconMap = {
    youtube: "fa-youtube",
    facebook: "fa-facebook",
    twitter: "fa-twitter",
    instagram: "fa-instagram"
  };
  // حدد كل العناصر <a> اللي جوا الـ LinkList1
  const links = document.querySelectorAll("#LinkList1 a");

  links.forEach(link => {
    // خزن النص الأصلي وحوله لحروف صغيرة للتأكد
    let text = link.textContent.trim().toLowerCase();
    // هنا بنفحص الكلمة ونغير المحتوى حسبها
    if (iconMap[text]) {
      link.innerHTML = `<i class="fa ${iconMap[text]}" aria-hidden="true"></i>`;
    }
  });
}
// نفذ الدالة بعد تحميل الصفحة
window.onload = SocialMediaIcons;



// زر البحث
// document.querySelector('input[type*="submit"]').outerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

// 1. نجيب العنصر اللي عايزين نضيف قبله (اللي هو BlogSearch1)
let targetElement = document.getElementById("HTML301");

// 2. نجهز الزرار اللي هنضيفه
let button = document.createElement("button");
button.id = "searchToggle";
button.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

// 3. نضيف الزرار قبل BlogSearch1
targetElement.parentNode.insertBefore(button, targetElement);






// اخفاء زر البحث
document.getElementById("searchToggle").addEventListener("click", function () {
  var box = document.getElementById("HTML301");
  if (box.style.display === "none" || box.style.display === "") {
    box.style.display = "block";

  } else {
    box.style.display = "none";

  }
});
