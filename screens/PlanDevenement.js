import React, { useState, useCallback,  useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Modal ,ScrollView,
} from "react-native";
import { Image } from "expo-image";
import NavDarkCMZ from "../components/NavDarkCMZ";
import ImageComponent from "../components/ImageComponent";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import axios from 'axios';


const PlanDevenement = () => {
  const [menuAlt2OutlineIconVisible, setMenuAlt2OutlineIconVisible] =
    useState(false);

  const openMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(true);
  }, []);

  const closeMenuAlt2OutlineIcon = useCallback(() => {
    setMenuAlt2OutlineIconVisible(false);
  }, []);
  
  const isLocal = __DEV__; // Move this line to where it's being used

            return (
              <>
  <ScrollView>
    <View style={styles.planDevenement}>
        <View style={styles.gamefestCmz} />
        
        <ImageComponent imageId={128} isLocal={isLocal} styles={styles.mapIcon} />
    
        <View style={styles.buttondarkenParent}>
          <View style={[styles.buttondarken, styles.buttondarkenFlexBox]}>
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz,
                styles.iconoutlinedotsLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz1,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz2,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
            <Text style={[styles.button, styles.buttonTypo]}>cartes</Text>
            <Text style={[styles.button1, styles.buttonTypo]}>cartes</Text>
            <Text style={[styles.button2, styles.buttonTypo]}>cartes</Text>
            <Text style={[styles.button3, styles.buttonTypo]}>cartes</Text>
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz2,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz1,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz5,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
          </View>
          <View style={[styles.buttondarken1, styles.buttondarkenFlexBox]}>
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz,
                styles.iconoutlinedotsLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz1,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz2,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
            <Text style={[styles.button, styles.buttonTypo]}>
              {" "}
              cartes stands
            </Text>
            <Text style={[styles.button1, styles.buttonTypo]}>
              {" "}
              cartes stands
            </Text>
            <Text style={[styles.button2, styles.buttonTypo]}>
              {" "}
              cartes stands
            </Text>
            <Text style={[styles.button3, styles.buttonTypo]}>
              {" "}
              cartes stands
            </Text>
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz2,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal7.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz1,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal6.png")}
            />
            <Image
              style={[
                styles.iconoutlinedotsCircleHoriz5,
                styles.iconoutlinedotsSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/iconoutlinedotscirclehorizontal5.png")}
            />
          </View>
        </View>
        
        <View style={styles.menualt2outlineParent}>
          <Pressable
            style={styles.menualt2outline}
            onPress={openMenuAlt2OutlineIcon}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/menualt2outline2.png")}
            />
          </Pressable>
          
          <Text style={styles.planDevenement1}>{`plan d’evenement
`}</Text>
    
        </View>
        <View style={styles.planDevenementChild} />
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
        {/* <Text  style={styles.planDevenement1} >
        {`${imageData.url} ${imageData.nom}`}
      </Text> */}
   </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  buttondarkenFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  iconoutlinedotsLayout: {
    height: 24,
    width: 24,
  },
  iconoutlinedotsSpaceBlock: {
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  buttonTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    marginLeft: 8,
  },
  gamefestCmz: {
    top: 0,
    backgroundColor: Color.gray_100,
    overflow: "hidden",
    width: 390,
    left: 0,
    position: "absolute",
    height: 844,
  },
  mapIcon: {
    top: 209,
    right: 27,
    bottom: 40,
    left: 25,
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "visible",
    position: "absolute",
  },
  iconoutlinedotsCircleHoriz: {
    display: "none",
    overflow: "hidden",
  },
  iconoutlinedotsCircleHoriz1: {
    width: 20,
    height: 20,
  },
  iconoutlinedotsCircleHoriz2: {
    width: 16,
    height: 16,
  },
  button: {
    fontSize: FontSize.fontSansTextXsSemibold_size,
    lineHeight: 16,
    display: "none",
  },
  button1: {
    fontSize: FontSize.fontSansTextSmSemibold_size,
    lineHeight: 20,
    display: "none",
  },
  button2: {
    fontSize: FontSize.fontSansTextBaseSemibold_size,
    lineHeight: 24,
    display: "none",
  },
  button3: {
    fontSize: FontSize.fontSansTextLgSemibold_size,
    lineHeight: 28,
  },
  iconoutlinedotsCircleHoriz5: {
    height: 24,
    width: 24,
  },
  buttondarken: {
    backgroundColor: Color.dodgerblue_100,
  },
  buttondarken1: {
    opacity: 0.3,
    marginLeft: 2,
  },
  buttondarkenParent: {
    top: 117,
    left: 24,
    borderColor: "#374151",
    borderWidth: 2,
    flexDirection: "row",
    borderRadius: Border.br_xs,
    borderStyle: "solid",
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
    width: 32,
    height: 32,
  },
  planDevenement1: {
    alignSelf: "stretch",
    fontSize: FontSize.size_5xl,
    color: Color.bluePrimary,
    textAlign: "left",
    display: "flex",
    marginLeft: 18,
    fontFamily: FontFamily.notoSansMalayalamUISemibold,
    fontWeight: "600",
    alignItems: "center",
    flex: 1,
  },
  menualt2outlineParent: {
    top: 1,
    height: 72,
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    width: 390,
    left: 0,
    position: "absolute",
  },
  planDevenementChild: {
    top: 72,
    borderColor: "rgba(0, 132, 250, 0.25)",
    borderTopWidth: 1,
    width: 391,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  planDevenement: {
    height: 844,
    flex: 1,
    width: "100%",
  },
});

export default PlanDevenement;


  // fetch('http://10.0.2.2:80/api/media', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/ld+json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     nom: "TEST",
  //     url: "TEST",
  //     positionnement: "TEST",
  //     mediactivity: null,
  //     mediastand: null
  //   })
  // });

{/*
  fetch('http://10.0.2.2:80/api/media/' + 123).then((response) => response.json()).then((json) => {
    // console.log(json);
    return json;
  }).catch((error) => {
    // console.error(error);
  });*/}

  //get
  // fetch('http://10.0.2.2:80/api/media/' + 123).then((response) => response.json()).then((json) => {
  //   // console.log(json);
  //   return json;
  // }).catch((error) => {
  //   // console.error(error);
  // });
        {/* <Image
  source={ 
    fetch('https://localhost//api/media/{id}', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: '1'
      })
    })
    
  }
  style={styles.mapIcon}/> */}
