import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Container } from 'native-base';

export default class HomeComponent extends Component {
    render() {
        return (
            <Container>
                <Text>
                    THIS IS HOME COMPONENT
                </Text>
            </Container>
        )
    }
}