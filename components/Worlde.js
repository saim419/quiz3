import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import words5a from "../assets/words5a";

const RandomWordApp = () => {
    const [randomWord, setRandomWord] = useState(words5a[1000]);
    console.log('words5a has length', words5a.length);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * words5a.length);
        const newRandomWord = words5a[randomIndex];
        setRandomWord(newRandomWord);
    }, []);

    const handleResetWord = () => {
        const randomIndex = Math.floor(Math.random() * words5a.length);
        const newRandomWord = words5a[randomIndex];
        setRandomWord(newRandomWord);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Random Word App</Text>
            <Text style={styles.word}>{randomWord}</Text>
            <TouchableOpacity style={styles.button} onPress={handleResetWord}>
                <Text style={styles.buttonText}>Reset Word</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
    },
    word: {
        fontSize: 48,
        marginTop: 30,
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#333',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default RandomWordApp;
