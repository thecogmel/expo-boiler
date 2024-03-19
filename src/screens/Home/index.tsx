import React from 'react';

import { Box, Button, Text, ButtonText } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <Box flex={1} width="100%" justifyContent="center" alignItems="center">
      <Text>Boilerplate for Expo!</Text>
      <Button mt="$1" onPress={() => navigation.navigate('StackScreen')}>
        <ButtonText>Add </ButtonText>
      </Button>
    </Box>
  );
};

export default Home;
