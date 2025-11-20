const Footer = () => {
    return (
        <div className="container container-footer flex flex-col">
            <h2>Contacto</h2>
            <div className="container__footer-content flex  flex-between">
                <div className="flex flex-1 flex-col container__footer-menu">
                    <a href="">Inicio</a>
                    <a href="">Sobre nosotros</a>
                    <a href="">Servicios</a>
                    <a href="">Nuestros clientes</a>
                    <a href="">Contacto</a>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex flex-col footer__contact-text">
                        <a href="">flexemprende@gmail.com</a>
                        <a href="">+569 911 680 001</a>
                    </div>
                    <div className="flex footer__contact-redes">
                        <a href="">instagram</a>
                        <a href="">facebook</a>
                        <a href="">Linkeding</a>
                    </div>

                </div>
            </div>
            <div className="container__footer-text">
                <span>¿ CREAMOS JUNTOS?</span>
            </div>
            <div className="container__footer-reserved flex flex-center">
                Todos los derechos reservados realizada por Flexemprende
            </div>
        </div>
    )
}

export default Footer