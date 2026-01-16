export function validateEmail(email: string): boolean {
    if (email.includes(" ")) return false;
    
    if (!email.includes("@")) return false;

    const emailSections = email.split("@");
    if (!emailSections[0] || emailSections[0].length === 0) return false;
    if (!emailSections[1] || emailSections[1].length === 0) return false;

    if (!emailSections[1].includes(".")) return false;

    if (emailSections[1].endsWith(".")) return false;

    return true;
}

