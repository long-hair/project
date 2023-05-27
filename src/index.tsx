import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'src/business/px-2-rem'
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';


ReactDOM.render(
  <BrowserRouter>
  <Suspense fallback={<div>Loading... </div>}>
    <App/>
  </Suspense>
  </BrowserRouter>,

  document.getElementById('root')
)

