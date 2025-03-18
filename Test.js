// ตัวอย่างโค้ดที่ไม่เป็นไปตามกฎของ ESLint และ Prettier
function sayHello(name) {
  console.log("Hello, " + name); // ❌ ควรใช้ template literals และมี semicolon
  return "Hi, " + name;
}

sayHello("World");
