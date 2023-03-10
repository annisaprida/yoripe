export const getUserPost = () => {
    return fetch('https://api.jsonbin.io/v3/b/63bd23fe15ab31599e3290c1')
   .then((response) => response.json())
   .then((responseJson) => {
    console.log("icha data")
    console.log(responseJson.record.data)
     return responseJson.record.data;
   })
   .catch((error) => {
     console.error(error);
   });
};