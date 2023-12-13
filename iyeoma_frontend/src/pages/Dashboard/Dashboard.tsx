import { Box, Button, Flex, Heading, Icon, Image, ProgressLabel, Text } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { LuRefreshCcw } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { Progress } from "@chakra-ui/react";
import add from "../../assets/Icons/fi-rr-user-add.svg";
import bgPattern from "../../assets/Images/bg-pattern-8efb1209.png";
import save from "../../assets/Icons/fi-rr-credit-card.svg";
import transactions from "../../constants/transactionData";
import hubData from "../../constants/infoHubData";
import profileBg from "../../assets/Images/bg-profile.png";
import loan from "../../assets/Icons/fi-rr-hand-holding-heart.svg";

interface TransactionDataProps {
    id: number;
    date: string;
    description: string;
    amount: number;
}

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Flex
            bg={"#f2f6ff"}
            flexDir={"row"}
            w={"100vw"}
        >
            {/* <Box> */}
                <Sidebar />
            {/* </Box> */}
            <Box
                w={"85.9%"}
                pt={"40px"}
                px={"45px"}
                fontFamily={'Nunito'}
                boxShadow={"lg"}
                ml={"14.1%"}
            >
                <Flex
                    flexDir={"row"}
                    justify={"space-between"}
                    align={"center"}
                    mb={"25px"}
                >
                    <Text color={"#000000"} fontSize={"30px"} fontWeight={800}>
                        Sophia,
                    </Text>
                    <Box
                        w={"48px"}
                        h={"48px"}
                        bg={`url("https://storage.googleapis.com/piggybankservice.appspot.com/agent_pics/logo957a3be06d.jpeg")`}
                        bgSize={"contain"}
                        borderRadius={"50%"}
                    />
                </Flex>
                <Flex
                    flexDir={"row"}
                    justify={"space-between"}
                    align={"center"}
                    mb={"10px"}
                >
                    <Icon
                        as={LuRefreshCcw}
                        width={"36px"}
                        height={"23px"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/dashboard'))}
                    />
                    <Box
                        as={Button}
                        w={"150px"}
                        h={"40px"}
                        bg={"#390048"}
                        color={"#ffffff"}
                        _hover={{ bg: "#55006D" }}
                    >
                        <Icon
                            as={Image}
                            fill={"#ffffff"}
                            mr={"10px"}
                            w={"17px"}
                            h={"17px"}
                            src={add}
                        />
                        Add Profile
                    </Box>
                </Flex>
                <Flex
                    flexDir={"row"}
                    gap={"50px"}
                    // justify={"space-between"}
                    align={"center"}
                    mb={"20px"}
                >
                    <Box
                        w={"272px"}
                        h={"150px"}
                        display={"flex"}
                        flexDir={"row"}
                        p={"30px"}
                        bgColor={"#00AAB6"}
                        borderRadius={"10px"}
                        bgImage={bgPattern}
                        alignItems={"center"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/savings'))}
                        _hover={{ boxShadow: "2px 2px 10px #414141", transition: "0.5s ease-in-out"/*-2px -2px 10px #00afbb"*/ }}
                    // justifyContent={"center"}
                    >
                        <Icon
                            as={Image}
                            src={save}
                            w={"30px"}
                            h={"30px"}
                            mr={"20px"}
                        />
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                        // alignItems={"center"}
                        >
                            <Text color={"#E2E8F0"} fontSize={"14px"} fontWeight={700}>
                                Total Savings
                            </Text>
                            <Text color={"#ffffff"} fontSize={"24px"} fontWeight={700}>
                                ₦ 50,000.40
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        w={"272px"}
                        h={"150px"}
                        display={"flex"}
                        flexDir={"row"}
                        p={"30px"}
                        bgColor={"#EFB6FF"}
                        // bgRepeat={"no-repeat"}
                        borderRadius={"10px"}
                        bgImage={bgPattern}
                        // bgSize={"contain"}
                        alignItems={"center"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/savings'))}
                        _hover={{ boxShadow: "2px 2px 10px #414141", transition: "0.5s ease-in-out"/*-2px -2px 10px #00afbb"*/ }}
                        justifyContent={"center"}
                    >
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                        >
                            {/* <Text color={"#E2E8F0"} fontSize={"14px"} fontWeight={700}>
                                Total Savings
                            </Text> */}
                            <Text color={"#000000"} fontSize={"24px"} fontWeight={700}>
                               Abba
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        w={"272px"}
                        h={"150px"}
                        display={"flex"}
                        flexDir={"row"}
                        p={"30px"}
                        bgColor={"#EFB6FF"}
                        borderRadius={"10px"}
                        bgImage={bgPattern}
                        // bgSize={"contain"}
                        alignItems={"center"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/savings'))}
                        _hover={{ boxShadow: "2px 2px 10px #414141", transition: "0.5s ease-in-out"/*-2px -2px 10px #00afbb"*/ }}
                        justifyContent={"center"}
                    >
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                        >
                            {/* <Text color={"#E2E8F0"} fontSize={"14px"} fontWeight={700}>
                                Total Savings
                            </Text> */}
                            <Text color={"#000000"} fontSize={"24px"} fontWeight={700}>
                              Sope
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        w={"272px"}
                        h={"150px"}
                        display={"flex"}
                        flexDir={"row"}
                        p={"30px"}
                        bgColor={"#EFB6FF"}
                        borderRadius={"10px"}
                        bgImage={bgPattern}
                        // bgSize={"contain"}
                        alignItems={"center"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/savings'))}
                        _hover={{ boxShadow: "2px 2px 10px #414141", transition: "0.5s ease-in-out"/*-2px -2px 10px #00afbb"*/ }}
                        justifyContent={"center"}
                    >
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                        >
                            {/* <Text color={"#E2E8F0"} fontSize={"14px"} fontWeight={700}>
                                Total Savings
                            </Text> */}
                            <Text color={"#000000"} fontSize={"24px"} fontWeight={700}>
                                Baby 👶🏾
                            </Text>
                        </Box>
                    </Box>
                </Flex>
                <Box
                    mt={"30px"}
                    w={"100%"}
                    h={"90px"}
                    // border={"1px dashed #CF24FF"}
                    borderRadius={"5px"}
                    p={"15px"}
                >
                    <Text mb={"8px"} fontSize={"17px"} fontWeight={600}>
                        Saving Progress
                    </Text>
                    <Progress borderRadius={"8px"} colorScheme={"purple"} bg={"#E791FF"} value={54} size={"lg"}> <ProgressLabel fontSize={"13px"}>54%</ProgressLabel></Progress>
                </Box>
                <Flex
                    w={"100%"}
                    h={"200px"}
                    bg={"#ffffff"}
                    borderRadius={"5px"}
                    mt={"30px"}
                    boxShadow={"10px #414141"}
                    p={"15px"}
                    flexDir={"column"}
                    mb={"30px"}
                >
                    <Text mb={"8px"} fontSize={"20px"} fontWeight={600}>
                        Recent Activities
                    </Text>
                    {transactions && transactions.map((transaction: TransactionDataProps) => (
                        <Flex
                            key={transaction.id}
                            flexDirection={"row"}
                            align={"center"}
                            justifyContent={"space-between"}
                            h={"52px"}
                            borderBottom={"0.5px solid #C3C3C3"}
                            p={"4px"}
                            px={"15ox"}
                            // borderRadius={6}
                            mb={"8px"}
                        >
                            <Text>{transaction.date}</Text>
                            <Text>{transaction.description}</Text>
                            <Text>{transaction.amount}</Text>
                        </Flex>
                    ))}
                </Flex>
                <Flex
                    flexDir={"row"}
                    gap={"50px"}
                    // justify={"space-between"}
                    align={"center"}
                    mb={"20px"}
                >
                    <Box
                        w={"272px"}
                        h={"150px"}
                        display={"flex"}
                        flexDir={"row"}
                        p={"30px"}
                        bgColor={"#00AAB6"}
                        borderRadius={"10px"}
                        bgImage={bgPattern}
                        alignItems={"center"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/savings'))}
                        _hover={{ boxShadow: "2px 2px 10px #414141", transition: "0.5s ease-in-out"/*-2px -2px 10px #00afbb"*/ }}
                    >
                        <Icon
                            as={Image}
                            src={loan}
                            w={"30px"}
                            h={"30px"}
                            mr={"20px"}
                        />
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                        >
                            <Text color={"#ffffff"} fontSize={"24px"} fontWeight={700}>
                                Loans
                            </Text>
                            <Text color={"#E2E8F0"} fontSize={"14px"} fontWeight={700}>
                                Take a Loan from us or one of our partners
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        w={"272px"}
                        h={"150px"}
                        display={"flex"}
                        flexDir={"row"}
                        p={"30px"}
                        bgColor={"#00AAB6"}
                        borderRadius={"10px"}
                        bgImage={bgPattern}
                        alignItems={"center"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/savings'))}
                        _hover={{ boxShadow: "2px 2px 10px #414141", transition: "0.5s ease-in-out"/*-2px -2px 10px #00afbb"*/ }}
                    >
                        <Icon
                            as={Image}
                            src={save}
                            w={"30px"}
                            h={"30px"}
                            mr={"20px"}
                        />
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                        >
                            <Text color={"#E2E8F0"} fontSize={"14px"} fontWeight={700}>
                                Total Savings
                            </Text>
                            <Text color={"#ffffff"} fontSize={"24px"} fontWeight={700}>
                                ₦ 50,000.40
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        w={"272px"}
                        h={"150px"}
                        display={"flex"}
                        flexDir={"row"}
                        p={"30px"}
                        bgColor={"#00AAB6"}
                        borderRadius={"10px"}
                        bgImage={bgPattern}
                        alignItems={"center"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/savings'))}
                        _hover={{ boxShadow: "2px 2px 10px #414141", transition: "0.5s ease-in-out"/*-2px -2px 10px #00afbb"*/ }}
                    >
                        <Icon
                            as={Image}
                            src={save}
                            w={"30px"}
                            h={"30px"}
                            mr={"20px"}
                        />
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                        >
                            <Text color={"#E2E8F0"} fontSize={"14px"} fontWeight={700}>
                                Total Savings
                            </Text>
                            <Text color={"#ffffff"} fontSize={"24px"} fontWeight={700}>
                                ₦ 50,000.40
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        w={"272px"}
                        h={"150px"}
                        display={"flex"}
                        flexDir={"row"}
                        p={"30px"}
                        bgColor={"#00AAB6"}
                        borderRadius={"10px"}
                        bgImage={bgPattern}
                        alignItems={"center"}
                        cursor={"pointer"}
                        onClick={() => (navigate('/savings'))}
                        _hover={{ boxShadow: "2px 2px 10px #414141", transition: "0.5s ease-in-out"/*-2px -2px 10px #00afbb"*/ }}
                    >
                        <Icon
                            as={Image}
                            src={save}
                            w={"30px"}
                            h={"30px"}
                            mr={"20px"}
                        />
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                        >
                            <Text color={"#E2E8F0"} fontSize={"14px"} fontWeight={700}>
                                Total Savings
                            </Text>
                            <Text color={"#ffffff"} fontSize={"24px"} fontWeight={700}>
                                ₦ 50,000.40
                            </Text>
                        </Box>
                    </Box>
                </Flex>
                <Flex
                    w={"80%"}
                    h={"250px"}
                    bg={"#ffffff"}
                    borderRadius={"5px"}
                    mt={"30px"}
                    boxShadow={"10px #414141"}
                    p={"20px"}
                    flexDir={"column"}
                    // align={"center"}
                    mb={"20px"}
                    mx={"auto"}
                >
                    <Heading
                        fontSize={"24px"}
                        fontFamily={"Nunito"}
                        mb={"40px"}
                        textAlign={"center"}
                    >
                        Info Hub Latest
                    </Heading>
                    {hubData && hubData.map((hubData) => (
                        <Flex
                            key={hubData.id}
                            flexDirection={"row"}
                            align={"center"}
                            textAlign={"justify"}
                            justifyContent={"space-between"}
                            h={"52px"}
                            borderBottom={"0.5px solid #C3C3C3"}
                            p={"4px"}
                            px={"15ox"}
                            // borderRadius={6}
                            mb={"8px"}
                        >
                            <Text>{hubData.name}</Text>
                            <Text>{hubData.description}</Text>
                            <Link style={{cursor: "pointer"}}>See More</Link>
                        </Flex>
                    ))}
                </Flex>
            </Box>
        </Flex>
    )
}

export default Dashboard;