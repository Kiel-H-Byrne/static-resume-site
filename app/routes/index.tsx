import {
  Box,
  Container,
  Divider,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import experience from "../experience.json";
const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};
export default function Index() {
  console.log(experience);
  const { work, education, awards, skills, basics, certificates } = experience;
  return (
    <Container>
      <Box>
        <Heading as={"h1"} size={"lg"}>
          CAREER & EDUCATION
        </Heading>
        <Divider />
        <Heading as={"h4"} size={"md"} color={"blackAlpha.500"}>
          My professional and educational experiences.
        </Heading>
        <List
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            maxHeight: "100%",
            // width: "150px",
            overflow: "auto",
            alignContent: "flex-start",
          }}
        >
          {work.map((w) => (
            <ListItem
              key={w.position}
              sx={{
                padding: "0 0 20px 20px",
                marginTop: "-2px",
                borderLeft: "2px solid #622F75",
                position: "relative",
              }}
            >
              <Heading as={"h3"} size={"md"}>
                {w.position}
              </Heading>
              <Box dir="column">
                <Heading as={"h4"} size={"sm"}>
                  {w.position}
                </Heading>
                <Heading as={"h5"} size={"sm"}>
                  {formatDate(w.startDate)}-{formatDate(w.endDate)}
                </Heading>
                <Text as={"p"}>
                  <Link target={w.url}>{w.name}</Link>
                </Text>
                <Text as={"p"}>{w.summary}</Text>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
