import * as React from 'react';
import WebView from 'react-native-webview';
import {getAccount, getEmailAndPhone} from '../backend/AuthBackend';
import {authConfig} from '../backend/Auth';

export default class Login extends React.Component {
  render() {
    const HandleWebChange = e => {
      let url = new URL(e.url);
      if (e && e.url && url.searchParams) {
        const Str = String(url);
        let ss = Str.split('?')[1].split('&');
        if (ss[0].split('=')[0] === 'code') {
          const code = ss[0].split('=');
          getEmailAndPhone({
            application: authConfig.appName,
            organization: authConfig.organizationName,
            username: '1340908470',
          });
          // this.props.navigation.navigate('Personal');
        }
      }
    };

    const uri =
      'http://chenweihao.vip/login/oauth/authorize?client_id=36b6f56926f8e1b6a485&response_type=code&redirect_uri=http://chenweihao.vip:8081/callback&scope=read&state=casdoor';

    return (
      <WebView
        source={{uri: uri}}
        onMessage={e => {
          console.log('message' + e);
        }}
      />
    );
  }
}
