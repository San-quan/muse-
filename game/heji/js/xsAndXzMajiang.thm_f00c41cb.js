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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/common/common_kuang_jiesan.1.exml'] = window.common_kuang_tishi = (function (_super) {
	__extends(common_kuang_tishi, _super);
	var common_kuang_tishi$Skin69 = 	(function (_super) {
		__extends(common_kuang_tishi$Skin69, _super);
		function common_kuang_tishi$Skin69() {
			_super.call(this);
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
		var _proto = common_kuang_tishi$Skin69.prototype;

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
		return common_kuang_tishi$Skin69;
	})(eui.Skin);

	var common_kuang_tishi$Skin70 = 	(function (_super) {
		__extends(common_kuang_tishi$Skin70, _super);
		function common_kuang_tishi$Skin70() {
			_super.call(this);
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
		var _proto = common_kuang_tishi$Skin70.prototype;

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
		return common_kuang_tishi$Skin70;
	})(eui.Skin);

	function common_kuang_tishi() {
		_super.call(this);
		this.skinParts = ["jiesanDesc","daojiNum","statusBg0","nickname0","status0","head0","item0","statusBg1","nickname1","status1","head1","item1","statusBg2","nickname2","status2","head2","item2","statusBg3","nickname3","status3","head3","item3","statusBg4","nickname4","status4","head4","item4","statusBg5","nickname5","status5","head5","item5","refuse","agree"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._Image1_i(),this._Group12_i()];
	}
	var _proto = common_kuang_tishi.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.horizontalCenter = 0;
		t.source = "common_image_json.public_meng2";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
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
		t.skinName = common_kuang_tishi$Skin69;
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
		t.skinName = common_kuang_tishi$Skin70;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_jiesan.exml'] = window.common_kuang_jiesan = (function (_super) {
	__extends(common_kuang_jiesan, _super);
	var common_kuang_jiesan$Skin71 = 	(function (_super) {
		__extends(common_kuang_jiesan$Skin71, _super);
		function common_kuang_jiesan$Skin71() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_dismiss_btn_refuse_disablea")
					])
			];
		}
		var _proto = common_kuang_jiesan$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_dismiss_btn_refuse";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_jiesan$Skin71;
	})(eui.Skin);

	var common_kuang_jiesan$Skin72 = 	(function (_super) {
		__extends(common_kuang_jiesan$Skin72, _super);
		function common_kuang_jiesan$Skin72() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_dismiss_btn_agree_disabled")
					])
			];
		}
		var _proto = common_kuang_jiesan$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_dismiss_btn_agree";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_jiesan$Skin72;
	})(eui.Skin);

	function common_kuang_jiesan() {
		_super.call(this);
		this.skinParts = ["_rect_dismissmenban","_img_btn_close","_txt_dismiss_daoji","_img_dismiss_status0","_txt_dismiss_nickname0","_txt_dismiss_item0","_img_dismiss_status1","_txt_dismiss_nickname1","_txt_dismiss_item1","_img_dismiss_status2","_txt_dismiss_nickname2","_txt_dismiss_item2","_img_dismiss_status3","_txt_dismiss_nickname3","_txt_dismiss_item3","_gp_dismiss_players","_btn_dismiss_refuse","_btn_dismiss_agree","_gp_dismiss"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._gp_dismiss_i()];
	}
	var _proto = common_kuang_jiesan.prototype;

	_proto._gp_dismiss_i = function () {
		var t = new eui.Group();
		this._gp_dismiss = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._rect_dismissmenban_i(),this._Group3_i()];
		return t;
	};
	_proto._rect_dismissmenban_i = function () {
		var t = new eui.Rect();
		this._rect_dismissmenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 450;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 700;
		t.elementsContent = [this._Image1_i(),this._img_btn_close_i(),this._Image2_i(),this._Group1_i(),this._gp_dismiss_players_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(24,14,150,87);
		t.source = "feiyu_mjgame_json.xsmj_chat_bg";
		t.width = 700;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_btn_close_i = function () {
		var t = new eui.Image();
		this._img_btn_close = t;
		t.source = "feiyu_mjgame_json.xsmj_btn_close0";
		t.x = 653.73;
		t.y = -19.79;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_title";
		t.y = 9.33;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 92.33;
		t.elementsContent = [this._Rect1_i(),this._txt_dismiss_daoji_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x074836;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._txt_dismiss_daoji_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_daoji = t;
		t.horizontalCenter = 0;
		t.text = "在60秒后会自动解散";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_dismiss_players_i = function () {
		var t = new eui.Group();
		this._gp_dismiss_players = t;
		t.horizontalCenter = 0;
		t.y = 180.34;
		t.elementsContent = [this._txt_dismiss_item0_i(),this._txt_dismiss_item1_i(),this._txt_dismiss_item2_i(),this._txt_dismiss_item3_i()];
		return t;
	};
	_proto._txt_dismiss_item0_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item0 = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._img_dismiss_status0_i(),this._txt_dismiss_nickname0_i()];
		return t;
	};
	_proto._img_dismiss_status0_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_launch";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname0 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item1_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item1 = t;
		t.verticalCenter = 0;
		t.x = 160;
		t.elementsContent = [this._img_dismiss_status1_i(),this._txt_dismiss_nickname1_i()];
		return t;
	};
	_proto._img_dismiss_status1_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_agree";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname1 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item2_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item2 = t;
		t.verticalCenter = 0;
		t.x = 320;
		t.elementsContent = [this._img_dismiss_status2_i(),this._txt_dismiss_nickname2_i()];
		return t;
	};
	_proto._img_dismiss_status2_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_refuse";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname2 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item3_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item3 = t;
		t.verticalCenter = 0;
		t.x = 480;
		t.elementsContent = [this._img_dismiss_status3_i(),this._txt_dismiss_nickname3_i()];
		return t;
	};
	_proto._img_dismiss_status3_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_wait";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname3 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 346.67;
		t.elementsContent = [this._btn_dismiss_refuse_i(),this._btn_dismiss_agree_i()];
		return t;
	};
	_proto._btn_dismiss_refuse_i = function () {
		var t = new eui.Button();
		this._btn_dismiss_refuse = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 280;
		t.skinName = common_kuang_jiesan$Skin71;
		return t;
	};
	_proto._btn_dismiss_agree_i = function () {
		var t = new eui.Button();
		this._btn_dismiss_agree = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = common_kuang_jiesan$Skin72;
		return t;
	};
	return common_kuang_jiesan;
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
	var common_kuang_menulist$Skin73 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin73, _super);
		function common_kuang_menulist$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_menulist$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cgImage_json.standupBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_menulist$Skin73;
	})(eui.Skin);

	var common_kuang_menulist$Skin74 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin74, _super);
		function common_kuang_menulist$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_menulist$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cgImage_json.ruleBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_menulist$Skin74;
	})(eui.Skin);

	var common_kuang_menulist$Skin75 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin75, _super);
		function common_kuang_menulist$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_menulist$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cgImage_json.dissolveBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_menulist$Skin75;
	})(eui.Skin);

	var common_kuang_menulist$Skin76 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin76, _super);
		function common_kuang_menulist$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_menulist$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cgImage_json.backhallBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_menulist$Skin76;
	})(eui.Skin);

	var common_kuang_menulist$Skin77 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin77, _super);
		function common_kuang_menulist$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_menulist$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cgImage_json.settingBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_menulist$Skin77;
	})(eui.Skin);

	var common_kuang_menulist$Skin78 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin78, _super);
		function common_kuang_menulist$Skin78() {
			_super.call(this);
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
		var _proto = common_kuang_menulist$Skin78.prototype;

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
		return common_kuang_menulist$Skin78;
	})(eui.Skin);

	function common_kuang_menulist() {
		_super.call(this);
		this.skinParts = ["situp","wanfa","diaband","backHallBtn","setting","locBtn","menulist"];
		
		this.height = 326;
		this.width = 180;
		this.elementsContent = [this.menulist_i()];
	}
	var _proto = common_kuang_menulist.prototype;

	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 0;
		t.height = 326;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 326;
		t.scale9Grid = new egret.Rectangle(11,11,32,32);
		t.source = "cgImage_json.menulistBg";
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 15;
		t.elementsContent = [this.situp_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = common_kuang_menulist$Skin73;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 79;
		t.elementsContent = [this.wanfa_i()];
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_menulist$Skin74;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 142;
		t.elementsContent = [this.diaband_i()];
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Button();
		this.diaband = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_menulist$Skin75;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 206;
		t.elementsContent = [this.backHallBtn_i()];
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Button();
		this.backHallBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = common_kuang_menulist$Skin76;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 270;
		t.elementsContent = [this.setting_i()];
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_menulist$Skin77;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.visible = false;
		t.width = 65;
		t.y = 275;
		t.elementsContent = [this.locBtn_i()];
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_menulist$Skin78;
		return t;
	};
	return common_kuang_menulist;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_player.exml'] = window.common_kuang_player = (function (_super) {
	__extends(common_kuang_player, _super);
	function common_kuang_player() {
		_super.call(this);
		this.skinParts = ["_img_meng","bunengyong0","ani0","bunengyong1","ani1","bunengyong2","ani2","bunengyong3","ani3","bunengyong4","ani4","nickname","headImg","id","ip","_label_rate","_label_zuan","_gb_zuan","_group_main"];
		
		this.elementsContent = [this._img_meng_i(),this._Image1_i(),this._group_main_i()];
	}
	var _proto = common_kuang_player.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 685;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cgImage_json.userinfoBg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 382;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 685;
		t.elementsContent = [this._Group6_i(),this.nickname_i(),this._Image17_i(),this._Group7_i(),this.id_i(),this.ip_i(),this._Label6_i(),this._label_rate_i(),this._gb_zuan_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.width = 566;
		t.y = 238;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.ani0_i(),this.ani1_i(),this.ani2_i(),this.ani3_i(),this.ani4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 24;
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
		t.source = "cgImage_json.giftBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "tz_game_public_json.donghicon10";
		t.verticalCenter = -9;
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
		t.text = "X2";
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
		t.source = "cgImage_json.giftBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "tz_game_public_json.donghicon11";
		t.verticalCenter = -8;
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
		t.text = "X2";
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
		t.source = "cgImage_json.giftBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "tz_game_public_json.donghicon14";
		t.verticalCenter = -5.5;
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
		t.text = "X2";
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
		t.source = "cgImage_json.giftBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "tz_game_public_json.donghicon9";
		t.verticalCenter = 0;
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
		t.text = "X2";
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
		t.source = "cgImage_json.giftBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "tz_game_public_json.donghicon8";
		t.verticalCenter = -4;
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
		t.text = "X2";
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
		t.x = 178;
		t.y = 36;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cgImage_json.userinfoheng";
		t.y = 210;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 43;
		t.y = 33;
		t.elementsContent = [this.headImg_i(),this._Image18_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "cgImage_json.userinfoHeadframe";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.id_i = function () {
		var t = new eui.Label();
		this.id = t;
		t.size = 25;
		t.text = "666666";
		t.textColor = 0x000000;
		t.x = 178;
		t.y = 77.5;
		return t;
	};
	_proto.ip_i = function () {
		var t = new eui.Label();
		this.ip = t;
		t.size = 25;
		t.text = "192.111.112.12";
		t.textColor = 0x000000;
		t.x = 178;
		t.y = 120;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 25;
		t.text = "赢率:";
		t.textColor = 0x000000;
		t.x = 390;
		t.y = 165;
		return t;
	};
	_proto._label_rate_i = function () {
		var t = new eui.Label();
		this._label_rate = t;
		t.size = 25;
		t.text = "192.111.112.12";
		t.textColor = 0x000000;
		t.x = 450;
		t.y = 165;
		return t;
	};
	_proto._gb_zuan_i = function () {
		var t = new eui.Group();
		this._gb_zuan = t;
		t.x = 40;
		t.y = 160;
		t.elementsContent = [this._Image19_i(),this._label_zuan_i(),this._Image20_i(),this._Label7_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cgImage_json.diamond";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._label_zuan_i = function () {
		var t = new eui.Label();
		this._label_zuan = t;
		t.size = 20;
		t.text = "666666";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 38;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cgImage_json.coin";
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "0";
		t.textColor = 0xffffff;
		t.x = 200;
		t.y = 8;
		return t;
	};
	return common_kuang_player;
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
		t.scale9Grid = new egret.Rectangle(17,0,33,34);
		t.source = "cgImage_json.guidao";
		t.verticalCenter = 0;
		t.width = 335;
		t.x = 0;
		return t;
	};
	_proto.thumb2_i = function () {
		var t = new eui.Image();
		this.thumb2 = t;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.scale9Grid = new egret.Rectangle(16,0,31,29);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cgImage_json.kuai";
		t.width = 332;
		t.x = 2;
		t.y = 11;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "cgImage_json.thumb";
		t.verticalCenter = 0;
		t.x = 147;
		return t;
	};
	return setSlider;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_set.exml'] = window.common_kuang_set = (function (_super) {
	__extends(common_kuang_set, _super);
	var common_kuang_set$Skin79 = 	(function (_super) {
		__extends(common_kuang_set$Skin79, _super);
		function common_kuang_set$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.05),
						new eui.SetProperty("_Image1","scaleY",1.05)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_set$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cgImage_json.close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_set$Skin79;
	})(eui.Skin);

	function common_kuang_set() {
		_super.call(this);
		this.skinParts = ["_img_meng","musicV","bgMusic","zb","audioV","bgAudio","closeBtn","_group_main"];
		
		this.height = 322;
		this.width = 554;
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
		t.width = 554;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 317;
		t.scale9Grid = new egret.Rectangle(156,89,223,19);
		t.source = "cgImage_json.dialogBg";
		t.width = 558;
		t.x = -4;
		t.y = 5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cgImage_json.settingTitle";
		t.x = 242;
		t.y = 25;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.width = 471;
		t.y = 102;
		t.elementsContent = [this.musicV_i(),this.bgMusic_i(),this._Image3_i()];
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
		t.x = 70;
		return t;
	};
	_proto.bgMusic_i = function () {
		var t = new eui.Image();
		this.bgMusic = t;
		t.source = "cgImage_json.gou";
		t.verticalCenter = 0;
		t.x = 420;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "setImages_json.setmusic";
		t.verticalCenter = 0;
		t.x = -1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.width = 471;
		t.y = 194.5;
		t.elementsContent = [this.zb_i(),this.audioV_i(),this.bgAudio_i()];
		return t;
	};
	_proto.zb_i = function () {
		var t = new eui.Image();
		this.zb = t;
		t.source = "setsound";
		t.verticalCenter = 0;
		t.x = 0;
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
		t.x = 70;
		t.y = -89.5;
		return t;
	};
	_proto.bgAudio_i = function () {
		var t = new eui.Image();
		this.bgAudio = t;
		t.source = "cgImage_json.gou";
		t.verticalCenter = 0;
		t.x = 420;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.x = 505;
		t.y = -5;
		t.skinName = common_kuang_set$Skin79;
		return t;
	};
	return common_kuang_set;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_setmj.exml'] = window.common_kuang_setmj = (function (_super) {
	__extends(common_kuang_setmj, _super);
	var common_kuang_setmj$Skin80 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin80, _super);
		function common_kuang_setmj$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_checkboxgou")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "feiyu_mjgame_json.xsmj_set_checkboxbg";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.text = "开启";
			t.verticalCenter = 0;
			t.x = 54;
			return t;
		};
		return common_kuang_setmj$Skin80;
	})(eui.Skin);

	var common_kuang_setmj$Skin81 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin81, _super);
		function common_kuang_setmj$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_checkboxgou")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "feiyu_mjgame_json.xsmj_set_checkboxbg";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.text = "开启";
			t.verticalCenter = 0;
			t.x = 54;
			return t;
		};
		return common_kuang_setmj$Skin81;
	})(eui.Skin);

	var common_kuang_setmj$Skin82 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin82, _super);
		function common_kuang_setmj$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_checkboxgou")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "feiyu_mjgame_json.xsmj_set_checkboxbg";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.text = "开启";
			t.verticalCenter = 0;
			t.x = 54;
			return t;
		};
		return common_kuang_setmj$Skin82;
	})(eui.Skin);

	var common_kuang_setmj$Skin83 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin83, _super);
		function common_kuang_setmj$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_checkboxgou")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "feiyu_mjgame_json.xsmj_set_checkboxbg";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.text = "开启";
			t.verticalCenter = 0;
			t.x = 54;
			return t;
		};
		return common_kuang_setmj$Skin83;
	})(eui.Skin);

	var common_kuang_setmj$Skin84 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin84, _super);
		function common_kuang_setmj$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_checkboxgou")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "feiyu_mjgame_json.xsmj_set_checkboxbg";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.text = "开启";
			t.verticalCenter = 0;
			t.x = 54;
			return t;
		};
		return common_kuang_setmj$Skin84;
	})(eui.Skin);

	var common_kuang_setmj$Skin85 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin85, _super);
		function common_kuang_setmj$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_checkboxgou")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "feiyu_mjgame_json.xsmj_set_checkboxbg";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.text = "开启";
			t.verticalCenter = 0;
			t.x = 54;
			return t;
		};
		return common_kuang_setmj$Skin85;
	})(eui.Skin);

	var common_kuang_setmj$Skin86 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin86, _super);
		function common_kuang_setmj$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_checkboxgou")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "feiyu_mjgame_json.xsmj_set_checkboxbg";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.text = "开启";
			t.verticalCenter = 0;
			t.x = 54;
			return t;
		};
		return common_kuang_setmj$Skin86;
	})(eui.Skin);

	var common_kuang_setmj$Skin87 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin87, _super);
		function common_kuang_setmj$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_checkboxgou")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "feiyu_mjgame_json.xsmj_set_checkboxbg";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.text = "开启";
			t.verticalCenter = 0;
			t.x = 54;
			return t;
		};
		return common_kuang_setmj$Skin87;
	})(eui.Skin);

	var common_kuang_setmj$Skin88 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin88, _super);
		function common_kuang_setmj$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_cardbg0_choose")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_set_cardbg0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.text = "";
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_setmj$Skin88;
	})(eui.Skin);

	var common_kuang_setmj$Skin89 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin89, _super);
		function common_kuang_setmj$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_cardbg1_choose")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_set_cardbg1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.text = "";
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_setmj$Skin89;
	})(eui.Skin);

	var common_kuang_setmj$Skin90 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin90, _super);
		function common_kuang_setmj$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_gamebg0_choose")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_set_gamebg0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_setmj$Skin90;
	})(eui.Skin);

	var common_kuang_setmj$Skin91 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin91, _super);
		function common_kuang_setmj$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_gamebg1_choose")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_set_gamebg1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_setmj$Skin91;
	})(eui.Skin);

	var common_kuang_setmj$Skin92 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin92, _super);
		function common_kuang_setmj$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_gamebg2_choose")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_set_gamebg2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_setmj$Skin92;
	})(eui.Skin);

	var common_kuang_setmj$Skin93 = 	(function (_super) {
		__extends(common_kuang_setmj$Skin93, _super);
		function common_kuang_setmj$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_set_gamebg3_choose")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_setmj$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_set_gamebg3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_setmj$Skin93;
	})(eui.Skin);

	function common_kuang_setmj() {
		_super.call(this);
		this.skinParts = ["_img_meng","_radio_audio_on","_radio_audio_off","_radio_outCard_double","_radio_outCard_once","_radion_music_on","_radion_music_off","_radio_ting_on","_radio_ting_off","_radio_cardBg_green","_radio_cardBg_yellow","_radio_deskbg0","_radio_deskbg1","_radio_deskbg2","_radio_deskbg3","_img_btn_close","_group_main"];
		
		this.height = 720;
		this.width = 2000;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_setmj.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 2000;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 550;
		t.horizontalCenter = 0;
		t.width = 610;
		t.y = 85;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Group7_i(),this._img_btn_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "setImages_json.soundbg";
		t.x = -4;
		t.y = 5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 550;
		t.scale9Grid = new egret.Rectangle(180,70,255,16);
		t.source = "feiyu_mjgame_json.xsmj_setbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "游戏设置";
		t.y = 10;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 55;
		t.y = 75;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._radio_audio_on_i(),this._radio_audio_off_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_set_title3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._radio_audio_on_i = function () {
		var t = new eui.RadioButton();
		this._radio_audio_on = t;
		t.label = "开启";
		t.verticalCenter = 0;
		t.x = 130;
		t.skinName = common_kuang_setmj$Skin80;
		return t;
	};
	_proto._radio_audio_off_i = function () {
		var t = new eui.RadioButton();
		this._radio_audio_off = t;
		t.label = "关闭";
		t.verticalCenter = 0;
		t.x = 280;
		t.skinName = common_kuang_setmj$Skin81;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 70;
		t.elementsContent = [this._Image4_i(),this._radio_outCard_double_i(),this._radio_outCard_once_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_set_title2";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._radio_outCard_double_i = function () {
		var t = new eui.RadioButton();
		this._radio_outCard_double = t;
		t.label = "双击";
		t.x = 130;
		t.skinName = common_kuang_setmj$Skin82;
		return t;
	};
	_proto._radio_outCard_once_i = function () {
		var t = new eui.RadioButton();
		this._radio_outCard_once = t;
		t.label = "单击";
		t.x = 280;
		t.skinName = common_kuang_setmj$Skin83;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this._Image5_i(),this._radion_music_on_i(),this._radion_music_off_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_set_title4";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._radion_music_on_i = function () {
		var t = new eui.RadioButton();
		this._radion_music_on = t;
		t.label = "开启";
		t.x = 130;
		t.skinName = common_kuang_setmj$Skin84;
		return t;
	};
	_proto._radion_music_off_i = function () {
		var t = new eui.RadioButton();
		this._radion_music_off = t;
		t.label = "关闭";
		t.x = 280;
		t.skinName = common_kuang_setmj$Skin85;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 210;
		t.elementsContent = [this._Image6_i(),this._radio_ting_on_i(),this._radio_ting_off_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_set_title1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._radio_ting_on_i = function () {
		var t = new eui.RadioButton();
		this._radio_ting_on = t;
		t.label = "开启";
		t.x = 130;
		t.skinName = common_kuang_setmj$Skin86;
		return t;
	};
	_proto._radio_ting_off_i = function () {
		var t = new eui.RadioButton();
		this._radio_ting_off = t;
		t.label = "关闭";
		t.x = 280;
		t.skinName = common_kuang_setmj$Skin87;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 356;
		t.x = 0;
		t.y = 280;
		t.elementsContent = [this._Image7_i(),this._radio_cardBg_green_i(),this._radio_cardBg_yellow_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_set_title0";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._radio_cardBg_green_i = function () {
		var t = new eui.RadioButton();
		this._radio_cardBg_green = t;
		t.horizontalCenter = -25;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_setmj$Skin88;
		return t;
	};
	_proto._radio_cardBg_yellow_i = function () {
		var t = new eui.RadioButton();
		this._radio_cardBg_yellow = t;
		t.horizontalCenter = 49;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_setmj$Skin89;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.x = 0;
		t.y = 364;
		t.elementsContent = [this._Image8_i(),this._radio_deskbg0_i(),this._radio_deskbg1_i(),this._radio_deskbg2_i(),this._radio_deskbg3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_set_title6";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._radio_deskbg0_i = function () {
		var t = new eui.RadioButton();
		this._radio_deskbg0 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 130;
		t.skinName = common_kuang_setmj$Skin90;
		return t;
	};
	_proto._radio_deskbg1_i = function () {
		var t = new eui.RadioButton();
		this._radio_deskbg1 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 230;
		t.skinName = common_kuang_setmj$Skin91;
		return t;
	};
	_proto._radio_deskbg2_i = function () {
		var t = new eui.RadioButton();
		this._radio_deskbg2 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 330;
		t.skinName = common_kuang_setmj$Skin92;
		return t;
	};
	_proto._radio_deskbg3_i = function () {
		var t = new eui.RadioButton();
		this._radio_deskbg3 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 430;
		t.skinName = common_kuang_setmj$Skin93;
		return t;
	};
	_proto._img_btn_close_i = function () {
		var t = new eui.Image();
		this._img_btn_close = t;
		t.source = "feiyu_mjgame_json.xsmj_btn_close0";
		t.x = 555;
		t.y = -12;
		return t;
	};
	return common_kuang_setmj;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_sure_mj.exml'] = window.common_kuang_sure = (function (_super) {
	__extends(common_kuang_sure, _super);
	function common_kuang_sure() {
		_super.call(this);
		this.skinParts = ["_img_meng","_btn_sure","_btn_cancel","_txt_content","_group_main"];
		
		this.height = 450;
		this.width = 600;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_sure.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 350;
		t.width = 550;
		t.x = 25;
		t.y = 50;
		t.elementsContent = [this._Rect1_i(),this._btn_sure_i(),this._btn_cancel_i(),this._Group1_i(),this._txt_content_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0f2f2d;
		t.height = 350;
		t.strokeColor = 0x47bd9f;
		t.strokeWeight = 1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_sure_i = function () {
		var t = new eui.Group();
		this._btn_sure = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 163;
		t.y = 262.4;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2cab4b;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 250;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确认";
		t.verticalCenter = 0;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Group();
		this._btn_cancel = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 163;
		t.y = 262.4;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0xec7636;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 250;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "取消";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 2;
		t.elementsContent = [this._Rect4_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x002924;
		t.height = 70;
		t.strokeColor = 0x002924;
		t.width = 546;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "提示";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_content_i = function () {
		var t = new eui.Label();
		this._txt_content = t;
		t.height = 163;
		t.lineSpacing = 5;
		t.size = 36;
		t.text = "服务器连接一段开，请重新登录游戏";
		t.textAlign = "center";
		t.textColor = 0x47bd9f;
		t.verticalAlign = "middle";
		t.width = 430;
		t.x = 60;
		t.y = 81.26;
		return t;
	};
	return common_kuang_sure;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_sure_new.exml'] = window.common_kuang_sure_new = (function (_super) {
	__extends(common_kuang_sure_new, _super);
	function common_kuang_sure_new() {
		_super.call(this);
		this.skinParts = ["_img_meng","_btn_sure","_btn_cancel","_img_title","_txt_content","_group_main"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_sure_new.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 1;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.verticalCenter = 0;
		t.width = 1920;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 518;
		t.elementsContent = [this._Image1_i(),this._btn_sure_i(),this._btn_cancel_i(),this._img_title_i(),this._txt_content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,139,703,29);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dialogImage_json.joinBg";
		t.width = 518;
		t.y = -1;
		return t;
	};
	_proto._btn_sure_i = function () {
		var t = new eui.Image();
		this._btn_sure = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_game_json.common_notice_new_confirm";
		t.x = 70;
		t.y = 305;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Image();
		this._btn_cancel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_game_json.common_notice_new_cancel";
		t.x = 310;
		t.y = 306;
		return t;
	};
	_proto._img_title_i = function () {
		var t = new eui.Image();
		this._img_title = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_title_tishi";
		t.y = 50;
		return t;
	};
	_proto._txt_content_i = function () {
		var t = new eui.Label();
		this._txt_content = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "欢迎来到魂族网络游戏平台，祝你玩牌愉快！";
		t.textAlign = "center";
		t.textColor = 0x9a3e00;
		t.verticalAlign = "middle";
		t.width = 450;
		t.y = 84.5;
		return t;
	};
	return common_kuang_sure_new;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_sure.exml'] = window.common_kuang_sure = (function (_super) {
	__extends(common_kuang_sure, _super);
	function common_kuang_sure() {
		_super.call(this);
		this.skinParts = ["_img_meng","_btn_sure","_btn_cancel","_img_title","_txt_content","_group_main"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_sure.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 1;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.verticalCenter = 0;
		t.width = 1920;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 500;
		t.elementsContent = [this._Image1_i(),this._btn_sure_i(),this._btn_cancel_i(),this._img_title_i(),this._txt_content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 420;
		t.scale9Grid = new egret.Rectangle(0,139,703,32);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dialogImage_json.joinBg";
		t.width = 500;
		t.x = 0;
		t.y = -20;
		return t;
	};
	_proto._btn_sure_i = function () {
		var t = new eui.Image();
		this._btn_sure = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_game_json.common_notice_new_confirm";
		t.x = 70;
		t.y = 305;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Image();
		this._btn_cancel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_game_json.common_notice_new_cancel";
		t.x = 292;
		t.y = 305;
		return t;
	};
	_proto._img_title_i = function () {
		var t = new eui.Image();
		this._img_title = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_title_tishi";
		t.x = 209;
		t.y = 30;
		return t;
	};
	_proto._txt_content_i = function () {
		var t = new eui.Label();
		this._txt_content = t;
		t.height = 163;
		t.size = 25;
		t.text = "欢迎来到魂族网络游戏平台，祝你玩牌愉快！";
		t.textColor = 0x000000;
		t.width = 430;
		t.x = 38;
		t.y = 130;
		return t;
	};
	return common_kuang_sure;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_loading.exml'] = window.common_loading = (function (_super) {
	__extends(common_loading, _super);
	function common_loading() {
		_super.call(this);
		this.skinParts = ["_img_meng","_img_juhua","_txt_loadingmsg"];
		
		this.height = 200;
		this.width = 200;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_message_mj_UI.exml'] = window.common_message_mj_UI = (function (_super) {
	__extends(common_message_mj_UI, _super);
	function common_message_mj_UI() {
		_super.call(this);
		this.skinParts = ["_img_meng","wenziButton0","biaoqingButton0","biaoqingButton1","wenziButton1","biao1","biao2","biao3","biao4","biao5","biao6","biao7","biao8","biao9","biao10","biao11","biao12","biao13","biao14","biao15","biaoqing","message1","message2","message3","message4","message5","message6","message7","message8","message9","message10","wenzi","_group_main"];
		
		this.height = 391;
		this.width = 406;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_message_mj_UI.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 0.7;
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
		t.elementsContent = [this.wenziButton0_i(),this.biaoqingButton0_i(),this._Image1_i(),this.biaoqingButton1_i(),this.wenziButton1_i(),this.biaoqing_i(),this.wenzi_i()];
		return t;
	};
	_proto.wenziButton0_i = function () {
		var t = new eui.Image();
		this.wenziButton0 = t;
		t.source = "feiyu_mjgame_json.xsmj_chat_choosen_wezi";
		t.x = -1;
		t.y = 68.82;
		return t;
	};
	_proto.biaoqingButton0_i = function () {
		var t = new eui.Image();
		this.biaoqingButton0 = t;
		t.source = "feiyu_mjgame_json.xsmj_chat_choosen_emo";
		t.x = -1;
		t.y = 187;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 391;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(24,14,150,87);
		t.source = "feiyu_mjgame_json.xsmj_chat_bg";
		t.width = 365;
		t.y = 0;
		return t;
	};
	_proto.biaoqingButton1_i = function () {
		var t = new eui.Image();
		this.biaoqingButton1 = t;
		t.source = "feiyu_mjgame_json.xsmj_chat_choose_emo";
		t.x = -3;
		t.y = 187;
		return t;
	};
	_proto.wenziButton1_i = function () {
		var t = new eui.Image();
		this.wenziButton1 = t;
		t.source = "feiyu_mjgame_json.xsmj_chat_choose_wezi";
		t.x = -3;
		t.y = 68.82;
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
		t.x = 72.66;
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
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.message1_i(),this.message2_i(),this.message3_i(),this.message4_i(),this.message5_i(),this.message6_i(),this.message7_i(),this.message8_i(),this.message9_i(),this.message10_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 170;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 210;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 250;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 290;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.backgroundColor = 0x3A3A3A;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 330;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.backgroundColor = 0x000000;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 370;
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Group();
		this.message1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label7_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
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
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Group();
		this.message2 = t;
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this._Image3_i(),this._Label8_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "哈哈,手气真好";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Group();
		this.message3 = t;
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this._Image4_i(),this._Label9_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "快点出牌呦";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message4_i = function () {
		var t = new eui.Group();
		this.message4 = t;
		t.x = 0;
		t.y = 120;
		t.elementsContent = [this._Image5_i(),this._Label10_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "今天真高兴";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message5_i = function () {
		var t = new eui.Group();
		this.message5 = t;
		t.x = 0;
		t.y = 160;
		t.elementsContent = [this._Image6_i(),this._Label11_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "你家里是开银行的吧";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message6_i = function () {
		var t = new eui.Group();
		this.message6 = t;
		t.x = 0;
		t.y = 200;
		t.elementsContent = [this._Image7_i(),this._Label12_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "不好意思我有事要先走一步了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message7_i = function () {
		var t = new eui.Group();
		this.message7 = t;
		t.x = 0;
		t.y = 240;
		t.elementsContent = [this._Image8_i(),this._Label13_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "你的牌打得太好了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message8_i = function () {
		var t = new eui.Group();
		this.message8 = t;
		t.x = 0;
		t.y = 280;
		t.elementsContent = [this._Image9_i(),this._Label14_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "大家好,很高兴见到各位";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message9_i = function () {
		var t = new eui.Group();
		this.message9 = t;
		t.x = 0;
		t.y = 320;
		t.elementsContent = [this._Image10_i(),this._Label15_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.message10_i = function () {
		var t = new eui.Group();
		this.message10 = t;
		t.x = 0;
		t.y = 360;
		t.elementsContent = [this._Image11_i(),this._Label16_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,8,13,10);
		t.source = "feiyu_mjgame_json.xsmj_chat_text_item_bg";
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "打牌快点吧,都要睡着了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	return common_message_mj_UI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_message_UI.exml'] = window.common_message_UI = (function (_super) {
	__extends(common_message_UI, _super);
	function common_message_UI() {
		_super.call(this);
		this.skinParts = ["_img_meng","wenziButton","biaoqingButton","biao1","biao2","biao3","biao4","biao5","biao6","biao7","biao8","biao9","biao10","biao11","biao12","biao13","biao14","biao15","biaoqing","message1","message2","message3","message4","message5","message6","message7","message8","message9","message10","wenzi","_group_main"];
		
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
		t.height = 391;
		t.scale9Grid = new egret.Rectangle(16,13,33,54);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cgImage_json.messageBg";
		t.width = 406;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wenziButton_i = function () {
		var t = new eui.Image();
		this.wenziButton = t;
		t.height = 195;
		t.source = "cgImage_json.textmsg2";
		t.x = 333;
		t.y = 2;
		return t;
	};
	_proto.biaoqingButton_i = function () {
		var t = new eui.Image();
		this.biaoqingButton = t;
		t.height = 195;
		t.source = "cgImage_json.biaoqingmsg";
		t.x = 333;
		t.y = 194;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Scroller();
		this.biaoqing = t;
		t.anchorOffsetX = 0;
		t.scrollPolicyH = "off";
		t.visible = false;
		t.width = 301;
		t.x = 22;
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
		t.x = 20;
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
		t.textColor = 0xffffff;
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
		t.textColor = 0xffffff;
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
		t.text = "快点出牌呦";
		t.textAlign = "center";
		t.textColor = 0xffffff;
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
		t.textColor = 0xffffff;
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
		t.textColor = 0xffffff;
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
		t.textColor = 0xffffff;
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
		t.textColor = 0xffffff;
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
		t.textColor = 0xffffff;
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
		t.textColor = 0xffffff;
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
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 370;
		return t;
	};
	return common_message_UI;
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
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_wanfa_UI.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 536;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 800;
		t.elementsContent = [this._Image1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 536;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,18,32,35);
		t.source = "cgImage_json.ruleBg";
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
		t.y = 20;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "common_image_json.public_title_wanfa";
		t.y = 2;
		return t;
	};
	return common_wanfa_UI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 41;
		this.minHeight = 18;
		this.minWidth = 30;
		this.width = 768;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(21,0,31,41);
		t.source = "loading_thumb_png";
		t.verticalCenter = 0;
		t.width = 768;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "loading_huakiuai_png";
		t.x = 5;
		t.y = 4.5;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.border = false;
		t.borderColor = 0x358a7e;
		t.fontFamily = "Arial";
		t.size = 20;
		t.stroke = 1.5;
		t.strokeColor = 0x358a7e;
		t.text = "000/100";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 780;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/roonLifeScene.exml'] = window.roonLifeScene = (function (_super) {
	__extends(roonLifeScene, _super);
	function roonLifeScene() {
		_super.call(this);
		this.skinParts = ["bg","contentText","contentText0"];
		
		this.height = 84;
		this.width = 440;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = roonLifeScene.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.alpha = 0.3;
		t.height = 104;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
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
	var shu_common_jiesan$Skin94 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin94, _super);
		function shu_common_jiesan$Skin94() {
			_super.call(this);
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
		var _proto = shu_common_jiesan$Skin94.prototype;

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
		return shu_common_jiesan$Skin94;
	})(eui.Skin);

	var shu_common_jiesan$Skin95 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin95, _super);
		function shu_common_jiesan$Skin95() {
			_super.call(this);
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
		var _proto = shu_common_jiesan$Skin95.prototype;

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
		return shu_common_jiesan$Skin95;
	})(eui.Skin);

	function shu_common_jiesan() {
		_super.call(this);
		this.skinParts = ["jiesanDesc","daojiNum","statusBg0","nickname0","status0","head0","item0","statusBg1","nickname1","status1","head1","item1","statusBg2","nickname2","status2","head2","item2","statusBg3","nickname3","status3","head3","item3","statusBg4","nickname4","status4","head4","item4","statusBg5","nickname5","status5","head5","item5","refuse","agree"];
		
		this.height = 1215;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Group13_i()];
	}
	var _proto = shu_common_jiesan.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1500;
		t.horizontalCenter = 0;
		t.source = "common_image_json.public_meng2";
		t.width = 1080;
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
		t.skinName = shu_common_jiesan$Skin94;
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
		t.skinName = shu_common_jiesan$Skin95;
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
	var shu_common_menu$Skin96 = 	(function (_super) {
		__extends(shu_common_menu$Skin96, _super);
		function shu_common_menu$Skin96() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.standupBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin96;
	})(eui.Skin);

	var shu_common_menu$Skin97 = 	(function (_super) {
		__extends(shu_common_menu$Skin97, _super);
		function shu_common_menu$Skin97() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.ruleBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin97;
	})(eui.Skin);

	var shu_common_menu$Skin98 = 	(function (_super) {
		__extends(shu_common_menu$Skin98, _super);
		function shu_common_menu$Skin98() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.dissolveBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin98;
	})(eui.Skin);

	var shu_common_menu$Skin99 = 	(function (_super) {
		__extends(shu_common_menu$Skin99, _super);
		function shu_common_menu$Skin99() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.backhallBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin99;
	})(eui.Skin);

	var shu_common_menu$Skin100 = 	(function (_super) {
		__extends(shu_common_menu$Skin100, _super);
		function shu_common_menu$Skin100() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.settingBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin100;
	})(eui.Skin);

	var shu_common_menu$Skin101 = 	(function (_super) {
		__extends(shu_common_menu$Skin101, _super);
		function shu_common_menu$Skin101() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin101.prototype;

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
		return shu_common_menu$Skin101;
	})(eui.Skin);

	var shu_common_menu$Skin102 = 	(function (_super) {
		__extends(shu_common_menu$Skin102, _super);
		function shu_common_menu$Skin102() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin102.prototype;

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
		return shu_common_menu$Skin102;
	})(eui.Skin);

	function shu_common_menu() {
		_super.call(this);
		this.skinParts = ["situp","wanfa","diaband","backHallBtn","setting","hideWatchBtn","hideGroup","showWatchBtn","showGroup","menulist"];
		
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
		t.height = 301;
		t.scale9Grid = new egret.Rectangle(13,12,29,30);
		t.source = "cgImage_json.menulistBg";
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
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
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin96;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 65;
		t.x = 58;
		t.y = 77.5;
		t.elementsContent = [this.wanfa_i()];
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin97;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.width = 65;
		t.x = 58;
		t.y = 135;
		t.elementsContent = [this.diaband_i()];
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Button();
		this.diaband = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 1.5;
		t.skinName = shu_common_menu$Skin98;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 58;
		t.y = 192.5;
		t.elementsContent = [this.backHallBtn_i()];
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Button();
		this.backHallBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin99;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 58;
		t.y = 250;
		t.elementsContent = [this.setting_i()];
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin100;
		return t;
	};
	_proto.hideGroup_i = function () {
		var t = new eui.Group();
		this.hideGroup = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 65;
		t.x = 58;
		t.y = 258;
		t.elementsContent = [this.hideWatchBtn_i()];
		return t;
	};
	_proto.hideWatchBtn_i = function () {
		var t = new eui.Button();
		this.hideWatchBtn = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 163;
		t.skinName = shu_common_menu$Skin101;
		return t;
	};
	_proto.showGroup_i = function () {
		var t = new eui.Group();
		this.showGroup = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 65;
		t.x = 58;
		t.y = 258;
		t.elementsContent = [this.showWatchBtn_i()];
		return t;
	};
	_proto.showWatchBtn_i = function () {
		var t = new eui.Button();
		this.showWatchBtn = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 163;
		t.skinName = shu_common_menu$Skin102;
		return t;
	};
	return shu_common_menu;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/shuCommon/shu_common_wanfaI.exml'] = window.shu_common_wanfaI = (function (_super) {
	__extends(shu_common_wanfaI, _super);
	function shu_common_wanfaI() {
		_super.call(this);
		this.skinParts = ["_img_meng","cont","_group_main"];
		
		this.height = 1215;
		this.width = 720;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = shu_common_wanfaI.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 1500;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 700;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 700;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(18,16,33,36);
		t.source = "cgImage_json.ruleBg";
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
		t.y = 20;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/comingItem.exml'] = window.comingItem = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/createHzmj.exml'] = window.createHzmj = (function (_super) {
	__extends(createHzmj, _super);
	var createHzmj$Skin732 = 	(function (_super) {
		__extends(createHzmj$Skin732, _super);
		function createHzmj$Skin732() {
			_super.call(this);
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
		var _proto = createHzmj$Skin732.prototype;

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
		return createHzmj$Skin732;
	})(eui.Skin);

	var createHzmj$Skin733 = 	(function (_super) {
		__extends(createHzmj$Skin733, _super);
		function createHzmj$Skin733() {
			_super.call(this);
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
		var _proto = createHzmj$Skin733.prototype;

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
		return createHzmj$Skin733;
	})(eui.Skin);

	var createHzmj$Skin734 = 	(function (_super) {
		__extends(createHzmj$Skin734, _super);
		function createHzmj$Skin734() {
			_super.call(this);
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
		var _proto = createHzmj$Skin734.prototype;

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
		return createHzmj$Skin734;
	})(eui.Skin);

	var createHzmj$Skin735 = 	(function (_super) {
		__extends(createHzmj$Skin735, _super);
		function createHzmj$Skin735() {
			_super.call(this);
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
		var _proto = createHzmj$Skin735.prototype;

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
		return createHzmj$Skin735;
	})(eui.Skin);

	var createHzmj$Skin736 = 	(function (_super) {
		__extends(createHzmj$Skin736, _super);
		function createHzmj$Skin736() {
			_super.call(this);
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
		var _proto = createHzmj$Skin736.prototype;

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
		return createHzmj$Skin736;
	})(eui.Skin);

	var createHzmj$Skin737 = 	(function (_super) {
		__extends(createHzmj$Skin737, _super);
		function createHzmj$Skin737() {
			_super.call(this);
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
		var _proto = createHzmj$Skin737.prototype;

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
		return createHzmj$Skin737;
	})(eui.Skin);

	var createHzmj$Skin738 = 	(function (_super) {
		__extends(createHzmj$Skin738, _super);
		function createHzmj$Skin738() {
			_super.call(this);
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
		var _proto = createHzmj$Skin738.prototype;

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
		return createHzmj$Skin738;
	})(eui.Skin);

	var createHzmj$Skin739 = 	(function (_super) {
		__extends(createHzmj$Skin739, _super);
		function createHzmj$Skin739() {
			_super.call(this);
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
		var _proto = createHzmj$Skin739.prototype;

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
		return createHzmj$Skin739;
	})(eui.Skin);

	var createHzmj$Skin740 = 	(function (_super) {
		__extends(createHzmj$Skin740, _super);
		function createHzmj$Skin740() {
			_super.call(this);
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
		var _proto = createHzmj$Skin740.prototype;

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
		return createHzmj$Skin740;
	})(eui.Skin);

	var createHzmj$Skin741 = 	(function (_super) {
		__extends(createHzmj$Skin741, _super);
		function createHzmj$Skin741() {
			_super.call(this);
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
		var _proto = createHzmj$Skin741.prototype;

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
		return createHzmj$Skin741;
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
		t.skinName = createHzmj$Skin732;
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
		t.skinName = createHzmj$Skin733;
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
		t.skinName = createHzmj$Skin734;
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
		t.skinName = createHzmj$Skin735;
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
		t.skinName = createHzmj$Skin736;
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
		t.skinName = createHzmj$Skin737;
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
		t.skinName = createHzmj$Skin738;
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
		t.skinName = createHzmj$Skin739;
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
		t.skinName = createHzmj$Skin740;
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
		t.skinName = createHzmj$Skin741;
		return t;
	};
	return createHzmj;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/hzmj_singleResult.exml'] = window.hzmj_singleResult = (function (_super) {
	__extends(hzmj_singleResult, _super);
	var hzmj_singleResult$Skin742 = 	(function (_super) {
		__extends(hzmj_singleResult$Skin742, _super);
		function hzmj_singleResult$Skin742() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_record_confirm1")
					])
			];
		}
		var _proto = hzmj_singleResult$Skin742.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_record_confirm0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmj_singleResult$Skin742;
	})(eui.Skin);

	function hzmj_singleResult() {
		_super.call(this);
		this.skinParts = ["_rect_single_res_menban","_img_bg","_gp_macard","_txt_total_hu","_txt_showtip","_img_single_win0","_txt_single_nickname0","_img_single_zhuang0","_img_sing_pao0","_txt_single_point0","_single_item0","_img_single_win1","_txt_single_nickname1","_img_single_zhuang1","_img_sing_pao1","_txt_single_point1","_single_item1","_img_single_win2","_txt_single_nickname2","_img_single_zhuang2","_img_sing_pao2","_txt_single_point2","_single_item2","_img_single_win3","_txt_single_nickname3","_img_single_zhuang3","_img_sing_pao3","_txt_single_point3","_single_item3","_gp_notLiu","_btn_record_confirm","_img_btn_seedesk","_img_btn_seeres","_img_sing_liuju","_gp_single_res"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._gp_single_res_i()];
	}
	var _proto = hzmj_singleResult.prototype;

	_proto._gp_single_res_i = function () {
		var t = new eui.Group();
		this._gp_single_res = t;
		t.height = 720;
		t.width = 1215;
		t.elementsContent = [this._rect_single_res_menban_i(),this._Group3_i()];
		return t;
	};
	_proto._rect_single_res_menban_i = function () {
		var t = new eui.Rect();
		this._rect_single_res_menban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._img_bg_i(),this._gp_notLiu_i(),this._Group2_i(),this._img_sing_liuju_i()];
		return t;
	};
	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 480;
		t.scale9Grid = new egret.Rectangle(31,19,22,32);
		t.source = "feiyu_mjgame_json.xsmj_record_bg";
		t.width = 1010;
		t.x = -1.52;
		t.y = 0;
		return t;
	};
	_proto._gp_notLiu_i = function () {
		var t = new eui.Group();
		this._gp_notLiu = t;
		t.height = 480;
		t.horizontalCenter = 0;
		t.width = 849;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._gp_macard_i(),this._txt_total_hu_i(),this._txt_showtip_i(),this._Image16_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.horizontalCenter = -1.5;
		t.scale9Grid = new egret.Rectangle(10,10,1,1);
		t.source = "feiyu_mjgame_json.xsmj_record_shangbg";
		t.width = 990;
		t.y = 10.64;
		return t;
	};
	_proto._gp_macard_i = function () {
		var t = new eui.Group();
		this._gp_macard = t;
		t.horizontalCenter = 0;
		t.y = 17;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 230;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 285;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 350;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 405;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 460;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 525;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 580;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 635;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 700;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 775;
		t.y = 0;
		return t;
	};
	_proto._txt_total_hu_i = function () {
		var t = new eui.Label();
		this._txt_total_hu = t;
		t.fontFamily = "Arial";
		t.text = "（合计：45台）";
		t.textColor = 0xDBB06F;
		t.x = 608.05;
		t.y = 156.98;
		return t;
	};
	_proto._txt_showtip_i = function () {
		var t = new eui.Label();
		this._txt_showtip = t;
		t.size = 25;
		t.text = "Label";
		t.width = 800;
		t.x = 15;
		t.y = 110.35;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "feiyu_mjgame_json.xsmj_record_jiantou";
		t.x = 78.33;
		t.y = 239.66;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 25;
		t.y = 237.55;
		t.elementsContent = [this._single_item0_i(),this._single_item1_i(),this._single_item2_i(),this._single_item3_i()];
		return t;
	};
	_proto._single_item0_i = function () {
		var t = new eui.Group();
		this._single_item0 = t;
		t.height = 95;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 0;
		t.elementsContent = [this._Image17_i(),this._img_single_win0_i(),this._txt_single_nickname0_i(),this._img_single_zhuang0_i(),this._img_sing_pao0_i(),this._txt_single_point0_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_record_itemkuang0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_single_win0_i = function () {
		var t = new eui.Image();
		this._img_single_win0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_record_itemkuang1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_single_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_single_nickname0 = t;
		t.height = 20;
		t.size = 20;
		t.text = "象山麻将结算";
		t.width = 140;
		t.x = 38.3;
		t.y = 12.02;
		return t;
	};
	_proto._img_single_zhuang0_i = function () {
		var t = new eui.Image();
		this._img_single_zhuang0 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.x = -3.32;
		t.y = -11.66;
		return t;
	};
	_proto._img_sing_pao0_i = function () {
		var t = new eui.Image();
		this._img_sing_pao0 = t;
		t.source = "feiyu_mjgame_json.xsmj_record_zimo";
		t.verticalCenter = 10.5;
		t.x = 95;
		return t;
	};
	_proto._txt_single_point0_i = function () {
		var t = new eui.Label();
		this._txt_single_point0 = t;
		t.size = 35;
		t.text = "+900";
		t.textColor = 0xD3813F;
		t.x = 16;
		t.y = 45;
		return t;
	};
	_proto._single_item1_i = function () {
		var t = new eui.Group();
		this._single_item1 = t;
		t.height = 95;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 200;
		t.elementsContent = [this._Image18_i(),this._img_single_win1_i(),this._txt_single_nickname1_i(),this._img_single_zhuang1_i(),this._img_sing_pao1_i(),this._txt_single_point1_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_record_itemkuang0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_single_win1_i = function () {
		var t = new eui.Image();
		this._img_single_win1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_record_itemkuang1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_single_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_single_nickname1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "象山麻将结算";
		t.width = 140;
		t.x = 38.3;
		t.y = 12.02;
		return t;
	};
	_proto._img_single_zhuang1_i = function () {
		var t = new eui.Image();
		this._img_single_zhuang1 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.x = -3.32;
		t.y = -11.66;
		return t;
	};
	_proto._img_sing_pao1_i = function () {
		var t = new eui.Image();
		this._img_sing_pao1 = t;
		t.source = "feiyu_mjgame_json.xsmj_record_hu";
		t.verticalCenter = 10.5;
		t.x = 95;
		return t;
	};
	_proto._txt_single_point1_i = function () {
		var t = new eui.Label();
		this._txt_single_point1 = t;
		t.size = 35;
		t.text = "+900";
		t.textColor = 0xD3813F;
		t.x = 16;
		t.y = 45;
		return t;
	};
	_proto._single_item2_i = function () {
		var t = new eui.Group();
		this._single_item2 = t;
		t.height = 95;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 400;
		t.elementsContent = [this._Image19_i(),this._img_single_win2_i(),this._txt_single_nickname2_i(),this._img_single_zhuang2_i(),this._img_sing_pao2_i(),this._txt_single_point2_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_record_itemkuang0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_single_win2_i = function () {
		var t = new eui.Image();
		this._img_single_win2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_record_itemkuang1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_single_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_single_nickname2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "象山麻将结算";
		t.width = 140;
		t.x = 38.3;
		t.y = 12.02;
		return t;
	};
	_proto._img_single_zhuang2_i = function () {
		var t = new eui.Image();
		this._img_single_zhuang2 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.x = -3.32;
		t.y = -11.66;
		return t;
	};
	_proto._img_sing_pao2_i = function () {
		var t = new eui.Image();
		this._img_sing_pao2 = t;
		t.source = "feiyu_mjgame_json.xsmj_record_dianpao";
		t.verticalCenter = 10.5;
		t.x = 95;
		return t;
	};
	_proto._txt_single_point2_i = function () {
		var t = new eui.Label();
		this._txt_single_point2 = t;
		t.size = 35;
		t.text = "+900";
		t.textColor = 0xD3813F;
		t.x = 16;
		t.y = 45;
		return t;
	};
	_proto._single_item3_i = function () {
		var t = new eui.Group();
		this._single_item3 = t;
		t.height = 95;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 600;
		t.elementsContent = [this._Image20_i(),this._img_single_win3_i(),this._txt_single_nickname3_i(),this._img_single_zhuang3_i(),this._img_sing_pao3_i(),this._txt_single_point3_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_record_itemkuang0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_single_win3_i = function () {
		var t = new eui.Image();
		this._img_single_win3 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_record_itemkuang1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_single_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_single_nickname3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "象山麻将结算";
		t.width = 140;
		t.x = 38.3;
		t.y = 12.02;
		return t;
	};
	_proto._img_single_zhuang3_i = function () {
		var t = new eui.Image();
		this._img_single_zhuang3 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.x = -3.32;
		t.y = -11.66;
		return t;
	};
	_proto._img_sing_pao3_i = function () {
		var t = new eui.Image();
		this._img_sing_pao3 = t;
		t.source = "feiyu_mjgame_json.xsmj_record_dianpao";
		t.verticalCenter = 10.5;
		t.x = 95;
		return t;
	};
	_proto._txt_single_point3_i = function () {
		var t = new eui.Label();
		this._txt_single_point3 = t;
		t.size = 35;
		t.text = "+900";
		t.textColor = 0xD3813F;
		t.x = 11.44;
		t.y = 45;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 371.19;
		t.elementsContent = [this._btn_record_confirm_i(),this._img_btn_seedesk_i(),this._img_btn_seeres_i()];
		return t;
	};
	_proto._btn_record_confirm_i = function () {
		var t = new eui.Button();
		this._btn_record_confirm = t;
		t.label = "";
		t.x = 455.33;
		t.y = 0;
		t.skinName = hzmj_singleResult$Skin742;
		return t;
	};
	_proto._img_btn_seedesk_i = function () {
		var t = new eui.Image();
		this._img_btn_seedesk = t;
		t.source = "feiyu_mjgame_json.xsmj_record_seecard";
		t.visible = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_btn_seeres_i = function () {
		var t = new eui.Image();
		this._img_btn_seeres = t;
		t.height = 72;
		t.source = "feiyu_mjgame_json.xsmj_record_zhanji1";
		t.touchEnabled = true;
		t.width = 199;
		return t;
	};
	_proto._img_sing_liuju_i = function () {
		var t = new eui.Image();
		this._img_sing_liuju = t;
		t.horizontalCenter = 0.5;
		t.source = "feiyu_mjgame_json.xsmj_record_liuju";
		t.verticalCenter = -45;
		return t;
	};
	return hzmj_singleResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/hzmj_spp.exml'] = window.hzmj_spp = (function (_super) {
	__extends(hzmj_spp, _super);
	var hzmj_spp$Skin743 = 	(function (_super) {
		__extends(hzmj_spp$Skin743, _super);
		function hzmj_spp$Skin743() {
			_super.call(this);
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
		var _proto = hzmj_spp$Skin743.prototype;

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
		return hzmj_spp$Skin743;
	})(eui.Skin);

	var hzmj_spp$Skin744 = 	(function (_super) {
		__extends(hzmj_spp$Skin744, _super);
		function hzmj_spp$Skin744() {
			_super.call(this);
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
		var _proto = hzmj_spp$Skin744.prototype;

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
		return hzmj_spp$Skin744;
	})(eui.Skin);

	function hzmj_spp() {
		_super.call(this);
		this.skinParts = ["majiang0","select0","num0","card0","majiang1","select1","num1","card1","majiang2","select2","num2","card2","majiang3","select3","num3","card3","majiang4","select4","num4","card4","majiang5","select5","num5","card5","majiang6","select6","num6","card6","majiang7","select7","num7","card7","majiang8","select8","num8","card8","majiang9","select9","num9","card9","majiang10","select10","num10","card10","majiang11","select11","num11","card11","majiang12","select12","num12","card12","majiang13","select13","num13","card13","majiang14","select14","num14","card14","majiang15","select15","num15","card15","majiang16","select16","num16","card16","majiang17","select17","num17","card17","majiang18","select18","num18","card18","majiang19","select19","num19","card19","majiang20","select20","num20","card20","majiang21","select21","num21","card21","majiang22","select22","num22","card22","majiang23","select23","num23","card23","majiang24","select24","num24","card24","majiang25","select25","num25","card25","majiang26","select26","num26","card26","majiang27","select27","num27","card27","majiang28","select28","num28","card28","majiang29","select29","num29","card29","majiang30","select30","num30","card30","majiang31","select31","num31","card31","majiang32","select32","num32","card32","majiang33","select33","num33","card33","majiang34","select34","num34","card34","majiang35","select35","num35","card35","majiang36","select36","num36","card36","majiang37","select37","num37","card37","majiang38","select38","num38","card38","majiang39","select39","num39","card39","majiang40","select40","num40","card40","majiang41","select41","num41","card41","majiang42","select42","num42","card42","majiang43","select43","num43","card43","majiang44","select44","num44","card44","majiang45","select45","num45","card45","majiang46","select46","num46","card46","majiang47","select47","num47","card47","majiang48","select48","num48","card48","majiang49","select49","num49","card49","confirm","cancel"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._Rect1_i(),this._Group60_i()];
	}
	var _proto = hzmj_spp.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._Group60_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group56_i(),this._Group59_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 650;
		t.scale9Grid = new egret.Rectangle(28,29,84,48);
		t.source = "hzmj_ht_bg_png";
		t.width = 800;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group56_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.verticalCenter = -32.5;
		t.elementsContent = [this._Group11_i(),this._Group22_i(),this._Group33_i(),this._Group44_i(),this._Group55_i()];
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
	_proto._Group55_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 440;
		t.elementsContent = [this.card40_i(),this.card41_i(),this.card42_i(),this.card43_i(),this.card44_i(),this.card45_i(),this.card46_i(),this.card47_i(),this.card48_i(),this.card49_i()];
		return t;
	};
	_proto.card40_i = function () {
		var t = new eui.Group();
		this.card40 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group45_i(),this.num40_i()];
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang40_i(),this.select40_i()];
		return t;
	};
	_proto.majiang40_i = function () {
		var t = new eui.Image();
		this.majiang40 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select40_i = function () {
		var t = new eui.Image();
		this.select40 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num40_i = function () {
		var t = new eui.Label();
		this.num40 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card41_i = function () {
		var t = new eui.Group();
		this.card41 = t;
		t.x = 75;
		t.y = 0;
		t.elementsContent = [this._Group46_i(),this.num41_i()];
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang41_i(),this.select41_i()];
		return t;
	};
	_proto.majiang41_i = function () {
		var t = new eui.Image();
		this.majiang41 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select41_i = function () {
		var t = new eui.Image();
		this.select41 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num41_i = function () {
		var t = new eui.Label();
		this.num41 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card42_i = function () {
		var t = new eui.Group();
		this.card42 = t;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this._Group47_i(),this.num42_i()];
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang42_i(),this.select42_i()];
		return t;
	};
	_proto.majiang42_i = function () {
		var t = new eui.Image();
		this.majiang42 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select42_i = function () {
		var t = new eui.Image();
		this.select42 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num42_i = function () {
		var t = new eui.Label();
		this.num42 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card43_i = function () {
		var t = new eui.Group();
		this.card43 = t;
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this._Group48_i(),this.num43_i()];
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang43_i(),this.select43_i()];
		return t;
	};
	_proto.majiang43_i = function () {
		var t = new eui.Image();
		this.majiang43 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select43_i = function () {
		var t = new eui.Image();
		this.select43 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num43_i = function () {
		var t = new eui.Label();
		this.num43 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card44_i = function () {
		var t = new eui.Group();
		this.card44 = t;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Group49_i(),this.num44_i()];
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang44_i(),this.select44_i()];
		return t;
	};
	_proto.majiang44_i = function () {
		var t = new eui.Image();
		this.majiang44 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select44_i = function () {
		var t = new eui.Image();
		this.select44 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num44_i = function () {
		var t = new eui.Label();
		this.num44 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card45_i = function () {
		var t = new eui.Group();
		this.card45 = t;
		t.visible = false;
		t.x = 375;
		t.y = 0;
		t.elementsContent = [this._Group50_i(),this.num45_i()];
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang45_i(),this.select45_i()];
		return t;
	};
	_proto.majiang45_i = function () {
		var t = new eui.Image();
		this.majiang45 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select45_i = function () {
		var t = new eui.Image();
		this.select45 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num45_i = function () {
		var t = new eui.Label();
		this.num45 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card46_i = function () {
		var t = new eui.Group();
		this.card46 = t;
		t.visible = false;
		t.x = 450;
		t.y = 0;
		t.elementsContent = [this._Group51_i(),this.num46_i()];
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang46_i(),this.select46_i()];
		return t;
	};
	_proto.majiang46_i = function () {
		var t = new eui.Image();
		this.majiang46 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select46_i = function () {
		var t = new eui.Image();
		this.select46 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num46_i = function () {
		var t = new eui.Label();
		this.num46 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card47_i = function () {
		var t = new eui.Group();
		this.card47 = t;
		t.visible = false;
		t.x = 525;
		t.y = 0;
		t.elementsContent = [this._Group52_i(),this.num47_i()];
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang47_i(),this.select47_i()];
		return t;
	};
	_proto.majiang47_i = function () {
		var t = new eui.Image();
		this.majiang47 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select47_i = function () {
		var t = new eui.Image();
		this.select47 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num47_i = function () {
		var t = new eui.Label();
		this.num47 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card48_i = function () {
		var t = new eui.Group();
		this.card48 = t;
		t.visible = false;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this._Group53_i(),this.num48_i()];
		return t;
	};
	_proto._Group53_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang48_i(),this.select48_i()];
		return t;
	};
	_proto.majiang48_i = function () {
		var t = new eui.Image();
		this.majiang48 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select48_i = function () {
		var t = new eui.Image();
		this.select48 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num48_i = function () {
		var t = new eui.Label();
		this.num48 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto.card49_i = function () {
		var t = new eui.Group();
		this.card49 = t;
		t.x = 675;
		t.y = 0;
		t.elementsContent = [this._Group54_i(),this.num49_i()];
		return t;
	};
	_proto._Group54_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.majiang49_i(),this.select49_i()];
		return t;
	};
	_proto.majiang49_i = function () {
		var t = new eui.Image();
		this.majiang49 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "MJCard_json.owntiao_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select49_i = function () {
		var t = new eui.Image();
		this.select49 = t;
		t.horizontalCenter = 0;
		t.source = "hzmj_ht_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num49_i = function () {
		var t = new eui.Label();
		this.num49 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10";
		t.textColor = 0x000000;
		t.y = 89;
		return t;
	};
	_proto._Group59_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 587.18;
		t.elementsContent = [this._Group57_i(),this._Group58_i()];
		return t;
	};
	_proto._Group57_i = function () {
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
		t.skinName = hzmj_spp$Skin743;
		return t;
	};
	_proto._Group58_i = function () {
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
		t.skinName = hzmj_spp$Skin744;
		return t;
	};
	return hzmj_spp;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/hzmj_userbox.exml'] = window.hzmj_userbox = (function (_super) {
	__extends(hzmj_userbox, _super);
	function hzmj_userbox() {
		_super.call(this);
		this.skinParts = ["nickname","score","sitApply","headImg","zhuang","_img_ready","dalaba","_txt_headdaoji","stateImg","_gp_offline","headbox","messagebox","message","messagebg"];
		
		this.height = 130;
		this.width = 108;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = hzmj_userbox.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this.messagebg_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
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
		t.y = 0;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 109.12;
		return t;
	};
	_proto.sitApply_i = function () {
		var t = new eui.Image();
		this.sitApply = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.y = 27.27;
		return t;
	};
	_proto.headbox_i = function () {
		var t = new eui.Group();
		this.headbox = t;
		t.height = 73;
		t.width = 73;
		t.x = 18;
		t.y = 29.69;
		t.elementsContent = [this.headImg_i(),this._Image1_i(),this.zhuang_i(),this._img_ready_i(),this.dalaba_i(),this._gp_offline_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		t.width = 73;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang_i = function () {
		var t = new eui.Image();
		this.zhuang = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready_i = function () {
		var t = new eui.Image();
		this._img_ready = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		return t;
	};
	_proto.dalaba_i = function () {
		var t = new eui.Image();
		this.dalaba = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		return t;
	};
	_proto._gp_offline_i = function () {
		var t = new eui.Group();
		this._gp_offline = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 73;
		t.elementsContent = [this._Rect1_i(),this._Group1_i(),this.stateImg_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this._txt_headdaoji_i()];
		return t;
	};
	_proto._txt_headdaoji_i = function () {
		var t = new eui.Label();
		this._txt_headdaoji = t;
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.stateImg_i = function () {
		var t = new eui.Image();
		this.stateImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 22;
		t.y = 11.999999999999996;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox_i(),this.message_i()];
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Image();
		this.messagebox = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "快点出牌";
		t.verticalCenter = -4.5;
		return t;
	};
	return hzmj_userbox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/hzmjIndex_huifang.exml'] = window.hzmjIndex = (function (_super) {
	__extends(hzmjIndex, _super);
	var hzmjIndex$Skin745 = 	(function (_super) {
		__extends(hzmjIndex$Skin745, _super);
		function hzmjIndex$Skin745() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin745.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin745;
	})(eui.Skin);

	var hzmjIndex$Skin746 = 	(function (_super) {
		__extends(hzmjIndex$Skin746, _super);
		function hzmjIndex$Skin746() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin746.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin746;
	})(eui.Skin);

	var hzmjIndex$Skin747 = 	(function (_super) {
		__extends(hzmjIndex$Skin747, _super);
		function hzmjIndex$Skin747() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin747.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin747;
	})(eui.Skin);

	var hzmjIndex$Skin748 = 	(function (_super) {
		__extends(hzmjIndex$Skin748, _super);
		function hzmjIndex$Skin748() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin748.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin748;
	})(eui.Skin);

	var hzmjIndex$Skin749 = 	(function (_super) {
		__extends(hzmjIndex$Skin749, _super);
		function hzmjIndex$Skin749() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin749.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin749;
	})(eui.Skin);

	var hzmjIndex$Skin750 = 	(function (_super) {
		__extends(hzmjIndex$Skin750, _super);
		function hzmjIndex$Skin750() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin750.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_ting_tingtxt";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin750;
	})(eui.Skin);

	var hzmjIndex$Skin751 = 	(function (_super) {
		__extends(hzmjIndex$Skin751, _super);
		function hzmjIndex$Skin751() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin751.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin751;
	})(eui.Skin);

	var hzmjIndex$Skin752 = 	(function (_super) {
		__extends(hzmjIndex$Skin752, _super);
		function hzmjIndex$Skin752() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin752.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin752;
	})(eui.Skin);

	var hzmjIndex$Skin753 = 	(function (_super) {
		__extends(hzmjIndex$Skin753, _super);
		function hzmjIndex$Skin753() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin753.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin753;
	})(eui.Skin);

	var hzmjIndex$Skin754 = 	(function (_super) {
		__extends(hzmjIndex$Skin754, _super);
		function hzmjIndex$Skin754() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin754.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin754;
	})(eui.Skin);

	var hzmjIndex$Skin755 = 	(function (_super) {
		__extends(hzmjIndex$Skin755, _super);
		function hzmjIndex$Skin755() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin755.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin755;
	})(eui.Skin);

	var hzmjIndex$Skin756 = 	(function (_super) {
		__extends(hzmjIndex$Skin756, _super);
		function hzmjIndex$Skin756() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin756.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_ting_tingtxt";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin756;
	})(eui.Skin);

	var hzmjIndex$Skin757 = 	(function (_super) {
		__extends(hzmjIndex$Skin757, _super);
		function hzmjIndex$Skin757() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin757.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin757;
	})(eui.Skin);

	var hzmjIndex$Skin758 = 	(function (_super) {
		__extends(hzmjIndex$Skin758, _super);
		function hzmjIndex$Skin758() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin758.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin758;
	})(eui.Skin);

	var hzmjIndex$Skin759 = 	(function (_super) {
		__extends(hzmjIndex$Skin759, _super);
		function hzmjIndex$Skin759() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin759.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin759;
	})(eui.Skin);

	var hzmjIndex$Skin760 = 	(function (_super) {
		__extends(hzmjIndex$Skin760, _super);
		function hzmjIndex$Skin760() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin760.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin760;
	})(eui.Skin);

	var hzmjIndex$Skin761 = 	(function (_super) {
		__extends(hzmjIndex$Skin761, _super);
		function hzmjIndex$Skin761() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin761.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin761;
	})(eui.Skin);

	var hzmjIndex$Skin762 = 	(function (_super) {
		__extends(hzmjIndex$Skin762, _super);
		function hzmjIndex$Skin762() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin762.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_ting_tingtxt";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin762;
	})(eui.Skin);

	var hzmjIndex$Skin763 = 	(function (_super) {
		__extends(hzmjIndex$Skin763, _super);
		function hzmjIndex$Skin763() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin763.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin763;
	})(eui.Skin);

	var hzmjIndex$Skin764 = 	(function (_super) {
		__extends(hzmjIndex$Skin764, _super);
		function hzmjIndex$Skin764() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin764.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin764;
	})(eui.Skin);

	var hzmjIndex$Skin765 = 	(function (_super) {
		__extends(hzmjIndex$Skin765, _super);
		function hzmjIndex$Skin765() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin765.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin765;
	})(eui.Skin);

	var hzmjIndex$Skin766 = 	(function (_super) {
		__extends(hzmjIndex$Skin766, _super);
		function hzmjIndex$Skin766() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin766.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin766;
	})(eui.Skin);

	var hzmjIndex$Skin767 = 	(function (_super) {
		__extends(hzmjIndex$Skin767, _super);
		function hzmjIndex$Skin767() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin767.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin767;
	})(eui.Skin);

	var hzmjIndex$Skin768 = 	(function (_super) {
		__extends(hzmjIndex$Skin768, _super);
		function hzmjIndex$Skin768() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin768.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_ting_tingtxt";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin768;
	})(eui.Skin);

	var hzmjIndex$Skin769 = 	(function (_super) {
		__extends(hzmjIndex$Skin769, _super);
		function hzmjIndex$Skin769() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin769.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_start0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin769;
	})(eui.Skin);

	var hzmjIndex$Skin770 = 	(function (_super) {
		__extends(hzmjIndex$Skin770, _super);
		function hzmjIndex$Skin770() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin770.prototype;

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
		return hzmjIndex$Skin770;
	})(eui.Skin);

	var hzmjIndex$Skin771 = 	(function (_super) {
		__extends(hzmjIndex$Skin771, _super);
		function hzmjIndex$Skin771() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin771.prototype;

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
		return hzmjIndex$Skin771;
	})(eui.Skin);

	var hzmjIndex$Skin772 = 	(function (_super) {
		__extends(hzmjIndex$Skin772, _super);
		function hzmjIndex$Skin772() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin772.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_message";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin772;
	})(eui.Skin);

	var hzmjIndex$Skin773 = 	(function (_super) {
		__extends(hzmjIndex$Skin773, _super);
		function hzmjIndex$Skin773() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin773.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_ly";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin773;
	})(eui.Skin);

	var hzmjIndex$Skin774 = 	(function (_super) {
		__extends(hzmjIndex$Skin774, _super);
		function hzmjIndex$Skin774() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin774.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_see";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin774;
	})(eui.Skin);

	var hzmjIndex$Skin775 = 	(function (_super) {
		__extends(hzmjIndex$Skin775, _super);
		function hzmjIndex$Skin775() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin775.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_rule";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin775;
	})(eui.Skin);

	var hzmjIndex$Skin776 = 	(function (_super) {
		__extends(hzmjIndex$Skin776, _super);
		function hzmjIndex$Skin776() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin776.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_disabled";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin776;
	})(eui.Skin);

	var hzmjIndex$Skin777 = 	(function (_super) {
		__extends(hzmjIndex$Skin777, _super);
		function hzmjIndex$Skin777() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin777.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_exit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin777;
	})(eui.Skin);

	var hzmjIndex$Skin778 = 	(function (_super) {
		__extends(hzmjIndex$Skin778, _super);
		function hzmjIndex$Skin778() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin778.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_set";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin778;
	})(eui.Skin);

	var hzmjIndex$Skin779 = 	(function (_super) {
		__extends(hzmjIndex$Skin779, _super);
		function hzmjIndex$Skin779() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin779.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_invite0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin779;
	})(eui.Skin);

	var hzmjIndex$Skin780 = 	(function (_super) {
		__extends(hzmjIndex$Skin780, _super);
		function hzmjIndex$Skin780() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin780.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_cancel0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin780;
	})(eui.Skin);

	var hzmjIndex$Skin781 = 	(function (_super) {
		__extends(hzmjIndex$Skin781, _super);
		function hzmjIndex$Skin781() {
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
		var _proto = hzmjIndex$Skin781.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_top_btn_menu0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin781;
	})(eui.Skin);

	var hzmjIndex$Skin782 = 	(function (_super) {
		__extends(hzmjIndex$Skin782, _super);
		function hzmjIndex$Skin782() {
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
		var _proto = hzmjIndex$Skin782.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_top_btn_loc0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin782;
	})(eui.Skin);

	var hzmjIndex$Skin783 = 	(function (_super) {
		__extends(hzmjIndex$Skin783, _super);
		function hzmjIndex$Skin783() {
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
		var _proto = hzmjIndex$Skin783.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_top_btn_music0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin783;
	})(eui.Skin);

	var hzmjIndex$Skin784 = 	(function (_super) {
		__extends(hzmjIndex$Skin784, _super);
		function hzmjIndex$Skin784() {
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
		var _proto = hzmjIndex$Skin784.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_top_btn_zhanji0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin784;
	})(eui.Skin);

	var hzmjIndex$Skin785 = 	(function (_super) {
		__extends(hzmjIndex$Skin785, _super);
		function hzmjIndex$Skin785() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin785.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_record_continue0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin785;
	})(eui.Skin);

	var hzmjIndex$Skin786 = 	(function (_super) {
		__extends(hzmjIndex$Skin786, _super);
		function hzmjIndex$Skin786() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin786.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_record_end1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin786;
	})(eui.Skin);

	var hzmjIndex$Skin787 = 	(function (_super) {
		__extends(hzmjIndex$Skin787, _super);
		function hzmjIndex$Skin787() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin787.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_zhanji_zjtitle0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin787;
	})(eui.Skin);

	var hzmjIndex$Skin788 = 	(function (_super) {
		__extends(hzmjIndex$Skin788, _super);
		function hzmjIndex$Skin788() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin788.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_zhanji_ruletitle1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin788;
	})(eui.Skin);

	var hzmjIndex$Skin789 = 	(function (_super) {
		__extends(hzmjIndex$Skin789, _super);
		function hzmjIndex$Skin789() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_dismiss_btn_refuse_disablea")
					])
			];
		}
		var _proto = hzmjIndex$Skin789.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_dismiss_btn_refuse";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin789;
	})(eui.Skin);

	var hzmjIndex$Skin790 = 	(function (_super) {
		__extends(hzmjIndex$Skin790, _super);
		function hzmjIndex$Skin790() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_dismiss_btn_agree_disabled")
					])
			];
		}
		var _proto = hzmjIndex$Skin790.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_dismiss_btn_agree";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin790;
	})(eui.Skin);

	var hzmjIndex$Skin791 = 	(function (_super) {
		__extends(hzmjIndex$Skin791, _super);
		function hzmjIndex$Skin791() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin791.prototype;

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
		return hzmjIndex$Skin791;
	})(eui.Skin);

	var hzmjIndex$Skin792 = 	(function (_super) {
		__extends(hzmjIndex$Skin792, _super);
		function hzmjIndex$Skin792() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin792.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zhanji_pre_ju_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin792;
	})(eui.Skin);

	var hzmjIndex$Skin793 = 	(function (_super) {
		__extends(hzmjIndex$Skin793, _super);
		function hzmjIndex$Skin793() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin793.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zhanji_next_ju_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin793;
	})(eui.Skin);

	var hzmjIndex$Skin794 = 	(function (_super) {
		__extends(hzmjIndex$Skin794, _super);
		function hzmjIndex$Skin794() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin794.prototype;

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
		return hzmjIndex$Skin794;
	})(eui.Skin);

	var hzmjIndex$Skin795 = 	(function (_super) {
		__extends(hzmjIndex$Skin795, _super);
		function hzmjIndex$Skin795() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin795.prototype;

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
		return hzmjIndex$Skin795;
	})(eui.Skin);

	var hzmjIndex$Skin796 = 	(function (_super) {
		__extends(hzmjIndex$Skin796, _super);
		function hzmjIndex$Skin796() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin796.prototype;

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
		return hzmjIndex$Skin796;
	})(eui.Skin);

	function hzmjIndex() {
		_super.call(this);
		this.skinParts = ["_img_bg","_img_gameicon","_txt_ssTishi","_gp_ssTishi","nickname2","score2","sitApply2","headImg2","zhuang2","_img_ready1","stateImg2","_gp_offline1","headbox2","messagebox2","message2","messagebg2","nickname3","score3","sitApply3","headImg3","zhuang3","_img_ready2","stateImg3","_gp_offline2","headbox3","messagebox3","message3","messagebg3","nickname0","score0","sitApply0","headImg0","zhuang0","_img_ready","stateImg0","_gp_offline","headbox0","messagebox0","message0","messagebg0","nickname1","score1","sitApply1","headImg1","zhuang1","_img_ready0","stateImg1","_gp_offline0","headbox1","messagebox1","message1","messagebg1","ownhua0","ownhuaGroup0","nohua0","nohuaGrpup0","huaGoup0","ownhua1","ownhuaGroup1","nohua1","nohuaGrpup1","huaGoup1","ownhua2","ownhuaGroup2","nohua2","nohuaGrpup2","huaGoup2","ownhua3","ownhuaGroup3","nohua3","nohuaGrpup3","huaGoup3","huaCard00","huaCard01","huaCard02","huaCard03","huaCard04","huaCard05","huaCard06","huaCard07","huaCardGroup0","huaCard17","huaCard16","huaCard15","huaCard14","huaCard13","huaCard12","huaCard11","huaCard10","huaCardGroup1","huaCard20","huaCard21","huaCard22","huaCard23","huaCard24","huaCard25","huaCard26","huaCard27","huaCardGroup2","huaCard30","huaCard31","huaCard32","huaCard33","huaCard34","huaCard35","huaCard36","huaCard37","huaCardGroup3","positionBg","position0","position1","position2","position3","daojishi","_img_dirTxt0","_img_dirTxt1","_img_dirTxt2","_img_dirTxt3","restMaCardNum","restMaCardGroup","dirGroup","_gp_content","handCard00","handCard01","handCard02","handCard03","handCard04","handCard05","handCard06","handCard07","handCard08","handCard09","handCard010","handCard011","handCard012","moCard0","HandCard0","moCard1","handCard112","handCard111","handCard110","handCard19","handCard18","handCard17","handCard16","handCard15","handCard14","handCard13","handCard12","handCard11","handCard10","HandCard1","moCard2","handCard212","handCard211","handCard210","handCard29","handCard28","handCard27","handCard26","handCard25","handCard24","handCard23","handCard22","handCard21","handCard20","HandCard2","handCard30","handCard31","handCard32","handCard33","handCard34","handCard35","handCard36","handCard37","handCard38","handCard39","handCard310","handCard311","handCard312","moCard3","HandCard3","outCard033","outCard034","outCard035","outCard036","outCard037","outCard038","outCard039","outCard040","outCard041","outCard042","outCard043","outCard022","outCard023","outCard024","outCard025","outCard026","outCard027","outCard028","outCard029","outCard030","outCard031","outCard032","outCard011","outCard012","outCard013","outCard014","outCard015","outCard016","outCard017","outCard018","outCard019","outCard020","outCard021","outCard00","outCard01","outCard02","outCard03","outCard04","outCard05","outCard06","outCard07","outCard08","outCard09","outCard010","outCard0","outCard210","outCard29","outCard28","outCard27","outCard26","outCard25","outCard24","outCard23","outCard22","outCard21","outCard20","outCard221","outCard220","outCard219","outCard218","outCard217","outCard216","outCard215","outCard214","outCard213","outCard212","outCard211","outCard232","outCard231","outCard230","outCard229","outCard228","outCard227","outCard226","outCard225","outCard224","outCard223","outCard222","outCard243","outCard242","outCard241","outCard240","outCard239","outCard238","outCard237","outCard236","outCard235","outCard234","outCard233","outCard2","outCard133","outCard134","outCard135","outCard136","outCard137","outCard138","outCard139","outCard140","outCard141","outCard142","outCard143","outCard132","outCard131","outCard130","outCard129","outCard128","outCard127","outCard126","outCard125","outCard124","outCard123","outCard122","outCard121","outCard120","outCard119","outCard118","outCard117","outCard116","outCard115","outCard114","outCard113","outCard112","outCard111","outCard110","outCard19","outCard18","outCard17","outCard16","outCard15","outCard14","outCard13","outCard12","outCard11","outCard10","outCard1","outCard30","outCard31","outCard32","outCard33","outCard34","outCard35","outCard36","outCard37","outCard38","outCard39","outCard310","outCard311","outCard312","outCard313","outCard314","outCard315","outCard316","outCard317","outCard318","outCard319","outCard320","outCard321","outCard322","outCard323","outCard324","outCard325","outCard326","outCard327","outCard328","outCard329","outCard330","outCard331","outCard332","outCard333","outCard334","outCard335","outCard336","outCard337","outCard338","outCard339","outCard340","outCard341","outCard342","outCard343","outCard3","actioncard000","actioncard001","actioncard002","actioncard003","actionItem00","actioncard010","actioncard011","actioncard012","actioncard013","actionItem01","actioncard020","actioncard021","actioncard022","actioncard023","actionItem02","actioncard030","actioncard031","actioncard032","actioncard033","actionItem03","actionCardGroud0","actioncard200","actioncard201","actioncard202","actioncard203","actionItem20","actioncard210","actioncard211","actioncard212","actioncard213","actionItem21","actioncard220","actioncard221","actioncard222","actioncard223","actionItem22","actioncard230","actioncard231","actioncard232","actioncard233","actionItem23","actionCardGroud2","actioncard300","actioncard301","actioncard302","actioncard303","actionItem30","actioncard310","actioncard311","actioncard312","actioncard313","actionItem31","actioncard320","actioncard321","actioncard322","actioncard323","actionItem32","actioncard330","actioncard331","actioncard332","actioncard333","actionItem33","actionCardGroud3","actioncard132","actioncard131","actioncard130","actioncard133","actionItem13","actioncard122","actioncard121","actioncard120","actioncard123","actionItem12","actioncard112","actioncard111","actioncard110","actioncard113","actionItem11","actioncard102","actioncard101","actioncard100","actioncard103","actionItem10","actionCardGroud1","dimissProcess","dismissGroup","whoJoin","joinNotice","actionBtn00","actionBtnGroup00","actionBtn01","card10","actionBtnGroup01","actionBtn02","card20","actionBtnGroup02","actionBtn03","card30","actionBtnGroup03","actionBtn04","card40","actionBtnGroup04","actionBtn05","actionBtnGroup05","actiopnGroup0","actionBtn10","actionBtnGroup10","actionBtn11","card0","actionBtnGroup11","actionBtn12","card1","actionBtnGroup12","actionBtn13","card2","actionBtnGroup13","actionBtn14","card3","actionBtnGroup14","actionBtn15","actionBtnGroup15","actiopnGroup1","actionBtn20","actionBtnGroup20","actionBtn21","card4","actionBtnGroup21","actionBtn22","card5","actionBtnGroup22","actionBtn23","card6","actionBtnGroup23","actionBtn24","card7","actionBtnGroup24","actionBtn25","actionBtnGroup25","actiopnGroup2","actionBtn30","actionBtnGroup30","actionBtn31","card8","actionBtnGroup31","actionBtn32","card9","actionBtnGroup32","actionBtn33","card11","actionBtnGroup33","actionBtn34","card12","actionBtnGroup34","actionBtn35","actionBtnGroup35","actiopnGroup3","startBtn","startBtnGroup","readyBtn","readyBtnGroup","ready_disband","menban0","xiaoxi","xxGroup","voiceplay","yyGroup","situp","wanfa","diaband","backHallBtn","setting","inviteBtn","menulist","roomOwnerText","roomLifeNotice","showRule","waitGameStart","chiCardBg00","chiCard00","chiCardBg01","chiCard01","chiCardBg02","chiCard02","chi0","chiCardBg10","chiCard10","chiCardBg11","chiCard11","chiCardBg12","chiCard12","chi1","chiCardBg20","chiCard20","chiCardBg21","chiCard21","chiCardBg22","chiCard22","chi2","selectedChi","gamgBg0","gang0","_gp_gang0","gamgBg1","gang1","_gp_gang1","gamgBg2","gang2","_gp_gang2","gamgBg3","gang3","_gp_gang3","selectedGang","_btn_action_cancel","actionShow","menban","_img_topbg","menu","locationBtn","playerBtnThree","playerBtntwo","havePeopleComing","playerBtn","_btn_rule","roompwd","showFJGroup","jushu","_txt_wanfa","_txt_quan","_txt_playcount","_btn_shortest_continue","_btn_shortest_endgame","_txt_shortest_item0","_txt_shortest_item1","_txt_shortest_item2","_gp_shortest","_txt_shengyi_notice","_gp_btn_shengyi_confirm","_gp_btn_shengyi_cancel","_gp_shengyi","_rect_shishimenban","_img_btn_close_shishi","_img_title_zhanji","_img_title_roomrule","_btn_title_zhanji","_btn_title_roomrule","_txt_roomrule","_img_shishi_itembg0","_txt_shishi_nickname0","_txt_shishi_score00","_txt_shishi_score01","_txt_shishi_score02","_txt_shishi_score03","_gp_shishi_item0","_img_shishi_itembg1","_txt_shishi_nickname1","_txt_shishi_score10","_txt_shishi_score11","_txt_shishi_score12","_txt_shishi_score13","_gp_shishi_item1","_img_shishi_itembg2","_txt_shishi_nickname2","_txt_shishi_score20","_txt_shishi_score21","_txt_shishi_score22","_txt_shishi_score23","_gp_shishi_item2","_img_shishi_itembg3","_txt_shishi_nickname3","_txt_shishi_score30","_txt_shishi_score31","_txt_shishi_score32","_txt_shishi_score33","_gp_shishi_item3","_txt_shishi_ju0","_txt_shishi_ju1","_txt_shishi_ju2","_txt_shishi_ju3","_gp_sszj","_gp_shishi","_rect_dismissmenban","_img_btn_close_shishi0","_txt_dismiss_daoji","_img_dismiss_status0","_txt_dismiss_nickname0","_txt_dismiss_item0","_img_dismiss_status1","_txt_dismiss_nickname1","_txt_dismiss_item1","_img_dismiss_status2","_txt_dismiss_nickname2","_txt_dismiss_item2","_img_dismiss_status3","_txt_dismiss_nickname3","_txt_dismiss_item3","_gp_dismiss_players","_btn_dismiss_refuse","_btn_dismiss_agree","_gp_dismiss","_rect_invitemenban","_img_btn_close_invite","_txt_inviterule","_gp_invite","_rect_watchmenban","_scro_watch_xiaoxi","_scro_watch_youke","_gp_watch","_img_tingbg","huaCard0","_gp_ting_card","_gp_ting","nextStepBtn","preJuBtn","nextJuBtn","huifangStartBtn","huifangStartGroup","parseBtn","parseGroup","resetBtn","resetGroup","huifangGroup","backHallBtnHF"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._img_bg_i(),this._img_gameicon_i(),this._gp_ssTishi_i(),this._Group3_i(),this._Group6_i(),this._Group9_i(),this._Group12_i(),this.huaGoup0_i(),this.huaGoup1_i(),this.huaGoup2_i(),this.huaGoup3_i(),this.huaCardGroup0_i(),this.huaCardGroup1_i(),this.huaCardGroup2_i(),this.huaCardGroup3_i(),this.dirGroup_i(),this._gp_content_i(),this.HandCard0_i(),this.HandCard1_i(),this.HandCard2_i(),this.HandCard3_i(),this.outCard0_i(),this.outCard2_i(),this.outCard1_i(),this.outCard3_i(),this.actionCardGroud0_i(),this.actionCardGroud2_i(),this.actionCardGroud3_i(),this.actionCardGroud1_i(),this.dismissGroup_i(),this.joinNotice_i(),this.actiopnGroup0_i(),this.actiopnGroup1_i(),this.actiopnGroup2_i(),this.actiopnGroup3_i(),this.startBtnGroup_i(),this.readyBtnGroup_i(),this.ready_disband_i(),this.menban0_i(),this.xxGroup_i(),this.yyGroup_i(),this.menulist_i(),this.waitGameStart_i(),this.actionShow_i(),this.menban_i(),this._Group48_i(),this._gp_shortest_i(),this._gp_shengyi_i(),this._gp_shishi_i(),this._gp_dismiss_i(),this._gp_invite_i(),this._gp_watch_i(),this._gp_ting_i(),this._Rect21_i(),this.huifangGroup_i(),this.backHallBtnHF_i()];
	}
	var _proto = hzmjIndex.prototype;

	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(7,4,44,31);
		t.source = "feiyu_mjgame_json.xsmj_set_gamebg0";
		t.verticalCenter = 0;
		t.width = 1215;
		return t;
	};
	_proto._img_gameicon_i = function () {
		var t = new eui.Image();
		this._img_gameicon = t;
		t.horizontalCenter = 0.5;
		t.source = "feiyu_mjgame_json.xzmj_icon";
		t.verticalCenter = -26.5;
		return t;
	};
	_proto._gp_ssTishi_i = function () {
		var t = new eui.Group();
		this._gp_ssTishi = t;
		t.horizontalCenter = 0.5;
		t.y = 477.75;
		t.elementsContent = [this._Rect1_i(),this._txt_ssTishi_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 350;
		return t;
	};
	_proto._txt_ssTishi_i = function () {
		var t = new eui.Label();
		this._txt_ssTishi = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "我发觉我是你的了做了谁的离开法兰克福了的生意";
		t.verticalCenter = 0;
		t.width = 280;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 108;
		t.y = 445.48;
		t.elementsContent = [this._Group2_i(),this.messagebg2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname2_i(),this.score2_i(),this.sitApply2_i(),this.headbox2_i()];
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
		t.visible = false;
		t.width = 86;
		t.y = 0;
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
		t.visible = false;
		t.width = 108;
		t.x = 0;
		t.y = 109.12;
		return t;
	};
	_proto.sitApply2_i = function () {
		var t = new eui.Image();
		this.sitApply2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.y = 27.27;
		return t;
	};
	_proto.headbox2_i = function () {
		var t = new eui.Group();
		this.headbox2 = t;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.width = 73;
		t.y = 29.69;
		t.elementsContent = [this.headImg2_i(),this._Image1_i(),this.zhuang2_i(),this._img_ready1_i(),this._gp_offline1_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.visible = false;
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready1_i = function () {
		var t = new eui.Image();
		this._img_ready1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._gp_offline1_i = function () {
		var t = new eui.Group();
		this._gp_offline1 = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		t.elementsContent = [this._Rect2_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this.stateImg2_i(),this._Label1_i()];
		return t;
	};
	_proto.stateImg2_i = function () {
		var t = new eui.Image();
		this.stateImg2 = t;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.messagebg2_i = function () {
		var t = new eui.Group();
		this.messagebg2 = t;
		t.visible = false;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox2_i(),this.message2_i()];
		return t;
	};
	_proto.messagebox2_i = function () {
		var t = new eui.Image();
		this.messagebox2 = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Label();
		this.message2 = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.width = 108;
		t.y = 101.62;
		t.elementsContent = [this._Group5_i(),this.messagebg3_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname3_i(),this.score3_i(),this.sitApply3_i(),this.headbox3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.width = 86;
		t.y = 0;
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
		t.y = 109.12;
		return t;
	};
	_proto.sitApply3_i = function () {
		var t = new eui.Image();
		this.sitApply3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.visible = false;
		t.y = 27.27;
		return t;
	};
	_proto.headbox3_i = function () {
		var t = new eui.Group();
		this.headbox3 = t;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.width = 73;
		t.y = 29.69;
		t.elementsContent = [this.headImg3_i(),this._Image2_i(),this.zhuang3_i(),this._img_ready2_i(),this._gp_offline2_i()];
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang3_i = function () {
		var t = new eui.Image();
		this.zhuang3 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.visible = false;
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready2_i = function () {
		var t = new eui.Image();
		this._img_ready2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._gp_offline2_i = function () {
		var t = new eui.Group();
		this._gp_offline2 = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		t.elementsContent = [this._Rect3_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this.stateImg3_i(),this._Label2_i()];
		return t;
	};
	_proto.stateImg3_i = function () {
		var t = new eui.Image();
		this.stateImg3 = t;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.messagebg3_i = function () {
		var t = new eui.Group();
		this.messagebg3 = t;
		t.visible = false;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox3_i(),this.message3_i()];
		return t;
	};
	_proto.messagebox3_i = function () {
		var t = new eui.Image();
		this.messagebox3 = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Label();
		this.message3 = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -18;
		t.visible = false;
		t.width = 108;
		t.x = 230.3;
		t.elementsContent = [this._Group8_i(),this.messagebg0_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname0_i(),this.score0_i(),this.sitApply0_i(),this.headbox0_i()];
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
		t.width = 86;
		t.y = 0;
		return t;
	};
	_proto.score0_i = function () {
		var t = new eui.Label();
		this.score0 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 109.12;
		return t;
	};
	_proto.sitApply0_i = function () {
		var t = new eui.Image();
		this.sitApply0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.visible = false;
		t.y = 27.27;
		return t;
	};
	_proto.headbox0_i = function () {
		var t = new eui.Group();
		this.headbox0 = t;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.width = 73;
		t.y = 29.69;
		t.elementsContent = [this.headImg0_i(),this._Image3_i(),this.zhuang0_i(),this._img_ready_i(),this._gp_offline_i()];
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang0_i = function () {
		var t = new eui.Image();
		this.zhuang0 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.visible = false;
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready_i = function () {
		var t = new eui.Image();
		this._img_ready = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._gp_offline_i = function () {
		var t = new eui.Group();
		this._gp_offline = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		t.elementsContent = [this._Rect4_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this.stateImg0_i(),this._Label3_i()];
		return t;
	};
	_proto.stateImg0_i = function () {
		var t = new eui.Image();
		this.stateImg0 = t;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.messagebg0_i = function () {
		var t = new eui.Group();
		this.messagebg0 = t;
		t.visible = false;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox0_i(),this.message0_i()];
		return t;
	};
	_proto.messagebox0_i = function () {
		var t = new eui.Image();
		this.messagebox0 = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message0_i = function () {
		var t = new eui.Label();
		this.message0 = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.width = 108;
		t.x = 903.97;
		t.y = 277;
		t.elementsContent = [this._Group11_i(),this.messagebg1_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname1_i(),this.score1_i(),this.sitApply1_i(),this.headbox1_i()];
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
		t.width = 86;
		t.y = 0;
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
		t.y = 109.12;
		return t;
	};
	_proto.sitApply1_i = function () {
		var t = new eui.Image();
		this.sitApply1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.visible = false;
		t.y = 27.27;
		return t;
	};
	_proto.headbox1_i = function () {
		var t = new eui.Group();
		this.headbox1 = t;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.width = 73;
		t.y = 29.69;
		t.elementsContent = [this.headImg1_i(),this._Image4_i(),this.zhuang1_i(),this._img_ready0_i(),this._gp_offline0_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.visible = false;
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready0_i = function () {
		var t = new eui.Image();
		this._img_ready0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._gp_offline0_i = function () {
		var t = new eui.Group();
		this._gp_offline0 = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		t.elementsContent = [this._Rect5_i(),this._Group10_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this.stateImg1_i(),this._Label4_i()];
		return t;
	};
	_proto.stateImg1_i = function () {
		var t = new eui.Image();
		this.stateImg1 = t;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.messagebg1_i = function () {
		var t = new eui.Group();
		this.messagebg1 = t;
		t.visible = false;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox1_i(),this.message1_i()];
		return t;
	};
	_proto.messagebox1_i = function () {
		var t = new eui.Image();
		this.messagebox1 = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Label();
		this.message1 = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto.huaGoup0_i = function () {
		var t = new eui.Group();
		this.huaGoup0 = t;
		t.height = 55;
		t.visible = false;
		t.width = 58;
		t.x = 163.12;
		t.y = 480.71;
		t.elementsContent = [this.ownhuaGroup0_i(),this.nohuaGrpup0_i()];
		return t;
	};
	_proto.ownhuaGroup0_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup0 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.ownhua0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_zheng";
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
		t.elementsContent = [this._Image6_i(),this.nohua0_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_ye";
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
		t.x = 1130.39;
		t.y = 299;
		t.elementsContent = [this.ownhuaGroup1_i(),this.nohuaGrpup1_i()];
		return t;
	};
	_proto.ownhuaGroup1_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup1 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.ownhua1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_zheng";
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
		t.elementsContent = [this._Image8_i(),this.nohua1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_ye";
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
		t.x = 271.48;
		t.y = 86.98;
		t.elementsContent = [this.ownhuaGroup2_i(),this.nohuaGrpup2_i()];
		return t;
	};
	_proto.ownhuaGroup2_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup2 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.ownhua2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_zheng";
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
		t.x = 0;
		t.y = 23;
		t.elementsContent = [this._Image10_i(),this.nohua2_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_ye";
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
		t.x = 27.49;
		t.y = 299;
		t.elementsContent = [this.ownhuaGroup3_i(),this.nohuaGrpup3_i()];
		return t;
	};
	_proto.ownhuaGroup3_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup3 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this.ownhua3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_zheng";
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
		t.elementsContent = [this._Image12_i(),this.nohua3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_ye";
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
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.visible = false;
		t.x = 154.49;
		t.y = 548.68;
		t.elementsContent = [this.huaCard00_i(),this.huaCard01_i(),this.huaCard02_i(),this.huaCard03_i(),this.huaCard04_i(),this.huaCard05_i(),this.huaCard06_i(),this.huaCard07_i()];
		return t;
	};
	_proto.huaCard00_i = function () {
		var t = new eui.Image();
		this.huaCard00 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard01_i = function () {
		var t = new eui.Image();
		this.huaCard01 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.huaCard02_i = function () {
		var t = new eui.Image();
		this.huaCard02 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.huaCard03_i = function () {
		var t = new eui.Image();
		this.huaCard03 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.huaCard04_i = function () {
		var t = new eui.Image();
		this.huaCard04 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.huaCard05_i = function () {
		var t = new eui.Image();
		this.huaCard05 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.huaCard06_i = function () {
		var t = new eui.Image();
		this.huaCard06 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.huaCard07_i = function () {
		var t = new eui.Image();
		this.huaCard07 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.huaCardGroup1_i = function () {
		var t = new eui.Group();
		this.huaCardGroup1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.x = 1027.43;
		t.y = 316.81;
		t.elementsContent = [this.huaCard17_i(),this.huaCard16_i(),this.huaCard15_i(),this.huaCard14_i(),this.huaCard13_i(),this.huaCard12_i(),this.huaCard11_i(),this.huaCard10_i()];
		return t;
	};
	_proto.huaCard17_i = function () {
		var t = new eui.Image();
		this.huaCard17 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard16_i = function () {
		var t = new eui.Image();
		this.huaCard16 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.huaCard15_i = function () {
		var t = new eui.Image();
		this.huaCard15 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 68;
		return t;
	};
	_proto.huaCard14_i = function () {
		var t = new eui.Image();
		this.huaCard14 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 102;
		return t;
	};
	_proto.huaCard13_i = function () {
		var t = new eui.Image();
		this.huaCard13 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 136;
		return t;
	};
	_proto.huaCard12_i = function () {
		var t = new eui.Image();
		this.huaCard12 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 170;
		return t;
	};
	_proto.huaCard11_i = function () {
		var t = new eui.Image();
		this.huaCard11 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 204;
		return t;
	};
	_proto.huaCard10_i = function () {
		var t = new eui.Image();
		this.huaCard10 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 238;
		return t;
	};
	_proto.huaCardGroup2_i = function () {
		var t = new eui.Group();
		this.huaCardGroup2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.visible = false;
		t.x = 904.27;
		t.y = 66.94;
		t.elementsContent = [this.huaCard20_i(),this.huaCard21_i(),this.huaCard22_i(),this.huaCard23_i(),this.huaCard24_i(),this.huaCard25_i(),this.huaCard26_i(),this.huaCard27_i()];
		return t;
	};
	_proto.huaCard20_i = function () {
		var t = new eui.Image();
		this.huaCard20 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard21_i = function () {
		var t = new eui.Image();
		this.huaCard21 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.huaCard22_i = function () {
		var t = new eui.Image();
		this.huaCard22 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.huaCard23_i = function () {
		var t = new eui.Image();
		this.huaCard23 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.huaCard24_i = function () {
		var t = new eui.Image();
		this.huaCard24 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.huaCard25_i = function () {
		var t = new eui.Image();
		this.huaCard25 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.huaCard26_i = function () {
		var t = new eui.Image();
		this.huaCard26 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.huaCard27_i = function () {
		var t = new eui.Image();
		this.huaCard27 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.huaCardGroup3_i = function () {
		var t = new eui.Group();
		this.huaCardGroup3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.x = 179.46;
		t.y = 187.19;
		t.elementsContent = [this.huaCard30_i(),this.huaCard31_i(),this.huaCard32_i(),this.huaCard33_i(),this.huaCard34_i(),this.huaCard35_i(),this.huaCard36_i(),this.huaCard37_i()];
		return t;
	};
	_proto.huaCard30_i = function () {
		var t = new eui.Image();
		this.huaCard30 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard31_i = function () {
		var t = new eui.Image();
		this.huaCard31 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.huaCard32_i = function () {
		var t = new eui.Image();
		this.huaCard32 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 68;
		return t;
	};
	_proto.huaCard33_i = function () {
		var t = new eui.Image();
		this.huaCard33 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 102;
		return t;
	};
	_proto.huaCard34_i = function () {
		var t = new eui.Image();
		this.huaCard34 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 136;
		return t;
	};
	_proto.huaCard35_i = function () {
		var t = new eui.Image();
		this.huaCard35 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 170;
		return t;
	};
	_proto.huaCard36_i = function () {
		var t = new eui.Image();
		this.huaCard36 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 204;
		return t;
	};
	_proto.huaCard37_i = function () {
		var t = new eui.Image();
		this.huaCard37 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 238;
		return t;
	};
	_proto.dirGroup_i = function () {
		var t = new eui.Group();
		this.dirGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -8;
		t.elementsContent = [this._Group13_i(),this.restMaCardGroup_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 124;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 124;
		t.elementsContent = [this.positionBg_i(),this.position0_i(),this.position1_i(),this.position2_i(),this.position3_i(),this.daojishi_i(),this._img_dirTxt0_i(),this._img_dirTxt1_i(),this._img_dirTxt2_i(),this._img_dirTxt3_i()];
		return t;
	};
	_proto.positionBg_i = function () {
		var t = new eui.Image();
		this.positionBg = t;
		t.anchorOffsetX = 58.5;
		t.anchorOffsetY = 58.5;
		t.horizontalCenter = 0;
		t.rotation = 270;
		t.source = "feiyu_mjgame_json.xsmj_dir_bg0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.position0_i = function () {
		var t = new eui.Image();
		this.position0 = t;
		t.bottom = -21;
		t.horizontalCenter = 0;
		t.rotation = 180;
		t.source = "feiyu_mjgame_json.xsmj_dir_who";
		t.visible = false;
		return t;
	};
	_proto.position1_i = function () {
		var t = new eui.Image();
		this.position1 = t;
		t.right = -22;
		t.rotation = 90;
		t.source = "feiyu_mjgame_json.xsmj_dir_who";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.position2_i = function () {
		var t = new eui.Image();
		this.position2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_dir_who";
		t.top = -21;
		t.visible = false;
		return t;
	};
	_proto.position3_i = function () {
		var t = new eui.Image();
		this.position3 = t;
		t.rotation = 270;
		t.source = "feiyu_mjgame_json.xsmj_dir_who";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = -21.5;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.BitmapLabel();
		this.daojishi = t;
		t.font = "mj_countdown_fnt";
		t.horizontalCenter = 0;
		t.text = "20";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_dirTxt0_i = function () {
		var t = new eui.Image();
		this._img_dirTxt0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_dir_west0";
		t.y = 88;
		return t;
	};
	_proto._img_dirTxt1_i = function () {
		var t = new eui.Image();
		this._img_dirTxt1 = t;
		t.source = "feiyu_mjgame_json.xsmj_dir_west1";
		t.verticalCenter = 0.5;
		t.x = 87.5;
		return t;
	};
	_proto._img_dirTxt2_i = function () {
		var t = new eui.Image();
		this._img_dirTxt2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_dir_west1";
		t.y = 17.5;
		return t;
	};
	_proto._img_dirTxt3_i = function () {
		var t = new eui.Image();
		this._img_dirTxt3 = t;
		t.source = "feiyu_mjgame_json.xsmj_dir_west1";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto.restMaCardGroup_i = function () {
		var t = new eui.Group();
		this.restMaCardGroup = t;
		t.verticalCenter = 0;
		t.x = 266.98;
		t.elementsContent = [this._Rect6_i(),this.restMaCardNum_i(),this._Image13_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.height = 45;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto.restMaCardNum_i = function () {
		var t = new eui.Label();
		this.restMaCardNum = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 14.5;
		t.size = 30;
		t.text = "20";
		t.textAlign = "center";
		t.textColor = 0xefdf23;
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_cardbum_icon";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._gp_content_i = function () {
		var t = new eui.Group();
		this._gp_content = t;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.HandCard0_i = function () {
		var t = new eui.Group();
		this.HandCard0 = t;
		t.x = 57.1;
		t.y = 593;
		t.elementsContent = [this.handCard00_i(),this.handCard01_i(),this.handCard02_i(),this.handCard03_i(),this.handCard04_i(),this.handCard05_i(),this.handCard06_i(),this.handCard07_i(),this.handCard08_i(),this.handCard09_i(),this.handCard010_i(),this.handCard011_i(),this.handCard012_i(),this.moCard0_i()];
		return t;
	};
	_proto.handCard00_i = function () {
		var t = new eui.Image();
		this.handCard00 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.handCard01_i = function () {
		var t = new eui.Image();
		this.handCard01 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 77.35;
		return t;
	};
	_proto.handCard02_i = function () {
		var t = new eui.Image();
		this.handCard02 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 154.7;
		return t;
	};
	_proto.handCard03_i = function () {
		var t = new eui.Image();
		this.handCard03 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 232.05;
		return t;
	};
	_proto.handCard04_i = function () {
		var t = new eui.Image();
		this.handCard04 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 309.4;
		return t;
	};
	_proto.handCard05_i = function () {
		var t = new eui.Image();
		this.handCard05 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 386.75;
		return t;
	};
	_proto.handCard06_i = function () {
		var t = new eui.Image();
		this.handCard06 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 464.1;
		return t;
	};
	_proto.handCard07_i = function () {
		var t = new eui.Image();
		this.handCard07 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 541.45;
		return t;
	};
	_proto.handCard08_i = function () {
		var t = new eui.Image();
		this.handCard08 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 618.8;
		return t;
	};
	_proto.handCard09_i = function () {
		var t = new eui.Image();
		this.handCard09 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 696.15;
		return t;
	};
	_proto.handCard010_i = function () {
		var t = new eui.Image();
		this.handCard010 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 773.5;
		return t;
	};
	_proto.handCard011_i = function () {
		var t = new eui.Image();
		this.handCard011 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = -1;
		t.x = 850.85;
		return t;
	};
	_proto.handCard012_i = function () {
		var t = new eui.Image();
		this.handCard012 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 928.2;
		return t;
	};
	_proto.moCard0_i = function () {
		var t = new eui.Image();
		this.moCard0 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 1027;
		return t;
	};
	_proto.HandCard1_i = function () {
		var t = new eui.Group();
		this.HandCard1 = t;
		t.x = 1071.37;
		t.y = 108.21;
		t.elementsContent = [this.moCard1_i(),this.handCard112_i(),this.handCard111_i(),this.handCard110_i(),this.handCard19_i(),this.handCard18_i(),this.handCard17_i(),this.handCard16_i(),this.handCard15_i(),this.handCard14_i(),this.handCard13_i(),this.handCard12_i(),this.handCard11_i(),this.handCard10_i()];
		return t;
	};
	_proto.moCard1_i = function () {
		var t = new eui.Image();
		this.moCard1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.y = 0;
		return t;
	};
	_proto.handCard112_i = function () {
		var t = new eui.Image();
		this.handCard112 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.y = 55;
		return t;
	};
	_proto.handCard111_i = function () {
		var t = new eui.Image();
		this.handCard111 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 10;
		t.y = 82;
		return t;
	};
	_proto.handCard110_i = function () {
		var t = new eui.Image();
		this.handCard110 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 20;
		t.y = 109;
		return t;
	};
	_proto.handCard19_i = function () {
		var t = new eui.Image();
		this.handCard19 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 30;
		t.y = 136;
		return t;
	};
	_proto.handCard18_i = function () {
		var t = new eui.Image();
		this.handCard18 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 40;
		t.y = 163;
		return t;
	};
	_proto.handCard17_i = function () {
		var t = new eui.Image();
		this.handCard17 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 50;
		t.y = 190;
		return t;
	};
	_proto.handCard16_i = function () {
		var t = new eui.Image();
		this.handCard16 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 60;
		t.y = 217;
		return t;
	};
	_proto.handCard15_i = function () {
		var t = new eui.Image();
		this.handCard15 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 70;
		t.y = 244;
		return t;
	};
	_proto.handCard14_i = function () {
		var t = new eui.Image();
		this.handCard14 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 80;
		t.y = 271;
		return t;
	};
	_proto.handCard13_i = function () {
		var t = new eui.Image();
		this.handCard13 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 90;
		t.y = 298;
		return t;
	};
	_proto.handCard12_i = function () {
		var t = new eui.Image();
		this.handCard12 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 100;
		t.y = 325;
		return t;
	};
	_proto.handCard11_i = function () {
		var t = new eui.Image();
		this.handCard11 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 110;
		t.y = 352;
		return t;
	};
	_proto.handCard10_i = function () {
		var t = new eui.Image();
		this.handCard10 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 120;
		t.y = 377;
		return t;
	};
	_proto.HandCard2_i = function () {
		var t = new eui.Group();
		this.HandCard2 = t;
		t.horizontalCenter = 2;
		t.y = 69.95;
		t.elementsContent = [this.moCard2_i(),this.handCard212_i(),this.handCard211_i(),this.handCard210_i(),this.handCard29_i(),this.handCard28_i(),this.handCard27_i(),this.handCard26_i(),this.handCard25_i(),this.handCard24_i(),this.handCard23_i(),this.handCard22_i(),this.handCard21_i(),this.handCard20_i()];
		return t;
	};
	_proto.moCard2_i = function () {
		var t = new eui.Image();
		this.moCard2 = t;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.handCard212_i = function () {
		var t = new eui.Image();
		this.handCard212 = t;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.x = 50;
		return t;
	};
	_proto.handCard211_i = function () {
		var t = new eui.Image();
		this.handCard211 = t;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.x = 87;
		return t;
	};
	_proto.handCard210_i = function () {
		var t = new eui.Image();
		this.handCard210 = t;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.x = 125;
		t.y = 20;
		return t;
	};
	_proto.handCard29_i = function () {
		var t = new eui.Image();
		this.handCard29 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 163;
		t.y = 30;
		return t;
	};
	_proto.handCard28_i = function () {
		var t = new eui.Image();
		this.handCard28 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 201;
		t.y = 40;
		return t;
	};
	_proto.handCard27_i = function () {
		var t = new eui.Image();
		this.handCard27 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 239;
		t.y = 50;
		return t;
	};
	_proto.handCard26_i = function () {
		var t = new eui.Image();
		this.handCard26 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.handCard25_i = function () {
		var t = new eui.Image();
		this.handCard25 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 314;
		t.y = 70;
		return t;
	};
	_proto.handCard24_i = function () {
		var t = new eui.Image();
		this.handCard24 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 351;
		t.y = 80;
		return t;
	};
	_proto.handCard23_i = function () {
		var t = new eui.Image();
		this.handCard23 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 388;
		t.y = 90;
		return t;
	};
	_proto.handCard22_i = function () {
		var t = new eui.Image();
		this.handCard22 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 425;
		t.y = 100;
		return t;
	};
	_proto.handCard21_i = function () {
		var t = new eui.Image();
		this.handCard21 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 462;
		t.y = 110;
		return t;
	};
	_proto.handCard20_i = function () {
		var t = new eui.Image();
		this.handCard20 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 499;
		t.y = 120;
		return t;
	};
	_proto.HandCard3_i = function () {
		var t = new eui.Group();
		this.HandCard3 = t;
		t.x = 117.59;
		t.y = 82.49;
		t.elementsContent = [this.handCard30_i(),this.handCard31_i(),this.handCard32_i(),this.handCard33_i(),this.handCard34_i(),this.handCard35_i(),this.handCard36_i(),this.handCard37_i(),this.handCard38_i(),this.handCard39_i(),this.handCard310_i(),this.handCard311_i(),this.handCard312_i(),this.moCard3_i()];
		return t;
	};
	_proto.handCard30_i = function () {
		var t = new eui.Image();
		this.handCard30 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.y = 0;
		return t;
	};
	_proto.handCard31_i = function () {
		var t = new eui.Image();
		this.handCard31 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.y = 28;
		return t;
	};
	_proto.handCard32_i = function () {
		var t = new eui.Image();
		this.handCard32 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 10;
		t.y = 56;
		return t;
	};
	_proto.handCard33_i = function () {
		var t = new eui.Image();
		this.handCard33 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 20;
		t.y = 84;
		return t;
	};
	_proto.handCard34_i = function () {
		var t = new eui.Image();
		this.handCard34 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 30;
		t.y = 112;
		return t;
	};
	_proto.handCard35_i = function () {
		var t = new eui.Image();
		this.handCard35 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 40;
		t.y = 140;
		return t;
	};
	_proto.handCard36_i = function () {
		var t = new eui.Image();
		this.handCard36 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 50;
		t.y = 168;
		return t;
	};
	_proto.handCard37_i = function () {
		var t = new eui.Image();
		this.handCard37 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 60;
		t.y = 196;
		return t;
	};
	_proto.handCard38_i = function () {
		var t = new eui.Image();
		this.handCard38 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 70;
		t.y = 224;
		return t;
	};
	_proto.handCard39_i = function () {
		var t = new eui.Image();
		this.handCard39 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 80;
		t.y = 252;
		return t;
	};
	_proto.handCard310_i = function () {
		var t = new eui.Image();
		this.handCard310 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 90;
		t.y = 280;
		return t;
	};
	_proto.handCard311_i = function () {
		var t = new eui.Image();
		this.handCard311 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 100;
		t.y = 308;
		return t;
	};
	_proto.handCard312_i = function () {
		var t = new eui.Image();
		this.handCard312 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 110;
		t.y = 336;
		return t;
	};
	_proto.moCard3_i = function () {
		var t = new eui.Image();
		this.moCard3 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 120;
		t.y = 391;
		return t;
	};
	_proto.outCard0_i = function () {
		var t = new eui.Group();
		this.outCard0 = t;
		t.horizontalCenter = 16.5;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.y = 342.42;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard034_i = function () {
		var t = new eui.Image();
		this.outCard034 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard035_i = function () {
		var t = new eui.Image();
		this.outCard035 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard036_i = function () {
		var t = new eui.Image();
		this.outCard036 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard037_i = function () {
		var t = new eui.Image();
		this.outCard037 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard038_i = function () {
		var t = new eui.Image();
		this.outCard038 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard039_i = function () {
		var t = new eui.Image();
		this.outCard039 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.outCard040_i = function () {
		var t = new eui.Image();
		this.outCard040 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.outCard041_i = function () {
		var t = new eui.Image();
		this.outCard041 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.outCard042_i = function () {
		var t = new eui.Image();
		this.outCard042 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.outCard043_i = function () {
		var t = new eui.Image();
		this.outCard043 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 545;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 70;
		t.elementsContent = [this.outCard022_i(),this.outCard023_i(),this.outCard024_i(),this.outCard025_i(),this.outCard026_i(),this.outCard027_i(),this.outCard028_i(),this.outCard029_i(),this.outCard030_i(),this.outCard031_i(),this.outCard032_i()];
		return t;
	};
	_proto.outCard022_i = function () {
		var t = new eui.Image();
		this.outCard022 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard023_i = function () {
		var t = new eui.Image();
		this.outCard023 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard024_i = function () {
		var t = new eui.Image();
		this.outCard024 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard025_i = function () {
		var t = new eui.Image();
		this.outCard025 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard026_i = function () {
		var t = new eui.Image();
		this.outCard026 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard027_i = function () {
		var t = new eui.Image();
		this.outCard027 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard028_i = function () {
		var t = new eui.Image();
		this.outCard028 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.outCard029_i = function () {
		var t = new eui.Image();
		this.outCard029 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.outCard030_i = function () {
		var t = new eui.Image();
		this.outCard030 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.outCard031_i = function () {
		var t = new eui.Image();
		this.outCard031 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.outCard032_i = function () {
		var t = new eui.Image();
		this.outCard032 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 545;
		t.y = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this.outCard011_i(),this.outCard012_i(),this.outCard013_i(),this.outCard014_i(),this.outCard015_i(),this.outCard016_i(),this.outCard017_i(),this.outCard018_i(),this.outCard019_i(),this.outCard020_i(),this.outCard021_i()];
		return t;
	};
	_proto.outCard011_i = function () {
		var t = new eui.Image();
		this.outCard011 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard012_i = function () {
		var t = new eui.Image();
		this.outCard012 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard013_i = function () {
		var t = new eui.Image();
		this.outCard013 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard014_i = function () {
		var t = new eui.Image();
		this.outCard014 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard015_i = function () {
		var t = new eui.Image();
		this.outCard015 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard016_i = function () {
		var t = new eui.Image();
		this.outCard016 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard017_i = function () {
		var t = new eui.Image();
		this.outCard017 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.outCard018_i = function () {
		var t = new eui.Image();
		this.outCard018 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.outCard019_i = function () {
		var t = new eui.Image();
		this.outCard019 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.outCard020_i = function () {
		var t = new eui.Image();
		this.outCard020 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.outCard021_i = function () {
		var t = new eui.Image();
		this.outCard021 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 545;
		t.y = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 210;
		t.elementsContent = [this.outCard00_i(),this.outCard01_i(),this.outCard02_i(),this.outCard03_i(),this.outCard04_i(),this.outCard05_i(),this.outCard06_i(),this.outCard07_i(),this.outCard08_i(),this.outCard09_i(),this.outCard010_i()];
		return t;
	};
	_proto.outCard00_i = function () {
		var t = new eui.Image();
		this.outCard00 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard01_i = function () {
		var t = new eui.Image();
		this.outCard01 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard02_i = function () {
		var t = new eui.Image();
		this.outCard02 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard03_i = function () {
		var t = new eui.Image();
		this.outCard03 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard04_i = function () {
		var t = new eui.Image();
		this.outCard04 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard05_i = function () {
		var t = new eui.Image();
		this.outCard05 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard06_i = function () {
		var t = new eui.Image();
		this.outCard06 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.outCard07_i = function () {
		var t = new eui.Image();
		this.outCard07 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.outCard08_i = function () {
		var t = new eui.Image();
		this.outCard08 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.outCard09_i = function () {
		var t = new eui.Image();
		this.outCard09 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.outCard010_i = function () {
		var t = new eui.Image();
		this.outCard010 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 545;
		t.y = 0;
		return t;
	};
	_proto.outCard2_i = function () {
		var t = new eui.Group();
		this.outCard2 = t;
		t.horizontalCenter = 16.5;
		t.scaleX = 0.75;
		t.scaleY = 0.8;
		t.y = 136.76;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard29_i = function () {
		var t = new eui.Image();
		this.outCard29 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard28_i = function () {
		var t = new eui.Image();
		this.outCard28 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard27_i = function () {
		var t = new eui.Image();
		this.outCard27 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard26_i = function () {
		var t = new eui.Image();
		this.outCard26 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard25_i = function () {
		var t = new eui.Image();
		this.outCard25 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard24_i = function () {
		var t = new eui.Image();
		this.outCard24 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.outCard23_i = function () {
		var t = new eui.Image();
		this.outCard23 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.outCard22_i = function () {
		var t = new eui.Image();
		this.outCard22 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.outCard21_i = function () {
		var t = new eui.Image();
		this.outCard21 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.outCard20_i = function () {
		var t = new eui.Image();
		this.outCard20 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 550;
		t.y = 0;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 70;
		t.elementsContent = [this.outCard221_i(),this.outCard220_i(),this.outCard219_i(),this.outCard218_i(),this.outCard217_i(),this.outCard216_i(),this.outCard215_i(),this.outCard214_i(),this.outCard213_i(),this.outCard212_i(),this.outCard211_i()];
		return t;
	};
	_proto.outCard221_i = function () {
		var t = new eui.Image();
		this.outCard221 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard220_i = function () {
		var t = new eui.Image();
		this.outCard220 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard219_i = function () {
		var t = new eui.Image();
		this.outCard219 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard218_i = function () {
		var t = new eui.Image();
		this.outCard218 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard217_i = function () {
		var t = new eui.Image();
		this.outCard217 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard216_i = function () {
		var t = new eui.Image();
		this.outCard216 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard215_i = function () {
		var t = new eui.Image();
		this.outCard215 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.outCard214_i = function () {
		var t = new eui.Image();
		this.outCard214 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.outCard213_i = function () {
		var t = new eui.Image();
		this.outCard213 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.outCard212_i = function () {
		var t = new eui.Image();
		this.outCard212 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.outCard211_i = function () {
		var t = new eui.Image();
		this.outCard211 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 550;
		t.y = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this.outCard232_i(),this.outCard231_i(),this.outCard230_i(),this.outCard229_i(),this.outCard228_i(),this.outCard227_i(),this.outCard226_i(),this.outCard225_i(),this.outCard224_i(),this.outCard223_i(),this.outCard222_i()];
		return t;
	};
	_proto.outCard232_i = function () {
		var t = new eui.Image();
		this.outCard232 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard231_i = function () {
		var t = new eui.Image();
		this.outCard231 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard230_i = function () {
		var t = new eui.Image();
		this.outCard230 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard229_i = function () {
		var t = new eui.Image();
		this.outCard229 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard228_i = function () {
		var t = new eui.Image();
		this.outCard228 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard227_i = function () {
		var t = new eui.Image();
		this.outCard227 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard226_i = function () {
		var t = new eui.Image();
		this.outCard226 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.outCard225_i = function () {
		var t = new eui.Image();
		this.outCard225 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.outCard224_i = function () {
		var t = new eui.Image();
		this.outCard224 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.outCard223_i = function () {
		var t = new eui.Image();
		this.outCard223 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.outCard222_i = function () {
		var t = new eui.Image();
		this.outCard222 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 550;
		t.y = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 210;
		t.elementsContent = [this.outCard243_i(),this.outCard242_i(),this.outCard241_i(),this.outCard240_i(),this.outCard239_i(),this.outCard238_i(),this.outCard237_i(),this.outCard236_i(),this.outCard235_i(),this.outCard234_i(),this.outCard233_i()];
		return t;
	};
	_proto.outCard243_i = function () {
		var t = new eui.Image();
		this.outCard243 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard242_i = function () {
		var t = new eui.Image();
		this.outCard242 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard241_i = function () {
		var t = new eui.Image();
		this.outCard241 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard240_i = function () {
		var t = new eui.Image();
		this.outCard240 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard239_i = function () {
		var t = new eui.Image();
		this.outCard239 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard238_i = function () {
		var t = new eui.Image();
		this.outCard238 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard237_i = function () {
		var t = new eui.Image();
		this.outCard237 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.outCard236_i = function () {
		var t = new eui.Image();
		this.outCard236 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.outCard235_i = function () {
		var t = new eui.Image();
		this.outCard235 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.outCard234_i = function () {
		var t = new eui.Image();
		this.outCard234 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.outCard233_i = function () {
		var t = new eui.Image();
		this.outCard233 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 550;
		t.y = 0;
		return t;
	};
	_proto.outCard1_i = function () {
		var t = new eui.Group();
		this.outCard1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 827.92;
		t.y = 156.78;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard134_i = function () {
		var t = new eui.Image();
		this.outCard134 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard135_i = function () {
		var t = new eui.Image();
		this.outCard135 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard136_i = function () {
		var t = new eui.Image();
		this.outCard136 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard137_i = function () {
		var t = new eui.Image();
		this.outCard137 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard138_i = function () {
		var t = new eui.Image();
		this.outCard138 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard139_i = function () {
		var t = new eui.Image();
		this.outCard139 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 196.44;
		return t;
	};
	_proto.outCard140_i = function () {
		var t = new eui.Image();
		this.outCard140 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 231.4;
		return t;
	};
	_proto.outCard141_i = function () {
		var t = new eui.Image();
		this.outCard141 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 266.36;
		return t;
	};
	_proto.outCard142_i = function () {
		var t = new eui.Image();
		this.outCard142 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 304.28;
		return t;
	};
	_proto.outCard143_i = function () {
		var t = new eui.Image();
		this.outCard143 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard131_i = function () {
		var t = new eui.Image();
		this.outCard131 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard130_i = function () {
		var t = new eui.Image();
		this.outCard130 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard129_i = function () {
		var t = new eui.Image();
		this.outCard129 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard128_i = function () {
		var t = new eui.Image();
		this.outCard128 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard127_i = function () {
		var t = new eui.Image();
		this.outCard127 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard126_i = function () {
		var t = new eui.Image();
		this.outCard126 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 196.44;
		return t;
	};
	_proto.outCard125_i = function () {
		var t = new eui.Image();
		this.outCard125 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 231.4;
		return t;
	};
	_proto.outCard124_i = function () {
		var t = new eui.Image();
		this.outCard124 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 266.36;
		return t;
	};
	_proto.outCard123_i = function () {
		var t = new eui.Image();
		this.outCard123 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 304.28;
		return t;
	};
	_proto.outCard122_i = function () {
		var t = new eui.Image();
		this.outCard122 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard120_i = function () {
		var t = new eui.Image();
		this.outCard120 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard119_i = function () {
		var t = new eui.Image();
		this.outCard119 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard118_i = function () {
		var t = new eui.Image();
		this.outCard118 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard117_i = function () {
		var t = new eui.Image();
		this.outCard117 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard116_i = function () {
		var t = new eui.Image();
		this.outCard116 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard115_i = function () {
		var t = new eui.Image();
		this.outCard115 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 196.44;
		return t;
	};
	_proto.outCard114_i = function () {
		var t = new eui.Image();
		this.outCard114 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 231.4;
		return t;
	};
	_proto.outCard113_i = function () {
		var t = new eui.Image();
		this.outCard113 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 266.36;
		return t;
	};
	_proto.outCard112_i = function () {
		var t = new eui.Image();
		this.outCard112 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 304.28;
		return t;
	};
	_proto.outCard111_i = function () {
		var t = new eui.Image();
		this.outCard111 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard19_i = function () {
		var t = new eui.Image();
		this.outCard19 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard18_i = function () {
		var t = new eui.Image();
		this.outCard18 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard17_i = function () {
		var t = new eui.Image();
		this.outCard17 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard16_i = function () {
		var t = new eui.Image();
		this.outCard16 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard15_i = function () {
		var t = new eui.Image();
		this.outCard15 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard14_i = function () {
		var t = new eui.Image();
		this.outCard14 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 196.44;
		return t;
	};
	_proto.outCard13_i = function () {
		var t = new eui.Image();
		this.outCard13 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 231.4;
		return t;
	};
	_proto.outCard12_i = function () {
		var t = new eui.Image();
		this.outCard12 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 266.36;
		return t;
	};
	_proto.outCard11_i = function () {
		var t = new eui.Image();
		this.outCard11 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 304.28;
		return t;
	};
	_proto.outCard10_i = function () {
		var t = new eui.Image();
		this.outCard10 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
		return t;
	};
	_proto.outCard3_i = function () {
		var t = new eui.Group();
		this.outCard3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 232.45;
		t.y = 140.94;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard31_i = function () {
		var t = new eui.Image();
		this.outCard31 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard32_i = function () {
		var t = new eui.Image();
		this.outCard32 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard33_i = function () {
		var t = new eui.Image();
		this.outCard33 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard34_i = function () {
		var t = new eui.Image();
		this.outCard34 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard35_i = function () {
		var t = new eui.Image();
		this.outCard35 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard36_i = function () {
		var t = new eui.Image();
		this.outCard36 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard37_i = function () {
		var t = new eui.Image();
		this.outCard37 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 228.45;
		return t;
	};
	_proto.outCard38_i = function () {
		var t = new eui.Image();
		this.outCard38 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 263.78;
		return t;
	};
	_proto.outCard39_i = function () {
		var t = new eui.Image();
		this.outCard39 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 300.21;
		return t;
	};
	_proto.outCard310_i = function () {
		var t = new eui.Image();
		this.outCard310 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard312_i = function () {
		var t = new eui.Image();
		this.outCard312 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.outCard313_i = function () {
		var t = new eui.Image();
		this.outCard313 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard314_i = function () {
		var t = new eui.Image();
		this.outCard314 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard315_i = function () {
		var t = new eui.Image();
		this.outCard315 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard316_i = function () {
		var t = new eui.Image();
		this.outCard316 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard317_i = function () {
		var t = new eui.Image();
		this.outCard317 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard318_i = function () {
		var t = new eui.Image();
		this.outCard318 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 228.45;
		return t;
	};
	_proto.outCard319_i = function () {
		var t = new eui.Image();
		this.outCard319 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 263.78;
		return t;
	};
	_proto.outCard320_i = function () {
		var t = new eui.Image();
		this.outCard320 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 300.21;
		return t;
	};
	_proto.outCard321_i = function () {
		var t = new eui.Image();
		this.outCard321 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard323_i = function () {
		var t = new eui.Image();
		this.outCard323 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.outCard324_i = function () {
		var t = new eui.Image();
		this.outCard324 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard325_i = function () {
		var t = new eui.Image();
		this.outCard325 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard326_i = function () {
		var t = new eui.Image();
		this.outCard326 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard327_i = function () {
		var t = new eui.Image();
		this.outCard327 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard328_i = function () {
		var t = new eui.Image();
		this.outCard328 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard329_i = function () {
		var t = new eui.Image();
		this.outCard329 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 228.45;
		return t;
	};
	_proto.outCard330_i = function () {
		var t = new eui.Image();
		this.outCard330 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 263.78;
		return t;
	};
	_proto.outCard331_i = function () {
		var t = new eui.Image();
		this.outCard331 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 300.21;
		return t;
	};
	_proto.outCard332_i = function () {
		var t = new eui.Image();
		this.outCard332 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard334_i = function () {
		var t = new eui.Image();
		this.outCard334 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.outCard335_i = function () {
		var t = new eui.Image();
		this.outCard335 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard336_i = function () {
		var t = new eui.Image();
		this.outCard336 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard337_i = function () {
		var t = new eui.Image();
		this.outCard337 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard338_i = function () {
		var t = new eui.Image();
		this.outCard338 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard339_i = function () {
		var t = new eui.Image();
		this.outCard339 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard340_i = function () {
		var t = new eui.Image();
		this.outCard340 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 228.45;
		return t;
	};
	_proto.outCard341_i = function () {
		var t = new eui.Image();
		this.outCard341 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 263.78;
		return t;
	};
	_proto.outCard342_i = function () {
		var t = new eui.Image();
		this.outCard342 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 300.21;
		return t;
	};
	_proto.outCard343_i = function () {
		var t = new eui.Image();
		this.outCard343 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
		return t;
	};
	_proto.actionCardGroud0_i = function () {
		var t = new eui.Group();
		this.actionCardGroud0 = t;
		t.bottom = -4;
		t.x = 55.72;
		t.elementsContent = [this.actionItem00_i(),this.actionItem01_i(),this.actionItem02_i(),this.actionItem03_i()];
		return t;
	};
	_proto.actionItem00_i = function () {
		var t = new eui.Group();
		this.actionItem00 = t;
		t.height = 109;
		t.width = 165;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard000_i(),this.actioncard001_i(),this.actioncard002_i(),this.actioncard003_i(),this._Image14_i()];
		return t;
	};
	_proto.actioncard000_i = function () {
		var t = new eui.Image();
		this.actioncard000 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard001_i = function () {
		var t = new eui.Image();
		this.actioncard001 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard002_i = function () {
		var t = new eui.Image();
		this.actioncard002 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard003_i = function () {
		var t = new eui.Image();
		this.actioncard003 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
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
		t.height = 103;
		t.width = 165;
		t.x = 200;
		t.y = 0;
		t.elementsContent = [this.actioncard010_i(),this.actioncard011_i(),this.actioncard012_i(),this.actioncard013_i()];
		return t;
	};
	_proto.actioncard010_i = function () {
		var t = new eui.Image();
		this.actioncard010 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard011_i = function () {
		var t = new eui.Image();
		this.actioncard011 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard012_i = function () {
		var t = new eui.Image();
		this.actioncard012 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard013_i = function () {
		var t = new eui.Image();
		this.actioncard013 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem02_i = function () {
		var t = new eui.Group();
		this.actionItem02 = t;
		t.height = 103;
		t.width = 165;
		t.x = 400;
		t.y = 0;
		t.elementsContent = [this.actioncard020_i(),this.actioncard021_i(),this.actioncard022_i(),this.actioncard023_i()];
		return t;
	};
	_proto.actioncard020_i = function () {
		var t = new eui.Image();
		this.actioncard020 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard021_i = function () {
		var t = new eui.Image();
		this.actioncard021 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard022_i = function () {
		var t = new eui.Image();
		this.actioncard022 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard023_i = function () {
		var t = new eui.Image();
		this.actioncard023 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem03_i = function () {
		var t = new eui.Group();
		this.actionItem03 = t;
		t.height = 103;
		t.width = 165;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this.actioncard030_i(),this.actioncard031_i(),this.actioncard032_i(),this.actioncard033_i()];
		return t;
	};
	_proto.actioncard030_i = function () {
		var t = new eui.Image();
		this.actioncard030 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard031_i = function () {
		var t = new eui.Image();
		this.actioncard031 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard032_i = function () {
		var t = new eui.Image();
		this.actioncard032 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard033_i = function () {
		var t = new eui.Image();
		this.actioncard033 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud2_i = function () {
		var t = new eui.Group();
		this.actionCardGroud2 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.x = 401.05;
		t.y = 64.65;
		t.elementsContent = [this.actionItem20_i(),this.actionItem21_i(),this.actionItem22_i(),this.actionItem23_i()];
		return t;
	};
	_proto.actionItem20_i = function () {
		var t = new eui.Group();
		this.actionItem20 = t;
		t.height = 103;
		t.width = 165;
		t.x = 700;
		t.y = 0;
		t.elementsContent = [this.actioncard200_i(),this.actioncard201_i(),this.actioncard202_i(),this._Image15_i(),this.actioncard203_i()];
		return t;
	};
	_proto.actioncard200_i = function () {
		var t = new eui.Image();
		this.actioncard200 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard201_i = function () {
		var t = new eui.Image();
		this.actioncard201 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard202_i = function () {
		var t = new eui.Image();
		this.actioncard202 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "action_card_position_bottom_png";
		t.visible = false;
		t.x = 133.66;
		t.y = 52.88;
		return t;
	};
	_proto.actioncard203_i = function () {
		var t = new eui.Image();
		this.actioncard203 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem21_i = function () {
		var t = new eui.Group();
		this.actionItem21 = t;
		t.height = 103;
		t.width = 165;
		t.x = 500;
		t.y = 0;
		t.elementsContent = [this.actioncard210_i(),this.actioncard211_i(),this.actioncard212_i(),this.actioncard213_i()];
		return t;
	};
	_proto.actioncard210_i = function () {
		var t = new eui.Image();
		this.actioncard210 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard211_i = function () {
		var t = new eui.Image();
		this.actioncard211 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard212_i = function () {
		var t = new eui.Image();
		this.actioncard212 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard213_i = function () {
		var t = new eui.Image();
		this.actioncard213 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem22_i = function () {
		var t = new eui.Group();
		this.actionItem22 = t;
		t.height = 103;
		t.width = 165;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this.actioncard220_i(),this.actioncard221_i(),this.actioncard222_i(),this.actioncard223_i()];
		return t;
	};
	_proto.actioncard220_i = function () {
		var t = new eui.Image();
		this.actioncard220 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard221_i = function () {
		var t = new eui.Image();
		this.actioncard221 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard222_i = function () {
		var t = new eui.Image();
		this.actioncard222 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard223_i = function () {
		var t = new eui.Image();
		this.actioncard223 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem23_i = function () {
		var t = new eui.Group();
		this.actionItem23 = t;
		t.height = 103;
		t.width = 165;
		t.x = 100;
		t.y = 0;
		t.elementsContent = [this.actioncard230_i(),this.actioncard231_i(),this.actioncard232_i(),this.actioncard233_i()];
		return t;
	};
	_proto.actioncard230_i = function () {
		var t = new eui.Image();
		this.actioncard230 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard231_i = function () {
		var t = new eui.Image();
		this.actioncard231 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard232_i = function () {
		var t = new eui.Image();
		this.actioncard232 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard233_i = function () {
		var t = new eui.Image();
		this.actioncard233 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
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
		t.height = 113;
		t.width = 56;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard300_i(),this.actioncard301_i(),this.actioncard302_i(),this.actioncard303_i(),this._Image16_i()];
		return t;
	};
	_proto.actioncard300_i = function () {
		var t = new eui.Image();
		this.actioncard300 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard301_i = function () {
		var t = new eui.Image();
		this.actioncard301 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard302_i = function () {
		var t = new eui.Image();
		this.actioncard302 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard303_i = function () {
		var t = new eui.Image();
		this.actioncard303 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto._Image16_i = function () {
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
		t.height = 113;
		t.width = 56;
		t.y = 120;
		t.elementsContent = [this.actioncard310_i(),this.actioncard311_i(),this.actioncard312_i(),this.actioncard313_i()];
		return t;
	};
	_proto.actioncard310_i = function () {
		var t = new eui.Image();
		this.actioncard310 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard311_i = function () {
		var t = new eui.Image();
		this.actioncard311 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard312_i = function () {
		var t = new eui.Image();
		this.actioncard312 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard313_i = function () {
		var t = new eui.Image();
		this.actioncard313 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem32_i = function () {
		var t = new eui.Group();
		this.actionItem32 = t;
		t.height = 113;
		t.width = 56;
		t.y = 240;
		t.elementsContent = [this.actioncard320_i(),this.actioncard321_i(),this.actioncard322_i(),this.actioncard323_i()];
		return t;
	};
	_proto.actioncard320_i = function () {
		var t = new eui.Image();
		this.actioncard320 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard321_i = function () {
		var t = new eui.Image();
		this.actioncard321 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard322_i = function () {
		var t = new eui.Image();
		this.actioncard322 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard323_i = function () {
		var t = new eui.Image();
		this.actioncard323 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem33_i = function () {
		var t = new eui.Group();
		this.actionItem33 = t;
		t.height = 113;
		t.width = 56;
		t.y = 360;
		t.elementsContent = [this.actioncard330_i(),this.actioncard331_i(),this.actioncard332_i(),this.actioncard333_i()];
		return t;
	};
	_proto.actioncard330_i = function () {
		var t = new eui.Image();
		this.actioncard330 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard331_i = function () {
		var t = new eui.Image();
		this.actioncard331 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard332_i = function () {
		var t = new eui.Image();
		this.actioncard332 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard333_i = function () {
		var t = new eui.Image();
		this.actioncard333 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionCardGroud1_i = function () {
		var t = new eui.Group();
		this.actionCardGroud1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 1074.1;
		t.y = 219.14;
		t.elementsContent = [this.actionItem13_i(),this.actionItem12_i(),this.actionItem11_i(),this.actionItem10_i()];
		return t;
	};
	_proto.actionItem13_i = function () {
		var t = new eui.Group();
		this.actionItem13 = t;
		t.height = 113;
		t.width = 56;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard132_i(),this.actioncard131_i(),this.actioncard130_i(),this._Image17_i(),this.actioncard133_i()];
		return t;
	};
	_proto.actioncard132_i = function () {
		var t = new eui.Image();
		this.actioncard132 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard131_i = function () {
		var t = new eui.Image();
		this.actioncard131 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard130_i = function () {
		var t = new eui.Image();
		this.actioncard130 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto._Image17_i = function () {
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem12_i = function () {
		var t = new eui.Group();
		this.actionItem12 = t;
		t.height = 113;
		t.width = 56;
		t.y = 120;
		t.elementsContent = [this.actioncard122_i(),this.actioncard121_i(),this.actioncard120_i(),this.actioncard123_i()];
		return t;
	};
	_proto.actioncard122_i = function () {
		var t = new eui.Image();
		this.actioncard122 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard121_i = function () {
		var t = new eui.Image();
		this.actioncard121 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard120_i = function () {
		var t = new eui.Image();
		this.actioncard120 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard123_i = function () {
		var t = new eui.Image();
		this.actioncard123 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem11_i = function () {
		var t = new eui.Group();
		this.actionItem11 = t;
		t.height = 113;
		t.width = 56;
		t.y = 240;
		t.elementsContent = [this.actioncard112_i(),this.actioncard111_i(),this.actioncard110_i(),this.actioncard113_i()];
		return t;
	};
	_proto.actioncard112_i = function () {
		var t = new eui.Image();
		this.actioncard112 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard111_i = function () {
		var t = new eui.Image();
		this.actioncard111 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard110_i = function () {
		var t = new eui.Image();
		this.actioncard110 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard113_i = function () {
		var t = new eui.Image();
		this.actioncard113 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem10_i = function () {
		var t = new eui.Group();
		this.actionItem10 = t;
		t.height = 113;
		t.width = 56;
		t.y = 360;
		t.elementsContent = [this.actioncard102_i(),this.actioncard101_i(),this.actioncard100_i(),this.actioncard103_i()];
		return t;
	};
	_proto.actioncard102_i = function () {
		var t = new eui.Image();
		this.actioncard102 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard101_i = function () {
		var t = new eui.Image();
		this.actioncard101 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard100_i = function () {
		var t = new eui.Image();
		this.actioncard100 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard103_i = function () {
		var t = new eui.Image();
		this.actioncard103 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
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
		t.elementsContent = [this._Image18_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image18_i = function () {
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
		t.elementsContent = [this._Image19_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image19_i = function () {
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
	_proto.actiopnGroup0_i = function () {
		var t = new eui.Group();
		this.actiopnGroup0 = t;
		t.height = 105;
		t.width = 815;
		t.x = 182.09;
		t.y = 466.79;
		t.elementsContent = [this.actionBtnGroup00_i(),this.actionBtnGroup01_i(),this.actionBtnGroup02_i(),this.actionBtnGroup03_i(),this.actionBtnGroup04_i(),this.actionBtnGroup05_i()];
		return t;
	};
	_proto.actionBtnGroup00_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup00 = t;
		t.height = 97;
		t.verticalCenter = 0;
		t.width = 98;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn00_i()];
		return t;
	};
	_proto.actionBtn00_i = function () {
		var t = new eui.Button();
		this.actionBtn00 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin745;
		return t;
	};
	_proto.actionBtnGroup01_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup01 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 605.44;
		t.elementsContent = [this.actionBtn01_i(),this.card10_i()];
		return t;
	};
	_proto.actionBtn01_i = function () {
		var t = new eui.Button();
		this.actionBtn01 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -0.5;
		t.skinName = hzmjIndex$Skin746;
		return t;
	};
	_proto.card10_i = function () {
		var t = new eui.Image();
		this.card10 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup02_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup02 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 484.41;
		t.elementsContent = [this.actionBtn02_i(),this.card20_i()];
		return t;
	};
	_proto.actionBtn02_i = function () {
		var t = new eui.Button();
		this.actionBtn02 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin747;
		return t;
	};
	_proto.card20_i = function () {
		var t = new eui.Image();
		this.card20 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup03_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup03 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.x = 357.69;
		t.elementsContent = [this.actionBtn03_i(),this.card30_i()];
		return t;
	};
	_proto.actionBtn03_i = function () {
		var t = new eui.Button();
		this.actionBtn03 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = hzmjIndex$Skin748;
		return t;
	};
	_proto.card30_i = function () {
		var t = new eui.Image();
		this.card30 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup04_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup04 = t;
		t.height = 104;
		t.verticalCenter = 0.5;
		t.x = 236.42;
		t.elementsContent = [this.actionBtn04_i(),this.card40_i()];
		return t;
	};
	_proto.actionBtn04_i = function () {
		var t = new eui.Button();
		this.actionBtn04 = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 69;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin749;
		return t;
	};
	_proto.card40_i = function () {
		var t = new eui.Image();
		this.card40 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup05_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup05 = t;
		t.height = 104;
		t.verticalCenter = 1.5;
		t.width = 100;
		t.x = 105.93;
		t.elementsContent = [this.actionBtn05_i()];
		return t;
	};
	_proto.actionBtn05_i = function () {
		var t = new eui.Button();
		this.actionBtn05 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 57;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin750;
		return t;
	};
	_proto.actiopnGroup1_i = function () {
		var t = new eui.Group();
		this.actiopnGroup1 = t;
		t.height = 105;
		t.rotation = -90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 815;
		t.x = 992.09;
		t.y = 602.79;
		t.elementsContent = [this.actionBtnGroup10_i(),this.actionBtnGroup11_i(),this.actionBtnGroup12_i(),this.actionBtnGroup13_i(),this.actionBtnGroup14_i(),this.actionBtnGroup15_i()];
		return t;
	};
	_proto.actionBtnGroup10_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup10 = t;
		t.height = 97;
		t.verticalCenter = 0;
		t.width = 98;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn10_i()];
		return t;
	};
	_proto.actionBtn10_i = function () {
		var t = new eui.Button();
		this.actionBtn10 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin751;
		return t;
	};
	_proto.actionBtnGroup11_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup11 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 605.44;
		t.elementsContent = [this.actionBtn11_i(),this.card0_i()];
		return t;
	};
	_proto.actionBtn11_i = function () {
		var t = new eui.Button();
		this.actionBtn11 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -0.5;
		t.skinName = hzmjIndex$Skin752;
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup12_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup12 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 484.41;
		t.elementsContent = [this.actionBtn12_i(),this.card1_i()];
		return t;
	};
	_proto.actionBtn12_i = function () {
		var t = new eui.Button();
		this.actionBtn12 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin753;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup13_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup13 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.x = 357.69;
		t.elementsContent = [this.actionBtn13_i(),this.card2_i()];
		return t;
	};
	_proto.actionBtn13_i = function () {
		var t = new eui.Button();
		this.actionBtn13 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = hzmjIndex$Skin754;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup14_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup14 = t;
		t.height = 104;
		t.verticalCenter = 0.5;
		t.x = 236.42;
		t.elementsContent = [this.actionBtn14_i(),this.card3_i()];
		return t;
	};
	_proto.actionBtn14_i = function () {
		var t = new eui.Button();
		this.actionBtn14 = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 69;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin755;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Image();
		this.card3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup15_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup15 = t;
		t.height = 104;
		t.verticalCenter = 1.5;
		t.width = 100;
		t.x = 105.93;
		t.elementsContent = [this.actionBtn15_i()];
		return t;
	};
	_proto.actionBtn15_i = function () {
		var t = new eui.Button();
		this.actionBtn15 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 57;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin756;
		return t;
	};
	_proto.actiopnGroup2_i = function () {
		var t = new eui.Group();
		this.actiopnGroup2 = t;
		t.height = 105;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 815;
		t.x = 408.09;
		t.y = 120.79;
		t.elementsContent = [this.actionBtnGroup20_i(),this.actionBtnGroup21_i(),this.actionBtnGroup22_i(),this.actionBtnGroup23_i(),this.actionBtnGroup24_i(),this.actionBtnGroup25_i()];
		return t;
	};
	_proto.actionBtnGroup20_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup20 = t;
		t.height = 97;
		t.verticalCenter = 0;
		t.width = 98;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn20_i()];
		return t;
	};
	_proto.actionBtn20_i = function () {
		var t = new eui.Button();
		this.actionBtn20 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin757;
		return t;
	};
	_proto.actionBtnGroup21_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup21 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 605.44;
		t.elementsContent = [this.actionBtn21_i(),this.card4_i()];
		return t;
	};
	_proto.actionBtn21_i = function () {
		var t = new eui.Button();
		this.actionBtn21 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -0.5;
		t.skinName = hzmjIndex$Skin758;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Image();
		this.card4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup22_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup22 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 484.41;
		t.elementsContent = [this.actionBtn22_i(),this.card5_i()];
		return t;
	};
	_proto.actionBtn22_i = function () {
		var t = new eui.Button();
		this.actionBtn22 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin759;
		return t;
	};
	_proto.card5_i = function () {
		var t = new eui.Image();
		this.card5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup23_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup23 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.x = 357.69;
		t.elementsContent = [this.actionBtn23_i(),this.card6_i()];
		return t;
	};
	_proto.actionBtn23_i = function () {
		var t = new eui.Button();
		this.actionBtn23 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = hzmjIndex$Skin760;
		return t;
	};
	_proto.card6_i = function () {
		var t = new eui.Image();
		this.card6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup24_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup24 = t;
		t.height = 104;
		t.verticalCenter = 0.5;
		t.x = 236.42;
		t.elementsContent = [this.actionBtn24_i(),this.card7_i()];
		return t;
	};
	_proto.actionBtn24_i = function () {
		var t = new eui.Button();
		this.actionBtn24 = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 69;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin761;
		return t;
	};
	_proto.card7_i = function () {
		var t = new eui.Image();
		this.card7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup25_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup25 = t;
		t.height = 104;
		t.verticalCenter = 1.5;
		t.width = 100;
		t.x = 105.93;
		t.elementsContent = [this.actionBtn25_i()];
		return t;
	};
	_proto.actionBtn25_i = function () {
		var t = new eui.Button();
		this.actionBtn25 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 57;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin762;
		return t;
	};
	_proto.actiopnGroup3_i = function () {
		var t = new eui.Group();
		this.actiopnGroup3 = t;
		t.height = 105;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 815;
		t.x = 226.09;
		t.y = 28.79;
		t.elementsContent = [this.actionBtnGroup30_i(),this.actionBtnGroup31_i(),this.actionBtnGroup32_i(),this.actionBtnGroup33_i(),this.actionBtnGroup34_i(),this.actionBtnGroup35_i()];
		return t;
	};
	_proto.actionBtnGroup30_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup30 = t;
		t.height = 97;
		t.verticalCenter = 0;
		t.width = 98;
		t.x = 716.54;
		t.elementsContent = [this.actionBtn30_i()];
		return t;
	};
	_proto.actionBtn30_i = function () {
		var t = new eui.Button();
		this.actionBtn30 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin763;
		return t;
	};
	_proto.actionBtnGroup31_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup31 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 605.44;
		t.elementsContent = [this.actionBtn31_i(),this.card8_i()];
		return t;
	};
	_proto.actionBtn31_i = function () {
		var t = new eui.Button();
		this.actionBtn31 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -0.5;
		t.skinName = hzmjIndex$Skin764;
		return t;
	};
	_proto.card8_i = function () {
		var t = new eui.Image();
		this.card8 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup32_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup32 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 484.41;
		t.elementsContent = [this.actionBtn32_i(),this.card9_i()];
		return t;
	};
	_proto.actionBtn32_i = function () {
		var t = new eui.Button();
		this.actionBtn32 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin765;
		return t;
	};
	_proto.card9_i = function () {
		var t = new eui.Image();
		this.card9 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup33_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup33 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.x = 357.69;
		t.elementsContent = [this.actionBtn33_i(),this.card11_i()];
		return t;
	};
	_proto.actionBtn33_i = function () {
		var t = new eui.Button();
		this.actionBtn33 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = hzmjIndex$Skin766;
		return t;
	};
	_proto.card11_i = function () {
		var t = new eui.Image();
		this.card11 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup34_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup34 = t;
		t.height = 104;
		t.verticalCenter = 0.5;
		t.x = 236.42;
		t.elementsContent = [this.actionBtn34_i(),this.card12_i()];
		return t;
	};
	_proto.actionBtn34_i = function () {
		var t = new eui.Button();
		this.actionBtn34 = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 69;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin767;
		return t;
	};
	_proto.card12_i = function () {
		var t = new eui.Image();
		this.card12 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup35_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup35 = t;
		t.height = 104;
		t.verticalCenter = 1.5;
		t.width = 100;
		t.x = 105.93;
		t.elementsContent = [this.actionBtn35_i()];
		return t;
	};
	_proto.actionBtn35_i = function () {
		var t = new eui.Button();
		this.actionBtn35 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 57;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin768;
		return t;
	};
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.visible = false;
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
		t.skinName = hzmjIndex$Skin769;
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
		t.skinName = hzmjIndex$Skin770;
		return t;
	};
	_proto.ready_disband_i = function () {
		var t = new eui.Button();
		this.ready_disband = t;
		t.horizontalCenter = 401;
		t.label = "";
		t.verticalCenter = 271.5;
		t.visible = false;
		t.skinName = hzmjIndex$Skin771;
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
	_proto.xxGroup_i = function () {
		var t = new eui.Group();
		this.xxGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 1134.16;
		t.y = 351.13;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin772;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 1133.66;
		t.y = 436.24;
		t.elementsContent = [this.voiceplay_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin773;
		return t;
	};
	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 0;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect7_i(),this._Group30_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 720;
		t.visible = false;
		t.width = 1215;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.x = 83.33;
		t.y = 65.16;
		t.elementsContent = [this._Image20_i(),this._Rect8_i(),this.situp_i(),this.wanfa_i(),this.diaband_i(),this.backHallBtn_i(),this.setting_i(),this.inviteBtn_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 430;
		t.source = "feiyu_mjgame_json.xsmj_background1";
		t.width = 240;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x004c42;
		t.height = 430;
		t.width = 240;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Group();
		this.situp = t;
		t.horizontalCenter = 0.5;
		t.y = 35;
		t.elementsContent = [this._Button1_i(),this._Label5_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin774;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "站起围观";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Group();
		this.wanfa = t;
		t.horizontalCenter = 0.5;
		t.y = 86;
		t.elementsContent = [this._Button2_i(),this._Label6_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin775;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "游戏规则";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Group();
		this.diaband = t;
		t.horizontalCenter = 0.5;
		t.y = 155;
		t.elementsContent = [this._Button3_i(),this._Label7_i()];
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin776;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "解散游戏";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Group();
		this.backHallBtn = t;
		t.horizontalCenter = 0.5;
		t.y = 225;
		t.elementsContent = [this._Button4_i(),this._Label8_i()];
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 1.5;
		t.x = 0;
		t.skinName = hzmjIndex$Skin777;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "返回大厅";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Group();
		this.setting = t;
		t.horizontalCenter = 0.5;
		t.y = 292;
		t.elementsContent = [this._Button5_i(),this._Label9_i()];
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin778;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "游戏设置";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new eui.Group();
		this.inviteBtn = t;
		t.horizontalCenter = 0.5;
		t.y = 355;
		t.elementsContent = [this._Button6_i(),this._Label10_i()];
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin779;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "邀请好友";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.waitGameStart_i = function () {
		var t = new eui.Group();
		this.waitGameStart = t;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.y = 254;
		t.elementsContent = [this.roomOwnerText_i(),this.roomLifeNotice_i(),this.showRule_i(),this._Image21_i()];
		return t;
	};
	_proto.roomOwnerText_i = function () {
		var t = new eui.Label();
		this.roomOwnerText = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "房主：喜来乐";
		t.y = 38;
		return t;
	};
	_proto.roomLifeNotice_i = function () {
		var t = new eui.Label();
		this.roomLifeNotice = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 25;
		t.text = "18:50后未开局，房间将解散！";
		t.y = 76;
		return t;
	};
	_proto.showRule_i = function () {
		var t = new eui.Label();
		this.showRule = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "本局总共：15分钟";
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "feiyu_mjgame_json.xsmj_status_waitstart";
		t.y = 114;
		return t;
	};
	_proto.actionShow_i = function () {
		var t = new eui.Group();
		this.actionShow = t;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1215;
		t.x = 0;
		t.elementsContent = [this._Rect9_i(),this._Group40_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.height = 112;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 138;
		t.width = 690;
		t.elementsContent = [this.selectedChi_i(),this.selectedGang_i(),this._btn_action_cancel_i()];
		return t;
	};
	_proto.selectedChi_i = function () {
		var t = new eui.Group();
		this.selectedChi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.x = 0;
		t.elementsContent = [this.chi0_i(),this.chi1_i(),this.chi2_i()];
		return t;
	};
	_proto.chi0_i = function () {
		var t = new eui.Group();
		this.chi0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Rect10_i(),this._Group31_i(),this._Group32_i(),this._Group33_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 155;
		t.strokeColor = 0xe6c553;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 290;
		t.x = -8;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.chiCardBg00_i(),this.chiCard00_i()];
		return t;
	};
	_proto.chiCardBg00_i = function () {
		var t = new eui.Image();
		this.chiCardBg00 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard00_i = function () {
		var t = new eui.Image();
		this.chiCard00 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 91;
		t.elementsContent = [this.chiCardBg01_i(),this.chiCard01_i()];
		return t;
	};
	_proto.chiCardBg01_i = function () {
		var t = new eui.Image();
		this.chiCardBg01 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard01_i = function () {
		var t = new eui.Image();
		this.chiCard01 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 182;
		t.elementsContent = [this.chiCardBg02_i(),this.chiCard02_i()];
		return t;
	};
	_proto.chiCardBg02_i = function () {
		var t = new eui.Image();
		this.chiCardBg02 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard02_i = function () {
		var t = new eui.Image();
		this.chiCard02 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto.chi1_i = function () {
		var t = new eui.Group();
		this.chi1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 260;
		t.y = 10;
		t.elementsContent = [this._Rect11_i(),this._Group34_i(),this._Group35_i(),this._Group36_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 155;
		t.strokeColor = 0xE6C553;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 290;
		t.x = -8;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.chiCardBg10_i(),this.chiCard10_i()];
		return t;
	};
	_proto.chiCardBg10_i = function () {
		var t = new eui.Image();
		this.chiCardBg10 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard10_i = function () {
		var t = new eui.Image();
		this.chiCard10 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 91;
		t.elementsContent = [this.chiCardBg11_i(),this.chiCard11_i()];
		return t;
	};
	_proto.chiCardBg11_i = function () {
		var t = new eui.Image();
		this.chiCardBg11 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard11_i = function () {
		var t = new eui.Image();
		this.chiCard11 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 182;
		t.elementsContent = [this.chiCardBg12_i(),this.chiCard12_i()];
		return t;
	};
	_proto.chiCardBg12_i = function () {
		var t = new eui.Image();
		this.chiCardBg12 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard12_i = function () {
		var t = new eui.Image();
		this.chiCard12 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto.chi2_i = function () {
		var t = new eui.Group();
		this.chi2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 520;
		t.y = 20;
		t.elementsContent = [this._Rect12_i(),this._Group37_i(),this._Group38_i(),this._Group39_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 155;
		t.strokeColor = 0xE6C553;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 290;
		t.x = -8;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.chiCardBg20_i(),this.chiCard20_i()];
		return t;
	};
	_proto.chiCardBg20_i = function () {
		var t = new eui.Image();
		this.chiCardBg20 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard20_i = function () {
		var t = new eui.Image();
		this.chiCard20 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 91;
		t.elementsContent = [this.chiCardBg21_i(),this.chiCard21_i()];
		return t;
	};
	_proto.chiCardBg21_i = function () {
		var t = new eui.Image();
		this.chiCardBg21 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard21_i = function () {
		var t = new eui.Image();
		this.chiCard21 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 182;
		t.elementsContent = [this.chiCardBg22_i(),this.chiCard22_i()];
		return t;
	};
	_proto.chiCardBg22_i = function () {
		var t = new eui.Image();
		this.chiCardBg22 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard22_i = function () {
		var t = new eui.Image();
		this.chiCard22 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto.selectedGang_i = function () {
		var t = new eui.Group();
		this.selectedGang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 368.18;
		t.elementsContent = [this._gp_gang0_i(),this._gp_gang1_i(),this._gp_gang2_i(),this._gp_gang3_i()];
		return t;
	};
	_proto._gp_gang0_i = function () {
		var t = new eui.Group();
		this._gp_gang0 = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.gamgBg0_i(),this.gang0_i()];
		return t;
	};
	_proto.gamgBg0_i = function () {
		var t = new eui.Image();
		this.gamgBg0 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.gang0_i = function () {
		var t = new eui.Image();
		this.gang0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._gp_gang1_i = function () {
		var t = new eui.Group();
		this._gp_gang1 = t;
		t.verticalCenter = 0;
		t.x = 100;
		t.y = 10;
		t.elementsContent = [this.gamgBg1_i(),this.gang1_i()];
		return t;
	};
	_proto.gamgBg1_i = function () {
		var t = new eui.Image();
		this.gamgBg1 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.gang1_i = function () {
		var t = new eui.Image();
		this.gang1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._gp_gang2_i = function () {
		var t = new eui.Group();
		this._gp_gang2 = t;
		t.verticalCenter = 0;
		t.x = 200;
		t.y = 20;
		t.elementsContent = [this.gamgBg2_i(),this.gang2_i()];
		return t;
	};
	_proto.gamgBg2_i = function () {
		var t = new eui.Image();
		this.gamgBg2 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.gang2_i = function () {
		var t = new eui.Image();
		this.gang2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._gp_gang3_i = function () {
		var t = new eui.Group();
		this._gp_gang3 = t;
		t.verticalCenter = 0;
		t.x = 300;
		t.y = 30;
		t.elementsContent = [this.gamgBg3_i(),this.gang3_i()];
		return t;
	};
	_proto.gamgBg3_i = function () {
		var t = new eui.Image();
		this.gamgBg3 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.gang3_i = function () {
		var t = new eui.Image();
		this.gang3 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._btn_action_cancel_i = function () {
		var t = new eui.Button();
		this._btn_action_cancel = t;
		t.label = "";
		t.verticalCenter = 0.5;
		t.x = 765.99;
		t.skinName = hzmjIndex$Skin780;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.visible = false;
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -7.5;
		t.width = 1080;
		t.y = 0;
		t.elementsContent = [this._img_topbg_i(),this._Group41_i(),this._Group42_i(),this.playerBtn_i(),this._Group43_i(),this.showFJGroup_i(),this._Group44_i(),this._Group45_i(),this._Group46_i(),this._Group47_i()];
		return t;
	};
	_proto._img_topbg_i = function () {
		var t = new eui.Image();
		this._img_topbg = t;
		t.height = 60;
		t.horizontalCenter = 56;
		t.source = "feiyu_mjgame_json.xsmj_top_menubg0";
		t.y = 0;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.height = 63;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 64;
		t.x = 20;
		t.elementsContent = [this.menu_i()];
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin781;
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.height = 63;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 64;
		t.x = 94;
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
		t.skinName = hzmjIndex$Skin782;
		return t;
	};
	_proto.playerBtn_i = function () {
		var t = new eui.Group();
		this.playerBtn = t;
		t.height = 63;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 64;
		t.x = 881.96;
		t.elementsContent = [this.playerBtnThree_i(),this.playerBtntwo_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto.playerBtnThree_i = function () {
		var t = new eui.Button();
		this.playerBtnThree = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin783;
		return t;
	};
	_proto.playerBtntwo_i = function () {
		var t = new eui.Image();
		this.playerBtntwo = t;
		t.source = "feiyu_mjgame_json.xsmj_top_musicxian0";
		t.verticalCenter = 0.5;
		t.x = 39.14;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.source = "feiyu_mjgame_json.xsmj_menu_noticedian";
		t.x = 50.58;
		t.y = 0;
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.height = 63;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 64;
		t.x = 800;
		t.elementsContent = [this._btn_rule_i()];
		return t;
	};
	_proto._btn_rule_i = function () {
		var t = new eui.Button();
		this._btn_rule = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin784;
		return t;
	};
	_proto.showFJGroup_i = function () {
		var t = new eui.Group();
		this.showFJGroup = t;
		t.verticalCenter = -1.5;
		t.x = 238.08;
		t.elementsContent = [this._Label11_i(),this.roompwd_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "房间号:";
		t.textColor = 0x59caaf;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "666666";
		t.textColor = 0x59caaf;
		t.verticalCenter = 0;
		t.x = 89.98;
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -1.5;
		t.x = 672.74;
		t.elementsContent = [this.jushu_i()];
		return t;
	};
	_proto.jushu_i = function () {
		var t = new eui.Label();
		this.jushu = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "16/16局";
		t.textAlign = "center";
		t.textColor = 0x59caaf;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -1.5;
		t.x = 780.74;
		t.elementsContent = [this._txt_wanfa_i()];
		return t;
	};
	_proto._txt_wanfa_i = function () {
		var t = new eui.Label();
		this._txt_wanfa = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "清12混10";
		t.textAlign = "center";
		t.textColor = 0x59CAAF;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -55.5;
		t.verticalCenter = -1.5;
		t.elementsContent = [this._txt_quan_i()];
		return t;
	};
	_proto._txt_quan_i = function () {
		var t = new eui.Label();
		this._txt_quan = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "东风圈";
		t.textAlign = "center";
		t.textColor = 0x59CAAF;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 52.5;
		t.verticalCenter = -1.5;
		t.elementsContent = [this._txt_playcount_i()];
		return t;
	};
	_proto._txt_playcount_i = function () {
		var t = new eui.Label();
		this._txt_playcount = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "东风圈";
		t.textAlign = "center";
		t.textColor = 0x59CAAF;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_shortest_i = function () {
		var t = new eui.Group();
		this._gp_shortest = t;
		t.height = 720;
		t.visible = false;
		t.width = 1215;
		t.elementsContent = [this._Rect13_i(),this._Group51_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image22_i(),this._Label12_i(),this._Group49_i(),this._Group50_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 350;
		t.scale9Grid = new egret.Rectangle(198,70,233,16);
		t.source = "feiyu_mjgame_json.xsmj_setbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.stroke = 1;
		t.text = "提示";
		t.y = 10;
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 256.68;
		t.elementsContent = [this._btn_shortest_continue_i(),this._btn_shortest_endgame_i()];
		return t;
	};
	_proto._btn_shortest_continue_i = function () {
		var t = new eui.Button();
		this._btn_shortest_continue = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin785;
		return t;
	};
	_proto._btn_shortest_endgame_i = function () {
		var t = new eui.Button();
		this._btn_shortest_endgame = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 399.56;
		t.skinName = hzmjIndex$Skin786;
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 564;
		t.y = 90;
		t.elementsContent = [this._txt_shortest_item0_i(),this._txt_shortest_item1_i(),this._txt_shortest_item2_i()];
		return t;
	};
	_proto._txt_shortest_item0_i = function () {
		var t = new eui.Label();
		this._txt_shortest_item0 = t;
		t.text = "[网络科技公司]和[网络科技公司]距离500米";
		t.textColor = 0xcec8c8;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shortest_item1_i = function () {
		var t = new eui.Label();
		this._txt_shortest_item1 = t;
		t.text = "[网络科技公司]和[网络科技公司]距离500米";
		t.textColor = 0xCEC8C8;
		t.x = 0;
		t.y = 50;
		return t;
	};
	_proto._txt_shortest_item2_i = function () {
		var t = new eui.Label();
		this._txt_shortest_item2 = t;
		t.text = "[网络科技公司]和[网络科技公司]距离500米";
		t.textColor = 0xCEC8C8;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto._gp_shengyi_i = function () {
		var t = new eui.Group();
		this._gp_shengyi = t;
		t.height = 720;
		t.visible = false;
		t.width = 1215;
		t.elementsContent = [this._Rect14_i(),this._Group54_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		return t;
	};
	_proto._Group54_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image23_i(),this._Label13_i(),this._Group52_i(),this._txt_shengyi_notice_i(),this._Group53_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 350;
		t.scale9Grid = new egret.Rectangle(198,70,233,16);
		t.source = "feiyu_mjgame_json.xsmj_setbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.stroke = 1;
		t.text = "提示";
		t.y = 10;
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 256.68;
		return t;
	};
	_proto._txt_shengyi_notice_i = function () {
		var t = new eui.Label();
		this._txt_shengyi_notice = t;
		t.horizontalCenter = 0;
		t.text = "确定要做老师离开的房间里哭的生意？";
		t.textAlign = "center";
		t.textColor = 0xCEC8C8;
		t.verticalCenter = -35;
		t.width = 564;
		return t;
	};
	_proto._Group53_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 230;
		t.elementsContent = [this._gp_btn_shengyi_confirm_i(),this._gp_btn_shengyi_cancel_i()];
		return t;
	};
	_proto._gp_btn_shengyi_confirm_i = function () {
		var t = new eui.Group();
		this._gp_btn_shengyi_confirm = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect15_i(),this._Label14_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2cab4b;
		t.height = 80;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "确定";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn_shengyi_cancel_i = function () {
		var t = new eui.Group();
		this._gp_btn_shengyi_cancel = t;
		t.x = 300;
		t.elementsContent = [this._Rect16_i(),this._Label15_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xfcb819;
		t.height = 80;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "取消";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_shishi_i = function () {
		var t = new eui.Group();
		this._gp_shishi = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_shishimenban_i(),this._Group60_i()];
		return t;
	};
	_proto._rect_shishimenban_i = function () {
		var t = new eui.Rect();
		this._rect_shishimenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group60_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 900;
		t.elementsContent = [this._Image24_i(),this._img_btn_close_shishi_i(),this._Group55_i(),this._txt_roomrule_i(),this._gp_sszj_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(24,14,150,87);
		t.source = "feiyu_mjgame_json.xsmj_chat_bg";
		t.width = 900;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_btn_close_shishi_i = function () {
		var t = new eui.Image();
		this._img_btn_close_shishi = t;
		t.source = "feiyu_mjgame_json.xsmj_btn_close0";
		t.x = 851.06;
		t.y = -10.46;
		return t;
	};
	_proto._Group55_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 41.91;
		t.elementsContent = [this._Image25_i(),this._img_title_zhanji_i(),this._img_title_roomrule_i(),this._btn_title_zhanji_i(),this._btn_title_roomrule_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(23,30,141,11);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_titlebg";
		t.verticalCenter = 0;
		t.width = 676;
		return t;
	};
	_proto._img_title_zhanji_i = function () {
		var t = new eui.Image();
		this._img_title_zhanji = t;
		t.source = "feiyu_mjgame_json.xsmj_zhanji_zjtitle2";
		t.verticalCenter = -1.5;
		t.x = 92.34;
		return t;
	};
	_proto._img_title_roomrule_i = function () {
		var t = new eui.Image();
		this._img_title_roomrule = t;
		t.source = "feiyu_mjgame_json.xsmj_zhanji_ruletitle2";
		t.verticalCenter = 0.5;
		t.x = 430.23;
		return t;
	};
	_proto._btn_title_zhanji_i = function () {
		var t = new eui.Button();
		this._btn_title_zhanji = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin787;
		return t;
	};
	_proto._btn_title_roomrule_i = function () {
		var t = new eui.Button();
		this._btn_title_roomrule = t;
		t.label = "";
		t.x = 338;
		t.skinName = hzmjIndex$Skin788;
		return t;
	};
	_proto._txt_roomrule_i = function () {
		var t = new eui.Label();
		this._txt_roomrule = t;
		t.horizontalCenter = 0;
		t.text = "8局 没人300钻 清10混80";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_sszj_i = function () {
		var t = new eui.Group();
		this._gp_sszj = t;
		t.horizontalCenter = 0;
		t.y = 144.65;
		t.elementsContent = [this._gp_shishi_item0_i(),this._gp_shishi_item1_i(),this._gp_shishi_item2_i(),this._gp_shishi_item3_i(),this._txt_shishi_ju0_i(),this._txt_shishi_ju1_i(),this._txt_shishi_ju2_i(),this._txt_shishi_ju3_i()];
		return t;
	};
	_proto._gp_shishi_item0_i = function () {
		var t = new eui.Group();
		this._gp_shishi_item0 = t;
		t.verticalCenter = 0;
		t.x = 45;
		t.elementsContent = [this._img_shishi_itembg0_i(),this._txt_shishi_nickname0_i(),this._Group56_i()];
		return t;
	};
	_proto._img_shishi_itembg0_i = function () {
		var t = new eui.Image();
		this._img_shishi_itembg0 = t;
		t.scale9Grid = new egret.Rectangle(13,32,1,3);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_itembg";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_shishi_nickname0 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 8.34;
		return t;
	};
	_proto._Group56_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.99;
		t.elementsContent = [this._txt_shishi_score00_i(),this._txt_shishi_score01_i(),this._txt_shishi_score02_i(),this._txt_shishi_score03_i()];
		return t;
	};
	_proto._txt_shishi_score00_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score00 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_score01_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score01 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 50;
		return t;
	};
	_proto._txt_shishi_score02_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score02 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 100;
		return t;
	};
	_proto._txt_shishi_score03_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score03 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 150;
		return t;
	};
	_proto._gp_shishi_item1_i = function () {
		var t = new eui.Group();
		this._gp_shishi_item1 = t;
		t.verticalCenter = 0;
		t.x = 216;
		t.elementsContent = [this._img_shishi_itembg1_i(),this._txt_shishi_nickname1_i(),this._Group57_i()];
		return t;
	};
	_proto._img_shishi_itembg1_i = function () {
		var t = new eui.Image();
		this._img_shishi_itembg1 = t;
		t.scale9Grid = new egret.Rectangle(13,32,1,3);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_itembg";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_shishi_nickname1 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 8.34;
		return t;
	};
	_proto._Group57_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.99;
		t.elementsContent = [this._txt_shishi_score10_i(),this._txt_shishi_score11_i(),this._txt_shishi_score12_i(),this._txt_shishi_score13_i()];
		return t;
	};
	_proto._txt_shishi_score10_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score10 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_score11_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score11 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 50;
		return t;
	};
	_proto._txt_shishi_score12_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score12 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 100;
		return t;
	};
	_proto._txt_shishi_score13_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score13 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 150;
		return t;
	};
	_proto._gp_shishi_item2_i = function () {
		var t = new eui.Group();
		this._gp_shishi_item2 = t;
		t.verticalCenter = 0;
		t.x = 387;
		t.elementsContent = [this._img_shishi_itembg2_i(),this._txt_shishi_nickname2_i(),this._Group58_i()];
		return t;
	};
	_proto._img_shishi_itembg2_i = function () {
		var t = new eui.Image();
		this._img_shishi_itembg2 = t;
		t.scale9Grid = new egret.Rectangle(13,32,1,3);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_itembg";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_shishi_nickname2 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 8.34;
		return t;
	};
	_proto._Group58_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.99;
		t.elementsContent = [this._txt_shishi_score20_i(),this._txt_shishi_score21_i(),this._txt_shishi_score22_i(),this._txt_shishi_score23_i()];
		return t;
	};
	_proto._txt_shishi_score20_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score20 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_score21_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score21 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 50;
		return t;
	};
	_proto._txt_shishi_score22_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score22 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 100;
		return t;
	};
	_proto._txt_shishi_score23_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score23 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 150;
		return t;
	};
	_proto._gp_shishi_item3_i = function () {
		var t = new eui.Group();
		this._gp_shishi_item3 = t;
		t.verticalCenter = 0;
		t.x = 558;
		t.elementsContent = [this._img_shishi_itembg3_i(),this._txt_shishi_nickname3_i(),this._Group59_i()];
		return t;
	};
	_proto._img_shishi_itembg3_i = function () {
		var t = new eui.Image();
		this._img_shishi_itembg3 = t;
		t.scale9Grid = new egret.Rectangle(13,32,1,3);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_itembg";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_shishi_nickname3 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 8.34;
		return t;
	};
	_proto._Group59_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.99;
		t.elementsContent = [this._txt_shishi_score30_i(),this._txt_shishi_score31_i(),this._txt_shishi_score32_i(),this._txt_shishi_score33_i()];
		return t;
	};
	_proto._txt_shishi_score30_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score30 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_score31_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score31 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 50;
		return t;
	};
	_proto._txt_shishi_score32_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score32 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 100;
		return t;
	};
	_proto._txt_shishi_score33_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score33 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 150;
		return t;
	};
	_proto._txt_shishi_ju0_i = function () {
		var t = new eui.Label();
		this._txt_shishi_ju0 = t;
		t.size = 25;
		t.text = "0";
		t.x = 0;
		t.y = 55;
		return t;
	};
	_proto._txt_shishi_ju1_i = function () {
		var t = new eui.Label();
		this._txt_shishi_ju1 = t;
		t.size = 25;
		t.text = "0";
		t.x = 0;
		t.y = 105;
		return t;
	};
	_proto._txt_shishi_ju2_i = function () {
		var t = new eui.Label();
		this._txt_shishi_ju2 = t;
		t.size = 25;
		t.text = "0";
		t.x = 0;
		t.y = 155;
		return t;
	};
	_proto._txt_shishi_ju3_i = function () {
		var t = new eui.Label();
		this._txt_shishi_ju3 = t;
		t.size = 25;
		t.text = "0";
		t.x = 0;
		t.y = 205;
		return t;
	};
	_proto._gp_dismiss_i = function () {
		var t = new eui.Group();
		this._gp_dismiss = t;
		t.visible = false;
		t.elementsContent = [this._rect_dismissmenban_i(),this._Group63_i()];
		return t;
	};
	_proto._rect_dismissmenban_i = function () {
		var t = new eui.Rect();
		this._rect_dismissmenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group63_i = function () {
		var t = new eui.Group();
		t.height = 450;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 700;
		t.elementsContent = [this._Image26_i(),this._img_btn_close_shishi0_i(),this._Image27_i(),this._Group61_i(),this._gp_dismiss_players_i(),this._Group62_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(24,14,150,87);
		t.source = "feiyu_mjgame_json.xsmj_chat_bg";
		t.width = 700;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_btn_close_shishi0_i = function () {
		var t = new eui.Image();
		this._img_btn_close_shishi0 = t;
		t.source = "feiyu_mjgame_json.xsmj_btn_close0";
		t.x = 653.73;
		t.y = -19.79;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_title";
		t.y = 9.33;
		return t;
	};
	_proto._Group61_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 92.33;
		t.elementsContent = [this._Rect17_i(),this._txt_dismiss_daoji_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x074836;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._txt_dismiss_daoji_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_daoji = t;
		t.horizontalCenter = 0;
		t.text = "在60秒后会自动解散";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_dismiss_players_i = function () {
		var t = new eui.Group();
		this._gp_dismiss_players = t;
		t.horizontalCenter = 0;
		t.y = 180.34;
		t.elementsContent = [this._txt_dismiss_item0_i(),this._txt_dismiss_item1_i(),this._txt_dismiss_item2_i(),this._txt_dismiss_item3_i()];
		return t;
	};
	_proto._txt_dismiss_item0_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item0 = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._img_dismiss_status0_i(),this._txt_dismiss_nickname0_i()];
		return t;
	};
	_proto._img_dismiss_status0_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_launch";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname0 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item1_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item1 = t;
		t.verticalCenter = 0;
		t.x = 160;
		t.elementsContent = [this._img_dismiss_status1_i(),this._txt_dismiss_nickname1_i()];
		return t;
	};
	_proto._img_dismiss_status1_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_agree";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname1 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item2_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item2 = t;
		t.verticalCenter = 0;
		t.x = 320;
		t.elementsContent = [this._img_dismiss_status2_i(),this._txt_dismiss_nickname2_i()];
		return t;
	};
	_proto._img_dismiss_status2_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_refuse";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname2 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item3_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item3 = t;
		t.verticalCenter = 0;
		t.x = 480;
		t.elementsContent = [this._img_dismiss_status3_i(),this._txt_dismiss_nickname3_i()];
		return t;
	};
	_proto._img_dismiss_status3_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_wait";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname3 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._Group62_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 346.67;
		t.elementsContent = [this._btn_dismiss_refuse_i(),this._btn_dismiss_agree_i()];
		return t;
	};
	_proto._btn_dismiss_refuse_i = function () {
		var t = new eui.Button();
		this._btn_dismiss_refuse = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 280;
		t.skinName = hzmjIndex$Skin789;
		return t;
	};
	_proto._btn_dismiss_agree_i = function () {
		var t = new eui.Button();
		this._btn_dismiss_agree = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin790;
		return t;
	};
	_proto._gp_invite_i = function () {
		var t = new eui.Group();
		this._gp_invite = t;
		t.visible = false;
		t.elementsContent = [this._rect_invitemenban_i(),this._Group64_i()];
		return t;
	};
	_proto._rect_invitemenban_i = function () {
		var t = new eui.Rect();
		this._rect_invitemenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group64_i = function () {
		var t = new eui.Group();
		t.height = 569;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 425;
		t.elementsContent = [this._Image28_i(),this._img_btn_close_invite_i(),this._Image29_i(),this._Image30_i(),this._txt_inviterule_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(24,14,150,87);
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_yaoqing_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_btn_close_invite_i = function () {
		var t = new eui.Image();
		this._img_btn_close_invite = t;
		t.source = "feiyu_mjgame_json.xsmj_btn_close0";
		t.x = 377.72;
		t.y = -6.43;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_yaoqing_title";
		t.y = 53.64;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.width = 65;
		t.x = 45.34;
		t.y = 334;
		return t;
	};
	_proto._txt_inviterule_i = function () {
		var t = new eui.Label();
		this._txt_inviterule = t;
		t.size = 20;
		t.text = "互娱互娱-10局-房号：846259--市民先生(22222222)";
		t.textColor = 0x59caaf;
		t.width = 265;
		t.x = 119.67;
		t.y = 339.34;
		return t;
	};
	_proto._gp_watch_i = function () {
		var t = new eui.Group();
		this._gp_watch = t;
		t.visible = false;
		t.elementsContent = [this._rect_watchmenban_i(),this._Group73_i()];
		return t;
	};
	_proto._rect_watchmenban_i = function () {
		var t = new eui.Rect();
		this._rect_watchmenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group73_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 79.33;
		t.elementsContent = [this._Rect18_i(),this._Group65_i(),this._Group66_i(),this._Scroller1_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.fillColor = 0x133833;
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 350;
		return t;
	};
	_proto._Group65_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect19_i(),this._Label16_i()];
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x103635;
		t.height = 50;
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "游客";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group66_i = function () {
		var t = new eui.Group();
		t.y = 220.65;
		t.elementsContent = [this._Rect20_i(),this._Label17_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x103635;
		t.height = 50;
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "游戏消息";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 225;
		t.width = 350;
		t.y = 273.69;
		t.viewport = this._scro_watch_xiaoxi_i();
		return t;
	};
	_proto._scro_watch_xiaoxi_i = function () {
		var t = new eui.Group();
		this._scro_watch_xiaoxi = t;
		t.elementsContent = [this._Label18_i()];
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "【科技网络公司】进入房间";
		t.x = 20;
		t.y = 16.33;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 170;
		t.width = 350;
		t.y = 50.36;
		t.viewport = this._scro_watch_youke_i();
		return t;
	};
	_proto._scro_watch_youke_i = function () {
		var t = new eui.Group();
		this._scro_watch_youke = t;
		t.elementsContent = [this._Group72_i()];
		return t;
	};
	_proto._Group72_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Group67_i(),this._Group68_i(),this._Group69_i(),this._Group70_i(),this._Group71_i()];
		return t;
	};
	_proto._Group67_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image31_i(),this._Label19_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._Group68_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 65;
		t.y = 75;
		t.elementsContent = [this._Image32_i(),this._Label20_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._Group69_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 130;
		t.y = 0;
		t.elementsContent = [this._Image33_i(),this._Label21_i()];
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._Group70_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 195;
		t.y = 0;
		t.elementsContent = [this._Image34_i(),this._Label22_i()];
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._Group71_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 260;
		t.y = 0;
		t.elementsContent = [this._Image35_i(),this._Label23_i()];
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._gp_ting_i = function () {
		var t = new eui.Group();
		this._gp_ting = t;
		t.visible = false;
		t.x = 229.38;
		t.y = 479.6;
		t.elementsContent = [this._img_tingbg_i(),this._Image36_i(),this._gp_ting_card_i()];
		return t;
	};
	_proto._img_tingbg_i = function () {
		var t = new eui.Image();
		this._img_tingbg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(15,15,3,4);
		t.source = "feiyu_mjgame_json.xsmj_ting_notictbg";
		t.width = 80;
		t.x = 0;
		t.y = -0.4;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_ting_tingtxt";
		t.verticalCenter = 0.5;
		t.x = 2;
		return t;
	};
	_proto._gp_ting_card_i = function () {
		var t = new eui.Group();
		this._gp_ting_card = t;
		t.x = 44.56;
		t.y = 5.27;
		t.elementsContent = [this.huaCard0_i(),this._BitmapLabel1_i(),this._Image37_i()];
		return t;
	};
	_proto.huaCard0_i = function () {
		var t = new eui.Image();
		this.huaCard0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0.06;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "ting_fnt_fnt";
		t.horizontalCenter = 0;
		t.text = "2";
		t.y = 32.73;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.33;
		t.scaleY = 0.33;
		t.source = "feiyu_mjgame_json.mjCard_tiao7";
		t.verticalCenter = -9.5;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 61;
		t.height = 122;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 86;
		t.x = 195;
		t.y = 300;
		return t;
	};
	_proto.huifangGroup_i = function () {
		var t = new eui.Group();
		this.huifangGroup = t;
		t.horizontalCenter = -10;
		t.verticalCenter = -9;
		t.elementsContent = [this._Image38_i(),this._Group74_i(),this._Group75_i(),this._Group76_i(),this.huifangStartGroup_i(),this.parseGroup_i(),this.resetGroup_i()];
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(61,49,25,10);
		t.source = "zhanji_bg10_png";
		t.verticalCenter = 0;
		t.width = 630;
		t.x = 0;
		return t;
	};
	_proto._Group74_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 8;
		t.width = 50;
		t.x = 300;
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
		t.skinName = hzmjIndex$Skin791;
		return t;
	};
	_proto._Group75_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 8;
		t.width = 50;
		t.x = 400;
		t.elementsContent = [this.preJuBtn_i()];
		return t;
	};
	_proto.preJuBtn_i = function () {
		var t = new eui.Button();
		this.preJuBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin792;
		return t;
	};
	_proto._Group76_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 8;
		t.width = 50;
		t.x = 500;
		t.elementsContent = [this.nextJuBtn_i()];
		return t;
	};
	_proto.nextJuBtn_i = function () {
		var t = new eui.Button();
		this.nextJuBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin793;
		return t;
	};
	_proto.huifangStartGroup_i = function () {
		var t = new eui.Group();
		this.huifangStartGroup = t;
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 200;
		t.elementsContent = [this.huifangStartBtn_i()];
		return t;
	};
	_proto.huifangStartBtn_i = function () {
		var t = new eui.Button();
		this.huifangStartBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin794;
		return t;
	};
	_proto.parseGroup_i = function () {
		var t = new eui.Group();
		this.parseGroup = t;
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 200;
		t.elementsContent = [this.parseBtn_i()];
		return t;
	};
	_proto.parseBtn_i = function () {
		var t = new eui.Button();
		this.parseBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin795;
		return t;
	};
	_proto.resetGroup_i = function () {
		var t = new eui.Group();
		this.resetGroup = t;
		t.height = 50;
		t.verticalCenter = 0;
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
		t.skinName = hzmjIndex$Skin796;
		return t;
	};
	_proto.backHallBtnHF_i = function () {
		var t = new eui.Image();
		this.backHallBtnHF = t;
		t.height = 90;
		t.scaleX = -1;
		t.source = "zhanji_game_back_png";
		t.width = 93;
		t.x = 1143.85;
		t.y = 7.15;
		return t;
	};
	return hzmjIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/hzmjIndex.exml'] = window.hzmjIndex = (function (_super) {
	__extends(hzmjIndex, _super);
	var hzmjIndex$Skin797 = 	(function (_super) {
		__extends(hzmjIndex$Skin797, _super);
		function hzmjIndex$Skin797() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin797.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin797;
	})(eui.Skin);

	var hzmjIndex$Skin798 = 	(function (_super) {
		__extends(hzmjIndex$Skin798, _super);
		function hzmjIndex$Skin798() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin798.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin798;
	})(eui.Skin);

	var hzmjIndex$Skin799 = 	(function (_super) {
		__extends(hzmjIndex$Skin799, _super);
		function hzmjIndex$Skin799() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin799.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin799;
	})(eui.Skin);

	var hzmjIndex$Skin800 = 	(function (_super) {
		__extends(hzmjIndex$Skin800, _super);
		function hzmjIndex$Skin800() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin800.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin800;
	})(eui.Skin);

	var hzmjIndex$Skin801 = 	(function (_super) {
		__extends(hzmjIndex$Skin801, _super);
		function hzmjIndex$Skin801() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin801.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_action5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin801;
	})(eui.Skin);

	var hzmjIndex$Skin802 = 	(function (_super) {
		__extends(hzmjIndex$Skin802, _super);
		function hzmjIndex$Skin802() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin802.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_ting_tingtxt";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin802;
	})(eui.Skin);

	var hzmjIndex$Skin803 = 	(function (_super) {
		__extends(hzmjIndex$Skin803, _super);
		function hzmjIndex$Skin803() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin803.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_start0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin803;
	})(eui.Skin);

	var hzmjIndex$Skin804 = 	(function (_super) {
		__extends(hzmjIndex$Skin804, _super);
		function hzmjIndex$Skin804() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin804.prototype;

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
		return hzmjIndex$Skin804;
	})(eui.Skin);

	var hzmjIndex$Skin805 = 	(function (_super) {
		__extends(hzmjIndex$Skin805, _super);
		function hzmjIndex$Skin805() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin805.prototype;

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
		return hzmjIndex$Skin805;
	})(eui.Skin);

	var hzmjIndex$Skin806 = 	(function (_super) {
		__extends(hzmjIndex$Skin806, _super);
		function hzmjIndex$Skin806() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin806.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_message";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin806;
	})(eui.Skin);

	var hzmjIndex$Skin807 = 	(function (_super) {
		__extends(hzmjIndex$Skin807, _super);
		function hzmjIndex$Skin807() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin807.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_ly";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin807;
	})(eui.Skin);

	var hzmjIndex$Skin808 = 	(function (_super) {
		__extends(hzmjIndex$Skin808, _super);
		function hzmjIndex$Skin808() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin808.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_see";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin808;
	})(eui.Skin);

	var hzmjIndex$Skin809 = 	(function (_super) {
		__extends(hzmjIndex$Skin809, _super);
		function hzmjIndex$Skin809() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin809.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_rule";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin809;
	})(eui.Skin);

	var hzmjIndex$Skin810 = 	(function (_super) {
		__extends(hzmjIndex$Skin810, _super);
		function hzmjIndex$Skin810() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin810.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_disabled";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin810;
	})(eui.Skin);

	var hzmjIndex$Skin811 = 	(function (_super) {
		__extends(hzmjIndex$Skin811, _super);
		function hzmjIndex$Skin811() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin811.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_exit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin811;
	})(eui.Skin);

	var hzmjIndex$Skin812 = 	(function (_super) {
		__extends(hzmjIndex$Skin812, _super);
		function hzmjIndex$Skin812() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin812.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_set";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin812;
	})(eui.Skin);

	var hzmjIndex$Skin813 = 	(function (_super) {
		__extends(hzmjIndex$Skin813, _super);
		function hzmjIndex$Skin813() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin813.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_menu_btn_invite0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin813;
	})(eui.Skin);

	var hzmjIndex$Skin814 = 	(function (_super) {
		__extends(hzmjIndex$Skin814, _super);
		function hzmjIndex$Skin814() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin814.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_btn_cancel0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin814;
	})(eui.Skin);

	var hzmjIndex$Skin815 = 	(function (_super) {
		__extends(hzmjIndex$Skin815, _super);
		function hzmjIndex$Skin815() {
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
		var _proto = hzmjIndex$Skin815.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_top_btn_menu0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin815;
	})(eui.Skin);

	var hzmjIndex$Skin816 = 	(function (_super) {
		__extends(hzmjIndex$Skin816, _super);
		function hzmjIndex$Skin816() {
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
		var _proto = hzmjIndex$Skin816.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_top_btn_loc0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin816;
	})(eui.Skin);

	var hzmjIndex$Skin817 = 	(function (_super) {
		__extends(hzmjIndex$Skin817, _super);
		function hzmjIndex$Skin817() {
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
		var _proto = hzmjIndex$Skin817.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_top_btn_music0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin817;
	})(eui.Skin);

	var hzmjIndex$Skin818 = 	(function (_super) {
		__extends(hzmjIndex$Skin818, _super);
		function hzmjIndex$Skin818() {
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
		var _proto = hzmjIndex$Skin818.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_top_btn_zhanji0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin818;
	})(eui.Skin);

	var hzmjIndex$Skin819 = 	(function (_super) {
		__extends(hzmjIndex$Skin819, _super);
		function hzmjIndex$Skin819() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin819.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_record_continue0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin819;
	})(eui.Skin);

	var hzmjIndex$Skin820 = 	(function (_super) {
		__extends(hzmjIndex$Skin820, _super);
		function hzmjIndex$Skin820() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin820.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_record_end1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin820;
	})(eui.Skin);

	var hzmjIndex$Skin821 = 	(function (_super) {
		__extends(hzmjIndex$Skin821, _super);
		function hzmjIndex$Skin821() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin821.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_zhanji_zjtitle0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin821;
	})(eui.Skin);

	var hzmjIndex$Skin822 = 	(function (_super) {
		__extends(hzmjIndex$Skin822, _super);
		function hzmjIndex$Skin822() {
			_super.call(this);
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
		var _proto = hzmjIndex$Skin822.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_zhanji_ruletitle1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin822;
	})(eui.Skin);

	var hzmjIndex$Skin823 = 	(function (_super) {
		__extends(hzmjIndex$Skin823, _super);
		function hzmjIndex$Skin823() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_dismiss_btn_refuse_disablea")
					])
			];
		}
		var _proto = hzmjIndex$Skin823.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_dismiss_btn_refuse";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin823;
	})(eui.Skin);

	var hzmjIndex$Skin824 = 	(function (_super) {
		__extends(hzmjIndex$Skin824, _super);
		function hzmjIndex$Skin824() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","feiyu_mjgame_json.xsmj_dismiss_btn_agree_disabled")
					])
			];
		}
		var _proto = hzmjIndex$Skin824.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feiyu_mjgame_json.xsmj_dismiss_btn_agree";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hzmjIndex$Skin824;
	})(eui.Skin);

	function hzmjIndex() {
		_super.call(this);
		this.skinParts = ["_img_bg","_img_gameicon","_txt_ssTishi","_gp_ssTishi","nickname2","score2","sitApply2","headImg2","zhuang2","_img_ready1","stateImg2","_gp_offline1","headbox2","messagebox2","message2","messagebg2","nickname3","score3","sitApply3","headImg3","zhuang3","_img_ready2","stateImg3","_gp_offline2","headbox3","messagebox3","message3","messagebg3","nickname0","score0","sitApply0","headImg0","zhuang0","_img_ready","stateImg0","_gp_offline","headbox0","messagebox0","message0","messagebg0","nickname1","score1","sitApply1","headImg1","zhuang1","_img_ready0","stateImg1","_gp_offline0","headbox1","messagebox1","message1","messagebg1","ownhua0","ownhuaGroup0","nohua0","nohuaGrpup0","huaGoup0","ownhua1","ownhuaGroup1","nohua1","nohuaGrpup1","huaGoup1","ownhua2","ownhuaGroup2","nohua2","nohuaGrpup2","huaGoup2","ownhua3","ownhuaGroup3","nohua3","nohuaGrpup3","huaGoup3","huaCard00","huaCard01","huaCard02","huaCard03","huaCard04","huaCard05","huaCard06","huaCard07","huaCardGroup0","huaCard17","huaCard16","huaCard15","huaCard14","huaCard13","huaCard12","huaCard11","huaCard10","huaCardGroup1","huaCard20","huaCard21","huaCard22","huaCard23","huaCard24","huaCard25","huaCard26","huaCard27","huaCardGroup2","huaCard30","huaCard31","huaCard32","huaCard33","huaCard34","huaCard35","huaCard36","huaCard37","huaCardGroup3","positionBg","position0","position1","position2","position3","daojishi","_img_dirTxt0","_img_dirTxt1","_img_dirTxt2","_img_dirTxt3","restMaCardNum","restMaCardGroup","dirGroup","_gp_content","handCard00","handCard01","handCard02","handCard03","handCard04","handCard05","handCard06","handCard07","handCard08","handCard09","handCard010","handCard011","handCard012","moCard0","HandCard0","moCard1","handCard112","handCard111","handCard110","handCard19","handCard18","handCard17","handCard16","handCard15","handCard14","handCard13","handCard12","handCard11","handCard10","HandCard1","moCard2","handCard212","handCard211","handCard210","handCard29","handCard28","handCard27","handCard26","handCard25","handCard24","handCard23","handCard22","handCard21","handCard20","HandCard2","handCard30","handCard31","handCard32","handCard33","handCard34","handCard35","handCard36","handCard37","handCard38","handCard39","handCard310","handCard311","handCard312","moCard3","HandCard3","outCard033","outCard034","outCard035","outCard036","outCard037","outCard038","outCard039","outCard040","outCard041","outCard042","outCard043","outCard022","outCard023","outCard024","outCard025","outCard026","outCard027","outCard028","outCard029","outCard030","outCard031","outCard032","outCard011","outCard012","outCard013","outCard014","outCard015","outCard016","outCard017","outCard018","outCard019","outCard020","outCard021","outCard00","outCard01","outCard02","outCard03","outCard04","outCard05","outCard06","outCard07","outCard08","outCard09","outCard010","outCard0","outCard210","outCard29","outCard28","outCard27","outCard26","outCard25","outCard24","outCard23","outCard22","outCard21","outCard20","outCard221","outCard220","outCard219","outCard218","outCard217","outCard216","outCard215","outCard214","outCard213","outCard212","outCard211","outCard232","outCard231","outCard230","outCard229","outCard228","outCard227","outCard226","outCard225","outCard224","outCard223","outCard222","outCard243","outCard242","outCard241","outCard240","outCard239","outCard238","outCard237","outCard236","outCard235","outCard234","outCard233","outCard2","outCard133","outCard134","outCard135","outCard136","outCard137","outCard138","outCard139","outCard140","outCard141","outCard142","outCard143","outCard132","outCard131","outCard130","outCard129","outCard128","outCard127","outCard126","outCard125","outCard124","outCard123","outCard122","outCard121","outCard120","outCard119","outCard118","outCard117","outCard116","outCard115","outCard114","outCard113","outCard112","outCard111","outCard110","outCard19","outCard18","outCard17","outCard16","outCard15","outCard14","outCard13","outCard12","outCard11","outCard10","outCard1","outCard30","outCard31","outCard32","outCard33","outCard34","outCard35","outCard36","outCard37","outCard38","outCard39","outCard310","outCard311","outCard312","outCard313","outCard314","outCard315","outCard316","outCard317","outCard318","outCard319","outCard320","outCard321","outCard322","outCard323","outCard324","outCard325","outCard326","outCard327","outCard328","outCard329","outCard330","outCard331","outCard332","outCard333","outCard334","outCard335","outCard336","outCard337","outCard338","outCard339","outCard340","outCard341","outCard342","outCard343","outCard3","actioncard000","actioncard001","actioncard002","actioncard003","actionItem00","actioncard010","actioncard011","actioncard012","actioncard013","actionItem01","actioncard020","actioncard021","actioncard022","actioncard023","actionItem02","actioncard030","actioncard031","actioncard032","actioncard033","actionItem03","actionCardGroud0","actioncard200","actioncard201","actioncard202","actioncard203","actionItem20","actioncard210","actioncard211","actioncard212","actioncard213","actionItem21","actioncard220","actioncard221","actioncard222","actioncard223","actionItem22","actioncard230","actioncard231","actioncard232","actioncard233","actionItem23","actionCardGroud2","actioncard300","actioncard301","actioncard302","actioncard303","actionItem30","actioncard310","actioncard311","actioncard312","actioncard313","actionItem31","actioncard320","actioncard321","actioncard322","actioncard323","actionItem32","actioncard330","actioncard331","actioncard332","actioncard333","actionItem33","actionCardGroud3","actioncard132","actioncard131","actioncard130","actioncard133","actionItem13","actioncard122","actioncard121","actioncard120","actioncard123","actionItem12","actioncard112","actioncard111","actioncard110","actioncard113","actionItem11","actioncard102","actioncard101","actioncard100","actioncard103","actionItem10","actionCardGroud1","dimissProcess","dismissGroup","whoJoin","joinNotice","actionBtn0","actionBtnGroup0","actionBtn1","card10","actionBtnGroup1","actionBtn2","card20","actionBtnGroup2","actionBtn3","card30","actionBtnGroup3","actionBtn4","card40","actionBtnGroup4","actionBtn5","actionBtnGroup5","actiopnGroup","startBtn","startBtnGroup","readyBtn","readyBtnGroup","ready_disband","menban0","xiaoxi","xxGroup","voiceplay","yyGroup","situp","wanfa","diaband","backHallBtn","setting","inviteBtn","menulist","roomOwnerText","roomLifeNotice","showRule","waitGameStart","chiCardBg00","chiCard00","chiCardBg01","chiCard01","chiCardBg02","chiCard02","chi0","chiCardBg10","chiCard10","chiCardBg11","chiCard11","chiCardBg12","chiCard12","chi1","chiCardBg20","chiCard20","chiCardBg21","chiCard21","chiCardBg22","chiCard22","chi2","selectedChi","gamgBg0","gang0","_gp_gang0","gamgBg1","gang1","_gp_gang1","gamgBg2","gang2","_gp_gang2","gamgBg3","gang3","_gp_gang3","selectedGang","_btn_action_cancel","actionShow","menban","_img_topbg","menu","locationBtn","playerBtnThree","playerBtntwo","havePeopleComing","playerBtn","_btn_rule","roompwd","showFJGroup","jushu","_txt_hun","_txt_quan","_txt_playground","_btn_shortest_continue","_btn_shortest_endgame","_txt_shortest_item0","_txt_shortest_item1","_txt_shortest_item2","_gp_shortest","_txt_shengyi_notice","_gp_btn_shengyi_confirm","_gp_btn_shengyi_cancel","_gp_shengyi","_rect_shishimenban","_img_btn_close_shishi","_img_title_zhanji","_img_title_roomrule","_btn_title_zhanji","_btn_title_roomrule","_txt_roomrule","_img_shishi_itembg0","_txt_shishi_nickname0","_txt_shishi_score00","_txt_shishi_score01","_txt_shishi_score02","_txt_shishi_score03","_gp_shishi_item0","_img_shishi_itembg1","_txt_shishi_nickname1","_txt_shishi_score10","_txt_shishi_score11","_txt_shishi_score12","_txt_shishi_score13","_gp_shishi_item1","_img_shishi_itembg2","_txt_shishi_nickname2","_txt_shishi_score20","_txt_shishi_score21","_txt_shishi_score22","_txt_shishi_score23","_gp_shishi_item2","_img_shishi_itembg3","_txt_shishi_nickname3","_txt_shishi_score30","_txt_shishi_score31","_txt_shishi_score32","_txt_shishi_score33","_gp_shishi_item3","_txt_shishi_ju0","_txt_shishi_ju1","_txt_shishi_ju2","_txt_shishi_ju3","_gp_sszj","_gp_shishi","_rect_dismissmenban","_img_btn_close_shishi0","_txt_dismiss_daoji","_img_dismiss_status0","_txt_dismiss_nickname0","_txt_dismiss_item0","_img_dismiss_status1","_txt_dismiss_nickname1","_txt_dismiss_item1","_img_dismiss_status2","_txt_dismiss_nickname2","_txt_dismiss_item2","_img_dismiss_status3","_txt_dismiss_nickname3","_txt_dismiss_item3","_gp_dismiss_players","_btn_dismiss_refuse","_btn_dismiss_agree","_gp_dismiss","_rect_invitemenban","_img_btn_close_invite","_txt_inviterule","_gp_invite","_rect_watchmenban","_scro_watch_xiaoxi","_scro_watch_youke","_gp_watch","_img_tingbg","huaCard0","_gp_ting_card","_gp_ting","_txt_chupaiLife","_gp_chupaiLife","_txt_chipengTwo","_gp_chipengTwo","_rect_rule_men","_scroGp_rule","_scro_rule","_gp_rule"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._img_bg_i(),this._img_gameicon_i(),this._gp_ssTishi_i(),this._Group3_i(),this._Group6_i(),this._Group9_i(),this._Group12_i(),this.huaGoup0_i(),this.huaGoup1_i(),this.huaGoup2_i(),this.huaGoup3_i(),this.huaCardGroup0_i(),this.huaCardGroup1_i(),this.huaCardGroup2_i(),this.huaCardGroup3_i(),this.dirGroup_i(),this._gp_content_i(),this.HandCard0_i(),this.HandCard1_i(),this.HandCard2_i(),this.HandCard3_i(),this.outCard0_i(),this.outCard2_i(),this.outCard1_i(),this.outCard3_i(),this.actionCardGroud0_i(),this.actionCardGroud2_i(),this.actionCardGroud3_i(),this.actionCardGroud1_i(),this.dismissGroup_i(),this.joinNotice_i(),this.actiopnGroup_i(),this.startBtnGroup_i(),this.readyBtnGroup_i(),this.ready_disband_i(),this.menban0_i(),this.xxGroup_i(),this.yyGroup_i(),this.menulist_i(),this.waitGameStart_i(),this.actionShow_i(),this.menban_i(),this._Group48_i(),this._gp_shortest_i(),this._gp_shengyi_i(),this._gp_shishi_i(),this._gp_dismiss_i(),this._gp_invite_i(),this._gp_watch_i(),this._gp_ting_i(),this._Rect21_i(),this._gp_chupaiLife_i(),this._gp_chipengTwo_i(),this._gp_rule_i()];
	}
	var _proto = hzmjIndex.prototype;

	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(7,4,44,31);
		t.source = "feiyu_mjgame_json.xsmj_set_gamebg0";
		t.verticalCenter = 0;
		t.width = 1215;
		return t;
	};
	_proto._img_gameicon_i = function () {
		var t = new eui.Image();
		this._img_gameicon = t;
		t.horizontalCenter = 0.5;
		t.source = "feiyu_mjgame_json.xzmj_icon";
		t.verticalCenter = -26.5;
		return t;
	};
	_proto._gp_ssTishi_i = function () {
		var t = new eui.Group();
		this._gp_ssTishi = t;
		t.horizontalCenter = 0.5;
		t.y = 477.75;
		t.elementsContent = [this._Rect1_i(),this._txt_ssTishi_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 350;
		return t;
	};
	_proto._txt_ssTishi_i = function () {
		var t = new eui.Label();
		this._txt_ssTishi = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "我发觉我是你的了做了谁的离开法兰克福了的生意";
		t.verticalCenter = 0;
		t.width = 280;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 108;
		t.y = 445.48;
		t.elementsContent = [this._Group2_i(),this.messagebg2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname2_i(),this.score2_i(),this.sitApply2_i(),this.headbox2_i()];
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
		t.visible = false;
		t.width = 86;
		t.y = 0;
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
		t.visible = false;
		t.width = 108;
		t.x = 0;
		t.y = 109.12;
		return t;
	};
	_proto.sitApply2_i = function () {
		var t = new eui.Image();
		this.sitApply2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.y = 27.27;
		return t;
	};
	_proto.headbox2_i = function () {
		var t = new eui.Group();
		this.headbox2 = t;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.width = 73;
		t.y = 29.69;
		t.elementsContent = [this.headImg2_i(),this._Image1_i(),this.zhuang2_i(),this._img_ready1_i(),this._gp_offline1_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.visible = false;
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready1_i = function () {
		var t = new eui.Image();
		this._img_ready1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._gp_offline1_i = function () {
		var t = new eui.Group();
		this._gp_offline1 = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		t.elementsContent = [this._Rect2_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this.stateImg2_i(),this._Label1_i()];
		return t;
	};
	_proto.stateImg2_i = function () {
		var t = new eui.Image();
		this.stateImg2 = t;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.messagebg2_i = function () {
		var t = new eui.Group();
		this.messagebg2 = t;
		t.visible = false;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox2_i(),this.message2_i()];
		return t;
	};
	_proto.messagebox2_i = function () {
		var t = new eui.Image();
		this.messagebox2 = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Label();
		this.message2 = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.width = 108;
		t.x = 152;
		t.y = 56;
		t.elementsContent = [this._Group5_i(),this.messagebg3_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname3_i(),this.score3_i(),this.sitApply3_i(),this.headbox3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.width = 86;
		t.y = 0;
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
		t.y = 109.12;
		return t;
	};
	_proto.sitApply3_i = function () {
		var t = new eui.Image();
		this.sitApply3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.visible = false;
		t.y = 27.27;
		return t;
	};
	_proto.headbox3_i = function () {
		var t = new eui.Group();
		this.headbox3 = t;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.width = 73;
		t.y = 29.69;
		t.elementsContent = [this.headImg3_i(),this._Image2_i(),this.zhuang3_i(),this._img_ready2_i(),this._gp_offline2_i()];
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang3_i = function () {
		var t = new eui.Image();
		this.zhuang3 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.visible = false;
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready2_i = function () {
		var t = new eui.Image();
		this._img_ready2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._gp_offline2_i = function () {
		var t = new eui.Group();
		this._gp_offline2 = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		t.elementsContent = [this._Rect3_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this.stateImg3_i(),this._Label2_i()];
		return t;
	};
	_proto.stateImg3_i = function () {
		var t = new eui.Image();
		this.stateImg3 = t;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.messagebg3_i = function () {
		var t = new eui.Group();
		this.messagebg3 = t;
		t.visible = false;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox3_i(),this.message3_i()];
		return t;
	};
	_proto.messagebox3_i = function () {
		var t = new eui.Image();
		this.messagebox3 = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Label();
		this.message3 = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -18;
		t.visible = false;
		t.width = 108;
		t.x = 230.3;
		t.elementsContent = [this._Group8_i(),this.messagebg0_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname0_i(),this.score0_i(),this.sitApply0_i(),this.headbox0_i()];
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
		t.width = 86;
		t.y = 0;
		return t;
	};
	_proto.score0_i = function () {
		var t = new eui.Label();
		this.score0 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFDA00;
		t.width = 108;
		t.x = 0;
		t.y = 109.12;
		return t;
	};
	_proto.sitApply0_i = function () {
		var t = new eui.Image();
		this.sitApply0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.visible = false;
		t.y = 27.27;
		return t;
	};
	_proto.headbox0_i = function () {
		var t = new eui.Group();
		this.headbox0 = t;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.width = 73;
		t.y = 29.69;
		t.elementsContent = [this.headImg0_i(),this._Image3_i(),this.zhuang0_i(),this._img_ready_i(),this._gp_offline_i()];
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang0_i = function () {
		var t = new eui.Image();
		this.zhuang0 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.visible = false;
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready_i = function () {
		var t = new eui.Image();
		this._img_ready = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._gp_offline_i = function () {
		var t = new eui.Group();
		this._gp_offline = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		t.elementsContent = [this._Rect4_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this.stateImg0_i(),this._Label3_i()];
		return t;
	};
	_proto.stateImg0_i = function () {
		var t = new eui.Image();
		this.stateImg0 = t;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.messagebg0_i = function () {
		var t = new eui.Group();
		this.messagebg0 = t;
		t.visible = false;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox0_i(),this.message0_i()];
		return t;
	};
	_proto.messagebox0_i = function () {
		var t = new eui.Image();
		this.messagebox0 = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message0_i = function () {
		var t = new eui.Label();
		this.message0 = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.width = 108;
		t.x = 903.97;
		t.y = 277;
		t.elementsContent = [this._Group11_i(),this.messagebg1_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.width = 108;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nickname1_i(),this.score1_i(),this.sitApply1_i(),this.headbox1_i()];
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
		t.width = 86;
		t.y = 0;
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
		t.y = 109.12;
		return t;
	};
	_proto.sitApply1_i = function () {
		var t = new eui.Image();
		this.sitApply1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feiyu_mjgame_json.xsmj_btn_sit";
		t.visible = false;
		t.y = 27.27;
		return t;
	};
	_proto.headbox1_i = function () {
		var t = new eui.Group();
		this.headbox1 = t;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.width = 73;
		t.y = 29.69;
		t.elementsContent = [this.headImg1_i(),this._Image4_i(),this.zhuang1_i(),this._img_ready0_i(),this._gp_offline0_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_quan";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.source = "feiyu_mjgame_json.xsmj_zhuang";
		t.visible = false;
		t.x = 38.87;
		t.y = -6.47;
		return t;
	};
	_proto._img_ready0_i = function () {
		var t = new eui.Image();
		this._img_ready0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_status_ready";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._gp_offline0_i = function () {
		var t = new eui.Group();
		this._gp_offline0 = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		t.elementsContent = [this._Rect5_i(),this._Group10_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 75;
		t.ellipseWidth = 75;
		t.fillAlpha = 0.7;
		t.height = 73;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 20;
		t.elementsContent = [this.stateImg1_i(),this._Label4_i()];
		return t;
	};
	_proto.stateImg1_i = function () {
		var t = new eui.Image();
		this.stateImg1 = t;
		t.source = "feiyu_mjgame_json.xsmj_offline";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "999";
		t.x = 0;
		t.y = 29.17;
		return t;
	};
	_proto.messagebg1_i = function () {
		var t = new eui.Group();
		this.messagebg1 = t;
		t.visible = false;
		t.x = 79.84;
		t.y = -1.52;
		t.elementsContent = [this.messagebox1_i(),this.message1_i()];
		return t;
	};
	_proto.messagebox1_i = function () {
		var t = new eui.Image();
		this.messagebox1 = t;
		t.scale9Grid = new egret.Rectangle(42,10,45,40);
		t.source = "feiyu_mjgame_json.xsmj_chat_bubble_right0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Label();
		this.message1 = t;
		t.horizontalCenter = 7;
		t.size = 20;
		t.text = "Label";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto.huaGoup0_i = function () {
		var t = new eui.Group();
		this.huaGoup0 = t;
		t.height = 55;
		t.visible = false;
		t.width = 58;
		t.x = 163.12;
		t.y = 480.71;
		t.elementsContent = [this.ownhuaGroup0_i(),this.nohuaGrpup0_i()];
		return t;
	};
	_proto.ownhuaGroup0_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup0 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.ownhua0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_zheng";
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
		t.elementsContent = [this._Image6_i(),this.nohua0_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_ye";
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
		t.width = 58;
		t.x = 1130.39;
		t.y = 299;
		t.elementsContent = [this.ownhuaGroup1_i(),this.nohuaGrpup1_i()];
		return t;
	};
	_proto.ownhuaGroup1_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup1 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.ownhua1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_zheng";
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
		t.elementsContent = [this._Image8_i(),this.nohua1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_ye";
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
		t.x = 271.48;
		t.y = 86.98;
		t.elementsContent = [this.ownhuaGroup2_i(),this.nohuaGrpup2_i()];
		return t;
	};
	_proto.ownhuaGroup2_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup2 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.ownhua2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_zheng";
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
		t.x = 0;
		t.y = 23;
		t.elementsContent = [this._Image10_i(),this.nohua2_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_ye";
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
		t.width = 58;
		t.x = 27.49;
		t.y = 299;
		t.elementsContent = [this.ownhuaGroup3_i(),this.nohuaGrpup3_i()];
		return t;
	};
	_proto.ownhuaGroup3_i = function () {
		var t = new eui.Group();
		this.ownhuaGroup3 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this.ownhua3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_zheng";
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
		t.elementsContent = [this._Image12_i(),this.nohua3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_status_flower_ye";
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
		t.scaleX = 0.78;
		t.scaleY = 0.78;
		t.x = 187.87;
		t.y = 538.48;
		t.elementsContent = [this.huaCard00_i(),this.huaCard01_i(),this.huaCard02_i(),this.huaCard03_i(),this.huaCard04_i(),this.huaCard05_i(),this.huaCard06_i(),this.huaCard07_i()];
		return t;
	};
	_proto.huaCard00_i = function () {
		var t = new eui.Image();
		this.huaCard00 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard01_i = function () {
		var t = new eui.Image();
		this.huaCard01 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.huaCard02_i = function () {
		var t = new eui.Image();
		this.huaCard02 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.huaCard03_i = function () {
		var t = new eui.Image();
		this.huaCard03 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.huaCard04_i = function () {
		var t = new eui.Image();
		this.huaCard04 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.huaCard05_i = function () {
		var t = new eui.Image();
		this.huaCard05 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.huaCard06_i = function () {
		var t = new eui.Image();
		this.huaCard06 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.huaCard07_i = function () {
		var t = new eui.Image();
		this.huaCard07 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.huaCardGroup1_i = function () {
		var t = new eui.Group();
		this.huaCardGroup1 = t;
		t.x = 1011.48;
		t.y = 260.73;
		t.elementsContent = [this.huaCard17_i(),this.huaCard16_i(),this.huaCard15_i(),this.huaCard14_i(),this.huaCard13_i(),this.huaCard12_i(),this.huaCard11_i(),this.huaCard10_i()];
		return t;
	};
	_proto.huaCard17_i = function () {
		var t = new eui.Image();
		this.huaCard17 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard16_i = function () {
		var t = new eui.Image();
		this.huaCard16 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.huaCard15_i = function () {
		var t = new eui.Image();
		this.huaCard15 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 68;
		return t;
	};
	_proto.huaCard14_i = function () {
		var t = new eui.Image();
		this.huaCard14 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 102;
		return t;
	};
	_proto.huaCard13_i = function () {
		var t = new eui.Image();
		this.huaCard13 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 136;
		return t;
	};
	_proto.huaCard12_i = function () {
		var t = new eui.Image();
		this.huaCard12 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 170;
		return t;
	};
	_proto.huaCard11_i = function () {
		var t = new eui.Image();
		this.huaCard11 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 204;
		return t;
	};
	_proto.huaCard10_i = function () {
		var t = new eui.Image();
		this.huaCard10 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 238;
		return t;
	};
	_proto.huaCardGroup2_i = function () {
		var t = new eui.Group();
		this.huaCardGroup2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 898.21;
		t.y = 60.87;
		t.elementsContent = [this.huaCard20_i(),this.huaCard21_i(),this.huaCard22_i(),this.huaCard23_i(),this.huaCard24_i(),this.huaCard25_i(),this.huaCard26_i(),this.huaCard27_i()];
		return t;
	};
	_proto.huaCard20_i = function () {
		var t = new eui.Image();
		this.huaCard20 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard21_i = function () {
		var t = new eui.Image();
		this.huaCard21 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.huaCard22_i = function () {
		var t = new eui.Image();
		this.huaCard22 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.huaCard23_i = function () {
		var t = new eui.Image();
		this.huaCard23 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.huaCard24_i = function () {
		var t = new eui.Image();
		this.huaCard24 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.huaCard25_i = function () {
		var t = new eui.Image();
		this.huaCard25 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.huaCard26_i = function () {
		var t = new eui.Image();
		this.huaCard26 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.huaCard27_i = function () {
		var t = new eui.Image();
		this.huaCard27 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.huaCardGroup3_i = function () {
		var t = new eui.Group();
		this.huaCardGroup3 = t;
		t.x = 168.84;
		t.y = 187.19;
		t.elementsContent = [this.huaCard30_i(),this.huaCard31_i(),this.huaCard32_i(),this.huaCard33_i(),this.huaCard34_i(),this.huaCard35_i(),this.huaCard36_i(),this.huaCard37_i()];
		return t;
	};
	_proto.huaCard30_i = function () {
		var t = new eui.Image();
		this.huaCard30 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huaCard31_i = function () {
		var t = new eui.Image();
		this.huaCard31 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.huaCard32_i = function () {
		var t = new eui.Image();
		this.huaCard32 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 68;
		return t;
	};
	_proto.huaCard33_i = function () {
		var t = new eui.Image();
		this.huaCard33 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 102;
		return t;
	};
	_proto.huaCard34_i = function () {
		var t = new eui.Image();
		this.huaCard34 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 136;
		return t;
	};
	_proto.huaCard35_i = function () {
		var t = new eui.Image();
		this.huaCard35 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 170;
		return t;
	};
	_proto.huaCard36_i = function () {
		var t = new eui.Image();
		this.huaCard36 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 204;
		return t;
	};
	_proto.huaCard37_i = function () {
		var t = new eui.Image();
		this.huaCard37 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 238;
		return t;
	};
	_proto.dirGroup_i = function () {
		var t = new eui.Group();
		this.dirGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -20;
		t.elementsContent = [this._Group13_i(),this.restMaCardGroup_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 124;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 124;
		t.elementsContent = [this.positionBg_i(),this.position0_i(),this.position1_i(),this.position2_i(),this.position3_i(),this.daojishi_i(),this._img_dirTxt0_i(),this._img_dirTxt1_i(),this._img_dirTxt2_i(),this._img_dirTxt3_i()];
		return t;
	};
	_proto.positionBg_i = function () {
		var t = new eui.Image();
		this.positionBg = t;
		t.anchorOffsetX = 58.5;
		t.anchorOffsetY = 58.5;
		t.horizontalCenter = 0;
		t.rotation = 270;
		t.source = "feiyu_mjgame_json.xsmj_dir_bg0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.position0_i = function () {
		var t = new eui.Image();
		this.position0 = t;
		t.bottom = -21;
		t.horizontalCenter = 0;
		t.rotation = 180;
		t.source = "feiyu_mjgame_json.xsmj_dir_who";
		return t;
	};
	_proto.position1_i = function () {
		var t = new eui.Image();
		this.position1 = t;
		t.right = -22;
		t.rotation = 90;
		t.source = "feiyu_mjgame_json.xsmj_dir_who";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.position2_i = function () {
		var t = new eui.Image();
		this.position2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_dir_who";
		t.top = -21;
		return t;
	};
	_proto.position3_i = function () {
		var t = new eui.Image();
		this.position3 = t;
		t.rotation = 270;
		t.source = "feiyu_mjgame_json.xsmj_dir_who";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = -21.5;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.BitmapLabel();
		this.daojishi = t;
		t.font = "mj_countdown_fnt";
		t.horizontalCenter = 0;
		t.text = "20";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_dirTxt0_i = function () {
		var t = new eui.Image();
		this._img_dirTxt0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_dir_west0";
		t.y = 88;
		return t;
	};
	_proto._img_dirTxt1_i = function () {
		var t = new eui.Image();
		this._img_dirTxt1 = t;
		t.source = "feiyu_mjgame_json.xsmj_dir_west1";
		t.verticalCenter = 0.5;
		t.x = 87.5;
		return t;
	};
	_proto._img_dirTxt2_i = function () {
		var t = new eui.Image();
		this._img_dirTxt2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_dir_west1";
		t.y = 17.5;
		return t;
	};
	_proto._img_dirTxt3_i = function () {
		var t = new eui.Image();
		this._img_dirTxt3 = t;
		t.source = "feiyu_mjgame_json.xsmj_dir_west1";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto.restMaCardGroup_i = function () {
		var t = new eui.Group();
		this.restMaCardGroup = t;
		t.verticalCenter = 0;
		t.x = 266.98;
		t.elementsContent = [this._Rect6_i(),this.restMaCardNum_i(),this._Image13_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.height = 45;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto.restMaCardNum_i = function () {
		var t = new eui.Label();
		this.restMaCardNum = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 14.5;
		t.size = 30;
		t.text = "20";
		t.textAlign = "center";
		t.textColor = 0xefdf23;
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_cardbum_icon";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._gp_content_i = function () {
		var t = new eui.Group();
		this._gp_content = t;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.HandCard0_i = function () {
		var t = new eui.Group();
		this.HandCard0 = t;
		t.x = 55;
		t.y = 593;
		t.elementsContent = [this.handCard00_i(),this.handCard01_i(),this.handCard02_i(),this.handCard03_i(),this.handCard04_i(),this.handCard05_i(),this.handCard06_i(),this.handCard07_i(),this.handCard08_i(),this.handCard09_i(),this.handCard010_i(),this.handCard011_i(),this.handCard012_i(),this.moCard0_i()];
		return t;
	};
	_proto.handCard00_i = function () {
		var t = new eui.Image();
		this.handCard00 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.handCard01_i = function () {
		var t = new eui.Image();
		this.handCard01 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 77.35;
		return t;
	};
	_proto.handCard02_i = function () {
		var t = new eui.Image();
		this.handCard02 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 154.7;
		return t;
	};
	_proto.handCard03_i = function () {
		var t = new eui.Image();
		this.handCard03 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 232.05;
		return t;
	};
	_proto.handCard04_i = function () {
		var t = new eui.Image();
		this.handCard04 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 309.4;
		return t;
	};
	_proto.handCard05_i = function () {
		var t = new eui.Image();
		this.handCard05 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 386.75;
		return t;
	};
	_proto.handCard06_i = function () {
		var t = new eui.Image();
		this.handCard06 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 464.1;
		return t;
	};
	_proto.handCard07_i = function () {
		var t = new eui.Image();
		this.handCard07 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 541.45;
		return t;
	};
	_proto.handCard08_i = function () {
		var t = new eui.Image();
		this.handCard08 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 618.8;
		return t;
	};
	_proto.handCard09_i = function () {
		var t = new eui.Image();
		this.handCard09 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 696.15;
		return t;
	};
	_proto.handCard010_i = function () {
		var t = new eui.Image();
		this.handCard010 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 773.5;
		return t;
	};
	_proto.handCard011_i = function () {
		var t = new eui.Image();
		this.handCard011 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 850.85;
		return t;
	};
	_proto.handCard012_i = function () {
		var t = new eui.Image();
		this.handCard012 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.x = 928.2;
		return t;
	};
	_proto.moCard0_i = function () {
		var t = new eui.Image();
		this.moCard0 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 1027.55;
		return t;
	};
	_proto.HandCard1_i = function () {
		var t = new eui.Group();
		this.HandCard1 = t;
		t.x = 1071.37;
		t.y = 108.21;
		t.elementsContent = [this.moCard1_i(),this.handCard112_i(),this.handCard111_i(),this.handCard110_i(),this.handCard19_i(),this.handCard18_i(),this.handCard17_i(),this.handCard16_i(),this.handCard15_i(),this.handCard14_i(),this.handCard13_i(),this.handCard12_i(),this.handCard11_i(),this.handCard10_i()];
		return t;
	};
	_proto.moCard1_i = function () {
		var t = new eui.Image();
		this.moCard1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.y = 0;
		return t;
	};
	_proto.handCard112_i = function () {
		var t = new eui.Image();
		this.handCard112 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.y = 59;
		return t;
	};
	_proto.handCard111_i = function () {
		var t = new eui.Image();
		this.handCard111 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 10;
		t.y = 86;
		return t;
	};
	_proto.handCard110_i = function () {
		var t = new eui.Image();
		this.handCard110 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 20;
		t.y = 113;
		return t;
	};
	_proto.handCard19_i = function () {
		var t = new eui.Image();
		this.handCard19 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 30;
		t.y = 142;
		return t;
	};
	_proto.handCard18_i = function () {
		var t = new eui.Image();
		this.handCard18 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 40;
		t.y = 169;
		return t;
	};
	_proto.handCard17_i = function () {
		var t = new eui.Image();
		this.handCard17 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 50;
		t.y = 196;
		return t;
	};
	_proto.handCard16_i = function () {
		var t = new eui.Image();
		this.handCard16 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 60;
		t.y = 223;
		return t;
	};
	_proto.handCard15_i = function () {
		var t = new eui.Image();
		this.handCard15 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 70;
		t.y = 250;
		return t;
	};
	_proto.handCard14_i = function () {
		var t = new eui.Image();
		this.handCard14 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 80;
		t.y = 277;
		return t;
	};
	_proto.handCard13_i = function () {
		var t = new eui.Image();
		this.handCard13 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 90;
		t.y = 304;
		return t;
	};
	_proto.handCard12_i = function () {
		var t = new eui.Image();
		this.handCard12 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 100;
		t.y = 331;
		return t;
	};
	_proto.handCard11_i = function () {
		var t = new eui.Image();
		this.handCard11 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 110;
		t.y = 358;
		return t;
	};
	_proto.handCard10_i = function () {
		var t = new eui.Image();
		this.handCard10 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_right_card0";
		t.x = 120;
		t.y = 383;
		return t;
	};
	_proto.HandCard2_i = function () {
		var t = new eui.Group();
		this.HandCard2 = t;
		t.horizontalCenter = 2;
		t.y = 69.95;
		t.elementsContent = [this.moCard2_i(),this.handCard212_i(),this.handCard211_i(),this.handCard210_i(),this.handCard29_i(),this.handCard28_i(),this.handCard27_i(),this.handCard26_i(),this.handCard25_i(),this.handCard24_i(),this.handCard23_i(),this.handCard22_i(),this.handCard21_i(),this.handCard20_i()];
		return t;
	};
	_proto.moCard2_i = function () {
		var t = new eui.Image();
		this.moCard2 = t;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.handCard212_i = function () {
		var t = new eui.Image();
		this.handCard212 = t;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.x = 50;
		return t;
	};
	_proto.handCard211_i = function () {
		var t = new eui.Image();
		this.handCard211 = t;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.x = 87;
		return t;
	};
	_proto.handCard210_i = function () {
		var t = new eui.Image();
		this.handCard210 = t;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.x = 125;
		t.y = 20;
		return t;
	};
	_proto.handCard29_i = function () {
		var t = new eui.Image();
		this.handCard29 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 163;
		t.y = 30;
		return t;
	};
	_proto.handCard28_i = function () {
		var t = new eui.Image();
		this.handCard28 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 201;
		t.y = 40;
		return t;
	};
	_proto.handCard27_i = function () {
		var t = new eui.Image();
		this.handCard27 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 239;
		t.y = 50;
		return t;
	};
	_proto.handCard26_i = function () {
		var t = new eui.Image();
		this.handCard26 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.handCard25_i = function () {
		var t = new eui.Image();
		this.handCard25 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 314;
		t.y = 70;
		return t;
	};
	_proto.handCard24_i = function () {
		var t = new eui.Image();
		this.handCard24 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 351;
		t.y = 80;
		return t;
	};
	_proto.handCard23_i = function () {
		var t = new eui.Image();
		this.handCard23 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 388;
		t.y = 90;
		return t;
	};
	_proto.handCard22_i = function () {
		var t = new eui.Image();
		this.handCard22 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 425;
		t.y = 100;
		return t;
	};
	_proto.handCard21_i = function () {
		var t = new eui.Image();
		this.handCard21 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 462;
		t.y = 110;
		return t;
	};
	_proto.handCard20_i = function () {
		var t = new eui.Image();
		this.handCard20 = t;
		t.height = 93;
		t.scaleX = 0.6129;
		t.scaleY = 0.6129;
		t.source = "feiyu_mjgame_json.mjcard_top_card0";
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 499;
		t.y = 120;
		return t;
	};
	_proto.HandCard3_i = function () {
		var t = new eui.Group();
		this.HandCard3 = t;
		t.x = 117.59;
		t.y = 93.49;
		t.elementsContent = [this.handCard30_i(),this.handCard31_i(),this.handCard32_i(),this.handCard33_i(),this.handCard34_i(),this.handCard35_i(),this.handCard36_i(),this.handCard37_i(),this.handCard38_i(),this.handCard39_i(),this.handCard310_i(),this.handCard311_i(),this.handCard312_i(),this.moCard3_i()];
		return t;
	};
	_proto.handCard30_i = function () {
		var t = new eui.Image();
		this.handCard30 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.y = 0;
		return t;
	};
	_proto.handCard31_i = function () {
		var t = new eui.Image();
		this.handCard31 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.y = 28;
		return t;
	};
	_proto.handCard32_i = function () {
		var t = new eui.Image();
		this.handCard32 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 10;
		t.y = 56;
		return t;
	};
	_proto.handCard33_i = function () {
		var t = new eui.Image();
		this.handCard33 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 20;
		t.y = 84;
		return t;
	};
	_proto.handCard34_i = function () {
		var t = new eui.Image();
		this.handCard34 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 30;
		t.y = 112;
		return t;
	};
	_proto.handCard35_i = function () {
		var t = new eui.Image();
		this.handCard35 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 40;
		t.y = 140;
		return t;
	};
	_proto.handCard36_i = function () {
		var t = new eui.Image();
		this.handCard36 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 50;
		t.y = 168;
		return t;
	};
	_proto.handCard37_i = function () {
		var t = new eui.Image();
		this.handCard37 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 60;
		t.y = 196;
		return t;
	};
	_proto.handCard38_i = function () {
		var t = new eui.Image();
		this.handCard38 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 70;
		t.y = 224;
		return t;
	};
	_proto.handCard39_i = function () {
		var t = new eui.Image();
		this.handCard39 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 80;
		t.y = 252;
		return t;
	};
	_proto.handCard310_i = function () {
		var t = new eui.Image();
		this.handCard310 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 90;
		t.y = 280;
		return t;
	};
	_proto.handCard311_i = function () {
		var t = new eui.Image();
		this.handCard311 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 100;
		t.y = 308;
		return t;
	};
	_proto.handCard312_i = function () {
		var t = new eui.Image();
		this.handCard312 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 110;
		t.y = 336;
		return t;
	};
	_proto.moCard3_i = function () {
		var t = new eui.Image();
		this.moCard3 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjcard_left_card0";
		t.x = 120;
		t.y = 397;
		return t;
	};
	_proto.outCard0_i = function () {
		var t = new eui.Group();
		this.outCard0 = t;
		t.horizontalCenter = 16.5;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.y = 304.3;
		t.elementsContent = [this._Group14_i(),this._Group15_i(),this._Group16_i(),this._Group17_i()];
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard033_i(),this.outCard034_i(),this.outCard035_i(),this.outCard036_i(),this.outCard037_i(),this.outCard038_i(),this.outCard039_i(),this.outCard040_i(),this.outCard041_i(),this.outCard042_i(),this.outCard043_i()];
		return t;
	};
	_proto.outCard033_i = function () {
		var t = new eui.Image();
		this.outCard033 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard034_i = function () {
		var t = new eui.Image();
		this.outCard034 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard035_i = function () {
		var t = new eui.Image();
		this.outCard035 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard036_i = function () {
		var t = new eui.Image();
		this.outCard036 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard037_i = function () {
		var t = new eui.Image();
		this.outCard037 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard038_i = function () {
		var t = new eui.Image();
		this.outCard038 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard039_i = function () {
		var t = new eui.Image();
		this.outCard039 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.outCard040_i = function () {
		var t = new eui.Image();
		this.outCard040 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.outCard041_i = function () {
		var t = new eui.Image();
		this.outCard041 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.outCard042_i = function () {
		var t = new eui.Image();
		this.outCard042 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.outCard043_i = function () {
		var t = new eui.Image();
		this.outCard043 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 545;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 70;
		t.elementsContent = [this.outCard022_i(),this.outCard023_i(),this.outCard024_i(),this.outCard025_i(),this.outCard026_i(),this.outCard027_i(),this.outCard028_i(),this.outCard029_i(),this.outCard030_i(),this.outCard031_i(),this.outCard032_i()];
		return t;
	};
	_proto.outCard022_i = function () {
		var t = new eui.Image();
		this.outCard022 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard023_i = function () {
		var t = new eui.Image();
		this.outCard023 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard024_i = function () {
		var t = new eui.Image();
		this.outCard024 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard025_i = function () {
		var t = new eui.Image();
		this.outCard025 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard026_i = function () {
		var t = new eui.Image();
		this.outCard026 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard027_i = function () {
		var t = new eui.Image();
		this.outCard027 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard028_i = function () {
		var t = new eui.Image();
		this.outCard028 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.outCard029_i = function () {
		var t = new eui.Image();
		this.outCard029 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.outCard030_i = function () {
		var t = new eui.Image();
		this.outCard030 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.outCard031_i = function () {
		var t = new eui.Image();
		this.outCard031 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.outCard032_i = function () {
		var t = new eui.Image();
		this.outCard032 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 545;
		t.y = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this.outCard011_i(),this.outCard012_i(),this.outCard013_i(),this.outCard014_i(),this.outCard015_i(),this.outCard016_i(),this.outCard017_i(),this.outCard018_i(),this.outCard019_i(),this.outCard020_i(),this.outCard021_i()];
		return t;
	};
	_proto.outCard011_i = function () {
		var t = new eui.Image();
		this.outCard011 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard012_i = function () {
		var t = new eui.Image();
		this.outCard012 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard013_i = function () {
		var t = new eui.Image();
		this.outCard013 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard014_i = function () {
		var t = new eui.Image();
		this.outCard014 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard015_i = function () {
		var t = new eui.Image();
		this.outCard015 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard016_i = function () {
		var t = new eui.Image();
		this.outCard016 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard017_i = function () {
		var t = new eui.Image();
		this.outCard017 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.outCard018_i = function () {
		var t = new eui.Image();
		this.outCard018 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.outCard019_i = function () {
		var t = new eui.Image();
		this.outCard019 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.outCard020_i = function () {
		var t = new eui.Image();
		this.outCard020 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.outCard021_i = function () {
		var t = new eui.Image();
		this.outCard021 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 545;
		t.y = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 210;
		t.elementsContent = [this.outCard00_i(),this.outCard01_i(),this.outCard02_i(),this.outCard03_i(),this.outCard04_i(),this.outCard05_i(),this.outCard06_i(),this.outCard07_i(),this.outCard08_i(),this.outCard09_i(),this.outCard010_i()];
		return t;
	};
	_proto.outCard00_i = function () {
		var t = new eui.Image();
		this.outCard00 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard01_i = function () {
		var t = new eui.Image();
		this.outCard01 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard02_i = function () {
		var t = new eui.Image();
		this.outCard02 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard03_i = function () {
		var t = new eui.Image();
		this.outCard03 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard04_i = function () {
		var t = new eui.Image();
		this.outCard04 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard05_i = function () {
		var t = new eui.Image();
		this.outCard05 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard06_i = function () {
		var t = new eui.Image();
		this.outCard06 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto.outCard07_i = function () {
		var t = new eui.Image();
		this.outCard07 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto.outCard08_i = function () {
		var t = new eui.Image();
		this.outCard08 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.outCard09_i = function () {
		var t = new eui.Image();
		this.outCard09 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.outCard010_i = function () {
		var t = new eui.Image();
		this.outCard010 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 545;
		t.y = 0;
		return t;
	};
	_proto.outCard2_i = function () {
		var t = new eui.Group();
		this.outCard2 = t;
		t.horizontalCenter = 16.5;
		t.scaleX = 0.75;
		t.scaleY = 0.8;
		t.y = 151.91;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard29_i = function () {
		var t = new eui.Image();
		this.outCard29 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard28_i = function () {
		var t = new eui.Image();
		this.outCard28 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard27_i = function () {
		var t = new eui.Image();
		this.outCard27 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard26_i = function () {
		var t = new eui.Image();
		this.outCard26 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard25_i = function () {
		var t = new eui.Image();
		this.outCard25 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard24_i = function () {
		var t = new eui.Image();
		this.outCard24 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.outCard23_i = function () {
		var t = new eui.Image();
		this.outCard23 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.outCard22_i = function () {
		var t = new eui.Image();
		this.outCard22 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.outCard21_i = function () {
		var t = new eui.Image();
		this.outCard21 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.outCard20_i = function () {
		var t = new eui.Image();
		this.outCard20 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 550;
		t.y = 0;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 70;
		t.elementsContent = [this.outCard221_i(),this.outCard220_i(),this.outCard219_i(),this.outCard218_i(),this.outCard217_i(),this.outCard216_i(),this.outCard215_i(),this.outCard214_i(),this.outCard213_i(),this.outCard212_i(),this.outCard211_i()];
		return t;
	};
	_proto.outCard221_i = function () {
		var t = new eui.Image();
		this.outCard221 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard220_i = function () {
		var t = new eui.Image();
		this.outCard220 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard219_i = function () {
		var t = new eui.Image();
		this.outCard219 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard218_i = function () {
		var t = new eui.Image();
		this.outCard218 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard217_i = function () {
		var t = new eui.Image();
		this.outCard217 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard216_i = function () {
		var t = new eui.Image();
		this.outCard216 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard215_i = function () {
		var t = new eui.Image();
		this.outCard215 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.outCard214_i = function () {
		var t = new eui.Image();
		this.outCard214 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.outCard213_i = function () {
		var t = new eui.Image();
		this.outCard213 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.outCard212_i = function () {
		var t = new eui.Image();
		this.outCard212 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.outCard211_i = function () {
		var t = new eui.Image();
		this.outCard211 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 550;
		t.y = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this.outCard232_i(),this.outCard231_i(),this.outCard230_i(),this.outCard229_i(),this.outCard228_i(),this.outCard227_i(),this.outCard226_i(),this.outCard225_i(),this.outCard224_i(),this.outCard223_i(),this.outCard222_i()];
		return t;
	};
	_proto.outCard232_i = function () {
		var t = new eui.Image();
		this.outCard232 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard231_i = function () {
		var t = new eui.Image();
		this.outCard231 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard230_i = function () {
		var t = new eui.Image();
		this.outCard230 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard229_i = function () {
		var t = new eui.Image();
		this.outCard229 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard228_i = function () {
		var t = new eui.Image();
		this.outCard228 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard227_i = function () {
		var t = new eui.Image();
		this.outCard227 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard226_i = function () {
		var t = new eui.Image();
		this.outCard226 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.outCard225_i = function () {
		var t = new eui.Image();
		this.outCard225 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.outCard224_i = function () {
		var t = new eui.Image();
		this.outCard224 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.outCard223_i = function () {
		var t = new eui.Image();
		this.outCard223 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.outCard222_i = function () {
		var t = new eui.Image();
		this.outCard222 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 550;
		t.y = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 210;
		t.elementsContent = [this.outCard243_i(),this.outCard242_i(),this.outCard241_i(),this.outCard240_i(),this.outCard239_i(),this.outCard238_i(),this.outCard237_i(),this.outCard236_i(),this.outCard235_i(),this.outCard234_i(),this.outCard233_i()];
		return t;
	};
	_proto.outCard243_i = function () {
		var t = new eui.Image();
		this.outCard243 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard242_i = function () {
		var t = new eui.Image();
		this.outCard242 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.outCard241_i = function () {
		var t = new eui.Image();
		this.outCard241 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.outCard240_i = function () {
		var t = new eui.Image();
		this.outCard240 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto.outCard239_i = function () {
		var t = new eui.Image();
		this.outCard239 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto.outCard238_i = function () {
		var t = new eui.Image();
		this.outCard238 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.outCard237_i = function () {
		var t = new eui.Image();
		this.outCard237 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.outCard236_i = function () {
		var t = new eui.Image();
		this.outCard236 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.outCard235_i = function () {
		var t = new eui.Image();
		this.outCard235 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.outCard234_i = function () {
		var t = new eui.Image();
		this.outCard234 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.outCard233_i = function () {
		var t = new eui.Image();
		this.outCard233 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 550;
		t.y = 0;
		return t;
	};
	_proto.outCard1_i = function () {
		var t = new eui.Group();
		this.outCard1 = t;
		t.x = 787.62;
		t.y = 156.78;
		t.elementsContent = [this._Group22_i(),this._Group23_i(),this._Group24_i(),this._Group25_i()];
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.outCard133_i(),this.outCard134_i(),this.outCard135_i(),this.outCard136_i(),this.outCard137_i(),this.outCard138_i(),this.outCard139_i(),this.outCard140_i(),this.outCard141_i(),this.outCard142_i(),this.outCard143_i()];
		return t;
	};
	_proto.outCard133_i = function () {
		var t = new eui.Image();
		this.outCard133 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard134_i = function () {
		var t = new eui.Image();
		this.outCard134 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard135_i = function () {
		var t = new eui.Image();
		this.outCard135 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard136_i = function () {
		var t = new eui.Image();
		this.outCard136 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard137_i = function () {
		var t = new eui.Image();
		this.outCard137 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard138_i = function () {
		var t = new eui.Image();
		this.outCard138 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard139_i = function () {
		var t = new eui.Image();
		this.outCard139 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 196.44;
		return t;
	};
	_proto.outCard140_i = function () {
		var t = new eui.Image();
		this.outCard140 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 231.4;
		return t;
	};
	_proto.outCard141_i = function () {
		var t = new eui.Image();
		this.outCard141 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 266.36;
		return t;
	};
	_proto.outCard142_i = function () {
		var t = new eui.Image();
		this.outCard142 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 304.28;
		return t;
	};
	_proto.outCard143_i = function () {
		var t = new eui.Image();
		this.outCard143 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 51;
		t.y = -0.67;
		t.elementsContent = [this.outCard132_i(),this.outCard131_i(),this.outCard130_i(),this.outCard129_i(),this.outCard128_i(),this.outCard127_i(),this.outCard126_i(),this.outCard125_i(),this.outCard124_i(),this.outCard123_i(),this.outCard122_i()];
		return t;
	};
	_proto.outCard132_i = function () {
		var t = new eui.Image();
		this.outCard132 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard131_i = function () {
		var t = new eui.Image();
		this.outCard131 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard130_i = function () {
		var t = new eui.Image();
		this.outCard130 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard129_i = function () {
		var t = new eui.Image();
		this.outCard129 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard128_i = function () {
		var t = new eui.Image();
		this.outCard128 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard127_i = function () {
		var t = new eui.Image();
		this.outCard127 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard126_i = function () {
		var t = new eui.Image();
		this.outCard126 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 196.44;
		return t;
	};
	_proto.outCard125_i = function () {
		var t = new eui.Image();
		this.outCard125 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 231.4;
		return t;
	};
	_proto.outCard124_i = function () {
		var t = new eui.Image();
		this.outCard124 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 266.36;
		return t;
	};
	_proto.outCard123_i = function () {
		var t = new eui.Image();
		this.outCard123 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 304.28;
		return t;
	};
	_proto.outCard122_i = function () {
		var t = new eui.Image();
		this.outCard122 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard120_i = function () {
		var t = new eui.Image();
		this.outCard120 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard119_i = function () {
		var t = new eui.Image();
		this.outCard119 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard118_i = function () {
		var t = new eui.Image();
		this.outCard118 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard117_i = function () {
		var t = new eui.Image();
		this.outCard117 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard116_i = function () {
		var t = new eui.Image();
		this.outCard116 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard115_i = function () {
		var t = new eui.Image();
		this.outCard115 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 196.44;
		return t;
	};
	_proto.outCard114_i = function () {
		var t = new eui.Image();
		this.outCard114 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 231.4;
		return t;
	};
	_proto.outCard113_i = function () {
		var t = new eui.Image();
		this.outCard113 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 266.36;
		return t;
	};
	_proto.outCard112_i = function () {
		var t = new eui.Image();
		this.outCard112 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 304.28;
		return t;
	};
	_proto.outCard111_i = function () {
		var t = new eui.Image();
		this.outCard111 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard19_i = function () {
		var t = new eui.Image();
		this.outCard19 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard18_i = function () {
		var t = new eui.Image();
		this.outCard18 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard17_i = function () {
		var t = new eui.Image();
		this.outCard17 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard16_i = function () {
		var t = new eui.Image();
		this.outCard16 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard15_i = function () {
		var t = new eui.Image();
		this.outCard15 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard14_i = function () {
		var t = new eui.Image();
		this.outCard14 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 196.44;
		return t;
	};
	_proto.outCard13_i = function () {
		var t = new eui.Image();
		this.outCard13 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 231.4;
		return t;
	};
	_proto.outCard12_i = function () {
		var t = new eui.Image();
		this.outCard12 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 266.36;
		return t;
	};
	_proto.outCard11_i = function () {
		var t = new eui.Image();
		this.outCard11 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 304.28;
		return t;
	};
	_proto.outCard10_i = function () {
		var t = new eui.Image();
		this.outCard10 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
		return t;
	};
	_proto.outCard3_i = function () {
		var t = new eui.Group();
		this.outCard3 = t;
		t.x = 232.45;
		t.y = 140.94;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard31_i = function () {
		var t = new eui.Image();
		this.outCard31 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.outCard32_i = function () {
		var t = new eui.Image();
		this.outCard32 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard33_i = function () {
		var t = new eui.Image();
		this.outCard33 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard34_i = function () {
		var t = new eui.Image();
		this.outCard34 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard35_i = function () {
		var t = new eui.Image();
		this.outCard35 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard36_i = function () {
		var t = new eui.Image();
		this.outCard36 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard37_i = function () {
		var t = new eui.Image();
		this.outCard37 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 228.45;
		return t;
	};
	_proto.outCard38_i = function () {
		var t = new eui.Image();
		this.outCard38 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 263.78;
		return t;
	};
	_proto.outCard39_i = function () {
		var t = new eui.Image();
		this.outCard39 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 300.21;
		return t;
	};
	_proto.outCard310_i = function () {
		var t = new eui.Image();
		this.outCard310 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
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
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard312_i = function () {
		var t = new eui.Image();
		this.outCard312 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.outCard313_i = function () {
		var t = new eui.Image();
		this.outCard313 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard314_i = function () {
		var t = new eui.Image();
		this.outCard314 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard315_i = function () {
		var t = new eui.Image();
		this.outCard315 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard316_i = function () {
		var t = new eui.Image();
		this.outCard316 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard317_i = function () {
		var t = new eui.Image();
		this.outCard317 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard318_i = function () {
		var t = new eui.Image();
		this.outCard318 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 228.45;
		return t;
	};
	_proto.outCard319_i = function () {
		var t = new eui.Image();
		this.outCard319 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 263.78;
		return t;
	};
	_proto.outCard320_i = function () {
		var t = new eui.Image();
		this.outCard320 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 300.21;
		return t;
	};
	_proto.outCard321_i = function () {
		var t = new eui.Image();
		this.outCard321 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 102;
		t.y = 0;
		t.elementsContent = [this.outCard322_i(),this.outCard323_i(),this.outCard324_i(),this.outCard325_i(),this.outCard326_i(),this.outCard327_i(),this.outCard328_i(),this.outCard329_i(),this.outCard330_i(),this.outCard331_i(),this.outCard332_i()];
		return t;
	};
	_proto.outCard322_i = function () {
		var t = new eui.Image();
		this.outCard322 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard323_i = function () {
		var t = new eui.Image();
		this.outCard323 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.outCard324_i = function () {
		var t = new eui.Image();
		this.outCard324 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard325_i = function () {
		var t = new eui.Image();
		this.outCard325 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard326_i = function () {
		var t = new eui.Image();
		this.outCard326 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard327_i = function () {
		var t = new eui.Image();
		this.outCard327 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard328_i = function () {
		var t = new eui.Image();
		this.outCard328 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard329_i = function () {
		var t = new eui.Image();
		this.outCard329 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 228.45;
		return t;
	};
	_proto.outCard330_i = function () {
		var t = new eui.Image();
		this.outCard330 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 263.78;
		return t;
	};
	_proto.outCard331_i = function () {
		var t = new eui.Image();
		this.outCard331 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 300.21;
		return t;
	};
	_proto.outCard332_i = function () {
		var t = new eui.Image();
		this.outCard332 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 153;
		t.y = 0;
		t.elementsContent = [this.outCard333_i(),this.outCard334_i(),this.outCard335_i(),this.outCard336_i(),this.outCard337_i(),this.outCard338_i(),this.outCard339_i(),this.outCard340_i(),this.outCard341_i(),this.outCard342_i(),this.outCard343_i()];
		return t;
	};
	_proto.outCard333_i = function () {
		var t = new eui.Image();
		this.outCard333 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outCard334_i = function () {
		var t = new eui.Image();
		this.outCard334 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.outCard335_i = function () {
		var t = new eui.Image();
		this.outCard335 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 64;
		return t;
	};
	_proto.outCard336_i = function () {
		var t = new eui.Image();
		this.outCard336 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.outCard337_i = function () {
		var t = new eui.Image();
		this.outCard337 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 128;
		return t;
	};
	_proto.outCard338_i = function () {
		var t = new eui.Image();
		this.outCard338 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.outCard339_i = function () {
		var t = new eui.Image();
		this.outCard339 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.outCard340_i = function () {
		var t = new eui.Image();
		this.outCard340 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 228.45;
		return t;
	};
	_proto.outCard341_i = function () {
		var t = new eui.Image();
		this.outCard341 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 263.78;
		return t;
	};
	_proto.outCard342_i = function () {
		var t = new eui.Image();
		this.outCard342 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 300.21;
		return t;
	};
	_proto.outCard343_i = function () {
		var t = new eui.Image();
		this.outCard343 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 340;
		return t;
	};
	_proto.actionCardGroud0_i = function () {
		var t = new eui.Group();
		this.actionCardGroud0 = t;
		t.bottom = -1;
		t.x = 59.12;
		t.elementsContent = [this.actionItem00_i(),this.actionItem01_i(),this.actionItem02_i(),this.actionItem03_i()];
		return t;
	};
	_proto.actionItem00_i = function () {
		var t = new eui.Group();
		this.actionItem00 = t;
		t.height = 109;
		t.width = 165;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard000_i(),this.actioncard001_i(),this.actioncard002_i(),this.actioncard003_i()];
		return t;
	};
	_proto.actioncard000_i = function () {
		var t = new eui.Image();
		this.actioncard000 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard001_i = function () {
		var t = new eui.Image();
		this.actioncard001 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard002_i = function () {
		var t = new eui.Image();
		this.actioncard002 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard003_i = function () {
		var t = new eui.Image();
		this.actioncard003 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem01_i = function () {
		var t = new eui.Group();
		this.actionItem01 = t;
		t.height = 103;
		t.width = 165;
		t.x = 200;
		t.y = 0;
		t.elementsContent = [this.actioncard010_i(),this.actioncard011_i(),this.actioncard012_i(),this.actioncard013_i()];
		return t;
	};
	_proto.actioncard010_i = function () {
		var t = new eui.Image();
		this.actioncard010 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard011_i = function () {
		var t = new eui.Image();
		this.actioncard011 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard012_i = function () {
		var t = new eui.Image();
		this.actioncard012 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard013_i = function () {
		var t = new eui.Image();
		this.actioncard013 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem02_i = function () {
		var t = new eui.Group();
		this.actionItem02 = t;
		t.height = 103;
		t.width = 165;
		t.x = 400;
		t.y = 0;
		t.elementsContent = [this.actioncard020_i(),this.actioncard021_i(),this.actioncard022_i(),this.actioncard023_i()];
		return t;
	};
	_proto.actioncard020_i = function () {
		var t = new eui.Image();
		this.actioncard020 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard021_i = function () {
		var t = new eui.Image();
		this.actioncard021 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard022_i = function () {
		var t = new eui.Image();
		this.actioncard022 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard023_i = function () {
		var t = new eui.Image();
		this.actioncard023 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem03_i = function () {
		var t = new eui.Group();
		this.actionItem03 = t;
		t.height = 103;
		t.width = 165;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this.actioncard030_i(),this.actioncard031_i(),this.actioncard032_i(),this.actioncard033_i()];
		return t;
	};
	_proto.actioncard030_i = function () {
		var t = new eui.Image();
		this.actioncard030 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard031_i = function () {
		var t = new eui.Image();
		this.actioncard031 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard032_i = function () {
		var t = new eui.Image();
		this.actioncard032 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard033_i = function () {
		var t = new eui.Image();
		this.actioncard033 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud2_i = function () {
		var t = new eui.Group();
		this.actionCardGroud2 = t;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.x = 331.34;
		t.y = 64.65;
		t.elementsContent = [this.actionItem20_i(),this.actionItem21_i(),this.actionItem22_i(),this.actionItem23_i()];
		return t;
	};
	_proto.actionItem20_i = function () {
		var t = new eui.Group();
		this.actionItem20 = t;
		t.height = 103;
		t.width = 165;
		t.x = 700;
		t.y = 0;
		t.elementsContent = [this.actioncard200_i(),this.actioncard201_i(),this.actioncard202_i(),this.actioncard203_i()];
		return t;
	};
	_proto.actioncard200_i = function () {
		var t = new eui.Image();
		this.actioncard200 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard201_i = function () {
		var t = new eui.Image();
		this.actioncard201 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard202_i = function () {
		var t = new eui.Image();
		this.actioncard202 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard203_i = function () {
		var t = new eui.Image();
		this.actioncard203 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem21_i = function () {
		var t = new eui.Group();
		this.actionItem21 = t;
		t.height = 103;
		t.width = 165;
		t.x = 523.31;
		t.y = 0;
		t.elementsContent = [this.actioncard210_i(),this.actioncard211_i(),this.actioncard212_i(),this.actioncard213_i()];
		return t;
	};
	_proto.actioncard210_i = function () {
		var t = new eui.Image();
		this.actioncard210 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard211_i = function () {
		var t = new eui.Image();
		this.actioncard211 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard212_i = function () {
		var t = new eui.Image();
		this.actioncard212 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard213_i = function () {
		var t = new eui.Image();
		this.actioncard213 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem22_i = function () {
		var t = new eui.Group();
		this.actionItem22 = t;
		t.height = 103;
		t.width = 165;
		t.x = 346.61;
		t.y = 0;
		t.elementsContent = [this.actioncard220_i(),this.actioncard221_i(),this.actioncard222_i(),this.actioncard223_i()];
		return t;
	};
	_proto.actioncard220_i = function () {
		var t = new eui.Image();
		this.actioncard220 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard221_i = function () {
		var t = new eui.Image();
		this.actioncard221 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard222_i = function () {
		var t = new eui.Image();
		this.actioncard222 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard223_i = function () {
		var t = new eui.Image();
		this.actioncard223 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionItem23_i = function () {
		var t = new eui.Group();
		this.actionItem23 = t;
		t.height = 103;
		t.width = 165;
		t.x = 169.93;
		t.y = 0;
		t.elementsContent = [this.actioncard230_i(),this.actioncard231_i(),this.actioncard232_i(),this.actioncard233_i()];
		return t;
	};
	_proto.actioncard230_i = function () {
		var t = new eui.Image();
		this.actioncard230 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actioncard231_i = function () {
		var t = new eui.Image();
		this.actioncard231 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 19;
		return t;
	};
	_proto.actioncard232_i = function () {
		var t = new eui.Image();
		this.actioncard232 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 110;
		t.y = 19;
		return t;
	};
	_proto.actioncard233_i = function () {
		var t = new eui.Image();
		this.actioncard233 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.actionCardGroud3_i = function () {
		var t = new eui.Group();
		this.actionCardGroud3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 116;
		t.y = 60;
		t.elementsContent = [this.actionItem30_i(),this.actionItem31_i(),this.actionItem32_i(),this.actionItem33_i()];
		return t;
	};
	_proto.actionItem30_i = function () {
		var t = new eui.Group();
		this.actionItem30 = t;
		t.height = 113;
		t.width = 56;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard300_i(),this.actioncard301_i(),this.actioncard302_i(),this.actioncard303_i()];
		return t;
	};
	_proto.actioncard300_i = function () {
		var t = new eui.Image();
		this.actioncard300 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard301_i = function () {
		var t = new eui.Image();
		this.actioncard301 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard302_i = function () {
		var t = new eui.Image();
		this.actioncard302 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard303_i = function () {
		var t = new eui.Image();
		this.actioncard303 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem31_i = function () {
		var t = new eui.Group();
		this.actionItem31 = t;
		t.height = 113;
		t.width = 56;
		t.y = 115;
		t.elementsContent = [this.actioncard310_i(),this.actioncard311_i(),this.actioncard312_i(),this.actioncard313_i()];
		return t;
	};
	_proto.actioncard310_i = function () {
		var t = new eui.Image();
		this.actioncard310 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard311_i = function () {
		var t = new eui.Image();
		this.actioncard311 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard312_i = function () {
		var t = new eui.Image();
		this.actioncard312 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard313_i = function () {
		var t = new eui.Image();
		this.actioncard313 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem32_i = function () {
		var t = new eui.Group();
		this.actionItem32 = t;
		t.height = 113;
		t.width = 56;
		t.y = 230;
		t.elementsContent = [this.actioncard320_i(),this.actioncard321_i(),this.actioncard322_i(),this.actioncard323_i()];
		return t;
	};
	_proto.actioncard320_i = function () {
		var t = new eui.Image();
		this.actioncard320 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard321_i = function () {
		var t = new eui.Image();
		this.actioncard321 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard322_i = function () {
		var t = new eui.Image();
		this.actioncard322 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard323_i = function () {
		var t = new eui.Image();
		this.actioncard323 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem33_i = function () {
		var t = new eui.Group();
		this.actionItem33 = t;
		t.height = 113;
		t.width = 56;
		t.y = 345;
		t.elementsContent = [this.actioncard330_i(),this.actioncard331_i(),this.actioncard332_i(),this.actioncard333_i()];
		return t;
	};
	_proto.actioncard330_i = function () {
		var t = new eui.Image();
		this.actioncard330 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard331_i = function () {
		var t = new eui.Image();
		this.actioncard331 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard332_i = function () {
		var t = new eui.Image();
		this.actioncard332 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard333_i = function () {
		var t = new eui.Image();
		this.actioncard333 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionCardGroud1_i = function () {
		var t = new eui.Group();
		this.actionCardGroud1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 1074.1;
		t.y = 218.11;
		t.elementsContent = [this.actionItem13_i(),this.actionItem12_i(),this.actionItem11_i(),this.actionItem10_i()];
		return t;
	};
	_proto.actionItem13_i = function () {
		var t = new eui.Group();
		this.actionItem13 = t;
		t.height = 113;
		t.width = 56;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.actioncard132_i(),this.actioncard131_i(),this.actioncard130_i(),this.actioncard133_i()];
		return t;
	};
	_proto.actioncard132_i = function () {
		var t = new eui.Image();
		this.actioncard132 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard131_i = function () {
		var t = new eui.Image();
		this.actioncard131 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard130_i = function () {
		var t = new eui.Image();
		this.actioncard130 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard133_i = function () {
		var t = new eui.Image();
		this.actioncard133 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem12_i = function () {
		var t = new eui.Group();
		this.actionItem12 = t;
		t.height = 113;
		t.width = 56;
		t.y = 115;
		t.elementsContent = [this.actioncard122_i(),this.actioncard121_i(),this.actioncard120_i(),this.actioncard123_i()];
		return t;
	};
	_proto.actioncard122_i = function () {
		var t = new eui.Image();
		this.actioncard122 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard121_i = function () {
		var t = new eui.Image();
		this.actioncard121 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard120_i = function () {
		var t = new eui.Image();
		this.actioncard120 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard123_i = function () {
		var t = new eui.Image();
		this.actioncard123 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem11_i = function () {
		var t = new eui.Group();
		this.actionItem11 = t;
		t.height = 113;
		t.width = 56;
		t.y = 230;
		t.elementsContent = [this.actioncard112_i(),this.actioncard111_i(),this.actioncard110_i(),this.actioncard113_i()];
		return t;
	};
	_proto.actioncard112_i = function () {
		var t = new eui.Image();
		this.actioncard112 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard111_i = function () {
		var t = new eui.Image();
		this.actioncard111 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard110_i = function () {
		var t = new eui.Image();
		this.actioncard110 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard113_i = function () {
		var t = new eui.Image();
		this.actioncard113 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.actionItem10_i = function () {
		var t = new eui.Group();
		this.actionItem10 = t;
		t.height = 113;
		t.width = 56;
		t.y = 345;
		t.elementsContent = [this.actioncard102_i(),this.actioncard101_i(),this.actioncard100_i(),this.actioncard103_i()];
		return t;
	};
	_proto.actioncard102_i = function () {
		var t = new eui.Image();
		this.actioncard102 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actioncard101_i = function () {
		var t = new eui.Image();
		this.actioncard101 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.actioncard100_i = function () {
		var t = new eui.Image();
		this.actioncard100 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto.actioncard103_i = function () {
		var t = new eui.Image();
		this.actioncard103 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_heng0";
		t.x = 0;
		t.y = 19;
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
		t.elementsContent = [this._Image14_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image14_i = function () {
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
		t.elementsContent = [this._Image15_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image15_i = function () {
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
	_proto.actiopnGroup_i = function () {
		var t = new eui.Group();
		this.actiopnGroup = t;
		t.height = 105;
		t.visible = false;
		t.width = 815;
		t.x = 250.09;
		t.y = 460.79;
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
		t.skinName = hzmjIndex$Skin797;
		return t;
	};
	_proto.actionBtnGroup1_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup1 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 605.44;
		t.elementsContent = [this.actionBtn1_i(),this.card10_i()];
		return t;
	};
	_proto.actionBtn1_i = function () {
		var t = new eui.Button();
		this.actionBtn1 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -0.5;
		t.skinName = hzmjIndex$Skin798;
		return t;
	};
	_proto.card10_i = function () {
		var t = new eui.Image();
		this.card10 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup2_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup2 = t;
		t.height = 102;
		t.verticalCenter = 0.5;
		t.x = 484.41;
		t.elementsContent = [this.actionBtn2_i(),this.card20_i()];
		return t;
	};
	_proto.actionBtn2_i = function () {
		var t = new eui.Button();
		this.actionBtn2 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin799;
		return t;
	};
	_proto.card20_i = function () {
		var t = new eui.Image();
		this.card20 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup3_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup3 = t;
		t.height = 101;
		t.verticalCenter = 0;
		t.x = 357.69;
		t.elementsContent = [this.actionBtn3_i(),this.card30_i()];
		return t;
	};
	_proto.actionBtn3_i = function () {
		var t = new eui.Button();
		this.actionBtn3 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1;
		t.skinName = hzmjIndex$Skin800;
		return t;
	};
	_proto.card30_i = function () {
		var t = new eui.Image();
		this.card30 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup4_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup4 = t;
		t.height = 104;
		t.verticalCenter = 0.5;
		t.x = 236.42;
		t.elementsContent = [this.actionBtn4_i(),this.card40_i()];
		return t;
	};
	_proto.actionBtn4_i = function () {
		var t = new eui.Button();
		this.actionBtn4 = t;
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 69;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin801;
		return t;
	};
	_proto.card40_i = function () {
		var t = new eui.Image();
		this.card40 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.actionBtnGroup5_i = function () {
		var t = new eui.Group();
		this.actionBtnGroup5 = t;
		t.height = 104;
		t.verticalCenter = 1.5;
		t.width = 100;
		t.x = 105.93;
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
		t.skinName = hzmjIndex$Skin802;
		return t;
	};
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.visible = false;
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
		t.skinName = hzmjIndex$Skin803;
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
		t.skinName = hzmjIndex$Skin804;
		return t;
	};
	_proto.ready_disband_i = function () {
		var t = new eui.Button();
		this.ready_disband = t;
		t.horizontalCenter = 401;
		t.label = "";
		t.verticalCenter = 271.5;
		t.visible = false;
		t.skinName = hzmjIndex$Skin805;
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
	_proto.xxGroup_i = function () {
		var t = new eui.Group();
		this.xxGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 1134.16;
		t.y = 351.13;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin806;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 1133.66;
		t.y = 436.24;
		t.elementsContent = [this.voiceplay_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin807;
		return t;
	};
	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 0;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect7_i(),this._Group30_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 720;
		t.visible = false;
		t.width = 1215;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.x = 83.33;
		t.y = 65.16;
		t.elementsContent = [this._Image16_i(),this._Rect8_i(),this.situp_i(),this.wanfa_i(),this.diaband_i(),this.backHallBtn_i(),this.setting_i(),this.inviteBtn_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 430;
		t.source = "feiyu_mjgame_json.xsmj_background1";
		t.width = 240;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x004c42;
		t.height = 430;
		t.width = 240;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Group();
		this.situp = t;
		t.horizontalCenter = 0.5;
		t.y = 35;
		t.elementsContent = [this._Button1_i(),this._Label5_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin808;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "站起围观";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Group();
		this.wanfa = t;
		t.horizontalCenter = 0.5;
		t.y = 86;
		t.elementsContent = [this._Button2_i(),this._Label6_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin809;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "游戏规则";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Group();
		this.diaband = t;
		t.horizontalCenter = 0.5;
		t.y = 155;
		t.elementsContent = [this._Button3_i(),this._Label7_i()];
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin810;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "解散游戏";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Group();
		this.backHallBtn = t;
		t.horizontalCenter = 0.5;
		t.y = 225;
		t.elementsContent = [this._Button4_i(),this._Label8_i()];
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 1.5;
		t.x = 0;
		t.skinName = hzmjIndex$Skin811;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "返回大厅";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Group();
		this.setting = t;
		t.horizontalCenter = 0.5;
		t.y = 292;
		t.elementsContent = [this._Button5_i(),this._Label9_i()];
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin812;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "游戏设置";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new eui.Group();
		this.inviteBtn = t;
		t.horizontalCenter = 0.5;
		t.y = 355;
		t.elementsContent = [this._Button6_i(),this._Label10_i()];
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin813;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "邀请好友";
		t.textColor = 0xCCCCCC;
		t.verticalCenter = 0.5;
		t.x = 60.43;
		return t;
	};
	_proto.waitGameStart_i = function () {
		var t = new eui.Group();
		this.waitGameStart = t;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.y = 254;
		t.elementsContent = [this.roomOwnerText_i(),this.roomLifeNotice_i(),this.showRule_i(),this._Image17_i()];
		return t;
	};
	_proto.roomOwnerText_i = function () {
		var t = new eui.Label();
		this.roomOwnerText = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "房主：喜来乐";
		t.y = 38;
		return t;
	};
	_proto.roomLifeNotice_i = function () {
		var t = new eui.Label();
		this.roomLifeNotice = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 25;
		t.text = "18:50后未开局，房间将解散！";
		t.y = 76;
		return t;
	};
	_proto.showRule_i = function () {
		var t = new eui.Label();
		this.showRule = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "本局总共：15分钟";
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "feiyu_mjgame_json.xsmj_status_waitstart";
		t.y = 114;
		return t;
	};
	_proto.actionShow_i = function () {
		var t = new eui.Group();
		this.actionShow = t;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1215;
		t.x = 0;
		t.elementsContent = [this._Rect9_i(),this._Group40_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.height = 112;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 138;
		t.width = 690;
		t.elementsContent = [this.selectedChi_i(),this.selectedGang_i(),this._btn_action_cancel_i()];
		return t;
	};
	_proto.selectedChi_i = function () {
		var t = new eui.Group();
		this.selectedChi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.x = 0;
		t.elementsContent = [this.chi0_i(),this.chi1_i(),this.chi2_i()];
		return t;
	};
	_proto.chi0_i = function () {
		var t = new eui.Group();
		this.chi0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Rect10_i(),this._Group31_i(),this._Group32_i(),this._Group33_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 155;
		t.strokeColor = 0xe6c553;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 290;
		t.x = -8;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.chiCardBg00_i(),this.chiCard00_i()];
		return t;
	};
	_proto.chiCardBg00_i = function () {
		var t = new eui.Image();
		this.chiCardBg00 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard00_i = function () {
		var t = new eui.Image();
		this.chiCard00 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 91;
		t.elementsContent = [this.chiCardBg01_i(),this.chiCard01_i()];
		return t;
	};
	_proto.chiCardBg01_i = function () {
		var t = new eui.Image();
		this.chiCardBg01 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard01_i = function () {
		var t = new eui.Image();
		this.chiCard01 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 182;
		t.elementsContent = [this.chiCardBg02_i(),this.chiCard02_i()];
		return t;
	};
	_proto.chiCardBg02_i = function () {
		var t = new eui.Image();
		this.chiCardBg02 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard02_i = function () {
		var t = new eui.Image();
		this.chiCard02 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto.chi1_i = function () {
		var t = new eui.Group();
		this.chi1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 260;
		t.y = 10;
		t.elementsContent = [this._Rect11_i(),this._Group34_i(),this._Group35_i(),this._Group36_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 155;
		t.strokeColor = 0xE6C553;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 290;
		t.x = -8;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.chiCardBg10_i(),this.chiCard10_i()];
		return t;
	};
	_proto.chiCardBg10_i = function () {
		var t = new eui.Image();
		this.chiCardBg10 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard10_i = function () {
		var t = new eui.Image();
		this.chiCard10 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 91;
		t.elementsContent = [this.chiCardBg11_i(),this.chiCard11_i()];
		return t;
	};
	_proto.chiCardBg11_i = function () {
		var t = new eui.Image();
		this.chiCardBg11 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard11_i = function () {
		var t = new eui.Image();
		this.chiCard11 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 182;
		t.elementsContent = [this.chiCardBg12_i(),this.chiCard12_i()];
		return t;
	};
	_proto.chiCardBg12_i = function () {
		var t = new eui.Image();
		this.chiCardBg12 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard12_i = function () {
		var t = new eui.Image();
		this.chiCard12 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto.chi2_i = function () {
		var t = new eui.Group();
		this.chi2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 520;
		t.y = 20;
		t.elementsContent = [this._Rect12_i(),this._Group37_i(),this._Group38_i(),this._Group39_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 155;
		t.strokeColor = 0xE6C553;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 290;
		t.x = -8;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.chiCardBg20_i(),this.chiCard20_i()];
		return t;
	};
	_proto.chiCardBg20_i = function () {
		var t = new eui.Image();
		this.chiCardBg20 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard20_i = function () {
		var t = new eui.Image();
		this.chiCard20 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 91;
		t.elementsContent = [this.chiCardBg21_i(),this.chiCard21_i()];
		return t;
	};
	_proto.chiCardBg21_i = function () {
		var t = new eui.Image();
		this.chiCardBg21 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard21_i = function () {
		var t = new eui.Image();
		this.chiCard21 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 182;
		t.elementsContent = [this.chiCardBg22_i(),this.chiCard22_i()];
		return t;
	};
	_proto.chiCardBg22_i = function () {
		var t = new eui.Image();
		this.chiCardBg22 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.chiCard22_i = function () {
		var t = new eui.Image();
		this.chiCard22 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto.selectedGang_i = function () {
		var t = new eui.Group();
		this.selectedGang = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 368.18;
		t.elementsContent = [this._gp_gang0_i(),this._gp_gang1_i(),this._gp_gang2_i(),this._gp_gang3_i()];
		return t;
	};
	_proto._gp_gang0_i = function () {
		var t = new eui.Group();
		this._gp_gang0 = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.gamgBg0_i(),this.gang0_i()];
		return t;
	};
	_proto.gamgBg0_i = function () {
		var t = new eui.Image();
		this.gamgBg0 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.gang0_i = function () {
		var t = new eui.Image();
		this.gang0 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._gp_gang1_i = function () {
		var t = new eui.Group();
		this._gp_gang1 = t;
		t.verticalCenter = 0;
		t.x = 100;
		t.y = 10;
		t.elementsContent = [this.gamgBg1_i(),this.gang1_i()];
		return t;
	};
	_proto.gamgBg1_i = function () {
		var t = new eui.Image();
		this.gamgBg1 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.gang1_i = function () {
		var t = new eui.Image();
		this.gang1 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._gp_gang2_i = function () {
		var t = new eui.Group();
		this._gp_gang2 = t;
		t.verticalCenter = 0;
		t.x = 200;
		t.y = 20;
		t.elementsContent = [this.gamgBg2_i(),this.gang2_i()];
		return t;
	};
	_proto.gamgBg2_i = function () {
		var t = new eui.Image();
		this.gamgBg2 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.gang2_i = function () {
		var t = new eui.Image();
		this.gang2 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._gp_gang3_i = function () {
		var t = new eui.Group();
		this._gp_gang3 = t;
		t.verticalCenter = 0;
		t.x = 300;
		t.y = 30;
		t.elementsContent = [this.gamgBg3_i(),this.gang3_i()];
		return t;
	};
	_proto.gamgBg3_i = function () {
		var t = new eui.Image();
		this.gamgBg3 = t;
		t.source = "feiyu_mjgame_json.mjcard_bg_zheng0";
		t.x = 0;
		return t;
	};
	_proto.gang3_i = function () {
		var t = new eui.Image();
		this.gang3 = t;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.mjCard_wan4";
		t.verticalCenter = 11.5;
		return t;
	};
	_proto._btn_action_cancel_i = function () {
		var t = new eui.Button();
		this._btn_action_cancel = t;
		t.label = "";
		t.verticalCenter = 0.5;
		t.x = 765.99;
		t.skinName = hzmjIndex$Skin814;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.visible = false;
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -7.5;
		t.width = 1080;
		t.y = 0;
		t.elementsContent = [this._img_topbg_i(),this._Group41_i(),this._Group42_i(),this.playerBtn_i(),this._Group43_i(),this.showFJGroup_i(),this._Group44_i(),this._Group45_i(),this._Group46_i(),this._Group47_i()];
		return t;
	};
	_proto._img_topbg_i = function () {
		var t = new eui.Image();
		this._img_topbg = t;
		t.height = 60;
		t.horizontalCenter = 56;
		t.source = "feiyu_mjgame_json.xsmj_top_menubg0";
		t.width = 800;
		t.y = 0;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.height = 63;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 64;
		t.x = 20;
		t.elementsContent = [this.menu_i()];
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin815;
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.height = 63;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 64;
		t.x = 94;
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
		t.skinName = hzmjIndex$Skin816;
		return t;
	};
	_proto.playerBtn_i = function () {
		var t = new eui.Group();
		this.playerBtn = t;
		t.height = 63;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 64;
		t.x = 927.96;
		t.elementsContent = [this.playerBtnThree_i(),this.playerBtntwo_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto.playerBtnThree_i = function () {
		var t = new eui.Button();
		this.playerBtnThree = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin817;
		return t;
	};
	_proto.playerBtntwo_i = function () {
		var t = new eui.Image();
		this.playerBtntwo = t;
		t.source = "feiyu_mjgame_json.xsmj_top_musicxian0";
		t.verticalCenter = 0.5;
		t.x = 39.14;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.source = "feiyu_mjgame_json.xsmj_menu_noticedian";
		t.x = 50.58;
		t.y = 0;
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.height = 63;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 64;
		t.x = 846;
		t.elementsContent = [this._btn_rule_i()];
		return t;
	};
	_proto._btn_rule_i = function () {
		var t = new eui.Button();
		this._btn_rule = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hzmjIndex$Skin818;
		return t;
	};
	_proto.showFJGroup_i = function () {
		var t = new eui.Group();
		this.showFJGroup = t;
		t.verticalCenter = -1.5;
		t.x = 212.08;
		t.elementsContent = [this._Label11_i(),this.roompwd_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "房间号:";
		t.textColor = 0x59caaf;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = " ";
		t.textColor = 0x59caaf;
		t.verticalCenter = 0;
		t.x = 89.98;
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -1.5;
		t.x = 596.74;
		t.elementsContent = [this.jushu_i()];
		return t;
	};
	_proto.jushu_i = function () {
		var t = new eui.Label();
		this.jushu = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = " ";
		t.textAlign = "center";
		t.textColor = 0x59caaf;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -1.5;
		t.x = 712.74;
		t.elementsContent = [this._txt_hun_i()];
		return t;
	};
	_proto._txt_hun_i = function () {
		var t = new eui.Label();
		this._txt_hun = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = " ";
		t.textAlign = "center";
		t.textColor = 0x59CAAF;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -98.5;
		t.verticalCenter = -1.5;
		t.elementsContent = [this._txt_quan_i()];
		return t;
	};
	_proto._txt_quan_i = function () {
		var t = new eui.Label();
		this._txt_quan = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = " ";
		t.textAlign = "center";
		t.textColor = 0x59CAAF;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -2;
		t.verticalCenter = -1.5;
		t.elementsContent = [this._txt_playground_i()];
		return t;
	};
	_proto._txt_playground_i = function () {
		var t = new eui.Label();
		this._txt_playground = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = " ";
		t.textAlign = "center";
		t.textColor = 0x59CAAF;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_shortest_i = function () {
		var t = new eui.Group();
		this._gp_shortest = t;
		t.height = 720;
		t.visible = false;
		t.width = 1215;
		t.elementsContent = [this._Rect13_i(),this._Group51_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image18_i(),this._Label12_i(),this._Group49_i(),this._Group50_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 350;
		t.scale9Grid = new egret.Rectangle(198,70,233,16);
		t.source = "feiyu_mjgame_json.xsmj_setbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.stroke = 1;
		t.text = "提示";
		t.y = 10;
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 256.68;
		t.elementsContent = [this._btn_shortest_continue_i(),this._btn_shortest_endgame_i()];
		return t;
	};
	_proto._btn_shortest_continue_i = function () {
		var t = new eui.Button();
		this._btn_shortest_continue = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin819;
		return t;
	};
	_proto._btn_shortest_endgame_i = function () {
		var t = new eui.Button();
		this._btn_shortest_endgame = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 399.56;
		t.skinName = hzmjIndex$Skin820;
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 564;
		t.y = 90;
		t.elementsContent = [this._txt_shortest_item0_i(),this._txt_shortest_item1_i(),this._txt_shortest_item2_i()];
		return t;
	};
	_proto._txt_shortest_item0_i = function () {
		var t = new eui.Label();
		this._txt_shortest_item0 = t;
		t.text = "[网络科技公司]和[网络科技公司]距离500米";
		t.textColor = 0xcec8c8;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shortest_item1_i = function () {
		var t = new eui.Label();
		this._txt_shortest_item1 = t;
		t.text = "[网络科技公司]和[网络科技公司]距离500米";
		t.textColor = 0xCEC8C8;
		t.x = 0;
		t.y = 50;
		return t;
	};
	_proto._txt_shortest_item2_i = function () {
		var t = new eui.Label();
		this._txt_shortest_item2 = t;
		t.text = "[网络科技公司]和[网络科技公司]距离500米";
		t.textColor = 0xCEC8C8;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto._gp_shengyi_i = function () {
		var t = new eui.Group();
		this._gp_shengyi = t;
		t.height = 720;
		t.visible = false;
		t.width = 1215;
		t.elementsContent = [this._Rect14_i(),this._Group54_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		return t;
	};
	_proto._Group54_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image19_i(),this._Label13_i(),this._Group52_i(),this._txt_shengyi_notice_i(),this._Group53_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 350;
		t.scale9Grid = new egret.Rectangle(198,70,233,16);
		t.source = "feiyu_mjgame_json.xsmj_setbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.stroke = 1;
		t.text = "提示";
		t.y = 10;
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 256.68;
		return t;
	};
	_proto._txt_shengyi_notice_i = function () {
		var t = new eui.Label();
		this._txt_shengyi_notice = t;
		t.horizontalCenter = 0;
		t.text = "确定要做老师离开的房间里哭的生意？";
		t.textAlign = "center";
		t.textColor = 0xCEC8C8;
		t.verticalCenter = -35;
		t.width = 564;
		return t;
	};
	_proto._Group53_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 230;
		t.elementsContent = [this._gp_btn_shengyi_confirm_i(),this._gp_btn_shengyi_cancel_i()];
		return t;
	};
	_proto._gp_btn_shengyi_confirm_i = function () {
		var t = new eui.Group();
		this._gp_btn_shengyi_confirm = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect15_i(),this._Label14_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2cab4b;
		t.height = 80;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "确定";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn_shengyi_cancel_i = function () {
		var t = new eui.Group();
		this._gp_btn_shengyi_cancel = t;
		t.x = 300;
		t.elementsContent = [this._Rect16_i(),this._Label15_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xfcb819;
		t.height = 80;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "取消";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_shishi_i = function () {
		var t = new eui.Group();
		this._gp_shishi = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_shishimenban_i(),this._Group60_i()];
		return t;
	};
	_proto._rect_shishimenban_i = function () {
		var t = new eui.Rect();
		this._rect_shishimenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group60_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 900;
		t.elementsContent = [this._Image20_i(),this._img_btn_close_shishi_i(),this._Group55_i(),this._txt_roomrule_i(),this._gp_sszj_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(24,14,150,87);
		t.source = "feiyu_mjgame_json.xsmj_chat_bg";
		t.width = 900;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_btn_close_shishi_i = function () {
		var t = new eui.Image();
		this._img_btn_close_shishi = t;
		t.source = "feiyu_mjgame_json.xsmj_btn_close0";
		t.x = 851.06;
		t.y = -10.46;
		return t;
	};
	_proto._Group55_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 41.91;
		t.elementsContent = [this._Image21_i(),this._img_title_zhanji_i(),this._img_title_roomrule_i(),this._btn_title_zhanji_i(),this._btn_title_roomrule_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(23,30,141,11);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_titlebg";
		t.verticalCenter = 0;
		t.width = 676;
		return t;
	};
	_proto._img_title_zhanji_i = function () {
		var t = new eui.Image();
		this._img_title_zhanji = t;
		t.source = "feiyu_mjgame_json.xsmj_zhanji_zjtitle2";
		t.verticalCenter = -1.5;
		t.x = 92.34;
		return t;
	};
	_proto._img_title_roomrule_i = function () {
		var t = new eui.Image();
		this._img_title_roomrule = t;
		t.source = "feiyu_mjgame_json.xsmj_zhanji_ruletitle2";
		t.verticalCenter = 0.5;
		t.x = 430.23;
		return t;
	};
	_proto._btn_title_zhanji_i = function () {
		var t = new eui.Button();
		this._btn_title_zhanji = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin821;
		return t;
	};
	_proto._btn_title_roomrule_i = function () {
		var t = new eui.Button();
		this._btn_title_roomrule = t;
		t.label = "";
		t.x = 338;
		t.skinName = hzmjIndex$Skin822;
		return t;
	};
	_proto._txt_roomrule_i = function () {
		var t = new eui.Label();
		this._txt_roomrule = t;
		t.horizontalCenter = 0;
		t.text = "8局 没人300钻 清10混80";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_sszj_i = function () {
		var t = new eui.Group();
		this._gp_sszj = t;
		t.horizontalCenter = 0;
		t.y = 144.65;
		t.elementsContent = [this._gp_shishi_item0_i(),this._gp_shishi_item1_i(),this._gp_shishi_item2_i(),this._gp_shishi_item3_i(),this._txt_shishi_ju0_i(),this._txt_shishi_ju1_i(),this._txt_shishi_ju2_i(),this._txt_shishi_ju3_i()];
		return t;
	};
	_proto._gp_shishi_item0_i = function () {
		var t = new eui.Group();
		this._gp_shishi_item0 = t;
		t.verticalCenter = 0;
		t.x = 45;
		t.elementsContent = [this._img_shishi_itembg0_i(),this._txt_shishi_nickname0_i(),this._Group56_i()];
		return t;
	};
	_proto._img_shishi_itembg0_i = function () {
		var t = new eui.Image();
		this._img_shishi_itembg0 = t;
		t.scale9Grid = new egret.Rectangle(13,32,1,3);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_itembg";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_shishi_nickname0 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 150;
		t.y = 8.34;
		return t;
	};
	_proto._Group56_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.99;
		t.elementsContent = [this._txt_shishi_score00_i(),this._txt_shishi_score01_i(),this._txt_shishi_score02_i(),this._txt_shishi_score03_i()];
		return t;
	};
	_proto._txt_shishi_score00_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score00 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_score01_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score01 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 50;
		return t;
	};
	_proto._txt_shishi_score02_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score02 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 100;
		return t;
	};
	_proto._txt_shishi_score03_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score03 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 150;
		return t;
	};
	_proto._gp_shishi_item1_i = function () {
		var t = new eui.Group();
		this._gp_shishi_item1 = t;
		t.verticalCenter = 0;
		t.x = 216;
		t.elementsContent = [this._img_shishi_itembg1_i(),this._txt_shishi_nickname1_i(),this._Group57_i()];
		return t;
	};
	_proto._img_shishi_itembg1_i = function () {
		var t = new eui.Image();
		this._img_shishi_itembg1 = t;
		t.scale9Grid = new egret.Rectangle(13,32,1,3);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_itembg";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_shishi_nickname1 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 150;
		t.y = 8.34;
		return t;
	};
	_proto._Group57_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.99;
		t.elementsContent = [this._txt_shishi_score10_i(),this._txt_shishi_score11_i(),this._txt_shishi_score12_i(),this._txt_shishi_score13_i()];
		return t;
	};
	_proto._txt_shishi_score10_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score10 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_score11_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score11 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 50;
		return t;
	};
	_proto._txt_shishi_score12_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score12 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 100;
		return t;
	};
	_proto._txt_shishi_score13_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score13 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 150;
		return t;
	};
	_proto._gp_shishi_item2_i = function () {
		var t = new eui.Group();
		this._gp_shishi_item2 = t;
		t.verticalCenter = 0;
		t.x = 387;
		t.elementsContent = [this._img_shishi_itembg2_i(),this._txt_shishi_nickname2_i(),this._Group58_i()];
		return t;
	};
	_proto._img_shishi_itembg2_i = function () {
		var t = new eui.Image();
		this._img_shishi_itembg2 = t;
		t.scale9Grid = new egret.Rectangle(13,32,1,3);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_itembg";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_shishi_nickname2 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 150;
		t.y = 8.34;
		return t;
	};
	_proto._Group58_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.99;
		t.elementsContent = [this._txt_shishi_score20_i(),this._txt_shishi_score21_i(),this._txt_shishi_score22_i(),this._txt_shishi_score23_i()];
		return t;
	};
	_proto._txt_shishi_score20_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score20 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_score21_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score21 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 50;
		return t;
	};
	_proto._txt_shishi_score22_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score22 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 100;
		return t;
	};
	_proto._txt_shishi_score23_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score23 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 150;
		return t;
	};
	_proto._gp_shishi_item3_i = function () {
		var t = new eui.Group();
		this._gp_shishi_item3 = t;
		t.verticalCenter = 0;
		t.x = 558;
		t.elementsContent = [this._img_shishi_itembg3_i(),this._txt_shishi_nickname3_i(),this._Group59_i()];
		return t;
	};
	_proto._img_shishi_itembg3_i = function () {
		var t = new eui.Image();
		this._img_shishi_itembg3 = t;
		t.scale9Grid = new egret.Rectangle(13,32,1,3);
		t.source = "feiyu_mjgame_json.xsmj_zhanji_itembg";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_shishi_nickname3 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 150;
		t.y = 8.34;
		return t;
	};
	_proto._Group59_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54.99;
		t.elementsContent = [this._txt_shishi_score30_i(),this._txt_shishi_score31_i(),this._txt_shishi_score32_i(),this._txt_shishi_score33_i()];
		return t;
	};
	_proto._txt_shishi_score30_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score30 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 0;
		return t;
	};
	_proto._txt_shishi_score31_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score31 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 50;
		return t;
	};
	_proto._txt_shishi_score32_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score32 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 100;
		return t;
	};
	_proto._txt_shishi_score33_i = function () {
		var t = new eui.Label();
		this._txt_shishi_score33 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.y = 150;
		return t;
	};
	_proto._txt_shishi_ju0_i = function () {
		var t = new eui.Label();
		this._txt_shishi_ju0 = t;
		t.size = 25;
		t.text = "0";
		t.x = 0;
		t.y = 55;
		return t;
	};
	_proto._txt_shishi_ju1_i = function () {
		var t = new eui.Label();
		this._txt_shishi_ju1 = t;
		t.size = 25;
		t.text = "0";
		t.x = 0;
		t.y = 105;
		return t;
	};
	_proto._txt_shishi_ju2_i = function () {
		var t = new eui.Label();
		this._txt_shishi_ju2 = t;
		t.size = 25;
		t.text = "0";
		t.x = 0;
		t.y = 155;
		return t;
	};
	_proto._txt_shishi_ju3_i = function () {
		var t = new eui.Label();
		this._txt_shishi_ju3 = t;
		t.size = 25;
		t.text = "0";
		t.x = 0;
		t.y = 205;
		return t;
	};
	_proto._gp_dismiss_i = function () {
		var t = new eui.Group();
		this._gp_dismiss = t;
		t.visible = false;
		t.elementsContent = [this._rect_dismissmenban_i(),this._Group63_i()];
		return t;
	};
	_proto._rect_dismissmenban_i = function () {
		var t = new eui.Rect();
		this._rect_dismissmenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group63_i = function () {
		var t = new eui.Group();
		t.height = 450;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 700;
		t.elementsContent = [this._Image22_i(),this._img_btn_close_shishi0_i(),this._Image23_i(),this._Group61_i(),this._gp_dismiss_players_i(),this._Group62_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(24,14,150,87);
		t.source = "feiyu_mjgame_json.xsmj_chat_bg";
		t.width = 700;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_btn_close_shishi0_i = function () {
		var t = new eui.Image();
		this._img_btn_close_shishi0 = t;
		t.source = "feiyu_mjgame_json.xsmj_btn_close0";
		t.x = 653.73;
		t.y = -19.79;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_title";
		t.y = 9.33;
		return t;
	};
	_proto._Group61_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 92.33;
		t.elementsContent = [this._Rect17_i(),this._txt_dismiss_daoji_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x074836;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._txt_dismiss_daoji_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_daoji = t;
		t.horizontalCenter = 0;
		t.text = "在60秒后会自动解散";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_dismiss_players_i = function () {
		var t = new eui.Group();
		this._gp_dismiss_players = t;
		t.horizontalCenter = 0;
		t.y = 180.34;
		t.elementsContent = [this._txt_dismiss_item0_i(),this._txt_dismiss_item1_i(),this._txt_dismiss_item2_i(),this._txt_dismiss_item3_i()];
		return t;
	};
	_proto._txt_dismiss_item0_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item0 = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._img_dismiss_status0_i(),this._txt_dismiss_nickname0_i()];
		return t;
	};
	_proto._img_dismiss_status0_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_launch";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname0 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item1_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item1 = t;
		t.verticalCenter = 0;
		t.x = 160;
		t.elementsContent = [this._img_dismiss_status1_i(),this._txt_dismiss_nickname1_i()];
		return t;
	};
	_proto._img_dismiss_status1_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_agree";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname1 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item2_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item2 = t;
		t.verticalCenter = 0;
		t.x = 320;
		t.elementsContent = [this._img_dismiss_status2_i(),this._txt_dismiss_nickname2_i()];
		return t;
	};
	_proto._img_dismiss_status2_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_refuse";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname2 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_dismiss_item3_i = function () {
		var t = new eui.Group();
		this._txt_dismiss_item3 = t;
		t.verticalCenter = 0;
		t.x = 480;
		t.elementsContent = [this._img_dismiss_status3_i(),this._txt_dismiss_nickname3_i()];
		return t;
	};
	_proto._img_dismiss_status3_i = function () {
		var t = new eui.Image();
		this._img_dismiss_status3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_dismiss_status_wait";
		t.y = 39.66;
		return t;
	};
	_proto._txt_dismiss_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_dismiss_nickname3 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "网络科技公司";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._Group62_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 346.67;
		t.elementsContent = [this._btn_dismiss_refuse_i(),this._btn_dismiss_agree_i()];
		return t;
	};
	_proto._btn_dismiss_refuse_i = function () {
		var t = new eui.Button();
		this._btn_dismiss_refuse = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 280;
		t.skinName = hzmjIndex$Skin823;
		return t;
	};
	_proto._btn_dismiss_agree_i = function () {
		var t = new eui.Button();
		this._btn_dismiss_agree = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = hzmjIndex$Skin824;
		return t;
	};
	_proto._gp_invite_i = function () {
		var t = new eui.Group();
		this._gp_invite = t;
		t.visible = false;
		t.elementsContent = [this._rect_invitemenban_i(),this._Group64_i()];
		return t;
	};
	_proto._rect_invitemenban_i = function () {
		var t = new eui.Rect();
		this._rect_invitemenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group64_i = function () {
		var t = new eui.Group();
		t.height = 569;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 425;
		t.elementsContent = [this._Image24_i(),this._img_btn_close_invite_i(),this._Image25_i(),this._Image26_i(),this._txt_inviterule_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(24,14,150,87);
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_yaoqing_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_btn_close_invite_i = function () {
		var t = new eui.Image();
		this._img_btn_close_invite = t;
		t.source = "feiyu_mjgame_json.xsmj_btn_close0";
		t.x = 377.72;
		t.y = -6.43;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_yaoqing_title";
		t.y = 53.64;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.width = 65;
		t.x = 45.34;
		t.y = 334;
		return t;
	};
	_proto._txt_inviterule_i = function () {
		var t = new eui.Label();
		this._txt_inviterule = t;
		t.size = 20;
		t.text = "互娱互娱-10局-房号：846259--市民先生(22222222)";
		t.textColor = 0x59caaf;
		t.width = 265;
		t.x = 119.67;
		t.y = 339.34;
		return t;
	};
	_proto._gp_watch_i = function () {
		var t = new eui.Group();
		this._gp_watch = t;
		t.visible = false;
		t.elementsContent = [this._rect_watchmenban_i(),this._Group73_i()];
		return t;
	};
	_proto._rect_watchmenban_i = function () {
		var t = new eui.Rect();
		this._rect_watchmenban = t;
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group73_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 79.33;
		t.elementsContent = [this._Rect18_i(),this._Group65_i(),this._Group66_i(),this._Scroller1_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.fillColor = 0x133833;
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 350;
		return t;
	};
	_proto._Group65_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect19_i(),this._Label16_i()];
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x103635;
		t.height = 50;
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "游客";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group66_i = function () {
		var t = new eui.Group();
		t.y = 220.65;
		t.elementsContent = [this._Rect20_i(),this._Label17_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x103635;
		t.height = 50;
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "游戏消息";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 225;
		t.width = 350;
		t.y = 273.69;
		t.viewport = this._scro_watch_xiaoxi_i();
		return t;
	};
	_proto._scro_watch_xiaoxi_i = function () {
		var t = new eui.Group();
		this._scro_watch_xiaoxi = t;
		t.elementsContent = [this._Label18_i()];
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "【科技网络公司】进入房间";
		t.x = 20;
		t.y = 16.33;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 170;
		t.width = 350;
		t.y = 50.36;
		t.viewport = this._scro_watch_youke_i();
		return t;
	};
	_proto._scro_watch_youke_i = function () {
		var t = new eui.Group();
		this._scro_watch_youke = t;
		t.elementsContent = [this._Group72_i()];
		return t;
	};
	_proto._Group72_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Group67_i(),this._Group68_i(),this._Group69_i(),this._Group70_i(),this._Group71_i()];
		return t;
	};
	_proto._Group67_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image27_i(),this._Label19_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._Group68_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 65;
		t.y = 75;
		t.elementsContent = [this._Image28_i(),this._Label20_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._Group69_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 130;
		t.y = 0;
		t.elementsContent = [this._Image29_i(),this._Label21_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._Group70_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 195;
		t.y = 0;
		t.elementsContent = [this._Image30_i(),this._Label22_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._Group71_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 260;
		t.y = 0;
		t.elementsContent = [this._Image31_i(),this._Label23_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	_proto._gp_ting_i = function () {
		var t = new eui.Group();
		this._gp_ting = t;
		t.x = 229.38;
		t.y = 479.6;
		t.elementsContent = [this._img_tingbg_i(),this._Image32_i(),this._gp_ting_card_i()];
		return t;
	};
	_proto._img_tingbg_i = function () {
		var t = new eui.Image();
		this._img_tingbg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(15,15,3,4);
		t.source = "feiyu_mjgame_json.xsmj_ting_notictbg";
		t.width = 80;
		t.x = 0;
		t.y = -0.4;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "feiyu_mjgame_json.xsmj_ting_tingtxt";
		t.verticalCenter = 0.5;
		t.x = 2;
		return t;
	};
	_proto._gp_ting_card_i = function () {
		var t = new eui.Group();
		this._gp_ting_card = t;
		t.x = 44.56;
		t.y = 5.27;
		t.elementsContent = [this.huaCard0_i(),this._BitmapLabel1_i(),this._Image33_i()];
		return t;
	};
	_proto.huaCard0_i = function () {
		var t = new eui.Image();
		this.huaCard0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0.06;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "ting_fnt_fnt";
		t.horizontalCenter = 0;
		t.text = "2";
		t.y = 32.73;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.33;
		t.scaleY = 0.33;
		t.source = "feiyu_mjgame_json.mjCard_tiao7";
		t.verticalCenter = -9.5;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 61;
		t.height = 122;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 86;
		t.x = 195;
		t.y = 300;
		return t;
	};
	_proto._gp_chupaiLife_i = function () {
		var t = new eui.Group();
		this._gp_chupaiLife = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Rect22_i(),this._txt_chupaiLife_i()];
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.8;
		t.height = 100;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_chupaiLife_i = function () {
		var t = new eui.Label();
		this._txt_chupaiLife = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "玩家无响应房间将在00:00:00后解散";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_chipengTwo_i = function () {
		var t = new eui.Group();
		this._gp_chipengTwo = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Rect23_i(),this._txt_chipengTwo_i()];
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.8;
		t.height = 100;
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_chipengTwo_i = function () {
		var t = new eui.Label();
		this._txt_chipengTwo = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "玩家无响应房间将在00:00:00后解散";
		t.textColor = 0xfc6f6f;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_rule_i = function () {
		var t = new eui.Group();
		this._gp_rule = t;
		t.height = 585;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 900;
		t.elementsContent = [this._Rect24_i(),this._rect_rule_men_i(),this._scro_rule_i()];
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.9;
		t.height = 650;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.strokeAlpha = 0.8;
		t.strokeColor = 0xEAEAEA;
		t.strokeWeight = 2;
		t.verticalCenter = 0;
		t.width = 1000;
		return t;
	};
	_proto._rect_rule_men_i = function () {
		var t = new eui.Rect();
		this._rect_rule_men = t;
		t.fillAlpha = 0;
		t.height = 725;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._scro_rule_i = function () {
		var t = new eui.Scroller();
		this._scro_rule = t;
		t.height = 520;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 800;
		t.x = 35;
		t.y = 27.33;
		t.viewport = this._scroGp_rule_i();
		return t;
	};
	_proto._scroGp_rule_i = function () {
		var t = new eui.Group();
		this._scroGp_rule = t;
		return t;
	};
	return hzmjIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/listenCard.exml'] = window.listenCard = (function (_super) {
	__extends(listenCard, _super);
	function listenCard() {
		_super.call(this);
		this.skinParts = ["card","num","_img_cardvalue","_gp_ting_card"];
		
		this.elementsContent = [this._gp_ting_card_i()];
	}
	var _proto = listenCard.prototype;

	_proto._gp_ting_card_i = function () {
		var t = new eui.Group();
		this._gp_ting_card = t;
		t.elementsContent = [this.card_i(),this.num_i(),this._img_cardvalue_i()];
		return t;
	};
	_proto.card_i = function () {
		var t = new eui.Image();
		this.card = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "feiyu_mjgame_json.mjcard_bg_tang0";
		t.x = 0;
		t.y = 0.06;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.BitmapLabel();
		this.num = t;
		t.font = "ting_fnt_fnt";
		t.horizontalCenter = 0;
		t.text = "2";
		t.y = 32.73;
		return t;
	};
	_proto._img_cardvalue_i = function () {
		var t = new eui.Image();
		this._img_cardvalue = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.33;
		t.scaleY = 0.33;
		t.source = "feiyu_mjgame_json.mjCard_tiao7";
		t.verticalCenter = -9.5;
		return t;
	};
	return listenCard;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/locationUI.exml'] = window.locationUI = (function (_super) {
	__extends(locationUI, _super);
	function locationUI() {
		_super.call(this);
		this.skinParts = ["txt401","line401","txt402","line402","txt403","line403","txt412","line412","txt413","line413","txt423","line423","headImg40","nickname40","ip0","head40","headImg41","nickname41","ip1","head41","headImg42","nickname42","ip2","head42","headImg43","nickname43","ip3","head43","peopleFour"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.peopleFour_i()];
	}
	var _proto = locationUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.7;
		t.height = 620;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.strokeAlpha = 0.8;
		t.strokeColor = 0xeaeaea;
		t.strokeWeight = 2;
		t.verticalCenter = 0;
		t.width = 900;
		return t;
	};
	_proto.peopleFour_i = function () {
		var t = new eui.Group();
		this.peopleFour = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.line401_i(),this.line402_i(),this.line403_i(),this.line412_i(),this.line413_i(),this.line423_i(),this.head40_i(),this.head41_i(),this.head42_i(),this.head43_i()];
		return t;
	};
	_proto.line401_i = function () {
		var t = new eui.Group();
		this.line401 = t;
		t.horizontalCenter = 142.5;
		t.verticalCenter = -87.5;
		t.elementsContent = [this._Image1_i(),this.txt401_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_local_fangxiang_left";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt401_i = function () {
		var t = new eui.Label();
		this.txt401 = t;
		t.horizontalCenter = 7.5;
		t.rotation = 30;
		t.text = "999m";
		t.verticalCenter = -19.5;
		return t;
	};
	_proto.line402_i = function () {
		var t = new eui.Group();
		this.line402 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.txt402_i(),this._Image2_i()];
		return t;
	};
	_proto.txt402_i = function () {
		var t = new eui.Label();
		this.txt402 = t;
		t.horizontalCenter = 22;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -52;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 300;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_local_fangxiang_shu";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line403_i = function () {
		var t = new eui.Group();
		this.line403 = t;
		t.horizontalCenter = -129.5;
		t.verticalCenter = -87.5;
		t.elementsContent = [this._Image3_i(),this.txt403_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_local_fangxiang_right";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt403_i = function () {
		var t = new eui.Label();
		this.txt403 = t;
		t.horizontalCenter = -18.5;
		t.rotation = -30;
		t.text = "999m";
		t.verticalCenter = -13.5;
		return t;
	};
	_proto.line412_i = function () {
		var t = new eui.Group();
		this.line412 = t;
		t.horizontalCenter = 111.5;
		t.verticalCenter = 98.5;
		t.elementsContent = [this._Image4_i(),this.txt412_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_local_fangxiang_right";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt412_i = function () {
		var t = new eui.Label();
		this.txt412 = t;
		t.horizontalCenter = 3.5;
		t.rotation = -30;
		t.text = "999m";
		t.verticalCenter = 24.5;
		return t;
	};
	_proto.line413_i = function () {
		var t = new eui.Group();
		this.line413 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.txt413_i(),this._Image5_i()];
		return t;
	};
	_proto.txt413_i = function () {
		var t = new eui.Label();
		this.txt413 = t;
		t.horizontalCenter = -119;
		t.text = "999m";
		t.verticalCenter = -17;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_local_fangxiang_heng";
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto.line423_i = function () {
		var t = new eui.Group();
		this.line423 = t;
		t.horizontalCenter = -133.5;
		t.verticalCenter = 84.5;
		t.elementsContent = [this._Image6_i(),this.txt423_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_local_fangxiang_left";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt423_i = function () {
		var t = new eui.Label();
		this.txt423 = t;
		t.horizontalCenter = 1.5;
		t.rotation = 30;
		t.text = "999m";
		t.verticalCenter = 25.5;
		return t;
	};
	_proto.head40_i = function () {
		var t = new eui.Group();
		this.head40 = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 110;
		t.y = 0;
		t.elementsContent = [this.headImg40_i(),this._Rect3_i(),this.nickname40_i(),this.ip0_i()];
		return t;
	};
	_proto.headImg40_i = function () {
		var t = new eui.Image();
		this.headImg40 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 150;
		t.ellipseWidth = 150;
		t.fillAlpha = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.strokeColor = 0x15ede3;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.nickname40_i = function () {
		var t = new eui.Label();
		this.nickname40 = t;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "网络科技恶意公司";
		t.y = -47.14;
		return t;
	};
	_proto.ip0_i = function () {
		var t = new eui.Label();
		this.ip0 = t;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "192.111.1.1";
		t.textColor = 0xff5151;
		t.y = -21.89;
		return t;
	};
	_proto.head41_i = function () {
		var t = new eui.Group();
		this.head41 = t;
		t.height = 110;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 500;
		t.elementsContent = [this.headImg41_i(),this._Rect4_i(),this.nickname41_i(),this.ip1_i()];
		return t;
	};
	_proto.headImg41_i = function () {
		var t = new eui.Image();
		this.headImg41 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 150;
		t.ellipseWidth = 150;
		t.fillAlpha = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.strokeColor = 0x15ede3;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.nickname41_i = function () {
		var t = new eui.Label();
		this.nickname41 = t;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "网络科技恶意公司";
		t.y = 112.79;
		return t;
	};
	_proto.ip1_i = function () {
		var t = new eui.Label();
		this.ip1 = t;
		t.horizontalCenter = 0.5;
		t.size = 23;
		t.text = "192.111.1.1";
		t.textColor = 0xFF5151;
		t.y = 138.04;
		return t;
	};
	_proto.head42_i = function () {
		var t = new eui.Group();
		this.head42 = t;
		t.height = 110;
		t.horizontalCenter = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 110;
		t.y = 346.98;
		t.elementsContent = [this.headImg42_i(),this._Rect5_i(),this.nickname42_i(),this.ip2_i()];
		return t;
	};
	_proto.headImg42_i = function () {
		var t = new eui.Image();
		this.headImg42 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 150;
		t.ellipseWidth = 150;
		t.fillAlpha = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.strokeColor = 0x15ede3;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.nickname42_i = function () {
		var t = new eui.Label();
		this.nickname42 = t;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "网络科技恶意公司";
		t.y = 112.79;
		return t;
	};
	_proto.ip2_i = function () {
		var t = new eui.Label();
		this.ip2 = t;
		t.horizontalCenter = 0.5;
		t.size = 23;
		t.text = "192.111.1.1";
		t.textColor = 0xFF5151;
		t.y = 138.04;
		return t;
	};
	_proto.head43_i = function () {
		var t = new eui.Group();
		this.head43 = t;
		t.height = 110;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 0;
		t.elementsContent = [this.headImg43_i(),this._Rect6_i(),this.nickname43_i(),this.ip3_i()];
		return t;
	};
	_proto.headImg43_i = function () {
		var t = new eui.Image();
		this.headImg43 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 150;
		t.ellipseWidth = 150;
		t.fillAlpha = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.strokeColor = 0x15ede3;
		t.strokeWeight = 5;
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.nickname43_i = function () {
		var t = new eui.Label();
		this.nickname43 = t;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "网络科技恶意公司";
		t.y = 112.79;
		return t;
	};
	_proto.ip3_i = function () {
		var t = new eui.Label();
		this.ip3 = t;
		t.horizontalCenter = 0.5;
		t.size = 23;
		t.text = "192.111.1.1";
		t.textColor = 0xFF5151;
		t.y = 138.04;
		return t;
	};
	return locationUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/maimaUI.exml'] = window.maimaUI = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/totalResult.exml'] = window.totalResult = (function (_super) {
	__extends(totalResult, _super);
	var totalResult$Skin825 = 	(function (_super) {
		__extends(totalResult$Skin825, _super);
		function totalResult$Skin825() {
			_super.call(this);
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
		var _proto = totalResult$Skin825.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sh_btn_queding_da_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return totalResult$Skin825;
	})(eui.Skin);

	var totalResult$Skin826 = 	(function (_super) {
		__extends(totalResult$Skin826, _super);
		function totalResult$Skin826() {
			_super.call(this);
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
		var _proto = totalResult$Skin826.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sh_rt_btn_replay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return totalResult$Skin826;
	})(eui.Skin);

	function totalResult() {
		_super.call(this);
		this.skinParts = ["_rect_resbg","_txt_pwd","_txt_time","_txt_playcount","_txt_playcount2","_txt_pwd1","backBtn","playAgainBtn","_img_head0","_txt_nickname0","_txt_id0","_img_bigWin0","_txt_point0","_gp_item0","_img_head1","_txt_nickname1","_txt_id1","_img_bigWin1","_txt_point1","_gp_item1","_img_head2","_txt_nickname2","_txt_id2","_img_bigWin2","_txt_point2","_gp_item2","_img_head3","_txt_nickname3","_txt_id3","_img_bigWin3","_txt_point3","_gp_item3"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._Group13_i()];
	}
	var _proto = totalResult.prototype;

	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 1080;
		t.rotation = 90;
		t.scaleX = 1.122;
		t.scaleY = 1.122;
		t.width = 640;
		t.x = 1215;
		t.y = 0;
		t.elementsContent = [this._rect_resbg_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Rect4_i(),this._Group4_i(),this._Label1_i(),this._gp_item0_i(),this._gp_item1_i(),this._gp_item2_i(),this._gp_item3_i()];
		return t;
	};
	_proto._rect_resbg_i = function () {
		var t = new eui.Rect();
		this._rect_resbg = t;
		t.height = 1500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 44.15;
		t.elementsContent = [this._Rect1_i(),this._txt_pwd_i(),this._txt_time_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_pwd_i = function () {
		var t = new eui.Label();
		this._txt_pwd = t;
		t.size = 30;
		t.text = "港式五张526435";
		t.textColor = 0x9e9e9e;
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.text = "03-12 12:12";
		t.textColor = 0x9E9E9E;
		t.verticalCenter = 0.5;
		t.x = 292;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 138.15;
		t.elementsContent = [this._Rect2_i(),this._txt_playcount_i(),this._txt_playcount2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_playcount_i = function () {
		var t = new eui.Label();
		this._txt_playcount = t;
		t.size = 30;
		t.text = "局数 10";
		t.textColor = 0x9E9E9E;
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto._txt_playcount2_i = function () {
		var t = new eui.Label();
		this._txt_playcount2 = t;
		t.text = "Label";
		t.textColor = 0x9e9e9e;
		t.verticalCenter = 0;
		t.x = 295.74;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 246.89;
		t.elementsContent = [this._Rect3_i(),this._txt_pwd1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 60;
		t.width = 580;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_pwd1_i = function () {
		var t = new eui.Label();
		this._txt_pwd1 = t;
		t.size = 30;
		t.text = "战况";
		t.textColor = 0x9E9E9E;
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 600;
		t.horizontalCenter = 0;
		t.width = 580;
		t.y = 310.87;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 950.3;
		t.elementsContent = [this.backBtn_i(),this.playAgainBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 308;
		t.skinName = totalResult$Skin825;
		return t;
	};
	_proto.playAgainBtn_i = function () {
		var t = new eui.Button();
		this.playAgainBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = totalResult$Skin826;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "本产品仅供休闲娱乐使用，严禁赌博";
		t.y = 920.73;
		return t;
	};
	_proto._gp_item0_i = function () {
		var t = new eui.Group();
		this._gp_item0 = t;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 337.52;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._img_bigWin0_i(),this._txt_point0_i(),this._Rect5_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_head0_i()];
		return t;
	};
	_proto._img_head0_i = function () {
		var t = new eui.Image();
		this._img_head0 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = 0.5;
		t.width = 81;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 100;
		t.elementsContent = [this._txt_nickname0_i(),this._txt_id0_i()];
		return t;
	};
	_proto._txt_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_id0_i = function () {
		var t = new eui.Label();
		this._txt_id0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "777777";
		t.textColor = 0x000000;
		t.y = 37.29;
		return t;
	};
	_proto._img_bigWin0_i = function () {
		var t = new eui.Image();
		this._img_bigWin0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 255;
		return t;
	};
	_proto._txt_point0_i = function () {
		var t = new eui.Label();
		this._txt_point0 = t;
		t.bold = true;
		t.height = 50;
		t.horizontalCenter = 201;
		t.size = 50;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06fb06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.bottom = -40;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_item1_i = function () {
		var t = new eui.Group();
		this._gp_item1 = t;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 486.62;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._img_bigWin1_i(),this._txt_point1_i(),this._Rect6_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_head1_i()];
		return t;
	};
	_proto._img_head1_i = function () {
		var t = new eui.Image();
		this._img_head1 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = 0.5;
		t.width = 81;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 100;
		t.elementsContent = [this._txt_nickname1_i(),this._txt_id1_i()];
		return t;
	};
	_proto._txt_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_id1_i = function () {
		var t = new eui.Label();
		this._txt_id1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "777777";
		t.textColor = 0x000000;
		t.y = 37.29;
		return t;
	};
	_proto._img_bigWin1_i = function () {
		var t = new eui.Image();
		this._img_bigWin1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 255;
		return t;
	};
	_proto._txt_point1_i = function () {
		var t = new eui.Label();
		this._txt_point1 = t;
		t.bold = true;
		t.height = 50;
		t.horizontalCenter = 201;
		t.size = 50;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06FB06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.bottom = -40;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_item2_i = function () {
		var t = new eui.Group();
		this._gp_item2 = t;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 634.85;
		t.elementsContent = [this._Group9_i(),this._Group10_i(),this._img_bigWin2_i(),this._txt_point2_i(),this._Rect7_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_head2_i()];
		return t;
	};
	_proto._img_head2_i = function () {
		var t = new eui.Image();
		this._img_head2 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = 0.5;
		t.width = 81;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 100;
		t.elementsContent = [this._txt_nickname2_i(),this._txt_id2_i()];
		return t;
	};
	_proto._txt_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_id2_i = function () {
		var t = new eui.Label();
		this._txt_id2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "777777";
		t.textColor = 0x000000;
		t.y = 37.29;
		return t;
	};
	_proto._img_bigWin2_i = function () {
		var t = new eui.Image();
		this._img_bigWin2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 255;
		return t;
	};
	_proto._txt_point2_i = function () {
		var t = new eui.Label();
		this._txt_point2 = t;
		t.bold = true;
		t.height = 50;
		t.horizontalCenter = 201;
		t.size = 50;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06FB06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.bottom = -40;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_item3_i = function () {
		var t = new eui.Group();
		this._gp_item3 = t;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 784.56;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this._img_bigWin3_i(),this._txt_point3_i(),this._Rect8_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_head3_i()];
		return t;
	};
	_proto._img_head3_i = function () {
		var t = new eui.Image();
		this._img_head3 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = 0.5;
		t.width = 81;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 100;
		t.elementsContent = [this._txt_nickname3_i(),this._txt_id3_i()];
		return t;
	};
	_proto._txt_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto._txt_id3_i = function () {
		var t = new eui.Label();
		this._txt_id3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "777777";
		t.textColor = 0x000000;
		t.y = 37.29;
		return t;
	};
	_proto._img_bigWin3_i = function () {
		var t = new eui.Image();
		this._img_bigWin3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 255;
		return t;
	};
	_proto._txt_point3_i = function () {
		var t = new eui.Label();
		this._txt_point3 = t;
		t.bold = true;
		t.height = 50;
		t.horizontalCenter = 201;
		t.size = 50;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06FB06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.bottom = -40;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	return totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/wanfa_hzmj.exml'] = window.wanfa_hzmj = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/watchingItem.exml'] = window.watchingItem = (function (_super) {
	__extends(watchingItem, _super);
	function watchingItem() {
		_super.call(this);
		this.skinParts = ["_img_head","_txt_nickname"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = watchingItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.elementsContent = [this._img_head_i(),this._txt_nickname_i()];
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "feiyu_mjgame_json.xsmj_head_default_circle";
		t.width = 73;
		t.y = 0;
		return t;
	};
	_proto._txt_nickname_i = function () {
		var t = new eui.Label();
		this._txt_nickname = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "网络科技公司";
		t.textAlign = "center";
		t.width = 80;
		t.y = 74.99;
		return t;
	};
	return watchingItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/xsmj/yyNotice.exml'] = window.yyNotice = (function (_super) {
	__extends(yyNotice, _super);
	var yyNotice$Skin827 = 	(function (_super) {
		__extends(yyNotice$Skin827, _super);
		function yyNotice$Skin827() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = yyNotice$Skin827.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cgImage_json.sendBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return yyNotice$Skin827;
	})(eui.Skin);

	var yyNotice$Skin828 = 	(function (_super) {
		__extends(yyNotice$Skin828, _super);
		function yyNotice$Skin828() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = yyNotice$Skin828.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cgImage_json.cancelBtn1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return yyNotice$Skin828;
	})(eui.Skin);

	function yyNotice() {
		_super.call(this);
		this.skinParts = ["_btn_shangchuan","_btn_cancel","daojiNum"];
		
		this.height = 260;
		this.width = 350;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Image3_i()];
	}
	var _proto = yyNotice.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 260;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,12,19,30);
		t.source = "cgImage_json.lyingBg";
		t.verticalCenter = 0;
		t.width = 350;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 290;
		t.y = 188.31;
		t.elementsContent = [this._btn_shangchuan_i(),this._btn_cancel_i()];
		return t;
	};
	_proto._btn_shangchuan_i = function () {
		var t = new eui.Button();
		this._btn_shangchuan = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = yyNotice$Skin827;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.label = "";
		t.x = 185;
		t.y = 0;
		t.skinName = yyNotice$Skin828;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0.5;
		t.width = 123;
		t.y = 17.34;
		t.elementsContent = [this.daojiNum_i(),this._Image2_i()];
		return t;
	};
	_proto.daojiNum_i = function () {
		var t = new eui.Label();
		this.daojiNum = t;
		t.size = 30;
		t.text = "10";
		t.verticalCenter = 0;
		t.x = 89;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "feiyu_mjgame_json.xsmj_ly_title";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "cgImage_json.lyingBtn";
		t.y = 80;
		return t;
	};
	return yyNotice;
})(eui.Skin);