import { Alert, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupCard from "../components/ui/GroupCard";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FriendCard from "../components/ui/FriendCard";

export default function FriendsScreen({ navigation }) {


    let currency = "₹"
    let friends = [
        { name: "John Cena", owesYou: true, amount: 500 },
        { name: "Seth Rollins", owesYou: false, amount: 400 },
        { name: "Randy Orton", owesYou: true, amount: 100 },
        { name: "Roman Reigns", owesYou: true, amount: 0 }
    ]

    return <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 20, paddingBottom: 20, paddingHorizontal: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: '600', lineHeight: 17 }}>
                        Overall you owe
                        <Text style={{ color: 'red' }}> {currency}{"500.00"}</Text>
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: '600', lineHeight: 17 }}>and you are owed
                        <Text style={{ color: 'green' }}> {currency}{"400.00"}</Text>
                    </Text>
                </View>
                <Pressable>
                    <Text>
                        <MaterialCommunityIcons name="filter-outline" size={24} />
                    </Text>
                </Pressable>
            </View>
            <View style={{ gap: 10 }}>
                {friends?.map((friend, index) => {
                    return <FriendCard key={index} friendName={friend.name} owesYou={friend.owesYou} amount={friend.amount} />
                })}
            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 14 }}>
                <Pressable onPress={() => {
                    Alert.alert("Navigation", "Open Add more friends page")
                }} style={{ borderRadius: 4, padding: 4, paddingHorizontal: 12, borderWidth: 2, borderColor: 'green', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                    <Feather name="user-plus" size={16} color="green" />
                    <Text style={{ color: 'green', fontSize: 13 }}>Add more friends</Text>
                </Pressable>
            </View>
        </ScrollView >
    </View >
}




const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        flex: 1,
        backgroundColor: "white"
    },
    scrollContainer: {
        // gap: 8,
        paddingBottom: 100
    }
})