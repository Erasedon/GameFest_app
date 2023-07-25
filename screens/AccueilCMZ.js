import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Linking,
  Modal,
  ScrollView,
} from "react-native";
import NavDarkCMZ from "../components/NavDarkCMZ";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AccueilCMZ = () => {
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
      <View style={styles.accueilCmz}>
        <Image
          style={[styles.accueilCmzChild, styles.accueilLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Image
          style={styles.fichier21}
          contentFit="cover"
          source={require("../assets/fichier-2-1-3x.png")}
        />
        <View style={[styles.billet, styles.billetPosition]}>
          <View style={styles.billetChild} />
          <View style={styles.billetItem} />
          <Text style={[styles.retrouvezVosUnivers, styles.jeRserveMonFlexBox]}>
            RETROUVEZ VOS UNIVERS PRÉFÉRÉS, DES ANIMATIONS POUR TOUTE LA FAMILLE
            MAIS AUSSI DES INVITÉS EN DÉDICACES !
          </Text>
          <Image
            style={[styles.image2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
        <Pressable
          style={styles.buttonBillet}
          onPress={() =>
            Linking.openURL("https://www.gamefest-strasbourg.fr/billetterie")
          }
        >
          <View style={[styles.buttonBilletChild, styles.image1IconPosition]} />
          <Text style={[styles.jeRserveMon, styles.jeRserveMonFlexBox]}>
            JE RÉSERVE MON BILLET
          </Text>
        </Pressable>
        <View style={styles.header}>
          <Image
            style={[styles.image1Icon, styles.image1IconPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Image
            style={[styles.logoCmz2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/logo-cmz-2.png")}
          />
        </View>
        <Image
          style={[styles.sliderWidgetIcon, styles.accueilCmzInnerLayout]}
          contentFit="cover"
          source={require("../assets/sliderwidget1.png")}
        />
        <View style={[styles.accueilCmzItem, styles.accueilLayout]} />
        <Text style={[styles.nosPartenaires, styles.jeRserveMonFlexBox]}>
          Nos Partenaires
        </Text>
        <Image
          style={styles.image3Icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={styles.image4Icon}
          contentFit="cover"
          source={require("../assets/image-41.png")}
        />
        <Image
          style={styles.image5Icon}
          contentFit="cover"
          source={require("../assets/image-51.png")}
        />
        <View style={[styles.accueilCmzInner, styles.accueilCmzInnerLayout]} />
        <Text style={[styles.gamefestToutContainer, styles.jeRserveMonFlexBox]}>
          {`
© `}
          <Text style={styles.gamefest}>GAMEFEST</Text>
          {` - TOUT DROIT RÉSERVÉ - `}
          <Text style={styles.gamefest}>MENTIONS LÉGALES</Text>
          {` - `}
          <Text style={styles.gamefest}>CONFIDENTIALITÉ</Text>
        </Text>
        <Pressable
          style={[styles.menualt2outline, styles.billetPosition]}
          onPress={openMenuAlt2OutlineIcon}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/menualt2outline3.png")}
          />
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
  accueilLayout: {
    width: 390,
    position: "absolute",
  },
  billetPosition: {
    left: 13,
    position: "absolute",
  },
  jeRserveMonFlexBox: {
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  image1IconPosition: {
    right: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  accueilCmzInnerLayout: {
    width: 392,
    position: "absolute",
  },
  accueilCmzChild: {
    top: 0,
    height: 87,
    left: 1,
    width: 390,
  },
  fichier21: {
    top: 6,
    left: 291,
    width: 74,
    height: 81,
    display: "none",
    position: "absolute",
  },
  billetChild: {
    height: "124.01%",
    width: "105.99%",
    right: "-2.45%",
    bottom: "-24.01%",
    left: "-3.54%",
    backgroundColor: "rgba(0, 132, 250, 0)",
    top: "0%",
    position: "absolute",
  },
  billetItem: {
    top: 111,
    left: 105,
    backgroundColor: Color.customLevel3BackgroundModalsDropdownsBackground,
    width: 172,
    height: 258,
    position: "absolute",
  },
  retrouvezVosUnivers: {
    height: "27.44%",
    top: "2.9%",
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    left: "0%",
    width: "100%",
  },
  image2Icon: {
    height: "68.07%",
    width: "47.14%",
    top: "26.65%",
    right: "28.34%",
    bottom: "5.28%",
    left: "24.52%",
    position: "absolute",
  },
  billet: {
    top: 293,
    width: 367,
    height: 379,
  },
  buttonBilletChild: {
    bottom: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.gainsboro,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    top: "0%",
  },
  jeRserveMon: {
    height: "65.71%",
    width: "87.89%",
    top: "17.14%",
    left: "4.66%",
    fontWeight: "700",
    fontFamily: FontFamily.notoSansMalayalamUIBold,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
  },
  buttonBillet: {
    top: 699,
    left: 36,
    width: 322,
    height: 35,
    position: "absolute",
  },
  image1Icon: {
    top: "-22.02%",
    bottom: "22.02%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  logoCmz2Icon: {
    height: "92.06%",
    width: "70.56%",
    top: "-19.86%",
    right: "16.55%",
    bottom: "27.8%",
    left: "12.9%",
    position: "absolute",
  },
  header: {
    top: 61,
    width: 389,
    height: 277,
    left: 0,
    position: "absolute",
  },
  sliderWidgetIcon: {
    top: 783,
    height: 325,
    left: 0,
  },
  accueilCmzItem: {
    top: 1093,
    backgroundColor: Color.bluePrimary,
    height: 270,
    left: 0,
  },
  nosPartenaires: {
    top: 1112,
    left: 76,
    fontSize: FontSize.size_10xl,
    color: Color.whitesmoke,
    width: 241,
    height: 30,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
  },
  image3Icon: {
    top: 1179,
    left: 202,
    borderRadius: Border.br_7xs,
    width: 173,
    height: 53,
    position: "absolute",
  },
  image4Icon: {
    top: 1168,
    left: 12,
    width: 125,
    height: 70,
    position: "absolute",
  },
  image5Icon: {
    top: 1259,
    left: 114,
    width: 163,
    height: 74,
    position: "absolute",
  },
  accueilCmzInner: {
    top: 1361,
    left: -1,
    backgroundColor: Color.customLevel2BackgroundCards,
    height: 66,
  },
  gamefest: {
    textDecorationLine: "underline",
  },
  gamefestToutContainer: {
    top: 1346,
    color: Color.lightsteelblue_100,
    width: 381,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    left: 1,
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
    top: 17,
    width: 32,
    height: 32,
  },
  accueilCmz: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 1427,
    width: "100%",
  },
});

export default AccueilCMZ;
