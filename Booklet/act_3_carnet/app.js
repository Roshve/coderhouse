let id = "B47U89RE243"
let firstName = "Bart";
let lastName = "Simpson";
const fullName = `${firstName} ${lastName}`
let address = "742 Evergreen Terr";
let city = "Springfield";
let country = "USA";
const fullAddress = `${address}. ${city}, ${country}`
let sex = "M";
let day = 02;
let month = 11;
let year = 70;
const birthdate =`${day}-${month}-${year}`;

const carnet = `SPRINGFIELD \nDRIVER LICENSE \n${id} \n${fullName} \n${fullAddress} \n \nBIRTHDATE ${birthdate} \nSEX ${sex}`

console.log(carnet)