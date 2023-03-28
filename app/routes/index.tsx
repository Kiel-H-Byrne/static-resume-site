import {
  Box,
  PositionProps,
  Pseudos,
  Container,
  Divider,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ReactEmbedGist from "react-embed-gist";
import ColorModeSwitch from "../../ColorModeSwitch";
import MainNav from "../../MainNav";
import experience from "../experience.json";
import coolKielImg from "./assets/img/coolkiel.jpg";
const formatDate = (date) => {
  return new Date(date).getFullYear();
};

const styles = {
  sectionHeader: {
    fontSize: "26px",
    fontWeight: "700",
    marginTop: "20px",
    marginBottom: "20px",
    color: "#45505b",
  },
  listItem: {
    padding: "0 0 20px 20px",
    marginTop: "-2px",
    borderLeft: "2px solid #622F75",
    position: "relative",
  },
  listItemBefore: {
    content: `""`,
    position: "absolute",
    width: "16px",
    height: "16px",
    borderRadius: "50px",
    left: "-9px",
    top: "0",
    background: "#fff",
    border: "2px solid #622F75",
  },
  titleHeading: {
    lineHeight: "18px",
    fontSize: "18px",
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: "'Poppins', sans-serif",
    color: "#622F75",
    marginBottom: "10px",
  },
  dates: {
    fontSize: "16px",
    background: "#f7f8f9",
    padding: "5px 15px",
    display: "inline-block",
    fontWeight: "600",
    marginBottom: "10px",
  },
  institution: {
    fontStyle: "italic",
  },
};
export default function Index() {
  const { work, education, awards, skills, basics, certificates } = experience;
  return (
    <Container>
      <ColorModeSwitch />
      <MainNav />
      <Box
        h="100vh"
        bg="rgba(255,0,0,0.1)"
        zIndex="-10"
        bgImage={"url('https://kielbyrne.com/assets/img/coolkiel.jpg')"}
        opacity={"15%"}
        top="0"
        bgSize="cover"
        pos="absolute"
        right="0"
        left="0"
        bottom="0"
      />
      <Box id="spotifyBox">
        <Heading as={"h1"} size={"lg"}>
          Current Spotify Top Songs:
        </Heading>
        <ReactEmbedGist gist="Kiel-H-Byrne/9418a89d75a728575ad26f48cb074f08" />
        {/* <script src="https://gist.github.com/Kiel-H-Byrne/9418a89d75a728575ad26f48cb074f08.js"></script> */}
      </Box>
      <Box>
        <Heading as={"h1"} size={"lg"}>
          CAREER & EDUCATION
        </Heading>
        <Divider />
        <Box id="resumeSummary">
          <Heading as={"h1"} size={"lg"}>
            {basics.name}
          </Heading>
          <Text as={"p"}>{basics.summary}</Text>
        </Box>
        <List id="resumeEducation">
          <Heading style={styles.sectionHeader}>Education</Heading>
          {education.map((el) => (
            <ListItem style={styles.listItem} _before={styles.listItemBefore}>
              <Heading style={styles.titleHeading}>{el.area}</Heading>
              <Text style={styles.dates}>{el.endDate}</Text>
              <Text style={styles.institution}>{el.institution}</Text>
            </ListItem>
          ))}
        </List>
        <List id="professionalExperience">
          <Heading
            as={"h4"}
            size={"md"}
            color={"blackAlpha.500"}
            style={styles.sectionHeader}
          >
            My professional and educational experiences.
          </Heading>
          {work.map((w) => (
            <ListItem
              key={w.startDate}
              style={styles.listItem}
              _before={styles.listItemBefore}
            >
              <Heading as={"h3"} size={"md"}>
                {w.position}
              </Heading>
              <Box dir="column">
                <Heading style={styles.titleHeading}>{w.position}</Heading>
                <Heading style={styles.dates}>
                  {formatDate(w.startDate)}-{formatDate(w.endDate)}
                </Heading>
                <Text as={"p"} style={styles.institution}>
                  <Link target={w.url}>{w.name}</Link>
                </Text>
                <Text as={"p"}>{w.summary}</Text>
                {/*somehow get list of text*/}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
