import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Stars from 'react-native-stars';

function BookScreen({ route }) {
    // Get the selected book from route.params
    const selectedBook = route.params.book;
    return (
        <ScrollView>
            <View style={styles.container}>

                {/* Showing Book Details with Reviews count, Rating and Price  */}
                {selectedBook ? (
                    <View>
                        <Card style={styles.cardStyle}>
                            <Card.Cover style={styles.cardImage} source={{ uri: selectedBook.imageLink }} />

                            <View style={styles.cardContent}>
                                <View style={styles.cardText}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 17, fontFamily: 'monospace' }} >Rating</Text>
                                    <Text >
                                        <Stars
                                            display={selectedBook.rating}
                                            spacing={2}
                                            count={5}
                                            starSize={15}

                                        />
                                    </Text>
                                </View>

                                <View style={styles.cardText}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 17, fontFamily: 'monospace' }}>Reviews </Text><Text >({selectedBook.reviews})</Text>
                                </View>
                                <View style={styles.cardText}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 17, fontFamily: 'monospace' }}>Price </Text><Text>${selectedBook.price}</Text>
                                </View>
                            </View>
                        </Card>

                        {/* More Book Details such as Author, Country and Language etc */}
                        <Text style={{ paddingTop: 15, paddingBottom: 15, fontSize: 25 }}>
                            <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>{selectedBook.title}</Text>
                        </Text>
                        <Text style={styles.bookDetails}>
                            <Text style={{ fontWeight: 'bold' }}>Author:</Text> {selectedBook.author}
                        </Text>
                        <Text style={styles.bookDetails}>
                            <Text style={{ fontWeight: 'bold' }}>Country:</Text> {selectedBook.country}
                        </Text>
                        <Text style={styles.bookDetails}>
                            <Text style={{ fontWeight: 'bold' }}>Language:</Text> {selectedBook.language}
                        </Text>
                        <Text style={styles.bookDetails}>
                            <Text style={{ fontWeight: 'bold' }}>Year:</Text> {selectedBook.year}
                        </Text>
                        <Text style={styles.bookDetails}>
                            <Text style={{ fontWeight: 'bold' }}>Pages:</Text> {selectedBook.pages}
                        </Text>

                        {/* View Details Button */}
                        <View style={{ paddingTop: 25 }}>
                            <Button style={{ backgroundColor: '#004D6D', borderRadius: 10 }} contentStyle={{ flexDirection: 'row-reverse' }} icon="arrow-right-thick" size={20} mode="contained" onPress={() => console.log('Pressed')}>
                                <Text style={{ fontSize: 20 }}>  View Details</Text>
                            </Button>
                        </View>

                    </View >
                ) : null
                }
            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,

    },
    cardStyle: {
        padding: 18,
        backgroundColor: '#fff',
    },
    cardContent: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardText: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardImage: {
        height: 350,
    },
    bookDetails: {
        fontSize: 15,
        fontFamily: 'monospace',
        padding: 2
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },

});

export default BookScreen;
