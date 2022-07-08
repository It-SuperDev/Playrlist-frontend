import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";

import { COLOR, Images, Styles } from "../constants";

import Carousel from 'react-native-snap-carousel'

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from "@expo/vector-icons"

import { Image, Input, Icon, Text, Box, Stack, HStack, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Divider, Menu } from "native-base";

import { useApi } from '../redux/services'

import Footer from '../components/footer'
const About = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const [tabs, setTabs] = useState(true);

    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <Box style={styles.header} bg="#F5F5F5">
                <HStack display="flex" justifyContent="space-between" alignItems="center" px={5}>
                    <Stack>
                        <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate("BrandDashboardScreen")} color={COLOR.white} space={1}>
                            <FontAwesome5 name="long-arrow-alt-left" />
                        </Button>
                    </Stack>
                    <HStack justifyContent="center" alignItems="center" display="flex" space={2}>
                        <IconButton variant="ghost" size="xs" icon={<EvilIcons style={{ fontSize: 25 }} name="user" />} />
                        <Menu trigger={triggerProps => {
                            return (
                                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <AntDesign style={{ fontSize: 25 }} name="ellipsis1" />
                                </Pressable>
                            )
                        }}>
                            <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs">My Account</Text></Menu.Item>
                            <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs" onPress={() => navigation.navigate("TrainersFeedScreen")}>Dashboard</Text></Menu.Item>
                            <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs" onPress={() => navigation.navigate("AboutScreen")}>About Us</Text></Menu.Item>
                            <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs">My Wallet</Text></Menu.Item>
                            <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs" onPress={() => navigation.navigate("SignInScreen")}>Log Out</Text></Menu.Item>
                        </Menu>
                    </HStack>
                </HStack>
            </Box>
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} >
                <VStack alignItems="center" pt={5} px="5%" bg={COLOR.white}>
                    <Text fontSize="sm" color={COLOR.black} pb={5}>BUSINESS INFORMATION</Text>
                    <Image borderRadius={10} source={Images.About1}></Image>
                    <Text fontSize="xxs" color={COLOR.black} pt={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</Text>
                    <Text fontSize="xxs" color={COLOR.black} pt={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</Text>
                    <HStack justifyContent="space-between" alignItems="center" pt={5} space={3}>
                        <Image borderRadius={10} source={Images.About2}></Image>
                        <Text fontSize="xxs" w="45%" color={COLOR.black} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </HStack>
                    <Text fontSize="xxs" color={COLOR.black} pt={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</Text>
                    <HStack py={10}>
                        <Button variant="ghost" w="100%" borderRadius={20} h="40px" bg={COLOR.base} onPress={() => navigation.navigate("ContactUsScreen")} colorScheme="orange">
                            <Text color={COLOR.white} fontSize="xs" pt={1}>CONTACT US</Text>
                        </Button>
                    </HStack>
                    <Divider bg={COLOR.black} w="100%" />
                    <Text fontSize="xxs" color={COLOR.black} pt={5}>Disclaimer: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</Text>
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
        justifyContent: "center"
    },
    button: {
        height: 30,
        color: "#000"
    },
    font: {
        fontSize: 10
    }

});

export default About;