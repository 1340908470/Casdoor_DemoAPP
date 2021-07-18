import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default class Home extends React.Component {
  render() {
    const baseUrlApi = 'https://chenweihao.vip';
    const baseUrl = 'http://chenweihao.vip';
    const client_id = '36b6f56926f8e1b6a485';
    const client_secret = '0128cf637306889c64439b0c6a5c37c374d8d69c';
    const response_type = 'code';
    const redirect_uri = 'http://chenweihao.vip:8081/callback';
    const scope = 'read';
    const state = 'casdoor';

    const uri =
      `${baseUrl}/login/oauth/authorize?` +
      `client_id=${client_id}&` +
      `response_type=${response_type}&` +
      `redirect_uri=${redirect_uri}&` +
      `scope=${scope}&` +
      `state=${state}`;

    const body = new FormData();
    body.append('grant_type', 'authorization_code');
    body.append('client_id', client_id);
    body.append('client_secret', client_secret);
    body.append('code', '5e95472e271479de711e');

    return (
      <View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text />
          <Text style={{width: '60%'}}>
            In the navigation bar, personal center and other places where you
            need to log in, use the button to jump to the login page.
          </Text>
          <Text />
          <Text style={{width: '90%', textAlign: 'center'}}>
            this.props.navigation.navigate('Login');
          </Text>
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
