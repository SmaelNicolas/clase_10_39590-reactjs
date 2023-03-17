import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/items";
import { Item } from "../Item/Item";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import "./itemListContainer.css";

//ESTE COMPONENTE SE VA A USAR EN 2 TIPOS DE RUTAS.
// HOME : DONDE NO SE VA A FILTRAR
// CATEGORIAS : DONDE SI SE VA A FILTRAR
export const ItemListContainer = () => {
	// idCategory DEBE COINCIDIR CON EL MISMO NOMBRE EN EL PATH DE LA RUTA DEFINIDA EN APP
	// path='/category/ 👉 :idCategory 👈
	const { idCategory } = useParams();

	//UN ESTADO PARA SIMULAR UNA TARDANZA EN LA CARGA DE DATOS Y MOSTRAR UN COMPONENTE DE CARGA
	// INICIALIZADO EN TRUE PORQUE NO QUEREMOS QUE AL MOMENTO DE MONTARSE ESTE COMPONENTE SE MUESTREN CAMPOS VACIOS o INEXISTENTES
	const [loading, setLoading] = useState(true);

	//ESTADO QUE VOY A UTILIZAR PARA GUARDAR MIS PRODUCTOS, YA SEA SI ESTAN FILTRADOS O NO SEGUN EN LA URL QUE ME ENCUENTRE
	const [myProducts, setMyProducts] = useState();

	useEffect(() => {
		//PARA QUE CUANDO CAMBIE LA URL (cambia la categoria) Y SE VUELVE A EJECUTAR EL USEEFFECT SE INICIALE EN TRUE
		setLoading(true);

		// LLAMO A LA FUNCION QUE ME BUSCA LOS ITEMS CON LA CATEGORIA DE LA URL
		getItems(idCategory)
			// GUARDO LA RESPUESTA EN EL ESTADO PARA ALMACENAR MIS PRODUCTOS
			.then((response) => setMyProducts(response))
			// DESPUES DE RECIBIR Y GUARDAR EN MI ESTADO LOS PRODUCTOS FILTRADOS O NO, CAMBIO MI ESTADO DE CARGANDO A FALSO PARA PODER VER MIS CARDS
			.finally(
				//SIMULO UN RETRASO DE 2 SEGUNDOS
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
		// idCategory EN EL ARRAY DE DEPENDENCIA PARA GENERAR UN NUEVO CICLO DEL USEEFFECT AL CAMBIAR ENTRE CATEGORIAS
	}, [idCategory]);

	//ESTA FUNCION DEVUELVE UNA PROMESA CON LOS PRODUCTOS FILTRADOS O NO , SEGUN idCategory
	const getItems = (valueToFilter) => {
		// DEVUELVE LA RESPUESTA
		return new Promise((resolve) => {
			if (valueToFilter === undefined) {
				// AL NO EXISTIR CATEGORIA ( HOME = " / ") DEVUELVO TODOS LOS PRODUCTOS
				resolve(products);
			} else {
				// AL EXISTIR CATEGORIA ES PORUQE ESTAMOS EN UNA URL category/:idCategory
				// TRAER LOS PORDUCTOS YA FILTRADOS POR CATEGORIA
				resolve(
					products.filter((item) => item.category === valueToFilter)
				);
			}
		});
	};

	//SI ESTA CARGANDO
	// MUESTRO EL COMPONENTE LOADING
	// SI NO ESTA CARGANDO
	// YA ME ASEGURO DE TENER LOS PRODUCTOS DISPONIBLES PARA PODER SER RENDERIZADOS
	return loading ? (
		<Loading />
	) : (
		<section className="container--ItemListContainer">
			{/* TITULO DINAMICO SEGUN LA URL DONDE ESTEMOS */}
			<h2 className="itemListContainer--title">
				{idCategory === undefined ? "home" : idCategory}
			</h2>
			<div className="container--cards">
				{/* LLAMO AL COMPONENTE QUE SE VA A ENCARGAR DE LA LOGICA DE RECORRER MIS PRODUCTOS */}
				<ItemList myProducts={myProducts} />
			</div>
		</section>
	);
};
