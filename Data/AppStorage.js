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
                //Sind Daten vorhanden werden diese zurück gegeben.
                resolve(value);
            } else {
                //Ansonsten werden die Standard Daten aus den Dummy Data geladen.
                resolve(JSON.stringify({ homeModules: DefaultModul, modulList: Modules.filter(modul => modul.id != 1) }));
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

