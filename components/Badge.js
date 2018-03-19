import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});

const Badge = props => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.userInfo.avatar_url }} style={styles.image} />
      <Text style={styles.name}>{props.userInfo.name}</Text>
      <Text style={styles.handle}>{props.userInfo.login}</Text>
    </View>
  );
};

Badge.propTypes = {
  userInfo: PropTypes.object.isRequired
};

export default Badge;
