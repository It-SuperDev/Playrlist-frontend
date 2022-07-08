import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useApi } from '../redux/services'
import { COLOR, Images } from '../constants'
import { setUserInfo } from '../redux/actions/authActions'
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  Image,
  Input,
  Text,
  Box,
  Stack,
  Divider,
  Checkbox,
  HStack,
  Button,
  useToast,
  Spinner,
} from 'native-base'

const LogInScreen = ({ navigation }) => {
  const Api = useApi()
  const Toast = useToast()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const login = () => {
    if (email === '') {
      return Toast.show({
        title: 'Username or Email is required!',
        placement: 'top',
        status: 'error',
        w: 400,
      })
    }
    if (password == '') {
      return Toast.show({
        title: 'Password is required!',
        placement: 'top',
        status: 'error',
        w: 400,
      })
    }

    if (email === 'brand') {
      dispatch(setUserInfo({ email, role: 'brand' }))
      navigation.navigate('BrandDashboardScreen')
    } else {
      dispatch(setUserInfo({ email, role: 'athlete' }))
      navigation.navigate('DashboardScreen')
    }
    return
    setLoading(true)
    Api.SignIn({
      email,
      password,
    })
      .then(({ data }) => {
        if (data.status) {
        } else {
          Toast.show({
            title: data.message,
            placement: 'top',
            status: 'error',
            w: 400,
          })
        }
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        if (error.response && error.response.status === 400) {
          return Toast.show({
            title: error.response.data,
            placement: 'top',
            status: 'error',
            w: 400,
          })
        } else {
          console.log(`SignIn =>`, error)
          return Toast.show({
            title: 'Network Error!',
            placement: 'top',
            status: 'error',
            w: 400,
          })
        }
      })
  }

  return (
    <Box flex={1} justifyContent="space-around">
      <ScrollView
        contentContainerStyle={{ justifyContent: 'space-around' }}
        showsVerticalScrollIndicator={false}
      >
        <Stack mb={5}>
          <Image
            source={Images.Play}
            resizeMode="contain"
            mt={10}
            alignSelf="center"
          />
        </Stack>
        <Stack my={5} px="5%">
          <Input
            InputLeftElement={<Image ml={5} source={Images.UserIcon}></Image>}
            _focus={{ borderColor: 'gray.200' }}
            bg={COLOR.white}
            size="xs"
            h="40px"
            w="100%"
            py={1}
            borderWidth={2}
            borderRadius={20}
            onChangeText={setEmail}
            placeholder="Username"
          />
          <Input
            InputLeftElement={<Image ml={5} source={Images.Password}></Image>}
            _focus={{
              borderColor: 'gray.200',
            }}
            bg={COLOR.white}
            w="100%"
            mt={4}
            mb={4}
            size="xs"
            h="40px"
            py={1}
            borderWidth={2}
            borderRadius={20}
            onChangeText={setPassword}
            placeholder="Password"
            type="password"
          />

          <Button
            disabled={loading}
            onPress={() => {
              login()
            }}
            w="100%"
            variant="ghost"
            borderRadius={20}
            h="40px"
            bg={COLOR.base}
            colorScheme="orange"
          >
            {loading ? (
              <Spinner size="sm" />
            ) : (
              <Text color={COLOR.white} fontSize="xs" pt={1}>
                SIGN IN
              </Text>
            )}
          </Button>

          <HStack
            space={3}
            alignItems="center"
            justifyContent="center"
            pt={5}
            pb={3}
          >
            <Text fontSize="xs" color={COLOR.textColor1}>
              Forgot
            </Text>
            <Text fontSize="xs" color={COLOR.textColor2}
              onPress={() =>
                navigation.navigate('ForgotPassword')
              }
            >
              Password
            </Text>
            <Text fontSize="xs" color={COLOR.textColor1}>
              or
            </Text>
            <Text fontSize="xs" color={COLOR.textColor2}
              onPress={() =>
                navigation.navigate('ForgotUsername')
              }
            >
              Username
            </Text>
          </HStack>

          <HStack alignItems="center" justifyContent="space-between" my="3">
            <Divider w="40%" bg={COLOR.textColor1} opacity={0.3} />
            <Text color={COLOR.textColor1} fontSize="sm" pt={1}>
              OR
            </Text>
            <Divider w="40%" bg={COLOR.textColor1} opacity={0.3} />
          </HStack>
          <Button
            variant="ghost"
            borderRadius={20}
            h="40px"
            bg={COLOR.white}
            onPress={() => {
              navigation.navigate('GoogleLoginScreen')
            }}
          >
            <HStack alignItems="center" justifyContent="center" space={2}>
              <Text color={COLOR.black} fontSize="xs">
                Sign In with
              </Text>
              <Image source={Images.GoogleButton} height={3} width={10}></Image>
            </HStack>
          </Button>
        </Stack>
        <HStack justifyContent="center" my={3}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SwitchAccountScreen')
            }}
          >
            <HStack>
              <Text color={COLOR.textColor1} fontSize="xs" mt={10}>
                New User?
              </Text>
              <Text color={COLOR.textColor2} fontSize="xs" mt={10}>
                {' '}
                Sign Up
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
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
})

export default LogInScreen
