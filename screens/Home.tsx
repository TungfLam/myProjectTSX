import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/mHome';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vân Ngô</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/1.jpg')}
          style={styles.image}
        />
      </View>
      {/* Có thể thêm các View hoặc Text khác ở đây nếu cần */}
    </View>
    
  );
}
