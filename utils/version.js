/*
 * @Author: decong.li
 * @Date: 2022/06/02 13:22:19 Thursday
 * @LastEditors: decong.li
 * @LastEditTime: 2023/04/14 16:25:15 Friday
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

exports.compareVersions = function(version1, version2='3.0.0') {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const len = Math.max(arr1.length, arr2.length);
  
  for (let i = 0; i < len; i++) {
    const n1 = parseInt(arr1[i] || 0);
    const n2 = parseInt(arr2[i] || 0);
    
    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    }
  }
  
  return 0;
}