import React from 'react';

// Please import your React components that you include in your App
// Provide all the imports from the various React Components that are to be used
// import React Component from "./pathto/ReactComponent.jsx";
import Jumbotron from './Jumbotron/Jumbotron.jsx';

class App extends React.Component {
    render() {
        return (
            <Jumbotron />
        );
    }
}

export default App;