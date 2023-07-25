import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal ,ScrollView,
} from "react-native";
import NavDarkCMZ from "../components/NavDarkCMZ";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";

const StandsCMZ = () => {
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
    <View style={[styles.standsCmz, styles.iconLayout]}>
        <View style={[styles.menualt2outlineParent, styles.parentFlexBox1]}>
          <Pressable
            style={styles.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/menualt2outline2.png")}
            />
          </Pressable>
          <Text style={styles.stands}>{`Stands
`}</Text>
          <View style={styles.searchoutline}>
            <View style={styles.buttondarken}>
              <Image
                style={styles.iconsdarkfilter}
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
              <Text style={styles.button1}>Button</Text>
              <Text style={styles.button2}>Button</Text>
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
                style={[
                  styles.iconoutlinedotsCircleHoriz4,
                  styles.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.standsCmzChild} />
        <View style={styles.standsCmzItem} />
        <View style={[styles.card, styles.cardLayout]}>
          <View style={[styles.cardHeader, styles.cardSpaceBlock1]}>
            <View style={[styles.likes, styles.parentFlexBox1]}>
              <Text style={styles.text}>
                <Text style={styles.text1}>#</Text>
                <Text style={styles.text2}> 102</Text>
              </Text>
            </View>
            <View style={[styles.loremIpsumParent, styles.parentFlexBox]}>
              <Text style={styles.loremIpsum}>Lorem ipsum</Text>
              <View style={styles.bookmark}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.cardFlexBox}>
            <View style={[styles.likes, styles.parentFlexBox1]}>
              <View style={styles.mapShadowBox}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector4.png")}
                />
              </View>
              <Text style={[styles.nStand, styles.nStandTypo]}>n° stand</Text>
            </View>
            <View style={styles.shareFlexBox}>
              <Text
                style={[styles.liensDuStands, styles.nStandTypo]}
              >{`Liens du stands `}</Text>
            </View>
            <View style={[styles.share, styles.shareFlexBox]}>
              <View style={styles.share1}>
                <Image
                  style={styles.vectorIcon2}
                  contentFit="cover"
                  source={require("../assets/vector5.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.unsplash9bx5vfkxytiParent}>
            <Image
              style={[
                styles.unsplash9bx5vfkxytiIcon,
                styles.cardHeader1Position,
              ]}
              contentFit="cover"
              source={require("../assets/unsplash9bx5vfkxyti.png")}
            />
            <View style={[styles.frameChild, styles.childLayout]} />
          </View>
          <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
            <View style={styles.tagdarkenParent}>
              <View style={styles.tagdarkenFlexBox1}>
                <Text style={[styles.abstract, styles.abstractTypo]}>
                  Abstract
                </Text>
              </View>
              <View style={[styles.tagdarken1, styles.tagdarkenFlexBox1]}>
                <Text style={[styles.abstract, styles.abstractTypo]}>
                  SCI-fi
                </Text>
              </View>
              <View style={[styles.tagdarken1, styles.tagdarkenFlexBox1]}>
                <Text style={[styles.abstract, styles.abstractTypo]}>
                  photo
                </Text>
              </View>
            </View>
            <Text
              style={[styles.thereAreMany, styles.thereSpaceBlock]}
              numberOfLines={1}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </Text>
            <View style={[styles.frameParent, styles.thereSpaceBlock]}>
              <View style={styles.parentFlexBox1}>
                <Image
                  style={styles.iconsexternallink}
                  contentFit="cover"
                  source={require("../assets/iconsexternallink3.png")}
                />
                <Text style={styles.visiterLeSite}>Visiter le site</Text>
              </View>
              <View style={styles.parentFlexBox1}>
                <Image
                  style={styles.shareoutlineIcon}
                  contentFit="cover"
                  source={require("../assets/shareoutline3.png")}
                />
                <Text style={styles.visiterLeSite}>Partager</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.card1, styles.cardLayout]}>
          <View style={[styles.cardHeader1, styles.cardHeader1Position]}>
            <View style={[styles.likes, styles.parentFlexBox1]}>
              <Text style={styles.text}>
                <Text style={styles.text1}>#</Text>
                <Text style={styles.text2}> 103</Text>
              </Text>
            </View>
            <View style={[styles.loremIpsumParent, styles.parentFlexBox]}>
              <Text style={styles.loremIpsum}>Pas de titre</Text>
              <View style={styles.bookmark}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={[
              styles.unsplash9bx5vfkxytiIcon1,
              styles.unsplash9bx5vfkxytiIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/unsplash9bx5vfkxyti1.png")}
          />
          <View style={[styles.cardCaption1, styles.cardFlexBox]}>
            <View style={[styles.likes, styles.parentFlexBox1]}>
              <View style={styles.mapShadowBox}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector4.png")}
                />
              </View>
              <Text style={[styles.nStand, styles.nStandTypo]}>n° stand</Text>
            </View>
            <View style={styles.shareFlexBox}>
              <Text
                style={[styles.liensDuStands, styles.nStandTypo]}
              >{`Liens du stands `}</Text>
            </View>
            <View style={[styles.share, styles.shareFlexBox]}>
              <View style={styles.share1}>
                <Image
                  style={styles.vectorIcon2}
                  contentFit="cover"
                  source={require("../assets/vector5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.cardFooter1, styles.cardSpaceBlock]}>
            <View style={styles.tagdarkenParent}>
              <View style={styles.tagdarkenFlexBox}>
                <Text style={[styles.abstract1, styles.abstractTypo]}>
                  Abstract
                </Text>
              </View>
              <View style={[styles.tagdarken4, styles.tagdarkenFlexBox]}>
                <Text style={[styles.abstract1, styles.abstractTypo]}>
                  SCI-fi
                </Text>
              </View>
              <View style={[styles.tagdarken4, styles.tagdarkenFlexBox]}>
                <Text style={[styles.abstract1, styles.abstractTypo]}>
                  photo
                </Text>
              </View>
            </View>
            <Text
              style={[styles.thereAreMany1, styles.thereSpaceBlock]}
              numberOfLines={1}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </Text>
            <View style={[styles.frameParent, styles.thereSpaceBlock]}>
              <View style={styles.parentFlexBox1}>
                <Image
                  style={styles.iconsexternallink}
                  contentFit="cover"
                  source={require("../assets/iconsexternallink3.png")}
                />
                <Text style={styles.visiterLeSite}>Visiter le site</Text>
              </View>
              <View style={styles.parentFlexBox1}>
                <Image
                  style={styles.shareoutlineIcon}
                  contentFit="cover"
                  source={require("../assets/shareoutline3.png")}
                />
                <Text style={styles.visiterLeSite}>Partager</Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardChild, styles.childLayout]} />
        </View>
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
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconoutlinedotsSpaceBlock: {
    display: "none",
    marginLeft: 8,
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
  cardLayout: {
    width: 366,
    left: 12,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  cardSpaceBlock1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    backgroundColor: Color.gray_100,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  nStandTypo: {
    color: Color.steelblue,
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    fontWeight: "700",
    fontSize: FontSize.fontSansTextBaseSemibold_size,
  },
  shareFlexBox: {
    marginLeft: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  cardHeader1Position: {
    zIndex: 0,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  childLayout: {
    height: 186,
    width: 350,
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  cardSpaceBlock: {
    paddingVertical: Padding.p_6xl,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  abstractTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textTransform: "lowercase",
    lineHeight: 20,
    fontSize: FontSize.fontSansTextSmSemibold_size,
    textAlign: "left",
  },
  tagdarkenFlexBox1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.dodgerblue_100,
    borderRadius: Border.br_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  thereSpaceBlock: {
    marginTop: 18,
    alignSelf: "stretch",
  },
  unsplash9bx5vfkxytiIconLayout: {
    height: 200,
    maxWidth: "100%",
    width: "100%",
  },
  cardFlexBox: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_sm,
    height: 42,
    backgroundColor: Color.aliceblue,
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  tagdarkenFlexBox: {
    backgroundColor: Color.lavender,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  menuAlt2OutlineIconOverlay: {
    flex: 1,
    alignItems: "center",
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
  },
  menualt2outline: {
    height: 32,
    width: 32,
  },
  stands: {
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
    maxHeight: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  iconoutlinedotsCircleHoriz: {
    width: 20,
    marginLeft: 8,
    height: 20,
  },
  iconoutlinedotsCircleHoriz1: {
    height: 16,
    width: 16,
    marginLeft: 8,
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
    color: Color.customTextTooltips,
    fontFamily: FontFamily.interSemiboldItalic,
    fontStyle: "italic",
    marginLeft: 8,
    display: "none",
    fontWeight: "600",
  },
  button2: {
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    textAlign: "center",
    color: Color.customTextTooltips,
    fontFamily: FontFamily.interSemiboldItalic,
    fontStyle: "italic",
    marginLeft: 8,
    display: "none",
    fontWeight: "600",
  },
  button3: {
    fontSize: FontSize.fontSansTextLgSemibold_size,
    lineHeight: 28,
    textAlign: "center",
  },
  iconoutlinedotsCircleHoriz4: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  buttondarken: {
    backgroundColor: Color.gray_300,
    borderColor: "#0084fa",
    height: 30,
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
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
    top: 1,
    width: 390,
    height: 72,
    padding: Padding.p_xs,
    left: 0,
    position: "absolute",
    alignItems: "center",
  },
  standsCmzChild: {
    top: 72,
    borderColor: "rgba(0, 132, 250, 0.5)",
    width: 391,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  standsCmzItem: {
    top: 577,
    borderColor: "rgba(0, 132, 250, 0.65)",
    width: 367,
    left: 12,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    fontWeight: "700",
  },
  text2: {
    fontSize: FontSize.fontSansTextSmSemibold_size,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  text: {
    letterSpacing: 1,
    lineHeight: 20,
    textAlign: "left",
    color: Color.bluePrimary,
  },
  likes: {
    overflow: "hidden",
  },
  loremIpsum: {
    fontSize: FontSize.size_9xl,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    flex: 1,
  },
  vectorIcon: {
    width: 16,
    height: 20,
  },
  bookmark: {
    width: 65,
    height: 50,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_10xs,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  loremIpsumParent: {
    alignSelf: "stretch",
  },
  cardHeader: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  vectorIcon1: {
    width: 15,
    height: 18,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  nStand: {
    marginLeft: 5,
    lineHeight: 23,
    color: Color.steelblue,
    letterSpacing: 1,
    textAlign: "left",
  },
  liensDuStands: {
    textAlign: "center",
  },
  vectorIcon2: {
    width: 19,
    height: 20,
  },
  share1: {
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  share: {
    overflow: "hidden",
  },
  unsplash9bx5vfkxytiIcon: {
    height: 200,
    maxWidth: "100%",
    width: "100%",
  },
  frameChild: {
    top: 7,
    left: 8,
    zIndex: 1,
  },
  unsplash9bx5vfkxytiParent: {
    alignSelf: "stretch",
  },
  abstract: {
    color: Color.white,
  },
  tagdarken1: {
    marginLeft: 8,
  },
  tagdarkenParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  thereAreMany: {
    height: 45,
    marginTop: 18,
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
    lineHeight: 23,
    letterSpacing: 1,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    textAlign: "left",
    overflow: "hidden",
    color: Color.white,
  },
  iconsexternallink: {
    width: 11,
    height: 11,
    overflow: "hidden",
  },
  visiterLeSite: {
    marginLeft: 6,
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
    lineHeight: 23,
    fontSize: FontSize.fontSansTextSmSemibold_size,
    textAlign: "left",
    color: Color.bluePrimary,
  },
  shareoutlineIcon: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  frameParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  cardFooter: {
    backgroundColor: Color.gray_100,
    paddingVertical: Padding.p_6xl,
  },
  card: {
    top: 89,
    backgroundColor: Color.dodgerblue_200,
  },
  cardHeader1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    backgroundColor: Color.gray_100,
  },
  unsplash9bx5vfkxytiIcon1: {
    zIndex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardCaption1: {
    zIndex: 2,
  },
  abstract1: {
    color: Color.bluePrimary,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textTransform: "lowercase",
  },
  tagdarken4: {
    marginLeft: 8,
  },
  thereAreMany1: {
    color: Color.defaultGray500,
    height: 45,
    marginTop: 18,
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
    lineHeight: 23,
    letterSpacing: 1,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    textAlign: "left",
    overflow: "hidden",
  },
  cardFooter1: {
    backgroundColor: Color.white,
    zIndex: 3,
  },
  cardChild: {
    top: 111,
    left: 7,
    zIndex: 4,
  },
  card1: {
    top: 593,
    backgroundColor: Color.dodgerblue_300,
  },
  standsCmz: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.gray_100,
  },
});

export default StandsCMZ;
