import { Container } from "@chakra-ui/react";

export default function PageContainer({ children } : { children: React.ReactNode } ) {
  return (
    <Container
      maxW="6xl"
      centerContent
      border="1px solid #4A5568"
      paddingTop="2rem"
      paddingBottom="2rem"
    >
      {children}
    </Container>
  );
}
