import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modules, DefaultModul } from "./Module";

export const storeData = (data) => {
    try {
        AsyncStorage.setItem('APPDATA', JSON.stringify(data));
    } catch (e) {
        throw e;
    }
};

export const getData = () => {
    return new Promise((resolve, reject) => {

        AsyncStorage.getItem('APPDATA').then(value => {
            if (value != null) {
                resolve(value);
            } else {
                resolve(JSON.stringify({ homeModules: DefaultModul, modulList: Modules }));
            }
        });
    })
};

export const clear = () => {
    try {
        AsyncStorage.clear();
    } catch (error) {
        console.log("Error clear!");
    }
}

