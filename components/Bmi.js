import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const BmiScreen = () => {
    const [ageInYears, setAgeInYears] = useState('');
    const [ageInWeeks, setAgeInWeeks] = useState('');
    const [ageInDays, setAgeInDays] = useState('');

    const calculateAge = (age) => {
        const years = parseInt(age);
        const weeks = years * 52;
        const days = years * 365;

        setAgeInYears(years.toString());
        setAgeInWeeks(weeks.toString());
        setAgeInDays(days.toString());
    };

    useEffect(() => {
        // Calculate the age when the component mounts
        calculateAge('');
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left' }}>
            <Text style={{ fontSize: 15 }}>BMI Calculator</Text>
            <Text style={{ fontSize: 15 }}>height: {ageInYears}</Text>
            <Text style={{ fontSize: 15 }}>weight: {ageInWeeks}</Text>
            <Text style={{ fontSize: 15 }}>Age : {ageInDays}</Text>
        </View>
    );

};

export default AgeScreen;
