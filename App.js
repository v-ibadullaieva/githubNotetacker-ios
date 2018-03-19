import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Github Notelacker',
          component: Main
        }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
