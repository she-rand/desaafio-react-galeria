const Footer = ({descripcion:descripcion}) => {
    return(
        <>
             <footer>
                <p>{descripcion}</p>
                <button type="button" className="btn btn-primary position-relative">
                    Recibidas
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        3+
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </footer>
        </>
       
    );
    };
export default Footer;
    