import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { connect } from 'react-redux';

class MyApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => this.props.incCounter()} style={styles.border}>
            <AntDesign name='plus' color='yellow' style={styles.icon}/>
          </TouchableOpacity>

          <Text style={styles.text}>{this.props.myCounter}</Text>

          <TouchableOpacity onPress={() => this.props.decCounter()} style={styles.border}>
          <AntDesign name='minus' color='yellow' style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.props.reset()} style={styles.reset}>
          <Text style={styles.resetBtn}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myCounter : state.myCounter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incCounter: () => dispatch({
      type: 'INC_COUNTER'
    }),
    decCounter: () => dispatch({
      type: 'DEC_COUNTER'
    }),
    reset: () => dispatch({
      type: 'RESET'
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: "row", 
    justifyContent: "space-around",
  },
  border: {
    padding: 20,
    backgroundColor: 'red',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50
  },
  icon: {
    fontSize: 40,
  },
  text: {
    fontSize: 30,
    textAlignVertical: "center",
    margin: 5
  }, 
  reset: {
    position: "absolute",
    bottom: 50,
    backgroundColor: 'black',
    borderRadius: 20,
    borderColor: 'yellow',
    borderWidth :1
  },
  resetBtn: {
    textAlign: "center",
    color :'white',
    fontSize: 25,
    paddingVertical :5,
    paddingHorizontal :30
  }
});