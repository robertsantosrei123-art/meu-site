const botaoTema = document.getElementById("themeButton");

if (botaoTema) {

    botaoTema.addEventListener("click", function() {

        document.body.classList.toggle("tema-claro");

        if (document.body.classList.contains("tema-claro")) {
            botaoTema.textContent = "🌙";
        } else {
            botaoTema.textContent = "☀️";
        }

    });

}