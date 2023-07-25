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
import NavDarkstrasbourg from "../components/NavDarkstrasbourg";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AccueilStrasbourg = () => {
  const [vectorIconVisible, setVectorIconVisible] = useState(false);

  const openVectorIcon = useCallback(() => {
    setVectorIconVisible(true);
  }, []);

  const closeVectorIcon = useCallback(() => {
    setVectorIconVisible(false);
  }, []);

  return (
    <>
  <ScrollView>
    <View style={styles.accueilStrasbourg}>
        <Image
          style={[styles.accueilStrasbourgChild, styles.accueilPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
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
          style={[styles.sliderWidgetIcon, styles.sliderWidgetIconLayout]}
          contentFit="cover"
          source={require("../assets/sliderwidget.png")}
        />
        <View style={[styles.accueilStrasbourgItem, styles.accueilPosition]} />
        <View
          style={[styles.accueilStrasbourgInner, styles.sliderWidgetIconLayout]}
        />
        <Text style={[styles.gamefestToutContainer, styles.jeRserveMonFlexBox]}>
          {`
© `}
          <Text style={styles.gamefest}>GAMEFEST</Text>
          {` - TOUT DROIT RÉSERVÉ - `}
          <Text style={styles.gamefest}>MENTIONS LÉGALES</Text>
          {` - `}
          <Text style={styles.gamefest}>CONFIDENTIALITÉ</Text>
        </Text>
        <Text style={[styles.nosPartenaires, styles.jeRserveMonFlexBox]}>
          Nos Partenaires
        </Text>
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={[styles.image7Icon, styles.billetPosition]}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Image
          style={styles.image8Icon}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
        <Pressable style={styles.vector} onPress={openVectorIcon}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={vectorIconVisible}>
        <View style={styles.vectorIconOverlay}>
          <Pressable style={styles.vectorIconBg} onPress={closeVectorIcon} />
          <NavDarkstrasbourg onClose={closeVectorIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  accueilPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  billetPosition: {
    left: 14,
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
  sliderWidgetIconLayout: {
    width: 392,
    position: "absolute",
  },
  accueilStrasbourgChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    height: 123,
  },
  billetChild: {
    height: "124.01%",
    width: "105.99%",
    right: "-2.45%",
    bottom: "-24.01%",
    left: "-3.54%",
    backgroundColor: "#474bae",
    top: "0%",
    position: "absolute",
  },
  billetItem: {
    top: 111,
    left: 105,
    backgroundColor: "#363972",
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
    top: 277,
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
    top: 683,
    left: 37,
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
    right: "16.54%",
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
    top: 746,
    height: 325,
    left: 0,
  },
  accueilStrasbourgItem: {
    top: 1055,
    backgroundColor: "#6575cc",
    height: 251,
  },
  accueilStrasbourgInner: {
    top: 1303,
    left: -1,
    backgroundColor: Color.customLevel2BackgroundCards,
    height: 65,
  },
  gamefest: {
    textDecorationLine:"underline",
  },
  gamefestToutContainer: {
    top: 1288,
    left: 3,
    color: Color.lightsteelblue_100,
    width: 381,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "center",
    fontSize: FontSize.fontSansTextBaseSemibold_size,
  },
  nosPartenaires: {
    top: 1071,
    left: 78,
    fontSize: FontSize.size_10xl,
    color: Color.whitesmoke,
    width: 241,
    height: 30,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "center",
  },
  image6Icon: {
    top: 1138,
    left: 204,
    borderRadius: Border.br_7xs,
    width: 173,
    height: 53,
    position: "absolute",
  },
  image7Icon: {
    top: 1127,
    width: 125,
    height: 70,
  },
  image8Icon: {
    top: 1218,
    left: 116,
    width: 163,
    height: 74,
    position: "absolute",
  },
  vectorIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "4.7%",
    top: "1.83%",
    right: "89.32%",
    bottom: "96.86%",
    width: "5.98%",
    height: "1.32%",
    position: "absolute",
  },
  accueilStrasbourg: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 1368,
    width: "100%",
  },
});

export default AccueilStrasbourg;
