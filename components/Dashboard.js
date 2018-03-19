import React, { Component } from 'react';
import Profile from './Profile';
import Repos from './Repos';
import Notes from './Notes';
import * as api from '../utils/api.js';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends Component {
  makeBackground(btn) {
    let obj = {
      flexDirection: 'row',
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center'
    };

    if (btn === 0) {
      obj.backgroundColor = '#AEE5D8';
    } else if (btn === 1) {
      obj.backgroundColor = '#E7E5E5';
    } else {
      obj.backgroundColor = '#E5D0E3';
    }

    return obj;
  }

  goToProfile = () => {
    this.props.navigator.push({
      title: 'Profile Page',
      component: Profile,
      passProps: { userInfo: this.props.userInfo }
    });
  };

  goToRepos = () => {
    api.getRepos(this.props.userInfo.login).then(res => {
      this.props.navigator.push({
        title: 'Repos Page',
        component: Repos,
        passProps: { userInfo: this.props.userInfo, repos: res }
      });
    });
  };

  goToNotes = () => {
    api.getNotes(this.props.userInfo.login).then(res => {
      res = res || {};
      this.props.navigator.push({
        title: 'Notes Page',
        component: Notes,
        passProps: {
          notes: res,
          userInfo: this.props.userInfo
        }
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ url: this.props.userInfo.avatar_url }}
          style={styles.image}
        />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={() => this.goToProfile()}
          underlayColor="#7BE0AD"
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={() => this.goToRepos()}
          underlayColor="#E5D0E3"
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={() => this.goToNotes()}
          underlayColor="#E0B0D5"
        >
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Dashboard;
