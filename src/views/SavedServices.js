import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import Carousel from 'react-native-snap-carousel'
import { Shadow } from 'react-native-shadow-2';

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { Image, Select, Input, Icon, Text, Box, Stack, Heading, HStack, AspectRatio, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Menu, HamburgerIcon } from "native-base";

import Footer from '../components/footer'
import { useApi } from '../redux/services'
import { COLOR, Images, Styles } from "../constants";

const Dashboard = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.bg2}>

            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                    <Box width="100%" minWidth="100%" px={2} bg={COLOR.headerbg} border={1} borderColor={COLOR.white}>
                        <HStack space={3} alignItems="center" w="100%" pt={10} pb={5}>
                            <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate("ProfileScreen")} >
                                <Icon as={FontAwesome} name="long-arrow-left" color="black" size="xs" />
                            </Button>
                            <Text color="black" fontSize="lg" ml={5} fontWeight={700}>
                                Need Services
                            </Text>
                        </HStack>
                    </Box>
                </Shadow>

                <Box px={4} py={5}>
                    {
                        [0, 11, 12].map((item) => (
                            <HStack justifyContent="space-between" pt={5} key={item}>
                                <Box width='50%' pr={2}>
                                    <TouchableOpacity onPress={() => { navigation.navigate("AthletesDetailsScreen") }}>
                                        <VStack bg={COLOR.white} rounded='lg' border={2} borderColor={COLOR.white}>
                                            <Image source={Images.Brand1} borderRadius={3} maxH={100}></Image>
                                            <Box px={2}>
                                                <Text fontSize="xxs" pt={2} color={COLOR.fontColor}>Service Name</Text>
                                                <Text fontSize="sm">come work with us &improve yourself.</Text>
                                                <HStack justifyContent='space-between' py={1}>
                                                    <Text fontSize="sm" color={COLOR.gold}>
                                                        <Icon as={FontAwesome} name="star" size="xs" color={COLOR.gold} />
                                                        &nbsp;5.0
                                                        <Text fontSize="sm" color={COLOR.grey}>
                                                            &nbsp; (23)
                                                        </Text>
                                                    </Text>
                                                    <Icon as={FontAwesome} name="heart" size="xs" color={COLOR.gold} />
                                                </HStack>
                                            </Box>
                                        </VStack>
                                    </TouchableOpacity>
                                </Box>
                                <Box width='50%' pl={2}>
                                    <TouchableOpacity onPress={() => { navigation.navigate("AthletesDetailsScreen") }}>
                                        <VStack bg={COLOR.white} rounded='lg' border={2} borderColor={COLOR.white}>
                                            <Image source={Images.Brand1} borderRadius={3} maxH={100}></Image>
                                            <Box px={2}>
                                                <Text fontSize="xxs" pt={2} color={COLOR.fontColor}>Service Name</Text>
                                                <Text fontSize="sm">come work with us &improve yourself.</Text>
                                                <HStack justifyContent='space-between' py={1}>
                                                    <Text fontSize="sm" color={COLOR.gold}>
                                                        <Icon as={FontAwesome} name="star" size="xs" color={COLOR.gold} />
                                                        &nbsp;5.0
                                                        <Text fontSize="sm" color={COLOR.grey}>
                                                            &nbsp; (23)
                                                        </Text>
                                                    </Text>
                                                    <Icon as={FontAwesome} name="heart" size="xs" color={COLOR.gold} />
                                                </HStack>
                                            </Box>
                                        </VStack>
                                    </TouchableOpacity>
                                </Box>
                            </HStack>
                        ))
                    }
                </Box>
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