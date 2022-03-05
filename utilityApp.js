const readLineSync = require('readline-sync');
const crypto = require('crypto');

const utility = ['URL Encoder', 'URL Decoder', 'Base64 Encoding', 'Base64 Decoding', 'String Hashing', 'Epoch Converters', 'Binary/Decimal/Hex/Octal Converters', 'RGB To Hex', 'Hex To RGB', 'Unit Converters\n'];
  
function welcome(){
  console.log(`Welcome to Utility App.\n`);
}

function startUtility(utility){
  for(let i = 0; i<utility.length; i++){
    console.log(i+1 + ": " + utility[i]);
  }
}


// 1-> Encode
const encodeResult = (urlToEncode) => {
  const encoded = encodeURIComponent(urlToEncode);
  console.log(`Encoded url: ${encoded}`);
}

// 2-> Decode
const decodeResult = (urlToDecode) => {
  const decoded = decodeURIComponent(urlToDecode);
  console.log(`Decoded url: ${decoded}`);
}

// 3-> Base64Encode
const encodeBase64 = (stringToEncode) => {
  const encoded = Buffer.from(stringToEncode).toString('base64');
  console.log(`base64Encode: ${encoded}`);
}

// 4-> Base64Decode
const decodeBase64 = (stringToDecode) => {
  const decoded = Buffer.from(stringToDecode, 'base64').toString('ascii');
  console.log(decoded);
}

// 5 -> String Hashing

// 6.1 -> Epoch Converters
const epochToHuman = (epochValue) => {
  const myDate = new Date(epochValue);
   let humanDate = {
      year: myDate.getFullYear(),
      month: myDate.getMonth()+1,
      date: myDate.getDate(),
      hours: myDate.getHours(),
      minutes: myDate.getMinutes(),
      seconds: myDate.getSeconds()

    }
  console.log(humanDate);
} 

// 6.2 -> Human to Epoch
const humanToEpoch = () => {
  console.log(`You selected Human to Epoch\n`);
  const year = readLineSync.question('i: Enter the value of year\n');
  const month = readLineSync.question('ii: Enter the value of month\n');
  const date = readLineSync.question('i: Enter the value of date\n');
  const hours = readLineSync.question('i: Enter the value of hours\n');
  const minutes = readLineSync.question('i: Enter the value of minutes\n');
  const seconds = readLineSync.question('i: Enter the value of seconds\n');
  const myDate = new Date(year, month-1, date, hours, minutes, seconds);
  const epochValue = Math.floor(myDate.getTime()/1000.0);
  console.log(`Your Epoch Value is: ${epochValue}`);
}

// 7 -> Binary/Decimal/Hex/Octal Converters
const converters = ['a: Binary to Decimal', 'b: Decimal to Binary', 'c: Binary to Octal', 'd: Octal to Binary', 'e: Binary to HexaDecimal', 'f: HexaDecimal to Binary', 'g: Decimal to Octal', 'h: Octal to Decimal', 'i: Decimal to Hexadecimal', 'j: Hexadecimal to Decimal', 'k: Octal to Hexadecimal', 'l: Hexadecimal to Octal'];

const binaryToDecimal = binaryValue => {
  console.log(parseInt(binaryValue,2).toString(10));
}

const decimalToBinary = decimalValue => { console.log(parseInt(decimalValue,10).toString(2));
}
const binaryToOctal = binaryalue => {
  console.log(parseInt(binaryalue,2).toString(8));
}
const octalToBinary = octalValue => { console.log(parseInt(octalValue,8).toString(2));
}
const binaryToHexadecimal = binaryValue => {
  console.log(parseInt(bin,2).toString(16));
}
const hexadecimalToBinary = hexadecimalValue => { console.log(parseInt(hexadecimalValue,16).toString(2));
}
const decimalToOctal = decimalValue => {
  console.log(parseInt(decimalValue,10).toString(8));
}
const octalToDecimal = octalValue => {
  console.log(parseInt(octalValue,8).toString(10));
}
const decimalToHexadecimal = decimalValue => {
  console.log(parseInt(decimalValue,10).toString(16));
}
const hexadecimalToDecimal = hexadecimalvalue => {
  console.log(parseInt(hexadecimalvalue,16).toString(10));
}
const octalToHexadecimal = octalValue => {
  console.log(parseInt(octalValue,8).toString(16));
}
const hexadecimalToOctal = hexadecimalvalue => {
  console.log(parseInt(hexadecimalvalue,16).toString(8));
}

// 8 -> RGB To Hex

const rgbToHex = () => {
  const redValue = readLineSync.question(`Enter the value of Red:\n`);
  const greenValue = readLineSync.question(`Enter the value of Green:\n`);
  const blueValue = readLineSync.question(`Enter the value of Blue:\n`);
    console.log(`Your Hex Value is: #${parseInt(25).toString(16)}${parseInt(34).toString(16)}${parseInt(43).toString(16)}`);
}

// 9 -> HEX To RGB

const hexToRgb =  hexValue => {
  let rgbToReturn = {
	Red: ' ',
	Green: ' ',
	Blue: ' '
};
	rgbToReturn = {...rgbToReturn, Red: parseInt(hexValue[1] + hexValue[2],16), Green: parseInt(hexValue[5] + hexValue[6],16), Blue: parseInt(hexValue[3] + hexValue[4],16)};
	const keys = Object.keys(rgbToReturn);
for (key of keys) {
    console.log(key + ": " + rgbToReturn[key]);
 }
}

