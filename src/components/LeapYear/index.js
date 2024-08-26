import { View } from 'react-native';

export default function LeapYear(props) {
    const year = props.year;

    return (
        <View>
            <Text>{year}</Text>
        </View>
    );
}