import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import Carousel from 'react-native-snap-carousel'
import { Shadow } from 'react-native-shadow-2';

import { MaterialIcons, AntDesign, Foundation, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { Image, Input, Icon, Text, Box, Stack, Heading, HStack, AspectRatio, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Menu, HamburgerIcon } from "native-base";

import Footer from '../components/footer'
import { useApi } from '../redux/services'
import { COLOR, Images, Styles } from "../constants";

const Dashboard = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const userData = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [tabs, setTabs] = useState(true);
    const serviceDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'
    const maxlimit = 45
    const [activeIndex, setActiveIndex] = useState(2)
    const back = async () => {
        if (userData.user.role === 'brand') {
            navigation.navigate("BrandDashboardScreen")
        } else {
            navigation.navigate("DashboardScreen")
        }
    }
    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.bg2}>

            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                    <Box width="100%" minWidth="100%" px={2} bg={COLOR.headerbg} border={1} borderColor={COLOR.white}>
                        <HStack space={3} justifyContent="space-between" alignItems="center" w="100%" pt={8}>
                            <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => back()} >
                                <Icon as={FontAwesome} name="long-arrow-left" color="black" size="xs" />
                            </Button>
                        </HStack>
                        <HStack px={3} py={2} justifyContent='space-between' alignItems='center'>
                            <HStack>
                                <Avatar bg="amber.500" mr={3} source={{
                                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }} size="md">
                                    NB
                                    <Avatar.Badge bg="green.500" />
                                </Avatar>
                                <VStack justifyContent="center">
                                    <Text color="black" fontSize="md">
                                        Username
                                    </Text>
                                </VStack>
                            </HStack>
                            {/* <TouchableOpacity onPress={() => { navigation.navigate("MyProfileScreen") }}>
                                <Icon as={<AntDesign name='profile' />} size='sm' color='grey' />
                            </TouchableOpacity> */}
                        </HStack>
                    </Box>
                </Shadow>

                <Box pt={3} minH={100}>
                    <Box>
                        <VStack px={3} py={1} w="100%" mb={40}>
                            <Box>
                                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                    <Box bg='black' width={375} maxWidth="100%">
                                        <HStack justifyContent="space-between" minH={50} alignItems='center' py="3%" px={3}>
                                            <Text fontSize="sm" color={COLOR.white}>
                                                My Account
                                            </Text>
                                        </HStack>
                                    </Box>
                                </Shadow>
                            </Box>
                            <Box>
                                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                    <Box bg={COLOR.white} width={375} maxWidth="100%">
                                        <TouchableOpacity onPress={() => { navigation.navigate("ChangeInfoScreen") }}>
                                            <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                                <HStack>
                                                    <Icon as={<FontAwesome5 name="user-edit" />} minW={5} mr={3} color='grey' size='xs' />
                                                    <Text fontSize="sm" color={COLOR.grey1}>
                                                        Change User Info
                                                    </Text>
                                                </HStack>
                                                <Icon as={<Entypo name="chevron-right" />} color="grey" size="xs" mx={2} />
                                            </HStack>
                                        </TouchableOpacity>
                                    </Box>
                                </Shadow>
                                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                    <Box bg={COLOR.white} width={375} maxWidth="100%">
                                        <TouchableOpacity onPress={() => { navigation.navigate("ChangePasswordScreen") }}>
                                            <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                                <HStack>
                                                    <Icon as={<MaterialCommunityIcons name="key-change" />} minW={5} mr={3} color='grey' size='xs' />
                                                    <Text fontSize="sm" color={COLOR.grey1}>
                                                        Change Password
                                                    </Text>
                                                </HStack>
                                                <Icon as={<Entypo name="chevron-right" />} color="grey" size="xs" mx={2} />
                                            </HStack>
                                        </TouchableOpacity>
                                    </Box>
                                </Shadow>
                                {
                                    userData.user.role === 'athlete' ?
                                        <React.Fragment>
                                            <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                                <Box bg={COLOR.white} width={375} maxWidth="100%">
                                                    <TouchableOpacity onPress={() => { navigation.navigate("SavedServicesScreen") }}>
                                                        <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                                            <HStack>
                                                                <Icon as={<FontAwesome name="heart" />} minW={5} mr={3} color='grey' size='xs' />
                                                                <Text fontSize="sm" color={COLOR.grey1}>
                                                                    Needs
                                                                </Text>
                                                            </HStack>
                                                            <Icon as={<Entypo name="chevron-right" />} color="grey" size="xs" mx={2} />
                                                        </HStack>
                                                    </TouchableOpacity>
                                                </Box>
                                            </Shadow>
                                            <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                                <Box bg={COLOR.white} width={375} maxWidth="100%">
                                                    <TouchableOpacity onPress={() => { navigation.navigate("ActiveServicesScreen") }}>
                                                        <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                                            <HStack>
                                                                <Icon as={<FontAwesome5 name="hands-helping" />} mr={3} minW={5} color='grey' size='xs' />
                                                                <Text fontSize="sm" color={COLOR.grey1}>
                                                                    Active Services
                                                                </Text>
                                                            </HStack>
                                                            <Icon as={<Entypo name="chevron-right" />} color="grey" size="xs" mx={2} />
                                                        </HStack>
                                                    </TouchableOpacity>
                                                </Box>
                                            </Shadow>
                                            <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                                <Box bg={COLOR.white} width={375} maxWidth="100%">
                                                    <TouchableOpacity onPress={() => { navigation.navigate("HistoryServicesScreen") }}>
                                                        <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                                            <HStack>
                                                                <Icon as={<FontAwesome5 name="history" />} minW={5} mr={3} color='grey' size='xs' />
                                                                <Text fontSize="sm" color={COLOR.grey1}>
                                                                    Past Services
                                                                </Text>
                                                            </HStack>
                                                            <Icon as={<Entypo name="chevron-right" />} color="grey" size="xs" mx={2} />
                                                        </HStack>
                                                    </TouchableOpacity>
                                                </Box>
                                            </Shadow>
                                            {/* <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                                <Box bg={COLOR.white} width={375} maxWidth="100%">
                                                    <TouchableOpacity onPress={() => { navigation.navigate("AboutMeScreen") }}>
                                                        <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                                            <HStack>
                                                                <Icon as={<FontAwesome name="pencil-square-o" />} minW={5} mr={3} color='grey' size='xs' />
                                                                <Text fontSize="sm" color={COLOR.grey1}>
                                                                    About Me
                                                                </Text>
                                                            </HStack>
                                                            <Icon as={<Entypo name="chevron-right" />} color="grey" size="xs" mx={2} />
                                                        </HStack>
                                                    </TouchableOpacity>
                                                </Box>
                                            </Shadow> */}
                                        </React.Fragment>
                                        : null
                                }

                                {
                                    userData.user.role === 'brand' ?
                                        <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                            <Box bg={COLOR.white} width={375} maxWidth="100%">
                                                <TouchableOpacity onPress={() => { navigation.navigate("AboutServiceScreen") }}>
                                                    <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                                        <HStack>
                                                            <Icon as={<FontAwesome name="pencil-square-o" />} minW={5} mr={3} color='grey' size='xs' />
                                                            <Text fontSize="sm" color={COLOR.grey1}>
                                                                Edit Service
                                                            </Text>
                                                        </HStack>
                                                        <Icon as={<Entypo name="chevron-right" />} color="grey" size="xs" mx={2} />
                                                    </HStack>
                                                </TouchableOpacity>
                                            </Box>
                                        </Shadow> : null
                                }
                            </Box>
                        </VStack>
                    </Box>
                </Box >

                <Footer />
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