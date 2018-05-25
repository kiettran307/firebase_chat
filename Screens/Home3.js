import React, { Component } from 'react'
import {BackHandler, Alert, Dimensions, Platform, View, TextInput, TouchableOpacity } from 'react-native'
import {ListItem, Button, Header, Icon, Input, Item, Left, Right, Text, Thumbnail, Body} from 'native-base'
import {UltimateListView} from 'react-native-ultimate-listview'
// import { UltimateListView } from '../lib/index'
import styles from './styles'
import LoadingSpinner from './loadingSpinner'
import ControlTab from './controlTab'
import FlatListItem from './itemContainer/flatListItem'
import FlatListGrid from './itemContainer/flatListGrid'
const logo = require('./images/kiet.jpg')
const logo1 = require('./images/1.png')
const logo2= require('./images/2.png')
const logo3 = require('./images/3.png')
const { width, height } = Dimensions.get('window')
export default class Home3 extends Component {

constructor(props) {
  super(props)
  this.state = {
    layout: 'list',
    text: '',
    parameters: this.props.navigation.state.params.parameters,
  }
  this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}
componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
  
  console.log('handleBackButtonClick ');

  this.onPress();
  this.props.navigation.goBack(null);
  return true;
}

onPress() {
  if (this.state.isLoading) return;

  this.setState({isLoading: true});

  Animated.timing(this.growAnimated, {
    toValue: 1,
    duration: 300,
    easing: Easing.linear,
  }).start();

  setTimeout(() => {
    // Actions.pop();
    this.goBack();
  }, 500);
}

componentWillMount(){
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}
//Fake data ----> Input Data
  onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      // This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 10
      if (this.state.layout === 'grid') pageLimit = 60
      const skip = (page - 1) * pageLimit

      // Generate dummy data
      // let rowData = Array.from({ length: pageLimit }, (value, index) => `User ${index + skip}`)
      let rowData = ['Kiet','Tom','Kenvin','Kathy','Kiet','Tom','Kenvin','Kathy','Kiet','Tom','Kenvin','Kathy'];
      console.log(rowData);
      // Simulate the end of the list if there is no more data returned from the server
      if (page === 10) {
        rowData = []
      }

      // Simulate the network loading in ES7 syntax (async/await)
      await this.sleep(2000)
      startFetch(rowData, pageLimit)
    } catch (err) {
      abortFetch() // manually stop the refresh or pagination if it encounters network error
      console.log(err)
    }
  }

  onChangeLayout = (event) => {
    this.setState({ text: '' })
    switch (event.nativeEvent.selectedSegmentIndex) {
      case 0:
        this.setState({ layout: 'list' })
        break
      case 1:
        this.setState({ layout: 'grid' })
        break
      default:
        break
    }
  }

  onChangeScrollToIndex = (num) => {
    this.setState({ text: num })
    let index = num
    if (this.state.layout === 'grid') {
      index = num / 3
    }
    try {
      this.listView.scrollToIndex({ viewPosition: 0, index: Math.floor(index) })
    } catch (err) {
      console.warn(err)
    }
  }

  onPressItem = (type, index, item) => {
    Alert.alert(type, `You're pressing on ${item}`)
    this.props.navigation.navigate("IM_Screen", { parameters: { name: 'Tran Tan Kiet', age: 28 } });
  }

  sleep = time => new Promise(resolve => setTimeout(() => resolve(), time))

  renderItem = (item, index, separator) => {
    if (this.state.layout === 'list') {
      return (
        <FlatListItem item={item} index={index} onPress={this.onPressItem} />
      )
    } else if (this.state.layout === 'grid') {
      return (
        <FlatListGrid item={item} index={index} onPress={this.onPressItem} />
      )
    }
    return null
  }

  renderControlTab = () => (
    <ControlTab
      layout={this.state.layout}
      onChangeLayout={this.onChangeLayout}
    />
  )

  renderHeader = () => (
    <View>
      {/* <View style={styles.header}>
        <Text style={{ textAlign: 'center' }}>I am {this.state.parameters.name}
        </Text>
      </View>
      <View style={styles.headerSegment}>
        <Left style={{ flex: 0.15 }} />
        {this.renderControlTab()}
        <Right style={{ flex: 0.15 }} />
      </View> */}
      <ListItem thumbnail>
      <View style={styles.header}>
        <Left>
          <Thumbnail square source={logo} style={styles.thumb} />
        </Left>
        
        <Text>Hello:  {this.state.parameters.name}
        </Text>
       </View>
      </ListItem>
      <View style={styles.headerSegment}>
        <Left style={{ flex: 0.15 }} />
        {this.renderControlTab()}
        <Right style={{ flex: 0.15 }} />
      </View>
      </View>
  )

  renderPaginationFetchingView = () => (
    <LoadingSpinner height={height * 0.2} text="loading..." />
  )

  renderSeparatorView = () =>(
    <View style = {{height: 30}}>
    <View style={{marginTop:15, borderBottomColor: 'black', borderBottomWidth: 1}}/>
    </View>
  )
  render() {
    return (
      <View style={styles.container}>
        {/* <Header searchBar rounded>
          <Item style={{ backgroundColor: 'lightgray', borderRadius: 5 }}>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={this.onChangeScrollToIndex} value={this.state.text} />
          </Item>
        </Header> */}
        <UltimateListView
          ref={ref => this.listView = ref}
          key={this.state.layout} // this is important to distinguish different FlatList, default is numColumns
          onFetch={this.onFetch}
          keyExtractor={(item, index) => `${index} - ${item}`} // this is required when you are using FlatList
          refreshableMode="advanced" // basic or advanced

          item={this.renderItem} // this takes three params (item, index, separator)
          numColumns={this.state.layout === 'list' ? 1 : 3} // to use grid layout, simply set gridColumn > 1

          // ----Extra Config----
          displayDate
          header={this.renderHeader}
          // paginationFetchingView={this.renderPaginationFetchingView}
          // sectionHeaderView={this.renderSectionHeaderView}   //not supported on FlatList
          // paginationFetchingView={this.renderPaginationFetchingView}
          // paginationAllLoadedView={this.renderPaginationAllLoadedView}
          // paginationWaitingView={this.renderPaginationWaitingView}
          // emptyView={this.renderEmptyView}
          separator={this.renderSeparatorView}

          // new props on v3.2.0
          arrowImageStyle={{ width: 20, height: 20, resizeMode: 'contain' }}
          dateStyle={{ color: 'lightgray' }}
          refreshViewStyle={Platform.OS === 'ios' ? { height: 80, top: -80 } : { height: 80 }}
          refreshViewHeight={80}
        />
      </View>
    )
  }
}
