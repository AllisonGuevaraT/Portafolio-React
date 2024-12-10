import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const TestimoniosComponent = () => {

    const [testimonios] = useState([
        {
            id: 1,
            nombre: 'Ana López',
            puesto: 'CEO en Startup XYZ',
            comentario: 'TechNova transformó completamente nuestra forma de trabajar. ¡La eficiencia ha mejorado un 200%!',
            imagen: '/img/femalepic1.jpg',
        },
        {
            id: 2,
            nombre: 'Carlos Pérez',
            puesto: 'Desarrollador Full Stack',
            comentario: 'Las soluciones de TechNova son intuitivas y muy completas. Recomiendo al 100%.',
            imagen: '/img/malepic.jpg', 
        },
        {
            id: 3,
            nombre: 'Lucía Ramírez',
            puesto: 'Directora de Operaciones',
            comentario: 'El equipo de TechNova nos brindó soporte en cada paso. Su atención al cliente es inigualable.',
            imagen: '/img/femalepic2.jpg', 
        },
    ]);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Lo que dicen nuestros clientes</h2>
            <div className="row">
                {testimonios.map((testimonio) => (
                    <div className="col-md-4 mb-4" key={testimonio.id}>
                        <div className="card shadow-sm">
                            <img
                                src={testimonio.imagen}
                                alt={`Foto de ${testimonio.nombre}`}
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-primary">{testimonio.nombre}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{testimonio.puesto}</h6>
                                <p className="card-text">{testimonio.comentario}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimoniosComponent;
