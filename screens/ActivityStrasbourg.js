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
import NavDarkstrasbourg from "../components/NavDarkstrasbourg";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";
import ActiviteListComponent from "../components/ActiviteListComponent"; 
import {StyleAStrasbourg} from "../components/Styles/StyleActivite";

const ActivityStrasbourg = () => {
  const [menuAlt2OutlineIconVisible, setMenuAlt2OutlineIconVisible] =
    useState(false);
  const navigation = useNavigation();

  const openMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(true);
  }, []);

  const closeMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(false);
  }, []);
  const isLocal = __DEV__; // Move this line to where it's being used
  const activitecolorregion = "StyleAStrasbourg" ; 

  return (
    <>
  <ScrollView>
    <View style={[StyleAStrasbourg.activityStrasbourg, StyleAStrasbourg.iconsdarkfilterLayout]}>
        <View style={[StyleAStrasbourg.menualt2outlineParent, StyleAStrasbourg.parentFlexBox]}>
          <Pressable
            style={StyleAStrasbourg.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={StyleAStrasbourg.iconLayout}
              contentFit="cover"
              source={require("../assets/menualt2outline1.png")}
            />
          </Pressable>
          <Text style={StyleAStrasbourg.activits}>{`activités`}</Text>
          <View style={StyleAStrasbourg.searchoutline}>
            <View style={StyleAStrasbourg.buttondarken}>
              <Image
                style={[StyleAStrasbourg.iconsdarkfilter, StyleAStrasbourg.iconsdarkfilterLayout]}
                contentFit="cover"
                source={require("../assets/iconsdarkfilter1.png")}
              />
              <Image
                style={[
                  StyleAStrasbourg.iconoutlinedotsCircleHoriz,
                  StyleAStrasbourg.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[
                  StyleAStrasbourg.iconoutlinedotsCircleHoriz1,
                  StyleAStrasbourg.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Text style={[StyleAStrasbourg.button, StyleAStrasbourg.buttonTypo]}>Button</Text>
              <Text style={[StyleAStrasbourg.button1, StyleAStrasbourg.buttonTypo]}>Button</Text>
              <Text style={[StyleAStrasbourg.button2, StyleAStrasbourg.buttonTypo]}>Button</Text>
              <Text style={[StyleAStrasbourg.button3, StyleAStrasbourg.buttonTypo]}>Button</Text>
              <Image
                style={[
                  StyleAStrasbourg.iconoutlinedotsCircleHoriz1,
                  StyleAStrasbourg.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Image
                style={[
                  StyleAStrasbourg.iconoutlinedotsCircleHoriz,
                  StyleAStrasbourg.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={StyleAStrasbourg.iconoutlinedotsCircleHoriz4}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
        <ActiviteListComponent isLocal={isLocal} activitecolorregion={activitecolorregion} />
        <Pressable
          style={[StyleAStrasbourg.cardvariant41, StyleAStrasbourg.cardvariantLayout]}
          onPress={() => navigation.navigate("PlanDevenementStrasbourg")}
        >
          <LinearGradient
            style={StyleAStrasbourg.cardImage}
            locations={[0.19, 1]}
            colors={["rgba(12, 7, 22, 0.2)", "rgba(12, 7, 22, 0)"]}
          >
            <ImageBackground
              style={[StyleAStrasbourg.icon1, StyleAStrasbourg.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cardimage-3x.png")}
            >
              <View style={StyleAStrasbourg.overlay}>
                <View style={[StyleAStrasbourg.header, StyleAStrasbourg.parentFlexBox]}>
                  <View>
                    <Text style={StyleAStrasbourg.titreDeLactivit}>
                      Titre de l’activité
                    </Text>
                    <Text style={StyleAStrasbourg.lieuPlan}>
                      <Text style={[StyleAStrasbourg.text, StyleAStrasbourg.textTypo]}>#</Text>
                      <Text style={StyleAStrasbourg.text1}> 103</Text>
                    </Text>
                  </View>
                  <View style={StyleAStrasbourg.icons}>
                    <Image
                      style={StyleAStrasbourg.vectorIconLayout}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[StyleAStrasbourg.vectorIcon1, StyleAStrasbourg.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[StyleAStrasbourg.vectorIcon1, StyleAStrasbourg.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                  </View>
                  <View style={StyleAStrasbourg.mapShadowBox}>
                    <Image
                      style={StyleAStrasbourg.vectorIcon3}
                      contentFit="cover"
                      source={require("../assets/vector7.png")}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={StyleAStrasbourg.cardFooter}>
            <View style={StyleAStrasbourg.header1}>
              <Text
                style={[StyleAStrasbourg.thereAreMany, StyleAStrasbourg.textTypo]}
                numberOfLines={1}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </Text>
            </View>
            <View style={[StyleAStrasbourg.row, StyleAStrasbourg.parentFlexBox]}>
              <View
                style={[
                  StyleAStrasbourg.materialSymbolslocalActivitParent,
                  StyleAStrasbourg.parentFlexBox,
                ]}
              >
                <View
                  style={[
                    StyleAStrasbourg.materialSymbolslocalActivit1,
                    StyleAStrasbourg.materialShadowBox,
                  ]}
                >
                  <Image
                    style={StyleAStrasbourg.vectorIcon4}
                    contentFit="cover"
                    source={require("../assets/vector2.png")}
                  />
                </View>
                <Text style={StyleAStrasbourg.typeDeLactivit}>type de l’activité</Text>
              </View>
              <View style={[StyleAStrasbourg.wrapper, StyleAStrasbourg.parentFlexBox]}>
                <Text style={StyleAStrasbourg.text2}>14:00-15:00</Text>
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
        <View style={StyleAStrasbourg.menuAlt2OutlineIconOverlay}>
          <Pressable
            style={StyleAStrasbourg.menuAlt2OutlineIconBg}
            onPress={closeMenuAlt2OutlineIcon}
          />
          <NavDarkstrasbourg onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};



export default ActivityStrasbourg;
