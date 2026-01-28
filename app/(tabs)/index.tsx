// import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      
      <Text className="text-3xl font-bold text-dark-200">
        Welcome, back baby!😁
      </Text>

      {/* <Link href="/onboarding" className="text-accent">Onboarding</Link>
      <Link href="/movie/avangers">Avenger Movie</Link> */}
    </View>
  );
}
