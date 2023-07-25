import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal ,ScrollView,
} from "react-native";
import { Image } from "expo-image";
import NavDarkstrasbourg from "../components/NavDarkstrasbourg";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PlanDevenementStrasbourg = () => {
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
    <View style={styles.planDevenementStrasbourg}>
        <View style={styles.gamefestCmz} />
        <Image
          style={styles.mapIcon}
          contentFit="cover"
          source={require("../assets/map1.png")}
        />
        <View style={styles.buttondarkenParent}>
          <View style={[styles.buttondarken, styles.buttondarkenFlexBox]}>
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz,
                styles.iconoutlinedotsLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz1,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz2,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
            <Text style={[styles.button, styles.buttonTypo]}>carte</Text>
            <Text style={[styles.button1, styles.buttonTypo]}>carte</Text>
            <Text style={[styles.button2, styles.buttonTypo]}>carte</Text>
            <Text style={[styles.button3, styles.buttonTypo]}>carte</Text>
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz2,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz1,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz5,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
          </View>
          <View style={[styles.buttondarken1, styles.buttondarkenFlexBox]}>
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz,
                styles.iconoutlinedotsLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz1,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz2,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
            <Text style={[styles.button, styles.buttonTypo]}>
              {" "}
              cartes stands
            </Text>
            <Text style={[styles.button1, styles.buttonTypo]}>
              {" "}
              cartes stands
            </Text>
            <Text style={[styles.button2, styles.buttonTypo]}>
              {" "}
              cartes stands
            </Text>
            <Text style={[styles.button3, styles.buttonTypo]}>
              {" "}
              cartes stands
            </Text>
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz2,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz1,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz5,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
          </View>
        </View>
        <View style={styles.menualt2outlineParent}>
          <Pressable
            style={styles.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/menualt2outline1.png")}
            />
          </Pressable>
          <Text style={styles.planDevenement}>plan d’evenement</Text>
        </View>
        <View style={styles.planDevenementStrasbourgChild} />
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
          <NavDarkstrasbourg onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  buttondarkenFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  iconoutlinedotsLayout: {
    height: 24,
    width: 24,
  },
  iconoutlinedotsSpaceBlock: {
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  buttonTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    marginLeft: 8,
  },
  gamefestCmz: {
    top: 0,
    backgroundColor: Color.gray_100,
    overflow: "hidden",
    width: 390,
    left: 0,
    position: "absolute",
    height: 844,
  },
  mapIcon: {
    top: 220,
    right: 23,
    bottom: 53,
    left: 29,
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconoutlinedotsCircleHoriz: {
    display: "none",
    overflow: "hidden",
  },
  iconoutlinedotsCircleHoriz1: {
    width: 20,
    height: 20,
  },
  iconoutlinedotsCircleHoriz2: {
    width: 16,
    height: 16,
  },
  button: {
    fontSize: FontSize.fontSansTextXsSemibold_size,
    lineHeight: 16,
    display: "none",
  },
  button1: {
    fontSize: FontSize.fontSansTextSmSemibold_size,
    lineHeight: 20,
    display: "none",
  },
  button2: {
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    lineHeight: 24,
    display: "none",
  },
  button3: {
    fontSize: FontSize.fontSansTextLgSemibold_size,
    lineHeight: 28,
  },
  iconoutlinedotsCircleHoriz5: {
    height: 24,
    width: 24,
  },
  buttondarken: {
    backgroundColor: "#44459c",
  },
  buttondarken1: {
    opacity: 0.3,
    marginLeft: 2,
  },
  buttondarkenParent: {
    top: 153,
    left: 28,
    borderColor: "#374151",
    borderWidth: 2,
    flexDirection: "row",
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    position: "absolute",
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
  planDevenement: {
    alignSelf: "stretch",
    fontSize: FontSize.size_5xl,
    color: Color.lightsteelblue_100,
    textAlign: "left",
    display: "flex",
    marginLeft: 18,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    alignItems: "center",
    flex: 1,
  },
  menualt2outlineParent: {
    top: 1,
    height: 72,
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    width: 390,
    left: 0,
    position: "absolute",
  },
  planDevenementStrasbourgChild: {
    top: 72,
    borderColor: "rgba(171, 185, 229, 0.5)",
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  planDevenementStrasbourg: {
    height: 844,
    flex: 1,
    width: "100%",
  },
});

export default PlanDevenementStrasbourg;
