import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Recipe(props) {
    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate("Recipe",{id:props.id})} style={[styles.contain, { backgroundColor: props.color }]}>
            <Image
                source={props.image}
                style={styles.image}
            />
            <View style={styles.texts}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contain: {
        borderBottomEndRadius: 10,
        borderTopEndRadius: 40,
        borderBottomStartRadius: 40,
        borderTopStartRadius: 10,
        padding: 5,
        flex: 1,
        height: 250,
        margin:15
    },
    image: {
        flex: 2,
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    texts: {
        flex: 1,
    },
    name: {
        fontWeight: "bold",
        textAlign: "right",
        fontSize: 12,
    },
    desc: {
        color: "grey",
        textAlign: "right",
        fontSize: 10,
    },
});
