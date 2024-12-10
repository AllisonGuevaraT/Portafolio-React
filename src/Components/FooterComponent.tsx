
function FooterComponent() {
    return (
        <div>
            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <p className="mb-1">© {new Date().getFullYear()} TechNova Solutions. Todos los derechos Reservados.</p>

                    <div>
                        <p className="mb-2">¿Tienes preguntas?</p>
                        <a href="/contacto" className="text-white text-decoration-none">
                            <i className="bi bi-envelope-fill me-2"></i> ¡Contacta con nosotros!
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterComponent;