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
                generateEUI.skins = {"NiuniuResult":"resource/eui_skins/NiuniuResult.exml","NiuniuRecord":"resource/eui_skins/niuniu/NiuniuRecord.exml"};generateEUI.paths['resource/eui_skins/common/common_kuang_jiesan.exml'] = window.common_kuang_tishi = (function (_super) {
	__extends(common_kuang_tishi, _super);
	var common_kuang_tishi$Skin1 = 	(function (_super) {
		__extends(common_kuang_tishi$Skin1, _super);
		function common_kuang_tishi$Skin1() {
			_super.call(this);
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
		var _proto = common_kuang_tishi$Skin1.prototype;

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
		return common_kuang_tishi$Skin1;
	})(eui.Skin);

	var common_kuang_tishi$Skin2 = 	(function (_super) {
		__extends(common_kuang_tishi$Skin2, _super);
		function common_kuang_tishi$Skin2() {
			_super.call(this);
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
		var _proto = common_kuang_tishi$Skin2.prototype;

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
		return common_kuang_tishi$Skin2;
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
		t.skinName = common_kuang_tishi$Skin1;
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
		t.skinName = common_kuang_tishi$Skin2;
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
	var common_kuang_menulist$Skin3 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin3, _super);
		function common_kuang_menulist$Skin3() {
			_super.call(this);
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
		var _proto = common_kuang_menulist$Skin3.prototype;

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
		return common_kuang_menulist$Skin3;
	})(eui.Skin);

	var common_kuang_menulist$Skin4 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin4, _super);
		function common_kuang_menulist$Skin4() {
			_super.call(this);
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
		var _proto = common_kuang_menulist$Skin4.prototype;

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
		return common_kuang_menulist$Skin4;
	})(eui.Skin);

	var common_kuang_menulist$Skin5 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin5, _super);
		function common_kuang_menulist$Skin5() {
			_super.call(this);
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
		var _proto = common_kuang_menulist$Skin5.prototype;

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
		return common_kuang_menulist$Skin5;
	})(eui.Skin);

	var common_kuang_menulist$Skin6 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin6, _super);
		function common_kuang_menulist$Skin6() {
			_super.call(this);
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
		var _proto = common_kuang_menulist$Skin6.prototype;

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
		return common_kuang_menulist$Skin6;
	})(eui.Skin);

	var common_kuang_menulist$Skin7 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin7, _super);
		function common_kuang_menulist$Skin7() {
			_super.call(this);
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
		var _proto = common_kuang_menulist$Skin7.prototype;

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
		return common_kuang_menulist$Skin7;
	})(eui.Skin);

	var common_kuang_menulist$Skin8 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin8, _super);
		function common_kuang_menulist$Skin8() {
			_super.call(this);
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
		var _proto = common_kuang_menulist$Skin8.prototype;

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
		return common_kuang_menulist$Skin8;
	})(eui.Skin);

	function common_kuang_menulist() {
		_super.call(this);
		this.skinParts = ["situp","wanfa","diaband","backHallBtn","setting","locBtn","menulist"];
		
		this.height = 640;
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
		t.height = 640;
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
		t.skinName = common_kuang_menulist$Skin3;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
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
		t.skinName = common_kuang_menulist$Skin4;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
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
		t.skinName = common_kuang_menulist$Skin5;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
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
		t.skinName = common_kuang_menulist$Skin6;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
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
		t.skinName = common_kuang_menulist$Skin7;
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
		t.skinName = common_kuang_menulist$Skin8;
		return t;
	};
	return common_kuang_menulist;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_player.exml'] = window.common_kuang_player = (function (_super) {
	__extends(common_kuang_player, _super);
	function common_kuang_player() {
		_super.call(this);
		this.skinParts = ["_img_meng","bunengyong0","ani0","bunengyong1","ani1","bunengyong2","ani2","bunengyong3","ani3","bunengyong4","ani4","nickname","headImg","id","ip","_label_rate","_label_zuan","_gb_zuan","_group_main"];
		
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
		t.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Group6_i(),this.nickname_i(),this.headImg_i(),this.id_i(),this.ip_i(),this._label_rate_i(),this._gb_zuan_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_otherInfoDi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe7e7e7;
		t.height = 100;
		t.width = 50;
		t.x = 116;
		t.y = 50;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 166.67;
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
		t.x = 150;
		t.y = 59.33;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 76;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.width = 76;
		t.x = 47.73;
		t.y = 48;
		return t;
	};
	_proto.id_i = function () {
		var t = new eui.Label();
		this.id = t;
		t.size = 25;
		t.text = "666666";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 158;
		t.y = 62.5;
		return t;
	};
	_proto.ip_i = function () {
		var t = new eui.Label();
		this.ip = t;
		t.size = 25;
		t.text = "192.111.112.12";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 158;
		t.y = 90;
		return t;
	};
	_proto._label_rate_i = function () {
		var t = new eui.Label();
		this._label_rate = t;
		t.size = 25;
		t.text = "192.111.112.12";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 158;
		t.y = 124;
		return t;
	};
	_proto._gb_zuan_i = function () {
		var t = new eui.Group();
		this._gb_zuan = t;
		t.x = 150;
		t.y = 97;
		t.elementsContent = [this._label_zuan_i(),this._Image17_i()];
		return t;
	};
	_proto._label_zuan_i = function () {
		var t = new eui.Label();
		this._label_zuan = t;
		t.size = 20;
		t.text = "666666";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 27.61;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "tz_game_public_json.public_icon_zuanshi";
		t.verticalCenter = 0;
		t.x = 0;
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
		this.skinParts = ["_img_meng","musicV","bgMusic","zb","audioV","bgAudio","_group_main"];
		
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
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "setImages_json.soundbg";
		t.x = -4;
		t.y = 5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.width = 471;
		t.y = 102;
		t.elementsContent = [this.musicV_i(),this.bgMusic_i(),this._Image2_i()];
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
		t.source = "common_image_game_json.public_laba_on";
		t.verticalCenter = 0;
		t.x = 420;
		return t;
	};
	_proto._Image2_i = function () {
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
		t.source = "soundon";
		t.verticalCenter = 0;
		t.x = 420;
		return t;
	};
	return common_kuang_set;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_sure.exml'] = window.common_kuang_sure = (function (_super) {
	__extends(common_kuang_sure, _super);
	function common_kuang_sure() {
		_super.call(this);
		this.skinParts = ["_img_meng","_btn_sure","_btn_cancel","_img_title","_txt_content","_group_main"];
		
		this.height = 450;
		this.width = 550;
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
		t.width = 500;
		t.x = 25;
		t.y = 25;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._btn_sure_i(),this._btn_cancel_i(),this._img_title_i(),this._txt_content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.scale9Grid = new egret.Rectangle(87,59,25,4);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_kuangbg";
		t.width = 500;
		t.x = 0;
		t.y = -1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_kuangtitlebg";
		t.x = 128;
		t.y = 4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 240;
		t.scale9Grid = new egret.Rectangle(14,18,14,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_wbg";
		t.width = 470;
		t.x = 15;
		t.y = 67;
		return t;
	};
	_proto._btn_sure_i = function () {
		var t = new eui.Image();
		this._btn_sure = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_btn_sure";
		t.x = 45.5;
		t.y = 320;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Image();
		this._btn_cancel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_btn_cancel";
		t.x = 287;
		t.y = 320;
		return t;
	};
	_proto._img_title_i = function () {
		var t = new eui.Image();
		this._img_title = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_image_json.public_title_tishi";
		t.x = 216;
		t.y = 8;
		return t;
	};
	_proto._txt_content_i = function () {
		var t = new eui.Label();
		this._txt_content = t;
		t.height = 163;
		t.size = 25;
		t.text = "欢迎来到平台，祝你玩牌愉快！";
		t.textColor = 0x000000;
		t.width = 430;
		t.x = 38;
		t.y = 105.5;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_message_UI.exml'] = window.common_message_UI = (function (_super) {
	__extends(common_message_UI, _super);
	function common_message_UI() {
		_super.call(this);
		this.skinParts = ["_img_meng","wenziButton","biaoqingButton","biao1","biao2","biao3","biao4","biao5","biao6","biao7","biao8","biao9","biao10","biao11","biao12","biao13","biao14","biao15","biaoqing","message1","message2","message3","message4","message5","message6","message7","message8","message9","message10","wenzi","_group_main"];
		
		this.height = 600;
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
		t.height = 600;
		t.width = 406;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.wenziButton_i(),this.biaoqingButton_i(),this.biaoqing_i(),this.wenzi_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
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
		t.height = 550;
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
		t.height = 550;
		t.scrollPolicyH = "off";
		t.width = 301;
		t.x = 84.66;
		t.y = 25.71;
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
		t.text = "1.快点吧，我的枪早已饥渴难耐了！";
		t.textAlign = "left";
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
		t.text = "2.我好想在你脸上射点什么！";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 67;
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
		t.text = "3.来，战个痛快！";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 124;
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
		t.text = "4.犯我全垒打者，虽远必诛！";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 181;
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
		t.text = "5.让一让，三轮车来了！";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 238;
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
		t.text = "6.像我这么帅，一般都是主角哦！";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 295;
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
		t.text = "7.输惨了，就剩三角裤了！";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 352;
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
		t.text = "8.长枪依在，祝我把把红！";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 409;
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
		t.text = "9.兄弟，浓杰勒类！";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 466;
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
		t.text = "10.打牌快点吧,都要睡着了";
		t.textAlign = "left";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 513;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","thumb"];
		
		this.height = 41;
		this.minHeight = 18;
		this.minWidth = 30;
		this.width = 423;
		this.elementsContent = [this.labelDisplay_i(),this._Image1_i(),this.thumb_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.border = false;
		t.borderColor = 0x358a7e;
		t.fontFamily = "Arial";
		t.size = 20;
		t.strokeColor = 0x358a7e;
		t.text = "000/100";
		t.textAlign = "center";
		t.textColor = 0xffdccc;
		t.verticalAlign = "middle";
		t.x = 427.33;
		t.y = 11;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "loading_guidao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "loading_thumb_png";
		t.verticalCenter = -0.5;
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
		t.visible = false;
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
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "多少时间未开局将解散。";
		t.textAlign = "left";
		t.textColor = 0xb58937;
		t.verticalAlign = "middle";
		t.y = 31;
		return t;
	};
	_proto.contentText0_i = function () {
		var t = new eui.Label();
		this.contentText0 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "本局时长：10局";
		t.textAlign = "left";
		t.textColor = 0xb58937;
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	return roonLifeScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/shuCommon/shu_common_jiesan.exml'] = window.shu_common_jiesan = (function (_super) {
	__extends(shu_common_jiesan, _super);
	var shu_common_jiesan$Skin9 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin9, _super);
		function shu_common_jiesan$Skin9() {
			_super.call(this);
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
		var _proto = shu_common_jiesan$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_dismiss_btn_refuse";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_jiesan$Skin9;
	})(eui.Skin);

	var shu_common_jiesan$Skin10 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin10, _super);
		function shu_common_jiesan$Skin10() {
			_super.call(this);
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
		var _proto = shu_common_jiesan$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_dismiss_btn_agree";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_jiesan$Skin10;
	})(eui.Skin);

	function shu_common_jiesan() {
		_super.call(this);
		this.skinParts = ["daojiNum","statusBg0","nickname0","status0","head0","item0","statusBg1","nickname1","status1","head1","item1","statusBg2","nickname2","status2","head2","item2","statusBg3","nickname3","status3","head3","item3","statusBg4","nickname4","status4","head4","item4","statusBg5","nickname5","status5","head5","item5","statusBg6","nickname6","status6","head6","item6","statusBg7","nickname7","status7","head7","item7","refuse","agree","_gp_waitbtn","_img_wait"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group13_i()];
	}
	var _proto = shu_common_jiesan.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.daojiNum_i(),this._Group10_i(),this._gp_waitbtn_i(),this._Label1_i(),this._img_wait_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 500;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(43,65,95,9);
		t.source = "sss8ren_game_json.game_wanfa_bg";
		t.width = 550;
		t.y = 0;
		return t;
	};
	_proto.daojiNum_i = function () {
		var t = new eui.Label();
		this.daojiNum = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "60后将解散房间";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 79.2;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 115.77;
		t.elementsContent = [this._Group9_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i()];
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
		t.source = "sss8ren_game_json.game_dismiss_applyplayer";
		t.y = 114.93;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Arial";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 120;
		t.y = 88.36;
		return t;
	};
	_proto.status0_i = function () {
		var t = new eui.Label();
		this.status0 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.y = 119.68;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect2_i(),this.head0_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xbd7632;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
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
		t.verticalCenter = 0;
		t.width = 70;
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
		t.source = "sss8ren_game_json.game_dismiss_applyplayer";
		t.y = 114.93;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Arial";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 120;
		t.y = 88.36;
		return t;
	};
	_proto.status1_i = function () {
		var t = new eui.Label();
		this.status1 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 119.68;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect3_i(),this.head1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xBD7632;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
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
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 260;
		t.y = 0;
		t.elementsContent = [this.statusBg2_i(),this.nickname2_i(),this.status2_i(),this._Group3_i()];
		return t;
	};
	_proto.statusBg2_i = function () {
		var t = new eui.Image();
		this.statusBg2 = t;
		t.horizontalCenter = 0;
		t.source = "sss8ren_game_json.game_dismiss_applyplayer";
		t.y = 114.93;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Arial";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 120;
		t.y = 88.36;
		return t;
	};
	_proto.status2_i = function () {
		var t = new eui.Label();
		this.status2 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 119.68;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect4_i(),this.head2_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xBD7632;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
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
		t.verticalCenter = 0;
		t.width = 70;
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
		t.source = "sss8ren_game_json.game_dismiss_applyplayer";
		t.y = 114.93;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Arial";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 120;
		t.y = 88.36;
		return t;
	};
	_proto.status3_i = function () {
		var t = new eui.Label();
		this.status3 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 119.68;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect5_i(),this.head3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xBD7632;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
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
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.y = 150;
		t.elementsContent = [this.statusBg4_i(),this.nickname4_i(),this.status4_i(),this._Group5_i()];
		return t;
	};
	_proto.statusBg4_i = function () {
		var t = new eui.Image();
		this.statusBg4 = t;
		t.horizontalCenter = 0;
		t.source = "sss8ren_game_json.game_dismiss_applyplayer";
		t.y = 114.93;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Arial";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 120;
		t.y = 88.36;
		return t;
	};
	_proto.status4_i = function () {
		var t = new eui.Label();
		this.status4 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 119.68;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect6_i(),this.head4_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xBD7632;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
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
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.x = 130;
		t.y = 150;
		t.elementsContent = [this.statusBg5_i(),this.nickname5_i(),this.status5_i(),this._Group6_i()];
		return t;
	};
	_proto.statusBg5_i = function () {
		var t = new eui.Image();
		this.statusBg5 = t;
		t.horizontalCenter = 0;
		t.source = "sss8ren_game_json.game_dismiss_applyplayer";
		t.y = 114.93;
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Arial";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 120;
		t.y = 88.36;
		return t;
	};
	_proto.status5_i = function () {
		var t = new eui.Label();
		this.status5 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 119.68;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect7_i(),this.head5_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xBD7632;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
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
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.x = 260;
		t.y = 150;
		t.elementsContent = [this.statusBg6_i(),this.nickname6_i(),this.status6_i(),this._Group7_i()];
		return t;
	};
	_proto.statusBg6_i = function () {
		var t = new eui.Image();
		this.statusBg6 = t;
		t.horizontalCenter = 0;
		t.source = "sss8ren_game_json.game_dismiss_applyplayer";
		t.y = 114.93;
		return t;
	};
	_proto.nickname6_i = function () {
		var t = new eui.Label();
		this.nickname6 = t;
		t.fontFamily = "Arial";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 120;
		t.y = 88.36;
		return t;
	};
	_proto.status6_i = function () {
		var t = new eui.Label();
		this.status6 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 119.68;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect8_i(),this.head6_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xBD7632;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.head6_i = function () {
		var t = new eui.Image();
		this.head6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Group();
		this.item7 = t;
		t.x = 390;
		t.y = 150;
		t.elementsContent = [this.statusBg7_i(),this.nickname7_i(),this.status7_i(),this._Group8_i()];
		return t;
	};
	_proto.statusBg7_i = function () {
		var t = new eui.Image();
		this.statusBg7 = t;
		t.horizontalCenter = 0;
		t.source = "sss8ren_game_json.game_dismiss_applyplayer";
		t.y = 114.93;
		return t;
	};
	_proto.nickname7_i = function () {
		var t = new eui.Label();
		this.nickname7 = t;
		t.fontFamily = "Arial";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "喜来乐";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 120;
		t.y = 88.36;
		return t;
	};
	_proto.status7_i = function () {
		var t = new eui.Label();
		this.status7 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "等待中";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.y = 119.68;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect9_i(),this.head7_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xBD7632;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.head7_i = function () {
		var t = new eui.Image();
		this.head7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._gp_waitbtn_i = function () {
		var t = new eui.Group();
		this._gp_waitbtn = t;
		t.horizontalCenter = 0.5;
		t.y = 425.02;
		t.elementsContent = [this._Group11_i(),this._Group12_i()];
		return t;
	};
	_proto._Group11_i = function () {
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
		t.skinName = shu_common_jiesan$Skin9;
		return t;
	};
	_proto._Group12_i = function () {
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
		t.skinName = shu_common_jiesan$Skin10;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "解散房间";
		t.y = 14;
		return t;
	};
	_proto._img_wait_i = function () {
		var t = new eui.Image();
		this._img_wait = t;
		t.horizontalCenter = 0.5;
		t.source = "sss8ren_game_json.game_dismiss_tongyi";
		t.y = 432;
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
	var shu_common_menu$Skin11 = 	(function (_super) {
		__extends(shu_common_menu$Skin11, _super);
		function shu_common_menu$Skin11() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_menu_btn_wanfa";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin11;
	})(eui.Skin);

	var shu_common_menu$Skin12 = 	(function (_super) {
		__extends(shu_common_menu$Skin12, _super);
		function shu_common_menu$Skin12() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_menu_btn_dismiss";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin12;
	})(eui.Skin);

	var shu_common_menu$Skin13 = 	(function (_super) {
		__extends(shu_common_menu$Skin13, _super);
		function shu_common_menu$Skin13() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_menu_btn_situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin13;
	})(eui.Skin);

	var shu_common_menu$Skin14 = 	(function (_super) {
		__extends(shu_common_menu$Skin14, _super);
		function shu_common_menu$Skin14() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_menu_btn_backhall";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin14;
	})(eui.Skin);

	var shu_common_menu$Skin15 = 	(function (_super) {
		__extends(shu_common_menu$Skin15, _super);
		function shu_common_menu$Skin15() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_menu_btn_set";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin15;
	})(eui.Skin);

	var shu_common_menu$Skin16 = 	(function (_super) {
		__extends(shu_common_menu$Skin16, _super);
		function shu_common_menu$Skin16() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_menu_btn_hidewatch";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin16;
	})(eui.Skin);

	var shu_common_menu$Skin17 = 	(function (_super) {
		__extends(shu_common_menu$Skin17, _super);
		function shu_common_menu$Skin17() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_menu_btn_showwatch";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_menu$Skin17;
	})(eui.Skin);

	function shu_common_menu() {
		_super.call(this);
		this.skinParts = ["wanfa","diaband","situp","backHallBtn","setting","hideWatchBtn","hideGroup","showWatchBtn","showGroup","menulist"];
		
		this.elementsContent = [this.menulist_i()];
	}
	var _proto = shu_common_menu.prototype;

	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.hideGroup_i(),this.showGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x000c0b;
		t.height = 301;
		t.strokeColor = 0xd6e1e0;
		t.strokeWeight = 2;
		t.width = 180;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tz_sss_img_json.sss_menu";
		t.visible = false;
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
		t.width = 65;
		t.y = 36;
		t.elementsContent = [this.wanfa_i()];
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin11;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 65;
		t.y = 101;
		t.elementsContent = [this.diaband_i()];
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Button();
		this.diaband = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = shu_common_menu$Skin12;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
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
		t.skinName = shu_common_menu$Skin13;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 65;
		t.y = 166;
		t.elementsContent = [this.backHallBtn_i()];
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Button();
		this.backHallBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin14;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
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
		t.skinName = shu_common_menu$Skin15;
		return t;
	};
	_proto.hideGroup_i = function () {
		var t = new eui.Group();
		this.hideGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 65;
		t.y = 231;
		t.elementsContent = [this.hideWatchBtn_i()];
		return t;
	};
	_proto.hideWatchBtn_i = function () {
		var t = new eui.Button();
		this.hideWatchBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin16;
		return t;
	};
	_proto.showGroup_i = function () {
		var t = new eui.Group();
		this.showGroup = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 65;
		t.y = 231;
		t.elementsContent = [this.showWatchBtn_i()];
		return t;
	};
	_proto.showWatchBtn_i = function () {
		var t = new eui.Button();
		this.showWatchBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shu_common_menu$Skin17;
		return t;
	};
	return shu_common_menu;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/shuCommon/shu_common_wanfaI.exml'] = window.shu_common_wanfaI = (function (_super) {
	__extends(shu_common_wanfaI, _super);
	var shu_common_wanfaI$Skin18 = 	(function (_super) {
		__extends(shu_common_wanfaI$Skin18, _super);
		function shu_common_wanfaI$Skin18() {
			_super.call(this);
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
		var _proto = shu_common_wanfaI$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_wanfa_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shu_common_wanfaI$Skin18;
	})(eui.Skin);

	function shu_common_wanfaI() {
		_super.call(this);
		this.skinParts = ["_img_meng","_btn_close","_group_main"];
		
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
		t.x = 103;
		t.y = 140;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._btn_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 700;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(44,65,113,13);
		t.source = "sss8ren_game_json.game_wanfa_bg";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "sss8ren_game_json.game_wanfa_content";
		t.y = 107;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "玩法说明";
		t.y = 14;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "大小及相应倍数见下表";
		t.x = 28;
		t.y = 74;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "打枪模式：三道通吃加倍";
		t.y = 608;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 642;
		t.skinName = shu_common_wanfaI$Skin18;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/create/CreateShisanshui.exml'] = window.CreateShisanshui = (function (_super) {
	__extends(CreateShisanshui, _super);
	var CreateShisanshui$Skin19 = 	(function (_super) {
		__extends(CreateShisanshui$Skin19, _super);
		function CreateShisanshui$Skin19() {
			_super.call(this);
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
		var _proto = CreateShisanshui$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin19;
	})(eui.Skin);

	var CreateShisanshui$Skin20 = 	(function (_super) {
		__extends(CreateShisanshui$Skin20, _super);
		function CreateShisanshui$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin20;
	})(eui.Skin);

	var CreateShisanshui$Skin21 = 	(function (_super) {
		__extends(CreateShisanshui$Skin21, _super);
		function CreateShisanshui$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin21;
	})(eui.Skin);

	var CreateShisanshui$Skin22 = 	(function (_super) {
		__extends(CreateShisanshui$Skin22, _super);
		function CreateShisanshui$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin22;
	})(eui.Skin);

	var CreateShisanshui$Skin23 = 	(function (_super) {
		__extends(CreateShisanshui$Skin23, _super);
		function CreateShisanshui$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin23;
	})(eui.Skin);

	var CreateShisanshui$Skin24 = 	(function (_super) {
		__extends(CreateShisanshui$Skin24, _super);
		function CreateShisanshui$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin24;
	})(eui.Skin);

	var CreateShisanshui$Skin25 = 	(function (_super) {
		__extends(CreateShisanshui$Skin25, _super);
		function CreateShisanshui$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin25;
	})(eui.Skin);

	var CreateShisanshui$Skin26 = 	(function (_super) {
		__extends(CreateShisanshui$Skin26, _super);
		function CreateShisanshui$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin26;
	})(eui.Skin);

	var CreateShisanshui$Skin27 = 	(function (_super) {
		__extends(CreateShisanshui$Skin27, _super);
		function CreateShisanshui$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin27;
	})(eui.Skin);

	var CreateShisanshui$Skin28 = 	(function (_super) {
		__extends(CreateShisanshui$Skin28, _super);
		function CreateShisanshui$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin28;
	})(eui.Skin);

	var CreateShisanshui$Skin29 = 	(function (_super) {
		__extends(CreateShisanshui$Skin29, _super);
		function CreateShisanshui$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin29;
	})(eui.Skin);

	var CreateShisanshui$Skin30 = 	(function (_super) {
		__extends(CreateShisanshui$Skin30, _super);
		function CreateShisanshui$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin30;
	})(eui.Skin);

	var CreateShisanshui$Skin31 = 	(function (_super) {
		__extends(CreateShisanshui$Skin31, _super);
		function CreateShisanshui$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin31;
	})(eui.Skin);

	var CreateShisanshui$Skin32 = 	(function (_super) {
		__extends(CreateShisanshui$Skin32, _super);
		function CreateShisanshui$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin32;
	})(eui.Skin);

	var CreateShisanshui$Skin33 = 	(function (_super) {
		__extends(CreateShisanshui$Skin33, _super);
		function CreateShisanshui$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin33;
	})(eui.Skin);

	var CreateShisanshui$Skin34 = 	(function (_super) {
		__extends(CreateShisanshui$Skin34, _super);
		function CreateShisanshui$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin34;
	})(eui.Skin);

	var CreateShisanshui$Skin35 = 	(function (_super) {
		__extends(CreateShisanshui$Skin35, _super);
		function CreateShisanshui$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin35;
	})(eui.Skin);

	var CreateShisanshui$Skin36 = 	(function (_super) {
		__extends(CreateShisanshui$Skin36, _super);
		function CreateShisanshui$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin36;
	})(eui.Skin);

	var CreateShisanshui$Skin37 = 	(function (_super) {
		__extends(CreateShisanshui$Skin37, _super);
		function CreateShisanshui$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin37;
	})(eui.Skin);

	var CreateShisanshui$Skin38 = 	(function (_super) {
		__extends(CreateShisanshui$Skin38, _super);
		function CreateShisanshui$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin38;
	})(eui.Skin);

	var CreateShisanshui$Skin39 = 	(function (_super) {
		__extends(CreateShisanshui$Skin39, _super);
		function CreateShisanshui$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin39;
	})(eui.Skin);

	var CreateShisanshui$Skin40 = 	(function (_super) {
		__extends(CreateShisanshui$Skin40, _super);
		function CreateShisanshui$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin40;
	})(eui.Skin);

	var CreateShisanshui$Skin41 = 	(function (_super) {
		__extends(CreateShisanshui$Skin41, _super);
		function CreateShisanshui$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.hall_create_radio0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_radio1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin41;
	})(eui.Skin);

	var CreateShisanshui$Skin42 = 	(function (_super) {
		__extends(CreateShisanshui$Skin42, _super);
		function CreateShisanshui$Skin42() {
			_super.call(this);
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
		var _proto = CreateShisanshui$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_create_btn_con";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin42;
	})(eui.Skin);

	function CreateShisanshui() {
		_super.call(this);
		this.skinParts = ["_rect_menban","hallbg","_btn_topback","m_showtip","peoplecount0","_txt_peoplecount0","peoplecount1","palycountText6","peoplecount2","palycountText4","palycount2","palycountText2","palycount3","palycountText3","palycount1","palycountText1","palycount0","palycountText0","payModeRadio1","payModeRadioText1","payModeRadio0","payModeRadioText0","guiRadio1","guiRadioText1","guiRadio0","guiRadioText0","daqiangRadio1","guiRadioText2","daqiangRadio0","guiRadioText3","daqiangRadio2","guiRadioText5","gaojiRadio1","gaojiRadioText1","gaojiRadio0","gaojiRadioText0","maRadio0","maRadioText0","maRadio1","maRadioText1","maRadio2","maRadioText2","maRadio3","maRadioText3","speedRadio1","gaojiRadioText2","speedRadio0","gaojiRadioText3","_gp_speed","_btn_createroom","_gp_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i()];
	}
	var _proto = CreateShisanshui.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 640;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.width = 608;
		t.x = 16;
		t.y = 140;
		t.elementsContent = [this.hallbg_i(),this._btn_topback_i(),this._Image1_i(),this._Group37_i()];
		return t;
	};
	_proto.hallbg_i = function () {
		var t = new eui.Image();
		this.hallbg = t;
		t.height = 800;
		t.scale9Grid = new egret.Rectangle(76,95,456,13);
		t.source = "sss8ren_hall_json.zjtj_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 555.39;
		t.y = 1.32;
		t.skinName = CreateShisanshui$Skin19;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.hall_create_title_sss";
		t.y = 33.49;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.y = 112.58;
		t.elementsContent = [this.m_showtip_i(),this._Group5_i(),this._Group11_i(),this._Group15_i(),this._Group27_i(),this._Group33_i(),this._Group36_i(),this._btn_createroom_i()];
		return t;
	};
	_proto.m_showtip_i = function () {
		var t = new eui.Label();
		this.m_showtip = t;
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "注：开房无消耗，坐下后扣出80个钻石，未开始则返还！";
		t.textColor = 0xc32a01;
		t.y = 582.44;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.y = 0;
		t.elementsContent = [this._Group4_i(),this._Label1_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.peoplecount0_i(),this._txt_peoplecount0_i()];
		return t;
	};
	_proto.peoplecount0_i = function () {
		var t = new eui.RadioButton();
		this.peoplecount0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin20;
		return t;
	};
	_proto._txt_peoplecount0_i = function () {
		var t = new eui.Label();
		this._txt_peoplecount0 = t;
		t.size = 20;
		t.text = "4人";
		t.textColor = 0x783725;
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.y = 60;
		t.elementsContent = [this.peoplecount1_i(),this.palycountText6_i()];
		return t;
	};
	_proto.peoplecount1_i = function () {
		var t = new eui.RadioButton();
		this.peoplecount1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin21;
		return t;
	};
	_proto.palycountText6_i = function () {
		var t = new eui.Label();
		this.palycountText6 = t;
		t.size = 20;
		t.text = "6人（一副半牌，全新玩法）";
		t.textColor = 0x783725;
		t.x = 44.5;
		t.y = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 120;
		t.elementsContent = [this.peoplecount2_i(),this.palycountText4_i()];
		return t;
	};
	_proto.peoplecount2_i = function () {
		var t = new eui.RadioButton();
		this.peoplecount2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin22;
		return t;
	};
	_proto.palycountText4_i = function () {
		var t = new eui.Label();
		this.palycountText4 = t;
		t.size = 20;
		t.text = "8人两副牌（新增四王炸15道）";
		t.textColor = 0x783725;
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "游戏人数：";
		t.textColor = 0x783725;
		t.y = 5.5;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.y = 200;
		t.elementsContent = [this._Group10_i(),this._Label2_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 60;
		t.elementsContent = [this.palycount2_i(),this.palycountText2_i()];
		return t;
	};
	_proto.palycount2_i = function () {
		var t = new eui.RadioButton();
		this.palycount2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin23;
		return t;
	};
	_proto.palycountText2_i = function () {
		var t = new eui.Label();
		this.palycountText2 = t;
		t.size = 20;
		t.text = "20局(钻石x160)";
		t.textColor = 0x783725;
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 60;
		t.elementsContent = [this.palycount3_i(),this.palycountText3_i()];
		return t;
	};
	_proto.palycount3_i = function () {
		var t = new eui.RadioButton();
		this.palycount3 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin24;
		return t;
	};
	_proto.palycountText3_i = function () {
		var t = new eui.Label();
		this.palycountText3 = t;
		t.size = 20;
		t.text = "30局(钻石x160)";
		t.textColor = 0x783725;
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.palycount1_i(),this.palycountText1_i()];
		return t;
	};
	_proto.palycount1_i = function () {
		var t = new eui.RadioButton();
		this.palycount1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin25;
		return t;
	};
	_proto.palycountText1_i = function () {
		var t = new eui.Label();
		this.palycountText1 = t;
		t.size = 20;
		t.text = "15局(钻石x120)";
		t.textColor = 0x783725;
		t.x = 44.5;
		t.y = 8;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.palycount0_i(),this.palycountText0_i()];
		return t;
	};
	_proto.palycount0_i = function () {
		var t = new eui.RadioButton();
		this.palycount0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin26;
		return t;
	};
	_proto.palycountText0_i = function () {
		var t = new eui.Label();
		this.palycountText0 = t;
		t.size = 20;
		t.text = "10局(钻石x80)";
		t.textColor = 0x783725;
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "游戏局数：";
		t.textColor = 0x783725;
		t.y = 5.5;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.visible = false;
		t.width = 560;
		t.x = 20;
		t.y = 185;
		t.elementsContent = [this._Group14_i()];
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.payModeRadio1_i(),this.payModeRadioText1_i()];
		return t;
	};
	_proto.payModeRadio1_i = function () {
		var t = new eui.RadioButton();
		this.payModeRadio1 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin27;
		return t;
	};
	_proto.payModeRadioText1_i = function () {
		var t = new eui.Label();
		this.payModeRadioText1 = t;
		t.size = 20;
		t.text = "房主支付";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.payModeRadio0_i(),this.payModeRadioText0_i()];
		return t;
	};
	_proto.payModeRadio0_i = function () {
		var t = new eui.RadioButton();
		this.payModeRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin28;
		return t;
	};
	_proto.payModeRadioText0_i = function () {
		var t = new eui.Label();
		this.payModeRadioText0 = t;
		t.size = 20;
		t.text = "AA支付";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.y = 340;
		t.elementsContent = [this._Label3_i(),this._Group18_i(),this._Group21_i(),this._Group23_i(),this._Group26_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "游戏规则：";
		t.textColor = 0x783725;
		t.y = 5.5;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 157;
		t.y = 0;
		t.elementsContent = [this._Group16_i(),this._Group17_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.guiRadio1_i(),this.guiRadioText1_i()];
		return t;
	};
	_proto.guiRadio1_i = function () {
		var t = new eui.RadioButton();
		this.guiRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin29;
		return t;
	};
	_proto.guiRadioText1_i = function () {
		var t = new eui.Label();
		this.guiRadioText1 = t;
		t.size = 20;
		t.text = "不带王闯关";
		t.textColor = 0x783725;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.guiRadio0_i(),this.guiRadioText0_i()];
		return t;
	};
	_proto.guiRadio0_i = function () {
		var t = new eui.RadioButton();
		this.guiRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin30;
		return t;
	};
	_proto.guiRadioText0_i = function () {
		var t = new eui.Label();
		this.guiRadioText0 = t;
		t.size = 20;
		t.text = "带王闯关";
		t.textColor = 0x783725;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 157;
		t.y = 60;
		t.elementsContent = [this._Group19_i(),this._Group20_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.daqiangRadio1_i(),this.guiRadioText2_i()];
		return t;
	};
	_proto.daqiangRadio1_i = function () {
		var t = new eui.RadioButton();
		this.daqiangRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin31;
		return t;
	};
	_proto.guiRadioText2_i = function () {
		var t = new eui.Label();
		this.guiRadioText2 = t;
		t.size = 20;
		t.text = "打枪加倍";
		t.textColor = 0x783725;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.daqiangRadio0_i(),this.guiRadioText3_i()];
		return t;
	};
	_proto.daqiangRadio0_i = function () {
		var t = new eui.RadioButton();
		this.daqiangRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin32;
		return t;
	};
	_proto.guiRadioText3_i = function () {
		var t = new eui.Label();
		this.guiRadioText3 = t;
		t.size = 20;
		t.text = "不打枪";
		t.textColor = 0x783725;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.x = 157;
		t.y = 120;
		t.elementsContent = [this._Group22_i()];
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.daqiangRadio2_i(),this.guiRadioText5_i()];
		return t;
	};
	_proto.daqiangRadio2_i = function () {
		var t = new eui.RadioButton();
		this.daqiangRadio2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin33;
		return t;
	};
	_proto.guiRadioText5_i = function () {
		var t = new eui.Label();
		this.guiRadioText5 = t;
		t.size = 20;
		t.text = "全垒打：四人游戏全打枪加倍";
		t.textColor = 0x783725;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.x = 157;
		t.y = 180;
		t.elementsContent = [this._Group24_i(),this._Group25_i()];
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 206.5;
		t.elementsContent = [this.gaojiRadio1_i(),this.gaojiRadioText1_i()];
		return t;
	};
	_proto.gaojiRadio1_i = function () {
		var t = new eui.RadioButton();
		this.gaojiRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin34;
		return t;
	};
	_proto.gaojiRadioText1_i = function () {
		var t = new eui.Label();
		this.gaojiRadioText1 = t;
		t.size = 20;
		t.text = "极速模式";
		t.textColor = 0x783725;
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.gaojiRadio0_i(),this.gaojiRadioText0_i()];
		return t;
	};
	_proto.gaojiRadio0_i = function () {
		var t = new eui.RadioButton();
		this.gaojiRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin35;
		return t;
	};
	_proto.gaojiRadioText0_i = function () {
		var t = new eui.Label();
		this.gaojiRadioText0 = t;
		t.size = 20;
		t.text = "普通模式";
		t.textColor = 0x783725;
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.width = 560;
		t.x = 20;
		t.y = 495;
		t.elementsContent = [this._Group32_i()];
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group28_i(),this._Group29_i(),this._Group30_i(),this._Group31_i()];
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.x = 2;
		t.y = 0;
		t.elementsContent = [this.maRadio0_i(),this.maRadioText0_i()];
		return t;
	};
	_proto.maRadio0_i = function () {
		var t = new eui.RadioButton();
		this.maRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin36;
		return t;
	};
	_proto.maRadioText0_i = function () {
		var t = new eui.Label();
		this.maRadioText0 = t;
		t.size = 20;
		t.text = "黑桃5";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.maRadio1_i(),this.maRadioText1_i()];
		return t;
	};
	_proto.maRadio1_i = function () {
		var t = new eui.RadioButton();
		this.maRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin37;
		return t;
	};
	_proto.maRadioText1_i = function () {
		var t = new eui.Label();
		this.maRadioText1 = t;
		t.size = 20;
		t.text = "黑桃5,10";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 52;
		t.elementsContent = [this.maRadio2_i(),this.maRadioText2_i()];
		return t;
	};
	_proto.maRadio2_i = function () {
		var t = new eui.RadioButton();
		this.maRadio2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin38;
		return t;
	};
	_proto.maRadioText2_i = function () {
		var t = new eui.Label();
		this.maRadioText2 = t;
		t.size = 20;
		t.text = "黑桃5,10,K";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 52;
		t.elementsContent = [this.maRadio3_i(),this.maRadioText3_i()];
		return t;
	};
	_proto.maRadio3_i = function () {
		var t = new eui.RadioButton();
		this.maRadio3 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin39;
		return t;
	};
	_proto.maRadioText3_i = function () {
		var t = new eui.Label();
		this.maRadioText3 = t;
		t.size = 20;
		t.text = "无马";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.visible = false;
		t.width = 560;
		t.x = 20;
		t.y = 618.17;
		t.elementsContent = [this._gp_speed_i()];
		return t;
	};
	_proto._gp_speed_i = function () {
		var t = new eui.Group();
		this._gp_speed = t;
		t.x = 157;
		t.y = 21;
		t.elementsContent = [this._Group34_i(),this._Group35_i()];
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 206.5;
		t.elementsContent = [this.speedRadio1_i(),this.gaojiRadioText2_i()];
		return t;
	};
	_proto.speedRadio1_i = function () {
		var t = new eui.RadioButton();
		this.speedRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin40;
		return t;
	};
	_proto.gaojiRadioText2_i = function () {
		var t = new eui.Label();
		this.gaojiRadioText2 = t;
		t.size = 20;
		t.text = "极速模式";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.speedRadio0_i(),this.gaojiRadioText3_i()];
		return t;
	};
	_proto.speedRadio0_i = function () {
		var t = new eui.RadioButton();
		this.speedRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin41;
		return t;
	};
	_proto.gaojiRadioText3_i = function () {
		var t = new eui.Label();
		this.gaojiRadioText3 = t;
		t.size = 20;
		t.text = "普通模式";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._btn_createroom_i = function () {
		var t = new eui.Button();
		this._btn_createroom = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 308.5;
		t.skinName = CreateShisanshui$Skin42;
		return t;
	};
	return CreateShisanshui;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/create/joinRommUI.exml'] = window.joinRommUI = (function (_super) {
	__extends(joinRommUI, _super);
	var joinRommUI$Skin43 = 	(function (_super) {
		__extends(joinRommUI$Skin43, _super);
		function joinRommUI$Skin43() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin43;
	})(eui.Skin);

	var joinRommUI$Skin44 = 	(function (_super) {
		__extends(joinRommUI$Skin44, _super);
		function joinRommUI$Skin44() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin44;
	})(eui.Skin);

	var joinRommUI$Skin45 = 	(function (_super) {
		__extends(joinRommUI$Skin45, _super);
		function joinRommUI$Skin45() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin45;
	})(eui.Skin);

	var joinRommUI$Skin46 = 	(function (_super) {
		__extends(joinRommUI$Skin46, _super);
		function joinRommUI$Skin46() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin46;
	})(eui.Skin);

	var joinRommUI$Skin47 = 	(function (_super) {
		__extends(joinRommUI$Skin47, _super);
		function joinRommUI$Skin47() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin47;
	})(eui.Skin);

	var joinRommUI$Skin48 = 	(function (_super) {
		__extends(joinRommUI$Skin48, _super);
		function joinRommUI$Skin48() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin48;
	})(eui.Skin);

	var joinRommUI$Skin49 = 	(function (_super) {
		__extends(joinRommUI$Skin49, _super);
		function joinRommUI$Skin49() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num7";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin49;
	})(eui.Skin);

	var joinRommUI$Skin50 = 	(function (_super) {
		__extends(joinRommUI$Skin50, _super);
		function joinRommUI$Skin50() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num8";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin50;
	})(eui.Skin);

	var joinRommUI$Skin51 = 	(function (_super) {
		__extends(joinRommUI$Skin51, _super);
		function joinRommUI$Skin51() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num9";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin51;
	})(eui.Skin);

	var joinRommUI$Skin52 = 	(function (_super) {
		__extends(joinRommUI$Skin52, _super);
		function joinRommUI$Skin52() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_clear";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin52;
	})(eui.Skin);

	var joinRommUI$Skin53 = 	(function (_super) {
		__extends(joinRommUI$Skin53, _super);
		function joinRommUI$Skin53() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_num0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin53;
	})(eui.Skin);

	var joinRommUI$Skin54 = 	(function (_super) {
		__extends(joinRommUI$Skin54, _super);
		function joinRommUI$Skin54() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.joinroom_btn_delete";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin54;
	})(eui.Skin);

	var joinRommUI$Skin55 = 	(function (_super) {
		__extends(joinRommUI$Skin55, _super);
		function joinRommUI$Skin55() {
			_super.call(this);
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
		var _proto = joinRommUI$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return joinRommUI$Skin55;
	})(eui.Skin);

	function joinRommUI() {
		_super.call(this);
		this.skinParts = ["_rect_meng","_btn_num1","_btn_num2","_btn_num3","_btn_num4","_btn_num5","_btn_num6","_btn_num7","_btn_num8","_btn_num9","_btn_num10","_btn_num0","_btn_num11","_txt_pwd0","_txt_pwd1","_txt_pwd2","_txt_pwd3","_txt_pwd4","_txt_pwd5","_btn_close","_gp_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._rect_meng_i(),this._gp_main_i()];
	}
	var _proto = joinRommUI.prototype;

	_proto._rect_meng_i = function () {
		var t = new eui.Rect();
		this._rect_meng = t;
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 608;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group5_i(),this._Group13_i(),this._btn_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 650;
		t.scale9Grid = new egret.Rectangle(76,98,456,11);
		t.source = "sss8ren_hall_json.zjtj_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.joinroom_title";
		t.y = 34.99;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 210.99;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._btn_num1_i(),this._btn_num2_i(),this._btn_num3_i()];
		return t;
	};
	_proto._btn_num1_i = function () {
		var t = new eui.Button();
		this._btn_num1 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = joinRommUI$Skin43;
		return t;
	};
	_proto._btn_num2_i = function () {
		var t = new eui.Button();
		this._btn_num2 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 180;
		t.skinName = joinRommUI$Skin44;
		return t;
	};
	_proto._btn_num3_i = function () {
		var t = new eui.Button();
		this._btn_num3 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 360;
		t.skinName = joinRommUI$Skin45;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 100;
		t.elementsContent = [this._btn_num4_i(),this._btn_num5_i(),this._btn_num6_i()];
		return t;
	};
	_proto._btn_num4_i = function () {
		var t = new eui.Button();
		this._btn_num4 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = joinRommUI$Skin46;
		return t;
	};
	_proto._btn_num5_i = function () {
		var t = new eui.Button();
		this._btn_num5 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 180;
		t.skinName = joinRommUI$Skin47;
		return t;
	};
	_proto._btn_num6_i = function () {
		var t = new eui.Button();
		this._btn_num6 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 360;
		t.skinName = joinRommUI$Skin48;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 200;
		t.elementsContent = [this._btn_num7_i(),this._btn_num8_i(),this._btn_num9_i()];
		return t;
	};
	_proto._btn_num7_i = function () {
		var t = new eui.Button();
		this._btn_num7 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = joinRommUI$Skin49;
		return t;
	};
	_proto._btn_num8_i = function () {
		var t = new eui.Button();
		this._btn_num8 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 180;
		t.skinName = joinRommUI$Skin50;
		return t;
	};
	_proto._btn_num9_i = function () {
		var t = new eui.Button();
		this._btn_num9 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 360;
		t.skinName = joinRommUI$Skin51;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 300;
		t.elementsContent = [this._btn_num10_i(),this._btn_num0_i(),this._btn_num11_i()];
		return t;
	};
	_proto._btn_num10_i = function () {
		var t = new eui.Button();
		this._btn_num10 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = joinRommUI$Skin52;
		return t;
	};
	_proto._btn_num0_i = function () {
		var t = new eui.Button();
		this._btn_num0 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 180;
		t.skinName = joinRommUI$Skin53;
		return t;
	};
	_proto._btn_num11_i = function () {
		var t = new eui.Button();
		this._btn_num11 = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 360;
		t.skinName = joinRommUI$Skin54;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 98.33;
		t.elementsContent = [this._Image3_i(),this._Group12_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(12,12,9,74);
		t.source = "sss8ren_hall_json.joinroom_bg";
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 17;
		t.elementsContent = [this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image4_i(),this._txt_pwd0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.joinroom_pwd_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_pwd0_i = function () {
		var t = new eui.Label();
		this._txt_pwd0 = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0xff0c0c;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 75;
		t.elementsContent = [this._Image5_i(),this._txt_pwd1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.joinroom_pwd_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_pwd1_i = function () {
		var t = new eui.Label();
		this._txt_pwd1 = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0xFF0C0C;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 150;
		t.elementsContent = [this._Image6_i(),this._txt_pwd2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.joinroom_pwd_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_pwd2_i = function () {
		var t = new eui.Label();
		this._txt_pwd2 = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0xFF0C0C;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 225;
		t.elementsContent = [this._Image7_i(),this._txt_pwd3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.joinroom_pwd_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_pwd3_i = function () {
		var t = new eui.Label();
		this._txt_pwd3 = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0xFF0C0C;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 300;
		t.elementsContent = [this._Image8_i(),this._txt_pwd4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.joinroom_pwd_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_pwd4_i = function () {
		var t = new eui.Label();
		this._txt_pwd4 = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0xFF0C0C;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 375;
		t.elementsContent = [this._Image9_i(),this._txt_pwd5_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.joinroom_pwd_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_pwd5_i = function () {
		var t = new eui.Label();
		this._txt_pwd5 = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0xFF0C0C;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.label = "";
		t.x = 559;
		t.y = -5.66;
		t.skinName = joinRommUI$Skin55;
		return t;
	};
	return joinRommUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/faxian/faxianItem.exml'] = window.faxianItem = (function (_super) {
	__extends(faxianItem, _super);
	var faxianItem$Skin56 = 	(function (_super) {
		__extends(faxianItem$Skin56, _super);
		function faxianItem$Skin56() {
			_super.call(this);
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
		var _proto = faxianItem$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.find_btn_enter";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return faxianItem$Skin56;
	})(eui.Skin);

	function faxianItem() {
		_super.call(this);
		this.skinParts = ["bg","statusText","pwd","enterBtn"];
		
		this.height = 114;
		this.width = 534;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = faxianItem.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this._Group1_i(),this._Image1_i(),this.enterBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "sss8ren_hall_json.find_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 165;
		t.y = 32;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this.statusText_i(),this.pwd_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 18;
		t.text = "房号：";
		t.textColor = 0xffe59e;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 18;
		t.text = "状态：";
		t.textColor = 0xffe59e;
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.statusText_i = function () {
		var t = new eui.Label();
		this.statusText = t;
		t.fontFamily = "Arial";
		t.size = 18;
		t.text = "第20局游戏游戏中";
		t.textColor = 0xffe59e;
		t.x = 47;
		t.y = 32;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Arial";
		t.size = 18;
		t.text = "666666";
		t.textColor = 0xffe59e;
		t.x = 47;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.find_game_title_sss";
		t.x = 30;
		t.y = 42;
		return t;
	};
	_proto.enterBtn_i = function () {
		var t = new eui.Button();
		this.enterBtn = t;
		t.label = "";
		t.x = 430;
		t.y = 32;
		t.skinName = faxianItem$Skin56;
		return t;
	};
	return faxianItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/faxian/faxianMainScene.exml'] = window.faxianMainScene = (function (_super) {
	__extends(faxianMainScene, _super);
	var faxianMainScene$Skin57 = 	(function (_super) {
		__extends(faxianMainScene$Skin57, _super);
		function faxianMainScene$Skin57() {
			_super.call(this);
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
		var _proto = faxianMainScene$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return faxianMainScene$Skin57;
	})(eui.Skin);

	var faxianMainScene$Skin58 = 	(function (_super) {
		__extends(faxianMainScene$Skin58, _super);
		function faxianMainScene$Skin58() {
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
		var _proto = faxianMainScene$Skin58.prototype;

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
		return faxianMainScene$Skin58;
	})(eui.Skin);

	var faxianMainScene$Skin59 = 	(function (_super) {
		__extends(faxianMainScene$Skin59, _super);
		function faxianMainScene$Skin59() {
			_super.call(this);
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
		var _proto = faxianMainScene$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.find_btn_enter";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return faxianMainScene$Skin59;
	})(eui.Skin);

	function faxianMainScene() {
		_super.call(this);
		this.skinParts = ["_rect_menban","_btn_topback","bg0","enterBtn0","statusText0","pwd0","content","_gp_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i()];
	}
	var _proto = faxianMainScene.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.width = 608;
		t.x = 16;
		t.y = 140;
		t.elementsContent = [this._Image1_i(),this._btn_topback_i(),this._Image2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 800;
		t.scale9Grid = new egret.Rectangle(76,102,456,10);
		t.source = "sss8ren_hall_json.zjtj_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 559.98;
		t.y = -3.17;
		t.skinName = faxianMainScene$Skin57;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "sss8ren_hall_json.find_title";
		t.y = 35.01;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 670;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 106.29;
		t.viewport = this.content_i();
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.elementsContent = [this.bg0_i(),this.enterBtn0_i(),this._Group1_i(),this._Image3_i(),this._Button1_i()];
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Image();
		this.bg0 = t;
		t.source = "sss8ren_hall_json.find_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.enterBtn0_i = function () {
		var t = new eui.Button();
		this.enterBtn0 = t;
		t.label = "";
		t.skinName = faxianMainScene$Skin58;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 165;
		t.y = 32;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this.statusText0_i(),this.pwd0_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 18;
		t.text = "房号：";
		t.textColor = 0xFFE59E;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 18;
		t.text = "状态：";
		t.textColor = 0xFFE59E;
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.statusText0_i = function () {
		var t = new eui.Label();
		this.statusText0 = t;
		t.fontFamily = "Arial";
		t.size = 18;
		t.text = "第20局游戏游戏中";
		t.textColor = 0xFFE59E;
		t.x = 47;
		t.y = 32;
		return t;
	};
	_proto.pwd0_i = function () {
		var t = new eui.Label();
		this.pwd0 = t;
		t.fontFamily = "Arial";
		t.size = 18;
		t.text = "666666";
		t.textColor = 0xFFE59E;
		t.x = 47;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.find_game_title_sss";
		t.x = 30;
		t.y = 42;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.verticalCenter = 0;
		t.x = 430;
		t.skinName = faxianMainScene$Skin59;
		return t;
	};
	return faxianMainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/huanleHall.exml'] = window.huanleHall = (function (_super) {
	__extends(huanleHall, _super);
	var huanleHall$Skin60 = 	(function (_super) {
		__extends(huanleHall$Skin60, _super);
		function huanleHall$Skin60() {
			_super.call(this);
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
		var _proto = huanleHall$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_sign";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin60;
	})(eui.Skin);

	var huanleHall$Skin61 = 	(function (_super) {
		__extends(huanleHall$Skin61, _super);
		function huanleHall$Skin61() {
			_super.call(this);
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
		var _proto = huanleHall$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_joinroom";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin61;
	})(eui.Skin);

	var huanleHall$Skin62 = 	(function (_super) {
		__extends(huanleHall$Skin62, _super);
		function huanleHall$Skin62() {
			_super.call(this);
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
		var _proto = huanleHall$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_zuanshi_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin62;
	})(eui.Skin);

	var huanleHall$Skin63 = 	(function (_super) {
		__extends(huanleHall$Skin63, _super);
		function huanleHall$Skin63() {
			_super.call(this);
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
		var _proto = huanleHall$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_shop";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin63;
	})(eui.Skin);

	var huanleHall$Skin64 = 	(function (_super) {
		__extends(huanleHall$Skin64, _super);
		function huanleHall$Skin64() {
			_super.call(this);
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
		var _proto = huanleHall$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_zhanji";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin64;
	})(eui.Skin);

	var huanleHall$Skin65 = 	(function (_super) {
		__extends(huanleHall$Skin65, _super);
		function huanleHall$Skin65() {
			_super.call(this);
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
		var _proto = huanleHall$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_find";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin65;
	})(eui.Skin);

	var huanleHall$Skin66 = 	(function (_super) {
		__extends(huanleHall$Skin66, _super);
		function huanleHall$Skin66() {
			_super.call(this);
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
		var _proto = huanleHall$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_playercenter";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin66;
	})(eui.Skin);

	var huanleHall$Skin67 = 	(function (_super) {
		__extends(huanleHall$Skin67, _super);
		function huanleHall$Skin67() {
			_super.call(this);
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
		var _proto = huanleHall$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_shisan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin67;
	})(eui.Skin);

	var huanleHall$Skin68 = 	(function (_super) {
		__extends(huanleHall$Skin68, _super);
		function huanleHall$Skin68() {
			_super.call(this);
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
		var _proto = huanleHall$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_majiang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin68;
	})(eui.Skin);

	var huanleHall$Skin69 = 	(function (_super) {
		__extends(huanleHall$Skin69, _super);
		function huanleHall$Skin69() {
			_super.call(this);
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
		var _proto = huanleHall$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_jielong";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin69;
	})(eui.Skin);

	var huanleHall$Skin70 = 	(function (_super) {
		__extends(huanleHall$Skin70, _super);
		function huanleHall$Skin70() {
			_super.call(this);
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
		var _proto = huanleHall$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_doudizhu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin70;
	})(eui.Skin);

	var huanleHall$Skin71 = 	(function (_super) {
		__extends(huanleHall$Skin71, _super);
		function huanleHall$Skin71() {
			_super.call(this);
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
		var _proto = huanleHall$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_guanpai";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin71;
	})(eui.Skin);

	var huanleHall$Skin72 = 	(function (_super) {
		__extends(huanleHall$Skin72, _super);
		function huanleHall$Skin72() {
			_super.call(this);
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
		var _proto = huanleHall$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.hall_btn_dengyan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin72;
	})(eui.Skin);

	function huanleHall() {
		_super.call(this);
		this.skinParts = ["hallbg","_label_userid","head","_btn_qiandao","_btn_joinroom","halad","_label_zuanNum","_label_username","topGroup","_btn_shop","_btn_zhanji","_btn_find","_btn_myInfo","bottomGroup","_btn_game_shisanshui","_gp_shisanshui","_btn_game_majiang","_gp_showhand","_btn_game_jielong","_gp_niuniu","_btn_game_doudizhu","_btn_game_guanpai","_btn_game_gandengyan","gameList0","gameMainScroller","m_notice"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.hallbg_i(),this.topGroup_i(),this.bottomGroup_i(),this._Group16_i()];
	}
	var _proto = huanleHall.prototype;

	_proto.hallbg_i = function () {
		var t = new eui.Image();
		this.hallbg = t;
		t.height = 1080;
		t.source = "sss8ren_hall_json.hall_bg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._label_userid_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.hall_top_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._label_userid_i = function () {
		var t = new eui.Label();
		this._label_userid = t;
		t.size = 28;
		t.text = "ID:000000";
		t.textAlign = "right";
		t.textColor = 0xf7edc5;
		t.visible = false;
		t.x = 139.91;
		t.y = 74;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 16;
		t.y = 6;
		t.elementsContent = [this._Image2_i(),this.head_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.hall_head_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = -0.5;
		t.source = "common_image_game_json.public_head_default";
		t.verticalCenter = -1;
		t.width = 95;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -5.5;
		t.width = 50;
		t.x = 417.23;
		t.elementsContent = [this._btn_qiandao_i()];
		return t;
	};
	_proto._btn_qiandao_i = function () {
		var t = new eui.Button();
		this._btn_qiandao = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin60;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 529.23;
		t.elementsContent = [this._btn_joinroom_i()];
		return t;
	};
	_proto._btn_joinroom_i = function () {
		var t = new eui.Button();
		this._btn_joinroom = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin61;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 126.69;
		t.y = 14.92;
		t.elementsContent = [this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 39;
		t.elementsContent = [this.halad_i(),this._label_zuanNum_i()];
		return t;
	};
	_proto.halad_i = function () {
		var t = new eui.Button();
		this.halad = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 3;
		t.skinName = huanleHall$Skin62;
		return t;
	};
	_proto._label_zuanNum_i = function () {
		var t = new eui.Label();
		this._label_zuanNum = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalCenter = 2.5;
		t.width = 112;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._label_username_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(47,4,67,25);
		t.source = "sss8ren_hall_json.hall_nickname_bg";
		t.width = 180;
		t.y = 0;
		return t;
	};
	_proto._label_username_i = function () {
		var t = new eui.Label();
		this._label_username = t;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = " ";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.x = 0;
		t.y = 983;
		t.elementsContent = [this._Image4_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(33,12,12,73);
		t.source = "sss8ren_hall_json.ball_bottom_bg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0.5;
		t.width = 50;
		t.x = 58.98;
		t.elementsContent = [this._btn_shop_i()];
		return t;
	};
	_proto._btn_shop_i = function () {
		var t = new eui.Button();
		this._btn_shop = t;
		t.horizontalCenter = 18.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.skinName = huanleHall$Skin63;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0.5;
		t.width = 50;
		t.x = 230.58;
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
		t.skinName = huanleHall$Skin64;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0.5;
		t.width = 50;
		t.x = 386.23;
		t.elementsContent = [this._btn_find_i()];
		return t;
	};
	_proto._btn_find_i = function () {
		var t = new eui.Button();
		this._btn_find = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin65;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0.5;
		t.width = 50;
		t.x = 532.57;
		t.elementsContent = [this._btn_myInfo_i()];
		return t;
	};
	_proto._btn_myInfo_i = function () {
		var t = new eui.Button();
		this._btn_myInfo = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin66;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 117;
		t.elementsContent = [this.gameMainScroller_i(),this._Group15_i()];
		return t;
	};
	_proto.gameMainScroller_i = function () {
		var t = new eui.Scroller();
		this.gameMainScroller = t;
		t.height = 780;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 640;
		t.x = 0.5;
		t.y = 64;
		t.viewport = this.gameList0_i();
		return t;
	};
	_proto.gameList0_i = function () {
		var t = new eui.Group();
		this.gameList0 = t;
		t.anchorOffsetY = 0;
		t.height = 800;
		t.y = -13;
		t.elementsContent = [this._gp_shisanshui_i(),this._gp_showhand_i(),this._gp_niuniu_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._gp_shisanshui_i = function () {
		var t = new eui.Group();
		this._gp_shisanshui = t;
		t.height = 231;
		t.width = 284;
		t.x = 26;
		t.y = 0;
		t.elementsContent = [this._btn_game_shisanshui_i()];
		return t;
	};
	_proto._btn_game_shisanshui_i = function () {
		var t = new eui.Button();
		this._btn_game_shisanshui = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin67;
		return t;
	};
	_proto._gp_showhand_i = function () {
		var t = new eui.Group();
		this._gp_showhand = t;
		t.height = 231;
		t.width = 284;
		t.x = 330;
		t.y = 6;
		t.elementsContent = [this._btn_game_majiang_i()];
		return t;
	};
	_proto._btn_game_majiang_i = function () {
		var t = new eui.Button();
		this._btn_game_majiang = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin68;
		return t;
	};
	_proto._gp_niuniu_i = function () {
		var t = new eui.Group();
		this._gp_niuniu = t;
		t.height = 231;
		t.width = 284;
		t.x = 26;
		t.y = 250;
		t.elementsContent = [this._btn_game_jielong_i()];
		return t;
	};
	_proto._btn_game_jielong_i = function () {
		var t = new eui.Button();
		this._btn_game_jielong = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin69;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 231;
		t.width = 284;
		t.x = 330;
		t.y = 250;
		t.elementsContent = [this._btn_game_doudizhu_i()];
		return t;
	};
	_proto._btn_game_doudizhu_i = function () {
		var t = new eui.Button();
		this._btn_game_doudizhu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin70;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 231;
		t.width = 284;
		t.x = 26;
		t.y = 500;
		t.elementsContent = [this._btn_game_guanpai_i()];
		return t;
	};
	_proto._btn_game_guanpai_i = function () {
		var t = new eui.Button();
		this._btn_game_guanpai = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin71;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 231;
		t.width = 284;
		t.x = 330;
		t.y = 500;
		t.elementsContent = [this._btn_game_gandengyan_i()];
		return t;
	};
	_proto._btn_game_gandengyan_i = function () {
		var t = new eui.Button();
		this._btn_game_gandengyan = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin72;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = 15;
		t.elementsContent = [this._Image5_i(),this._Scroller1_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 26.5;
		t.scale9Grid = new egret.Rectangle(18,4,6,26);
		t.source = "sss8ren_hall_json.hall_notice_bg";
		t.verticalCenter = 0.5;
		t.width = 580;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 32;
		t.horizontalCenter = 26.5;
		t.touchEnabled = false;
		t.verticalCenter = 0.5;
		t.width = 550;
		t.viewport = this._Group14_i();
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.m_notice_i()];
		return t;
	};
	_proto.m_notice_i = function () {
		var t = new eui.Label();
		this.m_notice = t;
		t.size = 25;
		t.text = "本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐本游戏纯属娱乐";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.hall_notice_laba";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	return huanleHall;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/playerCenter.exml'] = window.playerCenter = (function (_super) {
	__extends(playerCenter, _super);
	var playerCenter$Skin73 = 	(function (_super) {
		__extends(playerCenter$Skin73, _super);
		function playerCenter$Skin73() {
			_super.call(this);
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
		var _proto = playerCenter$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return playerCenter$Skin73;
	})(eui.Skin);

	function playerCenter() {
		_super.call(this);
		this.skinParts = ["_rect_menban","_btn_topback","dailiGroup","lianxiGroup","reloadGroup","headImage","headbox","ID","zuanNum","nickname","_gp_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i()];
	}
	var _proto = playerCenter.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.height = 700;
		t.width = 608;
		t.x = 16;
		t.y = 190;
		t.elementsContent = [this._Image1_i(),this._btn_topback_i(),this._Image2_i(),this.dailiGroup_i(),this.lianxiGroup_i(),this.reloadGroup_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 650;
		t.scale9Grid = new egret.Rectangle(76,100,456,13);
		t.source = "sss8ren_hall_json.zjtj_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 548.9;
		t.y = -4.5;
		t.skinName = playerCenter$Skin73;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.playerCenter_title";
		t.x = 215;
		t.y = 36;
		return t;
	};
	_proto.dailiGroup_i = function () {
		var t = new eui.Group();
		this.dailiGroup = t;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.y = 428.25;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "sss8ren_hall_json.playerCenter_itembg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "代理登陆";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto.lianxiGroup_i = function () {
		var t = new eui.Group();
		this.lianxiGroup = t;
		t.horizontalCenter = 1;
		t.y = 459.88;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "sss8ren_hall_json.playerCenter_itembg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "联系客服";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto.reloadGroup_i = function () {
		var t = new eui.Group();
		this.reloadGroup = t;
		t.horizontalCenter = 1;
		t.y = 530.58;
		t.elementsContent = [this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "sss8ren_hall_json.playerCenter_itembg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "重新登陆";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 121;
		t.y = 123.58;
		t.elementsContent = [this.headbox_i(),this._Group3_i(),this.nickname_i()];
		return t;
	};
	_proto.headbox_i = function () {
		var t = new eui.Group();
		this.headbox = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.headImage_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.playerCenter_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImage_i = function () {
		var t = new eui.Image();
		this.headImage = t;
		t.fillMode = "scale";
		t.height = 150;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head_default";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 237.1;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image7_i(),this.ID_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.playerCenter_idbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.fontFamily = "Arial";
		t.height = 23;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "ID：666666";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 204;
		t.elementsContent = [this._Image8_i(),this.zuanNum_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.playerCenter_zuanbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zuanNum_i = function () {
		var t = new eui.Label();
		this.zuanNum = t;
		t.fontFamily = "Arial";
		t.height = 23;
		t.horizontalCenter = 22;
		t.size = 23;
		t.text = "999999999";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 0.5;
		t.width = 122;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "婚族网络科技";
		t.textColor = 0xb2620e;
		t.y = 191.42;
		return t;
	};
	return playerCenter;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/qiandaoUI.exml'] = window.qiandaoUI = (function (_super) {
	__extends(qiandaoUI, _super);
	var qiandaoUI$Skin74 = 	(function (_super) {
		__extends(qiandaoUI$Skin74, _super);
		function qiandaoUI$Skin74() {
			_super.call(this);
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
		var _proto = qiandaoUI$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return qiandaoUI$Skin74;
	})(eui.Skin);

	var qiandaoUI$Skin75 = 	(function (_super) {
		__extends(qiandaoUI$Skin75, _super);
		function qiandaoUI$Skin75() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","sss8ren_hall_json.sign_btn_qiandao1")
					])
			];
		}
		var _proto = qiandaoUI$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.sign_btn_qiandao0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return qiandaoUI$Skin75;
	})(eui.Skin);

	function qiandaoUI() {
		_super.call(this);
		this.skinParts = ["_rect_menban","_btn_topback","_img_tiembg","_txt_itemtitle0","_bitTxt_award0","_img_yiqiandao0","_gp_item0","_img_tiembg0","_txt_itemtitle1","_bitTxt_award1","_img_yiqiandao1","_gp_item1","_img_tiembg1","_txt_itemtitle2","_bitTxt_award2","_img_yiqiandao2","_gp_item2","_img_tiembg2","_txt_itemtitle3","_bitTxt_award3","_img_yiqiandao3","_gp_item3","_img_tiembg3","_txt_itemtitle4","_bitTxt_award4","_img_yiqiandao4","_gp_item4","_img_tiembg4","_txt_itemtitle5","_bitTxt_award5","_img_yiqiandao5","_gp_item5","_img_tiembg5","_txt_itemtitle6","_bitTxt_award6","_img_yiqiandao6","_gp_item6","_btn_qiandao","_bitTxt_continue","_gp_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i()];
	}
	var _proto = qiandaoUI.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.x = 16;
		t.y = 257;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._btn_topback_i(),this._Group1_i(),this._Group2_i(),this._btn_qiandao_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 566;
		t.scale9Grid = new egret.Rectangle(76,97,456,7);
		t.source = "sss8ren_hall_json.sign_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.sign_title_bg";
		t.x = 260;
		t.y = 37.92;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 543.16;
		t.y = 5.32;
		t.skinName = qiandaoUI$Skin74;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 120.27;
		t.elementsContent = [this._gp_item0_i(),this._gp_item1_i(),this._gp_item2_i(),this._gp_item3_i()];
		return t;
	};
	_proto._gp_item0_i = function () {
		var t = new eui.Group();
		this._gp_item0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_tiembg_i(),this._Image3_i(),this._txt_itemtitle0_i(),this._bitTxt_award0_i(),this._img_yiqiandao0_i()];
		return t;
	};
	_proto._img_tiembg_i = function () {
		var t = new eui.Image();
		this._img_tiembg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sss8ren_hall_json.sign_can_bg";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.sign_zuan";
		t.y = 82;
		return t;
	};
	_proto._txt_itemtitle0_i = function () {
		var t = new eui.Label();
		this._txt_itemtitle0 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "第一天";
		t.textColor = 0xc14300;
		t.y = 15;
		return t;
	};
	_proto._bitTxt_award0_i = function () {
		var t = new eui.BitmapLabel();
		this._bitTxt_award0 = t;
		t.font = "sss8ren_qiandao0_fnt";
		t.horizontalCenter = 0;
		t.text = "200";
		t.y = 45;
		return t;
	};
	_proto._img_yiqiandao0_i = function () {
		var t = new eui.Image();
		this._img_yiqiandao0 = t;
		t.source = "sss8ren_hall_json.sign_yiqiandao";
		t.x = 3.04;
		t.y = 1.52;
		return t;
	};
	_proto._gp_item1_i = function () {
		var t = new eui.Group();
		this._gp_item1 = t;
		t.x = 140;
		t.y = 0;
		t.elementsContent = [this._img_tiembg0_i(),this._Image4_i(),this._txt_itemtitle1_i(),this._bitTxt_award1_i(),this._img_yiqiandao1_i()];
		return t;
	};
	_proto._img_tiembg0_i = function () {
		var t = new eui.Image();
		this._img_tiembg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sss8ren_hall_json.sign_can_bg";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.sign_zuan";
		t.y = 82;
		return t;
	};
	_proto._txt_itemtitle1_i = function () {
		var t = new eui.Label();
		this._txt_itemtitle1 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "第二天";
		t.textColor = 0xC14300;
		t.y = 15;
		return t;
	};
	_proto._bitTxt_award1_i = function () {
		var t = new eui.BitmapLabel();
		this._bitTxt_award1 = t;
		t.font = "sss8ren_qiandao0_fnt";
		t.horizontalCenter = 0;
		t.text = "200";
		t.y = 45;
		return t;
	};
	_proto._img_yiqiandao1_i = function () {
		var t = new eui.Image();
		this._img_yiqiandao1 = t;
		t.source = "sss8ren_hall_json.sign_yiqiandao";
		t.visible = false;
		t.x = 3.04;
		t.y = 1.52;
		return t;
	};
	_proto._gp_item2_i = function () {
		var t = new eui.Group();
		this._gp_item2 = t;
		t.x = 280;
		t.y = 0;
		t.elementsContent = [this._img_tiembg1_i(),this._Image5_i(),this._txt_itemtitle2_i(),this._bitTxt_award2_i(),this._img_yiqiandao2_i()];
		return t;
	};
	_proto._img_tiembg1_i = function () {
		var t = new eui.Image();
		this._img_tiembg1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sss8ren_hall_json.sign_can_bg";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.sign_zuan";
		t.y = 82;
		return t;
	};
	_proto._txt_itemtitle2_i = function () {
		var t = new eui.Label();
		this._txt_itemtitle2 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "第三天";
		t.textColor = 0xC14300;
		t.y = 15;
		return t;
	};
	_proto._bitTxt_award2_i = function () {
		var t = new eui.BitmapLabel();
		this._bitTxt_award2 = t;
		t.font = "sss8ren_qiandao0_fnt";
		t.horizontalCenter = 0;
		t.text = "200";
		t.y = 45;
		return t;
	};
	_proto._img_yiqiandao2_i = function () {
		var t = new eui.Image();
		this._img_yiqiandao2 = t;
		t.source = "sss8ren_hall_json.sign_yiqiandao";
		t.visible = false;
		t.x = 3.04;
		t.y = 1.52;
		return t;
	};
	_proto._gp_item3_i = function () {
		var t = new eui.Group();
		this._gp_item3 = t;
		t.x = 420;
		t.y = 0;
		t.elementsContent = [this._img_tiembg2_i(),this._Image6_i(),this._txt_itemtitle3_i(),this._bitTxt_award3_i(),this._img_yiqiandao3_i()];
		return t;
	};
	_proto._img_tiembg2_i = function () {
		var t = new eui.Image();
		this._img_tiembg2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sss8ren_hall_json.sign_can_bg";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.sign_zuan";
		t.y = 82;
		return t;
	};
	_proto._txt_itemtitle3_i = function () {
		var t = new eui.Label();
		this._txt_itemtitle3 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "第四天";
		t.textColor = 0xC14300;
		t.y = 15;
		return t;
	};
	_proto._bitTxt_award3_i = function () {
		var t = new eui.BitmapLabel();
		this._bitTxt_award3 = t;
		t.font = "sss8ren_qiandao0_fnt";
		t.horizontalCenter = 0;
		t.text = "200";
		t.y = 45;
		return t;
	};
	_proto._img_yiqiandao3_i = function () {
		var t = new eui.Image();
		this._img_yiqiandao3 = t;
		t.source = "sss8ren_hall_json.sign_yiqiandao";
		t.visible = false;
		t.x = 3.04;
		t.y = 1.52;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 269.45;
		t.elementsContent = [this._gp_item4_i(),this._gp_item5_i(),this._gp_item6_i()];
		return t;
	};
	_proto._gp_item4_i = function () {
		var t = new eui.Group();
		this._gp_item4 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_tiembg3_i(),this._Image7_i(),this._txt_itemtitle4_i(),this._bitTxt_award4_i(),this._img_yiqiandao4_i()];
		return t;
	};
	_proto._img_tiembg3_i = function () {
		var t = new eui.Image();
		this._img_tiembg3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sss8ren_hall_json.sign_can_bg";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.sign_zuan";
		t.y = 82;
		return t;
	};
	_proto._txt_itemtitle4_i = function () {
		var t = new eui.Label();
		this._txt_itemtitle4 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "第五天";
		t.textColor = 0xC14300;
		t.y = 15;
		return t;
	};
	_proto._bitTxt_award4_i = function () {
		var t = new eui.BitmapLabel();
		this._bitTxt_award4 = t;
		t.font = "sss8ren_qiandao0_fnt";
		t.horizontalCenter = 0;
		t.text = "30";
		t.y = 45;
		return t;
	};
	_proto._img_yiqiandao4_i = function () {
		var t = new eui.Image();
		this._img_yiqiandao4 = t;
		t.source = "sss8ren_hall_json.sign_yiqiandao";
		t.visible = false;
		t.x = 3.04;
		t.y = 1.52;
		return t;
	};
	_proto._gp_item5_i = function () {
		var t = new eui.Group();
		this._gp_item5 = t;
		t.x = 140;
		t.y = 0;
		t.elementsContent = [this._img_tiembg4_i(),this._Image8_i(),this._txt_itemtitle5_i(),this._bitTxt_award5_i(),this._img_yiqiandao5_i()];
		return t;
	};
	_proto._img_tiembg4_i = function () {
		var t = new eui.Image();
		this._img_tiembg4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sss8ren_hall_json.sign_can_bg";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.sign_zuan";
		t.y = 82;
		return t;
	};
	_proto._txt_itemtitle5_i = function () {
		var t = new eui.Label();
		this._txt_itemtitle5 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "第29天";
		t.textColor = 0xC14300;
		t.y = 15;
		return t;
	};
	_proto._bitTxt_award5_i = function () {
		var t = new eui.BitmapLabel();
		this._bitTxt_award5 = t;
		t.font = "sss8ren_qiandao0_fnt";
		t.horizontalCenter = 0;
		t.text = "200";
		t.y = 45;
		return t;
	};
	_proto._img_yiqiandao5_i = function () {
		var t = new eui.Image();
		this._img_yiqiandao5 = t;
		t.source = "sss8ren_hall_json.sign_yiqiandao";
		t.visible = false;
		t.x = 3.04;
		t.y = 1.52;
		return t;
	};
	_proto._gp_item6_i = function () {
		var t = new eui.Group();
		this._gp_item6 = t;
		t.x = 280;
		t.y = 0;
		t.elementsContent = [this._img_tiembg5_i(),this._Image9_i(),this._txt_itemtitle6_i(),this._bitTxt_award6_i(),this._img_yiqiandao6_i()];
		return t;
	};
	_proto._img_tiembg5_i = function () {
		var t = new eui.Image();
		this._img_tiembg5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sss8ren_hall_json.sign_can_bg";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.sign_zuan";
		t.y = 82;
		return t;
	};
	_proto._txt_itemtitle6_i = function () {
		var t = new eui.Label();
		this._txt_itemtitle6 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "第一天";
		t.textColor = 0xC14300;
		t.y = 15;
		return t;
	};
	_proto._bitTxt_award6_i = function () {
		var t = new eui.BitmapLabel();
		this._bitTxt_award6 = t;
		t.font = "sss8ren_qiandao0_fnt";
		t.horizontalCenter = 0;
		t.text = "200";
		t.y = 45;
		return t;
	};
	_proto._img_yiqiandao6_i = function () {
		var t = new eui.Image();
		this._img_yiqiandao6 = t;
		t.source = "sss8ren_hall_json.sign_yiqiandao";
		t.x = 3.04;
		t.y = 1.52;
		return t;
	};
	_proto._btn_qiandao_i = function () {
		var t = new eui.Button();
		this._btn_qiandao = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 479.85;
		t.skinName = qiandaoUI$Skin75;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 131;
		t.y = 416.83;
		t.elementsContent = [this._Image10_i(),this._bitTxt_continue_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.sign_lianxu_bg";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._bitTxt_continue_i = function () {
		var t = new eui.BitmapLabel();
		this._bitTxt_continue = t;
		t.font = "sss8ren_qiandao1_fnt";
		t.horizontalCenter = 102.5;
		t.text = "80";
		t.verticalCenter = 0;
		return t;
	};
	return qiandaoUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/shop.exml'] = window.shop = (function (_super) {
	__extends(shop, _super);
	var shop$Skin76 = 	(function (_super) {
		__extends(shop$Skin76, _super);
		function shop$Skin76() {
			_super.call(this);
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
		var _proto = shop$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin76;
	})(eui.Skin);

	var shop$Skin77 = 	(function (_super) {
		__extends(shop$Skin77, _super);
		function shop$Skin77() {
			_super.call(this);
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
		var _proto = shop$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_refresh";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin77;
	})(eui.Skin);

	function shop() {
		_super.call(this);
		this.skinParts = ["_rect_menban","_btn_topback","goodsPrice0","goodsName0","goods0","goodsPrice1","goodsName1","goods1","goodsPrice2","goodsName2","goods2","goodsPrice3","goodsName3","goods3","goodsPrice4","goodsName4","goods4","goodsPrice5","goodsName5","goods5","_btn_refresh","_gp_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i()];
	}
	var _proto = shop.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._btn_topback_i(),this._Group7_i(),this._btn_refresh_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 750;
		t.scale9Grid = new egret.Rectangle(76,97,456,7);
		t.source = "sss8ren_hall_json.sign_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.shop_title";
		t.x = 260;
		t.y = 37.92;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 543.16;
		t.y = 5.32;
		t.skinName = shop$Skin76;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 462;
		t.horizontalCenter = 0;
		t.width = 521;
		t.y = 146.03;
		t.elementsContent = [this.goods0_i(),this.goods1_i(),this.goods2_i(),this.goods3_i(),this.goods4_i(),this.goods5_i()];
		return t;
	};
	_proto.goods0_i = function () {
		var t = new eui.Group();
		this.goods0 = t;
		t.horizontalCenter = -180;
		t.verticalCenter = -120;
		t.elementsContent = [this._Image3_i(),this.goodsPrice0_i(),this._Image4_i(),this._Group1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.shop_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsPrice0_i = function () {
		var t = new eui.Label();
		this.goodsPrice0 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x7f4432;
		t.text = "500元";
		t.y = 172.42;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.shop_goods0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 24;
		t.elementsContent = [this.goodsName0_i(),this._Image5_i()];
		return t;
	};
	_proto.goodsName0_i = function () {
		var t = new eui.Label();
		this.goodsName0 = t;
		t.fontFamily = "Arial";
		t.height = 30;
		t.size = 25;
		t.text = "500000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 101;
		t.x = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.sign_zuan";
		t.verticalCenter = 0;
		t.x = 98;
		return t;
	};
	_proto.goods1_i = function () {
		var t = new eui.Group();
		this.goods1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -120;
		t.elementsContent = [this._Image6_i(),this.goodsPrice1_i(),this._Image7_i(),this._Group2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.shop_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsPrice1_i = function () {
		var t = new eui.Label();
		this.goodsPrice1 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x7F4432;
		t.text = "500元";
		t.y = 172.42;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.shop_goods1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 24;
		t.elementsContent = [this.goodsName1_i(),this._Image8_i()];
		return t;
	};
	_proto.goodsName1_i = function () {
		var t = new eui.Label();
		this.goodsName1 = t;
		t.fontFamily = "Arial";
		t.height = 30;
		t.size = 25;
		t.text = "500000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 101;
		t.x = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.sign_zuan";
		t.verticalCenter = 0;
		t.x = 98;
		return t;
	};
	_proto.goods2_i = function () {
		var t = new eui.Group();
		this.goods2 = t;
		t.horizontalCenter = 180;
		t.verticalCenter = -120;
		t.elementsContent = [this._Image9_i(),this.goodsPrice2_i(),this._Image10_i(),this._Group3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.shop_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsPrice2_i = function () {
		var t = new eui.Label();
		this.goodsPrice2 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x7F4432;
		t.text = "500元";
		t.y = 172.42;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.shop_goods2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 24;
		t.elementsContent = [this.goodsName2_i(),this._Image11_i()];
		return t;
	};
	_proto.goodsName2_i = function () {
		var t = new eui.Label();
		this.goodsName2 = t;
		t.fontFamily = "Arial";
		t.height = 30;
		t.size = 25;
		t.text = "500000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 101;
		t.x = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.sign_zuan";
		t.verticalCenter = 0;
		t.x = 98;
		return t;
	};
	_proto.goods3_i = function () {
		var t = new eui.Group();
		this.goods3 = t;
		t.horizontalCenter = -180;
		t.verticalCenter = 120;
		t.elementsContent = [this._Image12_i(),this.goodsPrice3_i(),this._Image13_i(),this._Group4_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.shop_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsPrice3_i = function () {
		var t = new eui.Label();
		this.goodsPrice3 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x7F4432;
		t.text = "500元";
		t.y = 172.42;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.shop_goods3";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 24;
		t.elementsContent = [this.goodsName3_i(),this._Image14_i()];
		return t;
	};
	_proto.goodsName3_i = function () {
		var t = new eui.Label();
		this.goodsName3 = t;
		t.fontFamily = "Arial";
		t.height = 30;
		t.size = 25;
		t.text = "500000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 101;
		t.x = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.sign_zuan";
		t.verticalCenter = 0;
		t.x = 98;
		return t;
	};
	_proto.goods4_i = function () {
		var t = new eui.Group();
		this.goods4 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 120;
		t.elementsContent = [this._Image15_i(),this.goodsPrice4_i(),this._Image16_i(),this._Group5_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.shop_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsPrice4_i = function () {
		var t = new eui.Label();
		this.goodsPrice4 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x7F4432;
		t.text = "500元";
		t.y = 172.42;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.shop_goods4";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 24;
		t.elementsContent = [this.goodsName4_i(),this._Image17_i()];
		return t;
	};
	_proto.goodsName4_i = function () {
		var t = new eui.Label();
		this.goodsName4 = t;
		t.fontFamily = "Arial";
		t.height = 30;
		t.size = 25;
		t.text = "500000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 101;
		t.x = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.sign_zuan";
		t.verticalCenter = 0;
		t.x = 98;
		return t;
	};
	_proto.goods5_i = function () {
		var t = new eui.Group();
		this.goods5 = t;
		t.horizontalCenter = 180;
		t.verticalCenter = 120;
		t.elementsContent = [this._Image18_i(),this.goodsPrice5_i(),this._Image19_i(),this._Group6_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.shop_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsPrice5_i = function () {
		var t = new eui.Label();
		this.goodsPrice5 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x7F4432;
		t.text = "500元";
		t.y = 172.42;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.shop_goods5";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 24;
		t.elementsContent = [this.goodsName5_i(),this._Image20_i()];
		return t;
	};
	_proto.goodsName5_i = function () {
		var t = new eui.Label();
		this.goodsName5 = t;
		t.fontFamily = "Arial";
		t.height = 30;
		t.size = 25;
		t.text = "500000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 101;
		t.x = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.sign_zuan";
		t.verticalCenter = 0;
		t.x = 98;
		return t;
	};
	_proto._btn_refresh_i = function () {
		var t = new eui.Button();
		this._btn_refresh = t;
		t.label = "";
		t.x = 433.33;
		t.y = 645.01;
		t.skinName = shop$Skin77;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "充值有可能延时，五分钟内到账都是正常，未到账点击刷新钻石";
		t.textColor = 0xdd3900;
		t.width = 350;
		t.x = 47.67;
		t.y = 652.01;
		return t;
	};
	return shop;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/second.exml'] = window.second = (function (_super) {
	__extends(second, _super);
	var second$Skin78 = 	(function (_super) {
		__extends(second$Skin78, _super);
		function second$Skin78() {
			_super.call(this);
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
		var _proto = second$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return second$Skin78;
	})(eui.Skin);

	function second() {
		_super.call(this);
		this.skinParts = ["menban","_btn_topback","bg0","point5","point6","point7","point8","point9","point0","juCount0","_img_bg","showWindow","_gp_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.menban_i(),this._gp_main_i()];
	}
	var _proto = second.prototype;

	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0.5;
		t.height = 1380;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.width = 608;
		t.x = 16;
		t.y = 90;
		t.elementsContent = [this._Image1_i(),this._btn_topback_i(),this._Image2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 900;
		t.scale9Grid = new egret.Rectangle(235,99,143,9);
		t.source = "sss8ren_hall_json.zjtj_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 551.04;
		t.y = 1.5;
		t.skinName = second$Skin78;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.zjtj_title";
		t.x = 216;
		t.y = 33.66;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.width = 570;
		t.x = 19;
		t.y = 113.34;
		t.viewport = this.showWindow_i();
		return t;
	};
	_proto.showWindow_i = function () {
		var t = new eui.Group();
		this.showWindow = t;
		t.y = -24;
		t.elementsContent = [this._Group1_i(),this._img_bg_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.elementsContent = [this.bg0_i(),this.point5_i(),this.point6_i(),this.point7_i(),this.point8_i(),this.point9_i(),this.point0_i(),this.juCount0_i()];
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Rect();
		this.bg0 = t;
		t.fillColor = 0xF4E9E9;
		t.height = 53;
		t.strokeColor = 0xEDC3C5;
		t.width = 578;
		t.x = 0;
		t.y = 0;
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
		t.x = 64;
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
		t.x = 149;
		return t;
	};
	_proto.point7_i = function () {
		var t = new eui.Label();
		this.point7 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 235;
		return t;
	};
	_proto.point8_i = function () {
		var t = new eui.Label();
		this.point8 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 324;
		return t;
	};
	_proto.point9_i = function () {
		var t = new eui.Label();
		this.point9 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 407;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 80;
		t.x = 493;
		return t;
	};
	_proto.juCount0_i = function () {
		var t = new eui.Label();
		this.juCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "第一局";
		t.textColor = 0x7F0A0A;
		t.verticalCenter = 0.5;
		t.x = 4.34;
		return t;
	};
	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 169;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,12,7,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sss8ren_hall_json.zjtj_item_bg";
		t.width = 535;
		t.y = -113.34000000000002;
		return t;
	};
	return second;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/secondItem.exml'] = window.secondItem = (function (_super) {
	__extends(secondItem, _super);
	function secondItem() {
		_super.call(this);
		this.skinParts = ["_img_bg","_txt_time","_txt_playcount","_img_card0","_img_card1","_img_card2","_img_card3","_img_card4","_img_card5","_img_card6","_img_card7","_img_card8","_img_card9","_img_card10","_img_card11","_img_card12","_img_card13","_img_card14","_img_card15","_img_card16","_img_card17","_img_card18","_img_card19","_img_card20","_img_card21","_img_card22","_img_card23","_img_card24","_img_card25"];
		
		this.height = 169;
		this.width = 535;
		this.elementsContent = [this._img_bg_i(),this._txt_time_i(),this._txt_playcount_i(),this._Group3_i(),this._Group4_i()];
	}
	var _proto = secondItem.prototype;

	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 169;
		t.scale9Grid = new egret.Rectangle(13,12,7,2);
		t.source = "sss8ren_hall_json.zjtj_item_bg";
		t.width = 535;
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.size = 20;
		t.text = "2019-10-10 10:10:10";
		t.textColor = 0x1a682c;
		t.x = 10;
		t.y = 9;
		return t;
	};
	_proto._txt_playcount_i = function () {
		var t = new eui.Label();
		this._txt_playcount = t;
		t.size = 20;
		t.text = "第几句";
		t.textColor = 0x1A682C;
		t.x = 213;
		t.y = 9;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 15;
		t.y = 31;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 0;
		t.y = 2;
		t.elementsContent = [this._img_card0_i(),this._img_card1_i(),this._img_card2_i(),this._img_card3_i(),this._img_card4_i(),this._img_card5_i(),this._img_card6_i(),this._img_card7_i(),this._img_card8_i(),this._img_card9_i(),this._img_card10_i(),this._img_card11_i(),this._img_card12_i()];
		return t;
	};
	_proto._img_card0_i = function () {
		var t = new eui.Image();
		this._img_card0 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 0;
		return t;
	};
	_proto._img_card1_i = function () {
		var t = new eui.Image();
		this._img_card1 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 40;
		return t;
	};
	_proto._img_card2_i = function () {
		var t = new eui.Image();
		this._img_card2 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 80;
		return t;
	};
	_proto._img_card3_i = function () {
		var t = new eui.Image();
		this._img_card3 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 200;
		return t;
	};
	_proto._img_card4_i = function () {
		var t = new eui.Image();
		this._img_card4 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 240;
		return t;
	};
	_proto._img_card5_i = function () {
		var t = new eui.Image();
		this._img_card5 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 280;
		return t;
	};
	_proto._img_card6_i = function () {
		var t = new eui.Image();
		this._img_card6 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 320;
		return t;
	};
	_proto._img_card7_i = function () {
		var t = new eui.Image();
		this._img_card7 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 360;
		return t;
	};
	_proto._img_card8_i = function () {
		var t = new eui.Image();
		this._img_card8 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 480;
		return t;
	};
	_proto._img_card9_i = function () {
		var t = new eui.Image();
		this._img_card9 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 520;
		return t;
	};
	_proto._img_card10_i = function () {
		var t = new eui.Image();
		this._img_card10 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 560;
		return t;
	};
	_proto._img_card11_i = function () {
		var t = new eui.Image();
		this._img_card11 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 600;
		return t;
	};
	_proto._img_card12_i = function () {
		var t = new eui.Image();
		this._img_card12 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 640;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 333;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(9,7,7,3);
		t.source = "sss8ren_hall_json.zjtj_playerinfo_bg";
		t.width = 161;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "ID:995959";
		t.textColor = 0x000000;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "昵称网络科技公四大";
		t.textColor = 0x000000;
		t.x = 5;
		t.y = 25;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "积分：99999";
		t.textColor = 0x000000;
		t.x = 5;
		t.y = 45;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.visible = false;
		t.x = 15;
		t.y = 100;
		t.elementsContent = [this._img_card13_i(),this._img_card14_i(),this._img_card15_i(),this._img_card16_i(),this._img_card17_i(),this._img_card18_i(),this._img_card19_i(),this._img_card20_i(),this._img_card21_i(),this._img_card22_i(),this._img_card23_i(),this._img_card24_i(),this._img_card25_i()];
		return t;
	};
	_proto._img_card13_i = function () {
		var t = new eui.Image();
		this._img_card13 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 0;
		return t;
	};
	_proto._img_card14_i = function () {
		var t = new eui.Image();
		this._img_card14 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 40;
		return t;
	};
	_proto._img_card15_i = function () {
		var t = new eui.Image();
		this._img_card15 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 80;
		return t;
	};
	_proto._img_card16_i = function () {
		var t = new eui.Image();
		this._img_card16 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 120;
		return t;
	};
	_proto._img_card17_i = function () {
		var t = new eui.Image();
		this._img_card17 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 160;
		return t;
	};
	_proto._img_card18_i = function () {
		var t = new eui.Image();
		this._img_card18 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 200;
		return t;
	};
	_proto._img_card19_i = function () {
		var t = new eui.Image();
		this._img_card19 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 240;
		return t;
	};
	_proto._img_card20_i = function () {
		var t = new eui.Image();
		this._img_card20 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 280;
		return t;
	};
	_proto._img_card21_i = function () {
		var t = new eui.Image();
		this._img_card21 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 320;
		return t;
	};
	_proto._img_card22_i = function () {
		var t = new eui.Image();
		this._img_card22 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 360;
		return t;
	};
	_proto._img_card23_i = function () {
		var t = new eui.Image();
		this._img_card23 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 400;
		return t;
	};
	_proto._img_card24_i = function () {
		var t = new eui.Image();
		this._img_card24 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 440;
		return t;
	};
	_proto._img_card25_i = function () {
		var t = new eui.Image();
		this._img_card25 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 480;
		return t;
	};
	return secondItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/sss_theird.exml'] = window.sss_theird = (function (_super) {
	__extends(sss_theird, _super);
	function sss_theird() {
		_super.call(this);
		this.skinParts = ["_img_card0","_img_card1","_img_card2","_img_card3","_img_card4","_img_card5","_img_card6","_img_card7","_img_card8","_img_card9","_img_card10","_img_card11","_img_card12","_txt_id","_txt_nickname","_txt_point"];
		
		this.height = 65;
		this.width = 500;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = sss_theird.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 0;
		t.y = 2;
		t.elementsContent = [this._img_card0_i(),this._img_card1_i(),this._img_card2_i(),this._img_card3_i(),this._img_card4_i(),this._img_card5_i(),this._img_card6_i(),this._img_card7_i(),this._img_card8_i(),this._img_card9_i(),this._img_card10_i(),this._img_card11_i(),this._img_card12_i()];
		return t;
	};
	_proto._img_card0_i = function () {
		var t = new eui.Image();
		this._img_card0 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 0;
		return t;
	};
	_proto._img_card1_i = function () {
		var t = new eui.Image();
		this._img_card1 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 40;
		return t;
	};
	_proto._img_card2_i = function () {
		var t = new eui.Image();
		this._img_card2 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 80;
		return t;
	};
	_proto._img_card3_i = function () {
		var t = new eui.Image();
		this._img_card3 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 200;
		return t;
	};
	_proto._img_card4_i = function () {
		var t = new eui.Image();
		this._img_card4 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 240;
		return t;
	};
	_proto._img_card5_i = function () {
		var t = new eui.Image();
		this._img_card5 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 280;
		return t;
	};
	_proto._img_card6_i = function () {
		var t = new eui.Image();
		this._img_card6 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 320;
		return t;
	};
	_proto._img_card7_i = function () {
		var t = new eui.Image();
		this._img_card7 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 360;
		return t;
	};
	_proto._img_card8_i = function () {
		var t = new eui.Image();
		this._img_card8 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 480;
		return t;
	};
	_proto._img_card9_i = function () {
		var t = new eui.Image();
		this._img_card9 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 520;
		return t;
	};
	_proto._img_card10_i = function () {
		var t = new eui.Image();
		this._img_card10 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 560;
		return t;
	};
	_proto._img_card11_i = function () {
		var t = new eui.Image();
		this._img_card11 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 600;
		return t;
	};
	_proto._img_card12_i = function () {
		var t = new eui.Image();
		this._img_card12 = t;
		t.height = 144;
		t.source = "nncards_json.card_1_1";
		t.verticalCenter = 0;
		t.width = 109;
		t.x = 640;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 333;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._txt_id_i(),this._txt_nickname_i(),this._txt_point_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(9,7,7,3);
		t.source = "sss8ren_hall_json.zjtj_playerinfo_bg";
		t.width = 161;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_id_i = function () {
		var t = new eui.Label();
		this._txt_id = t;
		t.size = 18;
		t.text = "ID:995959";
		t.textColor = 0x000000;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto._txt_nickname_i = function () {
		var t = new eui.Label();
		this._txt_nickname = t;
		t.size = 18;
		t.text = "昵称网络科技公四大";
		t.textColor = 0x000000;
		t.x = 5;
		t.y = 25;
		return t;
	};
	_proto._txt_point_i = function () {
		var t = new eui.Label();
		this._txt_point = t;
		t.size = 18;
		t.text = "积分：99999";
		t.textColor = 0x000000;
		t.x = 5;
		t.y = 45;
		return t;
	};
	return sss_theird;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/zhanjiMainItem.exml'] = window.zhanjiMainItem = (function (_super) {
	__extends(zhanjiMainItem, _super);
	var zhanjiMainItem$Skin79 = 	(function (_super) {
		__extends(zhanjiMainItem$Skin79, _super);
		function zhanjiMainItem$Skin79() {
			_super.call(this);
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
		var _proto = zhanjiMainItem$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.zhanji_btn_detail";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return zhanjiMainItem$Skin79;
	})(eui.Skin);

	function zhanjiMainItem() {
		_super.call(this);
		this.skinParts = ["bg","time","pwd","score","detail"];
		
		this.height = 114;
		this.width = 534;
		this.elementsContent = [this.bg_i(),this._Group1_i(),this.detail_i(),this._Image1_i()];
	}
	var _proto = zhanjiMainItem.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "sss8ren_hall_json.zhanji_itembg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 136;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this.time_i(),this.pwd_i(),this.score_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "房号：";
		t.textColor = 0xffe5b2;
		t.x = 26;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "时间：";
		t.textColor = 0xffe5b2;
		t.x = 27;
		t.y = 36.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "积分：";
		t.textColor = 0xffe5b2;
		t.x = 164;
		t.y = 0;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Arial";
		t.scaleY = 1.1;
		t.size = 20;
		t.text = "2010-01-01 01:01:01";
		t.textColor = 0xffe5b2;
		t.x = 76;
		t.y = 36.5;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "666666";
		t.textColor = 0xffe5b2;
		t.x = 75.5;
		t.y = 0;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.fontFamily = "Arial";
		t.size = 20;
		t.text = "999999";
		t.textColor = 0xffe5b2;
		t.x = 218;
		t.y = 0;
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Button();
		this.detail = t;
		t.label = "";
		t.verticalCenter = 0.5;
		t.x = 424;
		t.skinName = zhanjiMainItem$Skin79;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sss8ren_hall_json.find_game_title_sss";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	return zhanjiMainItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/zhanjiMainScene.exml'] = window.zhanjiMainScene = (function (_super) {
	__extends(zhanjiMainScene, _super);
	var zhanjiMainScene$Skin80 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin80, _super);
		function zhanjiMainScene$Skin80() {
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
		var _proto = zhanjiMainScene$Skin80.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.zhanji_btn_allrecord0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return zhanjiMainScene$Skin80;
	})(eui.Skin);

	var zhanjiMainScene$Skin81 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin81, _super);
		function zhanjiMainScene$Skin81() {
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
		var _proto = zhanjiMainScene$Skin81.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.zhanji_btn_mycreate0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return zhanjiMainScene$Skin81;
	})(eui.Skin);

	var zhanjiMainScene$Skin82 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin82, _super);
		function zhanjiMainScene$Skin82() {
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
		var _proto = zhanjiMainScene$Skin82.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.zhanji_btn_join0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return zhanjiMainScene$Skin82;
	})(eui.Skin);

	var zhanjiMainScene$Skin83 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin83, _super);
		function zhanjiMainScene$Skin83() {
			_super.call(this);
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
		var _proto = zhanjiMainScene$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_hall_json.shop_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return zhanjiMainScene$Skin83;
	})(eui.Skin);

	function zhanjiMainScene() {
		_super.call(this);
		this.skinParts = ["_rect_menban","hallbg","allRecord","myCreate","myJoin","empty","juhua","zhanjiContent","_btn_topback","_gp_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i()];
	}
	var _proto = zhanjiMainScene.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 608;
		t.elementsContent = [this.hallbg_i(),this._Group2_i(),this._btn_topback_i(),this._Image1_i()];
		return t;
	};
	_proto.hallbg_i = function () {
		var t = new eui.Image();
		this.hallbg = t;
		t.height = 900;
		t.scale9Grid = new egret.Rectangle(231,100,148,12);
		t.source = "sss8ren_hall_json.zjtj_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.99;
		t.scaleY = 0.99;
		t.y = 92.91;
		t.elementsContent = [this._Group1_i(),this.empty_i(),this.juhua_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.y = 11.32;
		t.elementsContent = [this.allRecord_i(),this.myCreate_i(),this.myJoin_i()];
		return t;
	};
	_proto.allRecord_i = function () {
		var t = new eui.Button();
		this.allRecord = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = zhanjiMainScene$Skin80;
		return t;
	};
	_proto.myCreate_i = function () {
		var t = new eui.Button();
		this.myCreate = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 181;
		t.skinName = zhanjiMainScene$Skin81;
		return t;
	};
	_proto.myJoin_i = function () {
		var t = new eui.Button();
		this.myJoin = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 358;
		t.skinName = zhanjiMainScene$Skin82;
		return t;
	};
	_proto.empty_i = function () {
		var t = new eui.Label();
		this.empty = t;
		t.horizontalCenter = 0;
		t.text = "暂无战绩";
		t.verticalCenter = -49.5;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.loading";
		t.verticalCenter = -49.5;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 550;
		t.y = 70.66;
		t.viewport = this.zhanjiContent_i();
		return t;
	};
	_proto.zhanjiContent_i = function () {
		var t = new eui.Group();
		this.zhanjiContent = t;
		return t;
	};
	_proto._btn_topback_i = function () {
		var t = new eui.Button();
		this._btn_topback = t;
		t.label = "";
		t.x = 547.04;
		t.y = 1.5;
		t.skinName = zhanjiMainScene$Skin83;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sss8ren_hall_json.zhanji_title";
		t.y = 37;
		return t;
	};
	return zhanjiMainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShisanWater/sss_chooseCard.exml'] = window.sss_chooseCard = (function (_super) {
	__extends(sss_chooseCard, _super);
	var sss_chooseCard$Skin84 = 	(function (_super) {
		__extends(sss_chooseCard$Skin84, _super);
		function sss_chooseCard$Skin84() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_xipai_outcard";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_chooseCard$Skin84;
	})(eui.Skin);

	var sss_chooseCard$Skin85 = 	(function (_super) {
		__extends(sss_chooseCard$Skin85, _super);
		function sss_chooseCard$Skin85() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_msg_cancel";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_chooseCard$Skin85;
	})(eui.Skin);

	var sss_chooseCard$Skin86 = 	(function (_super) {
		__extends(sss_chooseCard$Skin86, _super);
		function sss_chooseCard$Skin86() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_msg_sure";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_chooseCard$Skin86;
	})(eui.Skin);

	function sss_chooseCard() {
		_super.call(this);
		this.skinParts = ["_img_meng","hadChoosen4","_txt_head","_txt_mid","_txt_foot","_txt_dao","_gp_changeCard","daojiQuan","daojishiTxt","hadChoosen0","head1","mid1","foot0","head2","mid2","footT1","hadChoosen1","head0","mid0","foot1","head3","mid3","footT0","hadChoosen2","head4","mid4","foot2","head5","mid5","footT2","hadChoosen3","head6","mid6","foot3","head7","mid7","footT3","itemGroup","card0","card1","card2","card3","card4","card5","card6","card7","card8","card9","card10","card11","card12","chupaiBtn","specialCancelBtn","specialConfirmBtn","specialText","specialGroup","tipContent","showTip","_group_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._img_meng_i(),this._gp_changeCard_i(),this._group_main_i()];
	}
	var _proto = sss_chooseCard.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "common_image_json.public_meng2";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_changeCard_i = function () {
		var t = new eui.Group();
		this._gp_changeCard = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 496;
		t.y = 886;
		t.elementsContent = [this.hadChoosen4_i(),this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto.hadChoosen4_i = function () {
		var t = new eui.Image();
		this.hadChoosen4 = t;
		t.source = "tz_sss_img_json.sss_xipai_kuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 228;
		t.horizontalCenter = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.verticalCenter = 0;
		t.elementsContent = [this._txt_head_i(),this._txt_mid_i(),this._txt_foot_i(),this._txt_dao_i()];
		return t;
	};
	_proto._txt_head_i = function () {
		var t = new eui.Label();
		this._txt_head = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0xB75616;
		t.y = 0;
		return t;
	};
	_proto._txt_mid_i = function () {
		var t = new eui.Label();
		this._txt_mid = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 55;
		return t;
	};
	_proto._txt_foot_i = function () {
		var t = new eui.Label();
		this._txt_foot = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 110;
		return t;
	};
	_proto._txt_dao_i = function () {
		var t = new eui.Label();
		this._txt_dao = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "12道";
		t.textColor = 0x000000;
		t.y = 165;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 960;
		t.verticalCenter = -34;
		t.width = 609.4;
		t.x = 15;
		t.elementsContent = [this._Image1_i(),this._Group2_i(),this._Scroller1_i(),this._Group11_i(),this.chupaiBtn_i(),this.specialGroup_i(),this.showTip_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_xipai_title";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 105;
		t.width = 102;
		t.x = 434.48;
		t.y = 93.18;
		t.elementsContent = [this._Image2_i(),this.daojiQuan_i(),this.daojishiTxt_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_time_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.daojiQuan_i = function () {
		var t = new eui.Image();
		this.daojiQuan = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 65;
		t.rotation = 0;
		t.source = "tz_sss_img_json.sss_time_value";
		t.x = 51;
		t.y = 53;
		return t;
	};
	_proto.daojishiTxt_i = function () {
		var t = new eui.Label();
		this.daojishiTxt = t;
		t.bold = true;
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "999";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 78;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 240;
		t.horizontalCenter = 0.30000000000001137;
		t.width = 620;
		t.y = 622.66;
		t.viewport = this.itemGroup_i();
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.elementsContent = [this._Group4_i(),this._Group6_i(),this._Group8_i(),this._Group10_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.hadChoosen0_i(),this._Rect2_i(),this._Group3_i()];
		return t;
	};
	_proto.hadChoosen0_i = function () {
		var t = new eui.Image();
		this.hadChoosen0 = t;
		t.source = "tz_sss_img_json.sss_xipai_kuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 228;
		t.horizontalCenter = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.verticalCenter = 0;
		t.elementsContent = [this.head1_i(),this.mid1_i(),this.foot0_i(),this.head2_i(),this.mid2_i(),this.footT1_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Label();
		this.head1 = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 0;
		return t;
	};
	_proto.mid1_i = function () {
		var t = new eui.Label();
		this.mid1 = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.foot0_i = function () {
		var t = new eui.Label();
		this.foot0 = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 128.33;
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.mid2_i = function () {
		var t = new eui.Image();
		this.mid2 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.footT1_i = function () {
		var t = new eui.Image();
		this.footT1 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 128.33;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -0.5;
		t.x = 155;
		t.elementsContent = [this.hadChoosen1_i(),this._Rect3_i(),this._Group5_i()];
		return t;
	};
	_proto.hadChoosen1_i = function () {
		var t = new eui.Image();
		this.hadChoosen1 = t;
		t.source = "tz_sss_img_json.sss_xipai_kuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 228;
		t.horizontalCenter = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.verticalCenter = 0;
		t.elementsContent = [this.head0_i(),this.mid0_i(),this.foot1_i(),this.head3_i(),this.mid3_i(),this.footT0_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Label();
		this.head0 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 0;
		return t;
	};
	_proto.mid0_i = function () {
		var t = new eui.Label();
		this.mid0 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.foot1_i = function () {
		var t = new eui.Label();
		this.foot1 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 128.33;
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.mid3_i = function () {
		var t = new eui.Image();
		this.mid3 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.footT0_i = function () {
		var t = new eui.Image();
		this.footT0 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 128.33;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -0.5;
		t.x = 310;
		t.elementsContent = [this.hadChoosen2_i(),this._Rect4_i(),this._Group7_i()];
		return t;
	};
	_proto.hadChoosen2_i = function () {
		var t = new eui.Image();
		this.hadChoosen2 = t;
		t.source = "tz_sss_img_json.sss_xipai_kuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 228;
		t.horizontalCenter = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.verticalCenter = 0;
		t.elementsContent = [this.head4_i(),this.mid4_i(),this.foot2_i(),this.head5_i(),this.mid5_i(),this.footT2_i()];
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Label();
		this.head4 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 0;
		return t;
	};
	_proto.mid4_i = function () {
		var t = new eui.Label();
		this.mid4 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.foot2_i = function () {
		var t = new eui.Label();
		this.foot2 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 128.33;
		return t;
	};
	_proto.head5_i = function () {
		var t = new eui.Image();
		this.head5 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.mid5_i = function () {
		var t = new eui.Image();
		this.mid5 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.footT2_i = function () {
		var t = new eui.Image();
		this.footT2 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 128.33;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -0.5;
		t.x = 465;
		t.elementsContent = [this.hadChoosen3_i(),this._Rect5_i(),this._Group9_i()];
		return t;
	};
	_proto.hadChoosen3_i = function () {
		var t = new eui.Image();
		this.hadChoosen3 = t;
		t.source = "tz_sss_img_json.sss_xipai_kuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 228;
		t.horizontalCenter = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.verticalCenter = 0;
		t.elementsContent = [this.head6_i(),this.mid6_i(),this.foot3_i(),this.head7_i(),this.mid7_i(),this.footT3_i()];
		return t;
	};
	_proto.head6_i = function () {
		var t = new eui.Label();
		this.head6 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 0;
		return t;
	};
	_proto.mid6_i = function () {
		var t = new eui.Label();
		this.mid6 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.foot3_i = function () {
		var t = new eui.Label();
		this.foot3 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 128.33;
		return t;
	};
	_proto.head7_i = function () {
		var t = new eui.Image();
		this.head7 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.mid7_i = function () {
		var t = new eui.Image();
		this.mid7 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.footT3_i = function () {
		var t = new eui.Image();
		this.footT3 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 128.33;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.30000000000001137;
		t.y = 75;
		t.elementsContent = [this._Image3_i(),this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i(),this.card5_i(),this.card6_i(),this.card7_i(),this.card8_i(),this.card9_i(),this.card10_i(),this.card11_i(),this.card12_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.06;
		t.scaleY = 1.05;
		t.source = "sss_xipai_main_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 10;
		t.y = 20;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_5";
		t.width = 109;
		t.x = 125;
		t.y = 20;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "组1_png";
		t.width = 109;
		t.x = 240;
		t.y = 20;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Image();
		this.card3 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 5.44;
		t.y = 176.02;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Image();
		this.card4 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 120.44;
		t.y = 176.02;
		return t;
	};
	_proto.card5_i = function () {
		var t = new eui.Image();
		this.card5 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 235.44;
		t.y = 176.02;
		return t;
	};
	_proto.card6_i = function () {
		var t = new eui.Image();
		this.card6 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 350.44;
		t.y = 176.02;
		return t;
	};
	_proto.card7_i = function () {
		var t = new eui.Image();
		this.card7 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 465.44;
		t.y = 176.02;
		return t;
	};
	_proto.card8_i = function () {
		var t = new eui.Image();
		this.card8 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 5.44;
		t.y = 333.73;
		return t;
	};
	_proto.card9_i = function () {
		var t = new eui.Image();
		this.card9 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 120.44;
		t.y = 333.73;
		return t;
	};
	_proto.card10_i = function () {
		var t = new eui.Image();
		this.card10 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 235.44;
		t.y = 333.73;
		return t;
	};
	_proto.card11_i = function () {
		var t = new eui.Image();
		this.card11 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 350.44;
		t.y = 333.73;
		return t;
	};
	_proto.card12_i = function () {
		var t = new eui.Image();
		this.card12 = t;
		t.height = 144;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 465.44;
		t.y = 333.73;
		return t;
	};
	_proto.chupaiBtn_i = function () {
		var t = new eui.Button();
		this.chupaiBtn = t;
		t.horizontalCenter = -0.19999999999998863;
		t.label = "";
		t.verticalCenter = 440;
		t.skinName = sss_chooseCard$Skin84;
		return t;
	};
	_proto.specialGroup_i = function () {
		var t = new eui.Group();
		this.specialGroup = t;
		t.visible = false;
		t.x = -11;
		t.y = 815;
		t.elementsContent = [this._Image4_i(),this._Group12_i(),this.specialText_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(72,101,433,56);
		t.source = "sss_msg_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 63;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 138;
		t.elementsContent = [this.specialCancelBtn_i(),this.specialConfirmBtn_i()];
		return t;
	};
	_proto.specialCancelBtn_i = function () {
		var t = new eui.Button();
		this.specialCancelBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = sss_chooseCard$Skin85;
		return t;
	};
	_proto.specialConfirmBtn_i = function () {
		var t = new eui.Button();
		this.specialConfirmBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 370;
		t.skinName = sss_chooseCard$Skin86;
		return t;
	};
	_proto.specialText_i = function () {
		var t = new eui.Label();
		this.specialText = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 80;
		t.horizontalCenter = 0.5;
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "出现特殊牌型至尊青龙，预计赢取每家100分，是否反特殊牌型出牌";
		t.verticalAlign = "middle";
		t.width = 540;
		t.y = 48;
		return t;
	};
	_proto.showTip_i = function () {
		var t = new eui.Group();
		this.showTip = t;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -103.5;
		t.visible = false;
		t.elementsContent = [this._Image5_i(),this.tipContent_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.scale9Grid = new egret.Rectangle(5,5,37,37);
		t.source = "tz_sss_img_json.sss_headinfo_bg";
		t.width = 590;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipContent_i = function () {
		var t = new eui.Label();
		this.tipContent = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "中道不能大于尾道，已自动交换";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 590;
		return t;
	};
	return sss_chooseCard;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShisanWater/sss_chooseItem.exml'] = window.sss_chooseItem = (function (_super) {
	__extends(sss_chooseItem, _super);
	function sss_chooseItem() {
		_super.call(this);
		this.skinParts = ["hadChoosen","head","mid","footT","_txt_dao","head0","mid0","footT0"];
		
		this.height = 228;
		this.width = 158;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = sss_chooseItem.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.hadChoosen_i(),this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto.hadChoosen_i = function () {
		var t = new eui.Image();
		this.hadChoosen = t;
		t.source = "tz_sss_img_json.sss_xipai_kuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 228;
		t.horizontalCenter = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.verticalCenter = 0;
		t.elementsContent = [this.head_i(),this.mid_i(),this.footT_i(),this._txt_dao_i(),this.head0_i(),this.mid0_i(),this.footT0_i()];
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Label();
		this.head = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0xb75616;
		t.y = 0;
		return t;
	};
	_proto.mid_i = function () {
		var t = new eui.Label();
		this.mid = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 55;
		return t;
	};
	_proto.footT_i = function () {
		var t = new eui.Label();
		this.footT = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 110;
		return t;
	};
	_proto._txt_dao_i = function () {
		var t = new eui.Label();
		this._txt_dao = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "12道";
		t.textColor = 0x000000;
		t.y = 165;
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.mid0_i = function () {
		var t = new eui.Image();
		this.mid0 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.footT0_i = function () {
		var t = new eui.Image();
		this.footT0 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_9";
		t.visible = false;
		t.y = 128.33;
		return t;
	};
	return sss_chooseItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShisanWater/sss_headbox.exml'] = window.sss_headbox = (function (_super) {
	__extends(sss_headbox, _super);
	function sss_headbox() {
		_super.call(this);
		this.skinParts = ["top0","top1","top2","topTit","mycardTop","mid0","mid1","mid2","mid3","mid4","midTit","mycardMid","bottom0","bottom1","bottom2","bottom3","bottom4","botTit","mycardBottom","hasReadyCardsGroup","headDi","headImg","offline","sitBtn","dalaba","hasReady","headGroup","nickname","point","infoBox","pai0","pai1","pai2","pai3","pai4","pai5","pai6","pai7","pai8","pai9","pai10","pai11","pai12","specialTit","specialGroup","lipai0","lipai1","lipai2","lipai3","lipai4","lipai5","lipai6","peipai","lipaiGroup","mbg","message","messagebg","_bitLabel_myPoint","topPoint","topTitle","topGroup","midPoint","midTitle","midGroup","bottomPoint","botttomTitle","bottomGroup","totalPoint","totalTitle","totalGroup","mainGroup","headTouch"];
		
		this.elementsContent = [this.mainGroup_i(),this.headTouch_i()];
	}
	var _proto = sss_headbox.prototype;

	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.bottom = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 110;
		t.elementsContent = [this.hasReadyCardsGroup_i(),this.headGroup_i(),this.infoBox_i(),this.specialGroup_i(),this.lipaiGroup_i(),this.messagebg_i(),this._bitLabel_myPoint_i(),this.topGroup_i(),this.midGroup_i(),this.bottomGroup_i(),this.totalGroup_i()];
		return t;
	};
	_proto.hasReadyCardsGroup_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup = t;
		t.height = 260;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.width = 225;
		t.x = -53;
		t.y = -201.57;
		t.elementsContent = [this.mycardTop_i(),this.mycardMid_i(),this.mycardBottom_i()];
		return t;
	};
	_proto.mycardTop_i = function () {
		var t = new eui.Group();
		this.mycardTop = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -70.5;
		t.width = 158;
		t.elementsContent = [this.top0_i(),this.top1_i(),this.top2_i(),this.topTit_i()];
		return t;
	};
	_proto.top0_i = function () {
		var t = new eui.Image();
		this.top0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top1_i = function () {
		var t = new eui.Image();
		this.top1 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top2_i = function () {
		var t = new eui.Image();
		this.top2 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit_i = function () {
		var t = new eui.Image();
		this.topTit = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid_i = function () {
		var t = new eui.Group();
		this.mycardMid = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 225;
		t.elementsContent = [this.mid0_i(),this.mid1_i(),this.mid2_i(),this.mid3_i(),this.mid4_i(),this.midTit_i()];
		return t;
	};
	_proto.mid0_i = function () {
		var t = new eui.Image();
		this.mid0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid1_i = function () {
		var t = new eui.Image();
		this.mid1 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid2_i = function () {
		var t = new eui.Image();
		this.mid2 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid3_i = function () {
		var t = new eui.Image();
		this.mid3 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid4_i = function () {
		var t = new eui.Image();
		this.mid4 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit_i = function () {
		var t = new eui.Image();
		this.midTit = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom_i = function () {
		var t = new eui.Group();
		this.mycardBottom = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.verticalCenter = 65;
		t.width = 225;
		t.elementsContent = [this.bottom0_i(),this.bottom1_i(),this.bottom2_i(),this.bottom3_i(),this.bottom4_i(),this.botTit_i()];
		return t;
	};
	_proto.bottom0_i = function () {
		var t = new eui.Image();
		this.bottom0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom1_i = function () {
		var t = new eui.Image();
		this.bottom1 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom2_i = function () {
		var t = new eui.Image();
		this.bottom2 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom3_i = function () {
		var t = new eui.Image();
		this.bottom3 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom4_i = function () {
		var t = new eui.Image();
		this.bottom4 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit_i = function () {
		var t = new eui.Image();
		this.botTit = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi_i(),this.headImg_i(),this.offline_i(),this.sitBtn_i(),this.dalaba_i(),this.hasReady_i()];
		return t;
	};
	_proto.headDi_i = function () {
		var t = new eui.Image();
		this.headDi = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn_i = function () {
		var t = new eui.Image();
		this.sitBtn = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba_i = function () {
		var t = new eui.Image();
		this.dalaba = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady_i = function () {
		var t = new eui.Image();
		this.hasReady = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox_i = function () {
		var t = new eui.Group();
		this.infoBox = t;
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect1_i(),this.nickname_i(),this.point_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Label();
		this.point = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup_i = function () {
		var t = new eui.Group();
		this.specialGroup = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai0_i(),this.pai1_i(),this.pai2_i(),this.pai3_i(),this.pai4_i(),this.pai5_i(),this.pai6_i(),this.pai7_i(),this.pai8_i(),this.pai9_i(),this.pai10_i(),this.pai11_i(),this.pai12_i(),this.specialTit_i()];
		return t;
	};
	_proto.pai0_i = function () {
		var t = new eui.Image();
		this.pai0 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai1_i = function () {
		var t = new eui.Image();
		this.pai1 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai2_i = function () {
		var t = new eui.Image();
		this.pai2 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai3_i = function () {
		var t = new eui.Image();
		this.pai3 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai4_i = function () {
		var t = new eui.Image();
		this.pai4 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai5_i = function () {
		var t = new eui.Image();
		this.pai5 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai6_i = function () {
		var t = new eui.Image();
		this.pai6 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai7_i = function () {
		var t = new eui.Image();
		this.pai7 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai8_i = function () {
		var t = new eui.Image();
		this.pai8 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai9_i = function () {
		var t = new eui.Image();
		this.pai9 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai10_i = function () {
		var t = new eui.Image();
		this.pai10 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai11_i = function () {
		var t = new eui.Image();
		this.pai11 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai12_i = function () {
		var t = new eui.Image();
		this.pai12 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit_i = function () {
		var t = new eui.Image();
		this.specialTit = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup_i = function () {
		var t = new eui.Group();
		this.lipaiGroup = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = -42;
		t.y = -117;
		t.elementsContent = [this.lipai0_i(),this.lipai1_i(),this.lipai2_i(),this.lipai3_i(),this.lipai4_i(),this.lipai5_i(),this.lipai6_i(),this.peipai_i()];
		return t;
	};
	_proto.lipai0_i = function () {
		var t = new eui.Image();
		this.lipai0 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai1_i = function () {
		var t = new eui.Image();
		this.lipai1 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai2_i = function () {
		var t = new eui.Image();
		this.lipai2 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai3_i = function () {
		var t = new eui.Image();
		this.lipai3 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai4_i = function () {
		var t = new eui.Image();
		this.lipai4 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai5_i = function () {
		var t = new eui.Image();
		this.lipai5 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai6_i = function () {
		var t = new eui.Image();
		this.lipai6 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai_i = function () {
		var t = new eui.Image();
		this.peipai = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.height = 49;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg_i(),this.message_i()];
		return t;
	};
	_proto.mbg_i = function () {
		var t = new eui.Image();
		this.mbg = t;
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto._bitLabel_myPoint_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 116.01;
		t.y = -170;
		t.elementsContent = [this.topPoint_i(),this.topTitle_i()];
		return t;
	};
	_proto.topPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle_i = function () {
		var t = new eui.Image();
		this.topTitle = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup_i = function () {
		var t = new eui.Group();
		this.midGroup = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 116.01;
		t.y = -105;
		t.elementsContent = [this.midPoint_i(),this.midTitle_i()];
		return t;
	};
	_proto.midPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle_i = function () {
		var t = new eui.Image();
		this.midTitle = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 116.01;
		t.y = -30;
		t.elementsContent = [this.bottomPoint_i(),this.botttomTitle_i()];
		return t;
	};
	_proto.bottomPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle_i = function () {
		var t = new eui.Image();
		this.botttomTitle = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup_i = function () {
		var t = new eui.Group();
		this.totalGroup = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 116.01;
		t.y = 45;
		t.elementsContent = [this.totalPoint_i(),this.totalTitle_i()];
		return t;
	};
	_proto.totalPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle_i = function () {
		var t = new eui.Image();
		this.totalTitle = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.headTouch_i = function () {
		var t = new eui.Rect();
		this.headTouch = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return sss_headbox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShisanWater/sss_index.exml'] = window.sss_index = (function (_super) {
	__extends(sss_index, _super);
	var sss_index$Skin87 = 	(function (_super) {
		__extends(sss_index$Skin87, _super);
		function sss_index$Skin87() {
			_super.call(this);
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
		var _proto = sss_index$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_game_json.public_btn_message";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_index$Skin87;
	})(eui.Skin);

	var sss_index$Skin88 = 	(function (_super) {
		__extends(sss_index$Skin88, _super);
		function sss_index$Skin88() {
			_super.call(this);
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
		var _proto = sss_index$Skin88.prototype;

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
		return sss_index$Skin88;
	})(eui.Skin);

	var sss_index$Skin89 = 	(function (_super) {
		__extends(sss_index$Skin89, _super);
		function sss_index$Skin89() {
			_super.call(this);
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
		var _proto = sss_index$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_game_json.public_btn_mai";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_index$Skin89;
	})(eui.Skin);

	var sss_index$Skin90 = 	(function (_super) {
		__extends(sss_index$Skin90, _super);
		function sss_index$Skin90() {
			_super.call(this);
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
		var _proto = sss_index$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_btn_start";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_index$Skin90;
	})(eui.Skin);

	var sss_index$Skin91 = 	(function (_super) {
		__extends(sss_index$Skin91, _super);
		function sss_index$Skin91() {
			_super.call(this);
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
		var _proto = sss_index$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_btn_quit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_index$Skin91;
	})(eui.Skin);

	var sss_index$Skin92 = 	(function (_super) {
		__extends(sss_index$Skin92, _super);
		function sss_index$Skin92() {
			_super.call(this);
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
		var _proto = sss_index$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_btn_situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_index$Skin92;
	})(eui.Skin);

	function sss_index() {
		_super.call(this);
		this.skinParts = ["_img_logo","daojiGuang","daojishiTxt","daojiGroup","bottomBg","xiaoxiBtn","xxGroup","locBtn","locGroup","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","_rule_pwd","_rule_playCount","_rule_payMode","_rule_kaipai","_rule_guipai","_rule_specialCard","_gp_rulebg","menu","pg_Content","pangguanGroup","startBtn","startBtnGroup","_btn_backhall","quitBtnGroup","_img_music","_btn_situp","top3","top0","top1","topTit0","mycardTop0","mid5","mid0","mid1","mid2","mid3","midTit0","mycardMid0","bottom5","bottom0","bottom1","bottom2","bottom3","botTit0","mycardBottom0","hasReadyCardsGroup0","headDi0","headImg0","offline0","sitBtn0","dalaba0","hasReady0","headGroup0","nickname0","point0","infoBox0","pai13","pai0","pai1","pai2","pai3","pai4","pai5","pai6","pai7","pai8","pai9","pai10","pai11","specialTit0","specialGroup0","lipai7","lipai0","lipai1","lipai2","lipai3","lipai4","lipai5","peipai0","lipaiGroup0","mbg0","message0","messagebg0","_bitLabel_myPoint0","topPoint0","topTitle0","topGroup0","midPoint0","midTitle0","midGroup0","bottomPoint0","botttomTitle0","bottomGroup0","totalPoint0","totalTitle0","totalGroup0","mainGroup","top2","top4","top5","topTit1","mycardTop1","mid4","mid6","mid7","mid8","mid9","midTit1","mycardMid1","bottom4","bottom6","bottom7","bottom8","bottom9","botTit1","mycardBottom1","hasReadyCardsGroup1","headDi1","headImg1","offline1","sitBtn1","dalaba1","hasReady1","headGroup1","nickname1","point1","infoBox1","pai12","pai14","pai15","pai16","pai17","pai18","pai19","pai20","pai21","pai22","pai23","pai24","pai25","specialTit1","specialGroup1","lipai6","lipai8","lipai9","lipai10","lipai11","lipai12","lipai13","peipai1","lipaiGroup1","mbg1","message1","messagebg1","_bitLabel_myPoint1","topPoint1","topTitle1","topGroup1","midPoint1","midTitle1","midGroup1","bottomPoint1","botttomTitle1","bottomGroup1","totalPoint1","totalTitle1","totalGroup1","mainGroup0","top6","top7","top8","topTit2","mycardTop2","mid10","mid11","mid12","mid13","mid14","midTit2","mycardMid2","bottom10","bottom11","bottom12","bottom13","bottom14","botTit2","mycardBottom2","hasReadyCardsGroup2","headDi2","headImg2","offline2","sitBtn2","dalaba2","hasReady2","headGroup2","nickname2","point2","infoBox2","pai26","pai27","pai28","pai29","pai30","pai31","pai32","pai33","pai34","pai35","pai36","pai37","pai38","specialTit2","specialGroup2","lipai14","lipai15","lipai16","lipai17","lipai18","lipai19","lipai20","peipai2","lipaiGroup2","mbg2","message2","messagebg2","_bitLabel_myPoint2","topPoint2","topTitle2","topGroup2","midPoint2","midTitle2","midGroup2","bottomPoint2","botttomTitle2","bottomGroup2","totalPoint2","totalTitle2","totalGroup2","mainGroup1","top9","top10","top11","topTit3","mycardTop3","mid15","mid16","mid17","mid18","mid19","midTit3","mycardMid3","bottom15","bottom16","bottom17","bottom18","bottom19","botTit3","mycardBottom3","hasReadyCardsGroup3","headDi3","headImg3","offline3","sitBtn3","dalaba3","hasReady3","headGroup3","nickname3","point3","infoBox3","pai39","pai40","pai41","pai42","pai43","pai44","pai45","pai46","pai47","pai48","pai49","pai50","pai51","specialTit3","specialGroup3","lipai21","lipai22","lipai23","lipai24","lipai25","lipai26","lipai27","peipai3","lipaiGroup3","mbg3","message3","messagebg3","_bitLabel_myPoint3","topPoint3","topTitle3","topGroup3","midPoint3","midTitle3","midGroup3","bottomPoint3","botttomTitle3","bottomGroup3","totalPoint3","totalTitle3","totalGroup3","mainGroup2","top12","top13","top14","topTit4","mycardTop4","mid20","mid21","mid22","mid23","mid24","midTit4","mycardMid4","bottom20","bottom21","bottom22","bottom23","bottom24","botTit4","mycardBottom4","hasReadyCardsGroup4","headDi4","headImg4","offline4","sitBtn4","dalaba4","hasReady4","headGroup4","nickname4","point4","infoBox4","pai52","pai53","pai54","pai55","pai56","pai57","pai58","pai59","pai60","pai61","pai62","pai63","pai64","specialTit4","specialGroup4","lipai28","lipai29","lipai30","lipai31","lipai32","lipai33","lipai34","peipai4","lipaiGroup4","mbg4","message4","messagebg4","_bitLabel_myPoint4","topPoint4","topTitle4","topGroup4","midPoint4","midTitle4","midGroup4","bottomPoint4","botttomTitle4","bottomGroup4","totalPoint4","totalTitle4","totalGroup4","mainGroup3","top15","top16","top17","topTit5","mycardTop5","mid25","mid26","mid27","mid28","mid29","midTit5","mycardMid5","bottom25","bottom26","bottom27","bottom28","bottom29","botTit5","mycardBottom5","hasReadyCardsGroup5","headDi5","headImg5","offline5","sitBtn5","dalaba5","hasReady5","headGroup5","nickname5","point5","infoBox5","pai65","pai66","pai67","pai68","pai69","pai70","pai71","pai72","pai73","pai74","pai75","pai76","pai77","specialTit5","specialGroup5","lipai35","lipai36","lipai37","lipai38","lipai39","lipai40","lipai41","peipai5","lipaiGroup5","mbg5","message5","messagebg5","_bitLabel_myPoint5","topPoint5","topTitle5","topGroup5","midPoint5","midTitle5","midGroup5","bottomPoint5","botttomTitle5","bottomGroup5","totalPoint5","totalTitle5","totalGroup5","mainGroup4","top18","top19","top20","topTit6","mycardTop6","mid30","mid31","mid32","mid33","mid34","midTit6","mycardMid6","bottom30","bottom31","bottom32","bottom33","bottom34","botTit6","mycardBottom6","hasReadyCardsGroup6","headDi6","headImg6","offline6","sitBtn6","dalaba6","hasReady6","headGroup6","nickname6","point6","infoBox6","pai78","pai79","pai80","pai81","pai82","pai83","pai84","pai85","pai86","pai87","pai88","pai89","pai90","specialTit6","specialGroup6","lipai42","lipai43","lipai44","lipai45","lipai46","lipai47","lipai48","peipai6","lipaiGroup6","mbg6","message6","messagebg6","_bitLabel_myPoint6","topPoint6","topTitle6","topGroup6","midPoint6","midTitle6","midGroup6","bottomPoint6","botttomTitle6","bottomGroup6","totalPoint6","totalTitle6","totalGroup6","mainGroup5","top21","top22","top23","topTit7","mycardTop7","mid35","mid36","mid37","mid38","mid39","midTit7","mycardMid7","bottom35","bottom36","bottom37","bottom38","bottom39","botTit7","mycardBottom7","hasReadyCardsGroup7","headDi7","headImg7","offline7","sitBtn7","dalaba7","hasReady7","headGroup7","nickname7","point7","infoBox7","pai91","pai92","pai93","pai94","pai95","pai96","pai97","pai98","pai99","pai100","pai101","pai102","pai103","specialTit7","specialGroup7","lipai49","lipai50","lipai51","lipai52","lipai53","lipai54","lipai55","peipai7","lipaiGroup7","mbg7","message7","messagebg7","_bitLabel_myPoint7","topPoint7","topTitle7","topGroup7","midPoint7","midTitle7","midGroup7","bottomPoint7","botttomTitle7","bottomGroup7","totalPoint7","totalTitle7","totalGroup7","mainGroup6"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._img_logo_i(),this.daojiGroup_i(),this.bottomBg_i(),this.xxGroup_i(),this.locGroup_i(),this.yyGroup_i(),this._gp_rulebg_i(),this.menu_i(),this.pangguanGroup_i(),this.startBtnGroup_i(),this.quitBtnGroup_i(),this._Image9_i(),this._img_music_i(),this._btn_situp_i(),this.mainGroup_i(),this.mainGroup0_i(),this.mainGroup1_i(),this.mainGroup2_i(),this.mainGroup3_i(),this.mainGroup4_i(),this.mainGroup5_i(),this.mainGroup6_i()];
	}
	var _proto = sss_index.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1388;
		t.scale9Grid = new egret.Rectangle(6,6,38,38);
		t.source = "sss_bg_png";
		t.width = 640;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._img_logo_i = function () {
		var t = new eui.Image();
		this._img_logo = t;
		t.horizontalCenter = 0;
		t.source = "sss_logo_png";
		t.y = 505;
		return t;
	};
	_proto.daojiGroup_i = function () {
		var t = new eui.Group();
		this.daojiGroup = t;
		t.height = 105;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 102;
		t.y = 357;
		t.elementsContent = [this._Image2_i(),this.daojiGuang_i(),this.daojishiTxt_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_time_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.daojiGuang_i = function () {
		var t = new eui.Image();
		this.daojiGuang = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 65;
		t.rotation = 0;
		t.source = "tz_sss_img_json.sss_time_value";
		t.x = 51;
		t.y = 53;
		return t;
	};
	_proto.daojishiTxt_i = function () {
		var t = new eui.Label();
		this.daojishiTxt = t;
		t.bold = true;
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "999";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 78;
		return t;
	};
	_proto.bottomBg_i = function () {
		var t = new eui.Image();
		this.bottomBg = t;
		t.source = "sss_bg_button_png";
		t.visible = false;
		t.x = 0;
		t.y = 997;
		return t;
	};
	_proto.xxGroup_i = function () {
		var t = new eui.Group();
		this.xxGroup = t;
		t.height = 71;
		t.width = 71;
		t.x = 550;
		t.y = 905;
		t.elementsContent = [this.xiaoxiBtn_i()];
		return t;
	};
	_proto.xiaoxiBtn_i = function () {
		var t = new eui.Button();
		this.xiaoxiBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin87;
		return t;
	};
	_proto.locGroup_i = function () {
		var t = new eui.Group();
		this.locGroup = t;
		t.height = 71;
		t.width = 71;
		t.x = 12;
		t.y = 994.16;
		t.elementsContent = [this.locBtn_i()];
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin88;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 71;
		t.width = 71;
		t.x = 550;
		t.y = 990;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin89;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.visible = false;
		t.x = -28.12;
		t.y = -85.8;
		t.elementsContent = [this._Image3_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image3_i = function () {
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
	_proto._gp_rulebg_i = function () {
		var t = new eui.Group();
		this._gp_rulebg = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 170;
		t.x = 487.36;
		t.y = 93.2;
		t.elementsContent = [this._rule_pwd_i(),this._rule_playCount_i(),this._rule_payMode_i(),this._rule_kaipai_i(),this._rule_guipai_i(),this._rule_specialCard_i()];
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
	_proto._rule_kaipai_i = function () {
		var t = new eui.Label();
		this._rule_kaipai = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "开牌：顺序";
		t.x = 15;
		t.y = 88.75;
		return t;
	};
	_proto._rule_guipai_i = function () {
		var t = new eui.Label();
		this._rule_guipai = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "鬼牌：没有";
		t.x = 15;
		t.y = 113.75;
		return t;
	};
	_proto._rule_specialCard_i = function () {
		var t = new eui.Label();
		this._rule_specialCard = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "特殊牌：23种";
		t.x = 15;
		t.y = 138.75;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Image();
		this.menu = t;
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "tz_sss_img_json.sss_leftbtn";
		t.top = 0;
		return t;
	};
	_proto.pangguanGroup_i = function () {
		var t = new eui.Group();
		this.pangguanGroup = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 204.21;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 110;
		t.right = 1;
		t.scale9Grid = new egret.Rectangle(6,12,37,78);
		t.source = "tz_sss_img_json.sss_top_bg";
		t.width = 480.33;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 470;
		t.viewport = this.pg_Content_i();
		return t;
	};
	_proto.pg_Content_i = function () {
		var t = new eui.Group();
		this.pg_Content = t;
		t.elementsContent = [this._Group2_i(),this._Group4_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Group1_i(),this._Label1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 4;
		t.y = 3.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 16;
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "--";
		t.width = 80;
		t.y = 75.5;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 86;
		t.elementsContent = [this._Group3_i(),this._Label2_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 4;
		t.y = 3.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 16;
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "--";
		t.width = 80;
		t.y = 75.5;
		return t;
	};
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 71;
		t.horizontalCenter = 106.5;
		t.width = 71;
		t.y = 726;
		t.elementsContent = [this.startBtn_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin90;
		return t;
	};
	_proto.quitBtnGroup_i = function () {
		var t = new eui.Group();
		this.quitBtnGroup = t;
		t.height = 71;
		t.horizontalCenter = -85.5;
		t.width = 71;
		t.y = 726;
		t.elementsContent = [this._btn_backhall_i()];
		return t;
	};
	_proto._btn_backhall_i = function () {
		var t = new eui.Button();
		this._btn_backhall = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin91;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "tz_sss_img_json.sss_qld_bg";
		t.visible = false;
		t.x = 205;
		t.y = 812;
		return t;
	};
	_proto._img_music_i = function () {
		var t = new eui.Image();
		this._img_music = t;
		t.height = 71;
		t.source = "tz_game_public_json.btn_music_on";
		t.width = 71;
		t.x = 10.48;
		t.y = 992.63;
		return t;
	};
	_proto._btn_situp_i = function () {
		var t = new eui.Button();
		this._btn_situp = t;
		t.label = "";
		t.x = 538;
		t.y = 803.15;
		t.skinName = sss_index$Skin92;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 180;
		t.scaleX = 0.72;
		t.scaleY = 0.72;
		t.visible = false;
		t.width = 110;
		t.x = 246;
		t.y = 880;
		t.elementsContent = [this.hasReadyCardsGroup0_i(),this.headGroup0_i(),this.infoBox0_i(),this.specialGroup0_i(),this.lipaiGroup0_i(),this.messagebg0_i(),this._bitLabel_myPoint0_i(),this.topGroup0_i(),this.midGroup0_i(),this.bottomGroup0_i(),this.totalGroup0_i()];
		return t;
	};
	_proto.hasReadyCardsGroup0_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup0 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 150;
		t.y = -110;
		t.elementsContent = [this.mycardTop0_i(),this.mycardMid0_i(),this.mycardBottom0_i()];
		return t;
	};
	_proto.mycardTop0_i = function () {
		var t = new eui.Group();
		this.mycardTop0 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top3_i(),this.top0_i(),this.top1_i(),this.topTit0_i()];
		return t;
	};
	_proto.top3_i = function () {
		var t = new eui.Image();
		this.top3 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top0_i = function () {
		var t = new eui.Image();
		this.top0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top1_i = function () {
		var t = new eui.Image();
		this.top1 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit0_i = function () {
		var t = new eui.Image();
		this.topTit0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid0_i = function () {
		var t = new eui.Group();
		this.mycardMid0 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 65;
		t.elementsContent = [this.mid5_i(),this.mid0_i(),this.mid1_i(),this.mid2_i(),this.mid3_i(),this.midTit0_i()];
		return t;
	};
	_proto.mid5_i = function () {
		var t = new eui.Image();
		this.mid5 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid0_i = function () {
		var t = new eui.Image();
		this.mid0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid1_i = function () {
		var t = new eui.Image();
		this.mid1 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid2_i = function () {
		var t = new eui.Image();
		this.mid2 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid3_i = function () {
		var t = new eui.Image();
		this.mid3 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit0_i = function () {
		var t = new eui.Image();
		this.midTit0 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom0_i = function () {
		var t = new eui.Group();
		this.mycardBottom0 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom5_i(),this.bottom0_i(),this.bottom1_i(),this.bottom2_i(),this.bottom3_i(),this.botTit0_i()];
		return t;
	};
	_proto.bottom5_i = function () {
		var t = new eui.Image();
		this.bottom5 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom0_i = function () {
		var t = new eui.Image();
		this.bottom0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom1_i = function () {
		var t = new eui.Image();
		this.bottom1 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom2_i = function () {
		var t = new eui.Image();
		this.bottom2 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom3_i = function () {
		var t = new eui.Image();
		this.bottom3 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit0_i = function () {
		var t = new eui.Image();
		this.botTit0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup0_i = function () {
		var t = new eui.Group();
		this.headGroup0 = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi0_i(),this.headImg0_i(),this.offline0_i(),this.sitBtn0_i(),this.dalaba0_i(),this.hasReady0_i()];
		return t;
	};
	_proto.headDi0_i = function () {
		var t = new eui.Image();
		this.headDi0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline0_i = function () {
		var t = new eui.Image();
		this.offline0 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn0_i = function () {
		var t = new eui.Image();
		this.sitBtn0 = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba0_i = function () {
		var t = new eui.Image();
		this.dalaba0 = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady0_i = function () {
		var t = new eui.Image();
		this.hasReady0 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox0_i = function () {
		var t = new eui.Group();
		this.infoBox0 = t;
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect1_i(),this.nickname0_i(),this.point0_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup0_i = function () {
		var t = new eui.Group();
		this.specialGroup0 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai13_i(),this.pai0_i(),this.pai1_i(),this.pai2_i(),this.pai3_i(),this.pai4_i(),this.pai5_i(),this.pai6_i(),this.pai7_i(),this.pai8_i(),this.pai9_i(),this.pai10_i(),this.pai11_i(),this.specialTit0_i()];
		return t;
	};
	_proto.pai13_i = function () {
		var t = new eui.Image();
		this.pai13 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai0_i = function () {
		var t = new eui.Image();
		this.pai0 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai1_i = function () {
		var t = new eui.Image();
		this.pai1 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai2_i = function () {
		var t = new eui.Image();
		this.pai2 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai3_i = function () {
		var t = new eui.Image();
		this.pai3 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai4_i = function () {
		var t = new eui.Image();
		this.pai4 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai5_i = function () {
		var t = new eui.Image();
		this.pai5 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai6_i = function () {
		var t = new eui.Image();
		this.pai6 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai7_i = function () {
		var t = new eui.Image();
		this.pai7 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai8_i = function () {
		var t = new eui.Image();
		this.pai8 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai9_i = function () {
		var t = new eui.Image();
		this.pai9 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai10_i = function () {
		var t = new eui.Image();
		this.pai10 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai11_i = function () {
		var t = new eui.Image();
		this.pai11 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit0_i = function () {
		var t = new eui.Image();
		this.specialTit0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup0_i = function () {
		var t = new eui.Group();
		this.lipaiGroup0 = t;
		t.visible = false;
		t.x = 155;
		t.y = 1;
		t.elementsContent = [this.lipai7_i(),this.lipai0_i(),this.lipai1_i(),this.lipai2_i(),this.lipai3_i(),this.lipai4_i(),this.lipai5_i(),this.peipai0_i()];
		return t;
	};
	_proto.lipai7_i = function () {
		var t = new eui.Image();
		this.lipai7 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai0_i = function () {
		var t = new eui.Image();
		this.lipai0 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai1_i = function () {
		var t = new eui.Image();
		this.lipai1 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai2_i = function () {
		var t = new eui.Image();
		this.lipai2 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai3_i = function () {
		var t = new eui.Image();
		this.lipai3 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai4_i = function () {
		var t = new eui.Image();
		this.lipai4 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai5_i = function () {
		var t = new eui.Image();
		this.lipai5 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai0_i = function () {
		var t = new eui.Image();
		this.peipai0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg0_i = function () {
		var t = new eui.Group();
		this.messagebg0 = t;
		t.height = 49;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg0_i(),this.message0_i()];
		return t;
	};
	_proto.mbg0_i = function () {
		var t = new eui.Image();
		this.mbg0 = t;
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
	_proto._bitLabel_myPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint0 = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup0_i = function () {
		var t = new eui.Group();
		this.topGroup0 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 322;
		t.y = -99.45;
		t.elementsContent = [this.topPoint0_i(),this.topTitle0_i()];
		return t;
	};
	_proto.topPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint0 = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle0_i = function () {
		var t = new eui.Image();
		this.topTitle0 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.visible = false;
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup0_i = function () {
		var t = new eui.Group();
		this.midGroup0 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 322;
		t.y = -24.45;
		t.elementsContent = [this.midPoint0_i(),this.midTitle0_i()];
		return t;
	};
	_proto.midPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint0 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle0_i = function () {
		var t = new eui.Image();
		this.midTitle0 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.visible = false;
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup0_i = function () {
		var t = new eui.Group();
		this.bottomGroup0 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 322;
		t.y = 50.55;
		t.elementsContent = [this.bottomPoint0_i(),this.botttomTitle0_i()];
		return t;
	};
	_proto.bottomPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint0 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle0_i = function () {
		var t = new eui.Image();
		this.botttomTitle0 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.visible = false;
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup0_i = function () {
		var t = new eui.Group();
		this.totalGroup0 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 322;
		t.y = 125.55;
		t.elementsContent = [this.totalPoint0_i(),this.totalTitle0_i()];
		return t;
	};
	_proto.totalPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint0 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle0_i = function () {
		var t = new eui.Image();
		this.totalTitle0 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.visible = false;
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.mainGroup0_i = function () {
		var t = new eui.Group();
		this.mainGroup0 = t;
		t.height = 180;
		t.scaleX = 0.72;
		t.scaleY = 0.72;
		t.visible = false;
		t.width = 110;
		t.x = 555;
		t.y = 710;
		t.elementsContent = [this.hasReadyCardsGroup1_i(),this.headGroup1_i(),this.infoBox1_i(),this.specialGroup1_i(),this.lipaiGroup1_i(),this.messagebg1_i(),this._bitLabel_myPoint1_i(),this.topGroup1_i(),this.midGroup1_i(),this.bottomGroup1_i(),this.totalGroup1_i()];
		return t;
	};
	_proto.hasReadyCardsGroup1_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup1 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = -252;
		t.y = -58;
		t.elementsContent = [this.mycardTop1_i(),this.mycardMid1_i(),this.mycardBottom1_i()];
		return t;
	};
	_proto.mycardTop1_i = function () {
		var t = new eui.Group();
		this.mycardTop1 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top2_i(),this.top4_i(),this.top5_i(),this.topTit1_i()];
		return t;
	};
	_proto.top2_i = function () {
		var t = new eui.Image();
		this.top2 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top4_i = function () {
		var t = new eui.Image();
		this.top4 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top5_i = function () {
		var t = new eui.Image();
		this.top5 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit1_i = function () {
		var t = new eui.Image();
		this.topTit1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid1_i = function () {
		var t = new eui.Group();
		this.mycardMid1 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 65;
		t.elementsContent = [this.mid4_i(),this.mid6_i(),this.mid7_i(),this.mid8_i(),this.mid9_i(),this.midTit1_i()];
		return t;
	};
	_proto.mid4_i = function () {
		var t = new eui.Image();
		this.mid4 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid6_i = function () {
		var t = new eui.Image();
		this.mid6 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid7_i = function () {
		var t = new eui.Image();
		this.mid7 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid8_i = function () {
		var t = new eui.Image();
		this.mid8 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid9_i = function () {
		var t = new eui.Image();
		this.mid9 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit1_i = function () {
		var t = new eui.Image();
		this.midTit1 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom1_i = function () {
		var t = new eui.Group();
		this.mycardBottom1 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom4_i(),this.bottom6_i(),this.bottom7_i(),this.bottom8_i(),this.bottom9_i(),this.botTit1_i()];
		return t;
	};
	_proto.bottom4_i = function () {
		var t = new eui.Image();
		this.bottom4 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom6_i = function () {
		var t = new eui.Image();
		this.bottom6 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom7_i = function () {
		var t = new eui.Image();
		this.bottom7 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom8_i = function () {
		var t = new eui.Image();
		this.bottom8 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom9_i = function () {
		var t = new eui.Image();
		this.bottom9 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit1_i = function () {
		var t = new eui.Image();
		this.botTit1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup1_i = function () {
		var t = new eui.Group();
		this.headGroup1 = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi1_i(),this.headImg1_i(),this.offline1_i(),this.sitBtn1_i(),this.dalaba1_i(),this.hasReady1_i()];
		return t;
	};
	_proto.headDi1_i = function () {
		var t = new eui.Image();
		this.headDi1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Image();
		this.offline1 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn1_i = function () {
		var t = new eui.Image();
		this.sitBtn1 = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba1_i = function () {
		var t = new eui.Image();
		this.dalaba1 = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady1_i = function () {
		var t = new eui.Image();
		this.hasReady1 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox1_i = function () {
		var t = new eui.Group();
		this.infoBox1 = t;
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect2_i(),this.nickname1_i(),this.point1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup1_i = function () {
		var t = new eui.Group();
		this.specialGroup1 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai12_i(),this.pai14_i(),this.pai15_i(),this.pai16_i(),this.pai17_i(),this.pai18_i(),this.pai19_i(),this.pai20_i(),this.pai21_i(),this.pai22_i(),this.pai23_i(),this.pai24_i(),this.pai25_i(),this.specialTit1_i()];
		return t;
	};
	_proto.pai12_i = function () {
		var t = new eui.Image();
		this.pai12 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai14_i = function () {
		var t = new eui.Image();
		this.pai14 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai15_i = function () {
		var t = new eui.Image();
		this.pai15 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai16_i = function () {
		var t = new eui.Image();
		this.pai16 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai17_i = function () {
		var t = new eui.Image();
		this.pai17 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai18_i = function () {
		var t = new eui.Image();
		this.pai18 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai19_i = function () {
		var t = new eui.Image();
		this.pai19 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai20_i = function () {
		var t = new eui.Image();
		this.pai20 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai21_i = function () {
		var t = new eui.Image();
		this.pai21 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai22_i = function () {
		var t = new eui.Image();
		this.pai22 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai23_i = function () {
		var t = new eui.Image();
		this.pai23 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai24_i = function () {
		var t = new eui.Image();
		this.pai24 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai25_i = function () {
		var t = new eui.Image();
		this.pai25 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit1_i = function () {
		var t = new eui.Image();
		this.specialTit1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup1_i = function () {
		var t = new eui.Group();
		this.lipaiGroup1 = t;
		t.x = -255;
		t.y = 1;
		t.elementsContent = [this.lipai6_i(),this.lipai8_i(),this.lipai9_i(),this.lipai10_i(),this.lipai11_i(),this.lipai12_i(),this.lipai13_i(),this.peipai1_i()];
		return t;
	};
	_proto.lipai6_i = function () {
		var t = new eui.Image();
		this.lipai6 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai8_i = function () {
		var t = new eui.Image();
		this.lipai8 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai9_i = function () {
		var t = new eui.Image();
		this.lipai9 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai10_i = function () {
		var t = new eui.Image();
		this.lipai10 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai11_i = function () {
		var t = new eui.Image();
		this.lipai11 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai12_i = function () {
		var t = new eui.Image();
		this.lipai12 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai13_i = function () {
		var t = new eui.Image();
		this.lipai13 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai1_i = function () {
		var t = new eui.Image();
		this.peipai1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg1_i = function () {
		var t = new eui.Group();
		this.messagebg1 = t;
		t.height = 49;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg1_i(),this.message1_i()];
		return t;
	};
	_proto.mbg1_i = function () {
		var t = new eui.Image();
		this.mbg1 = t;
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
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
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto._bitLabel_myPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint1 = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup1_i = function () {
		var t = new eui.Group();
		this.topGroup1 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -170;
		t.elementsContent = [this.topPoint1_i(),this.topTitle1_i()];
		return t;
	};
	_proto.topPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint1 = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle1_i = function () {
		var t = new eui.Image();
		this.topTitle1 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup1_i = function () {
		var t = new eui.Group();
		this.midGroup1 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -105;
		t.elementsContent = [this.midPoint1_i(),this.midTitle1_i()];
		return t;
	};
	_proto.midPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint1 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle1_i = function () {
		var t = new eui.Image();
		this.midTitle1 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup1_i = function () {
		var t = new eui.Group();
		this.bottomGroup1 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -30;
		t.elementsContent = [this.bottomPoint1_i(),this.botttomTitle1_i()];
		return t;
	};
	_proto.bottomPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint1 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle1_i = function () {
		var t = new eui.Image();
		this.botttomTitle1 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup1_i = function () {
		var t = new eui.Group();
		this.totalGroup1 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = 45;
		t.elementsContent = [this.totalPoint1_i(),this.totalTitle1_i()];
		return t;
	};
	_proto.totalPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint1 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle1_i = function () {
		var t = new eui.Image();
		this.totalTitle1 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.mainGroup1_i = function () {
		var t = new eui.Group();
		this.mainGroup1 = t;
		t.height = 180;
		t.scaleX = 0.72;
		t.scaleY = 0.72;
		t.visible = false;
		t.width = 110;
		t.x = 555;
		t.y = 508;
		t.elementsContent = [this.hasReadyCardsGroup2_i(),this.headGroup2_i(),this.infoBox2_i(),this.specialGroup2_i(),this.lipaiGroup2_i(),this.messagebg2_i(),this._bitLabel_myPoint2_i(),this.topGroup2_i(),this.midGroup2_i(),this.bottomGroup2_i(),this.totalGroup2_i()];
		return t;
	};
	_proto.hasReadyCardsGroup2_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup2 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = -202;
		t.y = -58;
		t.elementsContent = [this.mycardTop2_i(),this.mycardMid2_i(),this.mycardBottom2_i()];
		return t;
	};
	_proto.mycardTop2_i = function () {
		var t = new eui.Group();
		this.mycardTop2 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top6_i(),this.top7_i(),this.top8_i(),this.topTit2_i()];
		return t;
	};
	_proto.top6_i = function () {
		var t = new eui.Image();
		this.top6 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top7_i = function () {
		var t = new eui.Image();
		this.top7 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top8_i = function () {
		var t = new eui.Image();
		this.top8 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit2_i = function () {
		var t = new eui.Image();
		this.topTit2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid2_i = function () {
		var t = new eui.Group();
		this.mycardMid2 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 65;
		t.elementsContent = [this.mid10_i(),this.mid11_i(),this.mid12_i(),this.mid13_i(),this.mid14_i(),this.midTit2_i()];
		return t;
	};
	_proto.mid10_i = function () {
		var t = new eui.Image();
		this.mid10 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid11_i = function () {
		var t = new eui.Image();
		this.mid11 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid12_i = function () {
		var t = new eui.Image();
		this.mid12 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid13_i = function () {
		var t = new eui.Image();
		this.mid13 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid14_i = function () {
		var t = new eui.Image();
		this.mid14 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit2_i = function () {
		var t = new eui.Image();
		this.midTit2 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom2_i = function () {
		var t = new eui.Group();
		this.mycardBottom2 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom10_i(),this.bottom11_i(),this.bottom12_i(),this.bottom13_i(),this.bottom14_i(),this.botTit2_i()];
		return t;
	};
	_proto.bottom10_i = function () {
		var t = new eui.Image();
		this.bottom10 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom11_i = function () {
		var t = new eui.Image();
		this.bottom11 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom12_i = function () {
		var t = new eui.Image();
		this.bottom12 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom13_i = function () {
		var t = new eui.Image();
		this.bottom13 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom14_i = function () {
		var t = new eui.Image();
		this.bottom14 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit2_i = function () {
		var t = new eui.Image();
		this.botTit2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup2_i = function () {
		var t = new eui.Group();
		this.headGroup2 = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi2_i(),this.headImg2_i(),this.offline2_i(),this.sitBtn2_i(),this.dalaba2_i(),this.hasReady2_i()];
		return t;
	};
	_proto.headDi2_i = function () {
		var t = new eui.Image();
		this.headDi2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Image();
		this.offline2 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn2_i = function () {
		var t = new eui.Image();
		this.sitBtn2 = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba2_i = function () {
		var t = new eui.Image();
		this.dalaba2 = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady2_i = function () {
		var t = new eui.Image();
		this.hasReady2 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox2_i = function () {
		var t = new eui.Group();
		this.infoBox2 = t;
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect3_i(),this.nickname2_i(),this.point2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup2_i = function () {
		var t = new eui.Group();
		this.specialGroup2 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai26_i(),this.pai27_i(),this.pai28_i(),this.pai29_i(),this.pai30_i(),this.pai31_i(),this.pai32_i(),this.pai33_i(),this.pai34_i(),this.pai35_i(),this.pai36_i(),this.pai37_i(),this.pai38_i(),this.specialTit2_i()];
		return t;
	};
	_proto.pai26_i = function () {
		var t = new eui.Image();
		this.pai26 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai27_i = function () {
		var t = new eui.Image();
		this.pai27 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai28_i = function () {
		var t = new eui.Image();
		this.pai28 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai29_i = function () {
		var t = new eui.Image();
		this.pai29 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai30_i = function () {
		var t = new eui.Image();
		this.pai30 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai31_i = function () {
		var t = new eui.Image();
		this.pai31 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai32_i = function () {
		var t = new eui.Image();
		this.pai32 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai33_i = function () {
		var t = new eui.Image();
		this.pai33 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai34_i = function () {
		var t = new eui.Image();
		this.pai34 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai35_i = function () {
		var t = new eui.Image();
		this.pai35 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai36_i = function () {
		var t = new eui.Image();
		this.pai36 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai37_i = function () {
		var t = new eui.Image();
		this.pai37 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai38_i = function () {
		var t = new eui.Image();
		this.pai38 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit2_i = function () {
		var t = new eui.Image();
		this.specialTit2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup2_i = function () {
		var t = new eui.Group();
		this.lipaiGroup2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -196;
		t.y = 1;
		t.elementsContent = [this.lipai14_i(),this.lipai15_i(),this.lipai16_i(),this.lipai17_i(),this.lipai18_i(),this.lipai19_i(),this.lipai20_i(),this.peipai2_i()];
		return t;
	};
	_proto.lipai14_i = function () {
		var t = new eui.Image();
		this.lipai14 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai15_i = function () {
		var t = new eui.Image();
		this.lipai15 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai16_i = function () {
		var t = new eui.Image();
		this.lipai16 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai17_i = function () {
		var t = new eui.Image();
		this.lipai17 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai18_i = function () {
		var t = new eui.Image();
		this.lipai18 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai19_i = function () {
		var t = new eui.Image();
		this.lipai19 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai20_i = function () {
		var t = new eui.Image();
		this.lipai20 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai2_i = function () {
		var t = new eui.Image();
		this.peipai2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg2_i = function () {
		var t = new eui.Group();
		this.messagebg2 = t;
		t.height = 49;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg2_i(),this.message2_i()];
		return t;
	};
	_proto.mbg2_i = function () {
		var t = new eui.Image();
		this.mbg2 = t;
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
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
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto._bitLabel_myPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint2 = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup2_i = function () {
		var t = new eui.Group();
		this.topGroup2 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -170;
		t.elementsContent = [this.topPoint2_i(),this.topTitle2_i()];
		return t;
	};
	_proto.topPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint2 = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle2_i = function () {
		var t = new eui.Image();
		this.topTitle2 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup2_i = function () {
		var t = new eui.Group();
		this.midGroup2 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -105;
		t.elementsContent = [this.midPoint2_i(),this.midTitle2_i()];
		return t;
	};
	_proto.midPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint2 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle2_i = function () {
		var t = new eui.Image();
		this.midTitle2 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup2_i = function () {
		var t = new eui.Group();
		this.bottomGroup2 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -30;
		t.elementsContent = [this.bottomPoint2_i(),this.botttomTitle2_i()];
		return t;
	};
	_proto.bottomPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint2 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle2_i = function () {
		var t = new eui.Image();
		this.botttomTitle2 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup2_i = function () {
		var t = new eui.Group();
		this.totalGroup2 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = 45;
		t.elementsContent = [this.totalPoint2_i(),this.totalTitle2_i()];
		return t;
	};
	_proto.totalPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint2 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle2_i = function () {
		var t = new eui.Image();
		this.totalTitle2 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.mainGroup2_i = function () {
		var t = new eui.Group();
		this.mainGroup2 = t;
		t.height = 180;
		t.scaleX = 0.72;
		t.scaleY = 0.72;
		t.visible = false;
		t.width = 110;
		t.x = 555;
		t.y = 302;
		t.elementsContent = [this.hasReadyCardsGroup3_i(),this.headGroup3_i(),this.infoBox3_i(),this.specialGroup3_i(),this.lipaiGroup3_i(),this.messagebg3_i(),this._bitLabel_myPoint3_i(),this.topGroup3_i(),this.midGroup3_i(),this.bottomGroup3_i(),this.totalGroup3_i()];
		return t;
	};
	_proto.hasReadyCardsGroup3_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup3 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = -202;
		t.y = -58;
		t.elementsContent = [this.mycardTop3_i(),this.mycardMid3_i(),this.mycardBottom3_i()];
		return t;
	};
	_proto.mycardTop3_i = function () {
		var t = new eui.Group();
		this.mycardTop3 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top9_i(),this.top10_i(),this.top11_i(),this.topTit3_i()];
		return t;
	};
	_proto.top9_i = function () {
		var t = new eui.Image();
		this.top9 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top10_i = function () {
		var t = new eui.Image();
		this.top10 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top11_i = function () {
		var t = new eui.Image();
		this.top11 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit3_i = function () {
		var t = new eui.Image();
		this.topTit3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid3_i = function () {
		var t = new eui.Group();
		this.mycardMid3 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 65;
		t.elementsContent = [this.mid15_i(),this.mid16_i(),this.mid17_i(),this.mid18_i(),this.mid19_i(),this.midTit3_i()];
		return t;
	};
	_proto.mid15_i = function () {
		var t = new eui.Image();
		this.mid15 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid16_i = function () {
		var t = new eui.Image();
		this.mid16 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid17_i = function () {
		var t = new eui.Image();
		this.mid17 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid18_i = function () {
		var t = new eui.Image();
		this.mid18 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid19_i = function () {
		var t = new eui.Image();
		this.mid19 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit3_i = function () {
		var t = new eui.Image();
		this.midTit3 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom3_i = function () {
		var t = new eui.Group();
		this.mycardBottom3 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom15_i(),this.bottom16_i(),this.bottom17_i(),this.bottom18_i(),this.bottom19_i(),this.botTit3_i()];
		return t;
	};
	_proto.bottom15_i = function () {
		var t = new eui.Image();
		this.bottom15 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom16_i = function () {
		var t = new eui.Image();
		this.bottom16 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom17_i = function () {
		var t = new eui.Image();
		this.bottom17 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom18_i = function () {
		var t = new eui.Image();
		this.bottom18 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom19_i = function () {
		var t = new eui.Image();
		this.bottom19 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit3_i = function () {
		var t = new eui.Image();
		this.botTit3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup3_i = function () {
		var t = new eui.Group();
		this.headGroup3 = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi3_i(),this.headImg3_i(),this.offline3_i(),this.sitBtn3_i(),this.dalaba3_i(),this.hasReady3_i()];
		return t;
	};
	_proto.headDi3_i = function () {
		var t = new eui.Image();
		this.headDi3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline3_i = function () {
		var t = new eui.Image();
		this.offline3 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn3_i = function () {
		var t = new eui.Image();
		this.sitBtn3 = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba3_i = function () {
		var t = new eui.Image();
		this.dalaba3 = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady3_i = function () {
		var t = new eui.Image();
		this.hasReady3 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox3_i = function () {
		var t = new eui.Group();
		this.infoBox3 = t;
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect4_i(),this.nickname3_i(),this.point3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup3_i = function () {
		var t = new eui.Group();
		this.specialGroup3 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai39_i(),this.pai40_i(),this.pai41_i(),this.pai42_i(),this.pai43_i(),this.pai44_i(),this.pai45_i(),this.pai46_i(),this.pai47_i(),this.pai48_i(),this.pai49_i(),this.pai50_i(),this.pai51_i(),this.specialTit3_i()];
		return t;
	};
	_proto.pai39_i = function () {
		var t = new eui.Image();
		this.pai39 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai40_i = function () {
		var t = new eui.Image();
		this.pai40 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai41_i = function () {
		var t = new eui.Image();
		this.pai41 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai42_i = function () {
		var t = new eui.Image();
		this.pai42 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai43_i = function () {
		var t = new eui.Image();
		this.pai43 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai44_i = function () {
		var t = new eui.Image();
		this.pai44 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai45_i = function () {
		var t = new eui.Image();
		this.pai45 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai46_i = function () {
		var t = new eui.Image();
		this.pai46 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai47_i = function () {
		var t = new eui.Image();
		this.pai47 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai48_i = function () {
		var t = new eui.Image();
		this.pai48 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai49_i = function () {
		var t = new eui.Image();
		this.pai49 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai50_i = function () {
		var t = new eui.Image();
		this.pai50 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai51_i = function () {
		var t = new eui.Image();
		this.pai51 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit3_i = function () {
		var t = new eui.Image();
		this.specialTit3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup3_i = function () {
		var t = new eui.Group();
		this.lipaiGroup3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -196;
		t.y = 1;
		t.elementsContent = [this.lipai21_i(),this.lipai22_i(),this.lipai23_i(),this.lipai24_i(),this.lipai25_i(),this.lipai26_i(),this.lipai27_i(),this.peipai3_i()];
		return t;
	};
	_proto.lipai21_i = function () {
		var t = new eui.Image();
		this.lipai21 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai22_i = function () {
		var t = new eui.Image();
		this.lipai22 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai23_i = function () {
		var t = new eui.Image();
		this.lipai23 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai24_i = function () {
		var t = new eui.Image();
		this.lipai24 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai25_i = function () {
		var t = new eui.Image();
		this.lipai25 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai26_i = function () {
		var t = new eui.Image();
		this.lipai26 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai27_i = function () {
		var t = new eui.Image();
		this.lipai27 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai3_i = function () {
		var t = new eui.Image();
		this.peipai3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg3_i = function () {
		var t = new eui.Group();
		this.messagebg3 = t;
		t.height = 49;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg3_i(),this.message3_i()];
		return t;
	};
	_proto.mbg3_i = function () {
		var t = new eui.Image();
		this.mbg3 = t;
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
	_proto._bitLabel_myPoint3_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint3 = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup3_i = function () {
		var t = new eui.Group();
		this.topGroup3 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -170;
		t.elementsContent = [this.topPoint3_i(),this.topTitle3_i()];
		return t;
	};
	_proto.topPoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint3 = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle3_i = function () {
		var t = new eui.Image();
		this.topTitle3 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup3_i = function () {
		var t = new eui.Group();
		this.midGroup3 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -105;
		t.elementsContent = [this.midPoint3_i(),this.midTitle3_i()];
		return t;
	};
	_proto.midPoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint3 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle3_i = function () {
		var t = new eui.Image();
		this.midTitle3 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup3_i = function () {
		var t = new eui.Group();
		this.bottomGroup3 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -30;
		t.elementsContent = [this.bottomPoint3_i(),this.botttomTitle3_i()];
		return t;
	};
	_proto.bottomPoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint3 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle3_i = function () {
		var t = new eui.Image();
		this.botttomTitle3 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup3_i = function () {
		var t = new eui.Group();
		this.totalGroup3 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = 45;
		t.elementsContent = [this.totalPoint3_i(),this.totalTitle3_i()];
		return t;
	};
	_proto.totalPoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint3 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle3_i = function () {
		var t = new eui.Image();
		this.totalTitle3 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.mainGroup3_i = function () {
		var t = new eui.Group();
		this.mainGroup3 = t;
		t.height = 180;
		t.scaleX = 0.72;
		t.scaleY = 0.72;
		t.visible = false;
		t.width = 110;
		t.x = 150;
		t.y = 128;
		t.elementsContent = [this.hasReadyCardsGroup4_i(),this.headGroup4_i(),this.infoBox4_i(),this.specialGroup4_i(),this.lipaiGroup4_i(),this.messagebg4_i(),this._bitLabel_myPoint4_i(),this.topGroup4_i(),this.midGroup4_i(),this.bottomGroup4_i(),this.totalGroup4_i()];
		return t;
	};
	_proto.hasReadyCardsGroup4_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup4 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 129;
		t.y = -58;
		t.elementsContent = [this.mycardTop4_i(),this.mycardMid4_i(),this.mycardBottom4_i()];
		return t;
	};
	_proto.mycardTop4_i = function () {
		var t = new eui.Group();
		this.mycardTop4 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top12_i(),this.top13_i(),this.top14_i(),this.topTit4_i()];
		return t;
	};
	_proto.top12_i = function () {
		var t = new eui.Image();
		this.top12 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top13_i = function () {
		var t = new eui.Image();
		this.top13 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top14_i = function () {
		var t = new eui.Image();
		this.top14 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit4_i = function () {
		var t = new eui.Image();
		this.topTit4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid4_i = function () {
		var t = new eui.Group();
		this.mycardMid4 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 65;
		t.elementsContent = [this.mid20_i(),this.mid21_i(),this.mid22_i(),this.mid23_i(),this.mid24_i(),this.midTit4_i()];
		return t;
	};
	_proto.mid20_i = function () {
		var t = new eui.Image();
		this.mid20 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid21_i = function () {
		var t = new eui.Image();
		this.mid21 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid22_i = function () {
		var t = new eui.Image();
		this.mid22 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid23_i = function () {
		var t = new eui.Image();
		this.mid23 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid24_i = function () {
		var t = new eui.Image();
		this.mid24 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit4_i = function () {
		var t = new eui.Image();
		this.midTit4 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom4_i = function () {
		var t = new eui.Group();
		this.mycardBottom4 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom20_i(),this.bottom21_i(),this.bottom22_i(),this.bottom23_i(),this.bottom24_i(),this.botTit4_i()];
		return t;
	};
	_proto.bottom20_i = function () {
		var t = new eui.Image();
		this.bottom20 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom21_i = function () {
		var t = new eui.Image();
		this.bottom21 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom22_i = function () {
		var t = new eui.Image();
		this.bottom22 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom23_i = function () {
		var t = new eui.Image();
		this.bottom23 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom24_i = function () {
		var t = new eui.Image();
		this.bottom24 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit4_i = function () {
		var t = new eui.Image();
		this.botTit4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup4_i = function () {
		var t = new eui.Group();
		this.headGroup4 = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi4_i(),this.headImg4_i(),this.offline4_i(),this.sitBtn4_i(),this.dalaba4_i(),this.hasReady4_i()];
		return t;
	};
	_proto.headDi4_i = function () {
		var t = new eui.Image();
		this.headDi4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline4_i = function () {
		var t = new eui.Image();
		this.offline4 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn4_i = function () {
		var t = new eui.Image();
		this.sitBtn4 = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba4_i = function () {
		var t = new eui.Image();
		this.dalaba4 = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady4_i = function () {
		var t = new eui.Image();
		this.hasReady4 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox4_i = function () {
		var t = new eui.Group();
		this.infoBox4 = t;
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect5_i(),this.nickname4_i(),this.point4_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.Label();
		this.point4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup4_i = function () {
		var t = new eui.Group();
		this.specialGroup4 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai52_i(),this.pai53_i(),this.pai54_i(),this.pai55_i(),this.pai56_i(),this.pai57_i(),this.pai58_i(),this.pai59_i(),this.pai60_i(),this.pai61_i(),this.pai62_i(),this.pai63_i(),this.pai64_i(),this.specialTit4_i()];
		return t;
	};
	_proto.pai52_i = function () {
		var t = new eui.Image();
		this.pai52 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai53_i = function () {
		var t = new eui.Image();
		this.pai53 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai54_i = function () {
		var t = new eui.Image();
		this.pai54 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai55_i = function () {
		var t = new eui.Image();
		this.pai55 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai56_i = function () {
		var t = new eui.Image();
		this.pai56 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai57_i = function () {
		var t = new eui.Image();
		this.pai57 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai58_i = function () {
		var t = new eui.Image();
		this.pai58 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai59_i = function () {
		var t = new eui.Image();
		this.pai59 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai60_i = function () {
		var t = new eui.Image();
		this.pai60 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai61_i = function () {
		var t = new eui.Image();
		this.pai61 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai62_i = function () {
		var t = new eui.Image();
		this.pai62 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai63_i = function () {
		var t = new eui.Image();
		this.pai63 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai64_i = function () {
		var t = new eui.Image();
		this.pai64 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit4_i = function () {
		var t = new eui.Image();
		this.specialTit4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup4_i = function () {
		var t = new eui.Group();
		this.lipaiGroup4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 116;
		t.y = 47;
		t.elementsContent = [this.lipai28_i(),this.lipai29_i(),this.lipai30_i(),this.lipai31_i(),this.lipai32_i(),this.lipai33_i(),this.lipai34_i(),this.peipai4_i()];
		return t;
	};
	_proto.lipai28_i = function () {
		var t = new eui.Image();
		this.lipai28 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai29_i = function () {
		var t = new eui.Image();
		this.lipai29 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai30_i = function () {
		var t = new eui.Image();
		this.lipai30 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai31_i = function () {
		var t = new eui.Image();
		this.lipai31 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai32_i = function () {
		var t = new eui.Image();
		this.lipai32 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai33_i = function () {
		var t = new eui.Image();
		this.lipai33 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai34_i = function () {
		var t = new eui.Image();
		this.lipai34 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai4_i = function () {
		var t = new eui.Image();
		this.peipai4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg4_i = function () {
		var t = new eui.Group();
		this.messagebg4 = t;
		t.height = 49;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg4_i(),this.message4_i()];
		return t;
	};
	_proto.mbg4_i = function () {
		var t = new eui.Image();
		this.mbg4 = t;
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
	_proto._bitLabel_myPoint4_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint4 = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup4_i = function () {
		var t = new eui.Group();
		this.topGroup4 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -170;
		t.elementsContent = [this.topPoint4_i(),this.topTitle4_i()];
		return t;
	};
	_proto.topPoint4_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint4 = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle4_i = function () {
		var t = new eui.Image();
		this.topTitle4 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup4_i = function () {
		var t = new eui.Group();
		this.midGroup4 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -105;
		t.elementsContent = [this.midPoint4_i(),this.midTitle4_i()];
		return t;
	};
	_proto.midPoint4_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint4 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle4_i = function () {
		var t = new eui.Image();
		this.midTitle4 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup4_i = function () {
		var t = new eui.Group();
		this.bottomGroup4 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -30;
		t.elementsContent = [this.bottomPoint4_i(),this.botttomTitle4_i()];
		return t;
	};
	_proto.bottomPoint4_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint4 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle4_i = function () {
		var t = new eui.Image();
		this.botttomTitle4 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup4_i = function () {
		var t = new eui.Group();
		this.totalGroup4 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = 45;
		t.elementsContent = [this.totalPoint4_i(),this.totalTitle4_i()];
		return t;
	};
	_proto.totalPoint4_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint4 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle4_i = function () {
		var t = new eui.Image();
		this.totalTitle4 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.mainGroup4_i = function () {
		var t = new eui.Group();
		this.mainGroup4 = t;
		t.height = 180;
		t.scaleX = 0.72;
		t.scaleY = 0.72;
		t.visible = false;
		t.width = 110;
		t.x = 5;
		t.y = 302;
		t.elementsContent = [this.hasReadyCardsGroup5_i(),this.headGroup5_i(),this.infoBox5_i(),this.specialGroup5_i(),this.lipaiGroup5_i(),this.messagebg5_i(),this._bitLabel_myPoint5_i(),this.topGroup5_i(),this.midGroup5_i(),this.bottomGroup5_i(),this.totalGroup5_i()];
		return t;
	};
	_proto.hasReadyCardsGroup5_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup5 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 107;
		t.y = -58;
		t.elementsContent = [this.mycardTop5_i(),this.mycardMid5_i(),this.mycardBottom5_i()];
		return t;
	};
	_proto.mycardTop5_i = function () {
		var t = new eui.Group();
		this.mycardTop5 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top15_i(),this.top16_i(),this.top17_i(),this.topTit5_i()];
		return t;
	};
	_proto.top15_i = function () {
		var t = new eui.Image();
		this.top15 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top16_i = function () {
		var t = new eui.Image();
		this.top16 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top17_i = function () {
		var t = new eui.Image();
		this.top17 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit5_i = function () {
		var t = new eui.Image();
		this.topTit5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid5_i = function () {
		var t = new eui.Group();
		this.mycardMid5 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 65;
		t.elementsContent = [this.mid25_i(),this.mid26_i(),this.mid27_i(),this.mid28_i(),this.mid29_i(),this.midTit5_i()];
		return t;
	};
	_proto.mid25_i = function () {
		var t = new eui.Image();
		this.mid25 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid26_i = function () {
		var t = new eui.Image();
		this.mid26 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid27_i = function () {
		var t = new eui.Image();
		this.mid27 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid28_i = function () {
		var t = new eui.Image();
		this.mid28 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid29_i = function () {
		var t = new eui.Image();
		this.mid29 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit5_i = function () {
		var t = new eui.Image();
		this.midTit5 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom5_i = function () {
		var t = new eui.Group();
		this.mycardBottom5 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom25_i(),this.bottom26_i(),this.bottom27_i(),this.bottom28_i(),this.bottom29_i(),this.botTit5_i()];
		return t;
	};
	_proto.bottom25_i = function () {
		var t = new eui.Image();
		this.bottom25 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom26_i = function () {
		var t = new eui.Image();
		this.bottom26 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom27_i = function () {
		var t = new eui.Image();
		this.bottom27 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom28_i = function () {
		var t = new eui.Image();
		this.bottom28 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom29_i = function () {
		var t = new eui.Image();
		this.bottom29 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit5_i = function () {
		var t = new eui.Image();
		this.botTit5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup5_i = function () {
		var t = new eui.Group();
		this.headGroup5 = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi5_i(),this.headImg5_i(),this.offline5_i(),this.sitBtn5_i(),this.dalaba5_i(),this.hasReady5_i()];
		return t;
	};
	_proto.headDi5_i = function () {
		var t = new eui.Image();
		this.headDi5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg5_i = function () {
		var t = new eui.Image();
		this.headImg5 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline5_i = function () {
		var t = new eui.Image();
		this.offline5 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn5_i = function () {
		var t = new eui.Image();
		this.sitBtn5 = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba5_i = function () {
		var t = new eui.Image();
		this.dalaba5 = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady5_i = function () {
		var t = new eui.Image();
		this.hasReady5 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox5_i = function () {
		var t = new eui.Group();
		this.infoBox5 = t;
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect6_i(),this.nickname5_i(),this.point5_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point5_i = function () {
		var t = new eui.Label();
		this.point5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup5_i = function () {
		var t = new eui.Group();
		this.specialGroup5 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai65_i(),this.pai66_i(),this.pai67_i(),this.pai68_i(),this.pai69_i(),this.pai70_i(),this.pai71_i(),this.pai72_i(),this.pai73_i(),this.pai74_i(),this.pai75_i(),this.pai76_i(),this.pai77_i(),this.specialTit5_i()];
		return t;
	};
	_proto.pai65_i = function () {
		var t = new eui.Image();
		this.pai65 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai66_i = function () {
		var t = new eui.Image();
		this.pai66 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai67_i = function () {
		var t = new eui.Image();
		this.pai67 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai68_i = function () {
		var t = new eui.Image();
		this.pai68 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai69_i = function () {
		var t = new eui.Image();
		this.pai69 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai70_i = function () {
		var t = new eui.Image();
		this.pai70 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai71_i = function () {
		var t = new eui.Image();
		this.pai71 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai72_i = function () {
		var t = new eui.Image();
		this.pai72 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai73_i = function () {
		var t = new eui.Image();
		this.pai73 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai74_i = function () {
		var t = new eui.Image();
		this.pai74 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai75_i = function () {
		var t = new eui.Image();
		this.pai75 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai76_i = function () {
		var t = new eui.Image();
		this.pai76 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai77_i = function () {
		var t = new eui.Image();
		this.pai77 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit5_i = function () {
		var t = new eui.Image();
		this.specialTit5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup5_i = function () {
		var t = new eui.Group();
		this.lipaiGroup5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 110;
		t.y = 1;
		t.elementsContent = [this.lipai35_i(),this.lipai36_i(),this.lipai37_i(),this.lipai38_i(),this.lipai39_i(),this.lipai40_i(),this.lipai41_i(),this.peipai5_i()];
		return t;
	};
	_proto.lipai35_i = function () {
		var t = new eui.Image();
		this.lipai35 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai36_i = function () {
		var t = new eui.Image();
		this.lipai36 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai37_i = function () {
		var t = new eui.Image();
		this.lipai37 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai38_i = function () {
		var t = new eui.Image();
		this.lipai38 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai39_i = function () {
		var t = new eui.Image();
		this.lipai39 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai40_i = function () {
		var t = new eui.Image();
		this.lipai40 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai41_i = function () {
		var t = new eui.Image();
		this.lipai41 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai5_i = function () {
		var t = new eui.Image();
		this.peipai5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg5_i = function () {
		var t = new eui.Group();
		this.messagebg5 = t;
		t.height = 49;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg5_i(),this.message5_i()];
		return t;
	};
	_proto.mbg5_i = function () {
		var t = new eui.Image();
		this.mbg5 = t;
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
	_proto._bitLabel_myPoint5_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint5 = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup5_i = function () {
		var t = new eui.Group();
		this.topGroup5 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -170;
		t.elementsContent = [this.topPoint5_i(),this.topTitle5_i()];
		return t;
	};
	_proto.topPoint5_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint5 = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle5_i = function () {
		var t = new eui.Image();
		this.topTitle5 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup5_i = function () {
		var t = new eui.Group();
		this.midGroup5 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -105;
		t.elementsContent = [this.midPoint5_i(),this.midTitle5_i()];
		return t;
	};
	_proto.midPoint5_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint5 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle5_i = function () {
		var t = new eui.Image();
		this.midTitle5 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup5_i = function () {
		var t = new eui.Group();
		this.bottomGroup5 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -30;
		t.elementsContent = [this.bottomPoint5_i(),this.botttomTitle5_i()];
		return t;
	};
	_proto.bottomPoint5_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint5 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle5_i = function () {
		var t = new eui.Image();
		this.botttomTitle5 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup5_i = function () {
		var t = new eui.Group();
		this.totalGroup5 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = 45;
		t.elementsContent = [this.totalPoint5_i(),this.totalTitle5_i()];
		return t;
	};
	_proto.totalPoint5_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint5 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle5_i = function () {
		var t = new eui.Image();
		this.totalTitle5 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.mainGroup5_i = function () {
		var t = new eui.Group();
		this.mainGroup5 = t;
		t.height = 180;
		t.scaleX = 0.72;
		t.scaleY = 0.72;
		t.visible = false;
		t.width = 110;
		t.x = 5;
		t.y = 506;
		t.elementsContent = [this.hasReadyCardsGroup6_i(),this.headGroup6_i(),this.infoBox6_i(),this.specialGroup6_i(),this.lipaiGroup6_i(),this.messagebg6_i(),this._bitLabel_myPoint6_i(),this.topGroup6_i(),this.midGroup6_i(),this.bottomGroup6_i(),this.totalGroup6_i()];
		return t;
	};
	_proto.hasReadyCardsGroup6_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup6 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 107;
		t.y = -58;
		t.elementsContent = [this.mycardTop6_i(),this.mycardMid6_i(),this.mycardBottom6_i()];
		return t;
	};
	_proto.mycardTop6_i = function () {
		var t = new eui.Group();
		this.mycardTop6 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top18_i(),this.top19_i(),this.top20_i(),this.topTit6_i()];
		return t;
	};
	_proto.top18_i = function () {
		var t = new eui.Image();
		this.top18 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top19_i = function () {
		var t = new eui.Image();
		this.top19 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top20_i = function () {
		var t = new eui.Image();
		this.top20 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit6_i = function () {
		var t = new eui.Image();
		this.topTit6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid6_i = function () {
		var t = new eui.Group();
		this.mycardMid6 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 65;
		t.elementsContent = [this.mid30_i(),this.mid31_i(),this.mid32_i(),this.mid33_i(),this.mid34_i(),this.midTit6_i()];
		return t;
	};
	_proto.mid30_i = function () {
		var t = new eui.Image();
		this.mid30 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid31_i = function () {
		var t = new eui.Image();
		this.mid31 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid32_i = function () {
		var t = new eui.Image();
		this.mid32 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid33_i = function () {
		var t = new eui.Image();
		this.mid33 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid34_i = function () {
		var t = new eui.Image();
		this.mid34 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit6_i = function () {
		var t = new eui.Image();
		this.midTit6 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom6_i = function () {
		var t = new eui.Group();
		this.mycardBottom6 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom30_i(),this.bottom31_i(),this.bottom32_i(),this.bottom33_i(),this.bottom34_i(),this.botTit6_i()];
		return t;
	};
	_proto.bottom30_i = function () {
		var t = new eui.Image();
		this.bottom30 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom31_i = function () {
		var t = new eui.Image();
		this.bottom31 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom32_i = function () {
		var t = new eui.Image();
		this.bottom32 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom33_i = function () {
		var t = new eui.Image();
		this.bottom33 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom34_i = function () {
		var t = new eui.Image();
		this.bottom34 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit6_i = function () {
		var t = new eui.Image();
		this.botTit6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup6_i = function () {
		var t = new eui.Group();
		this.headGroup6 = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi6_i(),this.headImg6_i(),this.offline6_i(),this.sitBtn6_i(),this.dalaba6_i(),this.hasReady6_i()];
		return t;
	};
	_proto.headDi6_i = function () {
		var t = new eui.Image();
		this.headDi6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg6_i = function () {
		var t = new eui.Image();
		this.headImg6 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline6_i = function () {
		var t = new eui.Image();
		this.offline6 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn6_i = function () {
		var t = new eui.Image();
		this.sitBtn6 = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba6_i = function () {
		var t = new eui.Image();
		this.dalaba6 = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady6_i = function () {
		var t = new eui.Image();
		this.hasReady6 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox6_i = function () {
		var t = new eui.Group();
		this.infoBox6 = t;
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect7_i(),this.nickname6_i(),this.point6_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname6_i = function () {
		var t = new eui.Label();
		this.nickname6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point6_i = function () {
		var t = new eui.Label();
		this.point6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup6_i = function () {
		var t = new eui.Group();
		this.specialGroup6 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai78_i(),this.pai79_i(),this.pai80_i(),this.pai81_i(),this.pai82_i(),this.pai83_i(),this.pai84_i(),this.pai85_i(),this.pai86_i(),this.pai87_i(),this.pai88_i(),this.pai89_i(),this.pai90_i(),this.specialTit6_i()];
		return t;
	};
	_proto.pai78_i = function () {
		var t = new eui.Image();
		this.pai78 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai79_i = function () {
		var t = new eui.Image();
		this.pai79 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai80_i = function () {
		var t = new eui.Image();
		this.pai80 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai81_i = function () {
		var t = new eui.Image();
		this.pai81 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai82_i = function () {
		var t = new eui.Image();
		this.pai82 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai83_i = function () {
		var t = new eui.Image();
		this.pai83 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai84_i = function () {
		var t = new eui.Image();
		this.pai84 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai85_i = function () {
		var t = new eui.Image();
		this.pai85 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai86_i = function () {
		var t = new eui.Image();
		this.pai86 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai87_i = function () {
		var t = new eui.Image();
		this.pai87 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai88_i = function () {
		var t = new eui.Image();
		this.pai88 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai89_i = function () {
		var t = new eui.Image();
		this.pai89 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai90_i = function () {
		var t = new eui.Image();
		this.pai90 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit6_i = function () {
		var t = new eui.Image();
		this.specialTit6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup6_i = function () {
		var t = new eui.Group();
		this.lipaiGroup6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 110;
		t.y = 1;
		t.elementsContent = [this.lipai42_i(),this.lipai43_i(),this.lipai44_i(),this.lipai45_i(),this.lipai46_i(),this.lipai47_i(),this.lipai48_i(),this.peipai6_i()];
		return t;
	};
	_proto.lipai42_i = function () {
		var t = new eui.Image();
		this.lipai42 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai43_i = function () {
		var t = new eui.Image();
		this.lipai43 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai44_i = function () {
		var t = new eui.Image();
		this.lipai44 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai45_i = function () {
		var t = new eui.Image();
		this.lipai45 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai46_i = function () {
		var t = new eui.Image();
		this.lipai46 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai47_i = function () {
		var t = new eui.Image();
		this.lipai47 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai48_i = function () {
		var t = new eui.Image();
		this.lipai48 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai6_i = function () {
		var t = new eui.Image();
		this.peipai6 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg6_i = function () {
		var t = new eui.Group();
		this.messagebg6 = t;
		t.height = 49;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg6_i(),this.message6_i()];
		return t;
	};
	_proto.mbg6_i = function () {
		var t = new eui.Image();
		this.mbg6 = t;
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message6_i = function () {
		var t = new eui.Label();
		this.message6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto._bitLabel_myPoint6_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint6 = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup6_i = function () {
		var t = new eui.Group();
		this.topGroup6 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -170;
		t.elementsContent = [this.topPoint6_i(),this.topTitle6_i()];
		return t;
	};
	_proto.topPoint6_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint6 = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle6_i = function () {
		var t = new eui.Image();
		this.topTitle6 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup6_i = function () {
		var t = new eui.Group();
		this.midGroup6 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -105;
		t.elementsContent = [this.midPoint6_i(),this.midTitle6_i()];
		return t;
	};
	_proto.midPoint6_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint6 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle6_i = function () {
		var t = new eui.Image();
		this.midTitle6 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup6_i = function () {
		var t = new eui.Group();
		this.bottomGroup6 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -30;
		t.elementsContent = [this.bottomPoint6_i(),this.botttomTitle6_i()];
		return t;
	};
	_proto.bottomPoint6_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint6 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle6_i = function () {
		var t = new eui.Image();
		this.botttomTitle6 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup6_i = function () {
		var t = new eui.Group();
		this.totalGroup6 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = 45;
		t.elementsContent = [this.totalPoint6_i(),this.totalTitle6_i()];
		return t;
	};
	_proto.totalPoint6_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint6 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle6_i = function () {
		var t = new eui.Image();
		this.totalTitle6 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.mainGroup6_i = function () {
		var t = new eui.Group();
		this.mainGroup6 = t;
		t.height = 180;
		t.scaleX = 0.72;
		t.scaleY = 0.72;
		t.visible = false;
		t.width = 110;
		t.x = 5;
		t.y = 710;
		t.elementsContent = [this.hasReadyCardsGroup7_i(),this.headGroup7_i(),this.infoBox7_i(),this.specialGroup7_i(),this.lipaiGroup7_i(),this.messagebg7_i(),this._bitLabel_myPoint7_i(),this.topGroup7_i(),this.midGroup7_i(),this.bottomGroup7_i(),this.totalGroup7_i()];
		return t;
	};
	_proto.hasReadyCardsGroup7_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup7 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = 115;
		t.y = -58;
		t.elementsContent = [this.mycardTop7_i(),this.mycardMid7_i(),this.mycardBottom7_i()];
		return t;
	};
	_proto.mycardTop7_i = function () {
		var t = new eui.Group();
		this.mycardTop7 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top21_i(),this.top22_i(),this.top23_i(),this.topTit7_i()];
		return t;
	};
	_proto.top21_i = function () {
		var t = new eui.Image();
		this.top21 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 62;
		t.y = 110.32;
		return t;
	};
	_proto.top22_i = function () {
		var t = new eui.Image();
		this.top22 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top23_i = function () {
		var t = new eui.Image();
		this.top23 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit7_i = function () {
		var t = new eui.Image();
		this.topTit7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardMid7_i = function () {
		var t = new eui.Group();
		this.mycardMid7 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 65;
		t.elementsContent = [this.mid35_i(),this.mid36_i(),this.mid37_i(),this.mid38_i(),this.mid39_i(),this.midTit7_i()];
		return t;
	};
	_proto.mid35_i = function () {
		var t = new eui.Image();
		this.mid35 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.mid36_i = function () {
		var t = new eui.Image();
		this.mid36 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.mid37_i = function () {
		var t = new eui.Image();
		this.mid37 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid38_i = function () {
		var t = new eui.Image();
		this.mid38 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.mid39_i = function () {
		var t = new eui.Image();
		this.mid39 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit7_i = function () {
		var t = new eui.Image();
		this.midTit7 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 55;
		return t;
	};
	_proto.mycardBottom7_i = function () {
		var t = new eui.Group();
		this.mycardBottom7 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom35_i(),this.bottom36_i(),this.bottom37_i(),this.bottom38_i(),this.bottom39_i(),this.botTit7_i()];
		return t;
	};
	_proto.bottom35_i = function () {
		var t = new eui.Image();
		this.bottom35 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 75;
		t.y = 114.53;
		return t;
	};
	_proto.bottom36_i = function () {
		var t = new eui.Image();
		this.bottom36 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom37_i = function () {
		var t = new eui.Image();
		this.bottom37 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom38_i = function () {
		var t = new eui.Image();
		this.bottom38 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 135;
		t.y = 113.53;
		return t;
	};
	_proto.bottom39_i = function () {
		var t = new eui.Image();
		this.bottom39 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit7_i = function () {
		var t = new eui.Image();
		this.botTit7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.y = 57;
		return t;
	};
	_proto.headGroup7_i = function () {
		var t = new eui.Group();
		this.headGroup7 = t;
		t.height = 107;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 106;
		t.y = 0;
		t.elementsContent = [this.headDi7_i(),this.headImg7_i(),this.offline7_i(),this.sitBtn7_i(),this.dalaba7_i(),this.hasReady7_i()];
		return t;
	};
	_proto.headDi7_i = function () {
		var t = new eui.Image();
		this.headDi7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg7_i = function () {
		var t = new eui.Image();
		this.headImg7 = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.offline7_i = function () {
		var t = new eui.Image();
		this.offline7 = t;
		t.horizontalCenter = -1;
		t.source = "tz_sss_img_json.sss_offline";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.sitBtn7_i = function () {
		var t = new eui.Image();
		this.sitBtn7 = t;
		t.horizontalCenter = -1.5;
		t.source = "tz_sss_img_json.sss_sitdown";
		t.verticalCenter = -1.5;
		t.visible = false;
		return t;
	};
	_proto.dalaba7_i = function () {
		var t = new eui.Image();
		this.dalaba7 = t;
		t.horizontalCenter = -0.5;
		t.source = "tz_game_public_json.public_yuan_speaker";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.hasReady7_i = function () {
		var t = new eui.Image();
		this.hasReady7 = t;
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_hasReady";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoBox7_i = function () {
		var t = new eui.Group();
		this.infoBox7 = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 112;
		t.elementsContent = [this._Rect8_i(),this.nickname7_i(),this.point7_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.6;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.nickname7_i = function () {
		var t = new eui.Label();
		this.nickname7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.width = 100;
		t.y = 8.04;
		return t;
	};
	_proto.point7_i = function () {
		var t = new eui.Label();
		this.point7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFE187;
		t.y = 33.8;
		return t;
	};
	_proto.specialGroup7_i = function () {
		var t = new eui.Group();
		this.specialGroup7 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.visible = false;
		t.x = -104;
		t.y = -121;
		t.elementsContent = [this.pai91_i(),this.pai92_i(),this.pai93_i(),this.pai94_i(),this.pai95_i(),this.pai96_i(),this.pai97_i(),this.pai98_i(),this.pai99_i(),this.pai100_i(),this.pai101_i(),this.pai102_i(),this.pai103_i(),this.specialTit7_i()];
		return t;
	};
	_proto.pai91_i = function () {
		var t = new eui.Image();
		this.pai91 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai92_i = function () {
		var t = new eui.Image();
		this.pai92 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai93_i = function () {
		var t = new eui.Image();
		this.pai93 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai94_i = function () {
		var t = new eui.Image();
		this.pai94 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai95_i = function () {
		var t = new eui.Image();
		this.pai95 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai96_i = function () {
		var t = new eui.Image();
		this.pai96 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai97_i = function () {
		var t = new eui.Image();
		this.pai97 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai98_i = function () {
		var t = new eui.Image();
		this.pai98 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai99_i = function () {
		var t = new eui.Image();
		this.pai99 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai100_i = function () {
		var t = new eui.Image();
		this.pai100 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai101_i = function () {
		var t = new eui.Image();
		this.pai101 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai102_i = function () {
		var t = new eui.Image();
		this.pai102 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai103_i = function () {
		var t = new eui.Image();
		this.pai103 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.specialTit7_i = function () {
		var t = new eui.Image();
		this.specialTit7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.lipaiGroup7_i = function () {
		var t = new eui.Group();
		this.lipaiGroup7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 125;
		t.y = 1;
		t.elementsContent = [this.lipai49_i(),this.lipai50_i(),this.lipai51_i(),this.lipai52_i(),this.lipai53_i(),this.lipai54_i(),this.lipai55_i(),this.peipai7_i()];
		return t;
	};
	_proto.lipai49_i = function () {
		var t = new eui.Image();
		this.lipai49 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lipai50_i = function () {
		var t = new eui.Image();
		this.lipai50 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.lipai51_i = function () {
		var t = new eui.Image();
		this.lipai51 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.lipai52_i = function () {
		var t = new eui.Image();
		this.lipai52 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.lipai53_i = function () {
		var t = new eui.Image();
		this.lipai53 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.lipai54_i = function () {
		var t = new eui.Image();
		this.lipai54 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.lipai55_i = function () {
		var t = new eui.Image();
		this.lipai55 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.peipai7_i = function () {
		var t = new eui.Image();
		this.peipai7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg7_i = function () {
		var t = new eui.Group();
		this.messagebg7 = t;
		t.height = 49;
		t.visible = false;
		t.width = 300;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this.mbg7_i(),this.message7_i()];
		return t;
	};
	_proto.mbg7_i = function () {
		var t = new eui.Image();
		this.mbg7 = t;
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message7_i = function () {
		var t = new eui.Label();
		this.message7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 7.34;
		return t;
	};
	_proto._bitLabel_myPoint7_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_myPoint7 = t;
		t.font = "coin_action_blue_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.visible = false;
		t.x = 13;
		t.y = -5;
		return t;
	};
	_proto.topGroup7_i = function () {
		var t = new eui.Group();
		this.topGroup7 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -170;
		t.elementsContent = [this.topPoint7_i(),this.topTitle7_i()];
		return t;
	};
	_proto.topPoint7_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint7 = t;
		t.font = "coin_action_blue_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.topTitle7_i = function () {
		var t = new eui.Image();
		this.topTitle7 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.midGroup7_i = function () {
		var t = new eui.Group();
		this.midGroup7 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -105;
		t.elementsContent = [this.midPoint7_i(),this.midTitle7_i()];
		return t;
	};
	_proto.midPoint7_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint7 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.midTitle7_i = function () {
		var t = new eui.Image();
		this.midTitle7 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.bottomGroup7_i = function () {
		var t = new eui.Group();
		this.bottomGroup7 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = -30;
		t.elementsContent = [this.bottomPoint7_i(),this.botttomTitle7_i()];
		return t;
	};
	_proto.bottomPoint7_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint7 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.botttomTitle7_i = function () {
		var t = new eui.Image();
		this.botttomTitle7 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.totalGroup7_i = function () {
		var t = new eui.Group();
		this.totalGroup7 = t;
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 226;
		t.x = 164;
		t.y = 45;
		t.elementsContent = [this.totalPoint7_i(),this.totalTitle7_i()];
		return t;
	};
	_proto.totalPoint7_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint7 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto.totalTitle7_i = function () {
		var t = new eui.Image();
		this.totalTitle7 = t;
		t.source = "sss_fnt_title_json.sss_head_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	return sss_index;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShisanWater/sss_pgHead.exml'] = window.sss_pgHead = (function (_super) {
	__extends(sss_pgHead, _super);
	function sss_pgHead() {
		_super.call(this);
		this.skinParts = ["headImg","nickname"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = sss_pgHead.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.nickname_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.headImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 95;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 4;
		t.y = 3.5;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 16;
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "--";
		t.textAlign = "center";
		t.width = 80;
		t.y = 75.5;
		return t;
	};
	return sss_pgHead;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShisanWater/sss_totalResult.exml'] = window.sss_totalResult = (function (_super) {
	__extends(sss_totalResult, _super);
	var sss_totalResult$Skin93 = 	(function (_super) {
		__extends(sss_totalResult$Skin93, _super);
		function sss_totalResult$Skin93() {
			_super.call(this);
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
		var _proto = sss_totalResult$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_totalres_backhall";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_totalResult$Skin93;
	})(eui.Skin);

	var sss_totalResult$Skin94 = 	(function (_super) {
		__extends(sss_totalResult$Skin94, _super);
		function sss_totalResult$Skin94() {
			_super.call(this);
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
		var _proto = sss_totalResult$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss8ren_game_json.game_btn_onceagain";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_totalResult$Skin94;
	})(eui.Skin);

	function sss_totalResult() {
		_super.call(this);
		this.skinParts = ["_rect_menban","headImg0","nickname0","ID0","point0","item0","headImg1","nickname1","ID1","point1","item1","headImg2","nickname2","ID2","point2","item2","headImg3","nickname3","ID3","point3","item3","headImg4","nickname4","ID4","point4","item4","headImg5","nickname5","ID5","point5","item5","headImg6","nickname6","ID6","point6","item6","headImg7","nickname7","ID7","point7","item7","pwd","playcount","gamename","time","_gp_main","backHall","jietu","playAgain","_gp_bot"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i(),this._gp_bot_i()];
	}
	var _proto = sss_totalResult.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillColor = 0x291d11;
		t.height = 1080;
		t.width = 640;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.x = 20;
		t.y = 17;
		t.elementsContent = [this._Group9_i(),this._Label1_i(),this._Group10_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 203;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i()];
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
		t.fillColor = 0xfefefe;
		t.height = 90;
		t.width = 580;
		t.y = 450;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xEFEFEF;
		t.height = 90;
		t.width = 580;
		t.y = 540;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfefefe;
		t.height = 90;
		t.width = 580;
		t.y = 630;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg0_i(),this._Group1_i(),this.point0_i()];
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
		t.verticalCenter = 1;
		t.x = 115.36;
		t.elementsContent = [this.nickname0_i(),this.ID0_i()];
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "--";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.size = 25;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.size = 40;
		t.text = "+999";
		t.textColor = 0x9a7400;
		t.verticalCenter = 0;
		t.x = 407.32;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 90;
		t.elementsContent = [this.headImg1_i(),this._Group2_i(),this.point1_i()];
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
		t.verticalCenter = 1;
		t.x = 115.36;
		t.elementsContent = [this.nickname1_i(),this.ID1_i()];
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "--";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.size = 25;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.size = 40;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0;
		t.x = 407.32;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 180;
		t.elementsContent = [this.headImg2_i(),this._Group3_i(),this.point2_i()];
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
		t.verticalCenter = 1;
		t.x = 115.36;
		t.elementsContent = [this.nickname2_i(),this.ID2_i()];
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "--";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.size = 25;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.size = 40;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0;
		t.x = 407.32;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 270;
		t.elementsContent = [this.headImg3_i(),this._Group4_i(),this.point3_i()];
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
		t.verticalCenter = 1;
		t.x = 115.36;
		t.elementsContent = [this.nickname3_i(),this.ID3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "--";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.size = 25;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.size = 40;
		t.text = "+999";
		t.textColor = 0x9a7400;
		t.verticalCenter = 0;
		t.x = 407.32;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 360;
		t.elementsContent = [this.headImg4_i(),this._Group5_i(),this.point4_i()];
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
		t.verticalCenter = 1;
		t.x = 115.36;
		t.elementsContent = [this.nickname4_i(),this.ID4_i()];
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "--";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID4_i = function () {
		var t = new eui.Label();
		this.ID4 = t;
		t.size = 25;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.Label();
		this.point4 = t;
		t.size = 40;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0;
		t.x = 407.32;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 450;
		t.elementsContent = [this.headImg5_i(),this._Group6_i(),this.point5_i()];
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
		t.verticalCenter = 1;
		t.x = 115.36;
		t.elementsContent = [this.nickname5_i(),this.ID5_i()];
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "--";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID5_i = function () {
		var t = new eui.Label();
		this.ID5 = t;
		t.size = 25;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point5_i = function () {
		var t = new eui.Label();
		this.point5 = t;
		t.size = 40;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0;
		t.x = 407.32;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 540;
		t.elementsContent = [this.headImg6_i(),this._Group7_i(),this.point6_i()];
		return t;
	};
	_proto.headImg6_i = function () {
		var t = new eui.Image();
		this.headImg6 = t;
		t.height = 70;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 21.32;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 1;
		t.x = 115.36;
		t.elementsContent = [this.nickname6_i(),this.ID6_i()];
		return t;
	};
	_proto.nickname6_i = function () {
		var t = new eui.Label();
		this.nickname6 = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "--";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID6_i = function () {
		var t = new eui.Label();
		this.ID6 = t;
		t.size = 25;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point6_i = function () {
		var t = new eui.Label();
		this.point6 = t;
		t.size = 40;
		t.text = "+999";
		t.textColor = 0x093674;
		t.verticalCenter = 0;
		t.x = 407.32;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Group();
		this.item7 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 630;
		t.elementsContent = [this.headImg7_i(),this._Group8_i(),this.point7_i()];
		return t;
	};
	_proto.headImg7_i = function () {
		var t = new eui.Image();
		this.headImg7 = t;
		t.height = 70;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 21.32;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 1;
		t.x = 115.36;
		t.elementsContent = [this.nickname7_i(),this.ID7_i()];
		return t;
	};
	_proto.nickname7_i = function () {
		var t = new eui.Label();
		this.nickname7 = t;
		t.fontFamily = "Arial";
		t.size = 25;
		t.text = "--";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID7_i = function () {
		var t = new eui.Label();
		this.ID7 = t;
		t.size = 25;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point7_i = function () {
		var t = new eui.Label();
		this.point7 = t;
		t.size = 40;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0;
		t.x = 407.32;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "战绩";
		t.x = 270;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 33;
		t.elementsContent = [this._Rect9_i(),this._Rect10_i(),this.pwd_i(),this.playcount_i(),this.gamename_i(),this.time_i()];
		return t;
	};
	_proto._Rect9_i = function () {
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
	_proto._Rect10_i = function () {
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
		t.text = "卓越互娱";
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
		t.y = 961.82;
		t.elementsContent = [this._Label2_i(),this._Group11_i()];
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
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.width = 492;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.backHall_i(),this.jietu_i(),this.playAgain_i()];
		return t;
	};
	_proto.backHall_i = function () {
		var t = new eui.Button();
		this.backHall = t;
		t.horizontalCenter = -173;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_totalResult$Skin93;
		return t;
	};
	_proto.jietu_i = function () {
		var t = new eui.Button();
		this.jietu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.playAgain_i = function () {
		var t = new eui.Button();
		this.playAgain = t;
		t.horizontalCenter = 173;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_totalResult$Skin94;
		return t;
	};
	return sss_totalResult;
})(eui.Skin);