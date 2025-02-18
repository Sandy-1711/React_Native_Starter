import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

function ProfileScreen() {
    return <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>Account</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, gap: 8 }}>
            <View style={{ height: 80, width: 80, backgroundColor: 'red', borderRadius: 100 }}>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Sandeep Singh</Text>
                <Text style={{ fontSize: 14 }}>sandy1711003@gmail.com</Text>
            </View>
            <View style={{ borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
                <Pressable>
                    <EvilIcons name="pencil" size={24} color="black" />
                </Pressable>
            </View>

        </View>

        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray' }} />

        <View style={{ paddingVertical: 16, gap: 24 }}>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="qr-code-outline" size={32} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Scan Code</Text>
                </View>
            </View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="qr-code-outline" size={32} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Splitwise Pro</Text>
                </View>
            </View>

        </View>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>Preferences</Text>

    </View>
}

export default ProfileScreen;