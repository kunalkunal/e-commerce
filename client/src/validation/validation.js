export function validateEmailFieldsWithRequired(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email)
        return "Please fill this field";
    else if (!regex.test(email))
        return "Please enter a valid email address.";
    return true;
};
export function validateNameRequired(value) {
    var regex = /^([a-zA-Z]\s?)([a-zA-Z0-9!@#$%^&.,'-`]\s?)*$/;
    const regex2 = /^[^\s]/;
    if (!value)
        return "Please fill this field";
    else if (!regex.test(value))
        return "Please enter a valid name"
    return true;
};
export function validatingPassword(value) {
    var strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let isValid = strongRegex.test(value)
    if (!value)
        return "Please fill this field";
    else if (!isValid)
        return "Please use 8-15 characters with a mix of at least 1 uppercase, 1 lowercase,1 digit & 1 special character"
    return true;
};

