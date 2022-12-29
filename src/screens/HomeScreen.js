import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // title:"testNameTitle"
    });
  }, []);

  return (
    <SafeAreaView className="bg-white  pt-5">
      {/* <Text style={{ fontFamily: "Urbanist" }}>   */}

      {/*  header*/}
      <View className=" flex flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300  p-4 rounded-full"
        />
        <View className="flex-1 " style={{ flex: 1 }}>
          <Text className="font-bold text-gray-400  text-start text-xs">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>
      {/* Search */}
      <View className="flex-row flex pb-2 items-center  mx-4 space-x-2">
        <View className="flex-row rounded flex-1 space-x-2 p-3 bg-gray-200">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>
      {/* body */}
      <ScrollView contentContainerStyle={{paddingBottom:100}} className="bg-gray-100 flex-1">
        {/* Categories */}
        <Categories />

        {/* Featured Row */}

          <FeaturedRow id="123"
          title="Featured"
          description="paid placements from our partners"
         featuredCategory="featured"
         />
         {/* Tasty Discounts */}
    <FeaturedRow id="1234"
          title="Tasty Discount"
          description="Everyone's been enjoying these juicy discounts!"
         featuredCategory="discount"
         />
         {/* Offer near you */}
    <FeaturedRow id="12345"
          title="Offer near you!"
          description="Why not support your local restaurant tonight!"
         featuredCategory="Offers"
         />


      </ScrollView>
    </SafeAreaView>
  );
}
