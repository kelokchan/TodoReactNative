import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeCompleted } from '../actions';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: 'whitesmoke',
  },
  title: {
    color: 'red'
  }
})
const Footer = (props) => {

  const { onRemoveCompleted } = props;

  return (
      <TouchableOpacity 
        style={styles.footer}
        onPress={() => { onRemoveCompleted() }}
      >
        <Text style={styles.title}>Remove completed items</Text>
      </TouchableOpacity>
    )
}

Footer.propTypes = {
  onRemoveCompleted: PropTypes.func
};

export default Footer;
