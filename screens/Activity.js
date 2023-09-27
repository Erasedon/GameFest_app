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
import ActiviteListComponent from "../components/ActiviteListComponent"; 
import {StyleACMZ} from "../components/Styles/StyleActivite";

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
  const isLocal = __DEV__; // Move this line to where it's being used
  const activitecolorregion = "StyleACMZ" ; 
  return (
    <>
  <ScrollView>
    <View style={[StyleACMZ.activity, StyleACMZ.activityLayout]}>
        <View style={[StyleACMZ.menualt2outlineParent, StyleACMZ.parentFlexBox]}>
          <Pressable
            style={StyleACMZ.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={StyleACMZ.iconLayout}
              contentFit="cover"
              source={require("../assets/menualt2outline2.png")}
            />
          </Pressable>
          <Text style={StyleACMZ.activit}>activité</Text>
          <View style={StyleACMZ.searchoutline}>
            <View style={StyleACMZ.buttondarken}>
              <Image
                style={[StyleACMZ.iconsdarkfilter, StyleACMZ.activityLayout]}
                contentFit="cover"
                source={require("../assets/iconsdarkfilter2.png")}
              />
              <Image
                style={[
                  StyleACMZ.iconoutlinedotsCircleHoriz,
                  StyleACMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[
                  StyleACMZ.iconoutlinedotsCircleHoriz1,
                  StyleACMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Text style={[StyleACMZ.button, StyleACMZ.buttonTypo]}>Button</Text>
              <Text style={[StyleACMZ.button1, StyleACMZ.buttonTypo]}>Button</Text>
              <Text style={[StyleACMZ.button2, StyleACMZ.buttonTypo]}>Button</Text>
              <Text style={[StyleACMZ.button3, StyleACMZ.buttonTypo]}>Button</Text>
              <Image
                style={[
                  StyleACMZ.iconoutlinedotsCircleHoriz1,
                  StyleACMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Image
                style={[
                  StyleACMZ.iconoutlinedotsCircleHoriz,
                  StyleACMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={StyleACMZ.iconoutlinedotsCircleHoriz4}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
   
        <ActiviteListComponent isLocal={isLocal} activitecolorregion={activitecolorregion} />
      
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={menuAlt2OutlineIconVisible}
      >
        <View style={StyleACMZ.menuAlt2OutlineIconOverlay}>
          <Pressable
            style={StyleACMZ.menuAlt2OutlineIconBg}
            onPress={closeMenuAlt2OutlineIcon}
          />
          <NavDarkCMZ onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};


 

export default Activity;
