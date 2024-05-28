import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Link } from 'expo-router'
import styles from './styles/mProflie';
 

const handle = () => {
};

export default function Profile(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>tùng</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/2.jpg')}
          style={styles.image}
        />
      </View>
      {/* Có thể thêm các View hoặc Text khác ở đây nếu cần */}
      <Link href="/setting" style={{ margin: 10 }}>
        Go to my screen
      </Link>
      {/* <Link href="/a" style={{ color: 'blue' }}>Go to Cart</Link> */}


      <Button
        onPress={handle} // Sử dụng hàm xử lý mới của chúng tôi
        title="Click"
      />

    </View>
  );
}
