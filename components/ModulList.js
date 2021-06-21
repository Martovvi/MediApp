import React from "react";
import HomeModulList from "./HomeModulList"
import ModuleModulList from "./ModuleModulList"

export default ModulList = (props) => {

    if(props.home){
        return(
            <HomeModulList navigation={props.navigation}/>
        );
    }

    if(props.module){
        return(
            <ModuleModulList />
        );
    }
};

