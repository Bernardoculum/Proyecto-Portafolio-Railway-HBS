// function toggleInfo() {
// var infoDiv = document.querySelector('.info');
// if (infoDiv.style.display === 'none') {
//     infoDiv.style.display = 'block';
// } else {
//     infoDiv.style.display = 'none';
// }
// }

function MostrarContenido(elementoid) {
    var infoDiv = document.getElementById(elementoid);
    if (infoDiv.style.visibility === 'hidden') {
        infoDiv.style.visibility = 'visible';
    } else {
        infoDiv.style.visibility = 'hidden';
    }
}


