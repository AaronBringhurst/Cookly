import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to Cookly!
      </Heading>
      <Text fontSize="xl" mb={6}>
        Discover recipes based on the ingredients you have.
      </Text>
      <Button colorScheme="teal" size="lg">
        Get Started
      </Button>
    </Box>
  );
}
