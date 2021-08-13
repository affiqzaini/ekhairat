// import BaseApi from "../services/nimfa/BaseApi";
// import routes from "../services/nimfa/route.config";

// const baseUrl = `api/${BaseApi.VERSION}`;

export const auth = {
  strategies: {
    local: {
      token: {
        property: "data.access_token"
      },
      user: {
        property: "data"
      },
      endpoints: {
        login: {
          // url: `${baseUrl}/${routes.auth.login}`,
          method: "post"
        },
        logout: {
          // url: `${baseUrl}/${routes.auth.logout}`,
          method: "post"
        },
        user: {
          // url: `${baseUrl}/${routes.auth.me}`,
          method: "get"
        }
      }
    }
  },
  redirect: {
    login: "/",
    logout: "/",
    home: false
  }
  // plugins: [
  //   "@/plugins/helper.plugin",
  //   "@/plugins/api.plugin",
  //   "@/plugins/echo.plugin"
  // ]
};
