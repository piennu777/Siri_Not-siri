// メッセージを返信する関数（1秒のラグを追加）
function replyMessage(message) {
    // メッセージを返信中であることを表示
    const botTypingMessage = addMessageToChatLog("尻", "返信中...");

    // 1秒のラグを追加してメッセージを返信する
    setTimeout(function () {
        const reply = "すみません、よくわかりません。";
        addMessageToChatLog("尻", reply);

        // "返信中..."のメッセージを消す
        if (botTypingMessage) {
            botTypingMessage.remove();
        }
    }, 1000);
}

// メッセージをチャットログに追加する関数
function addMessageToChatLog(sender, message) {
    const chatLog = document.getElementById("chat-log");
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatLog.appendChild(messageDiv);

    // チャットログの最後尾に新しいメッセージが表示されるようにスクロールする
    chatLog.scrollTop = chatLog.scrollHeight;

    return messageDiv;
}

// 送信ボタンのクリックイベントハンドラ
function sendMessage() {
    const userInput = document.getElementById("user-input");

    // ユーザーが入力したメッセージを取得
    const userMessage = userInput.value;

    // ユーザーのメッセージをチャットログに追加
    addMessageToChatLog("あなた", userMessage);

    // メッセージを返信
    replyMessage(userMessage);

    // 入力欄をクリア
    userInput.value = "";
}

// 送信ボタンにイベントリスナーを追加
document.getElementById("send-btn").addEventListener("click", sendMessage);
