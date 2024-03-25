document.addEventListener("DOMContentLoaded", function () {
    let numeroAleatorio, erros, chances;
  
    const inNumero = document.getElementById("inNumero");
    const outErros = document.getElementById("outErros");
    const outChances = document.getElementById("outChances");
    const outDica = document.getElementById("outDica");
    const btnApostar = document.getElementById("btnApostar");
    const btnJogar = document.getElementById("btnJogar");
  
    const reiniciarJogo = () => {
      location.reload();
    };
  
    const atualizarDica = (dica) => {
      outDica.textContent = dica;
    };
  
    const verificarResultado = () => {
      if (numeroAleatorio === parseInt(inNumero.value)) {
        outDica.textContent = "Parabéns! Você acertou o número!";
        inNumero.disabled = true;
        btnApostar.disabled = true;
        btnJogar.classList.remove("oculta");
      } else {
        erros++;
        outErros.textContent = erros;
  
        const dica =
          numeroAleatorio > parseInt(inNumero.value)
            ? "O número é maior que " + inNumero.value
            : "O número é menor que " + inNumero.value;
        atualizarDica(dica);
      }
    };
  
    const inicializarJogo = () => {
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      
      erros = 0;
      chances = 6;

      outErros.textContent = erros;
      outChances.textContent = chances;
      atualizarDica("Dica: É um número entre 1 e 100");
      inNumero.value = "";
      inNumero.disabled = false;
      btnApostar.disabled = false;
      btnJogar.classList.add("oculta");
    };
  
    inicializarJogo();
  
    btnApostar.addEventListener("click", function () {
      if (chances > 0) {
        if (parseInt(inNumero.value) >= 1 && parseInt(inNumero.value) <= 100) {
          chances--;
          outChances.textContent = chances;
          verificarResultado();
        } else {
          alert("Por favor, insira um número entre 1 e 100.");
        }
      } else {
        alert("Você usou todas as chances. O número era " + numeroAleatorio);
        inNumero.disabled = true;
        btnApostar.disabled = true;
        btnJogar.classList.remove("oculta");
      }
    });
    console.log(numeroAleatorio)
  
    btnJogar.addEventListener("click", reiniciarJogo);
  });
  