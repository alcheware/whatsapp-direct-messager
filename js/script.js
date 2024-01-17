function form_url(phone_number) {
    let url = "https://wa.me/";
    return phone_number.includes("+") ? url + phone_number : url + "+" + phone_number;
}

function on_keyup(phone_number_element, link_element) {
    let input = phone_number_element.value;
    let invalid = false;
    let error_regex = /[^+0-9]+/;
    error_regex.test(input) ? invalid = true : invalid = false;

    if (invalid) {
        phone_number_element.setAttribute("class", "number-error");
        link_element.setAttribute("href", "#");
        link_element.innerHTML = "Invalid phone number";
        return;
    }

    phone_number_element.setAttribute("class", "number-ok");
    let url = form_url(input);
    link_element.setAttribute("href", url);
    link_element.innerHTML = url;
}

window.onload = () => {
    let input = document.getElementById("phone-number");
    let url_element = document.getElementById("url");
    input.addEventListener("keyup", (e) => {on_keyup(input, url_element)});
}