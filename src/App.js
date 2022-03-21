import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>

                <Header />

                <Navbar />

                <div className='wrapper-content'>
                    <Routes>
                        <Route path='/Messages/*' element={<DialogsContainer />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/News' element={<News />} />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Settings' element={<Settings />} />
                        <Route path='/Friends' element={<UsersContainer />} />
                    </Routes>
                </div>

                <Footer />

            </div>
        </BrowserRouter>

    );
}

export default App;
