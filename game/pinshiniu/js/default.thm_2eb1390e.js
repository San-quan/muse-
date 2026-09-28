
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
                generateEUI.skins = {"CreateNiuniuScene":"resource/eui_skins/hall/CreateNiuniuScene.exml","NiuniuResult":"resource/eui_skins/NiuniuResult.exml","NiuniuRecord":"resource/eui_skins/niuniu/NiuniuRecord.exml"};generateEUI.paths['resource/eui_skins/club/clubEditScene.exml'] = window.clubEditScene = (function (_super) {
	__extends(clubEditScene, _super);
	var clubEditScene$Skin1 = 	(function (_super) {
		__extends(clubEditScene$Skin1, _super);
		function clubEditScene$Skin1() {
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
		var _proto = clubEditScene$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_sureedit";
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
		return clubEditScene$Skin1;
	})(eui.Skin);

	var clubEditScene$Skin2 = 	(function (_super) {
		__extends(clubEditScene$Skin2, _super);
		function clubEditScene$Skin2() {
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
		var _proto = clubEditScene$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_surecreate";
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
		return clubEditScene$Skin2;
	})(eui.Skin);

	function clubEditScene() {
		_super.call(this);
		this.skinParts = ["_label_usernum0","_editTxt_clubname","_editTxt_clubdesc","_btn_confirm","_btn_confirmCreate"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group2_i(),this._Image2_i(),this._Group4_i(),this._Group6_i(),this._btn_confirm_i(),this._btn_confirmCreate_i()];
	}
	var _proto = clubEditScene.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_usernum0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_usernum0_i = function () {
		var t = new eui.Label();
		this._label_usernum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "俱乐部信息编辑";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(30,23,29,34);
		t.source = "nn_hall_json.create_bg";
		t.width = 665;
		t.y = 82;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 60;
		t.y = 120;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Group3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(25,17,40,40);
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_txt_name";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 96;
		t.elementsContent = [this._Image5_i(),this._editTxt_clubname_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.menu_bg";
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	_proto._editTxt_clubname_i = function () {
		var t = new eui.EditableText();
		this._editTxt_clubname = t;
		t.height = 45;
		t.horizontalCenter = "0";
		t.prompt = "请输入名称";
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 470;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 220;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Group5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 250;
		t.scale9Grid = new egret.Rectangle(25,17,40,40);
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_txt_jieshao";
		t.x = 10;
		t.y = 33.22;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 96;
		t.elementsContent = [this._Image8_i(),this._editTxt_clubdesc_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.menu_bg";
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	_proto._editTxt_clubdesc_i = function () {
		var t = new eui.EditableText();
		this._editTxt_clubdesc = t;
		t.height = 180;
		t.horizontalCenter = "0";
		t.prompt = "请输入简介";
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.verticalCenter = "0";
		t.width = 470;
		return t;
	};
	_proto._btn_confirm_i = function () {
		var t = new eui.Button();
		this._btn_confirm = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 206;
		t.skinName = clubEditScene$Skin1;
		return t;
	};
	_proto._btn_confirmCreate_i = function () {
		var t = new eui.Button();
		this._btn_confirmCreate = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 206;
		t.skinName = clubEditScene$Skin2;
		return t;
	};
	return clubEditScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubInviteScene.exml'] = window.clubInviteScene = (function (_super) {
	__extends(clubInviteScene, _super);
	var clubInviteScene$Skin3 = 	(function (_super) {
		__extends(clubInviteScene$Skin3, _super);
		function clubInviteScene$Skin3() {
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
		var _proto = clubInviteScene$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_sureinvite";
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
		return clubInviteScene$Skin3;
	})(eui.Skin);

	var clubInviteScene$Skin4 = 	(function (_super) {
		__extends(clubInviteScene$Skin4, _super);
		function clubInviteScene$Skin4() {
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
		var _proto = clubInviteScene$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_surejoin";
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
		return clubInviteScene$Skin4;
	})(eui.Skin);

	function clubInviteScene() {
		_super.call(this);
		this.skinParts = ["_label_usernum0","_editTxt_userid","_btn_confirm","_btn_confirmJoin"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group2_i(),this._Image2_i(),this._Group4_i(),this._btn_confirm_i(),this._btn_confirmJoin_i()];
	}
	var _proto = clubInviteScene.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_usernum0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_usernum0_i = function () {
		var t = new eui.Label();
		this._label_usernum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "俱乐部邀请";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 300;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(30,23,29,34);
		t.source = "nn_hall_json.create_bg";
		t.width = 665;
		t.y = 82;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 60;
		t.y = 120;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Group3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(25,17,40,40);
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.txt_id";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 96;
		t.elementsContent = [this._Image5_i(),this._editTxt_userid_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.menu_bg";
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	_proto._editTxt_userid_i = function () {
		var t = new eui.EditableText();
		this._editTxt_userid = t;
		t.height = 45;
		t.horizontalCenter = "0";
		t.prompt = "请输入ID";
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 470;
		return t;
	};
	_proto._btn_confirm_i = function () {
		var t = new eui.Button();
		this._btn_confirm = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -64;
		t.skinName = clubInviteScene$Skin3;
		return t;
	};
	_proto._btn_confirmJoin_i = function () {
		var t = new eui.Button();
		this._btn_confirmJoin = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -64;
		t.skinName = clubInviteScene$Skin4;
		return t;
	};
	return clubInviteScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubListScene.exml'] = window.clubListScene = (function (_super) {
	__extends(clubListScene, _super);
	var clubListScene$Skin5 = 	(function (_super) {
		__extends(clubListScene$Skin5, _super);
		function clubListScene$Skin5() {
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
		var _proto = clubListScene$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_joinclub";
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
		return clubListScene$Skin5;
	})(eui.Skin);

	var clubListScene$Skin6 = 	(function (_super) {
		__extends(clubListScene$Skin6, _super);
		function clubListScene$Skin6() {
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
		var _proto = clubListScene$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_createclub";
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
		return clubListScene$Skin6;
	})(eui.Skin);

	function clubListScene() {
		_super.call(this);
		this.skinParts = ["_gb_clubList","_scro_content","_label_notice","_label_clubnum","_btn_join_club","_btn_create_club","_gp_btn"];
		
		this.height = 955;
		this.width = 720;
		this.elementsContent = [this._Group14_i()];
	}
	var _proto = clubListScene.prototype;

	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 0;
		t.elementsContent = [this._scro_content_i(),this._Group12_i(),this._Group13_i(),this._gp_btn_i()];
		return t;
	};
	_proto._scro_content_i = function () {
		var t = new eui.Scroller();
		this._scro_content = t;
		t.height = 720;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 114;
		t.viewport = this._gb_clubList_i();
		return t;
	};
	_proto._gb_clubList_i = function () {
		var t = new eui.Group();
		this._gb_clubList = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group5_i(),this._Group10_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 190;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 718;
		t.y = 6;
		t.elementsContent = [this._Rect1_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 36;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Group3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_6";
		t.x = 631.82;
		t.y = 0.52;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "俱乐部名称";
		t.x = 150;
		t.y = 1;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 150;
		t.y = 89.33;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0x667B97;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 185.71;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_5";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100房间";
		t.textColor = 0xB99829;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "俱乐部介绍";
		t.textColor = 0xAFACAC;
		t.x = 150;
		t.y = 47.09;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 190;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 718;
		t.y = 200;
		t.elementsContent = [this._Rect2_i(),this._Group9_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 36;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label5_i(),this._Group8_i(),this._Label8_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_6";
		t.x = 631.82;
		t.y = 0.52;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "俱乐部名称";
		t.x = 150;
		t.y = 1;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 150;
		t.y = 89.33;
		t.elementsContent = [this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image7_i(),this._Label6_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0x667B97;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 185.71;
		t.elementsContent = [this._Image8_i(),this._Label7_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_5";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100房间";
		t.textColor = 0xB99829;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "俱乐部介绍";
		t.textColor = 0xAFACAC;
		t.x = 150;
		t.y = 47.09;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_noticebg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 32;
		t.horizontalCenter = 20;
		t.touchEnabled = false;
		t.verticalCenter = -0.5;
		t.width = 575;
		t.viewport = this._Group11_i();
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._label_notice_i()];
		return t;
	};
	_proto._label_notice_i = function () {
		var t = new eui.Label();
		this._label_notice = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐";
		t.textColor = 0xAFACAC;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 62;
		t.elementsContent = [this._Image10_i(),this._label_clubnum_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_clubnum_i = function () {
		var t = new eui.Label();
		this._label_clubnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "我的俱乐部(10)";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._gp_btn_i = function () {
		var t = new eui.Group();
		this._gp_btn = t;
		t.height = 95;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 613;
		t.x = 53;
		t.y = 858.98;
		t.elementsContent = [this._btn_join_club_i(),this._btn_create_club_i()];
		return t;
	};
	_proto._btn_join_club_i = function () {
		var t = new eui.Button();
		this._btn_join_club = t;
		t.horizontalCenter = -178;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubListScene$Skin5;
		return t;
	};
	_proto._btn_create_club_i = function () {
		var t = new eui.Button();
		this._btn_create_club = t;
		t.horizontalCenter = 178;
		t.label = "";
		t.verticalCenter = -1.5;
		t.skinName = clubListScene$Skin6;
		return t;
	};
	return clubListScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubMainScene.exml'] = window.clubMainScene = (function (_super) {
	__extends(clubMainScene, _super);
	var clubMainScene$Skin7 = 	(function (_super) {
		__extends(clubMainScene$Skin7, _super);
		function clubMainScene$Skin7() {
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
		var _proto = clubMainScene$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_zhanji_btn";
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
		return clubMainScene$Skin7;
	})(eui.Skin);

	var clubMainScene$Skin8 = 	(function (_super) {
		__extends(clubMainScene$Skin8, _super);
		function clubMainScene$Skin8() {
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
		var _proto = clubMainScene$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_club_btn";
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
		return clubMainScene$Skin8;
	})(eui.Skin);

	var clubMainScene$Skin9 = 	(function (_super) {
		__extends(clubMainScene$Skin9, _super);
		function clubMainScene$Skin9() {
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
		var _proto = clubMainScene$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_find_btn";
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
		return clubMainScene$Skin9;
	})(eui.Skin);

	var clubMainScene$Skin10 = 	(function (_super) {
		__extends(clubMainScene$Skin10, _super);
		function clubMainScene$Skin10() {
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
		var _proto = clubMainScene$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_roomlist";
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
		return clubMainScene$Skin10;
	})(eui.Skin);

	var clubMainScene$Skin11 = 	(function (_super) {
		__extends(clubMainScene$Skin11, _super);
		function clubMainScene$Skin11() {
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
		var _proto = clubMainScene$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_create";
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
		return clubMainScene$Skin11;
	})(eui.Skin);

	var clubMainScene$Skin12 = 	(function (_super) {
		__extends(clubMainScene$Skin12, _super);
		function clubMainScene$Skin12() {
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
		var _proto = clubMainScene$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_pre";
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
		return clubMainScene$Skin12;
	})(eui.Skin);

	var clubMainScene$Skin13 = 	(function (_super) {
		__extends(clubMainScene$Skin13, _super);
		function clubMainScene$Skin13() {
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
		var _proto = clubMainScene$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_next";
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
		return clubMainScene$Skin13;
	})(eui.Skin);

	var clubMainScene$Skin14 = 	(function (_super) {
		__extends(clubMainScene$Skin14, _super);
		function clubMainScene$Skin14() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_5")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_5")
					])
			];
		}
		var _proto = clubMainScene$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_menu_5";
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
		return clubMainScene$Skin14;
	})(eui.Skin);

	var clubMainScene$Skin15 = 	(function (_super) {
		__extends(clubMainScene$Skin15, _super);
		function clubMainScene$Skin15() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_1")
					])
			];
		}
		var _proto = clubMainScene$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_menu_1";
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
		return clubMainScene$Skin15;
	})(eui.Skin);

	var clubMainScene$Skin16 = 	(function (_super) {
		__extends(clubMainScene$Skin16, _super);
		function clubMainScene$Skin16() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_4")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_4")
					])
			];
		}
		var _proto = clubMainScene$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_menu_4";
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
		return clubMainScene$Skin16;
	})(eui.Skin);

	var clubMainScene$Skin17 = 	(function (_super) {
		__extends(clubMainScene$Skin17, _super);
		function clubMainScene$Skin17() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_2")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_2")
					])
			];
		}
		var _proto = clubMainScene$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_menu_2";
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
		return clubMainScene$Skin17;
	})(eui.Skin);

	var clubMainScene$Skin18 = 	(function (_super) {
		__extends(clubMainScene$Skin18, _super);
		function clubMainScene$Skin18() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_3")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_3")
					])
			];
		}
		var _proto = clubMainScene$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_menu_3";
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
		return clubMainScene$Skin18;
	})(eui.Skin);

	var clubMainScene$Skin19 = 	(function (_super) {
		__extends(clubMainScene$Skin19, _super);
		function clubMainScene$Skin19() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_6")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_6")
					])
			];
		}
		var _proto = clubMainScene$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_menu_6";
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
		return clubMainScene$Skin19;
	})(eui.Skin);

	var clubMainScene$Skin20 = 	(function (_super) {
		__extends(clubMainScene$Skin20, _super);
		function clubMainScene$Skin20() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_7")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_menu_off_7")
					])
			];
		}
		var _proto = clubMainScene$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_menu_7";
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
		return clubMainScene$Skin20;
	})(eui.Skin);

	function clubMainScene() {
		_super.call(this);
		this.skinParts = ["_img_clubHead","_label_clubName","_label_peopleCount","_label_roomCount","_label_clubDesc","topGroup","_btn_zhanji","_btn_club","_btn_find","_btn_roomlist","_btn_create","_btn_prev","_btn_next","bottomGroup","_label_roomnum","_gb_","gameMainScroller","_gb_mains","_btn_apply","_btn_edit","_btn_club_zhanji","_btn_invite","_btn_record","_btn_player","_btn_set","_img_quitClub","_img_disbandClub"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.topGroup_i(),this.bottomGroup_i(),this._gb_mains_i(),this._Group19_i()];
	}
	var _proto = clubMainScene.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x141414;
		t.height = 1500;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_item_json.hall_index_top_big_bg";
		t.x = -1.34;
		t.y = -0.67;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 122;
		t.verticalCenter = 14.5;
		t.width = 672;
		t.x = 24;
		t.elementsContent = [this._img_clubHead_i(),this._Group1_i(),this._Group4_i(),this._label_clubDesc_i()];
		return t;
	};
	_proto._img_clubHead_i = function () {
		var t = new eui.Image();
		this._img_clubHead = t;
		t.height = 118;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.width = 126;
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 150;
		t.y = 0.52;
		t.elementsContent = [this._label_clubName_i(),this._Image2_i()];
		return t;
	};
	_proto._label_clubName_i = function () {
		var t = new eui.Label();
		this._label_clubName = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "俱乐部名称";
		t.verticalCenter = 0;
		t.x = 50;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_6";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 150;
		t.y = 89.33;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image3_i(),this._label_peopleCount_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_peopleCount_i = function () {
		var t = new eui.Label();
		this._label_peopleCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0x667B97;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 185.71;
		t.elementsContent = [this._Image4_i(),this._label_roomCount_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_5";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_roomCount_i = function () {
		var t = new eui.Label();
		this._label_roomCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100房间";
		t.textColor = 0xB99829;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._label_clubDesc_i = function () {
		var t = new eui.Label();
		this._label_clubDesc = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "俱乐部介绍";
		t.textColor = 0xAFACAC;
		t.verticalCenter = 0;
		t.x = 150;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.horizontalCenter = 0;
		t.y = 1130;
		t.elementsContent = [this._Rect2_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 50;
		t.x = 100;
		t.elementsContent = [this._btn_zhanji_i()];
		return t;
	};
	_proto._btn_zhanji_i = function () {
		var t = new eui.Button();
		this._btn_zhanji = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = clubMainScene$Skin7;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 50;
		t.elementsContent = [this._btn_club_i()];
		return t;
	};
	_proto._btn_club_i = function () {
		var t = new eui.Button();
		this._btn_club = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = clubMainScene$Skin8;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 50;
		t.x = 580;
		t.elementsContent = [this._btn_find_i()];
		return t;
	};
	_proto._btn_find_i = function () {
		var t = new eui.Button();
		this._btn_find = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = clubMainScene$Skin9;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 668;
		t.x = 26;
		t.y = -82.26999999999998;
		t.elementsContent = [this._btn_roomlist_i(),this._btn_create_i(),this._btn_prev_i(),this._btn_next_i()];
		return t;
	};
	_proto._btn_roomlist_i = function () {
		var t = new eui.Button();
		this._btn_roomlist = t;
		t.horizontalCenter = -239;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubMainScene$Skin10;
		return t;
	};
	_proto._btn_create_i = function () {
		var t = new eui.Button();
		this._btn_create = t;
		t.horizontalCenter = -39;
		t.label = "";
		t.verticalCenter = 0;
		t.visible = false;
		t.skinName = clubMainScene$Skin11;
		return t;
	};
	_proto._btn_prev_i = function () {
		var t = new eui.Button();
		this._btn_prev = t;
		t.horizontalCenter = 130.5;
		t.label = "";
		t.verticalCenter = 7.5;
		t.visible = false;
		t.skinName = clubMainScene$Skin12;
		return t;
	};
	_proto._btn_next_i = function () {
		var t = new eui.Button();
		this._btn_next = t;
		t.horizontalCenter = 269.5;
		t.label = "";
		t.verticalCenter = 7.5;
		t.visible = false;
		t.skinName = clubMainScene$Skin13;
		return t;
	};
	_proto._gb_mains_i = function () {
		var t = new eui.Group();
		this._gb_mains = t;
		t.horizontalCenter = 1;
		t.y = 297.02;
		t.elementsContent = [this._Group10_i(),this.gameMainScroller_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._label_roomnum_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_roomnum_i = function () {
		var t = new eui.Label();
		this._label_roomnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "房间列表(10)";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto.gameMainScroller_i = function () {
		var t = new eui.Scroller();
		this.gameMainScroller = t;
		t.anchorOffsetY = 0;
		t.height = 680;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 50;
		t.viewport = this._gb__i();
		return t;
	};
	_proto._gb__i = function () {
		var t = new eui.Group();
		this._gb_ = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group18_i()];
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 718;
		t.y = 6;
		t.elementsContent = [this._Rect3_i(),this._Group17_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image6_i(),this._Group16_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 118;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.width = 126;
		t.x = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 113.62;
		t.elementsContent = [this._Label1_i(),this._Group15_i(),this._Image11_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "十人牛牛";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 48.87;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0xea758e;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 130;
		t.elementsContent = [this._Image8_i(),this._Label3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0xd8ba47;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 260;
		t.elementsContent = [this._Image9_i(),this._Label4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0x667B97;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 390;
		t.elementsContent = [this._Image10_i(),this._Label5_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_7";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100房间";
		t.textColor = 0x911d1d;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_roomstatebig_3";
		t.x = 406.4;
		t.y = 0;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.height = 89;
		t.horizontalCenter = 0.5;
		t.width = 683;
		t.y = 197;
		t.elementsContent = [this._btn_apply_i(),this._btn_edit_i(),this._btn_club_zhanji_i(),this._btn_invite_i(),this._btn_record_i(),this._btn_player_i(),this._btn_set_i(),this._img_quitClub_i(),this._img_disbandClub_i()];
		return t;
	};
	_proto._btn_apply_i = function () {
		var t = new eui.Button();
		this._btn_apply = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = clubMainScene$Skin14;
		return t;
	};
	_proto._btn_edit_i = function () {
		var t = new eui.Button();
		this._btn_edit = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 98;
		t.skinName = clubMainScene$Skin15;
		return t;
	};
	_proto._btn_club_zhanji_i = function () {
		var t = new eui.Button();
		this._btn_club_zhanji = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 196;
		t.skinName = clubMainScene$Skin16;
		return t;
	};
	_proto._btn_invite_i = function () {
		var t = new eui.Button();
		this._btn_invite = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 294;
		t.skinName = clubMainScene$Skin17;
		return t;
	};
	_proto._btn_record_i = function () {
		var t = new eui.Button();
		this._btn_record = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 392;
		t.skinName = clubMainScene$Skin18;
		return t;
	};
	_proto._btn_player_i = function () {
		var t = new eui.Button();
		this._btn_player = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 490;
		t.skinName = clubMainScene$Skin19;
		return t;
	};
	_proto._btn_set_i = function () {
		var t = new eui.Button();
		this._btn_set = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 588;
		t.skinName = clubMainScene$Skin20;
		return t;
	};
	_proto._img_quitClub_i = function () {
		var t = new eui.Image();
		this._img_quitClub = t;
		t.source = "nn_hall_json.hall_btn_exitclub";
		t.x = 475;
		t.y = 91;
		return t;
	};
	_proto._img_disbandClub_i = function () {
		var t = new eui.Image();
		this._img_disbandClub = t;
		t.source = "nn_hall_json.hall_btn_jiesan";
		t.x = 81.06;
		t.y = 91;
		return t;
	};
	return clubMainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubPlayerItem.exml'] = window.clubPlayerItem = (function (_super) {
	__extends(clubPlayerItem, _super);
	var clubPlayerItem$Skin21 = 	(function (_super) {
		__extends(clubPlayerItem$Skin21, _super);
		function clubPlayerItem$Skin21() {
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
		var _proto = clubPlayerItem$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_forbidden";
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
		return clubPlayerItem$Skin21;
	})(eui.Skin);

	var clubPlayerItem$Skin22 = 	(function (_super) {
		__extends(clubPlayerItem$Skin22, _super);
		function clubPlayerItem$Skin22() {
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
		var _proto = clubPlayerItem$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_cancelforb";
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
		return clubPlayerItem$Skin22;
	})(eui.Skin);

	var clubPlayerItem$Skin23 = 	(function (_super) {
		__extends(clubPlayerItem$Skin23, _super);
		function clubPlayerItem$Skin23() {
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
		var _proto = clubPlayerItem$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_tiren";
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
		return clubPlayerItem$Skin23;
	})(eui.Skin);

	function clubPlayerItem() {
		_super.call(this);
		this.skinParts = ["_img_head","_label_nickname","_label_id","_btn_abandent","_btn_cancelblack","_btn_kickashole","_img_isOwner"];
		
		this.height = 104;
		this.width = 718;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = clubPlayerItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 718;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._img_head_i(),this._label_nickname_i(),this._label_id_i(),this._btn_abandent_i(),this._btn_cancelblack_i(),this._btn_kickashole_i(),this._img_isOwner_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.height = 104;
		t.width = 718;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 126;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.width = 126;
		t.x = 23;
		return t;
	};
	_proto._label_nickname_i = function () {
		var t = new eui.Label();
		this._label_nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "魂族网络科技";
		t.x = 120;
		t.y = 19;
		return t;
	};
	_proto._label_id_i = function () {
		var t = new eui.Label();
		this._label_id = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "ID：665656";
		t.textColor = 0xF2E571;
		t.x = 120;
		t.y = 59.67;
		return t;
	};
	_proto._btn_abandent_i = function () {
		var t = new eui.Button();
		this._btn_abandent = t;
		t.horizontalCenter = 156.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubPlayerItem$Skin21;
		return t;
	};
	_proto._btn_cancelblack_i = function () {
		var t = new eui.Button();
		this._btn_cancelblack = t;
		t.horizontalCenter = 268;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubPlayerItem$Skin22;
		return t;
	};
	_proto._btn_kickashole_i = function () {
		var t = new eui.Button();
		this._btn_kickashole = t;
		t.horizontalCenter = 268;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubPlayerItem$Skin23;
		return t;
	};
	_proto._img_isOwner_i = function () {
		var t = new eui.Image();
		this._img_isOwner = t;
		t.source = "nn_hall_json.hall_icon_6";
		t.verticalCenter = 0;
		t.x = 610;
		return t;
	};
	return clubPlayerItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubPlayerScene.exml'] = window.clubPlayerScene = (function (_super) {
	__extends(clubPlayerScene, _super);
	var clubPlayerScene$Skin24 = 	(function (_super) {
		__extends(clubPlayerScene$Skin24, _super);
		function clubPlayerScene$Skin24() {
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
		var _proto = clubPlayerScene$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_forbidden";
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
		return clubPlayerScene$Skin24;
	})(eui.Skin);

	var clubPlayerScene$Skin25 = 	(function (_super) {
		__extends(clubPlayerScene$Skin25, _super);
		function clubPlayerScene$Skin25() {
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
		var _proto = clubPlayerScene$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_cancelforb";
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
		return clubPlayerScene$Skin25;
	})(eui.Skin);

	var clubPlayerScene$Skin26 = 	(function (_super) {
		__extends(clubPlayerScene$Skin26, _super);
		function clubPlayerScene$Skin26() {
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
		var _proto = clubPlayerScene$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_tiren";
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
		return clubPlayerScene$Skin26;
	})(eui.Skin);

	function clubPlayerScene() {
		_super.call(this);
		this.skinParts = ["_label_usernum","_scroGp_list","_scro_content"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = clubPlayerScene.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._scro_content_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_usernum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_usernum_i = function () {
		var t = new eui.Label();
		this._label_usernum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "成员列表(10)";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._scro_content_i = function () {
		var t = new eui.Scroller();
		this._scro_content = t;
		t.anchorOffsetY = 0;
		t.height = 680;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 50;
		t.viewport = this._scroGp_list_i();
		return t;
	};
	_proto._scroGp_list_i = function () {
		var t = new eui.Group();
		this._scroGp_list = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 718;
		t.y = 6;
		t.elementsContent = [this._Rect1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Button1_i(),this._Button2_i(),this._Button3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.height = 104;
		t.width = 718;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.x = 23;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "魂族网络科技";
		t.x = 120;
		t.y = 19;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "ID：665656";
		t.textColor = 0xf2e571;
		t.x = 120;
		t.y = 59.67;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 467.66;
		t.skinName = clubPlayerScene$Skin24;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 580;
		t.skinName = clubPlayerScene$Skin25;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 580;
		t.skinName = clubPlayerScene$Skin26;
		return t;
	};
	return clubPlayerScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubRoomCreate.exml'] = window.clubRoomCreate = (function (_super) {
	__extends(clubRoomCreate, _super);
	var clubRoomCreate$Skin27 = 	(function (_super) {
		__extends(clubRoomCreate$Skin27, _super);
		function clubRoomCreate$Skin27() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin27;
	})(eui.Skin);

	var clubRoomCreate$Skin28 = 	(function (_super) {
		__extends(clubRoomCreate$Skin28, _super);
		function clubRoomCreate$Skin28() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin28;
	})(eui.Skin);

	var clubRoomCreate$Skin29 = 	(function (_super) {
		__extends(clubRoomCreate$Skin29, _super);
		function clubRoomCreate$Skin29() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin29;
	})(eui.Skin);

	var clubRoomCreate$Skin30 = 	(function (_super) {
		__extends(clubRoomCreate$Skin30, _super);
		function clubRoomCreate$Skin30() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin30;
	})(eui.Skin);

	var clubRoomCreate$Skin31 = 	(function (_super) {
		__extends(clubRoomCreate$Skin31, _super);
		function clubRoomCreate$Skin31() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin31;
	})(eui.Skin);

	var clubRoomCreate$Skin32 = 	(function (_super) {
		__extends(clubRoomCreate$Skin32, _super);
		function clubRoomCreate$Skin32() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin32;
	})(eui.Skin);

	var clubRoomCreate$Skin33 = 	(function (_super) {
		__extends(clubRoomCreate$Skin33, _super);
		function clubRoomCreate$Skin33() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin33;
	})(eui.Skin);

	var clubRoomCreate$Skin34 = 	(function (_super) {
		__extends(clubRoomCreate$Skin34, _super);
		function clubRoomCreate$Skin34() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin34;
	})(eui.Skin);

	var clubRoomCreate$Skin35 = 	(function (_super) {
		__extends(clubRoomCreate$Skin35, _super);
		function clubRoomCreate$Skin35() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin35;
	})(eui.Skin);

	var clubRoomCreate$Skin36 = 	(function (_super) {
		__extends(clubRoomCreate$Skin36, _super);
		function clubRoomCreate$Skin36() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin36;
	})(eui.Skin);

	var clubRoomCreate$Skin37 = 	(function (_super) {
		__extends(clubRoomCreate$Skin37, _super);
		function clubRoomCreate$Skin37() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin37;
	})(eui.Skin);

	var clubRoomCreate$Skin38 = 	(function (_super) {
		__extends(clubRoomCreate$Skin38, _super);
		function clubRoomCreate$Skin38() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin38;
	})(eui.Skin);

	var clubRoomCreate$Skin39 = 	(function (_super) {
		__extends(clubRoomCreate$Skin39, _super);
		function clubRoomCreate$Skin39() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.create_cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.create_cicle_off";
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
		return clubRoomCreate$Skin39;
	})(eui.Skin);

	var clubRoomCreate$Skin40 = 	(function (_super) {
		__extends(clubRoomCreate$Skin40, _super);
		function clubRoomCreate$Skin40() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_fang_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_fang_off";
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
		return clubRoomCreate$Skin40;
	})(eui.Skin);

	var clubRoomCreate$Skin41 = 	(function (_super) {
		__extends(clubRoomCreate$Skin41, _super);
		function clubRoomCreate$Skin41() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_fang_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_fang_off";
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
		return clubRoomCreate$Skin41;
	})(eui.Skin);

	var clubRoomCreate$Skin42 = 	(function (_super) {
		__extends(clubRoomCreate$Skin42, _super);
		function clubRoomCreate$Skin42() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_fang_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_fang_off";
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
		return clubRoomCreate$Skin42;
	})(eui.Skin);

	var clubRoomCreate$Skin43 = 	(function (_super) {
		__extends(clubRoomCreate$Skin43, _super);
		function clubRoomCreate$Skin43() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_fang_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_fang_off";
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
		return clubRoomCreate$Skin43;
	})(eui.Skin);

	var clubRoomCreate$Skin44 = 	(function (_super) {
		__extends(clubRoomCreate$Skin44, _super);
		function clubRoomCreate$Skin44() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_fang_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_fang_off";
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
		return clubRoomCreate$Skin44;
	})(eui.Skin);

	var clubRoomCreate$Skin45 = 	(function (_super) {
		__extends(clubRoomCreate$Skin45, _super);
		function clubRoomCreate$Skin45() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_fang_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_fang_off";
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
		return clubRoomCreate$Skin45;
	})(eui.Skin);

	var clubRoomCreate$Skin46 = 	(function (_super) {
		__extends(clubRoomCreate$Skin46, _super);
		function clubRoomCreate$Skin46() {
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
						new eui.SetProperty("_Image1","source","nn_hall_json.hall_fang_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = clubRoomCreate$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_fang_off";
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
		return clubRoomCreate$Skin46;
	})(eui.Skin);

	var clubRoomCreate$Skin47 = 	(function (_super) {
		__extends(clubRoomCreate$Skin47, _super);
		function clubRoomCreate$Skin47() {
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
		var _proto = clubRoomCreate$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_button_create";
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
		return clubRoomCreate$Skin47;
	})(eui.Skin);

	function clubRoomCreate() {
		_super.call(this);
		this.skinParts = ["_label_roomnum","_RdBtn_playcount0","_label_playcount0","_RdBtn_playcount1","_label_playcount1","_RdBtn_peopelcount0","_label_peoplecount0","_RdBtn_peopelcount1","_label_peoplecount1","_RdBtn_xiazhu0","_label_xiazhu0","_RdBtn_xiazhu1","_label_xiazhu1","_RdBtn_joker0","_label_joker0","_RdBtn_joker1","_label_joker1","_RdBtn_basescore0","_label_basescore0","_RdBtn_basescore1","_label_basescore1","_RdBtn_basescore2","_label_basescore2","_RdBtn_basescore3","_label_basescore3","_RdBtn_basescore4","_label_basescore4","_checkBox_paixin0","_label_paixin0","_checkBox_paixin1","_label_paixin1","_checkBox_paixin2","_label_paixin2","_label_paixin3","_checkBox_paixin3","_checkBox_paixin4","_label_paixin4","_checkBox_paixin5","_label_paixin5","_checkBox_paixin6","_label_paixin6","_btn_createroom","_scroGp_list","_scro_content"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group37_i()];
	}
	var _proto = clubRoomCreate.prototype;

	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._scro_content_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_roomnum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_roomnum_i = function () {
		var t = new eui.Label();
		this._label_roomnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "创建房间";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._scro_content_i = function () {
		var t = new eui.Scroller();
		this._scro_content = t;
		t.anchorOffsetY = 0;
		t.height = 680;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 50;
		t.viewport = this._scroGp_list_i();
		return t;
	};
	_proto._scroGp_list_i = function () {
		var t = new eui.Group();
		this._scroGp_list = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group36_i()];
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.height = 900;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 650;
		t.elementsContent = [this._Image2_i(),this._Group4_i(),this._Group7_i(),this._Group10_i(),this._Group13_i(),this._Group22_i(),this._Group35_i(),this._btn_createroom_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 750;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "nn_hall_json.create_bg";
		t.width = 650;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 30;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(12,12,58,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.create_txt_ju";
		t.verticalCenter = 0;
		t.x = 28;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.verticalCenter = 0;
		t.width = 183;
		t.x = 130;
		t.elementsContent = [this._RdBtn_playcount0_i(),this._label_playcount0_i()];
		return t;
	};
	_proto._RdBtn_playcount0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_playcount0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin27;
		return t;
	};
	_proto._label_playcount0_i = function () {
		var t = new eui.Label();
		this._label_playcount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "12局(钻石x80)";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.verticalCenter = 0;
		t.width = 194;
		t.x = 350;
		t.elementsContent = [this._RdBtn_playcount1_i(),this._label_playcount1_i()];
		return t;
	};
	_proto._RdBtn_playcount1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_playcount1 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin28;
		return t;
	};
	_proto._label_playcount1_i = function () {
		var t = new eui.Label();
		this._label_playcount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "24局(钻石x120)";
		t.x = 50.5;
		t.y = 8;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 105;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(12,12,58,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.create_txt_people";
		t.verticalCenter = 0;
		t.x = 28;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.verticalCenter = 0;
		t.width = 96;
		t.x = 130;
		t.elementsContent = [this._RdBtn_peopelcount0_i(),this._label_peoplecount0_i()];
		return t;
	};
	_proto._RdBtn_peopelcount0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_peopelcount0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin29;
		return t;
	};
	_proto._label_peoplecount0_i = function () {
		var t = new eui.Label();
		this._label_peoplecount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "10人";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.verticalCenter = 0;
		t.width = 168;
		t.x = 350;
		t.elementsContent = [this._RdBtn_peopelcount1_i(),this._label_peoplecount1_i()];
		return t;
	};
	_proto._RdBtn_peopelcount1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_peopelcount1 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin30;
		return t;
	};
	_proto._label_peoplecount1_i = function () {
		var t = new eui.Label();
		this._label_peoplecount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "13人(加一色)";
		t.x = 50.5;
		t.y = 8;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 180;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(12,12,58,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.create_txt_xiazhu";
		t.verticalCenter = 0;
		t.x = 28;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.verticalCenter = 0;
		t.width = 145;
		t.x = 130;
		t.elementsContent = [this._RdBtn_xiazhu0_i(),this._label_xiazhu0_i()];
		return t;
	};
	_proto._RdBtn_xiazhu0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiazhu0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin31;
		return t;
	};
	_proto._label_xiazhu0_i = function () {
		var t = new eui.Label();
		this._label_xiazhu0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "1/3/5/8倍";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 350;
		t.elementsContent = [this._RdBtn_xiazhu1_i(),this._label_xiazhu1_i()];
		return t;
	};
	_proto._RdBtn_xiazhu1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiazhu1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin32;
		return t;
	};
	_proto._label_xiazhu1_i = function () {
		var t = new eui.Label();
		this._label_xiazhu1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "2/4/6/10倍";
		t.x = 50.5;
		t.y = 8;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 255;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Group11_i(),this._Group12_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(12,12,58,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.create_txt_ghost";
		t.verticalCenter = 0;
		t.x = 28;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 130;
		t.elementsContent = [this._RdBtn_joker0_i(),this._label_joker0_i()];
		return t;
	};
	_proto._RdBtn_joker0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_joker0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin33;
		return t;
	};
	_proto._label_joker0_i = function () {
		var t = new eui.Label();
		this._label_joker0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "有鬼牌";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 350;
		t.elementsContent = [this._RdBtn_joker1_i(),this._label_joker1_i()];
		return t;
	};
	_proto._RdBtn_joker1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_joker1 = t;
		t.height = 36;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 36;
		t.x = 0;
		t.skinName = clubRoomCreate$Skin34;
		return t;
	};
	_proto._label_joker1_i = function () {
		var t = new eui.Label();
		this._label_joker1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "无鬼牌";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 330;
		t.elementsContent = [this._Image11_i(),this._Group21_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.scale9Grid = new egret.Rectangle(12,12,58,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 28;
		t.elementsContent = [this._Group17_i(),this._Group20_i()];
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.create_txt_core";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this._RdBtn_basescore0_i(),this._label_basescore0_i()];
		return t;
	};
	_proto._RdBtn_basescore0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_basescore0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin35;
		return t;
	};
	_proto._label_basescore0_i = function () {
		var t = new eui.Label();
		this._label_basescore0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "1分";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 242;
		t.y = 1;
		t.elementsContent = [this._RdBtn_basescore1_i(),this._label_basescore1_i()];
		return t;
	};
	_proto._RdBtn_basescore1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_basescore1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.skinName = clubRoomCreate$Skin36;
		return t;
	};
	_proto._label_basescore1_i = function () {
		var t = new eui.Label();
		this._label_basescore1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "3分";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 382;
		t.y = 1;
		t.elementsContent = [this._RdBtn_basescore2_i(),this._label_basescore2_i()];
		return t;
	};
	_proto._RdBtn_basescore2_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_basescore2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.skinName = clubRoomCreate$Skin37;
		return t;
	};
	_proto._label_basescore2_i = function () {
		var t = new eui.Label();
		this._label_basescore2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "5分";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 65;
		t.elementsContent = [this._Group18_i(),this._Group19_i()];
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this._RdBtn_basescore3_i(),this._label_basescore3_i()];
		return t;
	};
	_proto._RdBtn_basescore3_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_basescore3 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin38;
		return t;
	};
	_proto._label_basescore3_i = function () {
		var t = new eui.Label();
		this._label_basescore3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "8分";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 242;
		t.y = 1;
		t.elementsContent = [this._RdBtn_basescore4_i(),this._label_basescore4_i()];
		return t;
	};
	_proto._RdBtn_basescore4_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_basescore4 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.skinName = clubRoomCreate$Skin39;
		return t;
	};
	_proto._label_basescore4_i = function () {
		var t = new eui.Label();
		this._label_basescore4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "10分";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.height = 260;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 470;
		t.elementsContent = [this._Image13_i(),this._Group34_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 260;
		t.scale9Grid = new egret.Rectangle(12,12,58,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 28;
		t.elementsContent = [this._Group25_i(),this._Group28_i(),this._Group31_i(),this._Group33_i()];
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image14_i(),this._Group23_i(),this._Group24_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.create_txt_card";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this._checkBox_paixin0_i(),this._label_paixin0_i()];
		return t;
	};
	_proto._checkBox_paixin0_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin0 = t;
		t.height = 37;
		t.label = "";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin40;
		return t;
	};
	_proto._label_paixin0_i = function () {
		var t = new eui.Label();
		this._label_paixin0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "顺子牛（5倍）";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.x = 350;
		t.y = 1;
		t.elementsContent = [this._checkBox_paixin1_i(),this._label_paixin1_i()];
		return t;
	};
	_proto._checkBox_paixin1_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin1 = t;
		t.height = 37;
		t.label = "";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin41;
		return t;
	};
	_proto._label_paixin1_i = function () {
		var t = new eui.Label();
		this._label_paixin1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "五花牛（5倍）";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 65;
		t.elementsContent = [this._Group26_i(),this._Group27_i()];
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this._checkBox_paixin2_i(),this._label_paixin2_i()];
		return t;
	};
	_proto._checkBox_paixin2_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin2 = t;
		t.height = 37;
		t.label = "";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin42;
		return t;
	};
	_proto._label_paixin2_i = function () {
		var t = new eui.Label();
		this._label_paixin2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "同花牛（6倍）";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.x = 350;
		t.y = 1;
		t.elementsContent = [this._label_paixin3_i(),this._checkBox_paixin3_i()];
		return t;
	};
	_proto._label_paixin3_i = function () {
		var t = new eui.Label();
		this._label_paixin3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "葫芦牛（7倍）";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._checkBox_paixin3_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin3 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin43;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 130;
		t.elementsContent = [this._Group29_i(),this._Group30_i()];
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this._checkBox_paixin4_i(),this._label_paixin4_i()];
		return t;
	};
	_proto._checkBox_paixin4_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin4 = t;
		t.height = 37;
		t.label = "";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin44;
		return t;
	};
	_proto._label_paixin4_i = function () {
		var t = new eui.Label();
		this._label_paixin4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "炸弹牛（7倍）";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.x = 350;
		t.y = 0;
		t.elementsContent = [this._checkBox_paixin5_i(),this._label_paixin5_i()];
		return t;
	};
	_proto._checkBox_paixin5_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin5 = t;
		t.height = 37;
		t.label = "";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin45;
		return t;
	};
	_proto._label_paixin5_i = function () {
		var t = new eui.Label();
		this._label_paixin5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "五小牛（8倍）";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 195;
		t.elementsContent = [this._Group32_i()];
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this._checkBox_paixin6_i(),this._label_paixin6_i()];
		return t;
	};
	_proto._checkBox_paixin6_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin6 = t;
		t.height = 37;
		t.label = "";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = clubRoomCreate$Skin46;
		return t;
	};
	_proto._label_paixin6_i = function () {
		var t = new eui.Label();
		this._label_paixin6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "同花顺（10倍）";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._btn_createroom_i = function () {
		var t = new eui.Button();
		this._btn_createroom = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 365;
		t.skinName = clubRoomCreate$Skin47;
		return t;
	};
	return clubRoomCreate;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubRoomItem.exml'] = window.clubRoomItem = (function (_super) {
	__extends(clubRoomItem, _super);
	function clubRoomItem() {
		_super.call(this);
		this.skinParts = ["_img_roomHead","_label_gamename","_label_zhuang","_label_basescore","_label_peoplecount","_label_joker","_img_status"];
		
		this.height = 130;
		this.width = 718;
		this.elementsContent = [this._Group8_i()];
	}
	var _proto = clubRoomItem.prototype;

	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 718;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 95;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 631;
		t.elementsContent = [this._img_roomHead_i(),this._Group6_i()];
		return t;
	};
	_proto._img_roomHead_i = function () {
		var t = new eui.Image();
		this._img_roomHead = t;
		t.height = 126;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.width = 126;
		t.x = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 82;
		t.verticalCenter = 0;
		t.width = 517;
		t.x = 113.62;
		t.elementsContent = [this._label_gamename_i(),this._Group5_i(),this._img_status_i()];
		return t;
	};
	_proto._label_gamename_i = function () {
		var t = new eui.Label();
		this._label_gamename = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "十人牛牛";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 48.87;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this._label_zhuang_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_zhuang_i = function () {
		var t = new eui.Label();
		this._label_zhuang = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0xEA758E;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 142.16;
		t.elementsContent = [this._Image2_i(),this._label_basescore_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_basescore_i = function () {
		var t = new eui.Label();
		this._label_basescore = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0xD8BA47;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 260;
		t.elementsContent = [this._Image3_i(),this._label_peoplecount_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_peoplecount_i = function () {
		var t = new eui.Label();
		this._label_peoplecount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0x667B97;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 390;
		t.elementsContent = [this._Image4_i(),this._label_joker_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_7";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_joker_i = function () {
		var t = new eui.Label();
		this._label_joker = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100房间";
		t.textColor = 0x911D1D;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._img_status_i = function () {
		var t = new eui.Image();
		this._img_status = t;
		t.height = 38;
		t.source = "nn_hall_json.hall_roomstate_2";
		t.width = 110;
		t.x = 406.4;
		t.y = 0;
		return t;
	};
	return clubRoomItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubRoomList.exml'] = window.clubRoomList = (function (_super) {
	__extends(clubRoomList, _super);
	function clubRoomList() {
		_super.call(this);
		this.skinParts = ["_label_roomnum","_scroGp_list","_scro_content"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group10_i()];
	}
	var _proto = clubRoomList.prototype;

	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._scro_content_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_roomnum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_roomnum_i = function () {
		var t = new eui.Label();
		this._label_roomnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "房间列表(10)";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._scro_content_i = function () {
		var t = new eui.Scroller();
		this._scro_content = t;
		t.anchorOffsetY = 0;
		t.height = 680;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 50;
		t.viewport = this._scroGp_list_i();
		return t;
	};
	_proto._scroGp_list_i = function () {
		var t = new eui.Group();
		this._scroGp_list = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group9_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 718;
		t.y = 6;
		t.elementsContent = [this._Rect1_i(),this._Group8_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Group7_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 118;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.width = 126;
		t.x = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 113.62;
		t.elementsContent = [this._Label1_i(),this._Group6_i(),this._Image7_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "十人牛牛";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 48.87;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0xEA758E;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 130;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0xD8BA47;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 260;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0x667B97;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 390;
		t.elementsContent = [this._Image6_i(),this._Label5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_7";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100房间";
		t.textColor = 0x911D1D;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_roomstatebig_3";
		t.x = 406.4;
		t.y = 0;
		return t;
	};
	return clubRoomList;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubRoomRecordItem.exml'] = window.clubRoomRecordItem = (function (_super) {
	__extends(clubRoomRecordItem, _super);
	function clubRoomRecordItem() {
		_super.call(this);
		this.skinParts = ["_label_gameName","_label_baseScore","_label_playCount","_label_coast","_label_roomOwner","_label_status"];
		
		this.height = 90;
		this.width = 720;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = clubRoomRecordItem.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.horizontalCenter = 0;
		t.width = 718;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group5_i(),this._label_status_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 11.43;
		t.elementsContent = [this._label_gameName_i(),this._Image1_i()];
		return t;
	};
	_proto._label_gameName_i = function () {
		var t = new eui.Label();
		this._label_gameName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "十人牛牛（房号：666666）";
		t.verticalCenter = 0.5;
		t.x = 41.33;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 45.2;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._label_roomOwner_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 240;
		t.elementsContent = [this._Image2_i(),this._label_baseScore_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_baseScore_i = function () {
		var t = new eui.Label();
		this._label_baseScore = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "3分";
		t.textColor = 0xD8BA47;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 350;
		t.y = 10;
		t.elementsContent = [this._Image3_i(),this._label_playCount_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_11";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_playCount_i = function () {
		var t = new eui.Label();
		this._label_playCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "10局";
		t.textColor = 0xd69946;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 2;
		t.x = 480;
		t.y = 20;
		t.elementsContent = [this._Image4_i(),this._label_coast_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "nn_hall_json.hall_icon_12";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_coast_i = function () {
		var t = new eui.Label();
		this._label_coast = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "3张";
		t.textColor = 0xfff5d3;
		t.verticalCenter = -1;
		t.x = 40;
		return t;
	};
	_proto._label_roomOwner_i = function () {
		var t = new eui.Label();
		this._label_roomOwner = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "房主：魂族网络科技";
		t.textColor = 0xffed72;
		t.verticalCenter = 0;
		t.width = 207;
		t.x = 0;
		return t;
	};
	_proto._label_status_i = function () {
		var t = new eui.Image();
		this._label_status = t;
		t.height = 32;
		t.source = "nn_hall_json.hall_roomstate_1";
		t.width = 91;
		t.x = 598;
		t.y = 12;
		return t;
	};
	return clubRoomRecordItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubRoomRecordScene.exml'] = window.clubRoomRecordScene = (function (_super) {
	__extends(clubRoomRecordScene, _super);
	function clubRoomRecordScene() {
		_super.call(this);
		this.skinParts = ["_label_roomnum","_scroGp_list","_scro_content"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group8_i()];
	}
	var _proto = clubRoomRecordScene.prototype;

	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._scro_content_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_roomnum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_roomnum_i = function () {
		var t = new eui.Label();
		this._label_roomnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "开房记录(10)";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._scro_content_i = function () {
		var t = new eui.Scroller();
		this._scro_content = t;
		t.anchorOffsetY = 0;
		t.height = 680;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 50;
		t.viewport = this._scroGp_list_i();
		return t;
	};
	_proto._scroGp_list_i = function () {
		var t = new eui.Group();
		this._scroGp_list = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group7_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 718;
		t.y = 3.33;
		t.elementsContent = [this._Rect1_i(),this._Group2_i(),this._Group6_i(),this._Image6_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 11.43;
		t.elementsContent = [this._Label1_i(),this._Image2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "十人牛牛（房号：666666）";
		t.verticalCenter = 0.5;
		t.x = 41.33;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 45.2;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Label5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 240;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "3分";
		t.textColor = 0xD8BA47;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 350;
		t.y = 10;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_11";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "10局";
		t.textColor = 0xd69946;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 2;
		t.x = 480;
		t.y = 20;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "nn_hall_json.hall_icon_12";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "3张";
		t.textColor = 0xfff5d3;
		t.verticalCenter = -1;
		t.x = 40;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "房主：魂族网络科技";
		t.textColor = 0xffed72;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_roomstate_3";
		t.x = 598;
		t.y = 20;
		return t;
	};
	return clubRoomRecordScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubRoomShenheItem.exml'] = window.clubRoomShenheItem = (function (_super) {
	__extends(clubRoomShenheItem, _super);
	var clubRoomShenheItem$Skin48 = 	(function (_super) {
		__extends(clubRoomShenheItem$Skin48, _super);
		function clubRoomShenheItem$Skin48() {
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
		var _proto = clubRoomShenheItem$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_kuang_btn_agree";
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
		return clubRoomShenheItem$Skin48;
	})(eui.Skin);

	var clubRoomShenheItem$Skin49 = 	(function (_super) {
		__extends(clubRoomShenheItem$Skin49, _super);
		function clubRoomShenheItem$Skin49() {
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
		var _proto = clubRoomShenheItem$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_kuang_btn_denie";
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
		return clubRoomShenheItem$Skin49;
	})(eui.Skin);

	function clubRoomShenheItem() {
		_super.call(this);
		this.skinParts = ["_img_head","_label_nickname","_label_id","_btn_agree","_btn_refuse"];
		
		this.height = 104;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = clubRoomShenheItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 718;
		t.elementsContent = [this._Rect1_i(),this._img_head_i(),this._label_nickname_i(),this._label_id_i(),this._btn_agree_i(),this._btn_refuse_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.height = 104;
		t.width = 718;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 126;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.width = 126;
		t.x = 23;
		return t;
	};
	_proto._label_nickname_i = function () {
		var t = new eui.Label();
		this._label_nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "魂族网络科技";
		t.x = 120;
		t.y = 19;
		return t;
	};
	_proto._label_id_i = function () {
		var t = new eui.Label();
		this._label_id = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "ID：665656";
		t.textColor = 0xF2E571;
		t.x = 120;
		t.y = 59.67;
		return t;
	};
	_proto._btn_agree_i = function () {
		var t = new eui.Button();
		this._btn_agree = t;
		t.horizontalCenter = 76.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubRoomShenheItem$Skin48;
		return t;
	};
	_proto._btn_refuse_i = function () {
		var t = new eui.Button();
		this._btn_refuse = t;
		t.horizontalCenter = 261.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubRoomShenheItem$Skin49;
		return t;
	};
	return clubRoomShenheItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubRoomShenheScene.exml'] = window.clubRoomShenheScene = (function (_super) {
	__extends(clubRoomShenheScene, _super);
	var clubRoomShenheScene$Skin50 = 	(function (_super) {
		__extends(clubRoomShenheScene$Skin50, _super);
		function clubRoomShenheScene$Skin50() {
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
		var _proto = clubRoomShenheScene$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_kuang_btn_agree";
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
		return clubRoomShenheScene$Skin50;
	})(eui.Skin);

	var clubRoomShenheScene$Skin51 = 	(function (_super) {
		__extends(clubRoomShenheScene$Skin51, _super);
		function clubRoomShenheScene$Skin51() {
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
		var _proto = clubRoomShenheScene$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_kuang_btn_denie";
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
		return clubRoomShenheScene$Skin51;
	})(eui.Skin);

	function clubRoomShenheScene() {
		_super.call(this);
		this.skinParts = ["_label_roomnum","_img_head","_label_nickname","_label_id","_btn_agree","_btn_refuse","_scroGp_list","_scro_content"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = clubRoomShenheScene.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._scro_content_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_roomnum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_roomnum_i = function () {
		var t = new eui.Label();
		this._label_roomnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "审核列表(10)";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._scro_content_i = function () {
		var t = new eui.Scroller();
		this._scro_content = t;
		t.anchorOffsetY = 0;
		t.height = 680;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 50;
		t.viewport = this._scroGp_list_i();
		return t;
	};
	_proto._scroGp_list_i = function () {
		var t = new eui.Group();
		this._scroGp_list = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 718;
		t.elementsContent = [this._Rect1_i(),this._img_head_i(),this._label_nickname_i(),this._label_id_i(),this._btn_agree_i(),this._btn_refuse_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.height = 104;
		t.width = 718;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.x = 23;
		return t;
	};
	_proto._label_nickname_i = function () {
		var t = new eui.Label();
		this._label_nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "魂族网络科技";
		t.x = 120;
		t.y = 19;
		return t;
	};
	_proto._label_id_i = function () {
		var t = new eui.Label();
		this._label_id = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "ID：665656";
		t.textColor = 0xF2E571;
		t.x = 120;
		t.y = 59.67;
		return t;
	};
	_proto._btn_agree_i = function () {
		var t = new eui.Button();
		this._btn_agree = t;
		t.horizontalCenter = 76.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubRoomShenheScene$Skin50;
		return t;
	};
	_proto._btn_refuse_i = function () {
		var t = new eui.Button();
		this._btn_refuse = t;
		t.horizontalCenter = 261.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubRoomShenheScene$Skin51;
		return t;
	};
	return clubRoomShenheScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubZhanjiItem.exml'] = window.clubZhanjiItem = (function (_super) {
	__extends(clubZhanjiItem, _super);
	var clubZhanjiItem$Skin52 = 	(function (_super) {
		__extends(clubZhanjiItem$Skin52, _super);
		function clubZhanjiItem$Skin52() {
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
		var _proto = clubZhanjiItem$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_detail";
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
		return clubZhanjiItem$Skin52;
	})(eui.Skin);

	var clubZhanjiItem$Skin53 = 	(function (_super) {
		__extends(clubZhanjiItem$Skin53, _super);
		function clubZhanjiItem$Skin53() {
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
		var _proto = clubZhanjiItem$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_enter";
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
		return clubZhanjiItem$Skin53;
	})(eui.Skin);

	function clubZhanjiItem() {
		_super.call(this);
		this.skinParts = ["_label_gamename","_label_time","_label_fen","_gp_fen","_btn_detail","_btn_enter"];
		
		this.height = 90;
		this.width = 718;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = clubZhanjiItem.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 718;
		t.x = 1;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group4_i(),this._btn_detail_i(),this._btn_enter_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 31;
		t.elementsContent = [this._Group1_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._label_gamename_i(),this._Image1_i()];
		return t;
	};
	_proto._label_gamename_i = function () {
		var t = new eui.Label();
		this._label_gamename = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "十人牛牛（房号：666666）";
		t.verticalCenter = 0.5;
		t.x = 41.33;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 41.77;
		t.elementsContent = [this._Group2_i(),this._gp_fen_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 0;
		t.y = 10;
		t.elementsContent = [this._Image2_i(),this._label_time_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_11";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_time_i = function () {
		var t = new eui.Label();
		this._label_time = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "2019-10-10 12:10:10";
		t.textColor = 0xD69946;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._gp_fen_i = function () {
		var t = new eui.Group();
		this._gp_fen = t;
		t.verticalCenter = 0;
		t.x = 306;
		t.elementsContent = [this._Image3_i(),this._label_fen_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_fen_i = function () {
		var t = new eui.Label();
		this._label_fen = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "+130";
		t.textColor = 0xD8BA47;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._btn_detail_i = function () {
		var t = new eui.Button();
		this._btn_detail = t;
		t.horizontalCenter = 272;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = clubZhanjiItem$Skin52;
		return t;
	};
	_proto._btn_enter_i = function () {
		var t = new eui.Button();
		this._btn_enter = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 586;
		t.skinName = clubZhanjiItem$Skin53;
		return t;
	};
	return clubZhanjiItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/club/clubZhanjiScene.exml'] = window.clubRoomList = (function (_super) {
	__extends(clubRoomList, _super);
	var clubRoomList$Skin54 = 	(function (_super) {
		__extends(clubRoomList$Skin54, _super);
		function clubRoomList$Skin54() {
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
		var _proto = clubRoomList$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_detail";
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
		return clubRoomList$Skin54;
	})(eui.Skin);

	var clubRoomList$Skin55 = 	(function (_super) {
		__extends(clubRoomList$Skin55, _super);
		function clubRoomList$Skin55() {
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
		var _proto = clubRoomList$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_enter";
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
		return clubRoomList$Skin55;
	})(eui.Skin);

	var clubRoomList$Skin56 = 	(function (_super) {
		__extends(clubRoomList$Skin56, _super);
		function clubRoomList$Skin56() {
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
		var _proto = clubRoomList$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_pre";
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
		return clubRoomList$Skin56;
	})(eui.Skin);

	var clubRoomList$Skin57 = 	(function (_super) {
		__extends(clubRoomList$Skin57, _super);
		function clubRoomList$Skin57() {
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
		var _proto = clubRoomList$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_next";
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
		return clubRoomList$Skin57;
	})(eui.Skin);

	function clubRoomList() {
		_super.call(this);
		this.skinParts = ["_label_roomnum","time","_btn_detail","_btn_enter","_scroGp_list","_scro_content","empty","juhua","_btn_prev","_btn_next","_gp_btn"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group8_i()];
	}
	var _proto = clubRoomList.prototype;

	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._scro_content_i(),this.empty_i(),this.juhua_i(),this._gp_btn_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_roomnum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_roomnum_i = function () {
		var t = new eui.Label();
		this._label_roomnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "战绩列表";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._scro_content_i = function () {
		var t = new eui.Scroller();
		this._scro_content = t;
		t.anchorOffsetY = 0;
		t.height = 680;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 50;
		t.viewport = this._scroGp_list_i();
		return t;
	};
	_proto._scroGp_list_i = function () {
		var t = new eui.Group();
		this._scroGp_list = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group7_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 718;
		t.x = 1;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group6_i(),this._btn_detail_i(),this._btn_enter_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1e1e1e;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 31;
		t.elementsContent = [this._Group2_i(),this._Group5_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label1_i(),this._Image2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "十人牛牛（房号：666666）";
		t.verticalCenter = 0.5;
		t.x = 41.33;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 41.77;
		t.elementsContent = [this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 0;
		t.y = 10;
		t.elementsContent = [this._Image3_i(),this.time_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_11";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "2019-10-10 12:10:10";
		t.textColor = 0xD69946;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 306;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "+130";
		t.textColor = 0xD8BA47;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._btn_detail_i = function () {
		var t = new eui.Button();
		this._btn_detail = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 586;
		t.skinName = clubRoomList$Skin54;
		return t;
	};
	_proto._btn_enter_i = function () {
		var t = new eui.Button();
		this._btn_enter = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 586;
		t.skinName = clubRoomList$Skin55;
		return t;
	};
	_proto.empty_i = function () {
		var t = new eui.Label();
		this.empty = t;
		t.horizontalCenter = 0;
		t.text = "暂无战绩";
		t.verticalCenter = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "common_image_json.public_loading";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn_i = function () {
		var t = new eui.Group();
		this._gp_btn = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 668;
		t.y = 736;
		t.elementsContent = [this._btn_prev_i(),this._btn_next_i()];
		return t;
	};
	_proto._btn_prev_i = function () {
		var t = new eui.Button();
		this._btn_prev = t;
		t.horizontalCenter = 130.5;
		t.label = "";
		t.verticalCenter = 7.5;
		t.skinName = clubRoomList$Skin56;
		return t;
	};
	_proto._btn_next_i = function () {
		var t = new eui.Button();
		this._btn_next = t;
		t.horizontalCenter = 269.5;
		t.label = "";
		t.verticalCenter = 7.5;
		t.skinName = clubRoomList$Skin57;
		return t;
	};
	return clubRoomList;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_jiesan.exml'] = window.common_kuang_tishi = (function (_super) {
	__extends(common_kuang_tishi, _super);
	var common_kuang_tishi$Skin58 = 	(function (_super) {
		__extends(common_kuang_tishi$Skin58, _super);
		function common_kuang_tishi$Skin58() {
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
		var _proto = common_kuang_tishi$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_json.public_btn_denise";
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
		return common_kuang_tishi$Skin58;
	})(eui.Skin);

	var common_kuang_tishi$Skin59 = 	(function (_super) {
		__extends(common_kuang_tishi$Skin59, _super);
		function common_kuang_tishi$Skin59() {
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
		var _proto = common_kuang_tishi$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_json.public_btn_agree";
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
		return common_kuang_tishi$Skin59;
	})(eui.Skin);

	function common_kuang_tishi() {
		_super.call(this);
		this.skinParts = ["jiesanDesc","daojiNum","statusBg0","nickname0","status0","head0","item0","statusBg1","nickname1","status1","head1","item1","statusBg2","nickname2","status2","head2","item2","statusBg3","nickname3","status3","head3","item3","statusBg4","nickname4","status4","head4","item4","statusBg5","nickname5","status5","head5","item5","refuse","agree"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Group12_i()];
	}
	var _proto = common_kuang_tishi.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "common_image_json.public_meng2";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 81;
		t.y = 52;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.jiesanDesc_i(),this._Label1_i(),this.daojiNum_i(),this._Image4_i(),this._Group7_i(),this._Group10_i(),this._Group11_i(),this._Image14_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 536;
		t.scale9Grid = new egret.Rectangle(43,55,95,20);
		t.source = "common_image_json.public_kuangbg";
		t.width = 918;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 450;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,18,14,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_wbg";
		t.verticalCenter = 22;
		t.width = 870;
		return t;
	};
	_proto.jiesanDesc_i = function () {
		var t = new eui.Label();
		this.jiesanDesc = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.size = 22;
		t.text = "玩家申请解散房间是否同意，全部玩家同意后房间会被解散。";
		t.textAlign = "center";
		t.textColor = 0x73678d;
		t.width = 750;
		t.x = 84;
		t.y = 141;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "超过一分钟未做选择，则默认同意";
		t.textColor = 0x73678d;
		t.x = 322;
		t.y = 176.35;
		return t;
	};
	_proto.daojiNum_i = function () {
		var t = new eui.Label();
		this.daojiNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.size = 22;
		t.text = "60";
		t.textAlign = "center";
		t.textColor = 0x73678d;
		t.width = 39;
		t.x = 440;
		t.y = 87.2;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 174;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(6,6,43,41);
		t.source = "common_image_json.public_meng3";
		t.width = 793;
		t.y = 222.77;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 167;
		t.horizontalCenter = 0;
		t.width = 770;
		t.y = 226.44;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.statusBg0_i(),this.nickname0_i(),this.status0_i(),this._Group1_i()];
		return t;
	};
	_proto.statusBg0_i = function () {
		var t = new eui.Image();
		this.statusBg0 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_agree";
		t.y = 136.92;
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
		t.elementsContent = [this.head0_i(),this._Image5_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 130;
		t.y = 0;
		t.elementsContent = [this.statusBg1_i(),this.nickname1_i(),this.status1_i(),this._Group2_i()];
		return t;
	};
	_proto.statusBg1_i = function () {
		var t = new eui.Image();
		this.statusBg1 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
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
		t.elementsContent = [this.head1_i(),this._Image6_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 260;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.statusBg2_i(),this.nickname2_i(),this.status2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image7_i = function () {
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
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
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
		t.elementsContent = [this.head2_i(),this._Image8_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.x = 390;
		t.y = 0;
		t.elementsContent = [this.statusBg3_i(),this.nickname3_i(),this.status3_i(),this._Group4_i()];
		return t;
	};
	_proto.statusBg3_i = function () {
		var t = new eui.Image();
		this.statusBg3 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
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
		t.elementsContent = [this.head3_i(),this._Image9_i()];
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.x = 520;
		t.y = 0;
		t.elementsContent = [this.statusBg4_i(),this.nickname4_i(),this.status4_i(),this._Group5_i()];
		return t;
	};
	_proto.statusBg4_i = function () {
		var t = new eui.Image();
		this.statusBg4 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
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
		t.elementsContent = [this.head4_i(),this._Image10_i()];
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Image();
		this.head4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.x = 650;
		t.y = 0;
		t.elementsContent = [this.statusBg5_i(),this.nickname5_i(),this.status5_i(),this._Group6_i()];
		return t;
	};
	_proto.statusBg5_i = function () {
		var t = new eui.Image();
		this.statusBg5 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
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
	_proto.status5_i = function () {
		var t = new eui.Label();
		this.status5 = t;
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
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this.head5_i(),this._Image11_i()];
		return t;
	};
	_proto.head5_i = function () {
		var t = new eui.Image();
		this.head5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 230;
		t.y = 423.02;
		t.elementsContent = [this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group8_i = function () {
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
		t.skinName = common_kuang_tishi$Skin58;
		return t;
	};
	_proto._Group9_i = function () {
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
		t.skinName = common_kuang_tishi$Skin59;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 334;
		t.y = 4;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_kuangtitlebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "common_image_json.public_title_jiesan";
		t.verticalCenter = -2;
		t.x = 54;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "common_image_game_json.public_click";
		t.x = 437;
		t.y = 75;
		return t;
	};
	return common_kuang_tishi;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_location.exml'] = window.common_kuang_location = (function (_super) {
	__extends(common_kuang_location, _super);
	function common_kuang_location() {
		_super.call(this);
		this.skinParts = ["_img_meng","text6_0_1","line6_0_1","text6_0_2","line6_0_2","text6_0_3","line6_0_3","text6_0_4","line6_0_4","text6_0_5","line6_0_5","text6_1_2","line6_1_2","text6_1_3","line6_1_3","text6_1_4","line6_1_4","text6_1_5","line6_1_5","text6_2_3","line6_2_3","text6_2_4","line6_2_4","text6_2_5","line6_2_5","text6_3_4","line6_3_4","text6_3_5","line6_3_5","text6_4_5","line6_4_5","headImg6_0","head6_0","headImg6_1","head6_1","headImg6_2","head6_2","headImg6_3","head6_3","headImg6_4","head6_4","headImg6_5","head6_5","people6","text5_0_1","line5_0_1","text5_0_2","line5_0_2","text5_0_3","line5_0_3","text5_0_4","line5_0_4","text5_1_2","line5_1_2","text5_1_3","line5_1_3","text5_1_4","line5_1_4","text5_2_3","line5_2_3","text5_2_4","line5_2_4","text5_3_4","line5_3_4","headImg5_0","head5_0","headImg5_1","head5_1","headImg5_2","head5_2","headImg5_3","head5_3","headImg5_4","head5_4","people5","txt32","line4_0_1","txt22","line4_0_2","txt17","line4_0_3","txt31","line4_1_2","txt29","line4_1_3","txt20","line4_2_3","headImg4_0","head4_0","headImg4_1","head4_1","headImg4_2","head4_2","headImg4_3","head4_3","people4","_group_main"];
		
		this.height = 540;
		this.width = 810;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_location.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 0.6;
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 540;
		t.width = 810;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.people6_i(),this.people5_i(),this.people4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.8;
		t.height = 600;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.strokeAlpha = 0.8;
		t.strokeColor = 0xF7CB62;
		t.strokeWeight = 2;
		t.width = 900;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.people6_i = function () {
		var t = new eui.Group();
		this.people6 = t;
		t.height = 446;
		t.width = 725;
		t.x = 43;
		t.y = 47;
		t.elementsContent = [this.line6_0_1_i(),this.line6_0_2_i(),this.line6_0_3_i(),this.line6_0_4_i(),this.line6_0_5_i(),this.line6_1_2_i(),this.line6_1_3_i(),this.line6_1_4_i(),this.line6_1_5_i(),this.line6_2_3_i(),this.line6_2_4_i(),this.line6_2_5_i(),this.line6_3_4_i(),this.line6_3_5_i(),this.line6_4_5_i(),this.head6_0_i(),this.head6_1_i(),this.head6_2_i(),this.head6_3_i(),this.head6_4_i(),this.head6_5_i()];
		return t;
	};
	_proto.line6_0_1_i = function () {
		var t = new eui.Group();
		this.line6_0_1 = t;
		t.horizontalCenter = 0.5;
		t.rotation = -90;
		t.y = 85.22;
		t.elementsContent = [this._Rect2_i(),this.text6_0_1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_0_1_i = function () {
		var t = new eui.Label();
		this.text6_0_1 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line6_0_2_i = function () {
		var t = new eui.Group();
		this.line6_0_2 = t;
		t.horizontalCenter = 67.5;
		t.rotation = 110;
		t.width = 76;
		t.y = 176.12;
		t.elementsContent = [this._Rect3_i(),this.text6_0_2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 500;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_0_2_i = function () {
		var t = new eui.Label();
		this.text6_0_2 = t;
		t.horizontalCenter = -18;
		t.rotation = 270;
		t.text = "999m";
		t.verticalCenter = -135;
		return t;
	};
	_proto.line6_0_3_i = function () {
		var t = new eui.Group();
		this.line6_0_3 = t;
		t.horizontalCenter = -21;
		t.rotation = -30;
		t.y = 65.51;
		t.elementsContent = [this._Rect4_i(),this.text6_0_3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 400;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_0_3_i = function () {
		var t = new eui.Label();
		this.text6_0_3 = t;
		t.horizontalCenter = -3;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -122;
		return t;
	};
	_proto.line6_0_4_i = function () {
		var t = new eui.Group();
		this.line6_0_4 = t;
		t.horizontalCenter = -152.5;
		t.rotation = 0;
		t.y = 73.1;
		t.elementsContent = [this._Rect5_i(),this.text6_0_4_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_0_4_i = function () {
		var t = new eui.Label();
		this.text6_0_4 = t;
		t.horizontalCenter = 2;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -84;
		return t;
	};
	_proto.line6_0_5_i = function () {
		var t = new eui.Group();
		this.line6_0_5 = t;
		t.horizontalCenter = -250.5;
		t.rotation = 225;
		t.y = 268.58;
		t.elementsContent = [this._Rect6_i(),this.text6_0_5_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_0_5_i = function () {
		var t = new eui.Label();
		this.text6_0_5 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line6_1_2_i = function () {
		var t = new eui.Group();
		this.line6_1_2 = t;
		t.horizontalCenter = 233;
		t.rotation = -45;
		t.y = 47.33;
		t.elementsContent = [this._Rect7_i(),this.text6_1_2_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_1_2_i = function () {
		var t = new eui.Label();
		this.text6_1_2 = t;
		t.horizontalCenter = 21;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line6_1_3_i = function () {
		var t = new eui.Group();
		this.line6_1_3 = t;
		t.horizontalCenter = 132.5;
		t.rotation = 0;
		t.y = 73.1;
		t.elementsContent = [this._Rect8_i(),this.text6_1_3_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_1_3_i = function () {
		var t = new eui.Label();
		this.text6_1_3 = t;
		t.horizontalCenter = 2;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -47;
		return t;
	};
	_proto.line6_1_4_i = function () {
		var t = new eui.Group();
		this.line6_1_4 = t;
		t.horizontalCenter = 0;
		t.rotation = 210;
		t.y = 426.09;
		t.elementsContent = [this._Rect9_i(),this.text6_1_4_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 400;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_1_4_i = function () {
		var t = new eui.Label();
		this.text6_1_4 = t;
		t.horizontalCenter = 18;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -113;
		return t;
	};
	_proto.line6_1_5_i = function () {
		var t = new eui.Group();
		this.line6_1_5 = t;
		t.horizontalCenter = -74.5;
		t.rotation = -110;
		t.width = 76;
		t.y = 248.8;
		t.elementsContent = [this._Rect10_i(),this.text6_1_5_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 500;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_1_5_i = function () {
		var t = new eui.Label();
		this.text6_1_5 = t;
		t.horizontalCenter = 22;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -160;
		return t;
	};
	_proto.line6_2_3_i = function () {
		var t = new eui.Group();
		this.line6_2_3 = t;
		t.horizontalCenter = 249.5;
		t.rotation = 225;
		t.y = 455;
		t.elementsContent = [this._Rect11_i(),this.text6_2_3_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_2_3_i = function () {
		var t = new eui.Label();
		this.text6_2_3 = t;
		t.horizontalCenter = 3;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -2;
		return t;
	};
	_proto.line6_2_4_i = function () {
		var t = new eui.Group();
		this.line6_2_4 = t;
		t.horizontalCenter = 87.5;
		t.rotation = -110;
		t.width = 76;
		t.y = 444.32;
		t.elementsContent = [this._Rect12_i(),this.text6_2_4_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 500;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_2_4_i = function () {
		var t = new eui.Label();
		this.text6_2_4 = t;
		t.horizontalCenter = 20;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 111;
		return t;
	};
	_proto.line6_2_5_i = function () {
		var t = new eui.Group();
		this.line6_2_5 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.width = 76;
		t.y = 265.53;
		t.elementsContent = [this._Rect13_i(),this.text6_2_5_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 600;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_2_5_i = function () {
		var t = new eui.Label();
		this.text6_2_5 = t;
		t.horizontalCenter = 21;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line6_3_4_i = function () {
		var t = new eui.Group();
		this.line6_3_4 = t;
		t.horizontalCenter = 0.5;
		t.rotation = -90;
		t.y = 436.74;
		t.elementsContent = [this._Rect14_i(),this.text6_3_4_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_3_4_i = function () {
		var t = new eui.Label();
		this.text6_3_4 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line6_3_5_i = function () {
		var t = new eui.Group();
		this.line6_3_5 = t;
		t.horizontalCenter = -77.5;
		t.rotation = 110;
		t.width = 76;
		t.y = 371.61;
		t.elementsContent = [this._Rect15_i(),this.text6_3_5_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 500;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_3_5_i = function () {
		var t = new eui.Label();
		this.text6_3_5 = t;
		t.horizontalCenter = 20;
		t.rotation = 270;
		t.text = "999m";
		t.verticalCenter = 152;
		return t;
	};
	_proto.line6_4_5_i = function () {
		var t = new eui.Group();
		this.line6_4_5 = t;
		t.horizontalCenter = -247.5;
		t.rotation = -45;
		t.y = 247.34;
		t.elementsContent = [this._Rect16_i(),this.text6_4_5_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text6_4_5_i = function () {
		var t = new eui.Label();
		this.text6_4_5 = t;
		t.horizontalCenter = 2;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -3;
		return t;
	};
	_proto.head6_0_i = function () {
		var t = new eui.Group();
		this.head6_0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 190;
		t.y = 0;
		t.elementsContent = [this.headImg6_0_i(),this._Rect17_i()];
		return t;
	};
	_proto.headImg6_0_i = function () {
		var t = new eui.Image();
		this.headImg6_0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xffe52d;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head6_1_i = function () {
		var t = new eui.Group();
		this.head6_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 455;
		t.y = 4.56;
		t.elementsContent = [this.headImg6_1_i(),this._Rect18_i()];
		return t;
	};
	_proto.headImg6_1_i = function () {
		var t = new eui.Image();
		this.headImg6_1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head6_2_i = function () {
		var t = new eui.Group();
		this.head6_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 640.92;
		t.elementsContent = [this.headImg6_2_i(),this._Rect19_i()];
		return t;
	};
	_proto.headImg6_2_i = function () {
		var t = new eui.Image();
		this.headImg6_2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head6_3_i = function () {
		var t = new eui.Group();
		this.head6_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 455;
		t.y = 362.11;
		t.elementsContent = [this.headImg6_3_i(),this._Rect20_i()];
		return t;
	};
	_proto.headImg6_3_i = function () {
		var t = new eui.Image();
		this.headImg6_3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head6_4_i = function () {
		var t = new eui.Group();
		this.head6_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 190;
		t.y = 362.11;
		t.elementsContent = [this.headImg6_4_i(),this._Rect21_i()];
		return t;
	};
	_proto.headImg6_4_i = function () {
		var t = new eui.Image();
		this.headImg6_4 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head6_5_i = function () {
		var t = new eui.Group();
		this.head6_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = -1.51;
		t.elementsContent = [this.headImg6_5_i(),this._Rect22_i()];
		return t;
	};
	_proto.headImg6_5_i = function () {
		var t = new eui.Image();
		this.headImg6_5 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.people5_i = function () {
		var t = new eui.Group();
		this.people5 = t;
		t.height = 446;
		t.width = 725;
		t.x = 43;
		t.y = 47;
		t.elementsContent = [this.line5_0_1_i(),this.line5_0_2_i(),this.line5_0_3_i(),this.line5_0_4_i(),this.line5_1_2_i(),this.line5_1_3_i(),this.line5_1_4_i(),this.line5_2_3_i(),this.line5_2_4_i(),this.line5_3_4_i(),this.head5_0_i(),this.head5_1_i(),this.head5_2_i(),this.head5_3_i(),this.head5_4_i()];
		return t;
	};
	_proto.line5_0_1_i = function () {
		var t = new eui.Group();
		this.line5_0_1 = t;
		t.horizontalCenter = 0.5;
		t.rotation = -90;
		t.y = 85.22;
		t.elementsContent = [this._Rect23_i(),this.text5_0_1_i()];
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_0_1_i = function () {
		var t = new eui.Label();
		this.text5_0_1 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line5_0_2_i = function () {
		var t = new eui.Group();
		this.line5_0_2 = t;
		t.horizontalCenter = 67.5;
		t.rotation = 110;
		t.width = 76;
		t.y = 176.12;
		t.elementsContent = [this._Rect24_i(),this.text5_0_2_i()];
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 500;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_0_2_i = function () {
		var t = new eui.Label();
		this.text5_0_2 = t;
		t.horizontalCenter = -18;
		t.rotation = 270;
		t.text = "999m";
		t.verticalCenter = -135;
		return t;
	};
	_proto.line5_0_3_i = function () {
		var t = new eui.Group();
		this.line5_0_3 = t;
		t.horizontalCenter = -89.5;
		t.rotation = -20;
		t.y = 95.85;
		t.elementsContent = [this._Rect25_i(),this.text5_0_3_i()];
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_0_3_i = function () {
		var t = new eui.Label();
		this.text5_0_3 = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 59;
		return t;
	};
	_proto.line5_0_4_i = function () {
		var t = new eui.Group();
		this.line5_0_4 = t;
		t.horizontalCenter = -250.5;
		t.rotation = 225;
		t.y = 268.58;
		t.elementsContent = [this._Rect26_i(),this.text5_0_4_i()];
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_0_4_i = function () {
		var t = new eui.Label();
		this.text5_0_4 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line5_1_2_i = function () {
		var t = new eui.Group();
		this.line5_1_2 = t;
		t.horizontalCenter = 233;
		t.rotation = -45;
		t.y = 47.33;
		t.elementsContent = [this._Rect27_i(),this.text5_1_2_i()];
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_1_2_i = function () {
		var t = new eui.Label();
		this.text5_1_2 = t;
		t.horizontalCenter = 21;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line5_1_3_i = function () {
		var t = new eui.Group();
		this.line5_1_3 = t;
		t.horizontalCenter = 80.5;
		t.rotation = 200;
		t.y = 412.46;
		t.elementsContent = [this._Rect28_i(),this.text5_1_3_i()];
		return t;
	};
	_proto._Rect28_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 400;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_1_3_i = function () {
		var t = new eui.Label();
		this.text5_1_3 = t;
		t.horizontalCenter = 21;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -87;
		return t;
	};
	_proto.line5_1_4_i = function () {
		var t = new eui.Group();
		this.line5_1_4 = t;
		t.horizontalCenter = -74.5;
		t.rotation = -110;
		t.width = 76;
		t.y = 254.8;
		t.elementsContent = [this._Rect29_i(),this.text5_1_4_i()];
		return t;
	};
	_proto._Rect29_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 500;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_1_4_i = function () {
		var t = new eui.Label();
		this.text5_1_4 = t;
		t.horizontalCenter = 22;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -160;
		return t;
	};
	_proto.line5_2_3_i = function () {
		var t = new eui.Group();
		this.line5_2_3 = t;
		t.horizontalCenter = 141.5;
		t.rotation = -120;
		t.width = 76;
		t.y = 473.1;
		t.elementsContent = [this._Rect30_i(),this.text5_2_3_i()];
		return t;
	};
	_proto._Rect30_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 400;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_2_3_i = function () {
		var t = new eui.Label();
		this.text5_2_3 = t;
		t.horizontalCenter = 22;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line5_2_4_i = function () {
		var t = new eui.Group();
		this.line5_2_4 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.width = 76;
		t.y = 265.53;
		t.elementsContent = [this._Rect31_i(),this.text5_2_4_i()];
		return t;
	};
	_proto._Rect31_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 600;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_2_4_i = function () {
		var t = new eui.Label();
		this.text5_2_4 = t;
		t.horizontalCenter = 21;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line5_3_4_i = function () {
		var t = new eui.Group();
		this.line5_3_4 = t;
		t.horizontalCenter = -171;
		t.rotation = -55;
		t.y = 261;
		t.elementsContent = [this._Rect32_i(),this.text5_3_4_i()];
		return t;
	};
	_proto._Rect32_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text5_3_4_i = function () {
		var t = new eui.Label();
		this.text5_3_4 = t;
		t.horizontalCenter = 2;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -3;
		return t;
	};
	_proto.head5_0_i = function () {
		var t = new eui.Group();
		this.head5_0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 190;
		t.y = 0;
		t.elementsContent = [this.headImg5_0_i(),this._Rect33_i()];
		return t;
	};
	_proto.headImg5_0_i = function () {
		var t = new eui.Image();
		this.headImg5_0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect33_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head5_1_i = function () {
		var t = new eui.Group();
		this.head5_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 455;
		t.y = 4.56;
		t.elementsContent = [this.headImg5_1_i(),this._Rect34_i()];
		return t;
	};
	_proto.headImg5_1_i = function () {
		var t = new eui.Image();
		this.headImg5_1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect34_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head5_2_i = function () {
		var t = new eui.Group();
		this.head5_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 640.92;
		t.elementsContent = [this.headImg5_2_i(),this._Rect35_i()];
		return t;
	};
	_proto.headImg5_2_i = function () {
		var t = new eui.Image();
		this.headImg5_2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect35_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head5_3_i = function () {
		var t = new eui.Group();
		this.head5_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = -1.51;
		t.elementsContent = [this.headImg5_3_i(),this._Rect36_i()];
		return t;
	};
	_proto.headImg5_3_i = function () {
		var t = new eui.Image();
		this.headImg5_3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect36_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head5_4_i = function () {
		var t = new eui.Group();
		this.head5_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 322.5;
		t.y = 362.11;
		t.elementsContent = [this.headImg5_4_i(),this._Rect37_i()];
		return t;
	};
	_proto.headImg5_4_i = function () {
		var t = new eui.Image();
		this.headImg5_4 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect37_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.people4_i = function () {
		var t = new eui.Group();
		this.people4 = t;
		t.height = 446;
		t.visible = false;
		t.width = 725;
		t.x = 43;
		t.y = 47;
		t.elementsContent = [this.line4_0_1_i(),this.line4_0_2_i(),this.line4_0_3_i(),this.line4_1_2_i(),this.line4_1_3_i(),this.line4_2_3_i(),this.head4_0_i(),this.head4_1_i(),this.head4_2_i(),this.head4_3_i()];
		return t;
	};
	_proto.line4_0_1_i = function () {
		var t = new eui.Group();
		this.line4_0_1 = t;
		t.horizontalCenter = 148.5;
		t.rotation = 120;
		t.width = 76;
		t.y = 167.05;
		t.elementsContent = [this._Rect38_i(),this.txt32_i()];
		return t;
	};
	_proto._Rect38_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt32_i = function () {
		var t = new eui.Label();
		this.txt32 = t;
		t.horizontalCenter = -17;
		t.rotation = 270;
		t.text = "999m";
		t.verticalCenter = -11;
		return t;
	};
	_proto.line4_0_2_i = function () {
		var t = new eui.Group();
		this.line4_0_2 = t;
		t.height = 300;
		t.horizontalCenter = -16.5;
		t.width = 40;
		t.y = 80.65;
		t.elementsContent = [this._Rect39_i(),this.txt22_i()];
		return t;
	};
	_proto._Rect39_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt22_i = function () {
		var t = new eui.Label();
		this.txt22 = t;
		t.horizontalCenter = 61;
		t.rotation = 0;
		t.text = "999m";
		t.verticalCenter = -72;
		return t;
	};
	_proto.line4_0_3_i = function () {
		var t = new eui.Group();
		this.line4_0_3 = t;
		t.horizontalCenter = -153.5;
		t.rotation = -120;
		t.y = 242.79;
		t.elementsContent = [this._Rect40_i(),this.txt17_i()];
		return t;
	};
	_proto._Rect40_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt17_i = function () {
		var t = new eui.Label();
		this.txt17 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line4_1_2_i = function () {
		var t = new eui.Group();
		this.line4_1_2 = t;
		t.horizontalCenter = 141.5;
		t.rotation = -120;
		t.width = 76;
		t.y = 473.1;
		t.elementsContent = [this._Rect41_i(),this.txt31_i()];
		return t;
	};
	_proto._Rect41_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 400;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt31_i = function () {
		var t = new eui.Label();
		this.txt31 = t;
		t.horizontalCenter = 22;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line4_1_3_i = function () {
		var t = new eui.Group();
		this.line4_1_3 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.width = 76;
		t.y = 265.53;
		t.elementsContent = [this._Rect42_i(),this.txt29_i()];
		return t;
	};
	_proto._Rect42_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 600;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt29_i = function () {
		var t = new eui.Label();
		this.txt29 = t;
		t.horizontalCenter = 21;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -109;
		return t;
	};
	_proto.line4_2_3_i = function () {
		var t = new eui.Group();
		this.line4_2_3 = t;
		t.horizontalCenter = -171;
		t.rotation = -55;
		t.y = 261;
		t.elementsContent = [this._Rect43_i(),this.txt20_i()];
		return t;
	};
	_proto._Rect43_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt20_i = function () {
		var t = new eui.Label();
		this.txt20 = t;
		t.horizontalCenter = 2;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -3;
		return t;
	};
	_proto.head4_0_i = function () {
		var t = new eui.Group();
		this.head4_0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 0;
		t.elementsContent = [this.headImg4_0_i(),this._Rect44_i()];
		return t;
	};
	_proto.headImg4_0_i = function () {
		var t = new eui.Image();
		this.headImg4_0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect44_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head4_1_i = function () {
		var t = new eui.Group();
		this.head4_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 640.92;
		t.elementsContent = [this.headImg4_1_i(),this._Rect45_i()];
		return t;
	};
	_proto.headImg4_1_i = function () {
		var t = new eui.Image();
		this.headImg4_1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect45_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head4_2_i = function () {
		var t = new eui.Group();
		this.head4_2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 362.11;
		t.elementsContent = [this.headImg4_2_i(),this._Rect46_i()];
		return t;
	};
	_proto.headImg4_2_i = function () {
		var t = new eui.Image();
		this.headImg4_2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect46_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head4_3_i = function () {
		var t = new eui.Group();
		this.head4_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = -1.51;
		t.elementsContent = [this.headImg4_3_i(),this._Rect47_i()];
		return t;
	};
	_proto.headImg4_3_i = function () {
		var t = new eui.Image();
		this.headImg4_3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect47_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	return common_kuang_location;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_menulist.exml'] = window.common_kuang_menulist = (function (_super) {
	__extends(common_kuang_menulist, _super);
	var common_kuang_menulist$Skin60 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin60, _super);
		function common_kuang_menulist$Skin60() {
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
		var _proto = common_kuang_menulist$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_game_public_json.game_zqpg_title";
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
		return common_kuang_menulist$Skin60;
	})(eui.Skin);

	var common_kuang_menulist$Skin61 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin61, _super);
		function common_kuang_menulist$Skin61() {
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
		var _proto = common_kuang_menulist$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_game_public_json.game_rule_title";
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
		return common_kuang_menulist$Skin61;
	})(eui.Skin);

	var common_kuang_menulist$Skin62 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin62, _super);
		function common_kuang_menulist$Skin62() {
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
		var _proto = common_kuang_menulist$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_game_public_json.game_sqjs_title";
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
		return common_kuang_menulist$Skin62;
	})(eui.Skin);

	var common_kuang_menulist$Skin63 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin63, _super);
		function common_kuang_menulist$Skin63() {
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
		var _proto = common_kuang_menulist$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_game_public_json.game_fhdt_title";
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
		return common_kuang_menulist$Skin63;
	})(eui.Skin);

	var common_kuang_menulist$Skin64 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin64, _super);
		function common_kuang_menulist$Skin64() {
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
		var _proto = common_kuang_menulist$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_game_public_json.game_cebian_set_title";
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
		return common_kuang_menulist$Skin64;
	})(eui.Skin);

	var common_kuang_menulist$Skin65 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin65, _super);
		function common_kuang_menulist$Skin65() {
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
		var _proto = common_kuang_menulist$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_game_public_json.public_btn_location2";
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
		return common_kuang_menulist$Skin65;
	})(eui.Skin);

	function common_kuang_menulist() {
		_super.call(this);
		this.skinParts = ["situp","wanfa","diaband","backHallBtn","setting","locBtn","menulist"];
		
		this.height = 300;
		this.width = 223;
		this.elementsContent = [this.menulist_i()];
	}
	var _proto = common_kuang_menulist.prototype;

	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 300;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_game_public_json.game_cebian_bg";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 65;
		t.x = 55;
		t.y = 28.03;
		t.elementsContent = [this.situp_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = common_kuang_menulist$Skin60;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.visible = false;
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
		t.skinName = common_kuang_menulist$Skin61;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.visible = false;
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
		t.skinName = common_kuang_menulist$Skin62;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 65;
		t.x = 55;
		t.y = 103.03;
		t.elementsContent = [this.backHallBtn_i()];
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Button();
		this.backHallBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = common_kuang_menulist$Skin63;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 65;
		t.x = 55;
		t.y = 178.03;
		t.elementsContent = [this.setting_i()];
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_menulist$Skin64;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.visible = false;
		t.width = 65;
		t.x = 55;
		t.y = 400;
		t.elementsContent = [this.locBtn_i()];
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_menulist$Skin65;
		return t;
	};
	return common_kuang_menulist;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_player.exml'] = window.common_kuang_player = (function (_super) {
	__extends(common_kuang_player, _super);
	function common_kuang_player() {
		_super.call(this);
		this.skinParts = ["_img_meng","bunengyong0","ani0","bunengyong1","ani1","bunengyong2","ani2","bunengyong3","ani3","bunengyong4","ani4","nickname","headImg","id","ip","_group_main"];
		
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_player.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group6_i(),this.nickname_i(),this.headImg_i(),this.id_i(),this.ip_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_otherInfoDi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 134.67;
		t.elementsContent = [this.ani0_i(),this.ani1_i(),this.ani2_i(),this.ani3_i(),this.ani4_i()];
		return t;
	};
	_proto.ani0_i = function () {
		var t = new eui.Group();
		this.ani0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Group1_i(),this.bunengyong0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "tz_game_public_json.aniKuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "tz_game_public_json.donghicon10";
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
		t.elementsContent = [this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tz_game_public_json.public_icon_zuanshi";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "X5";
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
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.ani1_i = function () {
		var t = new eui.Group();
		this.ani1 = t;
		t.x = 75;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Group2_i(),this.bunengyong1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "tz_game_public_json.aniKuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "tz_game_public_json.donghicon11";
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
		t.elementsContent = [this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tz_game_public_json.public_icon_zuanshi";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "X5";
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
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.ani2_i = function () {
		var t = new eui.Group();
		this.ani2 = t;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Group3_i(),this.bunengyong2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "tz_game_public_json.aniKuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "tz_game_public_json.donghicon14";
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
		t.elementsContent = [this._Image10_i(),this._Label3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tz_game_public_json.public_icon_zuanshi";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "X5";
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
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.ani3_i = function () {
		var t = new eui.Group();
		this.ani3 = t;
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Group4_i(),this.bunengyong3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "tz_game_public_json.aniKuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "tz_game_public_json.donghicon9";
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
		t.elementsContent = [this._Image13_i(),this._Label4_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tz_game_public_json.public_icon_zuanshi";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "X5";
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
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.ani4_i = function () {
		var t = new eui.Group();
		this.ani4 = t;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Group5_i(),this.bunengyong4_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "tz_game_public_json.aniKuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "tz_game_public_json.donghicon8";
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
		t.elementsContent = [this._Image16_i(),this._Label5_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tz_game_public_json.public_icon_zuanshi";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "X5";
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
		t.visible = false;
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
		t.x = 155.61;
		t.y = 26.33;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 76;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.width = 76;
		t.x = 24.73;
		t.y = 29;
		return t;
	};
	_proto.id_i = function () {
		var t = new eui.Label();
		this.id = t;
		t.size = 25;
		t.text = "666666";
		t.textColor = 0x000000;
		t.x = 156.61;
		t.y = 56.5;
		return t;
	};
	_proto.ip_i = function () {
		var t = new eui.Label();
		this.ip = t;
		t.size = 25;
		t.text = "192.111.112.12";
		t.textColor = 0x000000;
		t.x = 154.61;
		t.y = 84;
		return t;
	};
	return common_kuang_player;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_send.exml'] = window.common_kuang_send = (function (_super) {
	__extends(common_kuang_send, _super);
	var common_kuang_send$Skin66 = 	(function (_super) {
		__extends(common_kuang_send$Skin66, _super);
		function common_kuang_send$Skin66() {
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
		var _proto = common_kuang_send$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_kuang_btn_sure";
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
		return common_kuang_send$Skin66;
	})(eui.Skin);

	var common_kuang_send$Skin67 = 	(function (_super) {
		__extends(common_kuang_send$Skin67, _super);
		function common_kuang_send$Skin67() {
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
		var _proto = common_kuang_send$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_kuang_btn_cancel";
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
		return common_kuang_send$Skin67;
	})(eui.Skin);

	function common_kuang_send() {
		_super.call(this);
		this.skinParts = ["_img_meng","_editTxt_id","_editTxt_num","_btn_confirm","_btn_cancel","_group_main"];
		
		this.height = 400;
		this.width = 655;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_send.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 400;
		t.width = 655;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group2_i(),this._Group4_i(),this._Image8_i(),this._Group5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(81,138,492,24);
		t.source = "nn_item_json.hall_kuang_bg";
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 139;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(25,17,40,40);
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.txt_id";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 96;
		t.elementsContent = [this._Image4_i(),this._editTxt_id_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.menu_bg";
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	_proto._editTxt_id_i = function () {
		var t = new eui.EditableText();
		this._editTxt_id = t;
		t.height = 45;
		t.horizontalCenter = "0";
		t.prompt = "请输入玩家ID";
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 470;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 222;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Group3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(25,17,40,40);
		t.source = "nn_hall_json.hall_record_itembg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.txt_num";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 96;
		t.elementsContent = [this._Image7_i(),this._editTxt_num_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.menu_bg";
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	_proto._editTxt_num_i = function () {
		var t = new eui.EditableText();
		this._editTxt_num = t;
		t.height = 45;
		t.horizontalCenter = "0";
		t.prompt = "请输入数量";
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 470;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_kuang_song";
		t.y = 25;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.width = 457;
		t.y = 330;
		t.elementsContent = [this._btn_confirm_i(),this._btn_cancel_i()];
		return t;
	};
	_proto._btn_confirm_i = function () {
		var t = new eui.Button();
		this._btn_confirm = t;
		t.horizontalCenter = -150;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_send$Skin66;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.horizontalCenter = 150;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_send$Skin67;
		return t;
	};
	return common_kuang_send;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/setSlider.exml'] = window.setSlider = (function (_super) {
	__extends(setSlider, _super);
	function setSlider() {
		_super.call(this);
		this.skinParts = ["track","thumb2","thumb"];
		
		this.height = 49;
		this.width = 335;
		this.elementsContent = [this.track_i(),this.thumb2_i(),this.thumb_i()];
	}
	var _proto = setSlider.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.source = "soundguidao_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.thumb2_i = function () {
		var t = new eui.Image();
		this.thumb2 = t;
		t.anchorOffsetY = 6;
		t.fillMode = "scale";
		t.scale9Grid = new egret.Rectangle(11,0,366,29);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "soundkuai_png";
		t.verticalCenter = 0;
		t.x = 2;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "setImages_json.soundthumb";
		t.verticalCenter = 0;
		t.x = 144;
		return t;
	};
	return setSlider;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_set.exml'] = window.common_kuang_set = (function (_super) {
	__extends(common_kuang_set, _super);
	function common_kuang_set() {
		_super.call(this);
		this.skinParts = ["_img_meng","musicV","audioV","bgMusic","zb","bgAudio","_group_main"];
		
		this.height = 322;
		this.width = 655;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_set.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 322;
		t.width = 655;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.musicV_i(),this.audioV_i(),this._Group1_i(),this._Group2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 322;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(81,138,492,24);
		t.source = "nn_item_json.hall_kuang_bg";
		t.y = 0;
		return t;
	};
	_proto.musicV_i = function () {
		var t = new eui.HSlider();
		this.musicV = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.maximum = 100;
		t.minimum = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "setSlider";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 70;
		return t;
	};
	_proto.audioV_i = function () {
		var t = new eui.HSlider();
		this.audioV = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.maximum = 100;
		t.minimum = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "setSlider";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 70;
		t.y = -89.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 1;
		t.width = 307;
		t.y = 151;
		t.elementsContent = [this.bgMusic_i(),this._Image2_i()];
		return t;
	};
	_proto.bgMusic_i = function () {
		var t = new eui.Image();
		this.bgMusic = t;
		t.source = "nn_hall_json.com_swich_btn_on";
		t.verticalCenter = 0;
		t.x = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.txt_music";
		t.verticalCenter = 0;
		t.x = -1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 1;
		t.width = 307;
		t.y = 231.5;
		t.elementsContent = [this.zb_i(),this.bgAudio_i()];
		return t;
	};
	_proto.zb_i = function () {
		var t = new eui.Image();
		this.zb = t;
		t.source = "nn_hall_json.hall_menu_effect";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.bgAudio_i = function () {
		var t = new eui.Image();
		this.bgAudio = t;
		t.source = "nn_hall_json.com_swich_btn_off";
		t.verticalCenter = 0;
		t.x = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_kuang_title_set";
		t.y = 25;
		return t;
	};
	return common_kuang_set;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_sure.exml'] = window.common_kuang_sure = (function (_super) {
	__extends(common_kuang_sure, _super);
	function common_kuang_sure() {
		_super.call(this);
		this.skinParts = ["_img_meng","_btn_sure","_btn_cancel","_txt_content","_group_main"];
		
		this.height = 450;
		this.width = 654;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_sure.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 400;
		t.width = 654;
		t.x = 0;
		t.y = 25;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._txt_content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(81,138,492,24);
		t.source = "nn_item_json.hall_kuang_bg";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_kuang_title_msg";
		t.y = 25;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 1;
		t.width = 486;
		t.y = 331;
		t.elementsContent = [this._btn_sure_i(),this._btn_cancel_i()];
		return t;
	};
	_proto._btn_sure_i = function () {
		var t = new eui.Image();
		this._btn_sure = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.hall_kuang_btn_sure";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Image();
		this._btn_cancel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.hall_kuang_btn_cancel";
		t.x = 329;
		t.y = 0;
		return t;
	};
	_proto._txt_content_i = function () {
		var t = new eui.Label();
		this._txt_content = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 163;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "欢迎来到魂族网络游戏平台，祝你玩牌愉快！";
		t.textColor = 0xffffff;
		t.width = 580;
		t.y = 148.5;
		return t;
	};
	return common_kuang_sure;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_loading.exml'] = window.common_loading = (function (_super) {
	__extends(common_loading, _super);
	function common_loading() {
		_super.call(this);
		this.skinParts = ["_img_meng","_img_juhua","_txt_loadingmsg"];
		
		this.height = 200;
		this.width = 199;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = common_loading.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_meng_i(),this._img_juhua_i(),this._txt_loadingmsg_i()];
		return t;
	};
	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 0.6;
		t.height = 200;
		t.scale9Grid = new egret.Rectangle(9,7,13,14);
		t.source = "common_image_json.public_meng2";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_juhua_i = function () {
		var t = new eui.Image();
		this._img_juhua = t;
		t.height = 90;
		t.source = "common_image_json.public_loading";
		t.width = 95;
		t.x = 54.5;
		t.y = 35;
		return t;
	};
	_proto._txt_loadingmsg_i = function () {
		var t = new eui.Label();
		this._txt_loadingmsg = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 24;
		t.size = 22;
		t.text = "正在链接服务器...";
		t.textAlign = "center";
		t.width = 300;
		t.x = -44;
		t.y = 149;
		return t;
	};
	return common_loading;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_message_UI.exml'] = window.common_message_UI = (function (_super) {
	__extends(common_message_UI, _super);
	function common_message_UI() {
		_super.call(this);
		this.skinParts = ["_img_meng","wenziButton","biaoqingButton","biao1","biao2","biao3","biao4","biao5","biao6","biao7","biao8","biao9","biao10","biao11","biao12","biao13","biao14","biao15","biaoqing","message1","message2","message3","message4","message5","message6","message7","message8","message9","message10","message11","message12","wenzi","_group_main"];
		
		this.height = 391;
		this.width = 406;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_message_UI.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 391;
		t.width = 406;
		t.x = 0;
		t.y = 0;
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
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1_png";
		t.x = 2.33;
		t.y = 0;
		return t;
	};
	_proto.biao2_i = function () {
		var t = new eui.Image();
		this.biao2 = t;
		t.height = 84;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2_png";
		t.width = 83;
		t.y = 0;
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
		t.x = 204;
		t.y = 0;
		return t;
	};
	_proto.biao4_i = function () {
		var t = new eui.Image();
		this.biao4 = t;
		t.height = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "4_png";
		t.width = 83;
		t.x = 3.66;
		t.y = 101.67;
		return t;
	};
	_proto.biao5_i = function () {
		var t = new eui.Image();
		this.biao5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "5_png";
		t.y = 103.99;
		return t;
	};
	_proto.biao6_i = function () {
		var t = new eui.Image();
		this.biao6 = t;
		t.height = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "6_png";
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
		t.y = 195;
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
		t.x = 2.7;
		t.y = 281;
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
		t.y = 291;
		return t;
	};
	_proto.biao13_i = function () {
		var t = new eui.Image();
		this.biao13 = t;
		t.source = "13_png";
		t.x = 5.65;
		t.y = 370.31;
		return t;
	};
	_proto.biao14_i = function () {
		var t = new eui.Image();
		this.biao14 = t;
		t.source = "14_png";
		t.x = 113.35;
		t.y = 375.34;
		return t;
	};
	_proto.biao15_i = function () {
		var t = new eui.Image();
		this.biao15 = t;
		t.source = "15_png";
		t.x = 226.67;
		t.y = 369.02;
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
		t.elementsContent = [this.message1_i(),this.message2_i(),this.message3_i(),this.message4_i(),this.message5_i(),this.message6_i(),this.message7_i(),this.message8_i(),this.message9_i(),this.message10_i(),this.message11_i(),this.message12_i()];
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
		t.y = 10;
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
		t.y = 50;
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
		t.text = "别吹牛逼有本事干到底";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 90;
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
		t.text = "算你牛逼";
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
		t.text = "搏一搏，单车变摩托";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 370;
		return t;
	};
	_proto.message11_i = function () {
		var t = new eui.Label();
		this.message11 = t;
		t.background = false;
		t.backgroundColor = 0x000000;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "想当年我横扫澳门九条街";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 410;
		return t;
	};
	_proto.message12_i = function () {
		var t = new eui.Label();
		this.message12 = t;
		t.background = false;
		t.backgroundColor = 0x000000;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "想当年我横扫澳门九条街";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 450;
		return t;
	};
	return common_message_UI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_share.exml'] = window.common_share = (function (_super) {
	__extends(common_share, _super);
	var common_share$Skin68 = 	(function (_super) {
		__extends(common_share$Skin68, _super);
		function common_share$Skin68() {
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
		var _proto = common_share$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.btn_xianliao";
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
		return common_share$Skin68;
	})(eui.Skin);

	var common_share$Skin69 = 	(function (_super) {
		__extends(common_share$Skin69, _super);
		function common_share$Skin69() {
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
		var _proto = common_share$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.btn_weixin";
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
		return common_share$Skin69;
	})(eui.Skin);

	function common_share() {
		_super.call(this);
		this.skinParts = ["_img_meng","_btn_xianliao","_btn_weixin","_group_main"];
		
		this.height = 200;
		this.width = 500;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_share.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 200;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._btn_xianliao_i(),this._btn_weixin_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x1e1e1e;
		t.height = 200;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_xianliao_i = function () {
		var t = new eui.Button();
		this._btn_xianliao = t;
		t.horizontalCenter = -122;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_share$Skin68;
		return t;
	};
	_proto._btn_weixin_i = function () {
		var t = new eui.Button();
		this._btn_weixin = t;
		t.horizontalCenter = 107;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_share$Skin69;
		return t;
	};
	return common_share;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_voice_show.exml'] = window.common_voice_show = (function (_super) {
	__extends(common_voice_show, _super);
	function common_voice_show() {
		_super.call(this);
		this.skinParts = ["_img_v1","_img_v2","_img_v3","_img_v4"];
		
		this.height = 122;
		this.width = 136;
		this.elementsContent = [this._Image1_i(),this._img_v1_i(),this._img_v2_i(),this._img_v3_i(),this._img_v4_i()];
	}
	var _proto = common_voice_show.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "common_image_game_json.voiceBG";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_v1_i = function () {
		var t = new eui.Image();
		this._img_v1 = t;
		t.source = "common_image_game_json.voice_1";
		t.x = 88;
		t.y = 68;
		return t;
	};
	_proto._img_v2_i = function () {
		var t = new eui.Image();
		this._img_v2 = t;
		t.source = "common_image_game_json.voice_2";
		t.x = 85;
		t.y = 50;
		return t;
	};
	_proto._img_v3_i = function () {
		var t = new eui.Image();
		this._img_v3 = t;
		t.source = "common_image_game_json.voice_3";
		t.x = 82;
		t.y = 33;
		return t;
	};
	_proto._img_v4_i = function () {
		var t = new eui.Image();
		this._img_v4 = t;
		t.source = "common_image_game_json.voice_4";
		t.x = 79;
		t.y = 15;
		return t;
	};
	return common_voice_show;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_wanfa_UI.exml'] = window.common_wanfa_UI = (function (_super) {
	__extends(common_wanfa_UI, _super);
	function common_wanfa_UI() {
		_super.call(this);
		this.skinParts = ["_img_meng","cont","_group_main"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_wanfa_UI.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 10;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 10;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 536;
		t.width = 800;
		t.x = 140;
		t.y = 52;
		t.elementsContent = [this._Image1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 536;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(44,54,113,24);
		t.source = "common_image_json.public_kuangbg";
		t.width = 800;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 20;
		t.y = 80;
		t.elementsContent = [this._Image2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,18,14,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_wbg";
		t.verticalCenter = 0;
		t.width = 760;
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
		t.verticalCenter = 0;
		t.width = 760;
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
		t.horizontalCenter = 0;
		t.source = "";
		t.width = 750;
		t.y = 9;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 6;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "common_image_json.public_kuangtitlebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "common_image_json.public_title_wanfa";
		t.y = 2;
		return t;
	};
	return common_wanfa_UI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_wanfa.exml'] = window.common_wanfa = (function (_super) {
	__extends(common_wanfa, _super);
	function common_wanfa() {
		_super.call(this);
		this.skinParts = ["_img_meng","_txt_roompwd","_txt_peoplecount","_txt_paixing","_txt_joker","_txt_basescore","_txt_xiazhu","_txt_playCount","_group_main"];
		
		this.height = 450;
		this.width = 720;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_wanfa.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 400;
		t.width = 654;
		t.x = 33;
		t.y = 25;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(81,138,492,24);
		t.source = "nn_item_json.hall_kuang_bg";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_kuang_title_rule";
		t.y = 25;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 144.01;
		t.elementsContent = [this._txt_roompwd_i(),this._txt_peoplecount_i(),this._txt_paixing_i(),this._txt_joker_i(),this._txt_basescore_i(),this._txt_xiazhu_i(),this._txt_playCount_i()];
		return t;
	};
	_proto._txt_roompwd_i = function () {
		var t = new eui.Label();
		this._txt_roompwd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "房号：999999";
		t.textColor = 0xffffff;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_peoplecount_i = function () {
		var t = new eui.Label();
		this._txt_peoplecount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "人数：13";
		t.textColor = 0xFFFFFF;
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._txt_paixing_i = function () {
		var t = new eui.Label();
		this._txt_paixing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "牌型：顺子牛（5倍），顺子牛（5倍），顺子牛（5倍），顺子牛（5倍），顺子牛（5倍），顺子牛（5倍），顺子牛（5倍）";
		t.textColor = 0xFFFFFF;
		t.width = 450;
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._txt_joker_i = function () {
		var t = new eui.Label();
		this._txt_joker = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "鬼牌：又";
		t.textColor = 0xFFFFFF;
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._txt_basescore_i = function () {
		var t = new eui.Label();
		this._txt_basescore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "底分：99分";
		t.textColor = 0xFFFFFF;
		t.x = 230;
		t.y = 80;
		return t;
	};
	_proto._txt_xiazhu_i = function () {
		var t = new eui.Label();
		this._txt_xiazhu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "下注：1/1/1/2倍";
		t.textColor = 0xFFFFFF;
		t.x = 230;
		t.y = 40;
		return t;
	};
	_proto._txt_playCount_i = function () {
		var t = new eui.Label();
		this._txt_playCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "局数：100";
		t.textColor = 0xFFFFFF;
		t.x = 230;
		t.y = 0;
		return t;
	};
	return common_wanfa;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/roonLifeScene.exml'] = window.roonLifeScene = (function (_super) {
	__extends(roonLifeScene, _super);
	function roonLifeScene() {
		_super.call(this);
		this.skinParts = ["bg","contentText","contentText0"];
		
		this.height = 104;
		this.width = 550;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = roonLifeScene.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.alpha = 0.3;
		t.height = 104;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.contentText_i(),this.contentText0_i()];
		return t;
	};
	_proto.contentText_i = function () {
		var t = new eui.Label();
		this.contentText = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "多少时间未开局将解散。";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.y = 31;
		return t;
	};
	_proto.contentText0_i = function () {
		var t = new eui.Label();
		this.contentText0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "本局时长：10局";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	return roonLifeScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/shuCommon/shu_common_jiesan.exml'] = window.shu_common_jiesan = (function (_super) {
	__extends(shu_common_jiesan, _super);
	var shu_common_jiesan$Skin70 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin70, _super);
		function shu_common_jiesan$Skin70() {
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
		var _proto = shu_common_jiesan$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_json.public_btn_denise";
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
		return shu_common_jiesan$Skin70;
	})(eui.Skin);

	var shu_common_jiesan$Skin71 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin71, _super);
		function shu_common_jiesan$Skin71() {
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
		var _proto = shu_common_jiesan$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_json.public_btn_agree";
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
		return shu_common_jiesan$Skin71;
	})(eui.Skin);

	function shu_common_jiesan() {
		_super.call(this);
		this.skinParts = ["jiesanDesc","daojiNum","statusBg0","nickname0","status0","head0","item0","statusBg1","nickname1","status1","head1","item1","statusBg2","nickname2","status2","head2","item2","statusBg3","nickname3","status3","head3","item3","statusBg4","nickname4","status4","head4","item4","statusBg5","nickname5","status5","head5","item5","refuse","agree"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group13_i()];
	}
	var _proto = shu_common_jiesan.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1500;
		t.horizontalCenter = 0;
		t.source = "common_image_json.public_meng2";
		t.width = 640;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.jiesanDesc_i(),this._Label1_i(),this.daojiNum_i(),this._Group8_i(),this._Group11_i(),this._Group12_i(),this._Image14_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 780;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(43,55,95,20);
		t.source = "common_image_json.public_kuangbg";
		t.width = 550;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 680;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,18,14,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_wbg";
		t.verticalCenter = 22;
		t.width = 500;
		return t;
	};
	_proto.jiesanDesc_i = function () {
		var t = new eui.Label();
		this.jiesanDesc = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 22;
		t.text = "玩家申请解散房间是否同意，全部玩家同意后房间会被解散。";
		t.textAlign = "center";
		t.textColor = 0x73678d;
		t.width = 500;
		t.y = 141;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "超过一分钟未做选择，则默认同意";
		t.textColor = 0x73678d;
		t.y = 204.35;
		return t;
	};
	_proto.daojiNum_i = function () {
		var t = new eui.Label();
		this.daojiNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "60";
		t.textAlign = "center";
		t.textColor = 0x73678d;
		t.width = 39;
		t.y = 93.2;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 242.77;
		t.elementsContent = [this._Image4_i(),this._Group7_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.scale9Grid = new egret.Rectangle(6,6,43,41);
		t.source = "common_image_json.public_meng3";
		t.width = 450;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.statusBg0_i(),this.nickname0_i(),this.status0_i(),this._Group1_i()];
		return t;
	};
	_proto.statusBg0_i = function () {
		var t = new eui.Image();
		this.statusBg0 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_agree";
		t.y = 136.92;
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
		t.elementsContent = [this.head0_i(),this._Image5_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 130;
		t.y = 0;
		t.elementsContent = [this.statusBg1_i(),this.nickname1_i(),this.status1_i(),this._Group2_i()];
		return t;
	};
	_proto.statusBg1_i = function () {
		var t = new eui.Image();
		this.statusBg1 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
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
		t.elementsContent = [this.head1_i(),this._Image6_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 260;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.statusBg2_i(),this.nickname2_i(),this.status2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image7_i = function () {
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
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
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
		t.elementsContent = [this.head2_i(),this._Image8_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.x = 0;
		t.y = 170;
		t.elementsContent = [this.statusBg3_i(),this.nickname3_i(),this.status3_i(),this._Group4_i()];
		return t;
	};
	_proto.statusBg3_i = function () {
		var t = new eui.Image();
		this.statusBg3 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
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
		t.elementsContent = [this.head3_i(),this._Image9_i()];
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.x = 130;
		t.y = 170;
		t.elementsContent = [this.statusBg4_i(),this.nickname4_i(),this.status4_i(),this._Group5_i()];
		return t;
	};
	_proto.statusBg4_i = function () {
		var t = new eui.Image();
		this.statusBg4 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
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
		t.elementsContent = [this.head4_i(),this._Image10_i()];
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Image();
		this.head4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.x = 260;
		t.y = 170;
		t.elementsContent = [this.statusBg5_i(),this.nickname5_i(),this.status5_i(),this._Group6_i()];
		return t;
	};
	_proto.statusBg5_i = function () {
		var t = new eui.Image();
		this.statusBg5 = t;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_waitting";
		t.y = 136.92;
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
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
	_proto.status5_i = function () {
		var t = new eui.Label();
		this.status5 = t;
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
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this.head5_i(),this._Image11_i()];
		return t;
	};
	_proto.head5_i = function () {
		var t = new eui.Image();
		this.head5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 669.02;
		t.elementsContent = [this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 238.67;
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
		t.skinName = shu_common_jiesan$Skin70;
		return t;
	};
	_proto._Group10_i = function () {
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
		t.skinName = shu_common_jiesan$Skin71;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 4;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_kuangtitlebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "common_image_json.public_title_jiesan";
		t.verticalCenter = -2;
		t.x = 54;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "common_image_game_json.public_click";
		t.y = 81;
		return t;
	};
	return shu_common_jiesan;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/shuCommon/shu_common_location.exml'] = window.shu_common_location = (function (_super) {
	__extends(shu_common_location, _super);
	function shu_common_location() {
		_super.call(this);
		this.skinParts = ["_img_meng","text4_0_1","line4_0_1","text4_0_2","line4_0_2","text4_0_3","line4_0_3","text4_1_2","line4_1_2","text4_1_3","line4_1_3","text4_2_3","line4_2_3","headImg4_0","head4_0","headImg4_1","head4_1","headImg4_2","head4_2","headImg4_3","head4_3","people4","_group_main"];
		
		this.height = 540;
		this.width = 540;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = shu_common_location.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 0.6;
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 540;
		t.width = 540;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.people4_i()];
		return t;
	};
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
		t.width = 600;
		t.y = 0;
		return t;
	};
	_proto.people4_i = function () {
		var t = new eui.Group();
		this.people4 = t;
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 500;
		t.elementsContent = [this.line4_0_1_i(),this.line4_0_2_i(),this.line4_0_3_i(),this.line4_1_2_i(),this.line4_1_3_i(),this.line4_2_3_i(),this.head4_0_i(),this.head4_1_i(),this.head4_2_i(),this.head4_3_i()];
		return t;
	};
	_proto.line4_0_1_i = function () {
		var t = new eui.Group();
		this.line4_0_1 = t;
		t.rotation = 135;
		t.width = 76;
		t.x = 461.17;
		t.y = 189.81;
		t.elementsContent = [this._Rect2_i(),this.text4_0_1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 200;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text4_0_1_i = function () {
		var t = new eui.Label();
		this.text4_0_1 = t;
		t.horizontalCenter = -17;
		t.rotation = 270;
		t.text = "999m";
		t.verticalCenter = -11;
		return t;
	};
	_proto.line4_0_2_i = function () {
		var t = new eui.Group();
		this.line4_0_2 = t;
		t.height = 400;
		t.horizontalCenter = -16.5;
		t.width = 40;
		t.y = 80.65;
		t.elementsContent = [this._Rect3_i(),this.text4_0_2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 400;
		t.rotation = 0;
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 38;
		return t;
	};
	_proto.text4_0_2_i = function () {
		var t = new eui.Label();
		this.text4_0_2 = t;
		t.horizontalCenter = 61;
		t.rotation = 0;
		t.text = "999m";
		t.verticalCenter = -104;
		return t;
	};
	_proto.line4_0_3_i = function () {
		var t = new eui.Group();
		this.line4_0_3 = t;
		t.rotation = -135;
		t.x = 99.68;
		t.y = 244.31;
		t.elementsContent = [this._Rect4_i(),this.text4_0_3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 200;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text4_0_3_i = function () {
		var t = new eui.Label();
		this.text4_0_3 = t;
		t.horizontalCenter = 19;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line4_1_2_i = function () {
		var t = new eui.Group();
		this.line4_1_2 = t;
		t.rotation = -135;
		t.width = 76;
		t.x = 316.84;
		t.y = 450.35;
		t.elementsContent = [this._Rect5_i(),this.text4_1_2_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 200;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text4_1_2_i = function () {
		var t = new eui.Label();
		this.text4_1_2 = t;
		t.horizontalCenter = 22;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line4_1_3_i = function () {
		var t = new eui.Group();
		this.line4_1_3 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.verticalCenter = 0;
		t.width = 76;
		t.elementsContent = [this._Rect6_i(),this.text4_1_3_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 400;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text4_1_3_i = function () {
		var t = new eui.Label();
		this.text4_1_3 = t;
		t.horizontalCenter = 21;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -91;
		return t;
	};
	_proto.line4_2_3_i = function () {
		var t = new eui.Group();
		this.line4_2_3 = t;
		t.rotation = -45;
		t.x = 12.12;
		t.y = 259.48;
		t.elementsContent = [this._Rect7_i(),this.text4_2_3_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.text4_2_3_i = function () {
		var t = new eui.Label();
		this.text4_2_3 = t;
		t.horizontalCenter = 2;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -3;
		return t;
	};
	_proto.head4_0_i = function () {
		var t = new eui.Group();
		this.head4_0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 0;
		t.elementsContent = [this.headImg4_0_i(),this._Rect8_i()];
		return t;
	};
	_proto.headImg4_0_i = function () {
		var t = new eui.Image();
		this.headImg4_0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head4_1_i = function () {
		var t = new eui.Group();
		this.head4_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 430.28;
		t.elementsContent = [this.headImg4_1_i(),this._Rect9_i()];
		return t;
	};
	_proto.headImg4_1_i = function () {
		var t = new eui.Image();
		this.headImg4_1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head4_2_i = function () {
		var t = new eui.Group();
		this.head4_2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.elementsContent = [this.headImg4_2_i(),this._Rect10_i()];
		return t;
	};
	_proto.headImg4_2_i = function () {
		var t = new eui.Image();
		this.headImg4_2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	_proto.head4_3_i = function () {
		var t = new eui.Group();
		this.head4_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = -1.51;
		t.elementsContent = [this.headImg4_3_i(),this._Rect11_i()];
		return t;
	};
	_proto.headImg4_3_i = function () {
		var t = new eui.Image();
		this.headImg4_3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFE52D;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 104;
		return t;
	};
	return shu_common_location;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/shuCommon/shu_common_menu.exml'] = window.shu_common_menu = (function (_super) {
	__extends(shu_common_menu, _super);
	var shu_common_menu$Skin72 = 	(function (_super) {
		__extends(shu_common_menu$Skin72, _super);
		function shu_common_menu$Skin72() {
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
		var _proto = shu_common_menu$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_menu_b2";
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
		return shu_common_menu$Skin72;
	})(eui.Skin);

	var shu_common_menu$Skin73 = 	(function (_super) {
		__extends(shu_common_menu$Skin73, _super);
		function shu_common_menu$Skin73() {
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
		var _proto = shu_common_menu$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_menu_b3";
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
		return shu_common_menu$Skin73;
	})(eui.Skin);

	var shu_common_menu$Skin74 = 	(function (_super) {
		__extends(shu_common_menu$Skin74, _super);
		function shu_common_menu$Skin74() {
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
		var _proto = shu_common_menu$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_menu_b1";
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
		return shu_common_menu$Skin74;
	})(eui.Skin);

	var shu_common_menu$Skin75 = 	(function (_super) {
		__extends(shu_common_menu$Skin75, _super);
		function shu_common_menu$Skin75() {
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
		var _proto = shu_common_menu$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_menu_b4";
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
		return shu_common_menu$Skin75;
	})(eui.Skin);

	var shu_common_menu$Skin76 = 	(function (_super) {
		__extends(shu_common_menu$Skin76, _super);
		function shu_common_menu$Skin76() {
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
		var _proto = shu_common_menu$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_menu_b6";
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
		return shu_common_menu$Skin76;
	})(eui.Skin);

	var shu_common_menu$Skin77 = 	(function (_super) {
		__extends(shu_common_menu$Skin77, _super);
		function shu_common_menu$Skin77() {
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
		var _proto = shu_common_menu$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_menu_b51";
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
		return shu_common_menu$Skin77;
	})(eui.Skin);

	var shu_common_menu$Skin78 = 	(function (_super) {
		__extends(shu_common_menu$Skin78, _super);
		function shu_common_menu$Skin78() {
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
		var _proto = shu_common_menu$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_menu_b52";
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
		return shu_common_menu$Skin78;
	})(eui.Skin);

	function shu_common_menu() {
		_super.call(this);
		this.skinParts = ["diaband","wanfa","situp","backHallBtn","setting","hideWatchBtn","hideGroup","showWatchBtn","showGroup","menulist"];
		
		this.elementsContent = [this.menulist_i()];
	}
	var _proto = shu_common_menu.prototype;

	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.hideGroup_i(),this.showGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tz_sss_img_json.sss_menu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 65;
		t.x = 58;
		t.y = 111;
		t.elementsContent = [this.diaband_i()];
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Button();
		this.diaband = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = shu_common_menu$Skin72;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 65;
		t.x = 58;
		t.y = 69;
		t.elementsContent = [this.wanfa_i()];
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin73;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 58;
		t.y = 20;
		t.elementsContent = [this.situp_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin74;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 58;
		t.y = 158;
		t.elementsContent = [this.backHallBtn_i()];
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Button();
		this.backHallBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin75;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 58;
		t.y = 258;
		t.elementsContent = [this.setting_i()];
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin76;
		return t;
	};
	_proto.hideGroup_i = function () {
		var t = new eui.Group();
		this.hideGroup = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 58;
		t.y = 206;
		t.elementsContent = [this.hideWatchBtn_i()];
		return t;
	};
	_proto.hideWatchBtn_i = function () {
		var t = new eui.Button();
		this.hideWatchBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin77;
		return t;
	};
	_proto.showGroup_i = function () {
		var t = new eui.Group();
		this.showGroup = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 58;
		t.y = 206;
		t.elementsContent = [this.showWatchBtn_i()];
		return t;
	};
	_proto.showWatchBtn_i = function () {
		var t = new eui.Button();
		this.showWatchBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin78;
		return t;
	};
	return shu_common_menu;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/shuCommon/shu_common_wanfaI.exml'] = window.shu_common_wanfaI = (function (_super) {
	__extends(shu_common_wanfaI, _super);
	function shu_common_wanfaI() {
		_super.call(this);
		this.skinParts = ["_img_meng","cont","_group_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = shu_common_wanfaI.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 10;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 10;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 700;
		t.width = 600;
		t.x = 20;
		t.y = 190;
		t.elementsContent = [this._Image1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 700;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(44,54,113,24);
		t.source = "common_image_json.public_kuangbg";
		t.width = 610;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 73.92;
		t.elementsContent = [this._Image2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,18,14,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_wbg";
		t.verticalCenter = 0;
		t.width = 580;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.verticalCenter = 0;
		t.width = 580;
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
		t.horizontalCenter = 0;
		t.source = "";
		t.width = 578;
		t.y = 9;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 6;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "common_image_json.public_kuangtitlebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "common_image_json.public_title_wanfa";
		t.y = 2;
		return t;
	};
	return shu_common_wanfaI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/watch/comingItem.exml'] = window.comingItem = (function (_super) {
	__extends(comingItem, _super);
	function comingItem() {
		_super.call(this);
		this.skinParts = ["head","nickname","time","msg"];
		
		this.height = 46;
		this.width = 190;
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
		t.source = "tz_game_public_json.game_xiaoxi_huibg";
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
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_headkuang";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/watch/common_kuang_watch.exml'] = window.common_kuang_watch = (function (_super) {
	__extends(common_kuang_watch, _super);
	function common_kuang_watch() {
		_super.call(this);
		this.skinParts = ["comePeopleList","watchingPeopleList","joinXiaoxiGroup"];
		
		this.elementsContent = [this.joinXiaoxiGroup_i()];
	}
	var _proto = common_kuang_watch.prototype;

	_proto.joinXiaoxiGroup_i = function () {
		var t = new eui.Group();
		this.joinXiaoxiGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this._Scroller2_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 300;
		t.scale9Grid = new egret.Rectangle(28,48,172,293);
		t.source = "tz_game_public_json.game_xiaoxi_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 150;
		t.horizontalCenter = 2;
		t.visible = false;
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
		t.height = 240;
		t.horizontalCenter = 2;
		t.width = 200;
		t.y = 44.5;
		t.viewport = this.watchingPeopleList_i();
		return t;
	};
	_proto.watchingPeopleList_i = function () {
		var t = new eui.Group();
		this.watchingPeopleList = t;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tz_game_public_json.game_xiaoxi_pangguan";
		t.visible = false;
		t.y = 197.35;
		return t;
	};
	return common_kuang_watch;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/watch/watchlistItem.exml'] = window.watchlistItem = (function (_super) {
	__extends(watchlistItem, _super);
	function watchlistItem() {
		_super.call(this);
		this.skinParts = ["head0","nickname0","item0","head1","nickname1","item1","head2","nickname2","item2"];
		
		this.height = 70;
		this.width = 194;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = watchlistItem.prototype;

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
		t.source = "tz_game_public_json.game_xiaoxi_huibg";
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
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_headkuang";
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
		t.textAlign = "center";
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
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_headkuang";
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
		t.textAlign = "center";
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
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 31;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_headkuang";
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
		t.textAlign = "center";
		t.textColor = 0x83551A;
		t.width = 65;
		t.y = 51;
		return t;
	};
	return watchlistItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/faxian/faxianItem.exml'] = window.faxianItem = (function (_super) {
	__extends(faxianItem, _super);
	var faxianItem$Skin79 = 	(function (_super) {
		__extends(faxianItem$Skin79, _super);
		function faxianItem$Skin79() {
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
		var _proto = faxianItem$Skin79.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.button_enter_1";
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
		return faxianItem$Skin79;
	})(eui.Skin);

	function faxianItem() {
		_super.call(this);
		this.skinParts = ["bg","enterBtn","statusText","pwd"];
		
		this.height = 114;
		this.width = 546;
		this.elementsContent = [this.bg_i(),this.enterBtn_i(),this._Group2_i()];
	}
	var _proto = faxianItem.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "tz_hall_4_json.button_game_item_3";
		t.y = 0;
		return t;
	};
	_proto.enterBtn_i = function () {
		var t = new eui.Button();
		this.enterBtn = t;
		t.horizontalCenter = 200;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = faxianItem$Skin79;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 144.66;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(12,12,21,16);
		t.source = "tz_hall_1_json.fight_item_bg";
		t.verticalCenter = 0;
		t.width = 240;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this.statusText_i(),this.pwd_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "房号：";
		t.textColor = 0xffdb70;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "状态：";
		t.x = 0;
		t.y = 26;
		return t;
	};
	_proto.statusText_i = function () {
		var t = new eui.Label();
		this.statusText = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "第20局游戏游戏中";
		t.x = 47;
		t.y = 26;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "666666";
		t.textColor = 0xffdb70;
		t.x = 47;
		t.y = 0;
		return t;
	};
	return faxianItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/faxian/faxianMainScene.exml'] = window.faxianMainScene = (function (_super) {
	__extends(faxianMainScene, _super);
	var faxianMainScene$Skin80 = 	(function (_super) {
		__extends(faxianMainScene$Skin80, _super);
		function faxianMainScene$Skin80() {
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
		var _proto = faxianMainScene$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.fanhui";
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
		return faxianMainScene$Skin80;
	})(eui.Skin);

	function faxianMainScene() {
		_super.call(this);
		this.skinParts = ["top_bg","_btn_topback","content"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = faxianMainScene.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallBg_png";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 119;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.top_bg_i(),this._btn_topback_i(),this._Image2_i()];
		return t;
	};
	_proto.top_bg_i = function () {
		var t = new eui.Image();
		this.top_bg = t;
		t.height = 119;
		t.scale9Grid = new egret.Rectangle(4,0,4,119);
		t.source = "tz_hall_2_json.top_bg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 16;
		t.y = 19.5;
		t.skinName = faxianMainScene$Skin80;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tz_hall_2_json.title_find";
		t.y = 28;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.99;
		t.scaleY = 0.99;
		t.verticalCenter = 56.5;
		t.elementsContent = [this._Image3_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 815;
		t.scale9Grid = new egret.Rectangle(22,18,15,14);
		t.source = "tz_hall_1_json.bg9_find";
		t.width = 580;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 790;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 14.29;
		t.viewport = this.content_i();
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_hall_2_json.button_game_item_1";
		t.y = 0;
		return t;
	};
	return faxianMainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/hallItem.exml'] = window.hallItem = (function (_super) {
	__extends(hallItem, _super);
	function hallItem() {
		_super.call(this);
		this.skinParts = ["_img_icon","_img_ismine","_label_club_name","_label_club_peoplecount","_label_club_roomcount","_label_club_desc"];
		
		this.height = 190;
		this.width = 718;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = hallItem.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 190;
		t.horizontalCenter = 0;
		t.width = 718;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1E1E1E;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 36;
		t.elementsContent = [this._img_icon_i(),this._img_ismine_i(),this._label_club_name_i(),this._Group3_i(),this._label_club_desc_i()];
		return t;
	};
	_proto._img_icon_i = function () {
		var t = new eui.Image();
		this._img_icon = t;
		t.height = 126;
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.width = 126;
		t.x = 0;
		return t;
	};
	_proto._img_ismine_i = function () {
		var t = new eui.Image();
		this._img_ismine = t;
		t.source = "nn_hall_json.hall_icon_6";
		t.x = 631.82;
		t.y = 0.52;
		return t;
	};
	_proto._label_club_name_i = function () {
		var t = new eui.Label();
		this._label_club_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "俱乐部名称";
		t.x = 150;
		t.y = 1;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 150;
		t.y = 89.33;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this._label_club_peoplecount_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_club_peoplecount_i = function () {
		var t = new eui.Label();
		this._label_club_peoplecount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0x667B97;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 185.71;
		t.elementsContent = [this._Image2_i(),this._label_club_roomcount_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_5";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_club_roomcount_i = function () {
		var t = new eui.Label();
		this._label_club_roomcount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100房间";
		t.textColor = 0xB99829;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._label_club_desc_i = function () {
		var t = new eui.Label();
		this._label_club_desc = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "俱乐部介绍俱乐部介绍俱乐部介绍俱乐部介绍";
		t.textColor = 0xAFACAC;
		t.x = 150;
		t.y = 49;
		return t;
	};
	return hallItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/huanleHall.exml'] = window.huanleHall = (function (_super) {
	__extends(huanleHall, _super);
	var huanleHall$Skin81 = 	(function (_super) {
		__extends(huanleHall$Skin81, _super);
		function huanleHall$Skin81() {
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
		var _proto = huanleHall$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_icon_4";
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
		return huanleHall$Skin81;
	})(eui.Skin);

	var huanleHall$Skin82 = 	(function (_super) {
		__extends(huanleHall$Skin82, _super);
		function huanleHall$Skin82() {
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
		var _proto = huanleHall$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_song";
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
		return huanleHall$Skin82;
	})(eui.Skin);

	var huanleHall$Skin83 = 	(function (_super) {
		__extends(huanleHall$Skin83, _super);
		function huanleHall$Skin83() {
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
		var _proto = huanleHall$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_zhanji_btn";
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
		return huanleHall$Skin83;
	})(eui.Skin);

	var huanleHall$Skin84 = 	(function (_super) {
		__extends(huanleHall$Skin84, _super);
		function huanleHall$Skin84() {
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
		var _proto = huanleHall$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_club_btn";
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
		return huanleHall$Skin84;
	})(eui.Skin);

	var huanleHall$Skin85 = 	(function (_super) {
		__extends(huanleHall$Skin85, _super);
		function huanleHall$Skin85() {
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
		var _proto = huanleHall$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_find_btn";
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
		return huanleHall$Skin85;
	})(eui.Skin);

	var huanleHall$Skin86 = 	(function (_super) {
		__extends(huanleHall$Skin86, _super);
		function huanleHall$Skin86() {
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
		var _proto = huanleHall$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_joinclub";
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
		return huanleHall$Skin86;
	})(eui.Skin);

	var huanleHall$Skin87 = 	(function (_super) {
		__extends(huanleHall$Skin87, _super);
		function huanleHall$Skin87() {
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
		var _proto = huanleHall$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_createclub";
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
		return huanleHall$Skin87;
	})(eui.Skin);

	function huanleHall() {
		_super.call(this);
		this.skinParts = ["_label_username","_img_head","_label_zuanNum","_btn_addzuan","_label_userid","_btn_send","topGroup","_btn_zhanji","_btn_club","_btn_find","bottomGroup","gameList","gameMainScroller","_label_notice","_label_clubnum","_btn_join_club","_btn_create_club","mains"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.topGroup_i(),this.bottomGroup_i(),this.mains_i()];
	}
	var _proto = huanleHall.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x141414;
		t.height = 1500;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_username_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._btn_send_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_item_json.hall_index_top_small_bg";
		t.x = -1.34;
		t.y = -0.67;
		return t;
	};
	_proto._label_username_i = function () {
		var t = new eui.Label();
		this._label_username = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "魂族网络科技";
		t.x = 134.69;
		t.y = 43.07;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 16;
		t.y = 21.15;
		t.elementsContent = [this._Image2_i(),this._img_head_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_head_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = -0.5;
		t.source = "nn_hall_json.hall_head_default";
		t.verticalCenter = -2;
		t.width = 95;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.width = 162;
		t.x = 315.76;
		t.y = 76.82;
		t.elementsContent = [this._Image3_i(),this._label_zuanNum_i(),this._Image4_i(),this._btn_addzuan_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_top_itembg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._label_zuanNum_i = function () {
		var t = new eui.Label();
		this._label_zuanNum = t;
		t.height = 25;
		t.horizontalCenter = 8;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalCenter = -0.5;
		t.width = 112;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "nn_hall_json.hall_icon_12";
		t.verticalCenter = 2;
		t.x = -2.67;
		return t;
	};
	_proto._btn_addzuan_i = function () {
		var t = new eui.Button();
		this._btn_addzuan = t;
		t.horizontalCenter = 78;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = huanleHall$Skin81;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 139.91;
		t.y = 89.15;
		t.elementsContent = [this._Image5_i(),this._label_userid_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_top_itembg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._label_userid_i = function () {
		var t = new eui.Label();
		this._label_userid = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "ID:000000";
		t.textAlign = "right";
		t.textColor = 0xdcd15b;
		t.verticalCenter = 0;
		return t;
	};
	_proto._btn_send_i = function () {
		var t = new eui.Button();
		this._btn_send = t;
		t.horizontalCenter = 277.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin82;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.horizontalCenter = 0;
		t.y = 1130;
		t.elementsContent = [this._Rect2_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1e1e1e;
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 100;
		t.elementsContent = [this._btn_zhanji_i()];
		return t;
	};
	_proto._btn_zhanji_i = function () {
		var t = new eui.Button();
		this._btn_zhanji = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin83;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 50;
		t.elementsContent = [this._btn_club_i()];
		return t;
	};
	_proto._btn_club_i = function () {
		var t = new eui.Button();
		this._btn_club = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin84;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 580;
		t.elementsContent = [this._btn_find_i()];
		return t;
	};
	_proto._btn_find_i = function () {
		var t = new eui.Button();
		this._btn_find = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin85;
		return t;
	};
	_proto.mains_i = function () {
		var t = new eui.Group();
		this.mains = t;
		t.height = 954;
		t.width = 720;
		t.x = 0;
		t.y = 161.02;
		t.elementsContent = [this.gameMainScroller_i(),this._Group13_i(),this._Group14_i(),this._Group15_i()];
		return t;
	};
	_proto.gameMainScroller_i = function () {
		var t = new eui.Scroller();
		this.gameMainScroller = t;
		t.height = 720;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 720;
		t.x = 0;
		t.y = 114;
		t.viewport = this.gameList_i();
		return t;
	};
	_proto.gameList_i = function () {
		var t = new eui.Group();
		this.gameList = t;
		t.anchorOffsetY = 0;
		t.y = -13;
		t.elementsContent = [this._Group11_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 190;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 718;
		t.y = 6;
		t.elementsContent = [this._Rect3_i(),this._Group10_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1e1e1e;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 36;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label1_i(),this._Group9_i(),this._Label4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_photo_default";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_6";
		t.x = 631.82;
		t.y = 0.52;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "俱乐部名称";
		t.x = 150;
		t.y = 1;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 150;
		t.y = 89.33;
		t.elementsContent = [this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image8_i(),this._Label2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_8";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100人";
		t.textColor = 0x667b97;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 185.71;
		t.elementsContent = [this._Image9_i(),this._Label3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_5";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "100房间";
		t.textColor = 0xb99829;
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "俱乐部介绍";
		t.textColor = 0xafacac;
		t.x = 150;
		t.y = 47.09;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "nn_hall_json.hall_noticebg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 32;
		t.horizontalCenter = 20;
		t.touchEnabled = false;
		t.verticalCenter = -0.5;
		t.width = 575;
		t.viewport = this._Group12_i();
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._label_notice_i()];
		return t;
	};
	_proto._label_notice_i = function () {
		var t = new eui.Label();
		this._label_notice = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐";
		t.textColor = 0xafacac;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 7.32;
		t.y = 62;
		t.elementsContent = [this._Image11_i(),this._label_clubnum_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._label_clubnum_i = function () {
		var t = new eui.Label();
		this._label_clubnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "我的俱乐部(10)";
		t.verticalCenter = 0;
		t.x = 48;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 95;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 613;
		t.x = 53;
		t.y = 858.98;
		t.elementsContent = [this._btn_join_club_i(),this._btn_create_club_i()];
		return t;
	};
	_proto._btn_join_club_i = function () {
		var t = new eui.Button();
		this._btn_join_club = t;
		t.horizontalCenter = -178;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin86;
		return t;
	};
	_proto._btn_create_club_i = function () {
		var t = new eui.Button();
		this._btn_create_club = t;
		t.horizontalCenter = 178;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = huanleHall$Skin87;
		return t;
	};
	return huanleHall;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/nn_theird.exml'] = window.nn_theird = (function (_super) {
	__extends(nn_theird, _super);
	function nn_theird() {
		_super.call(this);
		this.skinParts = ["menban","playcount","pai00","pai01","pai02","pai03","pai04","type0","nickname0","point0","zhuang0","userInfo0","pai10","pai11","pai12","pai13","pai14","type1","nickname1","zhuang1","point1","userInfo1","pai20","pai21","pai22","pai23","pai24","type2","nickname2","zhuang2","point2","userInfo2","pai30","pai31","pai32","pai33","pai34","type3","nickname3","zhuang3","point3","userInfo3","pai40","pai41","pai42","pai43","pai44","type4","nickname4","zhuang4","point4","userInfo4","pai50","pai51","pai52","pai53","pai54","type5","nickname5","zhuang5","point5","userInfo5","pai60","pai61","pai62","pai63","pai64","type6","nickname6","zhuang6","point6","userInfo6","pai70","pai71","pai72","pai73","pai74","type7","nickname7","zhuang7","point7","userInfo7","pai80","pai81","pai82","pai83","pai84","type8","nickname8","zhuang8","point8","userInfo8","pai90","pai91","pai92","pai93","pai94","type9","nickname9","zhuang9","point9","userInfo9","pai100","pai101","pai102","pai103","pai104","type10","nickname10","zhuang10","point10","userInfo10","pai110","pai111","pai112","pai113","pai114","type11","nickname11","zhuang11","point11","userInfo11","pai120","pai121","pai122","pai123","pai124","type12","nickname12","zhuang12","point12","userInfo12","_gp_content"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.menban_i(),this._gp_content_i()];
	}
	var _proto = nn_theird.prototype;

	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0.5;
		t.height = 1800;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_content_i = function () {
		var t = new eui.Group();
		this._gp_content = t;
		t.x = 75;
		t.y = 192.73;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 840;
		t.strokeColor = 0x848484;
		t.strokeWeight = 3;
		t.width = 570;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.text = "第10局";
		t.x = 248;
		t.y = 26;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 730;
		t.width = 546;
		t.x = 12;
		t.y = 90.75;
		t.viewport = this._Group27_i();
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.userInfo0_i(),this.userInfo1_i(),this.userInfo2_i(),this.userInfo3_i(),this.userInfo4_i(),this.userInfo5_i(),this.userInfo6_i(),this.userInfo7_i(),this.userInfo8_i(),this.userInfo9_i(),this.userInfo10_i(),this.userInfo11_i(),this.userInfo12_i()];
		return t;
	};
	_proto.userInfo0_i = function () {
		var t = new eui.Group();
		this.userInfo0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 20;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.point0_i(),this.zhuang0_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai00_i(),this.pai01_i(),this.pai02_i(),this.pai03_i(),this.pai04_i(),this.type0_i()];
		return t;
	};
	_proto.pai00_i = function () {
		var t = new eui.Image();
		this.pai00 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai01_i = function () {
		var t = new eui.Image();
		this.pai01 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai02_i = function () {
		var t = new eui.Image();
		this.pai02 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai03_i = function () {
		var t = new eui.Image();
		this.pai03 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai04_i = function () {
		var t = new eui.Image();
		this.pai04 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type0_i = function () {
		var t = new eui.Image();
		this.type0 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_zhanji_nn_txt_n0";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname0_i()];
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.zhuang0_i = function () {
		var t = new eui.Image();
		this.zhuang0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0.5;
		t.x = -4;
		return t;
	};
	_proto.userInfo1_i = function () {
		var t = new eui.Group();
		this.userInfo1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 115;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this.zhuang1_i(),this.point1_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai10_i(),this.pai11_i(),this.pai12_i(),this.pai13_i(),this.pai14_i(),this.type1_i()];
		return t;
	};
	_proto.pai10_i = function () {
		var t = new eui.Image();
		this.pai10 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai11_i = function () {
		var t = new eui.Image();
		this.pai11 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai12_i = function () {
		var t = new eui.Image();
		this.pai12 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai13_i = function () {
		var t = new eui.Image();
		this.pai13 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai14_i = function () {
		var t = new eui.Image();
		this.pai14 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type1_i = function () {
		var t = new eui.Image();
		this.type1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname1_i()];
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo2_i = function () {
		var t = new eui.Group();
		this.userInfo2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 210;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this.zhuang2_i(),this.point2_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai20_i(),this.pai21_i(),this.pai22_i(),this.pai23_i(),this.pai24_i(),this.type2_i()];
		return t;
	};
	_proto.pai20_i = function () {
		var t = new eui.Image();
		this.pai20 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai21_i = function () {
		var t = new eui.Image();
		this.pai21 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai22_i = function () {
		var t = new eui.Image();
		this.pai22 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai23_i = function () {
		var t = new eui.Image();
		this.pai23 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai24_i = function () {
		var t = new eui.Image();
		this.pai24 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type2_i = function () {
		var t = new eui.Image();
		this.type2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname2_i()];
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo3_i = function () {
		var t = new eui.Group();
		this.userInfo3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 305;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this.zhuang3_i(),this.point3_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai30_i(),this.pai31_i(),this.pai32_i(),this.pai33_i(),this.pai34_i(),this.type3_i()];
		return t;
	};
	_proto.pai30_i = function () {
		var t = new eui.Image();
		this.pai30 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai31_i = function () {
		var t = new eui.Image();
		this.pai31 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai32_i = function () {
		var t = new eui.Image();
		this.pai32 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai33_i = function () {
		var t = new eui.Image();
		this.pai33 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai34_i = function () {
		var t = new eui.Image();
		this.pai34 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type3_i = function () {
		var t = new eui.Image();
		this.type3 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang3_i = function () {
		var t = new eui.Image();
		this.zhuang3 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo4_i = function () {
		var t = new eui.Group();
		this.userInfo4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 400;
		t.elementsContent = [this._Group9_i(),this._Group10_i(),this.zhuang4_i(),this.point4_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai40_i(),this.pai41_i(),this.pai42_i(),this.pai43_i(),this.pai44_i(),this.type4_i()];
		return t;
	};
	_proto.pai40_i = function () {
		var t = new eui.Image();
		this.pai40 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai41_i = function () {
		var t = new eui.Image();
		this.pai41 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai42_i = function () {
		var t = new eui.Image();
		this.pai42 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai43_i = function () {
		var t = new eui.Image();
		this.pai43 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai44_i = function () {
		var t = new eui.Image();
		this.pai44 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type4_i = function () {
		var t = new eui.Image();
		this.type4 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname4_i()];
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang4_i = function () {
		var t = new eui.Image();
		this.zhuang4 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.Label();
		this.point4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo5_i = function () {
		var t = new eui.Group();
		this.userInfo5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 495;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this.zhuang5_i(),this.point5_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai50_i(),this.pai51_i(),this.pai52_i(),this.pai53_i(),this.pai54_i(),this.type5_i()];
		return t;
	};
	_proto.pai50_i = function () {
		var t = new eui.Image();
		this.pai50 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai51_i = function () {
		var t = new eui.Image();
		this.pai51 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai52_i = function () {
		var t = new eui.Image();
		this.pai52 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai53_i = function () {
		var t = new eui.Image();
		this.pai53 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai54_i = function () {
		var t = new eui.Image();
		this.pai54 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type5_i = function () {
		var t = new eui.Image();
		this.type5 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname5_i()];
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang5_i = function () {
		var t = new eui.Image();
		this.zhuang5 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point5_i = function () {
		var t = new eui.Label();
		this.point5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo6_i = function () {
		var t = new eui.Group();
		this.userInfo6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 590;
		t.elementsContent = [this._Group13_i(),this._Group14_i(),this.zhuang6_i(),this.point6_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai60_i(),this.pai61_i(),this.pai62_i(),this.pai63_i(),this.pai64_i(),this.type6_i()];
		return t;
	};
	_proto.pai60_i = function () {
		var t = new eui.Image();
		this.pai60 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai61_i = function () {
		var t = new eui.Image();
		this.pai61 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai62_i = function () {
		var t = new eui.Image();
		this.pai62 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai63_i = function () {
		var t = new eui.Image();
		this.pai63 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai64_i = function () {
		var t = new eui.Image();
		this.pai64 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type6_i = function () {
		var t = new eui.Image();
		this.type6 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname6_i()];
		return t;
	};
	_proto.nickname6_i = function () {
		var t = new eui.Label();
		this.nickname6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang6_i = function () {
		var t = new eui.Image();
		this.zhuang6 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point6_i = function () {
		var t = new eui.Label();
		this.point6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo7_i = function () {
		var t = new eui.Group();
		this.userInfo7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 685;
		t.elementsContent = [this._Group15_i(),this._Group16_i(),this.zhuang7_i(),this.point7_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai70_i(),this.pai71_i(),this.pai72_i(),this.pai73_i(),this.pai74_i(),this.type7_i()];
		return t;
	};
	_proto.pai70_i = function () {
		var t = new eui.Image();
		this.pai70 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai71_i = function () {
		var t = new eui.Image();
		this.pai71 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai72_i = function () {
		var t = new eui.Image();
		this.pai72 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai73_i = function () {
		var t = new eui.Image();
		this.pai73 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai74_i = function () {
		var t = new eui.Image();
		this.pai74 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type7_i = function () {
		var t = new eui.Image();
		this.type7 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname7_i()];
		return t;
	};
	_proto.nickname7_i = function () {
		var t = new eui.Label();
		this.nickname7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang7_i = function () {
		var t = new eui.Image();
		this.zhuang7 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point7_i = function () {
		var t = new eui.Label();
		this.point7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo8_i = function () {
		var t = new eui.Group();
		this.userInfo8 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 780;
		t.elementsContent = [this._Group17_i(),this._Group18_i(),this.zhuang8_i(),this.point8_i()];
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai80_i(),this.pai81_i(),this.pai82_i(),this.pai83_i(),this.pai84_i(),this.type8_i()];
		return t;
	};
	_proto.pai80_i = function () {
		var t = new eui.Image();
		this.pai80 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai81_i = function () {
		var t = new eui.Image();
		this.pai81 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai82_i = function () {
		var t = new eui.Image();
		this.pai82 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai83_i = function () {
		var t = new eui.Image();
		this.pai83 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai84_i = function () {
		var t = new eui.Image();
		this.pai84 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type8_i = function () {
		var t = new eui.Image();
		this.type8 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname8_i()];
		return t;
	};
	_proto.nickname8_i = function () {
		var t = new eui.Label();
		this.nickname8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang8_i = function () {
		var t = new eui.Image();
		this.zhuang8 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point8_i = function () {
		var t = new eui.Label();
		this.point8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo9_i = function () {
		var t = new eui.Group();
		this.userInfo9 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 875;
		t.elementsContent = [this._Group19_i(),this._Group20_i(),this.zhuang9_i(),this.point9_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai90_i(),this.pai91_i(),this.pai92_i(),this.pai93_i(),this.pai94_i(),this.type9_i()];
		return t;
	};
	_proto.pai90_i = function () {
		var t = new eui.Image();
		this.pai90 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai91_i = function () {
		var t = new eui.Image();
		this.pai91 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai92_i = function () {
		var t = new eui.Image();
		this.pai92 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai93_i = function () {
		var t = new eui.Image();
		this.pai93 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai94_i = function () {
		var t = new eui.Image();
		this.pai94 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type9_i = function () {
		var t = new eui.Image();
		this.type9 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname9_i()];
		return t;
	};
	_proto.nickname9_i = function () {
		var t = new eui.Label();
		this.nickname9 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang9_i = function () {
		var t = new eui.Image();
		this.zhuang9 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point9_i = function () {
		var t = new eui.Label();
		this.point9 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo10_i = function () {
		var t = new eui.Group();
		this.userInfo10 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 970;
		t.elementsContent = [this._Group21_i(),this._Group22_i(),this.zhuang10_i(),this.point10_i()];
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai100_i(),this.pai101_i(),this.pai102_i(),this.pai103_i(),this.pai104_i(),this.type10_i()];
		return t;
	};
	_proto.pai100_i = function () {
		var t = new eui.Image();
		this.pai100 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai101_i = function () {
		var t = new eui.Image();
		this.pai101 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai102_i = function () {
		var t = new eui.Image();
		this.pai102 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai103_i = function () {
		var t = new eui.Image();
		this.pai103 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai104_i = function () {
		var t = new eui.Image();
		this.pai104 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type10_i = function () {
		var t = new eui.Image();
		this.type10 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname10_i()];
		return t;
	};
	_proto.nickname10_i = function () {
		var t = new eui.Label();
		this.nickname10 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang10_i = function () {
		var t = new eui.Image();
		this.zhuang10 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point10_i = function () {
		var t = new eui.Label();
		this.point10 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo11_i = function () {
		var t = new eui.Group();
		this.userInfo11 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 1065;
		t.elementsContent = [this._Group23_i(),this._Group24_i(),this.zhuang11_i(),this.point11_i()];
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai110_i(),this.pai111_i(),this.pai112_i(),this.pai113_i(),this.pai114_i(),this.type11_i()];
		return t;
	};
	_proto.pai110_i = function () {
		var t = new eui.Image();
		this.pai110 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai111_i = function () {
		var t = new eui.Image();
		this.pai111 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai112_i = function () {
		var t = new eui.Image();
		this.pai112 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai113_i = function () {
		var t = new eui.Image();
		this.pai113 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai114_i = function () {
		var t = new eui.Image();
		this.pai114 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type11_i = function () {
		var t = new eui.Image();
		this.type11 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname11_i()];
		return t;
	};
	_proto.nickname11_i = function () {
		var t = new eui.Label();
		this.nickname11 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang11_i = function () {
		var t = new eui.Image();
		this.zhuang11 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point11_i = function () {
		var t = new eui.Label();
		this.point11 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	_proto.userInfo12_i = function () {
		var t = new eui.Group();
		this.userInfo12 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 1160;
		t.elementsContent = [this._Group25_i(),this._Group26_i(),this.zhuang12_i(),this.point12_i()];
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.pai120_i(),this.pai121_i(),this.pai122_i(),this.pai123_i(),this.pai124_i(),this.type12_i()];
		return t;
	};
	_proto.pai120_i = function () {
		var t = new eui.Image();
		this.pai120 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai121_i = function () {
		var t = new eui.Image();
		this.pai121 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai122_i = function () {
		var t = new eui.Image();
		this.pai122 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai123_i = function () {
		var t = new eui.Image();
		this.pai123 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai124_i = function () {
		var t = new eui.Image();
		this.pai124 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "poker2_json.card_5_11";
		t.width = 97;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.type12_i = function () {
		var t = new eui.Image();
		this.type12 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 25;
		t.elementsContent = [this.nickname12_i()];
		return t;
	};
	_proto.nickname12_i = function () {
		var t = new eui.Label();
		this.nickname12 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuang12_i = function () {
		var t = new eui.Image();
		this.zhuang12 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniugamein_json.game_zhuang";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.point12_i = function () {
		var t = new eui.Label();
		this.point12 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 422.58;
		return t;
	};
	return nn_theird;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/second.exml'] = window.second = (function (_super) {
	__extends(second, _super);
	function second() {
		_super.call(this);
		this.skinParts = ["hzmj_pwd","hzmj_playcount","hzmj_peoplecount","bg0","juCount0","_gp_item0","bg1","juCount1","_gp_item1","bg2","juCount2","_gp_item2","bg3","juCount3","_gp_item3","bg4","juCount4","_gp_item4","bg5","juCount5","_gp_item5","bg6","juCount6","_gp_item6","bg7","juCount7","_gp_item7","bg8","juCount8","_gp_item8","bg9","juCount9","_gp_item9","bg10","juCount10","_gp_item10","bg11","juCount11","_gp_item11","bg12","juCount12","_gp_item12","bg13","juCount13","_gp_item13","bg14","juCount14","_gp_item14","bg15","juCount15","_gp_item15","bg16","juCount16","_gp_item16","bg17","juCount17","_gp_item17","bg18","juCount18","_gp_item18","bg19","juCount19","_gp_item19","bg20","juCount20","_gp_item20","bg21","juCount21","_gp_item21","bg22","juCount22","_gp_item22","bg23","juCount23","_gp_item23","showWindow"];
		
		this.height = 730;
		this.width = 720;
		this.elementsContent = [this._Group8_i()];
	}
	var _proto = second.prototype;

	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.hzmj_pwd_i(),this.hzmj_playcount_i(),this.hzmj_peoplecount_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_icon_10";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.hzmj_pwd_i = function () {
		var t = new eui.Label();
		this.hzmj_pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "房号：999999";
		t.textColor = 0xFCDD76;
		t.verticalCenter = 0.5;
		t.x = 47.68;
		t.y = 150;
		return t;
	};
	_proto.hzmj_playcount_i = function () {
		var t = new eui.Label();
		this.hzmj_playcount = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "局数：10";
		t.textColor = 0xFCDD76;
		t.verticalCenter = 0.5;
		t.x = 227.68;
		t.y = 150;
		return t;
	};
	_proto.hzmj_peoplecount_i = function () {
		var t = new eui.Label();
		this.hzmj_peoplecount = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "人数：4";
		t.textColor = 0xFCDD76;
		t.verticalCenter = 0.5;
		t.x = 347.68;
		t.y = 150;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 680;
		t.width = 720;
		t.x = 2.68;
		t.y = 44;
		t.viewport = this.showWindow_i();
		return t;
	};
	_proto.showWindow_i = function () {
		var t = new eui.Group();
		this.showWindow = t;
		t.y = -24;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 20;
		t.elementsContent = [this._gp_item0_i(),this._gp_item1_i(),this._gp_item2_i(),this._gp_item3_i()];
		return t;
	};
	_proto._gp_item0_i = function () {
		var t = new eui.Group();
		this._gp_item0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg0_i(),this.juCount0_i()];
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Rect();
		this.bg0 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1e1e1e;
		t.height = 150;
		t.strokeColor = 0x1e1e1e;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount0_i = function () {
		var t = new eui.Label();
		this.juCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第1局";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item1_i = function () {
		var t = new eui.Group();
		this._gp_item1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this.bg1_i(),this.juCount1_i()];
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Rect();
		this.bg1 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount1_i = function () {
		var t = new eui.Label();
		this.juCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第2局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item2_i = function () {
		var t = new eui.Group();
		this._gp_item2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 340;
		t.y = 0;
		t.elementsContent = [this.bg2_i(),this.juCount2_i()];
		return t;
	};
	_proto.bg2_i = function () {
		var t = new eui.Rect();
		this.bg2 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount2_i = function () {
		var t = new eui.Label();
		this.juCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第3局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item3_i = function () {
		var t = new eui.Group();
		this._gp_item3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 510;
		t.y = 0;
		t.elementsContent = [this.bg3_i(),this.juCount3_i()];
		return t;
	};
	_proto.bg3_i = function () {
		var t = new eui.Rect();
		this.bg3 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount3_i = function () {
		var t = new eui.Label();
		this.juCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第4局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 180;
		t.elementsContent = [this._gp_item4_i(),this._gp_item5_i(),this._gp_item6_i(),this._gp_item7_i()];
		return t;
	};
	_proto._gp_item4_i = function () {
		var t = new eui.Group();
		this._gp_item4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg4_i(),this.juCount4_i()];
		return t;
	};
	_proto.bg4_i = function () {
		var t = new eui.Rect();
		this.bg4 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount4_i = function () {
		var t = new eui.Label();
		this.juCount4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第5局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item5_i = function () {
		var t = new eui.Group();
		this._gp_item5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this.bg5_i(),this.juCount5_i()];
		return t;
	};
	_proto.bg5_i = function () {
		var t = new eui.Rect();
		this.bg5 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount5_i = function () {
		var t = new eui.Label();
		this.juCount5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第6局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item6_i = function () {
		var t = new eui.Group();
		this._gp_item6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 340;
		t.y = 0;
		t.elementsContent = [this.bg6_i(),this.juCount6_i()];
		return t;
	};
	_proto.bg6_i = function () {
		var t = new eui.Rect();
		this.bg6 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount6_i = function () {
		var t = new eui.Label();
		this.juCount6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第7局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item7_i = function () {
		var t = new eui.Group();
		this._gp_item7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 510;
		t.y = 0;
		t.elementsContent = [this.bg7_i(),this.juCount7_i()];
		return t;
	};
	_proto.bg7_i = function () {
		var t = new eui.Rect();
		this.bg7 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount7_i = function () {
		var t = new eui.Label();
		this.juCount7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第8局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 340;
		t.elementsContent = [this._gp_item8_i(),this._gp_item9_i(),this._gp_item10_i(),this._gp_item11_i()];
		return t;
	};
	_proto._gp_item8_i = function () {
		var t = new eui.Group();
		this._gp_item8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg8_i(),this.juCount8_i()];
		return t;
	};
	_proto.bg8_i = function () {
		var t = new eui.Rect();
		this.bg8 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount8_i = function () {
		var t = new eui.Label();
		this.juCount8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第9局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item9_i = function () {
		var t = new eui.Group();
		this._gp_item9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this.bg9_i(),this.juCount9_i()];
		return t;
	};
	_proto.bg9_i = function () {
		var t = new eui.Rect();
		this.bg9 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount9_i = function () {
		var t = new eui.Label();
		this.juCount9 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第10局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item10_i = function () {
		var t = new eui.Group();
		this._gp_item10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 340;
		t.y = 0;
		t.elementsContent = [this.bg10_i(),this.juCount10_i()];
		return t;
	};
	_proto.bg10_i = function () {
		var t = new eui.Rect();
		this.bg10 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount10_i = function () {
		var t = new eui.Label();
		this.juCount10 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第11局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item11_i = function () {
		var t = new eui.Group();
		this._gp_item11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 510;
		t.y = 0;
		t.elementsContent = [this.bg11_i(),this.juCount11_i()];
		return t;
	};
	_proto.bg11_i = function () {
		var t = new eui.Rect();
		this.bg11 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount11_i = function () {
		var t = new eui.Label();
		this.juCount11 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第12局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 500;
		t.elementsContent = [this._gp_item12_i(),this._gp_item13_i(),this._gp_item14_i(),this._gp_item15_i()];
		return t;
	};
	_proto._gp_item12_i = function () {
		var t = new eui.Group();
		this._gp_item12 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg12_i(),this.juCount12_i()];
		return t;
	};
	_proto.bg12_i = function () {
		var t = new eui.Rect();
		this.bg12 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount12_i = function () {
		var t = new eui.Label();
		this.juCount12 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第13局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item13_i = function () {
		var t = new eui.Group();
		this._gp_item13 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this.bg13_i(),this.juCount13_i()];
		return t;
	};
	_proto.bg13_i = function () {
		var t = new eui.Rect();
		this.bg13 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount13_i = function () {
		var t = new eui.Label();
		this.juCount13 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第14局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item14_i = function () {
		var t = new eui.Group();
		this._gp_item14 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 340;
		t.y = 0;
		t.elementsContent = [this.bg14_i(),this.juCount14_i()];
		return t;
	};
	_proto.bg14_i = function () {
		var t = new eui.Rect();
		this.bg14 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount14_i = function () {
		var t = new eui.Label();
		this.juCount14 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第15局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item15_i = function () {
		var t = new eui.Group();
		this._gp_item15 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 510;
		t.y = 0;
		t.elementsContent = [this.bg15_i(),this.juCount15_i()];
		return t;
	};
	_proto.bg15_i = function () {
		var t = new eui.Rect();
		this.bg15 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount15_i = function () {
		var t = new eui.Label();
		this.juCount15 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第16局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 660;
		t.elementsContent = [this._gp_item16_i(),this._gp_item17_i(),this._gp_item18_i(),this._gp_item19_i()];
		return t;
	};
	_proto._gp_item16_i = function () {
		var t = new eui.Group();
		this._gp_item16 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg16_i(),this.juCount16_i()];
		return t;
	};
	_proto.bg16_i = function () {
		var t = new eui.Rect();
		this.bg16 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount16_i = function () {
		var t = new eui.Label();
		this.juCount16 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第17局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item17_i = function () {
		var t = new eui.Group();
		this._gp_item17 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this.bg17_i(),this.juCount17_i()];
		return t;
	};
	_proto.bg17_i = function () {
		var t = new eui.Rect();
		this.bg17 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount17_i = function () {
		var t = new eui.Label();
		this.juCount17 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第18局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item18_i = function () {
		var t = new eui.Group();
		this._gp_item18 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 340;
		t.y = 0;
		t.elementsContent = [this.bg18_i(),this.juCount18_i()];
		return t;
	};
	_proto.bg18_i = function () {
		var t = new eui.Rect();
		this.bg18 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount18_i = function () {
		var t = new eui.Label();
		this.juCount18 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第19局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item19_i = function () {
		var t = new eui.Group();
		this._gp_item19 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 510;
		t.y = 0;
		t.elementsContent = [this.bg19_i(),this.juCount19_i()];
		return t;
	};
	_proto.bg19_i = function () {
		var t = new eui.Rect();
		this.bg19 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount19_i = function () {
		var t = new eui.Label();
		this.juCount19 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第20局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 820;
		t.elementsContent = [this._gp_item20_i(),this._gp_item21_i(),this._gp_item22_i(),this._gp_item23_i()];
		return t;
	};
	_proto._gp_item20_i = function () {
		var t = new eui.Group();
		this._gp_item20 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg20_i(),this.juCount20_i()];
		return t;
	};
	_proto.bg20_i = function () {
		var t = new eui.Rect();
		this.bg20 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount20_i = function () {
		var t = new eui.Label();
		this.juCount20 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第21局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item21_i = function () {
		var t = new eui.Group();
		this._gp_item21 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this.bg21_i(),this.juCount21_i()];
		return t;
	};
	_proto.bg21_i = function () {
		var t = new eui.Rect();
		this.bg21 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount21_i = function () {
		var t = new eui.Label();
		this.juCount21 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第22局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item22_i = function () {
		var t = new eui.Group();
		this._gp_item22 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 340;
		t.y = 0;
		t.elementsContent = [this.bg22_i(),this.juCount22_i()];
		return t;
	};
	_proto.bg22_i = function () {
		var t = new eui.Rect();
		this.bg22 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount22_i = function () {
		var t = new eui.Label();
		this.juCount22 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第23局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item23_i = function () {
		var t = new eui.Group();
		this._gp_item23 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 510;
		t.y = 0;
		t.elementsContent = [this.bg23_i(),this.juCount23_i()];
		return t;
	};
	_proto.bg23_i = function () {
		var t = new eui.Rect();
		this.bg23 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x1E1E1E;
		t.height = 150;
		t.strokeColor = 0x1E1E1E;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juCount23_i = function () {
		var t = new eui.Label();
		this.juCount23 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "第24局";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	return second;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/secondItem.exml'] = window.secondItem = (function (_super) {
	__extends(secondItem, _super);
	function secondItem() {
		_super.call(this);
		this.skinParts = ["bg","point1","point2","point3","point4","point5","point6","juCount"];
		
		this.height = 53;
		this.width = 578;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = secondItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.point1_i(),this.point2_i(),this.point3_i(),this.point4_i(),this.point5_i(),this.point6_i(),this.juCount_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xf4e9e9;
		t.height = 53;
		t.strokeColor = 0xedc3c5;
		t.width = 578;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 64;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 149;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 235;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.Label();
		this.point4 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 324;
		return t;
	};
	_proto.point5_i = function () {
		var t = new eui.Label();
		this.point5 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 407;
		return t;
	};
	_proto.point6_i = function () {
		var t = new eui.Label();
		this.point6 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 493;
		return t;
	};
	_proto.juCount_i = function () {
		var t = new eui.Label();
		this.juCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "第一局";
		t.textColor = 0x7F0A0A;
		t.verticalCenter = 0.5;
		t.x = 4.34;
		return t;
	};
	return secondItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/theird.exml'] = window.theird = (function (_super) {
	__extends(theird, _super);
	function theird() {
		_super.call(this);
		this.skinParts = ["playcount","pai02","pai01","pai00","pai07","pai06","pai05","pai04","pai03","pai012","pai011","pai010","pai09","pai08","nickname0","point0","type00","type01","type02","userInfo0","pai12","pai11","pai10","pai17","pai16","pai15","pai14","pai13","pai112","pai111","pai110","pai19","pai18","nickname1","type10","type11","type12","point1","userInfo1","pai22","pai21","pai20","pai27","pai26","pai25","pai24","pai23","pai212","pai211","pai210","pai29","pai28","nickname2","point2","type20","type21","type22","userInfo2","pai32","pai31","pai30","pai37","pai36","pai35","pai34","pai33","pai312","pai311","pai310","pai39","pai38","nickname3","point3","type30","type31","type32","userInfo3","pai42","pai41","pai40","pai47","pai46","pai45","pai44","pai43","pai412","pai411","pai410","pai49","pai48","nickname4","point4","type40","type41","type42","userInfo4","pai0","pai1","pai2","pai3","pai4","pai5","pai6","pai7","pai8","pai9","pai50","pai51","pai52","nickname5","point5","type0","type1","type2","userInfo5"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.playcount_i(),this._Scroller1_i()];
	}
	var _proto = theird.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 840;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 570;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 840;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(23,97,19,29);
		t.source = "tz_hall_1_json.bg9_fight";
		t.verticalCenter = 0;
		t.width = 570;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.horizontalCenter = 10;
		t.text = "第10局";
		t.y = 146;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 730;
		t.horizontalCenter = 0;
		t.width = 546;
		t.y = 210.75;
		t.viewport = this._Group37_i();
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.userInfo0_i(),this.userInfo1_i(),this.userInfo2_i(),this.userInfo3_i(),this.userInfo4_i(),this.userInfo5_i()];
		return t;
	};
	_proto.userInfo0_i = function () {
		var t = new eui.Group();
		this.userInfo0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.point0_i(),this._Group6_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 146;
		t.y = 20;
		t.elementsContent = [this.pai02_i(),this.pai01_i(),this.pai00_i(),this.pai07_i(),this.pai06_i(),this.pai05_i(),this.pai04_i(),this.pai03_i(),this.pai012_i(),this.pai011_i(),this.pai010_i(),this.pai09_i(),this.pai08_i()];
		return t;
	};
	_proto.pai02_i = function () {
		var t = new eui.Image();
		this.pai02 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai01_i = function () {
		var t = new eui.Image();
		this.pai01 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai00_i = function () {
		var t = new eui.Image();
		this.pai00 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai07_i = function () {
		var t = new eui.Image();
		this.pai07 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 55.5;
		return t;
	};
	_proto.pai06_i = function () {
		var t = new eui.Image();
		this.pai06 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 55.5;
		return t;
	};
	_proto.pai05_i = function () {
		var t = new eui.Image();
		this.pai05 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 55.5;
		return t;
	};
	_proto.pai04_i = function () {
		var t = new eui.Image();
		this.pai04 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 55.5;
		return t;
	};
	_proto.pai03_i = function () {
		var t = new eui.Image();
		this.pai03 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 55.5;
		return t;
	};
	_proto.pai012_i = function () {
		var t = new eui.Image();
		this.pai012 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 111.5;
		return t;
	};
	_proto.pai011_i = function () {
		var t = new eui.Image();
		this.pai011 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 111.5;
		return t;
	};
	_proto.pai010_i = function () {
		var t = new eui.Image();
		this.pai010 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 111.5;
		return t;
	};
	_proto.pai09_i = function () {
		var t = new eui.Image();
		this.pai09 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 110.5;
		return t;
	};
	_proto.pai08_i = function () {
		var t = new eui.Image();
		this.pai08 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 110.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 0;
		t.elementsContent = [this.nickname0_i()];
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100";
		t.verticalCenter = 0;
		t.x = 462;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 371;
		t.y = 56;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.type00_i()];
		return t;
	};
	_proto.type00_i = function () {
		var t = new eui.Label();
		this.type00 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xf7e61d;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 64;
		t.elementsContent = [this.type01_i()];
		return t;
	};
	_proto.type01_i = function () {
		var t = new eui.Label();
		this.type01 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 134;
		t.elementsContent = [this.type02_i()];
		return t;
	};
	_proto.type02_i = function () {
		var t = new eui.Label();
		this.type02 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = -4;
		return t;
	};
	_proto.userInfo1_i = function () {
		var t = new eui.Group();
		this.userInfo1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 220;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group12_i(),this.point1_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 146;
		t.y = 20;
		t.elementsContent = [this.pai12_i(),this.pai11_i(),this.pai10_i(),this.pai17_i(),this.pai16_i(),this.pai15_i(),this.pai14_i(),this.pai13_i(),this.pai112_i(),this.pai111_i(),this.pai110_i(),this.pai19_i(),this.pai18_i()];
		return t;
	};
	_proto.pai12_i = function () {
		var t = new eui.Image();
		this.pai12 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai11_i = function () {
		var t = new eui.Image();
		this.pai11 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai10_i = function () {
		var t = new eui.Image();
		this.pai10 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai17_i = function () {
		var t = new eui.Image();
		this.pai17 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 54.5;
		return t;
	};
	_proto.pai16_i = function () {
		var t = new eui.Image();
		this.pai16 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 54.5;
		return t;
	};
	_proto.pai15_i = function () {
		var t = new eui.Image();
		this.pai15 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 53.17;
		return t;
	};
	_proto.pai14_i = function () {
		var t = new eui.Image();
		this.pai14 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 54.5;
		return t;
	};
	_proto.pai13_i = function () {
		var t = new eui.Image();
		this.pai13 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 54.5;
		return t;
	};
	_proto.pai112_i = function () {
		var t = new eui.Image();
		this.pai112 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 110.5;
		return t;
	};
	_proto.pai111_i = function () {
		var t = new eui.Image();
		this.pai111 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 110.5;
		return t;
	};
	_proto.pai110_i = function () {
		var t = new eui.Image();
		this.pai110 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 111.5;
		return t;
	};
	_proto.pai19_i = function () {
		var t = new eui.Image();
		this.pai19 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 111.5;
		return t;
	};
	_proto.pai18_i = function () {
		var t = new eui.Image();
		this.pai18 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 111.5;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -14;
		t.x = 0;
		t.elementsContent = [this.nickname1_i()];
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 138;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 371;
		t.y = 42;
		t.elementsContent = [this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.type10_i()];
		return t;
	};
	_proto.type10_i = function () {
		var t = new eui.Label();
		this.type10 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 64;
		t.elementsContent = [this.type11_i()];
		return t;
	};
	_proto.type11_i = function () {
		var t = new eui.Label();
		this.type11 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 134;
		t.elementsContent = [this.type12_i()];
		return t;
	};
	_proto.type12_i = function () {
		var t = new eui.Label();
		this.type12 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = -4;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "-100";
		t.verticalCenter = 0;
		t.x = 462;
		return t;
	};
	_proto.userInfo2_i = function () {
		var t = new eui.Group();
		this.userInfo2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 440;
		t.elementsContent = [this._Group13_i(),this._Group14_i(),this.point2_i(),this._Group18_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 146;
		t.y = 20;
		t.elementsContent = [this.pai22_i(),this.pai21_i(),this.pai20_i(),this.pai27_i(),this.pai26_i(),this.pai25_i(),this.pai24_i(),this.pai23_i(),this.pai212_i(),this.pai211_i(),this.pai210_i(),this.pai29_i(),this.pai28_i()];
		return t;
	};
	_proto.pai22_i = function () {
		var t = new eui.Image();
		this.pai22 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai21_i = function () {
		var t = new eui.Image();
		this.pai21 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai20_i = function () {
		var t = new eui.Image();
		this.pai20 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai27_i = function () {
		var t = new eui.Image();
		this.pai27 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 55.5;
		return t;
	};
	_proto.pai26_i = function () {
		var t = new eui.Image();
		this.pai26 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 55.5;
		return t;
	};
	_proto.pai25_i = function () {
		var t = new eui.Image();
		this.pai25 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 55.5;
		return t;
	};
	_proto.pai24_i = function () {
		var t = new eui.Image();
		this.pai24 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 55.5;
		return t;
	};
	_proto.pai23_i = function () {
		var t = new eui.Image();
		this.pai23 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 55.5;
		return t;
	};
	_proto.pai212_i = function () {
		var t = new eui.Image();
		this.pai212 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 112.5;
		return t;
	};
	_proto.pai211_i = function () {
		var t = new eui.Image();
		this.pai211 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 112.5;
		return t;
	};
	_proto.pai210_i = function () {
		var t = new eui.Image();
		this.pai210 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 112.5;
		return t;
	};
	_proto.pai29_i = function () {
		var t = new eui.Image();
		this.pai29 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 112.5;
		return t;
	};
	_proto.pai28_i = function () {
		var t = new eui.Image();
		this.pai28 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 112.5;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.nickname2_i()];
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "-100";
		t.verticalCenter = 0;
		t.x = 462;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 371;
		t.y = 42;
		t.elementsContent = [this._Group15_i(),this._Group16_i(),this._Group17_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.type20_i()];
		return t;
	};
	_proto.type20_i = function () {
		var t = new eui.Label();
		this.type20 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 64;
		t.elementsContent = [this.type21_i()];
		return t;
	};
	_proto.type21_i = function () {
		var t = new eui.Label();
		this.type21 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 134;
		t.elementsContent = [this.type22_i()];
		return t;
	};
	_proto.type22_i = function () {
		var t = new eui.Label();
		this.type22 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = -4;
		return t;
	};
	_proto.userInfo3_i = function () {
		var t = new eui.Group();
		this.userInfo3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 660;
		t.elementsContent = [this._Group19_i(),this._Group20_i(),this.point3_i(),this._Group24_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 146;
		t.y = 20;
		t.elementsContent = [this.pai32_i(),this.pai31_i(),this.pai30_i(),this.pai37_i(),this.pai36_i(),this.pai35_i(),this.pai34_i(),this.pai33_i(),this.pai312_i(),this.pai311_i(),this.pai310_i(),this.pai39_i(),this.pai38_i()];
		return t;
	};
	_proto.pai32_i = function () {
		var t = new eui.Image();
		this.pai32 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai31_i = function () {
		var t = new eui.Image();
		this.pai31 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai30_i = function () {
		var t = new eui.Image();
		this.pai30 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai37_i = function () {
		var t = new eui.Image();
		this.pai37 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 56.5;
		return t;
	};
	_proto.pai36_i = function () {
		var t = new eui.Image();
		this.pai36 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 56.5;
		return t;
	};
	_proto.pai35_i = function () {
		var t = new eui.Image();
		this.pai35 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 56.5;
		return t;
	};
	_proto.pai34_i = function () {
		var t = new eui.Image();
		this.pai34 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 56.5;
		return t;
	};
	_proto.pai33_i = function () {
		var t = new eui.Image();
		this.pai33 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 56.5;
		return t;
	};
	_proto.pai312_i = function () {
		var t = new eui.Image();
		this.pai312 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 113.5;
		return t;
	};
	_proto.pai311_i = function () {
		var t = new eui.Image();
		this.pai311 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 113.5;
		return t;
	};
	_proto.pai310_i = function () {
		var t = new eui.Image();
		this.pai310 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 114.5;
		return t;
	};
	_proto.pai39_i = function () {
		var t = new eui.Image();
		this.pai39 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 114.5;
		return t;
	};
	_proto.pai38_i = function () {
		var t = new eui.Image();
		this.pai38 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 115.5;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.nickname3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 138;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "-100";
		t.verticalCenter = 0;
		t.x = 462;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.x = 371;
		t.y = 42;
		t.elementsContent = [this._Group21_i(),this._Group22_i(),this._Group23_i()];
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.type30_i()];
		return t;
	};
	_proto.type30_i = function () {
		var t = new eui.Label();
		this.type30 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 64;
		t.elementsContent = [this.type31_i()];
		return t;
	};
	_proto.type31_i = function () {
		var t = new eui.Label();
		this.type31 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 134;
		t.elementsContent = [this.type32_i()];
		return t;
	};
	_proto.type32_i = function () {
		var t = new eui.Label();
		this.type32 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = -4;
		return t;
	};
	_proto.userInfo4_i = function () {
		var t = new eui.Group();
		this.userInfo4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 880;
		t.elementsContent = [this._Group25_i(),this._Group26_i(),this.point4_i(),this._Group30_i()];
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 146;
		t.y = 20;
		t.elementsContent = [this.pai42_i(),this.pai41_i(),this.pai40_i(),this.pai47_i(),this.pai46_i(),this.pai45_i(),this.pai44_i(),this.pai43_i(),this.pai412_i(),this.pai411_i(),this.pai410_i(),this.pai49_i(),this.pai48_i()];
		return t;
	};
	_proto.pai42_i = function () {
		var t = new eui.Image();
		this.pai42 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai41_i = function () {
		var t = new eui.Image();
		this.pai41 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai40_i = function () {
		var t = new eui.Image();
		this.pai40 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai47_i = function () {
		var t = new eui.Image();
		this.pai47 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 56.5;
		return t;
	};
	_proto.pai46_i = function () {
		var t = new eui.Image();
		this.pai46 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 56.5;
		return t;
	};
	_proto.pai45_i = function () {
		var t = new eui.Image();
		this.pai45 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 56.5;
		return t;
	};
	_proto.pai44_i = function () {
		var t = new eui.Image();
		this.pai44 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 56.5;
		return t;
	};
	_proto.pai43_i = function () {
		var t = new eui.Image();
		this.pai43 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 56.5;
		return t;
	};
	_proto.pai412_i = function () {
		var t = new eui.Image();
		this.pai412 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 113.5;
		return t;
	};
	_proto.pai411_i = function () {
		var t = new eui.Image();
		this.pai411 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 113.5;
		return t;
	};
	_proto.pai410_i = function () {
		var t = new eui.Image();
		this.pai410 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 114.5;
		return t;
	};
	_proto.pai49_i = function () {
		var t = new eui.Image();
		this.pai49 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 114.5;
		return t;
	};
	_proto.pai48_i = function () {
		var t = new eui.Image();
		this.pai48 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 115.5;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.nickname4_i()];
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 138;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.Label();
		this.point4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "-100";
		t.verticalCenter = 0;
		t.x = 462;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.x = 371;
		t.y = 42;
		t.elementsContent = [this._Group27_i(),this._Group28_i(),this._Group29_i()];
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.type40_i()];
		return t;
	};
	_proto.type40_i = function () {
		var t = new eui.Label();
		this.type40 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 64;
		t.elementsContent = [this.type41_i()];
		return t;
	};
	_proto.type41_i = function () {
		var t = new eui.Label();
		this.type41 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 134;
		t.elementsContent = [this.type42_i()];
		return t;
	};
	_proto.type42_i = function () {
		var t = new eui.Label();
		this.type42 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = -4;
		return t;
	};
	_proto.userInfo5_i = function () {
		var t = new eui.Group();
		this.userInfo5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 1100;
		t.elementsContent = [this._Group31_i(),this._Group32_i(),this.point5_i(),this._Group36_i()];
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.x = 146;
		t.y = 20;
		t.elementsContent = [this.pai0_i(),this.pai1_i(),this.pai2_i(),this.pai3_i(),this.pai4_i(),this.pai5_i(),this.pai6_i(),this.pai7_i(),this.pai8_i(),this.pai9_i(),this.pai50_i(),this.pai51_i(),this.pai52_i()];
		return t;
	};
	_proto.pai0_i = function () {
		var t = new eui.Image();
		this.pai0 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pai1_i = function () {
		var t = new eui.Image();
		this.pai1 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.pai2_i = function () {
		var t = new eui.Image();
		this.pai2 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.pai3_i = function () {
		var t = new eui.Image();
		this.pai3 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 56.5;
		return t;
	};
	_proto.pai4_i = function () {
		var t = new eui.Image();
		this.pai4 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 56.5;
		return t;
	};
	_proto.pai5_i = function () {
		var t = new eui.Image();
		this.pai5 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 56.5;
		return t;
	};
	_proto.pai6_i = function () {
		var t = new eui.Image();
		this.pai6 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 56.5;
		return t;
	};
	_proto.pai7_i = function () {
		var t = new eui.Image();
		this.pai7 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 56.5;
		return t;
	};
	_proto.pai8_i = function () {
		var t = new eui.Image();
		this.pai8 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 0;
		t.y = 113.5;
		return t;
	};
	_proto.pai9_i = function () {
		var t = new eui.Image();
		this.pai9 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 35;
		t.y = 113.5;
		return t;
	};
	_proto.pai50_i = function () {
		var t = new eui.Image();
		this.pai50 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 70;
		t.y = 114.5;
		return t;
	};
	_proto.pai51_i = function () {
		var t = new eui.Image();
		this.pai51 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 105;
		t.y = 114.5;
		return t;
	};
	_proto.pai52_i = function () {
		var t = new eui.Image();
		this.pai52 = t;
		t.height = 127;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "f12";
		t.width = 97;
		t.x = 140;
		t.y = 115.5;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.nickname5_i()];
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 138;
		return t;
	};
	_proto.point5_i = function () {
		var t = new eui.Label();
		this.point5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "-100";
		t.verticalCenter = 0;
		t.x = 462;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.x = 371;
		t.y = 42;
		t.elementsContent = [this._Group33_i(),this._Group34_i(),this._Group35_i()];
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.type0_i()];
		return t;
	};
	_proto.type0_i = function () {
		var t = new eui.Label();
		this.type0 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 64;
		t.elementsContent = [this.type1_i()];
		return t;
	};
	_proto.type1_i = function () {
		var t = new eui.Label();
		this.type1 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 66;
		t.x = 0;
		t.y = 134;
		t.elementsContent = [this.type2_i()];
		return t;
	};
	_proto.type2_i = function () {
		var t = new eui.Label();
		this.type2 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0xF7E61D;
		t.verticalCenter = -4;
		return t;
	};
	return theird;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/zhanjiMainItem.exml'] = window.zhanjiMainItem = (function (_super) {
	__extends(zhanjiMainItem, _super);
	var zhanjiMainItem$Skin88 = 	(function (_super) {
		__extends(zhanjiMainItem$Skin88, _super);
		function zhanjiMainItem$Skin88() {
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
						new eui.SetProperty("iconDisplay","scaleY",1.2),
						new eui.SetProperty("iconDisplay","scaleX",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zhanjiMainItem$Skin88.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.button_de_3";
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
		return zhanjiMainItem$Skin88;
	})(eui.Skin);

	function zhanjiMainItem() {
		_super.call(this);
		this.skinParts = ["bg","time","pwd","score","detail"];
		
		this.height = 112;
		this.width = 544;
		this.elementsContent = [this.bg_i(),this._Group1_i(),this.detail_i()];
	}
	var _proto = zhanjiMainItem.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "tz_hall_4_json.button_game_item_2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 136;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.time_i(),this.pwd_i(),this.score_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(13,11,21,20);
		t.source = "tz_hall_1_json.fight_item_bg";
		t.width = 395;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "房号：";
		t.textColor = 0xe8c888;
		t.x = 26;
		t.y = 17.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "时间：";
		t.x = 27;
		t.y = 44.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "积分：";
		t.textColor = 0xe8c888;
		t.x = 164;
		t.y = 17.5;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleY = 1.1;
		t.size = 18;
		t.text = "2010-01-01 01:01:01";
		t.x = 76;
		t.y = 44.5;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "666666";
		t.textColor = 0xe8c888;
		t.x = 75.5;
		t.y = 17.5;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "999999";
		t.textColor = 0xe8c888;
		t.x = 218;
		t.y = 17.5;
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Button();
		this.detail = t;
		t.label = "";
		t.verticalCenter = 0.5;
		t.x = 424;
		t.skinName = zhanjiMainItem$Skin88;
		return t;
	};
	return zhanjiMainItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/zhanjiMainScene.exml'] = window.zhanjiMainScene = (function (_super) {
	__extends(zhanjiMainScene, _super);
	var zhanjiMainScene$Skin89 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin89, _super);
		function zhanjiMainScene$Skin89() {
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
		var _proto = zhanjiMainScene$Skin89.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.fight_all_off";
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
		return zhanjiMainScene$Skin89;
	})(eui.Skin);

	var zhanjiMainScene$Skin90 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin90, _super);
		function zhanjiMainScene$Skin90() {
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
		var _proto = zhanjiMainScene$Skin90.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.fight_create_off";
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
		return zhanjiMainScene$Skin90;
	})(eui.Skin);

	var zhanjiMainScene$Skin91 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin91, _super);
		function zhanjiMainScene$Skin91() {
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
		var _proto = zhanjiMainScene$Skin91.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.fight_join_off";
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
		return zhanjiMainScene$Skin91;
	})(eui.Skin);

	var zhanjiMainScene$Skin92 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin92, _super);
		function zhanjiMainScene$Skin92() {
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
		var _proto = zhanjiMainScene$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.fanhui";
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
		return zhanjiMainScene$Skin92;
	})(eui.Skin);

	function zhanjiMainScene() {
		_super.call(this);
		this.skinParts = ["hallbg","allRecord","myCreate","myJoin","empty","juhua","zhanjiContent","top_bg","_btn_topback"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.hallbg_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = zhanjiMainScene.prototype;

	_proto.hallbg_i = function () {
		var t = new eui.Image();
		this.hallbg = t;
		t.height = 1388;
		t.source = "hallBg_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.99;
		t.scaleY = 0.99;
		t.verticalCenter = 21.5;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.empty_i(),this.juhua_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 827;
		t.scale9Grid = new egret.Rectangle(20,98,23,21);
		t.source = "tz_hall_1_json.bg9_fight";
		t.width = 570;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 24;
		t.y = 18.97;
		t.elementsContent = [this.allRecord_i(),this.myCreate_i(),this.myJoin_i()];
		return t;
	};
	_proto.allRecord_i = function () {
		var t = new eui.Button();
		this.allRecord = t;
		t.height = 53;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 181;
		t.x = 0;
		t.skinName = zhanjiMainScene$Skin89;
		return t;
	};
	_proto.myCreate_i = function () {
		var t = new eui.Button();
		this.myCreate = t;
		t.height = 53;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 177;
		t.x = 181;
		t.skinName = zhanjiMainScene$Skin90;
		return t;
	};
	_proto.myJoin_i = function () {
		var t = new eui.Button();
		this.myJoin = t;
		t.height = 53;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 165;
		t.x = 358;
		t.skinName = zhanjiMainScene$Skin91;
		return t;
	};
	_proto.empty_i = function () {
		var t = new eui.Label();
		this.empty = t;
		t.horizontalCenter = 0;
		t.text = "暂无战绩";
		t.verticalCenter = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "tz_hall_4_json.loading2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 550;
		t.y = 92.08;
		t.viewport = this.zhanjiContent_i();
		return t;
	};
	_proto.zhanjiContent_i = function () {
		var t = new eui.Group();
		this.zhanjiContent = t;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 119;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.top_bg_i(),this._btn_topback_i(),this._Image2_i()];
		return t;
	};
	_proto.top_bg_i = function () {
		var t = new eui.Image();
		this.top_bg = t;
		t.height = 119;
		t.scale9Grid = new egret.Rectangle(4,0,4,119);
		t.source = "tz_hall_2_json.top_bg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 16;
		t.y = 19.5;
		t.skinName = zhanjiMainScene$Skin92;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 0;
		t.source = "tz_hall_2_json.title_fight";
		t.y = 30;
		return t;
	};
	return zhanjiMainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/loginScene.exml'] = window.loginScene = (function (_super) {
	__extends(loginScene, _super);
	var loginScene$Skin93 = 	(function (_super) {
		__extends(loginScene$Skin93, _super);
		function loginScene$Skin93() {
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
		var _proto = loginScene$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_weixinlogin";
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
		return loginScene$Skin93;
	})(eui.Skin);

	var loginScene$Skin94 = 	(function (_super) {
		__extends(loginScene$Skin94, _super);
		function loginScene$Skin94() {
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
		var _proto = loginScene$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_btn_xianliaologin";
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
		return loginScene$Skin94;
	})(eui.Skin);

	function loginScene() {
		_super.call(this);
		this.skinParts = ["_img_logo","_btn_wxLogin","_btn_xlLogin","_gp_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._img_logo_i(),this._gp_btn_i()];
	}
	var _proto = loginScene.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_logo_i = function () {
		var t = new eui.Image();
		this._img_logo = t;
		t.horizontalCenter = 0.5;
		t.source = "hall_logo_png";
		t.y = 300;
		return t;
	};
	_proto._gp_btn_i = function () {
		var t = new eui.Group();
		this._gp_btn = t;
		t.height = 65;
		t.horizontalCenter = 0.5;
		t.width = 485;
		t.y = 953.39;
		t.elementsContent = [this._btn_wxLogin_i(),this._btn_xlLogin_i()];
		return t;
	};
	_proto._btn_wxLogin_i = function () {
		var t = new eui.Button();
		this._btn_wxLogin = t;
		t.horizontalCenter = -140;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = loginScene$Skin93;
		return t;
	};
	_proto._btn_xlLogin_i = function () {
		var t = new eui.Button();
		this._btn_xlLogin = t;
		t.horizontalCenter = 140;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = loginScene$Skin94;
		return t;
	};
	return loginScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuRecord.exml'] = window.NiuniuRecordSkin = (function (_super) {
	__extends(NiuniuRecordSkin, _super);
	var NiuniuRecordSkin$Skin95 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin95, _super);
		function NiuniuRecordSkin$Skin95() {
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
		var _proto = NiuniuRecordSkin$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_record_btn_1";
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
		return NiuniuRecordSkin$Skin95;
	})(eui.Skin);

	var NiuniuRecordSkin$Skin96 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin96, _super);
		function NiuniuRecordSkin$Skin96() {
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
		var _proto = NiuniuRecordSkin$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nn_hall_json.hall_record_btn_2";
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
		return NiuniuRecordSkin$Skin96;
	})(eui.Skin);

	function NiuniuRecordSkin() {
		_super.call(this);
		this.skinParts = ["_txt_roompwd","_txt_time","_btn_gohall","_btn_sharescreen","_txt_player1_name","_img_player1_head_bg","_img_player1_head","_bitmap_player1_score","_gp_player1","_txt_player2_name","_img_player1_head_bg0","_img_player2_head","_bitmap_player2_score","_gp_player2","_txt_player3_name","_img_player1_head_bg1","_img_player3_head","_bitmap_player3_score","_gp_player3","_txt_player4_name","_img_player1_head_bg2","_img_player4_head","_bitmap_player4_score","_gp_player4","_txt_player5_name","_img_player1_head_bg3","_img_player5_head","_bitmap_player5_score","_gp_player5","_txt_player6_name","_img_player1_head_bg4","_img_player6_head","_bitmap_player6_score","_gp_player6","_txt_player7_name","_img_player1_head_bg5","_img_player7_head","_bitmap_player7_score","_gp_player7","_txt_player8_name","_img_player1_head_bg6","_img_player8_head","_bitmap_player8_score","_gp_player8","_txt_player9_name","_img_player1_head_bg7","_img_player9_head","_bitmap_player9_score","_gp_player9","_txt_player10_name","_img_player1_head_bg8","_img_player10_head","_bitmap_player10_score","_gp_player10","_txt_player11_name","_img_player1_head_bg9","_img_player11_head","_bitmap_player11_score","_gp_player11","_txt_player12_name","_img_player1_head_bg10","_img_player12_head","_bitmap_player12_score","_gp_player12","_txt_player13_name","_img_player1_head_bg11","_img_player13_head","_bitmap_player13_score","_gp_player13","_gp_main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._gp_main_i()];
	}
	var _proto = NiuniuRecordSkin.prototype;

	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.height = 1558;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._txt_roompwd_i(),this._txt_time_i(),this._btn_gohall_i(),this._btn_sharescreen_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1c1c1c;
		t.height = 1558;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "nn_item_json.hall_recard_topbg";
		t.x = 0;
		t.y = -24;
		return t;
	};
	_proto._txt_roompwd_i = function () {
		var t = new eui.Label();
		this._txt_roompwd = t;
		t.size = 23;
		t.text = "房号：999999";
		t.textColor = 0xeadeb6;
		t.x = 43.33;
		t.y = 106.3;
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.size = 23;
		t.text = "2018-12-30 12:59:59";
		t.textColor = 0xb2a7a7;
		t.x = 476;
		t.y = 105.97;
		return t;
	};
	_proto._btn_gohall_i = function () {
		var t = new eui.Button();
		this._btn_gohall = t;
		t.label = "";
		t.x = 434;
		t.y = 1191.05;
		t.skinName = NiuniuRecordSkin$Skin95;
		return t;
	};
	_proto._btn_sharescreen_i = function () {
		var t = new eui.Button();
		this._btn_sharescreen = t;
		t.label = "";
		t.x = 46;
		t.y = 1192.93;
		t.skinName = NiuniuRecordSkin$Skin96;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1074.96;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.width = 650;
		t.x = 58.41;
		t.y = 158.18;
		t.elementsContent = [this._gp_player1_i(),this._gp_player2_i(),this._gp_player3_i(),this._gp_player4_i(),this._gp_player5_i(),this._gp_player6_i(),this._gp_player7_i(),this._gp_player8_i(),this._gp_player9_i(),this._gp_player10_i(),this._gp_player11_i(),this._gp_player12_i(),this._gp_player13_i()];
		return t;
	};
	_proto._gp_player1_i = function () {
		var t = new eui.Group();
		this._gp_player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._txt_player1_name_i(),this._img_player1_head_bg_i(),this._img_player1_head_i(),this._bitmap_player1_score_i(),this._Image2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player1_name_i = function () {
		var t = new eui.Label();
		this._txt_player1_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player1_head_i = function () {
		var t = new eui.Image();
		this._img_player1_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player1_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player1_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_record_index1";
		t.x = 1.98;
		t.y = 18.41;
		return t;
	};
	_proto._gp_player2_i = function () {
		var t = new eui.Group();
		this._gp_player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 82;
		t.elementsContent = [this._Rect3_i(),this._txt_player2_name_i(),this._img_player1_head_bg0_i(),this._img_player2_head_i(),this._bitmap_player2_score_i(),this._Image3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player2_name_i = function () {
		var t = new eui.Label();
		this._txt_player2_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg0_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player2_head_i = function () {
		var t = new eui.Image();
		this._img_player2_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player2_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player2_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_record_index2";
		t.x = 1.98;
		t.y = 18.41;
		return t;
	};
	_proto._gp_player3_i = function () {
		var t = new eui.Group();
		this._gp_player3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 164;
		t.elementsContent = [this._Rect4_i(),this._txt_player3_name_i(),this._img_player1_head_bg1_i(),this._img_player3_head_i(),this._bitmap_player3_score_i(),this._Image4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player3_name_i = function () {
		var t = new eui.Label();
		this._txt_player3_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg1_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player3_head_i = function () {
		var t = new eui.Image();
		this._img_player3_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player3_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player3_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nn_hall_json.hall_record_index3";
		t.x = 1.98;
		t.y = 18.41;
		return t;
	};
	_proto._gp_player4_i = function () {
		var t = new eui.Group();
		this._gp_player4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 246;
		t.elementsContent = [this._Rect5_i(),this._txt_player4_name_i(),this._img_player1_head_bg2_i(),this._img_player4_head_i(),this._bitmap_player4_score_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player4_name_i = function () {
		var t = new eui.Label();
		this._txt_player4_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg2_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player4_head_i = function () {
		var t = new eui.Image();
		this._img_player4_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player4_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player4_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player5_i = function () {
		var t = new eui.Group();
		this._gp_player5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 328;
		t.elementsContent = [this._Rect6_i(),this._txt_player5_name_i(),this._img_player1_head_bg3_i(),this._img_player5_head_i(),this._bitmap_player5_score_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player5_name_i = function () {
		var t = new eui.Label();
		this._txt_player5_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg3_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player5_head_i = function () {
		var t = new eui.Image();
		this._img_player5_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player5_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player5_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player6_i = function () {
		var t = new eui.Group();
		this._gp_player6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 410;
		t.elementsContent = [this._Rect7_i(),this._txt_player6_name_i(),this._img_player1_head_bg4_i(),this._img_player6_head_i(),this._bitmap_player6_score_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player6_name_i = function () {
		var t = new eui.Label();
		this._txt_player6_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg4_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player6_head_i = function () {
		var t = new eui.Image();
		this._img_player6_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player6_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player6_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player7_i = function () {
		var t = new eui.Group();
		this._gp_player7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 492;
		t.elementsContent = [this._Rect8_i(),this._txt_player7_name_i(),this._img_player1_head_bg5_i(),this._img_player7_head_i(),this._bitmap_player7_score_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player7_name_i = function () {
		var t = new eui.Label();
		this._txt_player7_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg5_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player7_head_i = function () {
		var t = new eui.Image();
		this._img_player7_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player7_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player7_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player8_i = function () {
		var t = new eui.Group();
		this._gp_player8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 574;
		t.elementsContent = [this._Rect9_i(),this._txt_player8_name_i(),this._img_player1_head_bg6_i(),this._img_player8_head_i(),this._bitmap_player8_score_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player8_name_i = function () {
		var t = new eui.Label();
		this._txt_player8_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg6_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg6 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player8_head_i = function () {
		var t = new eui.Image();
		this._img_player8_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player8_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player8_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player9_i = function () {
		var t = new eui.Group();
		this._gp_player9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 656;
		t.elementsContent = [this._Rect10_i(),this._txt_player9_name_i(),this._img_player1_head_bg7_i(),this._img_player9_head_i(),this._bitmap_player9_score_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player9_name_i = function () {
		var t = new eui.Label();
		this._txt_player9_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg7_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg7 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player9_head_i = function () {
		var t = new eui.Image();
		this._img_player9_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player9_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player9_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player10_i = function () {
		var t = new eui.Group();
		this._gp_player10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 738;
		t.elementsContent = [this._Rect11_i(),this._txt_player10_name_i(),this._img_player1_head_bg8_i(),this._img_player10_head_i(),this._bitmap_player10_score_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player10_name_i = function () {
		var t = new eui.Label();
		this._txt_player10_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg8_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg8 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player10_head_i = function () {
		var t = new eui.Image();
		this._img_player10_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player10_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player10_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player11_i = function () {
		var t = new eui.Group();
		this._gp_player11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 820;
		t.elementsContent = [this._Rect12_i(),this._txt_player11_name_i(),this._img_player1_head_bg9_i(),this._img_player11_head_i(),this._bitmap_player11_score_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player11_name_i = function () {
		var t = new eui.Label();
		this._txt_player11_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg9_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg9 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player11_head_i = function () {
		var t = new eui.Image();
		this._img_player11_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player11_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player11_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player12_i = function () {
		var t = new eui.Group();
		this._gp_player12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 902;
		t.elementsContent = [this._Rect13_i(),this._txt_player12_name_i(),this._img_player1_head_bg10_i(),this._img_player12_head_i(),this._bitmap_player12_score_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player12_name_i = function () {
		var t = new eui.Label();
		this._txt_player12_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg10_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg10 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player12_head_i = function () {
		var t = new eui.Image();
		this._img_player12_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player12_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player12_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	_proto._gp_player13_i = function () {
		var t = new eui.Group();
		this._gp_player13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.left = 10;
		t.width = 630;
		t.y = 984;
		t.elementsContent = [this._Rect14_i(),this._txt_player13_name_i(),this._img_player1_head_bg11_i(),this._img_player13_head_i(),this._bitmap_player13_score_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x383838;
		t.height = 75;
		t.width = 630;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player13_name_i = function () {
		var t = new eui.Label();
		this._txt_player13_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 30;
		t.left = 149;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = 4.5;
		t.width = 250;
		return t;
	};
	_proto._img_player1_head_bg11_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg11 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 55.75;
		t.y = 5.22;
		return t;
	};
	_proto._img_player13_head_i = function () {
		var t = new eui.Image();
		this._img_player13_head = t;
		t.height = 80;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 58.96;
		t.y = 8.19;
		return t;
	};
	_proto._bitmap_player13_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player13_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.left = 446;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+9999";
		t.verticalCenter = 2;
		return t;
	};
	return NiuniuRecordSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuResult.exml'] = window.NiuniuResultSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuSkins.exml'] = window.NiuniuSkins = (function (_super) {
	__extends(NiuniuSkins, _super);
	var NiuniuSkins$Skin97 = 	(function (_super) {
		__extends(NiuniuSkins$Skin97, _super);
		function NiuniuSkins$Skin97() {
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
		var _proto = NiuniuSkins$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.game_icon3";
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
		return NiuniuSkins$Skin97;
	})(eui.Skin);

	var NiuniuSkins$Skin98 = 	(function (_super) {
		__extends(NiuniuSkins$Skin98, _super);
		function NiuniuSkins$Skin98() {
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
		var _proto = NiuniuSkins$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_1";
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
		return NiuniuSkins$Skin98;
	})(eui.Skin);

	var NiuniuSkins$Skin99 = 	(function (_super) {
		__extends(NiuniuSkins$Skin99, _super);
		function NiuniuSkins$Skin99() {
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
		var _proto = NiuniuSkins$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_2";
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
		return NiuniuSkins$Skin99;
	})(eui.Skin);

	var NiuniuSkins$Skin100 = 	(function (_super) {
		__extends(NiuniuSkins$Skin100, _super);
		function NiuniuSkins$Skin100() {
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
		var _proto = NiuniuSkins$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_4";
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
		return NiuniuSkins$Skin100;
	})(eui.Skin);

	var NiuniuSkins$Skin101 = 	(function (_super) {
		__extends(NiuniuSkins$Skin101, _super);
		function NiuniuSkins$Skin101() {
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
		var _proto = NiuniuSkins$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_buqiang";
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
		return NiuniuSkins$Skin101;
	})(eui.Skin);

	var NiuniuSkins$Skin102 = 	(function (_super) {
		__extends(NiuniuSkins$Skin102, _super);
		function NiuniuSkins$Skin102() {
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
		var _proto = NiuniuSkins$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_1";
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
		return NiuniuSkins$Skin102;
	})(eui.Skin);

	var NiuniuSkins$Skin103 = 	(function (_super) {
		__extends(NiuniuSkins$Skin103, _super);
		function NiuniuSkins$Skin103() {
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
		var _proto = NiuniuSkins$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_3";
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
		return NiuniuSkins$Skin103;
	})(eui.Skin);

	var NiuniuSkins$Skin104 = 	(function (_super) {
		__extends(NiuniuSkins$Skin104, _super);
		function NiuniuSkins$Skin104() {
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
		var _proto = NiuniuSkins$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_5";
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
		return NiuniuSkins$Skin104;
	})(eui.Skin);

	var NiuniuSkins$Skin105 = 	(function (_super) {
		__extends(NiuniuSkins$Skin105, _super);
		function NiuniuSkins$Skin105() {
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
		var _proto = NiuniuSkins$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_8";
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
		return NiuniuSkins$Skin105;
	})(eui.Skin);

	var NiuniuSkins$Skin106 = 	(function (_super) {
		__extends(NiuniuSkins$Skin106, _super);
		function NiuniuSkins$Skin106() {
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
		var _proto = NiuniuSkins$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_2";
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
		return NiuniuSkins$Skin106;
	})(eui.Skin);

	var NiuniuSkins$Skin107 = 	(function (_super) {
		__extends(NiuniuSkins$Skin107, _super);
		function NiuniuSkins$Skin107() {
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
		var _proto = NiuniuSkins$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_4";
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
		return NiuniuSkins$Skin107;
	})(eui.Skin);

	var NiuniuSkins$Skin108 = 	(function (_super) {
		__extends(NiuniuSkins$Skin108, _super);
		function NiuniuSkins$Skin108() {
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
		var _proto = NiuniuSkins$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_6";
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
		return NiuniuSkins$Skin108;
	})(eui.Skin);

	var NiuniuSkins$Skin109 = 	(function (_super) {
		__extends(NiuniuSkins$Skin109, _super);
		function NiuniuSkins$Skin109() {
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
		var _proto = NiuniuSkins$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_rank_10";
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
		return NiuniuSkins$Skin109;
	})(eui.Skin);

	var NiuniuSkins$Skin110 = 	(function (_super) {
		__extends(NiuniuSkins$Skin110, _super);
		function NiuniuSkins$Skin110() {
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
		var _proto = NiuniuSkins$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_gamestart";
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
		return NiuniuSkins$Skin110;
	})(eui.Skin);

	var NiuniuSkins$Skin111 = 	(function (_super) {
		__extends(NiuniuSkins$Skin111, _super);
		function NiuniuSkins$Skin111() {
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
		var _proto = NiuniuSkins$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nn_hall_json.nn_btn_showcard";
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
		return NiuniuSkins$Skin111;
	})(eui.Skin);

	var NiuniuSkins$Skin112 = 	(function (_super) {
		__extends(NiuniuSkins$Skin112, _super);
		function NiuniuSkins$Skin112() {
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
		var _proto = NiuniuSkins$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin112;
	})(eui.Skin);

	var NiuniuSkins$Skin113 = 	(function (_super) {
		__extends(NiuniuSkins$Skin113, _super);
		function NiuniuSkins$Skin113() {
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
		var _proto = NiuniuSkins$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.game_menu";
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
		return NiuniuSkins$Skin113;
	})(eui.Skin);

	var NiuniuSkins$Skin114 = 	(function (_super) {
		__extends(NiuniuSkins$Skin114, _super);
		function NiuniuSkins$Skin114() {
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
		var _proto = NiuniuSkins$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.game_icon2";
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
		return NiuniuSkins$Skin114;
	})(eui.Skin);

	var NiuniuSkins$Skin115 = 	(function (_super) {
		__extends(NiuniuSkins$Skin115, _super);
		function NiuniuSkins$Skin115() {
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
		var _proto = NiuniuSkins$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin115;
	})(eui.Skin);

	var NiuniuSkins$Skin116 = 	(function (_super) {
		__extends(NiuniuSkins$Skin116, _super);
		function NiuniuSkins$Skin116() {
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
		var _proto = NiuniuSkins$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin116;
	})(eui.Skin);

	var NiuniuSkins$Skin117 = 	(function (_super) {
		__extends(NiuniuSkins$Skin117, _super);
		function NiuniuSkins$Skin117() {
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
		var _proto = NiuniuSkins$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin117;
	})(eui.Skin);

	var NiuniuSkins$Skin118 = 	(function (_super) {
		__extends(NiuniuSkins$Skin118, _super);
		function NiuniuSkins$Skin118() {
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
		var _proto = NiuniuSkins$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin118;
	})(eui.Skin);

	var NiuniuSkins$Skin119 = 	(function (_super) {
		__extends(NiuniuSkins$Skin119, _super);
		function NiuniuSkins$Skin119() {
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
		var _proto = NiuniuSkins$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin119;
	})(eui.Skin);

	var NiuniuSkins$Skin120 = 	(function (_super) {
		__extends(NiuniuSkins$Skin120, _super);
		function NiuniuSkins$Skin120() {
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
		var _proto = NiuniuSkins$Skin120.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin120;
	})(eui.Skin);

	var NiuniuSkins$Skin121 = 	(function (_super) {
		__extends(NiuniuSkins$Skin121, _super);
		function NiuniuSkins$Skin121() {
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
		var _proto = NiuniuSkins$Skin121.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin121;
	})(eui.Skin);

	var NiuniuSkins$Skin122 = 	(function (_super) {
		__extends(NiuniuSkins$Skin122, _super);
		function NiuniuSkins$Skin122() {
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
		var _proto = NiuniuSkins$Skin122.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin122;
	})(eui.Skin);

	var NiuniuSkins$Skin123 = 	(function (_super) {
		__extends(NiuniuSkins$Skin123, _super);
		function NiuniuSkins$Skin123() {
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
		var _proto = NiuniuSkins$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin123;
	})(eui.Skin);

	var NiuniuSkins$Skin124 = 	(function (_super) {
		__extends(NiuniuSkins$Skin124, _super);
		function NiuniuSkins$Skin124() {
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
		var _proto = NiuniuSkins$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin124;
	})(eui.Skin);

	var NiuniuSkins$Skin125 = 	(function (_super) {
		__extends(NiuniuSkins$Skin125, _super);
		function NiuniuSkins$Skin125() {
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
		var _proto = NiuniuSkins$Skin125.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin125;
	})(eui.Skin);

	var NiuniuSkins$Skin126 = 	(function (_super) {
		__extends(NiuniuSkins$Skin126, _super);
		function NiuniuSkins$Skin126() {
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
		var _proto = NiuniuSkins$Skin126.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "niuniugamein_json.btn_sitdown";
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
		return NiuniuSkins$Skin126;
	})(eui.Skin);

	function NiuniuSkins() {
		_super.call(this);
		this.skinParts = ["niuniubg","_img_logo","_btn_chat","_img_playerlist","_gp_button","_img_player1_cardsdata_1","_img_player1_cardsdata_2","_img_player1_cardsdata_3","_img_player1_cardsdata_4","_img_player1_cardsdata_5","_img_player1_cardstypebg","_img_player1_cardstype","_bitmap_player1_niurank","_gp_player1_cardstype","_gp_player1_cardsdata","_btn_qiang_sure1","_btn_qiang_sure2","_btn_qiang_sure4","_btn_qiang_notsure","_gp_qiang_actionbtn","_btn_rank_1","_btn_rank_2","_btn_rank_3","_btn_rank_4","_gp_rankbtn3","_btn_rank_5","_btn_rank_6","_btn_rank_7","_btn_rank_8","_gp_rankbtn5","_btn_showstate_start","_btn_showcard","_gp_operatebtn","_img_player1_kuang","_img_player1_head_bg","_img_player1_head","_img_player1_offline","_img_player1_zhuang","_img_player1_ready","_txt_player1_name","_txt_player1_score","_bitmap_player1_rankvalue","_gp_player1_rank","_bitmap_player1_tapscore","_gp_player1_tapscore","_img_player1_qiangmark","_rect_headTouch1","_txt_player1_message","_gp_player1_message","_gp_player1_headinfo","_btn_player1_sitdown","_gp_player1_sitdown","_gp_player1","_btn_menu","_btn_message","_txt_jushu","_txt_basescore","_gp_menu","_img_player2_cardsdata_1","_img_player2_cardsdata_2","_img_player2_cardsdata_3","_img_player2_cardsdata_4","_img_player2_cardsdata_5","_img_player2_cardstypebg","_img_player2_cardstype","_bitmap_player2_niurank","_gp_player2_cardstype","_gp_player2_cardsdata","_img_player2_kuang","_img_player2_head_bg","_img_player2_head","_img_player2_offline","_img_player2_zhuang","_img_player2_ready","_txt_player2_name","_txt_player2_score","_bitmap_player2_rankvalue","_gp_player2_rank","_bitmap_player2_tapscore","_gp_player2_tapscore","_img_player2_qiangmark","_rect_headTouch2","_txt_player2_message","_gp_player2_message","_gp_player2_headinfo","_btn_player2_sitdown","_gp_player2_sitdown","_gp_player2","_img_player3_cardsdata_1","_img_player3_cardsdata_2","_img_player3_cardsdata_3","_img_player3_cardsdata_4","_img_player3_cardsdata_5","_img_player3_cardstypebg","_img_player3_cardstype","_bitmap_player3_niurank","_gp_player3_cardstype","_gp_player3_cardsdata","_img_player3_kuang","_img_player3_head_bg","_img_player3_head","_img_player3_offline","_img_player3_zhuang","_img_player3_ready","_txt_player3_name","_txt_player3_score","_bitmap_player3_rankvalue","_gp_player3_rank","_bitmap_player3_tapscore","_gp_player3_tapscore","_img_player3_qiangmark","_rect_headTouch3","_txt_player3_message","_gp_player3_message","_gp_player3_headinfo","_btn_player3_sitdown","_gp_player3_sitdown","_gp_player3","_img_player4_cardsdata_1","_img_player4_cardsdata_2","_img_player4_cardsdata_3","_img_player4_cardsdata_4","_img_player4_cardsdata_5","_img_player4_cardstypebg","_img_player4_cardstype","_bitmap_player4_niurank","_gp_player4_cardstype","_gp_player4_cardsdata","_img_player4_kuang","_img_player4_head_bg","_img_player4_head","_img_player4_offline","_img_player4_zhuang","_img_player4_ready","_txt_player4_name","_txt_player4_score","_bitmap_player4_rankvalue","_gp_player4_rank","_bitmap_player4_tapscore","_gp_player4_tapscore","_img_player4_qiangmark","_rect_headTouch4","_txt_player4_message","_gp_player4_message","_gp_player4_headinfo","_btn_player4_sitdown","_gp_player4_sitdown","_gp_player4","_img_player5_cardsdata_1","_img_player5_cardsdata_2","_img_player5_cardsdata_3","_img_player5_cardsdata_4","_img_player5_cardsdata_5","_img_player5_cardstypebg","_img_player5_cardstype","_bitmap_player5_niurank","_gp_player5_cardstype","_gp_player5_cardsdata","_img_player5_kuang","_img_player5_head_bg","_img_player5_head","_img_player5_offline","_img_player5_zhuang","_img_player5_ready","_txt_player5_name","_txt_player5_score","_bitmap_player5_rankvalue","_gp_player5_rank","_bitmap_player5_tapscore","_gp_player5_tapscore","_img_player5_qiangmark","_rect_headTouch5","_txt_player5_message","_gp_player5_message","_gp_player5_headinfo","_btn_player5_sitdown","_gp_player5_sitdown","_gp_player5","_img_player6_cardsdata_1","_img_player6_cardsdata_2","_img_player6_cardsdata_3","_img_player6_cardsdata_4","_img_player6_cardsdata_5","_img_player6_cardstypebg","_img_player6_cardstype","_bitmap_player6_niurank","_gp_player6_cardstype","_gp_player6_cardsdata","_img_player6_kuang","_rect_player6_head_bg","_img_player6_head","_img_player6_offline","_img_player6_zhuang","_img_player6_ready","_txt_player6_name","_txt_player6_score","_bitmap_player6_rankvalue","_gp_player6_rank","_bitmap_player6_tapscore","_gp_player6_tapscore","_img_player6_qiangmark","_rect_headTouch6","_txt_player6_message","_gp_player6_message","_gp_player6_headinfo","_btn_player6_sitdown","_gp_player6_sitdown","_gp_player6","_img_player7_cardsdata_1","_img_player7_cardsdata_2","_img_player7_cardsdata_3","_img_player7_cardsdata_4","_img_player7_cardsdata_5","_img_player7_cardstypebg","_img_player7_cardstype","_bitmap_player7_niurank","_gp_player7_cardstype","_gp_player7_cardsdata","_img_player7_kuang","_img_player7_head_bg","_img_player7_head","_img_player7_offline","_img_player7_zhuang","_img_player7_ready","_txt_player7_name","_txt_player7_score","_bitmap_player7_rankvalue","_gp_player7_rank","_bitmap_player7_tapscore","_gp_player7_tapscore","_img_player7_qiangmark","_rect_headTouch7","_txt_player7_message","_gp_player7_message","_gp_player7_headinfo","_btn_player7_sitdown","_gp_player7_sitdown","_gp_player7","_img_player8_cardsdata_1","_img_player8_cardsdata_2","_img_player8_cardsdata_3","_img_player8_cardsdata_4","_img_player8_cardsdata_5","_img_player8_cardstypebg","_img_player8_cardstype","_bitmap_player8_niurank","_gp_player8_cardstype","_gp_player8_cardsdata","_img_player8_kuang","_img_player8_head_bg","_img_player8_head","_img_player8_offline","_img_player8_zhuang","_img_player8_ready","_txt_player8_name","_txt_player8_score","_bitmap_player8_rankvalue","_gp_player8_rank","_bitmap_player8_tapscore","_gp_player8_tapscore","_img_player8_qiangmark","_rect_headTouch8","_txt_player8_message","_gp_player8_message","_gp_player8_headinfo","_btn_player8_sitdown","_gp_player8_sitdown","_gp_player8","_img_player9_cardsdata_1","_img_player9_cardsdata_2","_img_player9_cardsdata_3","_img_player9_cardsdata_4","_img_player9_cardsdata_5","_img_player9_cardstypebg","_img_player9_cardstype","_bitmap_player9_niurank","_gp_player9_cardstype","_gp_player9_cardsdata","_img_player9_kuang","_img_player9_head_bg","_img_player9_head","_img_player9_offline","_img_player9_zhuang","_img_player9_ready","_txt_player9_name","_txt_player9_score","_bitmap_player9_rankvalue","_gp_player9_rank","_bitmap_player9_tapscore","_gp_player9_tapscore","_img_player9_qiangmark","_rect_headTouch9","_txt_player9_message","_gp_player9_message","_gp_player9_headinfo","_btn_player9_sitdown","_gp_player9_sitdown","_gp_player9","_img_player10_cardsdata_1","_img_player10_cardsdata_2","_img_player10_cardsdata_3","_img_player10_cardsdata_4","_img_player10_cardsdata_5","_img_player10_cardstypebg","_img_player10_cardstype","_bitmap_player10_niurank","_gp_player10_cardstype","_gp_player10_cardsdata","_img_player10_kuang","_img_player10_head_bg","_img_player10_head","_img_player10_offline","_img_player10_zhuang","_img_player10_ready","_txt_player10_name","_txt_player10_score","_bitmap_player10_rankvalue","_gp_player10_rank","_bitmap_player10_tapscore","_gp_player10_tapscore","_img_player10_qiangmark","_rect_headTouch10","_txt_player10_message","_gp_player10_message","_gp_player10_headinfo","_btn_player10_sitdown","_gp_player10_sitdown","_gp_player10","_img_player11_cardsdata_1","_img_player11_cardsdata_2","_img_player11_cardsdata_3","_img_player11_cardsdata_4","_img_player11_cardsdata_5","_img_player11_cardstypebg","_img_player11_cardstype","_bitmap_player11_niurank","_gp_player11_cardstype","_gp_player11_cardsdata","_img_player11_kuang","_img_player11_head_bg","_img_player11_head","_img_player11_offline","_img_player11_zhuang","_img_player11_ready","_txt_player11_name","_txt_player11_score","_bitmap_player11_rankvalue","_gp_player11_rank","_bitmap_player11_tapscore","_gp_player11_tapscore","_img_player11_qiangmark","_rect_headTouch11","_txt_player11_message","_gp_player11_message","_gp_player11_headinfo","_btn_player11_sitdown","_gp_player11_sitdown","_gp_player11","_img_player12_cardsdata_1","_img_player12_cardsdata_2","_img_player12_cardsdata_3","_img_player12_cardsdata_4","_img_player12_cardsdata_5","_img_player12_cardstypebg","_img_player12_cardstype","_bitmap_player12_niurank","_gp_player12_cardstype","_gp_player12_cardsdata","_img_player12_kuang","_img_player12_head_bg","_img_player12_head","_img_player12_offline","_img_player12_zhuang","_img_player12_ready","_txt_player12_name","_txt_player12_score","_bitmap_player12_rankvalue","_gp_player12_rank","_bitmap_player12_tapscore","_gp_player12_tapscore","_img_player12_qiangmark","_rect_headTouch12","_txt_player12_message","_gp_player12_message","_gp_player12_headinfo","_btn_player12_sitdown","_gp_player12_sitdown","_gp_player12","_img_player13_cardsdata_1","_img_player13_cardsdata_2","_img_player13_cardsdata_3","_img_player13_cardsdata_4","_img_player13_cardsdata_5","_img_player13_cardstypebg","_img_player13_cardstype","_bitmap_player13_niurank","_gp_player13_cardstype","_gp_player13_cardsdata","_img_player13_kuang","_img_player13_head_bg","_img_player13_head","_img_player13_offline","_img_player13_zhuang","_img_player13_ready","_txt_player13_name","_txt_player13_score","_bitmap_player13_rankvalue","_gp_player13_rank","_bitmap_player13_tapscore","_gp_player13_tapscore","_img_player13_qiangmark","_rect_headTouch13","_txt_player13_message","_gp_player13_message","_gp_player13_headinfo","_btn_player13_sitdown","_gp_player13_sitdown","_gp_player13","_gp_main","_img_clickbg","_bitmap_clickvalue","_gp_showstate_click","_txt_showstate_tag","_gp_showstate_tap","_gp_showstate"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i(),this._gp_button_i(),this._gp_player1_i(),this._gp_menu_i(),this._gp_main_i(),this._gp_showstate_i()];
	}
	var _proto = NiuniuSkins.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1558;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.niuniubg_i(),this._img_logo_i()];
		return t;
	};
	_proto.niuniubg_i = function () {
		var t = new eui.Image();
		this.niuniubg = t;
		t.height = 1558;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gamebg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_logo_i = function () {
		var t = new eui.Image();
		this._img_logo = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_hall_json.game_logo";
		t.x = 260;
		t.y = 510;
		return t;
	};
	_proto._gp_button_i = function () {
		var t = new eui.Group();
		this._gp_button = t;
		t.anchorOffsetY = 0;
		t.height = 234;
		t.width = 720;
		t.x = 0;
		t.y = 1044;
		t.elementsContent = [this._Image1_i(),this._btn_chat_i(),this._img_playerlist_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "niuniugamein_json.game_button";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_chat_i = function () {
		var t = new eui.Button();
		this._btn_chat = t;
		t.label = "";
		t.x = 633;
		t.y = 163.32;
		t.skinName = NiuniuSkins$Skin97;
		return t;
	};
	_proto._img_playerlist_i = function () {
		var t = new eui.Image();
		this._img_playerlist = t;
		t.height = 76;
		t.horizontalCenter = -306.5;
		t.source = "niuniugamein_json.game_icon_4";
		t.verticalCenter = 68;
		t.width = 83;
		return t;
	};
	_proto._gp_player1_i = function () {
		var t = new eui.Group();
		this._gp_player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 233.34;
		t.width = 686.34;
		t.x = 19.34;
		t.y = 967.36;
		t.elementsContent = [this._gp_player1_cardsdata_i(),this._gp_qiang_actionbtn_i(),this._gp_rankbtn3_i(),this._gp_rankbtn5_i(),this._gp_operatebtn_i(),this._gp_player1_headinfo_i(),this._gp_player1_sitdown_i()];
		return t;
	};
	_proto._gp_player1_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player1_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150.18;
		t.width = 546.68;
		t.x = 127.02;
		t.y = 82.06;
		t.elementsContent = [this._img_player1_cardsdata_1_i(),this._img_player1_cardsdata_2_i(),this._img_player1_cardsdata_3_i(),this._img_player1_cardsdata_4_i(),this._img_player1_cardsdata_5_i(),this._gp_player1_cardstype_i()];
		return t;
	};
	_proto._img_player1_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_1 = t;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_2 = t;
		t.source = "poker1_json.card_2_13";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_3 = t;
		t.source = "poker1_json.card_2_13";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_4 = t;
		t.source = "poker1_json.card_2_13";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_5 = t;
		t.source = "poker2_json.card_bg";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto._gp_player1_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player1_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.width = 350;
		t.x = 95.03;
		t.y = 77.66;
		t.elementsContent = [this._img_player1_cardstypebg_i(),this._img_player1_cardstype_i(),this._bitmap_player1_niurank_i()];
		return t;
	};
	_proto._img_player1_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player1_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player1_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player1_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player1_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_qiang_actionbtn_i = function () {
		var t = new eui.Group();
		this._gp_qiang_actionbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.width = 628;
		t.x = 34;
		t.y = 5.34;
		t.elementsContent = [this._btn_qiang_sure1_i(),this._btn_qiang_sure2_i(),this._btn_qiang_sure4_i(),this._btn_qiang_notsure_i()];
		return t;
	};
	_proto._btn_qiang_sure1_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure1 = t;
		t.horizontalCenter = -236;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = NiuniuSkins$Skin98;
		return t;
	};
	_proto._btn_qiang_sure2_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure2 = t;
		t.horizontalCenter = -79.5;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = NiuniuSkins$Skin99;
		return t;
	};
	_proto._btn_qiang_sure4_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure4 = t;
		t.horizontalCenter = 76;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = NiuniuSkins$Skin100;
		return t;
	};
	_proto._btn_qiang_notsure_i = function () {
		var t = new eui.Button();
		this._btn_qiang_notsure = t;
		t.horizontalCenter = 233;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = NiuniuSkins$Skin101;
		return t;
	};
	_proto._gp_rankbtn3_i = function () {
		var t = new eui.Group();
		this._gp_rankbtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.visible = false;
		t.width = 629.33;
		t.x = 34;
		t.y = 5.34;
		t.elementsContent = [this._btn_rank_1_i(),this._btn_rank_2_i(),this._btn_rank_3_i(),this._btn_rank_4_i()];
		return t;
	};
	_proto._btn_rank_1_i = function () {
		var t = new eui.Button();
		this._btn_rank_1 = t;
		t.horizontalCenter = -236.66500000000002;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = NiuniuSkins$Skin102;
		return t;
	};
	_proto._btn_rank_2_i = function () {
		var t = new eui.Button();
		this._btn_rank_2 = t;
		t.horizontalCenter = -79.16500000000002;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = NiuniuSkins$Skin103;
		return t;
	};
	_proto._btn_rank_3_i = function () {
		var t = new eui.Button();
		this._btn_rank_3 = t;
		t.horizontalCenter = 76.83499999999998;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = NiuniuSkins$Skin104;
		return t;
	};
	_proto._btn_rank_4_i = function () {
		var t = new eui.Button();
		this._btn_rank_4 = t;
		t.horizontalCenter = 234.33499999999998;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = NiuniuSkins$Skin105;
		return t;
	};
	_proto._gp_rankbtn5_i = function () {
		var t = new eui.Group();
		this._gp_rankbtn5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.visible = false;
		t.width = 625.33;
		t.x = 34;
		t.y = 5.34;
		t.elementsContent = [this._btn_rank_5_i(),this._btn_rank_6_i(),this._btn_rank_7_i(),this._btn_rank_8_i()];
		return t;
	};
	_proto._btn_rank_5_i = function () {
		var t = new eui.Button();
		this._btn_rank_5 = t;
		t.horizontalCenter = -236.66500000000002;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = NiuniuSkins$Skin106;
		return t;
	};
	_proto._btn_rank_6_i = function () {
		var t = new eui.Button();
		this._btn_rank_6 = t;
		t.horizontalCenter = -78.16500000000002;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = NiuniuSkins$Skin107;
		return t;
	};
	_proto._btn_rank_7_i = function () {
		var t = new eui.Button();
		this._btn_rank_7 = t;
		t.horizontalCenter = 82.33499999999998;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = NiuniuSkins$Skin108;
		return t;
	};
	_proto._btn_rank_8_i = function () {
		var t = new eui.Button();
		this._btn_rank_8 = t;
		t.horizontalCenter = 236.33499999999998;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = NiuniuSkins$Skin109;
		return t;
	};
	_proto._gp_operatebtn_i = function () {
		var t = new eui.Group();
		this._gp_operatebtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.34;
		t.visible = false;
		t.width = 161.33;
		t.x = 253;
		t.y = 1.34;
		t.elementsContent = [this._btn_showstate_start_i(),this._btn_showcard_i()];
		return t;
	};
	_proto._btn_showstate_start_i = function () {
		var t = new eui.Button();
		this._btn_showstate_start = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 1.8349999999999937;
		t.label = "";
		t.verticalCenter = 0.3299999999999983;
		t.skinName = NiuniuSkins$Skin110;
		return t;
	};
	_proto._btn_showcard_i = function () {
		var t = new eui.Button();
		this._btn_showcard = t;
		t.horizontalCenter = 1.3349999999999937;
		t.label = "";
		t.verticalCenter = 1.3299999999999983;
		t.skinName = NiuniuSkins$Skin111;
		return t;
	};
	_proto._gp_player1_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player1_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.visible = false;
		t.width = 106.9;
		t.x = 10;
		t.y = 61.71;
		t.elementsContent = [this._img_player1_kuang_i(),this._img_player1_head_bg_i(),this._img_player1_head_i(),this._img_player1_offline_i(),this._img_player1_zhuang_i(),this._Rect1_i(),this._img_player1_ready_i(),this._txt_player1_name_i(),this._txt_player1_score_i(),this._gp_player1_rank_i(),this._gp_player1_tapscore_i(),this._img_player1_qiangmark_i(),this._rect_headTouch1_i(),this._gp_player1_message_i()];
		return t;
	};
	_proto._img_player1_kuang_i = function () {
		var t = new eui.Image();
		this._img_player1_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player1_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player1_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player1_head_i = function () {
		var t = new eui.Image();
		this._img_player1_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player1_offline_i = function () {
		var t = new eui.Image();
		this._img_player1_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player1_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player1_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = -9.5;
		t.y = 5.75;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player1_ready_i = function () {
		var t = new eui.Image();
		this._img_player1_ready = t;
		t.height = 28;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = 126;
		t.y = 80;
		return t;
	};
	_proto._txt_player1_name_i = function () {
		var t = new eui.Label();
		this._txt_player1_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player1_score_i = function () {
		var t = new eui.Label();
		this._txt_player1_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player1_rank_i = function () {
		var t = new eui.Group();
		this._gp_player1_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.width = 137.67;
		t.x = 152;
		t.y = -24.79;
		t.elementsContent = [this._bitmap_player1_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player1_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player1_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player1_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player1_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -7.69;
		t.y = 54.64;
		t.elementsContent = [this._bitmap_player1_tapscore_i()];
		return t;
	};
	_proto._bitmap_player1_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player1_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player1_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player1_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = 115;
		t.y = -23.5;
		return t;
	};
	_proto._rect_headTouch1_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch1 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player1_message_i = function () {
		var t = new eui.Group();
		this._gp_player1_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 69;
		t.y = -5.999999999999886;
		t.elementsContent = [this._Rect2_i(),this._txt_player1_message_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player1_message_i = function () {
		var t = new eui.Label();
		this._txt_player1_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player1_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player1_sitdown = t;
		t.height = 75;
		t.width = 75;
		t.x = 27;
		t.y = 92;
		t.elementsContent = [this._btn_player1_sitdown_i()];
		return t;
	};
	_proto._btn_player1_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player1_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin112;
		return t;
	};
	_proto._gp_menu_i = function () {
		var t = new eui.Group();
		this._gp_menu = t;
		t.anchorOffsetY = 0;
		t.height = 76.5;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this._btn_menu_i(),this._btn_message_i(),this._txt_jushu_i(),this._txt_basescore_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetY = 0;
		t.height = 76.5;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_menu_i = function () {
		var t = new eui.Button();
		this._btn_menu = t;
		t.horizontalCenter = -306;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0.75;
		t.skinName = NiuniuSkins$Skin113;
		return t;
	};
	_proto._btn_message_i = function () {
		var t = new eui.Button();
		this._btn_message = t;
		t.horizontalCenter = 277;
		t.label = "";
		t.verticalCenter = -2.25;
		t.skinName = NiuniuSkins$Skin114;
		return t;
	};
	_proto._txt_jushu_i = function () {
		var t = new eui.Label();
		this._txt_jushu = t;
		t.size = 26;
		t.text = "局数：30/30";
		t.x = 151.27;
		t.y = 40.84;
		return t;
	};
	_proto._txt_basescore_i = function () {
		var t = new eui.Label();
		this._txt_basescore = t;
		t.size = 26;
		t.text = "底分：5分";
		t.x = 383.09;
		t.y = 42.35;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.anchorOffsetY = 0;
		t.height = 884;
		t.width = 720;
		t.x = 0;
		t.y = 78;
		t.elementsContent = [this._gp_player2_i(),this._gp_player3_i(),this._gp_player4_i(),this._gp_player5_i(),this._gp_player6_i(),this._gp_player7_i(),this._gp_player8_i(),this._gp_player9_i(),this._gp_player10_i(),this._gp_player11_i(),this._gp_player12_i(),this._gp_player13_i()];
		return t;
	};
	_proto._gp_player2_i = function () {
		var t = new eui.Group();
		this._gp_player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.left = 14;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 9;
		t.y = 740;
		t.elementsContent = [this._gp_player2_cardsdata_i(),this._gp_player2_headinfo_i(),this._gp_player2_sitdown_i()];
		return t;
	};
	_proto._gp_player2_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player2_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 117.69;
		t.y = 44.67;
		t.elementsContent = [this._img_player2_cardsdata_1_i(),this._img_player2_cardsdata_2_i(),this._img_player2_cardsdata_3_i(),this._img_player2_cardsdata_4_i(),this._img_player2_cardsdata_5_i(),this._gp_player2_cardstype_i()];
		return t;
	};
	_proto._img_player2_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player2_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player2_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player2_cardstypebg_i(),this._img_player2_cardstype_i(),this._bitmap_player2_niurank_i()];
		return t;
	};
	_proto._img_player2_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player2_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player2_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player2_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player2_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player2_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player2_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 8.67;
		t.y = -13;
		t.elementsContent = [this._img_player2_kuang_i(),this._img_player2_head_bg_i(),this._img_player2_head_i(),this._img_player2_offline_i(),this._img_player2_zhuang_i(),this._Rect4_i(),this._img_player2_ready_i(),this._txt_player2_name_i(),this._txt_player2_score_i(),this._gp_player2_rank_i(),this._gp_player2_tapscore_i(),this._img_player2_qiangmark_i(),this._rect_headTouch2_i(),this._gp_player2_message_i()];
		return t;
	};
	_proto._img_player2_kuang_i = function () {
		var t = new eui.Image();
		this._img_player2_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player2_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player2_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player2_head_i = function () {
		var t = new eui.Image();
		this._img_player2_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player2_offline_i = function () {
		var t = new eui.Image();
		this._img_player2_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player2_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player2_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = -9.5;
		t.y = 5.75;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player2_ready_i = function () {
		var t = new eui.Image();
		this._img_player2_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = 120;
		t.y = 85;
		return t;
	};
	_proto._txt_player2_name_i = function () {
		var t = new eui.Label();
		this._txt_player2_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player2_score_i = function () {
		var t = new eui.Label();
		this._txt_player2_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player2_rank_i = function () {
		var t = new eui.Group();
		this._gp_player2_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.x = 154.66;
		t.y = 12.51;
		t.elementsContent = [this._bitmap_player2_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player2_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player2_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player2_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player2_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -13.62;
		t.y = 54.34;
		t.elementsContent = [this._bitmap_player2_tapscore_i()];
		return t;
	};
	_proto._bitmap_player2_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player2_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player2_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player2_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = 117.66;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch2_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch2 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player2_message_i = function () {
		var t = new eui.Group();
		this._gp_player2_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 61;
		t.y = 16.649999999999864;
		t.elementsContent = [this._Rect5_i(),this._txt_player2_message_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player2_message_i = function () {
		var t = new eui.Label();
		this._txt_player2_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player2_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player2_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 18;
		t.y = 55;
		t.elementsContent = [this._btn_player2_sitdown_i()];
		return t;
	};
	_proto._btn_player2_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player2_sitdown = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin115;
		return t;
	};
	_proto._gp_player3_i = function () {
		var t = new eui.Group();
		this._gp_player3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.right = 17;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 375;
		t.y = 740;
		t.elementsContent = [this._gp_player3_cardsdata_i(),this._gp_player3_headinfo_i(),this._gp_player3_sitdown_i()];
		return t;
	};
	_proto._gp_player3_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player3_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 14.35;
		t.y = 44.67;
		t.elementsContent = [this._img_player3_cardsdata_1_i(),this._img_player3_cardsdata_2_i(),this._img_player3_cardsdata_3_i(),this._img_player3_cardsdata_4_i(),this._img_player3_cardsdata_5_i(),this._gp_player3_cardstype_i()];
		return t;
	};
	_proto._img_player3_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player3_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player3_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player3_cardstypebg_i(),this._img_player3_cardstype_i(),this._bitmap_player3_niurank_i()];
		return t;
	};
	_proto._img_player3_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player3_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player3_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player3_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player3_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player3_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player3_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 276.45;
		t.y = -13;
		t.elementsContent = [this._img_player3_kuang_i(),this._img_player3_head_bg_i(),this._img_player3_head_i(),this._img_player3_offline_i(),this._img_player3_zhuang_i(),this._Rect6_i(),this._img_player3_ready_i(),this._txt_player3_name_i(),this._txt_player3_score_i(),this._gp_player3_rank_i(),this._gp_player3_tapscore_i(),this._img_player3_qiangmark_i(),this._rect_headTouch3_i(),this._gp_player3_message_i()];
		return t;
	};
	_proto._img_player3_kuang_i = function () {
		var t = new eui.Image();
		this._img_player3_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player3_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player3_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player3_head_i = function () {
		var t = new eui.Image();
		this._img_player3_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player3_offline_i = function () {
		var t = new eui.Image();
		this._img_player3_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player3_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player3_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = 68.28;
		t.y = 5.75;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player3_ready_i = function () {
		var t = new eui.Image();
		this._img_player3_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = -80;
		t.y = 85;
		return t;
	};
	_proto._txt_player3_name_i = function () {
		var t = new eui.Label();
		this._txt_player3_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player3_score_i = function () {
		var t = new eui.Label();
		this._txt_player3_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player3_rank_i = function () {
		var t = new eui.Group();
		this._gp_player3_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.right = 148.89999999999998;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.y = 14.73;
		t.elementsContent = [this._bitmap_player3_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player3_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player3_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player3_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player3_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -10.65;
		t.y = 55.83;
		t.elementsContent = [this._bitmap_player3_tapscore_i()];
		return t;
	};
	_proto._bitmap_player3_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player3_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player3_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player3_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = -44.56;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch3_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch3 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player3_message_i = function () {
		var t = new eui.Group();
		this._gp_player3_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -264.55999999999995;
		t.y = 16.649999999999864;
		t.elementsContent = [this._Rect7_i(),this._txt_player3_message_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player3_message_i = function () {
		var t = new eui.Label();
		this._txt_player3_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player3_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player3_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 285;
		t.y = 55;
		t.elementsContent = [this._btn_player3_sitdown_i()];
		return t;
	};
	_proto._btn_player3_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player3_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin116;
		return t;
	};
	_proto._gp_player4_i = function () {
		var t = new eui.Group();
		this._gp_player4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.left = 14;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 9;
		t.y = 596;
		t.elementsContent = [this._gp_player4_cardsdata_i(),this._gp_player4_headinfo_i(),this._gp_player4_sitdown_i()];
		return t;
	};
	_proto._gp_player4_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player4_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 117.69;
		t.y = 44.67;
		t.elementsContent = [this._img_player4_cardsdata_1_i(),this._img_player4_cardsdata_2_i(),this._img_player4_cardsdata_3_i(),this._img_player4_cardsdata_4_i(),this._img_player4_cardsdata_5_i(),this._gp_player4_cardstype_i()];
		return t;
	};
	_proto._img_player4_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player4_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player4_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player4_cardstypebg_i(),this._img_player4_cardstype_i(),this._bitmap_player4_niurank_i()];
		return t;
	};
	_proto._img_player4_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player4_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player4_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player4_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player4_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player4_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player4_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 8.67;
		t.y = -13;
		t.elementsContent = [this._img_player4_kuang_i(),this._img_player4_head_bg_i(),this._img_player4_head_i(),this._img_player4_offline_i(),this._img_player4_zhuang_i(),this._Rect8_i(),this._img_player4_ready_i(),this._txt_player4_name_i(),this._txt_player4_score_i(),this._gp_player4_rank_i(),this._gp_player4_tapscore_i(),this._img_player4_qiangmark_i(),this._rect_headTouch4_i(),this._gp_player4_message_i()];
		return t;
	};
	_proto._img_player4_kuang_i = function () {
		var t = new eui.Image();
		this._img_player4_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player4_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player4_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player4_head_i = function () {
		var t = new eui.Image();
		this._img_player4_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player4_offline_i = function () {
		var t = new eui.Image();
		this._img_player4_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player4_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player4_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = -9.5;
		t.y = 5.75;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player4_ready_i = function () {
		var t = new eui.Image();
		this._img_player4_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = 120;
		t.y = 85;
		return t;
	};
	_proto._txt_player4_name_i = function () {
		var t = new eui.Label();
		this._txt_player4_name = t;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		return t;
	};
	_proto._txt_player4_score_i = function () {
		var t = new eui.Label();
		this._txt_player4_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player4_rank_i = function () {
		var t = new eui.Group();
		this._gp_player4_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.x = 154.66;
		t.y = 12.51;
		t.elementsContent = [this._bitmap_player4_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player4_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player4_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player4_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player4_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -13.62;
		t.y = 54.34;
		t.elementsContent = [this._bitmap_player4_tapscore_i()];
		return t;
	};
	_proto._bitmap_player4_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player4_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player4_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player4_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = 117.66;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch4_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch4 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player4_message_i = function () {
		var t = new eui.Group();
		this._gp_player4_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 61;
		t.y = 16.649999999999977;
		t.elementsContent = [this._Rect9_i(),this._txt_player4_message_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player4_message_i = function () {
		var t = new eui.Label();
		this._txt_player4_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player4_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player4_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 18;
		t.y = 55;
		t.elementsContent = [this._btn_player4_sitdown_i()];
		return t;
	};
	_proto._btn_player4_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player4_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin117;
		return t;
	};
	_proto._gp_player5_i = function () {
		var t = new eui.Group();
		this._gp_player5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.right = 17;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 375;
		t.y = 596;
		t.elementsContent = [this._gp_player5_cardsdata_i(),this._gp_player5_headinfo_i(),this._gp_player5_sitdown_i()];
		return t;
	};
	_proto._gp_player5_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player5_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 14.35;
		t.y = 44.67;
		t.elementsContent = [this._img_player5_cardsdata_1_i(),this._img_player5_cardsdata_2_i(),this._img_player5_cardsdata_3_i(),this._img_player5_cardsdata_4_i(),this._img_player5_cardsdata_5_i(),this._gp_player5_cardstype_i()];
		return t;
	};
	_proto._img_player5_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player5_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player5_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player5_cardstypebg_i(),this._img_player5_cardstype_i(),this._bitmap_player5_niurank_i()];
		return t;
	};
	_proto._img_player5_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player5_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player5_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player5_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player5_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player5_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player5_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 276.45;
		t.y = -13;
		t.elementsContent = [this._img_player5_kuang_i(),this._img_player5_head_bg_i(),this._img_player5_head_i(),this._img_player5_offline_i(),this._img_player5_zhuang_i(),this._Rect10_i(),this._img_player5_ready_i(),this._txt_player5_name_i(),this._txt_player5_score_i(),this._gp_player5_rank_i(),this._gp_player5_tapscore_i(),this._img_player5_qiangmark_i(),this._rect_headTouch5_i(),this._gp_player5_message_i()];
		return t;
	};
	_proto._img_player5_kuang_i = function () {
		var t = new eui.Image();
		this._img_player5_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player5_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player5_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player5_head_i = function () {
		var t = new eui.Image();
		this._img_player5_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player5_offline_i = function () {
		var t = new eui.Image();
		this._img_player5_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player5_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player5_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = 68.28;
		t.y = 5.75;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player5_ready_i = function () {
		var t = new eui.Image();
		this._img_player5_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = -80;
		t.y = 85;
		return t;
	};
	_proto._txt_player5_name_i = function () {
		var t = new eui.Label();
		this._txt_player5_name = t;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		return t;
	};
	_proto._txt_player5_score_i = function () {
		var t = new eui.Label();
		this._txt_player5_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player5_rank_i = function () {
		var t = new eui.Group();
		this._gp_player5_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.right = 148.89999999999998;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.y = 14.73;
		t.elementsContent = [this._bitmap_player5_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player5_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player5_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player5_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player5_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -10.65;
		t.y = 55.83;
		t.elementsContent = [this._bitmap_player5_tapscore_i()];
		return t;
	};
	_proto._bitmap_player5_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player5_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player5_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player5_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = -44.56;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch5_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch5 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player5_message_i = function () {
		var t = new eui.Group();
		this._gp_player5_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -264.55999999999995;
		t.y = 16.649999999999977;
		t.elementsContent = [this._Rect11_i(),this._txt_player5_message_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player5_message_i = function () {
		var t = new eui.Label();
		this._txt_player5_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player5_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player5_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 285;
		t.y = 55;
		t.elementsContent = [this._btn_player5_sitdown_i()];
		return t;
	};
	_proto._btn_player5_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player5_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin118;
		return t;
	};
	_proto._gp_player6_i = function () {
		var t = new eui.Group();
		this._gp_player6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.left = 14;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 9;
		t.y = 450;
		t.elementsContent = [this._gp_player6_cardsdata_i(),this._gp_player6_headinfo_i(),this._gp_player6_sitdown_i()];
		return t;
	};
	_proto._gp_player6_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player6_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 117.69;
		t.y = 44.67;
		t.elementsContent = [this._img_player6_cardsdata_1_i(),this._img_player6_cardsdata_2_i(),this._img_player6_cardsdata_3_i(),this._img_player6_cardsdata_4_i(),this._img_player6_cardsdata_5_i(),this._gp_player6_cardstype_i()];
		return t;
	};
	_proto._img_player6_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player6_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player6_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player6_cardstypebg_i(),this._img_player6_cardstype_i(),this._bitmap_player6_niurank_i()];
		return t;
	};
	_proto._img_player6_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player6_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player6_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player6_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player6_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player6_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player6_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 8.67;
		t.y = -13;
		t.elementsContent = [this._img_player6_kuang_i(),this._rect_player6_head_bg_i(),this._img_player6_head_i(),this._img_player6_offline_i(),this._img_player6_zhuang_i(),this._Rect12_i(),this._img_player6_ready_i(),this._txt_player6_name_i(),this._txt_player6_score_i(),this._gp_player6_rank_i(),this._gp_player6_tapscore_i(),this._img_player6_qiangmark_i(),this._rect_headTouch6_i(),this._gp_player6_message_i()];
		return t;
	};
	_proto._img_player6_kuang_i = function () {
		var t = new eui.Image();
		this._img_player6_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._rect_player6_head_bg_i = function () {
		var t = new eui.Image();
		this._rect_player6_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player6_head_i = function () {
		var t = new eui.Image();
		this._img_player6_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player6_offline_i = function () {
		var t = new eui.Image();
		this._img_player6_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player6_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player6_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = -9.5;
		t.y = 5.75;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player6_ready_i = function () {
		var t = new eui.Image();
		this._img_player6_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = 120;
		t.y = 85;
		return t;
	};
	_proto._txt_player6_name_i = function () {
		var t = new eui.Label();
		this._txt_player6_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player6_score_i = function () {
		var t = new eui.Label();
		this._txt_player6_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player6_rank_i = function () {
		var t = new eui.Group();
		this._gp_player6_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.x = 154.66;
		t.y = 12.51;
		t.elementsContent = [this._bitmap_player6_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player6_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player6_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player6_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player6_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -13.62;
		t.y = 54.34;
		t.elementsContent = [this._bitmap_player6_tapscore_i()];
		return t;
	};
	_proto._bitmap_player6_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player6_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player6_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player6_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = 117.66;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch6_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch6 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player6_message_i = function () {
		var t = new eui.Group();
		this._gp_player6_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 61;
		t.y = 16.649999999999864;
		t.elementsContent = [this._Rect13_i(),this._txt_player6_message_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player6_message_i = function () {
		var t = new eui.Label();
		this._txt_player6_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player6_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player6_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 18;
		t.y = 55;
		t.elementsContent = [this._btn_player6_sitdown_i()];
		return t;
	};
	_proto._btn_player6_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player6_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin119;
		return t;
	};
	_proto._gp_player7_i = function () {
		var t = new eui.Group();
		this._gp_player7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.right = 17;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 375;
		t.y = 450;
		t.elementsContent = [this._gp_player7_cardsdata_i(),this._gp_player7_headinfo_i(),this._gp_player7_sitdown_i()];
		return t;
	};
	_proto._gp_player7_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player7_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 14.35;
		t.y = 44.67;
		t.elementsContent = [this._img_player7_cardsdata_1_i(),this._img_player7_cardsdata_2_i(),this._img_player7_cardsdata_3_i(),this._img_player7_cardsdata_4_i(),this._img_player7_cardsdata_5_i(),this._gp_player7_cardstype_i()];
		return t;
	};
	_proto._img_player7_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player7_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player7_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player7_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player7_cardstypebg_i(),this._img_player7_cardstype_i(),this._bitmap_player7_niurank_i()];
		return t;
	};
	_proto._img_player7_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player7_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player7_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player7_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player7_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player7_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player7_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player7_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 276.45;
		t.y = -13;
		t.elementsContent = [this._img_player7_kuang_i(),this._img_player7_head_bg_i(),this._img_player7_head_i(),this._img_player7_offline_i(),this._img_player7_zhuang_i(),this._Rect14_i(),this._img_player7_ready_i(),this._txt_player7_name_i(),this._txt_player7_score_i(),this._gp_player7_rank_i(),this._gp_player7_tapscore_i(),this._img_player7_qiangmark_i(),this._rect_headTouch7_i(),this._gp_player7_message_i()];
		return t;
	};
	_proto._img_player7_kuang_i = function () {
		var t = new eui.Image();
		this._img_player7_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player7_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player7_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player7_head_i = function () {
		var t = new eui.Image();
		this._img_player7_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player7_offline_i = function () {
		var t = new eui.Image();
		this._img_player7_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player7_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player7_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = 68.28;
		t.y = 5.75;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player7_ready_i = function () {
		var t = new eui.Image();
		this._img_player7_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = -80;
		t.y = 85;
		return t;
	};
	_proto._txt_player7_name_i = function () {
		var t = new eui.Label();
		this._txt_player7_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player7_score_i = function () {
		var t = new eui.Label();
		this._txt_player7_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player7_rank_i = function () {
		var t = new eui.Group();
		this._gp_player7_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.right = 148.89999999999998;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.y = 14.73;
		t.elementsContent = [this._bitmap_player7_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player7_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player7_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player7_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player7_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -10.65;
		t.y = 55.83;
		t.elementsContent = [this._bitmap_player7_tapscore_i()];
		return t;
	};
	_proto._bitmap_player7_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player7_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player7_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player7_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = -44.56;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch7_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch7 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player7_message_i = function () {
		var t = new eui.Group();
		this._gp_player7_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -264.55999999999995;
		t.y = 16.649999999999864;
		t.elementsContent = [this._Rect15_i(),this._txt_player7_message_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player7_message_i = function () {
		var t = new eui.Label();
		this._txt_player7_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player7_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player7_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 285;
		t.y = 55;
		t.elementsContent = [this._btn_player7_sitdown_i()];
		return t;
	};
	_proto._btn_player7_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player7_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin120;
		return t;
	};
	_proto._gp_player8_i = function () {
		var t = new eui.Group();
		this._gp_player8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.left = 14;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 9;
		t.y = 306;
		t.elementsContent = [this._gp_player8_cardsdata_i(),this._gp_player8_headinfo_i(),this._gp_player8_sitdown_i()];
		return t;
	};
	_proto._gp_player8_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player8_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 117.69;
		t.y = 44.67;
		t.elementsContent = [this._img_player8_cardsdata_1_i(),this._img_player8_cardsdata_2_i(),this._img_player8_cardsdata_3_i(),this._img_player8_cardsdata_4_i(),this._img_player8_cardsdata_5_i(),this._gp_player8_cardstype_i()];
		return t;
	};
	_proto._img_player8_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player8_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player8_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player8_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player8_cardstypebg_i(),this._img_player8_cardstype_i(),this._bitmap_player8_niurank_i()];
		return t;
	};
	_proto._img_player8_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player8_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player8_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player8_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player8_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player8_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player8_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player8_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 8.67;
		t.y = -13;
		t.elementsContent = [this._img_player8_kuang_i(),this._img_player8_head_bg_i(),this._img_player8_head_i(),this._img_player8_offline_i(),this._img_player8_zhuang_i(),this._Rect16_i(),this._img_player8_ready_i(),this._txt_player8_name_i(),this._txt_player8_score_i(),this._gp_player8_rank_i(),this._gp_player8_tapscore_i(),this._img_player8_qiangmark_i(),this._rect_headTouch8_i(),this._gp_player8_message_i()];
		return t;
	};
	_proto._img_player8_kuang_i = function () {
		var t = new eui.Image();
		this._img_player8_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player8_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player8_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player8_head_i = function () {
		var t = new eui.Image();
		this._img_player8_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player8_offline_i = function () {
		var t = new eui.Image();
		this._img_player8_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player8_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player8_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = -9.5;
		t.y = 5.75;
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player8_ready_i = function () {
		var t = new eui.Image();
		this._img_player8_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = 120;
		t.y = 85;
		return t;
	};
	_proto._txt_player8_name_i = function () {
		var t = new eui.Label();
		this._txt_player8_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player8_score_i = function () {
		var t = new eui.Label();
		this._txt_player8_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player8_rank_i = function () {
		var t = new eui.Group();
		this._gp_player8_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.x = 154.66;
		t.y = 12.51;
		t.elementsContent = [this._bitmap_player8_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player8_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player8_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player8_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player8_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -13.62;
		t.y = 54.34;
		t.elementsContent = [this._bitmap_player8_tapscore_i()];
		return t;
	};
	_proto._bitmap_player8_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player8_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player8_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player8_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = 117.66;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch8_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch8 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player8_message_i = function () {
		var t = new eui.Group();
		this._gp_player8_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 61;
		t.y = 16.650000000000034;
		t.elementsContent = [this._Rect17_i(),this._txt_player8_message_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player8_message_i = function () {
		var t = new eui.Label();
		this._txt_player8_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player8_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player8_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 18;
		t.y = 55;
		t.elementsContent = [this._btn_player8_sitdown_i()];
		return t;
	};
	_proto._btn_player8_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player8_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin121;
		return t;
	};
	_proto._gp_player9_i = function () {
		var t = new eui.Group();
		this._gp_player9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.right = 17;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 375;
		t.y = 306;
		t.elementsContent = [this._gp_player9_cardsdata_i(),this._gp_player9_headinfo_i(),this._gp_player9_sitdown_i()];
		return t;
	};
	_proto._gp_player9_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player9_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 14.35;
		t.y = 44.67;
		t.elementsContent = [this._img_player9_cardsdata_1_i(),this._img_player9_cardsdata_2_i(),this._img_player9_cardsdata_3_i(),this._img_player9_cardsdata_4_i(),this._img_player9_cardsdata_5_i(),this._gp_player9_cardstype_i()];
		return t;
	};
	_proto._img_player9_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player9_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player9_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player9_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player9_cardstypebg_i(),this._img_player9_cardstype_i(),this._bitmap_player9_niurank_i()];
		return t;
	};
	_proto._img_player9_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player9_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player9_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player9_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player9_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player9_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player9_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player9_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 276.45;
		t.y = -13;
		t.elementsContent = [this._img_player9_kuang_i(),this._img_player9_head_bg_i(),this._img_player9_head_i(),this._img_player9_offline_i(),this._img_player9_zhuang_i(),this._Rect18_i(),this._img_player9_ready_i(),this._txt_player9_name_i(),this._txt_player9_score_i(),this._gp_player9_rank_i(),this._gp_player9_tapscore_i(),this._img_player9_qiangmark_i(),this._rect_headTouch9_i(),this._gp_player9_message_i()];
		return t;
	};
	_proto._img_player9_kuang_i = function () {
		var t = new eui.Image();
		this._img_player9_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player9_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player9_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player9_head_i = function () {
		var t = new eui.Image();
		this._img_player9_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player9_offline_i = function () {
		var t = new eui.Image();
		this._img_player9_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player9_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player9_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = 68.28;
		t.y = 5.75;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player9_ready_i = function () {
		var t = new eui.Image();
		this._img_player9_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = -80;
		t.y = 85;
		return t;
	};
	_proto._txt_player9_name_i = function () {
		var t = new eui.Label();
		this._txt_player9_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player9_score_i = function () {
		var t = new eui.Label();
		this._txt_player9_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player9_rank_i = function () {
		var t = new eui.Group();
		this._gp_player9_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.right = 148.89999999999998;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.y = 14.73;
		t.elementsContent = [this._bitmap_player9_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player9_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player9_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player9_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player9_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -10.65;
		t.y = 55.83;
		t.elementsContent = [this._bitmap_player9_tapscore_i()];
		return t;
	};
	_proto._bitmap_player9_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player9_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player9_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player9_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = -44.56;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch9_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch9 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player9_message_i = function () {
		var t = new eui.Group();
		this._gp_player9_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -264.55999999999995;
		t.y = 16.650000000000034;
		t.elementsContent = [this._Rect19_i(),this._txt_player9_message_i()];
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player9_message_i = function () {
		var t = new eui.Label();
		this._txt_player9_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player9_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player9_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 285;
		t.y = 55;
		t.elementsContent = [this._btn_player9_sitdown_i()];
		return t;
	};
	_proto._btn_player9_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player9_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin122;
		return t;
	};
	_proto._gp_player10_i = function () {
		var t = new eui.Group();
		this._gp_player10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 9;
		t.y = 160;
		t.elementsContent = [this._gp_player10_cardsdata_i(),this._gp_player10_headinfo_i(),this._gp_player10_sitdown_i()];
		return t;
	};
	_proto._gp_player10_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player10_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 117.69;
		t.y = 44.67;
		t.elementsContent = [this._img_player10_cardsdata_1_i(),this._img_player10_cardsdata_2_i(),this._img_player10_cardsdata_3_i(),this._img_player10_cardsdata_4_i(),this._img_player10_cardsdata_5_i(),this._gp_player10_cardstype_i()];
		return t;
	};
	_proto._img_player10_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player10_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player10_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player10_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player10_cardstypebg_i(),this._img_player10_cardstype_i(),this._bitmap_player10_niurank_i()];
		return t;
	};
	_proto._img_player10_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player10_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player10_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player10_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player10_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player10_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player10_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player10_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 8.67;
		t.y = -13;
		t.elementsContent = [this._img_player10_kuang_i(),this._img_player10_head_bg_i(),this._img_player10_head_i(),this._img_player10_offline_i(),this._img_player10_zhuang_i(),this._Rect20_i(),this._img_player10_ready_i(),this._txt_player10_name_i(),this._txt_player10_score_i(),this._gp_player10_rank_i(),this._gp_player10_tapscore_i(),this._img_player10_qiangmark_i(),this._rect_headTouch10_i(),this._gp_player10_message_i()];
		return t;
	};
	_proto._img_player10_kuang_i = function () {
		var t = new eui.Image();
		this._img_player10_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player10_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player10_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player10_head_i = function () {
		var t = new eui.Image();
		this._img_player10_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player10_offline_i = function () {
		var t = new eui.Image();
		this._img_player10_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player10_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player10_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = -9.5;
		t.y = 5.75;
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player10_ready_i = function () {
		var t = new eui.Image();
		this._img_player10_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = 120;
		t.y = 85;
		return t;
	};
	_proto._txt_player10_name_i = function () {
		var t = new eui.Label();
		this._txt_player10_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player10_score_i = function () {
		var t = new eui.Label();
		this._txt_player10_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player10_rank_i = function () {
		var t = new eui.Group();
		this._gp_player10_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.x = 154.66;
		t.y = 12.51;
		t.elementsContent = [this._bitmap_player10_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player10_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player10_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player10_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player10_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -13.62;
		t.y = 54.34;
		t.elementsContent = [this._bitmap_player10_tapscore_i()];
		return t;
	};
	_proto._bitmap_player10_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player10_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player10_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player10_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = 117.66;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch10_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch10 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player10_message_i = function () {
		var t = new eui.Group();
		this._gp_player10_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 61;
		t.y = 16.649999999999977;
		t.elementsContent = [this._Rect21_i(),this._txt_player10_message_i()];
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player10_message_i = function () {
		var t = new eui.Label();
		this._txt_player10_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player10_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player10_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.visible = false;
		t.width = 75;
		t.x = 18;
		t.y = 55;
		t.elementsContent = [this._btn_player10_sitdown_i()];
		return t;
	};
	_proto._btn_player10_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player10_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin123;
		return t;
	};
	_proto._gp_player11_i = function () {
		var t = new eui.Group();
		this._gp_player11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 375;
		t.y = 160;
		t.elementsContent = [this._gp_player11_cardsdata_i(),this._gp_player11_headinfo_i(),this._gp_player11_sitdown_i()];
		return t;
	};
	_proto._gp_player11_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player11_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 14.35;
		t.y = 44.67;
		t.elementsContent = [this._img_player11_cardsdata_1_i(),this._img_player11_cardsdata_2_i(),this._img_player11_cardsdata_3_i(),this._img_player11_cardsdata_4_i(),this._img_player11_cardsdata_5_i(),this._gp_player11_cardstype_i()];
		return t;
	};
	_proto._img_player11_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player11_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player11_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player11_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player11_cardstypebg_i(),this._img_player11_cardstype_i(),this._bitmap_player11_niurank_i()];
		return t;
	};
	_proto._img_player11_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player11_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player11_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player11_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player11_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player11_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player11_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player11_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 276.45;
		t.y = -13;
		t.elementsContent = [this._img_player11_kuang_i(),this._img_player11_head_bg_i(),this._img_player11_head_i(),this._img_player11_offline_i(),this._img_player11_zhuang_i(),this._Rect22_i(),this._img_player11_ready_i(),this._txt_player11_name_i(),this._txt_player11_score_i(),this._gp_player11_rank_i(),this._gp_player11_tapscore_i(),this._img_player11_qiangmark_i(),this._rect_headTouch11_i(),this._gp_player11_message_i()];
		return t;
	};
	_proto._img_player11_kuang_i = function () {
		var t = new eui.Image();
		this._img_player11_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player11_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player11_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player11_head_i = function () {
		var t = new eui.Image();
		this._img_player11_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player11_offline_i = function () {
		var t = new eui.Image();
		this._img_player11_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player11_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player11_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = 68.28;
		t.y = 5.75;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player11_ready_i = function () {
		var t = new eui.Image();
		this._img_player11_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = -80;
		t.y = 85;
		return t;
	};
	_proto._txt_player11_name_i = function () {
		var t = new eui.Label();
		this._txt_player11_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player11_score_i = function () {
		var t = new eui.Label();
		this._txt_player11_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player11_rank_i = function () {
		var t = new eui.Group();
		this._gp_player11_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.right = 148.89999999999998;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.y = 14.73;
		t.elementsContent = [this._bitmap_player11_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player11_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player11_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player11_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player11_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -10.65;
		t.y = 55.83;
		t.elementsContent = [this._bitmap_player11_tapscore_i()];
		return t;
	};
	_proto._bitmap_player11_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player11_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player11_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player11_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = -44.56;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch11_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch11 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player11_message_i = function () {
		var t = new eui.Group();
		this._gp_player11_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -264.56;
		t.y = 16.649999999999977;
		t.elementsContent = [this._Rect23_i(),this._txt_player11_message_i()];
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player11_message_i = function () {
		var t = new eui.Label();
		this._txt_player11_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player11_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player11_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 285;
		t.y = 55;
		t.elementsContent = [this._btn_player11_sitdown_i()];
		return t;
	};
	_proto._btn_player11_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player11_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin124;
		return t;
	};
	_proto._gp_player12_i = function () {
		var t = new eui.Group();
		this._gp_player12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.left = 14;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 9;
		t.y = 13;
		t.elementsContent = [this._gp_player12_cardsdata_i(),this._gp_player12_headinfo_i(),this._gp_player12_sitdown_i()];
		return t;
	};
	_proto._gp_player12_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player12_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 117.69;
		t.y = 44.67;
		t.elementsContent = [this._img_player12_cardsdata_1_i(),this._img_player12_cardsdata_2_i(),this._img_player12_cardsdata_3_i(),this._img_player12_cardsdata_4_i(),this._img_player12_cardsdata_5_i(),this._gp_player12_cardstype_i()];
		return t;
	};
	_proto._img_player12_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player12_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player12_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player12_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player12_cardstypebg_i(),this._img_player12_cardstype_i(),this._bitmap_player12_niurank_i()];
		return t;
	};
	_proto._img_player12_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player12_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player12_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player12_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player12_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player12_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player12_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player12_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 8.67;
		t.y = -13;
		t.elementsContent = [this._img_player12_kuang_i(),this._img_player12_head_bg_i(),this._img_player12_head_i(),this._img_player12_offline_i(),this._img_player12_zhuang_i(),this._Rect24_i(),this._img_player12_ready_i(),this._txt_player12_name_i(),this._txt_player12_score_i(),this._gp_player12_rank_i(),this._gp_player12_tapscore_i(),this._img_player12_qiangmark_i(),this._rect_headTouch12_i(),this._gp_player12_message_i()];
		return t;
	};
	_proto._img_player12_kuang_i = function () {
		var t = new eui.Image();
		this._img_player12_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player12_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player12_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player12_head_i = function () {
		var t = new eui.Image();
		this._img_player12_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player12_offline_i = function () {
		var t = new eui.Image();
		this._img_player12_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player12_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player12_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = -9.5;
		t.y = 5.75;
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player12_ready_i = function () {
		var t = new eui.Image();
		this._img_player12_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = 120;
		t.y = 85;
		return t;
	};
	_proto._txt_player12_name_i = function () {
		var t = new eui.Label();
		this._txt_player12_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player12_score_i = function () {
		var t = new eui.Label();
		this._txt_player12_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player12_rank_i = function () {
		var t = new eui.Group();
		this._gp_player12_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.x = 154.66;
		t.y = 12.51;
		t.elementsContent = [this._bitmap_player12_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player12_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player12_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player12_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player12_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -13.62;
		t.y = 54.34;
		t.elementsContent = [this._bitmap_player12_tapscore_i()];
		return t;
	};
	_proto._bitmap_player12_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player12_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player12_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player12_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = 117.66;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch12_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch12 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player12_message_i = function () {
		var t = new eui.Group();
		this._gp_player12_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 61;
		t.y = 16.650000000000006;
		t.elementsContent = [this._Rect25_i(),this._txt_player12_message_i()];
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player12_message_i = function () {
		var t = new eui.Label();
		this._txt_player12_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player12_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player12_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 18;
		t.y = 55;
		t.elementsContent = [this._btn_player12_sitdown_i()];
		return t;
	};
	_proto._btn_player12_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player12_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin125;
		return t;
	};
	_proto._gp_player13_i = function () {
		var t = new eui.Group();
		this._gp_player13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154.66;
		t.right = 17;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 390.34;
		t.x = 375;
		t.y = 13;
		t.elementsContent = [this._gp_player13_cardsdata_i(),this._gp_player13_headinfo_i(),this._gp_player13_sitdown_i()];
		return t;
	};
	_proto._gp_player13_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player13_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.51;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 290.68;
		t.x = 14.35;
		t.y = 44.67;
		t.elementsContent = [this._img_player13_cardsdata_1_i(),this._img_player13_cardsdata_2_i(),this._img_player13_cardsdata_3_i(),this._img_player13_cardsdata_4_i(),this._img_player13_cardsdata_5_i(),this._gp_player13_cardstype_i()];
		return t;
	};
	_proto._img_player13_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker1_json.card_2_13";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player13_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "poker2_json.card_bg";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._gp_player13_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player13_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 350;
		t.x = 1.28;
		t.y = 65.42;
		t.elementsContent = [this._img_player13_cardstypebg_i(),this._img_player13_cardstype_i(),this._bitmap_player13_niurank_i()];
		return t;
	};
	_proto._img_player13_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player13_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniugamein_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player13_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player13_cardstype = t;
		t.right = 156;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.nn_txt_n15";
		t.verticalCenter = -1;
		return t;
	};
	_proto._bitmap_player13_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player13_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 204;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._gp_player13_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player13_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.7;
		t.width = 106.9;
		t.x = 276.45;
		t.y = -13;
		t.elementsContent = [this._img_player13_kuang_i(),this._img_player13_head_bg_i(),this._img_player13_head_i(),this._img_player13_offline_i(),this._img_player13_zhuang_i(),this._Rect26_i(),this._img_player13_ready_i(),this._txt_player13_name_i(),this._txt_player13_score_i(),this._gp_player13_rank_i(),this._gp_player13_tapscore_i(),this._img_player13_qiangmark_i(),this._rect_headTouch13_i(),this._gp_player13_message_i()];
		return t;
	};
	_proto._img_player13_kuang_i = function () {
		var t = new eui.Image();
		this._img_player13_kuang = t;
		t.source = "niuniugamein_json.game_zhuang_bg";
		t.x = 1.33;
		t.y = 20;
		return t;
	};
	_proto._img_player13_head_bg_i = function () {
		var t = new eui.Image();
		this._img_player13_head_bg = t;
		t.source = "niuniugamein_json.game_head_bg1";
		t.x = 10.3;
		t.y = 24.93;
		return t;
	};
	_proto._img_player13_head_i = function () {
		var t = new eui.Image();
		this._img_player13_head = t;
		t.height = 80;
		t.source = "nn_hall_json.hall_head_default";
		t.width = 80;
		t.x = 13.51;
		t.y = 27.9;
		return t;
	};
	_proto._img_player13_offline_i = function () {
		var t = new eui.Image();
		this._img_player13_offline = t;
		t.source = "niuniugamein_json.game_offline";
		t.x = 13.7;
		t.y = 28.2;
		return t;
	};
	_proto._img_player13_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player13_zhuang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniugamein_json.game_zhuang";
		t.x = 68.28;
		t.y = 5.75;
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.6;
		t.width = 89;
		t.x = 9.1;
		t.y = 116.4;
		return t;
	};
	_proto._img_player13_ready_i = function () {
		var t = new eui.Image();
		this._img_player13_ready = t;
		t.height = 28;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.source = "niuniugamein_json.game_ready";
		t.width = 59;
		t.x = -80;
		t.y = 85;
		return t;
	};
	_proto._txt_player13_name_i = function () {
		var t = new eui.Label();
		this._txt_player13_name = t;
		t.height = 20;
		t.horizontalCenter = 3.049999999999997;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 17;
		t.text = "魂族网络科";
		t.verticalCenter = 46.150000000000006;
		t.width = 90;
		return t;
	};
	_proto._txt_player13_score_i = function () {
		var t = new eui.Label();
		this._txt_player13_score = t;
		t.horizontalCenter = 1.5499999999999972;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 17;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 67.15;
		return t;
	};
	_proto._gp_player13_rank_i = function () {
		var t = new eui.Group();
		this._gp_player13_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.right = 148.89999999999998;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 137.67;
		t.y = 14.73;
		t.elementsContent = [this._bitmap_player13_rankvalue_i()];
		return t;
	};
	_proto._bitmap_player13_rankvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player13_rankvalue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "mj_task_coin2_fnt";
		t.height = 61;
		t.text = "x999";
		t.width = 123;
		t.x = 16;
		t.y = 3;
		return t;
	};
	_proto._gp_player13_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player13_tapscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.width = 139;
		t.x = -10.65;
		t.y = 55.83;
		t.elementsContent = [this._bitmap_player13_tapscore_i()];
		return t;
	};
	_proto._bitmap_player13_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player13_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.x = 9;
		t.y = -2;
		return t;
	};
	_proto._img_player13_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player13_qiangmark = t;
		t.height = 56;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniugamein_json.game_qiang_mark";
		t.width = 53;
		t.x = -44.56;
		t.y = 13.8;
		return t;
	};
	_proto._rect_headTouch13_i = function () {
		var t = new eui.Rect();
		this._rect_headTouch13 = t;
		t.fillAlpha = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 0;
		t.y = 19.2;
		return t;
	};
	_proto._gp_player13_message_i = function () {
		var t = new eui.Group();
		this._gp_player13_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -264.55999999999995;
		t.y = 16.650000000000006;
		t.elementsContent = [this._Rect27_i(),this._txt_player13_message_i()];
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 309;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player13_message_i = function () {
		var t = new eui.Label();
		this._txt_player13_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player13_sitdown_i = function () {
		var t = new eui.Group();
		this._gp_player13_sitdown = t;
		t.height = 75;
		t.scaleX = 1.1764705882352942;
		t.scaleY = 1.1764705882352942;
		t.width = 75;
		t.x = 285;
		t.y = 55;
		t.elementsContent = [this._btn_player13_sitdown_i()];
		return t;
	};
	_proto._btn_player13_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_player13_sitdown = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin126;
		return t;
	};
	_proto._gp_showstate_i = function () {
		var t = new eui.Group();
		this._gp_showstate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.width = 288;
		t.x = 212.67;
		t.y = 455.34;
		t.elementsContent = [this._gp_showstate_click_i(),this._gp_showstate_tap_i()];
		return t;
	};
	_proto._gp_showstate_click_i = function () {
		var t = new eui.Group();
		this._gp_showstate_click = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.width = 92;
		t.x = 99;
		t.y = 3.99;
		t.elementsContent = [this._img_clickbg_i(),this._bitmap_clickvalue_i()];
		return t;
	};
	_proto._img_clickbg_i = function () {
		var t = new eui.Image();
		this._img_clickbg = t;
		t.source = "niuniugamein_json.game_clickbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._bitmap_clickvalue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_clickvalue = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.font = "fen_fnt";
		t.horizontalCenter = -1;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "1";
		t.verticalCenter = -3;
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
		t.y = 70.67;
		t.elementsContent = [this._Image2_i(),this._txt_showstate_tag_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniugamein_json.nn_tap";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_showstate_tag_i = function () {
		var t = new eui.Label();
		this._txt_showstate_tag = t;
		t.height = 30;
		t.size = 24;
		t.text = "等待下注";
		t.textAlign = "center";
		t.width = 250;
		t.x = 15.01;
		t.y = 8;
		return t;
	};
	return NiuniuSkins;
})(eui.Skin);