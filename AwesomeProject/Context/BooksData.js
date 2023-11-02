import React, { createContext, useContext, useEffect, useState } from 'react';

const BooksData = createContext();

export const useBooksData = () => {
    return useContext(BooksData);
};

// Using ContextAPI

export const BooksDataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {

            const url = "https://books-list-api.vercel.app/books";    // Calling API through headers
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
            };

            let response = await fetch(url, { headers });    // contains the fetched data

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();   // data converted to json
            setData(result.data);

            setIsLoading(false);   // Spinner will stop
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <BooksData.Provider value={{ data, isLoading }}>
            {children}
        </BooksData.Provider>
    );
};

export default BooksData;
