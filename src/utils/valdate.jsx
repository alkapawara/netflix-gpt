export const CheckValidFdata = (email, pass, fname) => {
    // Check if inputs are empty
    if (!email) return "Email is required";
    if (!pass) return "Password is required";
    if (fname !== undefined && !fname) return "Full name is required"; // Only for sign-up

    // Validation patterns
    let emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    let passTest = /^(?=.*\d)(?=.*[a-z])(?=.*[\W]).{6,20}$/.test(pass);
    let fullnameTest = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/.test(fname || ""); // Handle undefined in sign-in mode

    // Validate each field
    if (fname !== undefined && !fullnameTest) {
        return "Please enter a valid full name (at least 3 characters)";
    }
    if (!emailTest) {
        return "Please enter a valid email";
    }
    if (!passTest) {
        return "Please enter a valid password (6-20 characters, at least 1 number & 1 special character)";
    }

    return true;
};
