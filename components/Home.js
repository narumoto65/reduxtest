import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {connect} from 'react-redux'
import {readEvents} from '../actions'
import _ from 'lodash'
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>componentName</Text>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => ({events:state.events})

const mapDispatchToProps=({readEvents})

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)