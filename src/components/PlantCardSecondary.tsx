import React from 'react'
import { Text, View, Animated } from 'react-native'
import { RectButton, RectButtonProps, Swipeable } from 'react-native-gesture-handler'
import { getStyles } from './PlantCardSecondary.style'
import { SvgFromUri } from 'react-native-svg'
import { Feather } from '@expo/vector-icons'
import colors from '../Themes/colors'

interface PlantProps extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
  handleRemove: () => void
}

export function PlantCardSecondary({ data, handleRemove, ...rest }: PlantProps) {
  const styles = getStyles()

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name={'trash'} size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo } width={50} height={50} />
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>Regar às</Text>
          <Text style={styles.time}>{data.hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  )
}
