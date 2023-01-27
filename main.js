
//Setting Kelvin temp. This value wont change
const kelvin = 293;


//Set celsius temp based on kelvin temp (celsius - 273). This value wont change
const celsius = kelvin - 273;


//calculate F temp using the C temp
let fahrenheit = celsius * (9 / 5) + 32;


//Round the F temp to a whole number
fahrenheit = Math.floor(fahrenheit);


//Log the results to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//Extra Credit!! Calculate newton
let newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton.`);