define(function(require){function _setConfig(config){_configEDI=config}function _init(blocos,callback,callbackFinal,settings){function embaralhar(arr){for(var valorTemporaio,indexAleatorio,indexAtual=arr.length;0!==indexAtual;)indexAleatorio=Math.floor(Math.random()*indexAtual),indexAtual-=1,valorTemporaio=arr[indexAtual],arr[indexAtual]=arr[indexAleatorio],arr[indexAleatorio]=valorTemporaio;return arr}function onClick(){var self=$(this);peca.objetivos.pop(),edi.objetivos.pop(),self.css({"transition-duration":"1.5s",transform:"rotate(0)","z-index":99}),config.qtdX?(self.animate({left:config.left+incremento.x,top:config.top+incremento.y},500,function(){self.css("zIndex",++qtdIndex),0==peca.objetivos.length&&setTimeout(function(){callbackFinal&&callbackFinal()},1500)}),incremento.x+=self.width()+30,qtdIndex++,qtdIndex>=config.qtdX&&(incremento.x=0,incremento.y=self.height()+30,qtdIndex=0)):self.animate({left:config.left+Math.random()*config.margem,top:config.top+Math.random()*config.margem},500,function(){self.css("zIndex",++qtdIndex)}),self.off(),0==peca.objetivos.length&&setTimeout(function(){$clipeBack.show()},500),edi.finalizar(),callback&&callback()}edi.iniciar(_configEDI);var peca=this,config={width:180,height:130,fontSize:14,fontFamily:"trebuchet_ms",colorido:!1,lineHeight:1,left:370,top:77,margem:50,qtdX:null,clipePos:{x:86,y:86}};settings&&$.extend(config,settings);var cores=["#FC9491","#E9DA7D","#EAA2D2","#B3D16D","#E6A561","#A1D9E7","#DEBCF0","#F1F2EC"];blocos.forEach(function(){peca.objetivos.push(0),edi.objetivos.push(0)});var $revBN=$("<section>").addClass("revela-bloco-nota").attr("data-edi","revela-bloco-nota").appendTo("#conteudo");blocos.forEach(function(obj,i){var $bloco=$("<div>").addClass("bloco").attr("id","bloco-"+i).css({width:config.width,height:config.height,background:"#FBF3A0",position:"absolute",left:870,top:100,fontSize:config.fontSize,fontFamily:config.fontFamily,lineHeight:config.lineHeight}).appendTo($revBN),rotate=($("<p>").css({height:config.height,display:"table-cell",verticalAlign:"middle",textAlign:"center"}).html(obj).appendTo($bloco),20*Math.random()-50);if($bloco.css("transform","rotate("+rotate+"deg)"),config.colorido){cores=embaralhar(cores);var n=Math.round(Math.random()*cores.length);$bloco.css("background",cores[n])}setTimeout(function(){$bloco.animate({left:52,top:77},500)},100*i),$bloco.click(onClick)});var $clipe=$("<div>").addClass("clipe").appendTo($revBN),$clipeBack=($("<div>").addClass("clipe-front").prependTo($clipe),$("<div>").addClass("clipe-back").prependTo($clipe));$clipe.animate({left:config.clipePos.x,top:config.clipePos.y},500,function(){$clipeBack.hide()});var incremento={x:0,y:0},qtdIndex=0;ARR_TAREFAS[tarefaBlocaNota].resolve()}var tarefaBlocaNota=addTarefa(),edi=require("../lib/edi"),_configEDI=null;return{root:edi,objetivos:[],setConfig:_setConfig,revela_bloco_nota:_init}});