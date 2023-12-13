import { Flex, Link as ChakraLink, Box, Icon, Image } from "@chakra-ui/react";
import "typeface-karla";
import { CSSProperties, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import white from "../../assets/Images/iyewallet-white.png";
import save from "../../assets/Icons/fi-rr-credit-card.svg";
import dashboard from "../../assets/Icons/fi-rr-house-chimney-user.svg";
import invest from "../../assets/Icons/fi-rr-hand-holding-seeding.svg";
import account from "../../assets/Icons/fi-rr-circle-user.svg";
import info from "../../assets/Icons/fi-rr-comment-alt-dots.svg";
// import infoHub from "../../assets/Icons/fi-rr-blog-text.svg";
import settings from "../../assets/Icons/fi-rr-user-gear.svg";
// import logout from "../../assets/Icons/fi-rr-power.svg";

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
            pos={"fixed"}
            fontFamily={'Nunito'}
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
                    <Image
                        src={white}
                        w={"35px"}
                        h={"35px"}
                        mr={"8px"}
                    />
                    <Box
                        color={"#eeeeee"}
                        fontSize="22px"
                        fontWeight={500}
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
                        <Icon
                            as={Image}
                            src={dashboard}
                            mr={"20px"}
                            w={"18px"}
                            h={"18px"}

                        />
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
                        <Icon
                            as={Image}
                            src={save}
                            mr={"20px"}
                            w={"18px"}
                            h={"18px"}
                        />
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
                        <Icon
                            as={Image}
                            src={invest}
                            mr={"20px"}
                            w={"20px"}
                            h={"20px"}
                        />
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
                        <Icon
                            as={Image}
                            src={account}
                            mr={"20px"}
                            w={"20px"}
                            h={"20px"}
                        />
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
                        <Icon
                            as={Image}
                            src={info}
                            mr={"20px"}
                            w={"20px"}
                            h={"20px"}
                        />
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
                            as={Image}
                            src={settings}
                            w={"18px"}
                            h={"18px"}
                            mr={"20px"}
                        />
                        Settings
                </ChakraLink>
            </Flex>
        </Flex>
    )
}

export default Sidebar;
const useStyles = () => {
    return {
        linkStyle: {
            color: "#ecf",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Nunito",
            lineHeight: "50px",
            textAlign: "center",
        } as CSSProperties,
        _activeLink: {
            color: "#ecf",
            fontSize: "16px",
            fontWeight: 500,
            boxShadow: "md",
            fontFamily: "Nunito",
            lineHeight: "50px",
            textAlign: "center",
            borderInlineEnd: "5px solid #B6FAFF",
        } as CSSProperties,
    };
};