import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Counter = (props) => (
  <View style={styles.counterContainer}>
    <View style={styles.rowContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { props.onIncrement(1) }}
      >
        <Text style={styles.buttonText}>Increment + </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { props.onDecrement(1) }}
      >
        <Text style={styles.buttonText}>Decrement - </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.countContainer}>
      <Animatable.Text 
        style={styles.countItem}
        animation='pulse' 
        easing='ease' 
        duration={1500}
        iterationCount='infinite' 
      >
        Counter: { props.count }
      </Animatable.Text>
    </View>
  </View>
);

const styles = {
  counterContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
    backgroundColor: 'lightblue',
    paddingVertical: 25
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 15,
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white'
  },
  countContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  countItem: {
    fontSize: 25,
    fontWeight: '300',
    color: 'white'
  }
}

export default Counter;