import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import Carousel from 'react-native-snap-carousel'
import { Shadow } from 'react-native-shadow-2';
import { MaterialIcons, AntDesign, EvilIcons, Entypo } from "@expo/vector-icons"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Dimensions, StatusBar, Animated, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { Image, Input, Icon, Text, Box, Stack, Heading, HStack, AspectRatio, Button, IconButton, useToast, Center, useColorModeValue, Link, View, VStack, Avatar, Menu, Badge } from "native-base";

import Footer from '../components/footer'
import { useApi } from '../redux/services'
import { COLOR, Images, Styles } from "../constants";

const Dashboard = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()
    const goPage = (link) => {
        navigation.navigate(link)
    }
    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.bg2}>
            <Box style={styles.header}>
                <HStack display="flex" justifyContent="space-between" px="5%" pt={5}>
                    <Stack>
                        <Image source={Images.PlayHeader}></Image>
                    </Stack>
                    <HStack justifyContent="center" alignItems="center" display="flex" space={2}>
                        <Button colorScheme="black" borderRadius={15} size="xs" variant="ghost" h={35} bg={COLOR.white} color={COLOR.black} space={1} onPress={() => navigation.navigate("SavedServicesScreen")}>
                            <HStack alignItems="center" display="flex">
                                <Text color={COLOR.black} fontSize="xs" mx={2}>Needs</Text>
                                <Icon as={<AntDesign name="hearto" />} size='xs' mr={3} color={COLOR.gold} />
                                <Center
                                    bg={COLOR.gold}
                                    _text={{
                                        color: "warmGray.50",
                                        fontSize: "xs",
                                    }}
                                    position="absolute"
                                    top={-15} right={-10} p={1} minW={6} minH={3} borderRadius={50}>
                                    12
                                </Center>
                            </HStack>
                        </Button>
                    </HStack>
                </HStack>
            </Box>

            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} bg="white">
                <Box>
                    <HStack display="flex" space={3} pl={1} pr={2} justifyContent="space-around" h="40px" alignItems="center">
                        <TouchableOpacity onPress={() => { navigation.navigate("ServicesScreen") }}>
                            <HStack w={250} borderColor="gray.200" size="xs" borderWidth={2} alignItems='center' h="100%" borderRadius={50} bg={COLOR.grey2} >
                                <Icon as={<MaterialIcons name="search" />} size={5} ml="2" color="muted.400" />
                                <Text color='gray.400' fontSize='13px'>Search...</Text>
                            </HStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                            <Icon as={<EvilIcons name="user" />} size='md' />
                        </TouchableOpacity>
                        <Menu trigger={triggerProps => {
                            return (
                                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <AntDesign style={{ fontSize: 25 }} name="ellipsis1" />
                                </Pressable>
                            )
                        }}>
                            <Menu.Item h={1} justifyContent="center" onPress={() => navigation.navigate("AboutScreen")}><Text fontSize="xxs">About Us</Text></Menu.Item>
                            <Menu.Item h={1} justifyContent="center" onPress={() => { navigation.navigate("SignInScreen") }}><Text fontSize="xxs">Log Out</Text></Menu.Item>
                        </Menu>
                    </HStack>
                </Box>

                <Box pl={2} pt={3} >
                    <Text color={COLOR.black} fontSize="xl" bold py={1}>New Services</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <HStack space={3} pl={1} pr={2} py={2}>
                            {
                                [1, 2, 3, 4, 5, 6, 7].map((item) => (
                                    <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 2]} key={item}>
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }} key={item}>
                                            <Box alignItems="center" w={150} >
                                                <Box maxW="80" rounded="lg" overflow="hidden" borderColor={COLOR.border} bg={COLOR.white} borderWidth={1}  >
                                                    <Box>
                                                        <AspectRatio w="100%" >
                                                            <Image source={{
                                                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                            }} alt="image" />
                                                        </AspectRatio>
                                                        <Center
                                                            bg={COLOR.success}
                                                            _text={{
                                                                color: "warmGray.50",
                                                                fontSize: "xs",
                                                                fontWeight: 700,
                                                            }}
                                                            position="absolute"
                                                            top={1} right={0} px={3} py={1} rounded='lg' borderTopRightRadius={0} borderBottomRightRadius={0}>
                                                            New
                                                        </Center>
                                                        <Center bg={COLOR.base} _text={{
                                                            color: "warmGray.50",
                                                            fontWeight: 700,
                                                            fontSize: "xs"
                                                        }} position="absolute" bottom={0} px={3} py={1.5}>
                                                            Brand
                                                        </Center>
                                                    </Box>
                                                    <Stack p="4" space={3} >
                                                        <Stack space={2} py={3}>
                                                            <Heading size="xs" ml={-1}>
                                                                Tranier Name
                                                            </Heading>
                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </TouchableOpacity>
                                    </Shadow>
                                ))
                            }

                        </HStack>
                    </ScrollView>
                </Box>

                <Box pl={2} pt={3} >
                    <Text color={COLOR.black} fontSize="xl" bold py={1}>Popular Services</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <HStack space={3} pl={1} pr={2} py={2}>
                            {
                                [1, 2, 3, 4, 5, 6, 7].map((item) => (
                                    <Shadow startColor={COLOR.bg3} finalColor={COLOR.bg} distance={5} radius={6} offset={[0, 2]} key={item}>
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }} key={item}>
                                            <Box alignItems="center" w={150} >
                                                <Box maxW="80" rounded="lg" overflow="hidden" borderColor={COLOR.border} bg={COLOR.white} borderWidth={1}  >
                                                    <Box>
                                                        <AspectRatio w="100%" >
                                                            <Image source={{
                                                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                                            }} alt="image" />
                                                        </AspectRatio>
                                                        <Center bg={COLOR.base} _text={{
                                                            color: "warmGray.50",
                                                            fontWeight: 700,
                                                            fontSize: "xs"
                                                        }} position="absolute" bottom={0} px={3} py={1.5}>
                                                            Brand
                                                        </Center>
                                                    </Box>
                                                    <Stack p="4" space={3} >
                                                        <Stack space={2} py={3}>
                                                            <Heading size="xs" ml={-1}>
                                                                Tranier Name
                                                            </Heading>
                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </TouchableOpacity>
                                    </Shadow>
                                ))
                            }

                        </HStack>
                    </ScrollView>
                </Box>

                <Box pt={3}>
                    <HStack justifyContent='space-between' alignItems='center' px={2} py={1}>
                        <Text color={COLOR.black} fontSize="xl" bold>Services</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("ServicesScreen") }}>
                            <HStack>
                                <Text color={COLOR.base} fontSize="sm" bold>See All</Text>
                            </HStack>
                        </TouchableOpacity>
                    </HStack>
                    <Box px={4}>
                        {
                            [0, 11, 12].map((item) => (
                                <HStack justifyContent="space-between" pt={5} key={item}>
                                    <Box width='50%' pr={2}>
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
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
                                                    </HStack>
                                                </Box>
                                            </VStack>
                                        </TouchableOpacity>
                                    </Box>
                                    <Box width='50%' pl={2}>
                                        <TouchableOpacity onPress={() => { navigation.navigate("BrandsDetailsScreen") }}>
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
                                                    </HStack>
                                                </Box>
                                            </VStack>
                                        </TouchableOpacity>
                                    </Box>
                                </HStack>
                            ))
                        }
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