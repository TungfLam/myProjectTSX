import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Màu nền cho toàn View
  },
  header: {
    marginTop: 50, // Khoảng cách từ top
    marginBottom: 30, // Khoảng cách từ header đến imageContainer
    paddingHorizontal: 20, // Khoảng cách từ các cạnh ngang
  },
  title: {
    color: '#FF499D', // Màu chữ
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center', // Căn chữ ở giữa
  },
  imageContainer: {
    flex: 1, // Chiếm toàn bộ phần trống còn lại
    justifyContent: 'center', // Căn giữa trục dọc
    alignItems: 'center', // Căn giữa trục ngang
  },
  image: {
    width: 250, // Tăng kích thước ảnh lên
    height: 250, // Tăng kích thước ảnh lên
    borderRadius: 30, // Làm tròn ảnh
    borderWidth: 3, // Tăng độ dày đường viền
    borderColor: '#FF77A3', // Màu viền
    resizeMode: 'cover', // Bảo toàn tỷ lệ ảnh
    marginBottom: 300, // Khoảng cách từ ảnh đến phần tử phía dưới
  },
});

export default styles;
