import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import './Draft.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';
export const AppContext = React.createContext();

function App(props) {
    let navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const [notes, setNotes] = useState([
        {
            id: 1,
            name: 'JavaScript',
            description: 'I really love it1',
            descriptionTag: ['#11223', '#qfqfws'],
        },
        {
            id: 2,
            name: 'Shop',
            description: 'I want go to the #shop',
            descriptionTag: ['#shop'],
        },
        {
            id: 3,
            name: 'JavqfqfqfaqfScrqfqfqfqfiptqfqfqfq',
            description: 'Ifqqfeallqffyqfqflovqfe iqfqf3',
            descriptionTag: ['#qfqfqfqf', '#qfqfqfqfqfqf'],
        },
    ]);

    // useEffect(() => {
    //     axios
    //         .get('/notes')
    //         .then((res) => {
    //             const notes = res.data;
    //             setNotes(notes);
    //             console.log('Data was readed');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    const [note, setNote] = useState({});

    const addTag = (tag) => {
        setTags((tags) => Array.from(new Set([...tags, tag])));
    };

    const getfilterNotes = (notes, tags) => {
        let result = notes.filter((note) => {
            return note.descriptionTag.some((tag) => {
                return tags.some((item) => {
                    return item === tag;
                });
            });
        });
        if (tags.length === 0) {
            return notes;
        } else {
            return result;
        }
    };

    const deleteTag = (tag) => {
        setTags((tags) => tags.filter((currentValue) => currentValue !== tag));
    };

    const addNote = () => {
        axios.post('/notes');
        setNotes((notes) => [...notes, { id: uuidv4(), ...note }]);
        setNote({});
        return navigate('/');
    };

    const editNote = (note) => {
        setNotes((notes) =>
            notes.map((item) => {
                if (item.id === note.id) {
                    return {
                        ...note,
                    };
                }
                return {
                    ...item,
                };
            })
        );
        navigate('/');
    };

    const deleteNote = (note) => {
        setNotes((notes) => notes.filter((item) => item.id !== note.id));
        navigate('/');
    };

    const close = () => {
        return navigate('/');
    };

    function findDescriptionHashtags(searchText) {
        let regexp = /(\s|^)\#\w\w+\b/gm;
        let resultDescription = searchText.match(regexp);
        if (resultDescription) {
            resultDescription = resultDescription.map(function (s) {
                return s.trim();
            });
            console.log(resultDescription);
            return resultDescription;
        } else {
            return [''];
        }
    }

    return (
        <>
            <AppContext.Provider
                value={{
                    tags,
                    addTag,
                    deleteTag,
                    notes,
                    note,
                    setNote,
                    addNote,
                    editNote,
                    deleteNote,
                    close,
                    findDescriptionHashtags,
                    getfilterNotes,
                }}
            >
                <div className="app-wrapper">
                    <Header />
                    <div className="app-wrapper-content">
                        <Navbar />
                        <Routes>
                            <Route
                                exact={false}
                                path="/*"
                                element={<Content />}
                            />
                            {/* <Route path="*" element={<NotfoundPage />} /> */}
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </AppContext.Provider>
        </>
    );
}

export default App;
