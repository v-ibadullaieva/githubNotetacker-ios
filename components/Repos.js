import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import Separator from './helpers/Separator';
import Web_View from './helpers/RepoView';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

class Repos extends Component {
  openPage = url => {
    this.props.navigator.push({
      title: 'Web View',
      component: Web_View,
      passProps: { url }
    });
  };

  render() {
    let repos = this.props.repos;
    let list = repos.map((repo, index) => {
      let desc = repo.description ? (
        <Text style={styles.description}>repo.description</Text>
      ) : (
        <View />
      );
      return (
        <View key={index} style={styles.rowContainer}>
          <TouchableHighlight
            onPress={() => this.openPage(repo.html_url)}
            underlayColor="transparent"
          >
            <Text style={styles.name}>{repo.name}</Text>
          </TouchableHighlight>
          <Text style={styles.stars}>Stars: {repo.stargazers_count}</Text>
          {desc}
          <Separator />
        </View>
      );
    });

    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    );
  }
}

Repos.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};

export default Repos;
