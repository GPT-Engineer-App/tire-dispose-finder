import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, Input, Textarea, IconButton, Image, Badge } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaDollarSign, FaStar, FaComments, FaTruck, FaBell } from "react-icons/fa";

const Index = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleNewReviewChange = (e) => setNewReview(e.target.value);
  const handleAddReview = () => {
    setReviews([...reviews, newReview]);
    setNewReview("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Tyrode
        </Text>
        <Text>Find the nearest, cheapest tire disposal service in South Korea.</Text>

        <HStack spacing={4} width="100%">
          <Input placeholder="Enter your location" value={location} onChange={handleLocationChange} />
          <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal">
            Find Services
          </Button>
        </HStack>

        <HStack spacing={4} width="100%">
          <Input placeholder="Enter price range" value={price} onChange={handlePriceChange} />
          <Button leftIcon={<FaDollarSign />} colorScheme="teal">
            View Prices
          </Button>
        </HStack>

        <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontSize="lg" fontWeight="bold">
            Map View
          </Text>
          <Image src="https://images.unsplash.com/photo-1577086664693-894d8405334a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXAlMjB2aWV3JTIwb2YlMjB0aXJlJTIwZGlzcG9zYWwlMjBzZXJ2aWNlc3xlbnwwfHx8fDE3MTczMTc5NTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Map View" />
        </Box>

        <Button leftIcon={<FaTruck />} colorScheme="teal" width="100%">
          Book a Reservation
        </Button>

        <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontSize="lg" fontWeight="bold">
            Notifications
          </Text>
          <HStack spacing={2}>
            <FaBell />
            <Text>Reservation confirmed! Check your email for navigation directions.</Text>
          </HStack>
        </Box>

        <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontSize="lg" fontWeight="bold">
            Reviews & Ratings
          </Text>
          <VStack spacing={2} align="start">
            {reviews.map((review, index) => (
              <HStack key={index} spacing={2}>
                <FaStar color="gold" />
                <Text>{review}</Text>
              </HStack>
            ))}
            <HStack spacing={2} width="100%">
              <Textarea placeholder="Write a review" value={newReview} onChange={handleNewReviewChange} />
              <IconButton icon={<FaComments />} colorScheme="teal" onClick={handleAddReview} />
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
