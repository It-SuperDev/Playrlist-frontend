import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";

import { COLOR, Images, Styles } from "../constants";

import Carousel from 'react-native-snap-carousel'

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from "@expo/vector-icons"

import { Image, Input, Icon, Text, Box, Stack, HStack, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Divider, Menu } from "native-base";

import { useApi } from '../redux/services'
import { useDispatch } from 'react-redux'

const PaymentsAthletes = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()

    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false}>
                <Box style={styles.header} bg="#F5F5F5">
                    <HStack display="flex" justifyContent="space-between" alignItems="center" px={5}>
                        <Stack>
                            <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate("PlansAthletesScreen")} color={COLOR.white} space={1}>
                                <FontAwesome5 name="long-arrow-alt-left" />
                            </Button>
                        </Stack>
                        <HStack justifyContent="center" alignItems="center" display="flex" space={2}>
                            <IconButton variant="ghost" size="xs" icon={<EvilIcons style={{ fontSize: 25 }} name="user" />} />
                            <Menu trigger={triggerProps => {
                                return (
                                    <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                        <AntDesign color={COLOR.black} style={{ fontSize: 25 }} name="ellipsis1" />
                                    </Pressable>
                                )
                            }}>
                                <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs">My Account</Text></Menu.Item>
                                <Menu.Item h={1} justifyContent="center" onPress={() => navigation.navigate("BrandDashboardScreen")}><Text fontSize="xxs">Brand Dash</Text></Menu.Item>
                                <Menu.Item h={1} justifyContent="center" onPress={() => navigation.navigate("AboutScreen")}><Text fontSize="xxs">About Us</Text></Menu.Item>
                                <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs">My Wallet</Text></Menu.Item>
                                <Menu.Item h={1} justifyContent="center"><Text fontSize="xxs">Log Out</Text></Menu.Item>
                            </Menu>
                        </HStack>
                    </HStack>
                </Box>
                <VStack bg={COLOR.white} h={(Dimensions.get("window").height - 90)} alignItems="center" justifyContent="space-between" >
                    <Text fontSize="sm" color={COLOR.fontColor} pt={3}>PAYMENTS OPTIONS FOR ATHLETES</Text>
                    <Image source={Images.PaymentVisa} ></Image>
                    <VStack w="100%" px="5%">
                        <Input _focus={{ borderColor: "gray.200" }} bg={COLOR.white} size='xs' mt={3} h="40px" w="100%" borderWidth={2} borderRadius={20} placeholder="Card Number" />
                        <Input _focus={{ borderColor: "gray.200" }} bg={COLOR.white} size='xs' mt={3} h="40px" w="100%" borderWidth={2} borderRadius={20} placeholder="Name On Card" />
                        <HStack justifyContent="space-between">
                            <Input _focus={{ borderColor: "gray.200" }} bg={COLOR.white} size='xs' mt={3} h="40px" w="48%" borderWidth={2} borderRadius={20} placeholder="Expiry Date" />
                            <Input _focus={{ borderColor: "gray.200" }} bg={COLOR.white} size='xs' mt={3} h="40px" w="48%" borderWidth={2} borderRadius={20} placeholder="Security Code" />
                        </HStack>
                        <VStack pt={3}>
                            <Button variant="ghost" borderRadius={20} h="40px" bg={COLOR.base} colorScheme="orange">
                                <Text color={COLOR.white} fontSize="xs" pt={1}>Proceed Now</Text>
                            </Button>
                            <Button variant="ghost" borderRadius={20} h="40px" bg={COLOR.white} colorScheme="orange">
                                <Text color={COLOR.black} fontSize="xs" pt={1}>Cancel Now</Text>
                            </Button>

                        </VStack>
                    </VStack>
                    <Image source={Images.Payments}></Image>
                </VStack>
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

export default PaymentsAthletes;