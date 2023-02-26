//export { data, liensWeb };

/********** LIENS PHOTOS*/

const data = {
  0: {
    path: "//photo.devisubox.com/_pIl0uMFNcuqY1jDzfBfbVzHGI8=_VIG.jpg",
    date: "2019-04-29T17:30:03+02:00",
  },
  1: {
    path: "//photo.devisubox.com/J2EFYg456aCDPSpwvc2bDVzrYu4=_VIG.jpg",
    date: "2019-05-27T06:09:06+02:00",
  },
  2: {
    path: "//photo.devisubox.com/R5qTf96vlbRUm7W6nY2bQF0Nqe0=_VIG.jpg",
    date: "2019-06-22T06:09:06+02:00",
  },
  3: {
    path: "//photo.devisubox.com/EWcxwz8bQBqK0n73PIC5OV0xitk=_VIG.jpg",
    date: "2019-07-19T11:18:06+02:00",
  },
  4: {
    path: "//photo.devisubox.com/lKlULn-Ln7Mo3EwrmmMEg11VS20=_VIG.jpg",
    date: "2019-08-15T14:09:07+02:00",
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
