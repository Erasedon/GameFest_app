
import React, {useState, useEffect} from 'react';
import { Image } from "expo-image";
import { StyleSheet, View, Pressable,ScrollView,Vibration,
} from "react-native";
import  screenHeight from "../components/Dimensions.js";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles.js";

const AccueilPrincipal = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.AccueilPrincipal}>
    <Image
        style={styles.fond1Icon}
        contentFit="cover"
        source={require("../assets/fond-1-3x.png")}
        />
      <Pressable
        style={[styles.gameFestCmz, styles.gameLayout]}
        onPress={() =>  Vibration.vibrate() & navigation.navigate("AccueilCMZ")}
        >
        <Image
          style={[styles.fondCharlevilleTel1Icon, styles.logoIconLayout]}
          contentFit="cover"
          source={require("../assets/fond-charleville-tel-1-3x.png")}
          />
        <Image
          style={[styles.logoCmz1Icon, styles.logoIconLayout]}
          contentFit="cover"
          source={require("../assets/logo-cmz-1-3x.png")}
        />
        <View style={[styles.gameFestCmzChild, styles.gameChildBorder]} />
      </Pressable>
      <Pressable
        style={[styles.gameFestStrasbourg, styles.gameLayout]}
        onPress={() => Vibration.vibrate() & navigation.navigate("AccueilStrasbourg")}
        >
        <Image
          style={[styles.fondCharlevilleTel1Icon, styles.logoIconLayout]}
          contentFit="cover"
          source={require("../assets/gamefest-strasbourg-fond-tel-1.png")}
          />
        <Image
          style={[styles.logoStrasbourg1Icon, styles.logoStrasbourg1IconLayout]}
          contentFit="cover"
          source={require("../assets/logo-strasbourg-1.png")}
          />
        <View
          style={[
            styles.gameFestStrasbourgChild,
            styles.logoStrasbourg1IconLayout,
          ]}
          />
      </Pressable>
      <Pressable
        style={[styles.gameFestNancy, styles.gameLayout]}
        onPress={() => Vibration.vibrate() & navigation.navigate("AccueilNANCY")}
        >
        <Image
          style={[styles.fondCharlevilleTel1Icon, styles.logoIconLayout]}
          contentFit="cover"
          source={require("../assets/fond-nancy-tel-1.png")}
          />
        <Image
          style={[styles.logoNancy1Icon, styles.logoIconLayout]}
          contentFit="cover"
          source={require("../assets/logo-nancy-1.png")}
          />
        <View style={[styles.gameFestNancyChild, styles.gameChildBorder]} />
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gameLayout: {
    marginTop:"10%",
    width: "92%",
    position: "absolute",
  },
  logoIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gameChildBorder: {
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.gainsboro,
  },
  logoStrasbourg1IconLayout: {
    height: "93.28%",
    position: "absolute",
  },
  fond1Icon: {
    height:"100%",
    position: "relative" 
  },
  fondCharlevilleTel1Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  logoCmz1Icon: {
    height: "89.11%",
    width: "77.97%",
    right: "11.02%",
    bottom: "5.27%",
    left: "11.02%",
    top: "5.62%",
    position: "absolute",
  },
  gameFestCmzChild: {
    height: "89.54%",
    width: "94.07%",
    bottom: "4.83%",
    left: "2.26%",
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.gainsboro,
    position: "absolute",
    right: "3.67%",
    top: "5.62%",
  },
  gameFestCmz: {
    top: 592,
    height: 232,
    left: 18,
    width: 354,
  },
  logoStrasbourg1Icon: {
    width: "92.66%",
    top: "2.61%",
    bottom: "4.1%",
    left: "3.67%",
    right: "3.67%",
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
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.gainsboro,
  },
  gameFestStrasbourg: {
    top: 21,
    height: 255,
    left: 18,
    width: 354,
  },
  logoNancy1Icon: {
    height: "87.4%",
    width: "89.83%",
    top: "6.1%",
    right: "5.08%",
    bottom: "6.5%",
    left: "5.08%",
    position: "absolute",
  },
  gameFestNancyChild: {
    height: "92.28%",
    width: "94.92%",
    top: "3.25%",
    right: "2.82%",
    bottom: "4.47%",
    left: "2.26%",
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  gameFestNancy: {
    top: 311,
    left: 20,
    height: 246,
  },
  AccueilPrincipal: {
    backgroundColor: Color.black,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height:screenHeight,
    position: "relative",
  },
});

export default AccueilPrincipal;
