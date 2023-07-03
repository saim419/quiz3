import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(); // Initialize age as an empty string
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const updateProfileData = (profileData) => {
        // Update the profile data
        setName(profileData.name);
        setAge(profileData.age);
        setWeight(profileData.weight);
        setHeight(profileData.height);
    };

    const profileData = { name, age, weight, height, updateProfileData };

    return (
        <ProfileContext.Provider value={profileData}>{children}</ProfileContext.Provider>
    );
};

