import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(
    <App/>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;

        ReactDom.render(
            <NextApp />,
            document.getElementById('app')
        );
    });
}