import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import Carousel from 'react-native-snap-carousel'
import { Shadow } from 'react-native-shadow-2';

import { MaterialIcons, AntDesign, EvilIcons, Entypo } from "@expo/vector-icons"
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
    const goPage = (link) => {
        navigation.navigate(link)
    }
    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.bg2}>

            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                    <Box bg={COLOR.white} width="100%" maxWidth="100%">
                        <HStack space={3} justifyContent="space-around" alignItems="center" w="100%" pb={3} pt={8}>
                            <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate("DashboardScreen")} >
                                <Icon as={FontAwesome} name="long-arrow-left" color="black" size="xs" />
                            </Button>
                            <Input autoFocus w={{ base: "65%" }} h="40px" _focus={{ borderColor: "gray.300" }} size="xs" variant="underlined" placeholder="Search..." InputRightElement={<Icon as={<MaterialIcons name="search" />} size={5} mr="2" color="muted.400" />} />
                            <IconButton colorScheme="black" variant="ghost" icon={<Icon as={FontAwesome} name="sliders" size="xs" />} />
                        </HStack>
                    </Box>
                </Shadow>

                <Box pt={3}>
                    <Box>
                        <VStack px={3} py={1} w="100%" >
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                    <Box py={1} key={item} >
                                        <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 3]}>
                                            <Box bg={COLOR.white} borderRadius={5} width={375} maxWidth="100%">
                                                <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
                                                    <HStack justifyContent="space-between" maxH={120}>
                                                        <Image source={Images.About1} alt="" rounded="md" width="46%" h='100%' borderTopRightRadius={0} borderBottomRightRadius={0} />
                                                        <Box justifyContent="space-between" py="3%" width="50%">
                                                            <VStack space="1" pr={2}>
                                                                <HStack justifyContent='space-between'>
                                                                    <Text fontSize="sm" color={COLOR.gold}>
                                                                        <Icon as={FontAwesome} name="star" size="xs" color={COLOR.gold} />
                                                                        &nbsp;5.0
                                                                        <Text fontSize="sm" color={COLOR.grey}>
                                                                            &nbsp; (23)
                                                                        </Text>
                                                                    </Text>
                                                                    <Icon as={FontAwesome} name="heart-o" size="xs" color={COLOR.grey} />
                                                                </HStack>
                                                                <Text color="black" fontSize="md">
                                                                    Brand name
                                                                </Text>
                                                                <Text color="grey" fontSize="sm" ellipsizeMode='head'>
                                                                    {((serviceDesc).length > maxlimit) ?
                                                                        (((serviceDesc).substring(0, maxlimit - 3)) + '...') :
                                                                        serviceDesc}
                                                                </Text>
                                                            </VStack>
                                                            <Text px={2} textTransform="uppercase" textAlign='right' fontSize="sm" color="grey" >
                                                                $30 ~ $150
                                                            </Text>
                                                        </Box>
                                                    </HStack>
                                                </TouchableOpacity>
                                            </Box>
                                        </Shadow>
                                    </Box>
                                ))
                            }
                        </VStack>
                    </Box>
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

export default Dashboard;