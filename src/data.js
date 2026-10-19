/* ---------- Hero ---------- */
export const hero = {
  name: "กัลยรัตน์ ถิ่นหาญวงศ์",
  role: "Frontend, UX UI Designer",
  intro:
    "นักศึกษาสาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ มหาวิทยาลัยศรีปทุม", // TODO
  photo: "", // TODO: วางรูปในโฟลเดอร์ public/ แล้วใส่ เช่น "/me.jpg" (เว้นว่างไว้จะแสดงกรอบรูป)
};

/* ---------- เกี่ยวกับฉัน (เพิ่ม/ลบย่อหน้าได้) ---------- */
export const about = [
  "ฉันชื่อนางสาวกัลยรัตน์ ถิ่นหาญวงศ์",
  "นักศึกษาชั้นปีที่ 4 คณะเทคโนโลยีสารสนเทศ",
  "สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟแวร์ มหาวิทยาลัยศรีปทุม",
  "เกรดเฉลี่ยสะสม 3.79",
  "มีความสนใจในสายงานด้าน Frontend และการออกแบบ UX/UI",
  "ฉันกระตือรือร้นที่จะได้รับประสบการณ์จริงผ่านโปรเจกต์ การฝึกงาน และการทำงานร่วมกัน",
  "พร้อมเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ และมองหาโอกาสในการเติบโตในฐานะนักพัฒนาและนักออกแบบ",
];

/* ---------- ทักษะ ---------- */
export const skills = [
  {
    group: "Frontend",
    items: ["HTML", "JavaScript", "React", "Tailwind CSS", "C++"],
  },
  { group: "Backend", items: ["Python", "Node.js", "FastAPI"] },
  { group: "Database & Tools", items: ["MySQL", "MongoDB", "Docker", "n8n"] },
];

/* ---------- ผลงาน ----------
   ช่อง description / problem / solution / role / link ไม่ต้องการ
   ลบหรือเว้นว่างได้ จะไม่แสดงบนหน้าเว็บ */
