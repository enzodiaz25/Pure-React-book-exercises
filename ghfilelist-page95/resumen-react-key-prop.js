/*
Es necesario al renderizar un arreglo (por ejemplo,
uno que se crea con "map") agregar una key="" que
sea ÚNICA para cada elemento.

¿Por qué React necesita esto? Para entenderlo,
primero ver el siguiente código:
*/

// Crea un arreglo de objetos, donde cada objeto
// tiene un value y un id (que en este caso es 
// igual al value)
const data = [1, 2, 3, 4, 5, 6, 7, 8].map(n => {
	return {
		value: n,
		id: `id${n}`
	}
})

// Componente principal del ejemplo
function App() {
    // Usa como estado el arreglo definido arriba.
    // En "numbers" quedará seteado ese arreglo. numbers = data.
	const [numbers, setNumbers] = useState(data)
	
    // Toma un objeto del arreglo y lo usa para crear un h1
	function renderItem(n, index) {
		return(
			<h1 key={index} onClick={() => deleteItem(n.id)}>
                {n.value}
            </h1> 
		)
	}
	
	function deleteItem(id) {
		const filtered = numbers.filter(n => n.id !== id)
		setNumbers(filtered)
	}
	
	return (
		<div className="App">
            {/* Renderiza tantos h1s como elementos haya en data */}
			{numbers.map(renderItem)}
		</div>
	)
}

/*
Lo que hace el componente de arriba es renderizar todos
los números del array en diferentes h1. Hasta acá, no aparecen
problemas. Cuando demos click en algún h1, se ejecutará
deleteItem y actualizará el array eliminándolo (setNumbers(filtered)).
Como se reemplazó el estado del componente, se vuelve a renderizar
lo que está dentro del return.
Y acá viene el problema.
Al hacer numbers.map(renderItem), se vuelven a asignar las keys a
los elementos. Anteriormente, sus keys eran estas:

h1 value en el array resultante = [1, 2, 3, 4, 5, 6, 7, 8]
                           keys =  0  1  2  3  4  5  6  7  (igual al index)

Como las keys se asignan en función del índice, entonces se vuelven
a reasignar TODAS. Por ejemplo, si borramos el h1 que tiene value 1
del array, las keys ahora quedarán así:

h1 value en el array resultante = [2, 3, 4, 5, 6, 7, 8]
keys                            =  0  1  2  3  4  5  6

Notar que la key del 2 antes era 1 y ahora es 0, la del 3 antes era 2
y ahora es 1, y así... Todas las keys cambiaron. Para React, si cambió
la key, significa que ahora es un elemento diferente. En este caso,
considerará que debe actualizar TODOS los elementos de la lista en el DOM real.

Esto se puede evitar si usamos keys que sean únicas, propias del objeto
y, lo más importante, NO VARIEN ENTRE RENDERS.
Entonces, en renderItems() se podría escribir:
*/

<h1 key={n.id} onClick={() => deleteItem(n.id)}> {n.value} </h1>

/*
Como la key viene del mismo objeto donde está el número,
cuando volvamos a ejecutar map no se verá modificada.
*/

[
	{
		n: 2,
		id: 2
	},
	//etc...
]

// En renderItems, para el objeto con n: 2, la id siempre será 2.