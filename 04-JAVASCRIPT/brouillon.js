// fetch("https://photo.devisubox.com/SdZ79_svKIwQjwMRU9fb1WPv-xw=.jpg")
//   .then((res) => res.blob()) // Gets the response and returns it as a blob
//   .then((blob) => {
//     // Here's where you get access to the blob
//     // And you can use it for whatever you want
//     // Like calling ref().put(blob)

//     // Here, I use it to make an image appear on the page
//     let objectURL = URL.createObjectURL(blob);
//     let myImage = new Image();
//     myImage.src = objectURL;
//     document.getElementById("myImg").appendChild(myImage);
//   });

//export { data, liensWeb };

/********** LIENS PHOTOS => clique droit, inspection => Network - fetchXHR - dvphp5 - Preview*/

const data = {
  0: {
    path: "//photo.devisubox.com/qIXOZyBDBK5Z5PlIZnEj2mHa3oU=.jpg",
    date: "2019-08-15T14:09:07+02:00",
  },
  2: {
    path: "//photo.devisubox.com/SdZ79_svKIwQjwMRU9fb1WPv-xw=.jpg",
    date: "2019-09-15T14:09:07+02:00",
  },
};

/********** FONCTION DE RECUPERATION LIENS */
function liensWeb(lien) {
  for (let index in data) {
    fetch(`https:${data[index].path}`)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        // Here's where you get access to the blob
        // And you can use it for whatever you want
        // Like calling ref().put(blob)

        // Here, I use it to make an image appear on the page
        let objectURL = URL.createObjectURL(blob);
        let myImage = new Image();
        myImage.src = objectURL;
        document.getElementById("myImg").appendChild(myImage);
      });
  }
}
liensWeb(data);
