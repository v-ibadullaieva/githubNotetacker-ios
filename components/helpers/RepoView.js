import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, WebView } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

const RepoView = props => {
  console.log(props.url);
  return (
    <View style={styles.container}>
      <WebView source={{ uri: props.url }} />
    </View>
  );
};

RepoView.propTypes = {
  url: PropTypes.string.isRequired
};

export default RepoView;
