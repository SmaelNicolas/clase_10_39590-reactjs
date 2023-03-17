import { createContext, useState } from "react";

//CREO EL CONTEXT Y LO EXPORTO , ASI PUEDO UTILIZARLO EN LOS COMPONENTES CON  useContext(CartContext)
export const CartContext = createContext();

//CREO UN COMPONENTE CartProvider.
export const CartProvider = ({ children }) => {
	//ESTADO QUE MANEJA EL CART.
	const [cart, setCart] = useState([]);

	// REHACER LA FUNCION addItem CORRECTAMENTE
	//FUNCION QUE SIRVE PARA AGREGAR 1 PRODUCTO AL CARRITO
	// NO CONTROLA SI YA EXISTE EL PRODUCTO
	//AGREGA DUPLICADOS ❌
	const addItem = (item, quantity) => {
		item.quantity = quantity;
		setCart([...cart, item]);
	};

	//FUNCION QUE VACIA EL CARRITO
	const clear = () => {
		setCart([]);
	};

	// FALTA HACER LAS FUNCIONES DE ELIMINAR 1 PRODUCTO
	//PASARLAS POR VALUE PARA HACERLAS VISIBLES A TODA LA APP
	const removeItem = () => {};

	// UNA FUNCION QUE CUENTE CUANTAS ITEMS HAY , TENIENDO EN CUENTA QUE CADA ITEM PUEDE TENER MAS DE 1 CANTIDAD
	//PASARLAS POR VALUE PARA HACERLAS VISIBLES A TODA LA APP
	const totalItems = () => {};

	//FUNCION PARA SABER SI UN ITEM ESTA O NO EN EL CARRITO
	//SE PUEDE UTILIZAR PARA addItem() Y SABER SI EXISTE O NO EL PRODUCTO
	const isInCart = () => {};

	return (
		//RETORNAMOS EL PROVIDER DEL CONTEXT CREADO.
		//POR VALUE PASAMOS LOS ESTADOS Y FUNCIONES QUE QUEREMOS QUE SEAN VISIBLES EN NUESTRA APP
		// UNA ESPECIE DE "GLOBALES"
		<CartContext.Provider value={{ cart, addItem, clear }}>
			{/* CHILDREN SON TODOS LOS COMPONENTES ENCERRADOS POR LAS ETIQUETAS <CartProvider></CartProvider> QUE ESTA EN APP */}
			{children}
		</CartContext.Provider>
	);
};
