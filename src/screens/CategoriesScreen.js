import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';
import ImageComponent from '../components/ImageComponent';
import {categories, usersData} from '../utils/data';

export default function CategoriesScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [users, setUsers] = useState(usersData);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filteredUsers = usersData.filter(
      item =>
        (selectedCategory === '' || item.category === selectedCategory) &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setUsers(filteredUsers);
  }, [selectedCategory, searchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FlatList
          style={styles.list}
          contentContainerStyle={{
            width: screenWidth - 20,
            ...styles.listContent,
          }}
          horizontal
          nestedScrollEnabled
          data={categories}
          renderItem={({item}) => (
            <Pressable
              style={[
                styles.categoryButton,
                item.name === selectedCategory && styles.selectedCategory,
              ]}
              onPress={() =>
                setSelectedCategory(
                  selectedCategory === item.name ? '' : item.name,
                )
              }>
              <Image source={item.img} style={styles.img} />
              <Text style={styles.text}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <ImageComponent source={require('../assets/search.jpg')} />
          <TextInput
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholder="Search"
            style={styles.searchInput}
          />
          <ImageComponent source={require('../assets/button.png')} />
        </View>
        <View style={styles.image}>
          <ImageComponent source={require('../assets/filter.png')} />
        </View>
      </View>

      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.userList}
        renderItem={({item}) => (
          <View style={styles.userCard}>
            <View style={styles.userImages}>
              <Image
                style={[
                  styles.userIcon,
                  {
                    width: (screenWidth - 50) / 4,
                    height: (screenWidth - 50) / 4,
                  },
                ]}
                source={item.img}
              />
              <Image style={styles.countryIcon} source={item.country} />
            </View>
            <Text style={styles.userName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginTop: -10,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  list: {
    backgroundColor: '#F1F1F1',
    marginTop: 10,
    flex: 1,
  },
  categoryButton: {
    borderRadius: 4,
  },
  selectedCategory: {
    borderWidth: 0.5,
    borderColor: 'blue',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFF',
    borderColor: 'pink',
    borderWidth: 0.5,
  },
  text: {
    fontSize: 10,
    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 15,
    padding: 10,
    width: '80%',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    height: 50,
    width: '18%',
  },
  userList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  userCard: {
    marginTop: 15,
    width: (Dimensions.get('window').width - 50) / 4,
  },
  userImages: {
    flexDirection: 'row',
  },
  userIcon: {
    borderRadius: 50,
  },
  countryIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
    borderRadius: 50,
  },
  userName: {
    alignSelf: 'center',
  },
  listContent: {
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
