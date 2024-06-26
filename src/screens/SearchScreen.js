import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {HOME} from '../utils/routes';
import {Color} from '../styles/color';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearchResuts} from '../app/movieAction';
import {getsearchresults} from '../app/movieSelector';
import MovieListItem from '../components/MovieListItem';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const searchTextModified = searchText
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');

    dispatch(GetSearchResuts(searchTextModified));
  }, [searchText, dispatch]);

  const searchResults = useSelector(getsearchresults());
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholder="Search Movie.."
          placeholderTextColor={'lightgray'}
          className="py-2 px-6  text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(HOME)}
          className="p-3 m-1 bg-neutral-500 rounded-full">
          <Icon name="close" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {searchResults?.length > 0 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 30,
            paddingHorizontal: 15,
          }}
          className="space-y-3">
          <Text className="text-white font-semibold ml-1">
            Result Length: ({searchResults?.length})
          </Text>

          <View className="flex-row justify-between flex-wrap px-5">
            {searchResults?.map((movie, index) => (
              <MovieListItem searchPage key={index} movie={movie} />
            ))}
          </View>
        </ScrollView>
      )}

      {searchResults?.length === 0 && (
        <View className="items-center justify-center">
          <Text className="mt-2 text-white font-bold px-3 text-center">
            Aradığınız film bulunamadı. Lütfen farklı bir arama yapmayı deneyin.
          </Text>

          <Image
            source={require('../assets/movieTime.png')}
            className="w-96 h-96"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
