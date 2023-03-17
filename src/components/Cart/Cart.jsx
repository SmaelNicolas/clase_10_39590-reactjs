import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartList } from "../CartList/CartList";
import "./cart.css";
export const Cart = () => {
	//TRAEMOS DEL CONTEXT DE CART , EL ESTADO cart Y LA FUNCION clear()
	const { cart, clear } = useContext(CartContext);
	return (
		<div className="container--cart">
			{cart.length <= 0 ? (
				<>
					<div className="cart--emptyMessageg">No items in cart</div>
					<Link to="/" className="navbar--ul--li--a">
						Home
					</Link>
				</>
			) : (
				<>
					{/* USO LA FUNCION VACIAR CARRITO QUE VIENE DE CONTEXT */}
					<button className="cart--empty" onClick={clear}>
						vaciar
					</button>
					<CartList products={cart} />
				</>
			)}
		</div>
	);
};
