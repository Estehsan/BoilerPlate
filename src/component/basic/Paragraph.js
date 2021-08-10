import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Paragraph = props => {
  return <Text style={styles.TextAll} {...props} />;
};

export default Paragraph;

const styles = StyleSheet.create({
  TextAll: {
    fontFamily: 'Montserrat-Regular',
    lineHeight: 21,
    textAlign: 'center', // <-- the magic
  },
});
