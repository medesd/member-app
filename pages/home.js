import React from "react";
import {Box, Divider, ScrollView, Icon, Fab, Heading, HStack, View, VStack, Button} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
    return <View style={{height: "100%", backgroundColor: "#000"}}>
        <View style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "left"}}>
            <Button
                _text={{
                    color: "#fff"
                }}
                leftIcon={<svg style={{marginLeft: 20}}
                               xmlns="http://www.w3.org/2000/svg"
                               width="9"
                               height="16"
                               fill="none"
                               viewBox="0 0 9 16"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M8.318.29a.993.993 0 010 1.406l-5.92 5.92 5.92 5.919a.993.993 0 11-1.405 1.405L.291 8.318a.993.993 0 010-1.405L6.913.291a.993.993 0 011.405 0z"
                        clipRule="evenodd"
                    />
                </svg>}
                variant="unstyled"
            >Back</Button>
        </View>


        <View style={{backgroundColor: "#000", height: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <Heading size="2xl" textAlign="center"
                     style={{
                         color: "#fff",
                         paddingBottom: 10,
                         marginBottom: 25,
                         borderBottom: '1px solid #4e4e4e'
                     }}>My workout week</Heading>
            <ScrollView style={{width: "100%"}}>

                <Box width="90%" m={3} p="5"
                     rounded="xl"
                     style={{backgroundColor: "#262626", borderRadius: 25, display: 'flex', justifyItems: 'center'}}>
                    <VStack space={3} divider={<Divider/>} w="90%">
                        <HStack style={{alignItems: "center"}} justifyContent="space-between">
                            <Box>
                                <Heading style={{color: "#fff", margin: 3, fontSize: 15, fontWeight: "none"}}>20x Jump
                                    rope</Heading>
                                <Heading
                                    style={{
                                        margin: 3,
                                        fontSize: 12,
                                        fontWeight: "none",
                                        color: "#8a8a8a"
                                    }}>02:00</Heading>
                            </Box>
                            <Box>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        fill="#7368FF"
                                        d="M5.685 11.2c-.24 0-.46-.08-.64-.26l-3.98-3.98a.894.894 0 010-1.28c.36-.36.92-.36 1.28 0l3.36 3.34 7.98-7.96c.36-.36.92-.36 1.28 0s.36.92 0 1.28l-8.62 8.6c-.2.18-.42.26-.66.26z"
                                    />
                                </svg>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>
                <Box width="90%" m={3} p="5"
                     rounded="xl"
                     style={{backgroundColor: "#262626", borderRadius: 25}}>
                    <VStack space={3} divider={<Divider/>} w="90%">
                        <HStack style={{alignItems: "center"}} justifyContent="space-between">
                            <Box>
                                <Heading style={{color: "#fff", margin: 3, fontSize: 15, fontWeight: "none"}}>20x Jump
                                    rope</Heading>
                                <Heading style={{
                                    margin: 3,
                                    fontSize: 12,
                                    fontWeight: "none",
                                    color: "#8a8a8a"
                                }}>02:00</Heading>
                            </Box>
                            <Box>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        fill="#7368FF"
                                        d="M5.685 11.2c-.24 0-.46-.08-.64-.26l-3.98-3.98a.894.894 0 010-1.28c.36-.36.92-.36 1.28 0l3.36 3.34 7.98-7.96c.36-.36.92-.36 1.28 0s.36.92 0 1.28l-8.62 8.6c-.2.18-.42.26-.66.26z"
                                    />
                                </svg>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>

                <Box width="90%" m={3} p="5"
                     rounded="xl"
                     style={{backgroundColor: "#262626", borderRadius: 25, display: 'flex', justifyItems: 'center'}}>
                    <VStack space={3} divider={<Divider/>} w="90%">
                        <HStack style={{alignItems: "center"}} justifyContent="space-between">
                            <Box>
                                <Heading style={{color: "#fff", margin: 3, fontSize: 15, fontWeight: "none"}}>20x Squat
                                    thrust
                                    split
                                    jumps</Heading>
                                <Heading
                                    style={{
                                        margin: 3,
                                        fontSize: 12,
                                        fontWeight: "none",
                                        color: "#8a8a8a"
                                    }}>02:00</Heading>
                            </Box>
                            <Box>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 13 14"
                                >
                                    <path
                                        fill="#FF6C59"
                                        d="M0 5.667v2.666c0 2.977 0 4.466.971 5.049.971.582 2.284-.118 4.911-1.52l2.5-1.333C11.294 8.976 12.75 8.2 12.75 7c0-1.2-1.456-1.976-4.368-3.53l-2.5-1.333C3.255.737 1.942.036.971.618 0 1.201 0 2.69 0 5.667z"
                                    />
                                </svg>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>
                <Box width="90%" m={3} p="5"
                     rounded="xl"
                     style={{backgroundColor: "#262626", borderRadius: 25, display: 'flex', justifyItems: 'center'}}>
                    <VStack space={3} divider={<Divider/>} w="90%">
                        <HStack style={{alignItems: "center"}} justifyContent="space-between">
                            <Box>
                                <Heading style={{color: "#fff", margin: 3, fontSize: 15, fontWeight: "none"}}>20x Squat
                                    thrust
                                    split
                                    jumps</Heading>
                                <Heading
                                    style={{
                                        margin: 3,
                                        fontSize: 12,
                                        fontWeight: "none",
                                        color: "#8a8a8a"
                                    }}>02:00</Heading>
                            </Box>
                            <Box>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 13 14"
                                >
                                    <path
                                        fill="#FF6C59"
                                        d="M0 5.667v2.666c0 2.977 0 4.466.971 5.049.971.582 2.284-.118 4.911-1.52l2.5-1.333C11.294 8.976 12.75 8.2 12.75 7c0-1.2-1.456-1.976-4.368-3.53l-2.5-1.333C3.255.737 1.942.036.971.618 0 1.201 0 2.69 0 5.667z"
                                    />
                                </svg>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>
            </ScrollView>

        </View>
    </View>
}

export default Home;
