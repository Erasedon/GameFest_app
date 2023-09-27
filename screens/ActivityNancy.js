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
import NavDarknancy from "../components/NavDarknancy";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";
import ActiviteListComponent from "../components/ActiviteListComponent"; 
import {StyleANancy} from "../components/Styles/StyleActivite";

const ActivityNancy = () => {
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
  const activitecolorregion = "StyleANancy" ; 
  return (
    <>
  <ScrollView>
    <View style={[StyleANancy.activityNancy, StyleANancy.activityNancyLayout]}>
        <View style={[StyleANancy.menualt2outlineParent, StyleANancy.parentFlexBox]}>
          <Pressable
            style={StyleANancy.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={StyleANancy.iconLayout}
              contentFit="cover"
              source={require("../assets/menualt2outline.png")}
            />
          </Pressable>
          <Text style={StyleANancy.activits}>{`Activités`}</Text>
          <View style={StyleANancy.searchoutline}>
            <View style={StyleANancy.buttondarken}>
              <Image
                style={[StyleANancy.iconsdarkfilter, StyleANancy.activityNancyLayout]}
                contentFit="cover"
                source={require("../assets/iconsdarkfilter.png")}
              />
              <Image
                style={[
                  StyleANancy.iconoutlinedotsCircleHoriz,
                  StyleANancy.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[
                  StyleANancy.iconoutlinedotsCircleHoriz1,
                  StyleANancy.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Text style={[StyleANancy.button, StyleANancy.buttonTypo]}>Button</Text>
              <Text style={[StyleANancy.button1, StyleANancy.buttonTypo]}>Button</Text>
              <Text style={[StyleANancy.button2, StyleANancy.buttonTypo]}>Button</Text>
              <Text style={[StyleANancy.button3, StyleANancy.buttonTypo]}>Button</Text>
              <Image
                style={[
                  StyleANancy.iconoutlinedotsCircleHoriz1,
                  StyleANancy.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Image
                style={[
                  StyleANancy.iconoutlinedotsCircleHoriz,
                  StyleANancy.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={StyleANancy.iconoutlinedotsCircleHoriz4}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
        <ActiviteListComponent isLocal={isLocal} activitecolorregion={activitecolorregion} /> 
         {/* <Pressable
          style={[StyleANancy.cardvariant4, StyleANancy.cardvariantLayout]}
          onPress={() => navigation.navigate("PlanDevenementNanncy")}
        >
          <LinearGradient
            style={StyleANancy.cardImage}
            locations={[0.19, 1]}
            colors={["rgba(12, 7, 22, 0.2)", "rgba(12, 7, 22, 0)"]}
          >
            <ImageBackground
              style={[StyleANancy.icon1, StyleANancy.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cardimage-3x.png")}
            >
              <View style={StyleANancy.overlay}>
                <View style={[StyleANancy.header, StyleANancy.parentFlexBox]}>
                  <View>
                    <Text style={StyleANancy.titreDeLactivit}>
                      Titre de l’activité
                    </Text>
                    <Text style={StyleANancy.lieuPlan}>
                      <Text style={[StyleANancy.text, StyleANancy.textTypo]}>#</Text>
                      <Text style={StyleANancy.text1}> 102</Text>
                    </Text>
                  </View>
                  <View style={StyleANancy.icons}>
                    <Image
                      style={StyleANancy.vectorIconLayout}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[StyleANancy.vectorIcon1, StyleANancy.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[StyleANancy.vectorIcon1, StyleANancy.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                  </View>
                  <View style={StyleANancy.mapShadowBox}>
                    <Image
                      style={StyleANancy.vectorIcon3}
                      contentFit="cover"
                      source={require("../assets/vector7.png")}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={StyleANancy.cardFooter}>
            <View style={StyleANancy.header1}>
              <Text
                style={[StyleANancy.thereAreMany, StyleANancy.textTypo]}
                numberOfLines={1}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </Text>
            </View>
            <View style={[StyleANancy.row, StyleANancy.parentFlexBox]}>
              <View
                style={[
                  StyleANancy.materialSymbolslocalActivitParent,
                  StyleANancy.parentFlexBox,
                ]}
              >
                <View
                  style={[
                    StyleANancy.materialSymbolslocalActivit,
                    StyleANancy.materialShadowBox,
                  ]}
                >
                  <Image
                    style={StyleANancy.vectorIcon4}
                    contentFit="cover"
                    source={require("../assets/vector2.png")}
                  />
                </View>
                <Text style={StyleANancy.typeDeLactivit}>type de l’activité</Text>
              </View>
              <View style={[StyleANancy.wrapper, StyleANancy.parentFlexBox]}>
                <Text style={StyleANancy.text2}>10:00-13:00</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[StyleANancy.cardvariant41, StyleANancy.cardvariantLayout]}
          onPress={() => navigation.navigate("PlanDevenementNanncy")}
        >
          <LinearGradient
            style={StyleANancy.cardImage}
            locations={[0.19, 1]}
            colors={["rgba(12, 7, 22, 0.2)", "rgba(12, 7, 22, 0)"]}
          >
            <ImageBackground
              style={[StyleANancy.icon1, StyleANancy.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cardimage-3x.png")}
            >
              <View style={StyleANancy.overlay}>
                <View style={[StyleANancy.header, StyleANancy.parentFlexBox]}>
                  <View>
                    <Text style={StyleANancy.titreDeLactivit}>
                      Titre de l’activité
                    </Text>
                    <Text style={StyleANancy.lieuPlan}>
                      <Text style={[StyleANancy.text, StyleANancy.textTypo]}>#</Text>
                      <Text style={StyleANancy.text1}> 103</Text>
                    </Text>
                  </View>
                  <View style={StyleANancy.icons}>
                    <Image
                      style={StyleANancy.vectorIconLayout}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[StyleANancy.vectorIcon1, StyleANancy.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[StyleANancy.vectorIcon1, StyleANancy.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                  </View>
                  <View style={StyleANancy.mapShadowBox}>
                    <Image
                      style={StyleANancy.vectorIcon3}
                      contentFit="cover"
                      source={require("../assets/vector7.png")}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={StyleANancy.cardFooter}>
            <View style={StyleANancy.header1}>
              <Text
                style={[StyleANancy.thereAreMany, StyleANancy.textTypo]}
                numberOfLines={1}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </Text>
            </View>
            <View style={[StyleANancy.row, StyleANancy.parentFlexBox]}>
              <View
                style={[
                  StyleANancy.materialSymbolslocalActivitParent,
                  StyleANancy.parentFlexBox,
                ]}
              >
                <View
                  style={[
                    StyleANancy.materialSymbolslocalActivit1,
                    StyleANancy.materialShadowBox,
                  ]}
                >
                  <Image
                    style={StyleANancy.vectorIcon4}
                    contentFit="cover"
                    source={require("../assets/vector2.png")}
                  />
                </View>
                <Text style={StyleANancy.typeDeLactivit}>type de l’activité</Text>
              </View>
              <View style={[StyleANancy.wrapper, StyleANancy.parentFlexBox]}>
                <Text style={StyleANancy.text2}>14:00-15:00</Text>
              </View>
            </View>
          </View>
        </Pressable> */}
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={menuAlt2OutlineIconVisible}
      >
        <View style={StyleANancy.menuAlt2OutlineIconOverlay}>
          <Pressable
            style={StyleANancy.menuAlt2OutlineIconBg}
            onPress={closeMenuAlt2OutlineIcon}
          />
          <NavDarknancy onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};



export default ActivityNancy;
