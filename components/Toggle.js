import {
  Flex,
  Text,
  HStack,
  Switch,
} from "@chakra-ui/react"

const Toggle = ({children, checked, onChange}) => {
  return (
    <Flex justifyContent="center" mb={5}>
      <HStack spacing={3}>
        <Text>{children}</Text>
        <Switch 
          checked={checked}
          onChange={onChange}
        />
      </HStack>
    </Flex>
  )
}

export default Toggle