// 10 -> Unit Converters
const units = ['a: cm to inches', 'b: inches to cm', 'c: Celsius to Fahrenheit', 'd: Fahrenheit to Celsius'];

const cmToInches = cmValue => {
  
}
const inchesToCm = inchValue => {
  
}
const celsiusToFahrenheit = celsiusValue => {
  let answer = (1.8 * celsiusValue + 32);
console.log(`Fahrenheit value: ${answer}`);

}
const fahrenheitToCelsius = fahrenheitValue => {
  let answer = (fahrenheitValue - 32) * 0.56;
  console.log(`Celsius Value: ${answer}`);  
}

const utilityChoice = () => {
  
const utilitySelected = readLineSync.question('Which utility function would you like to use?\n');
console.log(`You Selected ${utilitySelected}\n`);
  
if(utilitySelected === '1'){
  const url = readLineSync.question(`Enter the url you want to encode: `);
  encodeResult(url); 
}
  
else if(utilitySelected === '2'){
    const url = readLineSync.question(`Enter the url you want to decode: `);
  decodeResult(url);
}

else if(utilitySelected === '3'){
   const base64Encode = readLineSync.question(`Enter the string you want to encode:\n`);
  encodeBase64(base64Encode);
}

else if(utilitySelected === '4'){
   const base64Decode = readLineSync.question(`Enter the string you want to decode:\n`);
  decodeBase64(base64Decode);
}

else if(utilitySelected === '5'){
  console.log('This utility function in under construction\n');
}

else if(utilitySelected === '6'){
  const epochUtilitySelected = readLineSync.question(`1: Epoch to Human Date\n2: Human Date to Epoch\n`);
  if(epochUtilitySelected === '1'){
    const epochValue = readLineSync.question(`Enter the epoch value:\n`);
    epochToHuman(parseInt(epochValue));
  }
  else{
    humanToEpoch();
  }

}
  else if(utilitySelected === '7'){  
  converters.forEach((converter) => {
	console.log(converter);
});
    const converterSelected = readLineSync.question(`Which conversion you like to use?\n`);
    
    if(converterSelected === 'a'){
       const binaryValue = readLineSync.question(`Enter the Binary Number?\n`);
      binaryToDecimal(binaryToDecimalValue);
    }
    else if(converterSelected === 'b'){
       const decimalValue = readLineSync.question(`Enter the Decimal Number?\n`);
      decimalToBinary(decimalValue);
    }
    else if(converterSelected === 'c'){
          const binaryValue = readLineSync.question(`Enter the Binary Number?\n`);
      binaryToOctal(binaryValue);
    }
    else if(converterSelected === 'd'){
     const octalValue = readLineSync.question(`Enter the Octal Number?\n`);
      octalToBinary(octalValue);
    }
    else if(converterSelected === 'e'){
       const binaryValue = readLineSync.question(`Enter the Binary Number?\n`);
      binaryToHexadecimal(binaryValue);
    }
    else if(converterSelected === 'f'){
       const hexadecimalValue = readLineSync.question(`Enter the Hexadecimal Number?\n`);
      hexadecimalToBinary(hexadecimalValue);
    }
    else if(converterSelected === 'g'){
       const decimalValue = readLineSync.question(`Enter the Decimal Number?\n`);
      decimalToOctal(decimalValue);
    }
    else if(converterSelected === 'h'){
       const octalValue = readLineSync.question(`Enter the Octal Number?\n`);
      octalToDecimal(octalValue);
    }
    else if(converterSelected === 'i'){
       const decimalValue = readLineSync.question(`Enter the Decimal Number?\n`);
      decimalToHexadecimal(decimalValue);
    }
    else if(converterSelected === 'j'){
       const hexadecimalValue = readLineSync.question(`Enter the Hexadecimal Number?\n`);
      hexadecimalToDecimal(hexadecimalValue);
    }
    else if(converterSelected === 'k'){
       const octalValue = readLineSync.question(`Enter the Octal Number?\n`);
      octalToHexadecimal(octalValue);
    }
    else if(converterSelected === 'l'){
       const hexadecimalValue = readLineSync.question(`Enter the Hexadecimal Number?\n`);
      hexadecimalToOctal(hexadecimalValue);
    }else{
      console.log('Choose from a to b\n');
    }
    
  }

    else  if(utilitySelected === '8'){
      rgbToHex();
    }
       else  if(utilitySelected === '9'){
        const hexValue = readLineSync.question(`Enter the HEX value?\n`);
      hexToRgb(hexValue);
    }
    else  if(utilitySelected === '10'){
      units.forEach((unit) => {
        console.log(unit);
      });
     const unitSelected = readLineSync.question(`Which unit converters you like to use?\n`);
      if(unitSelected === 'a'){
       const cmValue = readLineSync.question(`Enter the cm value\n`);
        cmToInches();
      }else if(unitSelected === 'b'){
               const inchValue = readLineSync.question(`Enter the inch value\n`);
        inchesToCm();
      }else if(unitSelected === 'c'){
               const celsiusValue = readLineSync.question(`Enter the Celsius value\n`);
        celsiusToFahrenheit(celsiusValue);
      }else{
             const fahrenheitValue = readLineSync.question(`Enter the Fahrenheit value\n`);
        fahrenheitToCelsius(fahrenheitValue);
      }
    }
  
      
else{
  console.log('Enter choice from 1 to 9\n')
}
 

}


welcome();
startUtility(utility);
utilityChoice();



