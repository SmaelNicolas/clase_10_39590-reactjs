import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./cartWidget.css";

export const CartWidget = () => {
	//RECIBE EL ESTADO CART Y MUESTRA LA CANTIDAD DE PRODUCTOS QUE HAY
	//TENER EN CUENTA QUE SI HAY 2 O MAS CANTIDADES DE UN MISMO PRODUCTO, ESO NO SE TIENE EN CUENTA
	//LA FORMA CORRECTA SERIA HACER UNA FUNCION DENTRO DEL CONTEXT QUE SUME TODAS LAS CANTIDADES DE CADA PRODUCTO ej totalItems

	const { cart } = useContext(CartContext);
	return (
		<Link to="/cart" className="cart--link">
			<div className="container--cartWidget">
				<div className="cart--icon">🛒</div>
				<div className="cart--quantity">{cart.length}</div>
			</div>
		</Link>
	);
};
