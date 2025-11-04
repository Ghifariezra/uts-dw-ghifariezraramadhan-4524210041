const dummyData = {
    name: "Ghifari Ezra Ramadhan",
    education: "S1 Informatika - Universitas Pancasila (2024 - 2028)",
    experience: `Frontend Developer di PT. Digital Nusantara (2022 - Sekarang)
- Mengembangkan antarmuka pengguna dengan React & Tailwind CSS.
- Bekerja sama dengan tim backend menggunakan REST API.
- Meningkatkan performa website hingga 35%.`,
    skills: "HTML, CSS, JavaScript, React, Node.js, Figma, Git",
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
};

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("name").value = dummyData.name;
    document.getElementById("education").value = dummyData.education;
    document.getElementById("experience").value = dummyData.experience;
    document.getElementById("skills").value = dummyData.skills;
    document.getElementById("photo").value = dummyData.photo;

    // Jalankan fungsi updatePreview jika kamu sudah punya
    if (typeof updatePreview === "function") updatePreview();
});
