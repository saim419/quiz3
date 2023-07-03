import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProfileContext } from './ProfileContext';

const BmiScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { name, age, weight, height } = useContext(ProfileContext);

    const calculateBmi = () => {
        // Perform BMI calculation based on height and weight
        const heightInMeters = height / 100; // Convert height from cm to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        return bmi.toFixed(2); // Return BMI rounded to 2 decimal places
    };

    const [bmi, setBmi] = useState('');

    useEffect(() => {
        const bmi = calculateBmi();
        setBmi(bmi);
    }, [weight, height]);



    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 15 }}>BMI Calculator</Text>
            <Text style={{ fontSize: 15 }}>Name: {name}</Text>
            <Text style={{ fontSize: 15 }}>Age: {age}</Text>
            <Text style={{ fontSize: 15 }}>Height: {height} cm</Text>
            <Text style={{ fontSize: 15 }}>Weight: {weight} kg</Text>
            <Text style={{ fontSize: 15 }}>BMI: {bmi}</Text>

        </View>
    );
};

export default BmiScreen;

