function myFunction() {

  let getResponse = UrlFetchApp.fetch("https://www.goobike.com/maker-yamaha/car-xvs1300a/index.html");
  let html = getResponse.getContentText();

  var divs = html.match(/<div class="bike_sec">/g);

  var num = divs.length

  var message = '検索結果は【'+num+'】件です。';
  if (parseInt(num) != 3){
    message += '\n\n詳細をチェック::https://www.goobike.com/maker-yamaha/car-xvs1300a/index.html';
  }
  var accessToken = 'LINE Notifyアクセストークン';
  var lineNotifyApi = 'https://notify-api.line.me/api/notify';

  var option = {
    'method': 'post',
    'headers': {
      'Authorization': 'Bearer ' + accessToken, 
    },
    'payload': {
      'message': message
    },
  };
  var response = UrlFetchApp.fetch(lineNotifyApi, option);
  if (parseInt(response.getResponseCode()) != 200){
    Logger.log("message:"+message);
    Logger.log(response.getContentText());
  }
}
