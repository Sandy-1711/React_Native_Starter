import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useFocusEffect, useIsFocused } from "@react-navigation/native";
import { Alert, Pressable, Text } from "react-native";
import { useEffect, useState } from "react";

export default function AddExpenseButton() {

    return (
        <Pressable
            onPress={() => {
                Alert.alert("Add Expense", "Add expense button pressed");
            }}
            style={{
                position: 'absolute',
                bottom: 70,
                right: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                backgroundColor: 'green',
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 25,
                elevation: 5, // Shadow for Android
                shadowColor: '#000', // Shadow for iOS
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}
        >
            <FontAwesome5 name="receipt" size={18} color="white" />
            <Text style={{ color: 'white', fontSize: 14 }}>Add expense</Text>
        </Pressable>
    );
}
