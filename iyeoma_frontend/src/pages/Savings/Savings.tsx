import { Box, Button, Flex, FormControl, FormLabel, Heading, Icon, Image, Input, Progress, ProgressLabel, Select, Text } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
// import { LuRefreshCcw } from "react-icons/lu";
// import { Link, useNavigate } from "react-router-dom";
// import { Progress } from "@chakra-ui/react";
// import add from "../../assets/Icons/fi-rr-user-add.svg";
// import bgPattern from "../../assets/Images/bg-pattern-8efb1209.png";
// import save from "../../assets/Icons/fi-rr-credit-card.svg";
import transactions from "../../constants/transactionData";
// import hubData from "../../constants/infoHubData";
// import profileBg from "../../assets/Images/bg-profile.png";
// import loan from "../../assets/Icons/fi-rr-hand-holding-heart.svg";
import Linechart from "../../components/Linechart";
import { useState } from "react";

interface TransactionDataProps {
    id: number;
    date: string;
    description: string;
    amount: number;
}
interface SavingsTransaction {
    id: number;
    amount: number;
    startDate: string;
    endDate: string;
    source: string;
}

const savingsdata: SavingsTransaction[] = [
    {
        id: 0,
        amount: 160000.0,
        startDate: "2023-01-01",
        endDate: "2023-9-26",
        source: "Chimoney Wallet"
    },
    {
        id: 1,
        amount: 250000.0,
        startDate: "2023-03-01",
        endDate: "2023-06-01",
        source: "Debit Card"
    },
    {
        id: 2,
        amount: 50000.0,
        startDate: "2021-03-01",
        endDate: "2021-11-01",
        source: "Chimoney Wallet"
    },
];

const Savings = () => {
    // const navigate = useNavigate();
    const [amount, setAmount] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [source, setSource] = useState("");
    const [savingsData, setSavingsData] = useState<SavingsTransaction[]>(savingsdata);

    const handleSubmit = () => {
        // console.log(transactions[transactions.length-1])
        const lastId = savingsdata[savingsdata.length - 1].id;
        const newTransaction = {
            id: lastId + 1,
            amount: Number(amount),
            startDate: startDate,
            endDate: endDate,
            source: source,
        }
        // savingsdata.push(newTransaction);
        setSavingsData((prevData) => [...prevData, newTransaction].reverse());
        savingsdata.push(newTransaction);
        // loadTable();
        console.log(savingsData)
        setAmount('');
        setStartDate('');
        setEndDate('');
        setSource('');
    }

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
                w={"100%"}
                pt={"40px"}
                px={"45px"}
                // py={"45px"}
                fontFamily={'Nunito'}
                boxShadow={"lg"}
                ml={"14.1%"}
                overflowY={"auto"}
            >
                <Flex
                    flexDir={"row"}
                    justify={"space-between"}
                    align={"center"}
                    mb={"45px"}
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
                    mx={"65px"}
                >
                    <Box
                        w={"450px"}
                        h={"450px"}
                    >
                        <Linechart />
                    </Box>
                    <Box
                        w={"500px"}
                        h={"450px"}
                        bg={"#FFFFFF"}
                        borderRadius={"10px"}
                        border={"1px solid #390048"}
                        // alignSelf={"center"}
                        // shadow={"outline"}
                        // px={35}
                        px={"35px"}
                        py={"20px"}
                        overflowY="auto"
                        fontWeight={700}
                        lineHeight={"24px"}
                    >
                        <Text
                            textAlign={"center"}
                            fontSize={"24px"}
                            fontWeight={700}
                            color={"#26364e"}
                            mb={"20px"}
                        // lineHeight={"20px"}
                        >
                            Set your saving goal
                        </Text>
                        <form color="#000000">
                            <FormControl>
                                <FormLabel fontSize={"14px"} color={"#4A5568"} mb={"6px"}>Set Goal Amount</FormLabel>
                                <Input
                                    type="number"
                                    placeholder="50,000"
                                    value={amount}
                                    required
                                    borderRadius={"5px"}
                                    autoComplete="name"
                                    bg={"#EDF2F7"}
                                    p={"16px"}
                                    border={"0px solid #E2E8F0"}
                                    w={"430px"}
                                    mb={"8px"}
                                    color={"#1A202C"}
                                    onChange={(e) =>
                                        (setAmount(e.target.value))
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={"14px"} color={"#4A5568"} mb={"6px"}>Set Start Date</FormLabel>
                                <Input
                                    type="date"
                                    placeholder="Select Data and Time"
                                    value={startDate}
                                    required
                                    borderRadius={"5px"}
                                    autoComplete="name"
                                    bg={"#EDF2F7"}
                                    p={"16px"}
                                    border={"0px solid #E2E8F0"}
                                    w={"430px"}
                                    color={"#1A202C"}
                                    mb={"8px"}
                                    onChange={(e) => (setStartDate(e.target.value))}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={"14px"} color={"#4A5568"} mb={"6px"}>Set End Date</FormLabel>
                                <Input
                                    type="date"
                                    placeholder="Select Data and Time"
                                    value={endDate}
                                    required
                                    borderRadius={"5px"}
                                    autoComplete="name"
                                    bg={"#EDF2F7"}
                                    p={"16px"}
                                    border={"0px solid #E2E8F0"}
                                    w={"430px"}
                                    color={"#1A202C"}
                                    mb={"8px"}
                                    onChange={(e) => (setEndDate(e.target.value))}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={"14px"} color={"#4A5568"} mb={"6px"}>Select Source</FormLabel>
                                <Select onChange={(e) => (setSource(e.target.value))} mb={"15px"} value={source} placeholder='Select Source'>
                                    <option >Chimoney Wallet</option>
                                    <option >Bank Transfer</option>
                                    <option >Debit Card</option>
                                </Select>
                            </FormControl>
                            <Box
                                as={Button}
                                w={"100%"}
                                h={"40px"}
                                bg={"#00AAB6"}
                                color={"#ffffff"}
                                _hover={{ bg: "#00666D" }}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Box>
                        </form>
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
                {savingsData.length > 0 && (
                    <Flex
                        w={"100%"}
                        h={"500px"}
                        bg={"#ffffff"}
                        borderRadius={"5px"}
                        mt={"30px"}
                        boxShadow={"10px #414141"}
                        p={"15px"}
                        flexDir={"column"}
                        mb={"30px"}
                    >
                        <Text mb={"8px"} fontSize={"20px"} fontWeight={600}>
                            Savings History
                        </Text>
                        {savingsData.map((savings: SavingsTransaction) => (
                            <Flex
                                key={savings.id}
                                flexDirection={"row"}
                                align={"center"}
                                justifyContent={"space-between"}
                                h={"52px"}
                                borderBottom={"0.5px solid #C3C3C3"}
                                p={"4px"}
                                px={"15ox"}
                                mb={"8px"}
                            >
                                <Text>{savings.startDate}</Text>
                                <Text>{savings.endDate}</Text>
                                <Text>{savings.source}</Text>
                                <Text>{savings.amount}</Text>
                            </Flex>
                        ))}
                    </Flex>
                )}
            </Box>
        </Flex>
    )
}

export default Savings;