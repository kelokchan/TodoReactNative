import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Checkbox from './Checkbox';
import * as Animatable from 'react-native-animatable'

class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onToggleItemCompleted: PropTypes.func.isRequired,
  }
  renderTodo = (todo, i) => {
    const { onToggleItemCompleted, onRemoveItem } = this.props
    const todoStyle = todo.isCompleted ? [styles.todo, styles.completed] : styles.todo

    return (
      <Animatable.View 
        key={i} 
        style={todoStyle}
        animation={'fadeInDown'}
        delay={i * 100}
      >
        <Text> {todo.label} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={todo.isCompleted}
            onToggle={() => { onToggleItemCompleted(i) }}
          />
          <TouchableOpacity onPress={() => { onRemoveItem(i) }}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    )
  }

  render() {
    const { todos } = this.props

    return (
      <ScrollView style={styles.container}>
        {todos.map(this.renderTodo)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todo: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26,
  },
  completed: {
    backgroundColor: 'whitesmoke',
  },
})

export default List;