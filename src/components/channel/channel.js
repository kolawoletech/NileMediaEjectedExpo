import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import { styles } from './styles';

import { connect } from 'react-redux';
import { fetchChannelObject, fetchChannelImage , fetchChannelRSTPLinks} from '../../actions/api/actions';
import { ChannelQuality } from './channelQuality';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

import { LinearGradient } from 'expo';

export class Channel extends React.Component {


    componentDidMount() {
        const channel = this.props.channelData;
        this.props.channelObject(channel.id);
        this.props.imageURI(channel.id)
        this.props.link = null;
    }


    render() {

        const {
            quality: qualityList
        } = this.props.channelData;
        const list = this.props.channelData;

        const channel_details = this.chan;
        if (this.props == "undefined") {
            return (
                <View>
                    <LoadingIndicator />
                </View>
            );
        } else {
            // console.log(this.props)
            let { img } = this.props;

            return (
                <LinearGradient colors={['#76B6C4', '#4E8FA2', '#0F516C']}
                    style={{ height: '100%' }}>
                    <Card
                        // style={{ backgroundColor: '#76b6c4' }}
                        style={{ backgroundColor: '#76b6c4' }}
                        isDark={false}>
                        <CardImage
                            source={{ uri: img }}
                            style={{
                                maxHeight: 225, minHeight: 225, backgroundColor: 'rgba(0, 0, 0, .6)'
                            }}
                            resizeMode="contain"
                            title={list.name}
                        />


                        <CardContent text={list.description}
                            style={{
                                maxHeight: 50, minHeight: 50
                            }} />
                        <View style={styles.pills}>
                            {/*                             <View>
                                <CardButton
                                    onPress={() => { }}
                                    title="Watch"
                                    color="white"
                                    style={{
                                        width: '95%', backgroundColor: 'rgba(0, 0, 0, .6)',
                                    }}
                                />
                            </View> */}
                            <View>
                                <Text style={styles.text}>Watch</Text>
                            </View>
                            <View >
                                <ChannelQuality qual={qualityList} />
                            </View>

                        </View>
                        {/*                         <CardAction
                            separator={true}
                            inColumn={true}>
                            <CardButton
                                onPress={() => { }}
                                title="Guide"
                                color="blue"
                            />

                        </CardAction> */}
                    </Card>
                </LinearGradient>
            );
        }

    }
}

const mapStateToProps = ({ routes, apiReducer: { channel, img, link } }) => ({
    routes: routes,
    //token: token,
    channel: channel,
    img: img
});

const mapDispatchToProps = {
    channelObject: fetchChannelObject,
    imageURI: fetchChannelImage,
    fetchLink: fetchChannelRSTPLinks
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Channel);
