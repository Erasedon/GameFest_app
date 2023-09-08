import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal ,ScrollView,
} from "react-native";
import { Image } from "expo-image";
import NavDarkstrasbourg from "../components/NavDarkstrasbourg";

import StandListComponent from "../components/StandListComponent"; 
import {StyleStrasbourg} from "../components/Styles/StyleStand";

const StandsStrasbourg = () => {
  const [menuAlt2OutlineIconVisible, setMenuAlt2OutlineIconVisible] =
    useState(false);

  const openMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(true);
  }, []);

  const closeMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(false);
  }, []);

  const isLocal = __DEV__; // Move this line to where it's being used
  const standcolorregion = "StyleStrasbourg" ; 

  return (
    <>
  <ScrollView>
    
    <View style={[StyleStrasbourg.standsStrasbourg, StyleStrasbourg.iconLayout]}>
        <View style={[StyleStrasbourg.standsStrasbourgChild, StyleStrasbourg.standsLayout]} />
          {/* <View style={[StyleStrasbourg.cardChild, StyleStrasbourg.childLayout]} />  */}
       <StandListComponent isLocal={isLocal} standcolorregion={standcolorregion} />
          
        <View
          style={[
            StyleStrasbourg.menualt2outlineParent,
            StyleStrasbourg.standsStrasbourgItemPosition,
          ]}
        >
          <Pressable
            style={StyleStrasbourg.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={[StyleStrasbourg.icon, StyleStrasbourg.iconLayout]}
              contentFit="cover"
              source={require("../assets/menualt2outline1.png")}
            />
          </Pressable>
          <Text style={[StyleStrasbourg.stands, StyleStrasbourg.text2Typo]}>{`Stands`}</Text>
          <View style={[StyleStrasbourg.searchoutline, StyleStrasbourg.buttondarkenFlexBox]}>
            <View style={[StyleStrasbourg.buttondarken, StyleStrasbourg.buttondarkenFlexBox]}>
              <Image
                style={StyleStrasbourg.iconsdarkfilter}
                contentFit="cover"
                source={require("../assets/iconsdarkfilter1.png")}
              />
              <Image
                style={[StyleStrasbourg.iconoutlinedotsCircleHoriz, StyleStrasbourg.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[StyleStrasbourg.iconoutlinedotsCircleHoriz1, StyleStrasbourg.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Text style={[StyleStrasbourg.button, StyleStrasbourg.buttonTypo]}>Button</Text>
              <Text style={[StyleStrasbourg.button1, StyleStrasbourg.buttonTypo]}>Button</Text>
              <Text style={[StyleStrasbourg.button2, StyleStrasbourg.buttonTypo]}>Button</Text>
              <Text style={[StyleStrasbourg.button3, StyleStrasbourg.buttonTypo]}>Button</Text>
              <Image
                style={[StyleStrasbourg.iconoutlinedotsCircleHoriz1, StyleStrasbourg.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Image
                style={[StyleStrasbourg.iconoutlinedotsCircleHoriz, StyleStrasbourg.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[StyleStrasbourg.iconoutlinedotsCircleHoriz4, StyleStrasbourg.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            StyleStrasbourg.standsStrasbourgItem,
            StyleStrasbourg.standsStrasbourgItemPosition,
          ]}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={menuAlt2OutlineIconVisible}
      >
        <View style={StyleStrasbourg.menuAlt2OutlineIconOverlay}>
          <Pressable
            style={StyleStrasbourg.menuAlt2OutlineIconBg}
            onPress={closeMenuAlt2OutlineIcon}
          />
          <NavDarkstrasbourg onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};


export default StandsStrasbourg;
