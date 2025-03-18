// ตัวอย่างโค้ดที่มี ESLint error ตาม Google Code Style
function sayHello(name) {
  console.log("Hello, " + name); // ควรใช้ template literals
  return "Hi, " + name;
}
        
sayHello("World")
