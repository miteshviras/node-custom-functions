// mast phone nunber with symbol.
export function maskPhoneNumber(phoneNumber: string, visibleDigits: number = 4,symbol: string = '*'): string {
    // Remove all non-digit characters from the phone number
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Calculate the number of asterisks required
    const masked = symbol.repeat(cleanedPhoneNumber.length - visibleDigits);

    // Extract and keep the last 'visibleDigits' characters
    const visiblePart = cleanedPhoneNumber.slice(-visibleDigits);

    // Combine the asterisks and visible part
    return `${masked}${visiblePart}`;
}

// Export the specific function you want to import in other files
module.exports = {
maskPhoneNumber
};
