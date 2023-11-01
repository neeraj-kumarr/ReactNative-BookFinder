import React from 'react';
import {

    StyleSheet,
    Image, View,
} from 'react-native';

function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../images/book-icon.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 157, height: 186.01
    }
});

export default SplashScreen;
