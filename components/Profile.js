import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from './ProfileContext';

const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const navigation = useNavigation();
    const { updateProfileData } = useContext(ProfileContext);

    useEffect(() => {
        // Load the saved profile data from AsyncStorage when the component mounts
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const profileData = await AsyncStorage.getItem('profile');
            if (profileData) {
                const { name, age, weight, height } = JSON.parse(profileData);
                setName(name);
                setAge(age);
                setWeight(weight);
                setHeight(height);
                updateProfileData({ name, age, weight, height });
            }
        } catch (error) {
            console.log('Error loading profile:', error);
        }
    };

    const saveProfile = async () => {
        try {
            const profileData = { name, age, weight, height };
            await AsyncStorage.setItem('profile', JSON.stringify(profileData));
            console.log('Profile saved successfully.');
            updateProfileData(profileData); // Update the profile data in context
        } catch (error) {
            console.log('Error saving profile:', error);
        }
    };

    const screenWidth = Dimensions.get('window').width;

    return (
        <ProfileContext.Provider
            value={{
                name,
                age,
                weight,
                height,
                setName,
                setAge,
                setWeight,
                setHeight,
                updateProfileData,
            }}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* Profile UI */}
                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    {/* Display current profile data */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ marginRight: 10, color: 'black' }}>Current Values:</Text>
                        <Text style={{ marginRight: 10, color: 'black' }}>Name: {name}</Text>
                        <Text style={{ marginRight: 10, color: 'black' }}>Age: {age}</Text>
                        <Text style={{ marginRight: 10, color: 'black' }}>Weight: {weight}</Text>
                        <Text style={{ color: 'black' }}>Height: {height}</Text>
                    </View>

                    {/* Profile form */}
                    <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ marginRight: 10 }}>Name:</Text>
                            <TextInput
                                placeholder="Enter name"
                                value={name}
                                onChangeText={setName}
                                style={{
                                    paddingHorizontal: 10,
                                    width: 200,
                                    height: 40,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ marginRight: 10 }}>Age:</Text>
                            <TextInput
                                placeholder="Enter age"
                                value={age}
                                onChangeText={setAge}
                                keyboardType="numeric"
                                style={{
                                    paddingHorizontal: 10,
                                    width: 200,
                                    height: 40,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ marginRight: 10 }}>Weight:</Text>
                            <TextInput
                                placeholder="Enter weight"
                                value={weight}
                                onChangeText={setWeight}
                                keyboardType="numeric"
                                style={{
                                    paddingHorizontal: 10,
                                    width: 200,
                                    height: 40,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ marginRight: 10 }}>Height:</Text>
                            <TextInput
                                placeholder="Enter height"
                                value={height}
                                onChangeText={setHeight}
                                keyboardType="numeric"
                                style={{
                                    paddingHorizontal: 10,
                                    width: 200,
                                    height: 40,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                }}
                            />
                        </View>
                        {/* Save button */}
                        <Button
                            title="Save"
                            onPress={saveProfile}
                            style={{ width: screenWidth, marginTop: 20 }}
                        />
                    </View>
                </View>
            </View>
        </ProfileContext.Provider>
    );
};

export default ProfileScreen;
