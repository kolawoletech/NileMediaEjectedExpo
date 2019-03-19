import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { database } from 'firebase';
import { connect } from 'react-redux';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';



export class Player extends React.Component {
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
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                        uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
                    },
                }}
                isPortrait={true}
                playFromPositionMillis={0}
            />
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
