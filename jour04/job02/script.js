function jsonValueKey(jsonString, key) {
    try {
      
      const obj = JSON.parse(jsonString);
  
     
      return obj[key];
    } catch (e) {
      
      console.error("Erreur lors de l'analyse du JSON : ", e);
    }
  }
  

  const jsonString = `{
      "name": "La Plateforme",
      "address": "8 rue d'hozier",
      "city": "Marseille",
      "nb_staff": "11",
      "creation": "2019"
  }`;
  
  const key = "city";
  console.log(jsonValueKey(jsonString, key)); 
  