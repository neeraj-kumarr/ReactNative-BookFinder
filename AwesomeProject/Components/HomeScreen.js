import React from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList, } from 'react-native';
import { Searchbar, Avatar, Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Stars from 'react-native-stars';
import Spinner from './Spinner';
import { useBooksData } from '../Context/BooksData';

function HomeScreen() {

    const [searchQuery, setSearchQuery] = React.useState('');
    const { data, isLoading } = useBooksData();


    const onChangeSearch = query => setSearchQuery(query);

    // const getAPIData = async () => {

    //     try {
    //         const url = "https://books-list-api.vercel.app/books";
    //         const headers = {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
    //         };

    //         let response = await fetch(url, { headers });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const result = await response.json();
    //         setData(result.data);
    //         setIsLoading(false);

    //     } catch (error) {
    //         console.error("An error occurred while fetching data:", error);
    //     }
    // }
    // useEffect(() => {
    //     getAPIData()
    // }, [])

    const filteredData = data.filter(book => {
        return book.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Hi Neeraj</Text>
                <Avatar.Image size={50} source={require('../images/avtar.png')} />
            </View>
            <Searchbar
                style={{ margin: 12 }}
                placeholder="Search..."
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            {isLoading ? ( // Display spinner while data is being fetched
                <Spinner />
            ) : (
                <FlatList
                    data={filteredData}
                    keyExtractor={(book) => book.title}
                    numColumns={2}
                    renderItem={({ item: book }) => (
                        <View style={styles.cardContainer}>
                            <View style={styles.card} >
                                <Card >
                                    <Card.Cover source={{ uri: book.imageLink }} />
                                    <View style={book.is_liked ? styles.likedHeartContainer : styles.unlikedHeartContainer}>
                                        <MaterialCommunityIcons name="heart-circle" size={30} color='white' />
                                    </View>

                                </Card>
                                <View style={{ padding: 5 }}>
                                    <Text style={styles.text}>{book.title}</Text>
                                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>
                                        <Stars
                                            display={book.rating}
                                            spacing={2}
                                            count={5}
                                            starSize={20}
                                        />
                                        <Text >({book.reviews}) </Text>
                                    </Text>
                                    <Text style={styles.text}>${book.price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // To align items horizontally
        alignItems: 'center', // To vertically center items
        justifyContent: 'space-between', // To place items at both ends
        padding: 20
    },
    text: {
        fontSize: 18,
        fontFamily: 'Time New Roman',
        fontWeight: 'bold',
    },
    cardContainer: {
        flex: 1, // Added to allow flexible width for cards
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    card: {
        flex: 1, // Added to allow flexible width for cards
    },
    likedHeartContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 30,
        zIndex: 1,
    },
    unlikedHeartContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 1,
    }
});

export default HomeScreen;
