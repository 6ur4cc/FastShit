const exists = require("fs").existsSync;

const Handler = require("./Handler");
const Config = require("./Config");
const Installer = require("./Installer");

if (exists(Config.www_path)) {
  Handler;
} else {
  Installer();
  Handler;
}




