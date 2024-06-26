import {Dimensions, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getTrendingState} from '../app/movieSelector';
import {GetTrendingMovies} from '../app/movieAction';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    dispatch(GetTrendingMovies());
  }, [dispatch]);

  const trendingMovies = useSelector(getTrendingState());

  return (
    <View>
      <Carousel
        data={trendingMovies}
        renderItem={({item}) => <MovieCard movie={item} />}
        firstItem={2}
        inactiveSlideScale={0.6}
        sliderWidth={width}
        itemWidth={width * 0.6}
      />
    </View>
  );
};

export default TrendingMovies;
