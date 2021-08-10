import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../component/basic/Background';
import Heading from '../component/basic/Heading';
import Btn from '../component/basic/Btn';
import {Paragraph} from 'react-native-paper';

const GetStarted = ({navigation}) => {
  return (
    <Background>
      <Heading>Get Started</Heading>
      <Paragraph>
        Now asdThe Easiest way to get Started with a Project{' '}
      </Paragraph>

      <Btn mode="contained" onPress={() => navigation.navigate('Login')}>
        Login
      </Btn>
      <Btn mode="outlined">Register</Btn>
    </Background>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
