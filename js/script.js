const form_url = (phone_number) => {
    let url = "https://wa.me/";
    return phone_number.includes("+") ? url + phone_number : url + "+" + phone_number;
}
const on_keyup = (phone_number_element, link_element) => {
    let url = form_url(phone_number_element.value);
    link_element.setAttribute("href", url);
    link_element.innerHTML = url;
}

window.onload = () => {
    let input = document.getElementById("phone-number");
    let url_element = document.getElementById("url");
    input.addEventListener("keyup", (e) => {on_keyup(input, url_element)});
}