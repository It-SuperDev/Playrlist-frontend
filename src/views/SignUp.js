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

  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [Phone, setPhone] = useState('')
  const [birth, setBirth] = useState('')
  const [gender, setGender] = useState('Male')
  const [plan, setPlan] = useState('Stand')
  const [loading, setLoading] = useState(false)
  const [calendar, setCalendar] = useState(false)

  const signup = () => {
    if (username == '') {
      return Toast.show({
        title: 'User Name is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (firstname == '') {
      return Toast.show({
        title: 'First Name is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (lastname == '') {
      return Toast.show({
        title: 'Second Name is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
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
    if (Phone == '') {
      return Toast.show({
        title: 'Phone number is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (birth == '') {
      return Toast.show({
        title: 'Birthday is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }
    if (gender == '') {
      return Toast.show({
        title: 'gender is required!',
        placement: 'bottom',
        status: 'error',
        w: 400,
      })
    }

    setLoading(true)
    Api.SignUp({
      email,
      username,
      fullname: `${firstname} ${lastname}`,
      password,
      Phone,
      birth,
      gender
    }).then(({ data }) => {
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
    }).catch((error) => {
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
    setCalendar(false)
    if (e.type === 'set') {
      const date = new Date(e.nativeEvent.timestamp)
      const y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate()
      setBirth(`${m}/${d}/${y}`)
    }
  }

  const openCalandar = () => {
    setCalendar(true)
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
              onChangeText={setUsername}
              placeholder="Username"
            />
          </HStack>
          <HStack>
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="user-o" color="gray.300" size="xs" ml={5} />}
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
              onChangeText={setFirstname}
              placeholder="First name"
            />
          </HStack>
          <HStack>
            <Input
              InputLeftElement={<Icon as={FontAwesome} name="user-o" color="gray.300" size="xs" ml={5} />}
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
              onChangeText={setLastname}
              placeholder="Last name"
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
              InputLeftElement={<Icon as={FontAwesome} name="key" color="gray.300" size="xs" ml={5} />}
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

          <TouchableOpacity onPress={() => openCalandar()}>
            <HStack>
              <HStack
                borderColor='gray.200'
                alignItems='center'
                bg={COLOR.white}
                size="xs"
                h="40px"
                mt={3}
                w="100%"
                py={1}
                borderWidth={2}
                borderRadius={20}
              >
                <Icon as={FontAwesome} name="calendar" color="gray.300" size="xs" ml={5} mr={4} />
                <Text color='gray.400' fontSize='13px'>
                  {
                    birth ? birth : 'Date of Birth'
                  }
                </Text>
              </HStack>
            </HStack>
          </TouchableOpacity>

          <HStack>
            <Select
              InputLeftElement={<Icon as={FontAwesome} name="intersex" color="gray.300" size="xs" ml={5} />}
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
              selectedValue={gender}
              placeholder="Gender"
              onValueChange={itemValue => setGender(itemValue)}
            >
              <Select.Item label="Male" value="Male" />
              <Select.Item label="Female" value="Female" />
            </Select>
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
            justifyContent="center"
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
            onChange={(e) => brithConfirm(e)}
            value={birth ? new Date(birth) : new Date()}
          /> : null
      }
    </Box >
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
