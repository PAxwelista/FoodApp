import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList ,StatusBar ,View} from "react-native";
import Recipe from "../components/Recipe";
import { recipes } from "../data/recipes";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function RecipeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
           <FontAwesome name="bars" color="black" size={30}/>
           </TouchableOpacity>
            <Text style={styles.title}>What do you want to eat today?</Text>
            <Text>Our faily healthy meal plans</Text>
            <FlatList
                style={styles.recipesContainer}
                data={recipes}
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
        paddingTop:StatusBar.currentHeight,
        backgroundColor:"white"
    },
    container:{
        flex: 1,
        marginLeft:10,
        marginRigth:10
    },
    recipesContainer: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
});
