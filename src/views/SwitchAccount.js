import React, { useState } from 'react'
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { COLOR, Images, LAYOUT } from '../constants'
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import {
  Image,
  Icon,
  Text,
  Box,
  Stack,
  HStack,
  Button,
  Spinner,
  VStack,
  Radio
} from 'native-base'

const SignUpScreen = ({ navigation }) => {

  return (
    <Box flex={1} justifyContent="space-around">
      <ScrollView
        contentContainerStyle={{ justifyContent: 'space-around' }}
        showsVerticalScrollIndicator={false}
      >
        <Stack mb={2} style={styles.play}>
          <Image
            source={Images.SmallPlay}
            resizeMode="contain"
            mt={5}
            alignSelf="center"
          />
        </Stack>

        <Stack my={1} px={10}>

          <HStack justifyContent="center" my={3}>
            <HStack>
              <Text color={COLOR.textColor1} fontSize="md" mt={5} >
                Join as a Brand or Athlete
              </Text>
            </HStack>
          </HStack>


          <HStack mb={2}>
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => {
                navigation.navigate('SignUpBrandScreen')
              }}
            >
              <Box
                borderColor='gray.200'
                bg={COLOR.white}
                size="xs"
                h="100px"
                w="100%"
                borderWidth={2}
                borderRadius={10}
                alignContent="center"
                justifyContent="center"
              >
                <VStack
                >
                  <Icon as={FontAwesome} name="handshake-o" color={COLOR.switchSignIcon} size="lg" w="100%" textAlign='center' />
                  <Text color={COLOR.textColor1} fontSize="md" textAlign='center'>
                    I am a Business
                  </Text>
                </VStack>
              </Box>
            </TouchableOpacity>
          </HStack>

          <HStack mt={2}>
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => {
                navigation.navigate('SignUpScreen')
              }}
            >
              <Box
                borderColor='gray.200'
                bg={COLOR.white}
                size="xs"
                h="100px"
                w="100%"
                borderWidth={2}
                borderRadius={10}
                alignContent="center"
                justifyContent="center"
              >
                <VStack>
                  <Icon as={FontAwesome} name="street-view" color={COLOR.switchSignIcon} size="lg" w="100%" textAlign='center' />
                  <Text color={COLOR.textColor1} fontSize="md" textAlign='center' mt={1}>
                    I am an Athlete
                  </Text>
                </VStack>
              </Box>
            </TouchableOpacity>
          </HStack>

        </Stack>

        <HStack justifyContent="center" my={3}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignInScreen')
            }}
          >
            <HStack>
              <Text color={COLOR.textColor1} fontSize="xs" mt={10}>
                Already User?
              </Text>
              <Text color={COLOR.textColor2} fontSize="xs" mt={10}>
                {' '}
                Sign In
              </Text>
            </HStack>
          </TouchableOpacity>
        </HStack>

      </ScrollView>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  play: {},
})

export default SignUpScreen
