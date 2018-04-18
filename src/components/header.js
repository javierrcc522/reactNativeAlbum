// import libraries to make a component
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = () => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums</Text>;
    </View>
  );
};
//make the component available to othe parts of the app

const styles = {

  viewStyle: {
    backgroundColor: '#F8F8F8'
  },

  textStyle: {
    fontSize: 20
  }
};

export default Header;
