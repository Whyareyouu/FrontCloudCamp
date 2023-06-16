import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/Main";
import MultiForm from "./pages/multiform/MultiForm";
import MainLayout from "./Layout/main/MainLayout";

function App() {
    return (<div className="App">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/create' element={<MainLayout/>}>
                    <Route index element={<MultiForm/>}/>
                </Route>
            </Routes>
        </div>);
}

export default App;
