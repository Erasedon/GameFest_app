import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
  Modal,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavDarkCMZ from "../components/NavDarkCMZ";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";

const Activity = () => {
  const [menuAlt2OutlineIconVisible, setMenuAlt2OutlineIconVisible] =
    useState(false);
  const navigation = useNavigation();

  const openMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(true);
  }, []);

  const closeMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(false);
  }, []);

  return (
    <>
  <ScrollView>
    <View style={[styles.activity, styles.activityLayout]}>
        <View style={[styles.menualt2outlineParent, styles.parentFlexBox]}>
          <Pressable
            style={styles.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/menualt2outline2.png")}
            />
          </Pressable>
          <Text style={styles.activit}>activité</Text>
          <View style={styles.searchoutline}>
            <View style={styles.buttondarken}>
              <Image
                style={[styles.iconsdarkfilter, styles.activityLayout]}
                contentFit="cover"
                source={require("../assets/iconsdarkfilter2.png")}
              />
              <Image
                style={[
                  styles.iconoutlinedotsCircleHoriz,
                  styles.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[
                  styles.iconoutlinedotsCircleHoriz1,
                  styles.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Text style={[styles.button, styles.buttonTypo]}>Button</Text>
              <Text style={[styles.button1, styles.buttonTypo]}>Button</Text>
              <Text style={[styles.button2, styles.buttonTypo]}>Button</Text>
              <Text style={[styles.button3, styles.buttonTypo]}>Button</Text>
              <Image
                style={[
                  styles.iconoutlinedotsCircleHoriz1,
                  styles.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Image
                style={[
                  styles.iconoutlinedotsCircleHoriz,
                  styles.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={styles.iconoutlinedotsCircleHoriz4}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.activityChild} />
        <Pressable
          style={[styles.cardvariant4, styles.cardvariantLayout]}
          onPress={() => navigation.navigate("PlanDevenement")}
        >
          <LinearGradient
            style={styles.cardImage}
            locations={[0.19, 1]}
            colors={["rgba(12, 7, 22, 0.2)", "rgba(12, 7, 22, 0)"]}
          >
            <ImageBackground
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cardimage-3x.png")}
            >
              <View style={styles.overlay}>
                <View style={[styles.header, styles.parentFlexBox]}>
                  <View>
                    <Text style={styles.titreDeLactivit}>
                      Titre de l’activité
                    </Text>
                    <Text style={styles.lieuPlan}>
                      <Text style={[styles.text, styles.textTypo]}>#</Text>
                      <Text style={styles.text1}> 102</Text>
                    </Text>
                  </View>
                  <View style={styles.icons}>
                    <Image
                      style={styles.vectorIconLayout}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                  </View>
                  <View style={styles.mapShadowBox}>
                    <Image
                      style={styles.vectorIcon3}
                      contentFit="cover"
                      source={require("../assets/vector7.png")}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={styles.cardFooter}>
            <View style={styles.header1}>
              <Text
                style={[styles.thereAreMany, styles.textTypo]}
                numberOfLines={1}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </Text>
            </View>
            <View style={[styles.row, styles.parentFlexBox]}>
              <View
                style={[
                  styles.materialSymbolslocalActivitParent,
                  styles.parentFlexBox,
                ]}
              >
                <View
                  style={[
                    styles.materialSymbolslocalActivit,
                    styles.materialShadowBox,
                  ]}
                >
                  <Image
                    style={styles.vectorIcon4}
                    contentFit="cover"
                    source={require("../assets/vector2.png")}
                  />
                </View>
                <Text style={styles.typeDeLactivit}>type de l’activité</Text>
              </View>
              <View style={[styles.wrapper, styles.parentFlexBox]}>
                <Text style={styles.text2}>10:00-13:00</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.cardvariant41, styles.cardvariantLayout]}
          onPress={() => navigation.navigate("PlanDevenement")}
        >
          <LinearGradient
            style={styles.cardImage}
            locations={[0.19, 1]}
            colors={["rgba(12, 7, 22, 0.2)", "rgba(12, 7, 22, 0)"]}
          >
            <ImageBackground
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cardimage-3x.png")}
            >
              <View style={styles.overlay}>
                <View style={[styles.header, styles.parentFlexBox]}>
                  <View>
                    <Text style={styles.titreDeLactivit}>
                      Titre de l’activité
                    </Text>
                    <Text style={styles.lieuPlan}>
                      <Text style={[styles.text, styles.textTypo]}>#</Text>
                      <Text style={styles.text1}> 103</Text>
                    </Text>
                  </View>
                  <View style={styles.icons}>
                    <Image
                      style={styles.vectorIconLayout}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                  </View>
                  <View style={styles.mapShadowBox}>
                    <Image
                      style={styles.vectorIcon3}
                      contentFit="cover"
                      source={require("../assets/vector7.png")}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={styles.cardFooter}>
            <View style={styles.header1}>
              <Text
                style={[styles.thereAreMany, styles.textTypo]}
                numberOfLines={1}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </Text>
            </View>
            <View style={[styles.row, styles.parentFlexBox]}>
              <View
                style={[
                  styles.materialSymbolslocalActivitParent,
                  styles.parentFlexBox,
                ]}
              >
                <View
                  style={[
                    styles.materialSymbolslocalActivit1,
                    styles.materialShadowBox,
                  ]}
                >
                  <Image
                    style={styles.vectorIcon4}
                    contentFit="cover"
                    source={require("../assets/vector2.png")}
                  />
                </View>
                <Text style={styles.typeDeLactivit}>type de l’activité</Text>
              </View>
              <View style={[styles.wrapper, styles.parentFlexBox]}>
                <Text style={styles.text2}>14:00-15:00</Text>
              </View>
            </View>
          </View>
        </Pressable>
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
  activityLayout: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconoutlinedotsSpaceBlock: {
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  buttonTypo: {
    color: Color.customTextTooltips,
    fontFamily: FontFamily.interSemiboldItalic,
    fontStyle: "italic",
    textAlign: "center",
    marginLeft: 8,
    display: "none",
    fontWeight: "600",
  },
  cardvariantLayout: {
    height: 261,
    backgroundColor: Color.bluePrimary,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    fontWeight: "700",
  },
  vectorIconLayout: {
    height: 4,
    width: 4,
  },
  materialShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(41, 207, 147, 0.04)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
  menualt2outline: {
    height: 32,
    width: 32,
  },
  activit: {
    fontSize: FontSize.size_5xl,
    display: "flex",
    marginLeft: 18,
    textAlign: "left",
    color: Color.bluePrimary,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  iconsdarkfilter: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  iconoutlinedotsCircleHoriz: {
    height: 20,
    width: 20,
    marginLeft: 8,
  },
  iconoutlinedotsCircleHoriz1: {
    width: 16,
    height: 16,
  },
  button: {
    fontSize: FontSize.fontSansTextXsSemibold_size,
    lineHeight: 16,
    textAlign: "center",
  },
  button1: {
    lineHeight: 20,
    fontSize: FontSize.fontSansTextSmSemibold_size,
    textAlign: "center",
  },
  button2: {
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    textAlign: "center",
  },
  button3: {
    fontSize: FontSize.fontSansTextLgSemibold_size,
    lineHeight: 28,
    textAlign: "center",
  },
  iconoutlinedotsCircleHoriz4: {
    height: 24,
    width: 24,
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  buttondarken: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_300,
    borderColor: "#0084fa",
    borderWidth: 2,
    height: 30,
    justifyContent: "center",
    borderStyle: "solid",
    padding: Padding.p_7xs,
    width: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  searchoutline: {
    padding: Padding.p_7xs,
    marginLeft: 18,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  menualt2outlineParent: {
    top: 0,
    width: 390,
    height: 72,
    padding: Padding.p_xs,
    left: 0,
    position: "absolute",
    alignItems: "center",
  },
  activityChild: {
    top: 71,
    borderColor: "rgba(0, 132, 250, 0.25)",
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  titreDeLactivit: {
    fontSize: FontSize.size_9xl,
    lineHeight: 38,
    fontWeight: "900",
    fontFamily: FontFamily.notoSansMalayalamUIBlack,
    color: Color.white,
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.size_mini,
  },
  text1: {
    fontSize: FontSize.fontSansTextSmSemibold_size,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  lieuPlan: {
    marginTop: 5,
    width: 310,
    letterSpacing: 1,
    color: Color.white,
    lineHeight: 20,
    textAlign: "left",
  },
  vectorIcon1: {
    marginTop: 4,
  },
  icons: {
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    borderRadius: Border.br_31xl,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  vectorIcon3: {
    height: 23,
    display: "none",
    width: 20,
  },
  mapShadowBox: {
    padding: Padding.p_xl,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: Border.br_81xl,
    height: 40,
    width: 40,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  header: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  overlay: {
    backgroundColor: Color.gray_400,
    padding: Padding.p_6xl,
    alignSelf: "stretch",
    flex: 1,
  },
  icon1: {
    backgroundColor: "transparent",
  },
  cardImage: {
    height: 127,
    width: 360,
  },
  thereAreMany: {
    lineHeight: 23,
    width: 276,
    height: 45,
    letterSpacing: 1,
    fontSize: FontSize.fontSansTextSmSemibold_size,
    textAlign: "left",
    color: Color.bluePrimary,
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    fontWeight: "700",
    overflow: "hidden",
  },
  header1: {
    height: 55,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    width: 310,
    flexDirection: "row",
  },
  vectorIcon4: {
    width: 15,
    height: 11,
  },
  materialSymbolslocalActivit: {
    backgroundColor: Color.mediumseagreen,
  },
  typeDeLactivit: {
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansMalayalamUIMedium,
    marginLeft: 15,
    color: Color.white,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    textAlign: "left",
  },
  materialSymbolslocalActivitParent: {
    flex: 1,
  },
  text2: {
    lineHeight: 14,
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
    letterSpacing: 1,
    color: Color.white,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    textAlign: "center",
  },
  wrapper: {
    justifyContent: "flex-end",
  },
  row: {
    height: 41,
    marginTop: 22,
    width: 310,
  },
  cardFooter: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.gray_200,
    height: 129,
    paddingHorizontal: Padding.p_6xl,
    paddingBottom: Padding.p_6xl,
    marginTop: -1,
    width: 360,
    overflow: "hidden",
  },
  cardvariant4: {
    top: 95,
    left: 12,
  },
  materialSymbolslocalActivit1: {
    backgroundColor: Color.mediumslateblue,
  },
  cardvariant41: {
    top: 391,
    left: 10,
  },
  activity: {
    backgroundColor: Color.gray_100,
    height: 844,
    overflow: "hidden",
  },
});

export default Activity;
