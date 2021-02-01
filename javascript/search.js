$(document).ready(function () {
    $("#nav-pesquisa").click(function () {
        localStorage.setItem("pesquisa", document.getElementById("texto-pesquisa").value)
        window.location.href = "search.html";
    })
})