import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { Pressable } from "react-native"

export const ActionButton = ({active, onPress, display}) => {
      return (
            <Pressable
                  style={active ? styles.contextButtonAtive : null}
                  onPress={onPress}>
                  <Text style={styles.contextButtonText}>
                        {display}
                  </Text>
            </Pressable>
      )
}

const styles = StyleSheet.create({
  contextButtonAtive:{
    backgroundColor: '#144480',
    borderRadius: 8
  },

  contextButtonText:{
    fontSize: 12.5,
    color: '#FFF',
    padding: 8
  }
})