import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Text from './Components/CustomText';

import Screens from './Screens/screens';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
      'Lato-BlackItalic': require('./assets/fonts/Lato-BlackItalic.ttf'),
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
      'Lato-BoldItalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
      'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
      'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
      'Lato-LightItalic': require('./assets/fonts/Lato-LightItalic.ttf'),
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
      'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
      'Lato-ThinItalic': require('./assets/fonts/Lato-ThinItalic.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Screens />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});