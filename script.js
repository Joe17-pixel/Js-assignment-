let studentName = "Kityo Yunus";
console.log("Student Name: ", studentName);

let lightColour = "blue";

switch(lightColour){
    case "Red":
        console.log("Stop");

        break;

        case "Yellow":
        console.log("Get ready");

        break;

        case "Green":
            console.log("Go");

            break;

            default:
                console.log("Light Malfunction");
}

let averageScore = 65;
let familyIncome = 600000;
let attendance = 92;
console.log(attendance + "%");

if(averageScore >=80){
if(familyIncome <500000);
if(attendance >90);
console.log("Eligible For Scholarship");
}else{
    console.log("Not Eligible For Scholarship");
}

let weight = 85;
let height = 175;
let BMI = weight / ((height / 100)**2);

if(BMI <18.5){
    console.log("Underweight");

}  if(18.5 < BMI < 24.9){
    console.log("Normal Weight");

} if(25 < BMI < 29.9){
    console.log("Overweight");

} if(BMI >= 30){
    console.log("Obese");
}

{
    let rate;
let units = 75;
let totalbill = units * rate

if(units <= 50) {
    rate = 250;
} else if (51 < units < 100) {
    rate = 400;

} else if (101 < units < 200) {
    rate = 600;

} else if (units > 200) {
    rate = 800;
}
    console.log('Units:' ${units}) | 'Rate;' ${rate} UGX 
        | ('Total Bill:' ${totalBill} );
}
