import React, {Component} from 'react'

import PopupDialog from 'react-native-popup-dialog'

import transactions from '../../actions/'

import {CardSection, Button, Spinner, Card} from "../../components/common/index";

import {
    Text,
    StyleSheet,
    View,
    ListView,
    TouchableHighlight,
    Dimensions,
    Image,
    Animated,
    TextInput
} from 'react-native'

import Navbar from '../../components/Navbar'

import TransactionApi from './TransactionApi'

const {width, height} = Dimensions.get('window')

export default class TransactionListView extends Component {

    constructor(props){
        super(props);

        const api = new TransactionApi();
        api.getTransactions()
            .then(responseJson => {
                console.log(responseJson);
                const data = responseJson;
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.state = {
                    isLoaded: false,
                    isOpenMenu: false,
                    dataSource: ds.cloneWithRows(data),
                    rotateY: new Animated.Value(0),
                    translateX: new Animated.Value(width),
                    menuAnimation: new Animated.Value(0),
                    text: ''
                };
            })   // Successfully logged in
            .catch(err => alert(err.message));  // Catch any error

    }

    _fetchData(callback) {
        //Limits fetches to 15 so there's lesser items from the get go
        //http://localhost:8088/transactions/list/
        fetch(`http://localhost:8088/transactions/list/1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            }})
            .then(response => response.json())
            .then(callback)
            .catch(error => {
                console.error(error);
            });
    }

    showMenu(){
        if(this.state.isOpenMenu){
            this.setState({isOpenMenu: false})
            Animated.parallel([
                Animated.timing(
                    this.state.translateX, {
                        toValue: width
                    }
                ),
                Animated.timing(
                    this.state.rotateY, {
                        toValue: 0
                    }
                )
            ]).start()
        } else {
            this.setState({isOpenMenu: true})
            Animated.parallel([
                Animated.timing(
                    this.state.translateX, {
                        toValue: width * 0.60
                    }
                ),
                Animated.timing(
                    this.state.rotateY, {
                        toValue: 1
                    }
                ),
                Animated.timing(
                    this.state.menuAnimation, {
                        toValue: 1,
                        duration: 800
                    }
                )
            ]).start()
        }
    }

    closeMenu(){
        this.setState({isOpenMenu: false})
        Animated.parallel([
            Animated.timing(
                this.state.translateX, {
                    toValue: width
                }
            ),
            Animated.timing(
                this.state.rotateY, {
                    toValue: 0
                }
            ),
            Animated.timing(
                this.state.menuAnimation, {
                    toValue: 0,
                    duration: 300
                }
            )
        ]).start()
    }

    renderRow(rowData){
        const img = rowData.image
        return (
            <TouchableHighlight style={styles.containerCell} onPress={() => {this.popupDialog.show();}}>
                <View>
                    <View style={styles.footerContainer}>
                        <View
                            style={styles.imageUser}
                        >
                            <Image
                                style={styles.imageAvatar}
                                source={{uri: rowData.user}}
                            />
                        </View>
                        <View style={styles.footerTextContainer}>
                            <Text style={styles.text}>{rowData.name}</Text>
                            <Text style={[styles.text, styles.textTitle]}>{rowData.bank_details}</Text>
                            <Text style={[styles.text, styles.textTitle]}>{rowData.address}</Text>
                            <Text style={[styles.text, styles.textBy]}>{rowData.status}</Text>
                            <Text style={[styles.text, styles.textBy]}>{rowData.amount}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    filterSearch(text){
        const newData = data.filter(function(item){
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }
    render(){

        this.fetchData(responseJson => {
            console.log(responseJson);
            const data = responseJson;
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
                isLoaded: false,
                isOpenMenu: false,
                dataSource: ds.cloneWithRows(data),
                rotateY: new Animated.Value(0),
                translateX: new Animated.Value(width),
                menuAnimation: new Animated.Value(0),
                text: ''
            };
        });

        return (
            <View style={styles.container}>
                <Animated.View
                    style={[styles.content, {
                        width: width,
                        backgroundColor: '#0D2C4F',
                        flex: 1,
                        transform: [
                            {
                                perspective: 450
                            },
                            {
                                translateX: this.state.translateX.interpolate({
                                    inputRange: [0, width],
                                    outputRange: [width, 0]
                                })
                            },
                            {
                                rotateY: this.state.rotateY.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '-10deg']
                                })
                            }
                        ]
                    }]}
                >
                    {this.state.isOpenMenu ? <Navbar icon="times" navBarTitle="Transactions" showMenu={this.closeMenu.bind(this)}/> : <Navbar icon="bars" navBarTitle="Transactions" showMenu={this.showMenu.bind(this)}/>}
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='#0D2C4F'
                        onChangeText={(text) => this.filterSearch(text)}
                        value={this.state.text}
                    />
                    <ListView
                        enableEmptySections={true}
                        style={styles.listContainer}
                        renderRow={this.renderRow.bind(this)}
                        dataSource={this.state.dataSource}
                    />
                </Animated.View>
                <Animated.View
                    style={[styles.menu, {
                        opacity: this.state.menuAnimation,
                        position: 'absolute',
                        width: 140,
                        left: 0,
                        top: 100,
                        backgroundColor: 'transparent'
                    }]}
                >

                    <Card><Text style={styles.textMenu}>Home</Text></Card>
                    <Card><Text style={styles.textMenu}>Notifications</Text></Card>
                    <Card><Text style={styles.textMenu}>Transactions</Text></Card>
                    <Card><Text style={styles.textMenu}>Payees</Text></Card>
                    <Card><Text style={styles.textMenu}>Profile</Text></Card>
                    <Card><Text style={styles.textMenu}>Settings</Text></Card>
                </Animated.View>

                <PopupDialog style={styles.dialogContainer}
                             ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                    <View >
                        <Text>Hello</Text>
                        <Button title="Confirm" onPress={() => {this.popupDialog.dismiss();}}>Confirm</Button>
                    </View>
                </PopupDialog>

            </View>
        )
    }
}

const mapStateToProps = state => {
    const transactions = _.map(state.transactions, (val, uid) => {
        return { ...val, uid };
    });

    return { transactions };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D2C4F'
    },
    dialogContainer: {
        width: 0.5,
        height: 0.5,
        backgroundColor: '#fff'
    },
    textInput: {
        height: 30,
        borderWidth: 1,
        borderColor: '#ffffff',
        marginBottom: 10,
        marginHorizontal: 10
    },
    content: {
        zIndex: 1
    },
    footerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        marginBottom: 5,
        marginRight:7,
        marginLeft:7
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
    },
    listContainer: {
        backgroundColor: '#0D2C4F',
        borderColor: '#ffffff',
        marginBottom: 1,
    },
    text: {
        color: '#000000'
    },
    containerCell: {
        backgroundColor: '#0D2C4E',
        borderColor: '#ffffff'
    },
    textTitle: {
        fontSize: 13
    },
    textBy: {
        fontSize: 12
    },
    textMenu: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff'
    },
    title: {
        color: '#fff'
    }
})