/*
 * @Author: decong.li
 * @Date: 2022/06/02 13:22:19 Thursday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/06/02 15:04:54 Thursday
 * @FilePath: /swagger-ts/utils/version.js
 */
var fs = require('fs');
exports.versionUpdate = function(apiname,getSwaggerJson){
  fs.readFile(`./${apiname}/package.json`, "utf8", (err, data) => {
    if (err) {
      console.log(chalk.red(err));
      process.exit();
    }
    const packageJson = JSON.parse(data);
    const list = packageJson.version.split('.');
    list[2]++
    list.map((item, i) => {
      if (item == 100) {
        list[i - 1]++
        list[i] = 0
      }
    })
    let newVsion = list[0] + '.' + list[1] + '.' + list[2]
    packageJson.version = newVsion
    packageString = JSON.stringify(packageJson, null, 2);
    fs.writeFile(`./${apiname}/package.json`, packageString, "utf8", err => {
      if (err) {
        console.log(chalk.red(err));
        process.exit();
      }
      getSwaggerJson(packageJson.swaggerpath, apiname, newVsion)
    })
  })
}