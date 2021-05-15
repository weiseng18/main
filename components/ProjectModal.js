import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react"

import ExternalLink from "./ExternalLink"

const ProjectModal = ({ isOpen, onClose, meta, Content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="lg"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton bgColor="white" border="none" cursor="pointer" />
        <ModalHeader py={0}>
          <Heading mt={8} mb={2}>{meta.title}</Heading>
        </ModalHeader>
        <ModalBody>
          <HStack spacing={5}>
            {meta.url && (
              <ExternalLink href={meta.url} externalIcon>
                Live
              </ExternalLink>
            )}
            {meta.github && (
              <ExternalLink href={meta.github} externalIcon>
                Github
              </ExternalLink>
            )}
          </HStack>
          <HStack spacing={3} mb="2">
            {meta.tags.map((item, idx) => {
              return (
                <Text
                  key={idx}
                  backgroundColor="gray.200"
                  color="gray.600"
                  py="1"
                  px="3"
                  borderRadius="25px"
                >
                  {item}
                </Text>
              )
            })}
          </HStack>
          <Content />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ProjectModal