import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import GroupCard from "../components/ui/GroupCard";
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function GroupsScreen({ navigation }) {

    let currency = "₹"

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
            <View style={{ gap: 8 }}>
                {Array(4).fill(0).map((_, index) => {
                    return <GroupCard key={index} title={`Group ${index + 1}`} expense={index * 100} />
                })}
            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 14 }}>
                <Pressable onPress={() => {
                    Alert.alert("Navigation", "Open create new group page")
                }} style={{ borderRadius: 4, padding: 4, paddingHorizontal: 12, borderWidth: 2, borderColor: 'green', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                    <MaterialIcons name="group-add" size={16} color="green" />
                    <Text style={{ color: 'green', fontSize: 13 }}>Start a new group</Text>
                </Pressable>
            </View>
        </ScrollView>
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