import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modelIsVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoal) => ([...currentCourseGoal, { text: enteredGoalText, key: Math.random().toString() }]));
    endAddGoalHandler();
  }

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter(goal => goal.key !== key);
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
         <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
         <GoalInput onAddGoal={addGoalHandler} visible={modelIsVisible} onCancel={endAddGoalHandler} />
         <View style={styles.goalsContainer}>
            <Text style={styles.goalList}>List of goals.</Text>
            <FlatList data={courseGoals} renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={deleteGoalHandler}/>
              );
            }}
            keyExtractor={(item, index) => {
              return item.key;
            }}
            alwaysBounceVertical={false} />
         </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  },
  goalList: {
    fontWeight: 'bold',
    color: "#ffffff",
    fontSize: 26
  }
});
