enchant()

function Images(width,height){
  Load(width,height);
}

function Load(width,height){
  var game = new Core(width, height);

  var loadScene = new Scene();
	game.loadingScene = loadScene;

  var label = new Label();
  var progress = 0;

  var Texts = Class.create(Label, {
    initialize: function(a,b) {
      Label.call(this);
      this.font  = "30px monospace";
      this.color = 'black';
      this.x = 10;
      this.y = 100 + 40*b;
      this.width = width;
      this.height = 30;
      this.text = a;
      loadScene.addChild(this);
    }
  });

	loadScene.addEventListener('progress', function(e){

    label.moveTo(100,290);
    label.color = 'Black';
    label.font  = "30px monospace";
    loadScene.addChild(label);

		progress = e.loaded / e.total;
		progress *= 100;
		progress = Math.round(progress);
    if(progress<10) progress = "00" + progress;
    else if(progress<100) progress = "0" + progress;
    label.text = "LOADING..." + progress + "％";

	});
	loadScene.addEventListener('load', function(e) {
      var core = enchant.Core.instance;
      core.removeScene(core.loadingScene);
      core.dispatchEvent(e);
	});

  var Name = [
    "COOLEST",
    "Get Wild",
    "HANABI",
    "OVERLAP",
    "POP TEAM EPIC",
    "ＰＯＰＰＹ　ＰＡＰＰＹ　ＤＡＹ（女性ｖｅｒ．１）",
    "Red Flash Revolution",
    "Ｔｗｉｎｋｌｉｎｇ　ｓｔａｒ",
    "きみのままで",
    "キラメク誓い",
    "たーのしーたーのしーたーのしー！",
    "とっても賢いじゅるり_れしぴ_",
    "ヒカリ証明論",
    "プライド",
    "ぼくのフレンド",
    "マイペースちぇいさー",
    "永遠の灯",
    "硝子ドール",
    "偶然、必然。",
    "砂糖玉の月",
    "湯けむりユートピア",
    "風船飛行（女性ver.）"
  ];
  var Name2 = [
    "あの時…！",
    "ケータイ",
    "ゴクン",
    "バシッ",
    "ポポポ(男)",
    "ポポポ(女)",
    "衝撃",
    "閃き",
    "捜査",
    "木槌",
    "有罪"
  ];
  //var Name = [];
  var Name2 = [];
  var BGMs = [];
  for (var i = 0; i < Name.length; i++) {
    BGMs[i] = [Name[i],"https://raw.githubusercontent.com/compromise-satisfaction/Saved/master/音/歌/"+Name[i]+".wav"];
  }
  for (var k = 0; k < Name2.length; k++) {
    BGMs[i] = [Name2[k],"https://raw.githubusercontent.com/compromise-satisfaction/Saved/master/音/"+Name2[k]+".wav"];
    i++;
  }
  for (var i = 0; i < 16; i++) {
    //BGMs[i] = [[i],"sound/titty-fuck-samus-san["+i+"].mp3"];
  }
  var BGM = [];
  for (var i = 0; i < BGMs.length; i++) {
    BGM[i] = document.createElement("audio");
    BGM[i].src = BGMs[i][1];
    BGM[i].title = BGMs[i][0];
  }

  game.fps = 10;
  game.onload = function(){

    var Newscene = function(){

      var scene = new Scene();                                // 新しいシーンを作る

      var Button = [];
      var Number_x = 0;
      var Number_y = 0;
      var submits = 0;
      function Submit(a,b){
        Button[submits] = new Entity();
        Button[submits].moveTo(Number_x,Number_y);
        Number_y += height/10;
        if(submits%10==9){
          Number_x += width/4;
          Number_y = 0;
        }
        Button[submits].width = width/4;
        Button[submits].height = height/10;
        Button[submits]._element = document.createElement('input');
        Button[submits]._element.type = "submit";
        Button[submits]._element.value = a;
        scene.addChild(Button[submits]);
        Button[submits].addEventListener('touchstart',function(e){
          BGM[b].addEventListener("ended",function(e){
            BGM[b].currentTime = 0;
            switch(Button[b].backgroundColor){
              case "red":
                Button[b].backgroundColor = "buttonface";
                break;
              case "purple":
                for (var i = b+1; i < BGM.length; i++) {
                  if(BGM[i].currentTime==0&&Button[i].backgroundColor=="purple"){
                    BGM[i].play();
                    return;
                  }
                }
                for (var i = 0; i <= b; i++) {
                  if(BGM[i].currentTime==0&&Button[i].backgroundColor=="purple"){
                    BGM[i].play();
                    return;
                  }
                }
                break;
              case "green":
                break;
            }
          });
          switch(this.backgroundColor){
            default:
              BGM[b].play();
              this.backgroundColor = "red";
              break;
            case "red":
              BGM[b].loop = true;
              this.backgroundColor = "blue";
              break;
            case "blue":
              BGM[b].loop = false;
              for (var i = 0; i < BGM.length; i++) {
                if(BGM[i].currentTime!=0&&Button[i].backgroundColor=="purple"){
                  BGM[b].pause();
                  BGM[b].currentTime = 0;
                  break;
                }
              }
              this.backgroundColor = "purple";
              break;
            case "purple":
              this.backgroundColor = "green";
              if(BGM[b].currentTime!=0){
                for (var i = b+1; i < BGM.length; i++) {
                  if(BGM[i].currentTime==0&&Button[i].backgroundColor=="purple"){
                    BGM[i].play();
                    return;
                  }
                }
                for (var i = 0; i <= b; i++) {
                  if(BGM[i].currentTime==0&&Button[i].backgroundColor=="purple"){
                    BGM[i].play();
                    return;
                  }
                }
              }
              break;
            case "green":
              this.backgroundColor = "buttonface";
              if(BGM[b].currentTime!=0){
                for (var i = b+1; i < BGM.length; i++) {
                  if(BGM[i].currentTime==0&&Button[i].backgroundColor=="green"){
                    BGM[i].play();
                    return;
                  }
                }
                for (var i = 0; i <= b; i++) {
                  if(BGM[i].currentTime==0&&Button[i].backgroundColor=="green"){
                    BGM[i].play();
                    return;
                  }
                }
              }
              BGM[b].pause();
              BGM[b].currentTime = 0;
              break;
          }
        });
        submits++;
      }

      Datas = ["透明.png","1.8","風呂.png"];

      var Background = new Sprite();
      Background._element = document.createElement("img");
      if(Datas[2]) Background._element.src = Datas[2];
      else Background._element.src = "黒.png";
      Background.width = width;
      Background.height = width/16*9;
      scene.addChild(Background);

      var Syu = new Sprite();
      Syu._element = document.createElement("img");
      Syu._element.src = "草.png";
      Syu.width = width/16;
      Syu.height = width/16;
      scene.addChild(Syu);

      var Explosion = new Sprite();
      Explosion._element = document.createElement("img");
      Explosion._element.src = "透明.png";
      Explosion.width = width/16*9;
      Explosion.height = width/16*9;
      Explosion.x = (width-Explosion.width)/2;
      scene.addChild(Explosion);

      if(Datas[0]!=false){
        var Character2 = new Sprite();
        Character2._element = document.createElement("img");
        Character2._element.src = Datas[0];
        Character2._element.title = Datas[0];
        Character2.width = width/16*9;
        Character2.height = width/16*9;
        Character2.width*=Datas[1].split("→")[0];
        Character2.height*=Datas[1].split("→")[0];
        Character2.x = (width-Character2.width)/2;
        if(Datas[1].split("→")[1]) Character2.y =  Datas[1].split("→")[1]*(width/16/100);
        scene.addChild(Character2);
      }//キャラ真ん中

      var White_Background = new Sprite();
      White_Background._element = document.createElement("img");
      White_Background._element.src = "白.png";
      White_Background.y = width/16*9;
      White_Background.width = width;
      White_Background.height = height-width/16*9;
      scene.addChild(White_Background);

      var Buttons_test = [];

      function Button_test(a,b){
        Buttons_test[a] = new Entity();
        Buttons_test[a].moveTo((width/5)*a,height-(width/5));
        Buttons_test[a].width = (width/5);
        Buttons_test[a].height = (width/5);
        Buttons_test[a]._element = document.createElement('input');
        Buttons_test[a]._element.type = "submit";
        Buttons_test[a]._element.value = b;
        scene.addChild(Buttons_test[a]);
      }
      Button_test(0,"左");//戻る1
      Button_test(1,"上");//戻る2
      Button_test(2,"アイテム");//設定
      Button_test(3,"下");//進む1
      Button_test(4,"右");//進む2

      Buttons_test[0]._element.onclick = function(){
        Syu.x -= width/16;
      };

      Buttons_test[1]._element.onclick = function(){
        Syu.y -= width/16;
      };

      Buttons_test[3]._element.onclick = function(){
        Syu.y += width/16;
      };

      Buttons_test[4]._element.onclick = function(){
        Syu.x += width/16;
      };

      Buttons_test[2]._element.onclick = function(){
        for (var i = 0; i < BGM.length; i++) {
          Submit(BGM[i].title,i);
        }
      };

      return scene;
    };
    game.replaceScene(Newscene());  // ゲームの_rootSceneをスタートシーンに置き換える
  }
  game.start();
}
