import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Button } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';

export class ChannelQuality extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showTheThing: false,
            images: []
        }
    }
    renderItem = (qualityList) => {
        const { cid } = this.props;
        const { onPressItem } = this.props;
        return ( 

            <TouchableOpacity style={styles.item} key={qualityList.profile_id} onPress={() => onPressItem(cid, qualityList.profile_id)}>
{/*                 {qualityList.profile_id === 4 && <Button onPress={Actions.player} color="white" title="LOW" />}
                {qualityList.profile_id === 5 && <Button onPress={Actions.player} color="white" title="MED" />}
                {qualityList.profile_id === 6 && <Button onPress={Actions.player} color="white" title="HIGH" />} */}


                        {qualityList.profile_id === 4 && <Text style={styles.text}> LOW</Text>}
                        {qualityList.profile_id === 5 && <Text style={styles.text} >MED </Text>}
                        {qualityList.profile_id === 6 && <Text style={styles.text} > HIGH </Text>}
            </TouchableOpacity>
        );

    }


    render() {

        if (this.props == "undefined") {
            return (

                <TouchableOpacity>
                    <Text>LOADING!</Text>
                </TouchableOpacity>
            );
        } else {
            const { qual } = this.props;
            const { cid } = this.props;

            console.log("Trying to View channelID", JSON.stringify(this.props))
            return (
                <View>
                    {this.state.images.length === 0 &&
                        <View>


                            <View style={styles.buttons}>
                                {qual.map(this.renderItem)}
                            </View>


                        </View>}
                    {this.state.images.length > 0 &&
                        <View style={styles.buttons}>{
                            qual.map(this.renderItem)}
                        </View>}
                </View>

            );
        }

    }
}

