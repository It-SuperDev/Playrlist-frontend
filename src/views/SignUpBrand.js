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
  Input,
  Icon,
  Text,
  Box,
  Stack,
  Divider,
  Checkbox,
  Select,
  HStack,
  Button,
  IconButton,
  useToast,
  View,
  Spinner,
  VStack,
} from 'native-base'
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePickerModal from "@react-native-community/datetimepicker";
import { useApi } from '../redux/services'
import { setUserInfo } from '../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const SignUpScreen = ({ navigation }) => {
  const Api = useApi()
  const Toast = useToast()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [Phone, setPhone] = useState()
  const [plan, setPlan] = useState('Stand')
  const [loading, setLoading] = useState(false)
  const [calendar, setCalendar] = useState(false)
  const [gender, setGender] = useState('Male')

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

  const brithConfirm = (e) => {
    console.log(e)

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
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="user" color="gray.300" size="xs" ml={5} />}
              _focus={{
                borderColor: 'gray.200',
              }}
              bg={COLOR.white}
              size="xs"
              h="40px"
              w="100%"
              py={1}
              borderWidth={2}
              borderRadius={20}
              onChangeText={setUserName}
              placeholder="Username"
            />
          </HStack>
          <HStack>
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="pencil" color="gray.300" size="xs" ml={5} />}
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
              onChangeText={setUserName}
              placeholder="Brand/Business name"
            />
          </HStack>
          <HStack>
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="info" color="gray.300" size="xs" ml={5} />}
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
              // onChangeText={setUserName}
              placeholder="EIN Number"
            />
          </HStack>
          <HStack>
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="at" color="gray.300" size="xs" ml={5} />}
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
          <HStack>
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="lock" color="gray.300" size="xs" ml={5} />}
              _focus={{
                borderColor: 'gray.200',
              }}
              bg={COLOR.white}
              w="100%"
              mt={3}
              size="xs"
              h="40px"
              py={1}
              borderWidth={2}
              borderRadius={20}
              onChangeText={setPassword}
              placeholder="Password"
              type="password"
            />
          </HStack>
          <HStack>
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="unlock" color="gray.300" size="xs" ml={5} />}
              _focus={{
                borderColor: 'gray.200',
              }}
              bg={COLOR.white}
              size="xs"
              mt={3}
              h="40px"
              w="100%"
              py={1}
              borderWidth={2}
              borderRadius={20}
              onChangeText={setCPassword}
              type="password"
              placeholder="Confirm Password"
            />
          </HStack>

          <HStack>
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="phone" color="gray.300" size="xs" ml={5} />}
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
              onChangeText={setPhone}
              placeholder="Phone Number"
            />
          </HStack>

          <HStack>
            <Select
              InputLeftElement={<Icon as={FontAwesome} name="calendar-check-o" color="gray.300" size="xs" ml={5} />}
              _focus={{
                borderColor: 'gray.200',
              }}
              bg={COLOR.white}
              color={COLOR.grey}
              size="xs"
              h="40px"
              mt={3}
              w="100%"
              py={1}
              borderRadius={20}
              selectedValue={plan}
              placeholder="Plan"
              onValueChange={itemValue => setPlan(itemValue)}
            >
              <Select.Item label="Standard" value="Standard" />
              <Select.Item label="Bronze" value="Bronze" />
              <Select.Item label="Silber" value="Silber" />
              <Select.Item label="Gold" value="Gold" />
            </Select>
          </HStack>


          <HStack
            space={3}
            alignItems="center"
            justifyContent="flex-start"
            pt={6}
            pb={5}
          >
            <Checkbox value="one" size="sm" space={2}>
              &nbsp;
              <VStack width={200}>
                <Text fontSize="xs" color={COLOR.textColor1}>
                  I am 18+ years old.
                </Text>
                <HStack>
                  <Text fontSize="xs" color={COLOR.textColor1}>
                    I have read and accept the {' '}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('TermPolicyScreen')} >
                    <Text fontSize="xs" color={COLOR.textColor2}>
                      Terms & Privacy
                    </Text>
                  </TouchableOpacity>
                </HStack>
              </VStack>
            </Checkbox>
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
                  SIGN UP
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

      {
        calendar ?
          <DateTimePickerModal
            mode="date"
            onChange={(a, b) => brithConfirm(b)}
            value={new Date()}
          /> : null
      }
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
