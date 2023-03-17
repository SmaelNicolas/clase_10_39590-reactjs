import "./cartItem.css";

export const CartItem = ({ product }) => {
	return (
		<div className="container--bg">
			<div className="container--cartItem">
				<img
					className="cartItem--img"
					src={product.img}
					alt={product.title}
				/>
				<div className="cartItem--info">
					<div className="cartItem--info--title">{product.title}</div>
					<div className="cartItem--info--quantityPrice">
						💰{product.price} x {product.quantity}u = 💰
						{(product.price * product.quantity).toFixed(2)}
					</div>
				</div>
				<div className="cartItem--options">
					{/* ACA HABRIA QUE AGREGAR LA FUNCION, QUE VIENE DE CONTEXT, DE ELIMINAR EL PRODUCTO DEL CARRITO */}
					<div>❌</div>
				</div>
			</div>
		</div>
	);
};
