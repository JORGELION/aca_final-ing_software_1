import React from 'react'
import ReactDom from 'react-dom/client';
import {Footer} from './components/Footer';

const root = ReactDom.createRoot(document.getElementById('root'))

function Saludar() {

    return <h1>Hola mundo</h1>
}

root.render(<>
<Saludar/>
<Footer/>
</>)