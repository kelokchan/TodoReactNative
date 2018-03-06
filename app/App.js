/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Title from './components/Title';
import List from './components/List';
import Footer from './components/Footer';
import Input from './components/Input';
import Counter from './components/Counter';
import configureStore from './store/configureStore';
import './config/ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import { addItem, removeItem, toggleItemCompleted, removeCompleted, increaseAction, decreaseAction } from './actions';

const mapStateToProps = (state) => ({
  count: state.count,
  todos: state.todos,
})

class App extends Component {
  onIncrement = (i) => {
    const { dispatch } = this.props;
    dispatch(increaseAction(i));
  }
  onDecrement = (i) => {
    const { dispatch } = this.props;
    dispatch(decreaseAction(i));
  }
  onSubmit = (text) => {
    const { dispatch } = this.props;
    dispatch(addItem(text));
  }
  removeItem = (index) => {
    const { dispatch } = this.props;
    dispatch(removeItem(index));
  }
  toggleItemCompleted = (index) => {
    const { dispatch } = this.props;
    dispatch(toggleItemCompleted(index));
  }
  removeCompleted = () => {
    const { dispatch } = this.props;
    dispatch(removeCompleted());
  }
  render() {
    console.disableYellowBox = true;
    const { count, todos } = this.props;
    return (
      <View style={styles.container}>
        <Title>Todo List</Title>
        <Input 
          onSubmit={this.onSubmit} 
          placeholder={'Enter an item'} 
        />
        <Counter 
          count={count}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        <List 
          todos={todos}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <Footer
          onRemoveCompleted={this.removeCompleted}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20: 0,
  },
})

export default connect(mapStateToProps)(App);