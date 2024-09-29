import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {strings} from '../utils/String';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.pagerView}>
      <View style={styles.page}>
        <Text style={{fontSize: 30}}>{`${strings.welcome}!`} </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
