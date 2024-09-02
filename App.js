import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const MyComponent = () => {
    const [age, setAge] = useState("");
    const [lower, setLower] = useState(null);
    const [higher, setHigher] = useState(null);

    const calculateLower = () => {
        const result = (220 - parseFloat(age.replace(",", "."))) * 0.65;
        setLower(result);
    };

    const calculateHigher = () => {
        const result = (220 - parseFloat(age.replace(",", "."))) * 0.85;
        setHigher(result);
    };
    // VV tällä ajetaan kaksi funktiota VV
    const calculate = () => {
        calculateLower();
        calculateHigher();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.field}>Age</Text>
            <TextInput
                style={styles.field}
                value={age}
                onChangeText={(text) => setAge(text)}
                keyboardType="decimal-pad"
            />
            <Text style={styles.field}>Limits</Text>
            <Text style={styles.field}>
                {lower !== null && higher !== null ? `${lower}-${higher}` : ""}
            </Text>
            <Button title="Calculate" onPress={calculate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 10,
    },
    field: {
        marginBottom: 10,
    },
});
export default MyComponent;
