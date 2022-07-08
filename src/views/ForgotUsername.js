import React, { useState } from 'react'
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { COLOR, Images, LAYOUT } from '../constants'
// import { MaterialCommunityIcons, AntDesign, EvilIcons, Entypo, SimpleLineIcons } from "@expo/vector-icons"
import {
  Image,
  Input,
  Icon,
  Text,
  Box,
  Stack,
  Divider,
  Checkbox,
  HStack,
  Button,
  IconButton,
  useToast,
  View,
  Spinner,
  VStack,
} from 'native-base'
import DatePicker from 'react-native-date-picker'
import { useApi } from '../redux/services'
import { setUserInfo } from '../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const ForgotUsername = ({ navigation }) => {
  const Api = useApi()
  const Toast = useToast()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [Phone, setPhone] = useState()
  const [loading, setLoading] = useState(false)

  const signup = () => {
    if (email == '') {
      return Toast.show({
        title: 'Email is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (password == '') {
      return Toast.show({
        title: 'Password is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (cPassword == '') {
      return Toast.show({
        title: 'Confirm Password is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (cPassword !== password) {
      return Toast.show({
        title: 'Confirm Password is not match!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (username == '') {
      return Toast.show({
        title: 'User Name is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (Phone == '') {
      return Toast.show({
        title: 'Zip Code is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    setLoading(true)
    Api.SignUp({
      email,
      username,
      password,
      zipcode: Phone,
    })
      .then(({ data }) => {
        if (data.status) {
          dispatch(setUserInfo(data.user))
        } else {
          return Toast.show({
            title: data.message,
            placement: 'bottom',
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
            placement: 'bottom',
            status: 'error',
            w: 400,
          })
        } else {
          console.log(`SignUp =>`, error)
          return Toast.show({
            title: 'Network Error',
            placement: 'bottom',
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
        <Stack mb={5} style={styles.play}>
          <Image
            source={Images.SmallPlay}
            resizeMode="contain"
            mt={10}
            alignSelf="center"
          />
        </Stack>
        <Stack my={5} px={10}>
          <HStack>
            <Text color={COLOR.textColor2} fontSize="md" textAlign="center" mt={10}>
              Forgot Username
            </Text>
          </HStack>

          <HStack>
            <Input
              InputLeftElement={<Image ml={5} source={Images.Email}></Image>}
              _focus={{
                borderColor: 'gray.200',
              }}
              bg={COLOR.white}
              size="xs"
              h="40px"
              mt={3}
              w="100%"
              py={1}
              borderWidth={2}
              borderRadius={20}
              onChangeText={setEmail}
              placeholder="Email Address"
            />
          </HStack>

          <HStack
            space={3}
            alignItems="center"
            justifyContent="center"
            pt={6}
            pb={5}
          >
            <Text fontSize="xs" color={COLOR.textColor1} textAlign="center">
              Your confirmation link will be sent to your email addrsss.
            </Text>
          </HStack>
          <HStack>
            <Button
              disabled={loading}
              onPress={signup}
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
                  Send
                </Text>
              )}
            </Button>
          </HStack>
        </Stack>
        <HStack justifyContent="center" my={3}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignInScreen')
            }}
          >
            <HStack>
              <Text fontSize="xs" mt={5}>
                GO BACK
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

export default ForgotUsername
