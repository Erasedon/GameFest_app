import React, { useState, useEffect } from "react";
import { View, Text,Image } from "react-native";
import axios from "axios";
import {StyleCMZ,StyleNancy, StyleStrasbourg} from "./Styles/StyleStand";


const StandListComponent = ({ isLocal ,standcolorregion }) => {
  const [stands, setStands] = useState([]);

  useEffect(() => {
    const baseUrl = isLocal ? "http://10.0.2.2:80" : "http://api-en-ligne.com";
   
    axios
    .get(`${baseUrl}/api/stands`) // Vous n'avez pas besoin de charger les médias séparément
    .then((standResponse) => {
      const standData = standResponse.data["hydra:member"];
      
      // Filtrer les stands qui ont des médias associés
      const standsWithMedia = standData.filter((stand) => 
        stand.medias.length > 0
      
      );
  console.log(standsWithMedia);
     
      // Mettez à jour l'état des stands avec les données transformées
      setStands(standsWithMedia);
    })
    .catch((standError) => {
      console.error("Erreur lors de la requête API (stand) :", standError);
    });
}, [isLocal,standcolorregion]); 
let styles;

if (standcolorregion === 'StyleCMZ') {
  styles = StyleCMZ;
} else if (standcolorregion === 'StyleNancy') {
  styles = StyleNancy;
} else {
  styles = StyleStrasbourg;
}
return (
  <View >
      {stands.map((stand) => {
        const media = stand.medias[0]; // On prend le premier média associé
        const url = media.url;
       
        const imageUrl = isLocal
        ? `http://127.0.0.1:8081/${url}`
        : `http://api-en-ligne.com/${url}`;
        
        if (standcolorregion === 'StyleCMZ') {        
        return ( 
          <View style={[styles.card, styles.cardLayout]}> 
        <View style={[styles.cardHeader, styles.cardSpaceBlock1]}>
          <View style={[styles.likes, styles.parentFlexBox1]}>
            <Text style={styles.text}>
              <Text style={styles.text1}>#</Text>
              <Text style={styles.text2}>{stand["@id"]}</Text>
            </Text>
          </View>
          <View style={[styles.loremIpsumParent, styles.parentFlexBox]}>
            <Text style={styles.loremIpsum}>{stand.titre}</Text>
            <View style={styles.bookmark}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector3.png")}
                />
            </View>
          </View>
        </View>
        <View style={styles.cardFlexBox}>
          <View style={[styles.likes, styles.parentFlexBox1]}>
            <View style={styles.mapShadowBox}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector4.png")}
                />
            </View>
            <Text style={[styles.nStand, styles.nStandTypo]}>{stand.nom}</Text>
          </View>
          <View style={styles.shareFlexBox}>
            <Text
              style={[styles.liensDuStands, styles.nStandTypo]}
              >{`Liens du stands `}</Text>
          </View>
          <View style={[styles.share, styles.shareFlexBox]}>
            <View style={styles.share1}>
              <Image
                style={styles.vectorIcon2}
                contentFit="cover"
                source={require("../assets/vector5.png")}
                />
            </View>
          </View>
        </View>
        <View style={styles.unsplash9bx5vfkxytiParent}>
          <Image
            source={{ uri: imageUrl }}
            style={[
              styles.unsplash9bx5vfkxytiIcon,
              styles.cardHeader1Position,
            ]}
            contentFit="cover"
            />
          <View style={[styles.frameChild, styles.childLayout]} />
        </View>
        <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
          <View style={styles.tagdarkenParent}>
            <View style={styles.tagdarkenFlexBox1}>
              <Text style={[styles.abstract, styles.abstractTypo]}>
                Abstract
              </Text>
            </View>
            <View style={[styles.tagdarken1, styles.tagdarkenFlexBox1]}>
              <Text style={[styles.abstract, styles.abstractTypo]}>
                SCI-fi
              </Text>
            </View>
            <View style={[styles.tagdarken1, styles.tagdarkenFlexBox1]}>
              <Text style={[styles.abstract, styles.abstractTypo]}>
                photo
              </Text>
            </View>
          </View>
          <Text
            style={[styles.thereAreMany, styles.thereSpaceBlock]}
            numberOfLines={1}
            >
            {stand.description}
          </Text>
          <View style={[styles.frameParent, styles.thereSpaceBlock]}>
            <View style={styles.parentFlexBox1}>
              <Image
                style={styles.iconsexternallink}
                contentFit="cover"
                source={require("../assets/iconsexternallink3.png")}
                />
              <Text style={styles.visiterLeSite}>Visiter le site</Text>
            </View>
            <View style={styles.parentFlexBox1}>
              <Image
                style={styles.shareoutlineIcon}
                contentFit="cover"
                source={require("../assets/shareoutline3.png")}
                />
              <Text style={styles.visiterLeSite}>Partager</Text>
            </View>
          </View>
        </View>
        <View style={StyleCMZ.standsCmzItem} />
      </View>
       );
      }else if(standcolorregion === 'StyleNancy'){
        return (
        <View key={stand["@id"]} style={[styles.card, styles.cardLayout]}>
        <View style={[styles.cardHeader, styles.cardSpaceBlock4]}>
          <View style={styles.likes}>
            <Text style={[styles.text, styles.textFlexBox]}>
              <Text style={styles.text1}>#</Text>
              <Text style={[styles.text2, styles.text2Typo]}> 102</Text>
            </Text>
          </View>
          <View style={[styles.loremIpsumParent, styles.parentFlexBox]}>
            <Text style={[styles.loremIpsum, styles.text2Typo]}>
            {stand.titre}
            </Text>
            <View style={styles.bookmark}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.cardCaption, styles.cardCommon]}>
          <View style={styles.likes}>
            <View style={styles.mapShadowBox}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
            <Text style={styles.nStand}>{stand.nom}</Text>
          </View>
          <View style={styles.shareFlexBox}>
            <Text style={styles.liensDuStands}>{`Liens du stands `}</Text>
          </View>
          <View style={[styles.share, styles.shareFlexBox]}>
            <View style={styles.share1}>
              <Image
                style={styles.vectorIcon2}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.unsplash9bx5vfkxytiParent}>
          <Image
            style={[
              styles.unsplash9bx5vfkxytiIcon,
              styles.cardHeader1Position,
            ]}
            contentFit="cover"
            source={{ uri: imageUrl }}
          />
          <View style={[styles.frameChild, styles.childLayout]} />
        </View>
        <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
          <View style={styles.tagdarkenParent}>
            <View style={styles.tagdarkenFlexBox1}>
              <Text style={[styles.abstract, styles.abstractTypo]}>
                Abstract
              </Text>
            </View>
            <View style={[styles.tagdarken1, styles.tagdarkenFlexBox1]}>
              <Text style={[styles.abstract, styles.abstractTypo]}>
                SCI-fi
              </Text>
            </View>
            <View style={[styles.tagdarken1, styles.tagdarkenFlexBox1]}>
              <Text style={[styles.abstract, styles.abstractTypo]}>
                photo
              </Text>
            </View>
          </View>
          <Text
            style={[styles.thereAreMany, styles.thereSpaceBlock]}
            numberOfLines={1}
          >
          {stand.description}
          </Text>
          <View style={[styles.frameParent, styles.thereSpaceBlock]}>
            <View style={styles.iconsexternallinkParent}>
              <Image
                style={styles.iconsexternallink}
                contentFit="cover"
                source={require("../assets/iconsexternallink-3x.png")}
              />
              <Text style={[styles.visiterLeSite, styles.visiterTypo]}>
                Visiter le site
              </Text>
            </View>
            <View style={styles.iconsexternallinkParent}>
              <Image
                style={styles.shareoutlineIcon}
                contentFit="cover"
                source={require("../assets/shareoutline.png")}
              />
              <Text style={[styles.visiterLeSite, styles.visiterTypo]}>
                Partager
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.standsNancyChild, styles.standsLayout]} />
      </View>
      )
       }else{
        return (
          <View key={stand["@id"]} style={[styles.card, styles.cardLayout]}>
          <View style={[styles.cardHeader, styles.cardSpaceBlock4]}>
            <View style={styles.likes}>
              <Text style={[styles.text, styles.textClr]}>
                <Text style={styles.text1}>#</Text>
                <Text style={[styles.text2, styles.text2Typo]}> 102</Text>
              </Text>
            </View>
            <View style={[styles.loremIpsumParent, styles.parentFlexBox]}>
              <Text style={[styles.loremIpsum, styles.text2Typo]}>
              {stand.titre}
              </Text>
              <View style={styles.bookmark}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.cardCaption, styles.cardCommon]}>
            <View style={styles.likes}>
              <View style={styles.mapShadowBox}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector4.png")}
                />
              </View>
              <Text style={styles.nStand}>{stand.nom}</Text>
            </View>
            <View style={styles.shareFlexBox}>
              <Text style={styles.liensDuStands}>{`Liens du stands `}</Text>
            </View>
            <View style={[styles.share, styles.shareFlexBox]}>
              <View style={styles.share1}>
                <Image
                  style={styles.vectorIcon2}
                  contentFit="cover"
                  source={require("../assets/vector5.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.unsplash9bx5vfkxytiParent}>
            <Image
              style={[
                styles.unsplash9bx5vfkxytiIcon,
                styles.cardHeader1Position,
              ]}
              contentFit="cover"
              source={{ uri: imageUrl }}
            />
            <View style={[styles.frameChild, styles.childLayout]} />
          </View>
          <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
            <View style={styles.tagdarkenParent}>
              <View style={styles.tagdarkenFlexBox1}>
                <Text style={[styles.abstract, styles.abstractTypo]}>
                  Abstract
                </Text>
              </View>
              <View style={[styles.tagdarken1, styles.tagdarkenFlexBox1]}>
                <Text style={[styles.abstract, styles.abstractTypo]}>
                  SCI-fi
                </Text>
              </View>
              <View style={[styles.tagdarken1, styles.tagdarkenFlexBox1]}>
                <Text style={[styles.abstract, styles.abstractTypo]}>
                  photo
                </Text>
              </View>
            </View>
            <Text
              style={[styles.thereAreMany, styles.thereSpaceBlock]}
              numberOfLines={1}
            >
             {stand.description}
            </Text>
            <View style={[styles.frameParent, styles.thereSpaceBlock]}>
              <View style={styles.iconsexternallinkParent}>
                <Image
                  style={styles.iconsexternallink}
                  contentFit="cover"
                  source={require("../assets/iconsexternallink2.png")}
                />
                <Text style={[styles.visiterLeSite, styles.visiterSpaceBlock]}>
                  Visiter le site
                </Text>
              </View>
              <View style={styles.iconsexternallinkParent}>
                <Image
                  style={styles.shareoutlineIcon}
                  contentFit="cover"
                  source={require("../assets/shareoutline2.png")}
                />
                <Text style={[styles.visiterLeSite, styles.visiterSpaceBlock]}>
                  Partager
                </Text>
              </View>
            </View>
          </View>
        </View>
        )
       }
      })
      }

    </View>
  );  
};


export default StandListComponent;
