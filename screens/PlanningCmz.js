import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal ,ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavDarkCMZ from "../components/NavDarkCMZ";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const PlanningCmz = () => {
  const navigation = useNavigation();
  const [menuAlt2OutlineIconVisible, setMenuAlt2OutlineIconVisible] =
    useState(false);

  const openMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(true);
  }, []);

  const closeMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(false);
  }, []);

  return (
    <>
  <ScrollView>
    <View style={styles.planningCmz}>
        <Pressable
          style={[styles.planningCmzInner, styles.planningLayout]}
          onPress={() => navigation.navigate("Activity")}
        >
          <View style={[styles.path2Parent, styles.path2ParentPosition]}>
            <Image
              style={[styles.path2Icon, styles.path2ParentPosition]}
              contentFit="cover"
              source={require("../assets/path-2.png")}
            />
            <View
              style={[styles.designNewUxFlowForMichael, styles.thePosition]}
            >
              <Text style={[styles.designNewUx, styles.designNewUxTypo]}>
                Design new UX flow for Michael
              </Text>
            </View>
            <Text style={[styles.startFromScreen, styles.theClr]}>
              Start from screen 16
            </Text>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <View
              style={[styles.ovalCopy2Parent, styles.startFromScreenPosition]}
            >
              <Image
                style={styles.ovalCopy2}
                contentFit="cover"
                source={require("../assets/oval-copy-24.png")}
              />
              <Text style={[styles.text, styles.textClr]}>10:00-13:00</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.planningCmzChild, styles.planningLayout]}
          onPress={() => navigation.navigate("Activity")}
        >
          <View style={[styles.path2Parent, styles.path2ParentPosition]}>
            <Image
              style={[styles.path2Icon, styles.path2ParentPosition]}
              contentFit="cover"
              source={require("../assets/path-2.png")}
            />
            <View style={[styles.brainstormWithTheTeamCli, styles.thePosition]}>
              <Text
                style={[styles.brainstormWithThe, styles.designNewUxTypo]}
              >{`Brainstorm with the team `}</Text>
            </View>
            <View
              style={[styles.defineTheProblemOrQuestion, styles.thePosition]}
            >
              <Text
                style={[styles.defineTheProblemContainer, styles.textLayout]}
              >
                <Text style={styles.theClr}>
                  <Text style={styles.defineTheProblem}>
                    Define the problem or question that..
                  </Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
                <Text style={styles.viewMore}>View more</Text>
                <Text
                  style={[styles.theBrainstormingSession, styles.theClr]}
                >{` 
the brainstorming session will aim to address. The question should be clear and concise. `}</Text>
              </Text>
            </View>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <View
              style={[styles.ovalCopy2Parent, styles.startFromScreenPosition]}
            >
              <Image
                style={styles.ovalCopy2}
                contentFit="cover"
                source={require("../assets/oval-copy-25.png")}
              />
              <Text style={[styles.text, styles.textClr]}>14:00-15:00</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.planningLayout]}
          onPress={() => navigation.navigate("Activity")}
        >
          <View style={[styles.path2Parent, styles.path2ParentPosition]}>
            <Image
              style={[styles.path2Icon, styles.path2ParentPosition]}
              contentFit="cover"
              source={require("../assets/path-2.png")}
            />
            <View style={[styles.brainstormWithTheTeamCli, styles.thePosition]}>
              <Text style={[styles.brainstormWithThe, styles.designNewUxTypo]}>
                Workout with Ella
              </Text>
            </View>
            <Text style={[styles.startFromScreen, styles.theClr]}>
              We will do the legs and back workout
            </Text>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1-3x.png")}
            />
            <View
              style={[styles.ovalCopy2Parent, styles.startFromScreenPosition]}
            >
              <Image
                style={styles.ovalCopy2}
                contentFit="cover"
                source={require("../assets/oval-copy-22.png")}
              />
              <Text style={[styles.text, styles.textClr]}>19:00-20:00</Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.date1Activer, styles.date1Layout]}>
          <Pressable
            style={[styles.date1ActiverChild, styles.date1Position]}
            onPress={() => navigation.goBack()}
          />
          <Text style={[styles.jour1, styles.textClr]}>Jour 1</Text>
        </View>
        <View style={[styles.date1Activervariant2, styles.date1Layout]}>
          <View style={styles.date1Activer1}>
            <Pressable
              style={[styles.date1ActiverItem, styles.date1Position]}
              onPress={() => navigation.goBack()}
            />
            <Text style={[styles.jour1, styles.textClr]}>Jour 2</Text>
          </View>
        </View>
        <View
          style={[styles.menualt2outlineParent, styles.path2ParentPosition]}
        >
          <Pressable
            style={styles.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/menualt2outline2.png")}
            />
          </Pressable>
          <Text style={styles.planning}>{`planning
`}</Text>
        </View>
        <View style={styles.planningCmzItem} />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={menuAlt2OutlineIconVisible}
      >
        <View style={styles.menuAlt2OutlineIconOverlay}>
          <Pressable
            style={styles.menuAlt2OutlineIconBg}
            onPress={closeMenuAlt2OutlineIcon}
          />
          <NavDarkCMZ onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  planningLayout: {
    height: 95,
    width: 357,
  },
  path2ParentPosition: {
    left: 0,
    position: "absolute",
  },
  thePosition: {
    left: "3.92%",
    position: "absolute",
    overflow: "hidden",
  },
  designNewUxTypo: {
    height: 19,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    marginTop: -9.5,
    textAlign: "left",
    color: Color.bluePrimary,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    lineHeight: 19,
    letterSpacing: 1,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  theClr: {
    color: Color.silver,
    fontSize: FontSize.fontSansTextXsSemibold_size,
    letterSpacing: 1,
  },
  frameLayout: {
    height: 3,
    width: 3,
    top: 16,
    position: "absolute",
  },
  startFromScreenPosition: {
    left: 14,
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 14,
    top: "50%",
  },
  date1Layout: {
    height: 43,
    width: 85,
    top: 99,
    position: "absolute",
  },
  date1Position: {
    borderBottomWidth: 2,
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  path2Icon: {
    right: 0,
    bottom: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  designNewUx: {
    width: 293,
  },
  designNewUxFlowForMichael: {
    width: "81.96%",
    right: "14.12%",
    bottom: "40%",
    top: "40%",
    height: "20%",
    left: "3.92%",
  },
  startFromScreen: {
    marginTop: 17.5,
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
    lineHeight: 14,
    top: "50%",
    left: 14,
    position: "absolute",
    width: 293,
    textAlign: "left",
  },
  frameChild: {
    right: 27,
  },
  frameItem: {
    right: 22,
  },
  frameInner: {
    right: 17,
  },
  ovalCopy2: {
    width: 10,
    height: 10,
  },
  text: {
    marginTop: -7,
    left: 20,
    textAlign: "center",
    lineHeight: 14,
    top: "50%",
    fontSize: FontSize.fontSansTextXsSemibold_size,
    color: Color.white,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  ovalCopy2Parent: {
    marginTop: -31.5,
    width: 94,
    height: 14,
    top: "50%",
    left: 14,
  },
  path2Parent: {
    top: 0,
    left: 0,
    overflow: "hidden",
    height: 95,
    width: 357,
  },
  planningCmzInner: {
    top: 203,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 16,
    position: "absolute",
    width: 357,
  },
  brainstormWithThe: {
    width: 274,
  },
  brainstormWithTheTeamCli: {
    width: "76.65%",
    right: "19.44%",
    bottom: "40%",
    top: "40%",
    height: "20%",
    left: "3.92%",
  },
  defineTheProblem: {
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
  },
  text1: {
    fontFamily: FontFamily.notoSansMalayalamRegular,
  },
  viewMore: {
    fontSize: FontSize.size_3xs,
    color: Color.mediumslateblue,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    letterSpacing: 1,
  },
  theBrainstormingSession: {
    fontFamily: FontFamily.notoSansMalayalamRegular,
  },
  defineTheProblemContainer: {
    marginTop: -9,
    width: 321,
    height: 17,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  defineTheProblemOrQuestion: {
    height: "14.74%",
    width: "89.8%",
    top: "68.93%",
    right: "6.29%",
    bottom: "16.34%",
  },
  planningCmzChild: {
    top: 328,
    left: 16,
    position: "absolute",
    width: 357,
  },
  groupPressable: {
    top: 515,
    left: 16,
    position: "absolute",
    width: 357,
  },
  date1ActiverChild: {
    borderColor: "#0084fa",
  },
  jour1: {
    height: "74.42%",
    width: "77.78%",
    top: "41.86%",
    left: "16.24%",
    fontSize: FontSize.fontSansTextLgSemibold_size,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    textAlign: "left",
    color: Color.white,
    lineHeight: 19,
  },
  date1Activer: {
    left: 87,
  },
  date1ActiverItem: {
    backgroundColor: Color.gainsboro,
    borderColor: "rgba(0, 132, 250, 0)",
  },
  date1Activer1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  date1Activervariant2: {
    left: 210,
  },
  menuAlt2OutlineIconOverlay: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuAlt2OutlineIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  menualt2outline: {
    width: 32,
    height: 32,
  },
  planning: {
    alignSelf: "stretch",
    fontSize: FontSize.size_5xl,
    display: "flex",
    marginLeft: 18,
    alignItems: "center",
    textAlign: "left",
    color: Color.bluePrimary,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    flex: 1,
  },
  menualt2outlineParent: {
    top: 1,
    width: 390,
    height: 72,
    flexDirection: "row",
    padding: Padding.p_xs,
    alignItems: "center",
  },
  planningCmzItem: {
    top: 72,
    borderColor: "rgba(0, 132, 250, 0.25)",
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  planningCmz: {
    backgroundColor: Color.gray_100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PlanningCmz;
