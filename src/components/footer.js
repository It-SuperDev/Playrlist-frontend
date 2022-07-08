import React from "react";
import { COLOR } from "../constants";
import { Text, Box, HStack, Icon, VStack, View } from "native-base";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons"

const Footer = ({ navigation }) => {
    return (
        <Box h={50} w="100%" bg={COLOR.black} justifyContent="center" mt={5}>
            <HStack display="flex" justifyContent="space-around" alignItems="center" px="5%">
                <VStack alignItems="flex-start" justifyContent="center">
                    <Text fontSize="xxs" color={COLOR.white}>211 N. Ervay St.</Text>
                    <Text fontSize="xxs" color={COLOR.white}>Dallas, Texas 75201</Text>
                </VStack>
                <HStack alignItems="center" justifyContent="center">
                    {/* <Icon as={FontAwesome5} name='trademark' size={3} color='white' w={4} /> */}
                    <Icon as={FontAwesome} name='registered' size={3} color='white' ml={1} />
                    <Text fontSize="xxs" bold color={COLOR.white}> PlayrList</Text>
                    <Icon as={FontAwesome} name='copyright' size={3} color='white' ml={1} />
                    <Text fontSize="xxs" bold color={COLOR.white}> 2022</Text>
                </HStack>
                <VStack alignItems="flex-end" justifyContent="center">
                    <Text fontSize="xxs" color={COLOR.white}>Email Address</Text>
                    <Text fontSize="xxs" color={COLOR.white}>contact@playrlist.com</Text>
                </VStack>
            </HStack>
        </Box>
    );
};


export default Footer;