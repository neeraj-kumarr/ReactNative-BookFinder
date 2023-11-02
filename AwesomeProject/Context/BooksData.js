import React, { createContext, useContext, useEffect, useState } from 'react';

const BooksData = createContext();

export const useBooksData = () => {
    return useContext(BooksData);
};

export const BooksDataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const url = "https://books-list-api.vercel.app/books";
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
            };

            let response = await fetch(url, { headers });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result.data);
            setIsLoading(false);
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
