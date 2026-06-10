// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculatTotalPrice(products,promotionCode){
  let totalpPrice = 0
for (let product of products){
  totalpPrice = totalpPrice + product.price * product.quantity
} if (promotionCode === "SALE20"){
  totalpPrice = totalpPrice *0.8
}
else if (promotionCode === "SALE50"){
  totalpPrice = totalpPrice * 0.5
}
return totalpPrice
}
console.log(calculatTotalPrice(products))
console.log(calculatTotalPrice(products,"SALE20"))
console.log(calculatTotalPrice(products,"SALE50"))