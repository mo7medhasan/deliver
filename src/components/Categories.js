import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {/* <Text>Categories</Text> */}
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 4"
      />      <CategoryCard
      imgUrl="https://links.papareact.com/gn7"
      title="testing 1"
    />
    <CategoryCard
      imgUrl="https://links.papareact.com/gn7"
      title="testing 2"
    />
    <CategoryCard
      imgUrl="https://links.papareact.com/gn7"
      title="testing 3"
    />
    <CategoryCard
      imgUrl="https://links.papareact.com/gn7"
      title="testing 4"
    />
    </ScrollView>
  );
}
