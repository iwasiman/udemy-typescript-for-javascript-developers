"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// 17. any型
var url = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
// https://github.com/axios/axios
axios_1["default"].get(url).then(function (response) {
    //console.log(response); //これだと超長い
    //let data = response.data; //変数dataの型推論はanyになる。
    var data = response.data; // あまり望ましくない。axiosの仕様で戻り値のdataがレスポンスボディ
    console.log(data); // 
    var dataObj;
    dataObj = response.data;
    dataObj = [
        { id: 333, title: 'aaa', description: 'des' },
    ];
    console.log(dataObj); // 333の行だけ
});
