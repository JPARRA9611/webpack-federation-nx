import React from "react";
import './styles.css';

var version = process.env.BUILD_DATE;

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne,
  CounterAppTwo,
}: ContainerAppProps) => {
  return (
    <>
      <div className='container'>
        <h1>CONTAINER</h1>
        <div className="container-counter">
          <CounterAppOne />
          <CounterAppTwo />
        </div>
      </div>
    </>
  );
};

/*<Center
      height="100vh"
      width="100%"
      backgroundColor="#1B1A29"
      margin="0"
      p="0"
      flexDirection="column"
    >
      <Box color="#fff" position="fixed" right="0" top="0" mr="2rem" mt="2rem">
        Latest Build Date: <Text fontWeight="bold">{version}</Text>
      </Box>
      <Flex
        border="1px solid #151421"
        borderRadius="1rem"
        height="50vh"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        padding="5rem"
        backgroundColor="#6F60EA"
      >
        <Heading color="#fff">CONTAINER</Heading>
        <Flex direction="row" justifyContent="space-around">
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="2rem"
              mr="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                APP-1
              </Heading>
              <CounterAppOne />
              <Button mt="1rem" w="100%" to="/app1" as={RouterLink}>
                To App1
              </Button>
            </Box>
          </React.Suspense>
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                APP-2
              </Heading>
              <CounterAppTwo />
              <Button
                mt="1rem"
                w="100%"
                alignSelf="center"
                to="/app2"
                as={RouterLink}
              >
                To App2
              </Button>
            </Box>
          </React.Suspense>
        </Flex>
      </Flex>
    </Center>*/