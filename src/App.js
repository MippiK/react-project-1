import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>

                <Header />

                <Navbar data={props.state.sidebar} />

                <div className='wrapper-content'>
                    <Routes>
                        <Route path='/Messages/*' element={<Dialogs data={props.state.dialogsPage}
                                                                    dispatch={props.dispatch}
                        />} />

                        <Route path='/Profile' element={<Profile data={props.state.profilePage}
                                                                 dispatch={props.dispatch}
                        />} />
                        <Route path='/News' element={<News />} />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Settings' element={<Settings />} />
                    </Routes>
                </div>

                <Footer />

            </div>
        </BrowserRouter>

    );
}

export default App;
