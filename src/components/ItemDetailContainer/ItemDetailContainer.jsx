import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/items";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";

export const ItemDetailContainer = () => {
	//ESTADO QUE VOY A UTILIZAR PARA GUARDAR MI PRODUCTO FILTRADO POR ID
	const [itemFiltered, setItemFiltered] = useState(null);

	//UN ESTADO PARA SIMULAR UNA TARDANZA EN LA CARGA DE DATOS Y MOSTRAR UN COMPONENTE DE CARGA
	// INICIALIZADO EN TRUE PORQUE NO QUEREMOS QUE AL MOMENTO DE MONTARSE ESTE COMPONENTE SE MUESTREN CAMPOS VACIOS o INEXISTENTES
	const [loading, setLoading] = useState(true);

	// idItem DEBE COINCIDIR CON EL MISMO NOMBRE EN EL PATH DE LA RUTA DEFINIDA EN APP
	// path='/items/ 👉 :idItem 👈
	const { idItem } = useParams();

	useEffect(() => {
		//PARA QUE CUANDO CAMBIE LA URL Y SE VUELVE A EJECUTAR EL USEEFFECT SE INICIALE EN TRUE
		setLoading(true);

		getItem(idItem) // GUARDO LA RESPUESTA EN EL ESTADO PARA ALMACENAR MI PRODUCTO
			.then((response) => setItemFiltered(response))
			// DESPUES DE TODO SIMULO UN RETRASO DE 2S PARA YA MOSTRAR EL PRODUCTO FILTRADO
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, [idItem]);

	//ESTA FUNCION DEVUELVE UNA PROMESA CON EL PRODUCTO BUSCADO POR ID
	const getItem = (valueToFilter) => {
		return new Promise((resolve) => {
			resolve(products.find((item) => item.id === Number(valueToFilter)));
		});
	};

	//SI ESTA CARGANDO
	// MUESTRO EL COMPONENTE LOADING
	// SI NO ESTA CARGANDO
	// YA ME ASEGURO DE TENER EL PRODUCTO DISPONIBLES PARA PODER SER RENDERIZADO
	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} />;
};
