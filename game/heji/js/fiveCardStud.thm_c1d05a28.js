
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/suoha/suoha_TotalResItem.exml'] = window.suoha_TotalResItem = (function (_super) {
	__extends(suoha_TotalResItem, _super);
	function suoha_TotalResItem() {
		_super.call(this);
		this.skinParts = ["headImg","nickname","ID","point","bigWin","item"];
		
		this.height = 280;
		this.width = 160;
		this.elementsContent = [this.item_i()];
	}
	var _proto = suoha_TotalResItem.prototype;

	_proto.item_i = function () {
		var t = new eui.Group();
		this.item = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.nickname_i(),this.ID_i(),this.point_i(),this.bigWin_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.组 47";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 37;
		t.y = 20;
		t.elementsContent = [this._Image2_i(),this.headImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_headmid_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 78;
		t.source = "tz_sh_images_json.sh_head_default";
		t.width = 78;
		t.x = 3.5;
		t.y = 3;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.width = 108;
		t.y = 113.17;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "ID:666666";
		t.textAlign = "center";
		t.textColor = 0xFFDF56;
		t.y = 134.64;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.BitmapLabel();
		this.point = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+9898";
		t.y = 176.66;
		return t;
	};
	_proto.bigWin_i = function () {
		var t = new eui.Image();
		this.bigWin = t;
		t.horizontalCenter = 0.5;
		t.source = "tz_sh_images_json.sh_bigwin";
		t.y = 202.35;
		return t;
	};
	return suoha_TotalResItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/suoha/suoha_totalResult.exml'] = window.suoha_totalResult = (function (_super) {
	__extends(suoha_totalResult, _super);
	var suoha_totalResult$Skin634 = 	(function (_super) {
		__extends(suoha_totalResult$Skin634, _super);
		function suoha_totalResult$Skin634() {
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
		var _proto = suoha_totalResult$Skin634.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_rt_btn_back";
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
		return suoha_totalResult$Skin634;
	})(eui.Skin);

	var suoha_totalResult$Skin635 = 	(function (_super) {
		__extends(suoha_totalResult$Skin635, _super);
		function suoha_totalResult$Skin635() {
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
		var _proto = suoha_totalResult$Skin635.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_rt_btn_replay";
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
		return suoha_totalResult$Skin635;
	})(eui.Skin);

	function suoha_totalResult() {
		_super.call(this);
		this.skinParts = ["_rect_menban","headImg0","nickname0","ID0","point0","_img_bigWin0","item0","headImg1","nickname1","ID1","point1","_img_bigWin1","item1","headImg2","nickname2","ID2","point2","_img_bigWin2","item2","headImg3","nickname3","ID3","point3","_img_bigWin3","item3","headImg4","nickname4","ID4","point4","_img_bigWin4","item4","headImg5","nickname5","ID5","point5","_img_bigWin5","item5","pwd","playcount","gamename","time","_gp_main","backHall","jietu","playAgain","_gp_bot"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Group10_i()];
	}
	var _proto = suoha_totalResult.prototype;

	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 1080;
		t.rotation = 90;
		t.width = 640;
		t.x = 1080;
		t.y = 0;
		t.elementsContent = [this._rect_menban_i(),this._gp_main_i(),this._gp_bot_i()];
		return t;
	};
	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillColor = 0x291d11;
		t.height = 1500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.x = 20;
		t.y = 40.03;
		t.elementsContent = [this._Group7_i(),this._Label1_i(),this._Group8_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 283;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xefefef;
		t.height = 90;
		t.width = 580;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfefefe;
		t.height = 90;
		t.width = 580;
		t.y = 90;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xEFEFEF;
		t.height = 90;
		t.width = 580;
		t.y = 180;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfefefe;
		t.height = 90;
		t.width = 580;
		t.y = 270;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xEFEFEF;
		t.height = 90;
		t.width = 580;
		t.y = 360;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFEFEFE;
		t.height = 90;
		t.width = 580;
		t.y = 450;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg0_i(),this._Group1_i(),this.point0_i(),this._img_bigWin0_i()];
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 70;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 21.32;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname0_i(),this.ID0_i()];
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Arial";
		t.size = 28;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.size = 28;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.size = 45;
		t.text = "+99999";
		t.textColor = 0x9a7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin0_i = function () {
		var t = new eui.Image();
		this._img_bigWin0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 299;
		t.y = 186;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 90;
		t.elementsContent = [this.headImg1_i(),this._Group2_i(),this.point1_i(),this._img_bigWin1_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 70;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 21.32;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname1_i(),this.ID1_i()];
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.size = 50;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin1_i = function () {
		var t = new eui.Image();
		this._img_bigWin1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 180;
		t.elementsContent = [this.headImg2_i(),this._Group3_i(),this.point2_i(),this._img_bigWin2_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 70;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 21.32;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname2_i(),this.ID2_i()];
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.size = 50;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin2_i = function () {
		var t = new eui.Image();
		this._img_bigWin2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 270;
		t.elementsContent = [this.headImg3_i(),this._Group4_i(),this.point3_i(),this._img_bigWin3_i()];
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.height = 70;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 21.32;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname3_i(),this.ID3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.size = 50;
		t.text = "+999";
		t.textColor = 0x9a7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin3_i = function () {
		var t = new eui.Image();
		this._img_bigWin3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 360;
		t.elementsContent = [this.headImg4_i(),this._Group5_i(),this.point4_i(),this._img_bigWin4_i()];
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.height = 70;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 21.32;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname4_i(),this.ID4_i()];
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID4_i = function () {
		var t = new eui.Label();
		this.ID4 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.Label();
		this.point4 = t;
		t.size = 50;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin4_i = function () {
		var t = new eui.Image();
		this._img_bigWin4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 450;
		t.elementsContent = [this.headImg5_i(),this._Group6_i(),this.point5_i(),this._img_bigWin5_i()];
		return t;
	};
	_proto.headImg5_i = function () {
		var t = new eui.Image();
		this.headImg5 = t;
		t.height = 70;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 21.32;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname5_i(),this.ID5_i()];
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID5_i = function () {
		var t = new eui.Label();
		this.ID5 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point5_i = function () {
		var t = new eui.Label();
		this.point5 = t;
		t.size = 50;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin5_i = function () {
		var t = new eui.Image();
		this._img_bigWin5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "战绩";
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 61;
		t.elementsContent = [this._Rect7_i(),this._Rect8_i(),this.pwd_i(),this.playcount_i(),this.gamename_i(),this.time_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xf0f0f0;
		t.height = 150;
		t.strokeColor = 0x703616;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x703616;
		t.height = 1;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 596;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "房号:999999";
		t.textColor = 0x271e11;
		t.x = 418;
		t.y = 25;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "局数：16";
		t.textColor = 0x271e11;
		t.x = 418;
		t.y = 100;
		return t;
	};
	_proto.gamename_i = function () {
		var t = new eui.Label();
		this.gamename = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "港式五张";
		t.textColor = 0x271e11;
		t.x = 20;
		t.y = 25;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "时间：2017-01-01 10:10:10";
		t.textColor = 0x271e11;
		t.x = 20;
		t.y = 100;
		return t;
	};
	_proto._gp_bot_i = function () {
		var t = new eui.Group();
		this._gp_bot = t;
		t.x = 74;
		t.y = 939.82;
		t.elementsContent = [this._Label2_i(),this._Group9_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "本产品仅供娱乐，禁止赌博！";
		t.x = 116;
		t.y = 74.18;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.backHall_i(),this.jietu_i(),this.playAgain_i()];
		return t;
	};
	_proto.backHall_i = function () {
		var t = new eui.Button();
		this.backHall = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = suoha_totalResult$Skin634;
		return t;
	};
	_proto.jietu_i = function () {
		var t = new eui.Button();
		this.jietu = t;
		t.horizontalCenter = -11.5;
		t.label = "";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.playAgain_i = function () {
		var t = new eui.Button();
		this.playAgain = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.x = 302;
		t.skinName = suoha_totalResult$Skin635;
		return t;
	};
	return suoha_totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/suoha/suohaIndex.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	var NewFile$Skin636 = 	(function (_super) {
		__extends(NewFile$Skin636, _super);
		function NewFile$Skin636() {
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
		var _proto = NewFile$Skin636.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_game_json.public_btn_ling";
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
		return NewFile$Skin636;
	})(eui.Skin);

	var NewFile$Skin637 = 	(function (_super) {
		__extends(NewFile$Skin637, _super);
		function NewFile$Skin637() {
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
		var _proto = NewFile$Skin637.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.menuBtn";
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
		return NewFile$Skin637;
	})(eui.Skin);

	var NewFile$Skin638 = 	(function (_super) {
		__extends(NewFile$Skin638, _super);
		function NewFile$Skin638() {
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
		var _proto = NewFile$Skin638.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.messageBtn";
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
		return NewFile$Skin638;
	})(eui.Skin);

	var NewFile$Skin639 = 	(function (_super) {
		__extends(NewFile$Skin639, _super);
		function NewFile$Skin639() {
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
		var _proto = NewFile$Skin639.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_showhand";
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
		return NewFile$Skin639;
	})(eui.Skin);

	var NewFile$Skin640 = 	(function (_super) {
		__extends(NewFile$Skin640, _super);
		function NewFile$Skin640() {
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
		var _proto = NewFile$Skin640.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_giveup";
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
		return NewFile$Skin640;
	})(eui.Skin);

	var NewFile$Skin641 = 	(function (_super) {
		__extends(NewFile$Skin641, _super);
		function NewFile$Skin641() {
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
						new eui.SetProperty("iconDisplay","scaleX",1.2),
						new eui.SetProperty("iconDisplay","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin641.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_rank5";
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
		return NewFile$Skin641;
	})(eui.Skin);

	var NewFile$Skin642 = 	(function (_super) {
		__extends(NewFile$Skin642, _super);
		function NewFile$Skin642() {
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
						new eui.SetProperty("iconDisplay","scaleX",1.2),
						new eui.SetProperty("iconDisplay","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin642.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_rank10";
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
		return NewFile$Skin642;
	})(eui.Skin);

	var NewFile$Skin643 = 	(function (_super) {
		__extends(NewFile$Skin643, _super);
		function NewFile$Skin643() {
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
						new eui.SetProperty("iconDisplay","scaleX",1.2),
						new eui.SetProperty("iconDisplay","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin643.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_rank20";
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
		return NewFile$Skin643;
	})(eui.Skin);

	var NewFile$Skin644 = 	(function (_super) {
		__extends(NewFile$Skin644, _super);
		function NewFile$Skin644() {
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
						new eui.SetProperty("iconDisplay","scaleX",1.2),
						new eui.SetProperty("iconDisplay","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin644.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_rak50";
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
		return NewFile$Skin644;
	})(eui.Skin);

	var NewFile$Skin645 = 	(function (_super) {
		__extends(NewFile$Skin645, _super);
		function NewFile$Skin645() {
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
		var _proto = NewFile$Skin645.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_bujiao";
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
		return NewFile$Skin645;
	})(eui.Skin);

	var NewFile$Skin646 = 	(function (_super) {
		__extends(NewFile$Skin646, _super);
		function NewFile$Skin646() {
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
		var _proto = NewFile$Skin646.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_gen";
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
		return NewFile$Skin646;
	})(eui.Skin);

	var NewFile$Skin647 = 	(function (_super) {
		__extends(NewFile$Skin647, _super);
		function NewFile$Skin647() {
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
		var _proto = NewFile$Skin647.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.lyBtn";
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
		return NewFile$Skin647;
	})(eui.Skin);

	var NewFile$Skin648 = 	(function (_super) {
		__extends(NewFile$Skin648, _super);
		function NewFile$Skin648() {
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
		var _proto = NewFile$Skin648.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_game_public_json.public_btn_location";
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
		return NewFile$Skin648;
	})(eui.Skin);

	var NewFile$Skin649 = 	(function (_super) {
		__extends(NewFile$Skin649, _super);
		function NewFile$Skin649() {
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
						new eui.SetProperty("_Image1","source","tz_sh_images_json.sh_btn_start2")
					])
			];
		}
		var _proto = NewFile$Skin649.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_btn_start";
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
		return NewFile$Skin649;
	})(eui.Skin);

	function NewFile() {
		_super.call(this);
		this.skinParts = ["_rule_pwd","_rule_playCount","_rule_payMode","_rule_zhongtu","_rule_suohafen","_gp_rulebg","totalPoint2","totalPoint","dir0","dir5","dir4","dir3","dir2","dir1","daojishi","dirGroup","cards_0_0","cards_0_1","cards_0_2","cards_0_3","cards_0_4","cardsGroup0","whoTalk","whoTalkGroup","playerBtn","havePeopleComing","menu","toolGroup","xiaoxiBtn","xxGroup","headBg0","headImg0","nickname0","score0","singlePoint0","singleGroup0","addPointBg0","addPoint0","addPointGroup0","offline0","message0","messagebg0","yyxiaoxi0","headTouch0","headGroup0","headBg1","headImg1","offline1","singlePoint1","singleGroup1","nickname1","score1","cards_1_0","cards_1_1","cards_1_2","cards_1_3","cards_1_4","cardsGroup1","addPointBg1","addPoint1","addPointGroup1","message1","messagebg1","yyxiaoxi1","headTouch1","headGroup1","headBg2","headImg2","offline2","singlePoint2","singleGroup2","nickname2","score2","cards_2_0","cards_2_1","cards_2_2","cards_2_3","cards_2_4","cardsGroup2","addPointBg2","addPoint2","addPointGroup2","yyxiaoxi2","message2","messagebg2","headTouch2","headGroup2","headBg3","headImg3","offline3","singlePoint3","singleGroup3","nickname3","score3","cards_3_0","cards_3_1","cards_3_2","cards_3_3","cards_3_4","cardsGroup3","addPointBg3","addPoint3","addPointGroup3","yyxiaoxi3","message3","messagebg3","headTouch3","headGroup3","headBg4","headImg4","offline4","singlePoint4","singleGroup4","nickname4","score4","cards_4_0","cards_4_1","cards_4_2","cards_4_3","cards_4_4","cardsGroup4","addPointBg4","addPoint4","addPointGroup4","yyxiaoxi4","message4","messagebg4","headTouch4","headGroup4","headBg5","headImg5","offline5","singlePoint5","singleGroup5","nickname5","score5","cards_5_0","cards_5_1","cards_5_2","cards_5_3","cards_5_4","cardsGroup5","addPointBg5","addPoint5","addPointGroup5","yyxiaoxi5","message5","messagebg5","headTouch5","headGroup5","xiazhu_action1_btn","xiazhu_action1_group","xiazhu_action2_btn","xiazhu_action2_group","xiazhu_action_group","xiazhu_fen0_Btn","xiazhu_fen0_group","xiazhu_fen1_Btn","xiazhu_fen1_group","xiazhu_fen2_Btn","xiazhu_fen2_group","xiazhu_fen3_Btn","xiazhu_fen3_group","xiazhu_fen4_Btn","xiazhu_fen4_group","xiazhu_action0_btn","xiazhu_action0_group","xiazhu_fen_group","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","locBtn","locGroup","startBtn","startBtnGroup"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._gp_rulebg_i(),this.dirGroup_i(),this.cardsGroup0_i(),this.whoTalkGroup_i(),this.toolGroup_i(),this.xxGroup_i(),this.headGroup0_i(),this.headGroup1_i(),this.headGroup2_i(),this.headGroup3_i(),this.headGroup4_i(),this.headGroup5_i(),this.xiazhu_action_group_i(),this.xiazhu_fen_group_i(),this.yyGroup_i(),this.locGroup_i(),this.startBtnGroup_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sh_bg_png";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._gp_rulebg_i = function () {
		var t = new eui.Group();
		this._gp_rulebg = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 170;
		t.x = 931;
		t.y = 11;
		t.elementsContent = [this._Image2_i(),this._rule_pwd_i(),this._rule_playCount_i(),this._rule_payMode_i(),this._rule_zhongtu_i(),this._rule_suohafen_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.scale9Grid = new egret.Rectangle(16,14,13,13);
		t.source = "tz_sh_images_json.sh_topright_bg";
		t.width = 170;
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto._rule_pwd_i = function () {
		var t = new eui.Label();
		this._rule_pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "房号：999999";
		t.x = 15;
		t.y = 13.75;
		return t;
	};
	_proto._rule_playCount_i = function () {
		var t = new eui.Label();
		this._rule_playCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "局数：30/30";
		t.x = 15;
		t.y = 38.75;
		return t;
	};
	_proto._rule_payMode_i = function () {
		var t = new eui.Label();
		this._rule_payMode = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "支付：AA支付";
		t.x = 15;
		t.y = 63.75;
		return t;
	};
	_proto._rule_zhongtu_i = function () {
		var t = new eui.Label();
		this._rule_zhongtu = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "底分：5分";
		t.x = 15;
		t.y = 88.75;
		return t;
	};
	_proto._rule_suohafen_i = function () {
		var t = new eui.Label();
		this._rule_suohafen = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "300分";
		t.x = 15;
		t.y = 113.75;
		return t;
	};
	_proto.dirGroup_i = function () {
		var t = new eui.Group();
		this.dirGroup = t;
		t.height = 141;
		t.horizontalCenter = 0;
		t.verticalCenter = -14.5;
		t.width = 180;
		t.elementsContent = [this._Image3_i(),this._Group1_i(),this.dir0_i(),this.dir5_i(),this.dir4_i(),this.dir3_i(),this.dir2_i(),this.dir1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_dir_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 84;
		t.verticalCenter = 0.5;
		t.width = 117;
		t.x = 174.02;
		t.elementsContent = [this._Image4_i(),this.totalPoint2_i(),this.totalPoint_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sh_images_json.sh_power_chip";
		t.y = 0;
		return t;
	};
	_proto.totalPoint2_i = function () {
		var t = new eui.Label();
		this.totalPoint2 = t;
		t.horizontalCenter = 3;
		t.text = "999999";
		t.visible = false;
		t.y = 54;
		return t;
	};
	_proto.totalPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint = t;
		t.font = "dizhu_fk_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.6;
		t.text = "12345";
		t.y = 61.02;
		return t;
	};
	_proto.dir0_i = function () {
		var t = new eui.Image();
		this.dir0 = t;
		t.source = "tz_sh_images_json.sh_dir_1";
		t.x = 25;
		t.y = 69;
		return t;
	};
	_proto.dir5_i = function () {
		var t = new eui.Image();
		this.dir5 = t;
		t.source = "tz_sh_images_json.sh_dir_2";
		t.x = 9.76;
		t.y = 59.98;
		return t;
	};
	_proto.dir4_i = function () {
		var t = new eui.Image();
		this.dir4 = t;
		t.source = "tz_sh_images_json.sh_dir_3-1";
		t.x = 10.61;
		t.y = 17.67;
		return t;
	};
	_proto.dir3_i = function () {
		var t = new eui.Image();
		this.dir3 = t;
		t.source = "tz_sh_images_json.sh_dir_3";
		t.x = 44.99;
		t.y = 7.67;
		return t;
	};
	_proto.dir2_i = function () {
		var t = new eui.Image();
		this.dir2 = t;
		t.source = "tz_sh_images_json.sh_dir_5";
		t.x = 89.97;
		t.y = 16.34;
		return t;
	};
	_proto.dir1_i = function () {
		var t = new eui.Image();
		this.dir1 = t;
		t.source = "tz_sh_images_json.sh_dir_6";
		t.x = 89.66;
		t.y = 58.15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 63;
		t.y = 44;
		t.elementsContent = [this._Image5_i(),this.daojishi_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_clickbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.BitmapLabel();
		this.daojishi = t;
		t.font = "fen_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.verticalCenter = -3.5;
		return t;
	};
	_proto.cardsGroup0_i = function () {
		var t = new eui.Group();
		this.cardsGroup0 = t;
		t.height = 144;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 563;
		t.y = 442.76;
		t.elementsContent = [this.cards_0_0_i(),this.cards_0_1_i(),this.cards_0_2_i(),this.cards_0_3_i(),this.cards_0_4_i()];
		return t;
	};
	_proto.cards_0_0_i = function () {
		var t = new eui.Image();
		this.cards_0_0 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 72;
		t.height = 144;
		t.source = "nncards_json.card_3_11";
		t.width = 109;
		t.x = 54.5;
		t.y = 72;
		return t;
	};
	_proto.cards_0_1_i = function () {
		var t = new eui.Image();
		this.cards_0_1 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 72;
		t.height = 144;
		t.source = "nncards_json.card_3_11";
		t.width = 109;
		t.x = 167.86;
		t.y = 72;
		return t;
	};
	_proto.cards_0_2_i = function () {
		var t = new eui.Image();
		this.cards_0_2 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 72;
		t.height = 144;
		t.source = "nncards_json.card_3_11";
		t.width = 109;
		t.x = 281.22;
		t.y = 72;
		return t;
	};
	_proto.cards_0_3_i = function () {
		var t = new eui.Image();
		this.cards_0_3 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 72;
		t.height = 144;
		t.source = "nncards_json.card_3_11";
		t.width = 109;
		t.x = 394.58;
		t.y = 72;
		return t;
	};
	_proto.cards_0_4_i = function () {
		var t = new eui.Image();
		this.cards_0_4 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 72;
		t.height = 144;
		t.source = "nncards_json.card_3_11";
		t.width = 109;
		t.x = 507.94;
		t.y = 72;
		return t;
	};
	_proto.whoTalkGroup_i = function () {
		var t = new eui.Group();
		this.whoTalkGroup = t;
		t.horizontalCenter = -3;
		t.y = 329.8;
		t.elementsContent = [this._Image6_i(),this.whoTalk_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(70,3,146,10);
		t.source = "tz_sh_images_json.sh_tap";
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoTalk_i = function () {
		var t = new eui.Label();
		this.whoTalk = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "A对说话";
		t.verticalCenter = 0;
		return t;
	};
	_proto.toolGroup_i = function () {
		var t = new eui.Group();
		this.toolGroup = t;
		t.x = 15;
		t.y = 8;
		t.elementsContent = [this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 71;
		t.visible = false;
		t.width = 71;
		t.x = 83.34;
		t.y = 0;
		t.elementsContent = [this.playerBtn_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto.playerBtn_i = function () {
		var t = new eui.Button();
		this.playerBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin636;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.source = "common_image_game_json.public_redpoint";
		t.x = 51.62;
		t.y = 5.52;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 71;
		t.width = 71;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.menu_i()];
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.height = 71;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 71;
		t.skinName = NewFile$Skin637;
		return t;
	};
	_proto.xxGroup_i = function () {
		var t = new eui.Group();
		this.xxGroup = t;
		t.height = 71;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 71;
		t.x = 999.6;
		t.y = 566;
		t.elementsContent = [this.xiaoxiBtn_i()];
		return t;
	};
	_proto.xiaoxiBtn_i = function () {
		var t = new eui.Button();
		this.xiaoxiBtn = t;
		t.height = 71;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 71;
		t.skinName = NewFile$Skin638;
		return t;
	};
	_proto.headGroup0_i = function () {
		var t = new eui.Group();
		this.headGroup0 = t;
		t.height = 88;
		t.width = 190;
		t.x = 25.96;
		t.y = 473.8;
		t.elementsContent = [this.headBg0_i(),this.headImg0_i(),this.nickname0_i(),this.score0_i(),this.singleGroup0_i(),this.addPointGroup0_i(),this.offline0_i(),this.messagebg0_i(),this.yyxiaoxi0_i(),this.headTouch0_i()];
		return t;
	};
	_proto.headBg0_i = function () {
		var t = new eui.Image();
		this.headBg0 = t;
		t.source = "tz_sh_images_json.sh_headbg_heng";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 72;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -1;
		t.width = 72;
		t.x = 7.5;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 85.49;
		t.y = 13.19;
		return t;
	};
	_proto.score0_i = function () {
		var t = new eui.Label();
		this.score0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "12345678";
		t.textAlign = "center";
		t.textColor = 0xf4e135;
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 87.32;
		t.y = 52.81;
		return t;
	};
	_proto.singleGroup0_i = function () {
		var t = new eui.Group();
		this.singleGroup0 = t;
		t.x = 95;
		t.y = -38;
		t.elementsContent = [this._Image7_i(),this.singlePoint0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(42,15,20,8);
		t.source = "tz_sh_images_json.sh_coin_bg";
		t.width = 110;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.singlePoint0_i = function () {
		var t = new eui.Label();
		this.singlePoint0 = t;
		t.height = 25;
		t.size = 23;
		t.text = "30000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 64;
		t.x = 33;
		return t;
	};
	_proto.addPointGroup0_i = function () {
		var t = new eui.Group();
		this.addPointGroup0 = t;
		t.height = 135;
		t.visible = false;
		t.width = 265;
		t.x = -31.26;
		t.y = -108.82;
		t.elementsContent = [this.addPointBg0_i(),this.addPoint0_i()];
		return t;
	};
	_proto.addPointBg0_i = function () {
		var t = new eui.Image();
		this.addPointBg0 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sh_images_json.sh_scorebg_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint0 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.text = "+999999";
		t.verticalCenter = 0;
		return t;
	};
	_proto.offline0_i = function () {
		var t = new eui.Image();
		this.offline0 = t;
		t.source = "tz_sh_images_json.sh_headoffline";
		t.verticalCenter = -1;
		t.x = 6.67;
		return t;
	};
	_proto.messagebg0_i = function () {
		var t = new eui.Group();
		this.messagebg0 = t;
		t.visible = false;
		t.x = 29;
		t.y = -45;
		t.elementsContent = [this._Image8_i(),this.message0_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message0_i = function () {
		var t = new eui.Label();
		this.message0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto.yyxiaoxi0_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi0 = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 7.5;
		t.y = 7;
		return t;
	};
	_proto.headTouch0_i = function () {
		var t = new eui.Rect();
		this.headTouch0 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headGroup1_i = function () {
		var t = new eui.Group();
		this.headGroup1 = t;
		t.height = 134;
		t.width = 91;
		t.x = 960;
		t.y = 268.48;
		t.elementsContent = [this.headBg1_i(),this.headImg1_i(),this.offline1_i(),this.singleGroup1_i(),this.nickname1_i(),this.score1_i(),this.cardsGroup1_i(),this.addPointGroup1_i(),this.messagebg1_i(),this.yyxiaoxi1_i(),this.headTouch1_i()];
		return t;
	};
	_proto.headBg1_i = function () {
		var t = new eui.Image();
		this.headBg1 = t;
		t.source = "tz_sh_images_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 72;
		t.horizontalCenter = 0.5;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.y = 6;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Image();
		this.offline1 = t;
		t.source = "tz_sh_images_json.sh_headoffline";
		t.verticalCenter = -25;
		t.visible = false;
		t.x = 9.33;
		return t;
	};
	_proto.singleGroup1_i = function () {
		var t = new eui.Group();
		this.singleGroup1 = t;
		t.x = -110;
		t.y = -15;
		t.elementsContent = [this._Image9_i(),this.singlePoint1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(35,11,35,11);
		t.source = "tz_sh_images_json.sh_coin_bg";
		t.width = 110;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.singlePoint1_i = function () {
		var t = new eui.Label();
		this.singlePoint1 = t;
		t.height = 25;
		t.size = 23;
		t.text = "30000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 64;
		t.x = 34.33;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0;
		t.size = 17;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.y = 81.69;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0.5;
		t.size = 17;
		t.text = "12345678";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 80;
		t.y = 109.31;
		return t;
	};
	_proto.cardsGroup1_i = function () {
		var t = new eui.Group();
		this.cardsGroup1 = t;
		t.height = 87;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 185;
		t.x = -198.66;
		t.y = 24.01;
		t.elementsContent = [this.cards_1_0_i(),this.cards_1_1_i(),this.cards_1_2_i(),this.cards_1_3_i(),this.cards_1_4_i()];
		return t;
	};
	_proto.cards_1_0_i = function () {
		var t = new eui.Image();
		this.cards_1_0 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cards_1_1_i = function () {
		var t = new eui.Image();
		this.cards_1_1 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.cards_1_2_i = function () {
		var t = new eui.Image();
		this.cards_1_2 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.cards_1_3_i = function () {
		var t = new eui.Image();
		this.cards_1_3 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.cards_1_4_i = function () {
		var t = new eui.Image();
		this.cards_1_4 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.addPointGroup1_i = function () {
		var t = new eui.Group();
		this.addPointGroup1 = t;
		t.height = 135;
		t.horizontalCenter = 1;
		t.visible = false;
		t.width = 265;
		t.y = -102.17;
		t.elementsContent = [this.addPointBg1_i(),this.addPoint1_i()];
		return t;
	};
	_proto.addPointBg1_i = function () {
		var t = new eui.Image();
		this.addPointBg1 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sh_images_json.sh_scorebg_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint1 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -13.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+99999";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.messagebg1_i = function () {
		var t = new eui.Group();
		this.messagebg1 = t;
		t.visible = false;
		t.x = 47.66;
		t.y = -16.99;
		t.elementsContent = [this._Image10_i(),this.message1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.scaleX = -1;
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Label();
		this.message1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.textColor = 0xffffff;
		t.x = -291.98;
		t.y = 8.67;
		return t;
	};
	_proto.yyxiaoxi1_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi1 = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.visible = false;
		t.width = 72;
		t.x = 7.5;
		t.y = 7;
		return t;
	};
	_proto.headTouch1_i = function () {
		var t = new eui.Rect();
		this.headTouch1 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headGroup2_i = function () {
		var t = new eui.Group();
		this.headGroup2 = t;
		t.height = 134;
		t.width = 91;
		t.x = 820;
		t.y = 30;
		t.elementsContent = [this.headBg2_i(),this.headImg2_i(),this.offline2_i(),this.singleGroup2_i(),this.nickname2_i(),this.score2_i(),this.cardsGroup2_i(),this.addPointGroup2_i(),this.yyxiaoxi2_i(),this.messagebg2_i(),this.headTouch2_i()];
		return t;
	};
	_proto.headBg2_i = function () {
		var t = new eui.Image();
		this.headBg2 = t;
		t.source = "tz_sh_images_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 72;
		t.horizontalCenter = 0.5;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.y = 6;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Image();
		this.offline2 = t;
		t.source = "tz_sh_images_json.sh_headoffline";
		t.verticalCenter = -25;
		t.x = 9.33;
		return t;
	};
	_proto.singleGroup2_i = function () {
		var t = new eui.Group();
		this.singleGroup2 = t;
		t.x = -115.32;
		t.y = 98;
		t.elementsContent = [this._Image11_i(),this.singlePoint2_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(40,12,32,9);
		t.source = "tz_sh_images_json.sh_coin_bg";
		t.width = 110;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.singlePoint2_i = function () {
		var t = new eui.Label();
		this.singlePoint2 = t;
		t.height = 25;
		t.size = 23;
		t.text = "30000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 64;
		t.x = 33;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0;
		t.size = 17;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.y = 81.69;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0.5;
		t.size = 17;
		t.text = "12345678";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 80;
		t.y = 109.31;
		return t;
	};
	_proto.cardsGroup2_i = function () {
		var t = new eui.Group();
		this.cardsGroup2 = t;
		t.height = 87;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 185;
		t.x = -94.66;
		t.y = 140.01;
		t.elementsContent = [this.cards_2_0_i(),this.cards_2_1_i(),this.cards_2_2_i(),this.cards_2_3_i(),this.cards_2_4_i()];
		return t;
	};
	_proto.cards_2_0_i = function () {
		var t = new eui.Image();
		this.cards_2_0 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cards_2_1_i = function () {
		var t = new eui.Image();
		this.cards_2_1 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.cards_2_2_i = function () {
		var t = new eui.Image();
		this.cards_2_2 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.cards_2_3_i = function () {
		var t = new eui.Image();
		this.cards_2_3 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.cards_2_4_i = function () {
		var t = new eui.Image();
		this.cards_2_4 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.addPointGroup2_i = function () {
		var t = new eui.Group();
		this.addPointGroup2 = t;
		t.height = 135;
		t.horizontalCenter = -110;
		t.visible = false;
		t.width = 265;
		t.y = 2.83;
		t.elementsContent = [this.addPointBg2_i(),this.addPoint2_i()];
		return t;
	};
	_proto.addPointBg2_i = function () {
		var t = new eui.Image();
		this.addPointBg2 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sh_images_json.sh_scorebg_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint2 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -13.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+99999";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.yyxiaoxi2_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi2 = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 7.5;
		t.y = 7;
		return t;
	};
	_proto.messagebg2_i = function () {
		var t = new eui.Group();
		this.messagebg2 = t;
		t.visible = false;
		t.x = 68.98;
		t.y = 13.65;
		t.elementsContent = [this._Image12_i(),this.message2_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.scaleX = -1;
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Label();
		this.message2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.x = -291.98;
		t.y = 8.67;
		return t;
	};
	_proto.headTouch2_i = function () {
		var t = new eui.Rect();
		this.headTouch2 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headGroup3_i = function () {
		var t = new eui.Group();
		this.headGroup3 = t;
		t.height = 134;
		t.horizontalCenter = 0;
		t.width = 91;
		t.y = 8.48;
		t.elementsContent = [this.headBg3_i(),this.headImg3_i(),this.offline3_i(),this.singleGroup3_i(),this.nickname3_i(),this.score3_i(),this.cardsGroup3_i(),this.addPointGroup3_i(),this.yyxiaoxi3_i(),this.messagebg3_i(),this.headTouch3_i()];
		return t;
	};
	_proto.headBg3_i = function () {
		var t = new eui.Image();
		this.headBg3 = t;
		t.source = "tz_sh_images_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.height = 72;
		t.horizontalCenter = 0.5;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.y = 6;
		return t;
	};
	_proto.offline3_i = function () {
		var t = new eui.Image();
		this.offline3 = t;
		t.source = "tz_sh_images_json.sh_headoffline";
		t.verticalCenter = -25;
		t.x = 9.33;
		return t;
	};
	_proto.singleGroup3_i = function () {
		var t = new eui.Group();
		this.singleGroup3 = t;
		t.x = 86;
		t.y = 99;
		t.elementsContent = [this._Image13_i(),this.singlePoint3_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(42,4,23,30);
		t.source = "tz_sh_images_json.sh_coin_bg";
		t.width = 110;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.singlePoint3_i = function () {
		var t = new eui.Label();
		this.singlePoint3 = t;
		t.height = 25;
		t.size = 23;
		t.text = "30000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 64;
		t.x = 34.33;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0;
		t.size = 17;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.y = 81.69;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0.5;
		t.size = 17;
		t.text = "12345678";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 80;
		t.y = 109.31;
		return t;
	};
	_proto.cardsGroup3_i = function () {
		var t = new eui.Group();
		this.cardsGroup3 = t;
		t.height = 87;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 185;
		t.y = 136.97;
		t.elementsContent = [this.cards_3_0_i(),this.cards_3_1_i(),this.cards_3_2_i(),this.cards_3_3_i(),this.cards_3_4_i()];
		return t;
	};
	_proto.cards_3_0_i = function () {
		var t = new eui.Image();
		this.cards_3_0 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cards_3_1_i = function () {
		var t = new eui.Image();
		this.cards_3_1 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.cards_3_2_i = function () {
		var t = new eui.Image();
		this.cards_3_2 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.cards_3_3_i = function () {
		var t = new eui.Image();
		this.cards_3_3 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.cards_3_4_i = function () {
		var t = new eui.Image();
		this.cards_3_4 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.addPointGroup3_i = function () {
		var t = new eui.Group();
		this.addPointGroup3 = t;
		t.height = 135;
		t.horizontalCenter = 140;
		t.visible = false;
		t.width = 265;
		t.y = -17.17;
		t.elementsContent = [this.addPointBg3_i(),this.addPoint3_i()];
		return t;
	};
	_proto.addPointBg3_i = function () {
		var t = new eui.Image();
		this.addPointBg3 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sh_images_json.sh_scorebg_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addPoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint3 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -13.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+99999";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.yyxiaoxi3_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi3 = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 7.5;
		t.y = 7;
		return t;
	};
	_proto.messagebg3_i = function () {
		var t = new eui.Group();
		this.messagebg3 = t;
		t.visible = false;
		t.x = 19.67;
		t.y = 8.34;
		t.elementsContent = [this._Image14_i(),this.message3_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Label();
		this.message3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto.headTouch3_i = function () {
		var t = new eui.Rect();
		this.headTouch3 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headGroup4_i = function () {
		var t = new eui.Group();
		this.headGroup4 = t;
		t.height = 134;
		t.width = 91;
		t.x = 190;
		t.y = 30;
		t.elementsContent = [this.headBg4_i(),this.headImg4_i(),this.offline4_i(),this.singleGroup4_i(),this.nickname4_i(),this.score4_i(),this.cardsGroup4_i(),this.addPointGroup4_i(),this.yyxiaoxi4_i(),this.messagebg4_i(),this.headTouch4_i()];
		return t;
	};
	_proto.headBg4_i = function () {
		var t = new eui.Image();
		this.headBg4 = t;
		t.source = "tz_sh_images_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.height = 72;
		t.horizontalCenter = 0.5;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.y = 6;
		return t;
	};
	_proto.offline4_i = function () {
		var t = new eui.Image();
		this.offline4 = t;
		t.source = "tz_sh_images_json.sh_headoffline";
		t.verticalCenter = -25;
		t.x = 9.33;
		return t;
	};
	_proto.singleGroup4_i = function () {
		var t = new eui.Group();
		this.singleGroup4 = t;
		t.x = 94;
		t.y = 98;
		t.elementsContent = [this._Image15_i(),this.singlePoint4_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(44,9,23,14);
		t.source = "tz_sh_images_json.sh_coin_bg";
		t.width = 110;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.singlePoint4_i = function () {
		var t = new eui.Label();
		this.singlePoint4 = t;
		t.height = 25;
		t.size = 23;
		t.text = "99999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 64;
		t.x = 33;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0;
		t.size = 17;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.y = 81.69;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0.5;
		t.size = 17;
		t.text = "12345678";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 80;
		t.y = 109.31;
		return t;
	};
	_proto.cardsGroup4_i = function () {
		var t = new eui.Group();
		this.cardsGroup4 = t;
		t.height = 87;
		t.horizontalCenter = 44;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 185;
		t.y = 140.01;
		t.elementsContent = [this.cards_4_0_i(),this.cards_4_1_i(),this.cards_4_2_i(),this.cards_4_3_i(),this.cards_4_4_i()];
		return t;
	};
	_proto.cards_4_0_i = function () {
		var t = new eui.Image();
		this.cards_4_0 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cards_4_1_i = function () {
		var t = new eui.Image();
		this.cards_4_1 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.cards_4_2_i = function () {
		var t = new eui.Image();
		this.cards_4_2 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.cards_4_3_i = function () {
		var t = new eui.Image();
		this.cards_4_3 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.cards_4_4_i = function () {
		var t = new eui.Image();
		this.cards_4_4 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.addPointGroup4_i = function () {
		var t = new eui.Group();
		this.addPointGroup4 = t;
		t.height = 135;
		t.horizontalCenter = 139;
		t.width = 265;
		t.y = -20.17;
		t.elementsContent = [this.addPointBg4_i(),this.addPoint4_i()];
		return t;
	};
	_proto.addPointBg4_i = function () {
		var t = new eui.Image();
		this.addPointBg4 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sh_images_json.sh_scorebg_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addPoint4_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint4 = t;
		t.font = "MJ_number03_silvery_fnt";
		t.horizontalCenter = -13.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+99999";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.yyxiaoxi4_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi4 = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 7.5;
		t.y = 7;
		return t;
	};
	_proto.messagebg4_i = function () {
		var t = new eui.Group();
		this.messagebg4 = t;
		t.x = 2.36;
		t.y = -6.34;
		t.elementsContent = [this._Image16_i(),this.message4_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message4_i = function () {
		var t = new eui.Label();
		this.message4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto.headTouch4_i = function () {
		var t = new eui.Rect();
		this.headTouch4 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headGroup5_i = function () {
		var t = new eui.Group();
		this.headGroup5 = t;
		t.height = 134;
		t.width = 91;
		t.x = 25;
		t.y = 268.48;
		t.elementsContent = [this.headBg5_i(),this.headImg5_i(),this.offline5_i(),this.singleGroup5_i(),this.nickname5_i(),this.score5_i(),this.cardsGroup5_i(),this.addPointGroup5_i(),this.yyxiaoxi5_i(),this.messagebg5_i(),this.headTouch5_i()];
		return t;
	};
	_proto.headBg5_i = function () {
		var t = new eui.Image();
		this.headBg5 = t;
		t.source = "tz_sh_images_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg5_i = function () {
		var t = new eui.Image();
		this.headImg5 = t;
		t.height = 72;
		t.horizontalCenter = 0.5;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.y = 6;
		return t;
	};
	_proto.offline5_i = function () {
		var t = new eui.Image();
		this.offline5 = t;
		t.source = "tz_sh_images_json.sh_headoffline";
		t.verticalCenter = -25;
		t.x = 9.33;
		return t;
	};
	_proto.singleGroup5_i = function () {
		var t = new eui.Group();
		this.singleGroup5 = t;
		t.x = 102;
		t.y = -15;
		t.elementsContent = [this._Image17_i(),this.singlePoint5_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(35,11,35,15);
		t.source = "tz_sh_images_json.sh_coin_bg";
		t.width = 110;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.singlePoint5_i = function () {
		var t = new eui.Label();
		this.singlePoint5 = t;
		t.height = 25;
		t.size = 23;
		t.text = "00000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 64;
		t.x = 33;
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0;
		t.size = 17;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.y = 81.69;
		return t;
	};
	_proto.score5_i = function () {
		var t = new eui.Label();
		this.score5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 17;
		t.horizontalCenter = 0.5;
		t.size = 17;
		t.text = "12345678";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 80;
		t.y = 109.31;
		return t;
	};
	_proto.cardsGroup5_i = function () {
		var t = new eui.Group();
		this.cardsGroup5 = t;
		t.height = 87;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 185;
		t.x = 103.34;
		t.y = 24.01;
		t.elementsContent = [this.cards_5_0_i(),this.cards_5_1_i(),this.cards_5_2_i(),this.cards_5_3_i(),this.cards_5_4_i()];
		return t;
	};
	_proto.cards_5_0_i = function () {
		var t = new eui.Image();
		this.cards_5_0 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cards_5_1_i = function () {
		var t = new eui.Image();
		this.cards_5_1 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.cards_5_2_i = function () {
		var t = new eui.Image();
		this.cards_5_2 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_4_3";
		t.width = 108;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.cards_5_3_i = function () {
		var t = new eui.Image();
		this.cards_5_3 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.cards_5_4_i = function () {
		var t = new eui.Image();
		this.cards_5_4 = t;
		t.height = 144;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nncards_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.addPointGroup5_i = function () {
		var t = new eui.Group();
		this.addPointGroup5 = t;
		t.height = 135;
		t.horizontalCenter = 20;
		t.visible = false;
		t.width = 265;
		t.y = -102.17;
		t.elementsContent = [this.addPointBg5_i(),this.addPoint5_i()];
		return t;
	};
	_proto.addPointBg5_i = function () {
		var t = new eui.Image();
		this.addPointBg5 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sh_images_json.sh_scorebg_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addPoint5_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint5 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -13.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+99999";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.yyxiaoxi5_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi5 = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 7.5;
		t.y = 7;
		return t;
	};
	_proto.messagebg5_i = function () {
		var t = new eui.Group();
		this.messagebg5 = t;
		t.visible = false;
		t.x = 29;
		t.y = -18.34;
		t.elementsContent = [this._Image18_i(),this.message5_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message5_i = function () {
		var t = new eui.Label();
		this.message5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto.headTouch5_i = function () {
		var t = new eui.Rect();
		this.headTouch5 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.xiazhu_action_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_action_group = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.x = 399;
		t.y = 578.14;
		t.elementsContent = [this.xiazhu_action1_group_i(),this.xiazhu_action2_group_i()];
		return t;
	};
	_proto.xiazhu_action1_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_action1_group = t;
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 260;
		t.elementsContent = [this.xiazhu_action1_btn_i()];
		return t;
	};
	_proto.xiazhu_action1_btn_i = function () {
		var t = new eui.Button();
		this.xiazhu_action1_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin639;
		return t;
	};
	_proto.xiazhu_action2_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_action2_group = t;
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 0;
		t.elementsContent = [this.xiazhu_action2_btn_i()];
		return t;
	};
	_proto.xiazhu_action2_btn_i = function () {
		var t = new eui.Button();
		this.xiazhu_action2_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin640;
		return t;
	};
	_proto.xiazhu_fen_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_fen_group = t;
		t.height = 71;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 613;
		t.x = 279;
		t.y = 375.51;
		t.elementsContent = [this.xiazhu_fen0_group_i(),this.xiazhu_fen1_group_i(),this.xiazhu_fen2_group_i(),this.xiazhu_fen3_group_i(),this.xiazhu_fen4_group_i(),this.xiazhu_action0_group_i()];
		return t;
	};
	_proto.xiazhu_fen0_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_fen0_group = t;
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 0;
		t.elementsContent = [this.xiazhu_fen0_Btn_i()];
		return t;
	};
	_proto.xiazhu_fen0_Btn_i = function () {
		var t = new eui.Button();
		this.xiazhu_fen0_Btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin641;
		return t;
	};
	_proto.xiazhu_fen1_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_fen1_group = t;
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 130;
		t.elementsContent = [this.xiazhu_fen1_Btn_i()];
		return t;
	};
	_proto.xiazhu_fen1_Btn_i = function () {
		var t = new eui.Button();
		this.xiazhu_fen1_Btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin642;
		return t;
	};
	_proto.xiazhu_fen2_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_fen2_group = t;
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 260;
		t.elementsContent = [this.xiazhu_fen2_Btn_i()];
		return t;
	};
	_proto.xiazhu_fen2_Btn_i = function () {
		var t = new eui.Button();
		this.xiazhu_fen2_Btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin643;
		return t;
	};
	_proto.xiazhu_fen3_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_fen3_group = t;
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 390;
		t.y = 10;
		t.elementsContent = [this.xiazhu_fen3_Btn_i()];
		return t;
	};
	_proto.xiazhu_fen3_Btn_i = function () {
		var t = new eui.Button();
		this.xiazhu_fen3_Btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin644;
		return t;
	};
	_proto.xiazhu_fen4_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_fen4_group = t;
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 620;
		t.elementsContent = [this.xiazhu_fen4_Btn_i()];
		return t;
	};
	_proto.xiazhu_fen4_Btn_i = function () {
		var t = new eui.Button();
		this.xiazhu_fen4_Btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin645;
		return t;
	};
	_proto.xiazhu_action0_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_action0_group = t;
		t.height = 71;
		t.width = 71;
		t.x = 620;
		t.y = 1;
		t.elementsContent = [this.xiazhu_action0_btn_i()];
		return t;
	};
	_proto.xiazhu_action0_btn_i = function () {
		var t = new eui.Button();
		this.xiazhu_action0_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin646;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 71;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 71;
		t.x = 999.6;
		t.y = 491;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.height = 71;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 71;
		t.skinName = NewFile$Skin647;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.visible = false;
		t.x = -34;
		t.y = -104;
		t.elementsContent = [this._Image19_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "common_image_game_json.public_tishi";
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
		t.verticalCenter = -17;
		t.width = 100;
		return t;
	};
	_proto.locGroup_i = function () {
		var t = new eui.Group();
		this.locGroup = t;
		t.height = 71;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.width = 71;
		t.x = 1001.6;
		t.y = 416;
		t.elementsContent = [this.locBtn_i()];
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin648;
		return t;
	};
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 71;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.width = 71;
		t.y = 377;
		t.elementsContent = [this.startBtn_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin649;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -470;
		t.size = 35;
		t.text = "弃牌";
		t.textColor = 0xFCDC4E;
		t.verticalCenter = -53.5;
		t.visible = false;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -206;
		t.size = 35;
		t.text = "弃牌";
		t.textColor = 0xFCDC4E;
		t.verticalCenter = -195.5;
		t.visible = false;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 88;
		t.size = 35;
		t.text = "弃牌";
		t.textColor = 0xFCDC4E;
		t.verticalCenter = -229.5;
		t.visible = false;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 228;
		t.size = 35;
		t.text = "弃牌";
		t.textColor = 0xFCDC4E;
		t.verticalCenter = -189.5;
		t.visible = false;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 463;
		t.size = 35;
		t.text = "弃牌";
		t.textColor = 0xFCDC4E;
		t.verticalCenter = -57.5;
		t.visible = false;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -280;
		t.size = 35;
		t.text = "弃牌";
		t.textColor = 0xFCDC4E;
		t.verticalCenter = 136.5;
		t.visible = false;
		return t;
	};
	return NewFile;
})(eui.Skin);