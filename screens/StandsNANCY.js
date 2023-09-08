import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal,ScrollView,} from "react-native";
import { Image } from "expo-image";
import NavDarknancy from "../components/NavDarknancy";
import { Border, Padding, Color, FontFamily, FontSize } from "../GlobalStyles";
import StandListComponent from "../components/StandListComponent"; 
import {StyleNancy} from "../components/Styles/StyleStand";
const StandsNANCY = () => {
  const [menuAlt2OutlineIconVisible, setMenuAlt2OutlineIconVisible] =
    useState(false);

  const openMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(true);
  }, []);

  const closeMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(false);
  }, []);
  const isLocal = __DEV__; // Move this line to where it's being used
  const standcolorregion = "StyleNancy" ; 

  return (
    <>
  <ScrollView>
    <View style={[StyleNancy.standsNancy, StyleNancy.iconLayout]}>
        
        <StandListComponent isLocal={isLocal} standcolorregion={standcolorregion} />
       
        <View
          style={[StyleNancy.menualt2outlineParent, StyleNancy.standsNancyItemPosition]}
        >
          <Pressable
            style={StyleNancy.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={[StyleNancy.icon, StyleNancy.iconLayout]}
              contentFit="cover"
              source={require("../assets/menualt2outline.png")}
            />
          </Pressable>
          <Text style={[StyleNancy.stands, StyleNancy.text2Typo]}>{`Stands`}</Text>
          <View style={[StyleNancy.searchoutline, StyleNancy.buttondarkenFlexBox]}>
            <View style={[StyleNancy.buttondarken, StyleNancy.buttondarkenFlexBox]}>
              <Image
                style={StyleNancy.iconsdarkfilter}
                contentFit="cover"
                source={require("../assets/iconsdarkfilter.png")}
              />
              <Image
                style={[StyleNancy.iconoutlinedotsCircleHoriz, StyleNancy.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[StyleNancy.iconoutlinedotsCircleHoriz1, StyleNancy.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Text style={[StyleNancy.button, StyleNancy.buttonTypo]}>Button</Text>
              <Text style={[StyleNancy.button1, StyleNancy.buttonTypo]}>Button</Text>
              <Text style={[StyleNancy.button2, StyleNancy.buttonTypo]}>Button</Text>
              <Text style={[StyleNancy.button3, StyleNancy.buttonTypo]}>Button</Text>
              <Image
                style={[StyleNancy.iconoutlinedotsCircleHoriz1, StyleNancy.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Image
                style={[StyleNancy.iconoutlinedotsCircleHoriz, StyleNancy.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[StyleNancy.iconoutlinedotsCircleHoriz4, StyleNancy.cardCommon]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={[StyleNancy.standsNancyItem, StyleNancy.standsNancyItemPosition]}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={menuAlt2OutlineIconVisible}
      >
        <View style={StyleNancy.menuAlt2OutlineIconOverlay}>
          <Pressable
            style={StyleNancy.menuAlt2OutlineIconBg}
            onPress={closeMenuAlt2OutlineIcon}
          />
          <NavDarknancy onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};



export default StandsNANCY;
