// import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export function Footer() {
    return <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4>Contacto</h4>
                    <p>Dirección: [Dirección de la tienda]</p>
                    <p>Teléfono: [Número de teléfono]</p>
                    <p>Email: [Correo electrónico de contacto]</p>
                </div>
                <div class="col-md-4">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4>Síguenos</h4>
                    <ul class="social-icons">
                        <li><a href="#"><FaFacebook/></a></li>
                        <li><a href="#"><FaSquareXTwitter/></a></li>
                        <li><a href="#"><FaInstagram/> </a></li>
                        <li><a href="#"><FaLinkedin/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
}