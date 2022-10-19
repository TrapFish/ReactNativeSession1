import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <>
         <View style={styles.goalItem}>
             <Pressable android_ripple={{ color: "#dddddd" }} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
             </Pressable>
         </View>
        </>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        color: 'white'
    }
})