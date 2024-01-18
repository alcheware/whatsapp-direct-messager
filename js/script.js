function formUrl(phoneNumber) {
    let url = "https://wa.me/";
    return phoneNumber.includes("+") ? url + phoneNumber : url + "+" + phoneNumber;
}

function onKeyUp(phoneNumberElement, linkElement) {
    let input = phoneNumberElement.value;
    let invalid = false;
    let errorRegex = /[^+0-9]+/;
    errorRegex.test(input) || input === "" ? invalid = true : invalid = false;

    if (invalid) {
        phoneNumberElement.setAttribute("class", "number-error");
        linkElement.setAttribute("href", "#");
        linkElement.innerHTML = "Invalid phone number";
        return;
    }

    phoneNumberElement.setAttribute("class", "number-ok");
    let url = formUrl(input);
    linkElement.setAttribute("href", url);
    linkElement.innerHTML = url;
}

window.onload = () => {
    let input = document.getElementById("phone-number");
    let urlElement = document.getElementById("url");
    input.addEventListener("keyup", (e) => {onKeyUp(input, urlElement)});
}