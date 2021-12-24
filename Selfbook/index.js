firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      console.log(user.phoneNumber);
    }else{
      location.replace('login.html');
    }
  });