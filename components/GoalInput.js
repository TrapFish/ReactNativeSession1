import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <>
            <Modal visible={props.visible} animationType="fade">
                <View style={styles.inputContainer}>
                    <Image source={require('../assets/images/goal.png')} style={styles.image} />
                    <TextInput placeholder="Your course goal !" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                        </View>
                        <View style={styles.button}>
                            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: "#e4doff",
        color: "#120438",
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: "30%",
        marginHorizontal: 8
    }
})