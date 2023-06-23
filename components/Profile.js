import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const saveProfile = () => {
        // Save the profile data to a global context variable or perform any desired actions
        // For simplicity, we'll just log the data here
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Weight:', weight);
        console.log('Height:', height);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'left', justifyContent: 'left' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10 }}>Current Values:</Text>
                    <Text style={{ marginRight: 10 }}>Name: {name}</Text>
                    <Text style={{ marginRight: 10 }}>Age: {age}</Text>
                    <Text style={{ marginRight: 10 }}>Weight: {weight}</Text>
                    <Text>Height: {height}</Text>
                </View>
                <Text>Profile</Text>
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
                                borderColor: 'gray',
                                borderWidth: 1,
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
                                borderColor: 'gray',
                                borderWidth: 1,
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
                                borderColor: 'gray',
                                borderWidth: 1,
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                                borderColor: 'gray',
                                borderWidth: 1,
                            }}
                        />
                    </View>
                </View>
                <Button title="Save Profile" onPress={saveProfile} />
            </View>
        </View>
    );
};

export default ProfileScreen;
