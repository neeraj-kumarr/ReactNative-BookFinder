import React from 'react';
import { Text, StyleSheet, View, FlatList, } from 'react-native';
import { Searchbar, Avatar, Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Stars from 'react-native-stars';
import Spinner from './Spinner';
import { useBooksData } from '../Context/BooksData';

function HomeScreen(props) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const { data, isLoading } = useBooksData(); // Using data through ContextAPI

    // To show search text
    const onChangeSearch = query => setSearchQuery(query);

    // To handle search results by filtering through search keyword
    const filteredData = data.filter(book => {
        return book.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Hi Neeraj</Text>
                <Avatar.Image size={50} source={require('../images/avtar.png')} />

            </View>

            {/* Search bar component */}
            <Searchbar
                style={{ margin: 12 }}
                placeholder="Search..."
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            {isLoading ? ( // Show Spinner, until data is loaded.
                <Spinner />
            ) : (
                // Show List of books with title, rating and review count.
                <FlatList
                    data={filteredData}
                    keyExtractor={(book) => book.title}
                    numColumns={2}
                    renderItem={({ item: book }) => (
                        <View style={styles.cardContainer}>
                            <View style={styles.card} >

                                <Card onPress={() => props.navigation.navigate('BookScreen', { book: book })}>
                                    <Card.Cover source={{ uri: book.imageLink }} />

                                    {/* If the picture isliked, show heart */}
                                    <View style={book.is_liked ? styles.likedHeartContainer : styles.unlikedHeartContainer}>

                                        {/*  Heart Component on books picture */}
                                        <MaterialCommunityIcons name="heart-circle" size={30} color='white' />
                                    </View>
                                </Card>

                                {/* Book Details including, text, rating and review count */}
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    text: {
        fontSize: 18,
        fontFamily: 'Time New Roman',
        fontWeight: 'bold',
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    card: {
        flex: 1,
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
