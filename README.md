# Portfolio (React + Vite + Tailwind CSS)

## เริ่มใช้งาน
    npm install
    npm run dev        # เปิดดูที่ http://localhost:5173
    npm run build      # สร้างไฟล์สำหรับขึ้นเว็บจริง (โฟลเดอร์ dist)

## แก้ไขข้อมูล
- ข้อมูลทั้งหมด (ชื่อ, เกี่ยวกับฉัน, ทักษะ, ผลงาน, ติดต่อ): `src/data.js`
- รูปตัวอย่างผลงาน: วางไฟล์ใน `public/projects/` แล้วใส่ path ที่ `images` ของโปรเจกต์นั้น เช่น ["/projects/a.jpg"]
- ลิงก์ Demo / Source Code: ใส่ที่ `demo` และ `repo` ของแต่ละโปรเจกต์ (เว้นว่าง = ไม่แสดงปุ่ม)
- รูปโปรไฟล์: วางไฟล์ใน `public/` แล้วใส่ path ที่ `hero.photo` เช่น "/me.jpg"
- สีและฟอนต์ทั้งเว็บ: `src/index.css` (ในบล็อก @theme)
- หน้าตาแต่ละ section: `src/components/`

## เอาขึ้นเว็บ
อัปโหลดโปรเจกต์ขึ้น GitHub แล้วเชื่อมกับ Vercel หรือ Netlify
(Build command: `npm run build`, Output directory: `dist`)
