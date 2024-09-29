import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view'; // Import TabBar
import CategoriesScreen from './CategoriesScreen';
import ImageComponent from '../components/ImageComponent';

export default function Chat() {
  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Welcome', title: 'Welcome'},
    {key: 'Categories', title: 'Categories'},
  ]);

  const renderScene = SceneMap({
    Welcome: WelcomeScreen,
    Categories: CategoriesScreen,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      renderLabel={({route, focused}) => (
        <Text
          style={[
            styles.label,
            focused ? styles.activeLabel : styles.inactiveLabel,
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: 20,
          marginBottom: 20,
        }}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <ImageComponent source={require('../assets/Tab.png')} />
          <ImageComponent source={require('../assets/color.png')} />
        </View>
        <ImageComponent source={require('../assets/bell.webp')} />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
  indicator: {
    backgroundColor: 'pink',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  activeLabel: {
    color: 'pink',
  },
  inactiveLabel: {
    color: 'black',
  },
});
