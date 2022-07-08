import React, { useState } from "react";
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";

import { COLOR, Images, Styles } from "../constants";

import Carousel from 'react-native-snap-carousel'
import { MaterialIcons, AntDesign, EvilIcons, Entypo } from "@expo/vector-icons"

import {
    Image,
    Input,
    Icon,
    Text,
    Box,
    Stack,
    HStack,
    Button,
    IconButton,
    useToast,
    Center,
    useColorModeValue,
    View,
    VStack,
    Avatar,
    Menu,
} from "native-base";
import Swiper from 'react-native-swiper'
import Footer from '../components/footer'
import { useApi } from '../redux/services'
import { useDispatch } from 'react-redux'
const BrandDashboard = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()

    const Links = [
        { name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }, { name: "E" }, { name: "F" }, { name: "G" }, { name: "H" }, { name: "I" }, { name: "J" }, { name: "K" }, { name: "L" }, { name: "M" }, { name: "N" }, { name: "O" }, { name: "Q" }, { name: "R" }, { name: "S" }, { name: "T" }, { name: "U" }, { name: "V" }, { name: "W" }, { name: "X" }, { name: "Y" }, { name: "Z" }
    ]

    const goPage = (link) => {
        navigation.navigate(link)
    }

    const stylesSlider = StyleSheet.create({
        wrapper: {
            height: 200
        },
        slide: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        sliderImg: {
            width: "100%",
            height: "100%"
        },
        text: {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
        }
    })

    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <Box style={styles.header}>
                <HStack display="flex" justifyContent="space-between" alignItems="center" px="5%" pt={5}>
                    <Stack>
                        <Image source={Images.PlayHeader}></Image>
                    </Stack>
                    <HStack display="flex" space={3} pr={5} justifyContent="space-around" h="40px" alignItems="center">
                        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                            <Icon as={<EvilIcons name="user" />} size='md' />
                        </TouchableOpacity>
                        <Menu trigger={triggerProps => {
                            return (
                                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <AntDesign style={{ fontSize: 25 }} name="ellipsis1" />
                                </Pressable>
                            )
                        }}>
                            <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs" onPress={() => navigation.navigate("AboutScreen")}>About Us</Text></Menu.Item>
                            <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs" onPress={() => navigation.navigate("SignInScreen")}>Log Out</Text></Menu.Item>
                        </Menu>
                    </HStack>
                </HStack>
            </Box>
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Box>
                    <Center>
                        <Text color={COLOR.fontColor} fontSize="sm" py={5}>FEATURED ATHLETES</Text>
                        <HStack space={0.5}>
                            {
                                Links.map((item, key) => {
                                    return (
                                        <Text href="a" key={key} underline fontSize="sm" color={COLOR.fontColor}>{item.name}</Text>
                                    )
                                })
                            }

                        </HStack>
                    </Center>

                    <HStack pt={5} px="5%" space="5%" display="flex" alignItems="center">
                        <Swiper style={stylesSlider.wrapper} showsButtons={true}>
                            <View style={stylesSlider.slide}>
                                <Image source={Images.About1} style={stylesSlider.sliderImg} />
                            </View>
                            <View style={stylesSlider.slide}>
                                <Image source={Images.About1} style={stylesSlider.sliderImg} />
                            </View>
                            <View style={stylesSlider.slide}>
                                <Image source={Images.About1} style={stylesSlider.sliderImg} />
                            </View>
                            <View style={stylesSlider.slide}>
                                <Image source={Images.About1} style={stylesSlider.sliderImg} />
                            </View>
                        </Swiper>
                    </HStack>
                    {/* 
                    <HStack pt={5} px="5%" justifyContent="center">
                        <Box w="100%" >
                            <ImageBackground borderRadius={10} source={Images.BrandDash1} style={{ height: 200, justifyContent: "center" }}>
                                <HStack justifyContent="space-around" alignItems="center">
                                    <VStack w="50%" p={5}>
                                        <Text fontSize="sm" color={COLOR.white}>ATHLETE NAME</Text>
                                        <Text fontSize="sm" color={COLOR.white}>AGE</Text>
                                        <Text fontSize="sm" color={COLOR.white}>BIO</Text>
                                        <Text fontSize="xxs" pb={1} color={COLOR.white}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod…</Text>
                                        <Button variant="ghost" borderRadius={20} h="30px" bg={COLOR.white} colorScheme="orange" onPress={() => { navigation.navigate("AthletesItemScreen") }}>
                                            <Text color={COLOR.base} fontSize="xs">LEARN MORE</Text>
                                        </Button>
                                    </VStack>
                                    <Image source={Images.BrandDash2}></Image>
                                </HStack>
                            </ImageBackground>
                        </Box>
                    </HStack> */}

                    <VStack pt={5} px="5%">
                        <Text color={COLOR.black} fontSize="lg" bold py={1}>Active Athletes</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <HStack space={3}>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <TouchableOpacity key={item} onPress={() => { navigation.navigate("AthletesItemScreen") }}>
                                            <Box w={100} rounded="lg" bg={COLOR.bg3} overflow="hidden" borderColor={COLOR.border} borderWidth={1} p={1}>
                                                <VStack>
                                                    <Avatar bg="cyan.500" alignSelf="center" size="lg" source={{
                                                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                                    }}>
                                                        GG
                                                    </Avatar>
                                                    <HStack justifyContent="space-around">
                                                        <Text color={COLOR.fontColor} fontSize="sm" py={1}>Jone</Text>
                                                        <Text color={COLOR.fontColor} fontSize="sm" py={1}>Gold</Text>
                                                    </HStack>
                                                </VStack>
                                            </Box>
                                        </TouchableOpacity>
                                    ))
                                }
                            </HStack>
                        </ScrollView>
                    </VStack>

                    <VStack pt={5} px="5%">
                        <Text color={COLOR.black} fontSize="lg" bold py={1}>Past Athletes</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <HStack space={3}>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <TouchableOpacity key={item} onPress={() => { navigation.navigate("AthletesItemScreen") }}>
                                            <Box w={100} rounded="lg" overflow="hidden" bg={COLOR.bg3} borderColor={COLOR.border} borderWidth={1} p={1}>
                                                <VStack>
                                                    <Avatar bg="cyan.500" alignSelf="center" size="lg" source={{
                                                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                                    }}>
                                                        GG
                                                    </Avatar>
                                                    <HStack justifyContent="space-around">
                                                        <Text color={COLOR.fontColor} fontSize="sm" py={1}>James</Text>
                                                        <Text color={COLOR.fontColor} fontSize="sm" py={1}>Silver</Text>
                                                    </HStack>
                                                </VStack>
                                            </Box>
                                        </TouchableOpacity>
                                    ))
                                }
                            </HStack>
                        </ScrollView>
                    </VStack>
                </Box>

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

export default BrandDashboard;