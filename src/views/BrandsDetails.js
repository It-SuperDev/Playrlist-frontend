import React, { useState } from "react";
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { COLOR, Images, Styles } from "../constants";

import Carousel from 'react-native-snap-carousel'

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from "@expo/vector-icons"

import { Image, Input, Icon, Text, Box, Stack, HStack, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Menu } from "native-base";
import { Shadow } from 'react-native-shadow-2';
import { useApi } from '../redux/services'
import Footer from '../components/footer'
import Swiper from 'react-native-swiper'

const BrandsDetails = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth)

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


    const back = async () => {
        if (userData.user.role === 'brand') {
            navigation.navigate("BrandDashboardScreen")
        } else {
            navigation.navigate("DashboardScreen")
        }
    }

    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <Box style={styles.header}>
                <HStack display="flex" justifyContent="space-between" px={5} alignItems='center'>
                    <Stack>
                        <Button colorScheme="black" borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => back()} color={COLOR.black} space={1}>
                            <FontAwesome5 name="long-arrow-alt-left" />
                        </Button>
                    </Stack>
                    <HStack justifyContent="center" alignItems="center" display="flex" space={2}>
                        <Button colorScheme="black" borderRadius={15} size="xs" variant="ghost" h={35} bg={COLOR.white} color={COLOR.black} space={1} onPress={() => navigation.navigate("SavedServicesScreen")}>
                            <HStack alignItems="center" display="flex">
                                <Text color={COLOR.black} fontSize="xs" mx={2}>Needs</Text>
                                <Icon as={<AntDesign name="hearto" />} size='xs' mr={3} color={COLOR.gold} />
                                <Center
                                    bg={COLOR.gold}
                                    _text={{
                                        color: "warmGray.50",
                                        fontSize: "xs",
                                    }}
                                    position="absolute"
                                    top={-15} right={-10} p={1} minW={6} minH={3} borderRadius={50}>
                                    12
                                </Center>
                            </HStack>
                        </Button>
                    </HStack>
                </HStack>
            </Box>
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <VStack py={10} px={5} pt={5}>
                    <HStack pt={5} space="5%" display="flex" alignItems="center">
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

                    <VStack pt={3}>
                        <Text fontSize="md" textAlign="center" >Your heading goes here,
                            this is just dummy text.</Text>
                        <Text fontSize="xxs" textAlign="center" pt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</Text>
                        <Text fontSize="xxs" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</Text>

                    </VStack>
                    <HStack py={5} alignItems="center" justifyContent="center">
                        <Button variant="ghost" borderRadius={15} h="30px" bg={COLOR.base} colorScheme="orange" onPress={() => { navigation.navigate("PlansScreen") }}>
                            <Text color={COLOR.white} fontSize="xs">SUBSCRIBE NOW</Text>
                        </Button>
                    </HStack>
                    <HStack space={3} w="100%" py={5} px={5} justifyContent="space-between" display="flex">
                        <Shadow startColor="white" finalColor="#eeeeee" w="50%">
                            <HStack py={1} px={3} space={2} alignItems="center" justifyContent="center" >
                                <Image source={Images.ThumbDown}></Image>
                                <VStack>
                                    <Text fontSize="xs">Likes</Text>
                                    <Text fontSize="md">5000+</Text>
                                </VStack>
                            </HStack>
                        </Shadow>
                        <Shadow startColor="white" finalColor="#eeeeee">
                            <HStack py={1} px={3} space={2} alignItems="center" justifyContent="center">
                                <Image source={Images.Chat}></Image>
                                <VStack>
                                    <Text fontSize="xs">Reviews</Text>
                                    <Text fontSize="md">1000+</Text>
                                </VStack>
                            </HStack>
                        </Shadow>
                    </HStack>
                    {/* <HStack justifyContent="center" alignItems="center" py={5}>
                        <Text fontSize="md">SIMILAR SERVICES</Text>
                    </HStack>
                    <HStack justifyContent="space-around" w="100%">
                        <VStack style={Styles.brandBox} >
                            <Image source={Images.Brand1} borderRadius={5}></Image>
                            <Text fontSize="xxs" py={2} color={COLOR.fontColor}>Service Name</Text>
                            <Text fontSize="sm">come work with us &improve yourself.</Text>
                            <HStack space={2} py={2}>
                                <Avatar size="xs" source={Images.Avatar}></Avatar>
                                <VStack>
                                    <Text fontSize="xxs">Service Provider Name</Text>
                                    <Text fontSize="xxs">Level 6</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack style={Styles.brandBox}>
                            <Image source={Images.Brand1} borderRadius={5}></Image>
                            <Text fontSize="xxs" py={2} color={COLOR.fontColor}>Service Name</Text>
                            <Text fontSize="sm">come work with us &improve yourself.</Text>
                            <HStack space={2} py={2}>
                                <Avatar size="xs" source={Images.Avatar}></Avatar>
                                <VStack>
                                    <Text fontSize="xxs">Service Provider Name</Text>
                                    <Text fontSize="xxs">Level 6</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </HStack>
                    <HStack justifyContent="space-around" w="100%" >
                        <VStack style={Styles.brandBox} >
                            <Image source={Images.Brand1} borderRadius={5}></Image>
                            <Text fontSize="xxs" py={2} color={COLOR.fontColor}>Service Name</Text>
                            <Text fontSize="sm">come work with us &improve yourself.</Text>
                            <HStack space={2} py={2}>
                                <Avatar size="xs" source={Images.Avatar}></Avatar>
                                <VStack>
                                    <Text fontSize="xxs">Service Provider Name</Text>
                                    <Text fontSize="xxs">Level 6</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack style={Styles.brandBox}>
                            <Image source={Images.Brand1} borderRadius={5}></Image>
                            <Text fontSize="xxs" py={2} color={COLOR.fontColor}>Service Name</Text>
                            <Text fontSize="sm">come work with us &improve yourself.</Text>
                            <HStack space={2} py={2}>
                                <Avatar size="xs" source={Images.Avatar}></Avatar>
                                <VStack>
                                    <Text fontSize="xxs">Service Provider Name</Text>
                                    <Text fontSize="xxs">Level 6</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </HStack>
                    <HStack justifyContent="center" pt={3}>
                        <Button variant="ghost" size="xs">
                            <HStack space={1} display="flex" justifyContent="center" alignItems="center">
                                <Icon as={MaterialIcons} name="loop" size="xs" />
                                <Text fontSize="xs">LOAD MORE</Text>
                            </HStack>
                        </Button>
                    </HStack> */}
                </VStack>
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

export default BrandsDetails;