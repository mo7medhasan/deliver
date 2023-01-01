import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryCard({ imgUrl, title }) {
  return (
    <View className="relative mr-2">
  
      <Image source={{ uri: `https://links.papareact.com/gn7` }} style={{width:80,height:80}} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-1 left-1 font-bold text-white ">
        {title}
      </Text>
    
    </View>
  );
}
