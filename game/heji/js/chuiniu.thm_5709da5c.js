
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/chuiniu/biaozhongIndex.exml'] = window.biaozhongIndex = (function (_super) {
	__extends(biaozhongIndex, _super);
	var biaozhongIndex$Skin1 = 	(function (_super) {
		__extends(biaozhongIndex$Skin1, _super);
		function biaozhongIndex$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin1;
	})(eui.Skin);

	var biaozhongIndex$Skin2 = 	(function (_super) {
		__extends(biaozhongIndex$Skin2, _super);
		function biaozhongIndex$Skin2() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin2.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin2;
	})(eui.Skin);

	var biaozhongIndex$Skin3 = 	(function (_super) {
		__extends(biaozhongIndex$Skin3, _super);
		function biaozhongIndex$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "location_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin3;
	})(eui.Skin);

	var biaozhongIndex$Skin4 = 	(function (_super) {
		__extends(biaozhongIndex$Skin4, _super);
		function biaozhongIndex$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameset";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin4;
	})(eui.Skin);

	var biaozhongIndex$Skin5 = 	(function (_super) {
		__extends(biaozhongIndex$Skin5, _super);
		function biaozhongIndex$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin5;
	})(eui.Skin);

	var biaozhongIndex$Skin6 = 	(function (_super) {
		__extends(biaozhongIndex$Skin6, _super);
		function biaozhongIndex$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesan1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin6;
	})(eui.Skin);

	var biaozhongIndex$Skin7 = 	(function (_super) {
		__extends(biaozhongIndex$Skin7, _super);
		function biaozhongIndex$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cn_bzms_jiayige_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin7;
	})(eui.Skin);

	var biaozhongIndex$Skin8 = 	(function (_super) {
		__extends(biaozhongIndex$Skin8, _super);
		function biaozhongIndex$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","callclick")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","callgray")
					])
			];
		}
		var _proto = biaozhongIndex$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "call";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin8;
	})(eui.Skin);

	var biaozhongIndex$Skin9 = 	(function (_super) {
		__extends(biaozhongIndex$Skin9, _super);
		function biaozhongIndex$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","reshakeclick")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "reshake";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin9;
	})(eui.Skin);

	var biaozhongIndex$Skin10 = 	(function (_super) {
		__extends(biaozhongIndex$Skin10, _super);
		function biaozhongIndex$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin10;
	})(eui.Skin);

	var biaozhongIndex$Skin11 = 	(function (_super) {
		__extends(biaozhongIndex$Skin11, _super);
		function biaozhongIndex$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuYY";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin11;
	})(eui.Skin);

	var biaozhongIndex$Skin12 = 	(function (_super) {
		__extends(biaozhongIndex$Skin12, _super);
		function biaozhongIndex$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuMsg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin12;
	})(eui.Skin);

	var biaozhongIndex$Skin13 = 	(function (_super) {
		__extends(biaozhongIndex$Skin13, _super);
		function biaozhongIndex$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuPlayerList";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin13;
	})(eui.Skin);

	function biaozhongIndex() {
		_super.call(this);
		this.skinParts = ["menu","mySeat","playcount","roompwd","basescore","situp","locationBtn","setting","wanfa","jiesan","tool","whoJoin","joinNotice","dimissProcess","dismissGroup","menban","yaoqing","chatpop13","finalShai","finalGe","totalTrue","shaizhong","shaizhongGroup","myBaozi","myAnimate","mine0","mine1","mine2","mine4","mine3","myShaiGroup","yourTurn","watching","winnum","muchWin","myHeadImg","offline","myPoint","myName","chatpop12","myCallDian","myCallText","myCall","mykai","gou","myYY","biaoqing","myInfo","endImg","endContent","mybei","gameendTip","myAddPoint","jiayigeBtn","jiayigeGroup","geshu","whichGe","whichShai","callBtn","chooseShai0","chooseShai1","chooseShai2","chooseShai3","chooseShai4","chooseShai5","chooseShaiGroup","chooseGe","chooseGeGroup","myCallDian0","myCallText0","onecall","callGroup","jincaiZhong","resetBtn","readyStatus","messageT","messagebg","readyBtn","juhua","waitConnect","voiceplay","luyingNotice","lyNoticeGroup","xiaoxi","pangguanBtn","yying"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.menu_i(),this.mySeat_i(),this._Group1_i(),this._Group2_i(),this.tool_i(),this.joinNotice_i(),this.dismissGroup_i(),this.menban_i(),this.yaoqing_i(),this.totalTrue_i(),this.myShaiGroup_i(),this.yourTurn_i(),this.watching_i(),this.muchWin_i(),this.myInfo_i(),this.gameendTip_i(),this._Image6_i(),this.myAddPoint_i(),this.jiayigeGroup_i(),this.callGroup_i(),this.jincaiZhong_i(),this.resetBtn_i(),this.readyStatus_i(),this.messagebg_i(),this._Group7_i(),this.waitConnect_i(),this._Group11_i(),this.yying_i()];
	}
	var _proto = biaozhongIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 536.39;
		t.y = 13.5;
		t.skinName = biaozhongIndex$Skin1;
		return t;
	};
	_proto.mySeat_i = function () {
		var t = new eui.Image();
		this.mySeat = t;
		t.horizontalCenter = 0;
		t.source = "sit";
		t.visible = false;
		t.y = 794.83;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 12.5;
		t.y = 8;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this.roompwd_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 100;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.left = 18;
		t.text = "局数：0/1";
		t.y = 58.5;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.left = 18;
		t.text = "房间号：666666";
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 519.2;
		t.elementsContent = [this.basescore_i(),this._Label1_i()];
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bold = true;
		t.text = "底分：1分";
		t.textColor = 0x2e815c;
		t.x = 133.34;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "标准模式";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tool_i = function () {
		var t = new eui.Group();
		this.tool = t;
		t.anchorOffsetX = 388;
		t.scaleX = 1;
		t.visible = false;
		t.x = 521.5;
		t.y = 12.17;
		t.elementsContent = [this.situp_i(),this.locationBtn_i(),this.setting_i(),this.wanfa_i(),this.jiesan_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 78;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin2;
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 320;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin3;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 318;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin4;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 238;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin5;
		return t;
	};
	_proto.jiesan_i = function () {
		var t = new eui.Button();
		this.jiesan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 158;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin6;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.visible = false;
		t.x = 138;
		t.y = 2;
		t.elementsContent = [this._Image2_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.width = 330;
		t.y = 18;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dimissProcess_i = function () {
		var t = new eui.Label();
		this.dimissProcess = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 18;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "share";
		t.visible = false;
		t.x = 389.08;
		t.y = 0;
		return t;
	};
	_proto.totalTrue_i = function () {
		var t = new eui.Group();
		this.totalTrue = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 565.58;
		t.elementsContent = [this.chatpop13_i(),this._Group3_i()];
		return t;
	};
	_proto.chatpop13_i = function () {
		var t = new eui.Image();
		this.chatpop13 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "final";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.finalShai_i(),this.finalGe_i()];
		return t;
	};
	_proto.finalShai_i = function () {
		var t = new eui.Image();
		this.finalShai = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		t.x = 122.07;
		return t;
	};
	_proto.finalGe_i = function () {
		var t = new eui.Label();
		this.finalGe = t;
		t.size = 40;
		t.text = "共36个";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.width = 125;
		t.x = 0;
		return t;
	};
	_proto.myShaiGroup_i = function () {
		var t = new eui.Group();
		this.myShaiGroup = t;
		t.horizontalCenter = 7;
		t.y = 739.21;
		t.elementsContent = [this.shaizhongGroup_i(),this.myAnimate_i(),this.mine0_i(),this.mine1_i(),this.mine2_i(),this.mine4_i(),this.mine3_i()];
		return t;
	};
	_proto.shaizhongGroup_i = function () {
		var t = new eui.Group();
		this.shaizhongGroup = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myAnimate_i = function () {
		var t = new eui.Group();
		this.myAnimate = t;
		t.height = 121;
		t.width = 161;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myBaozi_i()];
		return t;
	};
	_proto.myBaozi_i = function () {
		var t = new eui.Image();
		this.myBaozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.visible = false;
		t.x = -21.81;
		t.y = -30.66;
		return t;
	};
	_proto.mine0_i = function () {
		var t = new eui.Image();
		this.mine0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 13.91;
		t.y = 78.91;
		return t;
	};
	_proto.mine1_i = function () {
		var t = new eui.Image();
		this.mine1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 75.97;
		t.y = 81.69;
		return t;
	};
	_proto.mine2_i = function () {
		var t = new eui.Image();
		this.mine2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 92.67;
		t.y = 115;
		return t;
	};
	_proto.mine4_i = function () {
		var t = new eui.Image();
		this.mine4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 4.6;
		t.y = 115.64;
		return t;
	};
	_proto.mine3_i = function () {
		var t = new eui.Image();
		this.mine3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 50.36;
		t.y = 138.51;
		return t;
	};
	_proto.yourTurn_i = function () {
		var t = new eui.Image();
		this.yourTurn = t;
		t.horizontalCenter = 0;
		t.source = "yourTurn";
		t.verticalCenter = -42;
		return t;
	};
	_proto.watching_i = function () {
		var t = new eui.Image();
		this.watching = t;
		t.horizontalCenter = 203;
		t.source = "watching_png";
		t.verticalCenter = 338;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 6;
		t.y = 829.32;
		t.elementsContent = [this._Image4_i(),this.winnum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum_i = function () {
		var t = new eui.Label();
		this.winnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new eui.Group();
		this.myInfo = t;
		t.x = 6.5;
		t.y = 856.71;
		t.elementsContent = [this._Image5_i(),this.myHeadImg_i(),this.offline_i(),this.myPoint_i(),this.myName_i(),this.myCall_i(),this.mykai_i(),this.gou_i(),this.myYY_i(),this.biaoqing_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "myInfo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myHeadImg_i = function () {
		var t = new eui.Image();
		this.myHeadImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "default";
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 96;
		t.source = "offline";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.myPoint_i = function () {
		var t = new eui.Label();
		this.myPoint = t;
		t.height = 21;
		t.size = 21;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xf4df58;
		t.width = 71;
		t.x = 116.5;
		t.y = 60.09;
		return t;
	};
	_proto.myName_i = function () {
		var t = new eui.Label();
		this.myName = t;
		t.anchorOffsetX = 0;
		t.height = 21;
		t.size = 21;
		t.text = "魂族娱乐";
		t.width = 86;
		t.x = 110.5;
		t.y = 30.5;
		return t;
	};
	_proto.myCall_i = function () {
		var t = new eui.Group();
		this.myCall = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop12_i(),this.myCallDian_i(),this.myCallText_i()];
		return t;
	};
	_proto.chatpop12_i = function () {
		var t = new eui.Image();
		this.chatpop12 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myCallDian_i = function () {
		var t = new eui.Image();
		this.myCallDian = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto.myCallText_i = function () {
		var t = new eui.Label();
		this.myCallText = t;
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.mykai_i = function () {
		var t = new eui.Image();
		this.mykai = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "kai2";
		t.x = 0;
		t.y = -92.81;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "fly";
		t.x = 34;
		t.y = -6.99;
		return t;
	};
	_proto.myYY_i = function () {
		var t = new eui.Image();
		this.myYY = t;
		t.height = 96;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 100;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 7.6;
		t.y = 857.62;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.mybei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sunshi_png";
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "lossBei_fnt";
		t.text = "123";
		t.verticalCenter = 0;
		t.x = 147.4;
		return t;
	};
	_proto.mybei_i = function () {
		var t = new eui.Image();
		this.mybei = t;
		t.source = "bei_png";
		t.verticalCenter = 0;
		t.x = 312.92;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "callLeft_png";
		t.visible = false;
		t.x = 269;
		t.y = 721.56;
		return t;
	};
	_proto.myAddPoint_i = function () {
		var t = new eui.Label();
		this.myAddPoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "+20";
		t.x = 28;
		t.y = 907.34;
		return t;
	};
	_proto.jiayigeGroup_i = function () {
		var t = new eui.Group();
		this.jiayigeGroup = t;
		t.height = 20;
		t.width = 20;
		t.x = 506;
		t.y = 746;
		t.elementsContent = [this.jiayigeBtn_i()];
		return t;
	};
	_proto.jiayigeBtn_i = function () {
		var t = new eui.Button();
		this.jiayigeBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = biaozhongIndex$Skin7;
		return t;
	};
	_proto.callGroup_i = function () {
		var t = new eui.Group();
		this.callGroup = t;
		t.height = 183;
		t.width = 232;
		t.x = 408.39;
		t.y = 785.9;
		t.elementsContent = [this._Image7_i(),this._Group5_i(),this.callBtn_i(),this.chooseShaiGroup_i(),this.chooseGeGroup_i(),this.onecall_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "jiaoDianDi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 15.01;
		t.elementsContent = [this.whichGe_i(),this._Label2_i(),this._Group4_i()];
		return t;
	};
	_proto.whichGe_i = function () {
		var t = new eui.Group();
		this.whichGe = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0.61;
		t.elementsContent = [this._Image8_i(),this.geshu_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.geshu_i = function () {
		var t = new eui.Image();
		this.geshu = t;
		t.horizontalCenter = 0;
		t.source = "call30";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "个";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 116.07;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.whichShai_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whichShai_i = function () {
		var t = new eui.Image();
		this.whichShai = t;
		t.horizontalCenter = 0;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.callBtn_i = function () {
		var t = new eui.Button();
		this.callBtn = t;
		t.enabled = true;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 101;
		t.skinName = biaozhongIndex$Skin8;
		return t;
	};
	_proto.chooseShaiGroup_i = function () {
		var t = new eui.Group();
		this.chooseShaiGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = -132.97999999999996;
		t.y = -106.18999999999994;
		t.elementsContent = [this._Image10_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "callRight_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.blendMode = "normal";
		t.height = 73.34;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 342.67;
		t.y = 9.33;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.elementsContent = [this.chooseShai0_i(),this.chooseShai1_i(),this.chooseShai2_i(),this.chooseShai3_i(),this.chooseShai4_i(),this.chooseShai5_i()];
		return t;
	};
	_proto.chooseShai0_i = function () {
		var t = new eui.Group();
		this.chooseShai0 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 1;
		t.elementsContent = [this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai1_i = function () {
		var t = new eui.Group();
		this.chooseShai1 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 81;
		t.elementsContent = [this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai2_i = function () {
		var t = new eui.Group();
		this.chooseShai2 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 161;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai3_i = function () {
		var t = new eui.Group();
		this.chooseShai3 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 241;
		t.elementsContent = [this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai4_i = function () {
		var t = new eui.Group();
		this.chooseShai4 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 321;
		t.elementsContent = [this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai5_i = function () {
		var t = new eui.Group();
		this.chooseShai5 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 401;
		t.elementsContent = [this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai6";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseGeGroup_i = function () {
		var t = new eui.Group();
		this.chooseGeGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = -132.97999999999996;
		t.y = -106.18999999999994;
		t.elementsContent = [this._Image23_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "callLeft_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73.34;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 342.67;
		t.y = 9.33;
		t.viewport = this.chooseGe_i();
		return t;
	};
	_proto.chooseGe_i = function () {
		var t = new eui.Group();
		this.chooseGe = t;
		t.percentWidth = 100;
		return t;
	};
	_proto.onecall_i = function () {
		var t = new eui.Group();
		this.onecall = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -141.95;
		t.y = -98;
		t.elementsContent = [this.myCallDian0_i(),this.myCallText0_i()];
		return t;
	};
	_proto.myCallDian0_i = function () {
		var t = new eui.Image();
		this.myCallDian0 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		t.x = 4.77;
		return t;
	};
	_proto.myCallText0_i = function () {
		var t = new eui.Label();
		this.myCallText0 = t;
		t.height = 25;
		t.size = 25;
		t.text = "已被叫";
		t.textAlign = "center";
		t.textColor = 0xfcfcfc;
		t.verticalCenter = 0;
		t.x = 43.21;
		return t;
	};
	_proto.jincaiZhong_i = function () {
		var t = new eui.Group();
		this.jincaiZhong = t;
		t.horizontalCenter = 0;
		t.y = 447.57;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "bzInGame_json.betting";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "bzInGame_json.dot";
		t.verticalCenter = 0.5;
		t.x = 136.25;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.bottom = 15;
		t.source = "bzInGame_json.dot";
		t.x = 154.36;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.bottom = 15;
		t.source = "bzInGame_json.dot";
		t.x = 175.55;
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new eui.Button();
		this.resetBtn = t;
		t.horizontalCenter = 9;
		t.label = "";
		t.y = 649.55;
		t.skinName = biaozhongIndex$Skin9;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 16;
		t.y = 892.71;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 3.5;
		t.y = 778.91;
		t.elementsContent = [this._Image28_i(),this.messageT_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messageT_i = function () {
		var t = new eui.Label();
		this.messageT = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 692;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.skinName = biaozhongIndex$Skin10;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image29_i(),this.juhua_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 956.33;
		t.elementsContent = [this._Image30_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "dibuBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 105.29;
		t.y = 23.68;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = biaozhongIndex$Skin11;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = -7;
		t.y = -92.66;
		t.elementsContent = [this._Image31_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "ddz_yy_qp_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.luyingNotice_i = function () {
		var t = new eui.Label();
		this.luyingNotice = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "再次点击取消录音15s";
		t.width = 100;
		t.y = 12.65;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 284.5;
		t.y = 26.35;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = biaozhongIndex$Skin12;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 475.94;
		t.y = 26.35;
		t.elementsContent = [this.pangguanBtn_i()];
		return t;
	};
	_proto.pangguanBtn_i = function () {
		var t = new eui.Button();
		this.pangguanBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = biaozhongIndex$Skin13;
		return t;
	};
	_proto.yying_i = function () {
		var t = new eui.Image();
		this.yying = t;
		t.horizontalCenter = 0;
		t.source = "newPublic_json.isLuying";
		t.visible = false;
		t.y = 327.67;
		return t;
	};
	return biaozhongIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/chooseGe.exml'] = window.chooseGe = (function (_super) {
	__extends(chooseGe, _super);
	function chooseGe() {
		_super.call(this);
		this.skinParts = ["content","chooseShai6"];
		
		this.height = 73.6;
		this.width = 72;
		this.elementsContent = [this.chooseShai6_i()];
	}
	var _proto = chooseGe.prototype;

	_proto.chooseShai6_i = function () {
		var t = new eui.Group();
		this.chooseShai6 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 1;
		t.elementsContent = [this._Image1_i(),this.content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.horizontalCenter = 0;
		t.source = "call2";
		t.verticalCenter = 0;
		return t;
	};
	return chooseGe;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/headBox.exml'] = window.headBox = (function (_super) {
	__extends(headBox, _super);
	function headBox() {
		_super.call(this);
		this.skinParts = ["whoseTurn","headImg","nickname","point","offline","gou","YY","chatpop","callDian","callText","call","chatpop0","call0","addpoint","readyStatus","detail","winnum","muchWin","shaizhong","shaiDrangon","baozi","animate","shai0","shai1","shai2","shai4","shai3","kai","title","shaiGroup","biaoqing","yaoqing","sit","endImg","endContent","bei","gameendTip","userInfoGroup","message","messagebg"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.userInfoGroup_i(),this.messagebg_i()];
	}
	var _proto = headBox.prototype;

	_proto.userInfoGroup_i = function () {
		var t = new eui.Group();
		this.userInfoGroup = t;
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this.detail_i(),this._Image3_i(),this.muchWin_i(),this.shaiGroup_i(),this.biaoqing_i(),this.yaoqing_i(),this.sit_i(),this._Label2_i(),this.gameendTip_i()];
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Group();
		this.detail = t;
		t.x = 125.3;
		t.y = 41;
		t.elementsContent = [this._Image1_i(),this.whoseTurn_i(),this._Group1_i(),this.call_i(),this.call0_i(),this.addpoint_i(),this.readyStatus_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "headdikuang";
		t.x = 2.2;
		t.y = 1;
		return t;
	};
	_proto.whoseTurn_i = function () {
		var t = new eui.Image();
		this.whoseTurn = t;
		t.source = "bzHeadkuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 16.8;
		t.y = 21.15;
		t.elementsContent = [this.headImg_i(),this.nickname_i(),this.point_i(),this.offline_i(),this.gou_i(),this.YY_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "default";
		t.verticalCenter = -27.5;
		t.width = 73;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "tom922";
		t.textAlign = "center";
		t.width = 71;
		t.y = 80.78;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Label();
		this.point = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "999999";
		t.textAlign = "center";
		t.textColor = 0xf4df58;
		t.width = 71;
		t.y = 106.25;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 73;
		t.source = "offline";
		t.visible = false;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "fly";
		t.x = 17;
		t.y = -17;
		return t;
	};
	_proto.YY_i = function () {
		var t = new eui.Image();
		this.YY = t;
		t.height = 73;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 73;
		t.x = 1.03;
		t.y = 0;
		return t;
	};
	_proto.call_i = function () {
		var t = new eui.Group();
		this.call = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop_i(),this.callDian_i(),this.callText_i()];
		return t;
	};
	_proto.chatpop_i = function () {
		var t = new eui.Image();
		this.chatpop = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.callDian_i = function () {
		var t = new eui.Image();
		this.callDian = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto.callText_i = function () {
		var t = new eui.Label();
		this.callText = t;
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.call0_i = function () {
		var t = new eui.Group();
		this.call0 = t;
		t.visible = false;
		t.x = -109.32;
		t.y = -50;
		t.elementsContent = [this.chatpop0_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto.chatpop0_i = function () {
		var t = new eui.Image();
		this.chatpop0 = t;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.addpoint_i = function () {
		var t = new eui.Label();
		this.addpoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+10";
		t.textColor = 0xdfe200;
		t.x = 22.7;
		t.y = 44;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 12.3;
		t.y = 41.15;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.visible = false;
		t.x = 0;
		t.y = 53;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 123;
		t.y = 11;
		t.elementsContent = [this._Image4_i(),this.winnum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum_i = function () {
		var t = new eui.Label();
		this.winnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shaiGroup_i = function () {
		var t = new eui.Group();
		this.shaiGroup = t;
		t.x = 245.32;
		t.y = 50.32;
		t.elementsContent = [this.shaiDrangon_i(),this.animate_i(),this.shai0_i(),this.shai1_i(),this.shai2_i(),this.shai4_i(),this.shai3_i(),this.kai_i(),this.title_i()];
		return t;
	};
	_proto.shaiDrangon_i = function () {
		var t = new eui.Group();
		this.shaiDrangon = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animate_i = function () {
		var t = new eui.Group();
		this.animate = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.baozi_i()];
		return t;
	};
	_proto.baozi_i = function () {
		var t = new eui.Image();
		this.baozi = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "leopard";
		t.visible = false;
		t.x = -11.810000000000002;
		t.y = -30.66;
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 5.51;
		t.y = 55.67;
		return t;
	};
	_proto.shai1_i = function () {
		var t = new eui.Image();
		this.shai1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 53;
		t.y = 57.33;
		return t;
	};
	_proto.shai2_i = function () {
		var t = new eui.Image();
		this.shai2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 63.19;
		t.y = 83.3;
		return t;
	};
	_proto.shai4_i = function () {
		var t = new eui.Image();
		this.shai4 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = -3.96;
		t.y = 84.34;
		return t;
	};
	_proto.shai3_i = function () {
		var t = new eui.Image();
		this.shai3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 31.02;
		t.y = 100.87;
		return t;
	};
	_proto.kai_i = function () {
		var t = new eui.Image();
		this.kai = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kai1";
		t.x = -71.54;
		t.y = -96.62;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.visible = false;
		t.y = 18;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 134.1;
		t.y = 57;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "yaoqing";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto.sit_i = function () {
		var t = new eui.Image();
		this.sit = t;
		t.source = "sit";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "+10";
		t.textColor = 0x117a1b;
		t.visible = false;
		t.x = 144;
		t.y = 5;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 109;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 145.75;
		t.y = 51.4;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.bei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huoli_png";
		t.x = 7.34;
		t.y = 7.33;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "winbei_fnt";
		t.text = "389";
		t.verticalCenter = -1.5;
		t.x = 157.41;
		return t;
	};
	_proto.bei_i = function () {
		var t = new eui.Image();
		this.bei = t;
		t.source = "bei_png";
		t.verticalCenter = 0.5;
		t.x = 332.79;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 60;
		t.y = 37;
		t.elementsContent = [this._Image5_i(),this.message_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return headBox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/headBoxNn.exml'] = window.headBoxNn = (function (_super) {
	__extends(headBoxNn, _super);
	function headBoxNn() {
		_super.call(this);
		this.skinParts = ["whoseTurn","headImg","nickname","point","YY","offline","gou","chatpop","callDian","callText","call","chatpop0","call0","addpoint","readyStatus","zhuang","detail","winnum","muchWin","biaoqing","shaizhong","shaiDrangon","baozi","animate","shai0","shai1","shai2","shai4","shai3","kai","title","shaiGroup","yaoqing","sit","endImg","endContent","bei","gameendTip","userInfoGroup","message","messagebg"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.userInfoGroup_i(),this.messagebg_i()];
	}
	var _proto = headBoxNn.prototype;

	_proto.userInfoGroup_i = function () {
		var t = new eui.Group();
		this.userInfoGroup = t;
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this.detail_i(),this._Image3_i(),this.muchWin_i(),this.biaoqing_i(),this.shaiGroup_i(),this.yaoqing_i(),this.sit_i(),this._Label2_i(),this.gameendTip_i()];
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Group();
		this.detail = t;
		t.x = 125.3;
		t.y = 41;
		t.elementsContent = [this._Image1_i(),this.whoseTurn_i(),this._Group1_i(),this.call_i(),this.call0_i(),this.addpoint_i(),this.readyStatus_i(),this.zhuang_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "headdikuang";
		t.x = 2.2;
		t.y = 1;
		return t;
	};
	_proto.whoseTurn_i = function () {
		var t = new eui.Image();
		this.whoseTurn = t;
		t.source = "bzHeadkuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 16.8;
		t.y = 21.15;
		t.elementsContent = [this.headImg_i(),this.nickname_i(),this.point_i(),this.YY_i(),this.offline_i(),this.gou_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "default";
		t.verticalCenter = -27.5;
		t.width = 73;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "tom922";
		t.textAlign = "center";
		t.width = 71;
		t.y = 80.78;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Label();
		this.point = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "999999";
		t.textAlign = "center";
		t.textColor = 0xf4df58;
		t.width = 71;
		t.y = 106.25;
		return t;
	};
	_proto.YY_i = function () {
		var t = new eui.Image();
		this.YY = t;
		t.height = 73;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 73;
		t.x = 1.03;
		t.y = 0;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 73;
		t.source = "offline";
		t.visible = false;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "fly";
		t.x = 17;
		t.y = -17;
		return t;
	};
	_proto.call_i = function () {
		var t = new eui.Group();
		this.call = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop_i(),this.callDian_i(),this.callText_i()];
		return t;
	};
	_proto.chatpop_i = function () {
		var t = new eui.Image();
		this.chatpop = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.callDian_i = function () {
		var t = new eui.Image();
		this.callDian = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto.callText_i = function () {
		var t = new eui.Label();
		this.callText = t;
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.call0_i = function () {
		var t = new eui.Group();
		this.call0 = t;
		t.visible = false;
		t.x = -109.32;
		t.y = -50;
		t.elementsContent = [this.chatpop0_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto.chatpop0_i = function () {
		var t = new eui.Image();
		this.chatpop0 = t;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.addpoint_i = function () {
		var t = new eui.Label();
		this.addpoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+10";
		t.textColor = 0xdfe200;
		t.x = 22.7;
		t.y = 44;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 12.3;
		t.y = 41.15;
		return t;
	};
	_proto.zhuang_i = function () {
		var t = new eui.Image();
		this.zhuang = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "dealer";
		t.x = 79;
		t.y = -13;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.visible = false;
		t.x = 0;
		t.y = 53;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 123;
		t.y = 11;
		t.elementsContent = [this._Image4_i(),this.winnum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum_i = function () {
		var t = new eui.Label();
		this.winnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 134.1;
		t.y = 57;
		return t;
	};
	_proto.shaiGroup_i = function () {
		var t = new eui.Group();
		this.shaiGroup = t;
		t.height = 162;
		t.width = 122;
		t.x = 245.32;
		t.y = 50.32;
		t.elementsContent = [this.shaiDrangon_i(),this.animate_i(),this.shai0_i(),this.shai1_i(),this.shai2_i(),this.shai4_i(),this.shai3_i(),this.kai_i(),this.title_i()];
		return t;
	};
	_proto.shaiDrangon_i = function () {
		var t = new eui.Group();
		this.shaiDrangon = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animate_i = function () {
		var t = new eui.Group();
		this.animate = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.baozi_i()];
		return t;
	};
	_proto.baozi_i = function () {
		var t = new eui.Image();
		this.baozi = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "leopard";
		t.visible = false;
		t.x = -11.810000000000002;
		t.y = -30.66;
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 5.51;
		t.y = 55.67;
		return t;
	};
	_proto.shai1_i = function () {
		var t = new eui.Image();
		this.shai1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 53;
		t.y = 57.33;
		return t;
	};
	_proto.shai2_i = function () {
		var t = new eui.Image();
		this.shai2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 63.19;
		t.y = 83.3;
		return t;
	};
	_proto.shai4_i = function () {
		var t = new eui.Image();
		this.shai4 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = -3.96;
		t.y = 84.34;
		return t;
	};
	_proto.shai3_i = function () {
		var t = new eui.Image();
		this.shai3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 31.02;
		t.y = 100.87;
		return t;
	};
	_proto.kai_i = function () {
		var t = new eui.Image();
		this.kai = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kai1";
		t.x = -71.54;
		t.y = -96.62;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuTitle10";
		t.y = 16;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "yaoqing";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto.sit_i = function () {
		var t = new eui.Image();
		this.sit = t;
		t.source = "sit";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "+10";
		t.textColor = 0x117a1b;
		t.visible = false;
		t.x = 144;
		t.y = 5;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 109;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 145.75;
		t.y = 51.4;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.bei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huoli_png";
		t.x = 7.34;
		t.y = 7.33;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "winbei_fnt";
		t.text = "389";
		t.verticalCenter = -1.5;
		t.x = 157.41;
		return t;
	};
	_proto.bei_i = function () {
		var t = new eui.Image();
		this.bei = t;
		t.source = "bei_png";
		t.verticalCenter = 0.5;
		t.x = 332.79;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 60;
		t.y = 37;
		t.elementsContent = [this._Image5_i(),this.message_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return headBoxNn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/headBoxRb.exml'] = window.headBox = (function (_super) {
	__extends(headBox, _super);
	function headBox() {
		_super.call(this);
		this.skinParts = ["whoseTurn","headImg","nickname","point","YY","offline","gou","chatpop","callDian","call","chatpop0","call0","out","addpoint","readyStatus","detail","winnum","muchWin","shaizhong","shaiDrangon","baozi","animate","shai0","shai1","shai2","shai4","shai3","kai","title","shaiGroup","biaoqing","yaoqing","sit","endImg","endContent","bei","gameendTip","onlyThese","userInfoGroup","message","messagebg"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.userInfoGroup_i(),this.messagebg_i()];
	}
	var _proto = headBox.prototype;

	_proto.userInfoGroup_i = function () {
		var t = new eui.Group();
		this.userInfoGroup = t;
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this.detail_i(),this._Image3_i(),this.muchWin_i(),this.shaiGroup_i(),this.biaoqing_i(),this.yaoqing_i(),this.sit_i(),this._Label2_i(),this.gameendTip_i(),this.onlyThese_i()];
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Group();
		this.detail = t;
		t.x = 125.3;
		t.y = 41;
		t.elementsContent = [this._Image1_i(),this.whoseTurn_i(),this._Group1_i(),this.call_i(),this.call0_i(),this._Group2_i(),this.addpoint_i(),this.readyStatus_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "headdikuang";
		t.x = 2.2;
		t.y = 1;
		return t;
	};
	_proto.whoseTurn_i = function () {
		var t = new eui.Image();
		this.whoseTurn = t;
		t.source = "bzHeadkuang";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 16.8;
		t.y = 21.15;
		t.elementsContent = [this.headImg_i(),this.nickname_i(),this.point_i(),this.YY_i(),this.offline_i(),this.gou_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "default";
		t.verticalCenter = -27.5;
		t.width = 73;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "tom922";
		t.textAlign = "center";
		t.width = 71;
		t.y = 80.78;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Label();
		this.point = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "999999";
		t.textAlign = "center";
		t.textColor = 0xf4df58;
		t.width = 71;
		t.y = 106.25;
		return t;
	};
	_proto.YY_i = function () {
		var t = new eui.Image();
		this.YY = t;
		t.height = 73;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 73;
		t.x = 1.03;
		t.y = 0;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 73;
		t.source = "offline";
		t.visible = false;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "fly";
		t.x = 17;
		t.y = -17;
		return t;
	};
	_proto.call_i = function () {
		var t = new eui.Group();
		this.call = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop_i(),this.callDian_i()];
		return t;
	};
	_proto.chatpop_i = function () {
		var t = new eui.Image();
		this.chatpop = t;
		t.scale9Grid = new egret.Rectangle(25,17,74,13);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.callDian_i = function () {
		var t = new eui.Image();
		this.callDian = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "mine4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.call0_i = function () {
		var t = new eui.Group();
		this.call0 = t;
		t.visible = false;
		t.x = -109.32;
		t.y = -50;
		t.elementsContent = [this.chatpop0_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto.chatpop0_i = function () {
		var t = new eui.Image();
		this.chatpop0 = t;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 43;
		t.y = 52.5;
		t.elementsContent = [this.out_i()];
		return t;
	};
	_proto.out_i = function () {
		var t = new eui.Image();
		this.out = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "out";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addpoint_i = function () {
		var t = new eui.Label();
		this.addpoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+10";
		t.textColor = 0xdfe200;
		t.x = 22.7;
		t.y = 44;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 12.3;
		t.y = 41.15;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.visible = false;
		t.x = 0;
		t.y = 53;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 123;
		t.y = 11;
		t.elementsContent = [this._Image4_i(),this.winnum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum_i = function () {
		var t = new eui.Label();
		this.winnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shaiGroup_i = function () {
		var t = new eui.Group();
		this.shaiGroup = t;
		t.height = 162;
		t.width = 122;
		t.x = 245.32;
		t.y = 50.32;
		t.elementsContent = [this.shaiDrangon_i(),this.animate_i(),this.shai0_i(),this.shai1_i(),this.shai2_i(),this.shai4_i(),this.shai3_i(),this.kai_i(),this.title_i(),this._Image5_i()];
		return t;
	};
	_proto.shaiDrangon_i = function () {
		var t = new eui.Group();
		this.shaiDrangon = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animate_i = function () {
		var t = new eui.Group();
		this.animate = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.baozi_i()];
		return t;
	};
	_proto.baozi_i = function () {
		var t = new eui.Image();
		this.baozi = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "leopard";
		t.visible = false;
		t.x = -11.810000000000002;
		t.y = -30.66;
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 5.51;
		t.y = 55.67;
		return t;
	};
	_proto.shai1_i = function () {
		var t = new eui.Image();
		this.shai1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 53;
		t.y = 57.33;
		return t;
	};
	_proto.shai2_i = function () {
		var t = new eui.Image();
		this.shai2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 63.19;
		t.y = 83.3;
		return t;
	};
	_proto.shai4_i = function () {
		var t = new eui.Image();
		this.shai4 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = -3.96;
		t.y = 84.34;
		return t;
	};
	_proto.shai3_i = function () {
		var t = new eui.Image();
		this.shai3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 31.02;
		t.y = 100.87;
		return t;
	};
	_proto.kai_i = function () {
		var t = new eui.Image();
		this.kai = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kai1";
		t.visible = false;
		t.x = -71.54;
		t.y = -96.62;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.visible = false;
		t.y = 18;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 61.5;
		t.anchorOffsetY = 60;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "boom_0002";
		t.visible = false;
		t.x = 57.93;
		t.y = 128;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 134.1;
		t.y = 57;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "yaoqing";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto.sit_i = function () {
		var t = new eui.Image();
		this.sit = t;
		t.source = "sit";
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "+10";
		t.textColor = 0x117a1b;
		t.visible = false;
		t.x = 144;
		t.y = 5;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 109;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.visible = false;
		t.x = 145.75;
		t.y = 51.4;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.bei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huoli_png";
		t.x = 7.34;
		t.y = 7.33;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "winbei_fnt";
		t.text = "389";
		t.verticalCenter = -1.5;
		t.x = 157.41;
		return t;
	};
	_proto.bei_i = function () {
		var t = new eui.Image();
		this.bei = t;
		t.source = "bei_png";
		t.verticalCenter = 0.5;
		t.x = 332.79;
		return t;
	};
	_proto.onlyThese_i = function () {
		var t = new eui.Image();
		this.onlyThese = t;
		t.height = 30;
		t.source = "Rb1ge";
		t.width = 30;
		t.x = 209.3;
		t.y = 175.48;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 60;
		t.y = 37;
		t.elementsContent = [this._Image6_i(),this.message_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return headBox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/jincai.exml'] = window.jincai = (function (_super) {
	__extends(jincai, _super);
	var jincai$Skin28 = 	(function (_super) {
		__extends(jincai$Skin28, _super);
		function jincai$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btngreensmallclick"),
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = jincai$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btngreensmall";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return jincai$Skin28;
	})(eui.Skin);

	var jincai$Skin29 = 	(function (_super) {
		__extends(jincai$Skin29, _super);
		function jincai$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btngreensmallclick"),
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = jincai$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btngreensmall";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return jincai$Skin29;
	})(eui.Skin);

	var jincai$Skin30 = 	(function (_super) {
		__extends(jincai$Skin30, _super);
		function jincai$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = jincai$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "BTN_Close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return jincai$Skin30;
	})(eui.Skin);

	function jincai() {
		_super.call(this);
		this.skinParts = ["titleImg","qiangHead","beiqiangHead","bugouBtn","gouBtn","qiangkai","shainum","dizhu","shai0","shainum0","shai","mainGroup","closeBtn","daoji"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group7_i()];
	}
	var _proto = jincai.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -6;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.mainGroup_i(),this._Group6_i(),this.daoji_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "tipsbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 121;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 628;
		t.y = 11.77;
		t.elementsContent = [this._Image3_i(),this.titleImg_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "flytitle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.titleImg_i = function () {
		var t = new eui.Image();
		this.titleImg = t;
		t.horizontalCenter = 0.5;
		t.source = "fly8";
		t.verticalCenter = -18.5;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.horizontalCenter = 0.5;
		t.y = 170.4;
		t.elementsContent = [this.qiangHead_i(),this.beiqiangHead_i(),this._Group4_i(),this.qiangkai_i(),this.shainum_i(),this.dizhu_i(),this._Group5_i(),this.shai_i()];
		return t;
	};
	_proto.qiangHead_i = function () {
		var t = new eui.Image();
		this.qiangHead = t;
		t.height = 140;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "playerphoto";
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.beiqiangHead_i = function () {
		var t = new eui.Image();
		this.beiqiangHead = t;
		t.height = 140;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "playerphoto";
		t.width = 140;
		t.x = 434.24;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 135.22;
		t.elementsContent = [this._Image4_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "vs";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 51;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.verticalCenter = -1;
		t.width = 150;
		t.x = 0;
		t.elementsContent = [this.bugouBtn_i()];
		return t;
	};
	_proto.bugouBtn_i = function () {
		var t = new eui.Button();
		this.bugouBtn = t;
		t.horizontalCenter = 0;
		t.label = "不够";
		t.verticalCenter = 0;
		t.skinName = jincai$Skin28;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 51;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.verticalCenter = -1;
		t.width = 150;
		t.x = 392.18;
		t.elementsContent = [this.gouBtn_i()];
		return t;
	};
	_proto.gouBtn_i = function () {
		var t = new eui.Button();
		this.gouBtn = t;
		t.horizontalCenter = 0;
		t.label = "够";
		t.verticalCenter = 0;
		t.skinName = jincai$Skin29;
		return t;
	};
	_proto.qiangkai_i = function () {
		var t = new eui.Label();
		this.qiangkai = t;
		t.text = "抢开";
		t.x = 39.1;
		t.y = -35.25;
		return t;
	};
	_proto.shainum_i = function () {
		var t = new eui.Label();
		this.shainum = t;
		t.height = 30;
		t.text = "36个";
		t.textAlign = "right";
		t.width = 64;
		t.x = 450.66;
		t.y = -34.31;
		return t;
	};
	_proto.dizhu_i = function () {
		var t = new eui.Label();
		this.dizhu = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "20金币/注";
		t.textColor = 0xffff00;
		t.y = 82.84;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 164;
		t.y = 30.16;
		t.elementsContent = [this.shai0_i(),this.shainum0_i(),this._Label1_i()];
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pinshai1_png";
		t.verticalCenter = 0;
		t.x = 72.69;
		return t;
	};
	_proto.shainum0_i = function () {
		var t = new eui.Label();
		this.shainum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.text = "36个";
		t.textAlign = "right";
		t.verticalCenter = 0;
		t.width = 66;
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.text = "够不够？";
		t.textAlign = "right";
		t.verticalCenter = 0;
		t.x = 112.79;
		return t;
	};
	_proto.shai_i = function () {
		var t = new eui.Image();
		this.shai = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pinshai1_png";
		t.x = 513.6799999999998;
		t.y = -38.420000000000016;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 634.36;
		t.y = 56.68;
		t.elementsContent = [this.closeBtn_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = jincai$Skin30;
		return t;
	};
	_proto.daoji_i = function () {
		var t = new eui.Label();
		this.daoji = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "10秒后结束竞猜";
		t.y = 392.36;
		return t;
	};
	return jincai;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/niuniuIndex.exml'] = window.niuniuIndex = (function (_super) {
	__extends(niuniuIndex, _super);
	var niuniuIndex$Skin31 = 	(function (_super) {
		__extends(niuniuIndex$Skin31, _super);
		function niuniuIndex$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin31;
	})(eui.Skin);

	var niuniuIndex$Skin32 = 	(function (_super) {
		__extends(niuniuIndex$Skin32, _super);
		function niuniuIndex$Skin32() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin32.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin32;
	})(eui.Skin);

	var niuniuIndex$Skin33 = 	(function (_super) {
		__extends(niuniuIndex$Skin33, _super);
		function niuniuIndex$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "location_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin33;
	})(eui.Skin);

	var niuniuIndex$Skin34 = 	(function (_super) {
		__extends(niuniuIndex$Skin34, _super);
		function niuniuIndex$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameset";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin34;
	})(eui.Skin);

	var niuniuIndex$Skin35 = 	(function (_super) {
		__extends(niuniuIndex$Skin35, _super);
		function niuniuIndex$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin35;
	})(eui.Skin);

	var niuniuIndex$Skin36 = 	(function (_super) {
		__extends(niuniuIndex$Skin36, _super);
		function niuniuIndex$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesan1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin36;
	})(eui.Skin);

	var niuniuIndex$Skin37 = 	(function (_super) {
		__extends(niuniuIndex$Skin37, _super);
		function niuniuIndex$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niubtnshakeclick")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","niubtnshakedisable")
					])
			];
		}
		var _proto = niuniuIndex$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niubtnshake";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin37;
	})(eui.Skin);

	var niuniuIndex$Skin38 = 	(function (_super) {
		__extends(niuniuIndex$Skin38, _super);
		function niuniuIndex$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin38;
	})(eui.Skin);

	var niuniuIndex$Skin39 = 	(function (_super) {
		__extends(niuniuIndex$Skin39, _super);
		function niuniuIndex$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuYY";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin39;
	})(eui.Skin);

	var niuniuIndex$Skin40 = 	(function (_super) {
		__extends(niuniuIndex$Skin40, _super);
		function niuniuIndex$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuMsg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin40;
	})(eui.Skin);

	var niuniuIndex$Skin41 = 	(function (_super) {
		__extends(niuniuIndex$Skin41, _super);
		function niuniuIndex$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuIndex$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuPlayerList";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin41;
	})(eui.Skin);

	function niuniuIndex() {
		_super.call(this);
		this.skinParts = ["yying","watching","menu","playcount","roompwd","basescore","shaizhong","shaizhongGroup","myBaozi","myAnimate","mine0","mine1","mine2","mine4","mine3","myLittleTitle","mytitle","myShaiGroup","situp","locationBtn","setting","wanfa","jiesan","tool","winnum0","muchWin","myzhuang","myHeadImg","offline","myPoint","myName","myYY","biaoqing","myInfo","dimissProcess","dismissGroup","endImg","endContent","mybei","gameendTip","myAddPoint","myDaojinum","callBtn","shaizi0","selected0","chooseShai0","shaizi1","selected1","chooseShai1","shaizi2","selected2","chooseShai2","shaizi3","selected3","chooseShai3","shaizi4","selected4","chooseShai4","chooseShai11","callGroup","yaoqing","menban","whoJoin","joinNotice","resetNum","resetNumGroup","tongpei","readyBtn","juhua","waitConnect","readyStatus","voiceplay","luyingNotice","lyNoticeGroup","xiaoxi","pangguanBtn","messageT","messagebg"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.yying_i(),this.watching_i(),this.menu_i(),this._Group1_i(),this._Group2_i(),this.myShaiGroup_i(),this.tool_i(),this.muchWin_i(),this.myzhuang_i(),this.myInfo_i(),this.dismissGroup_i(),this.gameendTip_i(),this.myAddPoint_i(),this.callGroup_i(),this.yaoqing_i(),this.menban_i(),this.joinNotice_i(),this.resetNumGroup_i(),this.tongpei_i(),this._Group6_i(),this.waitConnect_i(),this.readyStatus_i(),this._Group10_i(),this.messagebg_i()];
	}
	var _proto = niuniuIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yying_i = function () {
		var t = new eui.Image();
		this.yying = t;
		t.horizontalCenter = 0;
		t.source = "newPublic_json.isLuying";
		t.visible = false;
		t.y = 327.67;
		return t;
	};
	_proto.watching_i = function () {
		var t = new eui.Image();
		this.watching = t;
		t.source = "watching_png";
		t.x = 440;
		t.y = 815;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 536.39;
		t.y = 14.5;
		t.skinName = niuniuIndex$Skin31;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 12.5;
		t.y = 8;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this.roompwd_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 100;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.left = 18;
		t.text = "局数：0/1";
		t.y = 58.5;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.left = 18;
		t.text = "房间号：666666";
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 511;
		t.elementsContent = [this.basescore_i(),this._Label1_i()];
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bold = true;
		t.text = "底分：1分";
		t.textColor = 0x2e815c;
		t.x = 138;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "牛牛模式";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myShaiGroup_i = function () {
		var t = new eui.Group();
		this.myShaiGroup = t;
		t.height = 216;
		t.horizontalCenter = 7;
		t.width = 162;
		t.y = 745.87;
		t.elementsContent = [this.shaizhongGroup_i(),this.myAnimate_i(),this.mine0_i(),this.mine1_i(),this.mine2_i(),this.mine4_i(),this.mine3_i(),this.myLittleTitle_i(),this.mytitle_i()];
		return t;
	};
	_proto.shaizhongGroup_i = function () {
		var t = new eui.Group();
		this.shaizhongGroup = t;
		t.height = 218;
		t.width = 162;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myAnimate_i = function () {
		var t = new eui.Group();
		this.myAnimate = t;
		t.height = 121;
		t.width = 161;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myBaozi_i()];
		return t;
	};
	_proto.myBaozi_i = function () {
		var t = new eui.Image();
		this.myBaozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.visible = false;
		t.x = -21.81;
		t.y = -30.66;
		return t;
	};
	_proto.mine0_i = function () {
		var t = new eui.Image();
		this.mine0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 13.91;
		t.y = 78.91;
		return t;
	};
	_proto.mine1_i = function () {
		var t = new eui.Image();
		this.mine1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 75.97;
		t.y = 81.69;
		return t;
	};
	_proto.mine2_i = function () {
		var t = new eui.Image();
		this.mine2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 92.67;
		t.y = 115;
		return t;
	};
	_proto.mine4_i = function () {
		var t = new eui.Image();
		this.mine4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 4.6;
		t.y = 115.64;
		return t;
	};
	_proto.mine3_i = function () {
		var t = new eui.Image();
		this.mine3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "minered1";
		t.x = 50.36;
		t.y = 138.51;
		return t;
	};
	_proto.myLittleTitle_i = function () {
		var t = new eui.Label();
		this.myLittleTitle = t;
		t.horizontalCenter = 0;
		t.text = "niuniu";
		t.textColor = 0x0ca80b;
		t.y = 53.11;
		return t;
	};
	_proto.mytitle_i = function () {
		var t = new eui.Image();
		this.mytitle = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "niuTitle10";
		t.visible = false;
		t.y = 30;
		return t;
	};
	_proto.tool_i = function () {
		var t = new eui.Group();
		this.tool = t;
		t.anchorOffsetX = 388;
		t.scaleX = 1;
		t.visible = false;
		t.x = 521.5;
		t.y = 12.17;
		t.elementsContent = [this.situp_i(),this.locationBtn_i(),this.setting_i(),this.wanfa_i(),this.jiesan_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 79;
		t.y = 0;
		t.skinName = niuniuIndex$Skin32;
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = 0;
		t.skinName = niuniuIndex$Skin33;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 319;
		t.y = 0;
		t.skinName = niuniuIndex$Skin34;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 239;
		t.y = 0;
		t.skinName = niuniuIndex$Skin35;
		return t;
	};
	_proto.jiesan_i = function () {
		var t = new eui.Button();
		this.jiesan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 159;
		t.y = 0;
		t.skinName = niuniuIndex$Skin36;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 6;
		t.y = 835.98;
		t.elementsContent = [this._Image2_i(),this.winnum0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum0_i = function () {
		var t = new eui.Label();
		this.winnum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myzhuang_i = function () {
		var t = new eui.Image();
		this.myzhuang = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "dealer";
		t.visible = false;
		t.x = 183.5;
		t.y = 846.48;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new eui.Group();
		this.myInfo = t;
		t.x = 6.5;
		t.y = 863.37;
		t.elementsContent = [this._Image3_i(),this.myHeadImg_i(),this.offline_i(),this.myPoint_i(),this.myName_i(),this.myYY_i(),this.biaoqing_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "myInfo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myHeadImg_i = function () {
		var t = new eui.Image();
		this.myHeadImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "default";
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 96;
		t.source = "offline";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.myPoint_i = function () {
		var t = new eui.Label();
		this.myPoint = t;
		t.height = 21;
		t.size = 21;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xF4DF58;
		t.width = 71;
		t.x = 116.5;
		t.y = 60.09;
		return t;
	};
	_proto.myName_i = function () {
		var t = new eui.Label();
		this.myName = t;
		t.anchorOffsetX = 0;
		t.height = 21;
		t.size = 21;
		t.text = "魂族娱乐";
		t.width = 86;
		t.x = 110.5;
		t.y = 30.5;
		return t;
	};
	_proto.myYY_i = function () {
		var t = new eui.Image();
		this.myYY = t;
		t.height = 96;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 96;
		t.x = 5.65;
		t.y = 3.89;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dimissProcess_i = function () {
		var t = new eui.Label();
		this.dimissProcess = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 18;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 100;
		t.height = 155;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 408;
		t.x = 7.6;
		t.y = 864.28;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.mybei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sunshi_png";
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "lossBei_fnt";
		t.text = "123";
		t.verticalCenter = 0;
		t.x = 147.4;
		return t;
	};
	_proto.mybei_i = function () {
		var t = new eui.Image();
		this.mybei = t;
		t.source = "bei_png";
		t.verticalCenter = 0;
		t.x = 312.92;
		return t;
	};
	_proto.myAddPoint_i = function () {
		var t = new eui.Label();
		this.myAddPoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "+20";
		t.x = 30;
		t.y = 900.85;
		return t;
	};
	_proto.callGroup_i = function () {
		var t = new eui.Group();
		this.callGroup = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = 404;
		t.y = 732.13;
		t.elementsContent = [this._Group3_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 170.05;
		t.elementsContent = [this._Image5_i(),this.myDaojinum_i(),this.callBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "niubk1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myDaojinum_i = function () {
		var t = new eui.Label();
		this.myDaojinum = t;
		t.height = 45;
		t.size = 45;
		t.text = "10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		t.width = 51;
		t.x = 30.68;
		return t;
	};
	_proto.callBtn_i = function () {
		var t = new eui.Button();
		this.callBtn = t;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = -4.5;
		t.x = 108.59;
		t.skinName = niuniuIndex$Skin37;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = -2.39;
		t.y = -10;
		t.elementsContent = [this._Image6_i(),this._Group4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276.86;
		t.scale9Grid = new egret.Rectangle(53,39,506,89);
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niubk2";
		t.width = 399.31;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this.chooseShai0_i(),this.chooseShai1_i(),this.chooseShai2_i(),this.chooseShai3_i(),this.chooseShai4_i(),this.chooseShai11_i()];
		return t;
	};
	_proto.chooseShai0_i = function () {
		var t = new eui.Group();
		this.chooseShai0 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 1;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.shaizi0_i(),this.selected0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi0_i = function () {
		var t = new eui.Image();
		this.shaizi0 = t;
		t.horizontalCenter = 0;
		t.source = "red1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected0_i = function () {
		var t = new eui.Image();
		this.selected0 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai1_i = function () {
		var t = new eui.Group();
		this.chooseShai1 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 81;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.shaizi1_i(),this.selected1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi1_i = function () {
		var t = new eui.Image();
		this.shaizi1 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected1_i = function () {
		var t = new eui.Image();
		this.selected1 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai2_i = function () {
		var t = new eui.Group();
		this.chooseShai2 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 161;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.shaizi2_i(),this.selected2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi2_i = function () {
		var t = new eui.Image();
		this.shaizi2 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected2_i = function () {
		var t = new eui.Image();
		this.selected2 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai3_i = function () {
		var t = new eui.Group();
		this.chooseShai3 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 0;
		t.y = 79;
		t.elementsContent = [this._Image10_i(),this.shaizi3_i(),this.selected3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi3_i = function () {
		var t = new eui.Image();
		this.shaizi3 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected3_i = function () {
		var t = new eui.Image();
		this.selected3 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai4_i = function () {
		var t = new eui.Group();
		this.chooseShai4 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 81;
		t.y = 79;
		t.elementsContent = [this._Image11_i(),this.shaizi4_i(),this.selected4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi4_i = function () {
		var t = new eui.Image();
		this.shaizi4 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected4_i = function () {
		var t = new eui.Image();
		this.selected4 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai11_i = function () {
		var t = new eui.Group();
		this.chooseShai11 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.visible = false;
		t.x = 159.75;
		t.y = 79;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai6";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 92;
		t.source = "niuselected";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "share";
		t.visible = false;
		t.x = 389.08;
		t.y = 0;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.width = 330;
		t.y = 18;
		return t;
	};
	_proto.resetNumGroup_i = function () {
		var t = new eui.Group();
		this.resetNumGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Label2_i(),this.resetNum_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "重摇次数：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.resetNum_i = function () {
		var t = new eui.Label();
		this.resetNum = t;
		t.text = "10/20";
		t.textAlign = "left";
		t.textColor = 0x470000;
		t.x = 143;
		t.y = 0;
		return t;
	};
	_proto.tongpei_i = function () {
		var t = new eui.Image();
		this.tongpei = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tongpeititle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 692;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = niuniuIndex$Skin38;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image16_i(),this.juhua_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 1038;
		t.source = "mengban_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 16;
		t.y = 899.37;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 956.33;
		t.elementsContent = [this._Image17_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "dibuBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 105.29;
		t.y = 23.68;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = niuniuIndex$Skin39;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = -7;
		t.y = -92.66;
		t.elementsContent = [this._Image18_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "ddz_yy_qp_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.luyingNotice_i = function () {
		var t = new eui.Label();
		this.luyingNotice = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "再次点击取消录音15s";
		t.width = 100;
		t.y = 12.65;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 284.5;
		t.y = 26.35;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = niuniuIndex$Skin40;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 475.94;
		t.y = 26.35;
		t.elementsContent = [this.pangguanBtn_i()];
		return t;
	};
	_proto.pangguanBtn_i = function () {
		var t = new eui.Button();
		this.pangguanBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = niuniuIndex$Skin41;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 3.5;
		t.y = 778.91;
		t.elementsContent = [this._Image19_i(),this.messageT_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messageT_i = function () {
		var t = new eui.Label();
		this.messageT = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return niuniuIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/redBlackIndex.exml'] = window.suohaIndex = (function (_super) {
	__extends(suohaIndex, _super);
	var suohaIndex$Skin42 = 	(function (_super) {
		__extends(suohaIndex$Skin42, _super);
		function suohaIndex$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin42;
	})(eui.Skin);

	var suohaIndex$Skin43 = 	(function (_super) {
		__extends(suohaIndex$Skin43, _super);
		function suohaIndex$Skin43() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin43.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin43;
	})(eui.Skin);

	var suohaIndex$Skin44 = 	(function (_super) {
		__extends(suohaIndex$Skin44, _super);
		function suohaIndex$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "location_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin44;
	})(eui.Skin);

	var suohaIndex$Skin45 = 	(function (_super) {
		__extends(suohaIndex$Skin45, _super);
		function suohaIndex$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameset";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin45;
	})(eui.Skin);

	var suohaIndex$Skin46 = 	(function (_super) {
		__extends(suohaIndex$Skin46, _super);
		function suohaIndex$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin46;
	})(eui.Skin);

	var suohaIndex$Skin47 = 	(function (_super) {
		__extends(suohaIndex$Skin47, _super);
		function suohaIndex$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesan1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin47;
	})(eui.Skin);

	var suohaIndex$Skin48 = 	(function (_super) {
		__extends(suohaIndex$Skin48, _super);
		function suohaIndex$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","select1click")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","select1gray")
					])
			];
		}
		var _proto = suohaIndex$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "select1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin48;
	})(eui.Skin);

	var suohaIndex$Skin49 = 	(function (_super) {
		__extends(suohaIndex$Skin49, _super);
		function suohaIndex$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","select2click")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","select2gray")
					])
			];
		}
		var _proto = suohaIndex$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "select2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin49;
	})(eui.Skin);

	var suohaIndex$Skin50 = 	(function (_super) {
		__extends(suohaIndex$Skin50, _super);
		function suohaIndex$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","select3click")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","select3gray")
					])
			];
		}
		var _proto = suohaIndex$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "select3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin50;
	})(eui.Skin);

	var suohaIndex$Skin51 = 	(function (_super) {
		__extends(suohaIndex$Skin51, _super);
		function suohaIndex$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","select4click")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","select4gray")
					])
			];
		}
		var _proto = suohaIndex$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "select4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin51;
	})(eui.Skin);

	var suohaIndex$Skin52 = 	(function (_super) {
		__extends(suohaIndex$Skin52, _super);
		function suohaIndex$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin52;
	})(eui.Skin);

	var suohaIndex$Skin53 = 	(function (_super) {
		__extends(suohaIndex$Skin53, _super);
		function suohaIndex$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuYY";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin53;
	})(eui.Skin);

	var suohaIndex$Skin54 = 	(function (_super) {
		__extends(suohaIndex$Skin54, _super);
		function suohaIndex$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuMsg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin54;
	})(eui.Skin);

	var suohaIndex$Skin55 = 	(function (_super) {
		__extends(suohaIndex$Skin55, _super);
		function suohaIndex$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuPlayerList";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin55;
	})(eui.Skin);

	function suohaIndex() {
		_super.call(this);
		this.skinParts = ["watching","menu","playcount","roompwd","basescore","shaizhong","shaizhongGroup","myBaozi","myAnimate","mine0","mine1","mine2","mine4","mine3","myShaiGroup","situp","locationBtn","setting","wanfa","jiesan","tool","winnum0","muchWin","chatpop","myCallDian","myCall","myHeadImg","offline","myPoint","myName","out","myYY","biaoqing","myInfo","dimissProcess","dismissGroup","endImg","endContent","mybei","gameendTip","myAddPoint","myDaojinum","choose0","howmany0","choose1","howmany1","choose2","howmany2","choose3","howmany3","callGroup","yaoqing","menban","whoJoin","joinNotice","resetNum","resetNumGroup","kill","readyBtn","readyStatus","voiceplay","luyingNotice","lyNoticeGroup","xiaoxi","pangguanBtn","juhua","waitConnect","yying","messageT","messagebg"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.watching_i(),this.menu_i(),this._Group1_i(),this._Group2_i(),this.myShaiGroup_i(),this.tool_i(),this.muchWin_i(),this.myInfo_i(),this.dismissGroup_i(),this.gameendTip_i(),this.myAddPoint_i(),this.callGroup_i(),this.yaoqing_i(),this.menban_i(),this.joinNotice_i(),this.resetNumGroup_i(),this._Group10_i(),this._Group11_i(),this.readyStatus_i(),this._Group15_i(),this.waitConnect_i(),this.yying_i(),this.messagebg_i()];
	}
	var _proto = suohaIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.watching_i = function () {
		var t = new eui.Image();
		this.watching = t;
		t.source = "watching_png";
		t.x = 440;
		t.y = 811;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 536.39;
		t.y = 14.5;
		t.skinName = suohaIndex$Skin42;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 12.5;
		t.y = 8;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this.roompwd_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 100;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.left = 18;
		t.text = "局数：0/1";
		t.y = 58.5;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.left = 18;
		t.text = "房间号：666666";
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 516;
		t.elementsContent = [this.basescore_i(),this._Label1_i()];
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bold = true;
		t.text = "底分：1分";
		t.textColor = 0x2e815c;
		t.x = 138;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "红黑单双";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myShaiGroup_i = function () {
		var t = new eui.Group();
		this.myShaiGroup = t;
		t.height = 221;
		t.horizontalCenter = 7;
		t.width = 162;
		t.y = 741.87;
		t.elementsContent = [this.shaizhongGroup_i(),this.myAnimate_i(),this.mine0_i(),this.mine1_i(),this.mine2_i(),this.mine4_i(),this.mine3_i(),this._Image2_i()];
		return t;
	};
	_proto.shaizhongGroup_i = function () {
		var t = new eui.Group();
		this.shaizhongGroup = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myAnimate_i = function () {
		var t = new eui.Group();
		this.myAnimate = t;
		t.height = 121;
		t.width = 161;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myBaozi_i()];
		return t;
	};
	_proto.myBaozi_i = function () {
		var t = new eui.Image();
		this.myBaozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.visible = false;
		t.x = -21.81;
		t.y = -30.66;
		return t;
	};
	_proto.mine0_i = function () {
		var t = new eui.Image();
		this.mine0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 13.91;
		t.y = 83.91;
		return t;
	};
	_proto.mine1_i = function () {
		var t = new eui.Image();
		this.mine1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 75.97;
		t.y = 86.69;
		return t;
	};
	_proto.mine2_i = function () {
		var t = new eui.Image();
		this.mine2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 92.67;
		t.y = 120;
		return t;
	};
	_proto.mine4_i = function () {
		var t = new eui.Image();
		this.mine4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 4.6;
		t.y = 120.64;
		return t;
	};
	_proto.mine3_i = function () {
		var t = new eui.Image();
		this.mine3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 50.36;
		t.y = 143.51;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 61.5;
		t.anchorOffsetY = 60;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "boom_0002";
		t.visible = false;
		t.x = 85.14;
		t.y = 173.32;
		return t;
	};
	_proto.tool_i = function () {
		var t = new eui.Group();
		this.tool = t;
		t.anchorOffsetX = 388;
		t.scaleX = 1;
		t.x = 521.5;
		t.y = 12.17;
		t.elementsContent = [this.situp_i(),this.locationBtn_i(),this.setting_i(),this.wanfa_i(),this.jiesan_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 78;
		t.y = 0;
		t.skinName = suohaIndex$Skin43;
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = 0;
		t.skinName = suohaIndex$Skin44;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 318;
		t.y = 0;
		t.skinName = suohaIndex$Skin45;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 238;
		t.y = 0;
		t.skinName = suohaIndex$Skin46;
		return t;
	};
	_proto.jiesan_i = function () {
		var t = new eui.Button();
		this.jiesan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 158;
		t.y = 0;
		t.skinName = suohaIndex$Skin47;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 6;
		t.y = 831.98;
		t.elementsContent = [this._Image3_i(),this.winnum0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum0_i = function () {
		var t = new eui.Label();
		this.winnum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new eui.Group();
		this.myInfo = t;
		t.x = 6.5;
		t.y = 859.37;
		t.elementsContent = [this._Image4_i(),this.myCall_i(),this.myHeadImg_i(),this.offline_i(),this.myPoint_i(),this.myName_i(),this._Group3_i(),this.myYY_i(),this.biaoqing_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "myInfo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myCall_i = function () {
		var t = new eui.Group();
		this.myCall = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop_i(),this.myCallDian_i()];
		return t;
	};
	_proto.chatpop_i = function () {
		var t = new eui.Image();
		this.chatpop = t;
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(25,17,75,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myCallDian_i = function () {
		var t = new eui.Image();
		this.myCallDian = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "select1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myHeadImg_i = function () {
		var t = new eui.Image();
		this.myHeadImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "default";
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 96;
		t.source = "offline";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.myPoint_i = function () {
		var t = new eui.Label();
		this.myPoint = t;
		t.height = 21;
		t.size = 21;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xF4DF58;
		t.width = 71;
		t.x = 116.5;
		t.y = 60.09;
		return t;
	};
	_proto.myName_i = function () {
		var t = new eui.Label();
		this.myName = t;
		t.anchorOffsetX = 0;
		t.height = 21;
		t.size = 21;
		t.text = "魂族娱乐";
		t.width = 86;
		t.x = 110.5;
		t.y = 30.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 42.33;
		t.y = 41.67;
		t.elementsContent = [this.out_i()];
		return t;
	};
	_proto.out_i = function () {
		var t = new eui.Image();
		this.out = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6999999999999998;
		t.scaleY = 0.6999999999999998;
		t.source = "out";
		t.verticalCenter = 0;
		t.x = -32;
		t.y = 66;
		return t;
	};
	_proto.myYY_i = function () {
		var t = new eui.Image();
		this.myYY = t;
		t.height = 96;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dimissProcess_i = function () {
		var t = new eui.Label();
		this.dimissProcess = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 18;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 100;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 7.6;
		t.y = 860.28;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.mybei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sunshi_png";
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "lossBei_fnt";
		t.text = "123";
		t.verticalCenter = 0;
		t.x = 147.4;
		return t;
	};
	_proto.mybei_i = function () {
		var t = new eui.Image();
		this.mybei = t;
		t.source = "bei_png";
		t.verticalCenter = 0;
		t.x = 312.92;
		return t;
	};
	_proto.myAddPoint_i = function () {
		var t = new eui.Label();
		this.myAddPoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "+20";
		t.x = 30;
		t.y = 896.85;
		return t;
	};
	_proto.callGroup_i = function () {
		var t = new eui.Group();
		this.callGroup = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = 425;
		t.y = 701.13;
		t.elementsContent = [this._Group4_i(),this._Group9_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.myDaojinum_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "rBDojiBg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myDaojinum_i = function () {
		var t = new eui.Label();
		this.myDaojinum = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "99";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 51;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -1.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.y = 58.95;
		t.elementsContent = [this._Image7_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 363.74;
		t.scale9Grid = new egret.Rectangle(28,26,388,139);
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "rBbg";
		t.width = 335.82;
		t.x = 1.17;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 27.41;
		t.y = 18.99;
		t.elementsContent = [this.choose0_i(),this._Image8_i(),this.howmany0_i()];
		return t;
	};
	_proto.choose0_i = function () {
		var t = new eui.Button();
		this.choose0 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = suohaIndex$Skin48;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "numbg";
		t.y = 90;
		return t;
	};
	_proto.howmany0_i = function () {
		var t = new eui.Label();
		this.howmany0 = t;
		t.horizontalCenter = 0;
		t.text = "3个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 95.54;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 135.9;
		t.y = 18.99;
		t.elementsContent = [this.choose1_i(),this._Image9_i(),this.howmany1_i()];
		return t;
	};
	_proto.choose1_i = function () {
		var t = new eui.Button();
		this.choose1 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = suohaIndex$Skin49;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "numbg";
		t.y = 90;
		return t;
	};
	_proto.howmany1_i = function () {
		var t = new eui.Label();
		this.howmany1 = t;
		t.horizontalCenter = 0;
		t.text = "3个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 95.54;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 29.01;
		t.y = 123.79;
		t.elementsContent = [this.choose2_i(),this._Image10_i(),this.howmany2_i()];
		return t;
	};
	_proto.choose2_i = function () {
		var t = new eui.Button();
		this.choose2 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = suohaIndex$Skin50;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "numbg";
		t.y = 90;
		return t;
	};
	_proto.howmany2_i = function () {
		var t = new eui.Label();
		this.howmany2 = t;
		t.horizontalCenter = 0;
		t.text = "3个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 95.54;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 135.9;
		t.y = 124.2;
		t.elementsContent = [this.choose3_i(),this._Image11_i(),this.howmany3_i()];
		return t;
	};
	_proto.choose3_i = function () {
		var t = new eui.Button();
		this.choose3 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = suohaIndex$Skin51;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "numbg";
		t.y = 90;
		return t;
	};
	_proto.howmany3_i = function () {
		var t = new eui.Label();
		this.howmany3 = t;
		t.horizontalCenter = 0;
		t.text = "3个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 95.54;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "share";
		t.visible = false;
		t.x = 389.08;
		t.y = 0;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.width = 330;
		t.y = 18;
		return t;
	};
	_proto.resetNumGroup_i = function () {
		var t = new eui.Group();
		this.resetNumGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -34;
		t.elementsContent = [this._Label2_i(),this.resetNum_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "重摇次数：";
		t.textColor = 0xffffff;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.resetNum_i = function () {
		var t = new eui.Label();
		this.resetNum = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "x7倍";
		t.textAlign = "left";
		t.textColor = 0xfff500;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 1;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1;
		t.elementsContent = [this.kill_i()];
		return t;
	};
	_proto.kill_i = function () {
		var t = new eui.Image();
		this.kill = t;
		t.horizontalCenter = 0;
		t.source = "Rb3kill";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 692;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin52;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 16;
		t.y = 895.37;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 956.33;
		t.elementsContent = [this._Image13_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "dibuBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 105.29;
		t.y = 23.68;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin53;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = -7;
		t.y = -92.66;
		t.elementsContent = [this._Image14_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "ddz_yy_qp_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.luyingNotice_i = function () {
		var t = new eui.Label();
		this.luyingNotice = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "再次点击取消录音15s";
		t.width = 100;
		t.y = 12.65;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 284.5;
		t.y = 26.35;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin54;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 475.94;
		t.y = 26.35;
		t.elementsContent = [this.pangguanBtn_i()];
		return t;
	};
	_proto.pangguanBtn_i = function () {
		var t = new eui.Button();
		this.pangguanBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin55;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this.juhua_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "redBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.yying_i = function () {
		var t = new eui.Image();
		this.yying = t;
		t.horizontalCenter = 0;
		t.source = "newPublic_json.isLuying";
		t.visible = false;
		t.y = 327.67;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 3.5;
		t.y = 778.91;
		t.elementsContent = [this._Image16_i(),this.messageT_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messageT_i = function () {
		var t = new eui.Label();
		this.messageT = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return suohaIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/suohaIndex.exml'] = window.suohaIndex = (function (_super) {
	__extends(suohaIndex, _super);
	var suohaIndex$Skin56 = 	(function (_super) {
		__extends(suohaIndex$Skin56, _super);
		function suohaIndex$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin56;
	})(eui.Skin);

	var suohaIndex$Skin57 = 	(function (_super) {
		__extends(suohaIndex$Skin57, _super);
		function suohaIndex$Skin57() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin57.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin57;
	})(eui.Skin);

	var suohaIndex$Skin58 = 	(function (_super) {
		__extends(suohaIndex$Skin58, _super);
		function suohaIndex$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "location_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin58;
	})(eui.Skin);

	var suohaIndex$Skin59 = 	(function (_super) {
		__extends(suohaIndex$Skin59, _super);
		function suohaIndex$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameset";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin59;
	})(eui.Skin);

	var suohaIndex$Skin60 = 	(function (_super) {
		__extends(suohaIndex$Skin60, _super);
		function suohaIndex$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin60;
	})(eui.Skin);

	var suohaIndex$Skin61 = 	(function (_super) {
		__extends(suohaIndex$Skin61, _super);
		function suohaIndex$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesan1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin61;
	})(eui.Skin);

	var suohaIndex$Skin62 = 	(function (_super) {
		__extends(suohaIndex$Skin62, _super);
		function suohaIndex$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btnshakeclick")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btnshakedisable")
					])
			];
		}
		var _proto = suohaIndex$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btnshake";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin62;
	})(eui.Skin);

	var suohaIndex$Skin63 = 	(function (_super) {
		__extends(suohaIndex$Skin63, _super);
		function suohaIndex$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin63;
	})(eui.Skin);

	var suohaIndex$Skin64 = 	(function (_super) {
		__extends(suohaIndex$Skin64, _super);
		function suohaIndex$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuYY";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin64;
	})(eui.Skin);

	var suohaIndex$Skin65 = 	(function (_super) {
		__extends(suohaIndex$Skin65, _super);
		function suohaIndex$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuMsg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin65;
	})(eui.Skin);

	var suohaIndex$Skin66 = 	(function (_super) {
		__extends(suohaIndex$Skin66, _super);
		function suohaIndex$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suohaIndex$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuPlayerList";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin66;
	})(eui.Skin);

	function suohaIndex() {
		_super.call(this);
		this.skinParts = ["yying","watching","menu","playcount","roompwd","basescore","situp","locationBtn","setting","wanfa","jiesan","tool","shaizhong","shaizhongGroup","myBaozi","myAnimate","mine0","mine1","mine2","mine4","mine3","mytitle","myShaiGroup","winnum0","muchWin","myHeadImg","offline","myPoint","myName","myYY","biaoqing","myInfo","dimissProcess","dismissGroup","endImg","endContent","mybei","gameendTip","myAddPoint","myDaojinum","callBtn","shaizi0","selected0","chooseShai0","shaizi1","selected1","chooseShai1","shaizi2","selected2","chooseShai2","shaizi3","selected3","chooseShai3","shaizi4","selected4","chooseShai4","chooseShai11","callGroup","yourMinCard","yaoqing","menban","whoJoin","joinNotice","readyStatus","messageT","messagebg","readyBtn","voiceplay","luyingNotice","lyNoticeGroup","xiaoxi","pangguanBtn","resetNum","resetNumGroup","juhua","waitConnect"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.yying_i(),this.watching_i(),this.menu_i(),this._Group1_i(),this._Group2_i(),this.tool_i(),this.myShaiGroup_i(),this.muchWin_i(),this.myInfo_i(),this.dismissGroup_i(),this.gameendTip_i(),this.myAddPoint_i(),this.callGroup_i(),this.yourMinCard_i(),this.yaoqing_i(),this.menban_i(),this.joinNotice_i(),this.readyStatus_i(),this.messagebg_i(),this._Group6_i(),this._Group10_i(),this.resetNumGroup_i(),this.waitConnect_i()];
	}
	var _proto = suohaIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yying_i = function () {
		var t = new eui.Image();
		this.yying = t;
		t.horizontalCenter = 0;
		t.source = "newPublic_json.isLuying";
		t.visible = false;
		t.y = 327.67;
		return t;
	};
	_proto.watching_i = function () {
		var t = new eui.Image();
		this.watching = t;
		t.source = "watching_png";
		t.x = 440;
		t.y = 814;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 536.39;
		t.y = 14.5;
		t.skinName = suohaIndex$Skin56;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 12.5;
		t.y = 8;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this.roompwd_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 100;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.left = 18;
		t.text = "局数：0/1";
		t.y = 58.5;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.left = 18;
		t.text = "房间号：666666";
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 499.62;
		t.elementsContent = [this.basescore_i(),this._Label1_i()];
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bold = true;
		t.text = "底分：1分";
		t.textColor = 0x2e815c;
		t.x = 135.28;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "梭哈模式";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tool_i = function () {
		var t = new eui.Group();
		this.tool = t;
		t.anchorOffsetX = 388;
		t.scaleX = 1;
		t.visible = false;
		t.x = 521.5;
		t.y = 12.17;
		t.elementsContent = [this.situp_i(),this.locationBtn_i(),this.setting_i(),this.wanfa_i(),this.jiesan_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 81;
		t.y = 0;
		t.skinName = suohaIndex$Skin57;
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = 0;
		t.skinName = suohaIndex$Skin58;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 321;
		t.y = 0;
		t.skinName = suohaIndex$Skin59;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 241;
		t.y = 0;
		t.skinName = suohaIndex$Skin60;
		return t;
	};
	_proto.jiesan_i = function () {
		var t = new eui.Button();
		this.jiesan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 161;
		t.y = 0;
		t.skinName = suohaIndex$Skin61;
		return t;
	};
	_proto.myShaiGroup_i = function () {
		var t = new eui.Group();
		this.myShaiGroup = t;
		t.horizontalCenter = 7;
		t.y = 745.87;
		t.elementsContent = [this.shaizhongGroup_i(),this.myAnimate_i(),this.mine0_i(),this.mine1_i(),this.mine2_i(),this.mine4_i(),this.mine3_i(),this.mytitle_i()];
		return t;
	};
	_proto.shaizhongGroup_i = function () {
		var t = new eui.Group();
		this.shaizhongGroup = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myAnimate_i = function () {
		var t = new eui.Group();
		this.myAnimate = t;
		t.height = 121;
		t.width = 161;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myBaozi_i()];
		return t;
	};
	_proto.myBaozi_i = function () {
		var t = new eui.Image();
		this.myBaozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.visible = false;
		t.x = -21.81;
		t.y = -30.66;
		return t;
	};
	_proto.mine0_i = function () {
		var t = new eui.Image();
		this.mine0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 13.91;
		t.y = 78.91;
		return t;
	};
	_proto.mine1_i = function () {
		var t = new eui.Image();
		this.mine1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 75.97;
		t.y = 81.69;
		return t;
	};
	_proto.mine2_i = function () {
		var t = new eui.Image();
		this.mine2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 92.67;
		t.y = 115;
		return t;
	};
	_proto.mine4_i = function () {
		var t = new eui.Image();
		this.mine4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 4.6;
		t.y = 115.64;
		return t;
	};
	_proto.mine3_i = function () {
		var t = new eui.Image();
		this.mine3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 50.36;
		t.y = 138.51;
		return t;
	};
	_proto.mytitle_i = function () {
		var t = new eui.Image();
		this.mytitle = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "suohaType6";
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 6;
		t.y = 835.98;
		t.elementsContent = [this._Image2_i(),this.winnum0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum0_i = function () {
		var t = new eui.Label();
		this.winnum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new eui.Group();
		this.myInfo = t;
		t.x = 6.5;
		t.y = 863.37;
		t.elementsContent = [this._Image3_i(),this.myHeadImg_i(),this.offline_i(),this.myPoint_i(),this.myName_i(),this.myYY_i(),this.biaoqing_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "myInfo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myHeadImg_i = function () {
		var t = new eui.Image();
		this.myHeadImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "default";
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 96;
		t.source = "offline";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.myPoint_i = function () {
		var t = new eui.Label();
		this.myPoint = t;
		t.height = 21;
		t.size = 21;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xF4DF58;
		t.width = 71;
		t.x = 116.5;
		t.y = 60.09;
		return t;
	};
	_proto.myName_i = function () {
		var t = new eui.Label();
		this.myName = t;
		t.anchorOffsetX = 0;
		t.height = 21;
		t.size = 21;
		t.text = "魂族娱乐";
		t.width = 86;
		t.x = 110.5;
		t.y = 30.5;
		return t;
	};
	_proto.myYY_i = function () {
		var t = new eui.Image();
		this.myYY = t;
		t.height = 96;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dimissProcess_i = function () {
		var t = new eui.Label();
		this.dimissProcess = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 18;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 100;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 7.6;
		t.y = 864.28;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.mybei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sunshi_png";
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "lossBei_fnt";
		t.text = "123";
		t.verticalCenter = 0;
		t.x = 147.4;
		return t;
	};
	_proto.mybei_i = function () {
		var t = new eui.Image();
		this.mybei = t;
		t.source = "bei_png";
		t.verticalCenter = 0;
		t.x = 312.92;
		return t;
	};
	_proto.myAddPoint_i = function () {
		var t = new eui.Label();
		this.myAddPoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "+20";
		t.x = 30;
		t.y = 900.85;
		return t;
	};
	_proto.callGroup_i = function () {
		var t = new eui.Group();
		this.callGroup = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = 404;
		t.y = 724.13;
		t.elementsContent = [this._Group3_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 170.05;
		t.elementsContent = [this._Image5_i(),this.myDaojinum_i(),this.callBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "bkd";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myDaojinum_i = function () {
		var t = new eui.Label();
		this.myDaojinum = t;
		t.height = 45;
		t.size = 45;
		t.text = "10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		t.width = 51;
		t.x = 30.68;
		return t;
	};
	_proto.callBtn_i = function () {
		var t = new eui.Button();
		this.callBtn = t;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = -4.5;
		t.x = 108.59;
		t.skinName = suohaIndex$Skin62;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = -2.39;
		t.y = -10;
		t.elementsContent = [this._Image6_i(),this._Group4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276.86;
		t.scale9Grid = new egret.Rectangle(53,39,506,89);
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "bkt";
		t.width = 399.31;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this.chooseShai0_i(),this.chooseShai1_i(),this.chooseShai2_i(),this.chooseShai3_i(),this.chooseShai4_i(),this.chooseShai11_i()];
		return t;
	};
	_proto.chooseShai0_i = function () {
		var t = new eui.Group();
		this.chooseShai0 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 1;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.shaizi0_i(),this.selected0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi0_i = function () {
		var t = new eui.Image();
		this.shaizi0 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected0_i = function () {
		var t = new eui.Image();
		this.selected0 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai1_i = function () {
		var t = new eui.Group();
		this.chooseShai1 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 81;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.shaizi1_i(),this.selected1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi1_i = function () {
		var t = new eui.Image();
		this.shaizi1 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected1_i = function () {
		var t = new eui.Image();
		this.selected1 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai2_i = function () {
		var t = new eui.Group();
		this.chooseShai2 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 161;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.shaizi2_i(),this.selected2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi2_i = function () {
		var t = new eui.Image();
		this.shaizi2 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected2_i = function () {
		var t = new eui.Image();
		this.selected2 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai3_i = function () {
		var t = new eui.Group();
		this.chooseShai3 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 0;
		t.y = 79;
		t.elementsContent = [this._Image10_i(),this.shaizi3_i(),this.selected3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi3_i = function () {
		var t = new eui.Image();
		this.shaizi3 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected3_i = function () {
		var t = new eui.Image();
		this.selected3 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai4_i = function () {
		var t = new eui.Group();
		this.chooseShai4 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 81;
		t.y = 79;
		t.elementsContent = [this._Image11_i(),this.shaizi4_i(),this.selected4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi4_i = function () {
		var t = new eui.Image();
		this.shaizi4 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected4_i = function () {
		var t = new eui.Image();
		this.selected4 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai11_i = function () {
		var t = new eui.Group();
		this.chooseShai11 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.visible = false;
		t.x = 159.75;
		t.y = 79;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai6";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 92;
		t.source = "selected";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yourMinCard_i = function () {
		var t = new eui.Image();
		this.yourMinCard = t;
		t.horizontalCenter = 0;
		t.source = "minCard";
		t.y = 501.44;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "share";
		t.visible = false;
		t.x = 389.08;
		t.y = 0;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.width = 330;
		t.y = 18;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 16;
		t.y = 899.37;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 3.5;
		t.y = 778.91;
		t.elementsContent = [this._Image16_i(),this.messageT_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messageT_i = function () {
		var t = new eui.Label();
		this.messageT = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 692;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin63;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 956.33;
		t.elementsContent = [this._Image17_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "dibuBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 105.29;
		t.y = 23.68;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin64;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = -7;
		t.y = -92.66;
		t.elementsContent = [this._Image18_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "ddz_yy_qp_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.luyingNotice_i = function () {
		var t = new eui.Label();
		this.luyingNotice = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "再次点击取消录音15s";
		t.width = 100;
		t.y = 12.65;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 284.5;
		t.y = 26.35;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin65;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 475.94;
		t.y = 26.35;
		t.elementsContent = [this.pangguanBtn_i()];
		return t;
	};
	_proto.pangguanBtn_i = function () {
		var t = new eui.Button();
		this.pangguanBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin66;
		return t;
	};
	_proto.resetNumGroup_i = function () {
		var t = new eui.Group();
		this.resetNumGroup = t;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 41;
		t.elementsContent = [this._Label2_i(),this.resetNum_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "重摇次数：";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.resetNum_i = function () {
		var t = new eui.Label();
		this.resetNum = t;
		t.size = 25;
		t.text = "10/20";
		t.textAlign = "left";
		t.textColor = 0x2e815c;
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image19_i(),this.juhua_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	return suohaIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/totalResult.exml'] = window.totalResult = (function (_super) {
	__extends(totalResult, _super);
	var totalResult$Skin67 = 	(function (_super) {
		__extends(totalResult$Skin67, _super);
		function totalResult$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = totalResult$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "totalJieping";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return totalResult$Skin67;
	})(eui.Skin);

	var totalResult$Skin68 = 	(function (_super) {
		__extends(totalResult$Skin68, _super);
		function totalResult$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = totalResult$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "totalBackHall";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return totalResult$Skin68;
	})(eui.Skin);

	function totalResult() {
		_super.call(this);
		this.skinParts = ["jieping","backHall","paiMing","nickname","ID","point","paiMing0","nickname1","ID2","point0","paiMing1","nickname2","ID3","point1","paiMing3","nickname4","ID5","point3","paiMing2","nickname3","ID4","point2","nickname0","ID0","ID1","roompwd","gamename","gametime"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
	}
	var _proto = totalResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cntotalBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 861.79;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 0;
		t.elementsContent = [this.jieping_i()];
		return t;
	};
	_proto.jieping_i = function () {
		var t = new eui.Button();
		this.jieping = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = totalResult$Skin67;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 311.53;
		t.elementsContent = [this.backHall_i()];
		return t;
	};
	_proto.backHall_i = function () {
		var t = new eui.Button();
		this.backHall = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = totalResult$Skin68;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 57;
		t.y = 245.32;
		t.elementsContent = [this._Image2_i(),this.paiMing_i(),this.nickname_i(),this.ID_i(),this.point_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing_i = function () {
		var t = new eui.Image();
		this.paiMing = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450f;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.BitmapLabel();
		this.point = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 85.5;
		t.y = 319.32;
		t.elementsContent = [this._Image3_i(),this.paiMing0_i(),this.nickname1_i(),this.ID2_i(),this.point0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing0_i = function () {
		var t = new eui.Image();
		this.paiMing0 = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.BitmapLabel();
		this.point0 = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 87.5;
		t.y = 467.32;
		t.elementsContent = [this._Image4_i(),this.paiMing1_i(),this.nickname2_i(),this.ID3_i(),this.point1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing1_i = function () {
		var t = new eui.Image();
		this.paiMing1 = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.BitmapLabel();
		this.point1 = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 84.17;
		t.y = 541.32;
		t.elementsContent = [this._Image5_i(),this.paiMing3_i(),this.nickname4_i(),this.ID5_i(),this.point3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing3_i = function () {
		var t = new eui.Image();
		this.paiMing3 = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID5_i = function () {
		var t = new eui.Label();
		this.ID5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.BitmapLabel();
		this.point3 = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 86.5;
		t.y = 393.32;
		t.elementsContent = [this._Image6_i(),this.paiMing2_i(),this.nickname3_i(),this.ID4_i(),this.point2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing2_i = function () {
		var t = new eui.Image();
		this.paiMing2 = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID4_i = function () {
		var t = new eui.Label();
		this.ID4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.BitmapLabel();
		this.point2 = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 85.5;
		t.y = 171.32;
		t.elementsContent = [this._Image7_i(),this.nickname0_i(),this.ID0_i(),this.ID1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "昵称";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "ID";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "分数";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 365;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "名次";
		t.textColor = 0x78450f;
		t.verticalCenter = 0;
		t.x = 11;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 726.48;
		t.elementsContent = [this.roompwd_i(),this.gamename_i(),this.gametime_i()];
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.text = "房间号：666666";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gamename_i = function () {
		var t = new eui.Label();
		this.gamename = t;
		t.text = "模式：牛牛模式";
		t.x = 255.45;
		t.y = 0;
		return t;
	};
	_proto.gametime_i = function () {
		var t = new eui.Label();
		this.gametime = t;
		t.text = "时间：2017-01-01 20:20:20";
		t.x = 2.09;
		t.y = 62.52;
		return t;
	};
	return totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/totalResultItem.exml'] = window.totalResultItem = (function (_super) {
	__extends(totalResultItem, _super);
	function totalResultItem() {
		_super.call(this);
		this.skinParts = ["paiMing","nickname","ID","pmText","point"];
		
		this.height = 72;
		this.width = 529;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = totalResultItem.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.paiMing_i(),this.nickname_i(),this.ID_i(),this.pmText_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 72;
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing_i = function () {
		var t = new eui.Image();
		this.paiMing = t;
		t.source = "img_rank3";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.pmText_i = function () {
		var t = new eui.Label();
		this.pmText = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "5";
		t.textColor = 0x78450f;
		t.verticalCenter = 1;
		t.x = 30;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 346;
		t.elementsContent = [this.point_i()];
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.BitmapLabel();
		this.point = t;
		t.font = "loss_total_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "-222666";
		t.verticalCenter = 0;
		return t;
	};
	return totalResultItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/wantchScene.exml'] = window.wantchScene = (function (_super) {
	__extends(wantchScene, _super);
	function wantchScene() {
		_super.call(this);
		this.skinParts = ["menban","baseScore","playgound","nickname","playerList","showGroup"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.menban_i(),this.showGroup_i()];
	}
	var _proto = wantchScene.prototype;

	_proto.menban_i = function () {
		var t = new eui.Image();
		this.menban = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.showGroup_i = function () {
		var t = new eui.Group();
		this.showGroup = t;
		t.x = 329;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.baseScore_i(),this.playgound_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "pangGuanBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.baseScore_i = function () {
		var t = new eui.Label();
		this.baseScore = t;
		t.size = 25;
		t.text = "0";
		t.x = 88;
		t.y = 140.69;
		return t;
	};
	_proto.playgound_i = function () {
		var t = new eui.Label();
		this.playgound = t;
		t.size = 25;
		t.text = "10/10";
		t.x = 88;
		t.y = 183.7;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 700;
		t.horizontalCenter = 0.5;
		t.width = 300;
		t.y = 324.04;
		t.viewport = this.playerList_i();
		return t;
	};
	_proto.playerList_i = function () {
		var t = new eui.Group();
		this.playerList = t;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.nickname_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "default";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.size = 20;
		t.text = "婚族网路互娱一天也";
		t.verticalCenter = 0.5;
		t.width = 120;
		t.x = 88.98;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "-99999";
		t.verticalCenter = 0.5;
		t.x = 226.08;
		return t;
	};
	return wantchScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/chuiniu/watchItem.exml'] = window.watchItem = (function (_super) {
	__extends(watchItem, _super);
	function watchItem() {
		_super.call(this);
		this.skinParts = ["head","nickname","score"];
		
		this.height = 70;
		this.width = 290;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = watchItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this.head_i(),this.nickname_i(),this.score_i()];
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "default";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.size = 20;
		t.text = "婚族网路互娱一天也";
		t.verticalCenter = 0.5;
		t.width = 120;
		t.x = 88.98;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.size = 20;
		t.text = "-99999";
		t.verticalCenter = 0;
		t.x = 226.08;
		return t;
	};
	return watchItem;
})(eui.Skin);