import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text />
          <Text>Home Page</Text>
          <Text />
          <Button
            title="Press To Login"
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    );
  }
}
