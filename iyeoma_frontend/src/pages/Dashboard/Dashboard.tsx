import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
    return (
        <Flex
            bg={"#f2f6ff"}
            flexDir={"row"}
            w={"100vw"}
            h={"100vh"}
        >
            <Sidebar/>
            <Box
                w={"100%"}
                pt={"40px"}
                px={"24px"}
                fontFamily={"Karla"}
                boxShadow={"lg"}
            >
                Sophia
            </Box>
        </Flex>
    )
}

export default Dashboard;