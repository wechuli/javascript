let phrase =
  "First number is 32hpa, and a second number . Here is the last numbe%.";

let phrasefloat =
  "The PI is usually 3.142m/s and I will just insert 57558.434346966 just to see";

let BarPress = "300hPa";
let reg = /\d+/g;
let regF = /\d+\.\d+/g;
let nonNumber = /[^0-9]/g;
let nonNumberF = /[^\d+\.\d+]/g;
let SoilMoist = "578.125%";

let result = phrase.match(reg);
let resultF = phrasefloat.match(regF);

let data = {
  payload_fields: {
    B: "No Rain",
    BarPress: "300hPa",
    Evapo: "0kg",
    RelHum: "0%",
    SoilMoist: "578.125%",
    TempIn: "25°C",
    TempOut: "0°C",
    Voltage: "3.6v",
    WindSpeed: "0m/s"
  }
};
console.log(result[0]);
console.log(resultF);
console.log(BarPress.match(reg));
console.log(BarPress.match(nonNumber).join(""));
console.log(SoilMoist.match(nonNumberF).join(""));

for (let key in data.payload_fields) {
  console.log(key);
}

if ("two" in ["two", "dd"]) {
  console.log("its there");
} else {
  console.log("Nope");
}
