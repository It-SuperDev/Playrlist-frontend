import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import Carousel from 'react-native-snap-carousel'
import { Shadow } from 'react-native-shadow-2';

import { MaterialIcons, AntDesign, EvilIcons, Entypo, FontAwesome5, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons"
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
                                My Wallet
                            </Text>
                        </HStack>
                    </Box>
                </Shadow>

                <Stack my={10} px={4}>
                    <VStack py={1} w="100%" >
                        <Box>
                            <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                <Box bg={COLOR.white} width={375} maxWidth="100%">
                                    <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                        <Text fontSize="sm" color={COLOR.black}>
                                            Your currency
                                        </Text>
                                        <Text fontSize="sm" color={COLOR.grey1}>
                                            USD
                                        </Text>
                                    </HStack>
                                </Box>
                            </Shadow>
                            <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                <Box bg={COLOR.white} width={375} maxWidth="100%">
                                    <HStack minH={50} justifyContent='space-between' alignItems='center' px={3}>
                                        <Text fontSize="sm" color={COLOR.black}>
                                            Your balance
                                        </Text>
                                        <Text fontSize="sm" color={COLOR.grey1}>
                                            $600
                                        </Text>
                                    </HStack>
                                </Box>
                            </Shadow>
                        </Box>
                    </VStack>

                    <HStack justifyContent='space-between'>
                        <Button
                            disabled={loading}
                            // onPress={signup}
                            w="49%"
                            mt={4}
                            variant="ghost"
                            borderRadius={20}
                            h="40px"
                            bg={COLOR.base}
                            colorScheme="orange"
                        >
                            <HStack justifyContent='space-around' alignItems='center'>
                                <Icon as={<Fontisto name='wallet' />} size='xs' color={COLOR.white} mr={2} />
                                <Text color={COLOR.white} fontSize="xs" pt={1}>
                                    DEPOSIT
                                </Text>
                            </HStack>
                        </Button>
                        <Button
                            disabled={loading}
                            // onPress={signup}
                            w="49%"
                            mt={4}
                            variant="ghost"
                            borderRadius={20}
                            h="40px"
                            bg={COLOR.success}
                            colorScheme="orange"
                        >
                            <HStack justifyContent='space-around' alignItems='center'>
                                <Icon as={<MaterialCommunityIcons name='bank' />} size='xs' color={COLOR.white} mr={2} />
                                <Text color={COLOR.white} fontSize="xs" pt={1}>
                                    WITHDRAW
                                </Text>
                            </HStack>
                        </Button>
                    </HStack>
                </Stack>
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