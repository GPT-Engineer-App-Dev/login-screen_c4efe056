// Index page component with login screen
import { Box, Button, Center, Divider, Flex, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";

const Index = () => {
  // Placeholder functions for login actions
  const handleEmailLogin = () => {
    // Implement email login logic here
    console.log("Login with email");
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Login with Google");
  };

  const handleAppleLogin = () => {
    // Implement Apple login logic here
    console.log("Login with Apple");
  };

  return (
    <Center h="100vh" bg={useColorModeValue("gray.50", "gray.800")}>
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg={useColorModeValue("white", "gray.700")}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form id="emailLoginForm" onSubmit={handleEmailLogin}>
            <Input type="email" placeholder="Enter your email" mb={3} required />
            <Button type="submit" isFullWidth colorScheme="blue" mb={3} leftIcon={<FaEnvelope />}>
              Login with Email
            </Button>
          </form>
          <Divider my={6} />
          <Stack spacing={4}>
            <Button onClick={handleGoogleLogin} isFullWidth colorScheme="red" leftIcon={<FaGoogle />}>
              Login with Google
            </Button>
            <Button onClick={handleAppleLogin} isFullWidth colorScheme="blackAlpha" color="white" leftIcon={<FaApple />}>
              Login with Apple
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default Index;
