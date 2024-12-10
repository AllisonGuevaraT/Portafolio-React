import FooterComponent from "../Components/FooterComponent";
import TestimoniosComponent from "../Components/TestimoniosComponent";

const HomeView: React.FC = () => {
    return (
        <div>
            <div className='container' style={{ marginTop: '45px', marginBottom: '70px' }}>
                <div className="text-center ">
                    <h2 >Nuestra Visión y Objetivos</h2>
                    <p>TechNova Solutions es una empresa innovadora que ofrece soluciones tecnológicas avanzadas para empresas y usuarios finales. Fundada en 2023, nuestra misión es impulsar la transformación digital mediante herramientas que simplifican procesos, mejoran la eficiencia y generan valor. Nos especializamos en servicios de desarrollo de software, inteligencia artificial, seguridad cibernética y tecnologías de nube.</p>
                </div>
                <div>
                    <TestimoniosComponent></TestimoniosComponent>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default HomeView;