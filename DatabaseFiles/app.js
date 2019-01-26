var languages = ["Java", "Python", "HTML", "JavaScript", "Swift", "C++"];
var platforms = ["Arduino", "Android Studio", "Pycharm", "IntelliJ", "XCode", "Firebase", "React", "Github"];

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLCujwqD9Ix9TNBu_SHsDEwMR_-iSVawE",
    authDomain: "workbettercc.firebaseapp.com",
    databaseURL: "https://workbettercc.firebaseio.com",
    projectId: "workbettercc",
    storageBucket: "workbettercc.appspot.com",
    messagingSenderId: "482314606873"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

  var numUsers = 0;
  const outputHeader = document.querySelector("#mainTitleLabel");
  const firstNameTextField = document.querySelector("#firstNameText");
  const lastNameTextField = document.querySelector("#lastNameText");
  const emailTextField = document.querySelector("#emailText");
  const descriptionTextField = document.querySelector("#descriptionText");
  const locationTextField = document.querySelector("#locationText");
  const submitButton = document.querySelector("#submitButton");

  submitButton.addEventListener("click", function() {
      const firstName = firstNameTextField.value;
      firstNameTextField.textContent = "";
      const lastName = lastNameTextField.value;
      const email = emailTextField.value;
      const description = descriptionTextField.value;
      const location = locationTextField.value;
      const userName = "User" + numUsers;
      const collectRef = firestore.collection("Users").doc(userName);
      numUsers += 1;
      console.log("I am going to save " + firstName + " " + lastName + " to Firestore");
        collectRef.set({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Description: description,
            Location: location,
            ProfilePic: "/images/image.png"
        }).then(function() {
            console.log("Status saved!");
        }).catch(function(error) {
            console.log("Got an error: ", error);
        });

        addMyTasks(collectRef);
        addMySkills(collectRef);
})

        

        var citiesRef = firestore.collection("cities");

        citiesRef.doc("SF").set({
            name: "San Francisco", state: "CA", country: "USA",
            capital: false, population: 860000,
            regions: ["west_coast", "norcal"] });
        citiesRef.doc("LA").set({
            name: "Los Angeles", state: "CA", country: "USA",
            capital: false, population: 3900000,
            regions: ["west_coast", "socal"] });
        citiesRef.doc("DC").set({
            name: "Washington, D.C.", state: null, country: "USA",
            capital: true, population: 680000,
            regions: ["east_coast"] });
        citiesRef.doc("TOK").set({
            name: "Tokyo", state: null, country: "Japan",
            capital: true, population: 9000000,
            regions: ["kanto", "honshu"] });
        citiesRef.doc("BJ").set({
            name: "Beijing", state: null, country: "China",
            capital: true, population: 21500000,
            regions: ["jingjinji", "hebei"] });

        var docRef = firestore.collection("cities");

        docRef.get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log("Document data:", doc.data().population);
            })
        }) ;
        // {
        //     if (doc.exists) {
        //             console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(function(error) {
        //     console.log("Error getting document:", error);
        // });

  function addMyTasks(doc) {
        doc.collection("MyTasks").doc("Task1").set({
            Title: "Web Developer",
            Description: "Looking for a student to add an 'about us' page to the company website",
            Company: "Target",
            Location: "Atlanta, GA"
        });
        doc.collection("MyTasks").doc("Task2").set({
            Title: "Java Programmer",
            Description: "Looking for a student to create a sorting algorithm to manage our inventory",
            Company: "Dan and Linda's Fine Wines",
            Location: "Loganville, GA"
        });
        doc.collection("MyTasks").doc("Task3").set({
            Title: "UI Developer",
            Description: "Looking for a student to improve the UI of our current software",
            Company: "Shrewsbury Youth and Family Services",
            Location: "Buford, GA"
        });
  }

  function addMySkills(doc) {
    var i;
    var skill1, skill2, skill3;
    do{
        skill1 = parseInt((Math.random() * languages.length));
        skill2 = parseInt((Math.random() * languages.length));
        skill3 = parseInt((Math.random() * languages.length));
    }while(skill1 == skill2 || skill2 == skill3 || skill1 == skill3);

        doc.collection("MySkills").doc("MyLanguages").set({
            Languages: [languages[skill1], languages[skill2], languages[skill3]]
        })

        do{
            skill1 = parseInt((Math.random() * languages.length));
            skill2 = parseInt((Math.random() * languages.length));
            skill3 = parseInt((Math.random() * languages.length));
        }while(skill1 == skill2 || skill2 == skill3 || skill1 == skill3)

        doc.collection("MySkills").doc("MyPlatforms").set({
            Platforms: [platforms[skill1], platforms[skill2], platforms[skill3]]
        });
        
      
  }