import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal ,ScrollView,
} from "react-native";
import NavDarkCMZ from "../components/NavDarkCMZ";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";
import StandListComponent from "../components/StandListComponent"; 
import {StyleCMZ} from "../components/Styles/StyleStand";

const StandsCMZ = () => {
  const [menuAlt2OutlineIconVisible, setMenuAlt2OutlineIconVisible] =
    useState(false);

    const openMenuAlt2OutlineIcon = useCallback(() => {
      setMenuAlt2OutlineIconVisible(true);
    }, []);
    
    const closeMenuAlt2OutlineIcon = useCallback(() => {
      setMenuAlt2OutlineIconVisible(false);
    }, []);
    const isLocal = __DEV__; // Move this line to where it's being used
    const standcolorregion = "StyleCMZ" ; 
    return (
      <>
  <ScrollView>
    <View style={[StyleCMZ.standsCmz, StyleCMZ.iconLayout]}>
        <View style={[StyleCMZ.menualt2outlineParent, StyleCMZ.parentFlexBox1]}>
          <Pressable
            style={StyleCMZ.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={[StyleCMZ.icon, StyleCMZ.iconLayout]}
              contentFit="cover"
              source={require("../assets/menualt2outline2.png")}
            />
          </Pressable>
          <Text style={StyleCMZ.stands}>{`Stands`}</Text>
          <View style={StyleCMZ.searchoutline}>
            <View style={StyleCMZ.buttondarken}>
              <Image
                style={StyleCMZ.iconsdarkfilter}
                contentFit="cover"
                source={require("../assets/iconsdarkfilter2.png")}
              />
              <Image
                style={[
                  StyleCMZ.iconoutlinedotsCircleHoriz,
                  StyleCMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[
                  StyleCMZ.iconoutlinedotsCircleHoriz1,
                  StyleCMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Text style={[StyleCMZ.button, StyleCMZ.buttonTypo]}>Button</Text>
              <Text style={StyleCMZ.button1}>Button</Text>
              <Text style={StyleCMZ.button2}>Button</Text>
              <Text style={[StyleCMZ.button3, StyleCMZ.buttonTypo]}>Button</Text>
              <Image
                style={[
                  StyleCMZ.iconoutlinedotsCircleHoriz1,
                  StyleCMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal9.png")}
              />
              <Image
                style={[
                  StyleCMZ.iconoutlinedotsCircleHoriz,
                  StyleCMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal8.png")}
              />
              <Image
                style={[
                  StyleCMZ.iconoutlinedotsCircleHoriz4,
                  StyleCMZ.iconoutlinedotsSpaceBlock,
                ]}
                contentFit="cover"
                source={require("../assets/iconoutlinedotscirclehorizontal10.png")}
              />
            </View>
          </View>
        </View>
        <View style={StyleCMZ.standsCmzChild} />  
          <StandListComponent isLocal={isLocal} standcolorregion={standcolorregion} />
       
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={menuAlt2OutlineIconVisible}
      >
        <View style={StyleCMZ.menuAlt2OutlineIconOverlay}>
          <Pressable
            style={StyleCMZ.menuAlt2OutlineIconBg}
            onPress={closeMenuAlt2OutlineIcon}
          />
          <NavDarkCMZ onClose={closeMenuAlt2OutlineIcon} />
        </View>
      </Modal>
   </ScrollView>
   </>
  );
};



export default StandsCMZ;
