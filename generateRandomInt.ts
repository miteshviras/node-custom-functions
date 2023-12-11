// get random digits
export function generateRandomInt(min : number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Export the specific function you want to import in other files
module.exports = {
  generateRandomInt
};
