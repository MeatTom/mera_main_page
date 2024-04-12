import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/header';
import Catalog from "./Components/Catalog/catalog";
import Footer from "./Components/Footer/footer";

function App() {
    const [showCatalog, setShowCatalog] = useState(false);

    const toggleCatalog = () => {
        setShowCatalog(true);
        // После изменения состояния производим скролл на 500 пикселей вниз
        window.scrollTo({
            top: window.scrollY + 700,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.trigger');
            elements.forEach((element) => {
                if (element.getBoundingClientRect().top < window.innerHeight) {
                    element.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <div className="logo">
                    <img src="https://i.yapx.ru/XTKwj.png" alt="Logo"/>
                    <div className="text-1">КОНТРОЛЬНО-ИЗМЕРИТЕЛЬНЫЕ ПРИБОРЫ И АВТОМАТИКА</div>
                </div>
                <img className="scroll-mouse" src="https://i.yapx.ru/XUO8W.png" alt="Scroll"/>
                <div className="text-blocks">
                    <div className="text-block">
                        <p className="text-block-1">КОМПОНЕНТЫ ОБОРУДОВАНИЯ MERA УЖЕ БОЛЕЕ 25 ЛЕТ УСПЕШНО ПРИМЕНЯЮТСЯ В
                            РАЗЛИЧНЫХ ОТРАСЛЯХ ПРОМЫШЛЕННОСТИ</p>
                        <p className="text-block-3">MERA – РОССИЙСКАЯ ТОРГОВАЯ МАРКА, ПРЕДЛАГАЮЩАЯ ПРОМЫШЛЕННОЕ
                            ОБОРУДОВАНИЕ ДЛЯ СИСТЕМ АВТОМАТИЗАЦИИ</p>
                        <p className="text-block-2">MERA – ЭТО ИНДИВИДУАЛЬНЫЙ ПОДХОД И ЭФФЕКТИВНАЯ ТЕХНИЧЕСКАЯ
                            ПОДДЕРЖКА!</p>
                    </div>
                    <div className="info-block trigger">
                        <a href="/about"><button className="info-button">Узнать больше о нашей компании</button></a>
                        <fieldset className="block_header trigger">
                            <legend align="center">Что такое MERA?</legend>
                        </fieldset>
                        <p className="info-text trigger"><b>MERA</b> – это динамично развивающийся бренд, занимающийся изготовлением и поставками
                            контрольно-измерительных приборов и автоматики для промышленных предприятий.</p>
                        <a href="/about">
                            <img className="info-triangle trigger" src="https://i.yapx.ru/XUEXa.png" alt="triangle"/>
                        </a>
                    </div>
                </div>
                <div className="mera-everywhere trigger">
                    <fieldset className="block_header trigger">
                        <legend align="center">МЕРА РАБОТАЕТ ВЕЗДЕ</legend>
                    </fieldset>
                    <div className="mera-images">
                        <div className="mera-image trigger">
                            <img src="https://i.yapx.ru/XTKwq.png" alt="Ex Рудник"/>
                            <p>EX РУДНИК</p>
                        </div>
                        <div className="mera-image trigger">
                            <img src="https://i.yapx.ru/XTKwr.png" alt="АГРЕССИВНЫЕ СРЕДЫ"/>
                            <p>АГРЕССИВНЫЕ СРЕДЫ</p>
                        </div>
                        <div className="mera-image trigger">
                            <img src="https://i.yapx.ru/XTKwn.png" alt="ШАХТА EX"/>
                            <p>ШАХТА EX</p>
                        </div>
                        <div className="mera-image">
                            <img src="https://i.yapx.ru/XTKwV.png" alt="IP68"/>
                            <p>IP68</p>
                        </div>
                        <div className="mera-image trigger">
                            <img src="https://i.yapx.ru/XTKwW.png" alt="НЕФТЬ EX"/>
                            <p>НЕФТЬ EX</p>
                        </div>
                        <div className="mera-image trigger">
                            <img src="https://i.yapx.ru/XTKwY.png" alt="НИЗКИЕ ТЕМПЕРАТУРЫ"/>
                            <p>НИЗКИЕ ТЕМПЕРАТУРЫ</p>
                        </div>
                        <div className="mera-image trigger">
                            <img src="https://i.yapx.ru/XTKwZ.png" alt="ГАЗ EX"/>
                            <p>ГАЗ EX</p>
                        </div>
                        <div className="mera-image trigger">
                            <img src="https://i.yapx.ru/XTKwk.png" alt="ВЫСОКИЕ ТЕМПЕРАТУРЫ"/>
                            <p>ВЫСОКИЕ ТЕМПЕРАТУРЫ</p>
                        </div>
                    </div>
                </div>
                <div className="products-btn-info">
                    <div className="product-btn-text" onClick={toggleCatalog}>
                        <p>НАША ПРОДУКЦИЯ</p>
                        <button className="product-btn"></button>
                    </div>
                </div>
            </div>
            {showCatalog && <Catalog />}
            <Footer/>
        </div>
    );
}

export default App;
