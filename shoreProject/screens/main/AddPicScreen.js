import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator,StatusBar } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import {ImageBrowser} from 'expo-image-picker-multiple';

export default class ImageBrowserScreen extends Component {
  componentDidMount = () => {
    // const headerTitle = this.props.navigation.getParam('headerTitle');
    // const right = this.props.navigation.getParam('headerRight');
    // const loading = this.props.navigation.getParam('loading');
    // const headerLeft =
    //   <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
    //     <Text>
    //       Back
    //     </Text>
    //   </TouchableOpacity>;
    // const headerRight =
    //   <TouchableOpacity title={'Done'} onPress={()=>{}}>
    //     <Text>
    //       Done
    //     </Text>
    //   </TouchableOpacity>;
    // // if (loading) this.props.navigation.setOptions({headerTitle, headerLeft, headerRight: headerLoader})
    // this.props.navigation.setOptions({
    //   headerShown: true,
    //   // headerTitle,
    //   headerLeft,
    //   headerRight
    // })
  }
  static navigationOptions = ({ navigation }) => {
    const headerTitle = navigation.getParam('headerTitle');
    const right = navigation.getParam('headerRight');
    const loading = navigation.getParam('loading');
    const headerLeft =
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          Back
        </Text>
      </TouchableOpacity>;
    const headerRight =
      <TouchableOpacity title={'Done'} onPress={right}>
        <Text>
          Done
        </Text>
      </TouchableOpacity>;
    const headerLoader = (
      <View style={styles.headerLoader}>
        <ActivityIndicator size="small" color={'#0580FF'}/>
      </View>
    );

    if (loading) return { headerTitle, headerLeft, headerRight: headerLoader };
    return {
      headerTitle,
      headerLeft,
      headerRight,
      headerMode: 'float'
    };
  };

  imagesCallback = (callback) => {
    const { navigation } = this.props;
    navigation.setParams({ loading: true });

    callback.then(async (photos) => {
      const cPhotos = [];
      for(let photo of photos) {
        const pPhoto = await this._processImageAsync(photo.uri);
        cPhotos.push({
          uri: pPhoto.uri,
          name: photo.filename,
          type: 'image/jpg'
        })
      }
      navigation.navigate('Main', {photos: cPhotos});
    })
    .catch((e) => console.log(e))
    .finally(() => navigation.setParams({ loading: false }));
  };

  async _processImageAsync(uri) {
    const file = await ImageManipulator.manipulateAsync(
      uri,
      [{resize: { width: 1000 }}],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
    );
    return file;
  }

  updateHandler = (count, onSubmit) => {
    this.props.navigation.setParams({
      headerTitle: `Selected ${count} files`,
      headerRight: onSubmit,
    });
  };

  renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  render() {
    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
    return (
      <View style={[styles.flex, styles.container]}>
        <ImageBrowser
          max={4}
          onChange={this.updateHandler}
          callback={this.imagesCallback}
          renderSelectedComponent={this.renderSelectedComponent}
          emptyStayComponent={emptyStayComponent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    position: 'relative',
  },
  emptyStay:{
    textAlign: 'center',
  },
  countBadge: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 3,
    bottom: 3,
    justifyContent: 'center',
    backgroundColor: '#0580FF'
  },
  countBadgeText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#ffffff'
  }
});
