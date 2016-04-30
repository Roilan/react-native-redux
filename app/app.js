import React, { Component, Navigator, StyleSheet } from 'react-native';
import Landing from './components/landing';

const ROUTES = {
  landing: Landing,
  
  initial: 'landing'
};

export default class App extends Component {
  constructor() {
    super();
    
    this.renderRoute = this.renderRoute.bind(this);
  }
  
  renderRoute(route, navigator) {
    const Component = ROUTES[route.name];
    
    return (
      <Component route={route} navigator={navigator} />
    );
  }
  
  render() {    
    return (
      <Navigator
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        initialRoute={{name: ROUTES.initial}}
        renderScene={this.renderRoute}
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});