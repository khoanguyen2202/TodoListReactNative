import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from './style';

const Task = () => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text style={styles.number}>01</Text>
          </View>
          <Text style={styles.content}>Lau nhà</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
