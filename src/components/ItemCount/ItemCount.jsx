import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemCount.css";

export const ItemCount = ({ item }) => {
	//FUNCION DECLARADA EN CartContext , PARA AGREGAR UN PRODUCTO PASANDO EL Item Y LA CANTIDAD SELECCIONADA
	const { addItem } = useContext(CartContext);

	//ESTADO PARA CONTROLAR LA CANTIDAD, INICIO EN 1
	const [initial, setInitial] = useState(1);

	//ESTADO PARA CONTROLAR CUANDO SE ALCANZO EL MAXIMO EN STOCK
	const [errorStock, setErrorStock] = useState(false);

	//FUNCION PARA MANEJAR EL AGREGAR O RESTAR CANTIDAD A COMPRAR
	const handleClick = (value) => {
		if (initial + value > 0 && initial + value <= item.stock) {
			setInitial(initial + value);
			setErrorStock(false);
		} else {
			initial + value >= item.stock && setErrorStock(true);
		}
	};

	return (
		<div className="container--itemCount">
			<div className="container--itemCount--buttons">
				<button
					className="itemCount--button"
					onClick={() => handleClick(-1)}>
					-
				</button>
				<div className="itemCount--count">{initial}</div>
				<button
					className="itemCount--button"
					onClick={() => handleClick(1)}>
					+
				</button>
			</div>
			{/* AGREGA EL PRODUCTO CON LA CANTIDAD AL CARRITO
				USA LA FUNCION DEL CONTEXT
			*/}
			<button
				className="itemCount--buttonCart"
				onClick={() => addItem(item, initial)}>
				Add to Cart
			</button>
			{errorStock && (
				<div className="itemCount--error">
					Se alcanzo el máximo disponible
				</div>
			)}
		</div>
	);
};
