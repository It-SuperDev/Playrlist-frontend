import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";

import { COLOR, Images, Styles } from "../constants";

import Carousel from 'react-native-snap-carousel'

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from "@expo/vector-icons"

import { Image, Input, Icon, Text, Box, Stack, HStack, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Divider, Menu } from "native-base";

import { useApi } from '../redux/services'
import { useDispatch } from 'react-redux'
import Footer from '../components/footer'

const AthletesItem = ({ navigation }) => {
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
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false}>
                <VStack bg={COLOR.white} alignItems="center" pt={3} px="5%">
                    <Image source={Images.Service2}></Image>
                    <Text fontSize="md" color={COLOR.black}>ATHLETE NAME</Text>
                    <Text fontSize="xxs" textAlign="center" color={COLOR.black} pt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</Text>
                    <Text fontSize="xxs" textAlign="center" color={COLOR.black}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</Text>
                    <HStack display="flex" justifyContent="space-around" my={5} borderRadius={50} borderColor="#DAA520" borderWidth={2}>
                        <Button borderRadius={15} size="xs" variant="ghost" onPress={() => { setTabs(true) }} h={30} w="50%" color={COLOR.black} bg={tabs ? "#DAA520" : ""}>
                            <Text color={tabs ? COLOR.white : COLOR.black} fontSize="xs">FOLLOW HIM</Text>
                        </Button>
                        <Button borderRadius={15} size="xs" variant="ghost" onPress={() => { setTabs(false) }} h={30} w="50%" color={COLOR.black} bg={tabs ? "" : "#DAA520"}>
                            <Text color={tabs ? COLOR.black : COLOR.white} fontSize="xs">START SELLING</Text>
                        </Button>
                    </HStack>
                    <Text fontSize="sm" color={COLOR.black}>ATHLETE PHOTOS</Text>
                    <HStack justifyContent="space-between" alignItems="center" py={5}>
                        <Image size="md" source={Images.Service2} resizeMode="cover"></Image>
                        <Image size="md" source={Images.Service2} resizeMode="cover"></Image>
                        <Image size="md" source={Images.Service2} resizeMode="cover"></Image>
                    </HStack>
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

export default AthletesItem;