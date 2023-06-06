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
import ReactTyped from "react-typed";
import { navLinks } from "../../metadata.json";

import ColorModeSwitch from "../../ColorModeSwitch";
import MainNav from "../../MainNav";
import ReactEmbedGist from "../../ReactGist";
import Sidebar from "../../SideBar";
import experience from "../experience.json";
import { NavLink } from "@remix-run/react";
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
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "20px",
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
    <Box>
      <Sidebar>
        <ColorModeSwitch />
        {/* <MainNav /> */}
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
        <Box id="hero">
          <Heading>
            Kiel Hamilton <span className="brand"> Byrne</span>
          </Heading>
          <Text>
            {"I Am "}
            <ReactTyped
              strings={[
                "a Software Developer",
                "an I.T. Consultant",
                "a Voice Actor / Audio Engineer",
                "a Father / Husband / Brethren",
                "an Alchemist",
                "a Life-Long Learner",
              ]}
            />
          </Text>
          <Box className="social-links" h={24}>
            <a
              href="https://twitter.com/tdotholla"
              title="twitter"
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/tdotholla"
              title="facebook"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>  */}
            <a
              href="https://github.com/tdotholla"
              title="github"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/KielByrne/"
              title="linkedin"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </Box>
        </Box>

        <Box id="spotifyBox">
          <Heading as={"h1"} size={"lg"}>
            Current Spotify Top Songs:
          </Heading>
          <ReactEmbedGist gist="Kiel-H-Byrne/0b6d01415801c747c88b803e045e1cb0" />
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
            {education.map((e) => (
              <ListItem
                style={styles.listItem}
                _before={styles.listItemBefore}
                key={e.institution}
              >
                <Heading style={styles.titleHeading}>{e.area}</Heading>
                <Text style={styles.dates}>{e.endDate}</Text>
                <Text style={styles.institution}>{e.institution}</Text>
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
      </Sidebar>
    </Box>
  );
}
