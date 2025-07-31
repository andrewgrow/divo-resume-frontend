// /src/utils/validator.js

const emailRegex = /^[a-zA-Z](?:[\w.+-]*[a-zA-Z0-9])?@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
const phoneRegex = /^\+?\d{7,15}$/;

export function isValidEmail(email) {
    return emailRegex.test(email);
}

export function isValidPhone(phone) {
    const cleaned = phone.replace(/[^\d+]/g, "");
    return phoneRegex.test(cleaned);
}