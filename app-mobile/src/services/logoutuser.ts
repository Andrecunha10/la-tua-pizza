import auth from '@react-native-firebase/auth'

export const logOutUser = async () => {
    await auth().signOut()
}