import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({
  id,
  title,
  description,
  featuredCategory,
}) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
          <Text> <ArrowRightIcon color="#00ccbb" />   </Text>
      </View>
      <Text className="text-xs  text-gray-500 px-4 ">{description}</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        className="pt-4"
      >
        {/* RestaurantCards.... */}
        <RestaurantCard
          id={"123"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main St"}
          short_description={"this is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"12334"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main St"}
          short_description={"this is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"12356"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Sushi"}
          rating={"4.5"}
          genre={"japanese"}
          address={"123 Main St"}
          short_description={"this is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"1234567"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"japanese"}
          address={"123 Main St"}
          short_description={"this is a test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
