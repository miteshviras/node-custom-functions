// this function checks the given string is valid email or not.
// return true if string is valid.
export function isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
        return emailRegex.test(email)
}

// Export the specific function you want to import in other files
module.exports = {isValidEmail};
