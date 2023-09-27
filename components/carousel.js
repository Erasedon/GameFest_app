import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

    export const MyCarousel = () => {
        const data = [
          { title: 'Item 1' },
          { title: 'Item 2' },
          { title: 'Item 3' },
          // Ajoutez plus d'éléments au besoin
        ];
      
        return (
          <Swiper>
            {data.map((item, index) => (
              <View key={index}>
                <Text>{item.title}</Text>
              </View>
            ))}
          </Swiper>
        );
      };
