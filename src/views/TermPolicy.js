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
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>

            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                    <Box width="100%" minWidth="100%" px={2} bg={COLOR.headerbg} border={1} borderColor={COLOR.white}>
                        <HStack space={3} alignItems="center" w="100%" pt={10} pb={4}>
                            <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate('SwitchAccountScreen')} >
                                <Icon as={FontAwesome} name="long-arrow-left" color="black" size="xs" />
                            </Button>
                            <Text color="black" fontSize="lg" ml={2} fontWeight={700}>
                                Term of service and Privacy Policy
                            </Text>
                        </HStack>
                    </Box>
                </Shadow>

                <Box pt={3} minH={100}>
                    <Box>
                        <VStack w="100%">
                            <Box bg={COLOR.white} maxWidth="100%">
                                <VStack pb={3} px={5}>
                                    <HStack minH={39} justifyContent='space-between' alignItems='center'>
                                        <Text fontSize="sm" >
                                            Term of service
                                        </Text>
                                    </HStack>
                                    {
                                        [1, 2, 3, 4, 5].map((item) => (
                                            <HStack key={item} py={1}>
                                                <Text fontSize="xs" color={COLOR.grey1}>{item}.</Text>
                                                <Text fontSize="xs" color={COLOR.grey1} pl={1}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                                                </Text>
                                            </HStack>
                                        ))
                                    }
                                </VStack>
                                <VStack pb={3} px={5}>
                                    <HStack minH={39} justifyContent='space-between' alignItems='center'>
                                        <Text fontSize="sm" >
                                            Privacy Policy
                                        </Text>
                                    </HStack>
                                    {
                                        [1, 2, 3, 4, 5].map((item) => (
                                            <HStack key={item} py={1}>
                                                <Text fontSize="xs" color={COLOR.grey1}>{item}.</Text>
                                                <Text fontSize="xs" color={COLOR.grey1} pl={1}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                                                </Text>
                                            </HStack>
                                        ))
                                    }
                                </VStack>
                            </Box>
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