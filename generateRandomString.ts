// limit is for string limit.
export function generateRandomString(limit = 32) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = limit; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

// Export the specific function you want to import in other files
module.exports = {generateRandomString};
