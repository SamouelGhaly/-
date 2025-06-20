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





(function() {
  let executed = false;

  const insertButtonBeforeSearchBox = () => {
    const targetElement = document.getElementById("BlogSearch1");
    if (!targetElement || executed) return;

    // إنشاء الزرار
    const button = document.createElement("button");
    button.id = "searchToggle";
    button.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

    // إدراج الزرار قبل عنصر البحث
    targetElement.parentNode.insertBefore(button, targetElement);

    executed = true; // علشان ما يتنفذش الكود تاني
    clearInterval(tryFind); // نوقف التكرار
  };

  // نحاول نلاقي العنصر كل 500ms
  const tryFind = setInterval(insertButtonBeforeSearchBox, 500);
})();





// اخفاء زر البحث
document.getElementById("searchToggle").addEventListener("click", function () {
  var box = document.getElementById("BlogSearch1");
  if (box.style.display === "none" || box.style.display === "") {
    box.style.display = "block";

  } else {
    box.style.display = "none";

  }
});
