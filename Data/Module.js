import React from 'react';
import { createContext } from 'react';
import { Ionicons } from '@expo/vector-icons';

export const ModulListContext = createContext({});


export const DefaultModul = [

    { id: 1, text: "BMI", icon: "body" },

];

export const Modules = [

    { id: 1, text: "BMI", icon: "body" },
    { id: 2, text: "Pollenflug", icon: "flower" },
    { id: 3, text: "Test", icon: "beer" }

];