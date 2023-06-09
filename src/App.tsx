import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/Main";
import MultiForm from "./pages/multiform/MultiForm";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/create' element={<MultiForm/>}/>
            </Routes>
        </div>
    );
}

export default App;
