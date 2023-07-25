import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal,ScrollView,} from "react-native";
import { Image } from "expo-image";
import NavDarknancy from "../components/NavDarknancy";
import { Border, Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const StandsNANCY = () => {
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
    <View style={[styles.standsNancy, styles.iconLayout]}>
        <View style={[styles.standsNancyChild, styles.standsLayout]} />
        <View style={[styles.card, styles.cardLayout]}>
          <View style={[styles.cardHeader, styles.cardSpaceBlock4]}>
            <View style={styles.likes}>
              <Text style={[styles.text, styles.textFlexBox]}>
                <Text style={styles.text1}>#</Text>
                <Text style={[styles.text2, styles.text2Typo]}> 102</Text>
              </Text>
            </View>
            <View style={[styles.loremIpsumParent, styles.parentFlexBox]}>
              <Text style={[styles.loremIpsum, styles.text2Typo]}>
                Lorem ipsum
              </Text>
              <View style={styles.bookmark}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.cardCaption, styles.cardCommon]}>
            <View style={styles.likes}>
              <View style={styles.mapShadowBox}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector4.png")}
                />
              </View>
              <Text style={styles.nStand}>n° stand</Text>
            </View>
            <View style={styles.shareFlexBox}>
              <Text style={styles.liensDuStands}>{`Liens du stands `}</Text>
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
              <View style={styles.iconsexternallinkParent}>
                <Image
                  style={styles.iconsexternallink}
                  contentFit="cover"
                  source={require("../assets/iconsexternallink-3x.png")}
                />
                <Text style={[styles.visiterLeSite, styles.visiterTypo]}>
                  Visiter le site
                </Text>
              </View>
              <View style={styles.iconsexternallinkParent}>
                <Image
                  style={styles.shareoutlineIcon}
                  contentFit="cover"
                  source={require("../assets/shareoutline.png")}
                />
                <Text style={[styles.visiterLeSite, styles.visiterTypo]}>
                  Partager
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.card1, styles.cardLayout]}>
          <View style={[styles.cardHeader1, styles.cardHeader1Position]}>
            <View style={styles.likes}>
              <Text style={[styles.text3, styles.textFlexBox]}>
                <Text style={styles.text1}>#</Text>
                <Text style={[styles.text2, styles.text2Typo]}> 103</Text>
              </Text>
            </View>
            <View style={[styles.loremIpsumParent, styles.parentFlexBox]}>
              <Text style={[styles.loremIpsum, styles.text2Typo]}>
                Pas de titre
              </Text>
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
          <View style={[styles.cardCaption1, styles.cardCommon]}>
            <View style={styles.likes}>
              <View style={styles.mapShadowBox}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector4.png")}
                />
              </View>
              <Text style={styles.nStand}>n° stand</Text>
            </View>
            <View style={styles.shareFlexBox}>
              <Text style={styles.liensDuStands}>{`Liens du stands `}</Text>
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
              <View style={styles.iconsexternallinkParent}>
                <Image
                  style={styles.iconsexternallink}
                  contentFit="cover"
                  source={require("../assets/iconsexternallink1.png")}
                />
                <Text style={[styles.visiterLeSite1, styles.visiterTypo]}>
                  Visiter le site
                </Text>
              </View>
              <View style={styles.iconsexternallinkParent}>
                <Image
                  style={styles.shareoutlineIcon}
                  contentFit="cover"
                  source={require("../assets/shareoutline1.png")}
                />
                <Text style={[styles.visiterLeSite1, styles.visiterTypo]}>
                  Partager
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardChild, styles.childLayout]} />
        </View>
        <View
          style={[styles.menualt2outlineParent, styles.standsNancyItemPosition]}
        >
          <Pressable
            style={styles.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/menualt2outline.png")}
            />
          </Pressable>
          <Text style={[styles.stands, styles.text2Typo]}>{`Stands
`}</Text>
          <View style={[styles.searchoutline, styles.buttondarkenFlexBox]}>
            <View style={[styles.buttondarken, styles.buttondarkenFlexBox]}>
              <Image
                style={styles.iconsdarkfilter}
                contentFit="cover"
                source={require("../assets/iconsdarkfilter.png")}
              />
              <Image
                style={[styles.iconoutlinedotsCircleHoriz, styles.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[styles.iconoutlinedotsCircleHoriz1, styles.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Text style={[styles.button, styles.buttonTypo]}>Button</Text>
              <Text style={[styles.button1, styles.buttonTypo]}>Button</Text>
              <Text style={[styles.button2, styles.buttonTypo]}>Button</Text>
              <Text style={[styles.button3, styles.buttonTypo]}>Button</Text>
              <Image
                style={[styles.iconoutlinedotsCircleHoriz1, styles.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Image
                style={[styles.iconoutlinedotsCircleHoriz, styles.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[styles.iconoutlinedotsCircleHoriz4, styles.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={[styles.standsNancyItem, styles.standsNancyItemPosition]}
        />
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
          <NavDarknancy onClose={closeMenuAlt2OutlineIcon} />
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
  standsLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  cardLayout: {
    width: 366,
    borderRadius: Border.br_xs,
    left: 12,
    position: "absolute",
  },
  cardSpaceBlock4: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    backgroundColor: Color.gray_100,
  },
  textFlexBox: {
    letterSpacing: 1,
    textAlign: "left",
    lineHeight: 20,
  },
  text2Typo: {
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  cardCommon: {
    display: "none",
    overflow: "hidden",
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
    justifyContent: "center",
    paddingHorizontal: 0,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  abstractTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textTransform: "lowercase",
    fontSize: FontSize.fontSansTextSmSemibold_size,
    textAlign: "left",
    lineHeight: 20,
  },
  tagdarkenFlexBox1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.mediumvioletred_400,
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
  visiterTypo: {
    marginLeft: 6,
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
    lineHeight: 23,
    fontSize: FontSize.fontSansTextSmSemibold_size,
    textAlign: "left",
  },
  unsplash9bx5vfkxytiIconLayout: {
    height: 200,
    maxWidth: "100%",
    width: "100%",
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
  standsNancyItemPosition: {
    left: 0,
    position: "absolute",
  },
  buttondarkenFlexBox: {
    padding: Padding.p_7xs,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonTypo: {
    color: Color.customTextTooltips,
    fontFamily: FontFamily.interSemiboldItalic,
    fontStyle: "italic",
    marginLeft: 8,
    textAlign: "center",
    display: "none",
    fontWeight: "600",
  },
  standsNancyChild: {
    top: 577,
    borderColor: "rgba(248, 110, 194, 0.65)",
    width: 367,
    left: 12,
    position: "absolute",
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  text1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    fontWeight: "700",
  },
  text2: {
    fontSize: FontSize.fontSansTextSmSemibold_size,
  },
  text: {
    color: "#f143a9",
    textAlign: "left",
    lineHeight: 20,
  },
  likes: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  loremIpsum: {
    fontSize: FontSize.size_9xl,
    color: Color.white,
    textAlign: "left",
    flex: 1,
  },
  vectorIcon: {
    height: 20,
    width: 16,
  },
  bookmark: {
    width: 65,
    height: 50,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    borderRadius: Border.br_31xl,
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
    color: Color.steelblue,
    lineHeight: 23,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 1,
  },
  liensDuStands: {
    textAlign: "center",
    color: Color.steelblue,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    fontWeight: "700",
  },
  vectorIcon2: {
    width: 19,
    height: 20,
  },
  share1: {
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    justifyContent: "center",
    borderRadius: Border.br_31xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  share: {
    overflow: "hidden",
  },
  cardCaption: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_sm,
    height: 42,
    backgroundColor: Color.aliceblue,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
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
    flexDirection: "row",
    alignSelf: "stretch",
  },
  thereAreMany: {
    height: 45,
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
    marginTop: 18,
    lineHeight: 23,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    textAlign: "left",
    letterSpacing: 1,
    overflow: "hidden",
    color: Color.white,
  },
  iconsexternallink: {
    width: 11,
    height: 11,
    overflow: "hidden",
  },
  visiterLeSite: {
    color: Color.mediumvioletred_200,
  },
  iconsexternallinkParent: {
    alignItems: "center",
    flexDirection: "row",
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
  },
  card: {
    top: 89,
    backgroundColor: Color.dodgerblue_200,
  },
  text3: {
    color: Color.mediumvioletred_200,
    textAlign: "left",
    lineHeight: 20,
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
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_sm,
    height: 42,
    backgroundColor: Color.aliceblue,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  abstract1: {
    color: Color.mediumvioletred_200,
  },
  tagdarken4: {
    marginLeft: 8,
  },
  thereAreMany1: {
    color: Color.defaultGray500,
    height: 45,
    fontFamily: FontFamily.notoSansMalayalamUIRegular,
    marginTop: 18,
    lineHeight: 23,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    textAlign: "left",
    letterSpacing: 1,
    overflow: "hidden",
  },
  visiterLeSite1: {
    color: Color.mediumvioletred_400,
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
  },
  menualt2outline: {
    height: 32,
    width: 32,
  },
  stands: {
    fontSize: FontSize.size_5xl,
    color: Color.mediumvioletred_300,
    display: "flex",
    marginLeft: 18,
    textAlign: "left",
    alignItems: "center",
    alignSelf: "stretch",
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
    marginLeft: 8,
    width: 16,
  },
  button: {
    fontSize: FontSize.fontSansTextXsSemibold_size,
    lineHeight: 16,
  },
  button1: {
    fontSize: FontSize.fontSansTextSmSemibold_size,
    lineHeight: 20,
  },
  button2: {
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    color: Color.customTextTooltips,
    fontFamily: FontFamily.interSemiboldItalic,
    fontStyle: "italic",
  },
  button3: {
    fontSize: FontSize.fontSansTextLgSemibold_size,
    lineHeight: 28,
  },
  iconoutlinedotsCircleHoriz4: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  buttondarken: {
    backgroundColor: Color.gray_300,
    borderColor: "#c3136c",
    height: 30,
    width: 32,
    borderWidth: 2,
    padding: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    borderStyle: "solid",
  },
  searchoutline: {
    marginLeft: 18,
    overflow: "hidden",
  },
  menualt2outlineParent: {
    top: 1,
    width: 390,
    height: 72,
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  standsNancyItem: {
    top: 72,
    borderColor: "rgba(248, 110, 194, 0.5)",
    width: 391,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  standsNancy: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.gray_100,
  },
});

export default StandsNANCY;
