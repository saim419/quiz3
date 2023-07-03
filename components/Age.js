import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProfileContext } from './ProfileContext';

const AgeScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { age } = useContext(ProfileContext);

    const calculateAgeInYears = (age) => {
        const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
        return Math.floor(age / millisecondsPerYear);
    };

    const calculateAgeInWeeks = (age) => {
        const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
        return Math.floor(age / millisecondsPerWeek);
    };

    const calculateAgeInDays = (age) => {
        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        return Math.floor(age / millisecondsPerDay);
    };

    const [ageInYears, setAgeInYears] = useState();
    const [ageInWeeks, setAgeInWeeks] = useState();
    const [ageInDays, setAgeInDays] = useState();

    useEffect(() => {
        if (age) {
            const birthDate = new Date(age);
            const currentDate = new Date();

            const ageInYears = calculateAgeInYears(currentDate - birthDate);
            const ageInWeeks = calculateAgeInWeeks(currentDate - birthDate);
            const ageInDays = calculateAgeInDays(currentDate - birthDate);

            setAgeInYears(ageInYears);
            setAgeInWeeks(ageInWeeks);
            setAgeInDays(ageInDays);
        }
    }, [age]);



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Age: {age}</Text>
            <Text>Age in Years: {ageInYears}</Text>
            <Text>Age in Weeks: {ageInWeeks}</Text>
            <Text>Age in Days: {ageInDays}</Text>

        </View>
    );
};

export default AgeScreen;

