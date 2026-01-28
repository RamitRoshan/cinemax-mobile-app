// import { Link } from "expo-router";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";

export default function Index() {

  //define router (hooks)
  const router = useRouter();

  // here we use our custom hook useFetch to fetch movies data
  const {
    data: movies, 
    loading: moviesLoading, 
    error: moviesError
  } = useFetch(() => fetchMovies({
    query: '',
  }))

  return (
    <View className="flex-1 bg-primary">
      
       <Image 
          source={images.bg} 
          className="absolute w-full z-0"
        />

        <ScrollView 
          className="flex-1 px-5"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            minHeight: "100%",
            paddingBottom: 10
          }}
        >
          <Image
             source={icons.logo}
             className="w-12 h-10 mt-20 mb-5 mx-auto"
          />

          {/* // here we conditionally render the loading indicator based on the loading state from our useFetch hook, when movies are being fetched. */}
          {moviesLoading ? (
            <ActivityIndicator
                size="large"
                color="#0000ff"
                className="mt-10 self-center"
            />
          ) : moviesError ? (
            <Text>Error: {moviesError?.message}</Text>
          ): (
            <View className="flex-1 mt-5">
            <SearchBar
               onPress={() => router.push("/search")}
               placeholder="Search for a movie"
            />

            <>
              <Text className="text-lg  text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              {/* FLatList works like map function to render list of items */}
              <FlatList
                data={movies}
                renderItem={({item}) => (
                   <MovieCard
                   //using spread operator to pass all item properties as props to MovieCard component
                      {...item}
                   />
                )}
                //Key extractor defines how many elements are there in the list
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle = {{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10
                }}
                //general className for FlatList
                className="mt-2 pb-32"
                //here scrollEnablle is used to disable scrolling for FlatList because we are already using ScrollView
                scrollEnabled ={false}
              />
            </>
            </View>
          )}

           
        </ScrollView>

    </View>
  );
}
