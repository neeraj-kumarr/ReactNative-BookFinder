import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Spinner = () => (
    <View style={styles.container} >
        <ActivityIndicator animating={true} color={MD2Colors.black800} size='large' />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 300
    },
})
export default Spinner;