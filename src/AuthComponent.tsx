import React, { useContext, createContext } from 'react';


const authContext = createContext({ username: '', password: '' });

export { authContext }