import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";

import { COLOR, Images, Styles } from "../constants";

import Carousel from 'react-native-snap-carousel'

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from "@expo/vector-icons"

import { Image, Input, Icon, Text, Box, Stack, HStack, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Divider, Menu } from "native-base";

import { useApi } from '../redux/services'
import { useDispatch } from 'react-redux'
const data = [
    {
        id: 1,
        title: "STANDARD",
        desc: "",
        value: 129.99,
        headerColor: '#0088FF',
        bodyColor: '#017FEE',
        fontColor: '#2097FF'
    },
    {
        id: 2,
        title: "BROZNE",
        desc: "Ten Leads Per Month",
        value: 149.99,
        headerColor: '#A5814A',
        bodyColor: '#B08D57',
        fontColor: '#C0A479'
    },
    {
        id: 3,
        title: "SILVER",
        desc: "Twenty Leads Per Month",
        value: 159.99,
        headerColor: '#B7B6B6',
        bodyColor: '#C4C4C4',
        fontColor: '#C8C8C8'
    },
    {
        id: 4,
        title: "GOLD",
        desc: "Forty Leads Per Month",
        value: 179.99,
        headerColor: '#C5AB30',
        bodyColor: '#CFB53B',
        fontColor: '#D6BF53'
    },
    {
        id: 5,
        title: "PLATINUM",
        desc: "Unlimited Leads Per Month",
        value: 299.99,
        headerColor: '#2A305A',
        bodyColor: '#373D65',
        fontColor: '#4F5578'
    }
]
const Plans = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()
    const [headerColor, setHeaderColor] = useState("#0088FF")
    const [bodyColor, setBodyColor] = useState("#017FEE")
    const [fontColor, setFontColor] = useState("#2097FF")
    const [PlanText, setPlanText] = useState("STANDARD")
    const [price, setPrice] = useState("129.99")
    const [index, setIndex] = useState(1)
    const [description, setDescription] = useState("")
    useEffect(() => {
        const val = index - 1
        setHeaderColor(data[val].headerColor)
        setBodyColor(data[val].bodyColor)
        setFontColor(data[val].fontColor)
        setPlanText(data[val].title)
        setPrice(data[val].value)
        setDescription(data[val].desc)
    }, [index])
    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false}>
                <Box style={styles.header} bg={bodyColor}>
                    <HStack display="flex" justifyContent="space-between" alignItems="center" px={5}>
                        <Stack>
                            <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={headerColor} onPress={() => navigation.navigate("BrandsDetailsScreen")} color={COLOR.white} space={1}>
                                <FontAwesome5 color={COLOR.white} name="long-arrow-alt-left" />
                            </Button>
                        </Stack>
                        <HStack justifyContent="center" alignItems="center" display="flex" space={2}>
                            <IconButton color={COLOR.white} variant="ghost" size="xs" icon={<EvilIcons style={{ fontSize: 25 }} color={COLOR.white} name="user" />} />
                            <Menu trigger={triggerProps => {
                                return (
                                    <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                        <AntDesign color={COLOR.white} style={{ fontSize: 25 }} name="ellipsis1" />
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
                <VStack bg={headerColor} h={(Dimensions.get("window").height - 90)} alignItems="center" justifyContent="space-around" >
                    <Text fontSize="sm" color={COLOR.white}>BRAND PLANS</Text>
                    <VStack justifyContent="center" alignItems="center">
                        <Image source={Images.Star}></Image>
                        <HStack space={5} alignItems="center" py={3}>
                            <Divider bg={fontColor}></Divider>
                            <Text fontSize="lg" bold color={COLOR.white}>{PlanText}</Text>
                            <Divider bg={fontColor}></Divider>
                        </HStack>
                        <Text fontSize="5xl" color={COLOR.white}>${price}</Text>
                        <Text fontSize="xs" color={COLOR.white}>PER MONTH</Text>
                    </VStack>
                    <VStack justifyContent="center" alignItems="center">
                        {
                            index === 1 ?
                                <>
                                    <Text fontSize="sm" color={COLOR.white}>Limited Access</Text>
                                    <Text fontSize="sm" color={COLOR.white}>(Only Five Leads Per Month)</Text>
                                </>
                                :
                                <Text fontSize="sm" color={COLOR.white}>{description}</Text>
                        }
                    </VStack>
                    <VStack>
                        <Button borderRadius={20} h="30px" bg={COLOR.white} w={250} onPress={() => navigation.navigate('PaymentsScreen')} >
                            <Text color={headerColor} fontSize="xs" pt={1}>CHOOSE THIS PLAN</Text>
                        </Button>
                        <Button borderRadius={20} h="30px" bg="transparent" w={250} pt={2}>
                            <Text color={COLOR.white} fontSize="xs" pt={1}>LEARN MORE</Text>
                        </Button>
                    </VStack>
                    <HStack alignItems="center" justifyContent="space-between" display="flex" w="80%" pb={5}>
                        <Button size="sm" variant="ghost" disabled={index === 1 ? true : false} onPress={() => setIndex(index === 1 ? 1 : (index - 1))}>
                            <Text color={COLOR.white} fontSize="xs">BACK</Text>
                        </Button>
                        <HStack space={2}>
                            <Divider w={5} h={0.5} bg={bodyColor}></Divider>
                            <Divider w={5} h={0.5}></Divider>
                            <Divider w={5} h={0.5}></Divider>
                        </HStack>
                        <Button size="sm" variant="ghost" disabled={index === 5 ? true : false} onPress={() => setIndex(index === 5 ? 5 : (index + 1))}>
                            <Text color={COLOR.white} fontSize="xs" >NEXT</Text>
                        </Button>
                    </HStack>
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

export default Plans;