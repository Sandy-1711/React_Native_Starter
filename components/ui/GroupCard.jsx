import { Image, Text, View } from "react-native";

export default function GroupCard({ title, expense }) {
    return <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <View style={{ backgroundColor: 'lightgray', height: 60, width: 80, borderRadius: 8 }}>
            <Image source={require('../../assets/image.png')} height={60} width={60} style={{ height: 60, width: 80, borderRadius: 8 }} />
        </View>
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>{title}</Text>
            <Text style={{ fontSize: 14, }}>{expense === 0 ? 'No Expense' : `Expense: ${expense}`}</Text>
        </View>
    </View>
}