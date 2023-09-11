const exec = require("child_process").execSync
const exists = require("fs").existsSync;

const Config = require("./Config");

module.exports = function (fileName) {
    if (fileName == "/") {
        if (exists(Config.www_path + "/" + Config.index_file)) {
            return exec(Config.php_path + " " + Config.www_path + "/" + Config.index_file);
        } else {
            return "<b>I couldn't find an index file. Please check \"Config\" file.</b>";
        }
    } else {
        if (exists(Config.www_path + fileName)) {
            return exec(Config.php_path + " " + Config.www_path + fileName);
        } else {
            return "<b>404</b>";
        }

    }
}