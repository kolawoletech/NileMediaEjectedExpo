import React, { Component } from 'react';
import { styles } from './styles';
import { Scene, Router , Stack} from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { Text } from 'react-native'
import HomeContainer from '../home';
import SearchContainer from '../search';
import CounterContainer from '../counter';
import SessionContainer from '../auth/LoginForm';
import SignupContainer from '../auth/SignupForm';
import TodolistContainer from '../todolist';

import ChannelsContainer from '../channels';
import ChannelContainer from '../channel';
import PlayerContainer from '../player';



import CatalogueContainer from '../catalogue';
import ProgramContainer from '../program';
import PlaylistContainer from '../playlist';
import MediaContainer from '../media';
import TabsContainer from '../tabs';
import LandingContainer from '../landing'
import configureStore from '../../store';
import MenuContainer from '../menu';
const store = configureStore();
const RouterRedux = connect()(Router);
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? '#76B6C4' : '#0F516C', fontSize: 20 }}>{title}</Text>
  );
}
export default class Routes extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <RouterRedux hideNavBar={true} navigationBarStyle={styles.navBar} tintColor="#ffffff" titleStyle={styles.barButtonTextStyle}>
          <Stack key="root" >      
              <Scene key="login" component={SessionContainer} title="Login" />
              <Scene key="signup" component={SignupContainer} title="Signup" />
              <Scene key="home" component={HomeContainer} title="Home" />
              <Scene key="channels" component={ChannelsContainer} title="Channels"  />
              <Scene key="channel" component={ChannelContainer} title="Channel" />
              <Scene key="player" component={PlayerContainer} title="Player" />
              <Scene key="catalogue" component={CatalogueContainer} title="Catalogue" />
              <Scene key="program" component={ProgramContainer} title="Program" />
              <Scene key="playlist" component={PlaylistContainer} title="Playlist" />
              <Scene key="media" component={MediaContainer} title="Media" />
              <Scene key="tabs" component={TabsContainer} title="Home"  initial={true}/>
              <Scene key="landing" component={LandingContainer} title="Landing" />
            </Stack>
        </RouterRedux>
      </Provider>
    );
  }
}
