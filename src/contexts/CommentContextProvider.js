import React, { useState } from 'react';
import AppContext from '.';

const CommentContextProvider = ({ children }) => {
    const [ comments, setComments ] = useState([]);
    const context = {
        comments,
        setComments
    };

    return (
        <AppContext.Provider value = { context }>
            { children }
        </AppContext.Provider>
    );
}

export default CommentContextProvider;