import React from 'react'

import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { GlobalColors } from '../../../accets/styles/GlobalStyles'

interface IButtonMove {
  handleMove: any
  children: React.ReactNode
}

const ButtonMove = ({ handleMove, children }: IButtonMove) => {
  return (
    <TouchableOpacity style={styles.authButton} onPress={handleMove}>
      <Text style={styles.authButtonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  authButton: {
    width: '70%',
    height: 36,
    borderRadius: 8,
    backgroundColor: GlobalColors.fine_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: GlobalColors.main_color,
  },
})

export { ButtonMove }
