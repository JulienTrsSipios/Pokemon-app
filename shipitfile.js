module.exports = shipit => {
    // Load shipit-deploy tasks
    require("shipit-deploy")(shipit);
  
    shipit.initConfig({
        default: {
            deployTo: "/Users/JulienTrs/Projects/semaineCommando/milestone6-pokemon-app/deployment",
            repositoryUrl: "https://github.com/user/super-project.git",
        },
        staging: {
            servers: "deploy@staging.super-project.com",
        },
    });
};