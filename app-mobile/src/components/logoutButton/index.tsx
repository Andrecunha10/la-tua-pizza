import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { logOutUser } from "../../services/logoutuser";


export function LogoutButton () {
    const handleLogout = async () => {
        Alert.alert(
            'Tem certeza que deseja sair?',
            'Será solicitado que informe e-mail e senha nvamente',
            [{
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Ok',
                onPress: async () =>{
                    await logOutUser()
                }
            }]
            )
        
    }
    return <TouchableOpacity onPress={handleLogout} style={styles.loagoutButton}>
        <FontAwesomeIcon icon={faRightFromBracket} color='#fff' size={22}/> 
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    loagoutButton: {
        padding: 8
    }
})