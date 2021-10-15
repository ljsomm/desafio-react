import './Style.css';
import react from "../../assets/react.jpeg"

const Header = () => {
    return(
        <header>
            <img src={react} alt={"Logo da aplicação"}/>
            <span>Desafio React JS - Exposição de dados de servidores em Datatable</span>
        </header>
    );
}

export default Header;