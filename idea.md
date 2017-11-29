segwitアドレス形式をデフォにできたらいいな
OP_RETURNメッセージを送れるようにしたい
それを受金時に簡単に見られるようにしたい
パスワードは

  * 6文字以上の半角英数字、半角記号
  * 6桁以上のPIN
  * 生体認証

で選べ、要求するタイミングを

  * 秘密鍵利用時のみ（残高・アドレスは誰でも見られる）
  * ウォレットを開いたら必ず（残高は、紐づいたアドレスを知らないとわからない）

みたいな感じで選べるようにしたい。そのためには公開鍵は別で暗号化せずに保存する必要あり
レジPOSと連携しやすくしたり、Zaif paymentのフロントエンドも実装したり