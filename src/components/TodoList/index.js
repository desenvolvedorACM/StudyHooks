import React, { memo, useMemo } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

function TodoList({ todo }) {

    console.log('Rendered TodoList...');

    const renderITem = ({ item }) => {
        return (
            <View style={styles.containerItem}>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    }

    const totalTodo = useMemo(() => {
        todo.length;
    }, [todo])

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.text}>TOTAL Todo: {totalTodo}</Text>
            </View>

            <FlatList
                contentContainerStyle={{ marginTop: 20 }}
                data={todo}
                keyExtractor={item => String(item.id)}
                renderItem={renderITem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerItem: {
        width: '100%',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#969494',
        marginBottom: 6,
        borderRadius: 10,
        backgroundColor: '#0769a7ff',
        padding: 30,
    },
    header: {
        backgroundColor: '#545252',
        borderRadius: 10,
        padding: 15,
        marginTop: 10
    },
    text: {
        color: "#FFF",
        fontSize: 18,
    }
});

export default memo(TodoList)