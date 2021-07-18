import * as React from 'react';
import WebView from 'react-native-webview';
import {Text, View} from 'react-native';

export default class Login extends React.Component {
  render() {
    const baseUrl = 'https://door.casbin.com';
    const client_id = '0ba528121ea87b3eb54d';
    const response_type = 'code';
    const redirect_uri = 'http://localhost:9000/callback';
    const scope = 'read';
    const state = 'casdoor';

    const HandleWebChange = async e => {
      let url = new URL(e.url);
      if (e && e.url && url.searchParams) {
        const Str = String(url);
        let ss = Str.split('?')[1].split('&');
        if (ss[0].split('=')[0] === 'code') {
          const code = ss[0].split('=')[1];

          const client_secret = '04f4ca22101529a3503d5a653a877b4e8403edf0';

          const body = new FormData();
          body.append('grant_type', 'authorization_code');
          body.append('client_id', client_id);
          body.append('client_secret', client_secret);
          body.append('code', code);

          fetch(`${baseUrl}/api/login/oauth/access_token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: body,
          })
            .then(res => res.json())
            .then(data => {
              this.setState({data: data});
            })
            .catch(error => {
              console.error(error);
            })
            .finally(() => {
              this.setState({isLoading: false});
              this.props.navigation.navigate('Mine', {
                tokens: this.state.data.access_token,
              });
            });
        }
      }
    };

    const uri =
      `${baseUrl}/login/oauth/authorize?` +
      `client_id=${client_id}&` +
      `response_type=${response_type}&` +
      `redirect_uri=${redirect_uri}&` +
      `scope=${scope}&` +
      `state=${state}`;

    console.log(uri);

    return (
      <View flex={1}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text />
          <Text style={{width: '80%'}}>
            The login page is embedded in Casdoor through webview, Monitor
            through onNavigationStateChange, when the login is successful, the
            code of the Redirect URL (as a parameter) will be used to exchange
            the access_token through the Casdoor
          </Text>
          <Text />
        </View>
        <View flex={1} style={{width: '90%', marginLeft: '5%'}}>
          <WebView
            source={{
              uri: uri,
            }}
            onNavigationStateChange={HandleWebChange}
          />
        </View>
      </View>
    );
  }
}