export const projects = [
  {
    title: "Slide Me App",
    tagline: "แอปพลิเคชันที่รวบรวมบริการขนส่งรถยนต์โดยรถสไลด์ไว้ในที่เดียว",
    problem:
      "กระบวนการจัดการขนส่งรถยนต์มีความยุ่งยาก กระจัดกระจาย และเข้าถึงได้ยาก",
    solution:
      "พัฒนาแอปพลิเคชันที่รวบรวมบริการขนส่งรถยนต์ไว้ในที่เดียว เพื่อให้เข้าถึงได้สะดวกยิ่งขึ้น",
    role: "พัฒนาฟีเจอร์สำหรับการส่งคำขอขนส่งรถยนต์ และการติดตามสถานะรถสไลด์",
    tech: [
      {
        label: "Frontend",
        items: ["JavaScript", "React", "Vite", "Tailwind CSS"],
      },
      { label: "Backend", items: ["Node.js", "Express.js", "REST API"] },
      { label: "Database", items: ["MySQL"] },
      { label: "Tools & Libraries", items: ["Axios", "JWT", "Swagger"] },
    ],
    repo: "https://github.com/Kanyarat2007/SlideMeProject",
    images: [
      "/projects/SlideMe1.png",
      "/projects/SlideMe2.png",
    ],
  },
  {
    title: "Postal Service",
    tagline: "ระบบการจัดการพัสดุไปรษณีย์ ทั้งฝั่งผู้ฝากส่งและผู้รับฝาก",
    problem:
      "ความยุ่งยากในการลงทะเบียนและติดตามสถานะของพัสดุ ความผิดพลาดในการกรอกข้อมูลและระบบที่ไม่ทันสมัย ใช้งานยาก",
    solution:
      "พัฒนาเว็บแอปพลิเคชันระบบงานไปรษณีย์สำหรับผู้รับฝาก ออกแบบให้ใช้งานง่าย และเชื่อมต่อกับเว็บเซอร์วิสของไปรษณีย์ไทยเพื่อจัดการข้อมูลสำคัญได้อย่างมีประสิทธิภาพ",
    role: "พัฒนาในส่วนของ Frontend และ Mocha Test",
    tech: [
      {
        label: "Frontend",
        items: ["React", "Vite", "Bootstrap 5", "Tailwind CSS", "React Router"],
      },
      { label: "Backend", items: ["Node.js", "Express.js", "REST API"] },
      { label: "Database", items: ["MongoDB", "Mongoose"] },
      { label: "Authentication", items: ["JWT", "bcryptjs"] },
      {
        label: "API Integration",
        items: ["Thailand Post API", "Longdo Map API"],
      },
      { label: "Testing", items: ["Mocha", "Chai", "Supertest"] },
      { label: "Libraries", items: ["Axios"] },
    ],
    repo: "https://github.com/Kanyarat2007/Postal-Service",
    images: [
      "/projects/PostalService1.png",
      "/projects/PostalService2.png",
      "/projects/PostalService3.png",
      "/projects/PostalService4.png",
      "/projects/PostalService5.png",
    ],
  },
  {
    title: "Website Ma An (มาอ่าน)",
    tagline: "เว็บไซต์อ่านนิยายออนไลน์",
    description:
      "สามารถเลือกหมวดหมู่ที่สนใจ แสดงความคิดเห็น เพิ่มนิยายที่ชอบเข้าชั้นหนังสือ มีระบบเติมเหรียญและซื้อเหรียญภายในเว็บไซต์ นักอ่านสามารถเป็นนักเขียนได้โดยการเพิ่มนามปากา และสามารถติดเหรียญเนื้อหานิยายเพื่อรับรายได้ได้ตามต้องการ",
    tech: [
      { label: "Programming Language", items: ["C#"] },
      { label: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
      { label: "Backend / Framework", items: ["ASP.NET Core MVC"] },
    ],
    repo: "https://github.com/Kanyarat2007/Ma-An",
    images: [
      "/projects/MaAn1.png",
      "/projects/MaAn2.png",
      "/projects/MaAn3.png",
      "/projects/MaAn4.png",
      "/projects/MaAn5.png",
    ],
  },
  {
    title: "AI Chatbot JitArsa PhaPai",
    tagline: "Chatbot รวบรวมข้อมูลกิจกรรมอาสาสมัครไว้ในที่เดียว",
    problem:
      "ข้อมูลเกี่ยวกับกิจกรรมอาสาสมัครกระจายอยู่บนหลายแพลตฟอร์ม ทำให้ผู้ใช้ลำบากในการค้นหาข้อมูล",
    solution:
      "Chatbot รวบรวมข้อมูลกิจกรรมอาสาสมัครไว้ในที่เดียว ช่วยให้ผู้ใช้ค้นหาตามจังหวัดได้ พร้อมบันทึกประวัติการสนทนา",
    role: "ทำความสะอาดข้อมูลที่รวบรวมมา และออกแบบ UX/UI ของระบบ",
    tech: [
      { label: "LLM", items: ["Llama 3.3 70B Versatile (Groq API)"] },
      {
        label: "Embedding Model",
        items: ["paraphrase-multilingual-MiniLM-L12-v2"],
      },
      { label: "Vector Store", items: ["FAISS"] },
      { label: "Backend Framework", items: ["FastAPI"] },
    ],
    repo: "https://github.com/Kanyarat2007/AI-Chatbot-JitArsa-PhaPai",
    images: ["/projects/AIChatbot1.png"],
  },
];

/* ---------- ติดต่อ ---------- */
export const contact = {
  email: "kanyaratthinhanwong04@gmail.com",
  phone: "098-253-8264",
  github: "https://github.com/Kanyarat2007",
  linkedin: "https://www.linkedin.com/in/kanyarat-thinhanwong-a68a10434",
};

/* ---------- เมนูด้านบน ---------- */
export const nav = [
  ["about", "เกี่ยวกับฉัน"],
  ["skills", "ทักษะ"],
  ["projects", "ผลงาน"],
  ["contact", "ติดต่อ"],
];
