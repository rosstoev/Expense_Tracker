import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable onPress={onPress} ripple={{opacity: 1.2}}>
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;
