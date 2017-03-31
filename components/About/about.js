import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';
import { Container } from 'native-base';

export default class AboutComponent extends Component {
    render() {
        handleOnPressSome = () => {
            Alert.alert('Some!');
        }
        return (
            <Button
                onPress={handleOnPressHome}
                title="Some"
                accessibilityLabel="See an informative alert"
                />
        )
    }
}