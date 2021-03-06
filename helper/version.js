const os = require("os");

//前端显示版本
//每次更新之后,修改此处,表明修改
//这样, 用户截图时, 可以知道具体的版本
//请用户尽可能的不要修改本文件任何代码，因为每一次版本更新时，必定会冲突

const verisonA = "8.6.16"; //发行版本

const verisonB = "No.20201219-01"; //版本批次

const verisonC = "1.3.8"; //SQ面板版本

let info = [os.type(), os.arch(), os.hostname(), os.release()].join(" ");

module.exports = {
  system: info,
  root: process.cwd(),
  verisonA: verisonA,
  verisonB: verisonB,
  verisonC: verisonC
};
