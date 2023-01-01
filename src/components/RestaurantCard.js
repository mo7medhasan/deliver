import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 rounded-sm shadow">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className=" px-3  pb-3">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
            <Text> 
              <StarIcon color="green" size={22} opacity={0.5} />
            </Text> 
            <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating} </Text> 
            . {genre}
          </Text>
        </View>
        <View className="flex flex-row items-center space-x-1">
            <Text>
               <MapPinIcon color="gray" opacity={0.4} size={22} />
           </Text>
             <Text className="text-xs text-gray-500">Nearby . {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
