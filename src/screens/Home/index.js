import React, { useState, useCallback } from "react";
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";

import TodoList from "../../components/TodoList";
import Count from "../../components/Count";

const isAndroid = Platform.OS == 'android' ? StatusBar.currentHeight : 12;

export default function Home() {
    const [task, setTask] = useState("");
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);


    const handleAddTodo = () => {
        if (task == "") {
            Alert.alert("Field is required!!");
            return;
        }

        setTodo([...todo, { id: Math.floor(Math.random() * 100), text: task }]);
        setTask('');
    };

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [count]);

    const handleDecrement = useCallback(() => {
        if (count == 0) {
            return
        }

        setCount((prev) => prev - 1);
    }, [count]);

    return (
        <SafeAreaView style={styles.containerSAV}>

            <Count
                count={count}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />

            <TextInput
                style={styles.input}
                value={task}
                placeholderTextColor="#c8c6c6"
                placeholder="Add todo..."
                onChangeText={setTask}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                <Text style={styles.text}>Add Todo</Text>
            </TouchableOpacity>

            <TodoList todo={todo} />

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    containerSAV: {
        flex: 1,
        margin: isAndroid,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#c8c6c6",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    button: {
        width: 150,
        borderWidth: 1,
        padding: 15,
        backgroundColor: "#c808f3",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#FFF",
        fontSize: 18,
    },
});
