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
    title: "Sign in",
    labelUser: "Username",
    placeholderUser: "Enter username",
    labelPassword: "Password",
    placeholderPassword: "Enter password",
    labelRememberMe: "Remember me",
    buttons: {
      signin: "Sign in",
    },
    links: {
      forgotPassword: "Forgot password?",
    },
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
    title: "Logga in",
    labelUser: "Användarnamn",
    placeholderUser: "Ange användarnamn",
    labelPassword: "Lösenord",
    placeholderPassword: "Ange lösenord",
    labelRememberMe: "Kom ihåg mig",
    buttons: {
      signin: "Logga in",
    },
    links: {
      forgotPassword: "Glömt lösenordet?",
    },
  },
};
