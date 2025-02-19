import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ActivityCard from "../components/ui/ActivityCard";

export default function ActivityScreen({ navigation }) {
    return <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} >
            <Text style={styles.screenHeading}>Activity</Text>
            <View style={{ gap: 16, paddingBottom: 24 }}>
                {Array(18).fill(0).map((_, index) => {
                    return <ActivityCard groupName="Group 1" amountOwed="500Rs" itemName="Item 1" date="2023-01-01" key={index} />
                })}
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
    screenHeading: {
        fontSize: 22,
        paddingBottom: 8,
        fontWeight: 500
    }
})