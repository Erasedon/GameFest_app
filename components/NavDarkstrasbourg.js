import * as React from "react";
import { View, StyleSheet, Text, Pressable, Linking ,ScrollView,} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const NavDarkstrasbourg = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <ScrollView>

    <View style={[styles.navdarkstrasbourg, styles.iconLayout]}>
      <View style={[styles.buttonsParent, styles.parentLayout]}>
        <View style={[styles.buttons, styles.directFlexBox]}>
          <Image
            style={[styles.iconoutlineplusCircle, styles.iconoutlineplusLayout]}
            contentFit="cover"
            source={require("../assets/iconoutlinepluscircle.png")}
          />
          <Image
            style={styles.iconoutlinedotsCircleHoriz}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal11.png")}
            />
          <Image
            style={styles.iconoutlinedotsCircleHoriz1}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal12.png")}
            />
          <Text style={[styles.button, styles.buttonTypo1]}>Create</Text>
          <Text style={[styles.button1, styles.buttonLayout2]}>Create</Text>
          <Text style={[styles.button2, styles.buttonLayout1]}>Create</Text>
          <Text style={[styles.button3, styles.buttonLayout]}>Create</Text>
          <Image
            style={styles.iconoutlinedotsCircleHoriz1}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal12.png")}
            />
          <Image
            style={styles.iconoutlinedotsCircleHoriz}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal11.png")}
            />
          <Image
            style={[
              styles.iconoutlineplusCircle1,
              styles.iconoutlineplusLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconoutlinepluscircle.png")}
            />
        </View>
        <View style={[styles.menuParent, styles.parentLayout]}>
          <View style={[styles.menu, styles.menuLayout1]}>
            <View style={[styles.menuInner, styles.menuInnerPosition]}>
              <Pressable
                style={[
                  styles.iconsdarkhomeParent,
                  styles.gameFestStrasbourgPosition,
                ]}
                onPress={() => navigation.navigate("AccueilStrasbourg")}
                >
                <Image
                  style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsdarkhome.png")}
                  />
                <Text style={[styles.accueilStrasbourg, styles.textTypo]}>
                  Accueil
                </Text>
              </Pressable>
            </View>
            <View style={[styles.inMenuNotification, styles.menuSpaceBlock]}>
              <Text style={[styles.text, styles.textTypo]}>5</Text>
            </View>
          </View>
          <View style={[styles.menu1, styles.menuLayout1]}>
            <View style={[styles.menuChild, styles.menuChildPosition]} />
            <View
              style={[
                styles.iconsdarkfileParent,
                styles.inMenuNotificationPosition,
              ]}
              >
              <Image
                style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsdarkfile.png")}
                />
              <Pressable
                style={styles.planStrasbourg}
                onPress={() => navigation.navigate("PlanDevenementStrasbourg")}
                >
                <Text
                  style={styles.planDeLvenementTypo}
                  >{`Plan de l’évenement `}</Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.menu2, styles.menuLayout1]}>
            <View style={[styles.menuChild, styles.menuChildPosition]} />
            <Pressable
              style={[
                styles.iconsdarkfileParent,
                styles.inMenuNotificationPosition,
              ]}
              onPress={() => navigation.navigate("PlanningStrasbourg")}
              >
              <Image
                style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsdarkfiledown.png")}
                />
              <Pressable
                style={styles.planStrasbourg}
                onPress={() => navigation.navigate("PlanningStrasbourg")}
                >
                <Text style={styles.planDeLvenementTypo}>
                  Planning Activité
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View style={[styles.inMenuNotification1, styles.menuSpaceBlock]}>
            <Text style={[styles.text, styles.textTypo]}>5</Text>
          </View>
          <View style={[styles.menu3, styles.menuLayout1]}>
            <View style={[styles.menuChild, styles.menuChildPosition]} />
            <Pressable
              style={[
                styles.iconsdarkfileParent,
                styles.inMenuNotificationPosition,
              ]}
              onPress={() => navigation.navigate("StandsStrasbourg")}
              >
              <Image
                style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsdarksms.png")}
                />
              <Text
                style={[styles.standStrasbourg, styles.planDeLvenementTypo]}
                >
                Stands
              </Text>
            </Pressable>
          </View>
          <View style={[styles.menu4, styles.menuLayout1]}>
            <View style={[styles.menuChild, styles.menuChildPosition]} />
            <Pressable
              style={[
                styles.iconsdarkfileParent,
                styles.inMenuNotificationPosition,
              ]}
              onPress={() => navigation.navigate("ActivityStrasbourg")}
              >
              <Image
                style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsdarkhistory.png")}
                />
              <Text
                style={[styles.standStrasbourg, styles.planDeLvenementTypo]}
                >
                Activity
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("IPhone14Accueil")}
        >
        <View>
          <View style={[styles.menu5, styles.menuLayout2]}>
            <View style={[styles.frameView, styles.menuInnerSpaceBlock]}>
              <View style={styles.directParent}>
                <View style={[styles.direct, styles.directFlexBox]}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector9.png")}
                    />
                </View>
                <Text style={[styles.listesEvenements, styles.textTypo]}>
                  Listes evenements
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.menu6, styles.menuLayout]}>
            <View style={[styles.menuInner1, styles.menuLayout]}>
              <View style={styles.directParent}>
                <Image
                  style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
                  contentFit="cover"
                  source={require("../assets/iconoutlinecog.png")}
                  />
                <Text style={[styles.listesEvenements, styles.textTypo]}>
                  Parametres
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.menu6, styles.menuLayout]}>
            <View style={[styles.menuInner2, styles.menuInnerSpaceBlock]}>
              <View style={styles.directParent}>
                <Image
                  style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
                  contentFit="cover"
                  source={require("../assets/iconoutlinelogout.png")}
                  />
                <Text style={[styles.listesEvenements, styles.textTypo]}>
                  Logout
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.buttondarkenParent, styles.parentBorder]}>
          <View style={[styles.buttondarken, styles.menuBg]}>
            <Image
              style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
              contentFit="cover"
              source={require("../assets/iconsdarkmoon.png")}
              />
            <Image
              style={styles.iconoutlinedotsCircleHoriz}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
              />
            <Image
              style={styles.iconoutlinedotsCircleHoriz1}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
              />
            <Text style={[styles.button, styles.buttonTypo1]}>Dark</Text>
            <Text style={[styles.button1, styles.buttonLayout2]}>Dark</Text>
            <Text style={[styles.button6, styles.buttonLayout1]}>Dark</Text>
            <Text style={[styles.button7, styles.buttonLayout]}>Dark</Text>
            <Image
              style={styles.iconoutlinedotsCircleHoriz1}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
              />
            <Image
              style={styles.iconoutlinedotsCircleHoriz}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
              />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz8,
                styles.iconoutlineplusLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
              />
          </View>
          <View style={styles.buttondarken1FlexBox}>
            <Image
              style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
              contentFit="cover"
              source={require("../assets/iconsdarksun.png")}
              />
            <Image
              style={styles.iconoutlinedotsCircleHoriz}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
              />
            <Image
              style={styles.iconoutlinedotsCircleHoriz1}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
              />
            <Text style={[styles.button, styles.buttonTypo1]}>Light</Text>
            <Text style={[styles.button1, styles.buttonLayout2]}>Light</Text>
            <Text style={[styles.button6, styles.buttonLayout1]}>Light</Text>
            <Text style={[styles.button7, styles.buttonLayout]}>Light</Text>
            <Image
              style={styles.iconoutlinedotsCircleHoriz1}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
              />
            <Image
              style={styles.iconoutlinedotsCircleHoriz}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
              />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz8,
                styles.iconoutlineplusLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
              />
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.gameFestStrasbourg, styles.gameFestStrasbourgPosition]}
        onPress={() => navigation.navigate("AccueilStrasbourg")}
        >
        <Image
          style={[
            styles.gamefestStrasbourgFondTel1Icon,
            styles.menuChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/gamefest-strasbourg-fond-tel-11.png")}
          />
        <Image
          style={[styles.logoStrasbourg1Icon, styles.logoStrasbourg1IconLayout]}
          contentFit="cover"
          source={require("../assets/logo-strasbourg-11.png")}
          />
        <View
          style={[
            styles.gameFestStrasbourgChild,
            styles.logoStrasbourg1IconLayout,
          ]}
          />
      </Pressable>
      <View style={styles.navdarkstrasbourgChild} />
      <View style={[styles.buttonlightenParent, styles.parentBorder]}>
        <View style={styles.buttonlighten}>
          <Image
            style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
            contentFit="cover"
            source={require("../assets/iconsdarkmoon1.png")}
            />
          <Image
            style={styles.iconoutlinedotsCircleHoriz}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
          <Image
            style={styles.iconoutlinedotsCircleHoriz1}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
          <Text style={[styles.button12, styles.buttonTypo]}>Dark</Text>
          <Text style={[styles.button13, styles.buttonTypo]}>Dark</Text>
          <Text style={[styles.button14, styles.buttonTypo]}>Dark</Text>
          <Text style={[styles.button15, styles.buttonTypo]}>Dark</Text>
          <Image
            style={styles.iconoutlinedotsCircleHoriz1}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
          <Image
            style={styles.iconoutlinedotsCircleHoriz}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
          <Image
            style={[
              styles.iconoutlinedotsCircleHoriz8,
              styles.iconoutlineplusLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
        </View>
        <Pressable
          style={[styles.buttonlighten1, styles.buttondarken1FlexBox]}
          onPress={() =>
            Linking.openURL(
              "https://www.figma.com/proto/srkKWNLLAZJdvDNuMkttGU/GameFest?type=design&node-id=212-1685&t=JgaG8BnVlWNOWgi7-0&scaling=scale-down&page-id=212%3A1640&starting-point-node-id=212%3A1685"
            )
          }
          >
          <Image
            style={[styles.iconsdarkhome, styles.iconoutlineplusLayout]}
            contentFit="cover"
            source={require("../assets/iconsdarksun1.png")}
            />
          <Image
            style={styles.iconoutlinedotsCircleHoriz}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
          <Image
            style={styles.iconoutlinedotsCircleHoriz1}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
          <Text style={[styles.button12, styles.buttonTypo]}>Light</Text>
          <Text style={[styles.button13, styles.buttonTypo]}>Light</Text>
          <Text style={[styles.button14, styles.buttonTypo]}>Light</Text>
          <Pressable
            style={styles.button19}
            onPress={() =>
              Linking.openURL(
                "https://www.figma.com/file/srkKWNLLAZJdvDNuMkttGU/GameFest?type=design&node-id=212-1640&mode=design"
                )
              }
          >
            <Text style={[styles.light, styles.buttonTypo]}>Light</Text>
          </Pressable>
          <Image
            style={styles.iconoutlinedotsCircleHoriz1}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
          <Image
            style={styles.iconoutlinedotsCircleHoriz}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
          <Image
            style={[
              styles.iconoutlinedotsCircleHoriz8,
              styles.iconoutlineplusLayout,
            ]}
            contentFit="cover"
            source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentLayout: {
    height: 304,
    width: 240,
  },
  directFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconoutlineplusLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  buttonTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  buttonLayout2: {
    lineHeight: 20,
    fontSize: FontSize.fontSansTextSmSemibold_size,
    color: Color.white,
    marginLeft: 8,
    display: "none",
  },
  buttonLayout1: {
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    color: Color.white,
    marginLeft: 8,
  },
  buttonLayout: {
    lineHeight: 28,
    fontSize: FontSize.fontSansTextLgSemibold_size,
  },
  menuLayout1: {
    height: 48,
    left: 0,
    width: 240,
    position: "absolute",
  },
  menuInnerPosition: {
    left: 16,
    position: "absolute",
  },
  gameFestStrasbourgPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  menuSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  menuChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  inMenuNotificationPosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
  },
  planDeLvenementTypo: {
    color: Color.defaultGray400,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  menuLayout2: {
    width: 240,
    borderRadius: Border.br_xs,
  },
  menuInnerSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.customLevel2BackgroundCards,
    left: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    position: "absolute",
  },
  menuLayout: {
    height: 40,
    borderRadius: Border.br_xs,
    width: 240,
  },
  parentBorder: {
    borderWidth: 2,
    borderStyle: "solid",
  },
  menuBg: {
    backgroundColor: Color.customLevel3BackgroundModalsDropdownsBackground,
    borderRadius: Border.br_xs,
  },
  logoStrasbourg1IconLayout: {
    height: "93.28%",
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.fontSansTextLgSemibold,
    textAlign: "center",
    fontWeight: "600",
  },
  buttondarken1FlexBox: {
    opacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  iconoutlineplusCircle: {
    height: 24,
    display: "none",
  },
  iconoutlinedotsCircleHoriz: {
    width: 20,
    height: 20,
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  iconoutlinedotsCircleHoriz1: {
    width: 16,
    height: 16,
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  button: {
    color: Color.white,
    lineHeight: 16,
    fontSize: FontSize.fontSansTextXsSemibold_size,
    marginLeft: 8,
    display: "none",
  },
  button1: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  button2: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
  },
  button3: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    color: Color.white,
    marginLeft: 8,
    display: "none",
  },
  iconoutlineplusCircle1: {
    marginLeft: 8,
    height: 24,
  },
  buttons: {
    display: "none",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    backgroundColor: Color.blue600,
    borderRadius: Border.br_xs,
    width: 240,
  },
  iconsdarkhome: {
    height: 24,
  },
  accueilStrasbourg: {
    marginLeft: 16,
    color: Color.white,
  },
  iconsdarkhomeParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuInner: {
    top: 12,
    width: 98,
    height: 24,
  },
  text: {
    color: Color.white,
  },
  inMenuNotification: {
    right: 16,
    bottom: "25%",
    top: "25%",
    height: "50%",
    display: "none",
    backgroundColor: Color.blue600,
  },
  menu: {
    backgroundColor: Color.customLevel3BackgroundModalsDropdownsBackground,
    borderRadius: Border.br_xs,
    top: 0,
  },
  menuChild: {
    opacity: 0,
    backgroundColor: Color.customLevel3BackgroundModalsDropdownsBackground,
    borderRadius: Border.br_xs,
  },
  planStrasbourg: {
    marginLeft: 16,
  },
  iconsdarkfileParent: {
    left: 16,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  menu1: {
    top: 64,
  },
  menu2: {
    top: 128,
  },
  inMenuNotification1: {
    height: "7.89%",
    top: "46.05%",
    right: 10,
    bottom: "46.05%",
    backgroundColor: Color.blueviolet,
  },
  standStrasbourg: {
    marginLeft: 16,
  },
  menu3: {
    top: 192,
  },
  menu4: {
    top: 256,
  },
  menuParent: {
    marginTop: 16,
  },
  buttonsParent: {
    top: 281,
    left: 12,
    position: "absolute",
  },
  vectorIcon: {
    width: 19,
    height: 19,
  },
  direct: {
    width: 33,
    height: 30,
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  listesEvenements: {
    color: Color.customTextTooltips,
    marginLeft: 16,
  },
  directParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    top: -4,
    borderRadius: Border.br_xs,
    width: 240,
  },
  menu5: {
    height: 38,
    borderRadius: Border.br_xs,
  },
  menuInner1: {
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.customLevel2BackgroundCards,
    left: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    position: "absolute",
    top: 0,
  },
  menu6: {
    marginTop: 16,
  },
  menuInner2: {
    top: 0,
    display: "none",
    borderRadius: Border.br_xs,
    width: 240,
  },
  button6: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    display: "none",
  },
  button7: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    color: Color.white,
    marginLeft: 8,
  },
  iconoutlinedotsCircleHoriz8: {
    marginLeft: 8,
    height: 24,
    display: "none",
  },
  buttondarken: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  buttondarkenParent: {
    borderColor: "#252a41",
    width: 218,
    marginTop: 32,
    display: "none",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  frameParent: {
    top: 664,
    left: 13,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  gamefestStrasbourgFondTel1Icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  logoStrasbourg1Icon: {
    width: "92.66%",
    top: "2.61%",
    right: "3.67%",
    bottom: "4.1%",
    left: "3.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gameFestStrasbourgChild: {
    width: "93.22%",
    top: "3.36%",
    right: "3.39%",
    bottom: "3.36%",
    left: "3.39%",
    backgroundColor: Color.gainsboro,
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
  },
  gameFestStrasbourg: {
    height: 263,
    width: 280,
  },
  navdarkstrasbourgChild: {
    left: 280,
    backgroundColor: Color.black,
    width: 390,
    height: 848,
    opacity: 0.2,
    top: -4,
    position: "absolute",
  },
  button12: {
    color: Color.white,
    lineHeight: 16,
    fontSize: FontSize.fontSansTextXsSemibold_size,
    marginLeft: 8,
    display: "none",
  },
  button13: {
    lineHeight: 20,
    fontSize: FontSize.fontSansTextSmSemibold_size,
    color: Color.white,
    marginLeft: 8,
    display: "none",
  },
  button14: {
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    color: Color.white,
    marginLeft: 8,
    display: "none",
  },
  button15: {
    color: Color.customTextTooltips,
    lineHeight: 28,
    fontSize: FontSize.fontSansTextLgSemibold_size,
    marginLeft: 8,
  },
  buttonlighten: {
    width: 119,
    backgroundColor: Color.customLevel2BackgroundCards,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  light: {
    color: Color.customTextTooltips,
    lineHeight: 28,
    fontSize: FontSize.fontSansTextLgSemibold_size,
  },
  button19: {
    marginLeft: 8,
  },
  buttonlighten1: {
    width: 111,
  },
  buttonlightenParent: {
    top: 768,
    left: 14,
    borderColor: "#abadc6",
    width: 241,
    paddingLeft: Padding.p_11xs,
    flexDirection: "row",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  navdarkstrasbourg: {
    backgroundColor: Color.gray_200,
    height: 844,
    width: 280,
  },
});

export default NavDarkstrasbourg;
