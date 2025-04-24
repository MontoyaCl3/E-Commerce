export default function Footer() {
    return (
        <footer className="bg-[#1E2832] text-white py-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; 2025 E-Commerce. Todos los derechos reservados.</p>
                <nav className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">Política de Privacidad</a>
                    <a href="#" className="hover:underline">Términos de Servicio</a>
                    <a href="#" className="hover:underline">Contacto</a>
                </nav>
            </div>
        </footer>
    );
}