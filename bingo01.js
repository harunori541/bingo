var list1 = []; // 空のリスト1を作り0から75まで入れていく
for (let i = 0; i < 76; i++) {
    list1.push(i);
}

// リストをシャッフルする
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var list2 = shuffle(list1); // シャッフルしたリストをリスト２と命名
var score = [];

function push() { // ボタンが押された瞬間
    var x = list2.pop(); // リスト２から1つ要素を取り出す
    document.getElementById("a").innerHTML = x;
    score.push(x);
    if (x === undefined) {
        document.getElementById('a').textContent = '終了';
        alert("本日のビンゴは全て終了しました!")
    } else {

        document.getElementById('b').textContent = score.join('、');
    }
}
