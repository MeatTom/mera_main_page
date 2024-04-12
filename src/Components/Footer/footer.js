import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <p>© MERA, 2015</p>
                <p>MERA — КОНТРОЛЬНО-ИЗМЕРИТЕЛЬНЫЕ ПРИБОРЫ И АВТОМАТИКА</p>
            </div>
            <div className="footer-column">
                <p>ПРОДУКЦИЯ</p>
                <ul>
                    <a><li>Расходомеры</li></a>
                    <a><li>Реле потока</li></a>
                </ul>
            </div>
            <div className="footer-column">
                <p>КОНТАКТЫ</p>
                <p>Телефон: +7(812)677-05-77</p>
                <p>E-mail: info@mera-russia.com</p>
                <a><p>Что такое MERA</p></a>
            </div>
        </footer>
    );
}

export default Footer;
