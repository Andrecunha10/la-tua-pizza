import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Container } from '../Container';
import {CustomText} from '../CustomText';

type Props = {
  children: React.ReactNode;
};

export function CustomAlert({children}: Props) {
  return (
    <Container style={styles.container}>
      <View style={styles.wrap}>
        <CustomText style={styles.text}>{children}</CustomText>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#c03a48',
    borderWidth: 1,
    borderColor: '#c10d1f',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
  }
});