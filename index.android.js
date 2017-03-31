/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Card, CardItem, Drawer } from 'native-base';
import HomeComponent from './components/Home/home';
import AboutComponent from './components/About/about';

export default class AwesomeProject extends Component {

  render() {

    closeDrawer = () => {
      this._drawer._root.close()
    };
    openDrawer = () => {
      this._drawer._root.open()
    };
    handleOnPressHome = () => {
      Alert.alert('Home!');
    }
    handleOnPressAbout = () => {
      Alert.alert('About!');
    }
    handleOnPressSome = () => {
      Alert.alert('Some!');
    }
    let title = 'Pressed';
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Container>
          <Header>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Button
              onPress={handleOnPressHome}
              title="Home"
              accessibilityLabel="See an informative alert"
              />
            <Button
              onPress={handleOnPressAbout}
              title="About"
              accessibilityLabel="See an informative alert"
              />
            <Button
              onPress={handleOnPressSome}
              title="Some"
              accessibilityLabel="See an informative alert"
              />
          </Content>
          <Footer>
            <FooterTab>

            </FooterTab>
          </Footer>
        </Container>
        <NativeRouter>
          <View style={styles.container}>
            <View style={styles.nav}>
              <Link
                to="/"
                underlayColor='#f0f4f7'
                style={styles.navItem}>
                <Text>Home</Text>
              </Link>
              <Link
                to="/about"
                underlayColor='#f0f4f7'
                style={styles.navItem}>
                <Text>About</Text>
              </Link>
              <Link
                to="/topics"
                underlayColor='#f0f4f7'
                style={styles.navItem} >
                <Text>Topics</Text>
              </Link>
            </View>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </View>
        </NativeRouter>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
