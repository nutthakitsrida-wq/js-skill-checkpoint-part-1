// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  let result = "";
  let passwordlength = userPassword.length;

  if (passwordlength < 6) {
    result = "Weak";
  } else if (passwordlength <= 10) {
    result = "Medium";
  } else {
    result = "Strong";
  }

  return result;
}

console.log(checkPasswordStrength("sho"));
console.log(checkPasswordStrength("shogun"));
console.log(checkPasswordStrength("shogunnutthakit"));