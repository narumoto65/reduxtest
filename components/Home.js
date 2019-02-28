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
    componentDidMount(){
    //console.log('hi');
    this.props.readEvents()
  }
    renderEvents(){
        return _.map(this.props.events,event=>(
        <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
        </tr>
        ))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => ({events:state.events})

const mapDispatchToProps=({readEvents})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
