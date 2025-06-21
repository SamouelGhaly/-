 // وسائل التواصل
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

