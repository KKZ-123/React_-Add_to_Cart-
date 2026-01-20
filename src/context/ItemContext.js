import React, { createContext } from 'react'

const ITEMS = [
    {
        id: '1',
        name: 'Boots',
        price: 19.99
    },
    {
        id: '2',
        name: 'Watch',
        price: 9.99
    },
    {
        id: '3',
        name: 'Keyboard',
        price: 39.99
    },
    {
        id: '4',
        name: 'Monitor',
        price: 149.99
    }
];

const ItemContext = createContext({});

export const ItemProvider = ({ children }) => {
    return <ItemContext.Provider value={{ items: ITEMS }}> {children} </ItemContext.Provider>
};



export default ItemContext
