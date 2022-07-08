import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'
import { Images, COLOR, Headers } from "../constants";
import { Image, Box, Stack, Icon, View, HStack, Button, VStack, Text } from "native-base";

const GoogleLogin = ({ navigation }) => {

    return (
        <Box flex={1} justifyContent="space-around" bg={COLOR.white}>
            <View alignItems='flex-start' zIndex={22} w={7} h={7} position="absolute" left={8} top={12} flexDirection="row" alignItems="center" >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon color={COLOR.base} size="sm" as={<Entypo name="chevron-left" />} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ justifyContent: "space-around" }} showsVerticalScrollIndicator={false} >
                <Stack mt={150}>
                    <Image source={Images.GoogleLogin} resizeMode="contain" alignSelf='center' />
                </Stack>
                <HStack mt={10} px={20}>
                    <Button w="100%" variant="ghost" borderRadius={20} h="40px" bg={COLOR.base} colorScheme="orange">
                        <Text color={COLOR.white} fontSize="xs">SIGN IN</Text>
                    </Button>
                </HStack>
                <HStack mt={5} px={20}>
                    <Button w="100%" variant="ghost" borderRadius={20} h="40px" bg={COLOR.white} onPress={() => navigation.goBack()}>
                        <Text color={COLOR.black} fontSize="xs">GO BACK</Text>
                    </Button>
                </HStack>
            </ScrollView>
        </Box >
    );
};

export default GoogleLogin;