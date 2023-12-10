function onClickAdd() {
  // get inputValue
  const addText = document.getElementById("add-text");
  const addTextValue = addText.value;
  addText.value = "";

  // create li
  const ulId = "memo-list";
  const li = createLi(addTextValue, ulId);

  // add memo-list
  document.getElementById(ulId).appendChild(li);
}


// liタグを削除ボタン付きで作成します
//value:画面に表示する値
//parentUlId:liタグを設定するul要素のid
const createLi = (value, parentUlId) => {

  // 画面表示値
  const p = document.createElement("p");
  p.textContent = value;

  // 削除ボタン
  const button = document.createElement("button");
  button.textContent = "削除"
  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");
    document.getElementById(parentUlId).removeChild(deleteTarget);
  });

  // div定義
  const div = document.createElement("div");
  div.appendChild(p);
  div.appendChild(button);

  // li定義
  const li = document.createElement("li");
  li.appendChild(div);

  return li;
}



//てきとーにdom取得
// const title1 = document.getElementById("title")
// console.log(title1);

// const title2 = document.querySelector("#title");
// console.log(title2);

// const containers = document.getElementsByClassName("container");
// console.log(containers);

// // dom生成
// const divEl = document.createElement("div");

// const pEl =document.createElement("p");
// divEl.append(pEl);//ケツに追加

// const h2El = document.createElement("h2");
// divEl.prepend(h2El);//頭に追加

// console.log(divEl);


// ボタンをcontainerに追加
// const buttonEl = document.createElement("button");
// buttonEl.textContent = "ボタン";

// //const container = document.querySelector(".container");//一番最初に見つかったcontainerを取得
// const container = document.getElementsByClassName("container");
// container[1].appendChild(buttonEl);


// // title(hello world)を削除
// const titleEl = document.getElementById("title");

// const bodyEl = document.querySelector("body");
// bodyEl.removeChild(titleEl);
