import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/mProflie';
import io from 'socket.io-client';

export default function Home(): JSX.Element {

  useEffect(() => {
    let socket;

    // Kiểm tra và ngắt kết nối socket hiện tại (nếu có)
    if (socket) {
      socket.off(); // Ngắt các sự kiện lắng nghe
      socket.disconnect(); // Ngắt kết nối
    }

    // Tạo kết nối socket mới
    socket = io('http://192.168.2.38:3000');

    // Lắng nghe sự kiện khi kết nối thành công
    socket.on('connect', () => {
      console.log('Đã kết nối đến máy chủ. ID socket:', socket.id);
    });

    // Lắng nghe sự kiện khi nhận được tin nhắn từ máy chủ
    socket.on('message', (data) => {
      console.log('Đã nhận một tin nhắn mới:', data);
    });

    // Hãy nhớ trả về một hàm từ useEffect để xử lý việc cleanup (ngắt kết nối) khi component bị unmount.
    return () => {
      socket.off();
      socket.disconnect();
    };
  }, []); // Thêm mảng rỗng để chỉ chạy useEffect một lần sau khi component được render



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>tttung</Text>
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
