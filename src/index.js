/******************************************************************
 * Author: Anuj Parikh
 * Description: App Container Component for hot reload to bundle
 *              whole application
 * Type: React Class Component
 *******************************************************************/

/* Dependency Imports */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

/* Custom Imports */
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Root from './components/root';

class Index {
    constructor() {
        render(
            <AppContainer>
                <Root />
            </AppContainer>,
            document.getElementById('react-root')
        );

        if (module.hot) {
            module.hot.accept('./components/root', () => {
                const NewRoot = require('./components/root').default;
                render(
                    <AppContainer>
                        <NewRoot />
                    </AppContainer>,
                    document.getElementById('react-root')
                );
            });
        }
    }
}

export default new Index();