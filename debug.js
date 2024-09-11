// debug.js
document.querySelectorAll('*').forEach(element => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    element.style.borderColor = randomColor;
    element.style.borderWidth = "1px";
    element.style.borderStyle = "solid";
});
