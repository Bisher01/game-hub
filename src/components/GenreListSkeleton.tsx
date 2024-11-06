import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <List>
      {skeletons.map((genre) => (
        <ListItem key={genre} paddingY="5px">
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText noOfLines={2} width="100px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
