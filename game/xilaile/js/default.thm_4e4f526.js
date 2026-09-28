window.skins={};
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/Notice.exml'] = window.Notice = (function (_super) {
	__extends(Notice, _super);
	function Notice() {
		_super.call(this);
		this.skinParts = ["content","confirm","cancel","mianban"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this.mianban_i()];
	}
	var _proto = Notice.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mianban_i = function () {
		var t = new eui.Group();
		this.mianban = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.content_i(),this.confirm_i(),this.cancel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tishi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 186;
		t.horizontalCenter = 3.5;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "有游戏囧事打飞机顽皮偶尔感觉咩咩叫纳入规划in鹅肉共河内然后呢容纳后IE男人很";
		t.textAlign = "left";
		t.textColor = 0x311749;
		t.verticalAlign = "middle";
		t.width = 500;
		t.y = 86;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Image();
		this.confirm = t;
		t.source = "yes_xiao_png";
		t.x = 93;
		t.y = 316;
		return t;
	};
	_proto.cancel_i = function () {
		var t = new eui.Image();
		this.cancel = t;
		t.source = "quxiao_png";
		t.x = 300;
		t.y = 316;
		return t;
	};
	return Notice;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 20;
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "guidao_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "guidao2_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "0/100";
		t.textAlign = "center";
		t.textColor = 0x3d0004;
		t.verticalAlign = "middle";
		t.verticalCenter = -25;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/loadingUI.exml'] = window.loadingUI = (function (_super) {
	__extends(loadingUI, _super);
	function loadingUI() {
		_super.call(this);
		this.skinParts = ["bg","pro"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.bg_i(),this.pro_i(),this._Label1_i()];
	}
	var _proto = loadingUI.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "loading_hall_png";
		t.y = 0;
		return t;
	};
	_proto.pro_i = function () {
		var t = new eui.ProgressBar();
		this.pro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.skinName = "skins.ProgressBarSkin";
		t.value = 500;
		t.y = 499.4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.right = 0;
		t.size = 25;
		t.text = "V: 2.0";
		t.visible = false;
		t.y = 7;
		return t;
	};
	return loadingUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/HallUI.exml'] = window.HallUI = (function (_super) {
	__extends(HallUI, _super);
	var HallUI$Skin1 = 	(function (_super) {
		__extends(HallUI$Skin1, _super);
		function HallUI$Skin1() {
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
		var _proto = HallUI$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_add_btn";
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
		return HallUI$Skin1;
	})(eui.Skin);

	var HallUI$Skin2 = 	(function (_super) {
		__extends(HallUI$Skin2, _super);
		function HallUI$Skin2() {
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
		var _proto = HallUI$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_set_btn";
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
		return HallUI$Skin2;
	})(eui.Skin);

	var HallUI$Skin3 = 	(function (_super) {
		__extends(HallUI$Skin3, _super);
		function HallUI$Skin3() {
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
		var _proto = HallUI$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_shop_btn";
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
		return HallUI$Skin3;
	})(eui.Skin);

	var HallUI$Skin4 = 	(function (_super) {
		__extends(HallUI$Skin4, _super);
		function HallUI$Skin4() {
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
		var _proto = HallUI$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_zhanji_btn";
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
		return HallUI$Skin4;
	})(eui.Skin);

	var HallUI$Skin5 = 	(function (_super) {
		__extends(HallUI$Skin5, _super);
		function HallUI$Skin5() {
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
		var _proto = HallUI$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_tuiguang_btn";
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
		return HallUI$Skin5;
	})(eui.Skin);

	var HallUI$Skin6 = 	(function (_super) {
		__extends(HallUI$Skin6, _super);
		function HallUI$Skin6() {
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
		var _proto = HallUI$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_renwu_btn";
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
		return HallUI$Skin6;
	})(eui.Skin);

	var HallUI$Skin7 = 	(function (_super) {
		__extends(HallUI$Skin7, _super);
		function HallUI$Skin7() {
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
		var _proto = HallUI$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_qiandao_btn";
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
		return HallUI$Skin7;
	})(eui.Skin);

	var HallUI$Skin8 = 	(function (_super) {
		__extends(HallUI$Skin8, _super);
		function HallUI$Skin8() {
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
		var _proto = HallUI$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_majiang_btn";
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
		return HallUI$Skin8;
	})(eui.Skin);

	var HallUI$Skin9 = 	(function (_super) {
		__extends(HallUI$Skin9, _super);
		function HallUI$Skin9() {
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
		var _proto = HallUI$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_shuangkou_btn";
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
		return HallUI$Skin9;
	})(eui.Skin);

	var HallUI$Skin10 = 	(function (_super) {
		__extends(HallUI$Skin10, _super);
		function HallUI$Skin10() {
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
		var _proto = HallUI$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_niuniu_btn";
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
		return HallUI$Skin10;
	})(eui.Skin);

	var HallUI$Skin11 = 	(function (_super) {
		__extends(HallUI$Skin11, _super);
		function HallUI$Skin11() {
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
		var _proto = HallUI$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_set_btnnsb";
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
		return HallUI$Skin11;
	})(eui.Skin);

	var HallUI$Skin12 = 	(function (_super) {
		__extends(HallUI$Skin12, _super);
		function HallUI$Skin12() {
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
		var _proto = HallUI$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.fankui";
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
		return HallUI$Skin12;
	})(eui.Skin);

	function HallUI() {
		_super.call(this);
		this.skinParts = ["m_userid","m_zuanNum","m_username","head","addZuanBtn","setBtn","topGroup","mains","shop","zhanji","tuiguang","renwu","taskNotice","qiandao","singNotice","bottomGroup","ttmjCreateBtn","ttskCreateBtn","ttnnCreateBtn","role","m_notice","kefuWeixin","menban","hall_set","hall_fankui","hallSetGroup","juhua","waitConnect"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this.topGroup_i(),this.mains_i(),this.bottomGroup_i(),this._Group10_i(),this.role_i(),this._Group11_i(),this.menban_i(),this.hallSetGroup_i(),this.waitConnect_i()];
	}
	var _proto = HallUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hall_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.horizontalCenter = 0;
		t.width = 900;
		t.y = 0;
		t.elementsContent = [this.m_userid_i(),this.m_zuanNum_i(),this.m_username_i(),this.head_i(),this.addZuanBtn_i(),this._Group1_i()];
		return t;
	};
	_proto.m_userid_i = function () {
		var t = new eui.Label();
		this.m_userid = t;
		t.size = 25;
		t.text = "ID:000000";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.x = 334;
		t.y = 34.87;
		return t;
	};
	_proto.m_zuanNum_i = function () {
		var t = new eui.Label();
		this.m_zuanNum = t;
		t.height = 25;
		t.size = 25;
		t.text = "00000000";
		t.textAlign = "center";
		t.textColor = 0xf7de4c;
		t.width = 100;
		t.x = 562.89;
		t.y = 36.87;
		return t;
	};
	_proto.m_username_i = function () {
		var t = new eui.Label();
		this.m_username = t;
		t.size = 25;
		t.text = "wfwegweg";
		t.x = 136.69;
		t.y = 32.92;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.horizontalCenter = -357.5;
		t.source = "";
		t.verticalCenter = 3.5;
		t.width = 69;
		return t;
	};
	_proto.addZuanBtn_i = function () {
		var t = new eui.Button();
		this.addZuanBtn = t;
		t.horizontalCenter = 231.5;
		t.label = "";
		t.verticalCenter = 12.5;
		t.skinName = HallUI$Skin1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 762;
		t.y = 23.52;
		t.elementsContent = [this.setBtn_i()];
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Button();
		this.setBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin2;
		return t;
	};
	_proto.mains_i = function () {
		var t = new eui.Group();
		this.mains = t;
		t.x = 0;
		t.y = 110;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 0;
		t.elementsContent = [this.shop_i()];
		return t;
	};
	_proto.shop_i = function () {
		var t = new eui.Button();
		this.shop = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin3;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 148.02;
		t.elementsContent = [this.zhanji_i()];
		return t;
	};
	_proto.zhanji_i = function () {
		var t = new eui.Button();
		this.zhanji = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin4;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 425.71;
		t.elementsContent = [this.tuiguang_i()];
		return t;
	};
	_proto.tuiguang_i = function () {
		var t = new eui.Button();
		this.tuiguang = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 566.01;
		t.elementsContent = [this.renwu_i(),this.taskNotice_i()];
		return t;
	};
	_proto.renwu_i = function () {
		var t = new eui.Button();
		this.renwu = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin6;
		return t;
	};
	_proto.taskNotice_i = function () {
		var t = new eui.Rect();
		this.taskNotice = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFF0000;
		t.height = 15;
		t.width = 15;
		t.x = 9.01;
		t.y = -1.66;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 50;
		t.elementsContent = [this.qiandao_i(),this.singNotice_i()];
		return t;
	};
	_proto.qiandao_i = function () {
		var t = new eui.Button();
		this.qiandao = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin7;
		return t;
	};
	_proto.singNotice_i = function () {
		var t = new eui.Rect();
		this.singNotice = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xff0000;
		t.height = 15;
		t.width = 15;
		t.x = 10.34;
		t.y = -2.99;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 819.82;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.width = 50;
		t.y = 0;
		t.elementsContent = [this.ttmjCreateBtn_i()];
		return t;
	};
	_proto.ttmjCreateBtn_i = function () {
		var t = new eui.Button();
		this.ttmjCreateBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin8;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.width = 50;
		t.y = 114.56;
		t.elementsContent = [this.ttskCreateBtn_i()];
		return t;
	};
	_proto.ttskCreateBtn_i = function () {
		var t = new eui.Button();
		this.ttskCreateBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin9;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.width = 50;
		t.y = 220;
		t.elementsContent = [this.ttnnCreateBtn_i()];
		return t;
	};
	_proto.ttnnCreateBtn_i = function () {
		var t = new eui.Button();
		this.ttnnCreateBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = HallUI$Skin10;
		return t;
	};
	_proto.role_i = function () {
		var t = new eui.Image();
		this.role = t;
		t.source = "xll_hall_json.hall_girl";
		t.x = 408;
		t.y = 187.5;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 104.36;
		t.elementsContent = [this._Image2_i(),this.m_notice_i(),this.kefuWeixin_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_gonggao";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_notice_i = function () {
		var t = new eui.Label();
		this.m_notice = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 175;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 21;
		t.text = "fghjklfghjkl和进口量好几款良好健康规划局好几款就好看接口接口接口";
		t.textColor = 0x000000;
		t.width = 200;
		t.y = 64.45;
		return t;
	};
	_proto.kefuWeixin_i = function () {
		var t = new eui.Label();
		this.kefuWeixin = t;
		t.horizontalCenter = 0.5;
		t.size = 23;
		t.text = "Label";
		t.textColor = 0xffffff;
		t.y = 280.83;
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
	_proto.hallSetGroup_i = function () {
		var t = new eui.Group();
		this.hallSetGroup = t;
		t.x = 829.26;
		t.y = 78.39;
		t.elementsContent = [this._Image3_i(),this.hall_set_i(),this.hall_fankui_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_set_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hall_set_i = function () {
		var t = new eui.Button();
		this.hall_set = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -26.5;
		t.skinName = HallUI$Skin11;
		return t;
	};
	_proto.hall_fankui_i = function () {
		var t = new eui.Button();
		this.hall_fankui = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 25.5;
		t.skinName = HallUI$Skin12;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.juhua_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "正在连接服务器，请稍候……";
		t.y = 413.67;
		return t;
	};
	return HallUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/getZuanshiNotice.exml'] = window.getZuanshiNotice = (function (_super) {
	__extends(getZuanshiNotice, _super);
	function getZuanshiNotice() {
		_super.call(this);
		this.skinParts = ["menban","contentText","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.menban_i(),this.mainContent_i()];
	}
	var _proto = getZuanshiNotice.prototype;

	_proto.menban_i = function () {
		var t = new eui.Image();
		this.menban = t;
		t.percentHeight = 100;
		t.horizontalCenter = 2;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zuanshi_tishi_bg";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 7;
		t.elementsContent = [this._Image2_i(),this.contentText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.Img_zuan_210";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.contentText_i = function () {
		var t = new eui.Label();
		this.contentText = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "获得了300个钻石";
		t.textColor = 0x000000;
		t.x = 62.23;
		t.y = 8;
		return t;
	};
	return getZuanshiNotice;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/qCodeUI.exml'] = window.qCodeUI = (function (_super) {
	__extends(qCodeUI, _super);
	function qCodeUI() {
		_super.call(this);
		this.skinParts = ["m_menban","qCodeImg","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = qCodeUI.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Rect();
		this.m_menban = t;
		t.fillAlpha = 0.7;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.qCodeImg_i()];
		return t;
	};
	_proto.qCodeImg_i = function () {
		var t = new eui.Image();
		this.qCodeImg = t;
		t.height = 300;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return qCodeUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/qiandaoUI.exml'] = window.qiandaoUI = (function (_super) {
	__extends(qiandaoUI, _super);
	var qiandaoUI$Skin13 = 	(function (_super) {
		__extends(qiandaoUI$Skin13, _super);
		function qiandaoUI$Skin13() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_qiandao_btn2")
					])
			];
		}
		var _proto = qiandaoUI$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_qiandao";
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
		return qiandaoUI$Skin13;
	})(eui.Skin);

	function qiandaoUI() {
		_super.call(this);
		this.skinParts = ["m_menban","awardIcon0","award0","title0","yiqiandao0","day0","awardIcon1","yiqiandao1","award1","title1","day1","awardIcon2","yiqiandao2","award2","title2","day2","awardIcon3","yiqiandao3","award3","title3","day3","awardIcon4","yiqiandao4","award4","title4","day4","awardIcon5","yiqiandao5","award5","title5","day5","awardIcon6","yiqiandao6","award6","title6","day6","qiandaoBtn","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = qiandaoUI.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_unmono_bg_png";
		t.x = 0;
		t.y = 7.67;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -27.32;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_qiandao_title";
		t.y = 34.64;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 17;
		t.elementsContent = [this.day0_i(),this.day1_i(),this.day2_i(),this.day3_i(),this.day4_i(),this.day5_i(),this.day6_i(),this.qiandaoBtn_i()];
		return t;
	};
	_proto.day0_i = function () {
		var t = new eui.Group();
		this.day0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.awardIcon0_i(),this.award0_i(),this.title0_i(),this.yiqiandao0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_qiandao_goods_bg";
		t.x = 0.27;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_qiandao_num";
		t.y = 13.32;
		return t;
	};
	_proto.awardIcon0_i = function () {
		var t = new eui.Image();
		this.awardIcon0 = t;
		t.horizontalCenter = 1;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_hall_json.Img_zuan_210";
		t.y = 51.96;
		return t;
	};
	_proto.award0_i = function () {
		var t = new eui.Label();
		this.award0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "x999";
		t.textColor = 0x565656;
		t.y = 94.52;
		return t;
	};
	_proto.title0_i = function () {
		var t = new eui.Label();
		this.title0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "第一天";
		t.textColor = 0xa03b14;
		t.y = 17.04;
		return t;
	};
	_proto.yiqiandao0_i = function () {
		var t = new eui.Image();
		this.yiqiandao0 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_yiqiandao_bg";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.day1_i = function () {
		var t = new eui.Group();
		this.day1 = t;
		t.x = 125;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.awardIcon1_i(),this.yiqiandao1_i(),this.award1_i(),this.title1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_qiandao_goods_bg";
		t.x = 0.27;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_qiandao_num";
		t.y = 13.32;
		return t;
	};
	_proto.awardIcon1_i = function () {
		var t = new eui.Image();
		this.awardIcon1 = t;
		t.horizontalCenter = 1.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_hall_json.Img_zuan_211";
		t.y = 43.98;
		return t;
	};
	_proto.yiqiandao1_i = function () {
		var t = new eui.Image();
		this.yiqiandao1 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_yiqiandao_bg";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.award1_i = function () {
		var t = new eui.Label();
		this.award1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "x999";
		t.textColor = 0x565656;
		t.y = 94.52;
		return t;
	};
	_proto.title1_i = function () {
		var t = new eui.Label();
		this.title1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "第一天";
		t.textColor = 0xA03B14;
		t.y = 17.04;
		return t;
	};
	_proto.day2_i = function () {
		var t = new eui.Group();
		this.day2 = t;
		t.x = 250;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.awardIcon2_i(),this.yiqiandao2_i(),this.award2_i(),this.title2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_qiandao_goods_bg";
		t.x = 0.27;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_qiandao_num";
		t.y = 13.32;
		return t;
	};
	_proto.awardIcon2_i = function () {
		var t = new eui.Image();
		this.awardIcon2 = t;
		t.horizontalCenter = 1.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_hall_json.Img_zuan_211";
		t.y = 43.98;
		return t;
	};
	_proto.yiqiandao2_i = function () {
		var t = new eui.Image();
		this.yiqiandao2 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_yiqiandao_bg";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.award2_i = function () {
		var t = new eui.Label();
		this.award2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "x999";
		t.textColor = 0x565656;
		t.y = 94.52;
		return t;
	};
	_proto.title2_i = function () {
		var t = new eui.Label();
		this.title2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "第一天";
		t.textColor = 0xA03B14;
		t.y = 17.04;
		return t;
	};
	_proto.day3_i = function () {
		var t = new eui.Group();
		this.day3 = t;
		t.x = 375;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this.awardIcon3_i(),this.yiqiandao3_i(),this.award3_i(),this.title3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_qiandao_goods_bg";
		t.x = 0.27;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_qiandao_num";
		t.y = 13.32;
		return t;
	};
	_proto.awardIcon3_i = function () {
		var t = new eui.Image();
		this.awardIcon3 = t;
		t.horizontalCenter = 1.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_hall_json.shop_zuanshi_icon2";
		t.y = 42.6;
		return t;
	};
	_proto.yiqiandao3_i = function () {
		var t = new eui.Image();
		this.yiqiandao3 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_yiqiandao_bg";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.award3_i = function () {
		var t = new eui.Label();
		this.award3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "x999";
		t.textColor = 0x565656;
		t.y = 94.52;
		return t;
	};
	_proto.title3_i = function () {
		var t = new eui.Label();
		this.title3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "第一天";
		t.textColor = 0xA03B14;
		t.y = 17.04;
		return t;
	};
	_proto.day4_i = function () {
		var t = new eui.Group();
		this.day4 = t;
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this.awardIcon4_i(),this.yiqiandao4_i(),this.award4_i(),this.title4_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_qiandao_goods_bg";
		t.x = 0.27;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_qiandao_num";
		t.y = 13.32;
		return t;
	};
	_proto.awardIcon4_i = function () {
		var t = new eui.Image();
		this.awardIcon4 = t;
		t.horizontalCenter = 1;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_hall_json.Img_zuan_212";
		t.y = 41.28;
		return t;
	};
	_proto.yiqiandao4_i = function () {
		var t = new eui.Image();
		this.yiqiandao4 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_yiqiandao_bg";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.award4_i = function () {
		var t = new eui.Label();
		this.award4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "x999";
		t.textColor = 0x565656;
		t.y = 94.52;
		return t;
	};
	_proto.title4_i = function () {
		var t = new eui.Label();
		this.title4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "第一天";
		t.textColor = 0xA03B14;
		t.y = 17.04;
		return t;
	};
	_proto.day5_i = function () {
		var t = new eui.Group();
		this.day5 = t;
		t.x = 125;
		t.y = 140;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this.awardIcon5_i(),this.yiqiandao5_i(),this.award5_i(),this.title5_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_qiandao_goods_bg";
		t.x = 0.27;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_qiandao_num";
		t.y = 13.32;
		return t;
	};
	_proto.awardIcon5_i = function () {
		var t = new eui.Image();
		this.awardIcon5 = t;
		t.horizontalCenter = 1;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_hall_json.shop_zuanshi_icon3";
		t.y = 39.94;
		return t;
	};
	_proto.yiqiandao5_i = function () {
		var t = new eui.Image();
		this.yiqiandao5 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_yiqiandao_bg";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.award5_i = function () {
		var t = new eui.Label();
		this.award5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "x999";
		t.textColor = 0x565656;
		t.y = 94.52;
		return t;
	};
	_proto.title5_i = function () {
		var t = new eui.Label();
		this.title5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "第一天";
		t.textColor = 0xA03B14;
		t.y = 17.04;
		return t;
	};
	_proto.day6_i = function () {
		var t = new eui.Group();
		this.day6 = t;
		t.x = 250;
		t.y = 140;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this.awardIcon6_i(),this.yiqiandao6_i(),this.award6_i(),this.title6_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_qiandao_goods_bg";
		t.x = 0.27;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_qiandao_num";
		t.y = 13.32;
		return t;
	};
	_proto.awardIcon6_i = function () {
		var t = new eui.Image();
		this.awardIcon6 = t;
		t.horizontalCenter = 1;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_hall_json.shop_zuanshi_icon3";
		t.y = 42.6;
		return t;
	};
	_proto.yiqiandao6_i = function () {
		var t = new eui.Image();
		this.yiqiandao6 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_yiqiandao_bg";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.award6_i = function () {
		var t = new eui.Label();
		this.award6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "x999";
		t.textColor = 0x565656;
		t.y = 94.52;
		return t;
	};
	_proto.title6_i = function () {
		var t = new eui.Label();
		this.title6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "第一天";
		t.textColor = 0xA03B14;
		t.y = 17.04;
		return t;
	};
	_proto.qiandaoBtn_i = function () {
		var t = new eui.Button();
		this.qiandaoBtn = t;
		t.label = "";
		t.x = 375;
		t.y = 140;
		t.skinName = qiandaoUI$Skin13;
		return t;
	};
	return qiandaoUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/renwu.exml'] = window.renwu = (function (_super) {
	__extends(renwu, _super);
	var renwu$Skin14 = 	(function (_super) {
		__extends(renwu$Skin14, _super);
		function renwu$Skin14() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.rewu_linqu_btn_jin")
					])
			];
		}
		var _proto = renwu$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.rewu_linqu_btn";
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
		return renwu$Skin14;
	})(eui.Skin);

	var renwu$Skin15 = 	(function (_super) {
		__extends(renwu$Skin15, _super);
		function renwu$Skin15() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.rewu_linqu_btn_jin")
					])
			];
		}
		var _proto = renwu$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.rewu_linqu_btn";
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
		return renwu$Skin15;
	})(eui.Skin);

	var renwu$Skin16 = 	(function (_super) {
		__extends(renwu$Skin16, _super);
		function renwu$Skin16() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.rewu_linqu_btn_jin")
					])
			];
		}
		var _proto = renwu$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.rewu_linqu_btn";
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
		return renwu$Skin16;
	})(eui.Skin);

	var renwu$Skin17 = 	(function (_super) {
		__extends(renwu$Skin17, _super);
		function renwu$Skin17() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.rewu_linqu_btn_jin")
					])
			];
		}
		var _proto = renwu$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.rewu_linqu_btn";
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
		return renwu$Skin17;
	})(eui.Skin);

	var renwu$Skin18 = 	(function (_super) {
		__extends(renwu$Skin18, _super);
		function renwu$Skin18() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.rewu_linqu_btn_jin")
					])
			];
		}
		var _proto = renwu$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.rewu_linqu_btn";
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
		return renwu$Skin18;
	})(eui.Skin);

	var renwu$Skin19 = 	(function (_super) {
		__extends(renwu$Skin19, _super);
		function renwu$Skin19() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.rewu_linqu_btn_jin")
					])
			];
		}
		var _proto = renwu$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.rewu_linqu_btn";
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
		return renwu$Skin19;
	})(eui.Skin);

	function renwu() {
		_super.call(this);
		this.skinParts = ["m_menban","renwuBg0","target0","complish0","renwuBtn0","yilinqu0","renwu0","renwuBg1","target1","complish1","renwuBtn1","yilinqu1","renwu1","renwuBg2","target2","complish2","renwuBtn2","yilinqu2","renwu2","renwuBg3","target3","complish3","renwuBtn3","yilinqu3","renwu3","renwuBg4","target4","complish4","renwuBtn4","yilinqu4","renwu4","renwuBg5","target5","complish5","renwuBtn5","yilinqu5","renwu5","mainGroup","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = renwu.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.mainGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_tankuang_yellow_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -34.38;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_renwu_title";
		t.y = 34.21;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.horizontalCenter = 0;
		t.y = 52.6;
		t.elementsContent = [this.renwu0_i(),this.renwu1_i(),this.renwu2_i(),this.renwu3_i(),this.renwu4_i(),this.renwu5_i()];
		return t;
	};
	_proto.renwu0_i = function () {
		var t = new eui.Group();
		this.renwu0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.renwuBg0_i(),this.target0_i(),this.complish0_i(),this.renwuBtn0_i(),this.yilinqu0_i()];
		return t;
	};
	_proto.renwuBg0_i = function () {
		var t = new eui.Image();
		this.renwuBg0 = t;
		t.source = "xll_hall_json.renwu_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.target0_i = function () {
		var t = new eui.Label();
		this.target0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "天玩20局5000金币";
		t.textColor = 0x000000;
		t.y = 21.6;
		return t;
	};
	_proto.complish0_i = function () {
		var t = new eui.Label();
		this.complish0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 19;
		t.text = "已完成20局";
		t.textColor = 0x606060;
		t.y = 59;
		return t;
	};
	_proto.renwuBtn0_i = function () {
		var t = new eui.Button();
		this.renwuBtn0 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 87.04;
		t.skinName = renwu$Skin14;
		return t;
	};
	_proto.yilinqu0_i = function () {
		var t = new eui.Image();
		this.yilinqu0 = t;
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.rewu_yilingqu";
		t.y = 90.31;
		return t;
	};
	_proto.renwu1_i = function () {
		var t = new eui.Group();
		this.renwu1 = t;
		t.x = 265;
		t.y = 0;
		t.elementsContent = [this.renwuBg1_i(),this.target1_i(),this.complish1_i(),this.renwuBtn1_i(),this.yilinqu1_i()];
		return t;
	};
	_proto.renwuBg1_i = function () {
		var t = new eui.Image();
		this.renwuBg1 = t;
		t.source = "xll_hall_json.renwu_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.target1_i = function () {
		var t = new eui.Label();
		this.target1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "每天玩20局游戏";
		t.textColor = 0x000000;
		t.y = 21.6;
		return t;
	};
	_proto.complish1_i = function () {
		var t = new eui.Label();
		this.complish1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 19;
		t.text = "已完成20局";
		t.textColor = 0x606060;
		t.y = 59;
		return t;
	};
	_proto.renwuBtn1_i = function () {
		var t = new eui.Button();
		this.renwuBtn1 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 87.04;
		t.skinName = renwu$Skin15;
		return t;
	};
	_proto.yilinqu1_i = function () {
		var t = new eui.Image();
		this.yilinqu1 = t;
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.rewu_yilingqu";
		t.y = 90.31;
		return t;
	};
	_proto.renwu2_i = function () {
		var t = new eui.Group();
		this.renwu2 = t;
		t.x = 530;
		t.y = 0;
		t.elementsContent = [this.renwuBg2_i(),this.target2_i(),this.complish2_i(),this.renwuBtn2_i(),this.yilinqu2_i()];
		return t;
	};
	_proto.renwuBg2_i = function () {
		var t = new eui.Image();
		this.renwuBg2 = t;
		t.source = "xll_hall_json.rwnwu_final_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.target2_i = function () {
		var t = new eui.Label();
		this.target2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "每天玩20局游戏";
		t.textColor = 0x000000;
		t.y = 21.6;
		return t;
	};
	_proto.complish2_i = function () {
		var t = new eui.Label();
		this.complish2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 19;
		t.text = "已完成20局";
		t.textColor = 0x606060;
		t.y = 59;
		return t;
	};
	_proto.renwuBtn2_i = function () {
		var t = new eui.Button();
		this.renwuBtn2 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 87.04;
		t.skinName = renwu$Skin16;
		return t;
	};
	_proto.yilinqu2_i = function () {
		var t = new eui.Image();
		this.yilinqu2 = t;
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.rewu_yilingqu";
		t.y = 90.31;
		return t;
	};
	_proto.renwu3_i = function () {
		var t = new eui.Group();
		this.renwu3 = t;
		t.x = 0;
		t.y = 160;
		t.elementsContent = [this.renwuBg3_i(),this.target3_i(),this.complish3_i(),this.renwuBtn3_i(),this.yilinqu3_i()];
		return t;
	};
	_proto.renwuBg3_i = function () {
		var t = new eui.Image();
		this.renwuBg3 = t;
		t.source = "xll_hall_json.renwu_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.target3_i = function () {
		var t = new eui.Label();
		this.target3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "每天玩20局游戏";
		t.textColor = 0x000000;
		t.y = 21.6;
		return t;
	};
	_proto.complish3_i = function () {
		var t = new eui.Label();
		this.complish3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 19;
		t.text = "已完成20局";
		t.textColor = 0x606060;
		t.y = 59;
		return t;
	};
	_proto.renwuBtn3_i = function () {
		var t = new eui.Button();
		this.renwuBtn3 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 87.04;
		t.skinName = renwu$Skin17;
		return t;
	};
	_proto.yilinqu3_i = function () {
		var t = new eui.Image();
		this.yilinqu3 = t;
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.rewu_yilingqu";
		t.y = 90.31;
		return t;
	};
	_proto.renwu4_i = function () {
		var t = new eui.Group();
		this.renwu4 = t;
		t.x = 265;
		t.y = 160;
		t.elementsContent = [this.renwuBg4_i(),this.target4_i(),this.complish4_i(),this.renwuBtn4_i(),this.yilinqu4_i()];
		return t;
	};
	_proto.renwuBg4_i = function () {
		var t = new eui.Image();
		this.renwuBg4 = t;
		t.source = "xll_hall_json.renwu_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.target4_i = function () {
		var t = new eui.Label();
		this.target4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "每天玩20局游戏";
		t.textColor = 0x000000;
		t.y = 21.6;
		return t;
	};
	_proto.complish4_i = function () {
		var t = new eui.Label();
		this.complish4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 19;
		t.text = "已完成20局";
		t.textColor = 0x606060;
		t.y = 59;
		return t;
	};
	_proto.renwuBtn4_i = function () {
		var t = new eui.Button();
		this.renwuBtn4 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 87.04;
		t.skinName = renwu$Skin18;
		return t;
	};
	_proto.yilinqu4_i = function () {
		var t = new eui.Image();
		this.yilinqu4 = t;
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.rewu_yilingqu";
		t.y = 90.31;
		return t;
	};
	_proto.renwu5_i = function () {
		var t = new eui.Group();
		this.renwu5 = t;
		t.x = 530;
		t.y = 160;
		t.elementsContent = [this.renwuBg5_i(),this.target5_i(),this.complish5_i(),this.renwuBtn5_i(),this.yilinqu5_i()];
		return t;
	};
	_proto.renwuBg5_i = function () {
		var t = new eui.Image();
		this.renwuBg5 = t;
		t.source = "xll_hall_json.rwnwu_final_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.target5_i = function () {
		var t = new eui.Label();
		this.target5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "每天玩20局游戏";
		t.textColor = 0x000000;
		t.y = 21.6;
		return t;
	};
	_proto.complish5_i = function () {
		var t = new eui.Label();
		this.complish5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 19;
		t.text = "已完成20局";
		t.textColor = 0x606060;
		t.y = 59;
		return t;
	};
	_proto.renwuBtn5_i = function () {
		var t = new eui.Button();
		this.renwuBtn5 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 87.04;
		t.skinName = renwu$Skin19;
		return t;
	};
	_proto.yilinqu5_i = function () {
		var t = new eui.Image();
		this.yilinqu5 = t;
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.rewu_yilingqu";
		t.y = 90.31;
		return t;
	};
	return renwu;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/tixianRecordItem.exml'] = window.tixianRecordItem = (function (_super) {
	__extends(tixianRecordItem, _super);
	function tixianRecordItem() {
		_super.call(this);
		this.skinParts = ["tixianNum","bankname","time","status"];
		
		this.height = 60;
		this.width = 490;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = tixianRecordItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.tixianNum_i(),this.bankname_i(),this.time_i(),this.status_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(13,13,26,28);
		t.source = "xll_hall_json.tuiguang_tixian_record_bg";
		t.width = 490;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tixianNum_i = function () {
		var t = new eui.Label();
		this.tixianNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "提现：800元";
		t.textColor = 0xA08C20;
		t.x = 17;
		t.y = 4;
		return t;
	};
	_proto.bankname_i = function () {
		var t = new eui.Label();
		this.bankname = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "天台农村信用合作联社";
		t.textColor = 0x87292D;
		t.x = 17;
		t.y = 36;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.size = 18;
		t.text = "2017-10-10 10:10:10";
		t.textColor = 0x887D7D;
		t.x = 311;
		t.y = 4;
		return t;
	};
	_proto.status_i = function () {
		var t = new eui.Label();
		this.status = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "提现成功";
		t.textColor = 0xff831e;
		t.x = 359;
		t.y = 28;
		return t;
	};
	return tixianRecordItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/tuiguangApplyUI.exml'] = window.tuiguangApplyUI = (function (_super) {
	__extends(tuiguangApplyUI, _super);
	var tuiguangApplyUI$Skin20 = 	(function (_super) {
		__extends(tuiguangApplyUI$Skin20, _super);
		function tuiguangApplyUI$Skin20() {
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
		var _proto = tuiguangApplyUI$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.tuiguang_apply_submit_btn";
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
		return tuiguangApplyUI$Skin20;
	})(eui.Skin);

	function tuiguangApplyUI() {
		_super.call(this);
		this.skinParts = ["m_menban","applyPeople","phone","weixin","zhushi","commitBtn","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = tuiguangApplyUI.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.commitBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_unmono_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -34.84;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_tuiguang_title";
		t.y = 35.75;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 77.2;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.applyPeople_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "xll_hall_json.tuiguang_apply_haoma";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.scale9Grid = new egret.Rectangle(8,11,29,18);
		t.source = "xll_hall_json.tuiguang_apply_juxing";
		t.width = 357;
		t.x = 113.82;
		t.y = 0;
		return t;
	};
	_proto.applyPeople_i = function () {
		var t = new eui.EditableText();
		this.applyPeople = t;
		t.height = 46;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0a0a0a;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 340;
		t.x = 120.92;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 132.2;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.phone_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "xll_hall_json.tuiguang_apply_lianxi";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.scale9Grid = new egret.Rectangle(8,11,29,18);
		t.source = "xll_hall_json.tuiguang_apply_juxing";
		t.width = 357;
		t.x = 113.82;
		t.y = 0;
		return t;
	};
	_proto.phone_i = function () {
		var t = new eui.EditableText();
		this.phone = t;
		t.height = 46;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0A0A0A;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 340;
		t.x = 120.92;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 187.2;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.weixin_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "xll_hall_json.tuiguang_apply_weixin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.scale9Grid = new egret.Rectangle(8,11,29,18);
		t.source = "xll_hall_json.tuiguang_apply_juxing";
		t.width = 357;
		t.x = 113.82;
		t.y = 0;
		return t;
	};
	_proto.weixin_i = function () {
		var t = new eui.EditableText();
		this.weixin = t;
		t.height = 46;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0A0A0A;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 340;
		t.x = 120.92;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 243.8;
		t.elementsContent = [this._Image10_i(),this.zhushi_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.tuiguang_apply_bg";
		t.width = 471;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhushi_i = function () {
		var t = new eui.Label();
		this.zhushi = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "注：请确认信息，保证联系方式畅通，1到2个工作日内会有客服联系您";
		t.textColor = 0x686868;
		t.verticalCenter = 0;
		return t;
	};
	_proto.commitBtn_i = function () {
		var t = new eui.Button();
		this.commitBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.verticalCenter = 132;
		t.skinName = tuiguangApplyUI$Skin20;
		return t;
	};
	return tuiguangApplyUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/tuiguangMainUI.exml'] = window.tuiguangMainUI = (function (_super) {
	__extends(tuiguangMainUI, _super);
	var tuiguangMainUI$Skin21 = 	(function (_super) {
		__extends(tuiguangMainUI$Skin21, _super);
		function tuiguangMainUI$Skin21() {
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
		var _proto = tuiguangMainUI$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.tuiguang_main_qcode";
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
		return tuiguangMainUI$Skin21;
	})(eui.Skin);

	var tuiguangMainUI$Skin22 = 	(function (_super) {
		__extends(tuiguangMainUI$Skin22, _super);
		function tuiguangMainUI$Skin22() {
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
		var _proto = tuiguangMainUI$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.tuiguang_main_invite_btn";
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
		return tuiguangMainUI$Skin22;
	})(eui.Skin);

	var tuiguangMainUI$Skin23 = 	(function (_super) {
		__extends(tuiguangMainUI$Skin23, _super);
		function tuiguangMainUI$Skin23() {
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
		var _proto = tuiguangMainUI$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.tuiguang_main_tixian_btn";
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
		return tuiguangMainUI$Skin23;
	})(eui.Skin);

	var tuiguangMainUI$Skin24 = 	(function (_super) {
		__extends(tuiguangMainUI$Skin24, _super);
		function tuiguangMainUI$Skin24() {
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
		var _proto = tuiguangMainUI$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.tuiguang_main_tixianjiliu_btn";
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
		return tuiguangMainUI$Skin24;
	})(eui.Skin);

	var tuiguangMainUI$Skin25 = 	(function (_super) {
		__extends(tuiguangMainUI$Skin25, _super);
		function tuiguangMainUI$Skin25() {
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
		var _proto = tuiguangMainUI$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.tuiguang_main_shouru_btn";
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
		return tuiguangMainUI$Skin25;
	})(eui.Skin);

	var tuiguangMainUI$Skin26 = 	(function (_super) {
		__extends(tuiguangMainUI$Skin26, _super);
		function tuiguangMainUI$Skin26() {
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
		var _proto = tuiguangMainUI$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.tuiguang_main_rule_btn";
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
		return tuiguangMainUI$Skin26;
	})(eui.Skin);

	function tuiguangMainUI() {
		_super.call(this);
		this.skinParts = ["m_menban","erweimaBtn","shibiema","yaoqingBtn","shibiema0","tixianBtn","shibiema1","yue","zhushi","tixianjiluBtn","shourutongjiBtn","ruleBtn","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = tuiguangMainUI.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.zhushi_i(),this._Group8_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_unmono_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -34.84;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_ongle_tuiguang_title";
		t.y = 35.75;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.56;
		t.elementsContent = [this._Image4_i(),this.erweimaBtn_i(),this.shibiema_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.source = "xll_hall_json.tuiguang_main_item_bg";
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.erweimaBtn_i = function () {
		var t = new eui.Button();
		this.erweimaBtn = t;
		t.horizontalCenter = 170.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = tuiguangMainUI$Skin21;
		return t;
	};
	_proto.shibiema_i = function () {
		var t = new eui.Label();
		this.shibiema = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "专属识别码";
		t.textColor = 0x515151;
		t.verticalCenter = 0;
		t.x = 29;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 114.56;
		t.elementsContent = [this._Image5_i(),this.yaoqingBtn_i(),this.shibiema0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.source = "xll_hall_json.tuiguang_main_item_bg";
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yaoqingBtn_i = function () {
		var t = new eui.Button();
		this.yaoqingBtn = t;
		t.horizontalCenter = 170.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = tuiguangMainUI$Skin22;
		return t;
	};
	_proto.shibiema0_i = function () {
		var t = new eui.Label();
		this.shibiema0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "邀请朋友一起玩吧";
		t.textColor = 0x515151;
		t.verticalCenter = 0;
		t.x = 29;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 174.56;
		t.elementsContent = [this._Image6_i(),this.tixianBtn_i(),this.shibiema1_i(),this.yue_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.source = "xll_hall_json.tuiguang_main_item_bg";
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tixianBtn_i = function () {
		var t = new eui.Button();
		this.tixianBtn = t;
		t.horizontalCenter = 170.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = tuiguangMainUI$Skin23;
		return t;
	};
	_proto.shibiema1_i = function () {
		var t = new eui.Label();
		this.shibiema1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "我的余额：";
		t.textColor = 0x515151;
		t.verticalCenter = 0;
		t.x = 29;
		return t;
	};
	_proto.yue_i = function () {
		var t = new eui.Label();
		this.yue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "888888";
		t.textColor = 0x770404;
		t.verticalCenter = 1.5;
		t.x = 120;
		return t;
	};
	_proto.zhushi_i = function () {
		var t = new eui.Label();
		this.zhushi = t;
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "注：每月1号和15号的00:00到23:45可提现。";
		t.textColor = 0xaca4a4;
		t.y = 232;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 320;
		t.y = 283;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.tixianjiluBtn_i()];
		return t;
	};
	_proto.tixianjiluBtn_i = function () {
		var t = new eui.Button();
		this.tixianjiluBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = tuiguangMainUI$Skin24;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this.shourutongjiBtn_i()];
		return t;
	};
	_proto.shourutongjiBtn_i = function () {
		var t = new eui.Button();
		this.shourutongjiBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = tuiguangMainUI$Skin25;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this.ruleBtn_i()];
		return t;
	};
	_proto.ruleBtn_i = function () {
		var t = new eui.Button();
		this.ruleBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = tuiguangMainUI$Skin26;
		return t;
	};
	return tuiguangMainUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/tuiguangShouruUI.exml'] = window.tuiguangShouruUI = (function (_super) {
	__extends(tuiguangShouruUI, _super);
	var tuiguangShouruUI$Skin27 = 	(function (_super) {
		__extends(tuiguangShouruUI$Skin27, _super);
		function tuiguangShouruUI$Skin27() {
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
		var _proto = tuiguangShouruUI$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.shouru_left_jiantou_btn";
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
		return tuiguangShouruUI$Skin27;
	})(eui.Skin);

	var tuiguangShouruUI$Skin28 = 	(function (_super) {
		__extends(tuiguangShouruUI$Skin28, _super);
		function tuiguangShouruUI$Skin28() {
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
		var _proto = tuiguangShouruUI$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.shouru_right_jiantou_btn";
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
		return tuiguangShouruUI$Skin28;
	})(eui.Skin);

	var tuiguangShouruUI$Skin29 = 	(function (_super) {
		__extends(tuiguangShouruUI$Skin29, _super);
		function tuiguangShouruUI$Skin29() {
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
		var _proto = tuiguangShouruUI$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.shouru_left_jiantou_btn";
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
		return tuiguangShouruUI$Skin29;
	})(eui.Skin);

	var tuiguangShouruUI$Skin30 = 	(function (_super) {
		__extends(tuiguangShouruUI$Skin30, _super);
		function tuiguangShouruUI$Skin30() {
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
		var _proto = tuiguangShouruUI$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.shouru_right_jiantou_btn";
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
		return tuiguangShouruUI$Skin30;
	})(eui.Skin);

	function tuiguangShouruUI() {
		_super.call(this);
		this.skinParts = ["m_menban","nianLeft","nianRight","nianyue","jihao","haoLeft","haoRight","dayRes","monthRes","totalRes","pwd","gameground","gameground0","income","gamename","tishi","huadongKuang","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = tuiguangShouruUI.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group8_i(),this._Group10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hall_tankuang_yellow_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 331;
		t.y = -35.97;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_shouru_title";
		t.y = 35.75;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 308;
		t.width = 240;
		t.x = 29.7;
		t.y = 54.34;
		t.elementsContent = [this._Image4_i(),this._Group2_i(),this._Group3_i(),this._Group7_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 308;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(9,8,24,24);
		t.source = "xll_hall_json.tuiguang_tixian_bg";
		t.width = 240;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 44;
		t.horizontalCenter = 0;
		t.width = 174;
		t.y = 22;
		t.elementsContent = [this._Image5_i(),this.nianLeft_i(),this.nianRight_i(),this.nianyue_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.scale9Grid = new egret.Rectangle(11,11,13,11);
		t.source = "xll_hall_json.shouru_white_bg";
		t.verticalCenter = 0;
		t.width = 174;
		t.x = 0;
		return t;
	};
	_proto.nianLeft_i = function () {
		var t = new eui.Button();
		this.nianLeft = t;
		t.label = "";
		t.left = -22;
		t.verticalCenter = 0;
		t.skinName = tuiguangShouruUI$Skin27;
		return t;
	};
	_proto.nianRight_i = function () {
		var t = new eui.Button();
		this.nianRight = t;
		t.label = "";
		t.right = -22;
		t.verticalCenter = 0;
		t.skinName = tuiguangShouruUI$Skin28;
		return t;
	};
	_proto.nianyue_i = function () {
		var t = new eui.Label();
		this.nianyue = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = ".";
		t.textColor = 0xc3544c;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 44;
		t.horizontalCenter = 0;
		t.width = 174;
		t.y = 77.33;
		t.elementsContent = [this._Image6_i(),this.jihao_i(),this.haoLeft_i(),this.haoRight_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.scale9Grid = new egret.Rectangle(11,11,13,11);
		t.source = "xll_hall_json.shouru_white_bg";
		t.verticalCenter = 0;
		t.width = 174;
		t.x = 0;
		return t;
	};
	_proto.jihao_i = function () {
		var t = new eui.Label();
		this.jihao = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = ".";
		t.textColor = 0xC3544C;
		t.verticalCenter = 0;
		return t;
	};
	_proto.haoLeft_i = function () {
		var t = new eui.Button();
		this.haoLeft = t;
		t.label = "";
		t.left = -22;
		t.verticalCenter = 0;
		t.skinName = tuiguangShouruUI$Skin29;
		return t;
	};
	_proto.haoRight_i = function () {
		var t = new eui.Button();
		this.haoRight = t;
		t.label = "";
		t.right = -22;
		t.verticalCenter = 0;
		t.skinName = tuiguangShouruUI$Skin30;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.width = 214;
		t.x = 13;
		t.y = 157.99;
		t.elementsContent = [this._Image7_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(11,11,13,11);
		t.source = "xll_hall_json.shouru_white_bg";
		t.verticalCenter = 0;
		t.width = 214;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 20;
		t.y = 18;
		t.elementsContent = [this._Label1_i(),this.dayRes_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "日总计：";
		t.textColor = 0x626262;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.dayRes_i = function () {
		var t = new eui.Label();
		this.dayRes = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = ".";
		t.textColor = 0x840000;
		t.verticalCenter = 0;
		t.x = 94.64;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 20;
		t.y = 55;
		t.elementsContent = [this._Label2_i(),this.monthRes_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "月总计：";
		t.textColor = 0x626262;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.monthRes_i = function () {
		var t = new eui.Label();
		this.monthRes = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = ".";
		t.textColor = 0x840000;
		t.verticalCenter = 0;
		t.x = 94.64;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 20;
		t.y = 92;
		t.elementsContent = [this._Label3_i(),this.totalRes_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "总收入：";
		t.textColor = 0x626262;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.totalRes_i = function () {
		var t = new eui.Label();
		this.totalRes = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = ".";
		t.textColor = 0x840000;
		t.verticalCenter = 0;
		t.x = 94.64;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 287.05;
		t.y = 54.34;
		t.elementsContent = [this._Image8_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 308;
		t.scale9Grid = new egret.Rectangle(9,8,24,24);
		t.source = "xll_hall_json.tuiguang_tixian_bg";
		t.width = 540;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 290;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 530;
		t.viewport = this.huadongKuang_i();
		return t;
	};
	_proto.huadongKuang_i = function () {
		var t = new eui.Group();
		this.huadongKuang = t;
		t.elementsContent = [this._Group9_i(),this.tishi_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 3;
		t.y = 9.33;
		t.elementsContent = [this._Image9_i(),this.pwd_i(),this.gameground_i(),this.gameground0_i(),this.income_i(),this.gamename_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 54;
		t.scale9Grid = new egret.Rectangle(14,12,34,29);
		t.source = "xll_hall_json.shouru_bg";
		t.width = 524;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "房号：999999";
		t.verticalAlign = "justify";
		t.x = 12;
		t.y = 1.67;
		return t;
	};
	_proto.gameground_i = function () {
		var t = new eui.Label();
		this.gameground = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "局数：30";
		t.verticalAlign = "justify";
		t.x = 154.95;
		t.y = 1.67;
		return t;
	};
	_proto.gameground0_i = function () {
		var t = new eui.Label();
		this.gameground0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 17;
		t.size = 18;
		t.text = "时间：2017-10-10 10:1:10";
		t.verticalAlign = "justify";
		t.y = 1.67;
		return t;
	};
	_proto.income_i = function () {
		var t = new eui.Label();
		this.income = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "收入：￥9999";
		t.textColor = 0x870900;
		t.x = 10.34;
		t.y = 26.33;
		return t;
	};
	_proto.gamename_i = function () {
		var t = new eui.Label();
		this.gamename = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "天台麻将";
		t.textColor = 0x870900;
		t.x = 394.67;
		t.y = 26.33;
		return t;
	};
	_proto.tishi_i = function () {
		var t = new eui.Label();
		this.tishi = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "暂无记录";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return tuiguangShouruUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/tuiguangTixianRecordUI.exml'] = window.tuiguangTixianRecordUI = (function (_super) {
	__extends(tuiguangTixianRecordUI, _super);
	function tuiguangTixianRecordUI() {
		_super.call(this);
		this.skinParts = ["m_menban","tixianNum","tixianNum0","time","tixianNum1","tixianNum2","time0","tishi","huadongGroup","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = tuiguangTixianRecordUI.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_unmono_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -34.84;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_txjl_title";
		t.y = 35.75;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 240;
		t.horizontalCenter = 0;
		t.width = 500;
		t.y = 65;
		t.viewport = this.huadongGroup_i();
		return t;
	};
	_proto.huadongGroup_i = function () {
		var t = new eui.Group();
		this.huadongGroup = t;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this.tishi_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 5;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.tixianNum_i(),this.tixianNum0_i(),this.time_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(13,13,26,28);
		t.source = "xll_hall_json.tuiguang_tixian_record_bg";
		t.width = 490;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tixianNum_i = function () {
		var t = new eui.Label();
		this.tixianNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "提现：800元";
		t.textColor = 0xa08c20;
		t.x = 17;
		t.y = 4;
		return t;
	};
	_proto.tixianNum0_i = function () {
		var t = new eui.Label();
		this.tixianNum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "天台农村信用合作联社";
		t.textColor = 0x87292d;
		t.x = 17;
		t.y = 36;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.size = 18;
		t.text = "2017-10-10 10:10:10";
		t.textColor = 0x887d7d;
		t.x = 311;
		t.y = 4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "提现成功";
		t.textColor = 0x109640;
		t.x = 359;
		t.y = 28;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 5;
		t.y = 65;
		t.elementsContent = [this._Image5_i(),this.tixianNum1_i(),this.tixianNum2_i(),this.time0_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(13,13,26,28);
		t.source = "xll_hall_json.tuiguang_tixian_record_bg";
		t.width = 490;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tixianNum1_i = function () {
		var t = new eui.Label();
		this.tixianNum1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "提现：800元";
		t.textColor = 0xA08C20;
		t.x = 17;
		t.y = 4;
		return t;
	};
	_proto.tixianNum2_i = function () {
		var t = new eui.Label();
		this.tixianNum2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "天台农村信用合作联社";
		t.textColor = 0x87292D;
		t.x = 17;
		t.y = 36;
		return t;
	};
	_proto.time0_i = function () {
		var t = new eui.Label();
		this.time0 = t;
		t.size = 18;
		t.text = "2017-10-10 10:10:10";
		t.textColor = 0x887D7D;
		t.x = 311;
		t.y = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "提现成功";
		t.textColor = 0x109640;
		t.x = 359;
		t.y = 28;
		return t;
	};
	_proto.tishi_i = function () {
		var t = new eui.Label();
		this.tishi = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "暂无提现记录";
		t.textColor = 0x232323;
		t.verticalCenter = 0;
		return t;
	};
	return tuiguangTixianRecordUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/tuiguangTixianRuleUI.exml'] = window.tuiguangTixianRuleUI = (function (_super) {
	__extends(tuiguangTixianRuleUI, _super);
	function tuiguangTixianRuleUI() {
		_super.call(this);
		this.skinParts = ["m_menban","ruletext","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = tuiguangTixianRuleUI.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = -1;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.ruletext_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_unmono_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -34.84;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_rule_title";
		t.y = 35.75;
		return t;
	};
	_proto.ruletext_i = function () {
		var t = new eui.Label();
		this.ruletext = t;
		t.height = 250;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "提心规则提心规提心规则提心规则提心规则提心规则则提提心规则提心规则";
		t.textColor = 0x000000;
		t.width = 500;
		t.y = 66;
		return t;
	};
	return tuiguangTixianRuleUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/tuiguangTixianUI.exml'] = window.tuiguangTixianUI = (function (_super) {
	__extends(tuiguangTixianUI, _super);
	var tuiguangTixianUI$Skin31 = 	(function (_super) {
		__extends(tuiguangTixianUI$Skin31, _super);
		function tuiguangTixianUI$Skin31() {
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
		var _proto = tuiguangTixianUI$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.tuiguang_tixian_btn";
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
		return tuiguangTixianUI$Skin31;
	})(eui.Skin);

	function tuiguangTixianUI() {
		_super.call(this);
		this.skinParts = ["m_menban","tixianjine","kaihu","kahao","zhanghu","commitBtn","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.mainContent_i()];
	}
	var _proto = tuiguangTixianUI.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.commitBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_unmono_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -34.84;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_tixiang_title";
		t.y = 35.75;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 62;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.tixianjine_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "xll_hall_json.tuiguang_tixian_title";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.scale9Grid = new egret.Rectangle(8,11,29,18);
		t.source = "xll_hall_json.tuiguang_apply_juxing";
		t.width = 357;
		t.x = 113.82;
		t.y = 0;
		return t;
	};
	_proto.tixianjine_i = function () {
		var t = new eui.EditableText();
		this.tixianjine = t;
		t.height = 46;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0A0A0A;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 340;
		t.x = 120.92;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 117;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.kaihu_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "xll_hall_json.tuiguang_tixian_kaihua_title";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.scale9Grid = new egret.Rectangle(8,11,29,18);
		t.source = "xll_hall_json.tuiguang_apply_juxing";
		t.width = 357;
		t.x = 113.82;
		t.y = 0;
		return t;
	};
	_proto.kaihu_i = function () {
		var t = new eui.EditableText();
		this.kaihu = t;
		t.height = 46;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0A0A0A;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 340;
		t.x = 120.92;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 172;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.kahao_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "xll_hall_json.tuiguang_tixian_tixian_banker_title";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.scale9Grid = new egret.Rectangle(8,11,29,18);
		t.source = "xll_hall_json.tuiguang_apply_juxing";
		t.width = 357;
		t.x = 113.82;
		t.y = 0;
		return t;
	};
	_proto.kahao_i = function () {
		var t = new eui.EditableText();
		this.kahao = t;
		t.height = 46;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0A0A0A;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 340;
		t.x = 120.92;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 228.04;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this.zhanghu_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "xll_hall_json.tuiguang_zhanghu_title";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 46;
		t.scale9Grid = new egret.Rectangle(8,11,29,18);
		t.source = "xll_hall_json.tuiguang_apply_juxing";
		t.width = 357;
		t.x = 113.82;
		t.y = 0;
		return t;
	};
	_proto.zhanghu_i = function () {
		var t = new eui.EditableText();
		this.zhanghu = t;
		t.height = 46;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0A0A0A;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 340;
		t.x = 120.92;
		return t;
	};
	_proto.commitBtn_i = function () {
		var t = new eui.Button();
		this.commitBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.verticalCenter = 132;
		t.skinName = tuiguangTixianUI$Skin31;
		return t;
	};
	return tuiguangTixianUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/tuiguangsShoruItemUI.exml'] = window.tuiguangsShoruItemUI = (function (_super) {
	__extends(tuiguangsShoruItemUI, _super);
	function tuiguangsShoruItemUI() {
		_super.call(this);
		this.skinParts = ["pwd","gameground","time","income","gamename"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = tuiguangsShoruItemUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.pwd_i(),this.gameground_i(),this.time_i(),this.income_i(),this.gamename_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 54;
		t.scale9Grid = new egret.Rectangle(14,12,34,29);
		t.source = "xll_hall_json.shouru_bg";
		t.width = 524;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "房号：999999";
		t.verticalAlign = "justify";
		t.x = 12;
		t.y = 1.67;
		return t;
	};
	_proto.gameground_i = function () {
		var t = new eui.Label();
		this.gameground = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "局数：30";
		t.verticalAlign = "justify";
		t.x = 154.95;
		t.y = 1.67;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 17;
		t.size = 18;
		t.text = "时间：2017-10-10 10:1:10";
		t.verticalAlign = "justify";
		t.y = 1.67;
		return t;
	};
	_proto.income_i = function () {
		var t = new eui.Label();
		this.income = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "收入：￥9999";
		t.textColor = 0x870900;
		t.x = 10.34;
		t.y = 26.33;
		return t;
	};
	_proto.gamename_i = function () {
		var t = new eui.Label();
		this.gamename = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "天台麻将";
		t.textColor = 0x870900;
		t.x = 394.67;
		t.y = 26.33;
		return t;
	};
	return tuiguangsShoruItemUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/comingItem.exml'] = window.comingItem = (function (_super) {
	__extends(comingItem, _super);
	function comingItem() {
		_super.call(this);
		this.skinParts = ["head","nickname","time","msg"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = comingItem.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 46;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.nickname_i(),this.time_i(),this.msg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,13,11,12);
		t.source = "xll_game_json.game_xiaoxi_huibg";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.head_i(),this._Image2_i()];
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.x = 50;
		t.y = 1.8;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 13;
		t.text = "2017-10-10 10:10:10";
		t.textColor = 0xC15151;
		t.x = 50;
		t.y = 16.53;
		return t;
	};
	_proto.msg_i = function () {
		var t = new eui.Label();
		this.msg = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 13;
		t.text = "进入了房间";
		t.textColor = 0x08044F;
		t.x = 50;
		t.y = 30.19;
		return t;
	};
	return comingItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/createHzmj.exml'] = window.createHzmj = (function (_super) {
	__extends(createHzmj, _super);
	var createHzmj$Skin32 = 	(function (_super) {
		__extends(createHzmj$Skin32, _super);
		function createHzmj$Skin32() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin32;
	})(eui.Skin);

	var createHzmj$Skin33 = 	(function (_super) {
		__extends(createHzmj$Skin33, _super);
		function createHzmj$Skin33() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin33;
	})(eui.Skin);

	var createHzmj$Skin34 = 	(function (_super) {
		__extends(createHzmj$Skin34, _super);
		function createHzmj$Skin34() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin34;
	})(eui.Skin);

	var createHzmj$Skin35 = 	(function (_super) {
		__extends(createHzmj$Skin35, _super);
		function createHzmj$Skin35() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin35;
	})(eui.Skin);

	var createHzmj$Skin36 = 	(function (_super) {
		__extends(createHzmj$Skin36, _super);
		function createHzmj$Skin36() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin36;
	})(eui.Skin);

	var createHzmj$Skin37 = 	(function (_super) {
		__extends(createHzmj$Skin37, _super);
		function createHzmj$Skin37() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin37;
	})(eui.Skin);

	var createHzmj$Skin38 = 	(function (_super) {
		__extends(createHzmj$Skin38, _super);
		function createHzmj$Skin38() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin38;
	})(eui.Skin);

	var createHzmj$Skin39 = 	(function (_super) {
		__extends(createHzmj$Skin39, _super);
		function createHzmj$Skin39() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin39;
	})(eui.Skin);

	var createHzmj$Skin40 = 	(function (_super) {
		__extends(createHzmj$Skin40, _super);
		function createHzmj$Skin40() {
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
						new eui.SetProperty("_Image1","source","xll_hall_json.hall_create_danxuan_btn1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createHzmj$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_danxuan_btn0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 25;
			t.textColor = 0x573c7f;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createHzmj$Skin40;
	})(eui.Skin);

	var createHzmj$Skin41 = 	(function (_super) {
		__extends(createHzmj$Skin41, _super);
		function createHzmj$Skin41() {
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
		var _proto = createHzmj$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_create_create_btn";
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
		return createHzmj$Skin41;
	})(eui.Skin);

	function createHzmj() {
		_super.call(this);
		this.skinParts = ["m_menban","m_gameground1","m_gameground2","m_gameground","m_peoplecount1","m_peoplecount0","m_peoplecount","m_hushu0","m_hushu1","m_hushu","m_maima0","m_maima1","m_maima2","m_maima","m_showtip","m_create","m_mianban"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_menban_i(),this.m_mianban_i()];
	}
	var _proto = createHzmj.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.m_mianban_i = function () {
		var t = new eui.Group();
		this.m_mianban = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.m_gameground_i(),this.m_peoplecount_i(),this.m_hushu_i(),this.m_maima_i(),this._Group1_i(),this.m_create_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,88,476,310);
		t.scaleY = 1.04;
		t.source = "hall_create_bg_png";
		t.y = 0;
		return t;
	};
	_proto.m_gameground_i = function () {
		var t = new eui.Group();
		this.m_gameground = t;
		t.x = 126;
		t.y = 81.72;
		t.elementsContent = [this.m_gameground1_i(),this.m_gameground2_i()];
		return t;
	};
	_proto.m_gameground1_i = function () {
		var t = new eui.RadioButton();
		this.m_gameground1 = t;
		t.enabled = true;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "";
		t.selected = true;
		t.value = "16";
		t.width = 47;
		t.x = 0;
		t.y = 0;
		t.skinName = createHzmj$Skin32;
		return t;
	};
	_proto.m_gameground2_i = function () {
		var t = new eui.RadioButton();
		this.m_gameground2 = t;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "";
		t.selected = false;
		t.value = "32";
		t.width = 47;
		t.x = 145;
		t.y = 0;
		t.skinName = createHzmj$Skin33;
		return t;
	};
	_proto.m_peoplecount_i = function () {
		var t = new eui.Group();
		this.m_peoplecount = t;
		t.x = 126;
		t.y = 141.72;
		t.elementsContent = [this.m_peoplecount1_i(),this.m_peoplecount0_i()];
		return t;
	};
	_proto.m_peoplecount1_i = function () {
		var t = new eui.RadioButton();
		this.m_peoplecount1 = t;
		t.groupName = "m_peoplecount";
		t.height = 47;
		t.label = "";
		t.selected = true;
		t.value = "3";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 0;
		t.skinName = createHzmj$Skin34;
		return t;
	};
	_proto.m_peoplecount0_i = function () {
		var t = new eui.RadioButton();
		this.m_peoplecount0 = t;
		t.groupName = "m_peoplecount";
		t.height = 47;
		t.label = "";
		t.selected = false;
		t.value = "2";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 145;
		t.skinName = createHzmj$Skin35;
		return t;
	};
	_proto.m_hushu_i = function () {
		var t = new eui.Group();
		this.m_hushu = t;
		t.x = 126;
		t.y = 196.31;
		t.elementsContent = [this.m_hushu0_i(),this.m_hushu1_i()];
		return t;
	};
	_proto.m_hushu0_i = function () {
		var t = new eui.RadioButton();
		this.m_hushu0 = t;
		t.enabled = true;
		t.groupName = "m_jiafan";
		t.height = 47;
		t.label = "";
		t.selected = false;
		t.top = 0;
		t.value = "300";
		t.width = 47;
		t.x = 0;
		t.skinName = createHzmj$Skin36;
		return t;
	};
	_proto.m_hushu1_i = function () {
		var t = new eui.RadioButton();
		this.m_hushu1 = t;
		t.groupName = "m_jiafan";
		t.height = 47;
		t.label = "";
		t.selected = true;
		t.value = "500";
		t.width = 47;
		t.x = 145;
		t.y = 0;
		t.skinName = createHzmj$Skin37;
		return t;
	};
	_proto.m_maima_i = function () {
		var t = new eui.Group();
		this.m_maima = t;
		t.x = 126;
		t.y = 252.39;
		t.elementsContent = [this.m_maima0_i(),this.m_maima1_i(),this.m_maima2_i()];
		return t;
	};
	_proto.m_maima0_i = function () {
		var t = new eui.RadioButton();
		this.m_maima0 = t;
		t.enabled = true;
		t.groupName = "m_maxScore";
		t.height = 47;
		t.label = "";
		t.selected = true;
		t.top = 0;
		t.value = "0";
		t.width = 47;
		t.x = 0;
		t.skinName = createHzmj$Skin38;
		return t;
	};
	_proto.m_maima1_i = function () {
		var t = new eui.RadioButton();
		this.m_maima1 = t;
		t.alpha = 0.3;
		t.groupName = "m_maxScore";
		t.height = 47;
		t.label = "";
		t.value = "1";
		t.width = 47;
		t.x = 145;
		t.y = 0;
		t.skinName = createHzmj$Skin39;
		return t;
	};
	_proto.m_maima2_i = function () {
		var t = new eui.RadioButton();
		this.m_maima2 = t;
		t.alpha = 0.3;
		t.groupName = "m_maxScore";
		t.height = 47;
		t.label = "";
		t.value = "2";
		t.width = 47;
		t.x = 285;
		t.y = 0;
		t.skinName = createHzmj$Skin40;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 54.7;
		t.y = 447.01;
		t.elementsContent = [this.m_showtip_i()];
		return t;
	};
	_proto.m_showtip_i = function () {
		var t = new eui.Label();
		this.m_showtip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 21;
		t.text = "开房无消耗，坐下后扣除40钻石，未开局则返还。";
		t.textColor = 0x005c91;
		t.y = -121;
		return t;
	};
	_proto.m_create_i = function () {
		var t = new eui.Button();
		this.m_create = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 31;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 401.23;
		t.skinName = createHzmj$Skin41;
		return t;
	};
	return createHzmj;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/hzmjIndex.exml'] = window.hzmjIndex = (function (_super) {
	__extends(hzmjIndex, _super);
	var hzmjIndex$Skin42 = 	(function (_super) {
		__extends(hzmjIndex$Skin42, _super);
		function hzmjIndex$Skin42() {
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
		var _proto = hzmjIndex$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_menu_btn";
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
		return hzmjIndex$Skin42;
	})(eui.Skin);

	var hzmjIndex$Skin43 = 	(function (_super) {
		__extends(hzmjIndex$Skin43, _super);
		function hzmjIndex$Skin43() {
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
		var _proto = hzmjIndex$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_xiaoxi_jilu_btn";
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
		return hzmjIndex$Skin43;
	})(eui.Skin);

	var hzmjIndex$Skin44 = 	(function (_super) {
		__extends(hzmjIndex$Skin44, _super);
		function hzmjIndex$Skin44() {
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
		var _proto = hzmjIndex$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_dingwei_btn";
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
		return hzmjIndex$Skin44;
	})(eui.Skin);

	var hzmjIndex$Skin45 = 	(function (_super) {
		__extends(hzmjIndex$Skin45, _super);
		function hzmjIndex$Skin45() {
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
		var _proto = hzmjIndex$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.hzmj_cardBtn";
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
		return hzmjIndex$Skin45;
	})(eui.Skin);

	var hzmjIndex$Skin46 = 	(function (_super) {
		__extends(hzmjIndex$Skin46, _super);
		function hzmjIndex$Skin46() {
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
		var _proto = hzmjIndex$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.HJMJbtn_type1";
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
		return hzmjIndex$Skin46;
	})(eui.Skin);

	var hzmjIndex$Skin47 = 	(function (_super) {
		__extends(hzmjIndex$Skin47, _super);
		function hzmjIndex$Skin47() {
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
		var _proto = hzmjIndex$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type2";
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
		return hzmjIndex$Skin47;
	})(eui.Skin);

	var hzmjIndex$Skin48 = 	(function (_super) {
		__extends(hzmjIndex$Skin48, _super);
		function hzmjIndex$Skin48() {
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
		var _proto = hzmjIndex$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type3";
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
		return hzmjIndex$Skin48;
	})(eui.Skin);

	var hzmjIndex$Skin49 = 	(function (_super) {
		__extends(hzmjIndex$Skin49, _super);
		function hzmjIndex$Skin49() {
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
		var _proto = hzmjIndex$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type4";
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
		return hzmjIndex$Skin49;
	})(eui.Skin);

	var hzmjIndex$Skin50 = 	(function (_super) {
		__extends(hzmjIndex$Skin50, _super);
		function hzmjIndex$Skin50() {
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
		var _proto = hzmjIndex$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type5";
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
		return hzmjIndex$Skin50;
	})(eui.Skin);

	var hzmjIndex$Skin51 = 	(function (_super) {
		__extends(hzmjIndex$Skin51, _super);
		function hzmjIndex$Skin51() {
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
		var _proto = hzmjIndex$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex$Skin51;
	})(eui.Skin);

	var hzmjIndex$Skin52 = 	(function (_super) {
		__extends(hzmjIndex$Skin52, _super);
		function hzmjIndex$Skin52() {
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
		var _proto = hzmjIndex$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_invite_btn";
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
		return hzmjIndex$Skin52;
	})(eui.Skin);

	var hzmjIndex$Skin53 = 	(function (_super) {
		__extends(hzmjIndex$Skin53, _super);
		function hzmjIndex$Skin53() {
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
		var _proto = hzmjIndex$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.nn_btn_start";
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
		return hzmjIndex$Skin53;
	})(eui.Skin);

	var hzmjIndex$Skin54 = 	(function (_super) {
		__extends(hzmjIndex$Skin54, _super);
		function hzmjIndex$Skin54() {
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
		var _proto = hzmjIndex$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_ready_btn";
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
		return hzmjIndex$Skin54;
	})(eui.Skin);

	var hzmjIndex$Skin55 = 	(function (_super) {
		__extends(hzmjIndex$Skin55, _super);
		function hzmjIndex$Skin55() {
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
		var _proto = hzmjIndex$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hamj_btn_js";
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
		return hzmjIndex$Skin55;
	})(eui.Skin);

	var hzmjIndex$Skin56 = 	(function (_super) {
		__extends(hzmjIndex$Skin56, _super);
		function hzmjIndex$Skin56() {
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
		var _proto = hzmjIndex$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.game_chat_btn";
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
		return hzmjIndex$Skin56;
	})(eui.Skin);

	var hzmjIndex$Skin57 = 	(function (_super) {
		__extends(hzmjIndex$Skin57, _super);
		function hzmjIndex$Skin57() {
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
		var _proto = hzmjIndex$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_zqpg_title";
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
		return hzmjIndex$Skin57;
	})(eui.Skin);

	var hzmjIndex$Skin58 = 	(function (_super) {
		__extends(hzmjIndex$Skin58, _super);
		function hzmjIndex$Skin58() {
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
		var _proto = hzmjIndex$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_rule_title";
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
		return hzmjIndex$Skin58;
	})(eui.Skin);

	var hzmjIndex$Skin59 = 	(function (_super) {
		__extends(hzmjIndex$Skin59, _super);
		function hzmjIndex$Skin59() {
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
		var _proto = hzmjIndex$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_sqjs_title";
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
		return hzmjIndex$Skin59;
	})(eui.Skin);

	var hzmjIndex$Skin60 = 	(function (_super) {
		__extends(hzmjIndex$Skin60, _super);
		function hzmjIndex$Skin60() {
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
		var _proto = hzmjIndex$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_fhdt_title";
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
		return hzmjIndex$Skin60;
	})(eui.Skin);

	var hzmjIndex$Skin61 = 	(function (_super) {
		__extends(hzmjIndex$Skin61, _super);
		function hzmjIndex$Skin61() {
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
		var _proto = hzmjIndex$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_cebian_set_title";
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
		return hzmjIndex$Skin61;
	})(eui.Skin);

	var hzmjIndex$Skin62 = 	(function (_super) {
		__extends(hzmjIndex$Skin62, _super);
		function hzmjIndex$Skin62() {
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
		var _proto = hzmjIndex$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.game_yy_btn";
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
		return hzmjIndex$Skin62;
	})(eui.Skin);

	function hzmjIndex() {
		_super.call(this);
		this.skinParts = ["ownhua0","ownhuaGroup0","nohua0","nohuaGrpup0","huaGoup0","ownhua1","ownhuaGroup1","nohua1","nohuaGrpup1","huaGoup1","ownhua2","ownhuaGroup2","nohua2","nohuaGrpup2","huaGoup2","ownhua3","ownhuaGroup3","nohua3","nohuaGrpup3","huaGoup3","huaCard00","huaCard01","huaCard02","huaCard03","huaCard04","huaCard05","huaCard06","huaCard07","huaCardGroup0","huaCard17","huaCard16","huaCard15","huaCard14","huaCard13","huaCard12","huaCard11","huaCard10","huaCardGroup1","huaCard27","huaCard26","huaCard25","huaCard24","huaCard23","huaCard22","huaCard21","huaCard20","huaCardGroup2","huaCard30","huaCard31","huaCard32","huaCard33","huaCard34","huaCard35","huaCard36","huaCard37","huaCardGroup3","menu","playerBtn","havePeopleComing","locationBtn","headImg4","roomOwner4","zhuang4","headbox4","nickname4","score4","headImg1","roomOwner1","zhuang1","headbox1","nickname1","score1","headImg2","roomOwner2","zhuang2","headbox2","nickname2","score2","headImg3","roomOwner3","zhuang3","headbox3","nickname3","score3","positionBg","position3","position1","position0","position2","daojishi","restMaCardNum","restMaCardGroup","huNum","hunumGroup","dirGroup","ready0","ready1","ready3","ready2","roompwd","jushu","showFJGroup","ruleBtnT","handCard00","handCard01","handCard02","handCard03","handCard04","handCard05","handCard06","handCard07","handCard08","handCard09","handCard010","handCard011","handCard012","moCard0","HandCard0","moCard1","handCard112","handCard111","handCard110","handCard19","handCard18","handCard17","handCard16","handCard15","handCard14","handCard13","handCard12","handCard11","handCard10","HandCard1","moCard2","handCard212","handCard211","handCard210","handCard29","handCard28","handCard27","handCard26","handCard25","handCard24","handCard23","handCard22","handCard21","handCard20","HandCard2","handCard30","handCard31","handCard32","handCard33","handCard34","handCard35","handCard36","handCard37","handCard38","handCard39","handCard310","handCard311","handCard312","moCard3","HandCard3","outCard033","outCard034","outCard035","outCard036","outCard037","outCard038","outCard039","outCard040","outCard041","outCard042","outCard043","outCard022","outCard023","outCard024","outCard025","outCard026","outCard027","outCard028","outCard029","outCard030","outCard031","outCard032","outCard011","outCard012","outCard013","outCard014","outCard015","outCard016","outCard017","outCard018","outCard019","outCard020","outCard021","outCard00","outCard01","outCard02","outCard03","outCard04","outCard05","outCard06","outCard07","outCard08","outCard09","outCard010","outCard0","outCard210","outCard29","outCard28","outCard27","outCard26","outCard25","outCard24","outCard23","outCard22","outCard21","outCard20","outCard221","outCard220","outCard219","outCard218","outCard217","outCard216","outCard215","outCard214","outCard213","outCard212","outCard211","outCard232","outCard231","outCard230","outCard229","outCard228","outCard227","outCard226","outCard225","outCard224","outCard223","outCard222","outCard243","outCard242","outCard241","outCard240","outCard239","outCard238","outCard237","outCard236","outCard235","outCard234","outCard233","outCard2","outCard133","outCard134","outCard135","outCard136","outCard137","outCard138","outCard139","outCard140","outCard141","outCard142","outCard143","outCard132","outCard131","outCard130","outCard129","outCard128","outCard127","outCard126","outCard125","outCard124","outCard123","outCard122","outCard121","outCard120","outCard119","outCard118","outCard117","outCard116","outCard115","outCard114","outCard113","outCard112","outCard111","outCard110","outCard19","outCard18","outCard17","outCard16","outCard15","outCard14","outCard13","outCard12","outCard11","outCard10","outCard1","outCard30","outCard31","outCard32","outCard33","outCard34","outCard35","outCard36","outCard37","outCard38","outCard39","outCard310","outCard311","outCard312","outCard313","outCard314","outCard315","outCard316","outCard317","outCard318","outCard319","outCard320","outCard321","outCard322","outCard323","outCard324","outCard325","outCard326","outCard327","outCard328","outCard329","outCard330","outCard331","outCard332","outCard333","outCard334","outCard335","outCard336","outCard337","outCard338","outCard339","outCard340","outCard341","outCard342","outCard343","outCard3","actioncard000","actioncard001","actioncard002","actioncard003","actionItem00","actioncard010","actioncard011","actioncard012","actioncard013","actionItem01","actioncard020","actioncard021","actioncard022","actioncard023","actionItem02","actioncard030","actioncard031","actioncard032","actioncard033","actionItem03","actionCardGroud0","actioncard200","actioncard201","actioncard202","actioncard203","actionItem20","actioncard210","actioncard211","actioncard212","actioncard213","actionItem21","actioncard220","actioncard221","actioncard222","actioncard223","actionItem22","actioncard230","actioncard231","actioncard232","actioncard233","actionItem23","actionCardGroud2","actioncard300","actioncard301","actioncard302","actioncard303","actionItem30","actioncard310","actioncard311","actioncard312","actioncard313","actionItem31","actioncard320","actioncard321","actioncard322","actioncard323","actionItem32","actioncard330","actioncard331","actioncard332","actioncard333","actionItem33","actionCardGroud3","actioncard132","actioncard131","actioncard130","actioncard133","actionItem13","actioncard122","actioncard121","actioncard120","actioncard123","actionItem12","actioncard112","actioncard111","actioncard110","actioncard113","actionItem11","actioncard102","actioncard101","actioncard100","actioncard103","actionItem10","actionCardGroud1","dimissProcess","dismissGroup","whoJoin","joinNotice","yaoqing","actionBtn0","actionBtnGroup0","actionBtn1","card10","actionBtnGroup1","actionBtn2","card20","actionBtnGroup2","actionBtn3","card30","actionBtnGroup3","actionBtn4","card40","actionBtnGroup4","actionBtn5","actionBtnGroup5","actiopnGroup","inviteBtn","inviteBtnGroup","startBtn","startBtnGroup","readyBtn","readyBtnGroup","ready_disband","menban0","ruleMenabn","roomPwdRule","playcount","peopleCount","wanfaText","laoqi","jiafan","fending","roomRuleUI","xiaoxi","xxGroup","situp","wanfa","diaband","backHallBtn","setting","menulist","roomOwnerText","roomLifeNotice","showRule","waitGameStart","comePeopleList","watchingPeopleList","joinXiaoxiGroup","luyingNotice","lyNoticeGroup","voiceplay","yyGroup","voice1","voice2","voice3","voice4","luying","chiCard02","chiCard01","chiCard00","chi0","chiCard12","chiCard11","chiCard10","chi1","chiCard22","chiCard21","chiCard20","chi2","selectedChi","gang3","gang2","gang1","gang0","selectedGang","gang7","gang6","gang5","gang4","gang8","gang9","gang10","gang11","gang12","gang13","actionShowCardGroup","actionShowTitle","actionShow","juhua","waitConnect","menban"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this.huaGoup0_i(),this.huaGoup1_i(),this.huaGoup2_i(),this.huaGoup3_i(),this.huaCardGroup0_i(),this.huaCardGroup1_i(),this.huaCardGroup2_i(),this.huaCardGroup3_i(),this._Group4_i(),this._Group5_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this.dirGroup_i(),this.ready0_i(),this.ready1_i(),this.ready3_i(),this.ready2_i(),this.showFJGroup_i(),this.ruleBtnT_i(),this.HandCard0_i(),this.HandCard1_i(),this.HandCard2_i(),this.HandCard3_i(),this.outCard0_i(),this.outCard2_i(),this.outCard1_i(),this.outCard3_i(),this.actionCardGroud0_i(),this.actionCardGroud2_i(),this.actionCardGroud3_i(),this.actionCardGroud1_i(),this.dismissGroup_i(),this.joinNotice_i(),this.yaoqing_i(),this.actiopnGroup_i(),this.inviteBtnGroup_i(),this.startBtnGroup_i(),this.readyBtnGroup_i(),this.ready_disband_i(),this.menban0_i(),this.roomRuleUI_i(),this.xxGroup_i(),this.menulist_i(),this.waitGameStart_i(),this.joinXiaoxiGroup_i(),this.yyGroup_i(),this.luying_i(),this.actionShow_i(),this.waitConnect_i(),this.menban_i()];
	}
	var _proto = hzmjIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "ttmj_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaGoup0_i = function () {
		var t = new eui.Group();
		this.huaGoup0 = t;
		t.height = 55;
		t.visible = false;
		t.width = 58;
		t.x = 163.12;
		t.y = 436.75;
		t.elementsContent = [this.ownhuaGroup0_i(),this.nohuaGrpup0_i()];
		return t;
	};
	_proto.ownhuaGroup0_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup0 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.ownhua0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_menfen";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.ownhua0_i = function () {
		var t = new eui.Label();
		this.ownhua0 = t;
		t.size = 18;
		t.text = "x10";
		t.verticalCenter = 0.5;
		t.x = 25;
		return t;
	};
	_proto.nohuaGrpup0_i = function () {
		var t = new eui.Group();
		this.nohuaGrpup0 = t;
		t.horizontalCenter = 0;
		t.y = 22.69;
		t.elementsContent = [this._Image3_i(),this.nohua0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_hua";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.nohua0_i = function () {
		var t = new eui.Label();
		this.nohua0 = t;
		t.size = 18;
		t.text = "x10";
		t.verticalAlign = "justify";
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.huaGoup1_i = function () {
		var t = new eui.Group();
		this.huaGoup1 = t;
		t.height = 55;
		t.visible = false;
		t.width = 58;
		t.x = 985.09;
		t.y = 314.44;
		t.elementsContent = [this.ownhuaGroup1_i(),this.nohuaGrpup1_i()];
		return t;
	};
	_proto.ownhuaGroup1_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup1 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.ownhua1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_menfen";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.ownhua1_i = function () {
		var t = new eui.Label();
		this.ownhua1 = t;
		t.size = 18;
		t.text = "x10";
		t.verticalCenter = 0.5;
		t.x = 25;
		return t;
	};
	_proto.nohuaGrpup1_i = function () {
		var t = new eui.Group();
		this.nohuaGrpup1 = t;
		t.horizontalCenter = 0;
		t.y = 21.33;
		t.elementsContent = [this._Image5_i(),this.nohua1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_hua";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.nohua1_i = function () {
		var t = new eui.Label();
		this.nohua1 = t;
		t.size = 18;
		t.text = "x10";
		t.verticalAlign = "justify";
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.huaGoup2_i = function () {
		var t = new eui.Group();
		this.huaGoup2 = t;
		t.visible = false;
		t.x = 373.48;
		t.y = 76.98;
		t.elementsContent = [this.ownhuaGroup2_i(),this.nohuaGrpup2_i()];
		return t;
	};
	_proto.ownhuaGroup2_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup2 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.ownhua2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_menfen";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.ownhua2_i = function () {
		var t = new eui.Label();
		this.ownhua2 = t;
		t.size = 18;
		t.text = "x10";
		t.verticalCenter = 0.5;
		t.x = 25;
		return t;
	};
	_proto.nohuaGrpup2_i = function () {
		var t = new eui.Group();
		this.nohuaGrpup2 = t;
		t.x = 59.34;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.nohua2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_hua";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.nohua2_i = function () {
		var t = new eui.Label();
		this.nohua2 = t;
		t.size = 18;
		t.text = "x10";
		t.verticalAlign = "justify";
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.huaGoup3_i = function () {
		var t = new eui.Group();
		this.huaGoup3 = t;
		t.height = 55;
		t.visible = false;
		t.width = 58;
		t.x = 39.48;
		t.y = 316.42;
		t.elementsContent = [this.ownhuaGroup3_i(),this.nohuaGrpup3_i()];
		return t;
	};
	_proto.ownhuaGroup3_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup3 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.ownhua3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_menfen";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.ownhua3_i = function () {
		var t = new eui.Label();
		this.ownhua3 = t;
		t.size = 18;
		t.text = "x10";
		t.verticalCenter = 0.5;
		t.x = 25;
		return t;
	};
	_proto.nohuaGrpup3_i = function () {
		var t = new eui.Group();
		this.nohuaGrpup3 = t;
		t.horizontalCenter = 0;
		t.y = 21.34;
		t.elementsContent = [this._Image9_i(),this.nohua3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_hua";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.nohua3_i = function () {
		var t = new eui.Label();
		this.nohua3 = t;
		t.size = 18;
		t.text = "x10";
		t.verticalAlign = "justify";
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.huaCardGroup0_i = function () {
		var t = new eui.Group();
		this.huaCardGroup0 = t;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.visible = false;
		t.x = 154.49;
		t.y = 480.85;
		t.elementsContent = [this.huaCard00_i(),this.huaCard01_i(),this.huaCard02_i(),this.huaCard03_i(),this.huaCard04_i(),this.huaCard05_i(),this.huaCard06_i(),this.huaCard07_i()];
		return t;
	};
	_proto.huaCard00_i = function () {
		var t = new eui.Image();
		this.huaCard00 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard01_i = function () {
		var t = new eui.Image();
		this.huaCard01 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.huaCard02_i = function () {
		var t = new eui.Image();
		this.huaCard02 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.huaCard03_i = function () {
		var t = new eui.Image();
		this.huaCard03 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.huaCard04_i = function () {
		var t = new eui.Image();
		this.huaCard04 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.huaCard05_i = function () {
		var t = new eui.Image();
		this.huaCard05 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.huaCard06_i = function () {
		var t = new eui.Image();
		this.huaCard06 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.huaCard07_i = function () {
		var t = new eui.Image();
		this.huaCard07 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.huaCardGroup1_i = function () {
		var t = new eui.Group();
		this.huaCardGroup1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 856.46;
		t.y = 136.5;
		t.elementsContent = [this.huaCard17_i(),this.huaCard16_i(),this.huaCard15_i(),this.huaCard14_i(),this.huaCard13_i(),this.huaCard12_i(),this.huaCard11_i(),this.huaCard10_i()];
		return t;
	};
	_proto.huaCard17_i = function () {
		var t = new eui.Image();
		this.huaCard17 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.huaCard16_i = function () {
		var t = new eui.Image();
		this.huaCard16 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.huaCard15_i = function () {
		var t = new eui.Image();
		this.huaCard15 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.huaCard14_i = function () {
		var t = new eui.Image();
		this.huaCard14 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.huaCard13_i = function () {
		var t = new eui.Image();
		this.huaCard13 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.huaCard12_i = function () {
		var t = new eui.Image();
		this.huaCard12 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.huaCard11_i = function () {
		var t = new eui.Image();
		this.huaCard11 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.huaCard10_i = function () {
		var t = new eui.Image();
		this.huaCard10 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto.huaCardGroup2_i = function () {
		var t = new eui.Group();
		this.huaCardGroup2 = t;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.visible = false;
		t.x = 501.25;
		t.y = 74.55;
		t.elementsContent = [this.huaCard27_i(),this.huaCard26_i(),this.huaCard25_i(),this.huaCard24_i(),this.huaCard23_i(),this.huaCard22_i(),this.huaCard21_i(),this.huaCard20_i()];
		return t;
	};
	_proto.huaCard27_i = function () {
		var t = new eui.Image();
		this.huaCard27 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.huaCard26_i = function () {
		var t = new eui.Image();
		this.huaCard26 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.huaCard25_i = function () {
		var t = new eui.Image();
		this.huaCard25 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.huaCard24_i = function () {
		var t = new eui.Image();
		this.huaCard24 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.huaCard23_i = function () {
		var t = new eui.Image();
		this.huaCard23 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.huaCard22_i = function () {
		var t = new eui.Image();
		this.huaCard22 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.huaCard21_i = function () {
		var t = new eui.Image();
		this.huaCard21 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.huaCard20_i = function () {
		var t = new eui.Image();
		this.huaCard20 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.huaCardGroup3_i = function () {
		var t = new eui.Group();
		this.huaCardGroup3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 174.9;
		t.y = 81.1;
		t.elementsContent = [this.huaCard30_i(),this.huaCard31_i(),this.huaCard32_i(),this.huaCard33_i(),this.huaCard34_i(),this.huaCard35_i(),this.huaCard36_i(),this.huaCard37_i()];
		return t;
	};
	_proto.huaCard30_i = function () {
		var t = new eui.Image();
		this.huaCard30 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard31_i = function () {
		var t = new eui.Image();
		this.huaCard31 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.huaCard32_i = function () {
		var t = new eui.Image();
		this.huaCard32 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.huaCard33_i = function () {
		var t = new eui.Image();
		this.huaCard33 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.huaCard34_i = function () {
		var t = new eui.Image();
		this.huaCard34 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.huaCard35_i = function () {
		var t = new eui.Image();
		this.huaCard35 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.huaCard36_i = function () {
		var t = new eui.Image();
		this.huaCard36 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.huaCard37_i = function () {
		var t = new eui.Image();
		this.huaCard37 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 26.96;
		t.y = 25.19;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 0;
		t.elementsContent = [this.menu_i()];
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -2;
		t.skinName = hzmjIndex$Skin42;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 60;
		t.elementsContent = [this.playerBtn_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto.playerBtn_i = function () {
		var t = new eui.Button();
		this.playerBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -2;
		t.skinName = hzmjIndex$Skin43;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.source = "xll_game_json.game_xiaoxi_tixing";
		t.x = 25.34;
		t.y = -14.01;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 120;
		t.elementsContent = [this.locationBtn_i()];
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -2;
		t.skinName = hzmjIndex$Skin44;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -266;
		t.visible = false;
		t.y = 4;
		t.elementsContent = [this.headbox4_i(),this.nickname4_i(),this.score4_i()];
		return t;
	};
	_proto.headbox4_i = function () {
		var t = new eui.Group();
		this.headbox4 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg4_i(),this._Image10_i(),this.roomOwner4_i(),this.zhuang4_i()];
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner4_i = function () {
		var t = new eui.Image();
		this.roomOwner4 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang4_i = function () {
		var t = new eui.Image();
		this.zhuang4 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 121;
		t.horizontalCenter = -464;
		t.visible = false;
		t.width = 108;
		t.y = 403.26;
		t.elementsContent = [this.headbox1_i(),this.nickname1_i(),this.score1_i(),this._Group6_i()];
		return t;
	};
	_proto.headbox1_i = function () {
		var t = new eui.Group();
		this.headbox1 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg1_i(),this._Image11_i(),this.roomOwner1_i(),this.zhuang1_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner1_i = function () {
		var t = new eui.Image();
		this.roomOwner1 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 44;
		t.y = -23;
		t.elementsContent = [this._Image12_i(),this._Label1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -465;
		t.verticalCenter = -70.5;
		t.visible = false;
		t.elementsContent = [this.headbox2_i(),this.nickname2_i(),this.score2_i()];
		return t;
	};
	_proto.headbox2_i = function () {
		var t = new eui.Group();
		this.headbox2 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg2_i(),this._Image13_i(),this.roomOwner2_i(),this.zhuang2_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner2_i = function () {
		var t = new eui.Image();
		this.roomOwner2 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 471;
		t.verticalCenter = -70.5;
		t.visible = false;
		t.elementsContent = [this.headbox3_i(),this.nickname3_i(),this.score3_i()];
		return t;
	};
	_proto.headbox3_i = function () {
		var t = new eui.Group();
		this.headbox3 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg3_i(),this._Image14_i(),this.roomOwner3_i(),this.zhuang3_i()];
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner3_i = function () {
		var t = new eui.Image();
		this.roomOwner3 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang3_i = function () {
		var t = new eui.Image();
		this.zhuang3 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto.dirGroup_i = function () {
		var t = new eui.Group();
		this.dirGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -8;
		t.elementsContent = [this._Group10_i(),this.restMaCardGroup_i(),this.hunumGroup_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 124;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 124;
		t.elementsContent = [this.positionBg_i(),this.position3_i(),this.position1_i(),this.position0_i(),this.position2_i(),this.daojishi_i()];
		return t;
	};
	_proto.positionBg_i = function () {
		var t = new eui.Image();
		this.positionBg = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.horizontalCenter = 0;
		t.rotation = 270;
		t.source = "xll_game_json.game_fangxiang";
		t.verticalCenter = 0;
		return t;
	};
	_proto.position3_i = function () {
		var t = new eui.Image();
		this.position3 = t;
		t.alpha = 0.75;
		t.left = 0;
		t.source = "xll_game_json.game_left_mask";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto.position1_i = function () {
		var t = new eui.Image();
		this.position1 = t;
		t.alpha = 0.75;
		t.right = 0;
		t.rotation = 0.12;
		t.source = "xll_game_json.game_right_mask";
		t.verticalCenter = 0;
		return t;
	};
	_proto.position0_i = function () {
		var t = new eui.Image();
		this.position0 = t;
		t.alpha = 0.75;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_bottom_mask";
		return t;
	};
	_proto.position2_i = function () {
		var t = new eui.Image();
		this.position2 = t;
		t.alpha = 0.75;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_top_mask";
		t.top = 0;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.BitmapLabel();
		this.daojishi = t;
		t.font = "resultcoin_win_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.restMaCardGroup_i = function () {
		var t = new eui.Group();
		this.restMaCardGroup = t;
		t.verticalCenter = 0;
		t.x = 266.98;
		t.elementsContent = [this._Rect1_i(),this.restMaCardNum_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0x0e7754;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 135;
		return t;
	};
	_proto.restMaCardNum_i = function () {
		var t = new eui.Label();
		this.restMaCardNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "剩20张";
		t.textAlign = "center";
		t.textColor = 0x17d696;
		t.verticalCenter = 0;
		return t;
	};
	_proto.hunumGroup_i = function () {
		var t = new eui.Group();
		this.hunumGroup = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Rect2_i(),this.huNum_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0x0e7754;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 135;
		return t;
	};
	_proto.huNum_i = function () {
		var t = new eui.Label();
		this.huNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "500胡";
		t.textAlign = "center";
		t.textColor = 0x17d696;
		t.verticalCenter = 0;
		return t;
	};
	_proto.ready0_i = function () {
		var t = new eui.Image();
		this.ready0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.HZMJword_ready";
		t.y = 460.47;
		return t;
	};
	_proto.ready1_i = function () {
		var t = new eui.Image();
		this.ready1 = t;
		t.horizontalCenter = 310;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.HZMJword_ready";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.ready3_i = function () {
		var t = new eui.Image();
		this.ready3 = t;
		t.horizontalCenter = -296;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.HZMJword_ready";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.ready2_i = function () {
		var t = new eui.Image();
		this.ready2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.HZMJword_ready";
		t.y = 176.42;
		return t;
	};
	_proto.showFJGroup_i = function () {
		var t = new eui.Group();
		this.showFJGroup = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 881.66;
		t.y = 2.88;
		t.elementsContent = [this._Image15_i(),this._Group11_i(),this._Group12_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "xll_game_json.game_yuanjiao_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 15.32;
		t.y = 9.34;
		t.elementsContent = [this._Label2_i(),this.roompwd_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "房间号:";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "666666";
		t.verticalCenter = 0;
		t.x = 89.98;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 15.32;
		t.y = 37.63;
		t.elementsContent = [this._Label3_i(),this.jushu_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "局数:";
		t.textAlign = "center";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jushu_i = function () {
		var t = new eui.Label();
		this.jushu = t;
		t.size = 25;
		t.text = "16/16局";
		t.textAlign = "center";
		t.x = 62.66;
		t.y = 0;
		return t;
	};
	_proto.ruleBtnT_i = function () {
		var t = new eui.Button();
		this.ruleBtnT = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.touchEnabled = true;
		t.visible = false;
		t.x = 25.39;
		t.y = 85.91;
		t.skinName = hzmjIndex$Skin45;
		return t;
	};
	_proto.HandCard0_i = function () {
		var t = new eui.Group();
		this.HandCard0 = t;
		t.scaleX = 1.03;
		t.scaleY = 1.03;
		t.x = -6;
		t.y = 523.02;
		t.elementsContent = [this.handCard00_i(),this.handCard01_i(),this.handCard02_i(),this.handCard03_i(),this.handCard04_i(),this.handCard05_i(),this.handCard06_i(),this.handCard07_i(),this.handCard08_i(),this.handCard09_i(),this.handCard010_i(),this.handCard011_i(),this.handCard012_i(),this.moCard0_i()];
		return t;
	};
	_proto.handCard00_i = function () {
		var t = new eui.Image();
		this.handCard00 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 8.22;
		return t;
	};
	_proto.handCard01_i = function () {
		var t = new eui.Image();
		this.handCard01 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 81.22;
		return t;
	};
	_proto.handCard02_i = function () {
		var t = new eui.Image();
		this.handCard02 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 154.22;
		return t;
	};
	_proto.handCard03_i = function () {
		var t = new eui.Image();
		this.handCard03 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 227.22;
		return t;
	};
	_proto.handCard04_i = function () {
		var t = new eui.Image();
		this.handCard04 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 300.22;
		return t;
	};
	_proto.handCard05_i = function () {
		var t = new eui.Image();
		this.handCard05 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 373.22;
		return t;
	};
	_proto.handCard06_i = function () {
		var t = new eui.Image();
		this.handCard06 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 444.85;
		return t;
	};
	_proto.handCard07_i = function () {
		var t = new eui.Image();
		this.handCard07 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 517.85;
		return t;
	};
	_proto.handCard08_i = function () {
		var t = new eui.Image();
		this.handCard08 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 590.85;
		return t;
	};
	_proto.handCard09_i = function () {
		var t = new eui.Image();
		this.handCard09 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 663.85;
		return t;
	};
	_proto.handCard010_i = function () {
		var t = new eui.Image();
		this.handCard010 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 736.85;
		return t;
	};
	_proto.handCard011_i = function () {
		var t = new eui.Image();
		this.handCard011 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 809.85;
		return t;
	};
	_proto.handCard012_i = function () {
		var t = new eui.Image();
		this.handCard012 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 882.85;
		return t;
	};
	_proto.moCard0_i = function () {
		var t = new eui.Image();
		this.moCard0 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 976.65;
		t.y = 10;
		return t;
	};
	_proto.HandCard1_i = function () {
		var t = new eui.Group();
		this.HandCard1 = t;
		t.x = 913.4;
		t.y = 73.33;
		t.elementsContent = [this.moCard1_i(),this.handCard112_i(),this.handCard111_i(),this.handCard110_i(),this.handCard19_i(),this.handCard18_i(),this.handCard17_i(),this.handCard16_i(),this.handCard15_i(),this.handCard14_i(),this.handCard13_i(),this.handCard12_i(),this.handCard11_i(),this.handCard10_i()];
		return t;
	};
	_proto.moCard1_i = function () {
		var t = new eui.Image();
		this.moCard1 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.y = 0;
		return t;
	};
	_proto.handCard112_i = function () {
		var t = new eui.Image();
		this.handCard112 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.y = 55;
		return t;
	};
	_proto.handCard111_i = function () {
		var t = new eui.Image();
		this.handCard111 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 10;
		t.y = 82;
		return t;
	};
	_proto.handCard110_i = function () {
		var t = new eui.Image();
		this.handCard110 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 20;
		t.y = 109;
		return t;
	};
	_proto.handCard19_i = function () {
		var t = new eui.Image();
		this.handCard19 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 30;
		t.y = 136;
		return t;
	};
	_proto.handCard18_i = function () {
		var t = new eui.Image();
		this.handCard18 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 40;
		t.y = 163;
		return t;
	};
	_proto.handCard17_i = function () {
		var t = new eui.Image();
		this.handCard17 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 50;
		t.y = 190;
		return t;
	};
	_proto.handCard16_i = function () {
		var t = new eui.Image();
		this.handCard16 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 60;
		t.y = 217;
		return t;
	};
	_proto.handCard15_i = function () {
		var t = new eui.Image();
		this.handCard15 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 70;
		t.y = 244;
		return t;
	};
	_proto.handCard14_i = function () {
		var t = new eui.Image();
		this.handCard14 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 80;
		t.y = 271;
		return t;
	};
	_proto.handCard13_i = function () {
		var t = new eui.Image();
		this.handCard13 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 90;
		t.y = 298;
		return t;
	};
	_proto.handCard12_i = function () {
		var t = new eui.Image();
		this.handCard12 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 100;
		t.y = 325;
		return t;
	};
	_proto.handCard11_i = function () {
		var t = new eui.Image();
		this.handCard11 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 110;
		t.y = 352;
		return t;
	};
	_proto.handCard10_i = function () {
		var t = new eui.Image();
		this.handCard10 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 120;
		t.y = 377;
		return t;
	};
	_proto.HandCard2_i = function () {
		var t = new eui.Group();
		this.HandCard2 = t;
		t.horizontalCenter = 54;
		t.visible = false;
		t.y = 15.01;
		t.elementsContent = [this.moCard2_i(),this.handCard212_i(),this.handCard211_i(),this.handCard210_i(),this.handCard29_i(),this.handCard28_i(),this.handCard27_i(),this.handCard26_i(),this.handCard25_i(),this.handCard24_i(),this.handCard23_i(),this.handCard22_i(),this.handCard21_i(),this.handCard20_i()];
		return t;
	};
	_proto.moCard2_i = function () {
		var t = new eui.Image();
		this.moCard2 = t;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 0;
		return t;
	};
	_proto.handCard212_i = function () {
		var t = new eui.Image();
		this.handCard212 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 51.61;
		return t;
	};
	_proto.handCard211_i = function () {
		var t = new eui.Image();
		this.handCard211 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 89.61;
		return t;
	};
	_proto.handCard210_i = function () {
		var t = new eui.Image();
		this.handCard210 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 127.61;
		t.y = 20;
		return t;
	};
	_proto.handCard29_i = function () {
		var t = new eui.Image();
		this.handCard29 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 165.61;
		t.y = 30;
		return t;
	};
	_proto.handCard28_i = function () {
		var t = new eui.Image();
		this.handCard28 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 203.61;
		t.y = 40;
		return t;
	};
	_proto.handCard27_i = function () {
		var t = new eui.Image();
		this.handCard27 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 241.61;
		t.y = 50;
		return t;
	};
	_proto.handCard26_i = function () {
		var t = new eui.Image();
		this.handCard26 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 279.61;
		t.y = 60;
		return t;
	};
	_proto.handCard25_i = function () {
		var t = new eui.Image();
		this.handCard25 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 317.61;
		t.y = 70;
		return t;
	};
	_proto.handCard24_i = function () {
		var t = new eui.Image();
		this.handCard24 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 355.61;
		t.y = 80;
		return t;
	};
	_proto.handCard23_i = function () {
		var t = new eui.Image();
		this.handCard23 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 393.61;
		t.y = 90;
		return t;
	};
	_proto.handCard22_i = function () {
		var t = new eui.Image();
		this.handCard22 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 431.61;
		t.y = 100;
		return t;
	};
	_proto.handCard21_i = function () {
		var t = new eui.Image();
		this.handCard21 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 469.61;
		t.y = 110;
		return t;
	};
	_proto.handCard20_i = function () {
		var t = new eui.Image();
		this.handCard20 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 507.61;
		t.y = 120;
		return t;
	};
	_proto.HandCard3_i = function () {
		var t = new eui.Group();
		this.HandCard3 = t;
		t.visible = false;
		t.x = 117.59;
		t.y = 84.02;
		t.elementsContent = [this.handCard30_i(),this.handCard31_i(),this.handCard32_i(),this.handCard33_i(),this.handCard34_i(),this.handCard35_i(),this.handCard36_i(),this.handCard37_i(),this.handCard38_i(),this.handCard39_i(),this.handCard310_i(),this.handCard311_i(),this.handCard312_i(),this.moCard3_i()];
		return t;
	};
	_proto.handCard30_i = function () {
		var t = new eui.Image();
		this.handCard30 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.y = 0;
		return t;
	};
	_proto.handCard31_i = function () {
		var t = new eui.Image();
		this.handCard31 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.y = 27;
		return t;
	};
	_proto.handCard32_i = function () {
		var t = new eui.Image();
		this.handCard32 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.handCard33_i = function () {
		var t = new eui.Image();
		this.handCard33 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 20;
		t.y = 81;
		return t;
	};
	_proto.handCard34_i = function () {
		var t = new eui.Image();
		this.handCard34 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 30;
		t.y = 108;
		return t;
	};
	_proto.handCard35_i = function () {
		var t = new eui.Image();
		this.handCard35 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 40;
		t.y = 135;
		return t;
	};
	_proto.handCard36_i = function () {
		var t = new eui.Image();
		this.handCard36 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 50;
		t.y = 162;
		return t;
	};
	_proto.handCard37_i = function () {
		var t = new eui.Image();
		this.handCard37 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 60;
		t.y = 189;
		return t;
	};
	_proto.handCard38_i = function () {
		var t = new eui.Image();
		this.handCard38 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 70;
		t.y = 216;
		return t;
	};
	_proto.handCard39_i = function () {
		var t = new eui.Image();
		this.handCard39 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 80;
		t.y = 243;
		return t;
	};
	_proto.handCard310_i = function () {
		var t = new eui.Image();
		this.handCard310 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 90;
		t.y = 270;
		return t;
	};
	_proto.handCard311_i = function () {
		var t = new eui.Image();
		this.handCard311 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 100;
		t.y = 297;
		return t;
	};
	_proto.handCard312_i = function () {
		var t = new eui.Image();
		this.handCard312 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 110;
		t.y = 324;
		return t;
	};
	_proto.moCard3_i = function () {
		var t = new eui.Image();
		this.moCard3 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 120;
		t.y = 378;
		return t;
	};
	_proto.outCard0_i = function () {
		var t = new eui.Group();
		this.outCard0 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.visible = false;
		t.x = 322;
		t.y = 281.07;
		t.elementsContent = [this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard033_i(),this.outCard034_i(),this.outCard035_i(),this.outCard036_i(),this.outCard037_i(),this.outCard038_i(),this.outCard039_i(),this.outCard040_i(),this.outCard041_i(),this.outCard042_i(),this.outCard043_i()];
		return t;
	};
	_proto.outCard033_i = function () {
		var t = new eui.Image();
		this.outCard033 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard034_i = function () {
		var t = new eui.Image();
		this.outCard034 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard035_i = function () {
		var t = new eui.Image();
		this.outCard035 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard036_i = function () {
		var t = new eui.Image();
		this.outCard036 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard037_i = function () {
		var t = new eui.Image();
		this.outCard037 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard038_i = function () {
		var t = new eui.Image();
		this.outCard038 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard039_i = function () {
		var t = new eui.Image();
		this.outCard039 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard040_i = function () {
		var t = new eui.Image();
		this.outCard040 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard041_i = function () {
		var t = new eui.Image();
		this.outCard041 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard042_i = function () {
		var t = new eui.Image();
		this.outCard042 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard043_i = function () {
		var t = new eui.Image();
		this.outCard043 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 82;
		t.elementsContent = [this.outCard022_i(),this.outCard023_i(),this.outCard024_i(),this.outCard025_i(),this.outCard026_i(),this.outCard027_i(),this.outCard028_i(),this.outCard029_i(),this.outCard030_i(),this.outCard031_i(),this.outCard032_i()];
		return t;
	};
	_proto.outCard022_i = function () {
		var t = new eui.Image();
		this.outCard022 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard023_i = function () {
		var t = new eui.Image();
		this.outCard023 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard024_i = function () {
		var t = new eui.Image();
		this.outCard024 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard025_i = function () {
		var t = new eui.Image();
		this.outCard025 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard026_i = function () {
		var t = new eui.Image();
		this.outCard026 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard027_i = function () {
		var t = new eui.Image();
		this.outCard027 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard028_i = function () {
		var t = new eui.Image();
		this.outCard028 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard029_i = function () {
		var t = new eui.Image();
		this.outCard029 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard030_i = function () {
		var t = new eui.Image();
		this.outCard030 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard031_i = function () {
		var t = new eui.Image();
		this.outCard031 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard032_i = function () {
		var t = new eui.Image();
		this.outCard032 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 164;
		t.elementsContent = [this.outCard011_i(),this.outCard012_i(),this.outCard013_i(),this.outCard014_i(),this.outCard015_i(),this.outCard016_i(),this.outCard017_i(),this.outCard018_i(),this.outCard019_i(),this.outCard020_i(),this.outCard021_i()];
		return t;
	};
	_proto.outCard011_i = function () {
		var t = new eui.Image();
		this.outCard011 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard012_i = function () {
		var t = new eui.Image();
		this.outCard012 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard013_i = function () {
		var t = new eui.Image();
		this.outCard013 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard014_i = function () {
		var t = new eui.Image();
		this.outCard014 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard015_i = function () {
		var t = new eui.Image();
		this.outCard015 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard016_i = function () {
		var t = new eui.Image();
		this.outCard016 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard017_i = function () {
		var t = new eui.Image();
		this.outCard017 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard018_i = function () {
		var t = new eui.Image();
		this.outCard018 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard019_i = function () {
		var t = new eui.Image();
		this.outCard019 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard020_i = function () {
		var t = new eui.Image();
		this.outCard020 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard021_i = function () {
		var t = new eui.Image();
		this.outCard021 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 246;
		t.elementsContent = [this.outCard00_i(),this.outCard01_i(),this.outCard02_i(),this.outCard03_i(),this.outCard04_i(),this.outCard05_i(),this.outCard06_i(),this.outCard07_i(),this.outCard08_i(),this.outCard09_i(),this.outCard010_i()];
		return t;
	};
	_proto.outCard00_i = function () {
		var t = new eui.Image();
		this.outCard00 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard01_i = function () {
		var t = new eui.Image();
		this.outCard01 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard02_i = function () {
		var t = new eui.Image();
		this.outCard02 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard03_i = function () {
		var t = new eui.Image();
		this.outCard03 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard04_i = function () {
		var t = new eui.Image();
		this.outCard04 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard05_i = function () {
		var t = new eui.Image();
		this.outCard05 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard06_i = function () {
		var t = new eui.Image();
		this.outCard06 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard07_i = function () {
		var t = new eui.Image();
		this.outCard07 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard08_i = function () {
		var t = new eui.Image();
		this.outCard08 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard09_i = function () {
		var t = new eui.Image();
		this.outCard09 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard010_i = function () {
		var t = new eui.Image();
		this.outCard010 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto.outCard2_i = function () {
		var t = new eui.Group();
		this.outCard2 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.visible = false;
		t.x = 322;
		t.y = 128.78;
		t.elementsContent = [this._Group17_i(),this._Group18_i(),this._Group19_i(),this._Group20_i()];
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard210_i(),this.outCard29_i(),this.outCard28_i(),this.outCard27_i(),this.outCard26_i(),this.outCard25_i(),this.outCard24_i(),this.outCard23_i(),this.outCard22_i(),this.outCard21_i(),this.outCard20_i()];
		return t;
	};
	_proto.outCard210_i = function () {
		var t = new eui.Image();
		this.outCard210 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard29_i = function () {
		var t = new eui.Image();
		this.outCard29 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard28_i = function () {
		var t = new eui.Image();
		this.outCard28 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard27_i = function () {
		var t = new eui.Image();
		this.outCard27 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard26_i = function () {
		var t = new eui.Image();
		this.outCard26 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard25_i = function () {
		var t = new eui.Image();
		this.outCard25 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard24_i = function () {
		var t = new eui.Image();
		this.outCard24 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard23_i = function () {
		var t = new eui.Image();
		this.outCard23 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard22_i = function () {
		var t = new eui.Image();
		this.outCard22 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard21_i = function () {
		var t = new eui.Image();
		this.outCard21 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard20_i = function () {
		var t = new eui.Image();
		this.outCard20 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 84;
		t.elementsContent = [this.outCard221_i(),this.outCard220_i(),this.outCard219_i(),this.outCard218_i(),this.outCard217_i(),this.outCard216_i(),this.outCard215_i(),this.outCard214_i(),this.outCard213_i(),this.outCard212_i(),this.outCard211_i()];
		return t;
	};
	_proto.outCard221_i = function () {
		var t = new eui.Image();
		this.outCard221 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard220_i = function () {
		var t = new eui.Image();
		this.outCard220 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard219_i = function () {
		var t = new eui.Image();
		this.outCard219 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard218_i = function () {
		var t = new eui.Image();
		this.outCard218 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard217_i = function () {
		var t = new eui.Image();
		this.outCard217 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard216_i = function () {
		var t = new eui.Image();
		this.outCard216 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard215_i = function () {
		var t = new eui.Image();
		this.outCard215 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard214_i = function () {
		var t = new eui.Image();
		this.outCard214 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard213_i = function () {
		var t = new eui.Image();
		this.outCard213 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard212_i = function () {
		var t = new eui.Image();
		this.outCard212 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard211_i = function () {
		var t = new eui.Image();
		this.outCard211 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 168;
		t.elementsContent = [this.outCard232_i(),this.outCard231_i(),this.outCard230_i(),this.outCard229_i(),this.outCard228_i(),this.outCard227_i(),this.outCard226_i(),this.outCard225_i(),this.outCard224_i(),this.outCard223_i(),this.outCard222_i()];
		return t;
	};
	_proto.outCard232_i = function () {
		var t = new eui.Image();
		this.outCard232 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard231_i = function () {
		var t = new eui.Image();
		this.outCard231 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard230_i = function () {
		var t = new eui.Image();
		this.outCard230 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard229_i = function () {
		var t = new eui.Image();
		this.outCard229 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard228_i = function () {
		var t = new eui.Image();
		this.outCard228 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard227_i = function () {
		var t = new eui.Image();
		this.outCard227 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard226_i = function () {
		var t = new eui.Image();
		this.outCard226 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard225_i = function () {
		var t = new eui.Image();
		this.outCard225 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard224_i = function () {
		var t = new eui.Image();
		this.outCard224 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard223_i = function () {
		var t = new eui.Image();
		this.outCard223 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard222_i = function () {
		var t = new eui.Image();
		this.outCard222 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 252;
		t.elementsContent = [this.outCard243_i(),this.outCard242_i(),this.outCard241_i(),this.outCard240_i(),this.outCard239_i(),this.outCard238_i(),this.outCard237_i(),this.outCard236_i(),this.outCard235_i(),this.outCard234_i(),this.outCard233_i()];
		return t;
	};
	_proto.outCard243_i = function () {
		var t = new eui.Image();
		this.outCard243 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard242_i = function () {
		var t = new eui.Image();
		this.outCard242 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard241_i = function () {
		var t = new eui.Image();
		this.outCard241 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard240_i = function () {
		var t = new eui.Image();
		this.outCard240 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard239_i = function () {
		var t = new eui.Image();
		this.outCard239 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard238_i = function () {
		var t = new eui.Image();
		this.outCard238 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard237_i = function () {
		var t = new eui.Image();
		this.outCard237 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard236_i = function () {
		var t = new eui.Image();
		this.outCard236 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard235_i = function () {
		var t = new eui.Image();
		this.outCard235 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard234_i = function () {
		var t = new eui.Image();
		this.outCard234 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard233_i = function () {
		var t = new eui.Image();
		this.outCard233 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto.outCard1_i = function () {
		var t = new eui.Group();
		this.outCard1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 670.59;
		t.y = 136.8;
		t.elementsContent = [this._Group21_i(),this._Group22_i(),this._Group23_i(),this._Group24_i()];
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard133_i(),this.outCard134_i(),this.outCard135_i(),this.outCard136_i(),this.outCard137_i(),this.outCard138_i(),this.outCard139_i(),this.outCard140_i(),this.outCard141_i(),this.outCard142_i(),this.outCard143_i()];
		return t;
	};
	_proto.outCard133_i = function () {
		var t = new eui.Image();
		this.outCard133 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard134_i = function () {
		var t = new eui.Image();
		this.outCard134 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard135_i = function () {
		var t = new eui.Image();
		this.outCard135 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard136_i = function () {
		var t = new eui.Image();
		this.outCard136 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard137_i = function () {
		var t = new eui.Image();
		this.outCard137 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard138_i = function () {
		var t = new eui.Image();
		this.outCard138 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard139_i = function () {
		var t = new eui.Image();
		this.outCard139 = t;
		t.source = "MJCard_json.rightfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard140_i = function () {
		var t = new eui.Image();
		this.outCard140 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard141_i = function () {
		var t = new eui.Image();
		this.outCard141 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard142_i = function () {
		var t = new eui.Image();
		this.outCard142 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard143_i = function () {
		var t = new eui.Image();
		this.outCard143 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 51;
		t.y = -0.67;
		t.elementsContent = [this.outCard132_i(),this.outCard131_i(),this.outCard130_i(),this.outCard129_i(),this.outCard128_i(),this.outCard127_i(),this.outCard126_i(),this.outCard125_i(),this.outCard124_i(),this.outCard123_i(),this.outCard122_i()];
		return t;
	};
	_proto.outCard132_i = function () {
		var t = new eui.Image();
		this.outCard132 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard131_i = function () {
		var t = new eui.Image();
		this.outCard131 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard130_i = function () {
		var t = new eui.Image();
		this.outCard130 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard129_i = function () {
		var t = new eui.Image();
		this.outCard129 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard128_i = function () {
		var t = new eui.Image();
		this.outCard128 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard127_i = function () {
		var t = new eui.Image();
		this.outCard127 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard126_i = function () {
		var t = new eui.Image();
		this.outCard126 = t;
		t.source = "MJCard_json.rightfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard125_i = function () {
		var t = new eui.Image();
		this.outCard125 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard124_i = function () {
		var t = new eui.Image();
		this.outCard124 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard123_i = function () {
		var t = new eui.Image();
		this.outCard123 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard122_i = function () {
		var t = new eui.Image();
		this.outCard122 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this.outCard121_i(),this.outCard120_i(),this.outCard119_i(),this.outCard118_i(),this.outCard117_i(),this.outCard116_i(),this.outCard115_i(),this.outCard114_i(),this.outCard113_i(),this.outCard112_i(),this.outCard111_i()];
		return t;
	};
	_proto.outCard121_i = function () {
		var t = new eui.Image();
		this.outCard121 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard120_i = function () {
		var t = new eui.Image();
		this.outCard120 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard119_i = function () {
		var t = new eui.Image();
		this.outCard119 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard118_i = function () {
		var t = new eui.Image();
		this.outCard118 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard117_i = function () {
		var t = new eui.Image();
		this.outCard117 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard116_i = function () {
		var t = new eui.Image();
		this.outCard116 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard115_i = function () {
		var t = new eui.Image();
		this.outCard115 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard114_i = function () {
		var t = new eui.Image();
		this.outCard114 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard113_i = function () {
		var t = new eui.Image();
		this.outCard113 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard112_i = function () {
		var t = new eui.Image();
		this.outCard112 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard111_i = function () {
		var t = new eui.Image();
		this.outCard111 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.x = 153;
		t.y = 0;
		t.elementsContent = [this.outCard110_i(),this.outCard19_i(),this.outCard18_i(),this.outCard17_i(),this.outCard16_i(),this.outCard15_i(),this.outCard14_i(),this.outCard13_i(),this.outCard12_i(),this.outCard11_i(),this.outCard10_i()];
		return t;
	};
	_proto.outCard110_i = function () {
		var t = new eui.Image();
		this.outCard110 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard19_i = function () {
		var t = new eui.Image();
		this.outCard19 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard18_i = function () {
		var t = new eui.Image();
		this.outCard18 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard17_i = function () {
		var t = new eui.Image();
		this.outCard17 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard16_i = function () {
		var t = new eui.Image();
		this.outCard16 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard15_i = function () {
		var t = new eui.Image();
		this.outCard15 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard14_i = function () {
		var t = new eui.Image();
		this.outCard14 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard13_i = function () {
		var t = new eui.Image();
		this.outCard13 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard12_i = function () {
		var t = new eui.Image();
		this.outCard12 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard11_i = function () {
		var t = new eui.Image();
		this.outCard11 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard10_i = function () {
		var t = new eui.Image();
		this.outCard10 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard3_i = function () {
		var t = new eui.Group();
		this.outCard3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 225.8;
		t.y = 136.95;
		t.elementsContent = [this._Group25_i(),this._Group26_i(),this._Group27_i(),this._Group28_i()];
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = -0.67;
		t.elementsContent = [this.outCard30_i(),this.outCard31_i(),this.outCard32_i(),this.outCard33_i(),this.outCard34_i(),this.outCard35_i(),this.outCard36_i(),this.outCard37_i(),this.outCard38_i(),this.outCard39_i(),this.outCard310_i()];
		return t;
	};
	_proto.outCard30_i = function () {
		var t = new eui.Image();
		this.outCard30 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard31_i = function () {
		var t = new eui.Image();
		this.outCard31 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard32_i = function () {
		var t = new eui.Image();
		this.outCard32 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard33_i = function () {
		var t = new eui.Image();
		this.outCard33 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard34_i = function () {
		var t = new eui.Image();
		this.outCard34 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard35_i = function () {
		var t = new eui.Image();
		this.outCard35 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard36_i = function () {
		var t = new eui.Image();
		this.outCard36 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard37_i = function () {
		var t = new eui.Image();
		this.outCard37 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard38_i = function () {
		var t = new eui.Image();
		this.outCard38 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard39_i = function () {
		var t = new eui.Image();
		this.outCard39 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard310_i = function () {
		var t = new eui.Image();
		this.outCard310 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.x = 51;
		t.y = 0;
		t.elementsContent = [this.outCard311_i(),this.outCard312_i(),this.outCard313_i(),this.outCard314_i(),this.outCard315_i(),this.outCard316_i(),this.outCard317_i(),this.outCard318_i(),this.outCard319_i(),this.outCard320_i(),this.outCard321_i()];
		return t;
	};
	_proto.outCard311_i = function () {
		var t = new eui.Image();
		this.outCard311 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard312_i = function () {
		var t = new eui.Image();
		this.outCard312 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard313_i = function () {
		var t = new eui.Image();
		this.outCard313 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard314_i = function () {
		var t = new eui.Image();
		this.outCard314 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard315_i = function () {
		var t = new eui.Image();
		this.outCard315 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard316_i = function () {
		var t = new eui.Image();
		this.outCard316 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard317_i = function () {
		var t = new eui.Image();
		this.outCard317 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard318_i = function () {
		var t = new eui.Image();
		this.outCard318 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard319_i = function () {
		var t = new eui.Image();
		this.outCard319 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard320_i = function () {
		var t = new eui.Image();
		this.outCard320 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard321_i = function () {
		var t = new eui.Image();
		this.outCard321 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this.outCard322_i(),this.outCard323_i(),this.outCard324_i(),this.outCard325_i(),this.outCard326_i(),this.outCard327_i(),this.outCard328_i(),this.outCard329_i(),this.outCard330_i(),this.outCard331_i(),this.outCard332_i()];
		return t;
	};
	_proto.outCard322_i = function () {
		var t = new eui.Image();
		this.outCard322 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard323_i = function () {
		var t = new eui.Image();
		this.outCard323 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard324_i = function () {
		var t = new eui.Image();
		this.outCard324 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard325_i = function () {
		var t = new eui.Image();
		this.outCard325 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard326_i = function () {
		var t = new eui.Image();
		this.outCard326 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard327_i = function () {
		var t = new eui.Image();
		this.outCard327 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard328_i = function () {
		var t = new eui.Image();
		this.outCard328 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard329_i = function () {
		var t = new eui.Image();
		this.outCard329 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard330_i = function () {
		var t = new eui.Image();
		this.outCard330 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard331_i = function () {
		var t = new eui.Image();
		this.outCard331 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard332_i = function () {
		var t = new eui.Image();
		this.outCard332 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.x = 153;
		t.y = 0;
		t.elementsContent = [this.outCard333_i(),this.outCard334_i(),this.outCard335_i(),this.outCard336_i(),this.outCard337_i(),this.outCard338_i(),this.outCard339_i(),this.outCard340_i(),this.outCard341_i(),this.outCard342_i(),this.outCard343_i()];
		return t;
	};
	_proto.outCard333_i = function () {
		var t = new eui.Image();
		this.outCard333 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard334_i = function () {
		var t = new eui.Image();
		this.outCard334 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard335_i = function () {
		var t = new eui.Image();
		this.outCard335 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard336_i = function () {
		var t = new eui.Image();
		this.outCard336 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard337_i = function () {
		var t = new eui.Image();
		this.outCard337 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard338_i = function () {
		var t = new eui.Image();
		this.outCard338 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard339_i = function () {
		var t = new eui.Image();
		this.outCard339 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard340_i = function () {
		var t = new eui.Image();
		this.outCard340 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard341_i = function () {
		var t = new eui.Image();
		this.outCard341 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard342_i = function () {
		var t = new eui.Image();
		this.outCard342 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard343_i = function () {
		var t = new eui.Image();
		this.outCard343 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.actionCardGroud0_i = function () {
		var t = new eui.Group();
		this.actionCardGroud0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.x = 6.08;
		t.y = 530.99;
		t.elementsContent = [this.actionItem00_i(),this.actionItem01_i(),this.actionItem02_i(),this.actionItem03_i()];
		return t;
	};
	_proto.actionItem00_i = function () {
		var t = new eui.Group();
		this.actionItem00 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard000_i(),this.actioncard001_i(),this.actioncard002_i(),this.actioncard003_i(),this._Image16_i()];
		return t;
	};
	_proto.actioncard000_i = function () {
		var t = new eui.Image();
		this.actioncard000 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard001_i = function () {
		var t = new eui.Image();
		this.actioncard001 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard002_i = function () {
		var t = new eui.Image();
		this.actioncard002 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard003_i = function () {
		var t = new eui.Image();
		this.actioncard003 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 0;
		t.y = 76;
		return t;
	};
	_proto.actionItem01_i = function () {
		var t = new eui.Group();
		this.actionItem01 = t;
		t.x = 230;
		t.y = 0;
		t.elementsContent = [this.actioncard010_i(),this.actioncard011_i(),this.actioncard012_i(),this.actioncard013_i()];
		return t;
	};
	_proto.actioncard010_i = function () {
		var t = new eui.Image();
		this.actioncard010 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard011_i = function () {
		var t = new eui.Image();
		this.actioncard011 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard012_i = function () {
		var t = new eui.Image();
		this.actioncard012 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard013_i = function () {
		var t = new eui.Image();
		this.actioncard013 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem02_i = function () {
		var t = new eui.Group();
		this.actionItem02 = t;
		t.x = 460;
		t.y = 0;
		t.elementsContent = [this.actioncard020_i(),this.actioncard021_i(),this.actioncard022_i(),this.actioncard023_i()];
		return t;
	};
	_proto.actioncard020_i = function () {
		var t = new eui.Image();
		this.actioncard020 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard021_i = function () {
		var t = new eui.Image();
		this.actioncard021 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard022_i = function () {
		var t = new eui.Image();
		this.actioncard022 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard023_i = function () {
		var t = new eui.Image();
		this.actioncard023 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem03_i = function () {
		var t = new eui.Group();
		this.actionItem03 = t;
		t.x = 690;
		t.y = 0;
		t.elementsContent = [this.actioncard030_i(),this.actioncard031_i(),this.actioncard032_i(),this.actioncard033_i()];
		return t;
	};
	_proto.actioncard030_i = function () {
		var t = new eui.Image();
		this.actioncard030 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard031_i = function () {
		var t = new eui.Image();
		this.actioncard031 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard032_i = function () {
		var t = new eui.Image();
		this.actioncard032 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard033_i = function () {
		var t = new eui.Image();
		this.actioncard033 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud2_i = function () {
		var t = new eui.Group();
		this.actionCardGroud2 = t;
		t.scaleX = 0.49;
		t.scaleY = 0.49;
		t.visible = false;
		t.x = 425.32;
		t.y = 4.02;
		t.elementsContent = [this.actionItem20_i(),this.actionItem21_i(),this.actionItem22_i(),this.actionItem23_i()];
		return t;
	};
	_proto.actionItem20_i = function () {
		var t = new eui.Group();
		this.actionItem20 = t;
		t.x = 713.97;
		t.y = 0;
		t.elementsContent = [this.actioncard200_i(),this.actioncard201_i(),this.actioncard202_i(),this._Image17_i(),this.actioncard203_i()];
		return t;
	};
	_proto.actioncard200_i = function () {
		var t = new eui.Image();
		this.actioncard200 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard201_i = function () {
		var t = new eui.Image();
		this.actioncard201 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard202_i = function () {
		var t = new eui.Image();
		this.actioncard202 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 184;
		t.y = 76;
		return t;
	};
	_proto.actioncard203_i = function () {
		var t = new eui.Image();
		this.actioncard203 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem21_i = function () {
		var t = new eui.Group();
		this.actionItem21 = t;
		t.x = 475.98;
		t.y = 0;
		t.elementsContent = [this.actioncard210_i(),this.actioncard211_i(),this.actioncard212_i(),this.actioncard213_i()];
		return t;
	};
	_proto.actioncard210_i = function () {
		var t = new eui.Image();
		this.actioncard210 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard211_i = function () {
		var t = new eui.Image();
		this.actioncard211 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard212_i = function () {
		var t = new eui.Image();
		this.actioncard212 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard213_i = function () {
		var t = new eui.Image();
		this.actioncard213 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem22_i = function () {
		var t = new eui.Group();
		this.actionItem22 = t;
		t.x = 237.99;
		t.y = 0;
		t.elementsContent = [this.actioncard220_i(),this.actioncard221_i(),this.actioncard222_i(),this.actioncard223_i()];
		return t;
	};
	_proto.actioncard220_i = function () {
		var t = new eui.Image();
		this.actioncard220 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard221_i = function () {
		var t = new eui.Image();
		this.actioncard221 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard222_i = function () {
		var t = new eui.Image();
		this.actioncard222 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard223_i = function () {
		var t = new eui.Image();
		this.actioncard223 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem23_i = function () {
		var t = new eui.Group();
		this.actionItem23 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard230_i(),this.actioncard231_i(),this.actioncard232_i(),this.actioncard233_i()];
		return t;
	};
	_proto.actioncard230_i = function () {
		var t = new eui.Image();
		this.actioncard230 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard231_i = function () {
		var t = new eui.Image();
		this.actioncard231 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard232_i = function () {
		var t = new eui.Image();
		this.actioncard232 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard233_i = function () {
		var t = new eui.Image();
		this.actioncard233 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud3_i = function () {
		var t = new eui.Group();
		this.actionCardGroud3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 117;
		t.y = 73;
		t.elementsContent = [this.actionItem30_i(),this.actionItem31_i(),this.actionItem32_i(),this.actionItem33_i()];
		return t;
	};
	_proto.actionItem30_i = function () {
		var t = new eui.Group();
		this.actionItem30 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard300_i(),this.actioncard301_i(),this.actioncard302_i(),this.actioncard303_i(),this._Image18_i()];
		return t;
	};
	_proto.actioncard300_i = function () {
		var t = new eui.Image();
		this.actioncard300 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard301_i = function () {
		var t = new eui.Image();
		this.actioncard301 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard302_i = function () {
		var t = new eui.Image();
		this.actioncard302 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard303_i = function () {
		var t = new eui.Image();
		this.actioncard303 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionItem31_i = function () {
		var t = new eui.Group();
		this.actionItem31 = t;
		t.y = 115;
		t.elementsContent = [this.actioncard310_i(),this.actioncard311_i(),this.actioncard312_i(),this.actioncard313_i()];
		return t;
	};
	_proto.actioncard310_i = function () {
		var t = new eui.Image();
		this.actioncard310 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard311_i = function () {
		var t = new eui.Image();
		this.actioncard311 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard312_i = function () {
		var t = new eui.Image();
		this.actioncard312 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard313_i = function () {
		var t = new eui.Image();
		this.actioncard313 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem32_i = function () {
		var t = new eui.Group();
		this.actionItem32 = t;
		t.y = 230;
		t.elementsContent = [this.actioncard320_i(),this.actioncard321_i(),this.actioncard322_i(),this.actioncard323_i()];
		return t;
	};
	_proto.actioncard320_i = function () {
		var t = new eui.Image();
		this.actioncard320 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard321_i = function () {
		var t = new eui.Image();
		this.actioncard321 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard322_i = function () {
		var t = new eui.Image();
		this.actioncard322 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard323_i = function () {
		var t = new eui.Image();
		this.actioncard323 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem33_i = function () {
		var t = new eui.Group();
		this.actionItem33 = t;
		t.y = 345;
		t.elementsContent = [this.actioncard330_i(),this.actioncard331_i(),this.actioncard332_i(),this.actioncard333_i()];
		return t;
	};
	_proto.actioncard330_i = function () {
		var t = new eui.Image();
		this.actioncard330 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard331_i = function () {
		var t = new eui.Image();
		this.actioncard331 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard332_i = function () {
		var t = new eui.Image();
		this.actioncard332 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard333_i = function () {
		var t = new eui.Image();
		this.actioncard333 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionCardGroud1_i = function () {
		var t = new eui.Group();
		this.actionCardGroud1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 904.15;
		t.y = 193.92;
		t.elementsContent = [this.actionItem13_i(),this.actionItem12_i(),this.actionItem11_i(),this.actionItem10_i()];
		return t;
	};
	_proto.actionItem13_i = function () {
		var t = new eui.Group();
		this.actionItem13 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard132_i(),this.actioncard131_i(),this.actioncard130_i(),this._Image19_i(),this.actioncard133_i()];
		return t;
	};
	_proto.actioncard132_i = function () {
		var t = new eui.Image();
		this.actioncard132 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard131_i = function () {
		var t = new eui.Image();
		this.actioncard131 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard130_i = function () {
		var t = new eui.Image();
		this.actioncard130 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 30;
		t.y = 77;
		return t;
	};
	_proto.actioncard133_i = function () {
		var t = new eui.Image();
		this.actioncard133 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem12_i = function () {
		var t = new eui.Group();
		this.actionItem12 = t;
		t.y = 115;
		t.elementsContent = [this.actioncard122_i(),this.actioncard121_i(),this.actioncard120_i(),this.actioncard123_i()];
		return t;
	};
	_proto.actioncard122_i = function () {
		var t = new eui.Image();
		this.actioncard122 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard121_i = function () {
		var t = new eui.Image();
		this.actioncard121 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard120_i = function () {
		var t = new eui.Image();
		this.actioncard120 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard123_i = function () {
		var t = new eui.Image();
		this.actioncard123 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem11_i = function () {
		var t = new eui.Group();
		this.actionItem11 = t;
		t.y = 230;
		t.elementsContent = [this.actioncard112_i(),this.actioncard111_i(),this.actioncard110_i(),this.actioncard113_i()];
		return t;
	};
	_proto.actioncard112_i = function () {
		var t = new eui.Image();
		this.actioncard112 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard111_i = function () {
		var t = new eui.Image();
		this.actioncard111 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard110_i = function () {
		var t = new eui.Image();
		this.actioncard110 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard113_i = function () {
		var t = new eui.Image();
		this.actioncard113 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem10_i = function () {
		var t = new eui.Group();
		this.actionItem10 = t;
		t.y = 345;
		t.elementsContent = [this.actioncard102_i(),this.actioncard101_i(),this.actioncard100_i(),this.actioncard103_i()];
		return t;
	};
	_proto.actioncard102_i = function () {
		var t = new eui.Image();
		this.actioncard102 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard101_i = function () {
		var t = new eui.Image();
		this.actioncard101 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard100_i = function () {
		var t = new eui.Image();
		this.actioncard100 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard103_i = function () {
		var t = new eui.Image();
		this.actioncard103 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 365;
		t.y = 2;
		t.elementsContent = [this._Image20_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "sss_topNotice";
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
		t.size = 25;
		t.text = "哈哈哈范德萨发顺丰哈发起解散3/5人同意";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.x = 27.5;
		t.y = 15.81;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 365;
		t.y = 0;
		t.elementsContent = [this._Image21_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "sss_topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.size = 25;
		t.text = "加入了房间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.x = 27.5;
		t.y = 15.81;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "inviteJIANtou_png";
		t.visible = false;
		return t;
	};
	_proto.actiopnGroup_i = function () {
		var t = new eui.Group();
		this.actiopnGroup = t;
		t.height = 105;
		t.width = 815;
		t.x = 192.5;
		t.y = 414.49;
		t.elementsContent = [this.actionBtnGroup0_i(),this.actionBtnGroup1_i(),this.actionBtnGroup2_i(),this.actionBtnGroup3_i(),this.actionBtnGroup4_i(),this.actionBtnGroup5_i()];
		return t;
	};
	_proto.actionBtnGroup0_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup0 = t;
		t.height = 97;
		t.verticalCenter = 0;
		t.width = 98;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn0_i()];
		return t;
	};
	_proto.actionBtn0_i = function () {
		var t = new eui.Button();
		this.actionBtn0 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin46;
		return t;
	};
	_proto.actionBtnGroup1_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup1 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn1_i(),this.card10_i()];
		return t;
	};
	_proto.actionBtn1_i = function () {
		var t = new eui.Button();
		this.actionBtn1 = t;
		t.anchorOffsetX = 86;
		t.anchorOffsetY = 67.5;
		t.horizontalCenter = -17.5;
		t.label = "";
		t.verticalCenter = -0.5;
		t.skinName = hzmjIndex$Skin47;
		return t;
	};
	_proto.card10_i = function () {
		var t = new eui.Image();
		this.card10 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.actionBtnGroup2_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup2 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 151;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn2_i(),this.card20_i()];
		return t;
	};
	_proto.actionBtn2_i = function () {
		var t = new eui.Button();
		this.actionBtn2 = t;
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 68;
		t.horizontalCenter = -15;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin48;
		return t;
	};
	_proto.card20_i = function () {
		var t = new eui.Image();
		this.card20 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup3_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup3 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn3_i(),this.card30_i()];
		return t;
	};
	_proto.actionBtn3_i = function () {
		var t = new eui.Button();
		this.actionBtn3 = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 67;
		t.horizontalCenter = -19.5;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = hzmjIndex$Skin49;
		return t;
	};
	_proto.card30_i = function () {
		var t = new eui.Image();
		this.card30 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup4_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup4 = t;
		t.height = 104;
		t.verticalCenter = 0.5;
		t.width = 143;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn4_i(),this.card40_i()];
		return t;
	};
	_proto.actionBtn4_i = function () {
		var t = new eui.Button();
		this.actionBtn4 = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 69;
		t.horizontalCenter = -10;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin50;
		return t;
	};
	_proto.card40_i = function () {
		var t = new eui.Image();
		this.card40 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup5_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup5 = t;
		t.height = 104;
		t.verticalCenter = 1;
		t.width = 100;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn5_i()];
		return t;
	};
	_proto.actionBtn5_i = function () {
		var t = new eui.Button();
		this.actionBtn5 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 57;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin51;
		return t;
	};
	_proto.inviteBtnGroup_i = function () {
		var t = new eui.Group();
		this.inviteBtnGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 30;
		t.y = 405;
		t.elementsContent = [this.inviteBtn_i()];
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new eui.Button();
		this.inviteBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin52;
		return t;
	};
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.width = 30;
		t.y = 405;
		t.elementsContent = [this.startBtn_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin53;
		return t;
	};
	_proto.readyBtnGroup_i = function () {
		var t = new eui.Group();
		this.readyBtnGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 30;
		t.y = 405;
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
		t.skinName = hzmjIndex$Skin54;
		return t;
	};
	_proto.ready_disband_i = function () {
		var t = new eui.Button();
		this.ready_disband = t;
		t.horizontalCenter = 401;
		t.label = "";
		t.verticalCenter = 271.5;
		t.visible = false;
		t.skinName = hzmjIndex$Skin55;
		return t;
	};
	_proto.menban0_i = function () {
		var t = new eui.Rect();
		this.menban0 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomRuleUI_i = function () {
		var t = new eui.Group();
		this.roomRuleUI = t;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ruleMenabn_i(),this._Group29_i()];
		return t;
	};
	_proto.ruleMenabn_i = function () {
		var t = new eui.Image();
		this.ruleMenabn = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.x = 118.5;
		t.y = 129.5;
		t.elementsContent = [this._Image22_i(),this.roomPwdRule_i(),this.playcount_i(),this.peopleCount_i(),this.wanfaText_i(),this.laoqi_i(),this.jiafan_i(),this.fending_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.hamj_cardBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomPwdRule_i = function () {
		var t = new eui.Label();
		this.roomPwdRule = t;
		t.horizontalCenter = -3;
		t.text = "888888";
		t.textColor = 0x870808;
		t.y = 11.97;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.size = 25;
		t.text = "局数：80";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 89.12;
		return t;
	};
	_proto.peopleCount_i = function () {
		var t = new eui.Label();
		this.peopleCount = t;
		t.size = 25;
		t.text = "人数：4人";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 129.12;
		return t;
	};
	_proto.wanfaText_i = function () {
		var t = new eui.Label();
		this.wanfaText = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "玩法：三财加番，无地老七，128饭封顶";
		t.textColor = 0x870808;
		t.visible = false;
		t.width = 210;
		t.x = 42.5;
		t.y = 171.88;
		return t;
	};
	_proto.laoqi_i = function () {
		var t = new eui.Label();
		this.laoqi = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 169.12;
		return t;
	};
	_proto.jiafan_i = function () {
		var t = new eui.Label();
		this.jiafan = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 209.12;
		return t;
	};
	_proto.fending_i = function () {
		var t = new eui.Label();
		this.fending = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 249.12;
		return t;
	};
	_proto.xxGroup_i = function () {
		var t = new eui.Group();
		this.xxGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 983.5;
		t.y = 382.89;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin56;
		return t;
	};
	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image23_i(),this._Group30_i(),this._Group31_i(),this._Group32_i(),this._Group33_i(),this._Group34_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xll_game_json.game_cebian_bg";
		t.width = 300;
		t.y = 0;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.width = 65;
		t.x = 77.64;
		t.y = 70;
		t.elementsContent = [this.situp_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = hzmjIndex$Skin57;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.width = 65;
		t.x = 77.64;
		t.y = 150;
		t.elementsContent = [this.wanfa_i()];
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin58;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.width = 65;
		t.x = 77.64;
		t.y = 230;
		t.elementsContent = [this.diaband_i()];
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Button();
		this.diaband = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin59;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.width = 65;
		t.x = 77.64;
		t.y = 310;
		t.elementsContent = [this.backHallBtn_i()];
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Button();
		this.backHallBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = hzmjIndex$Skin60;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.width = 65;
		t.x = 77.64;
		t.y = 390;
		t.elementsContent = [this.setting_i()];
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin61;
		return t;
	};
	_proto.waitGameStart_i = function () {
		var t = new eui.Group();
		this.waitGameStart = t;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.y = 254;
		t.elementsContent = [this._Image24_i(),this.roomOwnerText_i(),this.roomLifeNotice_i(),this.showRule_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_wait_start";
		t.y = 0;
		return t;
	};
	_proto.roomOwnerText_i = function () {
		var t = new eui.Label();
		this.roomOwnerText = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "房主：喜来乐";
		t.y = 40;
		return t;
	};
	_proto.roomLifeNotice_i = function () {
		var t = new eui.Label();
		this.roomLifeNotice = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "900秒后未开局，房间将解散！";
		t.y = 78;
		return t;
	};
	_proto.showRule_i = function () {
		var t = new eui.Label();
		this.showRule = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "32局，三人，买2马，封顶500胡";
		t.x = 10;
		t.y = 116;
		return t;
	};
	_proto.joinXiaoxiGroup_i = function () {
		var t = new eui.Group();
		this.joinXiaoxiGroup = t;
		t.visible = false;
		t.x = 7.65;
		t.y = 74.5;
		t.elementsContent = [this._Image25_i(),this._Scroller1_i(),this._Scroller2_i(),this._Image40_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_xiaoxi_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 150;
		t.horizontalCenter = 2;
		t.width = 200;
		t.y = 43.83;
		t.viewport = this.comePeopleList_i();
		return t;
	};
	_proto.comePeopleList_i = function () {
		var t = new eui.Group();
		this.comePeopleList = t;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 150;
		t.horizontalCenter = 2;
		t.width = 200;
		t.y = 230.5;
		t.viewport = this.watchingPeopleList_i();
		return t;
	};
	_proto.watchingPeopleList_i = function () {
		var t = new eui.Group();
		this.watchingPeopleList = t;
		t.elementsContent = [this._Group42_i(),this._Group50_i()];
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 194;
		t.y = 0;
		t.elementsContent = [this._Image26_i(),this._Group41_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,13,11,12);
		t.source = "xll_game_json.game_xiaoxi_huibg";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 6;
		t.elementsContent = [this._Group36_i(),this._Group38_i(),this._Group40_i()];
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group35_i(),this._Label4_i()];
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image27_i(),this._Image28_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 63;
		t.y = 0;
		t.elementsContent = [this._Group37_i(),this._Label5_i()];
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image29_i(),this._Image30_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 126;
		t.y = 0;
		t.elementsContent = [this._Group39_i(),this._Label6_i()];
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image31_i(),this._Image32_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 194;
		t.y = 74.8;
		t.elementsContent = [this._Image33_i(),this._Group49_i()];
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,13,11,12);
		t.source = "xll_game_json.game_xiaoxi_huibg";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 6;
		t.elementsContent = [this._Group44_i(),this._Group46_i(),this._Group48_i()];
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group43_i(),this._Label7_i()];
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image34_i(),this._Image35_i()];
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 63;
		t.y = 0;
		t.elementsContent = [this._Group45_i(),this._Label8_i()];
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image36_i(),this._Image37_i()];
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 126;
		t.y = 0;
		t.elementsContent = [this._Group47_i(),this._Label9_i()];
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image38_i(),this._Image39_i()];
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "xll_game_json.game_xiaoxi_pangguan";
		t.y = 197.35;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 983;
		t.y = 309.45;
		t.elementsContent = [this.lyNoticeGroup_i(),this.voiceplay_i()];
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = 0;
		t.y = -92.66;
		t.elementsContent = [this._Image41_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image41_i = function () {
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
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin62;
		return t;
	};
	_proto.luying_i = function () {
		var t = new eui.Group();
		this.luying = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image42_i(),this._Group51_i()];
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.source = "jiesan_json.voiceBG";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		t.x = 83;
		t.y = 17;
		t.elementsContent = [this.voice1_i(),this.voice2_i(),this.voice3_i(),this.voice4_i()];
		return t;
	};
	_proto.voice1_i = function () {
		var t = new eui.Image();
		this.voice1 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_1";
		t.y = 54;
		return t;
	};
	_proto.voice2_i = function () {
		var t = new eui.Image();
		this.voice2 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_2";
		t.y = 36;
		return t;
	};
	_proto.voice3_i = function () {
		var t = new eui.Image();
		this.voice3 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_3";
		t.y = 18;
		return t;
	};
	_proto.voice4_i = function () {
		var t = new eui.Image();
		this.voice4 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_4";
		t.y = 0;
		return t;
	};
	_proto.actionShow_i = function () {
		var t = new eui.Group();
		this.actionShow = t;
		t.height = 418;
		t.verticalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image43_i(),this._Group52_i()];
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,0,8,417);
		t.source = "xll_game_json.many_action_bg";
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		t.height = 112;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 690;
		t.elementsContent = [this.selectedChi_i(),this.selectedGang_i(),this.actionShowCardGroup_i(),this.actionShowTitle_i()];
		return t;
	};
	_proto.selectedChi_i = function () {
		var t = new eui.Group();
		this.selectedChi = t;
		t.horizontalCenter = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.visible = false;
		t.elementsContent = [this.chi0_i(),this.chi1_i(),this.chi2_i()];
		return t;
	};
	_proto.chi0_i = function () {
		var t = new eui.Group();
		this.chi0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard02_i(),this.chiCard01_i(),this.chiCard00_i()];
		return t;
	};
	_proto.chiCard02_i = function () {
		var t = new eui.Image();
		this.chiCard02 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard01_i = function () {
		var t = new eui.Image();
		this.chiCard01 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard00_i = function () {
		var t = new eui.Image();
		this.chiCard00 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi1_i = function () {
		var t = new eui.Group();
		this.chi1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard12_i(),this.chiCard11_i(),this.chiCard10_i()];
		return t;
	};
	_proto.chiCard12_i = function () {
		var t = new eui.Image();
		this.chiCard12 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard11_i = function () {
		var t = new eui.Image();
		this.chiCard11 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard10_i = function () {
		var t = new eui.Image();
		this.chiCard10 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi2_i = function () {
		var t = new eui.Group();
		this.chi2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard22_i(),this.chiCard21_i(),this.chiCard20_i()];
		return t;
	};
	_proto.chiCard22_i = function () {
		var t = new eui.Image();
		this.chiCard22 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard21_i = function () {
		var t = new eui.Image();
		this.chiCard21 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard20_i = function () {
		var t = new eui.Image();
		this.chiCard20 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectedGang_i = function () {
		var t = new eui.Group();
		this.selectedGang = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.gang3_i(),this.gang2_i(),this.gang1_i(),this.gang0_i()];
		return t;
	};
	_proto.gang3_i = function () {
		var t = new eui.Image();
		this.gang3 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.verticalCenter = 0;
		t.x = 302.74;
		return t;
	};
	_proto.gang2_i = function () {
		var t = new eui.Image();
		this.gang2 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.verticalCenter = 0;
		t.x = 207.27;
		return t;
	};
	_proto.gang1_i = function () {
		var t = new eui.Image();
		this.gang1 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.verticalCenter = 0;
		t.x = 113.28;
		return t;
	};
	_proto.gang0_i = function () {
		var t = new eui.Image();
		this.gang0 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.verticalCenter = 0;
		t.x = 19.38;
		return t;
	};
	_proto.actionShowCardGroup_i = function () {
		var t = new eui.Group();
		this.actionShowCardGroup = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 132.88;
		t.y = 12;
		t.elementsContent = [this.gang7_i(),this.gang6_i(),this.gang5_i(),this.gang4_i(),this.gang8_i(),this.gang9_i(),this.gang10_i(),this.gang11_i(),this.gang12_i(),this.gang13_i()];
		return t;
	};
	_proto.gang7_i = function () {
		var t = new eui.Image();
		this.gang7 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gang6_i = function () {
		var t = new eui.Image();
		this.gang6 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.gang5_i = function () {
		var t = new eui.Image();
		this.gang5 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 160;
		t.y = 0;
		return t;
	};
	_proto.gang4_i = function () {
		var t = new eui.Image();
		this.gang4 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto.gang8_i = function () {
		var t = new eui.Image();
		this.gang8 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 320;
		t.y = 0;
		return t;
	};
	_proto.gang9_i = function () {
		var t = new eui.Image();
		this.gang9 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 400;
		t.y = 0;
		return t;
	};
	_proto.gang10_i = function () {
		var t = new eui.Image();
		this.gang10 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 480;
		t.y = 0;
		return t;
	};
	_proto.gang11_i = function () {
		var t = new eui.Image();
		this.gang11 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 560;
		t.y = 0;
		return t;
	};
	_proto.gang12_i = function () {
		var t = new eui.Image();
		this.gang12 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 640;
		t.y = 0;
		return t;
	};
	_proto.gang13_i = function () {
		var t = new eui.Image();
		this.gang13 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto.actionShowTitle_i = function () {
		var t = new eui.Image();
		this.actionShowTitle = t;
		t.source = "xll_game_json.many_chi_title";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image44_i(),this.juhua_i(),this._Label10_i()];
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "juhua_png";
		t.y = 265;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "正在连接服务器，请稍候……";
		t.y = 397;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.height = 640;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return hzmjIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/hzmjIndex_Huifang2.exml'] = window.hzmjIndex_Huifang2 = (function (_super) {
	__extends(hzmjIndex_Huifang2, _super);
	var hzmjIndex_Huifang2$Skin63 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin63, _super);
		function hzmjIndex_Huifang2$Skin63() {
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
		var _proto = hzmjIndex_Huifang2$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_menu_btn";
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
		return hzmjIndex_Huifang2$Skin63;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin64 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin64, _super);
		function hzmjIndex_Huifang2$Skin64() {
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
		var _proto = hzmjIndex_Huifang2$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_xiaoxi_jilu_btn";
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
		return hzmjIndex_Huifang2$Skin64;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin65 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin65, _super);
		function hzmjIndex_Huifang2$Skin65() {
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
		var _proto = hzmjIndex_Huifang2$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_dingwei_btn";
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
		return hzmjIndex_Huifang2$Skin65;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin66 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin66, _super);
		function hzmjIndex_Huifang2$Skin66() {
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
		var _proto = hzmjIndex_Huifang2$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.hzmj_cardBtn";
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
		return hzmjIndex_Huifang2$Skin66;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin67 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin67, _super);
		function hzmjIndex_Huifang2$Skin67() {
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
		var _proto = hzmjIndex_Huifang2$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_invite_btn";
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
		return hzmjIndex_Huifang2$Skin67;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin68 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin68, _super);
		function hzmjIndex_Huifang2$Skin68() {
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
		var _proto = hzmjIndex_Huifang2$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_start_btn";
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
		return hzmjIndex_Huifang2$Skin68;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin69 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin69, _super);
		function hzmjIndex_Huifang2$Skin69() {
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
		var _proto = hzmjIndex_Huifang2$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_ready_btn";
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
		return hzmjIndex_Huifang2$Skin69;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin70 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin70, _super);
		function hzmjIndex_Huifang2$Skin70() {
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
		var _proto = hzmjIndex_Huifang2$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hamj_btn_js";
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
		return hzmjIndex_Huifang2$Skin70;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin71 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin71, _super);
		function hzmjIndex_Huifang2$Skin71() {
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
		var _proto = hzmjIndex_Huifang2$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.game_yy_btn";
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
		return hzmjIndex_Huifang2$Skin71;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin72 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin72, _super);
		function hzmjIndex_Huifang2$Skin72() {
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
		var _proto = hzmjIndex_Huifang2$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.game_chat_btn";
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
		return hzmjIndex_Huifang2$Skin72;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin73 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin73, _super);
		function hzmjIndex_Huifang2$Skin73() {
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
		var _proto = hzmjIndex_Huifang2$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_zqpg_title";
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
		return hzmjIndex_Huifang2$Skin73;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin74 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin74, _super);
		function hzmjIndex_Huifang2$Skin74() {
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
		var _proto = hzmjIndex_Huifang2$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_rule_title";
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
		return hzmjIndex_Huifang2$Skin74;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin75 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin75, _super);
		function hzmjIndex_Huifang2$Skin75() {
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
		var _proto = hzmjIndex_Huifang2$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_sqjs_title";
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
		return hzmjIndex_Huifang2$Skin75;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin76 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin76, _super);
		function hzmjIndex_Huifang2$Skin76() {
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
		var _proto = hzmjIndex_Huifang2$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_fhdt_title";
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
		return hzmjIndex_Huifang2$Skin76;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin77 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin77, _super);
		function hzmjIndex_Huifang2$Skin77() {
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
		var _proto = hzmjIndex_Huifang2$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_cebian_set_title";
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
		return hzmjIndex_Huifang2$Skin77;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin78 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin78, _super);
		function hzmjIndex_Huifang2$Skin78() {
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
		var _proto = hzmjIndex_Huifang2$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HJMJbtn_type1";
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
		return hzmjIndex_Huifang2$Skin78;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin79 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin79, _super);
		function hzmjIndex_Huifang2$Skin79() {
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
		var _proto = hzmjIndex_Huifang2$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type2";
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
		return hzmjIndex_Huifang2$Skin79;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin80 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin80, _super);
		function hzmjIndex_Huifang2$Skin80() {
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
		var _proto = hzmjIndex_Huifang2$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type3";
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
		return hzmjIndex_Huifang2$Skin80;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin81 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin81, _super);
		function hzmjIndex_Huifang2$Skin81() {
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
		var _proto = hzmjIndex_Huifang2$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type4";
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
		return hzmjIndex_Huifang2$Skin81;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin82 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin82, _super);
		function hzmjIndex_Huifang2$Skin82() {
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
		var _proto = hzmjIndex_Huifang2$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type5";
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
		return hzmjIndex_Huifang2$Skin82;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin83 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin83, _super);
		function hzmjIndex_Huifang2$Skin83() {
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
		var _proto = hzmjIndex_Huifang2$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex_Huifang2$Skin83;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin84 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin84, _super);
		function hzmjIndex_Huifang2$Skin84() {
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
		var _proto = hzmjIndex_Huifang2$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HJMJbtn_type1";
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
		return hzmjIndex_Huifang2$Skin84;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin85 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin85, _super);
		function hzmjIndex_Huifang2$Skin85() {
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
		var _proto = hzmjIndex_Huifang2$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type2";
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
		return hzmjIndex_Huifang2$Skin85;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin86 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin86, _super);
		function hzmjIndex_Huifang2$Skin86() {
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
		var _proto = hzmjIndex_Huifang2$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type3";
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
		return hzmjIndex_Huifang2$Skin86;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin87 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin87, _super);
		function hzmjIndex_Huifang2$Skin87() {
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
		var _proto = hzmjIndex_Huifang2$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type4";
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
		return hzmjIndex_Huifang2$Skin87;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin88 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin88, _super);
		function hzmjIndex_Huifang2$Skin88() {
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
		var _proto = hzmjIndex_Huifang2$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type5";
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
		return hzmjIndex_Huifang2$Skin88;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin89 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin89, _super);
		function hzmjIndex_Huifang2$Skin89() {
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
		var _proto = hzmjIndex_Huifang2$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex_Huifang2$Skin89;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin90 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin90, _super);
		function hzmjIndex_Huifang2$Skin90() {
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
		var _proto = hzmjIndex_Huifang2$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HJMJbtn_type1";
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
		return hzmjIndex_Huifang2$Skin90;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin91 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin91, _super);
		function hzmjIndex_Huifang2$Skin91() {
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
		var _proto = hzmjIndex_Huifang2$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type2";
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
		return hzmjIndex_Huifang2$Skin91;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin92 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin92, _super);
		function hzmjIndex_Huifang2$Skin92() {
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
		var _proto = hzmjIndex_Huifang2$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type3";
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
		return hzmjIndex_Huifang2$Skin92;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin93 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin93, _super);
		function hzmjIndex_Huifang2$Skin93() {
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
		var _proto = hzmjIndex_Huifang2$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type4";
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
		return hzmjIndex_Huifang2$Skin93;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin94 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin94, _super);
		function hzmjIndex_Huifang2$Skin94() {
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
		var _proto = hzmjIndex_Huifang2$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type5";
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
		return hzmjIndex_Huifang2$Skin94;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin95 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin95, _super);
		function hzmjIndex_Huifang2$Skin95() {
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
		var _proto = hzmjIndex_Huifang2$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex_Huifang2$Skin95;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin96 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin96, _super);
		function hzmjIndex_Huifang2$Skin96() {
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
		var _proto = hzmjIndex_Huifang2$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HJMJbtn_type1";
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
		return hzmjIndex_Huifang2$Skin96;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin97 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin97, _super);
		function hzmjIndex_Huifang2$Skin97() {
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
		var _proto = hzmjIndex_Huifang2$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type2";
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
		return hzmjIndex_Huifang2$Skin97;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin98 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin98, _super);
		function hzmjIndex_Huifang2$Skin98() {
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
		var _proto = hzmjIndex_Huifang2$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type3";
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
		return hzmjIndex_Huifang2$Skin98;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin99 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin99, _super);
		function hzmjIndex_Huifang2$Skin99() {
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
		var _proto = hzmjIndex_Huifang2$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type4";
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
		return hzmjIndex_Huifang2$Skin99;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin100 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin100, _super);
		function hzmjIndex_Huifang2$Skin100() {
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
		var _proto = hzmjIndex_Huifang2$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_game_json.HZMJbtn_type5";
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
		return hzmjIndex_Huifang2$Skin100;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin101 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin101, _super);
		function hzmjIndex_Huifang2$Skin101() {
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
		var _proto = hzmjIndex_Huifang2$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex_Huifang2$Skin101;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin102 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin102, _super);
		function hzmjIndex_Huifang2$Skin102() {
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
		var _proto = hzmjIndex_Huifang2$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanji_bg6_png";
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
		return hzmjIndex_Huifang2$Skin102;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin103 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin103, _super);
		function hzmjIndex_Huifang2$Skin103() {
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
		var _proto = hzmjIndex_Huifang2$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanji_bg9_png";
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
		return hzmjIndex_Huifang2$Skin103;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin104 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin104, _super);
		function hzmjIndex_Huifang2$Skin104() {
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
		var _proto = hzmjIndex_Huifang2$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanji_bg8_png";
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
		return hzmjIndex_Huifang2$Skin104;
	})(eui.Skin);

	var hzmjIndex_Huifang2$Skin105 = 	(function (_super) {
		__extends(hzmjIndex_Huifang2$Skin105, _super);
		function hzmjIndex_Huifang2$Skin105() {
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
		var _proto = hzmjIndex_Huifang2$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanji_bg7_png";
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
		return hzmjIndex_Huifang2$Skin105;
	})(eui.Skin);

	function hzmjIndex_Huifang2() {
		_super.call(this);
		this.skinParts = ["ownhua0","ownhuaGroup0","nohua0","nohuaGrpup0","huaGoup0","ownhua1","ownhuaGroup1","nohua1","nohuaGrpup1","huaGoup1","ownhua2","ownhuaGroup2","nohua2","nohuaGrpup2","huaGoup2","ownhua3","ownhuaGroup3","nohua3","nohuaGrpup3","huaGoup3","huaCard00","huaCard01","huaCard02","huaCard03","huaCard04","huaCard05","huaCard06","huaCard07","huaCardGroup0","huaCard17","huaCard16","huaCard15","huaCard14","huaCard13","huaCard12","huaCard11","huaCard10","huaCardGroup1","huaCard27","huaCard26","huaCard25","huaCard24","huaCard23","huaCard22","huaCard21","huaCard20","huaCardGroup2","huaCard30","huaCard31","huaCard32","huaCard33","huaCard34","huaCard35","huaCard36","huaCard37","huaCardGroup3","menu","playerBtn","havePeopleComing","locationBtn","headImg4","roomOwner4","zhuang4","headbox4","nickname4","score4","headImg1","roomOwner1","zhuang1","headbox1","nickname1","score1","headImg2","roomOwner2","zhuang2","headbox2","nickname2","score2","headImg3","roomOwner3","zhuang3","headbox3","nickname3","score3","positionBg","position3","position1","position0","position2","daojishi","restMaCardNum","restMaCardGroup","huNum","hunumGroup","dirGroup","ready0","ready1","ready3","ready2","roompwd","jushu","ruleBtnT","handCard00","handCard01","handCard02","handCard03","handCard04","handCard05","handCard06","handCard07","handCard08","handCard09","handCard010","handCard011","handCard012","moCard0","HandCard0","moCard1","handCard112","handCard111","handCard110","handCard19","handCard18","handCard17","handCard16","handCard15","handCard14","handCard13","handCard12","handCard11","handCard10","HandCard1","moCard2","handCard212","handCard211","handCard210","handCard29","handCard28","handCard27","handCard26","handCard25","handCard24","handCard23","handCard22","handCard21","handCard20","HandCard2","handCard30","handCard31","handCard32","handCard33","handCard34","handCard35","handCard36","handCard37","handCard38","handCard39","handCard310","handCard311","handCard312","moCard3","HandCard3","outCard033","outCard034","outCard035","outCard036","outCard037","outCard038","outCard039","outCard040","outCard041","outCard042","outCard043","outCard022","outCard023","outCard024","outCard025","outCard026","outCard027","outCard028","outCard029","outCard030","outCard031","outCard032","outCard011","outCard012","outCard013","outCard014","outCard015","outCard016","outCard017","outCard018","outCard019","outCard020","outCard021","outCard00","outCard01","outCard02","outCard03","outCard04","outCard05","outCard06","outCard07","outCard08","outCard09","outCard010","outCard0","outCard210","outCard29","outCard28","outCard27","outCard26","outCard25","outCard24","outCard23","outCard22","outCard21","outCard20","outCard221","outCard220","outCard219","outCard218","outCard217","outCard216","outCard215","outCard214","outCard213","outCard212","outCard211","outCard232","outCard231","outCard230","outCard229","outCard228","outCard227","outCard226","outCard225","outCard224","outCard223","outCard222","outCard243","outCard242","outCard241","outCard240","outCard239","outCard238","outCard237","outCard236","outCard235","outCard234","outCard233","outCard2","outCard133","outCard134","outCard135","outCard136","outCard137","outCard138","outCard139","outCard140","outCard141","outCard142","outCard143","outCard132","outCard131","outCard130","outCard129","outCard128","outCard127","outCard126","outCard125","outCard124","outCard123","outCard122","outCard121","outCard120","outCard119","outCard118","outCard117","outCard116","outCard115","outCard114","outCard113","outCard112","outCard111","outCard110","outCard19","outCard18","outCard17","outCard16","outCard15","outCard14","outCard13","outCard12","outCard11","outCard10","outCard1","outCard30","outCard31","outCard32","outCard33","outCard34","outCard35","outCard36","outCard37","outCard38","outCard39","outCard310","outCard311","outCard312","outCard313","outCard314","outCard315","outCard316","outCard317","outCard318","outCard319","outCard320","outCard321","outCard322","outCard323","outCard324","outCard325","outCard326","outCard327","outCard328","outCard329","outCard330","outCard331","outCard332","outCard333","outCard334","outCard335","outCard336","outCard337","outCard338","outCard339","outCard340","outCard341","outCard342","outCard343","outCard3","actioncard000","actioncard001","actioncard002","actioncard003","actionItem00","actioncard010","actioncard011","actioncard012","actioncard013","actionItem01","actioncard020","actioncard021","actioncard022","actioncard023","actionItem02","actioncard030","actioncard031","actioncard032","actioncard033","actionItem03","actionCardGroud0","actioncard200","actioncard201","actioncard202","actioncard203","actionItem20","actioncard210","actioncard211","actioncard212","actioncard213","actionItem21","actioncard220","actioncard221","actioncard222","actioncard223","actionItem22","actioncard230","actioncard231","actioncard232","actioncard233","actionItem23","actionCardGroud2","actioncard300","actioncard301","actioncard302","actioncard303","actionItem30","actioncard310","actioncard311","actioncard312","actioncard313","actionItem31","actioncard320","actioncard321","actioncard322","actioncard323","actionItem32","actioncard330","actioncard331","actioncard332","actioncard333","actionItem33","actionCardGroud3","actioncard132","actioncard131","actioncard130","actioncard133","actionItem13","actioncard122","actioncard121","actioncard120","actioncard123","actionItem12","actioncard112","actioncard111","actioncard110","actioncard113","actionItem11","actioncard102","actioncard101","actioncard100","actioncard103","actionItem10","actionCardGroud1","dimissProcess","dismissGroup","whoJoin","joinNotice","yaoqing","inviteBtn","inviteBtnGroup","startBtn","startBtnGroup","readyBtn","readyBtnGroup","ready_disband","menban0","ruleMenabn","roomPwdRule","playcount","peopleCount","wanfaText","laoqi","jiafan","fending","roomRuleUI","voice1","voice2","voice3","voice4","luying","voiceplay","yyGroup","xiaoxi","xxGroup","situp","wanfa","diaband","backHallBtn","setting","menulist","roomOwnerText","roomLifeNotice","showRule","waitGameStart","comePeopleList","watchingPeopleList","joinXiaoxiGroup","actionBtn00","actionBtnGroup00","actionBtn01","card010","chiCard002","chiCard001","chiCard000","chi00","chiCard012","chiCard011","chiCard010","chi01","chiCard022","chiCard021","chiCard020","chi02","selectedChi0","actionBtnGroup01","actionBtn02","card020","actionBtnGroup02","actionBtn03","card030","actionBtnGroup03","actionBtn04","card040","actionBtnGroup04","actionBtn05","actionBtnGroup05","actiopnGroup0","actionBtn10","actionBtnGroup10","actionBtn11","card110","chiCard102","chiCard101","chiCard100","chi10","chiCard112","chiCard111","chiCard110","chi11","chiCard122","chiCard121","chiCard120","chi12","selectedChi1","actionBtnGroup11","actionBtn12","card120","actionBtnGroup12","actionBtn13","card130","actionBtnGroup13","actionBtn14","card140","actionBtnGroup14","actionBtn15","actionBtnGroup15","actiopnGroup1","actionBtn20","actionBtnGroup20","actionBtn21","card210","chiCard202","chiCard201","chiCard200","chi20","chiCard212","chiCard211","chiCard210","chi21","chiCard222","chiCard221","chiCard220","chi22","selectedChi2","actionBtnGroup21","actionBtn22","card220","actionBtnGroup22","actionBtn23","card230","actionBtnGroup23","actionBtn24","card240","actionBtnGroup24","actionBtn25","actionBtnGroup25","actiopnGroup2","actionBtn30","actionBtnGroup30","actionBtn31","card310","chiCard302","chiCard301","chiCard300","chi30","chiCard312","chiCard311","chiCard310","chi31","chiCard322","chiCard321","chiCard320","chi32","selectedChi3","actionBtnGroup31","actionBtn32","card320","actionBtnGroup32","actionBtn33","card330","actionBtnGroup33","actionBtn34","card340","actionBtnGroup34","actionBtn35","actionBtnGroup35","actiopnGroup3","nextStepBtn","huifangStartBtn","huifangStartGroup","parseBtn","parseGroup","resetBtn","resetGroup","huifangGroup","juhua","waitConnect","chiCard02","chiCard01","chiCard00","chi0","chiCard12","chiCard11","chiCard10","chi1","chiCard22","chiCard21","chiCard20","chi2","selectedChi","gang3","gang2","gang1","gang0","selectedGang","gang7","gang6","gang5","gang4","gang8","gang9","gang10","gang11","gang12","gang13","actionShowCardGroup","actionShowTitle","actionShow","menban","backHallBtnHF"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this.huaGoup0_i(),this.huaGoup1_i(),this.huaGoup2_i(),this.huaGoup3_i(),this.huaCardGroup0_i(),this.huaCardGroup1_i(),this.huaCardGroup2_i(),this.huaCardGroup3_i(),this._Group4_i(),this._Group5_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this.dirGroup_i(),this.ready0_i(),this.ready1_i(),this.ready3_i(),this.ready2_i(),this._Group13_i(),this.ruleBtnT_i(),this.HandCard0_i(),this.HandCard1_i(),this.HandCard2_i(),this.HandCard3_i(),this.outCard0_i(),this.outCard2_i(),this.outCard1_i(),this.outCard3_i(),this.actionCardGroud0_i(),this.actionCardGroud2_i(),this.actionCardGroud3_i(),this.actionCardGroud1_i(),this.dismissGroup_i(),this.joinNotice_i(),this.yaoqing_i(),this.inviteBtnGroup_i(),this.startBtnGroup_i(),this.readyBtnGroup_i(),this.ready_disband_i(),this.menban0_i(),this.roomRuleUI_i(),this.luying_i(),this.yyGroup_i(),this.xxGroup_i(),this.menulist_i(),this.waitGameStart_i(),this.joinXiaoxiGroup_i(),this.actiopnGroup0_i(),this.actiopnGroup1_i(),this.actiopnGroup2_i(),this.actiopnGroup3_i(),this.huifangGroup_i(),this.waitConnect_i(),this.actionShow_i(),this.menban_i(),this.backHallBtnHF_i()];
	}
	var _proto = hzmjIndex_Huifang2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "ttmj_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaGoup0_i = function () {
		var t = new eui.Group();
		this.huaGoup0 = t;
		t.height = 55;
		t.width = 58;
		t.x = 163.12;
		t.y = 416.75;
		t.elementsContent = [this.ownhuaGroup0_i(),this.nohuaGrpup0_i()];
		return t;
	};
	_proto.ownhuaGroup0_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup0 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.ownhua0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_menfen";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.ownhua0_i = function () {
		var t = new eui.Label();
		this.ownhua0 = t;
		t.size = 20;
		t.text = "x10";
		t.verticalCenter = 0.5;
		t.x = 25;
		return t;
	};
	_proto.nohuaGrpup0_i = function () {
		var t = new eui.Group();
		this.nohuaGrpup0 = t;
		t.horizontalCenter = 0;
		t.y = 33.33;
		t.elementsContent = [this._Image3_i(),this.nohua0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_hua";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.nohua0_i = function () {
		var t = new eui.Label();
		this.nohua0 = t;
		t.size = 20;
		t.text = "x10";
		t.verticalAlign = "justify";
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.huaGoup1_i = function () {
		var t = new eui.Group();
		this.huaGoup1 = t;
		t.height = 55;
		t.width = 58;
		t.x = 985.09;
		t.y = 314.44;
		t.elementsContent = [this.ownhuaGroup1_i(),this.nohuaGrpup1_i()];
		return t;
	};
	_proto.ownhuaGroup1_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup1 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.ownhua1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_menfen";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.ownhua1_i = function () {
		var t = new eui.Label();
		this.ownhua1 = t;
		t.size = 20;
		t.text = "x10";
		t.verticalCenter = 0.5;
		t.x = 25;
		return t;
	};
	_proto.nohuaGrpup1_i = function () {
		var t = new eui.Group();
		this.nohuaGrpup1 = t;
		t.horizontalCenter = 0;
		t.y = 33.33;
		t.elementsContent = [this._Image5_i(),this.nohua1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_hua";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.nohua1_i = function () {
		var t = new eui.Label();
		this.nohua1 = t;
		t.size = 20;
		t.text = "x10";
		t.verticalAlign = "justify";
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.huaGoup2_i = function () {
		var t = new eui.Group();
		this.huaGoup2 = t;
		t.x = 345.48;
		t.y = 78.31;
		t.elementsContent = [this.ownhuaGroup2_i(),this.nohuaGrpup2_i()];
		return t;
	};
	_proto.ownhuaGroup2_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup2 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.ownhua2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_menfen";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.ownhua2_i = function () {
		var t = new eui.Label();
		this.ownhua2 = t;
		t.size = 20;
		t.text = "x10";
		t.verticalCenter = 0.5;
		t.x = 25;
		return t;
	};
	_proto.nohuaGrpup2_i = function () {
		var t = new eui.Group();
		this.nohuaGrpup2 = t;
		t.x = 70;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.nohua2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_hua";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.nohua2_i = function () {
		var t = new eui.Label();
		this.nohua2 = t;
		t.size = 20;
		t.text = "x10";
		t.verticalAlign = "justify";
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.huaGoup3_i = function () {
		var t = new eui.Group();
		this.huaGoup3 = t;
		t.height = 55;
		t.width = 58;
		t.x = 39.48;
		t.y = 316.42;
		t.elementsContent = [this.ownhuaGroup3_i(),this.nohuaGrpup3_i()];
		return t;
	};
	_proto.ownhuaGroup3_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup3 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.ownhua3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_menfen";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.ownhua3_i = function () {
		var t = new eui.Label();
		this.ownhua3 = t;
		t.size = 20;
		t.text = "x10";
		t.verticalCenter = 0.5;
		t.x = 25;
		return t;
	};
	_proto.nohuaGrpup3_i = function () {
		var t = new eui.Group();
		this.nohuaGrpup3 = t;
		t.horizontalCenter = 0;
		t.y = 33.33;
		t.elementsContent = [this._Image9_i(),this.nohua3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_hua";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.nohua3_i = function () {
		var t = new eui.Label();
		this.nohua3 = t;
		t.size = 20;
		t.text = "x10";
		t.verticalAlign = "justify";
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.huaCardGroup0_i = function () {
		var t = new eui.Group();
		this.huaCardGroup0 = t;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.visible = false;
		t.x = 154.49;
		t.y = 480.85;
		t.elementsContent = [this.huaCard00_i(),this.huaCard01_i(),this.huaCard02_i(),this.huaCard03_i(),this.huaCard04_i(),this.huaCard05_i(),this.huaCard06_i(),this.huaCard07_i()];
		return t;
	};
	_proto.huaCard00_i = function () {
		var t = new eui.Image();
		this.huaCard00 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard01_i = function () {
		var t = new eui.Image();
		this.huaCard01 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.huaCard02_i = function () {
		var t = new eui.Image();
		this.huaCard02 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.huaCard03_i = function () {
		var t = new eui.Image();
		this.huaCard03 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.huaCard04_i = function () {
		var t = new eui.Image();
		this.huaCard04 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.huaCard05_i = function () {
		var t = new eui.Image();
		this.huaCard05 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.huaCard06_i = function () {
		var t = new eui.Image();
		this.huaCard06 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.huaCard07_i = function () {
		var t = new eui.Image();
		this.huaCard07 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.huaCardGroup1_i = function () {
		var t = new eui.Group();
		this.huaCardGroup1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 857.79;
		t.y = 107.8;
		t.elementsContent = [this.huaCard17_i(),this.huaCard16_i(),this.huaCard15_i(),this.huaCard14_i(),this.huaCard13_i(),this.huaCard12_i(),this.huaCard11_i(),this.huaCard10_i()];
		return t;
	};
	_proto.huaCard17_i = function () {
		var t = new eui.Image();
		this.huaCard17 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.huaCard16_i = function () {
		var t = new eui.Image();
		this.huaCard16 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.huaCard15_i = function () {
		var t = new eui.Image();
		this.huaCard15 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.huaCard14_i = function () {
		var t = new eui.Image();
		this.huaCard14 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.huaCard13_i = function () {
		var t = new eui.Image();
		this.huaCard13 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.huaCard12_i = function () {
		var t = new eui.Image();
		this.huaCard12 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.huaCard11_i = function () {
		var t = new eui.Image();
		this.huaCard11 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.huaCard10_i = function () {
		var t = new eui.Image();
		this.huaCard10 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto.huaCardGroup2_i = function () {
		var t = new eui.Group();
		this.huaCardGroup2 = t;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.visible = false;
		t.x = 501.25;
		t.y = 74.55;
		t.elementsContent = [this.huaCard27_i(),this.huaCard26_i(),this.huaCard25_i(),this.huaCard24_i(),this.huaCard23_i(),this.huaCard22_i(),this.huaCard21_i(),this.huaCard20_i()];
		return t;
	};
	_proto.huaCard27_i = function () {
		var t = new eui.Image();
		this.huaCard27 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.huaCard26_i = function () {
		var t = new eui.Image();
		this.huaCard26 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.huaCard25_i = function () {
		var t = new eui.Image();
		this.huaCard25 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.huaCard24_i = function () {
		var t = new eui.Image();
		this.huaCard24 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.huaCard23_i = function () {
		var t = new eui.Image();
		this.huaCard23 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.huaCard22_i = function () {
		var t = new eui.Image();
		this.huaCard22 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.huaCard21_i = function () {
		var t = new eui.Image();
		this.huaCard21 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.huaCard20_i = function () {
		var t = new eui.Image();
		this.huaCard20 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.huaCardGroup3_i = function () {
		var t = new eui.Group();
		this.huaCardGroup3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 174.9;
		t.y = 81.1;
		t.elementsContent = [this.huaCard30_i(),this.huaCard31_i(),this.huaCard32_i(),this.huaCard33_i(),this.huaCard34_i(),this.huaCard35_i(),this.huaCard36_i(),this.huaCard37_i()];
		return t;
	};
	_proto.huaCard30_i = function () {
		var t = new eui.Image();
		this.huaCard30 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard31_i = function () {
		var t = new eui.Image();
		this.huaCard31 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.huaCard32_i = function () {
		var t = new eui.Image();
		this.huaCard32 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.huaCard33_i = function () {
		var t = new eui.Image();
		this.huaCard33 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.huaCard34_i = function () {
		var t = new eui.Image();
		this.huaCard34 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.huaCard35_i = function () {
		var t = new eui.Image();
		this.huaCard35 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.huaCard36_i = function () {
		var t = new eui.Image();
		this.huaCard36 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.huaCard37_i = function () {
		var t = new eui.Image();
		this.huaCard37 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 26.96;
		t.y = 18.19;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 0;
		t.elementsContent = [this.menu_i()];
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -2;
		t.skinName = hzmjIndex_Huifang2$Skin63;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 60;
		t.elementsContent = [this.playerBtn_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto.playerBtn_i = function () {
		var t = new eui.Button();
		this.playerBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -2;
		t.skinName = hzmjIndex_Huifang2$Skin64;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.source = "xll_game_json.game_xiaoxi_tixing";
		t.x = 25.34;
		t.y = -14.01;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 120;
		t.elementsContent = [this.locationBtn_i()];
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -2;
		t.skinName = hzmjIndex_Huifang2$Skin65;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -266;
		t.visible = false;
		t.y = 4;
		t.elementsContent = [this.headbox4_i(),this.nickname4_i(),this.score4_i()];
		return t;
	};
	_proto.headbox4_i = function () {
		var t = new eui.Group();
		this.headbox4 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg4_i(),this._Image10_i(),this.roomOwner4_i(),this.zhuang4_i()];
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner4_i = function () {
		var t = new eui.Image();
		this.roomOwner4 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang4_i = function () {
		var t = new eui.Image();
		this.zhuang4 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 121;
		t.horizontalCenter = -464;
		t.visible = false;
		t.width = 108;
		t.y = 403.26;
		t.elementsContent = [this.headbox1_i(),this.nickname1_i(),this.score1_i(),this._Group6_i()];
		return t;
	};
	_proto.headbox1_i = function () {
		var t = new eui.Group();
		this.headbox1 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg1_i(),this._Image11_i(),this.roomOwner1_i(),this.zhuang1_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner1_i = function () {
		var t = new eui.Image();
		this.roomOwner1 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 44;
		t.y = -23;
		t.elementsContent = [this._Image12_i(),this._Label1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -465;
		t.verticalCenter = -70.5;
		t.visible = false;
		t.elementsContent = [this.headbox2_i(),this.nickname2_i(),this.score2_i()];
		return t;
	};
	_proto.headbox2_i = function () {
		var t = new eui.Group();
		this.headbox2 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg2_i(),this._Image13_i(),this.roomOwner2_i(),this.zhuang2_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner2_i = function () {
		var t = new eui.Image();
		this.roomOwner2 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 471;
		t.verticalCenter = -70.5;
		t.visible = false;
		t.elementsContent = [this.headbox3_i(),this.nickname3_i(),this.score3_i()];
		return t;
	};
	_proto.headbox3_i = function () {
		var t = new eui.Group();
		this.headbox3 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg3_i(),this._Image14_i(),this.roomOwner3_i(),this.zhuang3_i()];
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner3_i = function () {
		var t = new eui.Image();
		this.roomOwner3 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang3_i = function () {
		var t = new eui.Image();
		this.zhuang3 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto.dirGroup_i = function () {
		var t = new eui.Group();
		this.dirGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -8;
		t.elementsContent = [this._Group10_i(),this.restMaCardGroup_i(),this.hunumGroup_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 124;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 124;
		t.elementsContent = [this.positionBg_i(),this.position3_i(),this.position1_i(),this.position0_i(),this.position2_i(),this.daojishi_i()];
		return t;
	};
	_proto.positionBg_i = function () {
		var t = new eui.Image();
		this.positionBg = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.horizontalCenter = 0;
		t.rotation = 270;
		t.source = "xll_game_json.game_fangxiang";
		t.verticalCenter = 0;
		return t;
	};
	_proto.position3_i = function () {
		var t = new eui.Image();
		this.position3 = t;
		t.source = "xll_game_json.game_left_mask";
		t.verticalCenter = 0;
		t.x = 3.33;
		return t;
	};
	_proto.position1_i = function () {
		var t = new eui.Image();
		this.position1 = t;
		t.rotation = 0.12;
		t.source = "xll_game_json.game_right_mask";
		t.verticalCenter = 0;
		t.x = 59.16;
		return t;
	};
	_proto.position0_i = function () {
		var t = new eui.Image();
		this.position0 = t;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_bottom_mask";
		t.y = 58.4;
		return t;
	};
	_proto.position2_i = function () {
		var t = new eui.Image();
		this.position2 = t;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_top_mask";
		t.y = 4.33;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.BitmapLabel();
		this.daojishi = t;
		t.font = "deskDJS_fnt";
		t.horizontalCenter = 0;
		t.text = "10";
		t.verticalCenter = 0;
		return t;
	};
	_proto.restMaCardGroup_i = function () {
		var t = new eui.Group();
		this.restMaCardGroup = t;
		t.verticalCenter = 0;
		t.x = 266.98;
		t.elementsContent = [this._Rect1_i(),this.restMaCardNum_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0x399C7B;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 135;
		return t;
	};
	_proto.restMaCardNum_i = function () {
		var t = new eui.Label();
		this.restMaCardNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "剩20张";
		t.textAlign = "center";
		t.textColor = 0x085a3f;
		t.verticalCenter = 0;
		return t;
	};
	_proto.hunumGroup_i = function () {
		var t = new eui.Group();
		this.hunumGroup = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Rect2_i(),this.huNum_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0x399c7b;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 135;
		return t;
	};
	_proto.huNum_i = function () {
		var t = new eui.Label();
		this.huNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "500胡";
		t.textAlign = "center";
		t.textColor = 0x085A3F;
		t.verticalCenter = 0;
		return t;
	};
	_proto.ready0_i = function () {
		var t = new eui.Image();
		this.ready0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.HZMJword_ready";
		t.y = 432.48;
		return t;
	};
	_proto.ready1_i = function () {
		var t = new eui.Image();
		this.ready1 = t;
		t.horizontalCenter = 310;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.HZMJword_ready";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.ready3_i = function () {
		var t = new eui.Image();
		this.ready3 = t;
		t.horizontalCenter = -296;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.HZMJword_ready";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.ready2_i = function () {
		var t = new eui.Image();
		this.ready2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.HZMJword_ready";
		t.y = 176.42;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 881.66;
		t.y = 2.88;
		t.elementsContent = [this._Image15_i(),this._Group11_i(),this._Group12_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "xll_game_json.game_yuanjiao_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 15.32;
		t.y = 9.34;
		t.elementsContent = [this._Label2_i(),this.roompwd_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "房间号:";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "666666";
		t.verticalCenter = 0;
		t.x = 89.98;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 15.32;
		t.y = 37.63;
		t.elementsContent = [this._Label3_i(),this.jushu_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "局数:";
		t.textAlign = "center";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jushu_i = function () {
		var t = new eui.Label();
		this.jushu = t;
		t.size = 25;
		t.text = "16/16局";
		t.textAlign = "center";
		t.x = 62.66;
		t.y = 0;
		return t;
	};
	_proto.ruleBtnT_i = function () {
		var t = new eui.Button();
		this.ruleBtnT = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.touchEnabled = true;
		t.visible = false;
		t.x = 25.39;
		t.y = 85.91;
		t.skinName = hzmjIndex_Huifang2$Skin66;
		return t;
	};
	_proto.HandCard0_i = function () {
		var t = new eui.Group();
		this.HandCard0 = t;
		t.x = 15;
		t.y = 531.02;
		t.elementsContent = [this.handCard00_i(),this.handCard01_i(),this.handCard02_i(),this.handCard03_i(),this.handCard04_i(),this.handCard05_i(),this.handCard06_i(),this.handCard07_i(),this.handCard08_i(),this.handCard09_i(),this.handCard010_i(),this.handCard011_i(),this.handCard012_i(),this.moCard0_i()];
		return t;
	};
	_proto.handCard00_i = function () {
		var t = new eui.Image();
		this.handCard00 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 8.22;
		return t;
	};
	_proto.handCard01_i = function () {
		var t = new eui.Image();
		this.handCard01 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 81.22;
		return t;
	};
	_proto.handCard02_i = function () {
		var t = new eui.Image();
		this.handCard02 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 154.22;
		return t;
	};
	_proto.handCard03_i = function () {
		var t = new eui.Image();
		this.handCard03 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 227.22;
		return t;
	};
	_proto.handCard04_i = function () {
		var t = new eui.Image();
		this.handCard04 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 300.22;
		return t;
	};
	_proto.handCard05_i = function () {
		var t = new eui.Image();
		this.handCard05 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 373.22;
		return t;
	};
	_proto.handCard06_i = function () {
		var t = new eui.Image();
		this.handCard06 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 444.85;
		return t;
	};
	_proto.handCard07_i = function () {
		var t = new eui.Image();
		this.handCard07 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 517.85;
		return t;
	};
	_proto.handCard08_i = function () {
		var t = new eui.Image();
		this.handCard08 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 590.85;
		return t;
	};
	_proto.handCard09_i = function () {
		var t = new eui.Image();
		this.handCard09 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 663.85;
		return t;
	};
	_proto.handCard010_i = function () {
		var t = new eui.Image();
		this.handCard010 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 736.85;
		return t;
	};
	_proto.handCard011_i = function () {
		var t = new eui.Image();
		this.handCard011 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 809.85;
		return t;
	};
	_proto.handCard012_i = function () {
		var t = new eui.Image();
		this.handCard012 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 882.85;
		return t;
	};
	_proto.moCard0_i = function () {
		var t = new eui.Image();
		this.moCard0 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 976.65;
		t.y = 10;
		return t;
	};
	_proto.HandCard1_i = function () {
		var t = new eui.Group();
		this.HandCard1 = t;
		t.x = 912.4;
		t.y = 73.33;
		t.elementsContent = [this.moCard1_i(),this.handCard112_i(),this.handCard111_i(),this.handCard110_i(),this.handCard19_i(),this.handCard18_i(),this.handCard17_i(),this.handCard16_i(),this.handCard15_i(),this.handCard14_i(),this.handCard13_i(),this.handCard12_i(),this.handCard11_i(),this.handCard10_i()];
		return t;
	};
	_proto.moCard1_i = function () {
		var t = new eui.Image();
		this.moCard1 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.y = 0;
		return t;
	};
	_proto.handCard112_i = function () {
		var t = new eui.Image();
		this.handCard112 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.y = 55;
		return t;
	};
	_proto.handCard111_i = function () {
		var t = new eui.Image();
		this.handCard111 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 10;
		t.y = 82;
		return t;
	};
	_proto.handCard110_i = function () {
		var t = new eui.Image();
		this.handCard110 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 20;
		t.y = 109;
		return t;
	};
	_proto.handCard19_i = function () {
		var t = new eui.Image();
		this.handCard19 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 30;
		t.y = 136;
		return t;
	};
	_proto.handCard18_i = function () {
		var t = new eui.Image();
		this.handCard18 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 40;
		t.y = 163;
		return t;
	};
	_proto.handCard17_i = function () {
		var t = new eui.Image();
		this.handCard17 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 50;
		t.y = 190;
		return t;
	};
	_proto.handCard16_i = function () {
		var t = new eui.Image();
		this.handCard16 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 60;
		t.y = 217;
		return t;
	};
	_proto.handCard15_i = function () {
		var t = new eui.Image();
		this.handCard15 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 70;
		t.y = 244;
		return t;
	};
	_proto.handCard14_i = function () {
		var t = new eui.Image();
		this.handCard14 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 80;
		t.y = 271;
		return t;
	};
	_proto.handCard13_i = function () {
		var t = new eui.Image();
		this.handCard13 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 90;
		t.y = 298;
		return t;
	};
	_proto.handCard12_i = function () {
		var t = new eui.Image();
		this.handCard12 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 100;
		t.y = 325;
		return t;
	};
	_proto.handCard11_i = function () {
		var t = new eui.Image();
		this.handCard11 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 110;
		t.y = 352;
		return t;
	};
	_proto.handCard10_i = function () {
		var t = new eui.Image();
		this.handCard10 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 120;
		t.y = 377;
		return t;
	};
	_proto.HandCard2_i = function () {
		var t = new eui.Group();
		this.HandCard2 = t;
		t.horizontalCenter = 54;
		t.y = 15.01;
		t.elementsContent = [this.moCard2_i(),this.handCard212_i(),this.handCard211_i(),this.handCard210_i(),this.handCard29_i(),this.handCard28_i(),this.handCard27_i(),this.handCard26_i(),this.handCard25_i(),this.handCard24_i(),this.handCard23_i(),this.handCard22_i(),this.handCard21_i(),this.handCard20_i()];
		return t;
	};
	_proto.moCard2_i = function () {
		var t = new eui.Image();
		this.moCard2 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 0;
		return t;
	};
	_proto.handCard212_i = function () {
		var t = new eui.Image();
		this.handCard212 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 51.61;
		return t;
	};
	_proto.handCard211_i = function () {
		var t = new eui.Image();
		this.handCard211 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 89.61;
		return t;
	};
	_proto.handCard210_i = function () {
		var t = new eui.Image();
		this.handCard210 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 127.61;
		t.y = 20;
		return t;
	};
	_proto.handCard29_i = function () {
		var t = new eui.Image();
		this.handCard29 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 165.61;
		t.y = 30;
		return t;
	};
	_proto.handCard28_i = function () {
		var t = new eui.Image();
		this.handCard28 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 203.61;
		t.y = 40;
		return t;
	};
	_proto.handCard27_i = function () {
		var t = new eui.Image();
		this.handCard27 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 241.61;
		t.y = 50;
		return t;
	};
	_proto.handCard26_i = function () {
		var t = new eui.Image();
		this.handCard26 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 279.61;
		t.y = 60;
		return t;
	};
	_proto.handCard25_i = function () {
		var t = new eui.Image();
		this.handCard25 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 317.61;
		t.y = 70;
		return t;
	};
	_proto.handCard24_i = function () {
		var t = new eui.Image();
		this.handCard24 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 355.61;
		t.y = 80;
		return t;
	};
	_proto.handCard23_i = function () {
		var t = new eui.Image();
		this.handCard23 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 393.61;
		t.y = 90;
		return t;
	};
	_proto.handCard22_i = function () {
		var t = new eui.Image();
		this.handCard22 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 431.61;
		t.y = 100;
		return t;
	};
	_proto.handCard21_i = function () {
		var t = new eui.Image();
		this.handCard21 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 469.61;
		t.y = 110;
		return t;
	};
	_proto.handCard20_i = function () {
		var t = new eui.Image();
		this.handCard20 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 507.61;
		t.y = 120;
		return t;
	};
	_proto.HandCard3_i = function () {
		var t = new eui.Group();
		this.HandCard3 = t;
		t.x = 117.59;
		t.y = 84.02;
		t.elementsContent = [this.handCard30_i(),this.handCard31_i(),this.handCard32_i(),this.handCard33_i(),this.handCard34_i(),this.handCard35_i(),this.handCard36_i(),this.handCard37_i(),this.handCard38_i(),this.handCard39_i(),this.handCard310_i(),this.handCard311_i(),this.handCard312_i(),this.moCard3_i()];
		return t;
	};
	_proto.handCard30_i = function () {
		var t = new eui.Image();
		this.handCard30 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.y = 0;
		return t;
	};
	_proto.handCard31_i = function () {
		var t = new eui.Image();
		this.handCard31 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.y = 27;
		return t;
	};
	_proto.handCard32_i = function () {
		var t = new eui.Image();
		this.handCard32 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.handCard33_i = function () {
		var t = new eui.Image();
		this.handCard33 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 20;
		t.y = 81;
		return t;
	};
	_proto.handCard34_i = function () {
		var t = new eui.Image();
		this.handCard34 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 30;
		t.y = 108;
		return t;
	};
	_proto.handCard35_i = function () {
		var t = new eui.Image();
		this.handCard35 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 40;
		t.y = 135;
		return t;
	};
	_proto.handCard36_i = function () {
		var t = new eui.Image();
		this.handCard36 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 50;
		t.y = 162;
		return t;
	};
	_proto.handCard37_i = function () {
		var t = new eui.Image();
		this.handCard37 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 60;
		t.y = 189;
		return t;
	};
	_proto.handCard38_i = function () {
		var t = new eui.Image();
		this.handCard38 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 70;
		t.y = 216;
		return t;
	};
	_proto.handCard39_i = function () {
		var t = new eui.Image();
		this.handCard39 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 80;
		t.y = 243;
		return t;
	};
	_proto.handCard310_i = function () {
		var t = new eui.Image();
		this.handCard310 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 90;
		t.y = 270;
		return t;
	};
	_proto.handCard311_i = function () {
		var t = new eui.Image();
		this.handCard311 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 100;
		t.y = 297;
		return t;
	};
	_proto.handCard312_i = function () {
		var t = new eui.Image();
		this.handCard312 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 110;
		t.y = 324;
		return t;
	};
	_proto.moCard3_i = function () {
		var t = new eui.Image();
		this.moCard3 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 120;
		t.y = 378;
		return t;
	};
	_proto.outCard0_i = function () {
		var t = new eui.Group();
		this.outCard0 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.visible = false;
		t.x = 322;
		t.y = 281.07;
		t.elementsContent = [this._Group14_i(),this._Group15_i(),this._Group16_i(),this._Group17_i()];
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard033_i(),this.outCard034_i(),this.outCard035_i(),this.outCard036_i(),this.outCard037_i(),this.outCard038_i(),this.outCard039_i(),this.outCard040_i(),this.outCard041_i(),this.outCard042_i(),this.outCard043_i()];
		return t;
	};
	_proto.outCard033_i = function () {
		var t = new eui.Image();
		this.outCard033 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard034_i = function () {
		var t = new eui.Image();
		this.outCard034 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard035_i = function () {
		var t = new eui.Image();
		this.outCard035 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard036_i = function () {
		var t = new eui.Image();
		this.outCard036 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard037_i = function () {
		var t = new eui.Image();
		this.outCard037 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard038_i = function () {
		var t = new eui.Image();
		this.outCard038 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard039_i = function () {
		var t = new eui.Image();
		this.outCard039 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard040_i = function () {
		var t = new eui.Image();
		this.outCard040 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard041_i = function () {
		var t = new eui.Image();
		this.outCard041 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard042_i = function () {
		var t = new eui.Image();
		this.outCard042 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard043_i = function () {
		var t = new eui.Image();
		this.outCard043 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 82;
		t.elementsContent = [this.outCard022_i(),this.outCard023_i(),this.outCard024_i(),this.outCard025_i(),this.outCard026_i(),this.outCard027_i(),this.outCard028_i(),this.outCard029_i(),this.outCard030_i(),this.outCard031_i(),this.outCard032_i()];
		return t;
	};
	_proto.outCard022_i = function () {
		var t = new eui.Image();
		this.outCard022 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard023_i = function () {
		var t = new eui.Image();
		this.outCard023 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard024_i = function () {
		var t = new eui.Image();
		this.outCard024 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard025_i = function () {
		var t = new eui.Image();
		this.outCard025 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard026_i = function () {
		var t = new eui.Image();
		this.outCard026 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard027_i = function () {
		var t = new eui.Image();
		this.outCard027 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard028_i = function () {
		var t = new eui.Image();
		this.outCard028 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard029_i = function () {
		var t = new eui.Image();
		this.outCard029 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard030_i = function () {
		var t = new eui.Image();
		this.outCard030 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard031_i = function () {
		var t = new eui.Image();
		this.outCard031 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard032_i = function () {
		var t = new eui.Image();
		this.outCard032 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 164;
		t.elementsContent = [this.outCard011_i(),this.outCard012_i(),this.outCard013_i(),this.outCard014_i(),this.outCard015_i(),this.outCard016_i(),this.outCard017_i(),this.outCard018_i(),this.outCard019_i(),this.outCard020_i(),this.outCard021_i()];
		return t;
	};
	_proto.outCard011_i = function () {
		var t = new eui.Image();
		this.outCard011 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard012_i = function () {
		var t = new eui.Image();
		this.outCard012 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard013_i = function () {
		var t = new eui.Image();
		this.outCard013 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard014_i = function () {
		var t = new eui.Image();
		this.outCard014 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard015_i = function () {
		var t = new eui.Image();
		this.outCard015 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard016_i = function () {
		var t = new eui.Image();
		this.outCard016 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard017_i = function () {
		var t = new eui.Image();
		this.outCard017 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard018_i = function () {
		var t = new eui.Image();
		this.outCard018 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard019_i = function () {
		var t = new eui.Image();
		this.outCard019 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard020_i = function () {
		var t = new eui.Image();
		this.outCard020 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard021_i = function () {
		var t = new eui.Image();
		this.outCard021 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 246;
		t.elementsContent = [this.outCard00_i(),this.outCard01_i(),this.outCard02_i(),this.outCard03_i(),this.outCard04_i(),this.outCard05_i(),this.outCard06_i(),this.outCard07_i(),this.outCard08_i(),this.outCard09_i(),this.outCard010_i()];
		return t;
	};
	_proto.outCard00_i = function () {
		var t = new eui.Image();
		this.outCard00 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard01_i = function () {
		var t = new eui.Image();
		this.outCard01 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard02_i = function () {
		var t = new eui.Image();
		this.outCard02 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard03_i = function () {
		var t = new eui.Image();
		this.outCard03 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard04_i = function () {
		var t = new eui.Image();
		this.outCard04 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard05_i = function () {
		var t = new eui.Image();
		this.outCard05 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard06_i = function () {
		var t = new eui.Image();
		this.outCard06 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard07_i = function () {
		var t = new eui.Image();
		this.outCard07 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard08_i = function () {
		var t = new eui.Image();
		this.outCard08 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard09_i = function () {
		var t = new eui.Image();
		this.outCard09 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard010_i = function () {
		var t = new eui.Image();
		this.outCard010 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto.outCard2_i = function () {
		var t = new eui.Group();
		this.outCard2 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.visible = false;
		t.x = 322;
		t.y = 128.78;
		t.elementsContent = [this._Group18_i(),this._Group19_i(),this._Group20_i(),this._Group21_i()];
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard210_i(),this.outCard29_i(),this.outCard28_i(),this.outCard27_i(),this.outCard26_i(),this.outCard25_i(),this.outCard24_i(),this.outCard23_i(),this.outCard22_i(),this.outCard21_i(),this.outCard20_i()];
		return t;
	};
	_proto.outCard210_i = function () {
		var t = new eui.Image();
		this.outCard210 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard29_i = function () {
		var t = new eui.Image();
		this.outCard29 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard28_i = function () {
		var t = new eui.Image();
		this.outCard28 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard27_i = function () {
		var t = new eui.Image();
		this.outCard27 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard26_i = function () {
		var t = new eui.Image();
		this.outCard26 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard25_i = function () {
		var t = new eui.Image();
		this.outCard25 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard24_i = function () {
		var t = new eui.Image();
		this.outCard24 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard23_i = function () {
		var t = new eui.Image();
		this.outCard23 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard22_i = function () {
		var t = new eui.Image();
		this.outCard22 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard21_i = function () {
		var t = new eui.Image();
		this.outCard21 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard20_i = function () {
		var t = new eui.Image();
		this.outCard20 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 84;
		t.elementsContent = [this.outCard221_i(),this.outCard220_i(),this.outCard219_i(),this.outCard218_i(),this.outCard217_i(),this.outCard216_i(),this.outCard215_i(),this.outCard214_i(),this.outCard213_i(),this.outCard212_i(),this.outCard211_i()];
		return t;
	};
	_proto.outCard221_i = function () {
		var t = new eui.Image();
		this.outCard221 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard220_i = function () {
		var t = new eui.Image();
		this.outCard220 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard219_i = function () {
		var t = new eui.Image();
		this.outCard219 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard218_i = function () {
		var t = new eui.Image();
		this.outCard218 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard217_i = function () {
		var t = new eui.Image();
		this.outCard217 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard216_i = function () {
		var t = new eui.Image();
		this.outCard216 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard215_i = function () {
		var t = new eui.Image();
		this.outCard215 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard214_i = function () {
		var t = new eui.Image();
		this.outCard214 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard213_i = function () {
		var t = new eui.Image();
		this.outCard213 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard212_i = function () {
		var t = new eui.Image();
		this.outCard212 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard211_i = function () {
		var t = new eui.Image();
		this.outCard211 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 168;
		t.elementsContent = [this.outCard232_i(),this.outCard231_i(),this.outCard230_i(),this.outCard229_i(),this.outCard228_i(),this.outCard227_i(),this.outCard226_i(),this.outCard225_i(),this.outCard224_i(),this.outCard223_i(),this.outCard222_i()];
		return t;
	};
	_proto.outCard232_i = function () {
		var t = new eui.Image();
		this.outCard232 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard231_i = function () {
		var t = new eui.Image();
		this.outCard231 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard230_i = function () {
		var t = new eui.Image();
		this.outCard230 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard229_i = function () {
		var t = new eui.Image();
		this.outCard229 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard228_i = function () {
		var t = new eui.Image();
		this.outCard228 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard227_i = function () {
		var t = new eui.Image();
		this.outCard227 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard226_i = function () {
		var t = new eui.Image();
		this.outCard226 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard225_i = function () {
		var t = new eui.Image();
		this.outCard225 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard224_i = function () {
		var t = new eui.Image();
		this.outCard224 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard223_i = function () {
		var t = new eui.Image();
		this.outCard223 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard222_i = function () {
		var t = new eui.Image();
		this.outCard222 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 252;
		t.elementsContent = [this.outCard243_i(),this.outCard242_i(),this.outCard241_i(),this.outCard240_i(),this.outCard239_i(),this.outCard238_i(),this.outCard237_i(),this.outCard236_i(),this.outCard235_i(),this.outCard234_i(),this.outCard233_i()];
		return t;
	};
	_proto.outCard243_i = function () {
		var t = new eui.Image();
		this.outCard243 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard242_i = function () {
		var t = new eui.Image();
		this.outCard242 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard241_i = function () {
		var t = new eui.Image();
		this.outCard241 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard240_i = function () {
		var t = new eui.Image();
		this.outCard240 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard239_i = function () {
		var t = new eui.Image();
		this.outCard239 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard238_i = function () {
		var t = new eui.Image();
		this.outCard238 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard237_i = function () {
		var t = new eui.Image();
		this.outCard237 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard236_i = function () {
		var t = new eui.Image();
		this.outCard236 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard235_i = function () {
		var t = new eui.Image();
		this.outCard235 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard234_i = function () {
		var t = new eui.Image();
		this.outCard234 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard233_i = function () {
		var t = new eui.Image();
		this.outCard233 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto.outCard1_i = function () {
		var t = new eui.Group();
		this.outCard1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 670.59;
		t.y = 136.8;
		t.elementsContent = [this._Group22_i(),this._Group23_i(),this._Group24_i(),this._Group25_i()];
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard133_i(),this.outCard134_i(),this.outCard135_i(),this.outCard136_i(),this.outCard137_i(),this.outCard138_i(),this.outCard139_i(),this.outCard140_i(),this.outCard141_i(),this.outCard142_i(),this.outCard143_i()];
		return t;
	};
	_proto.outCard133_i = function () {
		var t = new eui.Image();
		this.outCard133 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard134_i = function () {
		var t = new eui.Image();
		this.outCard134 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard135_i = function () {
		var t = new eui.Image();
		this.outCard135 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard136_i = function () {
		var t = new eui.Image();
		this.outCard136 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard137_i = function () {
		var t = new eui.Image();
		this.outCard137 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard138_i = function () {
		var t = new eui.Image();
		this.outCard138 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard139_i = function () {
		var t = new eui.Image();
		this.outCard139 = t;
		t.source = "MJCard_json.rightfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard140_i = function () {
		var t = new eui.Image();
		this.outCard140 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard141_i = function () {
		var t = new eui.Image();
		this.outCard141 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard142_i = function () {
		var t = new eui.Image();
		this.outCard142 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard143_i = function () {
		var t = new eui.Image();
		this.outCard143 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.x = 51;
		t.y = -0.67;
		t.elementsContent = [this.outCard132_i(),this.outCard131_i(),this.outCard130_i(),this.outCard129_i(),this.outCard128_i(),this.outCard127_i(),this.outCard126_i(),this.outCard125_i(),this.outCard124_i(),this.outCard123_i(),this.outCard122_i()];
		return t;
	};
	_proto.outCard132_i = function () {
		var t = new eui.Image();
		this.outCard132 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard131_i = function () {
		var t = new eui.Image();
		this.outCard131 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard130_i = function () {
		var t = new eui.Image();
		this.outCard130 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard129_i = function () {
		var t = new eui.Image();
		this.outCard129 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard128_i = function () {
		var t = new eui.Image();
		this.outCard128 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard127_i = function () {
		var t = new eui.Image();
		this.outCard127 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard126_i = function () {
		var t = new eui.Image();
		this.outCard126 = t;
		t.source = "MJCard_json.rightfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard125_i = function () {
		var t = new eui.Image();
		this.outCard125 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard124_i = function () {
		var t = new eui.Image();
		this.outCard124 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard123_i = function () {
		var t = new eui.Image();
		this.outCard123 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard122_i = function () {
		var t = new eui.Image();
		this.outCard122 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this.outCard121_i(),this.outCard120_i(),this.outCard119_i(),this.outCard118_i(),this.outCard117_i(),this.outCard116_i(),this.outCard115_i(),this.outCard114_i(),this.outCard113_i(),this.outCard112_i(),this.outCard111_i()];
		return t;
	};
	_proto.outCard121_i = function () {
		var t = new eui.Image();
		this.outCard121 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard120_i = function () {
		var t = new eui.Image();
		this.outCard120 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard119_i = function () {
		var t = new eui.Image();
		this.outCard119 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard118_i = function () {
		var t = new eui.Image();
		this.outCard118 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard117_i = function () {
		var t = new eui.Image();
		this.outCard117 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard116_i = function () {
		var t = new eui.Image();
		this.outCard116 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard115_i = function () {
		var t = new eui.Image();
		this.outCard115 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard114_i = function () {
		var t = new eui.Image();
		this.outCard114 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard113_i = function () {
		var t = new eui.Image();
		this.outCard113 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard112_i = function () {
		var t = new eui.Image();
		this.outCard112 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard111_i = function () {
		var t = new eui.Image();
		this.outCard111 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 153;
		t.y = 0;
		t.elementsContent = [this.outCard110_i(),this.outCard19_i(),this.outCard18_i(),this.outCard17_i(),this.outCard16_i(),this.outCard15_i(),this.outCard14_i(),this.outCard13_i(),this.outCard12_i(),this.outCard11_i(),this.outCard10_i()];
		return t;
	};
	_proto.outCard110_i = function () {
		var t = new eui.Image();
		this.outCard110 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard19_i = function () {
		var t = new eui.Image();
		this.outCard19 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard18_i = function () {
		var t = new eui.Image();
		this.outCard18 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard17_i = function () {
		var t = new eui.Image();
		this.outCard17 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard16_i = function () {
		var t = new eui.Image();
		this.outCard16 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard15_i = function () {
		var t = new eui.Image();
		this.outCard15 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard14_i = function () {
		var t = new eui.Image();
		this.outCard14 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard13_i = function () {
		var t = new eui.Image();
		this.outCard13 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard12_i = function () {
		var t = new eui.Image();
		this.outCard12 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard11_i = function () {
		var t = new eui.Image();
		this.outCard11 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard10_i = function () {
		var t = new eui.Image();
		this.outCard10 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard3_i = function () {
		var t = new eui.Group();
		this.outCard3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 225.8;
		t.y = 136.95;
		t.elementsContent = [this._Group26_i(),this._Group27_i(),this._Group28_i(),this._Group29_i()];
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = -0.67;
		t.elementsContent = [this.outCard30_i(),this.outCard31_i(),this.outCard32_i(),this.outCard33_i(),this.outCard34_i(),this.outCard35_i(),this.outCard36_i(),this.outCard37_i(),this.outCard38_i(),this.outCard39_i(),this.outCard310_i()];
		return t;
	};
	_proto.outCard30_i = function () {
		var t = new eui.Image();
		this.outCard30 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard31_i = function () {
		var t = new eui.Image();
		this.outCard31 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard32_i = function () {
		var t = new eui.Image();
		this.outCard32 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard33_i = function () {
		var t = new eui.Image();
		this.outCard33 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard34_i = function () {
		var t = new eui.Image();
		this.outCard34 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard35_i = function () {
		var t = new eui.Image();
		this.outCard35 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard36_i = function () {
		var t = new eui.Image();
		this.outCard36 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard37_i = function () {
		var t = new eui.Image();
		this.outCard37 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard38_i = function () {
		var t = new eui.Image();
		this.outCard38 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard39_i = function () {
		var t = new eui.Image();
		this.outCard39 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard310_i = function () {
		var t = new eui.Image();
		this.outCard310 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.x = 51;
		t.y = 0;
		t.elementsContent = [this.outCard311_i(),this.outCard312_i(),this.outCard313_i(),this.outCard314_i(),this.outCard315_i(),this.outCard316_i(),this.outCard317_i(),this.outCard318_i(),this.outCard319_i(),this.outCard320_i(),this.outCard321_i()];
		return t;
	};
	_proto.outCard311_i = function () {
		var t = new eui.Image();
		this.outCard311 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard312_i = function () {
		var t = new eui.Image();
		this.outCard312 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard313_i = function () {
		var t = new eui.Image();
		this.outCard313 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard314_i = function () {
		var t = new eui.Image();
		this.outCard314 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard315_i = function () {
		var t = new eui.Image();
		this.outCard315 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard316_i = function () {
		var t = new eui.Image();
		this.outCard316 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard317_i = function () {
		var t = new eui.Image();
		this.outCard317 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard318_i = function () {
		var t = new eui.Image();
		this.outCard318 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard319_i = function () {
		var t = new eui.Image();
		this.outCard319 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard320_i = function () {
		var t = new eui.Image();
		this.outCard320 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard321_i = function () {
		var t = new eui.Image();
		this.outCard321 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this.outCard322_i(),this.outCard323_i(),this.outCard324_i(),this.outCard325_i(),this.outCard326_i(),this.outCard327_i(),this.outCard328_i(),this.outCard329_i(),this.outCard330_i(),this.outCard331_i(),this.outCard332_i()];
		return t;
	};
	_proto.outCard322_i = function () {
		var t = new eui.Image();
		this.outCard322 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard323_i = function () {
		var t = new eui.Image();
		this.outCard323 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard324_i = function () {
		var t = new eui.Image();
		this.outCard324 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard325_i = function () {
		var t = new eui.Image();
		this.outCard325 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard326_i = function () {
		var t = new eui.Image();
		this.outCard326 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard327_i = function () {
		var t = new eui.Image();
		this.outCard327 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard328_i = function () {
		var t = new eui.Image();
		this.outCard328 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard329_i = function () {
		var t = new eui.Image();
		this.outCard329 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard330_i = function () {
		var t = new eui.Image();
		this.outCard330 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard331_i = function () {
		var t = new eui.Image();
		this.outCard331 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard332_i = function () {
		var t = new eui.Image();
		this.outCard332 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.x = 153;
		t.y = 0;
		t.elementsContent = [this.outCard333_i(),this.outCard334_i(),this.outCard335_i(),this.outCard336_i(),this.outCard337_i(),this.outCard338_i(),this.outCard339_i(),this.outCard340_i(),this.outCard341_i(),this.outCard342_i(),this.outCard343_i()];
		return t;
	};
	_proto.outCard333_i = function () {
		var t = new eui.Image();
		this.outCard333 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard334_i = function () {
		var t = new eui.Image();
		this.outCard334 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard335_i = function () {
		var t = new eui.Image();
		this.outCard335 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard336_i = function () {
		var t = new eui.Image();
		this.outCard336 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard337_i = function () {
		var t = new eui.Image();
		this.outCard337 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard338_i = function () {
		var t = new eui.Image();
		this.outCard338 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard339_i = function () {
		var t = new eui.Image();
		this.outCard339 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard340_i = function () {
		var t = new eui.Image();
		this.outCard340 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard341_i = function () {
		var t = new eui.Image();
		this.outCard341 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard342_i = function () {
		var t = new eui.Image();
		this.outCard342 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard343_i = function () {
		var t = new eui.Image();
		this.outCard343 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.actionCardGroud0_i = function () {
		var t = new eui.Group();
		this.actionCardGroud0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.x = 6.08;
		t.y = 530.99;
		t.elementsContent = [this.actionItem00_i(),this.actionItem01_i(),this.actionItem02_i(),this.actionItem03_i()];
		return t;
	};
	_proto.actionItem00_i = function () {
		var t = new eui.Group();
		this.actionItem00 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard000_i(),this.actioncard001_i(),this.actioncard002_i(),this.actioncard003_i(),this._Image16_i()];
		return t;
	};
	_proto.actioncard000_i = function () {
		var t = new eui.Image();
		this.actioncard000 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard001_i = function () {
		var t = new eui.Image();
		this.actioncard001 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard002_i = function () {
		var t = new eui.Image();
		this.actioncard002 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard003_i = function () {
		var t = new eui.Image();
		this.actioncard003 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 0;
		t.y = 76;
		return t;
	};
	_proto.actionItem01_i = function () {
		var t = new eui.Group();
		this.actionItem01 = t;
		t.x = 230;
		t.y = 0;
		t.elementsContent = [this.actioncard010_i(),this.actioncard011_i(),this.actioncard012_i(),this.actioncard013_i()];
		return t;
	};
	_proto.actioncard010_i = function () {
		var t = new eui.Image();
		this.actioncard010 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard011_i = function () {
		var t = new eui.Image();
		this.actioncard011 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard012_i = function () {
		var t = new eui.Image();
		this.actioncard012 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard013_i = function () {
		var t = new eui.Image();
		this.actioncard013 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem02_i = function () {
		var t = new eui.Group();
		this.actionItem02 = t;
		t.x = 460;
		t.y = 0;
		t.elementsContent = [this.actioncard020_i(),this.actioncard021_i(),this.actioncard022_i(),this.actioncard023_i()];
		return t;
	};
	_proto.actioncard020_i = function () {
		var t = new eui.Image();
		this.actioncard020 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard021_i = function () {
		var t = new eui.Image();
		this.actioncard021 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard022_i = function () {
		var t = new eui.Image();
		this.actioncard022 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard023_i = function () {
		var t = new eui.Image();
		this.actioncard023 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem03_i = function () {
		var t = new eui.Group();
		this.actionItem03 = t;
		t.x = 690;
		t.y = 0;
		t.elementsContent = [this.actioncard030_i(),this.actioncard031_i(),this.actioncard032_i(),this.actioncard033_i()];
		return t;
	};
	_proto.actioncard030_i = function () {
		var t = new eui.Image();
		this.actioncard030 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard031_i = function () {
		var t = new eui.Image();
		this.actioncard031 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard032_i = function () {
		var t = new eui.Image();
		this.actioncard032 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard033_i = function () {
		var t = new eui.Image();
		this.actioncard033 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud2_i = function () {
		var t = new eui.Group();
		this.actionCardGroud2 = t;
		t.scaleX = 0.49;
		t.scaleY = 0.49;
		t.visible = false;
		t.x = 425.32;
		t.y = 4.02;
		t.elementsContent = [this.actionItem20_i(),this.actionItem21_i(),this.actionItem22_i(),this.actionItem23_i()];
		return t;
	};
	_proto.actionItem20_i = function () {
		var t = new eui.Group();
		this.actionItem20 = t;
		t.x = 713.97;
		t.y = 0;
		t.elementsContent = [this.actioncard200_i(),this.actioncard201_i(),this.actioncard202_i(),this._Image17_i(),this.actioncard203_i()];
		return t;
	};
	_proto.actioncard200_i = function () {
		var t = new eui.Image();
		this.actioncard200 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard201_i = function () {
		var t = new eui.Image();
		this.actioncard201 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard202_i = function () {
		var t = new eui.Image();
		this.actioncard202 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 184;
		t.y = 76;
		return t;
	};
	_proto.actioncard203_i = function () {
		var t = new eui.Image();
		this.actioncard203 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem21_i = function () {
		var t = new eui.Group();
		this.actionItem21 = t;
		t.x = 475.98;
		t.y = 0;
		t.elementsContent = [this.actioncard210_i(),this.actioncard211_i(),this.actioncard212_i(),this.actioncard213_i()];
		return t;
	};
	_proto.actioncard210_i = function () {
		var t = new eui.Image();
		this.actioncard210 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard211_i = function () {
		var t = new eui.Image();
		this.actioncard211 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard212_i = function () {
		var t = new eui.Image();
		this.actioncard212 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard213_i = function () {
		var t = new eui.Image();
		this.actioncard213 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem22_i = function () {
		var t = new eui.Group();
		this.actionItem22 = t;
		t.x = 237.99;
		t.y = 0;
		t.elementsContent = [this.actioncard220_i(),this.actioncard221_i(),this.actioncard222_i(),this.actioncard223_i()];
		return t;
	};
	_proto.actioncard220_i = function () {
		var t = new eui.Image();
		this.actioncard220 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard221_i = function () {
		var t = new eui.Image();
		this.actioncard221 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard222_i = function () {
		var t = new eui.Image();
		this.actioncard222 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard223_i = function () {
		var t = new eui.Image();
		this.actioncard223 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem23_i = function () {
		var t = new eui.Group();
		this.actionItem23 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard230_i(),this.actioncard231_i(),this.actioncard232_i(),this.actioncard233_i()];
		return t;
	};
	_proto.actioncard230_i = function () {
		var t = new eui.Image();
		this.actioncard230 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard231_i = function () {
		var t = new eui.Image();
		this.actioncard231 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard232_i = function () {
		var t = new eui.Image();
		this.actioncard232 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard233_i = function () {
		var t = new eui.Image();
		this.actioncard233 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud3_i = function () {
		var t = new eui.Group();
		this.actionCardGroud3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 117;
		t.y = 58;
		t.elementsContent = [this.actionItem30_i(),this.actionItem31_i(),this.actionItem32_i(),this.actionItem33_i()];
		return t;
	};
	_proto.actionItem30_i = function () {
		var t = new eui.Group();
		this.actionItem30 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard300_i(),this.actioncard301_i(),this.actioncard302_i(),this.actioncard303_i(),this._Image18_i()];
		return t;
	};
	_proto.actioncard300_i = function () {
		var t = new eui.Image();
		this.actioncard300 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard301_i = function () {
		var t = new eui.Image();
		this.actioncard301 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard302_i = function () {
		var t = new eui.Image();
		this.actioncard302 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard303_i = function () {
		var t = new eui.Image();
		this.actioncard303 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionItem31_i = function () {
		var t = new eui.Group();
		this.actionItem31 = t;
		t.y = 115;
		t.elementsContent = [this.actioncard310_i(),this.actioncard311_i(),this.actioncard312_i(),this.actioncard313_i()];
		return t;
	};
	_proto.actioncard310_i = function () {
		var t = new eui.Image();
		this.actioncard310 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard311_i = function () {
		var t = new eui.Image();
		this.actioncard311 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard312_i = function () {
		var t = new eui.Image();
		this.actioncard312 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard313_i = function () {
		var t = new eui.Image();
		this.actioncard313 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem32_i = function () {
		var t = new eui.Group();
		this.actionItem32 = t;
		t.y = 230;
		t.elementsContent = [this.actioncard320_i(),this.actioncard321_i(),this.actioncard322_i(),this.actioncard323_i()];
		return t;
	};
	_proto.actioncard320_i = function () {
		var t = new eui.Image();
		this.actioncard320 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard321_i = function () {
		var t = new eui.Image();
		this.actioncard321 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard322_i = function () {
		var t = new eui.Image();
		this.actioncard322 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard323_i = function () {
		var t = new eui.Image();
		this.actioncard323 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem33_i = function () {
		var t = new eui.Group();
		this.actionItem33 = t;
		t.y = 345;
		t.elementsContent = [this.actioncard330_i(),this.actioncard331_i(),this.actioncard332_i(),this.actioncard333_i()];
		return t;
	};
	_proto.actioncard330_i = function () {
		var t = new eui.Image();
		this.actioncard330 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard331_i = function () {
		var t = new eui.Image();
		this.actioncard331 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard332_i = function () {
		var t = new eui.Image();
		this.actioncard332 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard333_i = function () {
		var t = new eui.Image();
		this.actioncard333 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionCardGroud1_i = function () {
		var t = new eui.Group();
		this.actionCardGroud1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.x = 908.15;
		t.y = 193.92;
		t.elementsContent = [this.actionItem13_i(),this.actionItem12_i(),this.actionItem11_i(),this.actionItem10_i()];
		return t;
	};
	_proto.actionItem13_i = function () {
		var t = new eui.Group();
		this.actionItem13 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard132_i(),this.actioncard131_i(),this.actioncard130_i(),this._Image19_i(),this.actioncard133_i()];
		return t;
	};
	_proto.actioncard132_i = function () {
		var t = new eui.Image();
		this.actioncard132 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard131_i = function () {
		var t = new eui.Image();
		this.actioncard131 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard130_i = function () {
		var t = new eui.Image();
		this.actioncard130 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 30;
		t.y = 77;
		return t;
	};
	_proto.actioncard133_i = function () {
		var t = new eui.Image();
		this.actioncard133 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem12_i = function () {
		var t = new eui.Group();
		this.actionItem12 = t;
		t.y = 115;
		t.elementsContent = [this.actioncard122_i(),this.actioncard121_i(),this.actioncard120_i(),this.actioncard123_i()];
		return t;
	};
	_proto.actioncard122_i = function () {
		var t = new eui.Image();
		this.actioncard122 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard121_i = function () {
		var t = new eui.Image();
		this.actioncard121 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard120_i = function () {
		var t = new eui.Image();
		this.actioncard120 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard123_i = function () {
		var t = new eui.Image();
		this.actioncard123 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem11_i = function () {
		var t = new eui.Group();
		this.actionItem11 = t;
		t.y = 230;
		t.elementsContent = [this.actioncard112_i(),this.actioncard111_i(),this.actioncard110_i(),this.actioncard113_i()];
		return t;
	};
	_proto.actioncard112_i = function () {
		var t = new eui.Image();
		this.actioncard112 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard111_i = function () {
		var t = new eui.Image();
		this.actioncard111 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard110_i = function () {
		var t = new eui.Image();
		this.actioncard110 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard113_i = function () {
		var t = new eui.Image();
		this.actioncard113 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem10_i = function () {
		var t = new eui.Group();
		this.actionItem10 = t;
		t.y = 345;
		t.elementsContent = [this.actioncard102_i(),this.actioncard101_i(),this.actioncard100_i(),this.actioncard103_i()];
		return t;
	};
	_proto.actioncard102_i = function () {
		var t = new eui.Image();
		this.actioncard102 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard101_i = function () {
		var t = new eui.Image();
		this.actioncard101 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard100_i = function () {
		var t = new eui.Image();
		this.actioncard100 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard103_i = function () {
		var t = new eui.Image();
		this.actioncard103 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 365;
		t.y = 2;
		t.elementsContent = [this._Image20_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "sss_topNotice";
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
		t.size = 25;
		t.text = "哈哈哈范德萨发顺丰哈发起解散3/5人同意";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.x = 27.5;
		t.y = 15.81;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 365;
		t.y = 0;
		t.elementsContent = [this._Image21_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "sss_topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.size = 25;
		t.text = "加入了房间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.x = 27.5;
		t.y = 15.81;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.left = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "leftYaoqing_png";
		t.visible = false;
		t.y = 0.5;
		return t;
	};
	_proto.inviteBtnGroup_i = function () {
		var t = new eui.Group();
		this.inviteBtnGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.width = 30;
		t.y = 405;
		t.elementsContent = [this.inviteBtn_i()];
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new eui.Button();
		this.inviteBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin67;
		return t;
	};
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.width = 30;
		t.y = 405;
		t.elementsContent = [this.startBtn_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin68;
		return t;
	};
	_proto.readyBtnGroup_i = function () {
		var t = new eui.Group();
		this.readyBtnGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.width = 30;
		t.y = 405;
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
		t.skinName = hzmjIndex_Huifang2$Skin69;
		return t;
	};
	_proto.ready_disband_i = function () {
		var t = new eui.Button();
		this.ready_disband = t;
		t.horizontalCenter = 401;
		t.label = "";
		t.verticalCenter = 271.5;
		t.skinName = hzmjIndex_Huifang2$Skin70;
		return t;
	};
	_proto.menban0_i = function () {
		var t = new eui.Rect();
		this.menban0 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomRuleUI_i = function () {
		var t = new eui.Group();
		this.roomRuleUI = t;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ruleMenabn_i(),this._Group30_i()];
		return t;
	};
	_proto.ruleMenabn_i = function () {
		var t = new eui.Image();
		this.ruleMenabn = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.x = 118.5;
		t.y = 129.5;
		t.elementsContent = [this._Image22_i(),this.roomPwdRule_i(),this.playcount_i(),this.peopleCount_i(),this.wanfaText_i(),this.laoqi_i(),this.jiafan_i(),this.fending_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.hamj_cardBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomPwdRule_i = function () {
		var t = new eui.Label();
		this.roomPwdRule = t;
		t.horizontalCenter = -3;
		t.text = "888888";
		t.textColor = 0x870808;
		t.y = 11.97;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.size = 25;
		t.text = "局数：80";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 89.12;
		return t;
	};
	_proto.peopleCount_i = function () {
		var t = new eui.Label();
		this.peopleCount = t;
		t.size = 25;
		t.text = "人数：4人";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 129.12;
		return t;
	};
	_proto.wanfaText_i = function () {
		var t = new eui.Label();
		this.wanfaText = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "玩法：三财加番，无地老七，128饭封顶";
		t.textColor = 0x870808;
		t.visible = false;
		t.width = 210;
		t.x = 42.5;
		t.y = 171.88;
		return t;
	};
	_proto.laoqi_i = function () {
		var t = new eui.Label();
		this.laoqi = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 169.12;
		return t;
	};
	_proto.jiafan_i = function () {
		var t = new eui.Label();
		this.jiafan = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 209.12;
		return t;
	};
	_proto.fending_i = function () {
		var t = new eui.Label();
		this.fending = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 249.12;
		return t;
	};
	_proto.luying_i = function () {
		var t = new eui.Group();
		this.luying = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image23_i(),this._Group31_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "jiesan_json.voiceBG";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.x = 83;
		t.y = 17;
		t.elementsContent = [this.voice1_i(),this.voice2_i(),this.voice3_i(),this.voice4_i()];
		return t;
	};
	_proto.voice1_i = function () {
		var t = new eui.Image();
		this.voice1 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_1";
		t.y = 54;
		return t;
	};
	_proto.voice2_i = function () {
		var t = new eui.Image();
		this.voice2 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_2";
		t.y = 36;
		return t;
	};
	_proto.voice3_i = function () {
		var t = new eui.Image();
		this.voice3 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_3";
		t.y = 18;
		return t;
	};
	_proto.voice4_i = function () {
		var t = new eui.Image();
		this.voice4 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_4";
		t.y = 0;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 998.17;
		t.y = 364.05;
		t.elementsContent = [this.voiceplay_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin71;
		return t;
	};
	_proto.xxGroup_i = function () {
		var t = new eui.Group();
		this.xxGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 998.67;
		t.y = 437.49;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin72;
		return t;
	};
	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 0;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image24_i(),this._Group32_i(),this._Group33_i(),this._Group34_i(),this._Group35_i(),this._Group36_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xll_game_json.game_cebian_bg";
		t.y = 0;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 65;
		t.x = 55;
		t.y = 75;
		t.elementsContent = [this.situp_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = hzmjIndex_Huifang2$Skin73;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 65;
		t.x = 55;
		t.y = 140;
		t.elementsContent = [this.wanfa_i()];
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin74;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 65;
		t.x = 55;
		t.y = 205;
		t.elementsContent = [this.diaband_i()];
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Button();
		this.diaband = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin75;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 65;
		t.x = 55;
		t.y = 270;
		t.elementsContent = [this.backHallBtn_i()];
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Button();
		this.backHallBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = hzmjIndex_Huifang2$Skin76;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 65;
		t.x = 55;
		t.y = 335;
		t.elementsContent = [this.setting_i()];
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin77;
		return t;
	};
	_proto.waitGameStart_i = function () {
		var t = new eui.Group();
		this.waitGameStart = t;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.y = 254;
		t.elementsContent = [this._Image25_i(),this.roomOwnerText_i(),this.roomLifeNotice_i(),this.showRule_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_wait_start";
		t.y = 0;
		return t;
	};
	_proto.roomOwnerText_i = function () {
		var t = new eui.Label();
		this.roomOwnerText = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "房主：喜来乐技";
		t.y = 40;
		return t;
	};
	_proto.roomLifeNotice_i = function () {
		var t = new eui.Label();
		this.roomLifeNotice = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "900秒后未开局，房间将解散！";
		t.y = 78;
		return t;
	};
	_proto.showRule_i = function () {
		var t = new eui.Label();
		this.showRule = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "32局，三人，买2马，封顶500胡";
		t.x = 10;
		t.y = 116;
		return t;
	};
	_proto.joinXiaoxiGroup_i = function () {
		var t = new eui.Group();
		this.joinXiaoxiGroup = t;
		t.visible = false;
		t.x = 7.65;
		t.y = 74.5;
		t.elementsContent = [this._Image26_i(),this._Scroller1_i(),this._Scroller2_i(),this._Image41_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_xiaoxi_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 150;
		t.horizontalCenter = 2;
		t.width = 200;
		t.y = 43.83;
		t.viewport = this.comePeopleList_i();
		return t;
	};
	_proto.comePeopleList_i = function () {
		var t = new eui.Group();
		this.comePeopleList = t;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 150;
		t.horizontalCenter = 2;
		t.width = 200;
		t.y = 230.5;
		t.viewport = this.watchingPeopleList_i();
		return t;
	};
	_proto.watchingPeopleList_i = function () {
		var t = new eui.Group();
		this.watchingPeopleList = t;
		t.elementsContent = [this._Group44_i(),this._Group52_i()];
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 194;
		t.y = 0;
		t.elementsContent = [this._Image27_i(),this._Group43_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,13,11,12);
		t.source = "xll_game_json.game_xiaoxi_huibg";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 6;
		t.elementsContent = [this._Group38_i(),this._Group40_i(),this._Group42_i()];
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group37_i(),this._Label4_i()];
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image28_i(),this._Image29_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 63;
		t.y = 0;
		t.elementsContent = [this._Group39_i(),this._Label5_i()];
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image30_i(),this._Image31_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 126;
		t.y = 0;
		t.elementsContent = [this._Group41_i(),this._Label6_i()];
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image32_i(),this._Image33_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 194;
		t.y = 74.8;
		t.elementsContent = [this._Image34_i(),this._Group51_i()];
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,13,11,12);
		t.source = "xll_game_json.game_xiaoxi_huibg";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 6;
		t.elementsContent = [this._Group46_i(),this._Group48_i(),this._Group50_i()];
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group45_i(),this._Label7_i()];
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image35_i(),this._Image36_i()];
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 63;
		t.y = 0;
		t.elementsContent = [this._Group47_i(),this._Label8_i()];
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image37_i(),this._Image38_i()];
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 126;
		t.y = 0;
		t.elementsContent = [this._Group49_i(),this._Label9_i()];
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this._Image39_i(),this._Image40_i()];
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "xll_game_json.game_xiaoxi_pangguan";
		t.y = 197.35;
		return t;
	};
	_proto.actiopnGroup0_i = function () {
		var t = new eui.Group();
		this.actiopnGroup0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 285.14;
		t.y = 451.09;
		t.elementsContent = [this.actionBtnGroup00_i(),this.actionBtnGroup01_i(),this.actionBtnGroup02_i(),this.actionBtnGroup03_i(),this.actionBtnGroup04_i(),this.actionBtnGroup05_i()];
		return t;
	};
	_proto.actionBtnGroup00_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup00 = t;
		t.verticalCenter = 0;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn00_i()];
		return t;
	};
	_proto.actionBtn00_i = function () {
		var t = new eui.Button();
		this.actionBtn00 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = hzmjIndex_Huifang2$Skin78;
		return t;
	};
	_proto.actionBtnGroup01_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup01 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn01_i(),this.card010_i(),this.selectedChi0_i()];
		return t;
	};
	_proto.actionBtn01_i = function () {
		var t = new eui.Button();
		this.actionBtn01 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin79;
		return t;
	};
	_proto.card010_i = function () {
		var t = new eui.Image();
		this.card010 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.selectedChi0_i = function () {
		var t = new eui.Group();
		this.selectedChi0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = -137.93;
		t.y = -99.39;
		t.elementsContent = [this.chi00_i(),this.chi01_i(),this.chi02_i()];
		return t;
	};
	_proto.chi00_i = function () {
		var t = new eui.Group();
		this.chi00 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard002_i(),this.chiCard001_i(),this.chiCard000_i()];
		return t;
	};
	_proto.chiCard002_i = function () {
		var t = new eui.Image();
		this.chiCard002 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard001_i = function () {
		var t = new eui.Image();
		this.chiCard001 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard000_i = function () {
		var t = new eui.Image();
		this.chiCard000 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi01_i = function () {
		var t = new eui.Group();
		this.chi01 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard012_i(),this.chiCard011_i(),this.chiCard010_i()];
		return t;
	};
	_proto.chiCard012_i = function () {
		var t = new eui.Image();
		this.chiCard012 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard011_i = function () {
		var t = new eui.Image();
		this.chiCard011 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard010_i = function () {
		var t = new eui.Image();
		this.chiCard010 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi02_i = function () {
		var t = new eui.Group();
		this.chi02 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard022_i(),this.chiCard021_i(),this.chiCard020_i()];
		return t;
	};
	_proto.chiCard022_i = function () {
		var t = new eui.Image();
		this.chiCard022 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard021_i = function () {
		var t = new eui.Image();
		this.chiCard021 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard020_i = function () {
		var t = new eui.Image();
		this.chiCard020 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionBtnGroup02_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup02 = t;
		t.verticalCenter = 0.5;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn02_i(),this.card020_i()];
		return t;
	};
	_proto.actionBtn02_i = function () {
		var t = new eui.Button();
		this.actionBtn02 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin80;
		return t;
	};
	_proto.card020_i = function () {
		var t = new eui.Image();
		this.card020 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup03_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup03 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn03_i(),this.card030_i()];
		return t;
	};
	_proto.actionBtn03_i = function () {
		var t = new eui.Button();
		this.actionBtn03 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin81;
		return t;
	};
	_proto.card030_i = function () {
		var t = new eui.Image();
		this.card030 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup04_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup04 = t;
		t.verticalCenter = 0.5;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn04_i(),this.card040_i()];
		return t;
	};
	_proto.actionBtn04_i = function () {
		var t = new eui.Button();
		this.actionBtn04 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin82;
		return t;
	};
	_proto.card040_i = function () {
		var t = new eui.Image();
		this.card040 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup05_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup05 = t;
		t.verticalCenter = 1;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn05_i()];
		return t;
	};
	_proto.actionBtn05_i = function () {
		var t = new eui.Button();
		this.actionBtn05 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin83;
		return t;
	};
	_proto.actiopnGroup1_i = function () {
		var t = new eui.Group();
		this.actiopnGroup1 = t;
		t.rotation = -90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 858.45;
		t.y = 569.82;
		t.elementsContent = [this.actionBtnGroup10_i(),this.actionBtnGroup11_i(),this.actionBtnGroup12_i(),this.actionBtnGroup13_i(),this.actionBtnGroup14_i(),this.actionBtnGroup15_i()];
		return t;
	};
	_proto.actionBtnGroup10_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup10 = t;
		t.verticalCenter = 0;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn10_i()];
		return t;
	};
	_proto.actionBtn10_i = function () {
		var t = new eui.Button();
		this.actionBtn10 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = hzmjIndex_Huifang2$Skin84;
		return t;
	};
	_proto.actionBtnGroup11_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup11 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn11_i(),this.card110_i(),this.selectedChi1_i()];
		return t;
	};
	_proto.actionBtn11_i = function () {
		var t = new eui.Button();
		this.actionBtn11 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin85;
		return t;
	};
	_proto.card110_i = function () {
		var t = new eui.Image();
		this.card110 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.selectedChi1_i = function () {
		var t = new eui.Group();
		this.selectedChi1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = -137.93;
		t.y = -99.39;
		t.elementsContent = [this.chi10_i(),this.chi11_i(),this.chi12_i()];
		return t;
	};
	_proto.chi10_i = function () {
		var t = new eui.Group();
		this.chi10 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard102_i(),this.chiCard101_i(),this.chiCard100_i()];
		return t;
	};
	_proto.chiCard102_i = function () {
		var t = new eui.Image();
		this.chiCard102 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard101_i = function () {
		var t = new eui.Image();
		this.chiCard101 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard100_i = function () {
		var t = new eui.Image();
		this.chiCard100 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi11_i = function () {
		var t = new eui.Group();
		this.chi11 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard112_i(),this.chiCard111_i(),this.chiCard110_i()];
		return t;
	};
	_proto.chiCard112_i = function () {
		var t = new eui.Image();
		this.chiCard112 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard111_i = function () {
		var t = new eui.Image();
		this.chiCard111 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard110_i = function () {
		var t = new eui.Image();
		this.chiCard110 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi12_i = function () {
		var t = new eui.Group();
		this.chi12 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard122_i(),this.chiCard121_i(),this.chiCard120_i()];
		return t;
	};
	_proto.chiCard122_i = function () {
		var t = new eui.Image();
		this.chiCard122 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard121_i = function () {
		var t = new eui.Image();
		this.chiCard121 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard120_i = function () {
		var t = new eui.Image();
		this.chiCard120 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionBtnGroup12_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup12 = t;
		t.verticalCenter = 0.5;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn12_i(),this.card120_i()];
		return t;
	};
	_proto.actionBtn12_i = function () {
		var t = new eui.Button();
		this.actionBtn12 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin86;
		return t;
	};
	_proto.card120_i = function () {
		var t = new eui.Image();
		this.card120 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup13_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup13 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn13_i(),this.card130_i()];
		return t;
	};
	_proto.actionBtn13_i = function () {
		var t = new eui.Button();
		this.actionBtn13 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin87;
		return t;
	};
	_proto.card130_i = function () {
		var t = new eui.Image();
		this.card130 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup14_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup14 = t;
		t.verticalCenter = 0.5;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn14_i(),this.card140_i()];
		return t;
	};
	_proto.actionBtn14_i = function () {
		var t = new eui.Button();
		this.actionBtn14 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin88;
		return t;
	};
	_proto.card140_i = function () {
		var t = new eui.Image();
		this.card140 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup15_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup15 = t;
		t.verticalCenter = 1;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn15_i()];
		return t;
	};
	_proto.actionBtn15_i = function () {
		var t = new eui.Button();
		this.actionBtn15 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin89;
		return t;
	};
	_proto.actiopnGroup2_i = function () {
		var t = new eui.Group();
		this.actiopnGroup2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 283.23;
		t.y = 102;
		t.elementsContent = [this.actionBtnGroup20_i(),this.actionBtnGroup21_i(),this.actionBtnGroup22_i(),this.actionBtnGroup23_i(),this.actionBtnGroup24_i(),this.actionBtnGroup25_i()];
		return t;
	};
	_proto.actionBtnGroup20_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup20 = t;
		t.verticalCenter = 0;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn20_i()];
		return t;
	};
	_proto.actionBtn20_i = function () {
		var t = new eui.Button();
		this.actionBtn20 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = hzmjIndex_Huifang2$Skin90;
		return t;
	};
	_proto.actionBtnGroup21_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup21 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn21_i(),this.card210_i(),this.selectedChi2_i()];
		return t;
	};
	_proto.actionBtn21_i = function () {
		var t = new eui.Button();
		this.actionBtn21 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin91;
		return t;
	};
	_proto.card210_i = function () {
		var t = new eui.Image();
		this.card210 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.selectedChi2_i = function () {
		var t = new eui.Group();
		this.selectedChi2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = -137.93;
		t.y = -99.39;
		t.elementsContent = [this.chi20_i(),this.chi21_i(),this.chi22_i()];
		return t;
	};
	_proto.chi20_i = function () {
		var t = new eui.Group();
		this.chi20 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard202_i(),this.chiCard201_i(),this.chiCard200_i()];
		return t;
	};
	_proto.chiCard202_i = function () {
		var t = new eui.Image();
		this.chiCard202 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard201_i = function () {
		var t = new eui.Image();
		this.chiCard201 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard200_i = function () {
		var t = new eui.Image();
		this.chiCard200 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi21_i = function () {
		var t = new eui.Group();
		this.chi21 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard212_i(),this.chiCard211_i(),this.chiCard210_i()];
		return t;
	};
	_proto.chiCard212_i = function () {
		var t = new eui.Image();
		this.chiCard212 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard211_i = function () {
		var t = new eui.Image();
		this.chiCard211 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard210_i = function () {
		var t = new eui.Image();
		this.chiCard210 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi22_i = function () {
		var t = new eui.Group();
		this.chi22 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard222_i(),this.chiCard221_i(),this.chiCard220_i()];
		return t;
	};
	_proto.chiCard222_i = function () {
		var t = new eui.Image();
		this.chiCard222 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard221_i = function () {
		var t = new eui.Image();
		this.chiCard221 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard220_i = function () {
		var t = new eui.Image();
		this.chiCard220 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionBtnGroup22_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup22 = t;
		t.verticalCenter = 0.5;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn22_i(),this.card220_i()];
		return t;
	};
	_proto.actionBtn22_i = function () {
		var t = new eui.Button();
		this.actionBtn22 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin92;
		return t;
	};
	_proto.card220_i = function () {
		var t = new eui.Image();
		this.card220 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup23_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup23 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn23_i(),this.card230_i()];
		return t;
	};
	_proto.actionBtn23_i = function () {
		var t = new eui.Button();
		this.actionBtn23 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin93;
		return t;
	};
	_proto.card230_i = function () {
		var t = new eui.Image();
		this.card230 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup24_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup24 = t;
		t.verticalCenter = 0.5;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn24_i(),this.card240_i()];
		return t;
	};
	_proto.actionBtn24_i = function () {
		var t = new eui.Button();
		this.actionBtn24 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin94;
		return t;
	};
	_proto.card240_i = function () {
		var t = new eui.Image();
		this.card240 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup25_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup25 = t;
		t.verticalCenter = 1;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn25_i()];
		return t;
	};
	_proto.actionBtn25_i = function () {
		var t = new eui.Button();
		this.actionBtn25 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin95;
		return t;
	};
	_proto.actiopnGroup3_i = function () {
		var t = new eui.Group();
		this.actiopnGroup3 = t;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 223.61;
		t.y = 1.02;
		t.elementsContent = [this.actionBtnGroup30_i(),this.actionBtnGroup31_i(),this.actionBtnGroup32_i(),this.actionBtnGroup33_i(),this.actionBtnGroup34_i(),this.actionBtnGroup35_i()];
		return t;
	};
	_proto.actionBtnGroup30_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup30 = t;
		t.verticalCenter = 0;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn30_i()];
		return t;
	};
	_proto.actionBtn30_i = function () {
		var t = new eui.Button();
		this.actionBtn30 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = hzmjIndex_Huifang2$Skin96;
		return t;
	};
	_proto.actionBtnGroup31_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup31 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn31_i(),this.card310_i(),this.selectedChi3_i()];
		return t;
	};
	_proto.actionBtn31_i = function () {
		var t = new eui.Button();
		this.actionBtn31 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin97;
		return t;
	};
	_proto.card310_i = function () {
		var t = new eui.Image();
		this.card310 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.selectedChi3_i = function () {
		var t = new eui.Group();
		this.selectedChi3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = -137.93;
		t.y = -99.39;
		t.elementsContent = [this.chi30_i(),this.chi31_i(),this.chi32_i()];
		return t;
	};
	_proto.chi30_i = function () {
		var t = new eui.Group();
		this.chi30 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard302_i(),this.chiCard301_i(),this.chiCard300_i()];
		return t;
	};
	_proto.chiCard302_i = function () {
		var t = new eui.Image();
		this.chiCard302 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard301_i = function () {
		var t = new eui.Image();
		this.chiCard301 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard300_i = function () {
		var t = new eui.Image();
		this.chiCard300 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi31_i = function () {
		var t = new eui.Group();
		this.chi31 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard312_i(),this.chiCard311_i(),this.chiCard310_i()];
		return t;
	};
	_proto.chiCard312_i = function () {
		var t = new eui.Image();
		this.chiCard312 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard311_i = function () {
		var t = new eui.Image();
		this.chiCard311 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard310_i = function () {
		var t = new eui.Image();
		this.chiCard310 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi32_i = function () {
		var t = new eui.Group();
		this.chi32 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard322_i(),this.chiCard321_i(),this.chiCard320_i()];
		return t;
	};
	_proto.chiCard322_i = function () {
		var t = new eui.Image();
		this.chiCard322 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard321_i = function () {
		var t = new eui.Image();
		this.chiCard321 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard320_i = function () {
		var t = new eui.Image();
		this.chiCard320 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionBtnGroup32_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup32 = t;
		t.verticalCenter = 0.5;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn32_i(),this.card320_i()];
		return t;
	};
	_proto.actionBtn32_i = function () {
		var t = new eui.Button();
		this.actionBtn32 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin98;
		return t;
	};
	_proto.card320_i = function () {
		var t = new eui.Image();
		this.card320 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup33_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup33 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn33_i(),this.card330_i()];
		return t;
	};
	_proto.actionBtn33_i = function () {
		var t = new eui.Button();
		this.actionBtn33 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin99;
		return t;
	};
	_proto.card330_i = function () {
		var t = new eui.Image();
		this.card330 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup34_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup34 = t;
		t.verticalCenter = 0.5;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn34_i(),this.card340_i()];
		return t;
	};
	_proto.actionBtn34_i = function () {
		var t = new eui.Button();
		this.actionBtn34 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin100;
		return t;
	};
	_proto.card340_i = function () {
		var t = new eui.Image();
		this.card340 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup35_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup35 = t;
		t.verticalCenter = 1;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn35_i()];
		return t;
	};
	_proto.actionBtn35_i = function () {
		var t = new eui.Button();
		this.actionBtn35 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.skinName = hzmjIndex_Huifang2$Skin101;
		return t;
	};
	_proto.huifangGroup_i = function () {
		var t = new eui.Group();
		this.huifangGroup = t;
		t.alpha = 0.5;
		t.horizontalCenter = -10;
		t.verticalCenter = -9;
		t.elementsContent = [this._Image42_i(),this._Group53_i(),this.huifangStartGroup_i(),this.parseGroup_i(),this.resetGroup_i()];
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.source = "zhanji_bg10_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group53_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 8;
		t.width = 50;
		t.x = 414;
		t.elementsContent = [this.nextStepBtn_i()];
		return t;
	};
	_proto.nextStepBtn_i = function () {
		var t = new eui.Button();
		this.nextStepBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin102;
		return t;
	};
	_proto.huifangStartGroup_i = function () {
		var t = new eui.Group();
		this.huifangStartGroup = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 8;
		t.width = 50;
		t.elementsContent = [this.huifangStartBtn_i()];
		return t;
	};
	_proto.huifangStartBtn_i = function () {
		var t = new eui.Button();
		this.huifangStartBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin103;
		return t;
	};
	_proto.parseGroup_i = function () {
		var t = new eui.Group();
		this.parseGroup = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 8;
		t.width = 50;
		t.elementsContent = [this.parseBtn_i()];
		return t;
	};
	_proto.parseBtn_i = function () {
		var t = new eui.Button();
		this.parseBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin104;
		return t;
	};
	_proto.resetGroup_i = function () {
		var t = new eui.Group();
		this.resetGroup = t;
		t.height = 50;
		t.verticalCenter = 8;
		t.width = 50;
		t.x = 72;
		t.elementsContent = [this.resetBtn_i()];
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new eui.Button();
		this.resetBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_Huifang2$Skin105;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image43_i(),this.juhua_i(),this._Label10_i()];
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "juhua_png";
		t.y = 265;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "正在连接服务器，请稍候……";
		t.y = 397;
		return t;
	};
	_proto.actionShow_i = function () {
		var t = new eui.Group();
		this.actionShow = t;
		t.height = 418;
		t.verticalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image44_i(),this._Group54_i()];
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_game_json.many_action_bg";
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto._Group54_i = function () {
		var t = new eui.Group();
		t.height = 112;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 690;
		t.elementsContent = [this.selectedChi_i(),this.selectedGang_i(),this.actionShowCardGroup_i(),this.actionShowTitle_i()];
		return t;
	};
	_proto.selectedChi_i = function () {
		var t = new eui.Group();
		this.selectedChi = t;
		t.horizontalCenter = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.visible = false;
		t.elementsContent = [this.chi0_i(),this.chi1_i(),this.chi2_i()];
		return t;
	};
	_proto.chi0_i = function () {
		var t = new eui.Group();
		this.chi0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard02_i(),this.chiCard01_i(),this.chiCard00_i()];
		return t;
	};
	_proto.chiCard02_i = function () {
		var t = new eui.Image();
		this.chiCard02 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard01_i = function () {
		var t = new eui.Image();
		this.chiCard01 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard00_i = function () {
		var t = new eui.Image();
		this.chiCard00 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi1_i = function () {
		var t = new eui.Group();
		this.chi1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard12_i(),this.chiCard11_i(),this.chiCard10_i()];
		return t;
	};
	_proto.chiCard12_i = function () {
		var t = new eui.Image();
		this.chiCard12 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard11_i = function () {
		var t = new eui.Image();
		this.chiCard11 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard10_i = function () {
		var t = new eui.Image();
		this.chiCard10 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi2_i = function () {
		var t = new eui.Group();
		this.chi2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard22_i(),this.chiCard21_i(),this.chiCard20_i()];
		return t;
	};
	_proto.chiCard22_i = function () {
		var t = new eui.Image();
		this.chiCard22 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard21_i = function () {
		var t = new eui.Image();
		this.chiCard21 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard20_i = function () {
		var t = new eui.Image();
		this.chiCard20 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectedGang_i = function () {
		var t = new eui.Group();
		this.selectedGang = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.gang3_i(),this.gang2_i(),this.gang1_i(),this.gang0_i()];
		return t;
	};
	_proto.gang3_i = function () {
		var t = new eui.Image();
		this.gang3 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.verticalCenter = 0;
		t.x = 302.74;
		return t;
	};
	_proto.gang2_i = function () {
		var t = new eui.Image();
		this.gang2 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.verticalCenter = 0;
		t.x = 207.27;
		return t;
	};
	_proto.gang1_i = function () {
		var t = new eui.Image();
		this.gang1 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.verticalCenter = 0;
		t.x = 113.28;
		return t;
	};
	_proto.gang0_i = function () {
		var t = new eui.Image();
		this.gang0 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.verticalCenter = 0;
		t.x = 19.38;
		return t;
	};
	_proto.actionShowCardGroup_i = function () {
		var t = new eui.Group();
		this.actionShowCardGroup = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 132.88;
		t.y = 12;
		t.elementsContent = [this.gang7_i(),this.gang6_i(),this.gang5_i(),this.gang4_i(),this.gang8_i(),this.gang9_i(),this.gang10_i(),this.gang11_i(),this.gang12_i(),this.gang13_i()];
		return t;
	};
	_proto.gang7_i = function () {
		var t = new eui.Image();
		this.gang7 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gang6_i = function () {
		var t = new eui.Image();
		this.gang6 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.gang5_i = function () {
		var t = new eui.Image();
		this.gang5 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 160;
		t.y = 0;
		return t;
	};
	_proto.gang4_i = function () {
		var t = new eui.Image();
		this.gang4 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto.gang8_i = function () {
		var t = new eui.Image();
		this.gang8 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 320;
		t.y = 0;
		return t;
	};
	_proto.gang9_i = function () {
		var t = new eui.Image();
		this.gang9 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 400;
		t.y = 0;
		return t;
	};
	_proto.gang10_i = function () {
		var t = new eui.Image();
		this.gang10 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 480;
		t.y = 0;
		return t;
	};
	_proto.gang11_i = function () {
		var t = new eui.Image();
		this.gang11 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 560;
		t.y = 0;
		return t;
	};
	_proto.gang12_i = function () {
		var t = new eui.Image();
		this.gang12 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 640;
		t.y = 0;
		return t;
	};
	_proto.gang13_i = function () {
		var t = new eui.Image();
		this.gang13 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto.actionShowTitle_i = function () {
		var t = new eui.Image();
		this.actionShowTitle = t;
		t.source = "xll_game_json.many_chi_title";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.backHallBtnHF_i = function () {
		var t = new eui.Image();
		this.backHallBtnHF = t;
		t.scaleX = -1;
		t.source = "zhanji_game_back_png";
		t.x = 1047.17;
		t.y = 498.42;
		return t;
	};
	return hzmjIndex_Huifang2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/hzmjIndex_huifang.exml'] = window.hzmjIndex_huifang = (function (_super) {
	__extends(hzmjIndex_huifang, _super);
	var hzmjIndex_huifang$Skin106 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin106, _super);
		function hzmjIndex_huifang$Skin106() {
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
		var _proto = hzmjIndex_huifang$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.hzmj_cardBtn";
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
		return hzmjIndex_huifang$Skin106;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin107 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin107, _super);
		function hzmjIndex_huifang$Skin107() {
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
		var _proto = hzmjIndex_huifang$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HJMJbtn_type1";
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
		return hzmjIndex_huifang$Skin107;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin108 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin108, _super);
		function hzmjIndex_huifang$Skin108() {
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
		var _proto = hzmjIndex_huifang$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type2";
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
		return hzmjIndex_huifang$Skin108;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin109 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin109, _super);
		function hzmjIndex_huifang$Skin109() {
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
		var _proto = hzmjIndex_huifang$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type3";
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
		return hzmjIndex_huifang$Skin109;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin110 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin110, _super);
		function hzmjIndex_huifang$Skin110() {
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
		var _proto = hzmjIndex_huifang$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type4";
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
		return hzmjIndex_huifang$Skin110;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin111 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin111, _super);
		function hzmjIndex_huifang$Skin111() {
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
		var _proto = hzmjIndex_huifang$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type5";
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
		return hzmjIndex_huifang$Skin111;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin112 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin112, _super);
		function hzmjIndex_huifang$Skin112() {
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
		var _proto = hzmjIndex_huifang$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex_huifang$Skin112;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin113 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin113, _super);
		function hzmjIndex_huifang$Skin113() {
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
		var _proto = hzmjIndex_huifang$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HJMJbtn_type1";
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
		return hzmjIndex_huifang$Skin113;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin114 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin114, _super);
		function hzmjIndex_huifang$Skin114() {
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
		var _proto = hzmjIndex_huifang$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type2";
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
		return hzmjIndex_huifang$Skin114;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin115 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin115, _super);
		function hzmjIndex_huifang$Skin115() {
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
		var _proto = hzmjIndex_huifang$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type3";
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
		return hzmjIndex_huifang$Skin115;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin116 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin116, _super);
		function hzmjIndex_huifang$Skin116() {
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
		var _proto = hzmjIndex_huifang$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type4";
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
		return hzmjIndex_huifang$Skin116;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin117 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin117, _super);
		function hzmjIndex_huifang$Skin117() {
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
		var _proto = hzmjIndex_huifang$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type5";
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
		return hzmjIndex_huifang$Skin117;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin118 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin118, _super);
		function hzmjIndex_huifang$Skin118() {
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
		var _proto = hzmjIndex_huifang$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex_huifang$Skin118;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin119 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin119, _super);
		function hzmjIndex_huifang$Skin119() {
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
		var _proto = hzmjIndex_huifang$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HJMJbtn_type1";
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
		return hzmjIndex_huifang$Skin119;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin120 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin120, _super);
		function hzmjIndex_huifang$Skin120() {
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
		var _proto = hzmjIndex_huifang$Skin120.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type2";
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
		return hzmjIndex_huifang$Skin120;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin121 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin121, _super);
		function hzmjIndex_huifang$Skin121() {
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
		var _proto = hzmjIndex_huifang$Skin121.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type3";
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
		return hzmjIndex_huifang$Skin121;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin122 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin122, _super);
		function hzmjIndex_huifang$Skin122() {
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
		var _proto = hzmjIndex_huifang$Skin122.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type4";
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
		return hzmjIndex_huifang$Skin122;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin123 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin123, _super);
		function hzmjIndex_huifang$Skin123() {
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
		var _proto = hzmjIndex_huifang$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type5";
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
		return hzmjIndex_huifang$Skin123;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin124 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin124, _super);
		function hzmjIndex_huifang$Skin124() {
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
		var _proto = hzmjIndex_huifang$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex_huifang$Skin124;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin125 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin125, _super);
		function hzmjIndex_huifang$Skin125() {
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
		var _proto = hzmjIndex_huifang$Skin125.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HJMJbtn_type1";
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
		return hzmjIndex_huifang$Skin125;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin126 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin126, _super);
		function hzmjIndex_huifang$Skin126() {
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
		var _proto = hzmjIndex_huifang$Skin126.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type2";
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
		return hzmjIndex_huifang$Skin126;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin127 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin127, _super);
		function hzmjIndex_huifang$Skin127() {
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
		var _proto = hzmjIndex_huifang$Skin127.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type3";
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
		return hzmjIndex_huifang$Skin127;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin128 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin128, _super);
		function hzmjIndex_huifang$Skin128() {
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
		var _proto = hzmjIndex_huifang$Skin128.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type4";
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
		return hzmjIndex_huifang$Skin128;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin129 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin129, _super);
		function hzmjIndex_huifang$Skin129() {
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
		var _proto = hzmjIndex_huifang$Skin129.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJDesk_json.HZMJbtn_type5";
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
		return hzmjIndex_huifang$Skin129;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin130 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin130, _super);
		function hzmjIndex_huifang$Skin130() {
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
		var _proto = hzmjIndex_huifang$Skin130.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_type6";
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
		return hzmjIndex_huifang$Skin130;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin131 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin131, _super);
		function hzmjIndex_huifang$Skin131() {
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
		var _proto = hzmjIndex_huifang$Skin131.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "HZMJbtn_start";
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
		return hzmjIndex_huifang$Skin131;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin132 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin132, _super);
		function hzmjIndex_huifang$Skin132() {
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
		var _proto = hzmjIndex_huifang$Skin132.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hamj_btn_js";
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
		return hzmjIndex_huifang$Skin132;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin133 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin133, _super);
		function hzmjIndex_huifang$Skin133() {
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
		var _proto = hzmjIndex_huifang$Skin133.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanji_bg6_png";
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
		return hzmjIndex_huifang$Skin133;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin134 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin134, _super);
		function hzmjIndex_huifang$Skin134() {
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
		var _proto = hzmjIndex_huifang$Skin134.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanji_bg9_png";
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
		return hzmjIndex_huifang$Skin134;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin135 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin135, _super);
		function hzmjIndex_huifang$Skin135() {
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
		var _proto = hzmjIndex_huifang$Skin135.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanji_bg8_png";
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
		return hzmjIndex_huifang$Skin135;
	})(eui.Skin);

	var hzmjIndex_huifang$Skin136 = 	(function (_super) {
		__extends(hzmjIndex_huifang$Skin136, _super);
		function hzmjIndex_huifang$Skin136() {
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
		var _proto = hzmjIndex_huifang$Skin136.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanji_bg7_png";
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
		return hzmjIndex_huifang$Skin136;
	})(eui.Skin);

	function hzmjIndex_huifang() {
		_super.call(this);
		this.skinParts = ["headImg4","roomOwner4","zhuang4","headbox4","nickname4","score4","headImg1","roomOwner1","zhuang1","headbox1","nickname1","score1","headImg2","roomOwner2","zhuang2","headbox2","nickname2","score2","headImg3","roomOwner3","zhuang3","headbox3","nickname3","score3","position3","position1","position0","position2","daojishi","restMaCardNum","jushu","dirGroup","ready0","ready1","ready3","ready2","roompwd","ruleBtn","handCard00","handCard01","handCard02","handCard03","handCard04","handCard05","handCard06","handCard07","handCard08","handCard09","handCard010","handCard011","handCard012","moCard0","HandCard0","moCard1","handCard112","handCard111","handCard110","handCard19","handCard18","handCard17","handCard16","handCard15","handCard14","handCard13","handCard12","handCard11","handCard10","HandCard1","moCard2","handCard212","handCard211","handCard210","handCard29","handCard28","handCard27","handCard26","handCard25","handCard24","handCard23","handCard22","handCard21","handCard20","HandCard2","handCard30","handCard31","handCard32","handCard33","handCard34","handCard35","handCard36","handCard37","handCard38","handCard39","handCard310","handCard311","handCard312","moCard3","HandCard3","outCard030","outCard031","outCard032","outCard033","outCard034","outCard035","outCard036","outCard037","outCard038","outCard039","outCard020","outCard021","outCard022","outCard023","outCard024","outCard025","outCard026","outCard027","outCard028","outCard029","outCard010","outCard011","outCard012","outCard013","outCard014","outCard015","outCard016","outCard017","outCard018","outCard019","outCard00","outCard01","outCard02","outCard03","outCard04","outCard05","outCard06","outCard07","outCard08","outCard09","outCard0","outCard29","outCard28","outCard27","outCard26","outCard25","outCard24","outCard23","outCard22","outCard21","outCard20","outCard219","outCard218","outCard217","outCard216","outCard215","outCard214","outCard213","outCard212","outCard211","outCard210","outCard229","outCard228","outCard227","outCard226","outCard225","outCard224","outCard223","outCard222","outCard221","outCard220","outCard239","outCard238","outCard237","outCard236","outCard235","outCard234","outCard233","outCard232","outCard231","outCard230","outCard2","outCard136","outCard137","outCard138","outCard139","outCard140","outCard141","outCard142","outCard143","outCard144","outCard145","outCard146","outCard147","outCard135","outCard134","outCard133","outCard132","outCard131","outCard130","outCard129","outCard128","outCard127","outCard126","outCard125","outCard124","outCard123","outCard122","outCard121","outCard120","outCard119","outCard118","outCard117","outCard116","outCard115","outCard114","outCard113","outCard112","outCard111","outCard110","outCard19","outCard18","outCard17","outCard16","outCard15","outCard14","outCard13","outCard12","outCard11","outCard10","outCard1","outCard30","outCard31","outCard32","outCard33","outCard34","outCard35","outCard36","outCard37","outCard38","outCard39","outCard310","outCard311","outCard312","outCard313","outCard314","outCard315","outCard316","outCard317","outCard318","outCard319","outCard320","outCard321","outCard322","outCard323","outCard324","outCard325","outCard326","outCard327","outCard328","outCard329","outCard330","outCard331","outCard332","outCard333","outCard334","outCard335","outCard336","outCard337","outCard338","outCard339","outCard340","outCard341","outCard342","outCard343","outCard344","outCard345","outCard346","outCard347","outCard3","actioncard000","actioncard001","actioncard002","actioncard003","actionItem00","actioncard010","actioncard011","actioncard012","actioncard013","actionItem01","actioncard020","actioncard021","actioncard022","actioncard023","actionItem02","actioncard030","actioncard031","actioncard032","actioncard033","actionItem03","actionCardGroud0","actioncard200","actioncard201","actioncard202","actioncard203","actionItem20","actioncard210","actioncard211","actioncard212","actioncard213","actionItem21","actioncard220","actioncard221","actioncard222","actioncard223","actionItem22","actioncard230","actioncard231","actioncard232","actioncard233","actionItem23","actionCardGroud2","actioncard300","actioncard301","actioncard302","actioncard303","actionItem30","actioncard310","actioncard311","actioncard312","actioncard313","actionItem31","actioncard320","actioncard321","actioncard322","actioncard323","actionItem32","actioncard330","actioncard331","actioncard332","actioncard333","actionItem33","actionCardGroud3","actioncard132","actioncard131","actioncard130","actioncard133","actionItem13","actioncard122","actioncard121","actioncard120","actioncard123","actionItem12","actioncard112","actioncard111","actioncard110","actioncard113","actionItem11","actioncard102","actioncard101","actioncard100","actioncard103","actionItem10","actionCardGroud1","dimissProcess","dismissGroup","whoJoin","joinNotice","yaoqing","actionBtn00","actionBtnGroup00","actionBtn01","card010","chiCard002","chiCard001","chiCard000","chi00","chiCard012","chiCard011","chiCard010","chi01","chiCard022","chiCard021","chiCard020","chi02","selectedChi0","actionBtnGroup01","actionBtn02","card020","actionBtnGroup02","actionBtn03","card030","actionBtnGroup03","actionBtn04","card040","actionBtnGroup04","actionBtn05","actionBtnGroup05","actiopnGroup0","actionBtn10","actionBtnGroup10","actionBtn11","card110","chiCard102","chiCard101","chiCard100","chi10","chiCard112","chiCard111","chiCard110","chi11","chiCard122","chiCard121","chiCard120","chi12","selectedChi1","actionBtnGroup11","actionBtn12","card120","actionBtnGroup12","actionBtn13","card130","actionBtnGroup13","actionBtn14","card140","actionBtnGroup14","actionBtn15","actionBtnGroup15","actiopnGroup1","actionBtn20","actionBtnGroup20","actionBtn21","card210","chiCard202","chiCard201","chiCard200","chi20","chiCard212","chiCard211","chiCard210","chi21","chiCard222","chiCard221","chiCard220","chi22","selectedChi2","actionBtnGroup21","actionBtn22","card220","actionBtnGroup22","actionBtn23","card230","actionBtnGroup23","actionBtn24","card240","actionBtnGroup24","actionBtn25","actionBtnGroup25","actiopnGroup2","actionBtn30","actionBtnGroup30","actionBtn31","card310","chiCard302","chiCard301","chiCard300","chi30","chiCard312","chiCard311","chiCard310","chi31","chiCard322","chiCard321","chiCard320","chi32","selectedChi3","actionBtnGroup31","actionBtn32","card320","actionBtnGroup32","actionBtn33","card330","actionBtnGroup33","actionBtn34","card340","actionBtnGroup34","actionBtn35","actionBtnGroup35","actiopnGroup3","startBtn","ready_disband","menban0","menban","nextStepBtn","huifangStartBtn","huifangStartGroup","parseBtn","parseGroup","resetBtn","resetGroup","huifangGroup","backHallBtn","ruleMenabn","roomPwdRule","playcount","peopleCount","wanfaText","laoqi","jiafan","fending","roomRuleUI","juhua","waitConnect"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.dirGroup_i(),this.ready0_i(),this.ready1_i(),this.ready3_i(),this.ready2_i(),this._Label1_i(),this.roompwd_i(),this.ruleBtn_i(),this.HandCard0_i(),this.HandCard1_i(),this.HandCard2_i(),this.HandCard3_i(),this.outCard0_i(),this.outCard2_i(),this.outCard1_i(),this.outCard3_i(),this.actionCardGroud0_i(),this.actionCardGroud2_i(),this.actionCardGroud3_i(),this.actionCardGroud1_i(),this.dismissGroup_i(),this.joinNotice_i(),this.yaoqing_i(),this.actiopnGroup0_i(),this.actiopnGroup1_i(),this.actiopnGroup2_i(),this.actiopnGroup3_i(),this.startBtn_i(),this.ready_disband_i(),this.menban0_i(),this.menban_i(),this.huifangGroup_i(),this.backHallBtn_i(),this.roomRuleUI_i(),this.waitConnect_i()];
	}
	var _proto = hzmjIndex_huifang.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "hzmj_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -266;
		t.visible = false;
		t.y = 4;
		t.elementsContent = [this.headbox4_i(),this.nickname4_i(),this.score4_i()];
		return t;
	};
	_proto.headbox4_i = function () {
		var t = new eui.Group();
		this.headbox4 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg4_i(),this._Image2_i(),this.roomOwner4_i(),this.zhuang4_i()];
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner4_i = function () {
		var t = new eui.Image();
		this.roomOwner4 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang4_i = function () {
		var t = new eui.Image();
		this.zhuang4 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -480;
		t.visible = false;
		t.y = 403.26;
		t.elementsContent = [this.headbox1_i(),this.nickname1_i(),this.score1_i()];
		return t;
	};
	_proto.headbox1_i = function () {
		var t = new eui.Group();
		this.headbox1 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg1_i(),this._Image3_i(),this.roomOwner1_i(),this.zhuang1_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner1_i = function () {
		var t = new eui.Image();
		this.roomOwner1 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -481;
		t.verticalCenter = -70.5;
		t.visible = false;
		t.elementsContent = [this.headbox2_i(),this.nickname2_i(),this.score2_i()];
		return t;
	};
	_proto.headbox2_i = function () {
		var t = new eui.Group();
		this.headbox2 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg2_i(),this._Image4_i(),this.roomOwner2_i(),this.zhuang2_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner2_i = function () {
		var t = new eui.Image();
		this.roomOwner2 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 485;
		t.verticalCenter = -70.5;
		t.visible = false;
		t.elementsContent = [this.headbox3_i(),this.nickname3_i(),this.score3_i()];
		return t;
	};
	_proto.headbox3_i = function () {
		var t = new eui.Group();
		this.headbox3 = t;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg3_i(),this._Image5_i(),this.roomOwner3_i(),this.zhuang3_i()];
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner3_i = function () {
		var t = new eui.Image();
		this.roomOwner3 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang3_i = function () {
		var t = new eui.Image();
		this.zhuang3 = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_6456";
		t.textAlign = "center";
		t.width = 108;
		t.x = 0;
		t.y = 78.01;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto.dirGroup_i = function () {
		var t = new eui.Group();
		this.dirGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -25;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image6_i(),this.position3_i(),this.position1_i(),this.position0_i(),this.position2_i(),this.daojishi_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "HZMJDesk_json.HZMJturn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.position3_i = function () {
		var t = new eui.Image();
		this.position3 = t;
		t.source = "HZMJDesk_json.HZMJleft";
		t.x = 3.33;
		t.y = 7.25;
		return t;
	};
	_proto.position1_i = function () {
		var t = new eui.Image();
		this.position1 = t;
		t.source = "HZMJDesk_json.HZMJright";
		t.x = 59.16;
		t.y = 7.49;
		return t;
	};
	_proto.position0_i = function () {
		var t = new eui.Image();
		this.position0 = t;
		t.source = "HZMJDesk_json.HZMJdown";
		t.x = 7.67;
		t.y = 58.4;
		return t;
	};
	_proto.position2_i = function () {
		var t = new eui.Image();
		this.position2 = t;
		t.source = "HZMJDesk_json.HZMJup";
		t.x = 7.67;
		t.y = 4.33;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.BitmapLabel();
		this.daojishi = t;
		t.font = "deskDJS_fnt";
		t.horizontalCenter = 0;
		t.text = "10";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 221.66;
		t.y = 27;
		t.elementsContent = [this._Image7_i(),this.restMaCardNum_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "HZMJDesk_json.HZMJzhang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.restMaCardNum_i = function () {
		var t = new eui.Label();
		this.restMaCardNum = t;
		t.height = 23;
		t.size = 23;
		t.text = "20";
		t.textAlign = "center";
		t.verticalCenter = -1;
		t.width = 40;
		t.x = 54.77;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 0;
		t.elementsContent = [this._Image8_i(),this.jushu_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "HZMJDesk_json.HZMJju";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jushu_i = function () {
		var t = new eui.Label();
		this.jushu = t;
		t.height = 23;
		t.size = 23;
		t.text = "20";
		t.textAlign = "center";
		t.verticalCenter = -1;
		t.width = 40;
		t.x = 55.33;
		return t;
	};
	_proto.ready0_i = function () {
		var t = new eui.Image();
		this.ready0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "HZMJDesk_json.HZMJword_ready";
		t.y = 432.48;
		return t;
	};
	_proto.ready1_i = function () {
		var t = new eui.Image();
		this.ready1 = t;
		t.horizontalCenter = 310;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "HZMJDesk_json.HZMJword_ready";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.ready3_i = function () {
		var t = new eui.Image();
		this.ready3 = t;
		t.horizontalCenter = -296;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "HZMJDesk_json.HZMJword_ready";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.ready2_i = function () {
		var t = new eui.Image();
		this.ready2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "HZMJDesk_json.HZMJword_ready";
		t.y = 176.42;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "房间号";
		t.x = 30;
		t.y = 17.8;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.size = 25;
		t.text = "666666";
		t.x = 30;
		t.y = 46.71;
		return t;
	};
	_proto.ruleBtn_i = function () {
		var t = new eui.Button();
		this.ruleBtn = t;
		t.label = "";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 25.39;
		t.y = 85.91;
		t.skinName = hzmjIndex_huifang$Skin106;
		return t;
	};
	_proto.HandCard0_i = function () {
		var t = new eui.Group();
		this.HandCard0 = t;
		t.horizontalCenter = 4;
		t.scaleX = 0.97;
		t.scaleY = 0.97;
		t.visible = false;
		t.y = 527.03;
		t.elementsContent = [this.handCard00_i(),this.handCard01_i(),this.handCard02_i(),this.handCard03_i(),this.handCard04_i(),this.handCard05_i(),this.handCard06_i(),this.handCard07_i(),this.handCard08_i(),this.handCard09_i(),this.handCard010_i(),this.handCard011_i(),this.handCard012_i(),this.moCard0_i()];
		return t;
	};
	_proto.handCard00_i = function () {
		var t = new eui.Image();
		this.handCard00 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 8.22;
		return t;
	};
	_proto.handCard01_i = function () {
		var t = new eui.Image();
		this.handCard01 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 81.22;
		return t;
	};
	_proto.handCard02_i = function () {
		var t = new eui.Image();
		this.handCard02 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 154.22;
		return t;
	};
	_proto.handCard03_i = function () {
		var t = new eui.Image();
		this.handCard03 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 227.22;
		return t;
	};
	_proto.handCard04_i = function () {
		var t = new eui.Image();
		this.handCard04 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 300.22;
		return t;
	};
	_proto.handCard05_i = function () {
		var t = new eui.Image();
		this.handCard05 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 373.22;
		return t;
	};
	_proto.handCard06_i = function () {
		var t = new eui.Image();
		this.handCard06 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 444.85;
		return t;
	};
	_proto.handCard07_i = function () {
		var t = new eui.Image();
		this.handCard07 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 517.85;
		return t;
	};
	_proto.handCard08_i = function () {
		var t = new eui.Image();
		this.handCard08 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 590.85;
		return t;
	};
	_proto.handCard09_i = function () {
		var t = new eui.Image();
		this.handCard09 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 663.85;
		return t;
	};
	_proto.handCard010_i = function () {
		var t = new eui.Image();
		this.handCard010 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 736.85;
		return t;
	};
	_proto.handCard011_i = function () {
		var t = new eui.Image();
		this.handCard011 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 809.85;
		return t;
	};
	_proto.handCard012_i = function () {
		var t = new eui.Image();
		this.handCard012 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 882.85;
		return t;
	};
	_proto.moCard0_i = function () {
		var t = new eui.Image();
		this.moCard0 = t;
		t.source = "MJCard_json.ownw_1";
		t.verticalCenter = 0;
		t.x = 976.65;
		t.y = 10;
		return t;
	};
	_proto.HandCard1_i = function () {
		var t = new eui.Group();
		this.HandCard1 = t;
		t.x = 931.3;
		t.y = 63.33;
		t.elementsContent = [this.moCard1_i(),this.handCard112_i(),this.handCard111_i(),this.handCard110_i(),this.handCard19_i(),this.handCard18_i(),this.handCard17_i(),this.handCard16_i(),this.handCard15_i(),this.handCard14_i(),this.handCard13_i(),this.handCard12_i(),this.handCard11_i(),this.handCard10_i()];
		return t;
	};
	_proto.moCard1_i = function () {
		var t = new eui.Image();
		this.moCard1 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.y = 0;
		return t;
	};
	_proto.handCard112_i = function () {
		var t = new eui.Image();
		this.handCard112 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.y = 55;
		return t;
	};
	_proto.handCard111_i = function () {
		var t = new eui.Image();
		this.handCard111 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 10;
		t.y = 82;
		return t;
	};
	_proto.handCard110_i = function () {
		var t = new eui.Image();
		this.handCard110 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 20;
		t.y = 109;
		return t;
	};
	_proto.handCard19_i = function () {
		var t = new eui.Image();
		this.handCard19 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 30;
		t.y = 136;
		return t;
	};
	_proto.handCard18_i = function () {
		var t = new eui.Image();
		this.handCard18 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 40;
		t.y = 163;
		return t;
	};
	_proto.handCard17_i = function () {
		var t = new eui.Image();
		this.handCard17 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 50;
		t.y = 190;
		return t;
	};
	_proto.handCard16_i = function () {
		var t = new eui.Image();
		this.handCard16 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 60;
		t.y = 217;
		return t;
	};
	_proto.handCard15_i = function () {
		var t = new eui.Image();
		this.handCard15 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 70;
		t.y = 244;
		return t;
	};
	_proto.handCard14_i = function () {
		var t = new eui.Image();
		this.handCard14 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 80;
		t.y = 271;
		return t;
	};
	_proto.handCard13_i = function () {
		var t = new eui.Image();
		this.handCard13 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 90;
		t.y = 298;
		return t;
	};
	_proto.handCard12_i = function () {
		var t = new eui.Image();
		this.handCard12 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 100;
		t.y = 325;
		return t;
	};
	_proto.handCard11_i = function () {
		var t = new eui.Image();
		this.handCard11 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 110;
		t.y = 352;
		return t;
	};
	_proto.handCard10_i = function () {
		var t = new eui.Image();
		this.handCard10 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.right_card";
		t.x = 120;
		t.y = 377;
		return t;
	};
	_proto.HandCard2_i = function () {
		var t = new eui.Group();
		this.HandCard2 = t;
		t.horizontalCenter = 54;
		t.y = 15.01;
		t.elementsContent = [this.moCard2_i(),this.handCard212_i(),this.handCard211_i(),this.handCard210_i(),this.handCard29_i(),this.handCard28_i(),this.handCard27_i(),this.handCard26_i(),this.handCard25_i(),this.handCard24_i(),this.handCard23_i(),this.handCard22_i(),this.handCard21_i(),this.handCard20_i()];
		return t;
	};
	_proto.moCard2_i = function () {
		var t = new eui.Image();
		this.moCard2 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 0;
		return t;
	};
	_proto.handCard212_i = function () {
		var t = new eui.Image();
		this.handCard212 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 51.61;
		return t;
	};
	_proto.handCard211_i = function () {
		var t = new eui.Image();
		this.handCard211 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 89.61;
		return t;
	};
	_proto.handCard210_i = function () {
		var t = new eui.Image();
		this.handCard210 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 127.61;
		t.y = 20;
		return t;
	};
	_proto.handCard29_i = function () {
		var t = new eui.Image();
		this.handCard29 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 165.61;
		t.y = 30;
		return t;
	};
	_proto.handCard28_i = function () {
		var t = new eui.Image();
		this.handCard28 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 203.61;
		t.y = 40;
		return t;
	};
	_proto.handCard27_i = function () {
		var t = new eui.Image();
		this.handCard27 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 241.61;
		t.y = 50;
		return t;
	};
	_proto.handCard26_i = function () {
		var t = new eui.Image();
		this.handCard26 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 279.61;
		t.y = 60;
		return t;
	};
	_proto.handCard25_i = function () {
		var t = new eui.Image();
		this.handCard25 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 317.61;
		t.y = 70;
		return t;
	};
	_proto.handCard24_i = function () {
		var t = new eui.Image();
		this.handCard24 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 355.61;
		t.y = 80;
		return t;
	};
	_proto.handCard23_i = function () {
		var t = new eui.Image();
		this.handCard23 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 393.61;
		t.y = 90;
		return t;
	};
	_proto.handCard22_i = function () {
		var t = new eui.Image();
		this.handCard22 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 431.61;
		t.y = 100;
		return t;
	};
	_proto.handCard21_i = function () {
		var t = new eui.Image();
		this.handCard21 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 469.61;
		t.y = 110;
		return t;
	};
	_proto.handCard20_i = function () {
		var t = new eui.Image();
		this.handCard20 = t;
		t.height = 57;
		t.source = "MJCard_json.top_card";
		t.verticalCenter = 0;
		t.width = 38;
		t.x = 507.61;
		t.y = 120;
		return t;
	};
	_proto.HandCard3_i = function () {
		var t = new eui.Group();
		this.HandCard3 = t;
		t.x = 105.1;
		t.y = 69.02;
		t.elementsContent = [this.handCard30_i(),this.handCard31_i(),this.handCard32_i(),this.handCard33_i(),this.handCard34_i(),this.handCard35_i(),this.handCard36_i(),this.handCard37_i(),this.handCard38_i(),this.handCard39_i(),this.handCard310_i(),this.handCard311_i(),this.handCard312_i(),this.moCard3_i()];
		return t;
	};
	_proto.handCard30_i = function () {
		var t = new eui.Image();
		this.handCard30 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.y = 0;
		return t;
	};
	_proto.handCard31_i = function () {
		var t = new eui.Image();
		this.handCard31 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.y = 27;
		return t;
	};
	_proto.handCard32_i = function () {
		var t = new eui.Image();
		this.handCard32 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.handCard33_i = function () {
		var t = new eui.Image();
		this.handCard33 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 20;
		t.y = 81;
		return t;
	};
	_proto.handCard34_i = function () {
		var t = new eui.Image();
		this.handCard34 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 30;
		t.y = 108;
		return t;
	};
	_proto.handCard35_i = function () {
		var t = new eui.Image();
		this.handCard35 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 40;
		t.y = 135;
		return t;
	};
	_proto.handCard36_i = function () {
		var t = new eui.Image();
		this.handCard36 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 50;
		t.y = 162;
		return t;
	};
	_proto.handCard37_i = function () {
		var t = new eui.Image();
		this.handCard37 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 60;
		t.y = 189;
		return t;
	};
	_proto.handCard38_i = function () {
		var t = new eui.Image();
		this.handCard38 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 70;
		t.y = 216;
		return t;
	};
	_proto.handCard39_i = function () {
		var t = new eui.Image();
		this.handCard39 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 80;
		t.y = 243;
		return t;
	};
	_proto.handCard310_i = function () {
		var t = new eui.Image();
		this.handCard310 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 90;
		t.y = 270;
		return t;
	};
	_proto.handCard311_i = function () {
		var t = new eui.Image();
		this.handCard311 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.left_card";
		t.x = 100;
		t.y = 297;
		return t;
	};
	_proto.handCard312_i = function () {
		var t = new eui.Image();
		this.handCard312 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.leftw_1";
		t.x = 110;
		t.y = 324;
		return t;
	};
	_proto.moCard3_i = function () {
		var t = new eui.Image();
		this.moCard3 = t;
		t.horizontalCenter = 0;
		t.source = "MJCard_json.leftw_1";
		t.x = 120;
		t.y = 378;
		return t;
	};
	_proto.outCard0_i = function () {
		var t = new eui.Group();
		this.outCard0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.visible = false;
		t.x = 314.84;
		t.y = 305.33;
		t.elementsContent = [this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard030_i(),this.outCard031_i(),this.outCard032_i(),this.outCard033_i(),this.outCard034_i(),this.outCard035_i(),this.outCard036_i(),this.outCard037_i(),this.outCard038_i(),this.outCard039_i()];
		return t;
	};
	_proto.outCard030_i = function () {
		var t = new eui.Image();
		this.outCard030 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard031_i = function () {
		var t = new eui.Image();
		this.outCard031 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard032_i = function () {
		var t = new eui.Image();
		this.outCard032 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard033_i = function () {
		var t = new eui.Image();
		this.outCard033 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard034_i = function () {
		var t = new eui.Image();
		this.outCard034 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard035_i = function () {
		var t = new eui.Image();
		this.outCard035 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard036_i = function () {
		var t = new eui.Image();
		this.outCard036 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard037_i = function () {
		var t = new eui.Image();
		this.outCard037 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard038_i = function () {
		var t = new eui.Image();
		this.outCard038 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard039_i = function () {
		var t = new eui.Image();
		this.outCard039 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 80.67;
		t.elementsContent = [this.outCard020_i(),this.outCard021_i(),this.outCard022_i(),this.outCard023_i(),this.outCard024_i(),this.outCard025_i(),this.outCard026_i(),this.outCard027_i(),this.outCard028_i(),this.outCard029_i()];
		return t;
	};
	_proto.outCard020_i = function () {
		var t = new eui.Image();
		this.outCard020 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard021_i = function () {
		var t = new eui.Image();
		this.outCard021 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard022_i = function () {
		var t = new eui.Image();
		this.outCard022 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard023_i = function () {
		var t = new eui.Image();
		this.outCard023 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard024_i = function () {
		var t = new eui.Image();
		this.outCard024 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard025_i = function () {
		var t = new eui.Image();
		this.outCard025 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard026_i = function () {
		var t = new eui.Image();
		this.outCard026 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard027_i = function () {
		var t = new eui.Image();
		this.outCard027 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard028_i = function () {
		var t = new eui.Image();
		this.outCard028 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard029_i = function () {
		var t = new eui.Image();
		this.outCard029 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 168;
		t.elementsContent = [this.outCard010_i(),this.outCard011_i(),this.outCard012_i(),this.outCard013_i(),this.outCard014_i(),this.outCard015_i(),this.outCard016_i(),this.outCard017_i(),this.outCard018_i(),this.outCard019_i()];
		return t;
	};
	_proto.outCard010_i = function () {
		var t = new eui.Image();
		this.outCard010 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard011_i = function () {
		var t = new eui.Image();
		this.outCard011 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard012_i = function () {
		var t = new eui.Image();
		this.outCard012 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard013_i = function () {
		var t = new eui.Image();
		this.outCard013 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard014_i = function () {
		var t = new eui.Image();
		this.outCard014 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard015_i = function () {
		var t = new eui.Image();
		this.outCard015 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard016_i = function () {
		var t = new eui.Image();
		this.outCard016 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard017_i = function () {
		var t = new eui.Image();
		this.outCard017 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard018_i = function () {
		var t = new eui.Image();
		this.outCard018 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard019_i = function () {
		var t = new eui.Image();
		this.outCard019 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 252;
		t.elementsContent = [this.outCard00_i(),this.outCard01_i(),this.outCard02_i(),this.outCard03_i(),this.outCard04_i(),this.outCard05_i(),this.outCard06_i(),this.outCard07_i(),this.outCard08_i(),this.outCard09_i()];
		return t;
	};
	_proto.outCard00_i = function () {
		var t = new eui.Image();
		this.outCard00 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard01_i = function () {
		var t = new eui.Image();
		this.outCard01 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard02_i = function () {
		var t = new eui.Image();
		this.outCard02 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard03_i = function () {
		var t = new eui.Image();
		this.outCard03 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard04_i = function () {
		var t = new eui.Image();
		this.outCard04 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard05_i = function () {
		var t = new eui.Image();
		this.outCard05 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard06_i = function () {
		var t = new eui.Image();
		this.outCard06 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard07_i = function () {
		var t = new eui.Image();
		this.outCard07 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard08_i = function () {
		var t = new eui.Image();
		this.outCard08 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard09_i = function () {
		var t = new eui.Image();
		this.outCard09 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard2_i = function () {
		var t = new eui.Group();
		this.outCard2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.visible = false;
		t.x = 320.17;
		t.y = 72.67;
		t.elementsContent = [this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i()];
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard29_i(),this.outCard28_i(),this.outCard27_i(),this.outCard26_i(),this.outCard25_i(),this.outCard24_i(),this.outCard23_i(),this.outCard22_i(),this.outCard21_i(),this.outCard20_i()];
		return t;
	};
	_proto.outCard29_i = function () {
		var t = new eui.Image();
		this.outCard29 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard28_i = function () {
		var t = new eui.Image();
		this.outCard28 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard27_i = function () {
		var t = new eui.Image();
		this.outCard27 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard26_i = function () {
		var t = new eui.Image();
		this.outCard26 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard25_i = function () {
		var t = new eui.Image();
		this.outCard25 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard24_i = function () {
		var t = new eui.Image();
		this.outCard24 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard23_i = function () {
		var t = new eui.Image();
		this.outCard23 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard22_i = function () {
		var t = new eui.Image();
		this.outCard22 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard21_i = function () {
		var t = new eui.Image();
		this.outCard21 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard20_i = function () {
		var t = new eui.Image();
		this.outCard20 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 84;
		t.elementsContent = [this.outCard219_i(),this.outCard218_i(),this.outCard217_i(),this.outCard216_i(),this.outCard215_i(),this.outCard214_i(),this.outCard213_i(),this.outCard212_i(),this.outCard211_i(),this.outCard210_i()];
		return t;
	};
	_proto.outCard219_i = function () {
		var t = new eui.Image();
		this.outCard219 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard218_i = function () {
		var t = new eui.Image();
		this.outCard218 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard217_i = function () {
		var t = new eui.Image();
		this.outCard217 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard216_i = function () {
		var t = new eui.Image();
		this.outCard216 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard215_i = function () {
		var t = new eui.Image();
		this.outCard215 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard214_i = function () {
		var t = new eui.Image();
		this.outCard214 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard213_i = function () {
		var t = new eui.Image();
		this.outCard213 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard212_i = function () {
		var t = new eui.Image();
		this.outCard212 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard211_i = function () {
		var t = new eui.Image();
		this.outCard211 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard210_i = function () {
		var t = new eui.Image();
		this.outCard210 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 168;
		t.elementsContent = [this.outCard229_i(),this.outCard228_i(),this.outCard227_i(),this.outCard226_i(),this.outCard225_i(),this.outCard224_i(),this.outCard223_i(),this.outCard222_i(),this.outCard221_i(),this.outCard220_i()];
		return t;
	};
	_proto.outCard229_i = function () {
		var t = new eui.Image();
		this.outCard229 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard228_i = function () {
		var t = new eui.Image();
		this.outCard228 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard227_i = function () {
		var t = new eui.Image();
		this.outCard227 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard226_i = function () {
		var t = new eui.Image();
		this.outCard226 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard225_i = function () {
		var t = new eui.Image();
		this.outCard225 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard224_i = function () {
		var t = new eui.Image();
		this.outCard224 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard223_i = function () {
		var t = new eui.Image();
		this.outCard223 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard222_i = function () {
		var t = new eui.Image();
		this.outCard222 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard221_i = function () {
		var t = new eui.Image();
		this.outCard221 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard220_i = function () {
		var t = new eui.Image();
		this.outCard220 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 252;
		t.elementsContent = [this.outCard239_i(),this.outCard238_i(),this.outCard237_i(),this.outCard236_i(),this.outCard235_i(),this.outCard234_i(),this.outCard233_i(),this.outCard232_i(),this.outCard231_i(),this.outCard230_i()];
		return t;
	};
	_proto.outCard239_i = function () {
		var t = new eui.Image();
		this.outCard239 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard238_i = function () {
		var t = new eui.Image();
		this.outCard238 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outCard237_i = function () {
		var t = new eui.Image();
		this.outCard237 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 144.01;
		t.y = 0;
		return t;
	};
	_proto.outCard236_i = function () {
		var t = new eui.Image();
		this.outCard236 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outCard235_i = function () {
		var t = new eui.Image();
		this.outCard235 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 288;
		t.y = 0;
		return t;
	};
	_proto.outCard234_i = function () {
		var t = new eui.Image();
		this.outCard234 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.outCard233_i = function () {
		var t = new eui.Image();
		this.outCard233 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 432;
		t.y = 0;
		return t;
	};
	_proto.outCard232_i = function () {
		var t = new eui.Image();
		this.outCard232 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 504;
		t.y = 0;
		return t;
	};
	_proto.outCard231_i = function () {
		var t = new eui.Image();
		this.outCard231 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 576;
		t.y = 0;
		return t;
	};
	_proto.outCard230_i = function () {
		var t = new eui.Image();
		this.outCard230 = t;
		t.source = "MJCard_json.zhengfeng_4";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.outCard1_i = function () {
		var t = new eui.Group();
		this.outCard1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 713.02;
		t.y = 115.98;
		t.elementsContent = [this._Group16_i(),this._Group17_i(),this._Group18_i(),this._Group19_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard136_i(),this.outCard137_i(),this.outCard138_i(),this.outCard139_i(),this.outCard140_i(),this.outCard141_i(),this.outCard142_i(),this.outCard143_i(),this.outCard144_i(),this.outCard145_i(),this.outCard146_i(),this.outCard147_i()];
		return t;
	};
	_proto.outCard136_i = function () {
		var t = new eui.Image();
		this.outCard136 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard137_i = function () {
		var t = new eui.Image();
		this.outCard137 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard138_i = function () {
		var t = new eui.Image();
		this.outCard138 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard139_i = function () {
		var t = new eui.Image();
		this.outCard139 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard140_i = function () {
		var t = new eui.Image();
		this.outCard140 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard141_i = function () {
		var t = new eui.Image();
		this.outCard141 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard142_i = function () {
		var t = new eui.Image();
		this.outCard142 = t;
		t.source = "MJCard_json.rightfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard143_i = function () {
		var t = new eui.Image();
		this.outCard143 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard144_i = function () {
		var t = new eui.Image();
		this.outCard144 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard145_i = function () {
		var t = new eui.Image();
		this.outCard145 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard146_i = function () {
		var t = new eui.Image();
		this.outCard146 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard147_i = function () {
		var t = new eui.Image();
		this.outCard147 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 51;
		t.y = -0.67;
		t.elementsContent = [this.outCard135_i(),this.outCard134_i(),this.outCard133_i(),this.outCard132_i(),this.outCard131_i(),this.outCard130_i(),this.outCard129_i(),this.outCard128_i(),this.outCard127_i(),this.outCard126_i(),this.outCard125_i(),this.outCard124_i()];
		return t;
	};
	_proto.outCard135_i = function () {
		var t = new eui.Image();
		this.outCard135 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard134_i = function () {
		var t = new eui.Image();
		this.outCard134 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard133_i = function () {
		var t = new eui.Image();
		this.outCard133 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard132_i = function () {
		var t = new eui.Image();
		this.outCard132 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard131_i = function () {
		var t = new eui.Image();
		this.outCard131 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard130_i = function () {
		var t = new eui.Image();
		this.outCard130 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard129_i = function () {
		var t = new eui.Image();
		this.outCard129 = t;
		t.source = "MJCard_json.rightfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard128_i = function () {
		var t = new eui.Image();
		this.outCard128 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard127_i = function () {
		var t = new eui.Image();
		this.outCard127 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard126_i = function () {
		var t = new eui.Image();
		this.outCard126 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard125_i = function () {
		var t = new eui.Image();
		this.outCard125 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard124_i = function () {
		var t = new eui.Image();
		this.outCard124 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this.outCard123_i(),this.outCard122_i(),this.outCard121_i(),this.outCard120_i(),this.outCard119_i(),this.outCard118_i(),this.outCard117_i(),this.outCard116_i(),this.outCard115_i(),this.outCard114_i(),this.outCard113_i(),this.outCard112_i()];
		return t;
	};
	_proto.outCard123_i = function () {
		var t = new eui.Image();
		this.outCard123 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard122_i = function () {
		var t = new eui.Image();
		this.outCard122 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard121_i = function () {
		var t = new eui.Image();
		this.outCard121 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard120_i = function () {
		var t = new eui.Image();
		this.outCard120 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard119_i = function () {
		var t = new eui.Image();
		this.outCard119 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard118_i = function () {
		var t = new eui.Image();
		this.outCard118 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard117_i = function () {
		var t = new eui.Image();
		this.outCard117 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard116_i = function () {
		var t = new eui.Image();
		this.outCard116 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard115_i = function () {
		var t = new eui.Image();
		this.outCard115 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard114_i = function () {
		var t = new eui.Image();
		this.outCard114 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard113_i = function () {
		var t = new eui.Image();
		this.outCard113 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard112_i = function () {
		var t = new eui.Image();
		this.outCard112 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 153;
		t.y = 0;
		t.elementsContent = [this.outCard111_i(),this.outCard110_i(),this.outCard19_i(),this.outCard18_i(),this.outCard17_i(),this.outCard16_i(),this.outCard15_i(),this.outCard14_i(),this.outCard13_i(),this.outCard12_i(),this.outCard11_i(),this.outCard10_i()];
		return t;
	};
	_proto.outCard111_i = function () {
		var t = new eui.Image();
		this.outCard111 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard110_i = function () {
		var t = new eui.Image();
		this.outCard110 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard19_i = function () {
		var t = new eui.Image();
		this.outCard19 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard18_i = function () {
		var t = new eui.Image();
		this.outCard18 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard17_i = function () {
		var t = new eui.Image();
		this.outCard17 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard16_i = function () {
		var t = new eui.Image();
		this.outCard16 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard15_i = function () {
		var t = new eui.Image();
		this.outCard15 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard14_i = function () {
		var t = new eui.Image();
		this.outCard14 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard13_i = function () {
		var t = new eui.Image();
		this.outCard13 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard12_i = function () {
		var t = new eui.Image();
		this.outCard12 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard11_i = function () {
		var t = new eui.Image();
		this.outCard11 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard10_i = function () {
		var t = new eui.Image();
		this.outCard10 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto.outCard3_i = function () {
		var t = new eui.Group();
		this.outCard3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 160.53;
		t.y = 139.98;
		t.elementsContent = [this._Group20_i(),this._Group21_i(),this._Group22_i(),this._Group23_i()];
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = -0.67;
		t.elementsContent = [this.outCard30_i(),this.outCard31_i(),this.outCard32_i(),this.outCard33_i(),this.outCard34_i(),this.outCard35_i(),this.outCard36_i(),this.outCard37_i(),this.outCard38_i(),this.outCard39_i(),this.outCard310_i(),this.outCard311_i()];
		return t;
	};
	_proto.outCard30_i = function () {
		var t = new eui.Image();
		this.outCard30 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard31_i = function () {
		var t = new eui.Image();
		this.outCard31 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard32_i = function () {
		var t = new eui.Image();
		this.outCard32 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard33_i = function () {
		var t = new eui.Image();
		this.outCard33 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard34_i = function () {
		var t = new eui.Image();
		this.outCard34 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard35_i = function () {
		var t = new eui.Image();
		this.outCard35 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard36_i = function () {
		var t = new eui.Image();
		this.outCard36 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard37_i = function () {
		var t = new eui.Image();
		this.outCard37 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard38_i = function () {
		var t = new eui.Image();
		this.outCard38 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard39_i = function () {
		var t = new eui.Image();
		this.outCard39 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard310_i = function () {
		var t = new eui.Image();
		this.outCard310 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard311_i = function () {
		var t = new eui.Image();
		this.outCard311 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 51;
		t.y = 0;
		t.elementsContent = [this.outCard312_i(),this.outCard313_i(),this.outCard314_i(),this.outCard315_i(),this.outCard316_i(),this.outCard317_i(),this.outCard318_i(),this.outCard319_i(),this.outCard320_i(),this.outCard321_i(),this.outCard322_i(),this.outCard323_i()];
		return t;
	};
	_proto.outCard312_i = function () {
		var t = new eui.Image();
		this.outCard312 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard313_i = function () {
		var t = new eui.Image();
		this.outCard313 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard314_i = function () {
		var t = new eui.Image();
		this.outCard314 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard315_i = function () {
		var t = new eui.Image();
		this.outCard315 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard316_i = function () {
		var t = new eui.Image();
		this.outCard316 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard317_i = function () {
		var t = new eui.Image();
		this.outCard317 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard318_i = function () {
		var t = new eui.Image();
		this.outCard318 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard319_i = function () {
		var t = new eui.Image();
		this.outCard319 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard320_i = function () {
		var t = new eui.Image();
		this.outCard320 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard321_i = function () {
		var t = new eui.Image();
		this.outCard321 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard322_i = function () {
		var t = new eui.Image();
		this.outCard322 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard323_i = function () {
		var t = new eui.Image();
		this.outCard323 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this.outCard324_i(),this.outCard325_i(),this.outCard326_i(),this.outCard327_i(),this.outCard328_i(),this.outCard329_i(),this.outCard330_i(),this.outCard331_i(),this.outCard332_i(),this.outCard333_i(),this.outCard334_i(),this.outCard335_i()];
		return t;
	};
	_proto.outCard324_i = function () {
		var t = new eui.Image();
		this.outCard324 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard325_i = function () {
		var t = new eui.Image();
		this.outCard325 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard326_i = function () {
		var t = new eui.Image();
		this.outCard326 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard327_i = function () {
		var t = new eui.Image();
		this.outCard327 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard328_i = function () {
		var t = new eui.Image();
		this.outCard328 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard329_i = function () {
		var t = new eui.Image();
		this.outCard329 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard330_i = function () {
		var t = new eui.Image();
		this.outCard330 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard331_i = function () {
		var t = new eui.Image();
		this.outCard331 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard332_i = function () {
		var t = new eui.Image();
		this.outCard332 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard333_i = function () {
		var t = new eui.Image();
		this.outCard333 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard334_i = function () {
		var t = new eui.Image();
		this.outCard334 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard335_i = function () {
		var t = new eui.Image();
		this.outCard335 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.x = 153;
		t.y = 0;
		t.elementsContent = [this.outCard336_i(),this.outCard337_i(),this.outCard338_i(),this.outCard339_i(),this.outCard340_i(),this.outCard341_i(),this.outCard342_i(),this.outCard343_i(),this.outCard344_i(),this.outCard345_i(),this.outCard346_i(),this.outCard347_i()];
		return t;
	};
	_proto.outCard336_i = function () {
		var t = new eui.Image();
		this.outCard336 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard337_i = function () {
		var t = new eui.Image();
		this.outCard337 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard338_i = function () {
		var t = new eui.Image();
		this.outCard338 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard339_i = function () {
		var t = new eui.Image();
		this.outCard339 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard340_i = function () {
		var t = new eui.Image();
		this.outCard340 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard341_i = function () {
		var t = new eui.Image();
		this.outCard341 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard342_i = function () {
		var t = new eui.Image();
		this.outCard342 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard343_i = function () {
		var t = new eui.Image();
		this.outCard343 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 224;
		return t;
	};
	_proto.outCard344_i = function () {
		var t = new eui.Image();
		this.outCard344 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 256;
		return t;
	};
	_proto.outCard345_i = function () {
		var t = new eui.Image();
		this.outCard345 = t;
		t.source = "MJCard_json.leftfeng_1";
		t.x = 0;
		t.y = 288;
		return t;
	};
	_proto.outCard346_i = function () {
		var t = new eui.Image();
		this.outCard346 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 320;
		return t;
	};
	_proto.outCard347_i = function () {
		var t = new eui.Image();
		this.outCard347 = t;
		t.source = "MJCard_json.rightfeng_6";
		t.x = 0;
		t.y = 352;
		return t;
	};
	_proto.actionCardGroud0_i = function () {
		var t = new eui.Group();
		this.actionCardGroud0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.x = 6.08;
		t.y = 530.99;
		t.elementsContent = [this.actionItem00_i(),this.actionItem01_i(),this.actionItem02_i(),this.actionItem03_i()];
		return t;
	};
	_proto.actionItem00_i = function () {
		var t = new eui.Group();
		this.actionItem00 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard000_i(),this.actioncard001_i(),this.actioncard002_i(),this.actioncard003_i(),this._Image9_i()];
		return t;
	};
	_proto.actioncard000_i = function () {
		var t = new eui.Image();
		this.actioncard000 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard001_i = function () {
		var t = new eui.Image();
		this.actioncard001 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard002_i = function () {
		var t = new eui.Image();
		this.actioncard002 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard003_i = function () {
		var t = new eui.Image();
		this.actioncard003 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 0;
		t.y = 76;
		return t;
	};
	_proto.actionItem01_i = function () {
		var t = new eui.Group();
		this.actionItem01 = t;
		t.x = 237.99;
		t.y = 0;
		t.elementsContent = [this.actioncard010_i(),this.actioncard011_i(),this.actioncard012_i(),this.actioncard013_i()];
		return t;
	};
	_proto.actioncard010_i = function () {
		var t = new eui.Image();
		this.actioncard010 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard011_i = function () {
		var t = new eui.Image();
		this.actioncard011 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard012_i = function () {
		var t = new eui.Image();
		this.actioncard012 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard013_i = function () {
		var t = new eui.Image();
		this.actioncard013 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem02_i = function () {
		var t = new eui.Group();
		this.actionItem02 = t;
		t.x = 475.98;
		t.y = 0;
		t.elementsContent = [this.actioncard020_i(),this.actioncard021_i(),this.actioncard022_i(),this.actioncard023_i()];
		return t;
	};
	_proto.actioncard020_i = function () {
		var t = new eui.Image();
		this.actioncard020 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard021_i = function () {
		var t = new eui.Image();
		this.actioncard021 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard022_i = function () {
		var t = new eui.Image();
		this.actioncard022 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard023_i = function () {
		var t = new eui.Image();
		this.actioncard023 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem03_i = function () {
		var t = new eui.Group();
		this.actionItem03 = t;
		t.x = 713.97;
		t.y = 0;
		t.elementsContent = [this.actioncard030_i(),this.actioncard031_i(),this.actioncard032_i(),this.actioncard033_i()];
		return t;
	};
	_proto.actioncard030_i = function () {
		var t = new eui.Image();
		this.actioncard030 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard031_i = function () {
		var t = new eui.Image();
		this.actioncard031 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard032_i = function () {
		var t = new eui.Image();
		this.actioncard032 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard033_i = function () {
		var t = new eui.Image();
		this.actioncard033 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud2_i = function () {
		var t = new eui.Group();
		this.actionCardGroud2 = t;
		t.scaleX = 0.49;
		t.scaleY = 0.49;
		t.visible = false;
		t.x = 425.32;
		t.y = 4.02;
		t.elementsContent = [this.actionItem20_i(),this.actionItem21_i(),this.actionItem22_i(),this.actionItem23_i()];
		return t;
	};
	_proto.actionItem20_i = function () {
		var t = new eui.Group();
		this.actionItem20 = t;
		t.x = 713.97;
		t.y = 0;
		t.elementsContent = [this.actioncard200_i(),this.actioncard201_i(),this.actioncard202_i(),this._Image10_i(),this.actioncard203_i()];
		return t;
	};
	_proto.actioncard200_i = function () {
		var t = new eui.Image();
		this.actioncard200 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard201_i = function () {
		var t = new eui.Image();
		this.actioncard201 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard202_i = function () {
		var t = new eui.Image();
		this.actioncard202 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 184;
		t.y = 76;
		return t;
	};
	_proto.actioncard203_i = function () {
		var t = new eui.Image();
		this.actioncard203 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem21_i = function () {
		var t = new eui.Group();
		this.actionItem21 = t;
		t.x = 475.98;
		t.y = 0;
		t.elementsContent = [this.actioncard210_i(),this.actioncard211_i(),this.actioncard212_i(),this.actioncard213_i()];
		return t;
	};
	_proto.actioncard210_i = function () {
		var t = new eui.Image();
		this.actioncard210 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard211_i = function () {
		var t = new eui.Image();
		this.actioncard211 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard212_i = function () {
		var t = new eui.Image();
		this.actioncard212 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard213_i = function () {
		var t = new eui.Image();
		this.actioncard213 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem22_i = function () {
		var t = new eui.Group();
		this.actionItem22 = t;
		t.x = 237.99;
		t.y = 0;
		t.elementsContent = [this.actioncard220_i(),this.actioncard221_i(),this.actioncard222_i(),this.actioncard223_i()];
		return t;
	};
	_proto.actioncard220_i = function () {
		var t = new eui.Image();
		this.actioncard220 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard221_i = function () {
		var t = new eui.Image();
		this.actioncard221 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard222_i = function () {
		var t = new eui.Image();
		this.actioncard222 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard223_i = function () {
		var t = new eui.Image();
		this.actioncard223 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionItem23_i = function () {
		var t = new eui.Group();
		this.actionItem23 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard230_i(),this.actioncard231_i(),this.actioncard232_i(),this.actioncard233_i()];
		return t;
	};
	_proto.actioncard230_i = function () {
		var t = new eui.Image();
		this.actioncard230 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 0;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard231_i = function () {
		var t = new eui.Image();
		this.actioncard231 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard232_i = function () {
		var t = new eui.Image();
		this.actioncard232 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 144;
		t.y = 27.33;
		return t;
	};
	_proto.actioncard233_i = function () {
		var t = new eui.Image();
		this.actioncard233 = t;
		t.source = "MJCard_json.zhengw_6";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud3_i = function () {
		var t = new eui.Group();
		this.actionCardGroud3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 115;
		t.y = 43;
		t.elementsContent = [this.actionItem30_i(),this.actionItem31_i(),this.actionItem32_i(),this.actionItem33_i()];
		return t;
	};
	_proto.actionItem30_i = function () {
		var t = new eui.Group();
		this.actionItem30 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard300_i(),this.actioncard301_i(),this.actioncard302_i(),this.actioncard303_i(),this._Image11_i()];
		return t;
	};
	_proto.actioncard300_i = function () {
		var t = new eui.Image();
		this.actioncard300 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard301_i = function () {
		var t = new eui.Image();
		this.actioncard301 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard302_i = function () {
		var t = new eui.Image();
		this.actioncard302 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard303_i = function () {
		var t = new eui.Image();
		this.actioncard303 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionItem31_i = function () {
		var t = new eui.Group();
		this.actionItem31 = t;
		t.y = 115;
		t.elementsContent = [this.actioncard310_i(),this.actioncard311_i(),this.actioncard312_i(),this.actioncard313_i()];
		return t;
	};
	_proto.actioncard310_i = function () {
		var t = new eui.Image();
		this.actioncard310 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard311_i = function () {
		var t = new eui.Image();
		this.actioncard311 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard312_i = function () {
		var t = new eui.Image();
		this.actioncard312 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard313_i = function () {
		var t = new eui.Image();
		this.actioncard313 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem32_i = function () {
		var t = new eui.Group();
		this.actionItem32 = t;
		t.y = 230;
		t.elementsContent = [this.actioncard320_i(),this.actioncard321_i(),this.actioncard322_i(),this.actioncard323_i()];
		return t;
	};
	_proto.actioncard320_i = function () {
		var t = new eui.Image();
		this.actioncard320 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard321_i = function () {
		var t = new eui.Image();
		this.actioncard321 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard322_i = function () {
		var t = new eui.Image();
		this.actioncard322 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard323_i = function () {
		var t = new eui.Image();
		this.actioncard323 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem33_i = function () {
		var t = new eui.Group();
		this.actionItem33 = t;
		t.y = 345;
		t.elementsContent = [this.actioncard330_i(),this.actioncard331_i(),this.actioncard332_i(),this.actioncard333_i()];
		return t;
	};
	_proto.actioncard330_i = function () {
		var t = new eui.Image();
		this.actioncard330 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard331_i = function () {
		var t = new eui.Image();
		this.actioncard331 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard332_i = function () {
		var t = new eui.Image();
		this.actioncard332 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard333_i = function () {
		var t = new eui.Image();
		this.actioncard333 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionCardGroud1_i = function () {
		var t = new eui.Group();
		this.actionCardGroud1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 930.15;
		t.y = 184.92;
		t.elementsContent = [this.actionItem13_i(),this.actionItem12_i(),this.actionItem11_i(),this.actionItem10_i()];
		return t;
	};
	_proto.actionItem13_i = function () {
		var t = new eui.Group();
		this.actionItem13 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard132_i(),this.actioncard131_i(),this.actioncard130_i(),this._Image12_i(),this.actioncard133_i()];
		return t;
	};
	_proto.actioncard132_i = function () {
		var t = new eui.Image();
		this.actioncard132 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard131_i = function () {
		var t = new eui.Image();
		this.actioncard131 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard130_i = function () {
		var t = new eui.Image();
		this.actioncard130 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 30;
		t.y = 77;
		return t;
	};
	_proto.actioncard133_i = function () {
		var t = new eui.Image();
		this.actioncard133 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem12_i = function () {
		var t = new eui.Group();
		this.actionItem12 = t;
		t.y = 115;
		t.elementsContent = [this.actioncard122_i(),this.actioncard121_i(),this.actioncard120_i(),this.actioncard123_i()];
		return t;
	};
	_proto.actioncard122_i = function () {
		var t = new eui.Image();
		this.actioncard122 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard121_i = function () {
		var t = new eui.Image();
		this.actioncard121 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard120_i = function () {
		var t = new eui.Image();
		this.actioncard120 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard123_i = function () {
		var t = new eui.Image();
		this.actioncard123 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem11_i = function () {
		var t = new eui.Group();
		this.actionItem11 = t;
		t.y = 230;
		t.elementsContent = [this.actioncard112_i(),this.actioncard111_i(),this.actioncard110_i(),this.actioncard113_i()];
		return t;
	};
	_proto.actioncard112_i = function () {
		var t = new eui.Image();
		this.actioncard112 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard111_i = function () {
		var t = new eui.Image();
		this.actioncard111 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard110_i = function () {
		var t = new eui.Image();
		this.actioncard110 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard113_i = function () {
		var t = new eui.Image();
		this.actioncard113 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.actionItem10_i = function () {
		var t = new eui.Group();
		this.actionItem10 = t;
		t.y = 345;
		t.elementsContent = [this.actioncard102_i(),this.actioncard101_i(),this.actioncard100_i(),this.actioncard103_i()];
		return t;
	};
	_proto.actioncard102_i = function () {
		var t = new eui.Image();
		this.actioncard102 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard101_i = function () {
		var t = new eui.Image();
		this.actioncard101 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.actioncard100_i = function () {
		var t = new eui.Image();
		this.actioncard100 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.actioncard103_i = function () {
		var t = new eui.Image();
		this.actioncard103 = t;
		t.source = "MJCard_json.leftw_1";
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 365;
		t.y = 2;
		t.elementsContent = [this._Image13_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "sss_topNotice";
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
		t.size = 25;
		t.text = "哈哈哈范德萨发顺丰哈发起解散3/5人同意";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.x = 27.5;
		t.y = 15.81;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 365;
		t.y = 0;
		t.elementsContent = [this._Image14_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "sss_topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.size = 25;
		t.text = "加入了房间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.x = 27.5;
		t.y = 15.81;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.left = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "leftYaoqing_png";
		t.visible = false;
		t.y = 0.5;
		return t;
	};
	_proto.actiopnGroup0_i = function () {
		var t = new eui.Group();
		this.actiopnGroup0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 285.14;
		t.y = 451.09;
		t.elementsContent = [this.actionBtnGroup00_i(),this.actionBtnGroup01_i(),this.actionBtnGroup02_i(),this.actionBtnGroup03_i(),this.actionBtnGroup04_i(),this.actionBtnGroup05_i()];
		return t;
	};
	_proto.actionBtnGroup00_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup00 = t;
		t.verticalCenter = 0;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn00_i()];
		return t;
	};
	_proto.actionBtn00_i = function () {
		var t = new eui.Button();
		this.actionBtn00 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = hzmjIndex_huifang$Skin107;
		return t;
	};
	_proto.actionBtnGroup01_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup01 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn01_i(),this.card010_i(),this.selectedChi0_i()];
		return t;
	};
	_proto.actionBtn01_i = function () {
		var t = new eui.Button();
		this.actionBtn01 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin108;
		return t;
	};
	_proto.card010_i = function () {
		var t = new eui.Image();
		this.card010 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.selectedChi0_i = function () {
		var t = new eui.Group();
		this.selectedChi0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = -137.93;
		t.y = -99.39;
		t.elementsContent = [this._Image15_i(),this.chi00_i(),this.chi01_i(),this.chi02_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.scale9Grid = new egret.Rectangle(54,27,331,163);
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "HZMJDesk_json.HZMJkuang";
		t.width = 650;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi00_i = function () {
		var t = new eui.Group();
		this.chi00 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard002_i(),this.chiCard001_i(),this.chiCard000_i()];
		return t;
	};
	_proto.chiCard002_i = function () {
		var t = new eui.Image();
		this.chiCard002 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard001_i = function () {
		var t = new eui.Image();
		this.chiCard001 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard000_i = function () {
		var t = new eui.Image();
		this.chiCard000 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi01_i = function () {
		var t = new eui.Group();
		this.chi01 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard012_i(),this.chiCard011_i(),this.chiCard010_i()];
		return t;
	};
	_proto.chiCard012_i = function () {
		var t = new eui.Image();
		this.chiCard012 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard011_i = function () {
		var t = new eui.Image();
		this.chiCard011 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard010_i = function () {
		var t = new eui.Image();
		this.chiCard010 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi02_i = function () {
		var t = new eui.Group();
		this.chi02 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard022_i(),this.chiCard021_i(),this.chiCard020_i()];
		return t;
	};
	_proto.chiCard022_i = function () {
		var t = new eui.Image();
		this.chiCard022 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard021_i = function () {
		var t = new eui.Image();
		this.chiCard021 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard020_i = function () {
		var t = new eui.Image();
		this.chiCard020 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionBtnGroup02_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup02 = t;
		t.verticalCenter = 0.5;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn02_i(),this.card020_i()];
		return t;
	};
	_proto.actionBtn02_i = function () {
		var t = new eui.Button();
		this.actionBtn02 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin109;
		return t;
	};
	_proto.card020_i = function () {
		var t = new eui.Image();
		this.card020 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup03_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup03 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn03_i(),this.card030_i()];
		return t;
	};
	_proto.actionBtn03_i = function () {
		var t = new eui.Button();
		this.actionBtn03 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin110;
		return t;
	};
	_proto.card030_i = function () {
		var t = new eui.Image();
		this.card030 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup04_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup04 = t;
		t.verticalCenter = 0.5;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn04_i(),this.card040_i()];
		return t;
	};
	_proto.actionBtn04_i = function () {
		var t = new eui.Button();
		this.actionBtn04 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin111;
		return t;
	};
	_proto.card040_i = function () {
		var t = new eui.Image();
		this.card040 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup05_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup05 = t;
		t.verticalCenter = 1;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn05_i()];
		return t;
	};
	_proto.actionBtn05_i = function () {
		var t = new eui.Button();
		this.actionBtn05 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin112;
		return t;
	};
	_proto.actiopnGroup1_i = function () {
		var t = new eui.Group();
		this.actiopnGroup1 = t;
		t.rotation = -90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 858.45;
		t.y = 569.82;
		t.elementsContent = [this.actionBtnGroup10_i(),this.actionBtnGroup11_i(),this.actionBtnGroup12_i(),this.actionBtnGroup13_i(),this.actionBtnGroup14_i(),this.actionBtnGroup15_i()];
		return t;
	};
	_proto.actionBtnGroup10_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup10 = t;
		t.verticalCenter = 0;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn10_i()];
		return t;
	};
	_proto.actionBtn10_i = function () {
		var t = new eui.Button();
		this.actionBtn10 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = hzmjIndex_huifang$Skin113;
		return t;
	};
	_proto.actionBtnGroup11_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup11 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn11_i(),this.card110_i(),this.selectedChi1_i()];
		return t;
	};
	_proto.actionBtn11_i = function () {
		var t = new eui.Button();
		this.actionBtn11 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin114;
		return t;
	};
	_proto.card110_i = function () {
		var t = new eui.Image();
		this.card110 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.selectedChi1_i = function () {
		var t = new eui.Group();
		this.selectedChi1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = -137.93;
		t.y = -99.39;
		t.elementsContent = [this._Image16_i(),this.chi10_i(),this.chi11_i(),this.chi12_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.scale9Grid = new egret.Rectangle(54,27,331,163);
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "HZMJDesk_json.HZMJkuang";
		t.width = 650;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi10_i = function () {
		var t = new eui.Group();
		this.chi10 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard102_i(),this.chiCard101_i(),this.chiCard100_i()];
		return t;
	};
	_proto.chiCard102_i = function () {
		var t = new eui.Image();
		this.chiCard102 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard101_i = function () {
		var t = new eui.Image();
		this.chiCard101 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard100_i = function () {
		var t = new eui.Image();
		this.chiCard100 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi11_i = function () {
		var t = new eui.Group();
		this.chi11 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard112_i(),this.chiCard111_i(),this.chiCard110_i()];
		return t;
	};
	_proto.chiCard112_i = function () {
		var t = new eui.Image();
		this.chiCard112 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard111_i = function () {
		var t = new eui.Image();
		this.chiCard111 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard110_i = function () {
		var t = new eui.Image();
		this.chiCard110 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi12_i = function () {
		var t = new eui.Group();
		this.chi12 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard122_i(),this.chiCard121_i(),this.chiCard120_i()];
		return t;
	};
	_proto.chiCard122_i = function () {
		var t = new eui.Image();
		this.chiCard122 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard121_i = function () {
		var t = new eui.Image();
		this.chiCard121 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard120_i = function () {
		var t = new eui.Image();
		this.chiCard120 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionBtnGroup12_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup12 = t;
		t.verticalCenter = 0.5;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn12_i(),this.card120_i()];
		return t;
	};
	_proto.actionBtn12_i = function () {
		var t = new eui.Button();
		this.actionBtn12 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin115;
		return t;
	};
	_proto.card120_i = function () {
		var t = new eui.Image();
		this.card120 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup13_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup13 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn13_i(),this.card130_i()];
		return t;
	};
	_proto.actionBtn13_i = function () {
		var t = new eui.Button();
		this.actionBtn13 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin116;
		return t;
	};
	_proto.card130_i = function () {
		var t = new eui.Image();
		this.card130 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup14_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup14 = t;
		t.verticalCenter = 0.5;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn14_i(),this.card140_i()];
		return t;
	};
	_proto.actionBtn14_i = function () {
		var t = new eui.Button();
		this.actionBtn14 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin117;
		return t;
	};
	_proto.card140_i = function () {
		var t = new eui.Image();
		this.card140 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup15_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup15 = t;
		t.verticalCenter = 1;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn15_i()];
		return t;
	};
	_proto.actionBtn15_i = function () {
		var t = new eui.Button();
		this.actionBtn15 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin118;
		return t;
	};
	_proto.actiopnGroup2_i = function () {
		var t = new eui.Group();
		this.actiopnGroup2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 283.23;
		t.y = 102;
		t.elementsContent = [this.actionBtnGroup20_i(),this.actionBtnGroup21_i(),this.actionBtnGroup22_i(),this.actionBtnGroup23_i(),this.actionBtnGroup24_i(),this.actionBtnGroup25_i()];
		return t;
	};
	_proto.actionBtnGroup20_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup20 = t;
		t.verticalCenter = 0;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn20_i()];
		return t;
	};
	_proto.actionBtn20_i = function () {
		var t = new eui.Button();
		this.actionBtn20 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = hzmjIndex_huifang$Skin119;
		return t;
	};
	_proto.actionBtnGroup21_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup21 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn21_i(),this.card210_i(),this.selectedChi2_i()];
		return t;
	};
	_proto.actionBtn21_i = function () {
		var t = new eui.Button();
		this.actionBtn21 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin120;
		return t;
	};
	_proto.card210_i = function () {
		var t = new eui.Image();
		this.card210 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.selectedChi2_i = function () {
		var t = new eui.Group();
		this.selectedChi2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = -137.93;
		t.y = -99.39;
		t.elementsContent = [this._Image17_i(),this.chi20_i(),this.chi21_i(),this.chi22_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.scale9Grid = new egret.Rectangle(54,27,331,163);
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "HZMJDesk_json.HZMJkuang";
		t.width = 650;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi20_i = function () {
		var t = new eui.Group();
		this.chi20 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard202_i(),this.chiCard201_i(),this.chiCard200_i()];
		return t;
	};
	_proto.chiCard202_i = function () {
		var t = new eui.Image();
		this.chiCard202 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard201_i = function () {
		var t = new eui.Image();
		this.chiCard201 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard200_i = function () {
		var t = new eui.Image();
		this.chiCard200 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi21_i = function () {
		var t = new eui.Group();
		this.chi21 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard212_i(),this.chiCard211_i(),this.chiCard210_i()];
		return t;
	};
	_proto.chiCard212_i = function () {
		var t = new eui.Image();
		this.chiCard212 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard211_i = function () {
		var t = new eui.Image();
		this.chiCard211 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard210_i = function () {
		var t = new eui.Image();
		this.chiCard210 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi22_i = function () {
		var t = new eui.Group();
		this.chi22 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard222_i(),this.chiCard221_i(),this.chiCard220_i()];
		return t;
	};
	_proto.chiCard222_i = function () {
		var t = new eui.Image();
		this.chiCard222 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard221_i = function () {
		var t = new eui.Image();
		this.chiCard221 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard220_i = function () {
		var t = new eui.Image();
		this.chiCard220 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionBtnGroup22_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup22 = t;
		t.verticalCenter = 0.5;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn22_i(),this.card220_i()];
		return t;
	};
	_proto.actionBtn22_i = function () {
		var t = new eui.Button();
		this.actionBtn22 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin121;
		return t;
	};
	_proto.card220_i = function () {
		var t = new eui.Image();
		this.card220 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup23_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup23 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn23_i(),this.card230_i()];
		return t;
	};
	_proto.actionBtn23_i = function () {
		var t = new eui.Button();
		this.actionBtn23 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin122;
		return t;
	};
	_proto.card230_i = function () {
		var t = new eui.Image();
		this.card230 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup24_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup24 = t;
		t.verticalCenter = 0.5;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn24_i(),this.card240_i()];
		return t;
	};
	_proto.actionBtn24_i = function () {
		var t = new eui.Button();
		this.actionBtn24 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin123;
		return t;
	};
	_proto.card240_i = function () {
		var t = new eui.Image();
		this.card240 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup25_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup25 = t;
		t.verticalCenter = 1;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn25_i()];
		return t;
	};
	_proto.actionBtn25_i = function () {
		var t = new eui.Button();
		this.actionBtn25 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin124;
		return t;
	};
	_proto.actiopnGroup3_i = function () {
		var t = new eui.Group();
		this.actiopnGroup3 = t;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 223.61;
		t.y = 1.02;
		t.elementsContent = [this.actionBtnGroup30_i(),this.actionBtnGroup31_i(),this.actionBtnGroup32_i(),this.actionBtnGroup33_i(),this.actionBtnGroup34_i(),this.actionBtnGroup35_i()];
		return t;
	};
	_proto.actionBtnGroup30_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup30 = t;
		t.verticalCenter = 0;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn30_i()];
		return t;
	};
	_proto.actionBtn30_i = function () {
		var t = new eui.Button();
		this.actionBtn30 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = hzmjIndex_huifang$Skin125;
		return t;
	};
	_proto.actionBtnGroup31_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup31 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.width = 164;
		t.x = 552.12;
		t.elementsContent = [this.actionBtn31_i(),this.card310_i(),this.selectedChi3_i()];
		return t;
	};
	_proto.actionBtn31_i = function () {
		var t = new eui.Button();
		this.actionBtn31 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin126;
		return t;
	};
	_proto.card310_i = function () {
		var t = new eui.Image();
		this.card310 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0.5;
		t.x = 126.3;
		return t;
	};
	_proto.selectedChi3_i = function () {
		var t = new eui.Group();
		this.selectedChi3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = -137.93;
		t.y = -99.39;
		t.elementsContent = [this._Image18_i(),this.chi30_i(),this.chi31_i(),this.chi32_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.scale9Grid = new egret.Rectangle(54,27,331,163);
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "HZMJDesk_json.HZMJkuang";
		t.width = 650;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi30_i = function () {
		var t = new eui.Group();
		this.chi30 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 19.38;
		t.elementsContent = [this.chiCard302_i(),this.chiCard301_i(),this.chiCard300_i()];
		return t;
	};
	_proto.chiCard302_i = function () {
		var t = new eui.Image();
		this.chiCard302 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard301_i = function () {
		var t = new eui.Image();
		this.chiCard301 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard300_i = function () {
		var t = new eui.Image();
		this.chiCard300 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi31_i = function () {
		var t = new eui.Group();
		this.chi31 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 213.09;
		t.elementsContent = [this.chiCard312_i(),this.chiCard311_i(),this.chiCard310_i()];
		return t;
	};
	_proto.chiCard312_i = function () {
		var t = new eui.Image();
		this.chiCard312 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard311_i = function () {
		var t = new eui.Image();
		this.chiCard311 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard310_i = function () {
		var t = new eui.Image();
		this.chiCard310 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chi32_i = function () {
		var t = new eui.Group();
		this.chi32 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -0.5;
		t.x = 402.48;
		t.elementsContent = [this.chiCard322_i(),this.chiCard321_i(),this.chiCard320_i()];
		return t;
	};
	_proto.chiCard322_i = function () {
		var t = new eui.Image();
		this.chiCard322 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto.chiCard321_i = function () {
		var t = new eui.Image();
		this.chiCard321 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.chiCard320_i = function () {
		var t = new eui.Image();
		this.chiCard320 = t;
		t.source = "MJCard_json.ownfeng_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionBtnGroup32_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup32 = t;
		t.verticalCenter = 0.5;
		t.x = 399.09;
		t.elementsContent = [this.actionBtn32_i(),this.card320_i()];
		return t;
	};
	_proto.actionBtn32_i = function () {
		var t = new eui.Button();
		this.actionBtn32 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin127;
		return t;
	};
	_proto.card320_i = function () {
		var t = new eui.Image();
		this.card320 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 113.61;
		return t;
	};
	_proto.actionBtnGroup33_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup33 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 243.03;
		t.elementsContent = [this.actionBtn33_i(),this.card330_i()];
		return t;
	};
	_proto.actionBtn33_i = function () {
		var t = new eui.Button();
		this.actionBtn33 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin128;
		return t;
	};
	_proto.card330_i = function () {
		var t = new eui.Image();
		this.card330 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.zhengwenhao";
		t.verticalCenter = 0;
		t.x = 118.17;
		return t;
	};
	_proto.actionBtnGroup34_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup34 = t;
		t.verticalCenter = 0.5;
		t.x = 99.09;
		t.elementsContent = [this.actionBtn34_i(),this.card340_i()];
		return t;
	};
	_proto.actionBtn34_i = function () {
		var t = new eui.Button();
		this.actionBtn34 = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin129;
		return t;
	};
	_proto.card340_i = function () {
		var t = new eui.Image();
		this.card340 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "MJCard_json.owntong_5";
		t.verticalCenter = 0.5;
		t.x = 106.06;
		return t;
	};
	_proto.actionBtnGroup35_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup35 = t;
		t.verticalCenter = 1;
		t.x = 0.59;
		t.elementsContent = [this.actionBtn35_i()];
		return t;
	};
	_proto.actionBtn35_i = function () {
		var t = new eui.Button();
		this.actionBtn35 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.skinName = hzmjIndex_huifang$Skin130;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.visible = false;
		t.skinName = hzmjIndex_huifang$Skin131;
		return t;
	};
	_proto.ready_disband_i = function () {
		var t = new eui.Button();
		this.ready_disband = t;
		t.horizontalCenter = 401;
		t.label = "";
		t.verticalCenter = 271.5;
		t.skinName = hzmjIndex_huifang$Skin132;
		return t;
	};
	_proto.menban0_i = function () {
		var t = new eui.Rect();
		this.menban0 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
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
	_proto.huifangGroup_i = function () {
		var t = new eui.Group();
		this.huifangGroup = t;
		t.horizontalCenter = 26;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image19_i(),this._Group24_i(),this.huifangStartGroup_i(),this.parseGroup_i(),this.resetGroup_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "zhanji_bg10_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 8;
		t.width = 50;
		t.x = 414;
		t.elementsContent = [this.nextStepBtn_i()];
		return t;
	};
	_proto.nextStepBtn_i = function () {
		var t = new eui.Button();
		this.nextStepBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_huifang$Skin133;
		return t;
	};
	_proto.huifangStartGroup_i = function () {
		var t = new eui.Group();
		this.huifangStartGroup = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 8;
		t.width = 50;
		t.elementsContent = [this.huifangStartBtn_i()];
		return t;
	};
	_proto.huifangStartBtn_i = function () {
		var t = new eui.Button();
		this.huifangStartBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_huifang$Skin134;
		return t;
	};
	_proto.parseGroup_i = function () {
		var t = new eui.Group();
		this.parseGroup = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 8;
		t.width = 50;
		t.elementsContent = [this.parseBtn_i()];
		return t;
	};
	_proto.parseBtn_i = function () {
		var t = new eui.Button();
		this.parseBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_huifang$Skin135;
		return t;
	};
	_proto.resetGroup_i = function () {
		var t = new eui.Group();
		this.resetGroup = t;
		t.height = 50;
		t.verticalCenter = 8;
		t.width = 50;
		t.x = 72;
		t.elementsContent = [this.resetBtn_i()];
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new eui.Button();
		this.resetBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex_huifang$Skin136;
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Image();
		this.backHallBtn = t;
		t.scaleX = -1;
		t.source = "zhanji_game_back_png";
		t.x = 1047.17;
		t.y = 498.42;
		return t;
	};
	_proto.roomRuleUI_i = function () {
		var t = new eui.Group();
		this.roomRuleUI = t;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ruleMenabn_i(),this._Group25_i()];
		return t;
	};
	_proto.ruleMenabn_i = function () {
		var t = new eui.Image();
		this.ruleMenabn = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 118.5;
		t.y = 129.5;
		t.elementsContent = [this._Image20_i(),this.roomPwdRule_i(),this.playcount_i(),this.peopleCount_i(),this.wanfaText_i(),this.laoqi_i(),this.jiafan_i(),this.fending_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "HZMJDesk_json.hamj_cardBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomPwdRule_i = function () {
		var t = new eui.Label();
		this.roomPwdRule = t;
		t.horizontalCenter = -3;
		t.text = "888888";
		t.textColor = 0x870808;
		t.y = 11.97;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.size = 25;
		t.text = "局数：80";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 89.12;
		return t;
	};
	_proto.peopleCount_i = function () {
		var t = new eui.Label();
		this.peopleCount = t;
		t.size = 25;
		t.text = "人数：4人";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 129.12;
		return t;
	};
	_proto.wanfaText_i = function () {
		var t = new eui.Label();
		this.wanfaText = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "玩法：三财加番，无地老七，128饭封顶";
		t.textColor = 0x870808;
		t.visible = false;
		t.width = 210;
		t.x = 42.5;
		t.y = 171.88;
		return t;
	};
	_proto.laoqi_i = function () {
		var t = new eui.Label();
		this.laoqi = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 169.12;
		return t;
	};
	_proto.jiafan_i = function () {
		var t = new eui.Label();
		this.jiafan = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 209.12;
		return t;
	};
	_proto.fending_i = function () {
		var t = new eui.Label();
		this.fending = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0x870808;
		t.x = 41;
		t.y = 249.12;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image21_i(),this.juhua_i(),this._Label2_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "juhua_png";
		t.y = 265;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "正在连接服务器，请稍候……";
		t.y = 397;
		return t;
	};
	return hzmjIndex_huifang;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/hzmj_singleResult.exml'] = window.hzmj_singleResult = (function (_super) {
	__extends(hzmj_singleResult, _super);
	var hzmj_singleResult$Skin137 = 	(function (_super) {
		__extends(hzmj_singleResult$Skin137, _super);
		function hzmj_singleResult$Skin137() {
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
		var _proto = hzmj_singleResult$Skin137.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hzmj_singleResult_json.hzmj_sShare";
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
		return hzmj_singleResult$Skin137;
	})(eui.Skin);

	var hzmj_singleResult$Skin138 = 	(function (_super) {
		__extends(hzmj_singleResult$Skin138, _super);
		function hzmj_singleResult$Skin138() {
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
		var _proto = hzmj_singleResult$Skin138.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hzmj_singleResult_json.hzmj_sContinu";
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
		return hzmj_singleResult$Skin138;
	})(eui.Skin);

	function hzmj_singleResult() {
		_super.call(this);
		this.skinParts = ["roomPwdRule","timer","noticeGame","playcount","peopleCount","maRule","hushu","hu0","headImg0","roomOwner0","zhuang0","fangxiang0","headbox0","nickname0","show00","show01","show02","show03","show04","show05","show06","show07","show08","show09","show010","show011","show012","show013","show014","show015","show016","show017","cardsGroupTop0","show0","show1","show2","show3","show4","show5","show6","show7","show8","show9","show10","show11","show12","show13","show14","show15","show16","show17","cardsGroupBottom0","showTypeTop0","showTypeBottom0","totalfen0","totaleHu0","maimai0","dianpao0","zimo0","item0","hu1","dianpao1","zimo1","totaleHu1","maimai1","headImg1","roomOwner1","zhuang1","fangxiang1","headbox1","nickname1","show18","show19","show20","show21","show22","show23","show24","show25","show26","show109","show110","show111","show112","show113","show114","show115","show116","show117","cardsGroupTop1","show36","show37","show38","show39","show40","show41","show42","show43","show44","show45","show46","show47","show48","show49","show50","show51","show52","show53","cardsGroupBottom1","showTypeTop1","showTypeBottom1","totalfen1","item1","hu2","dianpao2","zimo2","totaleHu2","maimai2","headImg2","roomOwner2","zhuang2","fangxiang2","headbox2","nickname2","show54","show55","show56","show57","show58","show59","show60","show61","show62","show63","show64","show65","show66","show67","show68","show69","show70","show71","cardsGroupTop2","show72","show73","show74","show75","show76","show77","show78","show79","show80","show81","show82","show83","show84","show85","show86","show87","show88","show89","cardsGroupBottom2","showTypeTop2","showTypeBottom2","totalfen2","item2","shareBtn","continueBtn","title","maCard0","maCard1","malayer"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this.roomPwdRule_i(),this.timer_i(),this.noticeGame_i(),this.playcount_i(),this.peopleCount_i(),this.maRule_i(),this.hushu_i(),this._Group13_i(),this._Group16_i(),this._Group17_i(),this.malayer_i()];
	}
	var _proto = hzmj_singleResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ttmf_result_bg_png";
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomPwdRule_i = function () {
		var t = new eui.Label();
		this.roomPwdRule = t;
		t.size = 25;
		t.text = "房号：888888";
		t.textColor = 0xffffff;
		t.x = 709;
		t.y = 16;
		return t;
	};
	_proto.timer_i = function () {
		var t = new eui.Label();
		this.timer = t;
		t.size = 25;
		t.text = "时间：2018-10-10 10:10:10";
		t.textColor = 0xFFFFFF;
		t.x = 709;
		t.y = 51;
		return t;
	};
	_proto.noticeGame_i = function () {
		var t = new eui.Label();
		this.noticeGame = t;
		t.size = 23;
		t.text = "本结果仅供娱乐，禁止赌博！";
		t.textColor = 0xFFFFFF;
		t.x = 758.8;
		t.y = 576.65;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.size = 25;
		t.text = "局数：80";
		t.textColor = 0xffffff;
		t.x = 905;
		t.y = 16;
		return t;
	};
	_proto.peopleCount_i = function () {
		var t = new eui.Label();
		this.peopleCount = t;
		t.size = 25;
		t.text = "人数：4人";
		t.textColor = 0xffffff;
		t.x = 28.08;
		t.y = 59;
		return t;
	};
	_proto.maRule_i = function () {
		var t = new eui.Label();
		this.maRule = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0xffffff;
		t.x = 163.08;
		t.y = 22;
		return t;
	};
	_proto.hushu_i = function () {
		var t = new eui.Label();
		this.hushu = t;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "三财加分";
		t.textColor = 0xffffff;
		t.x = 28.08;
		t.y = 22;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 83;
		t.elementsContent = [this._Image2_i(),this.item0_i(),this.item1_i(),this.item2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_single_bg_png";
		t.width = 1080;
		t.y = 0;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.horizontalCenter = 0;
		t.y = 21.52;
		t.elementsContent = [this._Image3_i(),this.hu0_i(),this._Group1_i(),this._Group2_i(),this._Group4_i(),this.totaleHu0_i(),this.maimai0_i(),this.dianpao0_i(),this.zimo0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ttmj_single_result_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hu0_i = function () {
		var t = new eui.Image();
		this.hu0 = t;
		t.source = "xll_game_json.game_hu_icon";
		t.verticalCenter = -18.5;
		t.x = 871.33;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -2.5;
		t.x = 21.5;
		t.elementsContent = [this.headbox0_i(),this.nickname0_i()];
		return t;
	};
	_proto.headbox0_i = function () {
		var t = new eui.Group();
		this.headbox0 = t;
		t.height = 66;
		t.horizontalCenter = 0;
		t.width = 66;
		t.y = 17.32;
		t.elementsContent = [this.headImg0_i(),this._Image4_i(),this.roomOwner0_i(),this.zhuang0_i(),this.fangxiang0_i()];
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner0_i = function () {
		var t = new eui.Image();
		this.roomOwner0 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang0_i = function () {
		var t = new eui.Image();
		this.zhuang0 = t;
		t.source = "xll_game_json.game_result_zhuang_icon";
		t.x = -15.32;
		t.y = -11.66;
		return t;
	};
	_proto.fangxiang0_i = function () {
		var t = new eui.Image();
		this.fangxiang0 = t;
		t.height = 44;
		t.source = "xll_game_json.game_singleresult_dong";
		t.width = 44;
		t.x = 40.04;
		t.y = -8.32;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.width = 80;
		t.y = 88.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 127.33;
		t.y = 10;
		t.elementsContent = [this.cardsGroupTop0_i(),this.cardsGroupBottom0_i(),this.showTypeTop0_i(),this.showTypeBottom0_i()];
		return t;
	};
	_proto.cardsGroupTop0_i = function () {
		var t = new eui.Group();
		this.cardsGroupTop0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.show00_i(),this.show01_i(),this.show02_i(),this.show03_i(),this.show04_i(),this.show05_i(),this.show06_i(),this.show07_i(),this.show08_i(),this.show09_i(),this.show010_i(),this.show011_i(),this.show012_i(),this.show013_i(),this.show014_i(),this.show015_i(),this.show016_i(),this.show017_i()];
		return t;
	};
	_proto.show00_i = function () {
		var t = new eui.Image();
		this.show00 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.show01_i = function () {
		var t = new eui.Image();
		this.show01 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 73;
		return t;
	};
	_proto.show02_i = function () {
		var t = new eui.Image();
		this.show02 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 146;
		return t;
	};
	_proto.show03_i = function () {
		var t = new eui.Image();
		this.show03 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 219;
		t.y = 10;
		return t;
	};
	_proto.show04_i = function () {
		var t = new eui.Image();
		this.show04 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 306;
		t.y = 20;
		return t;
	};
	_proto.show05_i = function () {
		var t = new eui.Image();
		this.show05 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 379;
		t.y = 30;
		return t;
	};
	_proto.show06_i = function () {
		var t = new eui.Image();
		this.show06 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 452;
		t.y = 40;
		return t;
	};
	_proto.show07_i = function () {
		var t = new eui.Image();
		this.show07 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 525;
		t.y = 50;
		return t;
	};
	_proto.show08_i = function () {
		var t = new eui.Image();
		this.show08 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 612;
		t.y = 60;
		return t;
	};
	_proto.show09_i = function () {
		var t = new eui.Image();
		this.show09 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 685;
		t.y = 70;
		return t;
	};
	_proto.show010_i = function () {
		var t = new eui.Image();
		this.show010 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 758;
		t.y = 80;
		return t;
	};
	_proto.show011_i = function () {
		var t = new eui.Image();
		this.show011 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 831;
		t.y = 90;
		return t;
	};
	_proto.show012_i = function () {
		var t = new eui.Image();
		this.show012 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 918;
		t.y = 100;
		return t;
	};
	_proto.show013_i = function () {
		var t = new eui.Image();
		this.show013 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 991;
		t.y = 110;
		return t;
	};
	_proto.show014_i = function () {
		var t = new eui.Image();
		this.show014 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1064;
		t.y = 120;
		return t;
	};
	_proto.show015_i = function () {
		var t = new eui.Image();
		this.show015 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1137;
		t.y = 130;
		return t;
	};
	_proto.show016_i = function () {
		var t = new eui.Image();
		this.show016 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1224;
		t.y = 130;
		return t;
	};
	_proto.show017_i = function () {
		var t = new eui.Image();
		this.show017 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1320;
		t.y = 140;
		return t;
	};
	_proto.cardsGroupBottom0_i = function () {
		var t = new eui.Group();
		this.cardsGroupBottom0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 0;
		t.y = 61.34;
		t.elementsContent = [this.show0_i(),this.show1_i(),this.show2_i(),this.show3_i(),this.show4_i(),this.show5_i(),this.show6_i(),this.show7_i(),this.show8_i(),this.show9_i(),this.show10_i(),this.show11_i(),this.show12_i(),this.show13_i(),this.show14_i(),this.show15_i(),this.show16_i(),this.show17_i()];
		return t;
	};
	_proto.show0_i = function () {
		var t = new eui.Image();
		this.show0 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.show1_i = function () {
		var t = new eui.Image();
		this.show1 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 73;
		return t;
	};
	_proto.show2_i = function () {
		var t = new eui.Image();
		this.show2 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 146;
		return t;
	};
	_proto.show3_i = function () {
		var t = new eui.Image();
		this.show3 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 219;
		t.y = 10;
		return t;
	};
	_proto.show4_i = function () {
		var t = new eui.Image();
		this.show4 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 306;
		t.y = 20;
		return t;
	};
	_proto.show5_i = function () {
		var t = new eui.Image();
		this.show5 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 379;
		t.y = 30;
		return t;
	};
	_proto.show6_i = function () {
		var t = new eui.Image();
		this.show6 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 452;
		t.y = 40;
		return t;
	};
	_proto.show7_i = function () {
		var t = new eui.Image();
		this.show7 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 525;
		t.y = 50;
		return t;
	};
	_proto.show8_i = function () {
		var t = new eui.Image();
		this.show8 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 612;
		t.y = 60;
		return t;
	};
	_proto.show9_i = function () {
		var t = new eui.Image();
		this.show9 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 685;
		t.y = 70;
		return t;
	};
	_proto.show10_i = function () {
		var t = new eui.Image();
		this.show10 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 758;
		t.y = 80;
		return t;
	};
	_proto.show11_i = function () {
		var t = new eui.Image();
		this.show11 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 831;
		t.y = 90;
		return t;
	};
	_proto.show12_i = function () {
		var t = new eui.Image();
		this.show12 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 918;
		t.y = 100;
		return t;
	};
	_proto.show13_i = function () {
		var t = new eui.Image();
		this.show13 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 991;
		t.y = 110;
		return t;
	};
	_proto.show14_i = function () {
		var t = new eui.Image();
		this.show14 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1064;
		t.y = 120;
		return t;
	};
	_proto.show15_i = function () {
		var t = new eui.Image();
		this.show15 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1137;
		t.y = 130;
		return t;
	};
	_proto.show16_i = function () {
		var t = new eui.Image();
		this.show16 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1224;
		t.y = 130;
		return t;
	};
	_proto.show17_i = function () {
		var t = new eui.Image();
		this.show17 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1320;
		t.y = 140;
		return t;
	};
	_proto.showTypeTop0_i = function () {
		var t = new eui.Label();
		this.showTypeTop0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "平胡，平胡，平胡，平胡，平胡";
		t.x = 89.32;
		t.y = 59.17;
		return t;
	};
	_proto.showTypeBottom0_i = function () {
		var t = new eui.Label();
		this.showTypeBottom0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "平胡，平胡，平胡，平胡，平胡";
		t.verticalAlign = "justify";
		t.x = 89.99;
		t.y = 86.53;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 956;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.totalfen0_i()];
		return t;
	};
	_proto.totalfen0_i = function () {
		var t = new eui.BitmapLabel();
		this.totalfen0 = t;
		t.font = "resultcoin_win_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+100";
		t.verticalCenter = 0;
		return t;
	};
	_proto.totaleHu0_i = function () {
		var t = new eui.Label();
		this.totaleHu0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 19;
		t.text = "总胡数：9999";
		t.textColor = 0xffe33f;
		t.x = 810.5;
		t.y = 80.53;
		return t;
	};
	_proto.maimai0_i = function () {
		var t = new eui.Label();
		this.maimai0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 19;
		t.text = "总胡数：9999";
		t.textColor = 0xFFE33F;
		t.x = 810.5;
		t.y = 100.53;
		return t;
	};
	_proto.dianpao0_i = function () {
		var t = new eui.Image();
		this.dianpao0 = t;
		t.source = "xll_game_json.game_hutype1";
		t.visible = false;
		t.x = 845.51;
		t.y = 15.33;
		return t;
	};
	_proto.zimo0_i = function () {
		var t = new eui.Image();
		this.zimo0 = t;
		t.source = "xll_game_json.game_result_zimo";
		t.x = 786;
		t.y = 19;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.horizontalCenter = 0;
		t.y = 161.52;
		t.elementsContent = [this._Image5_i(),this.hu1_i(),this.dianpao1_i(),this.zimo1_i(),this.totaleHu1_i(),this.maimai1_i(),this._Group5_i(),this._Group6_i(),this._Group8_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ttmj_single_result_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hu1_i = function () {
		var t = new eui.Image();
		this.hu1 = t;
		t.source = "xll_game_json.game_hu_icon";
		t.verticalCenter = -18.5;
		t.x = 871.33;
		return t;
	};
	_proto.dianpao1_i = function () {
		var t = new eui.Image();
		this.dianpao1 = t;
		t.source = "xll_game_json.game_hutype1";
		t.x = 845.51;
		t.y = 15.33;
		return t;
	};
	_proto.zimo1_i = function () {
		var t = new eui.Image();
		this.zimo1 = t;
		t.source = "xll_game_json.game_result_zimo";
		t.x = 786;
		t.y = 19;
		return t;
	};
	_proto.totaleHu1_i = function () {
		var t = new eui.Label();
		this.totaleHu1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 19;
		t.text = "总胡数：9999";
		t.textColor = 0xFFE33F;
		t.x = 810.5;
		t.y = 80.53;
		return t;
	};
	_proto.maimai1_i = function () {
		var t = new eui.Label();
		this.maimai1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 19;
		t.text = "总胡数：9999";
		t.textColor = 0xFFE33F;
		t.x = 810.5;
		t.y = 100.53;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -2.5;
		t.x = 21.5;
		t.elementsContent = [this.headbox1_i(),this.nickname1_i()];
		return t;
	};
	_proto.headbox1_i = function () {
		var t = new eui.Group();
		this.headbox1 = t;
		t.height = 66;
		t.horizontalCenter = 0;
		t.width = 66;
		t.y = 17.32;
		t.elementsContent = [this.headImg1_i(),this._Image6_i(),this.roomOwner1_i(),this.zhuang1_i(),this.fangxiang1_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner1_i = function () {
		var t = new eui.Image();
		this.roomOwner1 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.source = "xll_game_json.game_result_zhuang_icon";
		t.x = -15.32;
		t.y = -11.66;
		return t;
	};
	_proto.fangxiang1_i = function () {
		var t = new eui.Image();
		this.fangxiang1 = t;
		t.height = 44;
		t.source = "xll_game_json.game_singleresult_dong";
		t.width = 44;
		t.x = 40.04;
		t.y = -8.32;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.width = 80;
		t.y = 88.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 127.33;
		t.y = 10;
		t.elementsContent = [this.cardsGroupTop1_i(),this.cardsGroupBottom1_i(),this.showTypeTop1_i(),this.showTypeBottom1_i()];
		return t;
	};
	_proto.cardsGroupTop1_i = function () {
		var t = new eui.Group();
		this.cardsGroupTop1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.show18_i(),this.show19_i(),this.show20_i(),this.show21_i(),this.show22_i(),this.show23_i(),this.show24_i(),this.show25_i(),this.show26_i(),this.show109_i(),this.show110_i(),this.show111_i(),this.show112_i(),this.show113_i(),this.show114_i(),this.show115_i(),this.show116_i(),this.show117_i()];
		return t;
	};
	_proto.show18_i = function () {
		var t = new eui.Image();
		this.show18 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.show19_i = function () {
		var t = new eui.Image();
		this.show19 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 73;
		return t;
	};
	_proto.show20_i = function () {
		var t = new eui.Image();
		this.show20 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 146;
		return t;
	};
	_proto.show21_i = function () {
		var t = new eui.Image();
		this.show21 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 219;
		t.y = 10;
		return t;
	};
	_proto.show22_i = function () {
		var t = new eui.Image();
		this.show22 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 306;
		t.y = 20;
		return t;
	};
	_proto.show23_i = function () {
		var t = new eui.Image();
		this.show23 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 379;
		t.y = 30;
		return t;
	};
	_proto.show24_i = function () {
		var t = new eui.Image();
		this.show24 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 452;
		t.y = 40;
		return t;
	};
	_proto.show25_i = function () {
		var t = new eui.Image();
		this.show25 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 525;
		t.y = 50;
		return t;
	};
	_proto.show26_i = function () {
		var t = new eui.Image();
		this.show26 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 612;
		t.y = 60;
		return t;
	};
	_proto.show109_i = function () {
		var t = new eui.Image();
		this.show109 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 685;
		t.y = 70;
		return t;
	};
	_proto.show110_i = function () {
		var t = new eui.Image();
		this.show110 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 758;
		t.y = 80;
		return t;
	};
	_proto.show111_i = function () {
		var t = new eui.Image();
		this.show111 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 831;
		t.y = 90;
		return t;
	};
	_proto.show112_i = function () {
		var t = new eui.Image();
		this.show112 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 918;
		t.y = 100;
		return t;
	};
	_proto.show113_i = function () {
		var t = new eui.Image();
		this.show113 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 991;
		t.y = 110;
		return t;
	};
	_proto.show114_i = function () {
		var t = new eui.Image();
		this.show114 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1064;
		t.y = 120;
		return t;
	};
	_proto.show115_i = function () {
		var t = new eui.Image();
		this.show115 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1137;
		t.y = 130;
		return t;
	};
	_proto.show116_i = function () {
		var t = new eui.Image();
		this.show116 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1224;
		t.y = 130;
		return t;
	};
	_proto.show117_i = function () {
		var t = new eui.Image();
		this.show117 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1320;
		t.y = 140;
		return t;
	};
	_proto.cardsGroupBottom1_i = function () {
		var t = new eui.Group();
		this.cardsGroupBottom1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 0;
		t.y = 61.34;
		t.elementsContent = [this.show36_i(),this.show37_i(),this.show38_i(),this.show39_i(),this.show40_i(),this.show41_i(),this.show42_i(),this.show43_i(),this.show44_i(),this.show45_i(),this.show46_i(),this.show47_i(),this.show48_i(),this.show49_i(),this.show50_i(),this.show51_i(),this.show52_i(),this.show53_i()];
		return t;
	};
	_proto.show36_i = function () {
		var t = new eui.Image();
		this.show36 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.show37_i = function () {
		var t = new eui.Image();
		this.show37 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 73;
		return t;
	};
	_proto.show38_i = function () {
		var t = new eui.Image();
		this.show38 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 146;
		return t;
	};
	_proto.show39_i = function () {
		var t = new eui.Image();
		this.show39 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 219;
		t.y = 10;
		return t;
	};
	_proto.show40_i = function () {
		var t = new eui.Image();
		this.show40 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 306;
		t.y = 20;
		return t;
	};
	_proto.show41_i = function () {
		var t = new eui.Image();
		this.show41 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 379;
		t.y = 30;
		return t;
	};
	_proto.show42_i = function () {
		var t = new eui.Image();
		this.show42 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 452;
		t.y = 40;
		return t;
	};
	_proto.show43_i = function () {
		var t = new eui.Image();
		this.show43 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 525;
		t.y = 50;
		return t;
	};
	_proto.show44_i = function () {
		var t = new eui.Image();
		this.show44 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 612;
		t.y = 60;
		return t;
	};
	_proto.show45_i = function () {
		var t = new eui.Image();
		this.show45 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 685;
		t.y = 70;
		return t;
	};
	_proto.show46_i = function () {
		var t = new eui.Image();
		this.show46 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 758;
		t.y = 80;
		return t;
	};
	_proto.show47_i = function () {
		var t = new eui.Image();
		this.show47 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 831;
		t.y = 90;
		return t;
	};
	_proto.show48_i = function () {
		var t = new eui.Image();
		this.show48 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 918;
		t.y = 100;
		return t;
	};
	_proto.show49_i = function () {
		var t = new eui.Image();
		this.show49 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 991;
		t.y = 110;
		return t;
	};
	_proto.show50_i = function () {
		var t = new eui.Image();
		this.show50 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1064;
		t.y = 120;
		return t;
	};
	_proto.show51_i = function () {
		var t = new eui.Image();
		this.show51 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1137;
		t.y = 130;
		return t;
	};
	_proto.show52_i = function () {
		var t = new eui.Image();
		this.show52 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1224;
		t.y = 130;
		return t;
	};
	_proto.show53_i = function () {
		var t = new eui.Image();
		this.show53 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1320;
		t.y = 140;
		return t;
	};
	_proto.showTypeTop1_i = function () {
		var t = new eui.Label();
		this.showTypeTop1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "平胡，平胡，平胡，平胡，平胡";
		t.x = 89.32;
		t.y = 59.17;
		return t;
	};
	_proto.showTypeBottom1_i = function () {
		var t = new eui.Label();
		this.showTypeBottom1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "平胡，平胡，平胡，平胡，平胡";
		t.verticalAlign = "justify";
		t.x = 89.99;
		t.y = 86.53;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 956;
		t.elementsContent = [this._Group7_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.totalfen1_i()];
		return t;
	};
	_proto.totalfen1_i = function () {
		var t = new eui.BitmapLabel();
		this.totalfen1 = t;
		t.font = "resultcoin_lose_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+100";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.horizontalCenter = 0;
		t.y = 301.52;
		t.elementsContent = [this._Image7_i(),this.hu2_i(),this.dianpao2_i(),this.zimo2_i(),this.totaleHu2_i(),this.maimai2_i(),this._Group9_i(),this._Group10_i(),this._Group12_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ttmj_single_result_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hu2_i = function () {
		var t = new eui.Image();
		this.hu2 = t;
		t.source = "xll_game_json.game_hu_icon";
		t.verticalCenter = -18.5;
		t.x = 871.33;
		return t;
	};
	_proto.dianpao2_i = function () {
		var t = new eui.Image();
		this.dianpao2 = t;
		t.source = "xll_game_json.game_hutype1";
		t.x = 845.51;
		t.y = 15.33;
		return t;
	};
	_proto.zimo2_i = function () {
		var t = new eui.Image();
		this.zimo2 = t;
		t.source = "xll_game_json.game_result_zimo";
		t.x = 786;
		t.y = 19;
		return t;
	};
	_proto.totaleHu2_i = function () {
		var t = new eui.Label();
		this.totaleHu2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 19;
		t.text = "总胡数：9999";
		t.textColor = 0xFFE33F;
		t.x = 810.5;
		t.y = 80.53;
		return t;
	};
	_proto.maimai2_i = function () {
		var t = new eui.Label();
		this.maimai2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 19;
		t.text = "总胡数：9999";
		t.textColor = 0xFFE33F;
		t.x = 810.5;
		t.y = 100.53;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -2.5;
		t.x = 21.5;
		t.elementsContent = [this.headbox2_i(),this.nickname2_i()];
		return t;
	};
	_proto.headbox2_i = function () {
		var t = new eui.Group();
		this.headbox2 = t;
		t.height = 66;
		t.horizontalCenter = 0;
		t.width = 66;
		t.y = 17.32;
		t.elementsContent = [this.headImg2_i(),this._Image8_i(),this.roomOwner2_i(),this.zhuang2_i(),this.fangxiang2_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner2_i = function () {
		var t = new eui.Image();
		this.roomOwner2 = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.source = "xll_game_json.game_result_zhuang_icon";
		t.x = -15.32;
		t.y = -11.66;
		return t;
	};
	_proto.fangxiang2_i = function () {
		var t = new eui.Image();
		this.fangxiang2 = t;
		t.height = 44;
		t.source = "xll_game_json.game_singleresult_dong";
		t.width = 44;
		t.x = 40.04;
		t.y = -8.32;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.width = 80;
		t.y = 88.5;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 127.33;
		t.y = 10;
		t.elementsContent = [this.cardsGroupTop2_i(),this.cardsGroupBottom2_i(),this.showTypeTop2_i(),this.showTypeBottom2_i()];
		return t;
	};
	_proto.cardsGroupTop2_i = function () {
		var t = new eui.Group();
		this.cardsGroupTop2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.show54_i(),this.show55_i(),this.show56_i(),this.show57_i(),this.show58_i(),this.show59_i(),this.show60_i(),this.show61_i(),this.show62_i(),this.show63_i(),this.show64_i(),this.show65_i(),this.show66_i(),this.show67_i(),this.show68_i(),this.show69_i(),this.show70_i(),this.show71_i()];
		return t;
	};
	_proto.show54_i = function () {
		var t = new eui.Image();
		this.show54 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.show55_i = function () {
		var t = new eui.Image();
		this.show55 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 73;
		return t;
	};
	_proto.show56_i = function () {
		var t = new eui.Image();
		this.show56 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 146;
		return t;
	};
	_proto.show57_i = function () {
		var t = new eui.Image();
		this.show57 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 219;
		t.y = 10;
		return t;
	};
	_proto.show58_i = function () {
		var t = new eui.Image();
		this.show58 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 306;
		t.y = 20;
		return t;
	};
	_proto.show59_i = function () {
		var t = new eui.Image();
		this.show59 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 379;
		t.y = 30;
		return t;
	};
	_proto.show60_i = function () {
		var t = new eui.Image();
		this.show60 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 452;
		t.y = 40;
		return t;
	};
	_proto.show61_i = function () {
		var t = new eui.Image();
		this.show61 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 525;
		t.y = 50;
		return t;
	};
	_proto.show62_i = function () {
		var t = new eui.Image();
		this.show62 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 612;
		t.y = 60;
		return t;
	};
	_proto.show63_i = function () {
		var t = new eui.Image();
		this.show63 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 685;
		t.y = 70;
		return t;
	};
	_proto.show64_i = function () {
		var t = new eui.Image();
		this.show64 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 758;
		t.y = 80;
		return t;
	};
	_proto.show65_i = function () {
		var t = new eui.Image();
		this.show65 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 831;
		t.y = 90;
		return t;
	};
	_proto.show66_i = function () {
		var t = new eui.Image();
		this.show66 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 918;
		t.y = 100;
		return t;
	};
	_proto.show67_i = function () {
		var t = new eui.Image();
		this.show67 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 991;
		t.y = 110;
		return t;
	};
	_proto.show68_i = function () {
		var t = new eui.Image();
		this.show68 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1064;
		t.y = 120;
		return t;
	};
	_proto.show69_i = function () {
		var t = new eui.Image();
		this.show69 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1137;
		t.y = 130;
		return t;
	};
	_proto.show70_i = function () {
		var t = new eui.Image();
		this.show70 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1224;
		t.y = 130;
		return t;
	};
	_proto.show71_i = function () {
		var t = new eui.Image();
		this.show71 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1320;
		t.y = 140;
		return t;
	};
	_proto.cardsGroupBottom2_i = function () {
		var t = new eui.Group();
		this.cardsGroupBottom2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 0;
		t.y = 61.34;
		t.elementsContent = [this.show72_i(),this.show73_i(),this.show74_i(),this.show75_i(),this.show76_i(),this.show77_i(),this.show78_i(),this.show79_i(),this.show80_i(),this.show81_i(),this.show82_i(),this.show83_i(),this.show84_i(),this.show85_i(),this.show86_i(),this.show87_i(),this.show88_i(),this.show89_i()];
		return t;
	};
	_proto.show72_i = function () {
		var t = new eui.Image();
		this.show72 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.show73_i = function () {
		var t = new eui.Image();
		this.show73 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 73;
		return t;
	};
	_proto.show74_i = function () {
		var t = new eui.Image();
		this.show74 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 146;
		return t;
	};
	_proto.show75_i = function () {
		var t = new eui.Image();
		this.show75 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 219;
		t.y = 10;
		return t;
	};
	_proto.show76_i = function () {
		var t = new eui.Image();
		this.show76 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 306;
		t.y = 20;
		return t;
	};
	_proto.show77_i = function () {
		var t = new eui.Image();
		this.show77 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 379;
		t.y = 30;
		return t;
	};
	_proto.show78_i = function () {
		var t = new eui.Image();
		this.show78 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 452;
		t.y = 40;
		return t;
	};
	_proto.show79_i = function () {
		var t = new eui.Image();
		this.show79 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 525;
		t.y = 50;
		return t;
	};
	_proto.show80_i = function () {
		var t = new eui.Image();
		this.show80 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 612;
		t.y = 60;
		return t;
	};
	_proto.show81_i = function () {
		var t = new eui.Image();
		this.show81 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 685;
		t.y = 70;
		return t;
	};
	_proto.show82_i = function () {
		var t = new eui.Image();
		this.show82 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 758;
		t.y = 80;
		return t;
	};
	_proto.show83_i = function () {
		var t = new eui.Image();
		this.show83 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 831;
		t.y = 90;
		return t;
	};
	_proto.show84_i = function () {
		var t = new eui.Image();
		this.show84 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 918;
		t.y = 100;
		return t;
	};
	_proto.show85_i = function () {
		var t = new eui.Image();
		this.show85 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 991;
		t.y = 110;
		return t;
	};
	_proto.show86_i = function () {
		var t = new eui.Image();
		this.show86 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1064;
		t.y = 120;
		return t;
	};
	_proto.show87_i = function () {
		var t = new eui.Image();
		this.show87 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1137;
		t.y = 130;
		return t;
	};
	_proto.show88_i = function () {
		var t = new eui.Image();
		this.show88 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1224;
		t.y = 130;
		return t;
	};
	_proto.show89_i = function () {
		var t = new eui.Image();
		this.show89 = t;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0;
		t.x = 1320;
		t.y = 140;
		return t;
	};
	_proto.showTypeTop2_i = function () {
		var t = new eui.Label();
		this.showTypeTop2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "平胡，平胡，平胡，平胡，平胡";
		t.x = 89.32;
		t.y = 59.17;
		return t;
	};
	_proto.showTypeBottom2_i = function () {
		var t = new eui.Label();
		this.showTypeBottom2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "平胡，平胡，平胡，平胡，平胡";
		t.verticalAlign = "justify";
		t.x = 89.99;
		t.y = 86.53;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 956;
		t.elementsContent = [this._Group11_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.totalfen2_i()];
		return t;
	};
	_proto.totalfen2_i = function () {
		var t = new eui.BitmapLabel();
		this.totalfen2 = t;
		t.font = "resultcoin_win_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+100";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 564.34;
		t.elementsContent = [this._Group14_i(),this._Group15_i()];
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.visible = false;
		t.width = 50;
		t.x = 0;
		t.y = 0.67;
		t.elementsContent = [this.shareBtn_i()];
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Button();
		this.shareBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmj_singleResult$Skin137;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.width = 50;
		t.y = 0;
		t.elementsContent = [this.continueBtn_i()];
		return t;
	};
	_proto.continueBtn_i = function () {
		var t = new eui.Button();
		this.continueBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmj_singleResult$Skin138;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 340;
		t.y = 9;
		t.elementsContent = [this._Image9_i(),this.title_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_result_title";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "xll_game_json.game_hutype0";
		t.x = 136;
		t.y = 10;
		return t;
	};
	_proto.malayer_i = function () {
		var t = new eui.Group();
		this.malayer = t;
		t.x = 22;
		t.y = 548;
		t.elementsContent = [this._Image10_i(),this.maCard0_i(),this.maCard1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_result_buyma";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.maCard0_i = function () {
		var t = new eui.Image();
		this.maCard0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0.5;
		t.x = 94;
		return t;
	};
	_proto.maCard1_i = function () {
		var t = new eui.Image();
		this.maCard1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "MJCard_json.owntong_8";
		t.verticalCenter = 0.5;
		t.x = 146;
		return t;
	};
	return hzmj_singleResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/hzmj_spp.exml'] = window.hzmj_spp = (function (_super) {
	__extends(hzmj_spp, _super);
	var hzmj_spp$Skin139 = 	(function (_super) {
		__extends(hzmj_spp$Skin139, _super);
		function hzmj_spp$Skin139() {
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
		var _proto = hzmj_spp$Skin139.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hzmj_ht_accept_png";
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
		return hzmj_spp$Skin139;
	})(eui.Skin);

	var hzmj_spp$Skin140 = 	(function (_super) {
		__extends(hzmj_spp$Skin140, _super);
		function hzmj_spp$Skin140() {
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
		var _proto = hzmj_spp$Skin140.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hzmj_ht_dontaccept_png";
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
		return hzmj_spp$Skin140;
	})(eui.Skin);

	function hzmj_spp() {
		_super.call(this);
		this.skinParts = ["majiang0","select0","num0","card0","majiang1","select1","num1","card1","majiang2","select2","num2","card2","majiang3","select3","num3","card3","majiang4","select4","num4","card4","majiang5","select5","num5","card5","majiang6","select6","num6","card6","majiang7","select7","num7","card7","majiang8","select8","num8","card8","majiang9","select9","num9","card9","majiang10","select10","num10","card10","majiang11","select11","num11","card11","majiang12","select12","num12","card12","majiang13","select13","num13","card13","majiang14","select14","num14","card14","majiang15","select15","num15","card15","majiang16","select16","num16","card16","majiang17","select17","num17","card17","majiang18","select18","num18","card18","majiang19","select19","num19","card19","majiang20","select20","num20","card20","majiang21","select21","num21","card21","majiang22","select22","num22","card22","majiang23","select23","num23","card23","majiang24","select24","num24","card24","majiang25","select25","num25","card25","majiang26","select26","num26","card26","majiang27","select27","num27","card27","majiang28","select28","num28","card28","majiang29","select29","num29","card29","majiang30","select30","num30","card30","majiang31","select31","num31","card31","majiang32","select32","num32","card32","majiang33","select33","num33","card33","majiang34","select34","num34","card34","majiang35","select35","num35","card35","majiang36","select36","num36","card36","majiang37","select37","num37","card37","majiang38","select38","num38","card38","majiang39","select39","num39","card39","confirm","cancel"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Group49_i()];
	}
	var _proto = hzmj_spp.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.x = 140;
		t.y = 72;
		t.elementsContent = [this._Image2_i(),this._Group45_i(),this._Group48_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 550;
		t.scale9Grid = new egret.Rectangle(28,29,84,48);
		t.source = "hzmj_ht_bg_png";
		t.width = 800;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.verticalCenter = -31;
		t.elementsContent = [this._Group11_i(),this._Group22_i(),this._Group33_i(),this._Group44_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i(),this.card5_i(),this.card6_i(),this.card7_i(),this.card8_i(),this.card9_i()];
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Group();
		this.card0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.num0_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang0_i(),this.select0_i()];
		return t;
	};
	_proto.majiang0_i = function () {
		var t = new eui.Image();
		this.majiang0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select0_i = function () {
		var t = new eui.Image();
		this.select0 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num0_i = function () {
		var t = new eui.Label();
		this.num0 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Group();
		this.card1 = t;
		t.x = 75;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this.num1_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang1_i(),this.select1_i()];
		return t;
	};
	_proto.majiang1_i = function () {
		var t = new eui.Image();
		this.majiang1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num1_i = function () {
		var t = new eui.Label();
		this.num1 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Group();
		this.card2 = t;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this._Group3_i(),this.num2_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang2_i(),this.select2_i()];
		return t;
	};
	_proto.majiang2_i = function () {
		var t = new eui.Image();
		this.majiang2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num2_i = function () {
		var t = new eui.Label();
		this.num2 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Group();
		this.card3 = t;
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this._Group4_i(),this.num3_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang3_i(),this.select3_i()];
		return t;
	};
	_proto.majiang3_i = function () {
		var t = new eui.Image();
		this.majiang3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num3_i = function () {
		var t = new eui.Label();
		this.num3 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Group();
		this.card4 = t;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Group5_i(),this.num4_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang4_i(),this.select4_i()];
		return t;
	};
	_proto.majiang4_i = function () {
		var t = new eui.Image();
		this.majiang4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num4_i = function () {
		var t = new eui.Label();
		this.num4 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card5_i = function () {
		var t = new eui.Group();
		this.card5 = t;
		t.x = 375;
		t.y = 0;
		t.elementsContent = [this._Group6_i(),this.num5_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang5_i(),this.select5_i()];
		return t;
	};
	_proto.majiang5_i = function () {
		var t = new eui.Image();
		this.majiang5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select5_i = function () {
		var t = new eui.Image();
		this.select5 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num5_i = function () {
		var t = new eui.Label();
		this.num5 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card6_i = function () {
		var t = new eui.Group();
		this.card6 = t;
		t.x = 450;
		t.y = 0;
		t.elementsContent = [this._Group7_i(),this.num6_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang6_i(),this.select6_i()];
		return t;
	};
	_proto.majiang6_i = function () {
		var t = new eui.Image();
		this.majiang6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select6_i = function () {
		var t = new eui.Image();
		this.select6 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num6_i = function () {
		var t = new eui.Label();
		this.num6 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card7_i = function () {
		var t = new eui.Group();
		this.card7 = t;
		t.x = 525;
		t.y = 0;
		t.elementsContent = [this._Group8_i(),this.num7_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang7_i(),this.select7_i()];
		return t;
	};
	_proto.majiang7_i = function () {
		var t = new eui.Image();
		this.majiang7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select7_i = function () {
		var t = new eui.Image();
		this.select7 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num7_i = function () {
		var t = new eui.Label();
		this.num7 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card8_i = function () {
		var t = new eui.Group();
		this.card8 = t;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this._Group9_i(),this.num8_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang8_i(),this.select8_i()];
		return t;
	};
	_proto.majiang8_i = function () {
		var t = new eui.Image();
		this.majiang8 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select8_i = function () {
		var t = new eui.Image();
		this.select8 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num8_i = function () {
		var t = new eui.Label();
		this.num8 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card9_i = function () {
		var t = new eui.Group();
		this.card9 = t;
		t.x = 675;
		t.y = 0;
		t.elementsContent = [this._Group10_i(),this.num9_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang9_i(),this.select9_i()];
		return t;
	};
	_proto.majiang9_i = function () {
		var t = new eui.Image();
		this.majiang9 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select9_i = function () {
		var t = new eui.Image();
		this.select9 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num9_i = function () {
		var t = new eui.Label();
		this.num9 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 110;
		t.elementsContent = [this.card10_i(),this.card11_i(),this.card12_i(),this.card13_i(),this.card14_i(),this.card15_i(),this.card16_i(),this.card17_i(),this.card18_i(),this.card19_i()];
		return t;
	};
	_proto.card10_i = function () {
		var t = new eui.Group();
		this.card10 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group12_i(),this.num10_i()];
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang10_i(),this.select10_i()];
		return t;
	};
	_proto.majiang10_i = function () {
		var t = new eui.Image();
		this.majiang10 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select10_i = function () {
		var t = new eui.Image();
		this.select10 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num10_i = function () {
		var t = new eui.Label();
		this.num10 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card11_i = function () {
		var t = new eui.Group();
		this.card11 = t;
		t.x = 75;
		t.y = 0;
		t.elementsContent = [this._Group13_i(),this.num11_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang11_i(),this.select11_i()];
		return t;
	};
	_proto.majiang11_i = function () {
		var t = new eui.Image();
		this.majiang11 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select11_i = function () {
		var t = new eui.Image();
		this.select11 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num11_i = function () {
		var t = new eui.Label();
		this.num11 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card12_i = function () {
		var t = new eui.Group();
		this.card12 = t;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this._Group14_i(),this.num12_i()];
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang12_i(),this.select12_i()];
		return t;
	};
	_proto.majiang12_i = function () {
		var t = new eui.Image();
		this.majiang12 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select12_i = function () {
		var t = new eui.Image();
		this.select12 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num12_i = function () {
		var t = new eui.Label();
		this.num12 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card13_i = function () {
		var t = new eui.Group();
		this.card13 = t;
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this._Group15_i(),this.num13_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang13_i(),this.select13_i()];
		return t;
	};
	_proto.majiang13_i = function () {
		var t = new eui.Image();
		this.majiang13 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select13_i = function () {
		var t = new eui.Image();
		this.select13 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num13_i = function () {
		var t = new eui.Label();
		this.num13 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card14_i = function () {
		var t = new eui.Group();
		this.card14 = t;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Group16_i(),this.num14_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang14_i(),this.select14_i()];
		return t;
	};
	_proto.majiang14_i = function () {
		var t = new eui.Image();
		this.majiang14 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select14_i = function () {
		var t = new eui.Image();
		this.select14 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num14_i = function () {
		var t = new eui.Label();
		this.num14 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card15_i = function () {
		var t = new eui.Group();
		this.card15 = t;
		t.x = 375;
		t.y = 0;
		t.elementsContent = [this._Group17_i(),this.num15_i()];
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang15_i(),this.select15_i()];
		return t;
	};
	_proto.majiang15_i = function () {
		var t = new eui.Image();
		this.majiang15 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select15_i = function () {
		var t = new eui.Image();
		this.select15 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num15_i = function () {
		var t = new eui.Label();
		this.num15 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card16_i = function () {
		var t = new eui.Group();
		this.card16 = t;
		t.x = 450;
		t.y = 0;
		t.elementsContent = [this._Group18_i(),this.num16_i()];
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang16_i(),this.select16_i()];
		return t;
	};
	_proto.majiang16_i = function () {
		var t = new eui.Image();
		this.majiang16 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select16_i = function () {
		var t = new eui.Image();
		this.select16 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num16_i = function () {
		var t = new eui.Label();
		this.num16 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card17_i = function () {
		var t = new eui.Group();
		this.card17 = t;
		t.x = 525;
		t.y = 0;
		t.elementsContent = [this._Group19_i(),this.num17_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang17_i(),this.select17_i()];
		return t;
	};
	_proto.majiang17_i = function () {
		var t = new eui.Image();
		this.majiang17 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select17_i = function () {
		var t = new eui.Image();
		this.select17 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num17_i = function () {
		var t = new eui.Label();
		this.num17 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card18_i = function () {
		var t = new eui.Group();
		this.card18 = t;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this._Group20_i(),this.num18_i()];
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang18_i(),this.select18_i()];
		return t;
	};
	_proto.majiang18_i = function () {
		var t = new eui.Image();
		this.majiang18 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select18_i = function () {
		var t = new eui.Image();
		this.select18 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num18_i = function () {
		var t = new eui.Label();
		this.num18 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card19_i = function () {
		var t = new eui.Group();
		this.card19 = t;
		t.x = 675;
		t.y = 0;
		t.elementsContent = [this._Group21_i(),this.num19_i()];
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang19_i(),this.select19_i()];
		return t;
	};
	_proto.majiang19_i = function () {
		var t = new eui.Image();
		this.majiang19 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select19_i = function () {
		var t = new eui.Image();
		this.select19 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num19_i = function () {
		var t = new eui.Label();
		this.num19 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 220;
		t.elementsContent = [this.card20_i(),this.card21_i(),this.card22_i(),this.card23_i(),this.card24_i(),this.card25_i(),this.card26_i(),this.card27_i(),this.card28_i(),this.card29_i()];
		return t;
	};
	_proto.card20_i = function () {
		var t = new eui.Group();
		this.card20 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group23_i(),this.num20_i()];
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang20_i(),this.select20_i()];
		return t;
	};
	_proto.majiang20_i = function () {
		var t = new eui.Image();
		this.majiang20 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select20_i = function () {
		var t = new eui.Image();
		this.select20 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num20_i = function () {
		var t = new eui.Label();
		this.num20 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card21_i = function () {
		var t = new eui.Group();
		this.card21 = t;
		t.x = 75;
		t.y = 0;
		t.elementsContent = [this._Group24_i(),this.num21_i()];
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang21_i(),this.select21_i()];
		return t;
	};
	_proto.majiang21_i = function () {
		var t = new eui.Image();
		this.majiang21 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select21_i = function () {
		var t = new eui.Image();
		this.select21 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num21_i = function () {
		var t = new eui.Label();
		this.num21 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card22_i = function () {
		var t = new eui.Group();
		this.card22 = t;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this._Group25_i(),this.num22_i()];
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang22_i(),this.select22_i()];
		return t;
	};
	_proto.majiang22_i = function () {
		var t = new eui.Image();
		this.majiang22 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select22_i = function () {
		var t = new eui.Image();
		this.select22 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num22_i = function () {
		var t = new eui.Label();
		this.num22 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card23_i = function () {
		var t = new eui.Group();
		this.card23 = t;
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this._Group26_i(),this.num23_i()];
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang23_i(),this.select23_i()];
		return t;
	};
	_proto.majiang23_i = function () {
		var t = new eui.Image();
		this.majiang23 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select23_i = function () {
		var t = new eui.Image();
		this.select23 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num23_i = function () {
		var t = new eui.Label();
		this.num23 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card24_i = function () {
		var t = new eui.Group();
		this.card24 = t;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Group27_i(),this.num24_i()];
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang24_i(),this.select24_i()];
		return t;
	};
	_proto.majiang24_i = function () {
		var t = new eui.Image();
		this.majiang24 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select24_i = function () {
		var t = new eui.Image();
		this.select24 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num24_i = function () {
		var t = new eui.Label();
		this.num24 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card25_i = function () {
		var t = new eui.Group();
		this.card25 = t;
		t.x = 375;
		t.y = 0;
		t.elementsContent = [this._Group28_i(),this.num25_i()];
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang25_i(),this.select25_i()];
		return t;
	};
	_proto.majiang25_i = function () {
		var t = new eui.Image();
		this.majiang25 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select25_i = function () {
		var t = new eui.Image();
		this.select25 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num25_i = function () {
		var t = new eui.Label();
		this.num25 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card26_i = function () {
		var t = new eui.Group();
		this.card26 = t;
		t.x = 450;
		t.y = 0;
		t.elementsContent = [this._Group29_i(),this.num26_i()];
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang26_i(),this.select26_i()];
		return t;
	};
	_proto.majiang26_i = function () {
		var t = new eui.Image();
		this.majiang26 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select26_i = function () {
		var t = new eui.Image();
		this.select26 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num26_i = function () {
		var t = new eui.Label();
		this.num26 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card27_i = function () {
		var t = new eui.Group();
		this.card27 = t;
		t.x = 525;
		t.y = 0;
		t.elementsContent = [this._Group30_i(),this.num27_i()];
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang27_i(),this.select27_i()];
		return t;
	};
	_proto.majiang27_i = function () {
		var t = new eui.Image();
		this.majiang27 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select27_i = function () {
		var t = new eui.Image();
		this.select27 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num27_i = function () {
		var t = new eui.Label();
		this.num27 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card28_i = function () {
		var t = new eui.Group();
		this.card28 = t;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this._Group31_i(),this.num28_i()];
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang28_i(),this.select28_i()];
		return t;
	};
	_proto.majiang28_i = function () {
		var t = new eui.Image();
		this.majiang28 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select28_i = function () {
		var t = new eui.Image();
		this.select28 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num28_i = function () {
		var t = new eui.Label();
		this.num28 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card29_i = function () {
		var t = new eui.Group();
		this.card29 = t;
		t.x = 675;
		t.y = 0;
		t.elementsContent = [this._Group32_i(),this.num29_i()];
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang29_i(),this.select29_i()];
		return t;
	};
	_proto.majiang29_i = function () {
		var t = new eui.Image();
		this.majiang29 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select29_i = function () {
		var t = new eui.Image();
		this.select29 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num29_i = function () {
		var t = new eui.Label();
		this.num29 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 330;
		t.elementsContent = [this.card30_i(),this.card31_i(),this.card32_i(),this.card33_i(),this.card34_i(),this.card35_i(),this.card36_i(),this.card37_i(),this.card38_i(),this.card39_i()];
		return t;
	};
	_proto.card30_i = function () {
		var t = new eui.Group();
		this.card30 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group34_i(),this.num30_i()];
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang30_i(),this.select30_i()];
		return t;
	};
	_proto.majiang30_i = function () {
		var t = new eui.Image();
		this.majiang30 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select30_i = function () {
		var t = new eui.Image();
		this.select30 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num30_i = function () {
		var t = new eui.Label();
		this.num30 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card31_i = function () {
		var t = new eui.Group();
		this.card31 = t;
		t.x = 75;
		t.y = 0;
		t.elementsContent = [this._Group35_i(),this.num31_i()];
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang31_i(),this.select31_i()];
		return t;
	};
	_proto.majiang31_i = function () {
		var t = new eui.Image();
		this.majiang31 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select31_i = function () {
		var t = new eui.Image();
		this.select31 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num31_i = function () {
		var t = new eui.Label();
		this.num31 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card32_i = function () {
		var t = new eui.Group();
		this.card32 = t;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this._Group36_i(),this.num32_i()];
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang32_i(),this.select32_i()];
		return t;
	};
	_proto.majiang32_i = function () {
		var t = new eui.Image();
		this.majiang32 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select32_i = function () {
		var t = new eui.Image();
		this.select32 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num32_i = function () {
		var t = new eui.Label();
		this.num32 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card33_i = function () {
		var t = new eui.Group();
		this.card33 = t;
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this._Group37_i(),this.num33_i()];
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang33_i(),this.select33_i()];
		return t;
	};
	_proto.majiang33_i = function () {
		var t = new eui.Image();
		this.majiang33 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select33_i = function () {
		var t = new eui.Image();
		this.select33 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num33_i = function () {
		var t = new eui.Label();
		this.num33 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card34_i = function () {
		var t = new eui.Group();
		this.card34 = t;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Group38_i(),this.num34_i()];
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang34_i(),this.select34_i()];
		return t;
	};
	_proto.majiang34_i = function () {
		var t = new eui.Image();
		this.majiang34 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select34_i = function () {
		var t = new eui.Image();
		this.select34 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num34_i = function () {
		var t = new eui.Label();
		this.num34 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card35_i = function () {
		var t = new eui.Group();
		this.card35 = t;
		t.visible = false;
		t.x = 375;
		t.y = 0;
		t.elementsContent = [this._Group39_i(),this.num35_i()];
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang35_i(),this.select35_i()];
		return t;
	};
	_proto.majiang35_i = function () {
		var t = new eui.Image();
		this.majiang35 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select35_i = function () {
		var t = new eui.Image();
		this.select35 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num35_i = function () {
		var t = new eui.Label();
		this.num35 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card36_i = function () {
		var t = new eui.Group();
		this.card36 = t;
		t.visible = false;
		t.x = 450;
		t.y = 0;
		t.elementsContent = [this._Group40_i(),this.num36_i()];
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang36_i(),this.select36_i()];
		return t;
	};
	_proto.majiang36_i = function () {
		var t = new eui.Image();
		this.majiang36 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select36_i = function () {
		var t = new eui.Image();
		this.select36 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num36_i = function () {
		var t = new eui.Label();
		this.num36 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card37_i = function () {
		var t = new eui.Group();
		this.card37 = t;
		t.visible = false;
		t.x = 525;
		t.y = 0;
		t.elementsContent = [this._Group41_i(),this.num37_i()];
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang37_i(),this.select37_i()];
		return t;
	};
	_proto.majiang37_i = function () {
		var t = new eui.Image();
		this.majiang37 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select37_i = function () {
		var t = new eui.Image();
		this.select37 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num37_i = function () {
		var t = new eui.Label();
		this.num37 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card38_i = function () {
		var t = new eui.Group();
		this.card38 = t;
		t.visible = false;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this._Group42_i(),this.num38_i()];
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang38_i(),this.select38_i()];
		return t;
	};
	_proto.majiang38_i = function () {
		var t = new eui.Image();
		this.majiang38 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select38_i = function () {
		var t = new eui.Image();
		this.select38 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num38_i = function () {
		var t = new eui.Label();
		this.num38 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card39_i = function () {
		var t = new eui.Group();
		this.card39 = t;
		t.visible = false;
		t.x = 675;
		t.y = 0;
		t.elementsContent = [this._Group43_i(),this.num39_i()];
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang39_i(),this.select39_i()];
		return t;
	};
	_proto.majiang39_i = function () {
		var t = new eui.Image();
		this.majiang39 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select39_i = function () {
		var t = new eui.Image();
		this.select39 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num39_i = function () {
		var t = new eui.Label();
		this.num39 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 481.18;
		t.elementsContent = [this._Group46_i(),this._Group47_i()];
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 0;
		t.elementsContent = [this.confirm_i()];
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Button();
		this.confirm = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.skinName = hzmj_spp$Skin139;
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 234.24;
		t.elementsContent = [this.cancel_i()];
		return t;
	};
	_proto.cancel_i = function () {
		var t = new eui.Button();
		this.cancel = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.skinName = hzmj_spp$Skin140;
		return t;
	};
	return hzmj_spp;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/hzmj_userbox.exml'] = window.hzmj_userbox = (function (_super) {
	__extends(hzmj_userbox, _super);
	function hzmj_userbox() {
		_super.call(this);
		this.skinParts = ["nickname","score","sitApply","headImg","stateImg","roomOwner","zhuang","yyxiaoxi","headbox","messagebox","message","messagebg"];
		
		this.height = 121;
		this.width = 108;
		this.elementsContent = [this._Group1_i(),this.messagebg_i()];
	}
	var _proto = hzmj_userbox.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 121;
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname_i(),this.score_i(),this.sitApply_i(),this.headbox_i()];
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.width = 86;
		t.y = 78.01;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xffda00;
		t.width = 108;
		t.x = 0;
		t.y = 100.01;
		return t;
	};
	_proto.sitApply_i = function () {
		var t = new eui.Image();
		this.sitApply = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "xll_game_json.game_sit_btn";
		t.x = 13;
		t.y = 3;
		return t;
	};
	_proto.headbox_i = function () {
		var t = new eui.Group();
		this.headbox = t;
		t.height = 66;
		t.width = 66;
		t.x = 21;
		t.y = 10;
		t.elementsContent = [this.headImg_i(),this.stateImg_i(),this._Image1_i(),this.roomOwner_i(),this.zhuang_i(),this.yyxiaoxi_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto.stateImg_i = function () {
		var t = new eui.Image();
		this.stateImg = t;
		t.scaleX = 0.63;
		t.scaleY = 0.63;
		t.source = "offLine";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomOwner_i = function () {
		var t = new eui.Image();
		this.roomOwner = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "hzmj_player_json.hzmj_roomOwener";
		return t;
	};
	_proto.zhuang_i = function () {
		var t = new eui.Image();
		this.zhuang = t;
		t.source = "hzmj_player_json.hzmj_head_banker";
		t.x = -9.65;
		t.y = -7.99;
		return t;
	};
	_proto.yyxiaoxi_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_dalaba_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.x = 45;
		t.y = 0;
		t.elementsContent = [this.messagebox_i(),this.message_i()];
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Image();
		this.messagebox = t;
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	return hzmj_userbox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/locationUI.exml'] = window.locationUI = (function (_super) {
	__extends(locationUI, _super);
	function locationUI() {
		_super.call(this);
		this.skinParts = ["txt301","line301","txt302","line302","txt312","line312","headImg2","head30","headImg1","head31","headImg0","head32","peopleThree","txt4","line201","headImg3","head20","headImg4","head21","peopleTwo"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Rect1_i(),this.peopleThree_i(),this.peopleTwo_i()];
	}
	var _proto = locationUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.8;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.strokeAlpha = 0.8;
		t.strokeColor = 0xF7CB62;
		t.strokeWeight = 2;
		t.verticalCenter = 0;
		t.width = 900;
		return t;
	};
	_proto.peopleThree_i = function () {
		var t = new eui.Group();
		this.peopleThree = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.line301_i(),this.line302_i(),this.line312_i(),this.head30_i(),this.head31_i(),this.head32_i()];
		return t;
	};
	_proto.line301_i = function () {
		var t = new eui.Group();
		this.line301 = t;
		t.rotation = 32;
		t.x = 415.99;
		t.y = 83.99;
		t.elementsContent = [this._Rect2_i(),this.txt301_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 230;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt301_i = function () {
		var t = new eui.Label();
		this.txt301 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line302_i = function () {
		var t = new eui.Group();
		this.line302 = t;
		t.rotation = -32;
		t.x = 72.67;
		t.y = 126.01;
		t.elementsContent = [this._Rect3_i(),this.txt302_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 230;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt302_i = function () {
		var t = new eui.Label();
		this.txt302 = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line312_i = function () {
		var t = new eui.Group();
		this.line312 = t;
		t.rotation = -90;
		t.x = 98.67;
		t.y = 97.35;
		t.elementsContent = [this._Rect4_i(),this.txt312_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 350;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt312_i = function () {
		var t = new eui.Label();
		this.txt312 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.head30_i = function () {
		var t = new eui.Group();
		this.head30 = t;
		t.horizontalCenter = 0.5;
		t.y = 292;
		t.elementsContent = [this.headImg2_i(),this._Image1_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.head31_i = function () {
		var t = new eui.Group();
		this.head31 = t;
		t.x = 440.68;
		t.y = 0;
		t.elementsContent = [this.headImg1_i(),this._Image2_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.head32_i = function () {
		var t = new eui.Group();
		this.head32 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg0_i(),this._Image3_i()];
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.peopleTwo_i = function () {
		var t = new eui.Group();
		this.peopleTwo = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.line201_i(),this.head20_i(),this.head21_i()];
		return t;
	};
	_proto.line201_i = function () {
		var t = new eui.Group();
		this.line201 = t;
		t.rotation = -90;
		t.x = 98.67;
		t.y = 97.35;
		t.elementsContent = [this._Rect5_i(),this.txt4_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 350;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt4_i = function () {
		var t = new eui.Label();
		this.txt4 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.head20_i = function () {
		var t = new eui.Group();
		this.head20 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg3_i(),this._Image4_i()];
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.head21_i = function () {
		var t = new eui.Group();
		this.head21 = t;
		t.x = 440.68;
		t.y = 0;
		t.elementsContent = [this.headImg4_i(),this._Image5_i()];
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	return locationUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/maimaUI.exml'] = window.maimaUI = (function (_super) {
	__extends(maimaUI, _super);
	function maimaUI() {
		_super.call(this);
		this.skinParts = ["ma0","ma1"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = maimaUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.verticalCenter = 0;
		t.width = 1300;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.ma0_i(),this.ma1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 260;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(42,56,133,19);
		t.source = "xll_game_json.maima_bg";
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_game_json.maima_title_bg";
		t.top = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_game_json.maima_title_text";
		t.y = 9.5;
		return t;
	};
	_proto.ma0_i = function () {
		var t = new eui.Image();
		this.ma0 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "MJCard_json.owntong_3";
		t.x = 98;
		t.y = 88;
		return t;
	};
	_proto.ma1_i = function () {
		var t = new eui.Image();
		this.ma1 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "MJCard_json.owntong_4";
		t.x = 222;
		t.y = 88;
		return t;
	};
	return maimaUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/totalResult.exml'] = window.totalResult = (function (_super) {
	__extends(totalResult, _super);
	var totalResult$Skin141 = 	(function (_super) {
		__extends(totalResult$Skin141, _super);
		function totalResult$Skin141() {
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
		var _proto = totalResult$Skin141.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_result_share_btn";
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
		return totalResult$Skin141;
	})(eui.Skin);

	var totalResult$Skin142 = 	(function (_super) {
		__extends(totalResult$Skin142, _super);
		function totalResult$Skin142() {
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
		var _proto = totalResult$Skin142.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_result_backhall_btn";
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
		return totalResult$Skin142;
	})(eui.Skin);

	var totalResult$Skin143 = 	(function (_super) {
		__extends(totalResult$Skin143, _super);
		function totalResult$Skin143() {
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
		var _proto = totalResult$Skin143.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_game_json.game_result_again";
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
		return totalResult$Skin143;
	})(eui.Skin);

	function totalResult() {
		_super.call(this);
		this.skinParts = ["noticeGame","sbareBtn","backBtn","playAgainBtn","headImg0","roomown0","headbox0","nickname0","status0","exit0","totalScore0","item0","headImg1","roomown1","headbox1","nickname1","status1","exit1","totalScore1","item1","exit2","headImg2","roomown2","headbox2","nickname2","status2","totalScore2","item2","timer","playcount","fending","roomPwdRule","_label_kefu"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this.noticeGame_i(),this._Group4_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._label_kefu_i()];
	}
	var _proto = totalResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ttmf_result_bg_png";
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.noticeGame_i = function () {
		var t = new eui.Label();
		this.noticeGame = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "本结果仅供娱乐，禁止赌博！";
		t.textColor = 0xFFFFFF;
		t.x = 760.32;
		t.y = 602.66;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 527.9;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.sbareBtn_i()];
		return t;
	};
	_proto.sbareBtn_i = function () {
		var t = new eui.Button();
		this.sbareBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = totalResult$Skin141;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 410;
		t.y = 0;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = totalResult$Skin142;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 205;
		t.elementsContent = [this.playAgainBtn_i()];
		return t;
	};
	_proto.playAgainBtn_i = function () {
		var t = new eui.Button();
		this.playAgainBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = totalResult$Skin143;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 300;
		t.y = 181.02;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Group5_i(),this.status0_i(),this.exit0_i(),this.totalScore0_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ttmj_total_item_png";
		t.width = 532;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 17.99;
		t.elementsContent = [this.headbox0_i(),this.nickname0_i()];
		return t;
	};
	_proto.headbox0_i = function () {
		var t = new eui.Group();
		this.headbox0 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.headImg0_i(),this._Image3_i(),this.roomown0_i()];
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomown0_i = function () {
		var t = new eui.Image();
		this.roomown0 = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xll_game_json.ttmj_tRoomowner";
		t.top = 0;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 86;
		t.y = 64.59;
		return t;
	};
	_proto.status0_i = function () {
		var t = new eui.Image();
		this.status0 = t;
		t.source = "xll_game_json.game_big_winner";
		t.verticalCenter = -20;
		t.x = 414.26;
		return t;
	};
	_proto.exit0_i = function () {
		var t = new eui.Image();
		this.exit0 = t;
		t.source = "xll_game_json.game_result_qiangtui";
		t.verticalCenter = 25.5;
		t.x = 429.42;
		return t;
	};
	_proto.totalScore0_i = function () {
		var t = new eui.BitmapLabel();
		this.totalScore0 = t;
		t.font = "resultcoin_lose_fnt";
		t.text = "+999";
		t.verticalCenter = 1;
		t.x = 252.71;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "总成绩：";
		t.verticalCenter = 0.5;
		t.x = 141.45;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.width = 532;
		t.x = 10;
		t.y = 105;
		t.elementsContent = [this._Image4_i(),this._Group6_i(),this.status1_i(),this.exit1_i(),this.totalScore1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ttmj_total_item_png";
		t.width = 532;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 17.99;
		t.elementsContent = [this.headbox1_i(),this.nickname1_i()];
		return t;
	};
	_proto.headbox1_i = function () {
		var t = new eui.Group();
		this.headbox1 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.headImg1_i(),this._Image5_i(),this.roomown1_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomown1_i = function () {
		var t = new eui.Image();
		this.roomown1 = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xll_game_json.ttmj_tRoomowner";
		t.top = 0;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 86;
		t.y = 64.59;
		return t;
	};
	_proto.status1_i = function () {
		var t = new eui.Image();
		this.status1 = t;
		t.source = "xll_game_json.game_big_winner";
		t.x = 414.26;
		t.y = -8;
		return t;
	};
	_proto.exit1_i = function () {
		var t = new eui.Image();
		this.exit1 = t;
		t.source = "xll_game_json.game_result_qiangtui";
		t.verticalCenter = 25.5;
		t.x = 429.42;
		return t;
	};
	_proto.totalScore1_i = function () {
		var t = new eui.BitmapLabel();
		this.totalScore1 = t;
		t.font = "resultcoin_lose_fnt";
		t.text = "+999";
		t.verticalCenter = 1;
		t.x = 252.71;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "总成绩：";
		t.verticalCenter = 0.5;
		t.x = 141.45;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.width = 532;
		t.x = 20;
		t.y = 210;
		t.elementsContent = [this._Image6_i(),this.exit2_i(),this._Group7_i(),this.status2_i(),this.totalScore2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ttmj_total_item_png";
		t.width = 532;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exit2_i = function () {
		var t = new eui.Image();
		this.exit2 = t;
		t.source = "xll_game_json.game_result_qiangtui";
		t.verticalCenter = 25.5;
		t.x = 429.42;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 17.99;
		t.elementsContent = [this.headbox2_i(),this.nickname2_i()];
		return t;
	};
	_proto.headbox2_i = function () {
		var t = new eui.Group();
		this.headbox2 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.headImg2_i(),this._Image7_i(),this.roomown2_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomown2_i = function () {
		var t = new eui.Image();
		this.roomown2 = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xll_game_json.ttmj_tRoomowner";
		t.top = 0;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 86;
		t.y = 64.59;
		return t;
	};
	_proto.status2_i = function () {
		var t = new eui.Image();
		this.status2 = t;
		t.source = "xll_game_json.game_big_winner";
		t.x = 414.26;
		t.y = -8;
		return t;
	};
	_proto.totalScore2_i = function () {
		var t = new eui.BitmapLabel();
		this.totalScore2 = t;
		t.font = "resultcoin_lose_fnt";
		t.text = "+999";
		t.verticalCenter = 1;
		t.x = 252.71;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "总成绩：";
		t.verticalCenter = 0.5;
		t.x = 141.45;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 350;
		t.y = 13.65;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "xll_game_json.game_result_title";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_totalresult_title";
		t.y = 12.44;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 103;
		t.elementsContent = [this._Image10_i(),this.timer_i(),this.playcount_i(),this.fending_i(),this.roomPwdRule_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(13,14,14,15);
		t.source = "xll_game_json.game_result_bg";
		t.width = 800;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.timer_i = function () {
		var t = new eui.Label();
		this.timer = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "2018-10-10 10:10:10";
		t.textColor = 0xfbdea0;
		t.verticalCenter = 0.5;
		t.x = 530.29;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "局数：80";
		t.textColor = 0xfbdea0;
		t.verticalCenter = 0.5;
		t.x = 372.61;
		return t;
	};
	_proto.fending_i = function () {
		var t = new eui.Label();
		this.fending = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "500胡";
		t.textColor = 0xFBDEA0;
		t.verticalCenter = 0.5;
		t.x = 231.71;
		return t;
	};
	_proto.roomPwdRule_i = function () {
		var t = new eui.Label();
		this.roomPwdRule = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "房号：999999";
		t.textColor = 0xfbdea0;
		t.verticalCenter = 0;
		t.x = 18;
		return t;
	};
	_proto._label_kefu_i = function () {
		var t = new eui.Label();
		this._label_kefu = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "诚招代理，联系微信客服：XXX";
		t.width = 300;
		t.x = 30;
		t.y = 36.65;
		return t;
	};
	return totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/wanfa_hzmj.exml'] = window.wanfa_hzmj = (function (_super) {
	__extends(wanfa_hzmj, _super);
	function wanfa_hzmj() {
		_super.call(this);
		this.skinParts = ["bg","cont"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.bg_i(),this._Group2_i()];
	}
	var _proto = wanfa_hzmj.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 918;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(114,130,690,310);
		t.source = "jiesan_json.jiesanBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 396;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 839;
		t.y = 80;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.cont_i()];
		return t;
	};
	_proto.cont_i = function () {
		var t = new eui.Image();
		this.cont = t;
		t.left = 20;
		t.source = "rule_hzmj_png";
		t.y = 9;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_gz_title";
		t.y = 18;
		return t;
	};
	return wanfa_hzmj;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/watchingItem.exml'] = window.watchingItem = (function (_super) {
	__extends(watchingItem, _super);
	function watchingItem() {
		_super.call(this);
		this.skinParts = ["head0","nickname0","item0","head1","nickname1","item1","head2","nickname2","item2"];
		
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = watchingItem.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 194;
		t.elementsContent = [this._Image1_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,13,11,12);
		t.source = "xll_game_json.game_xiaoxi_huibg";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 6;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.nickname0_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this.head0_i(),this._Image2_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 63;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this.nickname1_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this.head1_i(),this._Image3_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 126;
		t.y = 0;
		t.elementsContent = [this._Group3_i(),this.nickname2_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.y = 0;
		t.elementsContent = [this.head2_i(),this._Image4_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.height = 31;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "xll_game_json.game_xiaoxi_headkuang";
		t.verticalCenter = 0;
		t.width = 35;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 13;
		t.horizontalCenter = 0;
		t.size = 13;
		t.text = "喜来乐";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	return watchingItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/czNotice.exml'] = window.czNotice = (function (_super) {
	__extends(czNotice, _super);
	function czNotice() {
		_super.call(this);
		this.skinParts = ["content","confirm","cancel","mianban"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.mianban_i()];
	}
	var _proto = czNotice.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mianban_i = function () {
		var t = new eui.Group();
		this.mianban = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.content_i(),this.confirm_i(),this.cancel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tishi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 186;
		t.horizontalCenter = 3.5;
		t.lineSpacing = 8;
		t.size = 25;
		t.text = "有游戏囧事打飞机顽皮偶尔感觉咩咩叫纳入规划in鹅肉共河内然后呢容纳后IE男人很";
		t.textAlign = "left";
		t.textColor = 0x311749;
		t.verticalAlign = "middle";
		t.width = 500;
		t.y = 86;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Image();
		this.confirm = t;
		t.source = "yes_xiao_png";
		t.x = 93;
		t.y = 316;
		return t;
	};
	_proto.cancel_i = function () {
		var t = new eui.Image();
		this.cancel = t;
		t.source = "quxiao_png";
		t.x = 300;
		t.y = 316;
		return t;
	};
	return czNotice;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/disabled.exml'] = window.disabled = (function (_super) {
	__extends(disabled, _super);
	var disabled$Skin144 = 	(function (_super) {
		__extends(disabled$Skin144, _super);
		function disabled$Skin144() {
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
		var _proto = disabled$Skin144.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesanRefuse";
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
		return disabled$Skin144;
	})(eui.Skin);

	var disabled$Skin145 = 	(function (_super) {
		__extends(disabled$Skin145, _super);
		function disabled$Skin145() {
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
		var _proto = disabled$Skin145.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesanAgree";
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
		return disabled$Skin145;
	})(eui.Skin);

	function disabled() {
		_super.call(this);
		this.skinParts = ["jiesanDesc","daojiNum","statusBg0","nickname0","status0","head0","item0","statusBg1","nickname1","status1","head1","item1","statusBg2","nickname2","status2","head2","item2","statusBg3","nickname3","status3","head3","item3","statusBg4","nickname4","status4","head4","item4","refuse","agree"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.jiesanDesc_i(),this._Label1_i(),this.daojiNum_i(),this._Image3_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this._Group8_i(),this._Image10_i(),this._Image11_i()];
	}
	var _proto = disabled.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mengban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiesanBg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jiesanDesc_i = function () {
		var t = new eui.Label();
		this.jiesanDesc = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "玩家申请解散房间是否同意，全部玩家同意后房间会被解散。";
		t.textAlign = "center";
		t.textColor = 0x73678d;
		t.width = 750;
		t.y = 193;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "超过30秒未做选择，则默认同意";
		t.textColor = 0x73678d;
		t.x = 403;
		t.y = 228.35;
		return t;
	};
	_proto.daojiNum_i = function () {
		var t = new eui.Label();
		this.daojiNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "30";
		t.textAlign = "center";
		t.textColor = 0x73678d;
		t.width = 39;
		t.y = 139.2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_mid_bg";
		t.y = 274.77;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 216.6;
		t.y = 278.44;
		t.elementsContent = [this.statusBg0_i(),this.nickname0_i(),this.status0_i(),this._Group1_i()];
		return t;
	};
	_proto.statusBg0_i = function () {
		var t = new eui.Image();
		this.statusBg0 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_refuse";
		t.y = 143;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0x044900;
		t.width = 120;
		t.y = 108.35;
		return t;
	};
	_proto.status0_i = function () {
		var t = new eui.Label();
		this.status0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xdd0909;
		t.visible = false;
		t.y = 148.34;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this.head0_i(),this._Image4_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 360.6;
		t.y = 278.44;
		t.elementsContent = [this.statusBg1_i(),this.nickname1_i(),this.status1_i(),this._Group2_i()];
		return t;
	};
	_proto.statusBg1_i = function () {
		var t = new eui.Image();
		this.statusBg1 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_waiting";
		t.y = 143;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0x044900;
		t.width = 120;
		t.y = 108.35;
		return t;
	};
	_proto.status1_i = function () {
		var t = new eui.Label();
		this.status1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xDD0909;
		t.visible = false;
		t.y = 148.34;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this.head1_i(),this._Image5_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 506.6;
		t.y = 278.44;
		t.elementsContent = [this._Image6_i(),this.statusBg2_i(),this.nickname2_i(),this.status2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = -0.5;
		t.y = 0;
		return t;
	};
	_proto.statusBg2_i = function () {
		var t = new eui.Image();
		this.statusBg2 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_waiting";
		t.y = 143;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0x044900;
		t.width = 120;
		t.y = 108.35;
		return t;
	};
	_proto.status2_i = function () {
		var t = new eui.Label();
		this.status2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xDD0909;
		t.visible = false;
		t.y = 148.34;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this.head2_i(),this._Image7_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.x = 650.6;
		t.y = 278.44;
		t.elementsContent = [this.statusBg3_i(),this.nickname3_i(),this.status3_i(),this._Group4_i()];
		return t;
	};
	_proto.statusBg3_i = function () {
		var t = new eui.Image();
		this.statusBg3 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_waiting";
		t.y = 143;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0x044900;
		t.width = 120;
		t.y = 108.35;
		return t;
	};
	_proto.status3_i = function () {
		var t = new eui.Label();
		this.status3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xDD0909;
		t.visible = false;
		t.y = 148.34;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this.head3_i(),this._Image8_i()];
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.x = 796.6;
		t.y = 278.44;
		t.elementsContent = [this.statusBg4_i(),this.nickname4_i(),this.status4_i(),this._Group5_i()];
		return t;
	};
	_proto.statusBg4_i = function () {
		var t = new eui.Image();
		this.statusBg4 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_waiting";
		t.y = 143;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0x044900;
		t.width = 120;
		t.y = 108.35;
		return t;
	};
	_proto.status4_i = function () {
		var t = new eui.Label();
		this.status4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xDD0909;
		t.visible = false;
		t.y = 148.34;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this.head4_i(),this._Image9_i()];
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Image();
		this.head4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 475.02;
		t.elementsContent = [this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 278.67;
		t.elementsContent = [this.refuse_i()];
		return t;
	};
	_proto.refuse_i = function () {
		var t = new eui.Button();
		this.refuse = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = disabled$Skin144;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 0;
		t.elementsContent = [this.agree_i()];
		return t;
	};
	_proto.agree_i = function () {
		var t = new eui.Button();
		this.agree = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = disabled$Skin145;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "disbandClock";
		t.y = 126.67;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_title";
		t.y = 68;
		return t;
	};
	return disabled;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/myInfo.exml'] = window.myInfo = (function (_super) {
	__extends(myInfo, _super);
	function myInfo() {
		_super.call(this);
		this.skinParts = ["menban","nickname","headImg","id","ip","localImg5_1_4","localTxt5_1_4","localGroup5_1_4","localImg5_2_3","localTxt5_2_3","localGroup5_2_3","localImg5_2_4","localTxt5_2_4","localGroup5_2_4","localImg5_0_2","localTxt5_0_2","localGroup5_0_2","localImg5_0_3","localTxt5_0_3","localGroup5_0_3","localImg5_1_3","localTxt5_1_3","localGroup5_1_3","localImg5_0_4","localTxt5_0_4","localGroup5_0_4","localImg5_0_1","localTxt5_0_1","localGroup5_0_1","localImg5_1_2","localTxt5_1_2","localGroup5_1_2","localImg5_3_4","localTxt5_3_4","localGroup5_3_4","headImg5_0","headImg5_1","headImg5_2","headImg5_3","headImg5_4","LocalGroup5","localImg4_1_4","localTxt4_1_4","localGroup4_1_4","localImg4_2_4","localTxt4_2_4","localGroup4_2_4","localImg4_0_2","localTxt4_0_2","localGroup4_0_2","localImg4_0_4","localTxt4_0_4","localGroup4_0_4","localImg4_0_1","localTxt4_0_1","localGroup4_0_1","localImg4_1_2","localTxt4_1_2","localGroup4_1_2","headImg4_0","headImg4_1","headImg4_2","headImg4_4","LocalGroup4","localImg3_2_4","localTxt3_2_4","localGroup3_2_4","localImg3_0_4","localTxt3_0_4","localGroup3_0_4","localImg3_0_2","localTxt3_0_2","localGroup3_0_2","headImg3_0","headImg3_2","headImg3_4","LocalGroup3","localImg5_0_10","localTxt5_0_10","localGroup0_2","headImg2_0","headImg2_2","LocalGroup2"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.menban_i(),this._Image1_i(),this.nickname_i(),this._Group1_i(),this.id_i(),this.ip_i(),this.LocalGroup5_i(),this.LocalGroup4_i(),this.LocalGroup3_i(),this.LocalGroup2_i()];
	}
	var _proto = myInfo.prototype;

	_proto.menban_i = function () {
		var t = new eui.Image();
		this.menban = t;
		t.source = "mengban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss_myinfo_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "喜来乐";
		t.textColor = 0x050505;
		t.width = 150;
		t.x = 538.91;
		t.y = 125.33;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 383.73;
		t.y = 119.6;
		t.elementsContent = [this._Image2_i(),this.headImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.source = "otherInfoKuang_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 96;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.width = 96;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.id_i = function () {
		var t = new eui.Label();
		this.id = t;
		t.size = 25;
		t.text = "666666";
		t.textColor = 0x000000;
		t.x = 538.91;
		t.y = 161.9;
		return t;
	};
	_proto.ip_i = function () {
		var t = new eui.Label();
		this.ip = t;
		t.size = 25;
		t.text = "192.111.112.12";
		t.textColor = 0x000000;
		t.x = 538.91;
		t.y = 199.6;
		return t;
	};
	_proto.LocalGroup5_i = function () {
		var t = new eui.Group();
		this.LocalGroup5 = t;
		t.x = 362.73;
		t.y = 254;
		t.elementsContent = [this.localGroup5_1_4_i(),this.localGroup5_2_3_i(),this.localGroup5_2_4_i(),this.localGroup5_0_2_i(),this.localGroup5_0_3_i(),this.localGroup5_1_3_i(),this.localGroup5_0_4_i(),this.localGroup5_0_1_i(),this.localGroup5_1_2_i(),this.localGroup5_3_4_i(),this.headImg5_0_i(),this.headImg5_1_i(),this.headImg5_2_i(),this.headImg5_3_i(),this.headImg5_4_i()];
		return t;
	};
	_proto.localGroup5_1_4_i = function () {
		var t = new eui.Group();
		this.localGroup5_1_4 = t;
		t.visible = false;
		t.x = 50.27;
		t.y = 140;
		t.elementsContent = [this.localImg5_1_4_i(),this.localTxt5_1_4_i()];
		return t;
	};
	_proto.localImg5_1_4_i = function () {
		var t = new eui.Image();
		this.localImg5_1_4 = t;
		t.scaleX = 0.85;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_1_4_i = function () {
		var t = new eui.Label();
		this.localTxt5_1_4 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 0;
		return t;
	};
	_proto.localGroup5_2_3_i = function () {
		var t = new eui.Group();
		this.localGroup5_2_3 = t;
		t.visible = false;
		t.x = 120.27;
		t.y = 10.5;
		t.elementsContent = [this.localImg5_2_3_i(),this.localTxt5_2_3_i()];
		return t;
	};
	_proto.localImg5_2_3_i = function () {
		var t = new eui.Image();
		this.localImg5_2_3 = t;
		t.scaleX = 0.4;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_2_3_i = function () {
		var t = new eui.Label();
		this.localTxt5_2_3 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 0;
		return t;
	};
	_proto.localGroup5_2_4_i = function () {
		var t = new eui.Group();
		this.localGroup5_2_4 = t;
		t.rotation = -30;
		t.visible = false;
		t.x = 37.27;
		t.y = 144;
		t.elementsContent = [this.localImg5_2_4_i(),this.localTxt5_2_4_i()];
		return t;
	};
	_proto.localImg5_2_4_i = function () {
		var t = new eui.Image();
		this.localImg5_2_4 = t;
		t.scaleX = 0.8;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_2_4_i = function () {
		var t = new eui.Label();
		this.localTxt5_2_4 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 33.77;
		t.y = 1.04;
		return t;
	};
	_proto.localGroup5_0_2_i = function () {
		var t = new eui.Group();
		this.localGroup5_0_2 = t;
		t.rotation = 110;
		t.visible = false;
		t.x = 269.31;
		t.y = 54.32;
		t.elementsContent = [this.localImg5_0_2_i(),this.localTxt5_0_2_i()];
		return t;
	};
	_proto.localImg5_0_2_i = function () {
		var t = new eui.Image();
		this.localImg5_0_2 = t;
		t.scaleX = 0.7;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_0_2_i = function () {
		var t = new eui.Label();
		this.localTxt5_0_2 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 134.04;
		t.y = 2.67;
		return t;
	};
	_proto.localGroup5_0_3_i = function () {
		var t = new eui.Group();
		this.localGroup5_0_3 = t;
		t.rotation = 80;
		t.visible = false;
		t.x = 142.6;
		t.y = 36.45;
		t.elementsContent = [this.localImg5_0_3_i(),this.localTxt5_0_3_i()];
		return t;
	};
	_proto.localImg5_0_3_i = function () {
		var t = new eui.Image();
		this.localImg5_0_3 = t;
		t.scaleX = 0.7;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_0_3_i = function () {
		var t = new eui.Label();
		this.localTxt5_0_3 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 135.1;
		t.y = -0.04;
		return t;
	};
	_proto.localGroup5_1_3_i = function () {
		var t = new eui.Group();
		this.localGroup5_1_3 = t;
		t.rotation = 35;
		t.visible = false;
		t.x = 136.27;
		t.y = 17;
		t.elementsContent = [this.localImg5_1_3_i(),this.localTxt5_1_3_i()];
		return t;
	};
	_proto.localImg5_1_3_i = function () {
		var t = new eui.Image();
		this.localImg5_1_3 = t;
		t.scaleX = 0.75;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_1_3_i = function () {
		var t = new eui.Label();
		this.localTxt5_1_3 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 122.83;
		t.y = 1.88;
		return t;
	};
	_proto.localGroup5_0_4_i = function () {
		var t = new eui.Group();
		this.localGroup5_0_4 = t;
		t.rotation = 35;
		t.visible = false;
		t.x = 62.27;
		t.y = 153;
		t.elementsContent = [this.localImg5_0_4_i(),this.localTxt5_0_4_i()];
		return t;
	};
	_proto.localImg5_0_4_i = function () {
		var t = new eui.Image();
		this.localImg5_0_4 = t;
		t.scaleX = 0.45;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_0_4_i = function () {
		var t = new eui.Label();
		this.localTxt5_0_4 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 18.93;
		t.y = 4.94;
		return t;
	};
	_proto.localGroup5_0_1_i = function () {
		var t = new eui.Group();
		this.localGroup5_0_1 = t;
		t.rotation = -35;
		t.visible = false;
		t.x = 188.27;
		t.y = 227.61;
		t.elementsContent = [this.localImg5_0_1_i(),this.localTxt5_0_1_i()];
		return t;
	};
	_proto.localImg5_0_1_i = function () {
		var t = new eui.Image();
		this.localImg5_0_1 = t;
		t.scaleX = 0.45;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_0_1_i = function () {
		var t = new eui.Label();
		this.localTxt5_0_1 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 18.93;
		t.y = 4.94;
		return t;
	};
	_proto.localGroup5_1_2_i = function () {
		var t = new eui.Group();
		this.localGroup5_1_2 = t;
		t.rotation = 60;
		t.visible = false;
		t.x = 267.22;
		t.y = 36.16;
		t.elementsContent = [this.localImg5_1_2_i(),this.localTxt5_1_2_i()];
		return t;
	};
	_proto.localImg5_1_2_i = function () {
		var t = new eui.Image();
		this.localImg5_1_2 = t;
		t.scaleX = 0.4;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_1_2_i = function () {
		var t = new eui.Label();
		this.localTxt5_1_2 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 18.93;
		t.y = 4.94;
		return t;
	};
	_proto.localGroup5_3_4_i = function () {
		var t = new eui.Group();
		this.localGroup5_3_4 = t;
		t.rotation = -60;
		t.visible = false;
		t.x = 29.22;
		t.y = 142.16;
		t.elementsContent = [this.localImg5_3_4_i(),this.localTxt5_3_4_i()];
		return t;
	};
	_proto.localImg5_3_4_i = function () {
		var t = new eui.Image();
		this.localImg5_3_4 = t;
		t.scaleX = 0.4;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_3_4_i = function () {
		var t = new eui.Label();
		this.localTxt5_3_4 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 18.93;
		t.y = 4.94;
		return t;
	};
	_proto.headImg5_0_i = function () {
		var t = new eui.Image();
		this.headImg5_0 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.visible = false;
		t.width = 96;
		t.x = 153.27;
		t.y = 242;
		return t;
	};
	_proto.headImg5_1_i = function () {
		var t = new eui.Image();
		this.headImg5_1 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.visible = false;
		t.width = 96;
		t.x = 302.18;
		t.y = 136;
		return t;
	};
	_proto.headImg5_2_i = function () {
		var t = new eui.Image();
		this.headImg5_2 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.visible = false;
		t.width = 96;
		t.x = 224.25;
		t.y = 0;
		return t;
	};
	_proto.headImg5_3_i = function () {
		var t = new eui.Image();
		this.headImg5_3 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.visible = false;
		t.width = 96;
		t.x = 82;
		t.y = 0;
		return t;
	};
	_proto.headImg5_4_i = function () {
		var t = new eui.Image();
		this.headImg5_4 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.visible = false;
		t.width = 96;
		t.x = 5;
		t.y = 136;
		return t;
	};
	_proto.LocalGroup4_i = function () {
		var t = new eui.Group();
		this.LocalGroup4 = t;
		t.x = 362.73;
		t.y = 254;
		t.elementsContent = [this.localGroup4_1_4_i(),this.localGroup4_2_4_i(),this.localGroup4_0_2_i(),this.localGroup4_0_4_i(),this.localGroup4_0_1_i(),this.localGroup4_1_2_i(),this.headImg4_0_i(),this.headImg4_1_i(),this.headImg4_2_i(),this.headImg4_4_i()];
		return t;
	};
	_proto.localGroup4_1_4_i = function () {
		var t = new eui.Group();
		this.localGroup4_1_4 = t;
		t.x = 50.27;
		t.y = 126;
		t.elementsContent = [this.localImg4_1_4_i(),this.localTxt4_1_4_i()];
		return t;
	};
	_proto.localImg4_1_4_i = function () {
		var t = new eui.Image();
		this.localImg4_1_4 = t;
		t.scaleX = 0.85;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt4_1_4_i = function () {
		var t = new eui.Label();
		this.localTxt4_1_4 = t;
		t.horizontalCenter = -61.5;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 0;
		return t;
	};
	_proto.localGroup4_2_4_i = function () {
		var t = new eui.Group();
		this.localGroup4_2_4 = t;
		t.rotation = -35;
		t.x = 11.27;
		t.y = 124;
		t.elementsContent = [this.localImg4_2_4_i(),this.localTxt4_2_4_i()];
		return t;
	};
	_proto.localImg4_2_4_i = function () {
		var t = new eui.Image();
		this.localImg4_2_4 = t;
		t.scaleX = 0.6;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt4_2_4_i = function () {
		var t = new eui.Label();
		this.localTxt4_2_4 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 1.04;
		return t;
	};
	_proto.localGroup4_0_2_i = function () {
		var t = new eui.Group();
		this.localGroup4_0_2 = t;
		t.rotation = 90;
		t.x = 196.31;
		t.y = 38.32;
		t.elementsContent = [this.localImg4_0_2_i(),this.localTxt4_0_2_i()];
		return t;
	};
	_proto.localImg4_0_2_i = function () {
		var t = new eui.Image();
		this.localImg4_0_2 = t;
		t.scaleX = 0.7;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt4_0_2_i = function () {
		var t = new eui.Label();
		this.localTxt4_0_2 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 117.04;
		t.y = 2.67;
		return t;
	};
	_proto.localGroup4_0_4_i = function () {
		var t = new eui.Group();
		this.localGroup4_0_4 = t;
		t.rotation = 35;
		t.x = 42.27;
		t.y = 136;
		t.elementsContent = [this.localImg4_0_4_i(),this.localTxt4_0_4_i()];
		return t;
	};
	_proto.localImg4_0_4_i = function () {
		var t = new eui.Image();
		this.localImg4_0_4 = t;
		t.scaleX = 0.6;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt4_0_4_i = function () {
		var t = new eui.Label();
		this.localTxt4_0_4 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 1.99;
		return t;
	};
	_proto.localGroup4_0_1_i = function () {
		var t = new eui.Group();
		this.localGroup4_0_1 = t;
		t.rotation = -35;
		t.x = 186.27;
		t.y = 221.61;
		t.elementsContent = [this.localImg4_0_1_i(),this.localTxt4_0_1_i()];
		return t;
	};
	_proto.localImg4_0_1_i = function () {
		var t = new eui.Image();
		this.localImg4_0_1 = t;
		t.scaleX = 0.45;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt4_0_1_i = function () {
		var t = new eui.Label();
		this.localTxt4_0_1 = t;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.x = 18.93;
		t.y = 4.94;
		return t;
	};
	_proto.localGroup4_1_2_i = function () {
		var t = new eui.Group();
		this.localGroup4_1_2 = t;
		t.rotation = 35;
		t.x = 185.22;
		t.y = 18.16;
		t.elementsContent = [this.localImg4_1_2_i(),this.localTxt4_1_2_i()];
		return t;
	};
	_proto.localImg4_1_2_i = function () {
		var t = new eui.Image();
		this.localImg4_1_2 = t;
		t.scaleX = 0.6;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt4_1_2_i = function () {
		var t = new eui.Label();
		this.localTxt4_1_2 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 2.11;
		return t;
	};
	_proto.headImg4_0_i = function () {
		var t = new eui.Image();
		this.headImg4_0 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.width = 96;
		t.x = 153.27;
		t.y = 242;
		return t;
	};
	_proto.headImg4_1_i = function () {
		var t = new eui.Image();
		this.headImg4_1 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = 0;
		t.width = 96;
		t.x = 302.18;
		return t;
	};
	_proto.headImg4_2_i = function () {
		var t = new eui.Image();
		this.headImg4_2 = t;
		t.height = 96;
		t.horizontalCenter = -2.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.width = 96;
		t.y = 0;
		return t;
	};
	_proto.headImg4_4_i = function () {
		var t = new eui.Image();
		this.headImg4_4 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = 0;
		t.width = 96;
		t.x = 5;
		return t;
	};
	_proto.LocalGroup3_i = function () {
		var t = new eui.Group();
		this.LocalGroup3 = t;
		t.x = 362.73;
		t.y = 255;
		t.elementsContent = [this.localGroup3_2_4_i(),this.localGroup3_0_4_i(),this.localGroup3_0_2_i(),this.headImg3_0_i(),this.headImg3_2_i(),this.headImg3_4_i()];
		return t;
	};
	_proto.localGroup3_2_4_i = function () {
		var t = new eui.Group();
		this.localGroup3_2_4 = t;
		t.visible = false;
		t.x = 50.27;
		t.y = 21;
		t.elementsContent = [this.localImg3_2_4_i(),this.localTxt3_2_4_i()];
		return t;
	};
	_proto.localImg3_2_4_i = function () {
		var t = new eui.Image();
		this.localImg3_2_4 = t;
		t.scaleX = 0.85;
		t.source = "sss_location_xu_png";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt3_2_4_i = function () {
		var t = new eui.Label();
		this.localTxt3_2_4 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 0;
		return t;
	};
	_proto.localGroup3_0_4_i = function () {
		var t = new eui.Group();
		this.localGroup3_0_4 = t;
		t.rotation = 60;
		t.visible = false;
		t.x = 71.27;
		t.y = 32;
		t.elementsContent = [this.localImg3_0_4_i(),this.localTxt3_0_4_i()];
		return t;
	};
	_proto.localImg3_0_4_i = function () {
		var t = new eui.Image();
		this.localImg3_0_4 = t;
		t.scaleX = 0.85;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt3_0_4_i = function () {
		var t = new eui.Label();
		this.localTxt3_0_4 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 1.99;
		return t;
	};
	_proto.localGroup3_0_2_i = function () {
		var t = new eui.Group();
		this.localGroup3_0_2 = t;
		t.rotation = -60;
		t.visible = false;
		t.x = 161.27;
		t.y = 248.61;
		t.elementsContent = [this.localImg3_0_2_i(),this.localTxt3_0_2_i()];
		return t;
	};
	_proto.localImg3_0_2_i = function () {
		var t = new eui.Image();
		this.localImg3_0_2 = t;
		t.scaleX = 0.85;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt3_0_2_i = function () {
		var t = new eui.Label();
		this.localTxt3_0_2 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 4.94;
		return t;
	};
	_proto.headImg3_0_i = function () {
		var t = new eui.Image();
		this.headImg3_0 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.visible = false;
		t.width = 96;
		t.x = 153.27;
		t.y = 232;
		return t;
	};
	_proto.headImg3_2_i = function () {
		var t = new eui.Image();
		this.headImg3_2 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -107;
		t.visible = false;
		t.width = 96;
		t.x = 302.18;
		return t;
	};
	_proto.headImg3_4_i = function () {
		var t = new eui.Image();
		this.headImg3_4 = t;
		t.height = 96;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -107;
		t.visible = false;
		t.width = 96;
		t.x = 5;
		return t;
	};
	_proto.LocalGroup2_i = function () {
		var t = new eui.Group();
		this.LocalGroup2 = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 257;
		t.elementsContent = [this.localGroup0_2_i(),this.headImg2_0_i(),this.headImg2_2_i()];
		return t;
	};
	_proto.localGroup0_2_i = function () {
		var t = new eui.Group();
		this.localGroup0_2 = t;
		t.rotation = 90;
		t.x = 42.98;
		t.y = 17;
		t.elementsContent = [this.localImg5_0_10_i(),this.localTxt5_0_10_i()];
		return t;
	};
	_proto.localImg5_0_10_i = function () {
		var t = new eui.Image();
		this.localImg5_0_10 = t;
		t.scaleX = 0.85;
		t.source = "sss_location_xu_png";
		t.width = 300;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.localTxt5_0_10_i = function () {
		var t = new eui.Label();
		this.localTxt5_0_10 = t;
		t.horizontalCenter = -2.5;
		t.rotation = -90;
		t.size = 18;
		t.text = "9999km";
		t.textColor = 0x777676;
		t.y = 15.94;
		return t;
	};
	_proto.headImg2_0_i = function () {
		var t = new eui.Image();
		this.headImg2_0 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.width = 96;
		t.y = 232;
		return t;
	};
	_proto.headImg2_2_i = function () {
		var t = new eui.Image();
		this.headImg2_2 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.top = 0;
		t.visible = false;
		t.width = 96;
		return t;
	};
	return myInfo;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/newMessage.exml'] = window.newMessage = (function (_super) {
	__extends(newMessage, _super);
	function newMessage() {
		_super.call(this);
		this.skinParts = ["menban","wenziButton","biaoqingButton","biao1","biao2","biao3","biao4","biao5","biao6","biao7","biao8","biao9","biao10","biao11","biao12","biao13","biao14","biao15","biaoqing","message1","message2","message3","message4","message5","message6","message7","message8","message9","message10","wenzi"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.menban_i(),this._Group3_i()];
	}
	var _proto = newMessage.prototype;

	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.height = 640;
		t.strokeAlpha = 0;
		t.width = 1136;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.y = 238.15;
		t.elementsContent = [this._Image1_i(),this.wenziButton_i(),this.biaoqingButton_i(),this.biaoqing_i(),this.wenzi_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "kxmh_messageBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wenziButton_i = function () {
		var t = new eui.Image();
		this.wenziButton = t;
		t.source = "kxmh_textmsg2";
		t.x = 8;
		t.y = 11.82;
		return t;
	};
	_proto.biaoqingButton_i = function () {
		var t = new eui.Image();
		this.biaoqingButton = t;
		t.source = "kxmh_biaoqingmsg";
		t.x = 8;
		t.y = 206.52;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Scroller();
		this.biaoqing = t;
		t.anchorOffsetX = 0;
		t.scrollPolicyH = "off";
		t.visible = false;
		t.width = 301;
		t.x = 82.67;
		t.y = 26;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 348;
		t.width = 301;
		t.x = -19;
		t.elementsContent = [this.biao1_i(),this.biao2_i(),this.biao3_i(),this.biao4_i(),this.biao5_i(),this.biao6_i(),this.biao7_i(),this.biao8_i(),this.biao9_i(),this.biao10_i(),this.biao11_i(),this.biao12_i(),this.biao13_i(),this.biao14_i(),this.biao15_i()];
		return t;
	};
	_proto.biao1_i = function () {
		var t = new eui.Image();
		this.biao1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1_png";
		t.y = 0;
		return t;
	};
	_proto.biao2_i = function () {
		var t = new eui.Image();
		this.biao2 = t;
		t.height = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2_png";
		t.width = 83;
		t.x = 218;
		t.y = -1;
		return t;
	};
	_proto.biao3_i = function () {
		var t = new eui.Image();
		this.biao3 = t;
		t.height = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "3_png";
		t.width = 83;
		t.x = 0;
		t.y = 98;
		return t;
	};
	_proto.biao4_i = function () {
		var t = new eui.Image();
		this.biao4 = t;
		t.height = 84;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "4_png";
		t.width = 83;
		t.y = 101.67;
		return t;
	};
	_proto.biao5_i = function () {
		var t = new eui.Image();
		this.biao5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "5_png";
		t.x = 220;
		t.y = 103;
		return t;
	};
	_proto.biao6_i = function () {
		var t = new eui.Image();
		this.biao6 = t;
		t.height = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "6_png";
		t.visible = false;
		t.width = 83;
		t.x = 219.99;
		t.y = 100;
		return t;
	};
	_proto.biao7_i = function () {
		var t = new eui.Image();
		this.biao7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "7_png";
		t.x = 5;
		t.y = 203;
		return t;
	};
	_proto.biao8_i = function () {
		var t = new eui.Image();
		this.biao8 = t;
		t.source = "8_png";
		t.x = 108;
		t.y = 201;
		return t;
	};
	_proto.biao9_i = function () {
		var t = new eui.Image();
		this.biao9 = t;
		t.source = "9_png";
		t.x = 215;
		t.y = 211;
		return t;
	};
	_proto.biao10_i = function () {
		var t = new eui.Image();
		this.biao10 = t;
		t.source = "10_png";
		t.x = 2.33;
		t.y = 0;
		return t;
	};
	_proto.biao11_i = function () {
		var t = new eui.Image();
		this.biao11 = t;
		t.source = "11_png";
		t.x = 113;
		t.y = 289;
		return t;
	};
	_proto.biao12_i = function () {
		var t = new eui.Image();
		this.biao12 = t;
		t.source = "12_png";
		t.x = 219.98;
		t.y = 288;
		return t;
	};
	_proto.biao13_i = function () {
		var t = new eui.Image();
		this.biao13 = t;
		t.source = "13_png";
		t.visible = false;
		t.x = 5.65;
		t.y = 370.31;
		return t;
	};
	_proto.biao14_i = function () {
		var t = new eui.Image();
		this.biao14 = t;
		t.source = "14_png";
		t.visible = false;
		t.x = 113.35;
		t.y = 375.34;
		return t;
	};
	_proto.biao15_i = function () {
		var t = new eui.Image();
		this.biao15 = t;
		t.source = "15_png";
		t.x = 0;
		t.y = 284;
		return t;
	};
	_proto.wenzi_i = function () {
		var t = new eui.Scroller();
		this.wenzi = t;
		t.anchorOffsetX = 0;
		t.scrollPolicyH = "off";
		t.width = 301;
		t.x = 84.66;
		t.y = 22.67;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 348;
		t.width = 301;
		t.x = -19;
		t.elementsContent = [this.message1_i(),this.message2_i(),this.message3_i(),this.message4_i(),this.message5_i(),this.message6_i(),this.message7_i(),this.message8_i(),this.message9_i(),this.message10_i()];
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Label();
		this.message1 = t;
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "你太牛了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 50;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Label();
		this.message2 = t;
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "哈哈,手气真好";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 90;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Label();
		this.message3 = t;
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "快点出牌呦";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 130;
		return t;
	};
	_proto.message4_i = function () {
		var t = new eui.Label();
		this.message4 = t;
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "今天真高兴";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 130;
		return t;
	};
	_proto.message5_i = function () {
		var t = new eui.Label();
		this.message5 = t;
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "你家里是开银行的吧";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 170;
		return t;
	};
	_proto.message6_i = function () {
		var t = new eui.Label();
		this.message6 = t;
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "不好意思我有事要先走一步了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 210;
		return t;
	};
	_proto.message7_i = function () {
		var t = new eui.Label();
		this.message7 = t;
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "你的牌打得太好了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 250;
		return t;
	};
	_proto.message8_i = function () {
		var t = new eui.Label();
		this.message8 = t;
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "大家好,很高兴见到各位";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 290;
		return t;
	};
	_proto.message9_i = function () {
		var t = new eui.Label();
		this.message9 = t;
		t.background = false;
		t.backgroundColor = 0x3A3A3A;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 330;
		return t;
	};
	_proto.message10_i = function () {
		var t = new eui.Label();
		this.message10 = t;
		t.background = false;
		t.backgroundColor = 0x000000;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "打牌快点吧,都要睡着了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 10;
		return t;
	};
	return newMessage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/playerInfo.exml'] = window.playerInfo = (function (_super) {
	__extends(playerInfo, _super);
	function playerInfo() {
		_super.call(this);
		this.skinParts = ["menban","bunengyong0","ani0","bunengyong1","ani1","bunengyong2","ani2","bunengyong3","ani3","bunengyong4","ani4","nickname","headImg","id","ip"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.menban_i(),this._Image1_i(),this._Image2_i(),this._Group6_i(),this.nickname_i(),this.headImg_i(),this.id_i(),this.ip_i()];
	}
	var _proto = playerInfo.prototype;

	_proto.menban_i = function () {
		var t = new eui.Image();
		this.menban = t;
		t.source = "mengban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 223;
		t.horizontalCenter = 0;
		t.source = "sfp_otherInfoDi_png";
		t.verticalCenter = 0;
		t.width = 418;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "otherInfoKuang_png";
		t.x = 368.31;
		t.y = 236;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 343.67;
		t.elementsContent = [this.ani0_i(),this.ani1_i(),this.ani2_i(),this.ani3_i(),this.ani4_i()];
		return t;
	};
	_proto.ani0_i = function () {
		var t = new eui.Group();
		this.ani0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Group1_i(),this.bunengyong0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "aniKuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "donghicon10_png";
		t.width = 63;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "public_icon_zuanshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "X1";
		t.textColor = 0xffffff;
		t.verticalCenter = 0.5;
		t.x = 41.34;
		return t;
	};
	_proto.bunengyong0_i = function () {
		var t = new eui.Rect();
		this.bunengyong0 = t;
		t.fillAlpha = 0.8;
		t.fillColor = 0x595959;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.ani1_i = function () {
		var t = new eui.Group();
		this.ani1 = t;
		t.x = 75;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Group2_i(),this.bunengyong1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "aniKuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "donghicon11_png";
		t.width = 63;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image8_i(),this._Label2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "public_icon_zuanshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "X1";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0.5;
		t.x = 41.34;
		return t;
	};
	_proto.bunengyong1_i = function () {
		var t = new eui.Rect();
		this.bunengyong1 = t;
		t.fillAlpha = 0.8;
		t.fillColor = 0x595959;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.ani2_i = function () {
		var t = new eui.Group();
		this.ani2 = t;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Group3_i(),this.bunengyong2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "aniKuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "donghicon14_png";
		t.width = 63;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image11_i(),this._Label3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "public_icon_zuanshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "X1";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0.5;
		t.x = 41.34;
		return t;
	};
	_proto.bunengyong2_i = function () {
		var t = new eui.Rect();
		this.bunengyong2 = t;
		t.fillAlpha = 0.8;
		t.fillColor = 0x595959;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.ani3_i = function () {
		var t = new eui.Group();
		this.ani3 = t;
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Group4_i(),this.bunengyong3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "aniKuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "donghicon9_png";
		t.width = 63;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image14_i(),this._Label4_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "public_icon_zuanshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "X1";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0.5;
		t.x = 41.34;
		return t;
	};
	_proto.bunengyong3_i = function () {
		var t = new eui.Rect();
		this.bunengyong3 = t;
		t.fillAlpha = 0.8;
		t.fillColor = 0x595959;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.ani4_i = function () {
		var t = new eui.Group();
		this.ani4 = t;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Group5_i(),this.bunengyong4_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "aniKuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "donghicon8_png";
		t.width = 63;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image17_i(),this._Label5_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "public_icon_zuanshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "X1";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0.5;
		t.x = 41.34;
		return t;
	};
	_proto.bunengyong4_i = function () {
		var t = new eui.Rect();
		this.bunengyong4 = t;
		t.fillAlpha = 0.8;
		t.fillColor = 0x595959;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "喜来乐";
		t.textColor = 0x050505;
		t.width = 150;
		t.x = 483;
		t.y = 235.33;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 76;
		t.source = "666662_png";
		t.width = 76;
		t.x = 370.31;
		t.y = 238;
		return t;
	};
	_proto.id_i = function () {
		var t = new eui.Label();
		this.id = t;
		t.size = 25;
		t.text = "666666";
		t.textColor = 0x000000;
		t.x = 484;
		t.y = 265.5;
		return t;
	};
	_proto.ip_i = function () {
		var t = new eui.Label();
		this.ip = t;
		t.size = 25;
		t.text = "192.111.112.12";
		t.textColor = 0x000000;
		t.x = 482;
		t.y = 293;
		return t;
	};
	return playerInfo;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/roomLifeUI.exml'] = window.roomLifeUI = (function (_super) {
	__extends(roomLifeUI, _super);
	function roomLifeUI() {
		_super.call(this);
		this.skinParts = ["contentText"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = roomLifeUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.contentText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ingameTip_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.contentText_i = function () {
		var t = new eui.Label();
		this.contentText = t;
		t.horizontalCenter = 0;
		t.text = "9999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return roomLifeUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/setting.exml'] = window.setting = (function (_super) {
	__extends(setting, _super);
	function setting() {
		_super.call(this);
		this.skinParts = ["m_mengban","bgMusic","zb","bgAudio"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_mengban_i(),this._Group4_i()];
	}
	var _proto = setting.prototype;

	_proto.m_mengban_i = function () {
		var t = new eui.Image();
		this.m_mengban = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 558;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_shezhi_json.public_tishi_bg";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 1;
		t.width = 276;
		t.y = 70.64;
		t.elementsContent = [this._Image2_i(),this.bgMusic_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_shezhi_json.public_music_title";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.bgMusic_i = function () {
		var t = new eui.Image();
		this.bgMusic = t;
		t.source = "xll_shezhi_json.public_lord_game_setting_checked";
		t.verticalCenter = 0.5;
		t.x = 150;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.width = 276;
		t.y = 147.51;
		t.elementsContent = [this.zb_i(),this.bgAudio_i()];
		return t;
	};
	_proto.zb_i = function () {
		var t = new eui.Image();
		this.zb = t;
		t.source = "xll_shezhi_json.public_audio_title";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.bgAudio_i = function () {
		var t = new eui.Image();
		this.bgAudio = t;
		t.source = "xll_shezhi_json.public_lord_game_setting_checked";
		t.verticalCenter = 0;
		t.x = 150;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -46.09;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_shezhi_json.public_tankuang_title_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_shezhi_json.public_tankuang_set_title";
		t.y = 33.35;
		return t;
	};
	return setting;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/waiting.exml'] = window.waiting = (function (_super) {
	__extends(waiting, _super);
	function waiting() {
		_super.call(this);
		this.skinParts = ["BJ","bigju"];
		
		this.elementsContent = [this.bigju_i()];
	}
	var _proto = waiting.prototype;

	_proto.bigju_i = function () {
		var t = new eui.Group();
		this.bigju = t;
		t.x = 0;
		t.y = -5;
		t.elementsContent = [this._Image1_i(),this.BJ_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mengban_png";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.BJ_i = function () {
		var t = new eui.Image();
		this.BJ = t;
		t.horizontalCenter = 0;
		t.source = "clubJuhua";
		t.verticalCenter = 0;
		return t;
	};
	return waiting;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shop/shopIndex.exml'] = window.shopIndex = (function (_super) {
	__extends(shopIndex, _super);
	var shopIndex$Skin146 = 	(function (_super) {
		__extends(shopIndex$Skin146, _super);
		function shopIndex$Skin146() {
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
		var _proto = shopIndex$Skin146.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.shop_Button_btn";
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
		return shopIndex$Skin146;
	})(eui.Skin);

	var shopIndex$Skin147 = 	(function (_super) {
		__extends(shopIndex$Skin147, _super);
		function shopIndex$Skin147() {
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
		var _proto = shopIndex$Skin147.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.shop_Button_btn";
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
		return shopIndex$Skin147;
	})(eui.Skin);

	var shopIndex$Skin148 = 	(function (_super) {
		__extends(shopIndex$Skin148, _super);
		function shopIndex$Skin148() {
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
		var _proto = shopIndex$Skin148.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.shop_Button_btn";
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
		return shopIndex$Skin148;
	})(eui.Skin);

	var shopIndex$Skin149 = 	(function (_super) {
		__extends(shopIndex$Skin149, _super);
		function shopIndex$Skin149() {
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
		var _proto = shopIndex$Skin149.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.shop_Button_btn";
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
		return shopIndex$Skin149;
	})(eui.Skin);

	var shopIndex$Skin150 = 	(function (_super) {
		__extends(shopIndex$Skin150, _super);
		function shopIndex$Skin150() {
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
		var _proto = shopIndex$Skin150.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.shop_Button_btn";
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
		return shopIndex$Skin150;
	})(eui.Skin);

	function shopIndex() {
		_super.call(this);
		this.skinParts = ["menban","zhushi","goodsIcon0","songIcon0","buyBtn0","goodsNum0","goods0","goodsIcon1","songIcon1","buyBtn1","goodsNum1","goods1","goodsIcon2","songIcon2","buyBtn2","goodsNum2","goods2","goodsIcon3","songIcon3","buyBtn3","goodsNum3","goods3","goodsIcon4","songIcon4","buyBtn4","goodsNum4","goods4","goodsGroup","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.menban_i(),this.mainContent_i()];
	}
	var _proto = shopIndex.prototype;

	_proto.menban_i = function () {
		var t = new eui.Image();
		this.menban = t;
		t.percentHeight = 100;
		t.horizontalCenter = 2;
		t.source = "xll_hall_json.hall_tankuang_hui_bg";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.verticalCenter = 0;
		t.x = 80;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.zhushi_i(),this.goodsGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hall_tankuang_yellow_bg_png";
		t.y = 30;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.shop_title_bg";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.shop_title_text";
		t.y = 0;
		return t;
	};
	_proto.zhushi_i = function () {
		var t = new eui.Label();
		this.zhushi = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "注：充值成功如遇到钻石没到账的情况，请刷新后再试，或者联系客服！";
		t.textColor = 0x7c7c7c;
		t.y = 127;
		return t;
	};
	_proto.goodsGroup_i = function () {
		var t = new eui.Group();
		this.goodsGroup = t;
		t.horizontalCenter = 0;
		t.y = 153.67;
		t.elementsContent = [this.goods0_i(),this.goods1_i(),this.goods2_i(),this.goods3_i(),this.goods4_i()];
		return t;
	};
	_proto.goods0_i = function () {
		var t = new eui.Group();
		this.goods0 = t;
		t.top = 0;
		t.x = 0;
		t.elementsContent = [this._Image4_i(),this.goodsIcon0_i(),this.songIcon0_i(),this.buyBtn0_i(),this.goodsNum0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.shop_goods_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsIcon0_i = function () {
		var t = new eui.Image();
		this.goodsIcon0 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.shop_zunashi_icon1";
		t.y = 50.68;
		return t;
	};
	_proto.songIcon0_i = function () {
		var t = new eui.Image();
		this.songIcon0 = t;
		t.right = 0;
		t.source = "xll_hall_json.shop_send_bg";
		t.top = 0;
		return t;
	};
	_proto.buyBtn0_i = function () {
		var t = new eui.Button();
		this.buyBtn0 = t;
		t.horizontalCenter = 0.5;
		t.label = "$10";
		t.y = 160.67;
		t.skinName = shopIndex$Skin146;
		return t;
	};
	_proto.goodsNum0_i = function () {
		var t = new eui.Label();
		this.goodsNum0 = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "x10";
		t.textColor = 0xad3d14;
		t.y = 101;
		return t;
	};
	_proto.goods1_i = function () {
		var t = new eui.Group();
		this.goods1 = t;
		t.top = 0;
		t.x = 160;
		t.elementsContent = [this._Image5_i(),this.goodsIcon1_i(),this.songIcon1_i(),this.buyBtn1_i(),this.goodsNum1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.shop_goods_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsIcon1_i = function () {
		var t = new eui.Image();
		this.goodsIcon1 = t;
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.shop_zuanshi_icon2";
		t.y = 41.37;
		return t;
	};
	_proto.songIcon1_i = function () {
		var t = new eui.Image();
		this.songIcon1 = t;
		t.right = 0;
		t.source = "xll_hall_json.shop_send_bg";
		t.top = 0;
		return t;
	};
	_proto.buyBtn1_i = function () {
		var t = new eui.Button();
		this.buyBtn1 = t;
		t.horizontalCenter = 0.5;
		t.label = "$10";
		t.y = 160.67;
		t.skinName = shopIndex$Skin147;
		return t;
	};
	_proto.goodsNum1_i = function () {
		var t = new eui.Label();
		this.goodsNum1 = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "x10";
		t.textColor = 0xAD3D14;
		t.y = 101;
		return t;
	};
	_proto.goods2_i = function () {
		var t = new eui.Group();
		this.goods2 = t;
		t.top = 0;
		t.x = 320;
		t.elementsContent = [this._Image6_i(),this.goodsIcon2_i(),this.songIcon2_i(),this.buyBtn2_i(),this.goodsNum2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.shop_goods_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsIcon2_i = function () {
		var t = new eui.Image();
		this.goodsIcon2 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.shop_zuanshi_icon3";
		t.y = 34.68;
		return t;
	};
	_proto.songIcon2_i = function () {
		var t = new eui.Image();
		this.songIcon2 = t;
		t.right = 0;
		t.source = "xll_hall_json.shop_send_bg";
		t.top = 0;
		return t;
	};
	_proto.buyBtn2_i = function () {
		var t = new eui.Button();
		this.buyBtn2 = t;
		t.horizontalCenter = 0.5;
		t.label = "$10";
		t.y = 160.67;
		t.skinName = shopIndex$Skin148;
		return t;
	};
	_proto.goodsNum2_i = function () {
		var t = new eui.Label();
		this.goodsNum2 = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "x10";
		t.textColor = 0xAD3D14;
		t.y = 101;
		return t;
	};
	_proto.goods3_i = function () {
		var t = new eui.Group();
		this.goods3 = t;
		t.top = 0;
		t.x = 480;
		t.elementsContent = [this._Image7_i(),this.goodsIcon3_i(),this.songIcon3_i(),this.buyBtn3_i(),this.goodsNum3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.shop_goods_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsIcon3_i = function () {
		var t = new eui.Image();
		this.goodsIcon3 = t;
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.shop_zuanshi_icondai";
		t.y = 28.01;
		return t;
	};
	_proto.songIcon3_i = function () {
		var t = new eui.Image();
		this.songIcon3 = t;
		t.right = 0;
		t.source = "xll_hall_json.shop_send_bg";
		t.top = 0;
		return t;
	};
	_proto.buyBtn3_i = function () {
		var t = new eui.Button();
		this.buyBtn3 = t;
		t.horizontalCenter = 0.5;
		t.label = "$10";
		t.y = 160.67;
		t.skinName = shopIndex$Skin149;
		return t;
	};
	_proto.goodsNum3_i = function () {
		var t = new eui.Label();
		this.goodsNum3 = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "x10";
		t.textColor = 0xAD3D14;
		t.y = 101;
		return t;
	};
	_proto.goods4_i = function () {
		var t = new eui.Group();
		this.goods4 = t;
		t.top = 0;
		t.x = 640;
		t.elementsContent = [this._Image8_i(),this.goodsIcon4_i(),this.songIcon4_i(),this.buyBtn4_i(),this.goodsNum4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.shop_goods_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsIcon4_i = function () {
		var t = new eui.Image();
		this.goodsIcon4 = t;
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.shop_zuanshi_icon_box";
		t.y = 24.04;
		return t;
	};
	_proto.songIcon4_i = function () {
		var t = new eui.Image();
		this.songIcon4 = t;
		t.right = 0;
		t.source = "xll_hall_json.shop_send_bg";
		t.top = 0;
		return t;
	};
	_proto.buyBtn4_i = function () {
		var t = new eui.Button();
		this.buyBtn4 = t;
		t.horizontalCenter = 0.5;
		t.label = "$10";
		t.y = 160.67;
		t.skinName = shopIndex$Skin150;
		return t;
	};
	_proto.goodsNum4_i = function () {
		var t = new eui.Label();
		this.goodsNum4 = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "x10";
		t.textColor = 0xAD3D14;
		t.y = 101;
		return t;
	};
	return shopIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhanji/second.exml'] = window.second = (function (_super) {
	__extends(second, _super);
	var second$Skin151 = 	(function (_super) {
		__extends(second$Skin151, _super);
		function second$Skin151() {
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
		var _proto = second$Skin151.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_zhanji_huifang_btn";
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
		return second$Skin151;
	})(eui.Skin);

	var second$Skin152 = 	(function (_super) {
		__extends(second$Skin152, _super);
		function second$Skin152() {
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
		var _proto = second$Skin152.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_zhanji_huifang_btn";
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
		return second$Skin152;
	})(eui.Skin);

	function second() {
		_super.call(this);
		this.skinParts = ["m_mengban","pwd","gameground","time","nickname0","item0","nickname1","item1","nickname2","item2","jushu","score0","jushu1","jushu2","jushu0","score1","jushu3","jushu4","showWindow"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_mengban_i(),this._Group8_i()];
	}
	var _proto = second.prototype;

	_proto.m_mengban_i = function () {
		var t = new eui.Image();
		this.m_mengban = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 182;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_unmono_bg_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = -34;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "xll_hall_json.hall_roomdetail_title";
		t.y = 34;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 55.67;
		t.elementsContent = [this._Image4_i(),this.pwd_i(),this.gameground_i(),this.time_i(),this._Group2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 282;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,31,55,6);
		t.source = "xll_hall_json.hall_zhanji_second_bg";
		t.top = 0;
		t.width = 538;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "房号：999999";
		t.verticalAlign = "justify";
		t.x = 8;
		t.y = 4;
		return t;
	};
	_proto.gameground_i = function () {
		var t = new eui.Label();
		this.gameground = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "局数：30";
		t.verticalAlign = "justify";
		t.x = 150.95;
		t.y = 4;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "时间：2017-10-10 10:1:10";
		t.verticalAlign = "justify";
		t.x = 282;
		t.y = 4;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 72;
		t.y = 30;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.nickname0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_second_huangbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0x7a0202;
		t.verticalCenter = 0;
		t.width = 114;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.verticalCenter = 0;
		t.x = 126;
		t.elementsContent = [this._Image6_i(),this.nickname1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_second_huangbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0x7A0202;
		t.verticalCenter = 0;
		t.width = 114;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.verticalCenter = 0;
		t.x = 252;
		t.elementsContent = [this._Image7_i(),this.nickname2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_second_huangbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0x7A0202;
		t.verticalCenter = 0;
		t.width = 114;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 530;
		t.y = 68;
		t.viewport = this.showWindow_i();
		return t;
	};
	_proto.showWindow_i = function () {
		var t = new eui.Group();
		this.showWindow = t;
		t.elementsContent = [this._Group4_i(),this._Group6_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image8_i(),this._Group3_i(),this.jushu_i(),this.score0_i(),this.jushu1_i(),this.jushu2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_second_fangkuai";
		t.width = 520;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.right = 35;
		t.verticalCenter = 0.5;
		t.width = 20;
		t.elementsContent = [this._Button1_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = second$Skin151;
		return t;
	};
	_proto.jushu_i = function () {
		var t = new eui.Label();
		this.jushu = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "第10局";
		t.textColor = 0x67110d;
		t.verticalCenter = 0;
		t.x = 7;
		return t;
	};
	_proto.score0_i = function () {
		var t = new eui.Label();
		this.score0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 69;
		return t;
	};
	_proto.jushu1_i = function () {
		var t = new eui.Label();
		this.jushu1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 191;
		return t;
	};
	_proto.jushu2_i = function () {
		var t = new eui.Label();
		this.jushu2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 317;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 35;
		t.elementsContent = [this._Image9_i(),this._Group5_i(),this.jushu0_i(),this.score1_i(),this.jushu3_i(),this.jushu4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_second_fangkuai";
		t.width = 520;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.right = 35;
		t.verticalCenter = 0.5;
		t.width = 20;
		t.elementsContent = [this._Button2_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = second$Skin152;
		return t;
	};
	_proto.jushu0_i = function () {
		var t = new eui.Label();
		this.jushu0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "第10局";
		t.textColor = 0x67110D;
		t.verticalCenter = 0;
		t.x = 7;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 69;
		return t;
	};
	_proto.jushu3_i = function () {
		var t = new eui.Label();
		this.jushu3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 191;
		return t;
	};
	_proto.jushu4_i = function () {
		var t = new eui.Label();
		this.jushu4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 317;
		return t;
	};
	return second;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhanji/secondItem.exml'] = window.secondItem = (function (_super) {
	__extends(secondItem, _super);
	var secondItem$Skin153 = 	(function (_super) {
		__extends(secondItem$Skin153, _super);
		function secondItem$Skin153() {
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
		var _proto = secondItem$Skin153.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_zhanji_huifang_btn";
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
		return secondItem$Skin153;
	})(eui.Skin);

	function secondItem() {
		_super.call(this);
		this.skinParts = ["playBackBtn","juCount","point0","point1","point2"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = secondItem.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.juCount_i(),this.point0_i(),this.point1_i(),this.point2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(4,4,26,25);
		t.source = "xll_hall_json.hall_zhanji_second_fangkuai";
		t.width = 520;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.right = 46;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 1;
		t.width = 20;
		t.elementsContent = [this.playBackBtn_i()];
		return t;
	};
	_proto.playBackBtn_i = function () {
		var t = new eui.Button();
		this.playBackBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = secondItem$Skin153;
		return t;
	};
	_proto.juCount_i = function () {
		var t = new eui.Label();
		this.juCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "第10局";
		t.textColor = 0x67110D;
		t.verticalCenter = 0;
		t.x = 7;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 69;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 191;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "第10局";
		t.textAlign = "center";
		t.textColor = 0x67110D;
		t.verticalCenter = 0.5;
		t.width = 108;
		t.x = 317;
		return t;
	};
	return secondItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhanji/zhanjiMainItem.exml'] = window.zhanjiMainItem = (function (_super) {
	__extends(zhanjiMainItem, _super);
	var zhanjiMainItem$Skin154 = 	(function (_super) {
		__extends(zhanjiMainItem$Skin154, _super);
		function zhanjiMainItem$Skin154() {
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
		var _proto = zhanjiMainItem$Skin154.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_zhanji_main_detail_btn";
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
		return zhanjiMainItem$Skin154;
	})(eui.Skin);

	function zhanjiMainItem() {
		_super.call(this);
		this.skinParts = ["pwd","gameground","time","headImg0","nickname0","point0","item0","headImg1","nickname1","point1","item1","headImg2","nickname2","point2","item2","detailBtn"];
		
		this.height = 78;
		this.width = 780;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = zhanjiMainItem.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Image1_i(),this.pwd_i(),this.gameground_i(),this.time_i(),this.item0_i(),this.item1_i(),this.item2_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(14,30,21,11);
		t.source = "xll_hall_json.hall_zhanji_main_item";
		t.width = 780;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "房号：999999";
		t.verticalAlign = "justify";
		t.x = 12;
		t.y = 1.67;
		return t;
	};
	_proto.gameground_i = function () {
		var t = new eui.Label();
		this.gameground = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "局数：30";
		t.verticalAlign = "justify";
		t.x = 154.95;
		t.y = 1.67;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "时间：2017-10-10 10:1:10";
		t.verticalAlign = "justify";
		t.x = 286;
		t.y = 1.67;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 10;
		t.y = 27;
		t.elementsContent = [this._Image2_i(),this.headImg0_i(),this.nickname0_i(),this.point0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_main_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 40;
		t.source = "xll_hall_json.hall_zhanji_default_head";
		t.width = 40;
		t.x = 2.68;
		t.y = 2.67;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "喜来乐";
		t.textColor = 0x6D0000;
		t.width = 90;
		t.x = 49.66;
		t.y = 13.63;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0x6D0000;
		t.width = 55;
		t.x = 144.66;
		t.y = 13.63;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 220;
		t.y = 27;
		t.elementsContent = [this._Image3_i(),this.headImg1_i(),this.nickname1_i(),this.point1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_main_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 40;
		t.source = "xll_hall_json.hall_zhanji_default_head";
		t.width = 40;
		t.x = 2.68;
		t.y = 2.67;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "喜来乐";
		t.textColor = 0x6D0000;
		t.width = 90;
		t.x = 49.66;
		t.y = 13.63;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0x6D0000;
		t.width = 55;
		t.x = 144.66;
		t.y = 13.63;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 430;
		t.y = 27;
		t.elementsContent = [this._Image4_i(),this.headImg2_i(),this.nickname2_i(),this.point2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_main_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 40;
		t.source = "xll_hall_json.hall_zhanji_default_head";
		t.width = 40;
		t.x = 2.68;
		t.y = 2.67;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "喜来乐";
		t.textColor = 0x6D0000;
		t.width = 90;
		t.x = 49.66;
		t.y = 13.63;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0x6D0000;
		t.width = 55;
		t.x = 144.66;
		t.y = 13.63;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 696;
		t.y = 40;
		t.elementsContent = [this.detailBtn_i()];
		return t;
	};
	_proto.detailBtn_i = function () {
		var t = new eui.Button();
		this.detailBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = zhanjiMainItem$Skin154;
		return t;
	};
	return zhanjiMainItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhanji/zhanjiMainScene.exml'] = window.zhanjiMainScene = (function (_super) {
	__extends(zhanjiMainScene, _super);
	var zhanjiMainScene$Skin155 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin155, _super);
		function zhanjiMainScene$Skin155() {
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
		var _proto = zhanjiMainScene$Skin155.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xll_hall_json.hall_zhanji_main_detail_btn";
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
		return zhanjiMainScene$Skin155;
	})(eui.Skin);

	function zhanjiMainScene() {
		_super.call(this);
		this.skinParts = ["m_mengban","empty","pwd0","gameground0","time0","headImg0","nickname0","point0","item0","headImg1","nickname1","point1","item1","headImg2","nickname2","point2","item2","zhanjiContent","juhua","mainContent"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_mengban_i(),this.mainContent_i()];
	}
	var _proto = zhanjiMainScene.prototype;

	_proto.m_mengban_i = function () {
		var t = new eui.Image();
		this.m_mengban = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.mainContent_i = function () {
		var t = new eui.Group();
		this.mainContent = t;
		t.x = 140;
		t.y = 92.48;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.empty_i(),this._Scroller1_i(),this.juhua_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hall_tankuang_yellow_bg_png";
		t.y = 32;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 333;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_tankuang_title_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xll_hall_json.hall_tankuang_zhanji_title";
		t.y = 34;
		return t;
	};
	_proto.empty_i = function () {
		var t = new eui.Group();
		this.empty = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "暂无数据";
		t.textColor = 0x0c0c0c;
		t.verticalCenter = 0;
		t.x = -60;
		t.y = -15;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 300;
		t.horizontalCenter = 0;
		t.width = 800;
		t.y = 94.01;
		t.viewport = this.zhanjiContent_i();
		return t;
	};
	_proto.zhanjiContent_i = function () {
		var t = new eui.Group();
		this.zhanjiContent = t;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 5.69;
		t.elementsContent = [this._Image4_i(),this.pwd0_i(),this.gameground0_i(),this.time0_i(),this.item0_i(),this.item1_i(),this.item2_i(),this._Group2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(14,30,21,11);
		t.source = "xll_hall_json.hall_zhanji_main_item";
		t.width = 780;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pwd0_i = function () {
		var t = new eui.Label();
		this.pwd0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "房号：999999";
		t.verticalAlign = "justify";
		t.x = 12;
		t.y = 1.67;
		return t;
	};
	_proto.gameground0_i = function () {
		var t = new eui.Label();
		this.gameground0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "局数：30";
		t.verticalAlign = "justify";
		t.x = 154.95;
		t.y = 1.67;
		return t;
	};
	_proto.time0_i = function () {
		var t = new eui.Label();
		this.time0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "时间：2017-10-10 10:1:10";
		t.verticalAlign = "justify";
		t.x = 286;
		t.y = 1.67;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 10;
		t.y = 27;
		t.elementsContent = [this._Image5_i(),this.headImg0_i(),this.nickname0_i(),this.point0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_main_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 40;
		t.source = "xll_hall_json.hall_zhanji_default_head";
		t.width = 40;
		t.x = 2.68;
		t.y = 2.67;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "喜来乐";
		t.textColor = 0x6d0000;
		t.width = 90;
		t.x = 49.66;
		t.y = 13.63;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0x6D0000;
		t.width = 55;
		t.x = 144.66;
		t.y = 13.63;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 220;
		t.y = 27;
		t.elementsContent = [this._Image6_i(),this.headImg1_i(),this.nickname1_i(),this.point1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_main_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 40;
		t.source = "xll_hall_json.hall_zhanji_default_head";
		t.width = 40;
		t.x = 2.68;
		t.y = 2.67;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "喜来乐";
		t.textColor = 0x6D0000;
		t.width = 90;
		t.x = 49.66;
		t.y = 13.63;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0x6D0000;
		t.width = 55;
		t.x = 144.66;
		t.y = 13.63;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 430;
		t.y = 27;
		t.elementsContent = [this._Image7_i(),this.headImg2_i(),this.nickname2_i(),this.point2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xll_hall_json.hall_zhanji_main_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 40;
		t.source = "xll_hall_json.hall_zhanji_default_head";
		t.width = 40;
		t.x = 2.68;
		t.y = 2.67;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "喜来乐";
		t.textColor = 0x6D0000;
		t.width = 90;
		t.x = 49.66;
		t.y = 13.63;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0x6D0000;
		t.width = 55;
		t.x = 144.66;
		t.y = 13.63;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 696;
		t.y = 40;
		t.elementsContent = [this._Button1_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = zhanjiMainScene$Skin155;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "juhua_png";
		t.verticalCenter = 32;
		t.x = -350;
		t.y = -94;
		return t;
	};
	return zhanjiMainScene;
})(eui.Skin);