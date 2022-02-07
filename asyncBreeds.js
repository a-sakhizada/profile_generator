const fs = require('fs');

// //incorrect aync logic -- async functions dont return data

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//       console.log("error: ", error);
//       console.log("data: ", data)
//     console.log("In readFile's Callback: it has the data.");
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) return data;
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
// };

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!



//correct way
const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
    console.log('breedDetailsFromFile: Calling readFile...');
    fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
        console.log("In readFile's callback: it has the data.")
        if(!error) functionToRunWhenThingsAreDone(data);
    });
}

// const printOutCatBreed = breed => {
//     console.log("return value: ", breed);
// }

breedDetailsFromFile("Bombay", breed => {
    console.log("return value: ", breed);

})