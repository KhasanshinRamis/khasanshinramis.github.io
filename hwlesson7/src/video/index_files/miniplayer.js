(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{D:"div",W:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430";a.O().da("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{D:"div",W:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c");g.U.call(this,{D:"button",W:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},
K:[d]});this.H=a;this.ma("click",this.onClick,this);this.la("title",g.DO(a,e,"i"));g.Ke(this,g.qP(b.xb(),this.element))},P5=function(a){g.U.call(this,{D:"div",
J:"ytp-miniplayer-ui"});this.fl=!1;this.player=a;this.L(a,"minimized",this.Hh);this.L(a,"onStateChange",this.YO)},Q5=function(a){g.WN.call(this,a);
this.o=new P5(this.player);this.o.hide();g.IN(this.player,this.o.element,4);a.app.M.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(O5,g.U);O5.prototype.onClick=function(){this.H.oa("onExpandMiniplayer")};g.t(P5,g.U);g.k=P5.prototype;
g.k.show=function(){this.Gc=new g.zn(this.In,null,this);this.Gc.start();if(!this.fl){this.tooltip=new g.CS(this.player,this);g.C(this,this.tooltip);g.IN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.vb=new g.jP(this.player);g.C(this,this.vb);this.Si=new g.U({D:"div",J:"ytp-miniplayer-scrim"});g.C(this,this.Si);this.Si.ba(this.element);this.L(this.Si.element,"click",this.EC);var a=new g.U({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},K:[g.AM()]});
g.C(this,a);a.ba(this.Si.element);this.L(a.element,"click",this.Cl);a=new O5(this.player,this);g.C(this,a);a.ba(this.Si.element);this.jj=new g.U({D:"div",J:"ytp-miniplayer-controls"});g.C(this,this.jj);this.jj.ba(this.Si.element);this.L(this.jj.element,"click",this.EC);var b=new g.U({D:"div",J:"ytp-miniplayer-button-container"});g.C(this,b);b.ba(this.jj.element);a=new g.U({D:"div",J:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ba(this.jj.element);var c=new g.U({D:"div",J:"ytp-miniplayer-button-container"});
g.C(this,c);c.ba(this.jj.element);this.aD=new g.cR(this.player,this,!1);g.C(this,this.aD);this.aD.ba(b.element);b=new g.$Q(this.player,this);g.C(this,b);b.ba(a.element);this.nextButton=new g.cR(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.ba(c.element);this.eg=new g.mS(this.player,this);g.C(this,this.eg);this.eg.ba(this.Si.element);this.jc=new g.lR(this.player,this);g.C(this,this.jc);g.IN(this.player,this.jc.element,4);this.Jq=new g.U({D:"div",J:"ytp-miniplayer-buttons"});g.C(this,
this.Jq);g.IN(this.player,this.Jq.element,4);a=new g.U({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},K:[g.AM()]});g.C(this,a);a.ba(this.Jq.element);this.L(a.element,"click",this.Cl);a=new g.U({D:"button",W:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},K:[g.OM()]});g.C(this,a);a.ba(this.Jq.element);this.L(a.element,"click",this.XM);this.L(this.player,"presentingplayerstatechange",
this.Fb);this.L(this.player,"appresize",this.Oa);this.L(this.player,"fullscreentoggled",this.Oa);this.Oa();this.fl=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Gc&&(this.Gc.dispose(),this.Gc=void 0);g.U.prototype.hide.call(this);this.player.app.M.o||(this.fl&&this.jc.hide(),this.player.loadModule("annotations_module"))};
g.k.X=function(){this.Gc&&(this.Gc.dispose(),this.Gc=void 0);g.U.prototype.X.call(this)};
g.k.Cl=function(){this.player.stopVideo();this.player.oa("onCloseMiniplayer")};
g.k.XM=function(){this.player.playVideo()};
g.k.EC=function(a){if(a.target===this.Si.element||a.target===this.jj.element)g.Q(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.lG(g.rM(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.oa("onExpandMiniplayer")};
g.k.Hh=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.M.o)};
g.k.Zc=function(){this.jc.Xb();this.eg.Xb()};
g.k.In=function(){this.Zc();this.Gc&&this.Gc.start()};
g.k.Fb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Oa=function(){this.jc.setPosition(0,g.rN(this.player).getPlayerSize().width,!1);this.jc.gx()};
g.k.YO=function(a){this.player.app.M.o&&(0===a?this.hide():this.show())};
g.k.xb=function(){return this.tooltip};
g.k.Nc=function(){return!1};
g.k.ne=function(){return!1};
g.k.Kf=function(){return!1};
g.k.Bw=function(){};
g.k.lj=function(){};
g.k.Fm=function(){};
g.k.vj=function(){return null};
g.k.Wk=function(){return new g.vh(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Il=function(a,b,c,d,e){var f=0,h=d=0,l=g.Th(a);if(b){c=g.Gn(b,"ytp-prev-button")||g.Gn(b,"ytp-next-button");var m=g.Gn(b,"ytp-play-button"),n=g.Gn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Qh(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Gn(b,"ytp-miniplayer-button-top-left"),f=g.Qh(b,this.element),b=g.Th(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.rN(this.player).getPlayerSize().width;e=f+(e||0);l=g.Rd(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Lh=function(){};
g.k.kh=function(){return!1};g.t(Q5,g.WN);Q5.prototype.create=function(){};
Q5.prototype.Zf=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.gO.miniplayer=Q5;})(_yt_player);
