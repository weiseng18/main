import {
  Container,
  Flex,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
} from "@chakra-ui/react"

import Navbar from "../components/Navbar"

const Index = () => {
  return (
    <Container>
      <Flex
        height="100%"
        flexDir="column"
        alignItems="center"
      >
        <Navbar page="coursework" />
        <Flex flexDir="column" justifyContent="center" flexGrow={1}>
          <Coursework />
        </Flex>
      </Flex>
    </Container>
  )
}

const Coursework = () => {
  const all = [
    {
      name: "Placement Tests",
      mods: [
        {
          code: "CS1010",
          title: "Programming Methodology I"
        }
      ]
    },
    {
      name: "AY21/22 Semester 1",
      mods: [
        {
          code: "CS1231S",
          title: "Discrete Structures"
        },
        {
          code: "CS2030S",
          title: "Programming Methodology II"
        },
        {
          code: "CS2100",
          title: "Computer Organisation"
        },
        {
          code: "MA1521",
          title: "Calculus for Computing"
        },
        {
          code: "MA2001",
          title: "Linear Algebra I"
        },
      ]
    },
    {
      name: "AY21/22 Semester 2",
      mods: [
        {
          code: "CS2040S",
          title: "Data Structures and Algorithms"
        },
        {
          code: "CS2106",
          title: "Introduction to Operating Systems"
        },
        {
          code: "EL1101E",
          title: "The Nature of Language"
        },
        {
          code: "ES2660",
          title: "Communicating in the Information Age"
        },
        {
          code: "IS1103",
          title: "Ethics in Computing"
        },
        {
          code: "LAJ2203",
          title: "Japanese 4"
        },
        {
          code: "MA2101",
          title: "Linear Algebra II"
        },
        {
          code: "PC1201",
          title: "Fundamentals of Physics"
        },
        {
          code: "ST1131",
          title: "Introduction to Statistics and Statistical Computing"
        },
      ]
    },
    {
      name: "AY21/22 Special Term 2",
      mods: [
        {
          code: "CS2040 (TA)",
          title: "Data Structures and Algorithms (Lab)"
        },
      ]
    },
    {
      name: "AY22/23 Semester 1",
      mods: [
        {
          code: "CS2040S (TA)",
          title: "Data Structures and Algorithms (Lab)"
        },
        {
          code: "CS2100 (TA)",
          title: "Computer Organisation (Lab)"
        },
        {
          code: "CS2102",
          title: "Database Systems"
        },
        {
          code: "CS2104",
          title: "Programming Language Concepts"
        },
        {
          code: "CS2109S",
          title: "Introduction to AI and Machine Learning"
        },
        {
          code: "CS2309",
          title: "CS Research Methodology"
        },
        {
          code: "CS3230",
          title: "Design and Analysis of Algorithms"
        },
        {
          code: "CS3241",
          title: "Computer Graphics"
        },
        {
          code: "LAJ3201",
          title: "Japanese 5"
        },
      ]
    },
    {
      name: "AY22/23 Semester 2",
      mods: [
        {
          code: "CS2040 (TA)",
          title: "Data Structures and Algorithms (Lab)"
        },
        {
          code: "CS3230 (TA)",
          title: "Design and Analysis of Algorithms (Tutorial)"
        },
        {
          code: "CS2105",
          title: "Introduction to Computer Networks"
        },
        {
          code: "CS2108",
          title: "Introduction to Media Computing"
        },
        {
          code: "CS3211",
          title: "Parallel and Concurrent Programming"
        },
        {
          code: "CS3233",
          title: "Competitive Programming"
        },
        {
          code: "CS3242",
          title: "3D Modelling and Animation"
        },
        {
          code: "CS4247",
          title: "Graphics Rendering Techniques"
        },
        {
          code: "LAJ3202",
          title: "Japanese 6"
        },
        {
          code: "MA2202",
          title: "Algebra I"
        },
      ]
    },
  ]
  return (
    <TableContainer>
      <Table size="sm">
        {all && all.map((sem) => {
          return (
            <>
              <Thead backgroundColor={"blue.600"}>
                <Tr>
                  <Th colSpan={2} color={"white"}>
                    {sem.name}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {sem.mods.length > 0 && sem.mods.map((mod) => {
                  return (
                    <Tr>
                      <Td>{mod.code}</Td>
                      <Td>{mod.title}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </>
          )
        })}
      </Table>
    </TableContainer>
  )
}

export default Index
