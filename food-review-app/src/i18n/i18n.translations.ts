import { namespaces } from "./i18n.constants";

export const en = {
  [namespaces.common]: {
    buttons: {
      ok: "Ok",
      cancel: "Cancel",
    },
  },
  [namespaces.pages.home]: {
    welcome: "Welcome",
    buttons: {
      addNewReview: "Add review",
      signin: "Sign in",
      signout: "Sign out",
      register: "Register",
    },
  },
  [namespaces.pages.signin]: {
    header: "Sign in",
    labelEmail: "Email",
    labelPassword: "Password",
    labelRememberMe: "Remember me",
    noAccount: "Don't have an account?",
    buttons: {
      signin: "Sign in",
    },
    links: {
      forgotPassword: "Forgot password?",
      register: "Register",
    },
  },
  [namespaces.pages.register]: {
    header: "Register",
    caption: "Register new user",
    labelFirstName: "First name",
    labelLastName: "Last name",
    labelEmail: "Email",
    labelPhone: "Phone number",
    labelPassword: "Password",
    labelConfirmPassword: "Confirm password",
    gender: "gender",
    radioBtn: {
      male: "male",
      female: "female",
      other: "other",
    },
    buttons: {
      register: "Register",
    },
    terms: "I accept the terms and conditions."
  },
};

export const sv = {
  [namespaces.common]: {
    buttons: {
      ok: "Ok",
      cancel: "Avbryt",
    },
  },
  [namespaces.pages.home]: {
    welcome: "Välkommen",
    buttons: {
      addNewReview: "Lägg till recension",
      signin: "Logga in",
      signout: "Logga ut",
      register: "Registrera",
    },
  },
  [namespaces.pages.signin]: {
    header: "Logga in",
    labelEmail: "E-post",
    labelPassword: "Lösenord",
    labelRememberMe: "Kom ihåg mig",
    noAccount: "Har du inget konto?",
    buttons: {
      signin: "Logga in",
    },
    links: {
      forgotPassword: "Glömt lösenordet?",
      register: "Registrera",
    },
    
  },
  [namespaces.pages.register]: {
    header: "Registrera",
    caption: "Registrera ny användare",
    labelFirstName: "Förnamn",
    labelLastName: "Efternamn",
    labelEmail: "E-post",
    labelPassword: "Lösenord",
    labelConfirmPassword: "Bekräfta lösenord",
    labelPhone: "Telefonnummer",
    gender: "Kön",
    radioBtn: {
      male: "Man",
      female: "Kvinna",
      other: "Annat",
    },
    buttons: {
      register: "Registrera",
    },
    terms: "Jag accepterar villkoren."
  },
};
