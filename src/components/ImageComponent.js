import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ImageComponent({source, imgStyle}) {
  return (
    <View>
      <Image
        source={source}
        style={{...styles.image, imgStyle}}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
