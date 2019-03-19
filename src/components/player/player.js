import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { database } from 'firebase';
import { connect } from 'react-redux';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

import { VXGMobileSDK } from 'react-native-vxg-mobile-sdk';

export class Player extends React.Component {
    _url = null;
    constructor() {
        super();
        this._url = 'rtsp://74c7e592-6d52-4afc-9984-d34a286580ab:@146.64.28.137:554/BigFish_PE_High_768x448_25_AAC.mm1';
    }
    componentDidMount() {

    }

    componentDidMount() {
        //this.props.channel;
        //console.log("THIS FOOL "+this.props.channel)
        //this.callApi()

        //const channel = this.props;

        //console.log(channel.id)
        //this.props.channelObject(channel.id);
    }

    renderVideo() {
        return (
            <View style={styles.container}>
                <Text>Example 1: Simple Player</Text>
                <VXGMobileSDK
                    style={styles.player}
                    config={{ "connectionUrl": this._url, "autoplay": true }}></VXGMobileSDK>
            </View>
        )
    }

    render() {



        //console.log("This IS THE QUALITY NODE " + {quality})
        const channel_details = this.chan;
        if (this.props == "undefined") {
            return (
                <View>
                    {this.renderVideo()}
                </View>
            );
        } else {
            //const { list } = this.props;

            return (
                <View style={styles.container}>

                    {this.renderVideo()}

                </View>
            );
        }

    }
}

const mapStateToProps = ({ routes, apiReducer: { channel } }) => ({
    routes: routes,
    //token: token,
    channel: channel
});

const mapDispatchToProps = {
    //videoObject: fetchVideoObject
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);
