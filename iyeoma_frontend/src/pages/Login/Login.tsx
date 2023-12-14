import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Icon, Image, Input, Link as ChakraLink, Text, IconButton, InputGroup, InputRightElement } from "@chakra-ui/react";
// import "@fontsource/poppins";
import 'typeface-karla';
import Logo from "../../assets/Images/iyewallet-purple.png";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import SubmitBtn from "../../components/submitButton/index";

const Login = () => {
    const [email, setEmail] = useState("");
    const [isEmail, setIsEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
        setEmailError("");
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
        setPasswordError("");
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setEmailError(isValid ? "" : "Invalid email address");
        return isValid;
    };

    const validatePassword = () => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
        const isValid = passRegex.test(password);
        // const errorStyle = isValid ? {} : { color: "red" };
        // setPasswordErrorStyle(errorStyle);
        const errorMessage = isValid
            ? ""
            : "Password should have at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character";
        return { isValid, errorMessage };
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        if (email.trim() === "" || password.trim() === "") {
            setError("All fields are required.");
            setLoading(false);
            return;
        }
        // toast.success("Login Success!");
        navigate("/dashboard");
        setLoading(false);
    };
    return (
        <Box
            bg={"#390048"}
            w="100vw"
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={"column"}
            fontFamily={"Nunito"}
        >
            <Flex
                flexDir={"row"}
                mt={"40px"}
                pb={"30px"}
                align={"center"}
            >
                <Image
                    src={Logo}
                    w={"60px"}
                    h={"60px"}
                    mr={"12px"}
                />
                <Box
                    color={"#EFB6FF"}
                    fontSize="32px"
                    fontWeight={700}
                >
                    IyeWallet
                </Box>
            </Flex>
            <Box
                w={"448px"}
                bg={"#FFFFFF"}
                borderRadius={10}
                alignSelf={"center"}
                // shadow={"outline"}
                // px={35}
                py={"20px"}
                fontWeight={700}
                lineHeight={"24px"}
            >
                <Flex
                    direction={"column"}
                >
                    <Text
                         textAlign={"center"}
                        //  fontFamily={"Poppins"}
                         fontSize={"24px"}
                         fontWeight={700}
                         color={"#26364e"}
                         mb={"20px"}
                    >
                        Login to your account
                    </Text>
                    <Flex mx={"35px"}>
                        <form >
                            <FormControl isInvalid={emailError !== ''}>
                                <FormLabel fontSize={"12px"} color={"#4A5568"} mb={"6px"} mt={"15px"}>Email or Phone Number</FormLabel>
                                <Input
                                    type={isEmail ? 'email' : 'tel'}
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    autoComplete="email"
                                    p={"16px"}
                                    borderRadius={"5px"}
                                    bg={"#EDF2F7"}
                                    border={"0px solid #E2E8F0"}
                                    w={"379px"}
                                    onBlur={validateEmail}
                                    color={"#1A202C"}
                                />
                                <FormErrorMessage color={"red"} fontSize={"12px"}>{emailError}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={passwordError !== ""}>
                                <FormLabel fontSize={"12px"} color={"#4A5568"} mb={"6px"} mt={"15px"}>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        onBlur={validatePassword}
                                        autoComplete="new-password"
                                        required
                                        p={"16px"}
                                        borderRadius={"5px"}
                                        bg={"#EDF2F7"}
                                        border={"0px solid #E2E8F0"}
                                        w={"379px"}
                                    />
                                    <InputRightElement>
                                        <IconButton
                                            icon={showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />} // Display appropriate icon based on showPassword state
                                            onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state on click
                                            color="#000000"
                                            h={"100%"}
                                            _hover={{ color: "#718096" }}
                                            aria-label={"show-password"}
                                            my={"15px"}
                                            mr={"10px"}
                                            border={"0px"}
                                        />
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage lineHeight={"16px"} color={"red"} fontSize={10}>{passwordError}</FormErrorMessage>
                            </FormControl>

                            {error && (
                                <Text color="red" fontSize="12" mt={4} mb={2}>
                                    {error}
                                </Text>
                            )}
                            <SubmitBtn loadingText={"Signing-in"} btntitle={"LOG IN"} onClick={handleSubmit} isLoading={loading} />
                        </form>
                    </Flex>
                </Flex>
            </Box>
            <Flex pt={16} fontFamily="Nunito" fontSize={14} color="#FFFFFF" lineHeight="12px">
                <Text>
                    <ChakraLink
                        as={RouterLink}
                        to="/sign-up"
                        textDecoration="none"
                        color="#FFFFFF"
                        transition="color 0.3s ease"
                        _hover={{ color: '#B3B3B3' }}
                    >
                        Don't have an account? Register
                    </ChakraLink>
                </Text>
            </Flex>
            <Flex pt={16} fontSize={14} color="#FFFFFF" lineHeight="12px">
                <Text>
                    <ChakraLink
                        as={RouterLink}
                        to="/forgot-password"
                        textDecoration="none"
                        color="#FFFFFF"
                        transition="color 0.3s ease"
                        _hover={{ color: '#B3B3B3' }}
                    >
                        Forgot Password?
                    </ChakraLink>
                </Text>
            </Flex>
        </Box>
    );
}

export default Login;