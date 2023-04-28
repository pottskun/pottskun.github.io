let like = [
  "ミルクチョコレート",
  "納豆ご飯",
  "ヤンヤンつけボー",
  "Dr.WARIO",
  "海、波の音",
  "洗い立ての布団",
  "洗濯物の香り",
  "家",
  "網戸にできる季節",
  "蚊取り線香",
  "お土産",
  "夏の匂い",
  "朝方に聞こえる虫や鳥の鳴き声",
  "長靴",
  "いちご飴",
  "ネイル",
  "田舎"]

let dislike = [
  "コーヒー",
  "魚（特に青魚）",
  "お米を研ぐこと",
  "旅行帰り後の日常に戻るまでの時間",
  "虫",
  "虫全般",
  "とにかく虫",
  "強い光",
  "大きな音",
  "人混み",
  "早起き",
  "映画館",
  "選挙カー"]

let hobby = [
  "読書",
  "映画鑑賞",
  "ヨガ"]

let hello = [
  "shinoです",
  "98年3月生まれ",
  "寅年",
  "前職は保育士",
  "2021年7月からWebの勉強開始",
  "今は就活に向けて修行中",
  "自分の性格は感情の起伏が激しい繊細やさん？",
  "あとは心配性だったり、社交的な人見知りだったり",
  "世界で一番好きな場所は岩手県の「吉里吉里」",]

let study = [
  "HTML",
  "CSS",
  "Sass",
  "Pug",
  "JavaScript"]

let want = [
  "付け心地のいい下着",
  "ヨガウェア",
  "洗顔器",
  "テンポドロップ",
  "乾燥機",
  "キーボード",
  "モニターアーム",
  "トラックパッド",
  "マイホーム"]

const topics = document.getElementsByClassName("topic");
for (let topic of topics) {
  // topic.addEventListener("keydown", function (e) {
  //   if (e.key == "Enter") {
  //     if (topic.getAttribute("data-anim-status") === "clickable") {
  //       topic.setAttribute("data-anim-status", "processing");
  //       action(topic, topics)
  //     }
  //   }
  // })
  topic.addEventListener("click", function () {
    if (topic.getAttribute("data-anim-status") === "clickable") {
      topic.setAttribute("data-anim-status", "processing");
      action(topic, topics);
    }
  });
}
// 関数actionを定義して引数としてtopic(変数)とtopics(配列)を受け取る
// otherTopicにtopics(配列)を入れてゆく
// otherTopicがtopicと異なる場合otherTopicにmsg-picupクラスを追加する
// つまりtopic以外の要素にmsg-picupクラスを追加することで要素に対するアニメーションを開始
function action(topic, topics) {
  for (let otherTopic of topics) {
    if (otherTopic !== topic) {
      // otherTopic と topic の値が異なる場合に true を返しす
      otherTopic.classList.add("msg-picup");
      otherTopic.setAttribute("data-anim-status", "processing")
    }
  }
  topic.classList.add("msg-picup");
  topic.addEventListener("animationend", () => {
    const modal = document.createElement("div");
    modal.className = "slideUp"
    document.getElementById("modal").appendChild(modal);
    const closeBtn = document.createElement("button");
    closeBtn.className = "js-closeBtn"
    document.getElementsByClassName("slideUp")[0].appendChild(closeBtn);
    closeBtn.innerHTML = ("close");
    closeBtn.addEventListener("click", function () {
      modal.classList.add("slideDown")
      modal.addEventListener("animationend", () => {
        for (let removeTopic of topics) {
          removeTopic.classList.remove("msg-picup")
        }
        modal.remove();
        topic.setAttribute('data-anim-status', 'clickable');
        for (let otherTopic of topics) {
          if (otherTopic !== topic) {
            otherTopic.setAttribute("data-anim-status", "clickable");
          }
        }
      })
    })
    const hoge = document.getElementsByClassName("slideUp")[0];
    let content = [];
    if (topic === topics[0]) {
      content = like
    } else if (topic === topics[1]) {
      content = dislike;
    } else if (topic === topics[2]) {
      content = hobby;
    } else if (topic === topics[3]) {
      content = hello;
    } else if (topic === topics[4]) {
      content = study;
    } else if (topic === topics[5]) {
      content = want;
    }
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper")
    modal.appendChild(wrapper);
    for (let i = 0; i < content.length; i++) {
      const newMsg = document.createElement("p");
      newMsg.classList.add("content")
      newMsg.innerHTML = content[i];
      wrapper.appendChild(newMsg);
    }
  }, { once: true })
}
window.addEventListener("load", function () {
  let getH = new Date().getHours();
  let bgi = document.querySelector(".container");
  if ((getH >= 9) && (getH <= 18)) {
    bgi.classList.add("bgi-noon");
    console.log("うんち");
  } else if ((getH >= 19 && getH <= 23) || (getH >= 0 && getH <= 2)) {
    bgi.classList.add("bgi-night");
  } else if ((getH >= 3) && (getH <= 8)) {
    bgi.classList.add("bgi-morning");
  }
});