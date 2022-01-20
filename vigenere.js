/**
 * Encrypt a plaintext string based on a key using the Vigenere cipher.
 * @param {string} plaintext The plaintext string.
 * @param {string} key The key.
 * @returns {string} The encrypted string.
 */
function vigenere_encrypt(plaintext, key) {
    return plaintext.normalize('NFD').replace(/[\W_]/g, '').toUpperCase().split('').map((char, index) => String.fromCharCode('A'.charCodeAt() + (char.charCodeAt() + key[index % key.length].charCodeAt() - 2 * 'A'.charCodeAt()) % ('Z'.charCodeAt() - 'A'.charCodeAt() + 1))).join('');
}

/**
 * Decrypt a Vigenere-encrypted string based on a key using the Vigenere cipher.
 * @param {string} encrypted The encrypted string.
 * @param {string} key The key.
 * @returns {string} The decrypted string.
 */
function vigenere_decrypt(encrypted, key) {
    return encrypted.normalize('NFD').replace(/[\W_]/g, '').toUpperCase().split('').map((char, index) => String.fromCharCode('A'.charCodeAt() + (char.charCodeAt() - key[index % key.length].charCodeAt() + 2 * 'A'.charCodeAt()) % ('Z'.charCodeAt() - 'A'.charCodeAt() + 1))).join('');
}