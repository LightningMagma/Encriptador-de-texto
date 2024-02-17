let text = "";
let textoSalida = document.getElementById("textoSalida");
const resultado = document.getElementById("resultado");
let refresh = document.getElementById('logopg');

function transformarTexto(transformar) {
    text = document.getElementById("textoUsuario").value;
    switch (transformar) {
        case "encriptar":
            textoSalida = text.replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");
            break;
        case "desencriptar":
            textoSalida = text.replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ai/gi, "a")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u");
            break;
        default:
            return;
    }

    if (text.length != 0) {
        document.getElementById("imagenResultado").style.display = "none";
        document.getElementById("textoSalida").value = textoSalida;
        document.getElementById("textoSalida").style.display = "revert";
        document.getElementById("sinTexto").style.display = "none";
        document.getElementById("msgcopy").style.display = "revert";
        document.getElementById("textoUsuario").value = "";
        resizeSection(textoSalida);
    } else {
        swal.fire({ title: "Lo sentimos", text: "Debe ingresar un texto", icon: "warning", backdrop: false, customClass: { popup: "popupalert" } });
    }
}

const copiarTexto = async () => {
    let copiado = document.getElementById("copiado");
    document.getElementById("textoSalida");
    try {
        await navigator.clipboard.writeText(textoSalida);
        copiado.style.display = "revert"
        setTimeout(() => {
            copiado.style.display = 'none';
        }, 1000);
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

function resizeSection(elemento) {
    let alto = resultado.offsetHeight;
    console.log(alto);
    if (elemento.length != 0 && alto < 200) {
        resultado.style.height = "60%";
    }
}

refresh.addEventListener('click', _ => {
    location.reload();
})