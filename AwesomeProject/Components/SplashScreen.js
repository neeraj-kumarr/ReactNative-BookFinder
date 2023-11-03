import React, { useEffect } from 'react';
import {

    StyleSheet,
    Image, View,
} from 'react-native';

function SplashScreen(props) {

    useEffect(() => {
        // Use a timer to navigate to the next screen after a few seconds
        setTimeout(() => {
            props.navigation.navigate('HomeScreen');
        }, 1000);
    }, []);

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
        width: 170, height: 200
    }
});

export default SplashScreen;
