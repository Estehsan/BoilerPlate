import React, {Component, StrictMode} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button as PaperBtn} from 'react-native-paper';
import {theme} from '../../theme';

const Btn = ({mode, ...props}) => {
  return (
    <PaperBtn
      style={[
        styles.Button,
        mode === 'outlined' && {backgroundcolor: theme.colors.tblack},
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
};

export default Btn;

const styles = StyleSheet.create({
  Button: {
    paddingVertical: 10,
    borderRadius: 30,
    width: '100%',
    paddingHorizontal: 60,
    marginVertical: 10,
  },

  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
});
