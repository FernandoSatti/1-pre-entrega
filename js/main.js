function jugarPiedraPapelTijera() {
  let usuario= prompt("ingrese un nombre para Jugar Piedra,Papel o Tijera con la maquina").toUpperCase();
  let victoriasJugador = 0;
  let victoriasComputadora = 0;

  for (let i = 1; i <=3; i++) {
    const eleccionUsuario = prompt("Ronda Numero: " + i + ". Elige: piedra papel o tijera " + usuario).toLowerCase();
    const eleccionComputadora = obtenerEleccionComputadora(); 
    if(eleccionUsuario===eleccionComputadora){
      alert(usuario + " la consola eligió lo mismo! EMPATE!")
    }else if
    (
      (eleccionUsuario=== "piedra" && eleccionComputadora=== "tijera")||
      (eleccionUsuario ==="papel" && eleccionComputadora=== "piedra")||
      (eleccionUsuario==="tijera" && eleccionComputadora === "papel"))
      {
        alert(usuario + " la consola eligió: "+ eleccionComputadora +" Por lo tanto, ganaste esta Ronda!");
        victoriasJugador++;
      }else{
        alert(usuario + " La Maquina seleccionó "+ eleccionComputadora + " y te ganó esta ronda");
        victoriasComputadora++;
      } 
    } 
    if(victoriasJugador>victoriasComputadora){
      alert(usuario +" LE HAS GANADO A LA CONSOLA! ERES GENIAL!");
      document.write('<div><img src="../img/pc-win.png"/></div>');
      return "recarga la pagina y vuelve a ganar. si que estas de suerte!";
    }else{
      alert(usuario +" La Maquina acabo contigo. sigue intentando!");
      document.write('<div><img src="../img/cat-sad.png"/></div>');
      return "lamento que no hayas ganado. Apreta F5 para volver a intentarlo";
    }
}
function obtenerEleccionComputadora(){
    const opciones=["piedra","papel","tijera"];
    const eleccionComputadora= opciones[Math.floor(Math.random() * 3)];
    return eleccionComputadora;
  }
  
let resultado = jugarPiedraPapelTijera();
alert(resultado);
  
