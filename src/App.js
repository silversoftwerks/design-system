import React from 'react';
import { Text, View } from 'react-native';

export const styles = StyleSheet.create({
    box: { padding: 10 },
    text: { fontWeight: 'bold' }
  });
  
  export class App extends React.Component {
  render() {
    return (<View style={styles.box}>
      <Text style={styles.text}>Hello, world!</Text>
    </View>);
  }
}
