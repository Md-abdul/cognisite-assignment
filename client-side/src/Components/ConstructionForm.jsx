


import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import ChartComponent from "./Chart";

export const ConstructionForm = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [workerCount, setWorkerCount] = useState("");
  const [areaPerWorker, setAreaPerWorker] = useState("");
  const [totalDays, setTotalDays] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!length || !width || !workerCount || !areaPerWorker) {
      setShowMessage(true);
      return;
    }

    setShowMessage(false);

    const data = {
      length: Number(length),
      width: Number(width),
      workerCount: Number(workerCount),
      areaPerWorker: Number(areaPerWorker),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/calculate",
        data
      );
      setTotalDays(response.data.totalDays);
    } catch (error) {
      console.error("Error calculating total days:", error);
    }
  };

  return (
    <Flex
      maxW="80%"
      mx="auto"
      mt={10}
      p={5}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg"
    >
      <Box flex="1" mr={5} maxW="3xl">
        <Heading as="h1" size="lg" mb={6} textAlign="center">
          Construction Time Calculator
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="length" isRequired>
              <FormLabel>Length (ft)</FormLabel>
              <Input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Enter length"
              />
            </FormControl>
            <FormControl id="width" isRequired>
              <FormLabel>Width (ft)</FormLabel>
              <Input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Enter width"
              />
            </FormControl>
            <FormControl id="workerCount" isRequired>
              <FormLabel>Worker Count</FormLabel>
              <Input
                type="number"
                value={workerCount}
                onChange={(e) => setWorkerCount(e.target.value)}
                placeholder="Enter worker count"
              />
            </FormControl>
            <FormControl id="areaPerWorker" isRequired>
              <FormLabel>Area Per Worker (sq ft)</FormLabel>
              <Input
                type="number"
                value={areaPerWorker}
                onChange={(e) => setAreaPerWorker(e.target.value)}
                placeholder="Enter area per worker"
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Calculate
            </Button>
          </VStack>
        </form>
      </Box>
      <Box flex="1" maxW="3xl">
        {totalDays !== null ? (
          <Box flex="1" mt={6} textAlign="center">
            <Text fontSize="xl" mb={4}>
              Total Days to Complete Construction: {totalDays}
            </Text>
            <ChartComponent data={totalDays} />
          </Box>
        ) : (
          <Box flex="1" mt={6} textAlign="center">
            <Text fontSize="xl" mb={4}>
              Please fill out all fields to see the chart.
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ConstructionForm;
