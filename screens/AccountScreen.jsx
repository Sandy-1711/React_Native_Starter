import { AntDesign, Feather, FontAwesome, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Image, Pressable, ToastAndroid, Alert } from 'react-native'
export default function AccountScreen({ navigation }) {
    return <View style={styles.container}>
        <Text style={styles.screenHeading}>Account</Text>
        <View style={styles.accountInfoSection}>
            <Pressable onPress={() => {
                Alert.alert("Changing Photo")
            }} style={{ position: 'relative' }}>
                <Image source={require('../assets/image.png')} style={styles.accountInfoImage} />
                <AntDesign style={{ backgroundColor: 'white', position: 'absolute', bottom: -8, right: -8, padding: 2, borderRadius: 100 }} name="camerao" size={24} color="black" />
            </Pressable>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    Sandeep Singh
                </Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>
                    sandy1711003@gmail.com
                </Text>
            </View>
            <Pressable onPress={() => {
                ToastAndroid.show("Editing the profile info", ToastAndroid.SHORT)
            }}>
                <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
            </Pressable>

        </View>
        <View style={{ width: '100%', height: 1, borderWidth: 0.5, borderColor: "lightgray", marginVertical: 12 }} />
        <View style={{ paddingHorizontal: 14, gap: 12 }}>
            <Pressable style={styles.accountButtons}>
                <FontAwesome name="qrcode" style={{ height: 35, width: 35 }} size={35} color="black" />
                <Text style={styles.accountButtonsText}>Scan code</Text>
            </Pressable>
            <Pressable style={styles.accountButtons}>
                <FontAwesome name="qrcode" style={{ height: 35, width: 35 }} size={35} color="black" />
                <Text style={styles.accountButtonsText}>Splitwise Pro</Text>
            </Pressable>
        </View>
        <View style={{ paddingHorizontal: 14 }}>
            <Text style={{}}>Preferences</Text>
        </View>
        <View style={{ paddingHorizontal: 14, gap: 12 }}>
            <Pressable style={styles.accountButtons}>
                <Fontisto name="email" style={{ height: 35, width: 35 }} size={35} color="black" />
                <Text style={styles.accountButtonsText}>Email Settings</Text>
            </Pressable>
            <Pressable style={styles.accountButtons}>
                <Feather name="bell" style={{ height: 32, width: 32 }} size={32} color="black" />
                <Text style={styles.accountButtonsText}>Device and push notification settings</Text>
            </Pressable>
            <Pressable style={styles.accountButtons}>
                <Feather name="lock" style={{ height: 32, width: 32 }} size={32} color="black" />
                <Text style={styles.accountButtonsText}>Security</Text>
            </Pressable>
        </View>
        <View style={{ paddingHorizontal: 14 }}>
            <Text style={{}}>Feedback</Text>
        </View>
        <View style={{ paddingHorizontal: 14, gap: 12 }}>
            <Pressable style={styles.accountButtons}>
                <Feather name="star" style={{ height: 34, width: 34 }} size={34} color="black" />
                <Text style={styles.accountButtonsText}>Rate Splitwise</Text>
            </Pressable>
            <Pressable style={styles.accountButtons}>
                <MaterialIcons name="support-agent" style={{ height: 35, width: 35 }} size={35} color="black" />
                <Text style={styles.accountButtonsText}>Contact Splitwise support</Text>
            </Pressable>
        </View>
        <View style={{ width: '100%', height: 1, borderWidth: 0.5, borderColor: "lightgray", marginVertical: 4 }} />
        <View style={{ paddingHorizontal: 14, gap: 12 }}>
            <Pressable style={styles.accountButtons}>
                <AntDesign name="logout" style={{ height: 32, width: 32 }} size={32} color="black" />
                <Text style={styles.accountButtonsText}>Log out</Text>
            </Pressable>
        </View>
    </View >
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor: "white"
    },
    screenHeading: {
        paddingHorizontal: 14,
        fontSize: 22,
        paddingTop: 8,
        fontWeight: 500,
    },
    accountInfoSection: {
        paddingHorizontal: 14,
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    accountInfoImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: 'orange'
    },
    accountButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24
    },
    accountButtonsText: {
        flex: 1,
        fontSize: 16,
    }
})