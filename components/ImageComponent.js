import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import axios from "axios";

const ImageComponent = ({ imageId, isLocal ,styles }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
   
    const baseUrl = isLocal ? "http://10.0.2.2:80" : "http://api-en-ligne.com";
    axios
      .get(`${baseUrl}/api/media/${imageId}`)
      .then((response) => {
        const data = response.data;
    
        setImageData(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête API :", error);
      });
  }, [imageId]);

  if (!imageData) {
      console.log("vide test")
    return null;
  }
  const imageUrl = isLocal
  ? `http://127.0.1.1:8081/${imageData.url}`
  : `${imageData.url}`;
  

  return (
    <Image source={{ uri: imageUrl }} style= {styles} contentfit="cover" />
  );
};

export default ImageComponent;
