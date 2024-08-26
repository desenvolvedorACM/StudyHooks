import { memo } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

function Count({ count, onIncrement, onDecrement }) {
  console.log('Rendered Count...');

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>TOTAL Count: {count}</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={onIncrement}>
          <Text style={styles.textButton}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onDecrement}>
          <Text style={styles.textButton}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  button: {
    backgroundColor: '#087df1',
    padding: 15,
    borderRadius: 12,
    justifyContent: 'center'
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 16
  },
  header: {
    backgroundColor: '#545252',
    borderRadius: 10,
    padding: 15,
  },
  text: {
    color: "#FFF",
    fontSize: 18,
  }
});


export default memo(Count);