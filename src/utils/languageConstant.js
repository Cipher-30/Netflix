
//  VALUES ARE TAKEN FOR A LANGUAGE 
export const languages = {

    en : {
        search: "Search" ,
        placeholder: "Search your Movies here..",
        signIn :"Sign In" ,
        signOut:  "Sign Out" ,
        play: "play" ,
        info: "Info" ,
        signUp: "Sign Up",
        lHeading1 : "Unlimited movies, TV",
        lHeading2 : "shows and more",
        lHeading3 : "Starts at ₹149. Cancel anytime.",
        email: "Email",
        password: "Password",
        fullName: "Full Name",
        

    },
    hi: { 
         search: "खोज" ,
        placeholder: "अपनी फिल्में यहां खोजें..",
        signIn :"दाखिल करना" ,
        signOut:  "साइन आउट" ,
        play: "खेल" ,
        info: "जानकारी" ,
        signUp: "साइन अप करें",
        lHeading1 : "असीमित फिल्में, टीवी",
        lHeading2 : "शो और भी बहुत कुछ",
        lHeading3 : "₹149 से शुरू। किसी भी समय रद्द करें.",
        email: "ईमेल",
        password: "पासवर्ड",
        fullName: "पूरा नाम"

    },
    sp : {
         search: "Busca" ,
        placeholder: "Busca tus Películas aquí..",
        signIn :"Iniciar sesión" ,
        signOut:  "Desconectar" ,
        play: "jugar" ,
        info: "información" ,
        signUp: "inscribirse",
        lHeading1 : "Películas y TV ilimitadas",
        lHeading2 : "espectáculos y más",
        lHeading3 : "Desde ₹ 149. Cancele en cualquier momento.",
        email: "correo electrónico",
        password: "contraseña",
        fullName: "nombre completo"

    },
    fr : {
         search: "Recherche" ,
        placeholder: "Recherchez vos films ici.",
        signIn :"se connecter" ,
        signOut:  "se déconnecter" ,
        play: "jouer" ,
        info: "infos" ,
        signUp: "inscribirse",
        lHeading1 : "Films et télévision illimités",
        lHeading2 : "spectacles et plus",
        lHeading3 : "À partir de 149 ₹. Annulez à tout moment.",
        email: "email",
         password: "mot de passe",
          fullName: "nom complet"


    },

}
  
//OPTIONS ARE USING TO MAP OVER
export const supportedLanguages = [
    {language : "English" , identifier:"en"},
    {language : "Hindi" , identifier:"hi"},
    {language : "Spanish" , identifier:"sp"},
    {language : "French" , identifier:"fr"},
];