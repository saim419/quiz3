import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const AgeScreen = () => {
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
            <Text style={{ fontSize: 15 }}>Age Calculator</Text>
            <Text style={{ fontSize: 15 }}>Age in years: {ageInYears}</Text>
            <Text style={{ fontSize: 15 }}>Age in weeks: {ageInWeeks}</Text>
            <Text style={{ fontSize: 15 }}>Age in days: {ageInDays}</Text>
        </View>
    );

};

export default AgeScreen;
