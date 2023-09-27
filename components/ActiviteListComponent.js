import React, { useState, useEffect } from "react";
import axios from "axios";
import {Pressable,Text,View,Image,ImageBackground,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {StyleACMZ,StyleANancy, StyleAStrasbourg} from "./Styles/StyleActivite";

const ActiviteListComponent = ({ isLocal ,activitecolorregion }) => {
    const [Activites, setActivites] = useState([]);
  
    useEffect(() => {
      const baseUrl = isLocal ? "http://10.0.2.2:80" : "http://api-en-ligne.com";
     
      axios
      .get(`${baseUrl}/api/activites`)
      .then((activiteResponse) => {
        const activiteData = activiteResponse.data["hydra:member"];
       
        // Filtrer les activite qui ont des médias associés
        const activitesWithMedia = activiteData.filter((activite) => 
        activite.mediaA.length > 0
        
        );
       
        // Mettez à jour l'état des activite avec les données transformées
        setActivites(activitesWithMedia);
      })
      .catch((activiteError) => {
        console.error("Erreur lors de la requête API (activite) :", activiteError);
      });
  }, [isLocal,activitecolorregion]); 
  let styles;
  
  if (activitecolorregion === 'StyleACMZ') {
    styles = StyleACMZ;
  } else if (activitecolorregion === 'StyleANancy') {
    styles = StyleANancy;
  } else {
    styles = StyleAStrasbourg;
  }
  return (
    <View >
        {Activites.map((activite) => {
          const media = activite.mediaA[0]; // On prend le premier média associé
          const url = media.url;
         
          const imageUrl = isLocal
          ? `http://127.0.0.1:8081/${url}`
          : `http://api-en-ligne.com/${url}`;
          
          if (activitecolorregion === 'StyleACMZ') {        
          return (   
            <>
               <View key={activite["@id"]}  style={styles.activityChild} />
                 <Pressable
                        style={[styles.cardvariant4, styles.cardvariantLayout]}
                        onPress={() => navigation.navigate("PlanDevenement")}
                        >
             <LinearGradient
               style={styles.cardImage}
               locations={[0.19, 1]}
               colors={["rgba(12, 7, 22, 0.2)", "rgba(12, 7, 22, 0)"]}
               >
           <ImageBackground
                 style={[styles.icon1, styles.iconLayout]}
                 resizeMode="cover"
                 source={{ uri: imageUrl }}
                 >
                <View style={styles.overlay}>
                  <View style={[styles.header, styles.parentFlexBox]}>
                    <View>
                      <Text style={styles.titreDeLactivit}>
                      {activite.titre}
                      </Text>
                      <Text style={styles.lieuPlan}>
                        <Text style={[styles.text, styles.textTypo]}>#</Text>
                        <Text style={styles.text1}> 102</Text>
                      </Text>
                    </View>
                    <View style={styles.icons}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector6.png")}
                        />
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector6.png")}
                        />
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector6.png")}
                        />
                    </View>
                    <View style={styles.mapShadowBox}>
                      <Image
                        style={styles.vectorIcon3}
                        contentFit="cover"
                        source={require("../assets/vector7.png")}
                        />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </LinearGradient>
            <View style={styles.cardFooter}>
              <View style={styles.header1}>
                <Text
                  style={[styles.thereAreMany, styles.textTypo]}
                  numberOfLines={2}
                  >
              {activite.description}
                </Text>
              </View>
              <View style={[styles.row, styles.parentFlexBox]}>
                <View
                  style={[
                    styles.materialSymbolslocalActivitParent,
                    styles.parentFlexBox,
                  ]}
                  >
                  <View
                    style={[
                        styles.materialSymbolslocalActivit,
                        styles.materialShadowBox,
                    ]}
                    >
                    <Image
                      style={styles.vectorIcon4}
                      contentFit="cover"
                      source={require("../assets/vector2.png")}
                    />
                  </View>
                  <Text style={styles.typeDeLactivit}>{activite.filtre_activity[0]}</Text>
                </View>
                <View style={[styles.wrapper, styles.parentFlexBox]}>
                  <Text style={styles.text2}>10:00-13:00</Text>
                </View>
               </View>
            </View>
           </Pressable>  
           </>
           );
        }else if(activitecolorregion === 'StyleANancy'){
            return (   
            <>
              <View key={activite["@id"]} style={styles.activityNancyChild} />
            <Pressable
              style={[styles.cardvariant4, styles.cardvariantLayout]}
              onPress={() => navigation.navigate("PlanDevenementNanncy")}
            >
          <LinearGradient
            style={styles.cardImage}
            locations={[0.19, 1]}
            colors={["rgba(12, 7, 22, 0.2)", "rgba(12, 7, 22, 0)"]}
          >
            <ImageBackground
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={{ uri: imageUrl }}
            >
              <View style={styles.overlay}>
                <View style={[styles.header, styles.parentFlexBox]}>
                  <View>
                    <Text style={styles.titreDeLactivit}>
                    {activite.titre}
                    </Text>
                    <Text style={styles.lieuPlan}>
                      <Text style={[styles.text, styles.textTypo]}>#</Text>
                      <Text style={styles.text1}> 102</Text>
                    </Text>
                  </View>
                  <View style={styles.icons}>
                    <Image
                      style={styles.vectorIconLayout}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector6.png")}
                    />
                  </View>
                  <View style={styles.mapShadowBox}>
                    <Image
                      style={styles.vectorIcon3}
                      contentFit="cover"
                      source={require("../assets/vector7.png")}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={styles.cardFooter}>
            <View style={styles.header1}>
              <Text
                style={[styles.thereAreMany, styles.textTypo]}
                numberOfLines={2}
              >
               {activite.description}
              </Text>
            </View>
            <View style={[styles.row, styles.parentFlexBox]}>
              <View
                style={[
                  styles.materialSymbolslocalActivitParent,
                  styles.parentFlexBox,
                ]}
              >
                <View
                  style={[
                    styles.materialSymbolslocalActivit,
                    styles.materialShadowBox,
                  ]}
                >
                  <Image
                    style={styles.vectorIcon4}
                    contentFit="cover"
                    source={require("../assets/vector2.png")}
                  />
                </View>
                <Text style={styles.typeDeLactivit}>type de l’activité</Text>
              </View>
              <View style={[styles.wrapper, styles.parentFlexBox]}>
                <Text style={styles.text2}>10:00-13:00</Text>
              </View>
            </View>
          </View>
        </Pressable>
         </>
        )
         }else{
          return (
            <>
            <View key={activite["@id"]} style={styles.activityStrasbourgChild} />
            <Pressable
              style={[styles.cardvariant4, styles.cardvariantLayout]}
              onPress={() => navigation.navigate("PlanDevenementStrasbourg")}
            >
              <LinearGradient
                style={styles.cardImage}
                locations={[0.19, 1]}
                colors={["rgba(12, 7, 22, 0.2)", "rgba(12, 7, 22, 0)"]}
              >
                <ImageBackground
                  style={[styles.icon1, styles.iconLayout]}
                  resizeMode="cover"
                  source={{ uri: imageUrl }}
                >
                  <View style={styles.overlay}>
                    <View style={[styles.header, styles.parentFlexBox]}>
                      <View>
                        <Text style={styles.titreDeLactivit}>
                        {activite.titre}
                        </Text>
                        <Text style={styles.lieuPlan}>
                          <Text style={[styles.text, styles.textTypo]}>#</Text>
                          <Text style={styles.text1}> 102</Text>
                        </Text>
                      </View>
                      <View style={styles.icons}>
                        <Image
                          style={styles.vectorIconLayout}
                          contentFit="cover"
                          source={require("../assets/vector6.png")}
                        />
                        <Image
                          style={[styles.vectorIcon1, styles.vectorIconLayout]}
                          contentFit="cover"
                          source={require("../assets/vector6.png")}
                        />
                        <Image
                          style={[styles.vectorIcon1, styles.vectorIconLayout]}
                          contentFit="cover"
                          source={require("../assets/vector6.png")}
                        />
                      </View>
                      <View style={styles.mapShadowBox}>
                        <Image
                          style={styles.vectorIcon3}
                          contentFit="cover"
                          source={require("../assets/vector7.png")}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </LinearGradient>
              <View style={styles.cardFooter}>
                <View style={styles.header1}>
                  <Text
                    style={[styles.thereAreMany, styles.textTypo]}
                    numberOfLines={2}
                  >
                  {activite.description}
                  </Text>
                </View>
                <View style={[styles.row, styles.parentFlexBox]}>
                  <View
                    style={[
                      styles.materialSymbolslocalActivitParent,
                      styles.parentFlexBox,
                    ]}
                  >
                    <View
                      style={[
                        styles.materialSymbolslocalActivit,
                        styles.materialShadowBox,
                      ]}
                    >
                      <Image
                        style={styles.vectorIcon4}
                        contentFit="cover"
                        source={require("../assets/vector2.png")}
                      />
                    </View>
                    <Text style={styles.typeDeLactivit}>{activite.filtre_activity[0]}</Text>
                  </View>
                  <View style={[styles.wrapper, styles.parentFlexBox]}>
                    <Text style={styles.text2}>10:00-13:00</Text>
                  </View>
                </View>
              </View>
            </Pressable>   
            </>
          )
         }
        })
        }
  
      </View>
    );  
  };
  
  
  export default ActiviteListComponent;
  