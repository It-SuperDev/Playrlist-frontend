import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import Carousel from 'react-native-snap-carousel'
import { Shadow } from 'react-native-shadow-2';

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { Image, Select, Input, Icon, Text, Box, Stack, Heading, HStack, AspectRatio, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Menu, HamburgerIcon } from "native-base";

import Footer from '../components/footer'
import { useApi } from '../redux/services'
import { COLOR, Images, Styles } from "../constants";

const Dashboard = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.bg2}>

            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                    <Box width="100%" minWidth="100%" px={2} bg={COLOR.headerbg} border={1} borderColor={COLOR.white}>
                        <HStack space={3} alignItems="center" w="100%" pt={10} pb={5}>
                            <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate("ProfileScreen")} >
                                <Icon as={FontAwesome} name="long-arrow-left" color="black" size="xs" />
                            </Button>
                            <Text color="black" fontSize="lg" ml={5} fontWeight={700}>
                                Change Password
                            </Text>
                        </HStack>
                    </Box>
                </Shadow>

                <Stack my={10} px={10}>

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
                            //   onChangeText={setPassword}
                            placeholder="Current Password"
                            type="password"
                        />
                    </HStack>
                    <HStack>
                        <Input
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name="key-change" />} color="gray.300" size="xs" ml={5} />}
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
                            //   onChangeText={setPassword}
                            placeholder="New Password"
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
                            //   onChangeText={setCPassword}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </HStack>

                    <HStack>
                        <Button
                            disabled={loading}
                            // onPress={signup}
                            w="100%"
                            mt={4}
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
                                    UPDATE
                                </Text>
                            )}
                        </Button>
                    </HStack>
                </Stack>
            </ScrollView >
        </Box >
    );
};

const styles = StyleSheet.create({
    header: {
        height: 90,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F9ECCC",
    },
    button: {
        height: 30,
        color: "#000"
    },
    font: {
        fontSize: 10
    }

});

export default Dashboard;