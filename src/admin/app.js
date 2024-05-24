const config = {
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'SSSUTMS DASHBOARD',
      'app.components.LeftMenu.navbrand.workplace':'SSSUTMS',
      'Auth.form.welcome.title':'Welcome to SSSUTMS CMS',
      'Auth.form.welcome.subtitle':'Login to Your Account'
      
    }

  },

  tutorials:false,
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
