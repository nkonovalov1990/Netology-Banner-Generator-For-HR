html2canvas(document.querySelector("#banner")).then(canvas => {
    document.body.appendChild(canvas)
});