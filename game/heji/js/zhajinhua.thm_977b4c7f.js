
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/zhajinhua/joinRoomNoticeZjh.exml'] = window.joinRoomNoticeZjh = (function (_super) {
	__extends(joinRoomNoticeZjh, _super);
	var joinRoomNoticeZjh$Skin847 = 	(function (_super) {
		__extends(joinRoomNoticeZjh$Skin847, _super);
		function joinRoomNoticeZjh$Skin847() {
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
		var _proto = joinRoomNoticeZjh$Skin847.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_sitdown_true";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			return t;
		};
		return joinRoomNoticeZjh$Skin847;
	})(eui.Skin);

	var joinRoomNoticeZjh$Skin848 = 	(function (_super) {
		__extends(joinRoomNoticeZjh$Skin848, _super);
		function joinRoomNoticeZjh$Skin848() {
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
		var _proto = joinRoomNoticeZjh$Skin848.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_watch_true";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			return t;
		};
		return joinRoomNoticeZjh$Skin848;
	})(eui.Skin);

	function joinRoomNoticeZjh() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_rect_fbg","_btn_joingame","_btn_guanzhan","_gp_btn","_rect_sbg","_rect_tbg","_txt_playmode","_txt_chip","_txt_rule","_txt_shangxian","_txt_playcount","_txt_peoplename","_txt_pwd","_gp_main"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._rect_bg_i(),this._gp_main_i()];
	}
	var _proto = joinRoomNoticeZjh.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.height = 1500;
		t.width = 750;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.scaleX = 1.08;
		t.scaleY = 1.08;
		t.verticalCenter = 0;
		t.x = 35;
		t.elementsContent = [this._rect_fbg_i(),this._gp_btn_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._rect_fbg_i = function () {
		var t = new eui.Rect();
		this._rect_fbg = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x6d4ba8;
		t.height = 700;
		t.strokeColor = 0xde51f1;
		t.strokeWeight = 2;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_btn_i = function () {
		var t = new eui.Group();
		this._gp_btn = t;
		t.horizontalCenter = 0.5;
		t.y = 600.69;
		t.elementsContent = [this._btn_joingame_i(),this._btn_guanzhan_i()];
		return t;
	};
	_proto._btn_joingame_i = function () {
		var t = new eui.Button();
		this._btn_joingame = t;
		t.height = 68;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 219;
		t.x = 263.6;
		t.skinName = joinRoomNoticeZjh$Skin847;
		return t;
	};
	_proto._btn_guanzhan_i = function () {
		var t = new eui.Button();
		this._btn_guanzhan = t;
		t.height = 68;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 219;
		t.x = 0;
		t.skinName = joinRoomNoticeZjh$Skin848;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 28;
		t.y = 26.75;
		t.elementsContent = [this._rect_sbg_i(),this._Group2_i(),this._txt_peoplename_i()];
		return t;
	};
	_proto._rect_sbg_i = function () {
		var t = new eui.Rect();
		this._rect_sbg = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x281d45;
		t.height = 550;
		t.strokeColor = 0xae71cb;
		t.strokeWeight = 1;
		t.width = 570;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 2;
		t.y = 68;
		t.elementsContent = [this._rect_tbg_i(),this._Group1_i()];
		return t;
	};
	_proto._rect_tbg_i = function () {
		var t = new eui.Rect();
		this._rect_tbg = t;
		t.fillColor = 0x4e3e7c;
		t.height = 360;
		t.width = 569;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 34.48;
		t.y = 17.54;
		t.elementsContent = [this._txt_playmode_i(),this._txt_chip_i(),this._txt_rule_i(),this._txt_shangxian_i(),this._txt_playcount_i()];
		return t;
	};
	_proto._txt_playmode_i = function () {
		var t = new eui.Label();
		this._txt_playmode = t;
		t.left = 0;
		t.size = 32;
		t.text = "底分：2";
		t.textColor = 0xd6bba7;
		t.y = 0;
		return t;
	};
	_proto._txt_chip_i = function () {
		var t = new eui.Label();
		this._txt_chip = t;
		t.left = 0;
		t.size = 32;
		t.text = "筹码：2/5,4/10,8/20,10/25";
		t.textColor = 0xD6BBA7;
		t.x = 10;
		t.y = 50;
		return t;
	};
	_proto._txt_rule_i = function () {
		var t = new eui.Label();
		this._txt_rule = t;
		t.lineSpacing = 13;
		t.size = 32;
		t.text = "规则：首轮禁止看牌 闷牌，全场禁止比牌 100分以下禁止比牌 只";
		t.textColor = 0xD6BBA7;
		t.width = 467;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto._txt_shangxian_i = function () {
		var t = new eui.Label();
		this._txt_shangxian = t;
		t.lineSpacing = 5;
		t.size = 32;
		t.text = "上限：无";
		t.textColor = 0xD6BBA7;
		t.width = 467;
		t.x = 0;
		t.y = 240;
		return t;
	};
	_proto._txt_playcount_i = function () {
		var t = new eui.Label();
		this._txt_playcount = t;
		t.lineSpacing = 5;
		t.size = 32;
		t.text = "局数：10局";
		t.textColor = 0xD6BBA7;
		t.width = 467;
		t.x = 0;
		t.y = 290;
		return t;
	};
	_proto._txt_peoplename_i = function () {
		var t = new eui.Label();
		this._txt_peoplename = t;
		t.size = 35;
		t.text = "房间里有smile先生、魂族游戏，是否加入?";
		t.textAlign = "center";
		t.width = 400;
		t.x = 72;
		t.y = 448.58;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = -158.34;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._txt_pwd_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 146;
		t.source = "zjh_game_img_json.zjh_fwmbg";
		t.width = 182.4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "防伪码";
		t.textColor = 0xdddddd;
		t.y = 79.34;
		return t;
	};
	_proto._txt_pwd_i = function () {
		var t = new eui.Label();
		this._txt_pwd = t;
		t.bold = true;
		t.size = 34;
		t.text = "999999";
		t.x = 37;
		t.y = 25;
		return t;
	};
	return joinRoomNoticeZjh;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhajinhua/result.exml'] = window.result = (function (_super) {
	__extends(result, _super);
	function result() {
		_super.call(this);
		this.skinParts = ["_img_bg","_txt_pwd","_txt_time","_txt_playcount","_txt_nickname0","_txt_point0","_img_bigwin0","_gp_item0","_txt_nickname1","_txt_point1","_img_bigwin1","_gp_item1","_txt_nickname2","_txt_point2","_img_bigwin2","_gp_item2","_txt_nickname3","_txt_point3","_img_bigwin3","_gp_item3","_txt_nickname4","_txt_point4","_img_bigwin4","_gp_item4","_txt_nickname5","_txt_point5","_img_bigwin5","_gp_item5","_gp_main","_img_longtouch","_txt_backIndex"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._img_bg_i(),this._gp_main_i(),this._img_longtouch_i(),this._txt_backIndex_i()];
	}
	var _proto = result.prototype;

	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 1320;
		t.source = "zjh_result_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.scaleY = 1.1;
		t.x = 32;
		t.y = 38.88;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._gp_item0_i(),this._gp_item1_i(),this._gp_item2_i(),this._gp_item3_i(),this._gp_item4_i(),this._gp_item5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zjh_game_img_json.zjh_rank_frame";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 118;
		t.y = 181;
		t.elementsContent = [this._Rect1_i(),this._txt_pwd_i(),this._txt_time_i(),this._txt_playcount_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.height = 35;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._txt_pwd_i = function () {
		var t = new eui.Label();
		this._txt_pwd = t;
		t.size = 20;
		t.text = "房间号:99999999";
		t.textColor = 0xfff156;
		t.verticalCenter = 0;
		t.x = 8;
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.size = 20;
		t.text = "2014-10-20 20:20";
		t.textColor = 0xFFF156;
		t.verticalCenter = 0.5;
		t.x = 190;
		return t;
	};
	_proto._txt_playcount_i = function () {
		var t = new eui.Label();
		this._txt_playcount = t;
		t.size = 20;
		t.text = "20局";
		t.textColor = 0xFFF156;
		t.verticalCenter = 0.5;
		t.x = 391;
		return t;
	};
	_proto._gp_item0_i = function () {
		var t = new eui.Group();
		this._gp_item0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 111;
		t.y = 234;
		t.elementsContent = [this._Rect2_i(),this._txt_nickname0_i(),this._txt_point0_i(),this._img_bigwin0_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 465;
		return t;
	};
	_proto._txt_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_nickname0 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "昵称所属";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 94;
		return t;
	};
	_proto._txt_point0_i = function () {
		var t = new eui.Label();
		this._txt_point0 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "9999";
		t.textAlign = "center";
		t.verticalCenter = 1;
		t.width = 120;
		t.x = 324;
		return t;
	};
	_proto._img_bigwin0_i = function () {
		var t = new eui.Image();
		this._img_bigwin0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zjh_game_img_json.zjh_rank_bigwinner2";
		t.x = 4.67;
		t.y = -7.35;
		return t;
	};
	_proto._gp_item1_i = function () {
		var t = new eui.Group();
		this._gp_item1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 111;
		t.y = 331.5;
		t.elementsContent = [this._Rect3_i(),this._txt_nickname1_i(),this._txt_point1_i(),this._img_bigwin1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 465;
		return t;
	};
	_proto._txt_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_nickname1 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "昵称所属";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 94;
		return t;
	};
	_proto._txt_point1_i = function () {
		var t = new eui.Label();
		this._txt_point1 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "9999";
		t.textAlign = "center";
		t.verticalCenter = 1;
		t.width = 120;
		t.x = 324;
		return t;
	};
	_proto._img_bigwin1_i = function () {
		var t = new eui.Image();
		this._img_bigwin1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zjh_game_img_json.zjh_rank_bigwinner2";
		t.x = 4.67;
		t.y = -7.35;
		return t;
	};
	_proto._gp_item2_i = function () {
		var t = new eui.Group();
		this._gp_item2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 111;
		t.y = 429;
		t.elementsContent = [this._Rect4_i(),this._txt_nickname2_i(),this._txt_point2_i(),this._img_bigwin2_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 465;
		return t;
	};
	_proto._txt_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_nickname2 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "昵称所属";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 94;
		return t;
	};
	_proto._txt_point2_i = function () {
		var t = new eui.Label();
		this._txt_point2 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "9999";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 1;
		t.width = 120;
		t.x = 324;
		return t;
	};
	_proto._img_bigwin2_i = function () {
		var t = new eui.Image();
		this._img_bigwin2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zjh_game_img_json.zjh_rank_bigwinner2";
		t.x = 4.67;
		t.y = -7.35;
		return t;
	};
	_proto._gp_item3_i = function () {
		var t = new eui.Group();
		this._gp_item3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 111;
		t.y = 526.5;
		t.elementsContent = [this._Rect5_i(),this._txt_nickname3_i(),this._txt_point3_i(),this._img_bigwin3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 465;
		return t;
	};
	_proto._txt_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_nickname3 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "昵称所属";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 94;
		return t;
	};
	_proto._txt_point3_i = function () {
		var t = new eui.Label();
		this._txt_point3 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "9999";
		t.textAlign = "center";
		t.verticalCenter = 1;
		t.width = 120;
		t.x = 324;
		return t;
	};
	_proto._img_bigwin3_i = function () {
		var t = new eui.Image();
		this._img_bigwin3 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zjh_game_img_json.zjh_rank_bigwinner2";
		t.x = 4.67;
		t.y = -7.35;
		return t;
	};
	_proto._gp_item4_i = function () {
		var t = new eui.Group();
		this._gp_item4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 111;
		t.y = 624;
		t.elementsContent = [this._Rect6_i(),this._txt_nickname4_i(),this._txt_point4_i(),this._img_bigwin4_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 465;
		return t;
	};
	_proto._txt_nickname4_i = function () {
		var t = new eui.Label();
		this._txt_nickname4 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "昵称所属";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 94;
		return t;
	};
	_proto._txt_point4_i = function () {
		var t = new eui.Label();
		this._txt_point4 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "9999";
		t.textAlign = "center";
		t.verticalCenter = 1;
		t.width = 120;
		t.x = 324;
		return t;
	};
	_proto._img_bigwin4_i = function () {
		var t = new eui.Image();
		this._img_bigwin4 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zjh_game_img_json.zjh_rank_bigwinner2";
		t.x = 4.67;
		t.y = -7.35;
		return t;
	};
	_proto._gp_item5_i = function () {
		var t = new eui.Group();
		this._gp_item5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 111;
		t.y = 721.5;
		t.elementsContent = [this._Rect7_i(),this._txt_nickname5_i(),this._txt_point5_i(),this._img_bigwin5_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 465;
		return t;
	};
	_proto._txt_nickname5_i = function () {
		var t = new eui.Label();
		this._txt_nickname5 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "昵称所属";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 94;
		return t;
	};
	_proto._txt_point5_i = function () {
		var t = new eui.Label();
		this._txt_point5 = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 30;
		t.text = "99999";
		t.textAlign = "center";
		t.verticalCenter = 1;
		t.width = 120;
		t.x = 324;
		return t;
	};
	_proto._img_bigwin5_i = function () {
		var t = new eui.Image();
		this._img_bigwin5 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zjh_game_img_json.zjh_rank_bigwinner2";
		t.x = 4.67;
		t.y = -7.35;
		return t;
	};
	_proto._img_longtouch_i = function () {
		var t = new eui.Image();
		this._img_longtouch = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_scoresRank3";
		t.y = 1046;
		return t;
	};
	_proto._txt_backIndex_i = function () {
		var t = new eui.Label();
		this._txt_backIndex = t;
		t.horizontalCenter = 0;
		t.text = "返回首页";
		t.y = 1166;
		return t;
	};
	return result;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhajinhua/wanfaZjh.exml'] = window.wanfa13 = (function (_super) {
	__extends(wanfa13, _super);
	function wanfa13() {
		_super.call(this);
		this.skinParts = ["bg","close"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = wanfa13.prototype;

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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 825;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(65,106,390,179);
		t.source = "rulebg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "sss_title13shui";
		t.x = 168;
		t.y = 17.33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rule13_png";
		t.x = 35;
		t.y = 82;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.source = "lord_exit_btn_close_n";
		t.x = 483;
		t.y = 16;
		return t;
	};
	return wanfa13;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhajinhua/watchUI.exml'] = window.watchUI = (function (_super) {
	__extends(watchUI, _super);
	function watchUI() {
		_super.call(this);
		this.skinParts = ["_img_head","_txt_nickname"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = watchUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._img_head_i(),this._txt_nickname_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 25;
		t.ellipseWidth = 25;
		t.fillColor = 0x67498E;
		t.height = 80;
		t.width = 520;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 65;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 65;
		t.x = 12;
		return t;
	};
	_proto._txt_nickname_i = function () {
		var t = new eui.Label();
		this._txt_nickname = t;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 0;
		t.x = 94;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zjh_game_img_json.zjh_eye_icon";
		t.verticalCenter = 0;
		t.x = 434;
		return t;
	};
	return watchUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhajinhua/zjhIndex.exml'] = window.zjhIndex = (function (_super) {
	__extends(zjhIndex, _super);
	var zjhIndex$Skin849 = 	(function (_super) {
		__extends(zjhIndex$Skin849, _super);
		function zjhIndex$Skin849() {
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
						new eui.SetProperty("_Image1","source","zjh_game_img_json.zjh_btn_compare_jin")
					])
			];
		}
		var _proto = zjhIndex$Skin849.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_btn_compare_user";
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
		return zjhIndex$Skin849;
	})(eui.Skin);

	var zjhIndex$Skin850 = 	(function (_super) {
		__extends(zjhIndex$Skin850, _super);
		function zjhIndex$Skin850() {
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
		var _proto = zjhIndex$Skin850.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_btn_abandent";
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
		return zjhIndex$Skin850;
	})(eui.Skin);

	var zjhIndex$Skin851 = 	(function (_super) {
		__extends(zjhIndex$Skin851, _super);
		function zjhIndex$Skin851() {
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
		var _proto = zjhIndex$Skin851.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_icon_game_rule";
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
		return zjhIndex$Skin851;
	})(eui.Skin);

	var zjhIndex$Skin852 = 	(function (_super) {
		__extends(zjhIndex$Skin852, _super);
		function zjhIndex$Skin852() {
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
		var _proto = zjhIndex$Skin852.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_icon_sound61";
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
		return zjhIndex$Skin852;
	})(eui.Skin);

	var zjhIndex$Skin853 = 	(function (_super) {
		__extends(zjhIndex$Skin853, _super);
		function zjhIndex$Skin853() {
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
		var _proto = zjhIndex$Skin853.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_icon_home3";
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
		return zjhIndex$Skin853;
	})(eui.Skin);

	var zjhIndex$Skin854 = 	(function (_super) {
		__extends(zjhIndex$Skin854, _super);
		function zjhIndex$Skin854() {
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
		var _proto = zjhIndex$Skin854.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_icon_watch";
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
		return zjhIndex$Skin854;
	})(eui.Skin);

	var zjhIndex$Skin855 = 	(function (_super) {
		__extends(zjhIndex$Skin855, _super);
		function zjhIndex$Skin855() {
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
		var _proto = zjhIndex$Skin855.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_btn_close_blue";
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
		return zjhIndex$Skin855;
	})(eui.Skin);

	var zjhIndex$Skin856 = 	(function (_super) {
		__extends(zjhIndex$Skin856, _super);
		function zjhIndex$Skin856() {
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
		var _proto = zjhIndex$Skin856.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_btn_chang_purple";
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
		return zjhIndex$Skin856;
	})(eui.Skin);

	var zjhIndex$Skin857 = 	(function (_super) {
		__extends(zjhIndex$Skin857, _super);
		function zjhIndex$Skin857() {
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
		var _proto = zjhIndex$Skin857.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_btn_chang_orange";
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
		return zjhIndex$Skin857;
	})(eui.Skin);

	var zjhIndex$Skin858 = 	(function (_super) {
		__extends(zjhIndex$Skin858, _super);
		function zjhIndex$Skin858() {
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
		var _proto = zjhIndex$Skin858.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_btn_close_blue";
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
		return zjhIndex$Skin858;
	})(eui.Skin);

	var zjhIndex$Skin859 = 	(function (_super) {
		__extends(zjhIndex$Skin859, _super);
		function zjhIndex$Skin859() {
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
						new eui.SetProperty("_Image1","source","zjh_hall_json.hall_gou1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin859.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 37;
			t.size = 23;
			t.text = "开";
			t.textColor = 0x111431;
			t.verticalCenter = 8;
			return t;
		};
		return zjhIndex$Skin859;
	})(eui.Skin);

	var zjhIndex$Skin860 = 	(function (_super) {
		__extends(zjhIndex$Skin860, _super);
		function zjhIndex$Skin860() {
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
						new eui.SetProperty("_Image1","source","zjh_hall_json.hall_gou1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin860.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 37;
			t.size = 23;
			t.text = "开";
			t.textColor = 0x111431;
			t.verticalCenter = 8;
			return t;
		};
		return zjhIndex$Skin860;
	})(eui.Skin);

	var zjhIndex$Skin861 = 	(function (_super) {
		__extends(zjhIndex$Skin861, _super);
		function zjhIndex$Skin861() {
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
		var _proto = zjhIndex$Skin861.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_btn_close_blue";
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
		return zjhIndex$Skin861;
	})(eui.Skin);

	var zjhIndex$Skin862 = 	(function (_super) {
		__extends(zjhIndex$Skin862, _super);
		function zjhIndex$Skin862() {
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
		var _proto = zjhIndex$Skin862.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_btn_chang_orange";
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
		return zjhIndex$Skin862;
	})(eui.Skin);

	var zjhIndex$Skin863 = 	(function (_super) {
		__extends(zjhIndex$Skin863, _super);
		function zjhIndex$Skin863() {
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
		var _proto = zjhIndex$Skin863.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_game_img_json.zjh_readyButton";
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
		return zjhIndex$Skin863;
	})(eui.Skin);

	function zjhIndex() {
		_super.call(this);
		this.skinParts = ["_img_bg","_rect_compar_bg","_img_btn_xiazhu0","_txt_btn_xiazhu0","xiazhuBtn0","_img_btn_xiazhu1","_txt_btn_xiazhu1","xiazhuBtn1","_img_btn_xiazhu2","_txt_btn_xiazhu2","xiazhuBtn2","_img_btn_xiazhu3","_txt_btn_xiazhu3","xiazhuBtn3","xiazhuGroup","biBtn","qiBtn","qiandbiGroup","pai00","pai01","pai02","_rect_qi0","paiStatus0","kanPai","cardBox0","_img_head_di_win0","mynickname0","mypoint0","nameandpoint0","_img_head0","_txt_daoji0","_gp_daoji0","offline0","_img_watch_status0","userinfo0","_img_messagebg0","message0","messagebg0","_rect_bian0","_rect_compare0","_img_ready0","_txt_addfen0","userbox0","pai10","pai11","pai12","paiStatus1","cardBox1","_img_head_di_win1","mynickname1","mypoint1","nameandpoint1","_img_head1","_txt_daoji1","_gp_daoji1","offline1","_img_ready1","_img_watch_status1","userinfo1","_img_compare_win1","_img_compare_bg1","_img_comepare_pai10","_img_comepare_pai11","_img_comepare_pai12","_gp_comepare_cards1","_txt_compare_nickname1","_gp_compare1","_img_messagebg1","message1","messagebg1","_txt_addfen1","_img_win_type1","_rect_bian1","_rect_compare1","userbox1","pai20","pai21","pai22","paiStatus2","cardBox2","_img_head_di_win2","mynickname2","mypoint2","nameandpoint2","_img_head2","_txt_daoji2","_gp_daoji2","offline2","_img_watch_status2","_img_ready2","userinfo2","_img_compare_win2","_img_compare_bg2","_img_comepare_pai20","_img_comepare_pai21","_img_comepare_pai22","_gp_comepare_cards2","_txt_compare_nickname2","_gp_compare2","_img_messagebg2","message2","messagebg2","_rect_compare2","_rect_bian2","_img_win_type2","_txt_addfen2","userbox2","pai32","pai31","pai30","paiStatus3","cardBox3","_img_head_di_win3","mynickname3","mypoint3","nameandpoint3","_img_head3","_txt_daoji3","_gp_daoji3","offline3","_img_watch_status3","_img_ready3","userinfo3","_img_compare_win3","_img_compare_bg3","_img_comepare_pai30","_img_comepare_pai31","_img_comepare_pai32","_gp_comepare_cards3","_txt_compare_nickname3","_gp_compare3","_img_messagebg3","message3","messagebg3","_img_win_type3","_txt_addfen3","_rect_bian3","_rect_compare3","userbox3","pai42","pai41","pai40","paiStatus4","cardBox4","_img_head_di_win4","mynickname4","mypoint4","nameandpoint4","_img_head4","_txt_daoji4","_gp_daoji4","offline4","_img_watch_status4","_img_ready4","userinfo4","_img_compare_win4","_img_compare_bg4","_img_comepare_pai40","_img_comepare_pai41","_img_comepare_pai42","_gp_comepare_cards4","_txt_compare_nickname4","_gp_compare4","_img_messagebg4","message4","messagebg4","_img_win_type4","_txt_addfen4","_rect_bian4","_rect_compare4","userbox4","pai52","pai51","pai50","paiStatus5","cardBox5","_img_head_di_win5","mynickname5","mypoint5","nameandpoint5","_img_head5","_txt_daoji5","_gp_daoji5","offline5","_img_watch_status5","_img_ready5","userinfo5","_img_compare_win5","_img_compare_bg5","_img_comepare_pai50","_img_comepare_pai51","_img_comepare_pai52","_gp_comepare_cards5","_txt_compare_nickname5","_gp_compare5","_img_messagebg5","message5","messagebg5","_img_win_type5","_txt_addfen5","_rect_compare5","_rect_bian5","userbox5","_gp_main","totalscore","fenshu","fapaiLocal","daojiquan","daojiNum","daojishi","_img_leftwin","_txt_left_nickname","_txt_left_point","nameandpoint6","_img_left_head","_rect_left_lose","_img_left_lose","userinfo6","compareLeft","_img_vs_v","_img_vs_s","_img_rightwin","_txt_right_nickname","_txt_right_point","nameandpoint7","_img_right_head","_rect_right_lose","_img_right_lose","userinfo7","compareRight","compareAnimateGroup","_img_watching","_txt_paiType","_btn_rule","_btn_video","_btn_index","_btn_watch","xiaoxi","_gp_bottom","_txt_playcount","_gp_playground","_txt_pwd","_gp_pwd","_btn_kadun","_btn_copycode","_txt_fangwei","_gp_fangwei","_rect_backhall_menban","_img_backhall_close","_btn_bakchall","_btn_cancel","_gp_backhall_second","_gp_backhall","_rect_rule_menban","_rect_rule","_rect_rule_second_bg","_txt_chip_rule","_rect_rule_bg","_txt_rule0","_txt_rule1","_txt_rule2","_txt_rule3","_txt_chip_rule8","_gp_rule_playcount","_txt_chip_rule9","_gp_rule_shangxian","_img_close1","_gp_rule_second","_gp_rule","_rect_set_menban","_check_music","_check_effect","_btn_set_close","_btn_set_ok","_gp_set_second","_gp_set","_rect_chat_menban","_gp_chat_item0","_gp_chat_item1","_gp_chat_item2","_gp_chat_item3","_gp_chat_item4","_gp_chat_item5","_gp_chat_item6","_gp_chat_item7","_gp_chat_item8","_gp_chat_item9","_gp_chat_item10","_gp_chat_second","_gp_chat","_btn_ready","_img_youwin","_rect_watch_menban","_img_watchClose","_scroGp_watch","_img_watch","_gp_watchBtn","_gp_watch_second","_gp_watch","m_notice","_gp_notice","_txt_desc","_gp_desc","_rect_tishi_menban","_txt0","_txt_tishi","_gp_tishi","_gp_sure"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._gp_main_i(),this.fenshu_i(),this.fapaiLocal_i(),this.daojishi_i(),this.compareAnimateGroup_i(),this._img_watching_i(),this._gp_bottom_i(),this._gp_playground_i(),this._gp_pwd_i(),this._btn_kadun_i(),this._btn_copycode_i(),this._gp_fangwei_i(),this._gp_backhall_i(),this._gp_rule_i(),this._gp_set_i(),this._gp_chat_i(),this._btn_ready_i(),this._img_youwin_i(),this._gp_watch_i(),this._gp_notice_i(),this._gp_desc_i(),this._gp_sure_i()];
	}
	var _proto = zjhIndex.prototype;

	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_bg_i(),this._rect_compar_bg_i(),this.userbox0_i(),this.userbox1_i(),this.userbox2_i(),this.userbox3_i(),this.userbox4_i(),this.userbox5_i()];
		return t;
	};
	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1320;
		t.source = "zjh_bg_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._rect_compar_bg_i = function () {
		var t = new eui.Rect();
		this._rect_compar_bg = t;
		t.fillAlpha = 0;
		t.height = 2000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userbox0_i = function () {
		var t = new eui.Group();
		this.userbox0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.width = 440;
		t.x = 155;
		t.y = 791.11;
		t.elementsContent = [this.xiazhuGroup_i(),this.qiandbiGroup_i(),this.cardBox0_i(),this.userinfo0_i(),this.messagebg0_i(),this._rect_bian0_i(),this._rect_compare0_i(),this._img_ready0_i(),this._txt_addfen0_i()];
		return t;
	};
	_proto.xiazhuGroup_i = function () {
		var t = new eui.Group();
		this.xiazhuGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 440;
		t.y = -161.66;
		t.elementsContent = [this.xiazhuBtn0_i(),this.xiazhuBtn1_i(),this.xiazhuBtn2_i(),this.xiazhuBtn3_i()];
		return t;
	};
	_proto.xiazhuBtn0_i = function () {
		var t = new eui.Group();
		this.xiazhuBtn0 = t;
		t.height = 50;
		t.verticalCenter = 0.5;
		t.width = 50;
		t.x = 0;
		t.elementsContent = [this._img_btn_xiazhu0_i(),this._txt_btn_xiazhu0_i()];
		return t;
	};
	_proto._img_btn_xiazhu0_i = function () {
		var t = new eui.Image();
		this._img_btn_xiazhu0 = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zjh_game_img_json.zjh_btn_di_green";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._txt_btn_xiazhu0_i = function () {
		var t = new eui.Label();
		this._txt_btn_xiazhu0 = t;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "2";
		t.verticalCenter = -2;
		return t;
	};
	_proto.xiazhuBtn1_i = function () {
		var t = new eui.Group();
		this.xiazhuBtn1 = t;
		t.height = 50;
		t.verticalCenter = 0.5;
		t.width = 50;
		t.x = 130;
		t.elementsContent = [this._img_btn_xiazhu1_i(),this._txt_btn_xiazhu1_i()];
		return t;
	};
	_proto._img_btn_xiazhu1_i = function () {
		var t = new eui.Image();
		this._img_btn_xiazhu1 = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zjh_game_img_json.zjh_btn_di_blue";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._txt_btn_xiazhu1_i = function () {
		var t = new eui.Label();
		this._txt_btn_xiazhu1 = t;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "4";
		t.verticalCenter = -2;
		return t;
	};
	_proto.xiazhuBtn2_i = function () {
		var t = new eui.Group();
		this.xiazhuBtn2 = t;
		t.height = 50;
		t.verticalCenter = 0.5;
		t.width = 50;
		t.x = 260;
		t.elementsContent = [this._img_btn_xiazhu2_i(),this._txt_btn_xiazhu2_i()];
		return t;
	};
	_proto._img_btn_xiazhu2_i = function () {
		var t = new eui.Image();
		this._img_btn_xiazhu2 = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zjh_game_img_json.zjh_btn_di_purple";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._txt_btn_xiazhu2_i = function () {
		var t = new eui.Label();
		this._txt_btn_xiazhu2 = t;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "8";
		t.verticalCenter = -2;
		return t;
	};
	_proto.xiazhuBtn3_i = function () {
		var t = new eui.Group();
		this.xiazhuBtn3 = t;
		t.height = 50;
		t.verticalCenter = 0.5;
		t.width = 50;
		t.x = 390;
		t.elementsContent = [this._img_btn_xiazhu3_i(),this._txt_btn_xiazhu3_i()];
		return t;
	};
	_proto._img_btn_xiazhu3_i = function () {
		var t = new eui.Image();
		this._img_btn_xiazhu3 = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zjh_game_img_json.zjh_btn_di_oramge";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._txt_btn_xiazhu3_i = function () {
		var t = new eui.Label();
		this._txt_btn_xiazhu3 = t;
		t.horizontalCenter = 0.5;
		t.size = 38;
		t.text = "10";
		t.verticalCenter = -2;
		return t;
	};
	_proto.qiandbiGroup_i = function () {
		var t = new eui.Group();
		this.qiandbiGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 144.37;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 348.73;
		t.elementsContent = [this.biBtn_i()];
		return t;
	};
	_proto.biBtn_i = function () {
		var t = new eui.Button();
		this.biBtn = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 110;
		t.skinName = zjhIndex$Skin849;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 0;
		t.elementsContent = [this.qiBtn_i()];
		return t;
	};
	_proto.qiBtn_i = function () {
		var t = new eui.Button();
		this.qiBtn = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 110;
		t.skinName = zjhIndex$Skin850;
		return t;
	};
	_proto.cardBox0_i = function () {
		var t = new eui.Group();
		this.cardBox0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 193;
		t.y = -75.64;
		t.elementsContent = [this.pai00_i(),this.pai01_i(),this.pai02_i(),this._rect_qi0_i(),this.paiStatus0_i(),this.kanPai_i()];
		return t;
	};
	_proto.pai00_i = function () {
		var t = new eui.Image();
		this.pai00 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.source = "zjh_game_img_json.zjhf2";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai01_i = function () {
		var t = new eui.Image();
		this.pai01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.source = "zjh_game_img_json.zjhf2";
		t.width = 109;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai02_i = function () {
		var t = new eui.Image();
		this.pai02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._rect_qi0_i = function () {
		var t = new eui.Rect();
		this._rect_qi0 = t;
		t.alpha = 0.5;
		t.ellipseHeight = 26;
		t.ellipseWidth = 26;
		t.percentHeight = 90;
		t.verticalCenter = -2.5;
		t.width = 196;
		t.x = 5;
		return t;
	};
	_proto.paiStatus0_i = function () {
		var t = new eui.Image();
		this.paiStatus0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_kan";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kanPai_i = function () {
		var t = new eui.Group();
		this.kanPai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 6.5;
		t.verticalCenter = 0.5;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.ellipseHeight = 90;
		t.ellipseWidth = 55;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "点击看牌";
		t.verticalCenter = 0;
		return t;
	};
	_proto.userinfo0_i = function () {
		var t = new eui.Group();
		this.userinfo0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.horizontalCenter = 0;
		t.scaleX = 1.15;
		t.scaleY = 1.15;
		t.width = 134;
		t.y = 55.95;
		t.elementsContent = [this._img_head_di_win0_i(),this._Image1_i(),this.mynickname0_i(),this.nameandpoint0_i(),this._img_head0_i(),this._gp_daoji0_i(),this.offline0_i(),this._img_watch_status0_i()];
		return t;
	};
	_proto._img_head_di_win0_i = function () {
		var t = new eui.Image();
		this._img_head_di_win0 = t;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 134;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_player";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto.mynickname0_i = function () {
		var t = new eui.Label();
		this.mynickname0 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 100;
		t.y = 22.11;
		return t;
	};
	_proto.nameandpoint0_i = function () {
		var t = new eui.Group();
		this.nameandpoint0 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 59;
		t.elementsContent = [this._Rect2_i(),this.mypoint0_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1f1732;
		t.height = 26;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto.mypoint0_i = function () {
		var t = new eui.Label();
		this.mypoint0 = t;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "9999";
		t.textColor = 0xffffff;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_head0_i = function () {
		var t = new eui.Image();
		this._img_head0 = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._gp_daoji0_i = function () {
		var t = new eui.Group();
		this._gp_daoji0 = t;
		t.x = 24;
		t.y = 48;
		t.elementsContent = [this._Image2_i(),this._txt_daoji0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 86;
		t.source = "zjh_game_img_json.zjh_avatar_timer";
		t.width = 86;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_daoji0_i = function () {
		var t = new eui.Label();
		this._txt_daoji0 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "99";
		t.textColor = 0x602603;
		t.verticalCenter = 0;
		return t;
	};
	_proto.offline0_i = function () {
		var t = new eui.Rect();
		this.offline0 = t;
		t.alpha = 0.45;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 160;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 110;
		t.y = 12.34;
		return t;
	};
	_proto._img_watch_status0_i = function () {
		var t = new eui.Image();
		this._img_watch_status0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_guest_avatar";
		t.visible = false;
		t.x = -1.79;
		t.y = 48.92;
		return t;
	};
	_proto.messagebg0_i = function () {
		var t = new eui.Group();
		this.messagebg0 = t;
		t.x = 138;
		t.y = 29;
		t.elementsContent = [this._img_messagebg0_i(),this.message0_i()];
		return t;
	};
	_proto._img_messagebg0_i = function () {
		var t = new eui.Image();
		this._img_messagebg0 = t;
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(64,12,19,6);
		t.source = "zjh_game_img_json.zjh_game_chatbg1";
		t.width = 220;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message0_i = function () {
		var t = new eui.Label();
		this.message0 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "别吹牛逼，有本事干到底";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 5.01;
		return t;
	};
	_proto._rect_bian0_i = function () {
		var t = new eui.Rect();
		this._rect_bian0 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0;
		t.height = 147;
		t.strokeColor = 0x33e4a3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 217;
		t.x = 114;
		t.y = 73.67;
		return t;
	};
	_proto._rect_compare0_i = function () {
		var t = new eui.Rect();
		this._rect_compare0 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0.15;
		t.fillColor = 0x3ae8ad;
		t.height = 147;
		t.strokeAlpha = 0;
		t.strokeColor = 0x33e4a3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 217;
		t.x = 114;
		t.y = 73.67;
		return t;
	};
	_proto._img_ready0_i = function () {
		var t = new eui.Image();
		this._img_ready0 = t;
		t.horizontalCenter = 1;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.source = "zjh_game_img_json.zjh_ready";
		t.visible = false;
		t.y = -17.96;
		return t;
	};
	_proto._txt_addfen0_i = function () {
		var t = new eui.Label();
		this._txt_addfen0 = t;
		t.horizontalCenter = 0;
		t.text = "99999";
		t.textColor = 0xffde38;
		t.visible = false;
		t.y = -0.48;
		return t;
	};
	_proto.userbox1_i = function () {
		var t = new eui.Group();
		this.userbox1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 238;
		t.width = 134;
		t.x = 616;
		t.y = 369;
		t.elementsContent = [this.cardBox1_i(),this.userinfo1_i(),this._gp_compare1_i(),this.messagebg1_i(),this._txt_addfen1_i(),this._img_win_type1_i(),this._rect_bian1_i(),this._rect_compare1_i()];
		return t;
	};
	_proto.cardBox1_i = function () {
		var t = new eui.Group();
		this.cardBox1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -125;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 94.84;
		t.elementsContent = [this.pai10_i(),this.pai11_i(),this.pai12_i(),this.paiStatus1_i()];
		return t;
	};
	_proto.pai10_i = function () {
		var t = new eui.Image();
		this.pai10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai11_i = function () {
		var t = new eui.Image();
		this.pai11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai12_i = function () {
		var t = new eui.Image();
		this.pai12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiStatus1_i = function () {
		var t = new eui.Image();
		this.paiStatus1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_kan";
		t.verticalCenter = -2;
		return t;
	};
	_proto.userinfo1_i = function () {
		var t = new eui.Group();
		this.userinfo1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.horizontalCenter = -12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 134;
		t.y = 55.95;
		t.elementsContent = [this._img_head_di_win1_i(),this._Image3_i(),this.mynickname1_i(),this.nameandpoint1_i(),this._img_head1_i(),this._gp_daoji1_i(),this.offline1_i(),this._img_ready1_i(),this._img_watch_status1_i()];
		return t;
	};
	_proto._img_head_di_win1_i = function () {
		var t = new eui.Image();
		this._img_head_di_win1 = t;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 134;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_player";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto.mynickname1_i = function () {
		var t = new eui.Label();
		this.mynickname1 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 100;
		t.y = 22.11;
		return t;
	};
	_proto.nameandpoint1_i = function () {
		var t = new eui.Group();
		this.nameandpoint1 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 59;
		t.elementsContent = [this._Rect3_i(),this.mypoint1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1F1732;
		t.height = 26;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto.mypoint1_i = function () {
		var t = new eui.Label();
		this.mypoint1 = t;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_head1_i = function () {
		var t = new eui.Image();
		this._img_head1 = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._gp_daoji1_i = function () {
		var t = new eui.Group();
		this._gp_daoji1 = t;
		t.x = 24;
		t.y = 48;
		t.elementsContent = [this._Image4_i(),this._txt_daoji1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 86;
		t.source = "zjh_game_img_json.zjh_avatar_timer";
		t.width = 86;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_daoji1_i = function () {
		var t = new eui.Label();
		this._txt_daoji1 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "99";
		t.textColor = 0x602603;
		t.verticalCenter = 0;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Rect();
		this.offline1 = t;
		t.alpha = 0.45;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 160;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 110;
		t.y = 12.49;
		return t;
	};
	_proto._img_ready1_i = function () {
		var t = new eui.Image();
		this._img_ready1 = t;
		t.horizontalCenter = -114;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.source = "zjh_game_img_json.zjh_ready";
		t.y = 65.86;
		return t;
	};
	_proto._img_watch_status1_i = function () {
		var t = new eui.Image();
		this._img_watch_status1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_guest_avatar";
		t.visible = false;
		t.x = -1.79;
		t.y = 48.92;
		return t;
	};
	_proto._gp_compare1_i = function () {
		var t = new eui.Group();
		this._gp_compare1 = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = -70.5;
		t.y = 41.25;
		t.elementsContent = [this._img_compare_win1_i(),this._img_compare_bg1_i(),this._gp_comepare_cards1_i(),this._txt_compare_nickname1_i()];
		return t;
	};
	_proto._img_compare_win1_i = function () {
		var t = new eui.Image();
		this._img_compare_win1 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(83,62,17,51);
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.visible = false;
		t.width = 210;
		t.x = 1.78;
		t.y = 0;
		return t;
	};
	_proto._img_compare_bg1_i = function () {
		var t = new eui.Image();
		this._img_compare_bg1 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(80,97,48,94);
		t.source = "zjh_game_img_json.zjh_player";
		t.width = 220;
		t.x = -1.78;
		t.y = -1.52;
		return t;
	};
	_proto._gp_comepare_cards1_i = function () {
		var t = new eui.Group();
		this._gp_comepare_cards1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 69.21;
		t.elementsContent = [this._img_comepare_pai10_i(),this._img_comepare_pai11_i(),this._img_comepare_pai12_i()];
		return t;
	};
	_proto._img_comepare_pai10_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai11_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai12_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhm13";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto._txt_compare_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_compare_nickname1 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.width = 150;
		t.y = 40.56;
		return t;
	};
	_proto.messagebg1_i = function () {
		var t = new eui.Group();
		this.messagebg1 = t;
		t.right = 52;
		t.visible = false;
		t.y = 29;
		t.elementsContent = [this._img_messagebg1_i(),this.message1_i()];
		return t;
	};
	_proto._img_messagebg1_i = function () {
		var t = new eui.Image();
		this._img_messagebg1 = t;
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(21,12,8,6);
		t.source = "zjh_game_img_json.zjh_game_chatbg0";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Label();
		this.message1 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "别吹";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 5.01;
		return t;
	};
	_proto._txt_addfen1_i = function () {
		var t = new eui.Label();
		this._txt_addfen1 = t;
		t.right = 210;
		t.text = "99999";
		t.textColor = 0xFFDE38;
		t.y = 108;
		return t;
	};
	_proto._img_win_type1_i = function () {
		var t = new eui.Image();
		this._img_win_type1 = t;
		t.right = 195;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zjh_game_img_json.zjh_tonghuaying";
		t.y = 111;
		return t;
	};
	_proto._rect_bian1_i = function () {
		var t = new eui.Rect();
		this._rect_bian1 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0;
		t.height = 180;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 250;
		t.x = -131.7;
		t.y = 55.48;
		return t;
	};
	_proto._rect_compare1_i = function () {
		var t = new eui.Rect();
		this._rect_compare1 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0.15;
		t.fillColor = 0x3AE8AD;
		t.height = 180;
		t.strokeAlpha = 0;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 250;
		t.x = -131.7;
		t.y = 55.48;
		return t;
	};
	_proto.userbox2_i = function () {
		var t = new eui.Group();
		this.userbox2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 238;
		t.width = 134;
		t.x = 616;
		t.y = 169;
		t.elementsContent = [this.cardBox2_i(),this.userinfo2_i(),this._gp_compare2_i(),this.messagebg2_i(),this._rect_compare2_i(),this._rect_bian2_i(),this._img_win_type2_i(),this._txt_addfen2_i()];
		return t;
	};
	_proto.cardBox2_i = function () {
		var t = new eui.Group();
		this.cardBox2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -125;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 94.84;
		t.elementsContent = [this.pai20_i(),this.pai21_i(),this.pai22_i(),this.paiStatus2_i()];
		return t;
	};
	_proto.pai20_i = function () {
		var t = new eui.Image();
		this.pai20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai21_i = function () {
		var t = new eui.Image();
		this.pai21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai22_i = function () {
		var t = new eui.Image();
		this.pai22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiStatus2_i = function () {
		var t = new eui.Image();
		this.paiStatus2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_kan";
		t.verticalCenter = -2;
		return t;
	};
	_proto.userinfo2_i = function () {
		var t = new eui.Group();
		this.userinfo2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.horizontalCenter = -12;
		t.width = 134;
		t.y = 55.95;
		t.elementsContent = [this._img_head_di_win2_i(),this._Image5_i(),this.mynickname2_i(),this.nameandpoint2_i(),this._img_head2_i(),this._gp_daoji2_i(),this.offline2_i(),this._img_watch_status2_i(),this._img_ready2_i()];
		return t;
	};
	_proto._img_head_di_win2_i = function () {
		var t = new eui.Image();
		this._img_head_di_win2 = t;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 134;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_player";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto.mynickname2_i = function () {
		var t = new eui.Label();
		this.mynickname2 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 100;
		t.y = 22.11;
		return t;
	};
	_proto.nameandpoint2_i = function () {
		var t = new eui.Group();
		this.nameandpoint2 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 59;
		t.elementsContent = [this._Rect4_i(),this.mypoint2_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1F1732;
		t.height = 26;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto.mypoint2_i = function () {
		var t = new eui.Label();
		this.mypoint2 = t;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_head2_i = function () {
		var t = new eui.Image();
		this._img_head2 = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._gp_daoji2_i = function () {
		var t = new eui.Group();
		this._gp_daoji2 = t;
		t.x = 24;
		t.y = 48;
		t.elementsContent = [this._Image6_i(),this._txt_daoji2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 86;
		t.source = "zjh_game_img_json.zjh_avatar_timer";
		t.width = 86;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_daoji2_i = function () {
		var t = new eui.Label();
		this._txt_daoji2 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "99";
		t.textColor = 0x602603;
		t.verticalCenter = 0;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Rect();
		this.offline2 = t;
		t.alpha = 0.45;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 160;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 110;
		t.y = 12.5;
		return t;
	};
	_proto._img_watch_status2_i = function () {
		var t = new eui.Image();
		this._img_watch_status2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_guest_avatar";
		t.visible = false;
		t.x = -1.79;
		t.y = 48.92;
		return t;
	};
	_proto._img_ready2_i = function () {
		var t = new eui.Image();
		this._img_ready2 = t;
		t.horizontalCenter = -116;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.source = "zjh_game_img_json.zjh_ready";
		t.y = 65.86;
		return t;
	};
	_proto._gp_compare2_i = function () {
		var t = new eui.Group();
		this._gp_compare2 = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = -68.5;
		t.y = 41.25;
		t.elementsContent = [this._img_compare_win2_i(),this._img_compare_bg2_i(),this._gp_comepare_cards2_i(),this._txt_compare_nickname2_i()];
		return t;
	};
	_proto._img_compare_win2_i = function () {
		var t = new eui.Image();
		this._img_compare_win2 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(83,62,17,51);
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.visible = false;
		t.width = 210;
		t.x = 1.78;
		t.y = 0;
		return t;
	};
	_proto._img_compare_bg2_i = function () {
		var t = new eui.Image();
		this._img_compare_bg2 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(80,97,48,94);
		t.source = "zjh_game_img_json.zjh_player";
		t.width = 220;
		t.x = 0;
		t.y = -1.52;
		return t;
	};
	_proto._gp_comepare_cards2_i = function () {
		var t = new eui.Group();
		this._gp_comepare_cards2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 2;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 67.1;
		t.elementsContent = [this._img_comepare_pai20_i(),this._img_comepare_pai21_i(),this._img_comepare_pai22_i()];
		return t;
	};
	_proto._img_comepare_pai20_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai21_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai22_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto._txt_compare_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_compare_nickname2 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.width = 150;
		t.y = 40.56;
		return t;
	};
	_proto.messagebg2_i = function () {
		var t = new eui.Group();
		this.messagebg2 = t;
		t.right = 54;
		t.y = 29;
		t.elementsContent = [this._img_messagebg2_i(),this.message2_i()];
		return t;
	};
	_proto._img_messagebg2_i = function () {
		var t = new eui.Image();
		this._img_messagebg2 = t;
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(21,12,8,6);
		t.source = "zjh_game_img_json.zjh_game_chatbg0";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Label();
		this.message2 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "别吹牛";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 5.01;
		return t;
	};
	_proto._rect_compare2_i = function () {
		var t = new eui.Rect();
		this._rect_compare2 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0.15;
		t.fillColor = 0x3AE8AD;
		t.height = 180;
		t.strokeAlpha = 0;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 250;
		t.x = -131.7;
		t.y = 55.48;
		return t;
	};
	_proto._rect_bian2_i = function () {
		var t = new eui.Rect();
		this._rect_bian2 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0;
		t.height = 180;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 250;
		t.x = -131.7;
		t.y = 55.48;
		return t;
	};
	_proto._img_win_type2_i = function () {
		var t = new eui.Image();
		this._img_win_type2 = t;
		t.right = 195;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zjh_game_img_json.zjh_tonghuaying";
		t.y = 111;
		return t;
	};
	_proto._txt_addfen2_i = function () {
		var t = new eui.Label();
		this._txt_addfen2 = t;
		t.right = 204;
		t.text = "99999";
		t.textColor = 0xFFDE38;
		t.y = 108;
		return t;
	};
	_proto.userbox3_i = function () {
		var t = new eui.Group();
		this.userbox3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 238;
		t.width = 134;
		t.x = 310;
		t.y = 3.16;
		t.elementsContent = [this.cardBox3_i(),this.userinfo3_i(),this._gp_compare3_i(),this.messagebg3_i(),this._img_win_type3_i(),this._txt_addfen3_i(),this._rect_bian3_i(),this._rect_compare3_i()];
		return t;
	};
	_proto.cardBox3_i = function () {
		var t = new eui.Group();
		this.cardBox3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 2.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 215.53;
		t.elementsContent = [this.pai32_i(),this.pai31_i(),this.pai30_i(),this.paiStatus3_i()];
		return t;
	};
	_proto.pai32_i = function () {
		var t = new eui.Image();
		this.pai32 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai31_i = function () {
		var t = new eui.Image();
		this.pai31 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai30_i = function () {
		var t = new eui.Image();
		this.pai30 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiStatus3_i = function () {
		var t = new eui.Image();
		this.paiStatus3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_kan";
		t.verticalCenter = -2;
		return t;
	};
	_proto.userinfo3_i = function () {
		var t = new eui.Group();
		this.userinfo3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.horizontalCenter = 0;
		t.width = 134;
		t.y = 39.95;
		t.elementsContent = [this._img_head_di_win3_i(),this._Image7_i(),this.mynickname3_i(),this.nameandpoint3_i(),this._img_head3_i(),this._gp_daoji3_i(),this.offline3_i(),this._img_watch_status3_i(),this._img_ready3_i()];
		return t;
	};
	_proto._img_head_di_win3_i = function () {
		var t = new eui.Image();
		this._img_head_di_win3 = t;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 134;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_player";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto.mynickname3_i = function () {
		var t = new eui.Label();
		this.mynickname3 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 100;
		t.y = 22.11;
		return t;
	};
	_proto.nameandpoint3_i = function () {
		var t = new eui.Group();
		this.nameandpoint3 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 59;
		t.elementsContent = [this._Rect5_i(),this.mypoint3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1F1732;
		t.height = 26;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto.mypoint3_i = function () {
		var t = new eui.Label();
		this.mypoint3 = t;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_head3_i = function () {
		var t = new eui.Image();
		this._img_head3 = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._gp_daoji3_i = function () {
		var t = new eui.Group();
		this._gp_daoji3 = t;
		t.x = 24;
		t.y = 48;
		t.elementsContent = [this._Image8_i(),this._txt_daoji3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 86;
		t.source = "zjh_game_img_json.zjh_avatar_timer";
		t.width = 86;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_daoji3_i = function () {
		var t = new eui.Label();
		this._txt_daoji3 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "99";
		t.textColor = 0x602603;
		t.verticalCenter = 0;
		return t;
	};
	_proto.offline3_i = function () {
		var t = new eui.Rect();
		this.offline3 = t;
		t.alpha = 0.45;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 160;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 110;
		t.y = 10.93;
		return t;
	};
	_proto._img_watch_status3_i = function () {
		var t = new eui.Image();
		this._img_watch_status3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_guest_avatar";
		t.visible = false;
		t.x = -1.79;
		t.y = 48.92;
		return t;
	};
	_proto._img_ready3_i = function () {
		var t = new eui.Image();
		this._img_ready3 = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.source = "zjh_game_img_json.zjh_ready";
		t.x = 23.529411764705912;
		t.y = 218.19999999999996;
		return t;
	};
	_proto._gp_compare3_i = function () {
		var t = new eui.Group();
		this._gp_compare3 = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = -32;
		t.y = 22.69;
		t.elementsContent = [this._img_compare_win3_i(),this._img_compare_bg3_i(),this._gp_comepare_cards3_i(),this._txt_compare_nickname3_i()];
		return t;
	};
	_proto._img_compare_win3_i = function () {
		var t = new eui.Image();
		this._img_compare_win3 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(83,62,17,51);
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.visible = false;
		t.width = 210;
		t.x = 3.56;
		t.y = -1.78;
		return t;
	};
	_proto._img_compare_bg3_i = function () {
		var t = new eui.Image();
		this._img_compare_bg3 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(80,97,48,94);
		t.source = "zjh_game_img_json.zjh_player";
		t.width = 220;
		t.x = 0;
		t.y = -1.52;
		return t;
	};
	_proto._gp_comepare_cards3_i = function () {
		var t = new eui.Group();
		this._gp_comepare_cards3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 4;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 69.21;
		t.elementsContent = [this._img_comepare_pai30_i(),this._img_comepare_pai31_i(),this._img_comepare_pai32_i()];
		return t;
	};
	_proto._img_comepare_pai30_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai30 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai31_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai31 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai32_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai32 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto._txt_compare_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_compare_nickname3 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.width = 150;
		t.y = 40.56;
		return t;
	};
	_proto.messagebg3_i = function () {
		var t = new eui.Group();
		this.messagebg3 = t;
		t.right = -4;
		t.visible = false;
		t.y = 194.13;
		t.elementsContent = [this._img_messagebg3_i(),this.message3_i()];
		return t;
	};
	_proto._img_messagebg3_i = function () {
		var t = new eui.Image();
		this._img_messagebg3 = t;
		t.anchorOffsetX = 250;
		t.anchorOffsetY = 43;
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(21,12,8,6);
		t.scaleY = -1;
		t.source = "zjh_game_img_json.zjh_game_chatbg1";
		t.width = 120;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Label();
		this.message3 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "别吹牛逼";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 12.66;
		return t;
	};
	_proto._img_win_type3_i = function () {
		var t = new eui.Image();
		this._img_win_type3 = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zjh_game_img_json.zjh_tonghuaying";
		t.visible = false;
		t.y = 237;
		return t;
	};
	_proto._txt_addfen3_i = function () {
		var t = new eui.Label();
		this._txt_addfen3 = t;
		t.horizontalCenter = 0;
		t.text = "99999";
		t.textColor = 0xFFDE38;
		t.visible = false;
		t.y = 254;
		return t;
	};
	_proto._rect_bian3_i = function () {
		var t = new eui.Rect();
		this._rect_bian3 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0;
		t.height = 260;
		t.horizontalCenter = 0;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 190;
		t.y = 45.89;
		return t;
	};
	_proto._rect_compare3_i = function () {
		var t = new eui.Rect();
		this._rect_compare3 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0.15;
		t.fillColor = 0x3AE8AD;
		t.height = 260;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 190;
		t.y = 45.89;
		return t;
	};
	_proto.userbox4_i = function () {
		var t = new eui.Group();
		this.userbox4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 238;
		t.width = 134;
		t.x = 8;
		t.y = 169;
		t.elementsContent = [this.cardBox4_i(),this.userinfo4_i(),this._gp_compare4_i(),this.messagebg4_i(),this._img_win_type4_i(),this._txt_addfen4_i(),this._rect_bian4_i(),this._rect_compare4_i()];
		return t;
	};
	_proto.cardBox4_i = function () {
		var t = new eui.Group();
		this.cardBox4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 113.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 94.84;
		t.elementsContent = [this.pai42_i(),this.pai41_i(),this.pai40_i(),this.paiStatus4_i()];
		return t;
	};
	_proto.pai42_i = function () {
		var t = new eui.Image();
		this.pai42 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai41_i = function () {
		var t = new eui.Image();
		this.pai41 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai40_i = function () {
		var t = new eui.Image();
		this.pai40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiStatus4_i = function () {
		var t = new eui.Image();
		this.paiStatus4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_kan";
		t.verticalCenter = -2;
		return t;
	};
	_proto.userinfo4_i = function () {
		var t = new eui.Group();
		this.userinfo4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.horizontalCenter = 0;
		t.width = 134;
		t.y = 55.95;
		t.elementsContent = [this._img_head_di_win4_i(),this._Image9_i(),this.mynickname4_i(),this.nameandpoint4_i(),this._img_head4_i(),this._gp_daoji4_i(),this.offline4_i(),this._img_watch_status4_i(),this._img_ready4_i()];
		return t;
	};
	_proto._img_head_di_win4_i = function () {
		var t = new eui.Image();
		this._img_head_di_win4 = t;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 134;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_player";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto.mynickname4_i = function () {
		var t = new eui.Label();
		this.mynickname4 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 100;
		t.y = 22.11;
		return t;
	};
	_proto.nameandpoint4_i = function () {
		var t = new eui.Group();
		this.nameandpoint4 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 59;
		t.elementsContent = [this._Rect6_i(),this.mypoint4_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1F1732;
		t.height = 26;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto.mypoint4_i = function () {
		var t = new eui.Label();
		this.mypoint4 = t;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_head4_i = function () {
		var t = new eui.Image();
		this._img_head4 = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._gp_daoji4_i = function () {
		var t = new eui.Group();
		this._gp_daoji4 = t;
		t.visible = false;
		t.x = 24;
		t.y = 48;
		t.elementsContent = [this._Image10_i(),this._txt_daoji4_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 86;
		t.source = "zjh_game_img_json.zjh_avatar_timer";
		t.width = 86;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_daoji4_i = function () {
		var t = new eui.Label();
		this._txt_daoji4 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "99";
		t.textColor = 0x602603;
		t.verticalCenter = 0;
		return t;
	};
	_proto.offline4_i = function () {
		var t = new eui.Rect();
		this.offline4 = t;
		t.alpha = 0.45;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 160;
		t.horizontalCenter = -2;
		t.visible = false;
		t.width = 110;
		t.y = 13.29;
		return t;
	};
	_proto._img_watch_status4_i = function () {
		var t = new eui.Image();
		this._img_watch_status4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_guest_avatar";
		t.visible = false;
		t.x = -1.79;
		t.y = 48.92;
		return t;
	};
	_proto._img_ready4_i = function () {
		var t = new eui.Image();
		this._img_ready4 = t;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.source = "zjh_game_img_json.zjh_ready";
		t.x = 141.43529411764706;
		t.y = 64.27;
		return t;
	};
	_proto._gp_compare4_i = function () {
		var t = new eui.Group();
		this._gp_compare4 = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = -10.17;
		t.y = 37.25;
		t.elementsContent = [this._img_compare_win4_i(),this._img_compare_bg4_i(),this._gp_comepare_cards4_i(),this._txt_compare_nickname4_i()];
		return t;
	};
	_proto._img_compare_win4_i = function () {
		var t = new eui.Image();
		this._img_compare_win4 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(83,62,17,51);
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.visible = false;
		t.width = 210;
		t.x = 4.22;
		t.y = 0;
		return t;
	};
	_proto._img_compare_bg4_i = function () {
		var t = new eui.Image();
		this._img_compare_bg4 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(80,97,48,94);
		t.source = "zjh_game_img_json.zjh_player";
		t.width = 220;
		t.x = 0;
		t.y = -1.52;
		return t;
	};
	_proto._gp_comepare_cards4_i = function () {
		var t = new eui.Group();
		this._gp_comepare_cards4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 4;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 69.21;
		t.elementsContent = [this._img_comepare_pai40_i(),this._img_comepare_pai41_i(),this._img_comepare_pai42_i()];
		return t;
	};
	_proto._img_comepare_pai40_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai41_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai41 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai42_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai42 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto._txt_compare_nickname4_i = function () {
		var t = new eui.Label();
		this._txt_compare_nickname4 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.width = 150;
		t.y = 40.56;
		return t;
	};
	_proto.messagebg4_i = function () {
		var t = new eui.Group();
		this.messagebg4 = t;
		t.x = 45.32;
		t.y = 29;
		t.elementsContent = [this._img_messagebg4_i(),this.message4_i()];
		return t;
	};
	_proto._img_messagebg4_i = function () {
		var t = new eui.Image();
		this._img_messagebg4 = t;
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(72,12,16,6);
		t.source = "zjh_game_img_json.zjh_game_chatbg1";
		t.width = 220;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message4_i = function () {
		var t = new eui.Label();
		this.message4 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "别吹牛逼，有本事干到底";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 5.01;
		return t;
	};
	_proto._img_win_type4_i = function () {
		var t = new eui.Image();
		this._img_win_type4 = t;
		t.right = -171;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zjh_game_img_json.zjh_tonghuaying";
		t.y = 111;
		return t;
	};
	_proto._txt_addfen4_i = function () {
		var t = new eui.Label();
		this._txt_addfen4 = t;
		t.right = -151;
		t.text = "99999";
		t.textColor = 0xFFDE38;
		t.y = 108;
		return t;
	};
	_proto._rect_bian4_i = function () {
		var t = new eui.Rect();
		this._rect_bian4 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0;
		t.height = 180;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 250;
		t.x = 2.99;
		t.y = 56.44;
		return t;
	};
	_proto._rect_compare4_i = function () {
		var t = new eui.Rect();
		this._rect_compare4 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0.15;
		t.fillColor = 0x3AE8AD;
		t.height = 180;
		t.strokeAlpha = 0;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 250;
		t.x = 2.99;
		t.y = 56.44;
		return t;
	};
	_proto.userbox5_i = function () {
		var t = new eui.Group();
		this.userbox5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 238;
		t.width = 134;
		t.x = 8;
		t.y = 369;
		t.elementsContent = [this.cardBox5_i(),this.userinfo5_i(),this._gp_compare5_i(),this.messagebg5_i(),this._img_win_type5_i(),this._txt_addfen5_i(),this._rect_compare5_i(),this._rect_bian5_i()];
		return t;
	};
	_proto.cardBox5_i = function () {
		var t = new eui.Group();
		this.cardBox5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 113.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 94.84;
		t.elementsContent = [this.pai52_i(),this.pai51_i(),this.pai50_i(),this.paiStatus5_i()];
		return t;
	};
	_proto.pai52_i = function () {
		var t = new eui.Image();
		this.pai52 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai51_i = function () {
		var t = new eui.Image();
		this.pai51 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai50_i = function () {
		var t = new eui.Image();
		this.pai50 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjhmCard";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiStatus5_i = function () {
		var t = new eui.Image();
		this.paiStatus5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_kan";
		t.verticalCenter = -2;
		return t;
	};
	_proto.userinfo5_i = function () {
		var t = new eui.Group();
		this.userinfo5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.horizontalCenter = 0;
		t.width = 134;
		t.y = 55.95;
		t.elementsContent = [this._img_head_di_win5_i(),this._Image11_i(),this.mynickname5_i(),this.nameandpoint5_i(),this._img_head5_i(),this._gp_daoji5_i(),this.offline5_i(),this._img_watch_status5_i(),this._img_ready5_i()];
		return t;
	};
	_proto._img_head_di_win5_i = function () {
		var t = new eui.Image();
		this._img_head_di_win5 = t;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 134;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_player";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto.mynickname5_i = function () {
		var t = new eui.Label();
		this.mynickname5 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 100;
		t.y = 22.11;
		return t;
	};
	_proto.nameandpoint5_i = function () {
		var t = new eui.Group();
		this.nameandpoint5 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 59;
		t.elementsContent = [this._Rect7_i(),this.mypoint5_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1F1732;
		t.height = 26;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto.mypoint5_i = function () {
		var t = new eui.Label();
		this.mypoint5 = t;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_head5_i = function () {
		var t = new eui.Image();
		this._img_head5 = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._gp_daoji5_i = function () {
		var t = new eui.Group();
		this._gp_daoji5 = t;
		t.x = 24;
		t.y = 48;
		t.elementsContent = [this._Image12_i(),this._txt_daoji5_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 86;
		t.source = "zjh_game_img_json.zjh_avatar_timer";
		t.width = 86;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_daoji5_i = function () {
		var t = new eui.Label();
		this._txt_daoji5 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "99";
		t.textColor = 0x602603;
		t.verticalCenter = 0;
		return t;
	};
	_proto.offline5_i = function () {
		var t = new eui.Rect();
		this.offline5 = t;
		t.alpha = 0.45;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 160;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 110;
		t.y = 13.28;
		return t;
	};
	_proto._img_watch_status5_i = function () {
		var t = new eui.Image();
		this._img_watch_status5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_guest_avatar";
		t.visible = false;
		t.x = -1.79;
		t.y = 48.92;
		return t;
	};
	_proto._img_ready5_i = function () {
		var t = new eui.Image();
		this._img_ready5 = t;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.source = "zjh_game_img_json.zjh_ready";
		t.x = 141.43529411764706;
		t.y = 60.27;
		return t;
	};
	_proto._gp_compare5_i = function () {
		var t = new eui.Group();
		this._gp_compare5 = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = -11.21;
		t.y = 35.73;
		t.elementsContent = [this._img_compare_win5_i(),this._img_compare_bg5_i(),this._gp_comepare_cards5_i(),this._txt_compare_nickname5_i()];
		return t;
	};
	_proto._img_compare_win5_i = function () {
		var t = new eui.Image();
		this._img_compare_win5 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(83,62,17,51);
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.visible = false;
		t.width = 210;
		t.x = 4.22;
		t.y = 0;
		return t;
	};
	_proto._img_compare_bg5_i = function () {
		var t = new eui.Image();
		this._img_compare_bg5 = t;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(80,97,48,94);
		t.source = "zjh_game_img_json.zjh_player";
		t.width = 220;
		t.x = 0;
		t.y = -1.52;
		return t;
	};
	_proto._gp_comepare_cards5_i = function () {
		var t = new eui.Group();
		this._gp_comepare_cards5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 2;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 64.99;
		t.elementsContent = [this._img_comepare_pai50_i(),this._img_comepare_pai51_i(),this._img_comepare_pai52_i()];
		return t;
	};
	_proto._img_comepare_pai50_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai50 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai51_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai51 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto._img_comepare_pai52_i = function () {
		var t = new eui.Image();
		this._img_comepare_pai52 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjht13";
		t.width = 109;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto._txt_compare_nickname5_i = function () {
		var t = new eui.Label();
		this._txt_compare_nickname5 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.width = 150;
		t.y = 40.56;
		return t;
	};
	_proto.messagebg5_i = function () {
		var t = new eui.Group();
		this.messagebg5 = t;
		t.x = 45.32;
		t.y = 29;
		t.elementsContent = [this._img_messagebg5_i(),this.message5_i()];
		return t;
	};
	_proto._img_messagebg5_i = function () {
		var t = new eui.Image();
		this._img_messagebg5 = t;
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(72,12,16,6);
		t.source = "zjh_game_img_json.zjh_game_chatbg1";
		t.width = 120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message5_i = function () {
		var t = new eui.Label();
		this.message5 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "请先进群";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 5.01;
		return t;
	};
	_proto._img_win_type5_i = function () {
		var t = new eui.Image();
		this._img_win_type5 = t;
		t.right = -171;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zjh_game_img_json.zjh_tonghuaying";
		t.y = 111;
		return t;
	};
	_proto._txt_addfen5_i = function () {
		var t = new eui.Label();
		this._txt_addfen5 = t;
		t.right = -153;
		t.text = "99999";
		t.textColor = 0xFFDE38;
		t.y = 108;
		return t;
	};
	_proto._rect_compare5_i = function () {
		var t = new eui.Rect();
		this._rect_compare5 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0.15;
		t.fillColor = 0x3AE8AD;
		t.height = 180;
		t.strokeAlpha = 0;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 250;
		t.x = 2.99;
		t.y = 56.44;
		return t;
	};
	_proto._rect_bian5_i = function () {
		var t = new eui.Rect();
		this._rect_bian5 = t;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillAlpha = 0;
		t.height = 180;
		t.strokeColor = 0x33E4A3;
		t.strokeWeight = 3;
		t.visible = false;
		t.width = 250;
		t.x = 3;
		t.y = 56;
		return t;
	};
	_proto.fenshu_i = function () {
		var t = new eui.Group();
		this.fenshu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 8;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 304.21;
		t.elementsContent = [this._Rect8_i(),this._Image13_i(),this.totalscore_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.3;
		t.ellipseHeight = 65;
		t.ellipseWidth = 65;
		t.height = 63;
		t.horizontalCenter = 0;
		t.verticalCenter = -2;
		t.width = 200;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "zjh_game_img_json.zjh_totalScore";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto.totalscore_i = function () {
		var t = new eui.Label();
		this.totalscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 21;
		t.size = 45;
		t.text = "999";
		t.verticalCenter = -3;
		return t;
	};
	_proto.fapaiLocal_i = function () {
		var t = new eui.Image();
		this.fapaiLocal = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "zjh_game_img_json.zjhmCard";
		t.verticalCenter = -51.5;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.Group();
		this.daojishi = t;
		t.horizontalCenter = 0.5;
		t.y = 385.38;
		t.elementsContent = [this.daojiquan_i(),this.daojiNum_i()];
		return t;
	};
	_proto.daojiquan_i = function () {
		var t = new eui.Image();
		this.daojiquan = t;
		t.source = "zjh_game_img_json.zjh_time";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojiNum_i = function () {
		var t = new eui.Label();
		this.daojiNum = t;
		t.horizontalCenter = 0;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 10;
		t.width = 51;
		return t;
	};
	_proto.compareAnimateGroup_i = function () {
		var t = new eui.Group();
		this.compareAnimateGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect9_i(),this.compareLeft_i(),this.compareRight_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.height = 1800;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.compareLeft_i = function () {
		var t = new eui.Group();
		this.compareLeft = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.verticalCenter = -25;
		t.x = 0;
		t.elementsContent = [this._Image14_i(),this.userinfo6_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "zjh_game_img_json.zjh_comLeft";
		t.x = -48.95;
		t.y = 0;
		return t;
	};
	_proto.userinfo6_i = function () {
		var t = new eui.Group();
		this.userinfo6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.verticalCenter = -16;
		t.width = 134;
		t.x = 131.81;
		t.elementsContent = [this._img_leftwin_i(),this._Image15_i(),this._txt_left_nickname_i(),this.nameandpoint6_i(),this._img_left_head_i(),this._rect_left_lose_i(),this._img_left_lose_i()];
		return t;
	};
	_proto._img_leftwin_i = function () {
		var t = new eui.Image();
		this._img_leftwin = t;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_player";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto._txt_left_nickname_i = function () {
		var t = new eui.Label();
		this._txt_left_nickname = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 100;
		t.y = 22.11;
		return t;
	};
	_proto.nameandpoint6_i = function () {
		var t = new eui.Group();
		this.nameandpoint6 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 59;
		t.elementsContent = [this._Rect10_i(),this._txt_left_point_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1F1732;
		t.height = 26;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._txt_left_point_i = function () {
		var t = new eui.Label();
		this._txt_left_point = t;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_left_head_i = function () {
		var t = new eui.Image();
		this._img_left_head = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._rect_left_lose_i = function () {
		var t = new eui.Rect();
		this._rect_left_lose = t;
		t.alpha = 0.45;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 150;
		t.horizontalCenter = 0;
		t.width = 100;
		t.y = 17.47;
		return t;
	};
	_proto._img_left_lose_i = function () {
		var t = new eui.Image();
		this._img_left_lose = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjh_compare_lose";
		t.verticalCenter = 0;
		return t;
	};
	_proto.compareRight_i = function () {
		var t = new eui.Group();
		this.compareRight = t;
		t.anchorOffsetX = 0;
		t.height = 260;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.verticalCenter = 25;
		t.width = 462;
		t.x = 320;
		t.elementsContent = [this._Image16_i(),this._img_vs_v_i(),this._img_vs_s_i(),this.userinfo7_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "zjh_game_img_json.zjh_comRight";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_vs_v_i = function () {
		var t = new eui.Image();
		this._img_vs_v = t;
		t.horizontalCenter = -174.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjh_comV";
		t.verticalCenter = -61;
		return t;
	};
	_proto._img_vs_s_i = function () {
		var t = new eui.Image();
		this._img_vs_s = t;
		t.horizontalCenter = -136.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "zjh_game_img_json.zjh_comS";
		t.verticalCenter = -32;
		return t;
	};
	_proto.userinfo7_i = function () {
		var t = new eui.Group();
		this.userinfo7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.verticalCenter = -12;
		t.width = 134;
		t.x = 145.34;
		t.elementsContent = [this._img_rightwin_i(),this._Image17_i(),this._txt_right_nickname_i(),this.nameandpoint7_i(),this._img_right_head_i(),this._rect_right_lose_i(),this._img_right_lose_i()];
		return t;
	};
	_proto._img_rightwin_i = function () {
		var t = new eui.Image();
		this._img_rightwin = t;
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_playerWin";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_player";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto._txt_right_nickname_i = function () {
		var t = new eui.Label();
		this._txt_right_nickname = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 100;
		t.y = 22.11;
		return t;
	};
	_proto.nameandpoint7_i = function () {
		var t = new eui.Group();
		this.nameandpoint7 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 59;
		t.elementsContent = [this._Rect11_i(),this._txt_right_point_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1F1732;
		t.height = 26;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._txt_right_point_i = function () {
		var t = new eui.Label();
		this._txt_right_point = t;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "9999";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_right_head_i = function () {
		var t = new eui.Image();
		this._img_right_head = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._rect_right_lose_i = function () {
		var t = new eui.Rect();
		this._rect_right_lose = t;
		t.alpha = 0.45;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 150;
		t.horizontalCenter = 0;
		t.width = 100;
		t.y = 16.74;
		return t;
	};
	_proto._img_right_lose_i = function () {
		var t = new eui.Image();
		this._img_right_lose = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "zjh_game_img_json.zjh_compare_lose";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_watching_i = function () {
		var t = new eui.Image();
		this._img_watching = t;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_is_watching";
		t.visible = false;
		t.y = 620;
		return t;
	};
	_proto._gp_bottom_i = function () {
		var t = new eui.Group();
		this._gp_bottom = t;
		t.height = 86;
		t.horizontalCenter = 0;
		t.y = 1132;
		t.elementsContent = [this._Image18_i(),this._txt_paiType_i(),this._btn_rule_i(),this._btn_video_i(),this._btn_index_i(),this._btn_watch_i(),this.xiaoxi_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,117,1242,20);
		t.scaleX = 0.61;
		t.scaleY = 0.61;
		t.source = "zjh_game_img_json.zjh_footer_bull";
		t.y = 0;
		return t;
	};
	_proto._txt_paiType_i = function () {
		var t = new eui.Label();
		this._txt_paiType = t;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 33;
		t.text = "高排";
		return t;
	};
	_proto._btn_rule_i = function () {
		var t = new eui.Button();
		this._btn_rule = t;
		t.height = 55;
		t.label = "";
		t.verticalCenter = 0.5;
		t.width = 55;
		t.x = 40;
		t.skinName = zjhIndex$Skin851;
		return t;
	};
	_proto._btn_video_i = function () {
		var t = new eui.Button();
		this._btn_video = t;
		t.height = 55;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 55;
		t.x = 135;
		t.skinName = zjhIndex$Skin852;
		return t;
	};
	_proto._btn_index_i = function () {
		var t = new eui.Button();
		this._btn_index = t;
		t.height = 55;
		t.label = "";
		t.verticalCenter = 0.5;
		t.visible = false;
		t.width = 55;
		t.x = 510;
		t.skinName = zjhIndex$Skin853;
		return t;
	};
	_proto._btn_watch_i = function () {
		var t = new eui.Button();
		this._btn_watch = t;
		t.height = 55;
		t.label = "";
		t.verticalCenter = 0.5;
		t.width = 55;
		t.x = 565.76;
		t.skinName = zjhIndex$Skin854;
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Image();
		this.xiaoxi = t;
		t.height = 55;
		t.source = "zjh_game_img_json.zjh_icon_game_message";
		t.verticalCenter = 0;
		t.width = 55;
		t.x = 668;
		return t;
	};
	_proto._gp_playground_i = function () {
		var t = new eui.Group();
		this._gp_playground = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 8.48;
		t.elementsContent = [this._Rect12_i(),this._txt_playcount_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 150;
		return t;
	};
	_proto._txt_playcount_i = function () {
		var t = new eui.Label();
		this._txt_playcount = t;
		t.alpha = 0.8;
		t.horizontalCenter = 0;
		t.size = 33;
		t.text = "10/10";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_pwd_i = function () {
		var t = new eui.Group();
		this._gp_pwd = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 10;
		t.elementsContent = [this._Rect13_i(),this._txt_pwd_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 280;
		return t;
	};
	_proto._txt_pwd_i = function () {
		var t = new eui.Label();
		this._txt_pwd = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "六人金花999999";
		t.verticalCenter = 0;
		return t;
	};
	_proto._btn_kadun_i = function () {
		var t = new eui.Image();
		this._btn_kadun = t;
		t.source = "zjh_game_img_json.zjh_ka_btn";
		t.x = 555.21;
		t.y = 15.15;
		return t;
	};
	_proto._btn_copycode_i = function () {
		var t = new eui.Image();
		this._btn_copycode = t;
		t.source = "zjh_game_img_json.zjh_copyme";
		t.x = 556.09;
		t.y = 81.8;
		return t;
	};
	_proto._gp_fangwei_i = function () {
		var t = new eui.Group();
		this._gp_fangwei = t;
		t.x = 22;
		t.y = 16.67;
		t.elementsContent = [this._Rect14_i(),this._Image19_i(),this._txt_fangwei_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.2;
		t.ellipseHeight = 35;
		t.ellipseWidth = 35;
		t.fillColor = 0xffffff;
		t.height = 51;
		t.verticalCenter = 1;
		t.width = 150;
		t.x = 46;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "zjh_game_img_json.zjh_fwm";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_fangwei_i = function () {
		var t = new eui.Label();
		this._txt_fangwei = t;
		t.size = 32;
		t.text = "999999";
		t.verticalCenter = 0.5;
		t.x = 70;
		return t;
	};
	_proto._gp_backhall_i = function () {
		var t = new eui.Group();
		this._gp_backhall = t;
		t.height = 625;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 530;
		t.elementsContent = [this._rect_backhall_menban_i(),this._gp_backhall_second_i()];
		return t;
	};
	_proto._rect_backhall_menban_i = function () {
		var t = new eui.Rect();
		this._rect_backhall_menban = t;
		t.alpha = 0.6;
		t.height = 2000;
		t.width = 750;
		t.x = -110;
		t.y = -295;
		return t;
	};
	_proto._gp_backhall_second_i = function () {
		var t = new eui.Group();
		this._gp_backhall_second = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = -24.25;
		t.elementsContent = [this._Rect15_i(),this._Group3_i(),this._img_backhall_close_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x6d4ba8;
		t.height = 413.44;
		t.strokeColor = 0xde51f1;
		t.strokeWeight = 2;
		t.width = 547.2;
		t.x = 0;
		t.y = 24.25;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 14;
		t.y = 81.25;
		t.elementsContent = [this._Rect16_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 4;
		t.ellipseWidth = 4;
		t.fillColor = 0x281d45;
		t.height = 260;
		t.strokeColor = 0xad71cb;
		t.strokeWeight = 1;
		t.width = 497;
		t.x = 0;
		t.y = -14;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "确认返回首页";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_backhall_close_i = function () {
		var t = new eui.Button();
		this._img_backhall_close = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 496.47;
		t.y = 2;
		t.skinName = zjhIndex$Skin855;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 350;
		t.elementsContent = [this._btn_bakchall_i(),this._btn_cancel_i()];
		return t;
	};
	_proto._btn_bakchall_i = function () {
		var t = new eui.Button();
		this._btn_bakchall = t;
		t.label = "返回首页";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = zjhIndex$Skin856;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.label = "取消";
		t.verticalCenter = 2;
		t.x = 252;
		t.skinName = zjhIndex$Skin857;
		return t;
	};
	_proto._gp_rule_i = function () {
		var t = new eui.Group();
		this._gp_rule = t;
		t.height = 625;
		t.horizontalCenter = 0;
		t.verticalCenter = -5.5;
		t.width = 530;
		t.elementsContent = [this._rect_rule_menban_i(),this._gp_rule_second_i()];
		return t;
	};
	_proto._rect_rule_menban_i = function () {
		var t = new eui.Rect();
		this._rect_rule_menban = t;
		t.alpha = 0.6;
		t.height = 2000;
		t.width = 750;
		t.x = -110;
		t.y = -291;
		return t;
	};
	_proto._gp_rule_second_i = function () {
		var t = new eui.Group();
		this._gp_rule_second = t;
		t.horizontalCenter = 16;
		t.scaleX = 1.15;
		t.scaleY = 1.15;
		t.verticalCenter = 4;
		t.elementsContent = [this._rect_rule_i(),this._Group8_i(),this._img_close1_i(),this._Image20_i()];
		return t;
	};
	_proto._rect_rule_i = function () {
		var t = new eui.Rect();
		this._rect_rule = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x634FA6;
		t.height = 730;
		t.strokeColor = 0xA684F2;
		t.strokeWeight = 1;
		t.width = 529;
		t.x = 0;
		t.y = 24.25;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 14;
		t.y = 81.25;
		t.elementsContent = [this._rect_rule_second_bg_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._gp_rule_playcount_i(),this._gp_rule_shangxian_i()];
		return t;
	};
	_proto._rect_rule_second_bg_i = function () {
		var t = new eui.Rect();
		this._rect_rule_second_bg = t;
		t.ellipseHeight = 4;
		t.ellipseWidth = 4;
		t.fillColor = 0x111431;
		t.height = 610;
		t.strokeColor = 0xA684F2;
		t.strokeWeight = 1;
		t.width = 497;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 5.4;
		t.elementsContent = [this._Rect17_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x143948;
		t.height = 48.6;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 20.9;
		t.text = "创建房间,游戏未进行,不消耗房卡";
		t.textColor = 0x7DD9FF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 60;
		t.elementsContent = [this._Rect18_i(),this._Label4_i(),this._txt_chip_rule_i()];
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 65;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "筹码：";
		t.textColor = 0x111431;
		t.verticalCenter = 0;
		t.x = 17;
		return t;
	};
	_proto._txt_chip_rule_i = function () {
		var t = new eui.Label();
		this._txt_chip_rule = t;
		t.size = 25;
		t.text = "2/5,4/10,8/20,10/25";
		t.textColor = 0x111431;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 131;
		t.elementsContent = [this._rect_rule_bg_i(),this._Label5_i(),this._txt_rule0_i(),this._txt_rule1_i(),this._txt_rule2_i(),this._txt_rule3_i()];
		return t;
	};
	_proto._rect_rule_bg_i = function () {
		var t = new eui.Rect();
		this._rect_rule_bg = t;
		t.fillColor = 0xBBBFF1;
		t.height = 260;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "规则：";
		t.textColor = 0x111431;
		t.x = 17;
		t.y = 20;
		return t;
	};
	_proto._txt_rule0_i = function () {
		var t = new eui.Label();
		this._txt_rule0 = t;
		t.size = 25;
		t.text = "100分以下不能比牌";
		t.textColor = 0x111431;
		t.x = 100;
		t.y = 20;
		return t;
	};
	_proto._txt_rule1_i = function () {
		var t = new eui.Label();
		this._txt_rule1 = t;
		t.size = 25;
		t.text = "闷牌，全场禁止比牌";
		t.textColor = 0x111431;
		t.x = 100;
		t.y = 85;
		return t;
	};
	_proto._txt_rule2_i = function () {
		var t = new eui.Label();
		this._txt_rule2 = t;
		t.size = 25;
		t.text = "首轮禁止看牌";
		t.textColor = 0x111431;
		t.x = 100;
		t.y = 150;
		return t;
	};
	_proto._txt_rule3_i = function () {
		var t = new eui.Label();
		this._txt_rule3 = t;
		t.size = 25;
		t.text = "首轮禁止看牌";
		t.textColor = 0x111431;
		t.x = 100;
		t.y = 215;
		return t;
	};
	_proto._gp_rule_playcount_i = function () {
		var t = new eui.Group();
		this._gp_rule_playcount = t;
		t.horizontalCenter = 0;
		t.y = 397;
		t.elementsContent = [this._Rect19_i(),this._Label6_i(),this._txt_chip_rule8_i()];
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 65;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "局数：";
		t.textColor = 0x111431;
		t.verticalCenter = 0;
		t.x = 17;
		return t;
	};
	_proto._txt_chip_rule8_i = function () {
		var t = new eui.Label();
		this._txt_chip_rule8 = t;
		t.size = 25;
		t.text = "10局X一张房卡";
		t.textColor = 0x111431;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._gp_rule_shangxian_i = function () {
		var t = new eui.Group();
		this._gp_rule_shangxian = t;
		t.horizontalCenter = 0;
		t.y = 468;
		t.elementsContent = [this._Rect20_i(),this._Label7_i(),this._txt_chip_rule9_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 65;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "上限：";
		t.textColor = 0x111431;
		t.verticalCenter = 0;
		t.x = 17;
		return t;
	};
	_proto._txt_chip_rule9_i = function () {
		var t = new eui.Label();
		this._txt_chip_rule9 = t;
		t.size = 25;
		t.text = "无";
		t.textColor = 0x111431;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._img_close1_i = function () {
		var t = new eui.Button();
		this._img_close1 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 490.47;
		t.y = 0;
		t.skinName = zjhIndex$Skin858;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_game_rule";
		t.x = 185;
		t.y = 33.89;
		return t;
	};
	_proto._gp_set_i = function () {
		var t = new eui.Group();
		this._gp_set = t;
		t.height = 625;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 530;
		t.elementsContent = [this._rect_set_menban_i(),this._gp_set_second_i()];
		return t;
	};
	_proto._rect_set_menban_i = function () {
		var t = new eui.Rect();
		this._rect_set_menban = t;
		t.alpha = 0.6;
		t.height = 2000;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		return t;
	};
	_proto._gp_set_second_i = function () {
		var t = new eui.Group();
		this._gp_set_second = t;
		t.height = 283;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.15;
		t.scaleY = 1.15;
		t.width = 429;
		t.y = 107.34;
		t.elementsContent = [this._Rect21_i(),this._Group11_i(),this._btn_set_close_i(),this._btn_set_ok_i()];
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x634FA6;
		t.height = 280;
		t.strokeColor = 0xA684F2;
		t.strokeWeight = 1;
		t.width = 429;
		t.x = 0;
		t.y = 2.97;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 14;
		t.y = 46.31;
		t.elementsContent = [this._Rect22_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 4;
		t.ellipseWidth = 4;
		t.fillColor = 0x111431;
		t.height = 150;
		t.strokeColor = 0xA684F2;
		t.strokeWeight = 1;
		t.width = 397;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.horizontalCenter = 0;
		t.y = 16.36;
		t.elementsContent = [this._Rect23_i(),this._Label8_i(),this._check_music_i()];
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 54;
		t.width = 393;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "背景音乐：";
		t.textColor = 0x111431;
		t.verticalCenter = 0;
		t.x = 17;
		return t;
	};
	_proto._check_music_i = function () {
		var t = new eui.CheckBox();
		this._check_music = t;
		t.height = 41;
		t.label = "开启";
		t.verticalCenter = -5.5;
		t.width = 41;
		t.x = 188;
		t.skinName = zjhIndex$Skin859;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.horizontalCenter = 0;
		t.y = 76.97;
		t.elementsContent = [this._Rect24_i(),this._Label9_i(),this._check_effect_i()];
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 54;
		t.width = 393;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "游戏音效";
		t.textColor = 0x111431;
		t.verticalCenter = 0;
		t.x = 17;
		return t;
	};
	_proto._check_effect_i = function () {
		var t = new eui.CheckBox();
		this._check_effect = t;
		t.height = 41;
		t.label = "开启";
		t.verticalCenter = -5.5;
		t.width = 41;
		t.x = 188;
		t.skinName = zjhIndex$Skin860;
		return t;
	};
	_proto._btn_set_close_i = function () {
		var t = new eui.Button();
		this._btn_set_close = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 388.97;
		t.y = -21.23;
		t.skinName = zjhIndex$Skin861;
		return t;
	};
	_proto._btn_set_ok_i = function () {
		var t = new eui.Button();
		this._btn_set_ok = t;
		t.horizontalCenter = 0.5;
		t.label = "确定";
		t.y = 208.87;
		t.skinName = zjhIndex$Skin862;
		return t;
	};
	_proto._gp_chat_i = function () {
		var t = new eui.Group();
		this._gp_chat = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_chat_menban_i(),this._gp_chat_second_i()];
		return t;
	};
	_proto._rect_chat_menban_i = function () {
		var t = new eui.Rect();
		this._rect_chat_menban = t;
		t.fillAlpha = 0;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_chat_second_i = function () {
		var t = new eui.Group();
		this._gp_chat_second = t;
		t.x = 294.3;
		t.y = 620.71;
		t.elementsContent = [this._Rect25_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x634fa6;
		t.height = 500;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xa684f2;
		t.strokeWeight = 1;
		t.verticalCenter = 0;
		t.width = 437.7;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 459;
		t.horizontalCenter = 2;
		t.width = 414;
		t.y = 21.02;
		t.viewport = this._Group12_i();
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Rect26_i(),this._gp_chat_item0_i(),this._gp_chat_item1_i(),this._gp_chat_item2_i(),this._gp_chat_item3_i(),this._gp_chat_item4_i(),this._gp_chat_item5_i(),this._gp_chat_item6_i(),this._gp_chat_item7_i(),this._gp_chat_item8_i(),this._gp_chat_item9_i(),this._gp_chat_item10_i()];
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x15012d;
		t.height = 805;
		t.strokeColor = 0xa684f2;
		t.strokeWeight = 1;
		t.width = 413;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_chat_item0_i = function () {
		var t = new eui.Group();
		this._gp_chat_item0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 14;
		t.y = 16;
		t.elementsContent = [this._Label10_i(),this._Rect27_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "玩游戏，请先进群";
		t.textColor = 0xffffff;
		t.y = 0;
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item1_i = function () {
		var t = new eui.Group();
		this._gp_chat_item1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 14;
		t.y = 76;
		t.elementsContent = [this._Label11_i(),this._Rect28_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "群内游戏，切勿转发";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect28_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item2_i = function () {
		var t = new eui.Group();
		this._gp_chat_item2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 24;
		t.y = 152;
		t.elementsContent = [this._Label12_i(),this._Rect29_i()];
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "别磨蹭，快点打牌";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect29_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item3_i = function () {
		var t = new eui.Group();
		this._gp_chat_item3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 34;
		t.y = 228;
		t.elementsContent = [this._Label13_i(),this._Rect30_i()];
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "我出去叫人";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect30_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item4_i = function () {
		var t = new eui.Group();
		this._gp_chat_item4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 44;
		t.y = 304;
		t.elementsContent = [this._Label14_i(),this._Rect31_i()];
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "你的牌好靓哇";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect31_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item5_i = function () {
		var t = new eui.Group();
		this._gp_chat_item5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 54;
		t.y = 380;
		t.elementsContent = [this._Label15_i(),this._Rect32_i()];
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "我当年横扫澳门五条街";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect32_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item6_i = function () {
		var t = new eui.Group();
		this._gp_chat_item6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 64;
		t.y = 456;
		t.elementsContent = [this._Label16_i(),this._Rect33_i()];
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "算你牛逼";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect33_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item7_i = function () {
		var t = new eui.Group();
		this._gp_chat_item7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 74;
		t.y = 532;
		t.elementsContent = [this._Label17_i(),this._Rect34_i()];
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "别吹牛逼，有本事干到底";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect34_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item8_i = function () {
		var t = new eui.Group();
		this._gp_chat_item8 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 84;
		t.y = 608;
		t.elementsContent = [this._Label18_i(),this._Rect35_i()];
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "输得裤衩都没了";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect35_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item9_i = function () {
		var t = new eui.Group();
		this._gp_chat_item9 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94;
		t.y = 684;
		t.elementsContent = [this._Label19_i(),this._Rect36_i()];
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "我给你们送温暖了";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect36_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._gp_chat_item10_i = function () {
		var t = new eui.Group();
		this._gp_chat_item10 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 104;
		t.y = 760;
		t.elementsContent = [this._Label20_i(),this._Rect37_i()];
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 25;
		t.size = 26;
		t.text = "谢谢老板";
		t.textColor = 0xFFFFFF;
		t.y = 0;
		return t;
	};
	_proto._Rect37_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x666666;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 414;
		t.y = 42;
		return t;
	};
	_proto._btn_ready_i = function () {
		var t = new eui.Button();
		this._btn_ready = t;
		t.horizontalCenter = 1;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 749.48;
		t.skinName = zjhIndex$Skin863;
		return t;
	};
	_proto._img_youwin_i = function () {
		var t = new eui.Image();
		this._img_youwin = t;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_winner";
		t.visible = false;
		t.y = 645;
		return t;
	};
	_proto._gp_watch_i = function () {
		var t = new eui.Group();
		this._gp_watch = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_watch_menban_i(),this._gp_watch_second_i()];
		return t;
	};
	_proto._rect_watch_menban_i = function () {
		var t = new eui.Rect();
		this._rect_watch_menban = t;
		t.fillAlpha = 0.5;
		t.height = 2000;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_watch_second_i = function () {
		var t = new eui.Group();
		this._gp_watch_second = t;
		t.horizontalCenter = 0;
		t.y = 286;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._img_watchClose_i(),this._Group14_i(),this._gp_watchBtn_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.source = "zjh_game_img_json.back";
		t.x = -32;
		t.y = -74;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zjh_game_img_json.zjh_title";
		t.y = -90;
		return t;
	};
	_proto._img_watchClose_i = function () {
		var t = new eui.Image();
		this._img_watchClose = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_game_img_json.zjh_btn_close_purple";
		t.x = 540;
		t.y = -88;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Rect38_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Rect38_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0.9;
		t.fillColor = 0x2b1b38;
		t.height = 580;
		t.width = 530;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 580;
		t.width = 530;
		t.x = 0;
		t.y = 2.54;
		t.viewport = this._scroGp_watch_i();
		return t;
	};
	_proto._scroGp_watch_i = function () {
		var t = new eui.Group();
		this._scroGp_watch = t;
		t.elementsContent = [this._Group13_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 6;
		t.elementsContent = [this._Rect39_i(),this._Image23_i(),this._Label21_i(),this._Image24_i()];
		return t;
	};
	_proto._Rect39_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 25;
		t.ellipseWidth = 25;
		t.fillColor = 0x67498e;
		t.height = 80;
		t.width = 520;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 65;
		t.x = 12;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 0;
		t.x = 94;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "zjh_game_img_json.zjh_eye_icon";
		t.verticalCenter = 0;
		t.x = 434;
		return t;
	};
	_proto._gp_watchBtn_i = function () {
		var t = new eui.Group();
		this._gp_watchBtn = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.y = 592;
		t.elementsContent = [this._img_watch_i()];
		return t;
	};
	_proto._img_watch_i = function () {
		var t = new eui.Image();
		this._img_watch = t;
		t.horizontalCenter = 0;
		t.source = "zjh_game_img_json.zjh_sitdown_true";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_notice_i = function () {
		var t = new eui.Group();
		this._gp_notice = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 750;
		t.y = 0;
		t.elementsContent = [this._Rect40_i(),this._Image25_i(),this._Scroller3_i()];
		return t;
	};
	_proto._Rect40_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 750;
		t.y = 2;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.laba";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 655;
		t.x = 95;
		t.viewport = this._Group15_i();
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.m_notice_i()];
		return t;
	};
	_proto.m_notice_i = function () {
		var t = new eui.Label();
		this.m_notice = t;
		t.size = 35;
		t.text = "本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._gp_desc_i = function () {
		var t = new eui.Group();
		this._gp_desc = t;
		t.visible = false;
		t.x = 175;
		t.y = 568;
		t.elementsContent = [this._Rect41_i(),this._txt_desc_i()];
		return t;
	};
	_proto._Rect41_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.7;
		t.height = 80;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_desc_i = function () {
		var t = new eui.Label();
		this._txt_desc = t;
		t.horizontalCenter = 0;
		t.text = "房间号只能是数字";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_sure_i = function () {
		var t = new eui.Group();
		this._gp_sure = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_tishi_menban_i(),this._gp_tishi_i()];
		return t;
	};
	_proto._rect_tishi_menban_i = function () {
		var t = new eui.Rect();
		this._rect_tishi_menban = t;
		t.alpha = 0.7;
		t.height = 2000;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_tishi_i = function () {
		var t = new eui.Group();
		this._gp_tishi = t;
		t.x = 75;
		t.y = 448;
		t.elementsContent = [this._Rect42_i(),this._Group16_i()];
		return t;
	};
	_proto._Rect42_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x6D4BA8;
		t.height = 320;
		t.strokeColor = 0xDE51F1;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 28;
		t.y = 26.75;
		t.elementsContent = [this._txt0_i(),this._txt_tishi_i()];
		return t;
	};
	_proto._txt0_i = function () {
		var t = new eui.Rect();
		this._txt0 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x281D45;
		t.height = 260;
		t.strokeColor = 0xAE71CB;
		t.strokeWeight = 1;
		t.width = 543.5;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_tishi_i = function () {
		var t = new eui.Label();
		this._txt_tishi = t;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 35;
		t.text = "请联系开放着开房者开启了群主管理功能！";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	return zjhIndex;
})(eui.Skin);