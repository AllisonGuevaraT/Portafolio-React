import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ContactoComponent from '../Components/ContactoComponent';
import FooterComponent from '../Components/FooterComponent';

const ContactoView: React.FC = () => {

    return (
        <div>
            <div style={{ marginBottom: '70px' }}>
                <ContactoComponent ></ContactoComponent>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default ContactoView;