import React, { Component } from 'react';
import { Button, View, StyleSheet,Alert } from 'react-native';

class AnycolorButton extends Component {
  displayalert = () => {
    alert('My first alert');
  };
  render() {
    return (
      <Button
        color={this.props.color}
        title="Click Me"
        onPress={this.displayalert}
      />
    );
  }
}
export default class GridView extends Component {

   render() {
        return (
            <View style={{ marginTop: 100 }}>
              <AnycolorButton color="red"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
             
              <View style={{ marginTop: 30}}>
              <AnycolorButton color="green" 
              onPress={() => Alert.alert('Simple Button pressed')}
               />
                </View>
                <View style={{ marginTop: 30}}>
              <AnycolorButton color="yellow" 
              onPress={() => Alert.alert('Simple Button pressed')}
               />
                </View>

              <View style={{ marginTop: 30 }}>
              <AnycolorButton color="pink"  
              onPress={() => Alert.alert('Simple Button pressed')}
              />
                </View>
            </View>
        );
    }
}




