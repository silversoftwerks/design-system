import React from "react";
import { TextInput, Text } from "react-native";
import Icon from "../components/iconography/Icon";
import Header from "../components/typography/Header";
import Body from "../components/typography/Body";
import Box from "../components/layout/Box";

import { colorsAbstract, colors } from "../components/color/colorStyles";
export const navigationData = {
  pages: [
    {
      name: "iconography",
      panels: [
        {
          name: "Icon",
          content: (
            <Box flex="1">
              <Box flexDirection="row">
                <Box padding={24} paddingBottom={0} paddingRight={0}>
                  <Icon
                    height="200px"
                    width="200px"
                    fontSize="150px"
                    color={colors.white}
                    backgroundColor={colorsAbstract.primary[0]}
                    label={"ƧS"}
                  />
                </Box>
                <Box
                  height="224px"
                  width="4px"
                  backgroundColor={colors.black}
                />
              </Box>
              <Box height="8px" width="100%" backgroundColor={colors.black} />
              <Box flexDirection="row" flex={1}>
                <Box flex={1} maxWidth={"224px"} />
                <Box flex={1} maxWidth={"8px"} backgroundColor={colors.black} />
                <Box flex={1} maxWidth={"4px"} backgroundColor={colors.blue} />
                <Box flex={1} padding={24}>
                  <Box flexDirection="column" width="fit-content">
                    <Header width="fit-content">Lorem Ipsum dolet emmet</Header>
                    <Box
                      flex={1}
                      minHeight={"4px"}
                      backgroundColor={colors.yellow}
                    />
                  </Box>
                  <Box paddingTop={16} paddingBottom={16}>
                    <Body>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain. These
                      cases are perfectly simple and easy to distinguish. In a
                      free hour, when our power of choice is untrammelled and
                      when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided. But in certain circumstances and owing to the
                      claims of duty or the obligations of business it will
                      frequently occur that pleasures have to be repudiated and
                      annoyances accepted. The wise man therefore always holds
                      in these matters to this principle of selection: he
                      rejects pleasures to secure other greater pleasures, or
                      else he endures pains to avoid worse pains
                    </Body>
                  </Box>
                </Box>
              </Box>
            </Box>
          )
        }
      ]
    },
    {
      name: "form",
      panels: [{ name: "TextInput", content: <TextInput /> }]
    },
    {
      name: "layout",
      panels: [{ name: "Box", content: <Box>Lorem Ipsum</Box> }]
    },
    {
      name: "typography",
      panels: [{ name: "Text", content: <Text>Lorem Ipsum</Text> }]
    }
  ],
  index: { page: 0, panel: 0, content: 0 }
};
