import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import Carousel from 'react-native-snap-carousel'
import { Shadow } from 'react-native-shadow-2';

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { Image, Input, Icon, Text, Box, Stack, Heading, HStack, AspectRatio, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Menu, HamburgerIcon } from "native-base";

import Footer from '../components/footer'
import { useApi } from '../redux/services'
import { COLOR, Images, Styles } from "../constants";

const Dashboard = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()
    const [tabs, setTabs] = useState(true);
    const serviceDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
    const maxlimit = 45
    const [activeIndex, setActiveIndex] = useState(2)

    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.bg2}>

            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                    <Box width="100%" minWidth="100%" px={2} bg={COLOR.headerbg} border={1} borderColor={COLOR.white}>
                        <HStack space={3} alignItems="center" w="100%" pt={10} pb={4}>
                            <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate("ProfileScreen")} >
                                <Icon as={FontAwesome} name="long-arrow-left" color="black" size="xs" />
                            </Button>
                            <Text color="black" fontSize="lg" ml={5} fontWeight={700}>
                                My Profile
                            </Text>
                        </HStack>
                    </Box>
                </Shadow>

                <Box pt={3} minH={100}>
                    <Box>
                        <VStack px={3} py={1} w="100%">
                            <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                <Box bg={COLOR.white} width={375} maxWidth="100%">
                                    <HStack bg={COLOR.grey1} px={3} py={4} justifyContent='space-between' alignItems='center'>
                                        <HStack>
                                            <Avatar bg="amber.500" mr={3} source={{
                                                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                            }} size="md">
                                                NB
                                                <Avatar.Badge bg="green.500" />
                                            </Avatar>

                                        </HStack>
                                        <Text color="black" fontSize="md">
                                            Username
                                        </Text>
                                    </HStack>
                                    <VStack pb={3} px={5}>
                                        <HStack minH={39} justifyContent='space-between' alignItems='center'>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                Full Name
                                            </Text>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                Jhon Doe
                                            </Text>
                                        </HStack>
                                        <HStack minH={39} justifyContent='space-between' alignItems='center'>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                Gender
                                            </Text>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                Man
                                            </Text>
                                        </HStack>
                                        <HStack minH={39} justifyContent='space-between' alignItems='center'>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                BirthDay
                                            </Text>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                5/10/2022
                                            </Text>
                                        </HStack>
                                        <HStack minH={39} justifyContent='space-between' alignItems='center'>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                Mail
                                            </Text>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                user@mail.com
                                            </Text>
                                        </HStack>
                                        <HStack minH={39} justifyContent='space-between' alignItems='center'>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                Phone Number
                                            </Text>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                +1234567890
                                            </Text>
                                        </HStack>
                                        <HStack minH={39} justifyContent='space-between' alignItems='center'>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                Join Date
                                            </Text>
                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                May 2022
                                            </Text>
                                        </HStack>
                                        <VStack>
                                            <HStack minH={39} justifyContent='space-between' alignItems='center' >
                                                <Text fontSize="sm" color={COLOR.grey1}>
                                                    About me
                                                </Text>
                                            </HStack>
                                            <VStack mb={3} p={2} bg={COLOR.bg1} borderRadius={3}>
                                                <Text italic bold fontSize="md" color={COLOR.grey1} pb={2}>
                                                    I am a player
                                                </Text>
                                                <Text italic fontSize="sm" color={COLOR.grey1} >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                                                </Text>
                                            </VStack>
                                        </VStack>
                                    </VStack>
                                </Box>
                            </Shadow>
                        </VStack>
                    </Box>
                </Box >
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