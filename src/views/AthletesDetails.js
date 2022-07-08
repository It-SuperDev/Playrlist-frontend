import React from "react";
import { Shadow } from 'react-native-shadow-2';
import { Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { Images, COLOR, Headers, Styles } from "../constants";
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Image, Box, Stack, Icon, View, HStack, Button, VStack, Text, IconButton, Avatar } from "native-base";

import Footer from '../components/footer'

const GoogleLogin = ({ navigation }) => {

    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} >
                <ImageBackground source={Images.AthletesImg} resizeMode="cover" style={{ justifyContent: "flex-end", height: 250 }}>
                    <View zIndex={22} w={7} h={7} position="absolute" left={8} top={8} flexDirection="row"  >
                        <Button borderRadius={15} size="xs" variant="ghost" h={30} w={30} bg={COLOR.white} onPress={() => navigation.navigate("DashboardScreen")} color={COLOR.white} space={1}>
                            <FontAwesome5 name="long-arrow-alt-left" />
                        </Button>
                    </View>
                </ImageBackground>
                <Box bg={COLOR.white} top={-30} borderRadius={20}>
                    <HStack justifyContent="center" alignItems="center">
                        <Image h={100} w={100} source={Images.Avatar1} top={-50}></Image>
                    </HStack>
                    <VStack bg={COLOR.white} alignItems="center" top={-50} px={5} w="100%" >
                        <Text fontSize="md">USER NAME HERE</Text>
                        <Text fontSize="xs" py={2} textAlign="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                        </Text >
                        <Button variant="ghost" borderRadius={15} h="30px" bg={COLOR.base} onPress={() => navigation.navigate("PlansAthletesScreen")} colorScheme="orange">
                            <Text color={COLOR.white} fontSize="xs">SUBSCRIBE NOW</Text>
                        </Button>
                        <Text fontSize="md" pt={10}>SERVICES OFFERED</Text>
                        <VStack pt={10} w="100%">
                            <HStack justifyContent="space-between">
                                <Box style={Styles.brandBox} >
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
                                </Box>
                                <Box style={Styles.brandBox}>
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
                                </Box>
                            </HStack>
                            <HStack justifyContent="space-between" pt={5} >
                                <Box style={Styles.brandBox} >
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
                                </Box>
                                <Box style={Styles.brandBox}>
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
                    </VStack>
                </Box>
                <Footer />
            </ScrollView >
        </Box >
    );
};

export default GoogleLogin;