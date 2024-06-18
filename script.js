document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // หยุดการบันทึกฟอร์มแบบปกติ

        // ดึงข้อมูลจากฟอร์ม
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // เตรียมข้อมูลสำหรับส่งไปยังเซิร์ฟเวอร์
        var formData = {
            name: name,
            email: email,
            message: message
        };

        // ส่งข้อมูลผ่าน AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // การตอบกลับจากเซิร์ฟเวอร์ (ตอบกลับสำเร็จ)
                alert('ข้อความถูกส่งไปยังเราแล้ว');
                // ล้างฟอร์มหลังจากส่งข้อมูลสำเร็จ
                contactForm.reset();
            }
        };
        xhr.send(JSON.stringify(formData));
    });
});
