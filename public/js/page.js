document.getElementById("btnMapa").onclick = function () {
    const iframe = document.getElementById("iframeMapa");
    if (iframe.style.display === "none" || !iframe.style.display) {
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
}

