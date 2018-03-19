import React, { Component } from 'react';
import * as api from '../utils/api';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import Dashboard from './Dashboard';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    };
  }

  handleSubmit = () => {
    this.setState({ isLoading: true });
    api.getBio(this.state.username).then(res => {
      if (res === 'Not Found') {
        this.setState({ isLOading: false, error: 'User not found' });
      } else {
        this.props.navigator.push({
          title: res.name || 'Select an option',
          component: Dashboard,
          passProps: { userInfo: res }
        });
        this.setState({ username: '', isLoading: false, error: false });
      }
    });
  };

  handleChange = event => {
    this.setState({
      username: event.nativeEvent.text
    });
  };

  render() {
    let showErr = this.state.error ? <Text>{this.state.error}</Text> : <View />;

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a GitHub User</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.uaername}
          onChange={e => this.handleChange(e)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleSubmit()}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large"
        />
        {showErr}
      </View>
    );
  }
}

export default Main;
