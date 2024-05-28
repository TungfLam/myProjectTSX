import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import io from 'socket.io-client';


export default function Cart() {



  const [count, setCount] = useState(0);

  const handlePressSuccess = () => {
    setCount(count + 1);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };
  const handlePressWarning = () => {
    setCount(count + 1);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  };
  const handlePressError = () => {
    setCount(count + 1);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  };
  const handlePressHeavy = () => {
    setCount(count + 1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };
  const handlePressLight = () => {
    setCount(count + 1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };
  const handlePressNormal = () => {
    setCount(count + 1);
    Haptics.selectionAsync();
  };


  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>

      <Button
        onPress={handlePressSuccess}
        title="Success"
      />
      <Button
        onPress={handlePressWarning}
        title="Warning"
      />
      <Button
        onPress={handlePressError}
        title="Error"
      />
      <Button
        onPress={handlePressHeavy}
        title="Heavy"
      />
      <Button
        onPress={handlePressLight}
        title="Light"
      />
      <Button
        onPress={handlePressNormal}
        title="Normal"
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
