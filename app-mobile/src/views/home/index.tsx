import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import LogoMobile from "../../assets/img/logo_mobile.svg"
import Delivery from "../../assets/img/home_image.svg"
import { CustomButton } from "../../components/CustomButton";
import { CustomText } from "../../components/CustomText";

export function HomeView () {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.view}>
                <LogoMobile />
                <Delivery />
                <CustomButton variant="white" size="lg">
                    <View style={styles.viewButton}>
                        <CustomText style={[styles.textButton, styles.textButtonLineOne]} weight='Roboto-Bold'>Pedido Online</CustomText>
                        <CustomText style={styles.textButton}>Faça Login</CustomText>
                    </View>
                </CustomButton>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flex: 1,
        backgroundColor: '#CF3031',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25,
    },
    viewButton: {
        alignItems: 'center',
    },
    textButton: {
        color: '#CF3031',
    },
    textButtonLineOne: {
        fontSize: 22,
    }
})