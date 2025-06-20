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






// نعرّف الدالة اللي هننفذ فيها الكود لما BlogSearch1 يظهر
function Search1() {
  let targetElement = document.getElementById("BlogSearch1");

  // لو العنصر مش موجود، مانكملش
  if (!targetElement) return;

  // نجهز الزرار
  let button = document.createElement("button");
  button.id = "searchToggle";
  button.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

  // نضيف الزرار قبل العنصر
  targetElement.parentNode.insertBefore(button, targetElement);

  // بعد ما نضيف الزرار، نوقف المراقبة
  observer.disconnect();
}

// نجهز الـ MutationObserver
const observer = new MutationObserver((mutationsList, observer) => {
  // كل مرة بيحصل تغيير في الـ DOM، نشوف إذا العنصر ظهر
  if (document.getElementById("BlogSearch1")) {
    insertButtonBeforeSearchBox();
  }
});

// نبدأ المراقبة على جسم الصفحة كله (document body)
observer.observe(document.body, {
  childList: true,       // راقب إضافة/إزالة عناصر
  subtree: true          // راقب كل العناصر المتفرعة (مش بس اللي تحت body مباشرة)
});
// نفذ الدالة بعد تحميل الصفحة
Search1()






// اخفاء زر البحث
document.getElementById("searchToggle").addEventListener("click", function () {
  var box = document.getElementById("BlogSearch1");
  if (box.style.display === "none" || box.style.display === "") {
    box.style.display = "block";

  } else {
    box.style.display = "none";

  }
});
