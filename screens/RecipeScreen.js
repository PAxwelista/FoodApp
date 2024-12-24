import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGaugeHigh, faClock, faArrowLeft, faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { recipes } from "../data/recipes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorites, setFavoriteCount } from "../reducers/favorites";

export default function RecipeScreen({ route, navigation }) {
    const favorite = useSelector(state => state.favorites.value);
    const dispatch = useDispatch();
    const [count, setCount] = useState(
        favorite.find(e => e.id === route.params.id) ? favorite.find(e => e.id === route.params.id).count : 1
    );
    const [isFavorite, setIsFavorite] = useState(favorite.find(e => e.id === route.params.id));
    const recipe = recipes.find(e => e.id === route.params.id);

    const handleFavorite = () => {
        isFavorite ? dispatch(removeFavorites(route.params.id)) : dispatch(addFavorite({ id: route.params.id, count }));
        setIsFavorite(!isFavorite);
    };
    const handleChangeCount = newCount => {
        if (newCount > 0) {
            setCount(newCount);
            dispatch(setFavoriteCount({ id: route.params.id, count: newCount }));
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.imageContainer, { backgroundColor: recipe.color }]}>
                <Image
                    source={recipe.image}
                    style={styles.image}
                />
                <TouchableOpacity
                    style={styles.backArrow}
                    onPress={() => navigation.goBack()}
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        color="black"
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.footer, { backgroundColor: recipe.color }]}>
                <View style={styles.footerEffect}>
                    <TouchableOpacity
                        style={styles.bookmarkContainer}
                        onPress={() => handleFavorite()}
                    >
                        <FontAwesomeIcon
                            style={styles.bookmark}
                            icon={isFavorite ? faBookmarkSolid : faBookmark}
                            color="white"
                            size={20}
                        />
                    </TouchableOpacity>
                    <View style={styles.recipeIcons}>
                        <View style={styles.recipeIconText}>
                            <FontAwesomeIcon
                                icon={faGaugeHigh}
                                color={recipe.color}
                                size={30}
                            />
                            <Text>{recipe.level}</Text>
                        </View>
                        <View style={styles.recipeIconText}>
                            <FontAwesomeIcon
                                icon={faClock}
                                color={recipe.color}
                                size={30}
                            />
                            <Text>{recipe.time}</Text>
                        </View>
                        <View style={styles.recipeIconText}>
                            <FontAwesomeIcon
                                icon={faStar}
                                color={recipe.color}
                                size={30}
                            />
                            <Text>{recipe.rating}</Text>
                        </View>
                    </View>
                    <View style={styles.namesInfos}>
                        <Text style={styles.name}>{recipe.name}</Text>
                        <Text>{recipe.longDesc}</Text>
                        <View style={styles.servingCountContainer}>
                            <View>
                                <Text style={styles.textIngredients}>Ingredients</Text>
                                <Text>How many servings?</Text>
                            </View>
                            <View style={styles.count}>
                                <TouchableOpacity
                                    style={styles.touchable}
                                    onPress={() => handleChangeCount(count - 1)}
                                >
                                    <Text>-</Text>
                                </TouchableOpacity>
                                <Text>{count}</Text>
                                <TouchableOpacity
                                    style={styles.touchable}
                                    onPress={() => handleChangeCount(count + 1)}
                                >
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ingredients}>
                        <ScrollView>
                            {recipe.ingredients.map((ingredient,i) => (
                                <View key={i} style={styles.ingredient}>
                                    <Text>{ingredient.name}</Text>
                                    <Text>
                                        {count * ingredient.amount} {ingredient.unit}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    recipesContainer: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
    },
    imageContainer: {
        flex: 2,
        borderBottomStartRadius: 150,
    },
    footerEffect: {
        flex: 1,
        backgroundColor: "white",
        borderTopEndRadius: 150,
    },
    footer: {
        flex: 4,
    },
    recipeIcons: {
        flex: 0.8,
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 30,
        marginRight: 30,
    },
    backArrow: {
        position: "absolute",
        left: 20,
        top: 30,
    },
    bookmark: {},
    bookmarkContainer: {
        backgroundColor: "grey",
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        marginRight: 30,
    },
    recipeIconText: {
        flex: 1,
        alignItems: "center",
    },
    namesInfos: {
        flex: 3,
        margin: 20,
    },
    name: {
        fontSize: 30,
    },
    ingredient: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    ingredients: {
        flex: 4,
    },
    textIngredients: {
        fontWeight: "bold",
    },
    servingCountContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    count: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightgrey",
        height: 40,
        width: 100,
        borderRadius: 20,
    },
    touchable: {
        height: 40,
        width: 33,
        justifyContent: "center",
        alignItems: "center",
    },
});
