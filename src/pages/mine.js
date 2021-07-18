import * as React from 'react';
import {Text, View} from 'react-native';

export default class Mine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {}

  render() {
    console.log(this.state.data);
    return (
      <View style={{flex: 1, padding: 24}}>
        <Text style={{width: '80%'}}>
          At this point, APP has obtained the user's access_token, and then can
          use it to request to obtain other resources:
        </Text>
        <Text />
        <Text>{this.props.navigation.state.params.tokens}</Text>
      </View>
    );
  }
}
