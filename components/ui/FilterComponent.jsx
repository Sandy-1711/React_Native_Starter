import { Ionicons } from "@expo/vector-icons"
import { Pressable, ToastAndroid } from "react-native"
export default function FilterComponent() {
    return <Pressable onPress={() => {
        ToastAndroid.show("Filter Pressed", ToastAndroid.SHORT)
    }} style={{ padding: 8, marginRight: 12 }}>
        <Ionicons name='filter' size={24} />
    </Pressable>
}