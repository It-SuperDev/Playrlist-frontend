import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";

import { COLOR, Images, Styles } from "../constants";

import Carousel from 'react-native-snap-carousel'

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from "@expo/vector-icons"

import { Image, Input, Icon, Text, Box, Stack, HStack, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Divider, TextArea, Menu } from "native-base";

import { useApi } from '../redux/services'
import { useDispatch } from 'react-redux'
import Footer from '../components/footer'

const ContactUs = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()

    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <Box style={styles.header} bg="#F5F5F5">
                <HStack display="flex" justifyContent="space-between" alignItems="center" px={5}>
                    <Stack>
                        <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate("AboutScreen")} color={COLOR.white} space={1}>
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
            <ScrollView minH={(Dimensions.get("window").height - 90)} contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false}>
                <VStack bg={COLOR.white} alignItems="center" px="5%">
                    <Text fontSize="sm" color={COLOR.fontColor} pt={5}>CONTACT US</Text>
                    <Image source={Images.ContactUs} borderRadius={10} my={10}></Image>
                    <VStack w="100%" >
                        <Input _focus={{ borderColor: "gray.200" }} bg={COLOR.white} size='xs' mt={3} h="40px" w="100%" borderWidth={2} borderRadius={20} placeholder="Enter Your Name" />
                        <Input _focus={{ borderColor: "gray.200" }} bg={COLOR.white} size='xs' mt={3} h="40px" w="100%" borderWidth={2} borderRadius={20} placeholder="Email Address" />
                        <Input _focus={{ borderColor: "gray.200" }} bg={COLOR.white} size='xs' mt={3} h="40px" w="100%" borderWidth={2} borderRadius={20} placeholder="Phone Number" />
                        <TextArea h={40} size="xs" borderRadius={20} _focus={{ borderColor: "gray.200" }} mt={3} placeholder="Enter Your Message..." w="100%" />
                        <VStack pt={3}>
                            <Button variant="ghost" borderRadius={20} h="40px" bg={COLOR.base} colorScheme="orange">
                                <Text color={COLOR.white} fontSize="xs" pt={1}>SEND NOW</Text>
                            </Button>
                        </VStack>
                    </VStack>
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

export default ContactUs;