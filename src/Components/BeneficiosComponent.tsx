import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FooterComponent from './FooterComponent';

const BeneficiosComponent: React.FC = () => {
    const beneficios = [
        {
            titulo: 'Soluciones personalizadas',
            descripcion: 'Cada cliente recibe herramientas adaptadas a sus necesidades específicas.',
            icono: 'bi-gear-fill',
        },
        {
            titulo: 'Equipo multidisciplinario',
            descripcion: 'Contamos con expertos en desarrollo, IA y seguridad tecnológica.',
            icono: 'bi-people-fill',
        },
        {
            titulo: 'Sostenibilidad',
            descripcion: 'Promovemos el uso de tecnologías ecológicas para reducir el impacto ambiental.',
            icono: 'bi-tree-fill',
        },
        {
            titulo: 'Soporte 24/7',
            descripcion: 'Atención al cliente todo el año para resolver incidencias o dudas.',
            icono: 'bi-headset',
        },
        {
            titulo: 'Innovación constante',
            descripcion: 'Nos mantenemos a la vanguardia tecnológica para ofrecer siempre lo último en tendencias.',
            icono: 'bi-lightbulb-fill',
        },
    ];

    return (
        <div>
            <div className="container mt-5" style={{ marginBottom: '70px' }}>
                <h2 className="text-center mb-4">Beneficios con TechNova Solutions</h2>
                <div className="row">
                    {beneficios.map((beneficio, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="card shadow h-100">
                                <div className="card-body text-center">
                                    <i className={`bi ${beneficio.icono} fs-1 text-primary mb-3`}></i>
                                    <h5 className="card-title">{beneficio.titulo}</h5>
                                    <p className="card-text">{beneficio.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default BeneficiosComponent;
