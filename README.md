
<h1>Primera Pre-entrega del curso de Javacript</h1>
<br>

<h2>Juego de piedra papel o tijera</h2>
Este proyecto es un juego simple de Piedra, Papel o Tijera implementado en JavaScript. El juego permite al usuario competir contra la consola en una serie de rondas y determinar quién gana más rondas.
<br>
<br>
<h2>Como se realizó el juego</h2>
La función principal "jugarPiedraPapelTijera()" inicia el juego y lleva a cabo una serie de rondas. El usuario ingresa su nombre y elige entre "piedra", "papel" o "tijera" en cada ronda. La computadora selecciona una opción aleatoria y se determina el ganador de cada ronda.
<br>
- Esto se logra utilizando un arreglo llamado "opciones" que contiene las tres posibles elecciones. La función selecciona una opción aleatoria del arreglo y la devuelve como la elección de la computadora.
<br>
<br>

<h2>Como se realizó el sistema de rondas</h2>
Se utilizó el ciclo for. Que se utiliza para repetir un bloque de código un número específico de veces. En este caso se juegan 3 rondas.

"for (let i = 1; i <= 3; i++)"
<br>
-let i = 1;: Esto inicializa una variable i con el valor 1. Esta variable se utiliza como contador de rondas.
-i <= 3;: Esto establece la condición que debe cumplirse para que el ciclo se ejecute. El ciclo se ejecutará mientras i sea menor o igual a 3, lo que significa que se ejecutará exactamente tres veces (una vez por cada ronda).
-i++: Esto incrementa el valor de i en 1 después de cada iteración del ciclo. Es decir, después de cada ronda, i aumentará en 1.
<br>
<br>

<h2>Como se realizó la puntuación del juego</h2>
Se utilizan dos variables para llevar un registro de la puntuación: "victoriasJugador" y "victoriasComputadora". Estas variables se inicializan en 0 al comienzo del juego:
-let victoriasJugador = 0;
-let victoriasComputadora = 0;
<br>
Luego, dentro del ciclo for, se determina el ganador de cada ronda con condiciones if, else if y else. 
<br>
se puede observar en el codigo. que si el jugador gana, nos saldrá un "alert" diciendo que ganamos y un codigo que dice: "victoriasJugador++". Que indica que sumaremos un punto. lo mismo para la consola.
<br>
<br>
<h3>El sistema random que se utilizó para la consola:</h3>
En el código podemos observar que:
"function obtenerEleccionComputadora(){
    const opciones=["piedra","papel","tijera"];
    const eleccionComputadora= opciones[Math.floor(Math.random() * 3)];
    return eleccionComputadora;
}"
<br>
-Math.random() genera un número aleatorio entre 0  y 1.
-Math.random() * 3 amplía ese número para estar entre 0 (incluido) y 3 (excluido).
-Math.floor(Math.random() * 3) redondea ese número a 0, 1 o 2.
-Entonces, Math.floor(Math.random() * 3) se utiliza para seleccionar aleatoriamente una de las tres opciones ("piedra", "papel" o "tijera") para la elección de la computadora en el juego. Multiplicar por 3 es necesario porque queremos un número entero entre 0 y 2 para seleccionar índices en un arreglo con tres elementos


