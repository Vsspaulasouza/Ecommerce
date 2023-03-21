import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

function ProductSkeleton() {
  return (
    <Box
      w="270px"
      h="450px"
      borderRadius="12px"
      display="flex"
      flexDir="column"
      p="16px"
      boxSizing="border-box"
      backgroundColor="white"
      border="1px solid"
      borderColor="gray.100"
      justifyContent="space-between"
    >
      <Skeleton boxSize="180px" alignSelf="center" mb="16px" />
      <SkeletonText noOfLines={3} spacing="3" skeletonHeight="2" mb="4px" />
      <SkeletonText noOfLines={2} spacing="3" skeletonHeight="1" mb="12px" />
      <Skeleton w="140px" h="15px" />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="16px"
        justifySelf="flex-end"
      >
        <Skeleton w="100px" h="27px" />
        <Skeleton w="87px" h="50px" borderRadius="12px" />
      </Box>
    </Box>
  );
}

export default ProductSkeleton;
