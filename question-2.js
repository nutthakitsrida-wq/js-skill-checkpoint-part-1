// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200
// ผมจำ syntax ที่เพิ้ม orange เข้ามาไม่ได้ครับ //
let total = 0
for (let item of inventory){
  total = total + item.price * item.quantity  
}
console.log(  `มูลค่ารวมของสินค้าทั้งหมดในจำนวนสต๊อก ${total}`)