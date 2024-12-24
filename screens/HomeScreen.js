import { StyleSheet, Text, View, Image ,TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({navigation}) {
    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("DrawerNavigator")} style={styles.container}>
         
            <Image
                style={styles.image}
                source={require("../assets/images/home.jpg")}
            />
            <View style={styles.footer}>
                <Text style={styles.title}>FoodApp</Text>
                <View style={styles.lastLine}>
                    <Text style={styles.text}>Let's go!</Text>
                    <FontAwesome name="arrow-right" color="white" size={20}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "strech",
        backgroundColor: "#793F7D",
    },
    image: {
        flex: 3,
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 200,
    },
    footer: {
        flex: 1,
        padding:15,
    },
    title: {
        fontSize: 70,
        fontWeight:"bold",
        color: "white",
        alignSelf: "flex-end",
    },
    text: {
        fontSize: 20,
        color: "white",
        marginRight: 5,
    },
    lastLine:{
      marginTop:20,
      flexDirection:"row",
      justifyContent:"flex-end",
      alignItems:"center"
    }
});
