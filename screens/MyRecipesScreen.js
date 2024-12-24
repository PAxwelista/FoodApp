import { StyleSheet, StatusBar,Text,FlatList, View, SafeAreaView, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { recipes } from "../data/recipes";
import Recipe from "../components/Recipe";
import { useSelector } from "react-redux";

export default function MyRecipesScreen({ navigation }) {
  const favorites = useSelector(state=>state.favorites.value)
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <FontAwesome
                        name="bars"
                        color="black"
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>The best ones...</Text>
                <FlatList
                    style={styles.recipesContainer}
                    data={recipes.filter(e=>favorites.some(fav=>fav.id===e.id))}
                    renderItem={({ item }) => (
                        <Recipe
                            id={item.id}
                            name={item.name}
                            desc={item.desc}
                            color={item.color}
                            image={item.image}
                            navigation={navigation}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        marginLeft: 10,
        marginRigth: 10,
    },
    recipesContainer: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
});
