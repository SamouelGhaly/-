/* وسائل التواصل
==========================================*/
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

/* الضغط علي ايقونة زر البحث
==========================================*//*
    // استهداف أول عنصر أيقونة بالصفحة
    const icon = document.querySelector(".fa-magnifying-glass");

    // استهداف الفورم بناءً على الكلاس
    const form = document.querySelector("#BlogSearch1 form");

    icon.addEventListener("click", function () {
        form.classList.toggle("hidden-form");
        form.classList.toggle("visible-form");
    });
*/


const icon = document.querySelector(".fa-magnifying-glass");
const form = icon.nextElementSibling;
const input = form.querySelector("#BlogSearch1 form");

icon.addEventListener("click", function (e) {
  // لو الفورم مش ظاهر، نعرضه فقط
  if (form.classList.contains("hidden-form")) {
    form.classList.remove("hidden-form");
    form.classList.add("visible-form");
    input.focus(); // تركّز تلقائي على خانة البحث
  } else {
    // نمنع الإرسال التلقائي
    e.preventDefault();

    // لو في قيمة مدخلة، نرسل البحث يدويًا
    if (input.value.trim() !== "") {
      // نحذف القيمة
      const query = input.value;

      // نمسح الحقل ونخفي الفورم
      input.value = "";
      form.classList.remove("visible-form");
      form.classList.add("hidden-form");

      // نعيد التوجيه يدويًا لنتيجة البحث
      window.location.href = form.action + "?q=" + encodeURIComponent(query);
    }
  }
}); 
