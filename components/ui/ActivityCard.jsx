import { Image, StyleSheet, Text, View } from "react-native";

export default function ActivityCard({ groupName, amountOwed, itemName, date }) {
    return <View style={styles.itemContainer}>
        <View style={{ position: 'relative' }}>
            <View style={styles.itemImage}>
                <Image style={{ height: '100%', width: '100%', backgroundColor: 'lightgray' }} source={require('../../assets/image.png')} />
            </View>
            <View style={{ position: 'absolute', borderRadius: 100, bottom: -8, borderWidth: 1, borderColor: "white", right: -8, overflow: 'hidden', height: 24, width: 24 }}>

            </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', }}>
            <Text>You added {itemName} in {groupName}</Text>
            <Text style={{ fontSize: 14, lineHeight: 14, color: 'green' }}>You owe {amountOwed}</Text>
            <Text style={{ fontSize: 12, lineHeight: 13 }}>{new Date(date).toLocaleDateString()}</Text>
        </View>
    </View >
}
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "flex-start",
        gap: 16
    },
    itemImage: {
        height: 45,
        width: 45
    },
})