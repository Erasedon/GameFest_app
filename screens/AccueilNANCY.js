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
import NavDarknancy from "../components/NavDarknancy";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AccueilNANCY = () => {
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
    <View style={styles.accueilNancy}>
        <View style={styles.billet}>
          <View style={styles.billetChild} />
          <View style={styles.billetItem} />
          <Text style={[styles.retrouvezVosUnivers, styles.jeRserveMonFlexBox]}>
            RETROUVEZ VOS UNIVERS PRÉFÉRÉS, DES ANIMATIONS POUR TOUTE LA FAMILLE
            MAIS AUSSI DES INVITÉS EN DÉDICACES !
          </Text>
          <Image
            style={[styles.image2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-21.png")}
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
        <View style={[styles.header, styles.headerPosition]}>
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
          style={[styles.logoNancy1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/logo-nancy-11.png")}
        />
        <Image
          style={[styles.sliderWidgetIcon, styles.sliderWidgetIconLayout]}
          contentFit="cover"
          source={require("../assets/sliderwidget1.png")}
        />
        <View
          style={[styles.accueilNancyItem, styles.sliderWidgetIconLayout]}
        />
        <Text style={[styles.gamefestToutContainer, styles.headerPosition]}>
          {`
© `}
          <Text style={styles.gamefest}>GAMEFEST</Text>
          {` - TOUT DROIT RÉSERVÉ - `}
          <Text style={styles.gamefest}>MENTIONS LÉGALES</Text>
          {` - `}
          <Text style={styles.gamefest}>CONFIDENTIALITÉ</Text>
        </Text>
        <View style={styles.accueilNancyInner} />
        <Text style={[styles.nosPartenaires, styles.jeRserveMonFlexBox]}>
          Nos Partenaires
        </Text>
        <Image
          style={styles.image3Icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={[styles.image4Icon, styles.image4IconPosition]}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={styles.image5Icon}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Pressable
          style={[styles.menualt2outline, styles.image4IconPosition]}
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
          <NavDarknancy onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  jeRserveMonFlexBox: {
    textAlign: "center",
    lineHeight: 24,
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
  headerPosition: {
    left: 1,
    position: "absolute",
  },
  sliderWidgetIconLayout: {
    width: 392,
    position: "absolute",
  },
  image4IconPosition: {
    left: 12,
    position: "absolute",
  },
  accueilNancyChild: {
    top: 0,
    width: 391,
    height: 123,
    left: -1,
    position: "absolute",
  },
  billetChild: {
    height: "124.01%",
    width: "105.99%",
    right: "-2.45%",
    bottom: "-24.01%",
    left: "-3.54%",
    backgroundColor: Color.mediumvioletred_300,
    top: "0%",
    position: "absolute",
  },
  billetItem: {
    top: 111,
    left: 105,
    backgroundColor: Color.mediumvioletred_400,
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
    position: "absolute",
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
    top: 276,
    left: 14,
    width: 367,
    height: 385,
    position: "absolute",
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
    position: "absolute",
  },
  buttonBillet: {
    top: 688,
    left: 37,
    width: 322,
    height: 36,
    position: "absolute",
  },
  image1Icon: {
    top: "-21.66%",
    bottom: "21.66%",
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
    display: "none",
    position: "absolute",
  },
  header: {
    top: 60,
    width: 389,
    height: 277,
  },
  logoNancy1Icon: {
    height: "15.69%",
    width: "68.97%",
    top: "2.2%",
    right: "14.87%",
    bottom: "82.11%",
    left: "16.15%",
    position: "absolute",
  },
  sliderWidgetIcon: {
    top: 753,
    height: 325,
    left: 0,
  },
  accueilNancyItem: {
    top: 1332,
    backgroundColor: Color.customLevel2BackgroundCards,
    height: 66,
    left: -1,
  },
  gamefest: {
    textDecorationLine:"underline",
  },
  gamefestToutContainer: {
    top: 1317,
    color: Color.lightsteelblue_100,
    width: 381,
    textAlign: "center",
    lineHeight: 24,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    left: 1,
  },
  accueilNancyInner: {
    top: 1062,
    backgroundColor: "#fde6f5",
    width: 390,
    height: 270,
    left: 0,
    position: "absolute",
  },
  nosPartenaires: {
    top: 1080,
    left: 75,
    fontSize: FontSize.size_10xl,
    color: Color.mediumvioletred_300,
    width: 247,
    height: 30,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  image3Icon: {
    top: 1148,
    left: 202,
    borderRadius: Border.br_7xs,
    width: 173,
    height: 53,
    position: "absolute",
  },
  image4Icon: {
    top: 1137,
    width: 125,
    height: 70,
  },
  image5Icon: {
    top: 1228,
    left: 114,
    width: 163,
    height: 74,
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
    top: 20,
    width: 32,
    height: 32,
  },
  accueilNancy: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 1398,
    width: "100%",
  },
});

export default AccueilNANCY;
