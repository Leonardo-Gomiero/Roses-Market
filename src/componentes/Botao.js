import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from '../componentes/Texto.js';

export default function Botao({ children, style }) {
    
    let estiloBotao = estilos.botao;
    let estiloTexto = estilos.botaoTexto;

    return <TouchableOpacity style={estiloBotao}>
        <Texto style={[style, estiloTexto]}> { children }</Texto>
    </TouchableOpacity>
    
}
const estilos = StyleSheet.create({

    botao: {
        backgroundColor: "purple",
        marginTop: 12,
        paddingVertical: 12,
        borderRadius: 6,

    },
    botaoTexto: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 26,
    },

})