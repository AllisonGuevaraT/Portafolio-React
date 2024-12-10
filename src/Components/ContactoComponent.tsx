import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ContactoComponent: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        comentario: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [cuenta, setCuenta] = useState(50);
    const [errors, setErrors] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'comentario' && value.length > 50) {
            return;
        }

        if (name === 'comentario') {
            setCuenta(50 - value.length);
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: string[] = [];

        if (!formData.nombre) newErrors.push('El nombre es obligatorio.');
        if (!formData.correo) newErrors.push('El correo es obligatorio.');
        if (!formData.telefono) newErrors.push('El teléfono es obligatorio.');
        if (!formData.comentario) newErrors.push('El comentario es obligatorio.');

        if (newErrors.length === 0) {
            setShowModal(true);
            setFormData({ nombre: '', correo: '', telefono: '', comentario: '' });
            setCuenta(50);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2>¿Tienes alguna duda o quieres Contratar nuestros servicios?</h2>
                <h3 className="text-secondary">¡Escríbenos para contactarte!</h3>
            </div>
            <div className="d-flex justify-content-center">
                <Form className="w-50" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="John Smith"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="correo">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            placeholder="nombre@ejemplo.com"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="XXXX-XXXX"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="comentario">
                        <Form.Label>Comentario</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="comentario"
                            value={formData.comentario}
                            onChange={handleChange}
                            placeholder="Déjanos un comentario"
                            rows={3}
                        />
                        <Form.Text>{`Caracteres restantes: ${cuenta}`}</Form.Text>
                    </Form.Group>

                    {errors.length > 0 && (
                        <div className="alert alert-danger">
                            <ul>
                                {errors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <Button variant="success" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Información Enviada!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Gracias por los datos. Nos pondremos en contacto contigo pronto.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ContactoComponent;