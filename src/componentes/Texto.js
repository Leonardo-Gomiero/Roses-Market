import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }){
    let estilo = estilos.texto;
//Verificação  
    if(style?.fontWeight === "bold"){
        estilo = estilos.textNegrito;
    }
    return <Text style={[style, estilo] } > { children }</Text>
}
const estilos = StyleSheet.create({
    texto:{
        fontFamily:"MontSerratRegular",
        fontWeight: "normal",
    },
    textNegrito:{
        fontFamily:"MontSerratBold",
        fontWeight: "normal",
    }

})