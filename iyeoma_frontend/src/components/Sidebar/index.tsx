import { Flex, Link as ChakraLink, Box, Icon } from "@chakra-ui/react";
// import { IoPerson,} from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
// import Logo from "../../images/Logo.png";
import "typeface-karla";
import { CSSProperties, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import dashboard from "../../images/dashboard.svg";
// import activity from "../../images/activity.svg";
// import { FaBook, } from "react-icons/fa6";

const Sidebar = () => {
    const { linkStyle, _activeLink } = useStyles();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState<string | null>(null);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <Flex
            flexDir={"column"}
            // justify={"space-between"}
            // pos={"fixed"}
            boxShadow={"md"}
            align={"left"}
            h={"100vh"}
            w={"210px"}
            bg={"#390048"}
            py={"70px"}
        >
            <ChakraLink
                href="/"
                _hover={{ textDecoration: "none" }}
                textDecoration={"none"}
                mb={"100px"}
                mx={"20px"}
            >
                <Box
                    display={"flex"}
                    flexDir={"row"}
                >
                    {/* <Image
                        src={`url(https://avatars.githubusercontent.com/u/82169299?s=96&v=4)`}
                        w={"40px"}
                        h={"40px"}
                        mr={"12px"}
                    /> */}
                    <Box
                        color={"#eeeeee"}
                        fontSize="26px"
                        fontWeight={700}
                    >
                        IyeWallet
                    </Box>
                </Box>
            </ChakraLink>
            <Flex
                mb={"200px"}
                flexDir={"column"}
                gap={"10px"}
            >
                <ChakraLink
                    as={Link}
                    display={"flex"}
                    flexDir={"row"}
                    justifyItems={"left"}
                    alignItems={"center"}
                    to={"/dashboard"}
                    px={"20px"}
                    _hover={{ borderInline: "5px solid #B6FAFF", boxShadow: "md", transition: "0.2s ease-in-out" }}
                    style={activeLink === "/dashboard" ? _activeLink : linkStyle}
                >
                        {/* <Icon
                            as={IoPerson}
                            mr={"20px"}
                            w={"18px"}
                            h={"18px"}

                        /> */}
                       Dashboard
                </ChakraLink>
                <ChakraLink
                    as={Link}
                    display={"flex"}
                    flexDir={"row"}
                    justifyItems={"left"}
                    alignItems={"center"}
                    to={"/savings"}
                    px={"20px"}
                    _hover={{ borderInline: "5px solid #B6FAFF", boxShadow: "md", transition: "0.2s ease-in-out" }}
                    style={activeLink === "/savings" ? _activeLink : linkStyle}
                >
                        {/* <Icon
                            as={Image}
                            src={dashboard}
                            mr={"20px"}
                            w={"18px"}
                            h={"18px"}
                        /> */}
                        Savings
                </ChakraLink>
                <ChakraLink
                    as={Link}
                    display={"flex"}
                    flexDir={"row"}
                    justifyItems={"left"}
                    alignItems={"center"}
                    to={"/invest"}
                    pl={"20px"}
                    _hover={{ borderInline: "5px solid #B6FAFF", boxShadow: "md", transition: "0.2s ease-in-out" }}
                    style={activeLink === "/invest" ? _activeLink : linkStyle}
                >
                        {/* <Icon
                            as={Image}
                            src={activity}
                            mr={"20px"}
                            w={"20px"}
                            h={"20px"}
                        /> */}
                        Invest
                </ChakraLink>
                <ChakraLink
                    as={Link}
                    w={"100%"}
                    display={"flex"}
                    flexDir={"row"}
                    justifyItems={"left"}
                    alignItems={"center"}
                    to={"/my-account"}
                    pl={"20px"}
                    _hover={{ borderInline: "5px solid #B6FAFF", boxShadow: "md", transition: "0.2s ease-in-out" }}
                    style={activeLink === "/my-account" ? _activeLink : linkStyle}
                >
                        {/* <Icon
                            as={FaBook}
                            mr={"20px"}
                            w={"20px"}
                            h={"20px"}
                        /> */}
                        Account
                </ChakraLink>
                <ChakraLink
                    as={Link}
                    w={"100%"}
                    display={"flex"}
                    flexDir={"row"}
                    justifyItems={"left"}
                    alignItems={"center"}
                    to={"/info-hub"}
                    pl={"20px"}
                    _hover={{ borderInline: "5px solid #B6FAFF", boxShadow: "md", transition: "0.2s ease-in-out" }}
                    style={activeLink === "/info-hub" ? _activeLink : linkStyle}
                >
                        {/* <Icon
                            as={FaBook}
                            mr={"20px"}
                            w={"20px"}
                            h={"20px"}
                        /> */}
                        Info Hub
                </ChakraLink>
            </Flex>
            <Flex
                flexDir={"column"}
                gap={"10px"}
            >
                <ChakraLink
                    as={Link}
                    display={"flex"}
                    flexDir={"row"}
                    justifyItems={"left"}
                    alignItems={"center"}
                    to={"/dashboard"}
                    px={"20px"}
                    _hover={{ borderInline: "5px solid #B6FAFF", boxShadow: "md", transition: "0.2s ease-in-out" }}
                    style={activeLink === "/settings" ? _activeLink : linkStyle}
                >
                        <Icon
                            as={SlSettings}
                            w={"18px"}
                            h={"18px"}
                            mr={"20px"}
                        />
                        Settings
                </ChakraLink>
                {/* <ChakraLink
                    as={Link}
                    href={"/info"}
                    _hover={{ borderInline: "8px solid #050F28", boxShadow: "md", transition: "0.2s ease-in-out" }}
                    style={activeLink === "/info" ? _activeLink : linkStyle}
                >
                    <Box
                        w={"214px"}
                        justifyContent={"center"}
                    >
                        <Icon
                            as={IoInformationCircleOutline}
                            w={"25px"}
                            h={"25px"}
                            mr={"20px"}
                        />
                        Info
                    </Box>
                </ChakraLink> */}
            </Flex>
        </Flex>
    )
}

export default Sidebar;
const useStyles = () => {
    return {
        linkStyle: {
            color: "#ecf",
            fontSize: "17px",
            fontWeight: 500,
            fontFamily: "Karla",
            lineHeight: "50px",
            textAlign: "center",
        } as CSSProperties,
        _activeLink: {
            color: "#ecf",
            fontSize: "17px",
            fontWeight: 500,
            boxShadow: "md",
            fontFamily: "Karla",
            lineHeight: "50px",
            textAlign: "center",
            borderInlineEnd: "5px solid #B6FAFF",
        } as CSSProperties,
    };
};