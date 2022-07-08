import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import Carousel from 'react-native-snap-carousel'

import { MaterialIcons, AntDesign, EvilIcons, Entypo } from "@expo/vector-icons"

import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { Image, Input, Icon, Text, Box, Stack, HStack, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Menu, HamburgerIcon } from "native-base";

import Footer from '../components/footer'
import { useApi } from '../redux/services'
import { COLOR, Images, Styles } from "../constants";

const TrainersFeed = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()
    const [tabs, setTabs] = useState(true);

    const [activeIndex, setActiveIndex] = useState(2)
    const carouselItems = [
        {
            title: "Trainer Name",
            src: require('../assets/img/1.png'),
        },
        {
            title: "Service Name",
            src: require('../assets/img/3.png'),
        },
        {
            title: "Trainer Name",
            src: require('../assets/img/2.png'),
        },
        {
            title: "Service Name",
            src: require('../assets/img/1.png'),
        },
        {
            title: "Trainer Name",
            src: require('../assets/img/3.png'),
        },
    ]
    const Links = [
        { name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }, { name: "E" }, { name: "F" }, { name: "G" }, { name: "H" }, { name: "I" }, { name: "J" }, { name: "K" }, { name: "L" }, { name: "M" }, { name: "N" }, { name: "O" }, { name: "Q" }, { name: "R" }, { name: "S" }, { name: "T" }, { name: "U" }, { name: "V" }, { name: "W" }, { name: "X" }, { name: "Y" }, { name: "Z" }
    ]
    const _renderItem = ({ item, index }) => {
        return (
            <ImageBackground source={item.src} resizeMode="cover" style={{ justifyContent: "flex-end", height: 250 }}>
                <View style={{
                    // borderRadius: 5,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}>
                    <ImageBackground source={Images.ImageFooter} style={{ justifyContent: "center", alignItems: 'center', height: 60, position: "relative", bottom: 0 }}>
                        <Text fontSize="md" color={COLOR.white} bold>{item.title}</Text>
                    </ImageBackground>
                </View>
            </ImageBackground>

        )
    }

    const goPage = (link) => {
        navigation.navigate(link)
    }
    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <Box style={styles.header}>
                <HStack display="flex" justifyContent="space-around" px="5%">
                    <Stack>
                        <Image source={Images.PlayHeader}></Image>
                    </Stack>
                    <HStack justifyContent="center" alignItems="center" display="flex" space={2}>
                        <Button colorScheme="black" size="xs" variant="ghost" style={styles.button} color={COLOR.black} space={1}>
                            <HStack alignItems="center" display="flex">
                                <Entypo name="plus" style={{ fontSize: 20 }} />
                                <Text color={COLOR.black} fontSize="xs"> Post A Need</Text>
                            </HStack>
                        </Button>
                        <Button colorScheme="black" borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} color={COLOR.black} space={1}>
                            <AntDesign name="hearto"></AntDesign>
                        </Button>
                        <HStack justifyContent="center" alignItems="center" display="flex" space={1}>
                            <HStack justifyContent="center" alignItems="center" display="flex">
                                <MaterialIcons name="account-balance-wallet" style={{ fontSize: 20 }} />
                                <Text color={COLOR.black} fontSize="xs" >Wallet:</Text>
                            </HStack>
                            <HStack>
                                <Text color={COLOR.fontColor} fontSize="xs">$0.00</Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </HStack>
            </Box>
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Box>
                    <HStack display="flex" space={3} pr={5} justifyContent="space-around" h="40px" alignItems="center">
                        <Input w={{ base: "65%" }} _focus={{ borderColor: "gray.200" }} size="xs" h="100%" variant="rounded" borderBottomLeftRadius={0} borderTopLeftRadius={0} InputRightElement={<Icon as={<MaterialIcons name="search" />} size={5} mr="2" color="muted.400" />} placeholder="Search..." />
                        <IconButton colorScheme="black" variant="ghost" icon={<EvilIcons style={{ fontSize: 25 }} name="user" />} />
                        <Menu trigger={triggerProps => {
                            return (
                                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <AntDesign style={{ fontSize: 25 }} name="ellipsis1" />
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
                </Box>
                <Center>
                    <Box w="80%">
                        <HStack display="flex" space={1} justifyContent="space-around" my={5} borderRadius={100} borderColor="#DAA520" borderWidth={3}>
                            <Button borderRadius={15} size="xs" variant="ghost" onPress={() => { setTabs(true) }} h={30} w="50%" color={COLOR.black} bg={tabs ? "#DAA520" : ""}>
                                <Text color={tabs ? COLOR.white : COLOR.black} fontSize="xs">ATHLETES</Text>
                            </Button>
                            <Button borderRadius={15} size="xs" variant="ghost" onPress={() => { setTabs(false) }} h={30} w="50%" color={COLOR.black} bg={tabs ? "" : "#DAA520"}>
                                <Text color={tabs ? COLOR.black : COLOR.white} fontSize="xs">BRANDS</Text>
                            </Button>
                        </HStack>
                    </Box>
                </Center>
                {
                    tabs ?
                        <Box>
                            <Center>
                                <HStack space={0.5}>
                                    {
                                        Links.map((item, key) => {
                                            return (
                                                <Text href="a" key={key} underline fontSize="xs" color={COLOR.fontColor}>{item.name}</Text>
                                            )
                                        })
                                    }

                                </HStack>
                            </Center>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} pt={10}>
                                <Carousel
                                    layout={"default"}
                                    data={carouselItems}
                                    sliderWidth={Dimensions.get("window").width}
                                    firstItem={activeIndex}
                                    itemWidth={210}
                                    itemHeight={250}
                                    activeAnimationType="spring"
                                    renderItem={_renderItem}
                                    inactiveSlideScale={0.8}
                                    onSnapToItem={index => setActiveIndex(index)} />
                            </View>
                            <HStack pt={5} px="5%" space="5%" display="flex" alignItems="center">
                                <Box w="30%" >
                                    <TouchableOpacity onPress={() => { navigation.navigate("AthletesDetailsScreen") }}>
                                        <ImageBackground resizeMode="cover" source={Images.Service1} style={{ justifyContent: "flex-end", height: 100, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                            <ImageBackground source={Images.ImageFooter} style={{ justifyContent: "center", alignItems: 'center', height: 30, position: "relative", bottom: 0 }}>
                                                <Text fontSize="xxs" color={COLOR.white}>Trainer Name</Text>
                                            </ImageBackground>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </Box>
                                <Box w="30%">
                                    <TouchableOpacity onPress={() => { navigation.navigate("AthletesDetailsScreen") }}>
                                        <ImageBackground source={Images.Service2} style={{ justifyContent: "flex-end", borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 100 }}>
                                            <ImageBackground source={Images.ImageFooter} style={{ justifyContent: "center", alignItems: 'center', height: 30, position: "relative", bottom: 0 }}>
                                                <Text fontSize="xxs" color={COLOR.white}>Trainer Name</Text>
                                            </ImageBackground>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </Box>
                                <Box w="30%">
                                    <TouchableOpacity onPress={() => { navigation.navigate("AthletesDetailsScreen") }}>
                                        <ImageBackground source={Images.Service3} style={{ justifyContent: "flex-end", borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 100 }}>
                                            <ImageBackground source={Images.ImageFooter} style={{ justifyContent: "center", alignItems: 'center', height: 30, position: "relative", bottom: 0 }}>
                                                <Text fontSize="xxs" color={COLOR.white}>Trainer Name</Text>
                                            </ImageBackground>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </Box>
                            </HStack>
                            <HStack pt={5} px="5%" space="5%" display="flex" alignItems="center">
                                <Box w="30%" >
                                    <TouchableOpacity onPress={() => { navigation.navigate("AthletesDetailsScreen") }}>
                                        <ImageBackground resizeMode="cover" source={Images.Service1} style={{ justifyContent: "flex-end", height: 100, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                            <ImageBackground source={Images.ImageFooter} style={{ justifyContent: "center", alignItems: 'center', height: 30, position: "relative", bottom: 0 }}>
                                                <Text fontSize="xxs" color={COLOR.white}>Trainer Name</Text>
                                            </ImageBackground>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </Box>
                                <Box w="30%">
                                    <TouchableOpacity onPress={() => { navigation.navigate("AthletesDetailsScreen") }}>
                                        <ImageBackground source={Images.Service2} style={{ justifyContent: "flex-end", borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 100 }}>
                                            <ImageBackground source={Images.ImageFooter} style={{ justifyContent: "center", alignItems: 'center', height: 30, position: "relative", bottom: 0 }}>
                                                <Text fontSize="xxs" color={COLOR.white}>Trainer Name</Text>
                                            </ImageBackground>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </Box>
                                <Box w="30%">
                                    <TouchableOpacity onPress={() => { navigation.navigate("AthletesDetailsScreen") }}>
                                        <ImageBackground source={Images.Service3} style={{ justifyContent: "flex-end", borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 100 }}>
                                            <ImageBackground source={Images.ImageFooter} style={{ justifyContent: "center", alignItems: 'center', height: 30, position: "relative", bottom: 0 }}>
                                                <Text fontSize="xxs" color={COLOR.white}>Trainer Name</Text>
                                            </ImageBackground>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </Box>
                            </HStack>
                        </Box>
                        :
                        <Box>
                            {/* <Center>
                                <Text underline fontSize="xs" color={COLOR.fontColor}>BRANDING  MARKETING  PR  LEGAL  CLEANING</Text>
                            </Center> */}
                            <VStack py={10}>
                                <HStack justifyContent="space-around" px={5}  >
                                    <Box style={Styles.brandBox} >
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
                                            <Image source={Images.Brand} borderRadius={5}></Image>
                                            <Text fontSize="xxs" py={2} color={COLOR.fontColor}>Service Name</Text>
                                            <Text fontSize="sm">come work with us &improve yourself.</Text>
                                            <HStack space={2} py={2}>
                                                <Avatar size="xs" source={Images.Avatar}></Avatar>
                                                <VStack>
                                                    <Text fontSize="xxs">Service Provider Name</Text>
                                                    <Text fontSize="xxs">Level 6</Text>
                                                </VStack>
                                            </HStack>
                                        </TouchableOpacity>
                                    </Box>
                                    <Box style={Styles.brandBox}>
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
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
                                        </TouchableOpacity>
                                    </Box>
                                </HStack>
                                <HStack justifyContent="space-around" px={5} pt={5} >
                                    <Box style={Styles.brandBox} >
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
                                            <Image source={Images.Brand} borderRadius={5}></Image>
                                            <Text fontSize="xxs" py={2} color={COLOR.fontColor}>Service Name</Text>
                                            <Text fontSize="sm">come work with us &improve yourself.</Text>
                                            <HStack space={2} py={2}>
                                                <Avatar size="xs" source={Images.Avatar}></Avatar>
                                                <VStack>
                                                    <Text fontSize="xxs">Service Provider Name</Text>
                                                    <Text fontSize="xxs">Level 6</Text>
                                                </VStack>
                                            </HStack>
                                        </TouchableOpacity>
                                    </Box>
                                    <Box style={Styles.brandBox}>
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
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
                                        </TouchableOpacity>
                                    </Box>
                                </HStack>
                                <HStack justifyContent="space-around" px={5} pt={5} >
                                    <Box style={Styles.brandBox} >
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
                                            <Image source={Images.Brand} borderRadius={5}></Image>
                                            <Text fontSize="xxs" py={2} color={COLOR.fontColor}>Service Name</Text>
                                            <Text fontSize="sm">come work with us &improve yourself.</Text>
                                            <HStack space={2} py={2}>
                                                <Avatar size="xs" source={Images.Avatar}></Avatar>
                                                <VStack>
                                                    <Text fontSize="xxs">Service Provider Name</Text>
                                                    <Text fontSize="xxs">Level 6</Text>
                                                </VStack>
                                            </HStack>
                                        </TouchableOpacity>
                                    </Box>
                                    <Box style={Styles.brandBox}>
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
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
                                        </TouchableOpacity>
                                    </Box>
                                </HStack>
                                <HStack justifyContent="center" pt={3}>
                                    <Button variant="ghost" size="xs">
                                        <HStack space={1} display="flex" justifyContent="center" alignItems="center">
                                            <Icon as={MaterialIcons} name="loop" size="xs" />
                                            <Text fontSize="xs">LOAD MORE</Text>
                                        </HStack>
                                    </Button>
                                </HStack>
                            </VStack>
                        </Box>
                }
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

export default TrainersFeed;