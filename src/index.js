import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {withformik} from 'formik';

const FormikApp = withformik({

})(App)

ReactDOM.render(<FormikApp />, document.getElementById('root'));


