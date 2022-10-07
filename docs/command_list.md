---
sidebar_position: 2
---
# コマンドの使い方
[コマンド表](#コマンド表)<br />
EightBotはスラッシュコマンドと通常のコマンドの両方に対応しています。(2023年までにスラッシュコマンドに以降します。)<br />
このチュートリアルでは、スラッシュコマンドを使って説明します。<br />

# 5000
5000兆円ほしい！を生成します。([CyberRex](https://github.com/CyberRex0)さんの[5000choyen-api](https://github.com/CyberRex0/5000choyen-api)を使用しています。)<br />
![image](https://user-images.githubusercontent.com/78240988/184292342-49553fb0-67e6-437c-80c4-929a8b3f3279.png)
## 使い方
/5000 top: 上の文字 bottom: 下の文字
# afk
席を離れる時に使えます<br />
![image](https://user-images.githubusercontent.com/57213007/183798716-785c5f81-4f00-4c91-a963-e9279c955fa5.png)
## 使い方
/afk reason: 理由
# akinator
アキネーターがプレイできます。<br />
![image](https://user-images.githubusercontent.com/78240988/184292685-b6918a9a-fd31-4024-850e-bdcdf8f4481e.png)<br />
![image](https://user-images.githubusercontent.com/78240988/184292789-af421b2c-2cd2-411d-aa77-6fd797a8e7da.png)
## 使い方
/akinator
# ban_member
banされたメンバーを確認できます。<br />
![image](https://user-images.githubusercontent.com/57213007/183800015-599a63ed-f647-43a0-8294-d087d6f25e52.png)
## 使い方
/ban_member
# blackjack
ブラックジャックが出来ます。(今は英語ですが今後日本語に対応します。)<br />
![image](https://user-images.githubusercontent.com/78240988/184300194-7dccf4d9-1e28-41ac-9625-42d0a9ebb909.png)
## 使い方
/blackjack
# bot_info  
EightBotの情報が見れます。<br />
![image](https://user-images.githubusercontent.com/78240988/183837046-0bc3a79a-bf81-4294-9e86-cb56af4529b2.png)
## 使い方
/bot_info 
# bot_invite
いろいろなBotを招待できます。<br />
![image](https://user-images.githubusercontent.com/78240988/184335824-ec378015-60ba-46b8-8ffb-a7e743c4486b.png)
## 使い方
/bot_invite
/bot_invite bot:招待したいBotのid or メンション
# downcheck
様々なサービスの障害状況が確認できます。<br />
![image](https://user-images.githubusercontent.com/57213007/183793847-afd32a12-93d4-426c-ad49-3242a9846a86.png)
## 使い方
/downcheck name: サービス名
# embed
embedを作成します。<br />
![image](https://user-images.githubusercontent.com/57213007/185721303-9f259234-844d-4cb8-97f7-01ed0974784f.png)
![image](https://user-images.githubusercontent.com/57213007/185721369-4f4bc1d9-2c39-4b90-ba3a-84a7b52365f1.png)
![image](https://user-images.githubusercontent.com/57213007/185721386-62d0a8eb-4166-4b60-90d9-896b96e6e1cd.png)
## 使い方
/embed
# mojiaidaspace
一文字ごとに空白(スペース)を入れます。<br />
![image](https://user-images.githubusercontent.com/57213007/186366267-75522aae-5044-4352-b4e8-6ab5458bc809.png)
## 使い方
/mojiaidaspace text: テキスト
# role_all_add
全員にロールを付与します。<br />
![image](https://user-images.githubusercontent.com/57213007/186367409-3dd000a7-5995-4b42-8f81-b71bf98b7bf7.png)
![image](https://user-images.githubusercontent.com/57213007/186367446-4af44a7a-cefe-4b79-af9b-730ad5bad3d2.png)
## 使い方
/role_all_add role: ロール
# role_all_remove
全員からロールをはく奪します。<br />
![image](https://user-images.githubusercontent.com/57213007/186367746-b3bc5f0f-7018-43cb-a0e5-ac703d4007ff.png)
![image](https://user-images.githubusercontent.com/57213007/186367770-c34e6d9b-f081-4790-9538-a9da05793c54.png)
## 使い方
/role_all_remove role: ロール
# start
アクティビティ(YouTubeなど)をスタートできます。<br />
![スクリーンショット 2022-08-10 122516](https://user-images.githubusercontent.com/57213007/183806942-3017d39d-f74f-4195-982a-72e21a39726e.png)
## 使い方
/start activity: 選択肢からアクティビティーを選ぶ
# totusi
突然の死を生成します。([taqm](https://github.com/taqm)さんの[totsuzen-text](https://github.com/taqm/totsuzen-text)を使用しています。)<br />
![image](https://user-images.githubusercontent.com/57213007/185379608-0ce1e844-f246-4de5-b8e0-41540978e38a.png)
## 使い方
/totusi text: テキスト
# timeout
ユーザーをタイムアウトします(分単位)<br />
![image](https://user-images.githubusercontent.com/78240988/183838312-b75f773d-9d8c-4702-a7b8-73ae6c8d4f99.png)
## 使い方
/timeout user: ユーザー minutes: タイムアウトしている時間 reason: タイムアウトする理由(無くてもよい)
# un_timeout
ユーザーのタイムアウトを解除します。<br />
![image](https://user-images.githubusercontent.com/78240988/183838652-46d73336-a9e9-4569-8572-0d499a3634e4.png)
## 使い方
/un_timeout user: ユーザー
# urlcheck
urlが安全かチェックします。<br />
![image](https://user-images.githubusercontent.com/78240988/183839157-6cb5d054-8e78-4b25-8a6c-092144a7f7d2.png)
## 使い方
/urlcheck url: チェックするurl
# verify
認証パネルを作成します。<br />
![image](https://user-images.githubusercontent.com/78240988/183839330-4f4b4ac1-3884-4b07-b1e8-c31f97abc464.png)<br />
![image](https://user-images.githubusercontent.com/78240988/183839516-35a4b990-0868-4acd-be9b-e9e32f7db3e4.png)<br />
![image](https://user-images.githubusercontent.com/78240988/183839560-5fffef46-a830-4489-be53-967037f66d04.png)<br />
![image](https://user-images.githubusercontent.com/78240988/183839578-546f10aa-cd19-4b83-93a4-b5910a6a7ca7.png)<br />
## 使い方
/verify type: 足し算認証・引き算認証・掛け算認証・割り算認証から選ぶ role: ロール
# urlst
urlを短縮できます。(is.gdを使用しています。)<br />
![image](https://user-images.githubusercontent.com/57213007/183794174-ff589176-a866-4481-8807-bbc0dec15276.png)
## 使い方
/urlst url: 短縮するURL
# voicetext
googleの声が出力できます。<br />
![image](https://user-images.githubusercontent.com/57213007/183799269-05b03d8a-8b62-4991-a9f5-49da3499e167.png)
## 使い方
/voicetext text: テキスト
# youtube
discord内でyoutubeで検索できます。
![image](https://user-images.githubusercontent.com/57213007/183796608-122328db-ea59-480a-bb08-8294a528d71f.png)
## 使い方
/youtube word: 検索ワードorチャンネル名
# コマンド表
 <table>
    <tr>
      <th>コマンド名</th>
      <th>引数1</th>
      <th>コマンドの説明</th>
      <th>コマンドの使い方</th>
    </tr>
     <tr>
      <td>5000</td>
      <td>top</td>
      <td>5000兆円ほしい！を生成します。</td>
      <td>/5000 top: 上の文字 bottom: 下の文字</td>
    </tr>
    <tr>
      <td>afk</td>
      <td>理由</td>
      <td>afkをセットします。</td>
      <td>/afk reason: 理由</td>
    </tr>
 <tr>
  <td>akinator</td>
  <td>引数無し</td>
  <td>アキネーターがプレイできます。</td>
  <td>/akinator</td>
 </tr>
    <tr>
      <td>ban_member</td>
      <td>引数無し</td>
      <td>Banされたメンバーの一覧を表示します。</td>
      <td>/ban_member</td>
    </tr>
 <tr>
  <td>blackjack</td>
  <td>引数無し</td>
  <td>ブラックジャックが出来ます。</td>
  <td>/blackjack</td>
 </tr>
    <tr>
      <td>bot_info</td>
      <td>引数無し</td>
      <td>Botの情報を表示します。</td>
      <td>/bot_info</td>
    </tr>
 <tr>
  <td>bot_invite</td>
  <td>bot</td>
  <td>いろいろなBotを招待できます。</td>
  <td>/bot_invite or /bot_invite bot:</td>
 </tr>
    <tr>
     <td>downcheck</td>
     <td>サービス名</td>
     <td>様々なサービスの障害状況が確認できます。</td>
     <td>/downcheck name: サービス名</td>
  </tr>
 <tr>
  <td>embed</td>
  <td>引数無し</td>
  <td>embedを作成します。 </td>
  <td>/embed</td>
 </tr>
  <tr>
  <td>mojiaidaspace</td>
  <td>text</td>
  <td>一文字ごとに空白(スペース)を入れます。 </td>
  <td>/mojiaidaspace text:テキスト</td>
 </tr>
 <tr>
  <td>role_all_add</td>
  <td>role</td>
  <td> 全員にロールを付与します。 </td>
  <td> /role_all_add role: ロール</td>
 </tr>
 <tr>
  <td>role_all_remove</td>
  <td>role</td>
  <td> 全員からロールをはく奪します。 </td>
  <td> /role_all_remove role: ロール</td>
 </tr>
    <tr>
     <td>start</td>
     <td>選択肢からアクティビティーを選ぶ</td>
     <td>アクティビティ(YouTubeなど)をスタートできます。</td>
     <td>/start activity: 選択肢からアクティビティーを選ぶ</td>
 </tr>
 <tr>
  <td>totusi</td>
  <td>text</td>
  <td> 突然の死を生成します。 </td>
  <td>/totusi text: テキスト</td>
 </tr>
      <tr>
       <td>timeout</td>
       <td>ユーザー</td>
       <td>ユーザーをタイムアウトします(分単位)</td>
       <td>/timeout user: ユーザー minutes: タイムアウトしている時間 reason: タイムアウトする理由(無くてもよい)</td>
      </tr>
      <tr>
       <td>un_timeout</td>
       <td>ユーザー</td>
       <td>ユーザーのタイムアウトを解除します。</td>
       <td>/un_timeout user: ユーザー</td>
      </tr>
      <tr>
       <td>urlcheck</td>
       <td>チェックするurl</td>
       <td>urlが安全かチェックします。</td>
       <td>/urlcheck url: チェックするurl</td>
      </tr>
      <tr>
       <td>verify</td>
       <td>type</td>
       <td>認証パネルを作成します。</td>
       <td>/verify type: 足し算認証・引き算認証・掛け算認証・割り算認証から選ぶ role: ロール</td>
      </tr>
    <tr>
     <td>urlst</td>
     <td>短縮するURL</td>
     <td>urlを短縮できます。</td>
     <td>/urlst url: 短縮するURL</td>
    </tr>
    <tr>
     <td>voicetext</td>
     <td>声にする文字</td>
     <td>googleの声が出力できます。</td>
     <td>/voicetext text: テキスト</td>
    </tr>
    <tr>
     <td>youtube</td>
     <td>検索内容</td>
     <td>discord内でyoutubeで検索できます。</td>
     <td>/youtube word: 検索ワードorチャンネル名</td>
    </tr>
</table>
今後も追加していきます。 <br/>
人材不足です()