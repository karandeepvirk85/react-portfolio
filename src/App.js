import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import './App.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import TopNavigationBar from './components/top-bar.component.js';
import Footer from './components/footer.component.js';
function App() {
    return(
        <div className="App">
            <TopNavigationBar/>
            <Footer/>
        </div>
    );
}
export default App;
