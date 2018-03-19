import React from 'react';
import { StyleSheet, View } from 'react-native';

var styles = StyleSheet.create({
  separator: {
    flex: 1,
    backgroundColor: '#E4E4E4',
    height: 1,
    marginLeft: 15
  }
});

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;
