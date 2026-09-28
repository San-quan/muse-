
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/niuniu13/joinItem.exml'] = window.joinItem = (function (_super) {
	__extends(joinItem, _super);
	function joinItem() {
		_super.call(this);
		this.skinParts = ["_img_head","_txt_nickname","_gp_item"];
		
		this.height = 79;
		this.width = 60;
		this.elementsContent = [this._gp_item_i()];
	}
	var _proto = joinItem.prototype;

	_proto._gp_item_i = function () {
		var t = new eui.Group();
		this._gp_item = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_head_i(),this._txt_nickname_i()];
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname_i = function () {
		var t = new eui.Label();
		this._txt_nickname = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	return joinItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu13/joinRoomNotice.exml'] = window.joinRoomNotice = (function (_super) {
	__extends(joinRoomNotice, _super);
	var joinRoomNotice$Skin468 = 	(function (_super) {
		__extends(joinRoomNotice$Skin468, _super);
		function joinRoomNotice$Skin468() {
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
		var _proto = joinRoomNotice$Skin468.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_small_sure_btn";
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
		return joinRoomNotice$Skin468;
	})(eui.Skin);

	var joinRoomNotice$Skin469 = 	(function (_super) {
		__extends(joinRoomNotice$Skin469, _super);
		function joinRoomNotice$Skin469() {
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
		var _proto = joinRoomNotice$Skin469.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_small_cancel_btn";
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
		return joinRoomNotice$Skin469;
	})(eui.Skin);

	function joinRoomNotice() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_txt_pwd","_txt_playmode","_txt_basescore","_txt_rule","_txt_cardtype","_txt_special","_txt_gameground","_btn_joingame","_btn_guanzhan","_img_head4","_txt_nickname4","_gp_item4","_img_head0","_txt_nickname0","_gp_item0","_img_head1","_txt_nickname1","_gp_item1","_img_head2","_txt_nickname2","_gp_item2","_img_head13","_txt_nickname13","_gp_item13","_img_head3","_txt_nickname3","_gp_item3","_img_head5","_txt_nickname5","_gp_item5","_img_head6","_txt_nickname6","_gp_item6","_img_head7","_txt_nickname7","_gp_item7","_img_head8","_txt_nickname8","_gp_item8","_img_head9","_txt_nickname9","_gp_item9","_img_head10","_txt_nickname10","_gp_item10","_img_head11","_txt_nickname11","_gp_item11","_img_head12","_txt_nickname12","_gp_item12","_gp_playerList","_gp_main"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._rect_bg_i(),this._gp_main_i()];
	}
	var _proto = joinRoomNotice.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.x = 54;
		t.y = 169;
		t.elementsContent = [this._Image1_i(),this._txt_pwd_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this._gp_playerList_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(298,108,6,11);
		t.source = "dsGame_13niuniu_json.niuniu13_game_joinbg";
		t.verticalCenter = 0;
		t.width = 642;
		return t;
	};
	_proto._txt_pwd_i = function () {
		var t = new eui.Label();
		this._txt_pwd = t;
		t.size = 35;
		t.text = "ID:666666";
		t.x = 58;
		t.y = 27;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 360;
		t.horizontalCenter = -0.5;
		t.scale9Grid = new egret.Rectangle(250,46,34,7);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_join_user_bg1";
		t.width = 549;
		t.y = 480.31;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 66;
		t.y = 113.65;
		t.elementsContent = [this._txt_playmode_i(),this._txt_basescore_i(),this._txt_rule_i(),this._txt_cardtype_i(),this._txt_special_i(),this._txt_gameground_i()];
		return t;
	};
	_proto._txt_playmode_i = function () {
		var t = new eui.Label();
		this._txt_playmode = t;
		t.left = 0;
		t.size = 26;
		t.text = "模式：明牌抢庄";
		t.y = 0;
		return t;
	};
	_proto._txt_basescore_i = function () {
		var t = new eui.Label();
		this._txt_basescore = t;
		t.left = 0;
		t.size = 26;
		t.text = "底分：5分";
		t.y = 45;
		return t;
	};
	_proto._txt_rule_i = function () {
		var t = new eui.Label();
		this._txt_rule = t;
		t.left = 0;
		t.size = 26;
		t.text = "规则：牛牛x4 牛牛x4 牛牛x4 牛牛x4";
		t.y = 90;
		return t;
	};
	_proto._txt_cardtype_i = function () {
		var t = new eui.Label();
		this._txt_cardtype = t;
		t.left = 0;
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "牌型：顺子牛（5倍）顺子牛（5倍）顺子牛（5倍），顺子牛（5倍）顺子牛（5倍）顺子牛（5倍）顺子牛（5倍）顺子牛（5倍）";
		t.width = 520;
		t.y = 135;
		return t;
	};
	_proto._txt_special_i = function () {
		var t = new eui.Label();
		this._txt_special = t;
		t.left = 0;
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "特殊：允许观战，允许观战，允许观战，允许观战";
		t.width = 510;
		t.y = 252;
		return t;
	};
	_proto._txt_gameground_i = function () {
		var t = new eui.Label();
		this._txt_gameground = t;
		t.left = 0;
		t.size = 26;
		t.text = "局数：12局";
		t.y = 333;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 848.69;
		t.elementsContent = [this._btn_joingame_i(),this._btn_guanzhan_i()];
		return t;
	};
	_proto._btn_joingame_i = function () {
		var t = new eui.Button();
		this._btn_joingame = t;
		t.label = "加入游戏";
		t.verticalCenter = 0;
		t.x = 256;
		t.skinName = joinRoomNotice$Skin468;
		return t;
	};
	_proto._btn_guanzhan_i = function () {
		var t = new eui.Button();
		this._btn_guanzhan = t;
		t.label = "观战";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = joinRoomNotice$Skin469;
		return t;
	};
	_proto._gp_playerList_i = function () {
		var t = new eui.Group();
		this._gp_playerList = t;
		t.height = 249;
		t.horizontalCenter = 0;
		t.width = 500;
		t.y = 537;
		t.elementsContent = [this._Group3_i(),this._gp_item3_i(),this._gp_item5_i(),this._gp_item6_i(),this._gp_item7_i(),this._gp_item8_i(),this._gp_item9_i(),this._gp_item10_i(),this._gp_item11_i(),this._gp_item12_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.verticalCenter = 0;
		t.elementsContent = [this._gp_item4_i(),this._gp_item0_i(),this._gp_item1_i(),this._gp_item2_i(),this._gp_item13_i()];
		return t;
	};
	_proto._gp_item4_i = function () {
		var t = new eui.Group();
		this._gp_item4 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_head4_i(),this._txt_nickname4_i()];
		return t;
	};
	_proto._img_head4_i = function () {
		var t = new eui.Image();
		this._img_head4 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname4_i = function () {
		var t = new eui.Label();
		this._txt_nickname4 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item0_i = function () {
		var t = new eui.Group();
		this._gp_item0 = t;
		t.x = 80;
		t.y = 0;
		t.elementsContent = [this._img_head0_i(),this._txt_nickname0_i()];
		return t;
	};
	_proto._img_head0_i = function () {
		var t = new eui.Image();
		this._img_head0 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_nickname0 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item1_i = function () {
		var t = new eui.Group();
		this._gp_item1 = t;
		t.x = 160;
		t.y = 0;
		t.elementsContent = [this._img_head1_i(),this._txt_nickname1_i()];
		return t;
	};
	_proto._img_head1_i = function () {
		var t = new eui.Image();
		this._img_head1 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_nickname1 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item2_i = function () {
		var t = new eui.Group();
		this._gp_item2 = t;
		t.x = 240;
		t.y = 0;
		t.elementsContent = [this._img_head2_i(),this._txt_nickname2_i()];
		return t;
	};
	_proto._img_head2_i = function () {
		var t = new eui.Image();
		this._img_head2 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_nickname2 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item13_i = function () {
		var t = new eui.Group();
		this._gp_item13 = t;
		t.x = 320;
		t.y = 0;
		t.elementsContent = [this._img_head13_i(),this._txt_nickname13_i()];
		return t;
	};
	_proto._img_head13_i = function () {
		var t = new eui.Image();
		this._img_head13 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname13_i = function () {
		var t = new eui.Label();
		this._txt_nickname13 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item3_i = function () {
		var t = new eui.Group();
		this._gp_item3 = t;
		t.visible = false;
		t.x = 320;
		t.y = 0;
		t.elementsContent = [this._img_head3_i(),this._txt_nickname3_i()];
		return t;
	};
	_proto._img_head3_i = function () {
		var t = new eui.Image();
		this._img_head3 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_nickname3 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item5_i = function () {
		var t = new eui.Group();
		this._gp_item5 = t;
		t.visible = false;
		t.x = 400;
		t.y = 0;
		t.elementsContent = [this._img_head5_i(),this._txt_nickname5_i()];
		return t;
	};
	_proto._img_head5_i = function () {
		var t = new eui.Image();
		this._img_head5 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname5_i = function () {
		var t = new eui.Label();
		this._txt_nickname5 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item6_i = function () {
		var t = new eui.Group();
		this._gp_item6 = t;
		t.visible = false;
		t.x = 160;
		t.y = 85;
		t.elementsContent = [this._img_head6_i(),this._txt_nickname6_i()];
		return t;
	};
	_proto._img_head6_i = function () {
		var t = new eui.Image();
		this._img_head6 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname6_i = function () {
		var t = new eui.Label();
		this._txt_nickname6 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item7_i = function () {
		var t = new eui.Group();
		this._gp_item7 = t;
		t.visible = false;
		t.x = 240;
		t.y = 85;
		t.elementsContent = [this._img_head7_i(),this._txt_nickname7_i()];
		return t;
	};
	_proto._img_head7_i = function () {
		var t = new eui.Image();
		this._img_head7 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname7_i = function () {
		var t = new eui.Label();
		this._txt_nickname7 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item8_i = function () {
		var t = new eui.Group();
		this._gp_item8 = t;
		t.visible = false;
		t.x = 80;
		t.y = 85;
		t.elementsContent = [this._img_head8_i(),this._txt_nickname8_i()];
		return t;
	};
	_proto._img_head8_i = function () {
		var t = new eui.Image();
		this._img_head8 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname8_i = function () {
		var t = new eui.Label();
		this._txt_nickname8 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item9_i = function () {
		var t = new eui.Group();
		this._gp_item9 = t;
		t.visible = false;
		t.x = 320;
		t.y = 85;
		t.elementsContent = [this._img_head9_i(),this._txt_nickname9_i()];
		return t;
	};
	_proto._img_head9_i = function () {
		var t = new eui.Image();
		this._img_head9 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname9_i = function () {
		var t = new eui.Label();
		this._txt_nickname9 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item10_i = function () {
		var t = new eui.Group();
		this._gp_item10 = t;
		t.visible = false;
		t.x = 0;
		t.y = 85;
		t.elementsContent = [this._img_head10_i(),this._txt_nickname10_i()];
		return t;
	};
	_proto._img_head10_i = function () {
		var t = new eui.Image();
		this._img_head10 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname10_i = function () {
		var t = new eui.Label();
		this._txt_nickname10 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item11_i = function () {
		var t = new eui.Group();
		this._gp_item11 = t;
		t.visible = false;
		t.x = 400;
		t.y = 85;
		t.elementsContent = [this._img_head11_i(),this._txt_nickname11_i()];
		return t;
	};
	_proto._img_head11_i = function () {
		var t = new eui.Image();
		this._img_head11 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname11_i = function () {
		var t = new eui.Label();
		this._txt_nickname11 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	_proto._gp_item12_i = function () {
		var t = new eui.Group();
		this._gp_item12 = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 170;
		t.elementsContent = [this._img_head12_i(),this._txt_nickname12_i()];
		return t;
	};
	_proto._img_head12_i = function () {
		var t = new eui.Image();
		this._img_head12 = t;
		t.height = 60;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname12_i = function () {
		var t = new eui.Label();
		this._txt_nickname12 = t;
		t.height = 15;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 60;
		t.y = 63.33;
		return t;
	};
	return joinRoomNotice;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu13/NiuniuRecord.exml'] = window.NiuniuRecordSkin = (function (_super) {
	__extends(NiuniuRecordSkin, _super);
	var NiuniuRecordSkin$Skin470 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin470, _super);
		function NiuniuRecordSkin$Skin470() {
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
		var _proto = NiuniuRecordSkin$Skin470.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_prepare";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 35;
			t.y = 20;
			return t;
		};
		return NiuniuRecordSkin$Skin470;
	})(eui.Skin);

	function NiuniuRecordSkin() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_img_bg","_txt_roompwd","_txt_time","_txt_playcount","_btn_gohall","_txt_notice","_scroGp_content","_scro_main","_gp_main"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._gp_main_i()];
	}
	var _proto = NiuniuRecordSkin.prototype;

	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_bg_i(),this._scro_main_i()];
		return t;
	};
	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._scro_main_i = function () {
		var t = new eui.Scroller();
		this._scro_main = t;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.viewport = this._scroGp_content_i();
		return t;
	};
	_proto._scroGp_content_i = function () {
		var t = new eui.Group();
		this._scroGp_content = t;
		t.elementsContent = [this._img_bg_i(),this._Group1_i(),this._btn_gohall_i(),this._txt_notice_i()];
		return t;
	};
	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 1216;
		t.scale9Grid = new egret.Rectangle(202,829,333,76);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu13_total_result_bg_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 157;
		t.y = 380.58;
		t.elementsContent = [this._txt_roompwd_i(),this._txt_time_i(),this._txt_playcount_i()];
		return t;
	};
	_proto._txt_roompwd_i = function () {
		var t = new eui.Label();
		this._txt_roompwd = t;
		t.size = 23;
		t.text = "房号：999999";
		t.textColor = 0x9d7a79;
		t.x = 0;
		t.y = 0.33;
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.size = 23;
		t.text = "2018-12-30 12:59";
		t.textColor = 0x9d7a79;
		t.x = 241.69;
		t.y = 0;
		return t;
	};
	_proto._txt_playcount_i = function () {
		var t = new eui.Label();
		this._txt_playcount = t;
		t.size = 23;
		t.text = "12/12局";
		t.textColor = 0x9D7A79;
		t.x = 442.63;
		t.y = 0;
		return t;
	};
	_proto._btn_gohall_i = function () {
		var t = new eui.Button();
		this._btn_gohall = t;
		t.height = 80;
		t.label = "返回大厅";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 225;
		t.x = 424;
		t.y = 1101.05;
		t.skinName = NiuniuRecordSkin$Skin470;
		return t;
	};
	_proto._txt_notice_i = function () {
		var t = new eui.Label();
		this._txt_notice = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "游戏对战成绩记录仅为游戏规则体现，不具备货币属性";
		t.textColor = 0xf2d791;
		t.y = 1191;
		return t;
	};
	return NiuniuRecordSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu13/NiuniuRecordItem.exml'] = window.NiuniuRecordItem = (function (_super) {
	__extends(NiuniuRecordItem, _super);
	function NiuniuRecordItem() {
		_super.call(this);
		this.skinParts = ["_txt_player_name","_img_player_head","_img_bigWin","_txt_player_score","_gp_player"];
		
		this.height = 90;
		this.width = 500;
		this.elementsContent = [this._gp_player_i()];
	}
	var _proto = NiuniuRecordItem.prototype;

	_proto._gp_player_i = function () {
		var t = new eui.Group();
		this._gp_player = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._txt_player_name_i(),this._img_player_head_i(),this._img_bigWin_i(),this._txt_player_score_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xF2DBAB;
		t.height = 90;
		t.strokeColor = 0xD9BA81;
		t.strokeWeight = 2;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player_name_i = function () {
		var t = new eui.Label();
		this._txt_player_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 25;
		t.left = 135;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textColor = 0x75736F;
		t.verticalCenter = 0.5;
		t.width = 225;
		return t;
	};
	_proto._img_player_head_i = function () {
		var t = new eui.Image();
		this._img_player_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 59;
		return t;
	};
	_proto._img_bigWin_i = function () {
		var t = new eui.Image();
		this._img_bigWin = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_bigwin";
		t.x = -20.67;
		t.y = 0;
		return t;
	};
	_proto._txt_player_score_i = function () {
		var t = new eui.Label();
		this._txt_player_score = t;
		t.blendMode = "normal";
		t.bold = false;
		t.border = false;
		t.fontFamily = "Arial";
		t.size = 36;
		t.text = "-20000";
		t.textAlign = "center";
		t.textColor = 0x55ba77;
		t.verticalCenter = 0;
		t.width = 125;
		t.x = 366;
		return t;
	};
	return NiuniuRecordItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu13/NiuniuResult.exml'] = window.NiuniuResultSkin = (function (_super) {
	__extends(NiuniuResultSkin, _super);
	function NiuniuResultSkin() {
		_super.call(this);
		this.skinParts = ["_img_meng","_img_player1_bg","_img_player1_zhuang","_txt_player1_name","_img_player1_card1","_img_player1_card2","_img_player1_card3","_img_player1_card4","_img_player1_card5","_img_player1_cardtype","_bitmap_player1_score","_gp_player1","_img_player2_bg","_img_player2_zhuang","_txt_player2_name","_img_player2_card1","_img_player2_card2","_img_player2_card3","_img_player2_card4","_img_player2_card5","_img_player2_cardtype","_bitmap_player2_score","_gp_player2","_img_player3_bg","_img_player3_zhuang","_txt_player3_name","_img_player3_card1","_img_player3_card2","_img_player3_card3","_img_player3_card4","_img_player3_card5","_img_player3_cardtype","_bitmap_player3_score","_gp_player3","_img_player4_bg","_img_player4_zhuang","_txt_player4_name","_img_player4_card1","_img_player4_card2","_img_player4_card3","_img_player4_card4","_img_player4_card5","_img_player4_cardtype","_bitmap_player4_score","_gp_player4","_img_player5_bg","_img_player5_zhuang","_txt_player5_name","_img_player5_card1","_img_player5_card2","_img_player5_card3","_img_player5_card4","_img_player5_card5","_img_player5_cardtype","_bitmap_player5_score","_gp_player5","_group_main"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = NiuniuResultSkin.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 640;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.anchorOffsetX = 0;
		t.height = 580;
		t.width = 962;
		t.x = 63;
		t.y = 46;
		t.elementsContent = [this._Image1_i(),this._gp_player1_i(),this._gp_player2_i(),this._gp_player3_i(),this._gp_player4_i(),this._gp_player5_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_title_bg";
		t.x = 301;
		t.y = 2;
		return t;
	};
	_proto._gp_player1_i = function () {
		var t = new eui.Group();
		this._gp_player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.width = 962;
		t.x = 0;
		t.y = 136;
		t.elementsContent = [this._img_player1_bg_i(),this._img_player1_zhuang_i(),this._txt_player1_name_i(),this._img_player1_card1_i(),this._img_player1_card2_i(),this._img_player1_card3_i(),this._img_player1_card4_i(),this._img_player1_card5_i(),this._img_player1_cardtype_i(),this._bitmap_player1_score_i()];
		return t;
	};
	_proto._img_player1_bg_i = function () {
		var t = new eui.Image();
		this._img_player1_bg = t;
		t.source = "niuniu_2_json.nn_rt_item_bg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player1_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player1_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = 65;
		t.y = 3;
		return t;
	};
	_proto._txt_player1_name_i = function () {
		var t = new eui.Label();
		this._txt_player1_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -256;
		t.maxHeight = 26;
		t.maxWidth = 156;
		t.size = 26;
		t.text = "魂族网络科技";
		t.textColor = 0xfff5bf;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_player1_card1_i = function () {
		var t = new eui.Image();
		this._img_player1_card1 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 331;
		return t;
	};
	_proto._img_player1_card2_i = function () {
		var t = new eui.Image();
		this._img_player1_card2 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 380;
		return t;
	};
	_proto._img_player1_card3_i = function () {
		var t = new eui.Image();
		this._img_player1_card3 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 429;
		return t;
	};
	_proto._img_player1_card4_i = function () {
		var t = new eui.Image();
		this._img_player1_card4 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 478;
		return t;
	};
	_proto._img_player1_card5_i = function () {
		var t = new eui.Image();
		this._img_player1_card5 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 527;
		return t;
	};
	_proto._img_player1_cardtype_i = function () {
		var t = new eui.Image();
		this._img_player1_cardtype = t;
		t.horizontalCenter = 179.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniu_1_json.nn_txt_n10";
		t.verticalCenter = 3;
		return t;
	};
	_proto._bitmap_player1_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player1_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 333;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player2_i = function () {
		var t = new eui.Group();
		this._gp_player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.width = 962;
		t.x = 0;
		t.y = 221;
		t.elementsContent = [this._img_player2_bg_i(),this._img_player2_zhuang_i(),this._txt_player2_name_i(),this._img_player2_card1_i(),this._img_player2_card2_i(),this._img_player2_card3_i(),this._img_player2_card4_i(),this._img_player2_card5_i(),this._img_player2_cardtype_i(),this._bitmap_player2_score_i()];
		return t;
	};
	_proto._img_player2_bg_i = function () {
		var t = new eui.Image();
		this._img_player2_bg = t;
		t.source = "niuniu_2_json.nn_rt_item_bg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player2_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player2_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = 65;
		t.y = 3;
		return t;
	};
	_proto._txt_player2_name_i = function () {
		var t = new eui.Label();
		this._txt_player2_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -256;
		t.maxHeight = 26;
		t.maxWidth = 156;
		t.size = 26;
		t.text = "魂族网络科技";
		t.textColor = 0xFFF5BF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_player2_card1_i = function () {
		var t = new eui.Image();
		this._img_player2_card1 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 331;
		return t;
	};
	_proto._img_player2_card2_i = function () {
		var t = new eui.Image();
		this._img_player2_card2 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 380;
		return t;
	};
	_proto._img_player2_card3_i = function () {
		var t = new eui.Image();
		this._img_player2_card3 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 429;
		return t;
	};
	_proto._img_player2_card4_i = function () {
		var t = new eui.Image();
		this._img_player2_card4 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 478;
		return t;
	};
	_proto._img_player2_card5_i = function () {
		var t = new eui.Image();
		this._img_player2_card5 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 527;
		return t;
	};
	_proto._img_player2_cardtype_i = function () {
		var t = new eui.Image();
		this._img_player2_cardtype = t;
		t.horizontalCenter = 179.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniu_1_json.nn_txt_n10";
		t.verticalCenter = 3;
		return t;
	};
	_proto._bitmap_player2_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player2_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 333;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player3_i = function () {
		var t = new eui.Group();
		this._gp_player3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.width = 962;
		t.x = 0;
		t.y = 306;
		t.elementsContent = [this._img_player3_bg_i(),this._img_player3_zhuang_i(),this._txt_player3_name_i(),this._img_player3_card1_i(),this._img_player3_card2_i(),this._img_player3_card3_i(),this._img_player3_card4_i(),this._img_player3_card5_i(),this._img_player3_cardtype_i(),this._bitmap_player3_score_i()];
		return t;
	};
	_proto._img_player3_bg_i = function () {
		var t = new eui.Image();
		this._img_player3_bg = t;
		t.source = "niuniu_2_json.nn_rt_item_bg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player3_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player3_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = 65;
		t.y = 3;
		return t;
	};
	_proto._txt_player3_name_i = function () {
		var t = new eui.Label();
		this._txt_player3_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -256;
		t.maxHeight = 26;
		t.maxWidth = 156;
		t.size = 26;
		t.text = "魂族网络科技";
		t.textColor = 0xFFF5BF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_player3_card1_i = function () {
		var t = new eui.Image();
		this._img_player3_card1 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 331;
		return t;
	};
	_proto._img_player3_card2_i = function () {
		var t = new eui.Image();
		this._img_player3_card2 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 380;
		return t;
	};
	_proto._img_player3_card3_i = function () {
		var t = new eui.Image();
		this._img_player3_card3 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 429;
		return t;
	};
	_proto._img_player3_card4_i = function () {
		var t = new eui.Image();
		this._img_player3_card4 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 478;
		return t;
	};
	_proto._img_player3_card5_i = function () {
		var t = new eui.Image();
		this._img_player3_card5 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 527;
		return t;
	};
	_proto._img_player3_cardtype_i = function () {
		var t = new eui.Image();
		this._img_player3_cardtype = t;
		t.horizontalCenter = 179.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniu_1_json.nn_txt_n10";
		t.verticalCenter = 3;
		return t;
	};
	_proto._bitmap_player3_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player3_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 333;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player4_i = function () {
		var t = new eui.Group();
		this._gp_player4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.width = 962;
		t.x = 0;
		t.y = 391;
		t.elementsContent = [this._img_player4_bg_i(),this._img_player4_zhuang_i(),this._txt_player4_name_i(),this._img_player4_card1_i(),this._img_player4_card2_i(),this._img_player4_card3_i(),this._img_player4_card4_i(),this._img_player4_card5_i(),this._img_player4_cardtype_i(),this._bitmap_player4_score_i()];
		return t;
	};
	_proto._img_player4_bg_i = function () {
		var t = new eui.Image();
		this._img_player4_bg = t;
		t.source = "niuniu_2_json.nn_rt_item_bg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player4_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player4_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = 65;
		t.y = 3;
		return t;
	};
	_proto._txt_player4_name_i = function () {
		var t = new eui.Label();
		this._txt_player4_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -256;
		t.maxHeight = 26;
		t.maxWidth = 156;
		t.size = 26;
		t.text = "魂族网络科技";
		t.textColor = 0xFFF5BF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_player4_card1_i = function () {
		var t = new eui.Image();
		this._img_player4_card1 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 331;
		return t;
	};
	_proto._img_player4_card2_i = function () {
		var t = new eui.Image();
		this._img_player4_card2 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 380;
		return t;
	};
	_proto._img_player4_card3_i = function () {
		var t = new eui.Image();
		this._img_player4_card3 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 429;
		return t;
	};
	_proto._img_player4_card4_i = function () {
		var t = new eui.Image();
		this._img_player4_card4 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 478;
		return t;
	};
	_proto._img_player4_card5_i = function () {
		var t = new eui.Image();
		this._img_player4_card5 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 527;
		return t;
	};
	_proto._img_player4_cardtype_i = function () {
		var t = new eui.Image();
		this._img_player4_cardtype = t;
		t.horizontalCenter = 179.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniu_1_json.nn_txt_n10";
		t.verticalCenter = 3;
		return t;
	};
	_proto._bitmap_player4_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player4_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 333;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player5_i = function () {
		var t = new eui.Group();
		this._gp_player5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.width = 962;
		t.x = 0;
		t.y = 476;
		t.elementsContent = [this._img_player5_bg_i(),this._img_player5_zhuang_i(),this._txt_player5_name_i(),this._img_player5_card1_i(),this._img_player5_card2_i(),this._img_player5_card3_i(),this._img_player5_card4_i(),this._img_player5_card5_i(),this._img_player5_cardtype_i(),this._bitmap_player5_score_i()];
		return t;
	};
	_proto._img_player5_bg_i = function () {
		var t = new eui.Image();
		this._img_player5_bg = t;
		t.source = "niuniu_2_json.nn_rt_item_bg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player5_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player5_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = 65;
		t.y = 3;
		return t;
	};
	_proto._txt_player5_name_i = function () {
		var t = new eui.Label();
		this._txt_player5_name = t;
		t.horizontalCenter = -256;
		t.maxHeight = 26;
		t.maxWidth = 156;
		t.size = 26;
		t.text = "魂族网络科技";
		t.textColor = 0xFFF5BF;
		t.verticalCenter = 1;
		return t;
	};
	_proto._img_player5_card1_i = function () {
		var t = new eui.Image();
		this._img_player5_card1 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 331;
		return t;
	};
	_proto._img_player5_card2_i = function () {
		var t = new eui.Image();
		this._img_player5_card2 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 380;
		return t;
	};
	_proto._img_player5_card3_i = function () {
		var t = new eui.Image();
		this._img_player5_card3 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 429;
		return t;
	};
	_proto._img_player5_card4_i = function () {
		var t = new eui.Image();
		this._img_player5_card4 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 478;
		return t;
	};
	_proto._img_player5_card5_i = function () {
		var t = new eui.Image();
		this._img_player5_card5 = t;
		t.bottom = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "nncards_json.card_1_11";
		t.x = 527;
		return t;
	};
	_proto._img_player5_cardtype_i = function () {
		var t = new eui.Image();
		this._img_player5_cardtype = t;
		t.horizontalCenter = 179.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniu_1_json.nn_txt_n10";
		t.verticalCenter = 3;
		return t;
	};
	_proto._bitmap_player5_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player5_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 333;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_title_dan";
		t.x = 397;
		t.y = 14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_player";
		t.x = 193;
		t.y = 93;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_shoupai";
		t.x = 425;
		t.y = 93;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_paixing";
		t.x = 627;
		t.y = 93;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_jifen";
		t.x = 784;
		t.y = 93;
		return t;
	};
	return NiuniuResultSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu13/NiuniuRule.exml'] = window.NiuniuRule = (function (_super) {
	__extends(NiuniuRule, _super);
	function NiuniuRule() {
		_super.call(this);
		this.skinParts = ["_img_meng","_close_img","_txt_playmode","_txt_basescore","_txt_rule","_text_paixin0","_text_paixin1","_text_paixin3","_text_paixin6","_text_paixin4","_text_paixin2","_text_paixin7","_text_paixin5","_gp_paixin","_txt_gameground","_txt_special","_txt_xiazhu","_gp_group","_group_main"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = NiuniuRule.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Rect();
		this._img_meng = t;
		t.fillAlpha = 0.8;
		t.height = 2000;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._close_img_i(),this._Image1_i(),this._Rect2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x395182;
		t.height = 950;
		t.horizontalCenter = 0;
		t.strokeColor = 0x2a8cdf;
		t.strokeWeight = 2;
		t.verticalCenter = 0;
		t.width = 650;
		return t;
	};
	_proto._close_img_i = function () {
		var t = new eui.Image();
		this._close_img = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_close";
		t.x = 662;
		t.y = 118;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "dsGame_13niuniu_json.niuniu13_game_btn_rule_title";
		t.y = 152;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x8ad5e4;
		t.height = 850;
		t.horizontalCenter = 0;
		t.width = 620;
		t.y = 218;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 850;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 610;
		t.y = 218;
		t.viewport = this._Group10_i();
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group1_i(),this._Rect3_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._gp_paixin_i(),this._gp_group_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 12;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_card_big_color0";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_card_big_color1";
		t.verticalCenter = 0.5;
		t.x = 145;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_card_big_color2";
		t.verticalCenter = 0.5;
		t.x = 281;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_card_big_color3";
		t.verticalCenter = -0.5;
		t.x = 405;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_card_big_color5";
		t.verticalCenter = 0;
		t.x = 524;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 60;
		t.text = ">";
		t.textColor = 0x123f64;
		t.verticalCenter = 0;
		t.x = 89;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 60;
		t.text = ">";
		t.textColor = 0x123F64;
		t.verticalCenter = 0;
		t.x = 223;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 60;
		t.text = ">";
		t.textColor = 0x123F64;
		t.verticalCenter = 0;
		t.x = 351;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 60;
		t.text = ">";
		t.textColor = 0x123F64;
		t.verticalCenter = 0;
		t.x = 479;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.fillColor = 0x012c4c;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 120;
		t.elementsContent = [this._Rect4_i(),this._Label5_i(),this._txt_playmode_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.bottom = -20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 35;
		t.text = "模式：";
		t.textColor = 0x123f64;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._txt_playmode_i = function () {
		var t = new eui.Label();
		this._txt_playmode = t;
		t.text = "明牌抢庄";
		t.textColor = 0x123f64;
		t.verticalCenter = 0;
		t.x = 109;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 196;
		t.elementsContent = [this._Rect5_i(),this._Label6_i(),this._txt_basescore_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.bottom = -20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 35;
		t.text = "底分：";
		t.textColor = 0x123F64;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._txt_basescore_i = function () {
		var t = new eui.Label();
		this._txt_basescore = t;
		t.text = "1分";
		t.textColor = 0x123F64;
		t.verticalCenter = 0;
		t.x = 109;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 271;
		t.elementsContent = [this._Rect6_i(),this._Label7_i(),this._txt_rule_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.bottom = -20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 35;
		t.text = "规则：";
		t.textColor = 0x123F64;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._txt_rule_i = function () {
		var t = new eui.Label();
		this._txt_rule = t;
		t.text = "牛牛x1 牛牛x1 牛牛x1 牛牛x1 ";
		t.textColor = 0x123F64;
		t.verticalCenter = 0;
		t.x = 109;
		return t;
	};
	_proto._gp_paixin_i = function () {
		var t = new eui.Group();
		this._gp_paixin = t;
		t.height = 173;
		t.horizontalCenter = 0;
		t.y = 346;
		t.elementsContent = [this._Rect7_i(),this._Label8_i(),this._text_paixin0_i(),this._text_paixin1_i(),this._text_paixin3_i(),this._text_paixin6_i(),this._text_paixin4_i(),this._text_paixin2_i(),this._text_paixin7_i(),this._text_paixin5_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.bottom = -20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 35;
		t.text = "牌型：";
		t.textColor = 0x123F64;
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._text_paixin0_i = function () {
		var t = new eui.Label();
		this._text_paixin0 = t;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x123F64;
		t.x = 109;
		t.y = 8;
		return t;
	};
	_proto._text_paixin1_i = function () {
		var t = new eui.Label();
		this._text_paixin1 = t;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x123F64;
		t.x = 360;
		t.y = 8;
		return t;
	};
	_proto._text_paixin3_i = function () {
		var t = new eui.Label();
		this._text_paixin3 = t;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x123F64;
		t.x = 360;
		t.y = 53;
		return t;
	};
	_proto._text_paixin6_i = function () {
		var t = new eui.Label();
		this._text_paixin6 = t;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x123F64;
		t.x = 109;
		t.y = 143;
		return t;
	};
	_proto._text_paixin4_i = function () {
		var t = new eui.Label();
		this._text_paixin4 = t;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x123F64;
		t.x = 109;
		t.y = 98;
		return t;
	};
	_proto._text_paixin2_i = function () {
		var t = new eui.Label();
		this._text_paixin2 = t;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x123F64;
		t.x = 109;
		t.y = 53;
		return t;
	};
	_proto._text_paixin7_i = function () {
		var t = new eui.Label();
		this._text_paixin7 = t;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x123F64;
		t.x = 360;
		t.y = 143;
		return t;
	};
	_proto._text_paixin5_i = function () {
		var t = new eui.Label();
		this._text_paixin5 = t;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x123F64;
		t.x = 360;
		t.y = 98;
		return t;
	};
	_proto._gp_group_i = function () {
		var t = new eui.Group();
		this._gp_group = t;
		t.x = 0;
		t.y = 559;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect8_i(),this._Label9_i(),this._txt_gameground_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.bottom = -20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 35;
		t.text = "局数：";
		t.textColor = 0x123F64;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._txt_gameground_i = function () {
		var t = new eui.Label();
		this._txt_gameground = t;
		t.text = "12局";
		t.textColor = 0x123F64;
		t.verticalCenter = 0;
		t.x = 109;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.width = 600;
		t.x = 0;
		t.y = 75;
		t.elementsContent = [this._Rect9_i(),this._Label10_i(),this._txt_special_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.bottom = -20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 35;
		t.text = "特殊：";
		t.textColor = 0x123F64;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._txt_special_i = function () {
		var t = new eui.Label();
		this._txt_special = t;
		t.size = 30;
		t.text = "允许观战 允许观战 允许观战 允许观战 ";
		t.textColor = 0x123f64;
		t.verticalCenter = 0.5;
		t.x = 109;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 150;
		t.elementsContent = [this._Rect10_i(),this._Label11_i(),this._txt_xiazhu_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.bottom = -20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.size = 35;
		t.text = "下注：";
		t.textColor = 0x123F64;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._txt_xiazhu_i = function () {
		var t = new eui.Label();
		this._txt_xiazhu = t;
		t.text = "x1x2x3x4";
		t.textColor = 0x123F64;
		t.verticalCenter = 0;
		t.x = 109;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 225;
		t.elementsContent = [this._Rect11_i(),this._Label12_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.bottom = -20;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "玩法";
		t.textColor = 0x000000;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 300;
		t.elementsContent = [this._Rect12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Label25_i(),this._Label26_i(),this._Label27_i(),this._Label28_i(),this._Label29_i(),this._Label30_i(),this._Label31_i(),this._Label32_i(),this._Label33_i(),this._Label34_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.bottom = -13;
		t.fillAlpha = 0.2;
		t.fillColor = 0x012C4C;
		t.height = 2;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.size = 33;
		t.text = "一、通比开船";
		t.textColor = 0x123f64;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "1、根据从大到小的牌型开始派彩；玩家胜负分数为：下注倍数X 牌型倍数 X 底分。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 43;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "2、最小牌型的玩家分数先支付给最大牌型的玩家，如果牌型最小玩家分数不足支付最大玩家应得的分数时，由倒数第二小牌型的玩家继续支付给最大牌型的玩家，以此类推，直到最大牌型玩家获得应得的分数；";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 172;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "3、如果牌型最小的玩家分数刚好足够支付最大玩家应得的分数，由倒数第二小牌型的玩家继续支付给第二大牌型玩家，以此类推，直至所有小牌型玩家支付完所有分数；";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 430;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "二、固定坐庄";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 645;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "1、抢庄规则：游戏开始后，玩家自行选择该房间的分数上限。选定的分数越高，越容易做庄家；如果多个玩家选中的分数相同，则随机一个庄家，此时该玩家为固定庄家，直至游戏结束。（选择房间分数与赔率、倍数、下注分数无关）；";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 688;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "2、不抢规则：如果玩家选择“不抢”或者无选中操作，倒数结束后，随机一个庄家；下一局游戏继续“抢庄”，以此类推，直到游戏结束；";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 946;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "三、牛牛上庄";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 1118;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "1、第一轮随机选定庄家，后续局数玩家谁的牌型为特殊牌型（包括牛牛），则下一局坐庄，多人同时获得特殊牌型，则选择最大者下一局坐庄；如果没有玩家获得特殊牌型，第一轮选定的庄家将一直坐庄；";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 1161;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "四、通用规则";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 1419;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "1、牌面数值：10，J，Q，K都为10，其他按牌面数字计算。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 1462;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "2、取其中三张牌数值相加，如果和是10的倍数，则剩余2张牌相加之和取个位数即为牛X， 如：4/9/8/7/K，(4+7+9=20)(K+8=18)，此牌型为牛八。如果剩余2张牌相加之和也是10的倍数即为牛.牛的牌型。如4/9/7/J/Q，J+Q=20，则为牛.牛。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 1548;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "3、五小牛：所有牌均小于5，点数总和小于等于10；炸弹牛：有四张相同的牌；五花牛：5张牌均为JQK。顺子牛：牌值按顺序递增或递减；同花牛：所有牌花色相同；葫芦牛：三张相同牌值的牌带两张相同牌值的牌；";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 1796;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "4、5张牌中任意3张牌之和都不能为10的倍数（特殊牌型除外，如葫芦牛），则判定为没牛。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 2044;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "5、牌型大小顺序为：五小牛>炸弹牛>葫芦牛>同花牛>五花牛>顺子牛>牛.牛>牛九>牛八>牛七>牛六>牛五>牛四>牛三>牛二>牛一>没牛。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 2173;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "6、如果牛数相同，则比较五张手牌中最大的那张牌的大小，顺序为：K>Q>J......>2>A。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 2345;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "7、如果牛数相同，最大那张牌的数字也相同，则比较花色，顺序为：黑桃>红桃>梅花>方块>五角星（同花牛，先比花色再比最大单牌）。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 2474;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "五、癞子牛牛";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 2646;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "1、癞子牛牛是基于经典牛牛的玩法，加入大小王并将大小王当成癞子的新款牛牛游戏。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 2689;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "2、癞子牛牛自带有金牛（10倍）、天牛（4倍）、地牛（4倍）。地牛：任意三张手牌（除大王）之和为10的倍数，加上小王；天牛：任意三张手牌（除小王）之和为10的倍数，加上大王；金牛：任意三张牌之和为10的倍数，再加大小王。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 2818;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "3、牌型大小顺序为：金牛>五小牛>炸弹牛>葫芦牛>同花牛>五花牛>顺子牛>天牛>地牛>牛.牛>牛九>牛八>牛七>牛六>牛五>牛四>牛三>牛二>牛一>没牛。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 3066;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "4、牛数相同：存在癞子的一方较大，都无癞子则先比较最大单牌大小（同花牛除外），若最大单牌大小相等则比较花色。顺序为：大王>小王>K>Q>J......>2>A。";
		t.textColor = 0x123F64;
		t.width = 600;
		t.x = 10;
		t.y = 3238;
		return t;
	};
	return NiuniuRule;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu13/NiuniuSkins.exml'] = window.NiuniuSkins = (function (_super) {
	__extends(NiuniuSkins, _super);
	var NiuniuSkins$Skin471 = 	(function (_super) {
		__extends(NiuniuSkins$Skin471, _super);
		function NiuniuSkins$Skin471() {
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
		var _proto = NiuniuSkins$Skin471.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanghuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin471;
	})(eui.Skin);

	var NiuniuSkins$Skin472 = 	(function (_super) {
		__extends(NiuniuSkins$Skin472, _super);
		function NiuniuSkins$Skin472() {
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
		var _proto = NiuniuSkins$Skin472.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanghuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin472;
	})(eui.Skin);

	var NiuniuSkins$Skin473 = 	(function (_super) {
		__extends(NiuniuSkins$Skin473, _super);
		function NiuniuSkins$Skin473() {
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
		var _proto = NiuniuSkins$Skin473.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanghuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin473;
	})(eui.Skin);

	var NiuniuSkins$Skin474 = 	(function (_super) {
		__extends(NiuniuSkins$Skin474, _super);
		function NiuniuSkins$Skin474() {
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
		var _proto = NiuniuSkins$Skin474.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanglan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin474;
	})(eui.Skin);

	var NiuniuSkins$Skin475 = 	(function (_super) {
		__extends(NiuniuSkins$Skin475, _super);
		function NiuniuSkins$Skin475() {
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
		var _proto = NiuniuSkins$Skin475.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanghuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin475;
	})(eui.Skin);

	var NiuniuSkins$Skin476 = 	(function (_super) {
		__extends(NiuniuSkins$Skin476, _super);
		function NiuniuSkins$Skin476() {
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
		var _proto = NiuniuSkins$Skin476.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanglan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin476;
	})(eui.Skin);

	var NiuniuSkins$Skin477 = 	(function (_super) {
		__extends(NiuniuSkins$Skin477, _super);
		function NiuniuSkins$Skin477() {
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
		var _proto = NiuniuSkins$Skin477.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanghuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin477;
	})(eui.Skin);

	var NiuniuSkins$Skin478 = 	(function (_super) {
		__extends(NiuniuSkins$Skin478, _super);
		function NiuniuSkins$Skin478() {
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
		var _proto = NiuniuSkins$Skin478.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanghuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin478;
	})(eui.Skin);

	var NiuniuSkins$Skin479 = 	(function (_super) {
		__extends(NiuniuSkins$Skin479, _super);
		function NiuniuSkins$Skin479() {
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
		var _proto = NiuniuSkins$Skin479.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanghuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin479;
	})(eui.Skin);

	var NiuniuSkins$Skin480 = 	(function (_super) {
		__extends(NiuniuSkins$Skin480, _super);
		function NiuniuSkins$Skin480() {
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
		var _proto = NiuniuSkins$Skin480.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_zhuanghuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -5;
			return t;
		};
		return NiuniuSkins$Skin480;
	})(eui.Skin);

	var NiuniuSkins$Skin481 = 	(function (_super) {
		__extends(NiuniuSkins$Skin481, _super);
		function NiuniuSkins$Skin481() {
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
		var _proto = NiuniuSkins$Skin481.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_prepare";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 43;
			t.verticalCenter = 0;
			return t;
		};
		return NiuniuSkins$Skin481;
	})(eui.Skin);

	var NiuniuSkins$Skin482 = 	(function (_super) {
		__extends(NiuniuSkins$Skin482, _super);
		function NiuniuSkins$Skin482() {
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
		var _proto = NiuniuSkins$Skin482.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_btn_showcard";
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
		return NiuniuSkins$Skin482;
	})(eui.Skin);

	var NiuniuSkins$Skin483 = 	(function (_super) {
		__extends(NiuniuSkins$Skin483, _super);
		function NiuniuSkins$Skin483() {
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
		var _proto = NiuniuSkins$Skin483.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_copyurl";
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
		return NiuniuSkins$Skin483;
	})(eui.Skin);

	var NiuniuSkins$Skin484 = 	(function (_super) {
		__extends(NiuniuSkins$Skin484, _super);
		function NiuniuSkins$Skin484() {
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
		var _proto = NiuniuSkins$Skin484.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_return-index-btn";
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
		return NiuniuSkins$Skin484;
	})(eui.Skin);

	var NiuniuSkins$Skin485 = 	(function (_super) {
		__extends(NiuniuSkins$Skin485, _super);
		function NiuniuSkins$Skin485() {
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
		var _proto = NiuniuSkins$Skin485.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_13niuniu_json.niuniu13_game_cancel";
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
		return NiuniuSkins$Skin485;
	})(eui.Skin);

	function NiuniuSkins() {
		_super.call(this);
		this.skinParts = ["_img_bg","_img_chat","_img_music","_img_index","_img_rule","_img_watch","_txt_cardsNum","_gp_roomcard","_gp_bottom","_txt_jushu","_txt_basescore","_gp_menu","_rect_player2_sitdown","_gp_player2_sitdown","_rect_player3_sitdown","_gp_player3_sitdown","_rect_player4_sitdown","_gp_player4_sitdown","_rect_player5_sitdown","_gp_player5_sitdown","_rect_player6_sitdown","_gp_player6_sitdown","_rect_player7_sitdown","_gp_player7_sitdown","_rect_player8_sitdown","_gp_player8_sitdown","_rect_player9_sitdown","_gp_player9_sitdown","_rect_player10_sitdown","_gp_player10_sitdown","_rect_player11_sitdown","_gp_player11_sitdown","_rect_player12_sitdown","_gp_player12_sitdown","_rect_player13_sitdown","_gp_player13_sitdown","_img_player7_cardsdata_1","_img_player7_cardsdata_2","_img_player7_cardsdata_3","_img_player7_cardsdata_4","_img_player7_cardsdata_5","_img_player7_cardstype","_gp_player7_cardstype","_gp_player7_cardsdata","_img_player7_kuang","_img_player7_head_bg","_img_player7_head","_txt_player7_name","_txt_player7_score","_img_player7_offline","_img_player7_zhuang","_img_msgbox_bg6","_txt_player7_messa","_gp_player7_message","_txt_player7_rankvalue","_txt_player7_tapscore","_txt_player7_ready","_gp_player7_headinfo","_gp_player7","_img_player6_cardsdata_1","_img_player6_cardsdata_2","_img_player6_cardsdata_3","_img_player6_cardsdata_4","_img_player6_cardsdata_5","_img_player6_cardstype","_gp_player6_cardstype","_gp_player6_cardsdata","_img_player6_kuang","_img_player6_head_bg","_img_player6_head","_txt_player6_name","_txt_player6_score","_img_player6_offline","_img_player6_zhuang","_img_msgbox_bg5","_txt_player6_message","_gp_player6_message","_txt_player6_rankvalue","_txt_player6_tapscore","_txt_player6_ready","_gp_player6_headinfo","_gp_player6","_img_player5_cardsdata_1","_img_player5_cardsdata_2","_img_player5_cardsdata_3","_img_player5_cardsdata_4","_img_player5_cardsdata_5","_img_player5_cardstype","_gp_player5_cardstype","_gp_player5_cardsdata","_img_player5_kuang","_img_player5_head_bg","_img_player5_head","_txt_player5_name","_txt_player5_score","_img_player5_offline","_img_player5_zhuang","_img_msgbox_bg4","_txt_player5_message","_gp_player5_message","_txt_player5_rankvalue","_txt_player5_tapscore","_txt_player5_ready","_gp_player5_headinfo","_gp_player5","_img_player4_cardsdata_1","_img_player4_cardsdata_2","_img_player4_cardsdata_3","_img_player4_cardsdata_4","_img_player4_cardsdata_5","_img_player4_cardstype","_gp_player4_cardstype","_gp_player4_cardsdata","_img_player4_kuang","_img_player4_head_bg","_img_player4_head","_txt_player4_name","_txt_player4_score","_img_player4_offline","_img_player4_zhuang","_img_msgbox_bg3","_txt_player4_message","_gp_player4_message","_txt_player4_rankvalue","_txt_player4_tapscore","_txt_player4_ready","_gp_player4_headinfo","_gp_player4","_img_player3_cardsdata_1","_img_player3_cardsdata_2","_img_player3_cardsdata_3","_img_player3_cardsdata_4","_img_player3_cardsdata_5","_img_player3_cardstype","_gp_player3_cardstype","_gp_player3_cardsdata","_img_player3_kuang","_img_player3_head_bg","_img_player3_head","_txt_player3_name","_txt_player3_score","_img_player3_offline","_img_player3_zhuang","_img_msgbox_bg2","_txt_player3_message","_gp_player3_message","_txt_player3_rankvalue","_txt_player3_tapscore","_txt_player3_ready","_gp_player3_headinfo","_gp_player3","_img_player2_cardsdata_1","_img_player2_cardsdata_2","_img_player2_cardsdata_3","_img_player2_cardsdata_4","_img_player2_cardsdata_5","_img_player2_cardstype","_gp_player2_cardstype","_gp_player2_cardsdata","_img_player2_kuang","_img_player2_head_bg","_img_player2_head","_txt_player2_name","_txt_player2_score","_img_player2_offline","_img_player2_zhuang","_img_msgbox_bg1","_txt_player2_message","_gp_player2_message","_txt_player2_rankvalue","_txt_player2_tapscore","_txt_player2_ready","_gp_player2_headinfo","_gp_player2","_img_player8_cardsdata_1","_img_player8_cardsdata_2","_img_player8_cardsdata_3","_img_player8_cardsdata_4","_img_player8_cardsdata_5","_img_player8_cardstype","_gp_player8_cardstype","_gp_player8_cardsdata","_img_player8_kuang","_img_player8_head_bg","_img_player8_head","_txt_player8_name","_txt_player8_score","_img_player8_offline","_img_player8_zhuang","_img_msgbox_bg7","_txt_player8_message","_gp_player8_message","_txt_player8_rankvalue","_txt_player8_tapscore","_txt_player8_ready","_gp_player8_headinfo","_gp_player8","_img_player9_cardsdata_1","_img_player9_cardsdata_2","_img_player9_cardsdata_3","_img_player9_cardsdata_4","_img_player9_cardsdata_5","_img_player9_cardstype","_gp_player9_cardstype","_gp_player9_cardsdata","_img_player9_kuang","_img_player9_head_bg","_img_player9_head","_txt_player9_name","_txt_player9_score","_img_player9_offline","_img_player9_zhuang","_img_msgbox_bg8","_txt_player9_message","_gp_player9_message","_txt_player9_rankvalue","_txt_player9_tapscore","_txt_player9_ready","_gp_player9_headinfo","_gp_player9","_img_player10_cardsdata_1","_img_player10_cardsdata_2","_img_player10_cardsdata_3","_img_player10_cardsdata_4","_img_player10_cardsdata_5","_img_player10_cardstype","_gp_player10_cardstype","_gp_player10_cardsdata","_img_player10_kuang","_img_player10_head_bg","_img_player10_head","_txt_player10_name","_txt_player10_score","_img_player10_offline","_img_player10_zhuang","_img_msgbox_bg9","_txt_player10_message","_gp_player10_message","_txt_player10_rankvalue","_txt_player10_tapscore","_txt_player10_ready","_gp_player10_headinfo","_gp_player10","_img_player11_cardsdata_1","_img_player11_cardsdata_2","_img_player11_cardsdata_3","_img_player11_cardsdata_4","_img_player11_cardsdata_5","_img_player11_cardstype","_gp_player11_cardstype","_gp_player11_cardsdata","_img_player11_kuang","_img_player11_head_bg","_img_player11_head","_txt_player11_name","_txt_player11_score","_img_player11_offline","_img_player11_zhuang","_img_msgbox_bg10","_txt_player11_message","_gp_player11_message","_txt_player11_rankvalue","_txt_player11_tapscore","_txt_player11_ready","_gp_player11_headinfo","_gp_player11","_img_player12_cardsdata_1","_img_player12_cardsdata_2","_img_player12_cardsdata_3","_img_player12_cardsdata_4","_img_player12_cardsdata_5","_img_player12_cardstype","_gp_player12_cardstype","_gp_player12_cardsdata","_img_player12_kuang","_img_player12_head_bg","_img_player12_head","_txt_player12_name","_txt_player12_score","_img_player12_offline","_img_player12_zhuang","_img_msgbox_bg11","_txt_player12_message","_gp_player12_message","_txt_player12_rankvalue","_txt_player12_tapscore","_txt_player12_ready","_gp_player12_headinfo","_gp_player12","_img_player13_cardsdata_1","_img_player13_cardsdata_2","_img_player13_cardsdata_3","_img_player13_cardsdata_4","_img_player13_cardsdata_5","_img_player13_cardstype","_gp_player13_cardstype","_gp_player13_cardsdata","_img_player13_kuang","_img_player13_head_bg","_img_player13_head","_txt_player13_name","_txt_player13_score","_img_player13_offline","_img_player13_zhuang","_img_msgbox_bg12","_txt_player13_message","_gp_player13_message","_txt_player13_rankvalue","_txt_player13_tapscore","_txt_player13_ready","_gp_player13_headinfo","_gp_player13","_gp_main","_txt_player1_ready","_txt_fanpainotice","_img_player1_cardsdata_1","_img_player1_cardsdata_2","_img_player1_cardsdata_3","_img_player1_cardsdata_4","_img_player1_cardsdata_5","_img_player1_cardstype","_gp_player1_cardstype","_gp_player1_cardsdata","_btn_qiang_sure1","_btn_qiang_sure2","_btn_qiang_sure4","_btn_qiang_notsure","_gp_qiang_actionbtn","_btn_qiang_sure0","_btn_qiang_notsure0","_gp_qiang_actionbtn0","_btn_rank_1","_btn_rank_2","_btn_rank_3","_btn_rank_4","_gp_rankbtn","_btn_showstate_start","_btn_showcard","_gp_operatebtn","_rect_player1_sitdown","_gp_player1_sitdown","_img_player1_kuang","_img_player1_head_bg","_img_player1_head","_txt_player1_name","_txt_player1_score","_img_player1_offline","_img_player1_zhuang","_img_msgbox_bg0","_txt_player1_message","_gp_player1_message","_txt_player1_rankvalue","_txt_player1_tapscore","_gp_player1_headinfo","_gp_player1","_img_clickbg","_txt_clickvalue","_gp_showstate_click","_txt_showstate_tag","_gp_showstate_tap","_gp_showstate","_btn_copyurl","_img_cuopaizheng","_img_cuopaibei","menban","_rect_backhall_menban","_btn_backhall","_btn_cancel_back","_gp_backhall_second","_gp_backhall","_rect_friend_menban","_txt_friend","_txt_friend0","_txt_friend_nickname","_img_friend_head","_txt_friend2","_gp_other","_rect_friends_btn","_txt_friends_btn","_gp_friends_btn","_gp_friend_second","_gp_friend","_rect_chat_menban","_gp_chat_item0","_gp_chat_item1","_gp_chat_item2","_gp_chat_item3","_gp_chat_item4","_gp_chat_item5","_gp_chat_item6","_gp_chat_item7","_gp_chat_item8","_gp_chat_item9","_gp_chat_item10","_gp_chat_item11","_gp_chat_item12","_gp_chat_second","_gp_chat","_rect_watch_menban","_txt_watchnum","_scroGp_watch","_img_watchClose","_rect_watchbtn","_txt_watchbtn","_gp_watchBtn","_gp_watch_second","_gp_watch"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._img_bg_i(),this._gp_bottom_i(),this._gp_menu_i(),this._gp_main_i(),this._gp_player1_i(),this._gp_showstate_i(),this._btn_copyurl_i(),this._img_cuopaizheng_i(),this._img_cuopaibei_i(),this.menban_i(),this._gp_backhall_i(),this._gp_friend_i(),this._gp_chat_i(),this._gp_watch_i()];
	}
	var _proto = NiuniuSkins.prototype;

	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 1320;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_niuniu13_bg_jpg";
		t.width = 750;
		t.x = -0.67;
		t.y = 0.67;
		return t;
	};
	_proto._gp_bottom_i = function () {
		var t = new eui.Group();
		this._gp_bottom = t;
		t.height = 95;
		t.x = 0;
		t.y = 1119;
		t.elementsContent = [this._Image1_i(),this._img_chat_i(),this._img_music_i(),this._img_index_i(),this._img_rule_i(),this._img_watch_i(),this._gp_roomcard_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,25,750,70);
		t.source = "dsGame_13niuniu_json.niuniu13_game_tab_bottom";
		t.y = 0;
		return t;
	};
	_proto._img_chat_i = function () {
		var t = new eui.Image();
		this._img_chat = t;
		t.scaleX = 0.98;
		t.scaleY = 0.98;
		t.source = "dsGame_13niuniu_json.niuniu13_game_btn_chat";
		t.x = 668;
		t.y = 24;
		return t;
	};
	_proto._img_music_i = function () {
		var t = new eui.Image();
		this._img_music = t;
		t.scaleX = 0.98;
		t.scaleY = 0.98;
		t.source = "dsGame_13niuniu_json.niuniu13_game_btn_musicoff";
		t.x = 576;
		t.y = 24;
		return t;
	};
	_proto._img_index_i = function () {
		var t = new eui.Image();
		this._img_index = t;
		t.scaleX = 0.98;
		t.scaleY = 0.98;
		t.source = "dsGame_13niuniu_json.niuniu13_game_btn_index";
		t.x = 484;
		t.y = 24;
		return t;
	};
	_proto._img_rule_i = function () {
		var t = new eui.Image();
		this._img_rule = t;
		t.scaleX = 0.98;
		t.scaleY = 0.98;
		t.source = "dsGame_13niuniu_json.niuniu13_game_btn_rule";
		t.x = 392;
		t.y = 24;
		return t;
	};
	_proto._img_watch_i = function () {
		var t = new eui.Image();
		this._img_watch = t;
		t.scaleX = 0.98;
		t.scaleY = 0.98;
		t.source = "dsGame_13niuniu_json.niuniu13_game_btn_sidelines";
		t.x = 300;
		t.y = 24;
		return t;
	};
	_proto._gp_roomcard_i = function () {
		var t = new eui.Group();
		this._gp_roomcard = t;
		t.x = 21;
		t.y = 20;
		t.elementsContent = [this._Rect1_i(),this._Image2_i(),this._txt_cardsNum_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.ellipseHeight = 50;
		t.ellipseWidth = 40;
		t.height = 40;
		t.verticalCenter = 0.5;
		t.width = 100;
		t.x = 22.77;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_btn_roomcard";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_cardsNum_i = function () {
		var t = new eui.Label();
		this._txt_cardsNum = t;
		t.height = 30;
		t.size = 30;
		t.text = "5555";
		t.textAlign = "right";
		t.verticalCenter = -0.5;
		t.width = 90;
		t.x = 21.74;
		return t;
	};
	_proto._gp_menu_i = function () {
		var t = new eui.Group();
		this._gp_menu = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -5;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.y = 10.79;
		t.elementsContent = [this._Rect2_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 90;
		t.horizontalCenter = 0;
		t.strokeColor = 0xe5e5e5;
		t.strokeWeight = 1;
		t.width = 160;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.verticalCenter = -2;
		t.elementsContent = [this._txt_jushu_i(),this._txt_basescore_i()];
		return t;
	};
	_proto._txt_jushu_i = function () {
		var t = new eui.Label();
		this._txt_jushu = t;
		t.blendMode = "normal";
		t.bold = false;
		t.border = false;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 30;
		t.text = "30/30局";
		t.textAlign = "center";
		t.y = 0;
		return t;
	};
	_proto._txt_basescore_i = function () {
		var t = new eui.Label();
		this._txt_basescore = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "底分：5分";
		t.textAlign = "center";
		t.y = 42.9;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.anchorOffsetY = 0;
		t.height = 884;
		t.horizontalCenter = 0;
		t.width = 750;
		t.y = 0;
		t.elementsContent = [this._gp_player2_sitdown_i(),this._gp_player3_sitdown_i(),this._gp_player4_sitdown_i(),this._gp_player5_sitdown_i(),this._gp_player6_sitdown_i(),this._gp_player7_sitdown_i(),this._gp_player8_sitdown_i(),this._gp_player9_sitdown_i(),this._gp_player10_sitdown_i(),this._gp_player11_sitdown_i(),this._gp_player12_sitdown_i(),this._gp_player13_sitdown_i(),this._gp_player7_i(),this._gp_player6_i(),this._gp_player5_i(),this._gp_player4_i(),this._gp_player3_i(),this._gp_player2_i(),this._gp_player8_i(),this._gp_player9_i(),this._gp_player10_i(),this._gp_player11_i(),this._gp_player12_i(),this._gp_player13_i()];
		return t;
	};
	_proto._gp_player2_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player2_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 28;
		t.y = 775;
		t.elementsContent = [this._rect_player2_sitdown_i(),this._Label1_i()];
		return t;
	};
	_proto._rect_player2_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player2_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player3_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player3_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 627;
		t.elementsContent = [this._rect_player3_sitdown_i(),this._Label2_i()];
		return t;
	};
	_proto._rect_player3_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player3_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player4_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player4_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 477;
		t.elementsContent = [this._rect_player4_sitdown_i(),this._Label3_i()];
		return t;
	};
	_proto._rect_player4_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player4_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player5_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player5_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 327;
		t.elementsContent = [this._rect_player5_sitdown_i(),this._Label4_i()];
		return t;
	};
	_proto._rect_player5_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player5_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player6_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player6_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 177;
		t.elementsContent = [this._rect_player6_sitdown_i(),this._Label5_i()];
		return t;
	};
	_proto._rect_player6_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player6_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player7_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player7_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 27;
		t.elementsContent = [this._rect_player7_sitdown_i(),this._Label6_i()];
		return t;
	};
	_proto._rect_player7_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player7_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player8_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player8_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 651;
		t.y = 27;
		t.elementsContent = [this._rect_player8_sitdown_i(),this._Label7_i()];
		return t;
	};
	_proto._rect_player8_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player8_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player9_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player9_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 651;
		t.y = 177;
		t.elementsContent = [this._rect_player9_sitdown_i(),this._Label8_i()];
		return t;
	};
	_proto._rect_player9_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player9_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player10_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player10_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 651;
		t.y = 327;
		t.elementsContent = [this._rect_player10_sitdown_i(),this._Label9_i()];
		return t;
	};
	_proto._rect_player10_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player10_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player11_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player11_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 651;
		t.y = 477;
		t.elementsContent = [this._rect_player11_sitdown_i(),this._Label10_i()];
		return t;
	};
	_proto._rect_player11_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player11_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player12_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player12_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 651;
		t.y = 627;
		t.elementsContent = [this._rect_player12_sitdown_i(),this._Label11_i()];
		return t;
	};
	_proto._rect_player12_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player12_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player13_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player13_sitdown = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 651;
		t.y = 777;
		t.elementsContent = [this._rect_player13_sitdown_i(),this._Label12_i()];
		return t;
	};
	_proto._rect_player13_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player13_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player7_i = function () {
		var t = new eui.Group();
		this._gp_player7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 300;
		t.x = 8;
		t.y = 0;
		t.elementsContent = [this._gp_player7_cardsdata_i(),this._Group2_i()];
		return t;
	};
	_proto._gp_player7_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player7_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 118.69;
		t.y = 54.67;
		t.elementsContent = [this._img_player7_cardsdata_1_i(),this._img_player7_cardsdata_2_i(),this._img_player7_cardsdata_3_i(),this._img_player7_cardsdata_4_i(),this._img_player7_cardsdata_5_i(),this._gp_player7_cardstype_i()];
		return t;
	};
	_proto._img_player7_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player7_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player7_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player7_cardstype_i()];
		return t;
	};
	_proto._img_player7_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player7_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.width = 82;
		t.x = 14.12;
		t.y = 18.82;
		t.elementsContent = [this._gp_player7_headinfo_i()];
		return t;
	};
	_proto._gp_player7_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player7_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player7_kuang_i(),this._img_player7_head_bg_i(),this._Rect3_i(),this._img_player7_head_i(),this._txt_player7_name_i(),this._txt_player7_score_i(),this._img_player7_offline_i(),this._img_player7_zhuang_i(),this._gp_player7_message_i(),this._txt_player7_rankvalue_i(),this._txt_player7_tapscore_i(),this._txt_player7_ready_i()];
		return t;
	};
	_proto._img_player7_kuang_i = function () {
		var t = new eui.Image();
		this._img_player7_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player7_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player7_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player7_head_i = function () {
		var t = new eui.Image();
		this._img_player7_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player7_name_i = function () {
		var t = new eui.Label();
		this._txt_player7_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player7_score_i = function () {
		var t = new eui.Label();
		this._txt_player7_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player7_offline_i = function () {
		var t = new eui.Image();
		this._img_player7_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player7_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player7_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = 52.00000000000001;
		t.y = -8;
		return t;
	};
	_proto._gp_player7_message_i = function () {
		var t = new eui.Group();
		this._gp_player7_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 30;
		t.y = -18;
		t.elementsContent = [this._img_msgbox_bg6_i(),this._txt_player7_messa_i()];
		return t;
	};
	_proto._img_msgbox_bg6_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg6 = t;
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(67,12,15,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player7_messa_i = function () {
		var t = new eui.Label();
		this._txt_player7_messa = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么";
		t.y = 6.34;
		return t;
	};
	_proto._txt_player7_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player7_rankvalue = t;
		t.bold = true;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.x = 105;
		t.y = 9;
		return t;
	};
	_proto._txt_player7_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player7_tapscore = t;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textColor = 0x00BFFE;
		t.x = 182;
		t.y = 35;
		return t;
	};
	_proto._txt_player7_ready_i = function () {
		var t = new eui.Label();
		this._txt_player7_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = 91;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player6_i = function () {
		var t = new eui.Group();
		this._gp_player6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 300;
		t.x = 8;
		t.y = 150;
		t.elementsContent = [this._gp_player6_cardsdata_i(),this._Group3_i()];
		return t;
	};
	_proto._gp_player6_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player6_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 118.69;
		t.y = 54.67;
		t.elementsContent = [this._img_player6_cardsdata_1_i(),this._img_player6_cardsdata_2_i(),this._img_player6_cardsdata_3_i(),this._img_player6_cardsdata_4_i(),this._img_player6_cardsdata_5_i(),this._gp_player6_cardstype_i()];
		return t;
	};
	_proto._img_player6_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player6_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player6_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player6_cardstype_i()];
		return t;
	};
	_proto._img_player6_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player6_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.width = 82;
		t.x = 14.12;
		t.y = 18.82;
		t.elementsContent = [this._gp_player6_headinfo_i()];
		return t;
	};
	_proto._gp_player6_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player6_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player6_kuang_i(),this._img_player6_head_bg_i(),this._Rect4_i(),this._img_player6_head_i(),this._txt_player6_name_i(),this._txt_player6_score_i(),this._img_player6_offline_i(),this._img_player6_zhuang_i(),this._gp_player6_message_i(),this._txt_player6_rankvalue_i(),this._txt_player6_tapscore_i(),this._txt_player6_ready_i()];
		return t;
	};
	_proto._img_player6_kuang_i = function () {
		var t = new eui.Image();
		this._img_player6_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player6_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player6_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player6_head_i = function () {
		var t = new eui.Image();
		this._img_player6_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player6_name_i = function () {
		var t = new eui.Label();
		this._txt_player6_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player6_score_i = function () {
		var t = new eui.Label();
		this._txt_player6_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player6_offline_i = function () {
		var t = new eui.Image();
		this._img_player6_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player6_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player6_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = 52.00000000000001;
		t.y = -8;
		return t;
	};
	_proto._gp_player6_message_i = function () {
		var t = new eui.Group();
		this._gp_player6_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 30;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg5_i(),this._txt_player6_message_i()];
		return t;
	};
	_proto._img_msgbox_bg5_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg5 = t;
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(67,12,15,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player6_message_i = function () {
		var t = new eui.Label();
		this._txt_player6_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 6.34;
		return t;
	};
	_proto._txt_player6_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player6_rankvalue = t;
		t.bold = true;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.x = 105;
		t.y = 9;
		return t;
	};
	_proto._txt_player6_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player6_tapscore = t;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textColor = 0x00BFFE;
		t.x = 182;
		t.y = 35;
		return t;
	};
	_proto._txt_player6_ready_i = function () {
		var t = new eui.Label();
		this._txt_player6_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = 91;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player5_i = function () {
		var t = new eui.Group();
		this._gp_player5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 300;
		t.x = 8;
		t.y = 300;
		t.elementsContent = [this._gp_player5_cardsdata_i(),this._Group4_i()];
		return t;
	};
	_proto._gp_player5_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player5_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 118.69;
		t.y = 54.67;
		t.elementsContent = [this._img_player5_cardsdata_1_i(),this._img_player5_cardsdata_2_i(),this._img_player5_cardsdata_3_i(),this._img_player5_cardsdata_4_i(),this._img_player5_cardsdata_5_i(),this._gp_player5_cardstype_i()];
		return t;
	};
	_proto._img_player5_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player5_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player5_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player5_cardstype_i()];
		return t;
	};
	_proto._img_player5_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player5_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.width = 82;
		t.x = 14.12;
		t.y = 18.82;
		t.elementsContent = [this._gp_player5_headinfo_i()];
		return t;
	};
	_proto._gp_player5_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player5_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player5_kuang_i(),this._img_player5_head_bg_i(),this._Rect5_i(),this._img_player5_head_i(),this._txt_player5_name_i(),this._txt_player5_score_i(),this._img_player5_offline_i(),this._img_player5_zhuang_i(),this._gp_player5_message_i(),this._txt_player5_rankvalue_i(),this._txt_player5_tapscore_i(),this._txt_player5_ready_i()];
		return t;
	};
	_proto._img_player5_kuang_i = function () {
		var t = new eui.Image();
		this._img_player5_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player5_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player5_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player5_head_i = function () {
		var t = new eui.Image();
		this._img_player5_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player5_name_i = function () {
		var t = new eui.Label();
		this._txt_player5_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player5_score_i = function () {
		var t = new eui.Label();
		this._txt_player5_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player5_offline_i = function () {
		var t = new eui.Image();
		this._img_player5_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player5_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player5_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = 52.00000000000001;
		t.y = -8;
		return t;
	};
	_proto._gp_player5_message_i = function () {
		var t = new eui.Group();
		this._gp_player5_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 30;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg4_i(),this._txt_player5_message_i()];
		return t;
	};
	_proto._img_msgbox_bg4_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg4 = t;
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(67,12,15,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player5_message_i = function () {
		var t = new eui.Label();
		this._txt_player5_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto._txt_player5_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player5_rankvalue = t;
		t.bold = true;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.x = 105;
		t.y = 9;
		return t;
	};
	_proto._txt_player5_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player5_tapscore = t;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textColor = 0x00BFFE;
		t.x = 182;
		t.y = 35;
		return t;
	};
	_proto._txt_player5_ready_i = function () {
		var t = new eui.Label();
		this._txt_player5_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = 91;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player4_i = function () {
		var t = new eui.Group();
		this._gp_player4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 300;
		t.x = 8;
		t.y = 450;
		t.elementsContent = [this._gp_player4_cardsdata_i(),this._Group5_i()];
		return t;
	};
	_proto._gp_player4_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player4_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 118.69;
		t.y = 54.67;
		t.elementsContent = [this._img_player4_cardsdata_1_i(),this._img_player4_cardsdata_2_i(),this._img_player4_cardsdata_3_i(),this._img_player4_cardsdata_4_i(),this._img_player4_cardsdata_5_i(),this._gp_player4_cardstype_i()];
		return t;
	};
	_proto._img_player4_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player4_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player4_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player4_cardstype_i()];
		return t;
	};
	_proto._img_player4_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player4_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.width = 82;
		t.x = 14.12;
		t.y = 18.82;
		t.elementsContent = [this._gp_player4_headinfo_i()];
		return t;
	};
	_proto._gp_player4_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player4_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player4_kuang_i(),this._img_player4_head_bg_i(),this._Rect6_i(),this._img_player4_head_i(),this._txt_player4_name_i(),this._txt_player4_score_i(),this._img_player4_offline_i(),this._img_player4_zhuang_i(),this._gp_player4_message_i(),this._txt_player4_rankvalue_i(),this._txt_player4_tapscore_i(),this._txt_player4_ready_i()];
		return t;
	};
	_proto._img_player4_kuang_i = function () {
		var t = new eui.Image();
		this._img_player4_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player4_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player4_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player4_head_i = function () {
		var t = new eui.Image();
		this._img_player4_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player4_name_i = function () {
		var t = new eui.Label();
		this._txt_player4_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player4_score_i = function () {
		var t = new eui.Label();
		this._txt_player4_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player4_offline_i = function () {
		var t = new eui.Image();
		this._img_player4_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player4_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player4_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = 52.00000000000001;
		t.y = -8;
		return t;
	};
	_proto._gp_player4_message_i = function () {
		var t = new eui.Group();
		this._gp_player4_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 30;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg3_i(),this._txt_player4_message_i()];
		return t;
	};
	_proto._img_msgbox_bg3_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg3 = t;
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(67,12,15,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player4_message_i = function () {
		var t = new eui.Label();
		this._txt_player4_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 6.34;
		return t;
	};
	_proto._txt_player4_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player4_rankvalue = t;
		t.bold = true;
		t.size = 39;
		t.stroke = 1;
		t.text = "x8";
		t.textColor = 0xFFE238;
		t.x = 105;
		t.y = 9;
		return t;
	};
	_proto._txt_player4_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player4_tapscore = t;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textColor = 0x00BFFE;
		t.x = 182;
		t.y = 35;
		return t;
	};
	_proto._txt_player4_ready_i = function () {
		var t = new eui.Label();
		this._txt_player4_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = 91;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player3_i = function () {
		var t = new eui.Group();
		this._gp_player3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 300;
		t.x = 8;
		t.y = 600;
		t.elementsContent = [this._gp_player3_cardsdata_i(),this._Group6_i()];
		return t;
	};
	_proto._gp_player3_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player3_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 118.69;
		t.y = 54.67;
		t.elementsContent = [this._img_player3_cardsdata_1_i(),this._img_player3_cardsdata_2_i(),this._img_player3_cardsdata_3_i(),this._img_player3_cardsdata_4_i(),this._img_player3_cardsdata_5_i(),this._gp_player3_cardstype_i()];
		return t;
	};
	_proto._img_player3_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player3_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player3_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player3_cardstype_i()];
		return t;
	};
	_proto._img_player3_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player3_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.width = 82;
		t.x = 14;
		t.y = 19;
		t.elementsContent = [this._gp_player3_headinfo_i()];
		return t;
	};
	_proto._gp_player3_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player3_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player3_kuang_i(),this._img_player3_head_bg_i(),this._Rect7_i(),this._img_player3_head_i(),this._txt_player3_name_i(),this._txt_player3_score_i(),this._img_player3_offline_i(),this._img_player3_zhuang_i(),this._gp_player3_message_i(),this._txt_player3_rankvalue_i(),this._txt_player3_tapscore_i(),this._txt_player3_ready_i()];
		return t;
	};
	_proto._img_player3_kuang_i = function () {
		var t = new eui.Image();
		this._img_player3_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player3_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player3_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player3_head_i = function () {
		var t = new eui.Image();
		this._img_player3_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player3_name_i = function () {
		var t = new eui.Label();
		this._txt_player3_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player3_score_i = function () {
		var t = new eui.Label();
		this._txt_player3_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player3_offline_i = function () {
		var t = new eui.Image();
		this._img_player3_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player3_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player3_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = 52.00000000000001;
		t.y = -8;
		return t;
	};
	_proto._gp_player3_message_i = function () {
		var t = new eui.Group();
		this._gp_player3_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 30;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg2_i(),this._txt_player3_message_i()];
		return t;
	};
	_proto._img_msgbox_bg2_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg2 = t;
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(67,12,15,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player3_message_i = function () {
		var t = new eui.Label();
		this._txt_player3_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto._txt_player3_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player3_rankvalue = t;
		t.bold = true;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.x = 105;
		t.y = 9;
		return t;
	};
	_proto._txt_player3_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player3_tapscore = t;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textColor = 0x00BFFE;
		t.x = 182;
		t.y = 35;
		return t;
	};
	_proto._txt_player3_ready_i = function () {
		var t = new eui.Label();
		this._txt_player3_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = 91;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player2_i = function () {
		var t = new eui.Group();
		this._gp_player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 300;
		t.x = 8;
		t.y = 750;
		t.elementsContent = [this._gp_player2_cardsdata_i(),this._Group7_i()];
		return t;
	};
	_proto._gp_player2_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player2_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 118.69;
		t.y = 54.67;
		t.elementsContent = [this._img_player2_cardsdata_1_i(),this._img_player2_cardsdata_2_i(),this._img_player2_cardsdata_3_i(),this._img_player2_cardsdata_4_i(),this._img_player2_cardsdata_5_i(),this._gp_player2_cardstype_i()];
		return t;
	};
	_proto._img_player2_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player2_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player2_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player2_cardstype_i()];
		return t;
	};
	_proto._img_player2_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player2_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.width = 82;
		t.x = 14.12;
		t.y = 18.82;
		t.elementsContent = [this._gp_player2_headinfo_i()];
		return t;
	};
	_proto._gp_player2_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player2_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player2_kuang_i(),this._img_player2_head_bg_i(),this._Rect8_i(),this._img_player2_head_i(),this._txt_player2_name_i(),this._txt_player2_score_i(),this._img_player2_offline_i(),this._img_player2_zhuang_i(),this._gp_player2_message_i(),this._txt_player2_rankvalue_i(),this._txt_player2_tapscore_i(),this._txt_player2_ready_i()];
		return t;
	};
	_proto._img_player2_kuang_i = function () {
		var t = new eui.Image();
		this._img_player2_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player2_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player2_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player2_head_i = function () {
		var t = new eui.Image();
		this._img_player2_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player2_name_i = function () {
		var t = new eui.Label();
		this._txt_player2_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player2_score_i = function () {
		var t = new eui.Label();
		this._txt_player2_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player2_offline_i = function () {
		var t = new eui.Image();
		this._img_player2_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player2_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player2_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = 52.00000000000001;
		t.y = -8;
		return t;
	};
	_proto._gp_player2_message_i = function () {
		var t = new eui.Group();
		this._gp_player2_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 30;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg1_i(),this._txt_player2_message_i()];
		return t;
	};
	_proto._img_msgbox_bg1_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg1 = t;
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(67,12,15,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player2_message_i = function () {
		var t = new eui.Label();
		this._txt_player2_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.verticalCenter = -6;
		return t;
	};
	_proto._txt_player2_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player2_rankvalue = t;
		t.bold = true;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.x = 105;
		t.y = 9;
		return t;
	};
	_proto._txt_player2_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player2_tapscore = t;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textColor = 0x00BFFE;
		t.x = 182;
		t.y = 35;
		return t;
	};
	_proto._txt_player2_ready_i = function () {
		var t = new eui.Label();
		this._txt_player2_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = 91;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player8_i = function () {
		var t = new eui.Group();
		this._gp_player8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.right = 8;
		t.width = 300;
		t.y = 0;
		t.elementsContent = [this._gp_player8_cardsdata_i(),this._Group8_i()];
		return t;
	};
	_proto._gp_player8_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player8_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 4;
		t.y = 54.67;
		t.elementsContent = [this._img_player8_cardsdata_1_i(),this._img_player8_cardsdata_2_i(),this._img_player8_cardsdata_3_i(),this._img_player8_cardsdata_4_i(),this._img_player8_cardsdata_5_i(),this._gp_player8_cardstype_i()];
		return t;
	};
	_proto._img_player8_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player8_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player8_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player8_cardstype_i()];
		return t;
	};
	_proto._img_player8_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player8_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.right = 14;
		t.width = 82;
		t.y = 18.82;
		t.elementsContent = [this._gp_player8_headinfo_i()];
		return t;
	};
	_proto._gp_player8_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player8_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player8_kuang_i(),this._img_player8_head_bg_i(),this._Rect9_i(),this._img_player8_head_i(),this._txt_player8_name_i(),this._txt_player8_score_i(),this._img_player8_offline_i(),this._img_player8_zhuang_i(),this._gp_player8_message_i(),this._txt_player8_rankvalue_i(),this._txt_player8_tapscore_i(),this._txt_player8_ready_i()];
		return t;
	};
	_proto._img_player8_kuang_i = function () {
		var t = new eui.Image();
		this._img_player8_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player8_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player8_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player8_head_i = function () {
		var t = new eui.Image();
		this._img_player8_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player8_name_i = function () {
		var t = new eui.Label();
		this._txt_player8_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player8_score_i = function () {
		var t = new eui.Label();
		this._txt_player8_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player8_offline_i = function () {
		var t = new eui.Image();
		this._img_player8_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player8_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player8_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = -9;
		t.y = -8;
		return t;
	};
	_proto._gp_player8_message_i = function () {
		var t = new eui.Group();
		this._gp_player8_message = t;
		t.right = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = -18;
		t.elementsContent = [this._img_msgbox_bg7_i(),this._txt_player8_message_i()];
		return t;
	};
	_proto._img_msgbox_bg7_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg7 = t;
		t.height = 48;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(21,12,9,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg0";
		t.y = 0;
		return t;
	};
	_proto._txt_player8_message_i = function () {
		var t = new eui.Label();
		this._txt_player8_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么";
		t.verticalCenter = -6;
		return t;
	};
	_proto._txt_player8_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player8_rankvalue = t;
		t.bold = true;
		t.right = 105;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.y = 9;
		return t;
	};
	_proto._txt_player8_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player8_tapscore = t;
		t.height = 30;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textAlign = "right";
		t.textColor = 0x00BFFE;
		t.width = 127;
		t.x = -225;
		t.y = 35;
		return t;
	};
	_proto._txt_player8_ready_i = function () {
		var t = new eui.Label();
		this._txt_player8_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = -89;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player9_i = function () {
		var t = new eui.Group();
		this._gp_player9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.right = 8;
		t.width = 300;
		t.y = 150;
		t.elementsContent = [this._gp_player9_cardsdata_i(),this._Group9_i()];
		return t;
	};
	_proto._gp_player9_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player9_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 4;
		t.y = 54.67;
		t.elementsContent = [this._img_player9_cardsdata_1_i(),this._img_player9_cardsdata_2_i(),this._img_player9_cardsdata_3_i(),this._img_player9_cardsdata_4_i(),this._img_player9_cardsdata_5_i(),this._gp_player9_cardstype_i()];
		return t;
	};
	_proto._img_player9_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player9_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player9_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player9_cardstype_i()];
		return t;
	};
	_proto._img_player9_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player9_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.right = 14;
		t.width = 82;
		t.y = 18.82;
		t.elementsContent = [this._gp_player9_headinfo_i()];
		return t;
	};
	_proto._gp_player9_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player9_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player9_kuang_i(),this._img_player9_head_bg_i(),this._Rect10_i(),this._img_player9_head_i(),this._txt_player9_name_i(),this._txt_player9_score_i(),this._img_player9_offline_i(),this._img_player9_zhuang_i(),this._gp_player9_message_i(),this._txt_player9_rankvalue_i(),this._txt_player9_tapscore_i(),this._txt_player9_ready_i()];
		return t;
	};
	_proto._img_player9_kuang_i = function () {
		var t = new eui.Image();
		this._img_player9_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player9_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player9_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player9_head_i = function () {
		var t = new eui.Image();
		this._img_player9_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player9_name_i = function () {
		var t = new eui.Label();
		this._txt_player9_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player9_score_i = function () {
		var t = new eui.Label();
		this._txt_player9_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player9_offline_i = function () {
		var t = new eui.Image();
		this._img_player9_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player9_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player9_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = -9;
		t.y = -8;
		return t;
	};
	_proto._gp_player9_message_i = function () {
		var t = new eui.Group();
		this._gp_player9_message = t;
		t.right = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg8_i(),this._txt_player9_message_i()];
		return t;
	};
	_proto._img_msgbox_bg8_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg8 = t;
		t.height = 48;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,12,11,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg0";
		t.y = 0;
		return t;
	};
	_proto._txt_player9_message_i = function () {
		var t = new eui.Label();
		this._txt_player9_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络";
		t.y = 6.34;
		return t;
	};
	_proto._txt_player9_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player9_rankvalue = t;
		t.bold = true;
		t.right = 105;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.y = 9;
		return t;
	};
	_proto._txt_player9_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player9_tapscore = t;
		t.height = 30;
		t.size = 35;
		t.stroke = 1;
		t.text = "-8888";
		t.textAlign = "right";
		t.textColor = 0x00BFFE;
		t.width = 127;
		t.x = -225;
		t.y = 35;
		return t;
	};
	_proto._txt_player9_ready_i = function () {
		var t = new eui.Label();
		this._txt_player9_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = -89;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player10_i = function () {
		var t = new eui.Group();
		this._gp_player10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.right = 8;
		t.width = 300;
		t.y = 300;
		t.elementsContent = [this._gp_player10_cardsdata_i(),this._Group10_i()];
		return t;
	};
	_proto._gp_player10_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player10_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 4;
		t.y = 54.67;
		t.elementsContent = [this._img_player10_cardsdata_1_i(),this._img_player10_cardsdata_2_i(),this._img_player10_cardsdata_3_i(),this._img_player10_cardsdata_4_i(),this._img_player10_cardsdata_5_i(),this._gp_player10_cardstype_i()];
		return t;
	};
	_proto._img_player10_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player10_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player10_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player10_cardstype_i()];
		return t;
	};
	_proto._img_player10_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player10_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.right = 14;
		t.width = 82;
		t.y = 18.82;
		t.elementsContent = [this._gp_player10_headinfo_i()];
		return t;
	};
	_proto._gp_player10_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player10_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player10_kuang_i(),this._img_player10_head_bg_i(),this._Rect11_i(),this._img_player10_head_i(),this._txt_player10_name_i(),this._txt_player10_score_i(),this._img_player10_offline_i(),this._img_player10_zhuang_i(),this._gp_player10_message_i(),this._txt_player10_rankvalue_i(),this._txt_player10_tapscore_i(),this._txt_player10_ready_i()];
		return t;
	};
	_proto._img_player10_kuang_i = function () {
		var t = new eui.Image();
		this._img_player10_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player10_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player10_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player10_head_i = function () {
		var t = new eui.Image();
		this._img_player10_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player10_name_i = function () {
		var t = new eui.Label();
		this._txt_player10_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player10_score_i = function () {
		var t = new eui.Label();
		this._txt_player10_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player10_offline_i = function () {
		var t = new eui.Image();
		this._img_player10_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player10_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player10_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = -9;
		t.y = -8;
		return t;
	};
	_proto._gp_player10_message_i = function () {
		var t = new eui.Group();
		this._gp_player10_message = t;
		t.right = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg9_i(),this._txt_player10_message_i()];
		return t;
	};
	_proto._img_msgbox_bg9_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg9 = t;
		t.height = 48;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(16,12,17,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg0";
		t.y = 0;
		return t;
	};
	_proto._txt_player10_message_i = function () {
		var t = new eui.Label();
		this._txt_player10_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.verticalCenter = -7;
		return t;
	};
	_proto._txt_player10_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player10_rankvalue = t;
		t.bold = true;
		t.right = 105;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.y = 9;
		return t;
	};
	_proto._txt_player10_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player10_tapscore = t;
		t.height = 30;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textAlign = "right";
		t.textColor = 0x00BFFE;
		t.width = 127;
		t.x = -225;
		t.y = 35;
		return t;
	};
	_proto._txt_player10_ready_i = function () {
		var t = new eui.Label();
		this._txt_player10_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = -89;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player11_i = function () {
		var t = new eui.Group();
		this._gp_player11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.right = 8;
		t.width = 300;
		t.y = 450;
		t.elementsContent = [this._gp_player11_cardsdata_i(),this._Group11_i()];
		return t;
	};
	_proto._gp_player11_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player11_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 4;
		t.y = 54.67;
		t.elementsContent = [this._img_player11_cardsdata_1_i(),this._img_player11_cardsdata_2_i(),this._img_player11_cardsdata_3_i(),this._img_player11_cardsdata_4_i(),this._img_player11_cardsdata_5_i(),this._gp_player11_cardstype_i()];
		return t;
	};
	_proto._img_player11_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player11_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player11_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player11_cardstype_i()];
		return t;
	};
	_proto._img_player11_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player11_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.right = 14;
		t.width = 82;
		t.y = 18.82;
		t.elementsContent = [this._gp_player11_headinfo_i()];
		return t;
	};
	_proto._gp_player11_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player11_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player11_kuang_i(),this._img_player11_head_bg_i(),this._Rect12_i(),this._img_player11_head_i(),this._txt_player11_name_i(),this._txt_player11_score_i(),this._img_player11_offline_i(),this._img_player11_zhuang_i(),this._gp_player11_message_i(),this._txt_player11_rankvalue_i(),this._txt_player11_tapscore_i(),this._txt_player11_ready_i()];
		return t;
	};
	_proto._img_player11_kuang_i = function () {
		var t = new eui.Image();
		this._img_player11_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player11_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player11_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player11_head_i = function () {
		var t = new eui.Image();
		this._img_player11_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player11_name_i = function () {
		var t = new eui.Label();
		this._txt_player11_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player11_score_i = function () {
		var t = new eui.Label();
		this._txt_player11_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player11_offline_i = function () {
		var t = new eui.Image();
		this._img_player11_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player11_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player11_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = -9;
		t.y = -8;
		return t;
	};
	_proto._gp_player11_message_i = function () {
		var t = new eui.Group();
		this._gp_player11_message = t;
		t.right = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 315;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg10_i(),this._txt_player11_message_i()];
		return t;
	};
	_proto._img_msgbox_bg10_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg10 = t;
		t.height = 48;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(17,12,11,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg0";
		t.y = 0;
		return t;
	};
	_proto._txt_player11_message_i = function () {
		var t = new eui.Label();
		this._txt_player11_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.verticalCenter = -6;
		return t;
	};
	_proto._txt_player11_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player11_rankvalue = t;
		t.bold = true;
		t.right = 105;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.y = 9;
		return t;
	};
	_proto._txt_player11_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player11_tapscore = t;
		t.height = 30;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textAlign = "right";
		t.textColor = 0x00BFFE;
		t.width = 127;
		t.x = -225;
		t.y = 35;
		return t;
	};
	_proto._txt_player11_ready_i = function () {
		var t = new eui.Label();
		this._txt_player11_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = -87;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player12_i = function () {
		var t = new eui.Group();
		this._gp_player12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.right = 8;
		t.width = 300;
		t.y = 600;
		t.elementsContent = [this._gp_player12_cardsdata_i(),this._Group12_i()];
		return t;
	};
	_proto._gp_player12_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player12_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 4;
		t.y = 54.67;
		t.elementsContent = [this._img_player12_cardsdata_1_i(),this._img_player12_cardsdata_2_i(),this._img_player12_cardsdata_3_i(),this._img_player12_cardsdata_4_i(),this._img_player12_cardsdata_5_i(),this._gp_player12_cardstype_i()];
		return t;
	};
	_proto._img_player12_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player12_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player12_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player12_cardstype_i()];
		return t;
	};
	_proto._img_player12_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player12_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.right = 14;
		t.width = 82;
		t.y = 18.82;
		t.elementsContent = [this._gp_player12_headinfo_i()];
		return t;
	};
	_proto._gp_player12_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player12_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player12_kuang_i(),this._img_player12_head_bg_i(),this._Rect13_i(),this._img_player12_head_i(),this._txt_player12_name_i(),this._txt_player12_score_i(),this._img_player12_offline_i(),this._img_player12_zhuang_i(),this._gp_player12_message_i(),this._txt_player12_rankvalue_i(),this._txt_player12_tapscore_i(),this._txt_player12_ready_i()];
		return t;
	};
	_proto._img_player12_kuang_i = function () {
		var t = new eui.Image();
		this._img_player12_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player12_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player12_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player12_head_i = function () {
		var t = new eui.Image();
		this._img_player12_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player12_name_i = function () {
		var t = new eui.Label();
		this._txt_player12_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player12_score_i = function () {
		var t = new eui.Label();
		this._txt_player12_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player12_offline_i = function () {
		var t = new eui.Image();
		this._img_player12_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player12_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player12_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = -9;
		t.y = -8;
		return t;
	};
	_proto._gp_player12_message_i = function () {
		var t = new eui.Group();
		this._gp_player12_message = t;
		t.right = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 315;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg11_i(),this._txt_player12_message_i()];
		return t;
	};
	_proto._img_msgbox_bg11_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg11 = t;
		t.height = 48;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(26,12,3,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg0";
		t.y = 0;
		return t;
	};
	_proto._txt_player12_message_i = function () {
		var t = new eui.Label();
		this._txt_player12_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 8.34;
		return t;
	};
	_proto._txt_player12_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player12_rankvalue = t;
		t.bold = true;
		t.right = 105;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.y = 9;
		return t;
	};
	_proto._txt_player12_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player12_tapscore = t;
		t.height = 30;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textAlign = "right";
		t.textColor = 0x00BFFE;
		t.width = 127;
		t.x = -225;
		t.y = 35;
		return t;
	};
	_proto._txt_player12_ready_i = function () {
		var t = new eui.Label();
		this._txt_player12_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = -87;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player13_i = function () {
		var t = new eui.Group();
		this._gp_player13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.right = 8;
		t.width = 300;
		t.y = 750;
		t.elementsContent = [this._gp_player13_cardsdata_i(),this._Group13_i()];
		return t;
	};
	_proto._gp_player13_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player13_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 4;
		t.y = 54.67;
		t.elementsContent = [this._img_player13_cardsdata_1_i(),this._img_player13_cardsdata_2_i(),this._img_player13_cardsdata_3_i(),this._img_player13_cardsdata_4_i(),this._img_player13_cardsdata_5_i(),this._gp_player13_cardstype_i()];
		return t;
	};
	_proto._img_player13_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_1 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_2 = t;
		t.height = 142;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_3 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_4 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_5 = t;
		t.height = 143;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto._gp_player13_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player13_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 60.39;
		t.elementsContent = [this._img_player13_cardstype_i()];
		return t;
	};
	_proto._img_player13_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player13_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_22";
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.right = 14;
		t.width = 82;
		t.y = 18.82;
		t.elementsContent = [this._gp_player13_headinfo_i()];
		return t;
	};
	_proto._gp_player13_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player13_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_player13_kuang_i(),this._img_player13_head_bg_i(),this._Rect14_i(),this._img_player13_head_i(),this._txt_player13_name_i(),this._txt_player13_score_i(),this._img_player13_offline_i(),this._img_player13_zhuang_i(),this._gp_player13_message_i(),this._txt_player13_rankvalue_i(),this._txt_player13_tapscore_i(),this._txt_player13_ready_i()];
		return t;
	};
	_proto._img_player13_kuang_i = function () {
		var t = new eui.Image();
		this._img_player13_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player13_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player13_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444D56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player13_head_i = function () {
		var t = new eui.Image();
		this._img_player13_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player13_name_i = function () {
		var t = new eui.Label();
		this._txt_player13_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player13_score_i = function () {
		var t = new eui.Label();
		this._txt_player13_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xE39049;
		t.width = 75;
		t.x = 4;
		t.y = 106.34;
		return t;
	};
	_proto._img_player13_offline_i = function () {
		var t = new eui.Image();
		this._img_player13_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player13_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player13_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = -9;
		t.y = -8;
		return t;
	};
	_proto._gp_player13_message_i = function () {
		var t = new eui.Group();
		this._gp_player13_message = t;
		t.right = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg12_i(),this._txt_player13_message_i()];
		return t;
	};
	_proto._img_msgbox_bg12_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg12 = t;
		t.height = 48;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(14,12,10,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg0";
		t.y = 0;
		return t;
	};
	_proto._txt_player13_message_i = function () {
		var t = new eui.Label();
		this._txt_player13_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "我出去一下，马上回来，等我哦";
		t.verticalCenter = -7;
		return t;
	};
	_proto._txt_player13_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player13_rankvalue = t;
		t.bold = true;
		t.right = 105;
		t.size = 39;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xFFE238;
		t.y = 9;
		return t;
	};
	_proto._txt_player13_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player13_tapscore = t;
		t.height = 30;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textAlign = "right";
		t.textColor = 0x00BFFE;
		t.width = 127;
		t.x = -225;
		t.y = 35;
		return t;
	};
	_proto._txt_player13_ready_i = function () {
		var t = new eui.Label();
		this._txt_player13_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = -87;
		t.size = 40;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xFFE238;
		t.y = 51.68;
		return t;
	};
	_proto._gp_player1_i = function () {
		var t = new eui.Group();
		this._gp_player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 750;
		t.y = 972.36;
		t.elementsContent = [this._txt_player1_ready_i(),this._txt_fanpainotice_i(),this._gp_player1_cardsdata_i(),this._gp_qiang_actionbtn_i(),this._gp_qiang_actionbtn0_i(),this._gp_rankbtn_i(),this._gp_operatebtn_i(),this._Group14_i()];
		return t;
	};
	_proto._txt_player1_ready_i = function () {
		var t = new eui.Label();
		this._txt_player1_ready = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = 6;
		t.size = 50;
		t.stroke = 1;
		t.text = "准备";
		t.textColor = 0xffe238;
		t.y = -134.7;
		return t;
	};
	_proto._txt_fanpainotice_i = function () {
		var t = new eui.Label();
		this._txt_fanpainotice = t;
		t.background = false;
		t.border = false;
		t.horizontalCenter = 0;
		t.size = 35;
		t.stroke = 1;
		t.text = "点击牌面看牌";
		t.textColor = 0xffffff;
		t.y = -51;
		return t;
	};
	_proto._gp_player1_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player1_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150.18;
		t.x = 193.02;
		t.y = 0;
		t.elementsContent = [this._img_player1_cardsdata_1_i(),this._img_player1_cardsdata_2_i(),this._img_player1_cardsdata_3_i(),this._img_player1_cardsdata_4_i(),this._img_player1_cardsdata_5_i(),this._gp_player1_cardstype_i()];
		return t;
	};
	_proto._img_player1_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_1 = t;
		t.height = 143;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_2 = t;
		t.height = 143;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 103;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_3 = t;
		t.height = 143;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 206;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_4 = t;
		t.height = 143;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 309;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_5 = t;
		t.height = 143;
		t.source = "dsGame_poker_json.card_bg";
		t.width = 94;
		t.x = 412;
		t.y = 0;
		return t;
	};
	_proto._gp_player1_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player1_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 350;
		t.y = 77.66;
		t.elementsContent = [this._img_player1_cardstype_i()];
		return t;
	};
	_proto._img_player1_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player1_cardstype = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_niutype_10";
		t.verticalCenter = 1.5;
		t.x = 111.00000000000003;
		t.y = -37.65999999999997;
		return t;
	};
	_proto._gp_qiang_actionbtn_i = function () {
		var t = new eui.Group();
		this._gp_qiang_actionbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -0.17000000000001592;
		t.visible = false;
		t.y = -70;
		t.elementsContent = [this._btn_qiang_sure1_i(),this._btn_qiang_sure2_i(),this._btn_qiang_sure4_i(),this._btn_qiang_notsure_i()];
		return t;
	};
	_proto._btn_qiang_sure1_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure1 = t;
		t.label = "4倍";
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin471;
		return t;
	};
	_proto._btn_qiang_sure2_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure2 = t;
		t.label = "4倍";
		t.x = 120;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin472;
		return t;
	};
	_proto._btn_qiang_sure4_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure4 = t;
		t.label = "4倍";
		t.x = 240;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin473;
		return t;
	};
	_proto._btn_qiang_notsure_i = function () {
		var t = new eui.Button();
		this._btn_qiang_notsure = t;
		t.label = "不抢";
		t.x = 360;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin474;
		return t;
	};
	_proto._gp_qiang_actionbtn0_i = function () {
		var t = new eui.Group();
		this._gp_qiang_actionbtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -0.17000000000001592;
		t.visible = false;
		t.y = -70;
		t.elementsContent = [this._btn_qiang_sure0_i(),this._btn_qiang_notsure0_i()];
		return t;
	};
	_proto._btn_qiang_sure0_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure0 = t;
		t.label = "抢";
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin475;
		return t;
	};
	_proto._btn_qiang_notsure0_i = function () {
		var t = new eui.Button();
		this._btn_qiang_notsure0 = t;
		t.label = "不抢";
		t.x = 136;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin476;
		return t;
	};
	_proto._gp_rankbtn_i = function () {
		var t = new eui.Group();
		this._gp_rankbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -0.17000000000001592;
		t.visible = false;
		t.y = -70;
		t.elementsContent = [this._btn_rank_1_i(),this._btn_rank_2_i(),this._btn_rank_3_i(),this._btn_rank_4_i()];
		return t;
	};
	_proto._btn_rank_1_i = function () {
		var t = new eui.Button();
		this._btn_rank_1 = t;
		t.label = "1倍";
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin477;
		return t;
	};
	_proto._btn_rank_2_i = function () {
		var t = new eui.Button();
		this._btn_rank_2 = t;
		t.label = "1倍";
		t.x = 120;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin478;
		return t;
	};
	_proto._btn_rank_3_i = function () {
		var t = new eui.Button();
		this._btn_rank_3 = t;
		t.label = "1倍";
		t.x = 240;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin479;
		return t;
	};
	_proto._btn_rank_4_i = function () {
		var t = new eui.Button();
		this._btn_rank_4 = t;
		t.label = "1倍";
		t.x = 360;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin480;
		return t;
	};
	_proto._gp_operatebtn_i = function () {
		var t = new eui.Group();
		this._gp_operatebtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.34;
		t.horizontalCenter = 0.3299999999999841;
		t.visible = false;
		t.width = 161.33;
		t.y = -75.66;
		t.elementsContent = [this._btn_showstate_start_i(),this._btn_showcard_i()];
		return t;
	};
	_proto._btn_showstate_start_i = function () {
		var t = new eui.Button();
		this._btn_showstate_start = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 0;
		t.label = "准备";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin481;
		return t;
	};
	_proto._btn_showcard_i = function () {
		var t = new eui.Button();
		this._btn_showcard = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin482;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 135;
		t.width = 82;
		t.x = 22.12;
		t.y = 4;
		t.elementsContent = [this._gp_player1_sitdown_i(),this._gp_player1_headinfo_i()];
		return t;
	};
	_proto._gp_player1_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player1_sitdown = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 7.58;
		t.elementsContent = [this._rect_player1_sitdown_i(),this._Label13_i()];
		return t;
	};
	_proto._rect_player1_sitdown_i = function () {
		var t = new eui.Rect();
		this._rect_player1_sitdown = t;
		t.alpha = 0.5;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 72;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 1;
		t.width = 72;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.alpha = 0.5;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "空位";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_player1_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player1_headinfo = t;
		t.height = 135;
		t.width = 82;
		t.x = 0;
		t.y = 6;
		t.elementsContent = [this._img_player1_kuang_i(),this._img_player1_head_bg_i(),this._Rect15_i(),this._img_player1_head_i(),this._txt_player1_name_i(),this._txt_player1_score_i(),this._img_player1_offline_i(),this._img_player1_zhuang_i(),this._gp_player1_message_i(),this._txt_player1_rankvalue_i(),this._txt_player1_tapscore_i()];
		return t;
	};
	_proto._img_player1_kuang_i = function () {
		var t = new eui.Image();
		this._img_player1_kuang = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang_guang";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player1_head_bg_i = function () {
		var t = new eui.Rect();
		this._img_player1_head_bg = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 135;
		t.strokeColor = 0x444d56;
		t.strokeWeight = 2;
		t.width = 82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 26;
		t.width = 72;
		t.x = 5;
		t.y = 104.66;
		return t;
	};
	_proto._img_player1_head_i = function () {
		var t = new eui.Image();
		this._img_player1_head = t;
		t.height = 72;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.width = 72;
		t.x = 5;
		t.y = 5.45;
		return t;
	};
	_proto._txt_player1_name_i = function () {
		var t = new eui.Label();
		this._txt_player1_name = t;
		t.height = 24;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 75;
		t.x = 4;
		t.y = 80.32;
		return t;
	};
	_proto._txt_player1_score_i = function () {
		var t = new eui.Label();
		this._txt_player1_score = t;
		t.height = 25;
		t.size = 25;
		t.text = "995";
		t.textAlign = "center";
		t.textColor = 0xe39049;
		t.width = 75;
		t.x = 4;
		t.y = 105.34;
		return t;
	};
	_proto._img_player1_offline_i = function () {
		var t = new eui.Image();
		this._img_player1_offline = t;
		t.source = "dsGame_13niuniu_json.niuniu13_game_offline";
		t.x = 6;
		t.y = 21;
		return t;
	};
	_proto._img_player1_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player1_zhuang = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dsGame_13niuniu_json.niuniu13_game_zhuang";
		t.x = 52.00000000000001;
		t.y = -8;
		return t;
	};
	_proto._gp_player1_message_i = function () {
		var t = new eui.Group();
		this._gp_player1_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 30;
		t.y = -40;
		t.elementsContent = [this._img_msgbox_bg0_i(),this._txt_player1_message_i()];
		return t;
	};
	_proto._img_msgbox_bg0_i = function () {
		var t = new eui.Image();
		this._img_msgbox_bg0 = t;
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(67,12,15,6);
		t.source = "dsGame_13niuniu_json.niuniu13_game_chatbg1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player1_message_i = function () {
		var t = new eui.Label();
		this._txt_player1_message = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "我出去一下，马上回来，等我哦";
		t.verticalCenter = -6.5;
		return t;
	};
	_proto._txt_player1_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player1_rankvalue = t;
		t.bold = true;
		t.size = 37;
		t.stroke = 1;
		t.text = "+88";
		t.textColor = 0xffe238;
		t.x = 95;
		t.y = -11;
		return t;
	};
	_proto._txt_player1_tapscore_i = function () {
		var t = new eui.Label();
		this._txt_player1_tapscore = t;
		t.size = 35;
		t.stroke = 1;
		t.text = "-88";
		t.textColor = 0x00bffe;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_showstate_i = function () {
		var t = new eui.Group();
		this._gp_showstate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.horizontalCenter = 0;
		t.width = 288;
		t.y = 310.71;
		t.elementsContent = [this._gp_showstate_click_i(),this._gp_showstate_tap_i()];
		return t;
	};
	_proto._gp_showstate_click_i = function () {
		var t = new eui.Group();
		this._gp_showstate_click = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 128;
		t.horizontalCenter = 0;
		t.width = 116;
		t.y = 3.99;
		t.elementsContent = [this._img_clickbg_i(),this._txt_clickvalue_i()];
		return t;
	};
	_proto._img_clickbg_i = function () {
		var t = new eui.Image();
		this._img_clickbg = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_timebg";
		t.y = 0;
		return t;
	};
	_proto._txt_clickvalue_i = function () {
		var t = new eui.Label();
		this._txt_clickvalue = t;
		t.height = 40;
		t.horizontalCenter = -1.5;
		t.size = 40;
		t.text = "9";
		t.textAlign = "center";
		t.textColor = 0x753709;
		t.width = 67;
		t.y = 50.34;
		return t;
	};
	_proto._gp_showstate_tap_i = function () {
		var t = new eui.Group();
		this._gp_showstate_tap = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 288;
		t.x = 0;
		t.y = 138.65;
		t.elementsContent = [this._txt_showstate_tag_i()];
		return t;
	};
	_proto._txt_showstate_tag_i = function () {
		var t = new eui.Label();
		this._txt_showstate_tag = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.stroke = 1;
		t.text = "等待下注";
		t.textAlign = "center";
		t.textColor = 0xe9ff46;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._btn_copyurl_i = function () {
		var t = new eui.Button();
		this._btn_copyurl = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 110.64;
		t.skinName = NiuniuSkins$Skin483;
		return t;
	};
	_proto._img_cuopaizheng_i = function () {
		var t = new eui.Image();
		this._img_cuopaizheng = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 143;
		t.rotation = 0;
		t.scaleX = 3;
		t.scaleY = 3;
		t.smoothing = true;
		t.source = "dsGame_poker_json.card_5_5";
		t.visible = false;
		t.x = 234;
		t.y = 823;
		return t;
	};
	_proto._img_cuopaibei_i = function () {
		var t = new eui.Image();
		this._img_cuopaibei = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 143;
		t.rotation = 15;
		t.scaleX = 3;
		t.scaleY = 3;
		t.smoothing = true;
		t.source = "dsGame_poker_json.card_bg";
		t.visible = false;
		t.x = 234;
		t.y = 823;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.height = 1320;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_backhall_i = function () {
		var t = new eui.Group();
		this._gp_backhall = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_backhall_menban_i(),this._gp_backhall_second_i()];
		return t;
	};
	_proto._rect_backhall_menban_i = function () {
		var t = new eui.Rect();
		this._rect_backhall_menban = t;
		t.height = 1320;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_backhall_second_i = function () {
		var t = new eui.Group();
		this._gp_backhall_second = t;
		t.x = 75;
		t.y = 433;
		t.elementsContent = [this._Rect16_i(),this._Group15_i(),this._Label14_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x7fcfe0;
		t.height = 380;
		t.strokeColor = 0x324877;
		t.strokeWeight = 25;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 258;
		t.elementsContent = [this._btn_backhall_i(),this._btn_cancel_back_i()];
		return t;
	};
	_proto._btn_backhall_i = function () {
		var t = new eui.Button();
		this._btn_backhall = t;
		t.label = "";
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin484;
		return t;
	};
	_proto._btn_cancel_back_i = function () {
		var t = new eui.Button();
		this._btn_cancel_back = t;
		t.label = "";
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.x = 240;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin485;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "确认返回主页？";
		t.textColor = 0x336481;
		t.y = 105;
		return t;
	};
	_proto._gp_friend_i = function () {
		var t = new eui.Group();
		this._gp_friend = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_friend_menban_i(),this._gp_friend_second_i()];
		return t;
	};
	_proto._rect_friend_menban_i = function () {
		var t = new eui.Rect();
		this._rect_friend_menban = t;
		t.height = 1320;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_friend_second_i = function () {
		var t = new eui.Group();
		this._gp_friend_second = t;
		t.x = 75;
		t.y = 433;
		t.elementsContent = [this._Rect17_i(),this._Rect18_i(),this._txt_friend_i(),this._gp_other_i(),this._Rect19_i(),this._gp_friends_btn_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x7f7f7f;
		t.height = 380;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 320;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 540;
		return t;
	};
	_proto._txt_friend_i = function () {
		var t = new eui.Label();
		this._txt_friend = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "你已被房主屏蔽，无法进入该房间，请联系房主！";
		t.textAlign = "center";
		t.textColor = 0x3d3d3d;
		t.visible = false;
		t.width = 480;
		t.y = 109;
		return t;
	};
	_proto._gp_other_i = function () {
		var t = new eui.Group();
		this._gp_other = t;
		t.horizontalCenter = 0;
		t.y = 51;
		t.elementsContent = [this._txt_friend0_i(),this._Group16_i(),this._txt_friend2_i()];
		return t;
	};
	_proto._txt_friend0_i = function () {
		var t = new eui.Label();
		this._txt_friend0 = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "你不是该房主的好友，无法加入房间；";
		t.textAlign = "center";
		t.textColor = 0x3D3D3D;
		t.width = 510;
		t.y = 2;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 42;
		t.elementsContent = [this._txt_friend_nickname_i(),this._img_friend_head_i()];
		return t;
	};
	_proto._txt_friend_nickname_i = function () {
		var t = new eui.Label();
		this._txt_friend_nickname = t;
		t.size = 30;
		t.text = "你已被房主屏";
		t.textAlign = "center";
		t.textColor = 0x3D3D3D;
		t.verticalCenter = 0;
		t.x = 114;
		return t;
	};
	_proto._img_friend_head_i = function () {
		var t = new eui.Image();
		this._img_friend_head = t;
		t.height = 100;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 0;
		return t;
	};
	_proto._txt_friend2_i = function () {
		var t = new eui.Label();
		this._txt_friend2 = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "是否申请成为好友？";
		t.textAlign = "center";
		t.textColor = 0x3D3D3D;
		t.y = 154;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x545454;
		t.height = 1;
		t.horizontalCenter = 0;
		t.width = 500;
		t.y = 247;
		return t;
	};
	_proto._gp_friends_btn_i = function () {
		var t = new eui.Group();
		this._gp_friends_btn = t;
		t.horizontalCenter = 0;
		t.y = 267;
		t.elementsContent = [this._rect_friends_btn_i(),this._txt_friends_btn_i()];
		return t;
	};
	_proto._rect_friends_btn_i = function () {
		var t = new eui.Rect();
		this._rect_friends_btn = t;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0xd6621a;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 180;
		return t;
	};
	_proto._txt_friends_btn_i = function () {
		var t = new eui.Label();
		this._txt_friends_btn = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "确定";
		t.verticalCenter = 0;
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
		t.x = 267;
		t.y = 452.52;
		t.elementsContent = [this._Rect20_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x7fcfe0;
		t.height = 675;
		t.strokeColor = 0x324877;
		t.strokeWeight = 15;
		t.width = 470;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 630;
		t.horizontalCenter = 0;
		t.width = 450;
		t.y = 19.5;
		t.viewport = this._Group17_i();
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._gp_chat_item0_i(),this._gp_chat_item1_i(),this._gp_chat_item2_i(),this._gp_chat_item3_i(),this._gp_chat_item4_i(),this._gp_chat_item5_i(),this._gp_chat_item6_i(),this._gp_chat_item7_i(),this._gp_chat_item8_i(),this._gp_chat_item9_i(),this._gp_chat_item10_i(),this._gp_chat_item11_i(),this._gp_chat_item12_i()];
		return t;
	};
	_proto._gp_chat_item0_i = function () {
		var t = new eui.Group();
		this._gp_chat_item0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 4;
		t.y = 15;
		t.elementsContent = [this._Label15_i(),this._Image3_i()];
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "快点吧，我等到花儿也谢了";
		t.textColor = 0x174c62;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item1_i = function () {
		var t = new eui.Group();
		this._gp_chat_item1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 14;
		t.y = 78;
		t.elementsContent = [this._Label16_i(),this._Image4_i()];
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "我出去叫人";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item2_i = function () {
		var t = new eui.Group();
		this._gp_chat_item2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 24;
		t.y = 141;
		t.elementsContent = [this._Label17_i(),this._Image5_i()];
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "你的牌好靓哇";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item3_i = function () {
		var t = new eui.Group();
		this._gp_chat_item3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 34;
		t.y = 204;
		t.elementsContent = [this._Label18_i(),this._Image6_i()];
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "我当年横扫澳门九条街";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item4_i = function () {
		var t = new eui.Group();
		this._gp_chat_item4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 44;
		t.y = 267;
		t.elementsContent = [this._Label19_i(),this._Image7_i()];
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "算你牛逼";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item5_i = function () {
		var t = new eui.Group();
		this._gp_chat_item5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 54;
		t.y = 330;
		t.elementsContent = [this._Label20_i(),this._Image8_i()];
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "别吹牛逼，有本事干到底";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item6_i = function () {
		var t = new eui.Group();
		this._gp_chat_item6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 64;
		t.y = 393;
		t.elementsContent = [this._Label21_i(),this._Image9_i()];
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "输得裤衩都没了";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item7_i = function () {
		var t = new eui.Group();
		this._gp_chat_item7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 74;
		t.y = 456;
		t.elementsContent = [this._Label22_i(),this._Image10_i()];
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "我给你们送温暖了";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item8_i = function () {
		var t = new eui.Group();
		this._gp_chat_item8 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 84;
		t.y = 519;
		t.elementsContent = [this._Label23_i(),this._Image11_i()];
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "谢谢老板";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item9_i = function () {
		var t = new eui.Group();
		this._gp_chat_item9 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94;
		t.y = 582;
		t.elementsContent = [this._Label24_i(),this._Image12_i()];
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "我来啦，让你们久等了";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item10_i = function () {
		var t = new eui.Group();
		this._gp_chat_item10 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 104;
		t.y = 645;
		t.elementsContent = [this._Label25_i(),this._Image13_i()];
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "我出去一下，马上回来，等我哦";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item11_i = function () {
		var t = new eui.Group();
		this._gp_chat_item11 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 114;
		t.y = 708;
		t.elementsContent = [this._Label26_i(),this._Image14_i()];
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "怎么断线了，网络太差了";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_chat_item12_i = function () {
		var t = new eui.Group();
		this._gp_chat_item12 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 124;
		t.y = 771;
		t.elementsContent = [this._Label27_i(),this._Image15_i()];
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "搏一搏，单车变摩托";
		t.textColor = 0x174C62;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_chat-border";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._gp_watch_i = function () {
		var t = new eui.Group();
		this._gp_watch = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_watch_menban_i(),this._gp_watch_second_i()];
		return t;
	};
	_proto._rect_watch_menban_i = function () {
		var t = new eui.Rect();
		this._rect_watch_menban = t;
		t.fillAlpha = 0.5;
		t.height = 1320;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_watch_second_i = function () {
		var t = new eui.Group();
		this._gp_watch_second = t;
		t.x = 349;
		t.y = 0;
		t.elementsContent = [this._Rect21_i(),this._Group18_i(),this._Group20_i(),this._img_watchClose_i(),this._gp_watchBtn_i()];
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0x111723;
		t.height = 730;
		t.strokeColor = 0x324877;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 84;
		t.elementsContent = [this._Rect22_i(),this._txt_watchnum_i()];
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0x2d4367;
		t.height = 40;
		t.width = 340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_watchnum_i = function () {
		var t = new eui.Label();
		this._txt_watchnum = t;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "观战人数：10";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.height = 350;
		t.horizontalCenter = 0;
		t.width = 340;
		t.y = 180;
		t.elementsContent = [this._Rect23_i(),this._Image16_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0x2D4367;
		t.height = 350;
		t.width = 340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "niuniu13_game_sidelines-list-bg_png";
		t.y = 7;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 300;
		t.width = 340;
		t.x = 0;
		t.y = 38.54;
		t.viewport = this._scroGp_watch_i();
		return t;
	};
	_proto._scroGp_watch_i = function () {
		var t = new eui.Group();
		this._scroGp_watch = t;
		t.elementsContent = [this._Group19_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 2;
		t.y = 0;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._Label28_i(),this._Label29_i(),this._Image19_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.41;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_sidelines-item";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.verticalCenter = 1;
		t.width = 65;
		t.x = 8;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "魂族网络科技";
		t.x = 86;
		t.y = 12;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "ID：999999";
		t.x = 86;
		t.y = 43;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_sidelines-icon";
		t.verticalCenter = 0;
		t.x = 296;
		return t;
	};
	_proto._img_watchClose_i = function () {
		var t = new eui.Image();
		this._img_watchClose = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "dsGame_13niuniu_json.niuniu13_game_sidelines-closr";
		return t;
	};
	_proto._gp_watchBtn_i = function () {
		var t = new eui.Group();
		this._gp_watchBtn = t;
		t.horizontalCenter = 0;
		t.y = 574;
		t.elementsContent = [this._rect_watchbtn_i(),this._txt_watchbtn_i()];
		return t;
	};
	_proto._rect_watchbtn_i = function () {
		var t = new eui.Rect();
		this._rect_watchbtn = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x46bdf4;
		t.height = 55;
		t.horizontalCenter = 0;
		t.strokeColor = 0x88d23a;
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto._txt_watchbtn_i = function () {
		var t = new eui.Label();
		this._txt_watchbtn = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "加入观战";
		t.verticalCenter = 0;
		return t;
	};
	return NiuniuSkins;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu13/NiuniuWatchItem.exml'] = window.NiuniuWatchItem = (function (_super) {
	__extends(NiuniuWatchItem, _super);
	function NiuniuWatchItem() {
		_super.call(this);
		this.skinParts = ["_img_head","_txt_nickname","_txt_id"];
		
		this.height = 75;
		this.width = 337;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = NiuniuWatchItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._img_head_i(),this._txt_nickname_i(),this._txt_id_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.41;
		t.scaleY = 1.2;
		t.source = "dsGame_13niuniu_json.niuniu13_game_sidelines-item";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 65;
		t.source = "dsGame_13niuniu_json.niuniu13_game_default_head";
		t.verticalCenter = 1;
		t.width = 65;
		t.x = 8;
		return t;
	};
	_proto._txt_nickname_i = function () {
		var t = new eui.Label();
		this._txt_nickname = t;
		t.size = 25;
		t.text = "魂族网络科技";
		t.x = 86;
		t.y = 12;
		return t;
	};
	_proto._txt_id_i = function () {
		var t = new eui.Label();
		this._txt_id = t;
		t.size = 25;
		t.text = "ID：999999";
		t.x = 86;
		t.y = 43;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_13niuniu_json.niuniu13_game_sidelines-icon";
		t.verticalCenter = 0;
		t.x = 296;
		return t;
	};
	return NiuniuWatchItem;
})(eui.Skin);