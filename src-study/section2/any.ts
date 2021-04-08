import axios from 'axios';
export {};
// 17. any型

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// https://github.com/axios/axios
axios.get(url).then(function (response) {
  //console.log(response); //これだと超長い
  //let data = response.data; //変数dataの型推論はanyになる。
  let data: any = response.data; // あまり望ましくない。axiosの仕様で戻り値のdataがレスポンスボディ
  console.log(data); // 
  // インターフェースを使う。
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let dataObj: Article[];
  dataObj = response.data;
  dataObj = [
    {id:333, title: 'aaa', description: 'des'},
    //{id:333, titre: 'aaa', description: 'des'}, //警告して候補も出してくれる! 型がanyだとコンパイルエラーでない。

  ];
  console.log(dataObj); // 333の行だけ
});
