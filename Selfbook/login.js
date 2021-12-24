// const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-btn', {
//     size: 'invisible',
// });

let confirmationResult;
const clickSub = ()  => {
    const phone = document.querySelector('#phone').value;
    console.log(phone);
    // const appVerifier = recaptchaVerifier;

    // firebase.auth().signInWithPhoneNumber(`+976${ phone }`, appVerifier).then((result) => {
    //     confirmationResult = result;
    // }).catch((error) => {   
    //     console.log(error);
    // });
}

const clickLogIn = () => {
    const code = document.querySelector('#ver').value;
    console.log(code);

    // confirmationResult.confirm(code).then((result) => {
    //     console.log(result.user.phoneNumber, 'utasnii dugaartai hun amjilttai newterlee');
    //     location.replace('index.html');
    // }).catch((error) => {
    //     console.log('Code aldaatai bna')
    // });
}