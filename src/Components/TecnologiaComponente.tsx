import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FooterComponent from './FooterComponent';

const tecnologias = [
    {
        descripcion: 'Para construir interfaces de usuario interactivas y dinámicas.',
        logotipo: '/logos/reactlogo.png', // Ruta de la imagen en la carpeta public
    },
    {
        descripcion: 'Para manejar la lógica del lado del servidor de manera rápida y escalable.',
        logotipo: '/logos/nodejs.png',
    },
    {

        descripcion: 'Para empaquetar aplicaciones en contenedores ligeros y portátiles.',
        logotipo: '/logos/docker.png',
    },
    {

        descripcion: 'Para la orquestación y gestión de contenedores en grandes infraestructuras.',
        logotipo: '/logos/kubernetes.png',
    },
    {
        descripcion: 'Para desarrollar modelos de aprendizaje automático.',
        logotipo: '/logos/tensorflow.png',
    },
    {
        descripcion: 'Base de datos NoSQL para almacenar datos no estructurados.',
        logotipo: '/logos/mongodb.png',
    },
    {
        descripcion: 'Para servicios de nube confiables y escalables.',
        logotipo: '/logos/aws.png',
    },
    {
        descripcion: 'Para diseñar interfaces de usuario receptivas rápidamente.',
        logotipo: '/logos/bootstrap.png',
    },
    {
        descripcion: 'Para la gestión de código y colaboración en equipos.',
        logotipo: '/logos/github.png',
    },
    {
        descripcion: 'Para el desarrollo de aplicaciones móviles y web con soluciones en la nube.',
        logotipo: '/logos/firebase.png',
    },
];

const TecnologiasComponent: React.FC = () => {
    return (
        <div >
            <div className="container mt-5" style={{ marginBottom: '70px' }}>
                <h2 className="text-center mb-4">Utilizamos las tecnologías más modernas</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {tecnologias.map((tec, index) => (
                        <div className="col" key={index}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body text-center">
                                    <img
                                        src={tec.logotipo}

                                        className="img-fluid mb-3"
                                        style={{ maxHeight: '100px' }}
                                    />

                                    <p className="card-text">{tec.descripcion}</p>
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

export default TecnologiasComponent;
