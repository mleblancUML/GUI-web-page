import React from 'react';

// Provide all the imports from the various React Components that are to be used
// import React Component from "./pathto/ReactComponent.jsx";
import Navbar from '../Navbar/Navbar.jsx';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import ContentSection from '../ContentSection/ContentSection.jsx';
import Table from '../Table/Table.jsx';
import Footer from '../Footer/Footer.jsx';

const App = (props) => {
    return (
        <div>
            <Navbar navbarID={ "MainPageNavbar" } navbarJsonUrl={ props.navbarjsonurl } />
            <Jumbotron jumbotronID={ "MainPageJumbotron" } jumbotronJsonUrl={ props.jumbotronjsonurl } />
            <Footer footerID={ "MainPageFooter" } footerJsonUrl={ props.footerjsonurl } />
        </div>
    );
}

export default App;