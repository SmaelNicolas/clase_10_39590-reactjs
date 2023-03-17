import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="container--navbar">
			<Link to="/" className="navbar--logo">
				🪐
			</Link>

			{/* Secciones de la navbar */}
			<ul className="navbar--ul">
				<li className="navbar--ul--li">
					<Link to="/category/keyboard" className="navbar--ul--li--a">
						Keyboards
					</Link>
				</li>
				<li className="navbar--ul--li">
					<Link to="/category/mouse" className="navbar--ul--li--a">
						Mouses
					</Link>
				</li>
				<li className="navbar--ul--li">
					<Link to="/category/pad" className="navbar--ul--li--a">
						Pads
					</Link>
				</li>
			</ul>
			<CartWidget />
		</nav>
	);
};
