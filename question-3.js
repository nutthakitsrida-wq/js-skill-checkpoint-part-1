// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
       let passwordlength = userPassword.length
       if (passwordlength < 6){
        result= "weak"
       }
       else if (passwordlength <=10) {
        result = "medium"
       }
        else (
            result = "strong"
        )
          return result
    }
    console.log(checkPasswordStrength("sho"))
    console.log(checkPasswordStrength("shogun"))
    console.log(checkPasswordStrength("shogunnutthakit"))


 