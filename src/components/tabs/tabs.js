import React from 'react';
import { ScrollView, View, Text, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Channels from '../channels/channels'
import Catalogue from '../catalogue/catalogue'
import Media from '../media/media'

import { TabViewAnimated, TabBar, SceneMap, StatusBar, } from 'react-native-tab-view';
import { Constants } from 'expo';
import MaterialTabs from 'react-native-material-tabs';

export default class Tabs extends React.Component {

  state = {
    index: 0,
    routes: [{ key: '1', title: 'First' }, { key: '2', title: 'Second' }],
  };

  _handleIndexChange = index => {
    this.setState({ index })
  };

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': Channels,
    '2': Catalogue,
    '3': Media
  });
  render() {
    return (
      <ScrollView style={{backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => { Actions.channels(); }}>
            <Button  color ='white' title="Channels" onPress={() => { Actions.channels(); }}></Button>
          </TouchableOpacity>
          <TouchableOpacity   onPress={() => { Actions.channels(); }}>
            <Button color ='white' title="Catalogue" onPress={() => { Actions.catalogue(); }}></Button>
          </TouchableOpacity>
          <TouchableOpacity   onPress={() => { Actions.channels(); }}>
            <Button color ='white' title="Playlist" onPress={() => { Actions.media(); }}></Button>
          </TouchableOpacity>
         
        </View>
        <Channels />
      </ScrollView>
      /*       <View
            style={{
              flex: 1,
              paddingTop: Constants.statusBarHeight,
              backgroundColor: '#1982f3',
            }}>
            <TabViewAnimated
              style={styles.container}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onRequestChangeTab={this._handleIndexChange}
            />
            <StatusBar barStyle="light-content" />
          </View> */
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#76b6c4',
   justifyContent: 'space-between'
    
   
   
  },
  button: {
  
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#',
    width: '33%',
    height: 56
  },
  buttonText: {
    color: 'green',

  },

  buttons: {
    flexDirection: 'row',
   
  },

  pills: {
    padding: 15,
    textAlign: 'center',
    flexDirection: 'column'
  },
  item: {
    backgroundColor: '#0f516c',
    padding: 15,
    width: '33%',
    float: 'left'
  },


};