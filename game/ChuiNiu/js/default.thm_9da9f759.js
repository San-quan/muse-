
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
                generateEUI.skins = {"CreateNiuniuScene":"resource/eui_skins/hall/CreateNiuniuScene.exml","NiuniuResult":"resource/eui_skins/NiuniuResult.exml","NiuniuRecord":"resource/eui_skins/niuniu/NiuniuRecord.exml"};generateEUI.paths['resource/eui_skins/common/common_kuang_jiesan.exml'] = window.common_kuang_tishi = (function (_super) {
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
		t.skinName = common_kuang_menulist$Skin3;
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
		t.skinName = common_kuang_menulist$Skin4;
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
	var common_kuang_send$Skin9 = 	(function (_super) {
		__extends(common_kuang_send$Skin9, _super);
		function common_kuang_send$Skin9() {
			_super.call(this);
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
		var _proto = common_kuang_send$Skin9.prototype;

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
		return common_kuang_send$Skin9;
	})(eui.Skin);

	var common_kuang_send$Skin10 = 	(function (_super) {
		__extends(common_kuang_send$Skin10, _super);
		function common_kuang_send$Skin10() {
			_super.call(this);
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
		var _proto = common_kuang_send$Skin10.prototype;

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
		return common_kuang_send$Skin10;
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
		t.skinName = common_kuang_send$Skin9;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.horizontalCenter = 150;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_kuang_send$Skin10;
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
		t.source = "";
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
		t.height = 330;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(20,18,12,8);
		t.source = "dsGame_common_json.common_notice_di";
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dsGame_common_json.common_alertBox_success";
		t.y = 111;
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
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Image();
		this._btn_cancel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 329;
		t.y = 0;
		return t;
	};
	_proto._txt_content_i = function () {
		var t = new eui.Label();
		this._txt_content = t;
		t.fontFamily = "Arial";
		t.height = 125;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 33;
		t.text = "复制成功！";
		t.textAlign = "center";
		t.textColor = 0x7f7f7f;
		t.width = 450;
		t.y = 232.5;
		return t;
	};
	return common_kuang_sure;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_loading.exml'] = window.common_loading = (function (_super) {
	__extends(common_loading, _super);
	function common_loading() {
		_super.call(this);
		this.skinParts = ["_img_meng","_txt_loadingmsg","_img_juhua","_img_logo","_group_ju"];
		
		this.height = 300;
		this.width = 300;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = common_loading.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_meng_i(),this._txt_loadingmsg_i(),this._group_ju_i()];
		return t;
	};
	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 0.6;
		t.height = 200;
		t.scale9Grid = new egret.Rectangle(9,7,13,14);
		t.source = "dsGame_common_json.common_loading_bg";
		t.width = 200;
		t.x = 0;
		t.y = 0;
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
		t.y = 229;
		return t;
	};
	_proto._group_ju_i = function () {
		var t = new eui.Group();
		this._group_ju = t;
		t.height = 110;
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 110;
		t.x = -10;
		t.y = -10;
		t.elementsContent = [this._img_juhua_i(),this._img_logo_i()];
		return t;
	};
	_proto._img_juhua_i = function () {
		var t = new eui.Image();
		this._img_juhua = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_common_json.common_juhua";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_logo_i = function () {
		var t = new eui.Image();
		this._img_logo = t;
		t.horizontalCenter = 0;
		t.source = "dsGame_common_json.common_loading_0";
		t.verticalCenter = 0;
		return t;
	};
	return common_loading;
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
		t.text = "快点出牌呦";
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
		t.y = 370;
		return t;
	};
	return common_message_UI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_share.exml'] = window.common_share = (function (_super) {
	__extends(common_share, _super);
	var common_share$Skin11 = 	(function (_super) {
		__extends(common_share$Skin11, _super);
		function common_share$Skin11() {
			_super.call(this);
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
		var _proto = common_share$Skin11.prototype;

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
		return common_share$Skin11;
	})(eui.Skin);

	var common_share$Skin12 = 	(function (_super) {
		__extends(common_share$Skin12, _super);
		function common_share$Skin12() {
			_super.call(this);
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
		var _proto = common_share$Skin12.prototype;

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
		return common_share$Skin12;
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
		t.skinName = common_share$Skin11;
		return t;
	};
	_proto._btn_weixin_i = function () {
		var t = new eui.Button();
		this._btn_weixin = t;
		t.horizontalCenter = 107;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = common_share$Skin12;
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
	var shu_common_jiesan$Skin13 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin13, _super);
		function shu_common_jiesan$Skin13() {
			_super.call(this);
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
		var _proto = shu_common_jiesan$Skin13.prototype;

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
		return shu_common_jiesan$Skin13;
	})(eui.Skin);

	var shu_common_jiesan$Skin14 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin14, _super);
		function shu_common_jiesan$Skin14() {
			_super.call(this);
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
		var _proto = shu_common_jiesan$Skin14.prototype;

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
		return shu_common_jiesan$Skin14;
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
		t.skinName = shu_common_jiesan$Skin13;
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
		t.skinName = shu_common_jiesan$Skin14;
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
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
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
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
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
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
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
		return shu_common_menu$Skin17;
	})(eui.Skin);

	var shu_common_menu$Skin18 = 	(function (_super) {
		__extends(shu_common_menu$Skin18, _super);
		function shu_common_menu$Skin18() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin18.prototype;

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
		return shu_common_menu$Skin18;
	})(eui.Skin);

	var shu_common_menu$Skin19 = 	(function (_super) {
		__extends(shu_common_menu$Skin19, _super);
		function shu_common_menu$Skin19() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin19.prototype;

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
		return shu_common_menu$Skin19;
	})(eui.Skin);

	var shu_common_menu$Skin20 = 	(function (_super) {
		__extends(shu_common_menu$Skin20, _super);
		function shu_common_menu$Skin20() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin20.prototype;

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
		return shu_common_menu$Skin20;
	})(eui.Skin);

	var shu_common_menu$Skin21 = 	(function (_super) {
		__extends(shu_common_menu$Skin21, _super);
		function shu_common_menu$Skin21() {
			_super.call(this);
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
		var _proto = shu_common_menu$Skin21.prototype;

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
		return shu_common_menu$Skin21;
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
		t.skinName = shu_common_menu$Skin15;
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
		t.skinName = shu_common_menu$Skin16;
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
		t.skinName = shu_common_menu$Skin17;
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
		t.skinName = shu_common_menu$Skin18;
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
		t.skinName = shu_common_menu$Skin19;
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
		t.skinName = shu_common_menu$Skin20;
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
		t.skinName = shu_common_menu$Skin21;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/hallItem.exml'] = window.hallItem = (function (_super) {
	__extends(hallItem, _super);
	function hallItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 190;
		this.width = 718;
	}
	var _proto = hallItem.prototype;

	return hallItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/huanleHall.exml'] = window.huanleHall = (function (_super) {
	__extends(huanleHall, _super);
	var huanleHall$Skin22 = 	(function (_super) {
		__extends(huanleHall$Skin22, _super);
		function huanleHall$Skin22() {
			_super.call(this);
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
		var _proto = huanleHall$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_game01";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin22;
	})(eui.Skin);

	var huanleHall$Skin23 = 	(function (_super) {
		__extends(huanleHall$Skin23, _super);
		function huanleHall$Skin23() {
			_super.call(this);
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
		var _proto = huanleHall$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_game02";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin23;
	})(eui.Skin);

	var huanleHall$Skin24 = 	(function (_super) {
		__extends(huanleHall$Skin24, _super);
		function huanleHall$Skin24() {
			_super.call(this);
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
		var _proto = huanleHall$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_game03";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin24;
	})(eui.Skin);

	var huanleHall$Skin25 = 	(function (_super) {
		__extends(huanleHall$Skin25, _super);
		function huanleHall$Skin25() {
			_super.call(this);
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
		var _proto = huanleHall$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_game04";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin25;
	})(eui.Skin);

	var huanleHall$Skin26 = 	(function (_super) {
		__extends(huanleHall$Skin26, _super);
		function huanleHall$Skin26() {
			_super.call(this);
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
		var _proto = huanleHall$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_game010";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin26;
	})(eui.Skin);

	var huanleHall$Skin27 = 	(function (_super) {
		__extends(huanleHall$Skin27, _super);
		function huanleHall$Skin27() {
			_super.call(this);
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
		var _proto = huanleHall$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_game08";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin27;
	})(eui.Skin);

	var huanleHall$Skin28 = 	(function (_super) {
		__extends(huanleHall$Skin28, _super);
		function huanleHall$Skin28() {
			_super.call(this);
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
		var _proto = huanleHall$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_ting-agent";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin28;
	})(eui.Skin);

	var huanleHall$Skin29 = 	(function (_super) {
		__extends(huanleHall$Skin29, _super);
		function huanleHall$Skin29() {
			_super.call(this);
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
		var _proto = huanleHall$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_ting-more";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin29;
	})(eui.Skin);

	var huanleHall$Skin30 = 	(function (_super) {
		__extends(huanleHall$Skin30, _super);
		function huanleHall$Skin30() {
			_super.call(this);
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
		var _proto = huanleHall$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 95;
			t.source = "dsGame_hall_json.ha";
			t.width = 326;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -4;
			return t;
		};
		return huanleHall$Skin30;
	})(eui.Skin);

	var huanleHall$Skin31 = 	(function (_super) {
		__extends(huanleHall$Skin31, _super);
		function huanleHall$Skin31() {
			_super.call(this);
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
		var _proto = huanleHall$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 95;
			t.source = "dsGame_hall_json.ha";
			t.width = 326;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -4;
			return t;
		};
		return huanleHall$Skin31;
	})(eui.Skin);

	var huanleHall$Skin32 = 	(function (_super) {
		__extends(huanleHall$Skin32, _super);
		function huanleHall$Skin32() {
			_super.call(this);
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
		var _proto = huanleHall$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 95;
			t.source = "dsGame_hall_json.ha";
			t.width = 326;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -4;
			return t;
		};
		return huanleHall$Skin32;
	})(eui.Skin);

	var huanleHall$Skin33 = 	(function (_super) {
		__extends(huanleHall$Skin33, _super);
		function huanleHall$Skin33() {
			_super.call(this);
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
		var _proto = huanleHall$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 95;
			t.source = "dsGame_hall_json.ha";
			t.width = 326;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -4;
			return t;
		};
		return huanleHall$Skin33;
	})(eui.Skin);

	var huanleHall$Skin34 = 	(function (_super) {
		__extends(huanleHall$Skin34, _super);
		function huanleHall$Skin34() {
			_super.call(this);
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
		var _proto = huanleHall$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 95;
			t.source = "dsGame_hall_json.ha";
			t.width = 326;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -4;
			return t;
		};
		return huanleHall$Skin34;
	})(eui.Skin);

	var huanleHall$Skin35 = 	(function (_super) {
		__extends(huanleHall$Skin35, _super);
		function huanleHall$Skin35() {
			_super.call(this);
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
		var _proto = huanleHall$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 95;
			t.source = "dsGame_hall_json.ha";
			t.width = 326;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -4;
			return t;
		};
		return huanleHall$Skin35;
	})(eui.Skin);

	var huanleHall$Skin36 = 	(function (_super) {
		__extends(huanleHall$Skin36, _super);
		function huanleHall$Skin36() {
			_super.call(this);
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
		var _proto = huanleHall$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 95;
			t.source = "dsGame_hall_json.ha";
			t.width = 326;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -4;
			return t;
		};
		return huanleHall$Skin36;
	})(eui.Skin);

	var huanleHall$Skin37 = 	(function (_super) {
		__extends(huanleHall$Skin37, _super);
		function huanleHall$Skin37() {
			_super.call(this);
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
		var _proto = huanleHall$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_submit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin37;
	})(eui.Skin);

	var huanleHall$Skin38 = 	(function (_super) {
		__extends(huanleHall$Skin38, _super);
		function huanleHall$Skin38() {
			_super.call(this);
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
		var _proto = huanleHall$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_game_icon_json.hall_sure-btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin38;
	})(eui.Skin);

	function huanleHall() {
		_super.call(this);
		this.skinParts = ["_img_bg","_btn_game0","_btn_game1","_btn_game2","_btn_game3","_btn_game4","_btn_game5","_scro_gamelist","_img_head","_txt_id","_txt_nickname","_txt_cards","_btn_tuiguang","_btn_more","_rect_more_menban","_btn_more_close","_btn_more_friend","_btn_more_history","_btn_more_carddetail","_btn_more_renzheng","_btn_more_backcount","_btn_more_redend","_btn_more_yichang","_gp_more_second","_gp_more","_rect_yichang_menban","_btn_yichang_close","_editTxt_yichang","_gp_addImg","_btn_submit_yichang","_img_yichang0","_img_yichang1","_img_yichang2","_gp_yichang_second","_gp_yichang","_rect_menban_shiming","_img_shiming_close","_editTxt_name","_editTxt_number","_btn_shiming_commit","_gp_shiming_second","_gp_shiming"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._img_bg_i(),this._scro_gamelist_i(),this._Group6_i(),this._gp_more_i(),this._gp_yichang_i(),this._gp_shiming_i()];
	}
	var _proto = huanleHall.prototype;

	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 1216;
		t.source = "hall_bg_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._scro_gamelist_i = function () {
		var t = new eui.Scroller();
		this._scro_gamelist = t;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._btn_game0_i(),this._btn_game1_i(),this._btn_game2_i(),this._btn_game3_i(),this._btn_game4_i(),this._btn_game5_i()];
		return t;
	};
	_proto._btn_game0_i = function () {
		var t = new eui.Button();
		this._btn_game0 = t;
		t.horizontalCenter = -187.5;
		t.label = "";
		t.verticalCenter = -289.5;
		t.skinName = huanleHall$Skin22;
		return t;
	};
	_proto._btn_game1_i = function () {
		var t = new eui.Button();
		this._btn_game1 = t;
		t.horizontalCenter = 187.5;
		t.label = "";
		t.verticalCenter = -289.5;
		t.skinName = huanleHall$Skin23;
		return t;
	};
	_proto._btn_game2_i = function () {
		var t = new eui.Button();
		this._btn_game2 = t;
		t.horizontalCenter = -187.5;
		t.label = "";
		t.verticalCenter = 40.5;
		t.skinName = huanleHall$Skin24;
		return t;
	};
	_proto._btn_game3_i = function () {
		var t = new eui.Button();
		this._btn_game3 = t;
		t.horizontalCenter = 187.5;
		t.label = "";
		t.verticalCenter = 40.5;
		t.skinName = huanleHall$Skin25;
		return t;
	};
	_proto._btn_game4_i = function () {
		var t = new eui.Button();
		this._btn_game4 = t;
		t.horizontalCenter = -187.5;
		t.label = "";
		t.verticalCenter = 370.5;
		t.skinName = huanleHall$Skin26;
		return t;
	};
	_proto._btn_game5_i = function () {
		var t = new eui.Button();
		this._btn_game5 = t;
		t.horizontalCenter = 187.5;
		t.label = "";
		t.verticalCenter = 370.5;
		t.skinName = huanleHall$Skin27;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.width = 722;
		t.x = 18.48;
		t.y = 13.5;
		t.elementsContent = [this._Group5_i(),this._btn_tuiguang_i(),this._btn_more_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._txt_nickname_i(),this._Group4_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 7;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._img_head_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x9b6e44;
		t.height = 86;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 86;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = -10;
		t.y = 57.64;
		t.elementsContent = [this._Rect2_i(),this._txt_id_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 30;
		t.fillAlpha = 0.7;
		t.height = 30;
		t.width = 120;
		t.x = 0;
		t.y = 0.01;
		return t;
	};
	_proto._txt_id_i = function () {
		var t = new eui.Label();
		this._txt_id = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "ID:999999";
		t.verticalCenter = 0;
		return t;
	};
	_proto._txt_nickname_i = function () {
		var t = new eui.Label();
		this._txt_nickname = t;
		t.size = 23;
		t.text = "魂族网络科技";
		t.x = 107;
		t.y = 4.44;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 107;
		t.y = 36.4;
		t.elementsContent = [this._Rect3_i(),this._Image1_i(),this._txt_cards_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 60;
		t.ellipseWidth = 40;
		t.fillColor = 0x9b6e44;
		t.height = 35;
		t.strokeAlpha = 1;
		t.strokeColor = 0x000000;
		t.strokeWeight = 1;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 24.27;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_game_icon_json.hall_room-card1";
		t.verticalCenter = 0;
		t.x = 5;
		return t;
	};
	_proto._txt_cards_i = function () {
		var t = new eui.Label();
		this._txt_cards = t;
		t.height = 21;
		t.size = 21;
		t.text = "9";
		t.textAlign = "right";
		t.verticalCenter = 1;
		t.width = 71;
		t.x = 37.71;
		return t;
	};
	_proto._btn_tuiguang_i = function () {
		var t = new eui.Button();
		this._btn_tuiguang = t;
		t.horizontalCenter = 158;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin28;
		return t;
	};
	_proto._btn_more_i = function () {
		var t = new eui.Button();
		this._btn_more = t;
		t.horizontalCenter = 293;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin29;
		return t;
	};
	_proto._gp_more_i = function () {
		var t = new eui.Group();
		this._gp_more = t;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_more_menban_i(),this._gp_more_second_i()];
		return t;
	};
	_proto._rect_more_menban_i = function () {
		var t = new eui.Rect();
		this._rect_more_menban = t;
		t.fillAlpha = 0.6;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_more_second_i = function () {
		var t = new eui.Group();
		this._gp_more_second = t;
		t.height = 871;
		t.width = 566;
		t.x = 100;
		t.y = 173;
		t.elementsContent = [this._Rect4_i(),this._btn_more_close_i(),this._Group14_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xcadef5;
		t.height = 850;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 20;
		t.width = 550;
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto._btn_more_close_i = function () {
		var t = new eui.Image();
		this._btn_more_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "dsGame_hall_json.niuniu13_create_close";
		t.x = 498;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 36;
		t.y = 80;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 102;
		t.width = 478;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._btn_more_friend_i(),this._Image2_i()];
		return t;
	};
	_proto._btn_more_friend_i = function () {
		var t = new eui.Button();
		this._btn_more_friend = t;
		t.horizontalCenter = 0;
		t.label = "好友管理";
		t.verticalCenter = -1.5;
		t.skinName = huanleHall$Skin30;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_hall_json.niuniu13_create_huawen";
		t.x = 0;
		t.y = 94;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 102;
		t.width = 478;
		t.x = 0;
		t.y = 106;
		t.elementsContent = [this._btn_more_history_i(),this._Image3_i()];
		return t;
	};
	_proto._btn_more_history_i = function () {
		var t = new eui.Button();
		this._btn_more_history = t;
		t.horizontalCenter = 0;
		t.label = "历史战绩";
		t.verticalCenter = -1.5;
		t.skinName = huanleHall$Skin31;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_hall_json.niuniu13_create_huawen";
		t.x = 0;
		t.y = 94;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 102;
		t.width = 478;
		t.x = 0;
		t.y = 212;
		t.elementsContent = [this._btn_more_carddetail_i(),this._Image4_i()];
		return t;
	};
	_proto._btn_more_carddetail_i = function () {
		var t = new eui.Button();
		this._btn_more_carddetail = t;
		t.horizontalCenter = 0;
		t.label = "房卡明细";
		t.verticalCenter = -1.5;
		t.skinName = huanleHall$Skin32;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_hall_json.niuniu13_create_huawen";
		t.x = 0;
		t.y = 94;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 102;
		t.width = 478;
		t.x = 0;
		t.y = 318;
		t.elementsContent = [this._btn_more_renzheng_i(),this._Image5_i()];
		return t;
	};
	_proto._btn_more_renzheng_i = function () {
		var t = new eui.Button();
		this._btn_more_renzheng = t;
		t.horizontalCenter = 0;
		t.label = "实名认证";
		t.verticalCenter = -1.5;
		t.skinName = huanleHall$Skin33;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_hall_json.niuniu13_create_huawen";
		t.x = 0;
		t.y = 94;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 102;
		t.width = 478;
		t.x = 0;
		t.y = 424;
		t.elementsContent = [this._btn_more_backcount_i(),this._Image6_i()];
		return t;
	};
	_proto._btn_more_backcount_i = function () {
		var t = new eui.Button();
		this._btn_more_backcount = t;
		t.horizontalCenter = 0;
		t.label = "找回账户";
		t.verticalCenter = -1.5;
		t.skinName = huanleHall$Skin34;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_hall_json.niuniu13_create_huawen";
		t.x = 0;
		t.y = 94;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 102;
		t.width = 478;
		t.x = 0;
		t.y = 530;
		t.elementsContent = [this._btn_more_redend_i(),this._Image7_i()];
		return t;
	};
	_proto._btn_more_redend_i = function () {
		var t = new eui.Button();
		this._btn_more_redend = t;
		t.horizontalCenter = 0;
		t.label = "注销登录";
		t.verticalCenter = -1.5;
		t.skinName = huanleHall$Skin35;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_hall_json.niuniu13_create_huawen";
		t.x = 0;
		t.y = 94;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 102;
		t.horizontalCenter = 0;
		t.width = 478;
		t.y = 636;
		t.elementsContent = [this._btn_more_yichang_i()];
		return t;
	};
	_proto._btn_more_yichang_i = function () {
		var t = new eui.Button();
		this._btn_more_yichang = t;
		t.horizontalCenter = 0;
		t.label = "异常举报";
		t.verticalCenter = -1.5;
		t.skinName = huanleHall$Skin36;
		return t;
	};
	_proto._gp_yichang_i = function () {
		var t = new eui.Group();
		this._gp_yichang = t;
		t.height = 1216;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_yichang_menban_i(),this._gp_yichang_second_i()];
		return t;
	};
	_proto._rect_yichang_menban_i = function () {
		var t = new eui.Rect();
		this._rect_yichang_menban = t;
		t.fillAlpha = 0.6;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_yichang_second_i = function () {
		var t = new eui.Group();
		this._gp_yichang_second = t;
		t.height = 550;
		t.horizontalCenter = 0;
		t.verticalCenter = 12;
		t.width = 600;
		t.elementsContent = [this._Rect5_i(),this._btn_yichang_close_i(),this._Group15_i(),this._Image8_i(),this._gp_addImg_i(),this._btn_submit_yichang_i(),this._img_yichang0_i(),this._img_yichang1_i(),this._img_yichang2_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xCADEF5;
		t.height = 550;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 20;
		t.width = 600;
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto._btn_yichang_close_i = function () {
		var t = new eui.Image();
		this._btn_yichang_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "dsGame_hall_json.niuniu13_create_close";
		t.x = 554;
		t.y = -8;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 35;
		t.y = 84;
		t.elementsContent = [this._Rect6_i(),this._editTxt_yichang_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xb5e4ff;
		t.height = 100;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 2;
		t.width = 530;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._editTxt_yichang_i = function () {
		var t = new eui.EditableText();
		this._editTxt_yichang = t;
		t.height = 90;
		t.horizontalCenter = "0";
		t.prompt = "请输入不超过30个中文字符的文字";
		t.size = 25;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.width = 520;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dsGame_hall_json.niuniu13_create_huawen";
		t.y = 402;
		return t;
	};
	_proto._gp_addImg_i = function () {
		var t = new eui.Group();
		this._gp_addImg = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 50;
		t.y = 200;
		t.elementsContent = [this._Rect7_i(),this._Rect8_i(),this._Rect9_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 100;
		t.strokeColor = 0x4794ff;
		t.strokeWeight = 5;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4794ff;
		t.height = 50;
		t.horizontalCenter = 0;
		t.strokeColor = 0x4794ff;
		t.verticalCenter = 0;
		t.width = 5;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4794FF;
		t.height = 5;
		t.horizontalCenter = 0;
		t.strokeColor = 0x4794FF;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto._btn_submit_yichang_i = function () {
		var t = new eui.Button();
		this._btn_submit_yichang = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 204;
		t.skinName = huanleHall$Skin37;
		return t;
	};
	_proto._img_yichang0_i = function () {
		var t = new eui.Image();
		this._img_yichang0 = t;
		t.height = 90;
		t.width = 90;
		t.x = 160;
		t.y = 200;
		return t;
	};
	_proto._img_yichang1_i = function () {
		var t = new eui.Image();
		this._img_yichang1 = t;
		t.height = 90;
		t.width = 90;
		t.x = 270;
		t.y = 200;
		return t;
	};
	_proto._img_yichang2_i = function () {
		var t = new eui.Image();
		this._img_yichang2 = t;
		t.height = 90;
		t.width = 90;
		t.x = 380;
		t.y = 200;
		return t;
	};
	_proto._gp_shiming_i = function () {
		var t = new eui.Group();
		this._gp_shiming = t;
		t.height = 1216;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 750;
		t.elementsContent = [this._rect_menban_shiming_i(),this._gp_shiming_second_i()];
		return t;
	};
	_proto._rect_menban_shiming_i = function () {
		var t = new eui.Rect();
		this._rect_menban_shiming = t;
		t.fillAlpha = 0.6;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_shiming_second_i = function () {
		var t = new eui.Group();
		this._gp_shiming_second = t;
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 680;
		t.elementsContent = [this._Rect10_i(),this._img_shiming_close_i(),this._Label1_i(),this._Label2_i(),this._Group16_i(),this._Group17_i(),this._btn_shiming_commit_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x252453;
		t.height = 500;
		t.strokeAlpha = 1;
		t.strokeColor = 0x473d75;
		t.strokeWeight = 20;
		t.width = 680;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_shiming_close_i = function () {
		var t = new eui.Image();
		this._img_shiming_close = t;
		t.source = "hall_game_icon_json.close-btn";
		t.x = 619;
		t.y = -18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "实名认证";
		t.textColor = 0xdfe4b2;
		t.y = 30;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 29;
		t.text = "建议您填写防沉迷信息，以便获取更好的网络服务填写后无法更改，请确认信息正确";
		t.textAlign = "center";
		t.width = 600;
		t.y = 94;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 190;
		t.elementsContent = [this._Rect11_i(),this._editTxt_name_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x0e1b35;
		t.height = 80;
		t.verticalCenter = 0;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._editTxt_name_i = function () {
		var t = new eui.EditableText();
		this._editTxt_name = t;
		t.height = 60;
		t.prompt = "请输入您的真实姓名";
		t.promptColor = 0x3c72b3;
		t.right = "14";
		t.textAlign = "right";
		t.textColor = 0x3c72b3;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 450;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "姓名";
		t.textColor = 0x3c72b3;
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 284;
		t.elementsContent = [this._Rect12_i(),this._editTxt_number_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x0E1B35;
		t.height = 80;
		t.verticalCenter = 0;
		t.width = 600;
		t.x = 0;
		return t;
	};
	_proto._editTxt_number_i = function () {
		var t = new eui.EditableText();
		this._editTxt_number = t;
		t.height = 60;
		t.prompt = "请输入您的身份证号";
		t.promptColor = 0x3c72b3;
		t.right = "14";
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0x3c72b3;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 450;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "身份证号";
		t.textColor = 0x3C72B3;
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto._btn_shiming_commit_i = function () {
		var t = new eui.Button();
		this._btn_shiming_commit = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.verticalCenter = 174.5;
		t.skinName = huanleHall$Skin38;
		return t;
	};
	return huanleHall;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/roomCreate.exml'] = window.roomCreate = (function (_super) {
	__extends(roomCreate, _super);
	var roomCreate$Skin39 = 	(function (_super) {
		__extends(roomCreate$Skin39, _super);
		function roomCreate$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin39;
	})(eui.Skin);

	var roomCreate$Skin40 = 	(function (_super) {
		__extends(roomCreate$Skin40, _super);
		function roomCreate$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin40;
	})(eui.Skin);

	var roomCreate$Skin41 = 	(function (_super) {
		__extends(roomCreate$Skin41, _super);
		function roomCreate$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin41;
	})(eui.Skin);

	var roomCreate$Skin42 = 	(function (_super) {
		__extends(roomCreate$Skin42, _super);
		function roomCreate$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin42;
	})(eui.Skin);

	var roomCreate$Skin43 = 	(function (_super) {
		__extends(roomCreate$Skin43, _super);
		function roomCreate$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin43;
	})(eui.Skin);

	var roomCreate$Skin44 = 	(function (_super) {
		__extends(roomCreate$Skin44, _super);
		function roomCreate$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin44;
	})(eui.Skin);

	var roomCreate$Skin45 = 	(function (_super) {
		__extends(roomCreate$Skin45, _super);
		function roomCreate$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin45;
	})(eui.Skin);

	var roomCreate$Skin46 = 	(function (_super) {
		__extends(roomCreate$Skin46, _super);
		function roomCreate$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin46;
	})(eui.Skin);

	var roomCreate$Skin47 = 	(function (_super) {
		__extends(roomCreate$Skin47, _super);
		function roomCreate$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin47;
	})(eui.Skin);

	var roomCreate$Skin48 = 	(function (_super) {
		__extends(roomCreate$Skin48, _super);
		function roomCreate$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin48;
	})(eui.Skin);

	var roomCreate$Skin49 = 	(function (_super) {
		__extends(roomCreate$Skin49, _super);
		function roomCreate$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin49;
	})(eui.Skin);

	var roomCreate$Skin50 = 	(function (_super) {
		__extends(roomCreate$Skin50, _super);
		function roomCreate$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin50;
	})(eui.Skin);

	var roomCreate$Skin51 = 	(function (_super) {
		__extends(roomCreate$Skin51, _super);
		function roomCreate$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin51;
	})(eui.Skin);

	var roomCreate$Skin52 = 	(function (_super) {
		__extends(roomCreate$Skin52, _super);
		function roomCreate$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin52;
	})(eui.Skin);

	var roomCreate$Skin53 = 	(function (_super) {
		__extends(roomCreate$Skin53, _super);
		function roomCreate$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin53;
	})(eui.Skin);

	var roomCreate$Skin54 = 	(function (_super) {
		__extends(roomCreate$Skin54, _super);
		function roomCreate$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin54;
	})(eui.Skin);

	var roomCreate$Skin55 = 	(function (_super) {
		__extends(roomCreate$Skin55, _super);
		function roomCreate$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin55;
	})(eui.Skin);

	var roomCreate$Skin56 = 	(function (_super) {
		__extends(roomCreate$Skin56, _super);
		function roomCreate$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin56;
	})(eui.Skin);

	var roomCreate$Skin57 = 	(function (_super) {
		__extends(roomCreate$Skin57, _super);
		function roomCreate$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin57;
	})(eui.Skin);

	var roomCreate$Skin58 = 	(function (_super) {
		__extends(roomCreate$Skin58, _super);
		function roomCreate$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin58;
	})(eui.Skin);

	var roomCreate$Skin59 = 	(function (_super) {
		__extends(roomCreate$Skin59, _super);
		function roomCreate$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin59;
	})(eui.Skin);

	var roomCreate$Skin60 = 	(function (_super) {
		__extends(roomCreate$Skin60, _super);
		function roomCreate$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin60;
	})(eui.Skin);

	var roomCreate$Skin61 = 	(function (_super) {
		__extends(roomCreate$Skin61, _super);
		function roomCreate$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin61;
	})(eui.Skin);

	var roomCreate$Skin62 = 	(function (_super) {
		__extends(roomCreate$Skin62, _super);
		function roomCreate$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin62;
	})(eui.Skin);

	var roomCreate$Skin63 = 	(function (_super) {
		__extends(roomCreate$Skin63, _super);
		function roomCreate$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dsGame_hall_json.niuniu13_create_checked")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_check";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin63;
	})(eui.Skin);

	var roomCreate$Skin64 = 	(function (_super) {
		__extends(roomCreate$Skin64, _super);
		function roomCreate$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = roomCreate$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dsGame_hall_json.niuniu13_create_sure";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomCreate$Skin64;
	})(eui.Skin);

	function roomCreate() {
		_super.call(this);
		this.skinParts = ["_rect_menban","_img_bg","_img_guidao","_img_jia","_img_jian","_txt_basescore","_gp_huakuai","_RdBtn_rule0","_label_xiazhu4","_RdBtn_rule1","_label_xiazhu6","_RdBtn_xiazhu0","_label_xiazhu0","_RdBtn_xiazhu1","_label_xiazhu1","_RdBtn_xiazhu2","_label_xiazhu2","_RdBtn_xiazhu3","_label_xiazhu3","_rect_specialBg","_RdBtn_special0","_label_xiazhu5","_RdBtn_special1","_label_xiazhu7","_RdBtn_special2","_label_xiazhu10","_RdBtn_special3","_label_xiazhu9","_gp_cuopai","_checkBox_paixin0","_label_paixin0","_checkBox_paixin1","_label_paixin1","_checkBox_paixin2","_label_paixin2","_checkBox_paixin3","_label_paixin3","_checkBox_paixin4","_label_paixin4","_checkBox_paixin5","_label_paixin5","_checkBox_paixin6","_label_paixin6","_checkBox_paixin7","_label_paixin7","_gp_paixin","_RdBtn_playcount0","_label_playcount0","_RdBtn_playcount1","_label_playcount1","_gp_playcount","_rect_specialBg0","_RdBtn_xiane0","_label_xiazhu8","_RdBtn_xiane1","_label_xiazhu11","_RdBtn_xiane2","_label_xiazhu14","_RdBtn_xiane3","_label_xiazhu12","_RdBtn_xiane4","_label_xiazhu13","_gp_xiane","_btn_createroom","_img_title_mingpai","_gp_mingpai","_img_title_tongbi","_gp_tongbi","_img_title_ziyou","_gp_ziyou","_img_title_niuniu","_gp_niuniu","_img_title_guding","_gp_guding","_img_close","_gp_main"];
		
		this.height = 1250;
		this.width = 750;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i()];
	}
	var _proto = roomCreate.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillAlpha = 0.7;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._img_bg_i(),this._Group1_i(),this._Group6_i(),this._Group13_i(),this._Group19_i(),this._gp_paixin_i(),this._gp_playcount_i(),this._Group35_i(),this._gp_xiane_i(),this._btn_createroom_i(),this._Group43_i(),this._img_close_i(),this._Image5_i()];
		return t;
	};
	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 1250;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(190,42,361,7);
		t.source = "dsGame_hall_json.niuniu13_create_fen_bg";
		t.width = 670;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 122;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._img_guidao_i(),this._img_jia_i(),this._img_jian_i(),this._Label1_i(),this._gp_huakuai_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xe2f9ff;
		t.height = 130;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 610;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "dsGame_hall_json.niuniu13_create_tt";
		t.verticalCenter = 12;
		return t;
	};
	_proto._img_guidao_i = function () {
		var t = new eui.Image();
		this._img_guidao = t;
		t.height = 92;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "dsGame_hall_json.niuniu13_create_tt2";
		t.width = 618;
		t.x = 89;
		t.y = 45;
		return t;
	};
	_proto._img_jia_i = function () {
		var t = new eui.Image();
		this._img_jia = t;
		t.source = "dsGame_hall_json.niuniu13_create_add";
		t.verticalCenter = 12;
		t.x = 510.65;
		return t;
	};
	_proto._img_jian_i = function () {
		var t = new eui.Image();
		this._img_jian = t;
		t.source = "dsGame_hall_json.niuniu13_create_delete";
		t.verticalCenter = 12;
		t.x = 25;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 28;
		t.text = "底分（记分牌）";
		t.textColor = 0x080451;
		t.y = 10.12;
		return t;
	};
	_proto._gp_huakuai_i = function () {
		var t = new eui.Group();
		this._gp_huakuai = t;
		t.x = 371;
		t.y = 57;
		t.elementsContent = [this._Image2_i(),this._txt_basescore_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "dsGame_hall_json.niuniu13_create_dian";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_basescore_i = function () {
		var t = new eui.Label();
		this._txt_basescore = t;
		t.horizontalCenter = 2;
		t.size = 25;
		t.text = "5";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.width = 610;
		t.y = 262;
		t.elementsContent = [this._Rect2_i(),this._Group3_i(),this._Group5_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xE2F9FF;
		t.height = 110;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 610;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 130;
		t.y = 10;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 145;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._RdBtn_rule0_i(),this._label_xiazhu4_i()];
		return t;
	};
	_proto._RdBtn_rule0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_rule0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin39;
		return t;
	};
	_proto._label_xiazhu4_i = function () {
		var t = new eui.Label();
		this._label_xiazhu4 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "牛牛x3牛九x2牛八x2";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 130;
		t.y = 61;
		t.elementsContent = [this._Group4_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 145;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._RdBtn_rule1_i(),this._label_xiazhu6_i()];
		return t;
	};
	_proto._RdBtn_rule1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_rule1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin40;
		return t;
	};
	_proto._label_xiazhu6_i = function () {
		var t = new eui.Label();
		this._label_xiazhu6 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "牛牛x4牛九x3牛八x2牛七x2";
		t.textColor = 0x080451;
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "规则：";
		t.textColor = 0x080451;
		t.x = 25.65;
		t.y = 16;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.width = 610;
		t.y = 382;
		t.elementsContent = [this._Rect3_i(),this._Group9_i(),this._Group12_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xE2F9FF;
		t.height = 110;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 610;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 130;
		t.y = 10;
		t.elementsContent = [this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 145;
		t.x = 0;
		t.y = 0;
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
		t.skinName = roomCreate$Skin41;
		return t;
	};
	_proto._label_xiazhu0_i = function () {
		var t = new eui.Label();
		this._label_xiazhu0 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "1/2/3/5倍";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 220;
		t.y = 0;
		t.elementsContent = [this._RdBtn_xiazhu1_i(),this._label_xiazhu1_i()];
		return t;
	};
	_proto._RdBtn_xiazhu1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiazhu1 = t;
		t.height = 36;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 36;
		t.x = 0;
		t.skinName = roomCreate$Skin42;
		return t;
	};
	_proto._label_xiazhu1_i = function () {
		var t = new eui.Label();
		this._label_xiazhu1 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "1/2/4/5倍";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 130;
		t.y = 61;
		t.elementsContent = [this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 145;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._RdBtn_xiazhu2_i(),this._label_xiazhu2_i()];
		return t;
	};
	_proto._RdBtn_xiazhu2_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiazhu2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin43;
		return t;
	};
	_proto._label_xiazhu2_i = function () {
		var t = new eui.Label();
		this._label_xiazhu2 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "1/3/5/8倍";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 220;
		t.y = 0;
		t.elementsContent = [this._RdBtn_xiazhu3_i(),this._label_xiazhu3_i()];
		return t;
	};
	_proto._RdBtn_xiazhu3_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiazhu3 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin44;
		return t;
	};
	_proto._label_xiazhu3_i = function () {
		var t = new eui.Label();
		this._label_xiazhu3 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "2/4/6/10倍";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "下注：";
		t.textColor = 0x080451;
		t.x = 25.65;
		t.y = 16;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.width = 610;
		t.y = 502;
		t.elementsContent = [this._rect_specialBg_i(),this._Group17_i(),this._gp_cuopai_i(),this._Label4_i()];
		return t;
	};
	_proto._rect_specialBg_i = function () {
		var t = new eui.Rect();
		this._rect_specialBg = t;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xE2F9FF;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 610;
		t.y = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 130;
		t.y = 10;
		t.elementsContent = [this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 145;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._RdBtn_special0_i(),this._label_xiazhu5_i()];
		return t;
	};
	_proto._RdBtn_special0_i = function () {
		var t = new eui.CheckBox();
		this._RdBtn_special0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin45;
		return t;
	};
	_proto._label_xiazhu5_i = function () {
		var t = new eui.Label();
		this._label_xiazhu5 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "仅限好友";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 160;
		t.y = 0;
		t.elementsContent = [this._RdBtn_special1_i(),this._label_xiazhu7_i()];
		return t;
	};
	_proto._RdBtn_special1_i = function () {
		var t = new eui.CheckBox();
		this._RdBtn_special1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin46;
		return t;
	};
	_proto._label_xiazhu7_i = function () {
		var t = new eui.Label();
		this._label_xiazhu7 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "允许观战";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.verticalCenter = 0;
		t.width = 145;
		t.x = 320;
		t.elementsContent = [this._RdBtn_special2_i(),this._label_xiazhu10_i()];
		return t;
	};
	_proto._RdBtn_special2_i = function () {
		var t = new eui.CheckBox();
		this._RdBtn_special2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin47;
		return t;
	};
	_proto._label_xiazhu10_i = function () {
		var t = new eui.Label();
		this._label_xiazhu10 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "癞子牛牛";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._gp_cuopai_i = function () {
		var t = new eui.Group();
		this._gp_cuopai = t;
		t.x = 130;
		t.y = 61;
		t.elementsContent = [this._Group18_i()];
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._RdBtn_special3_i(),this._label_xiazhu9_i()];
		return t;
	};
	_proto._RdBtn_special3_i = function () {
		var t = new eui.CheckBox();
		this._RdBtn_special3 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin48;
		return t;
	};
	_proto._label_xiazhu9_i = function () {
		var t = new eui.Label();
		this._label_xiazhu9 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "允许搓牌";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "特殊：";
		t.textColor = 0x080451;
		t.x = 25.65;
		t.y = 16;
		return t;
	};
	_proto._gp_paixin_i = function () {
		var t = new eui.Group();
		this._gp_paixin = t;
		t.height = 220;
		t.horizontalCenter = 0.5;
		t.width = 610;
		t.y = 622;
		t.elementsContent = [this._Rect4_i(),this._Label5_i(),this._Group32_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xE2F9FF;
		t.height = 220;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 610;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "牌型：";
		t.textColor = 0x080451;
		t.x = 25.65;
		t.y = 20.56;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 28;
		t.elementsContent = [this._Group22_i(),this._Group25_i(),this._Group28_i(),this._Group31_i()];
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group20_i(),this._Group21_i()];
		return t;
	};
	_proto._Group20_i = function () {
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
		t.skinName = roomCreate$Skin49;
		return t;
	};
	_proto._label_paixin0_i = function () {
		var t = new eui.Label();
		this._label_paixin0 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "四花牛（4倍）";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group21_i = function () {
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
		t.skinName = roomCreate$Skin50;
		return t;
	};
	_proto._label_paixin1_i = function () {
		var t = new eui.Label();
		this._label_paixin1 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "顺子牛（5倍）";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 51;
		t.elementsContent = [this._Group23_i(),this._Group24_i()];
		return t;
	};
	_proto._Group23_i = function () {
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
		t.skinName = roomCreate$Skin51;
		return t;
	};
	_proto._label_paixin2_i = function () {
		var t = new eui.Label();
		this._label_paixin2 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "五花牛（5倍）";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.x = 350;
		t.y = 1;
		t.elementsContent = [this._checkBox_paixin3_i(),this._label_paixin3_i()];
		return t;
	};
	_proto._checkBox_paixin3_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin3 = t;
		t.height = 37;
		t.label = "";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin52;
		return t;
	};
	_proto._label_paixin3_i = function () {
		var t = new eui.Label();
		this._label_paixin3 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "同花牛（6倍）";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 102;
		t.elementsContent = [this._Group26_i(),this._Group27_i()];
		return t;
	};
	_proto._Group26_i = function () {
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
		t.skinName = roomCreate$Skin53;
		return t;
	};
	_proto._label_paixin4_i = function () {
		var t = new eui.Label();
		this._label_paixin4 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "葫芦牛（7倍）";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group27_i = function () {
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
		t.skinName = roomCreate$Skin54;
		return t;
	};
	_proto._label_paixin5_i = function () {
		var t = new eui.Label();
		this._label_paixin5 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "炸弹牛（8倍）";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 153;
		t.elementsContent = [this._Group29_i(),this._Group30_i()];
		return t;
	};
	_proto._Group29_i = function () {
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
		t.skinName = roomCreate$Skin55;
		return t;
	};
	_proto._label_paixin6_i = function () {
		var t = new eui.Label();
		this._label_paixin6 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "五小牛（8倍）";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 350;
		t.elementsContent = [this._checkBox_paixin7_i(),this._label_paixin7_i()];
		return t;
	};
	_proto._checkBox_paixin7_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_paixin7 = t;
		t.height = 37;
		t.label = "";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin56;
		return t;
	};
	_proto._label_paixin7_i = function () {
		var t = new eui.Label();
		this._label_paixin7 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "同花顺（10倍）";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._gp_playcount_i = function () {
		var t = new eui.Group();
		this._gp_playcount = t;
		t.height = 55;
		t.horizontalCenter = 0.5;
		t.width = 610;
		t.y = 852;
		t.elementsContent = [this._Rect5_i(),this._Label6_i(),this._Group33_i(),this._Group34_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xE2F9FF;
		t.height = 55;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 610;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "局数：";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 25.65;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.verticalCenter = 0;
		t.width = 183;
		t.x = 130;
		t.elementsContent = [this._RdBtn_playcount0_i(),this._label_playcount0_i(),this._Image3_i()];
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
		t.skinName = roomCreate$Skin57;
		return t;
	};
	_proto._label_playcount0_i = function () {
		var t = new eui.Label();
		this._label_playcount0 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "12局         x3";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.source = "dsGame_hall_json.niuniu13_create_cardicon";
		t.verticalCenter = 0.5;
		t.width = 46;
		t.x = 114.94;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.verticalCenter = 0;
		t.width = 183;
		t.x = 350;
		t.elementsContent = [this._RdBtn_playcount1_i(),this._label_playcount1_i(),this._Image4_i()];
		return t;
	};
	_proto._RdBtn_playcount1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_playcount1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin58;
		return t;
	};
	_proto._label_playcount1_i = function () {
		var t = new eui.Label();
		this._label_playcount1 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "24局         x6";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.source = "dsGame_hall_json.niuniu13_create_cardicon";
		t.verticalCenter = 0.5;
		t.width = 46;
		t.x = 114.94;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.bottom = 176;
		t.horizontalCenter = 0.5;
		t.elementsContent = [this._Label7_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "创建房间，无人参与，半小时后退还房卡";
		t.textColor = 0x080451;
		return t;
	};
	_proto._gp_xiane_i = function () {
		var t = new eui.Group();
		this._gp_xiane = t;
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.width = 610;
		t.y = 917;
		t.elementsContent = [this._rect_specialBg0_i(),this._Label8_i(),this._Group39_i(),this._Group42_i()];
		return t;
	};
	_proto._rect_specialBg0_i = function () {
		var t = new eui.Rect();
		this._rect_specialBg0 = t;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xE2F9FF;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 610;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "限额：";
		t.textColor = 0x080451;
		t.x = 25.65;
		t.y = 16;
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.x = 130;
		t.y = 10;
		t.elementsContent = [this._Group36_i(),this._Group37_i(),this._Group38_i()];
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 145;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._RdBtn_xiane0_i(),this._label_xiazhu8_i()];
		return t;
	};
	_proto._RdBtn_xiane0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiane0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin59;
		return t;
	};
	_proto._label_xiazhu8_i = function () {
		var t = new eui.Label();
		this._label_xiazhu8 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "300";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this._RdBtn_xiane1_i(),this._label_xiazhu11_i()];
		return t;
	};
	_proto._RdBtn_xiane1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiane1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin60;
		return t;
	};
	_proto._label_xiazhu11_i = function () {
		var t = new eui.Label();
		this._label_xiazhu11 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "600";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.height = 37;
		t.x = 340;
		t.y = 0;
		t.elementsContent = [this._RdBtn_xiane2_i(),this._label_xiazhu14_i()];
		return t;
	};
	_proto._RdBtn_xiane2_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiane2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin61;
		return t;
	};
	_proto._label_xiazhu14_i = function () {
		var t = new eui.Label();
		this._label_xiazhu14 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "1000";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.x = 130;
		t.y = 61;
		t.elementsContent = [this._Group40_i(),this._Group41_i()];
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 145;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._RdBtn_xiane3_i(),this._label_xiazhu12_i()];
		return t;
	};
	_proto._RdBtn_xiane3_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiane3 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin62;
		return t;
	};
	_proto._label_xiazhu12_i = function () {
		var t = new eui.Label();
		this._label_xiazhu12 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "2000";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this._RdBtn_xiane4_i(),this._label_xiazhu13_i()];
		return t;
	};
	_proto._RdBtn_xiane4_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_xiane4 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = roomCreate$Skin63;
		return t;
	};
	_proto._label_xiazhu13_i = function () {
		var t = new eui.Label();
		this._label_xiazhu13 = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "无限";
		t.textColor = 0x080451;
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._btn_createroom_i = function () {
		var t = new eui.Button();
		this._btn_createroom = t;
		t.bottom = 42;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.skinName = roomCreate$Skin64;
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.scaleX = 0.99;
		t.scaleY = 0.99;
		t.y = 26;
		t.elementsContent = [this._gp_mingpai_i(),this._gp_tongbi_i(),this._gp_ziyou_i(),this._gp_niuniu_i(),this._gp_guding_i()];
		return t;
	};
	_proto._gp_mingpai_i = function () {
		var t = new eui.Group();
		this._gp_mingpai = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._img_title_mingpai_i(),this._Label9_i()];
		return t;
	};
	_proto._img_title_mingpai_i = function () {
		var t = new eui.Image();
		this._img_title_mingpai = t;
		t.source = "dsGame_hall_json.niuniu13_create_liangbu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.height = 60;
		t.horizontalCenter = 0.5;
		t.size = 30;
		t.text = "明牌抢庄";
		t.textAlign = "center";
		t.textColor = 0xede175;
		t.width = 60;
		t.y = 16;
		return t;
	};
	_proto._gp_tongbi_i = function () {
		var t = new eui.Group();
		this._gp_tongbi = t;
		t.verticalCenter = 0;
		t.x = 125;
		t.elementsContent = [this._img_title_tongbi_i(),this._Label10_i()];
		return t;
	};
	_proto._img_title_tongbi_i = function () {
		var t = new eui.Image();
		this._img_title_tongbi = t;
		t.source = "dsGame_hall_json.niuniu13_create_anbu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "通比开船";
		t.textAlign = "center";
		t.textColor = 0xEDE175;
		t.width = 60;
		t.y = 16;
		return t;
	};
	_proto._gp_ziyou_i = function () {
		var t = new eui.Group();
		this._gp_ziyou = t;
		t.verticalCenter = 0;
		t.x = 250;
		t.elementsContent = [this._img_title_ziyou_i(),this._Label11_i()];
		return t;
	};
	_proto._img_title_ziyou_i = function () {
		var t = new eui.Image();
		this._img_title_ziyou = t;
		t.source = "dsGame_hall_json.niuniu13_create_anbu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "自由抢庄";
		t.textAlign = "center";
		t.textColor = 0xEDE175;
		t.width = 60;
		t.y = 16;
		return t;
	};
	_proto._gp_niuniu_i = function () {
		var t = new eui.Group();
		this._gp_niuniu = t;
		t.verticalCenter = 0;
		t.x = 375;
		t.elementsContent = [this._img_title_niuniu_i(),this._Label12_i()];
		return t;
	};
	_proto._img_title_niuniu_i = function () {
		var t = new eui.Image();
		this._img_title_niuniu = t;
		t.source = "dsGame_hall_json.niuniu13_create_anbu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牛牛上庄";
		t.textAlign = "center";
		t.textColor = 0xEDE175;
		t.width = 60;
		t.y = 16;
		return t;
	};
	_proto._gp_guding_i = function () {
		var t = new eui.Group();
		this._gp_guding = t;
		t.verticalCenter = 0;
		t.x = 500;
		t.elementsContent = [this._img_title_guding_i(),this._Label13_i()];
		return t;
	};
	_proto._img_title_guding_i = function () {
		var t = new eui.Image();
		this._img_title_guding = t;
		t.source = "dsGame_hall_json.niuniu13_create_anbu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "固定庄家";
		t.textAlign = "center";
		t.textColor = 0xEDE175;
		t.width = 60;
		t.y = 16;
		return t;
	};
	_proto._img_close_i = function () {
		var t = new eui.Image();
		this._img_close = t;
		t.source = "dsGame_hall_json.niuniu13_create_close";
		t.x = 663;
		t.y = -40;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 147;
		t.horizontalCenter = 0.5;
		t.source = "dsGame_hall_json.niuniu13_create_huawen";
		return t;
	};
	return roomCreate;
})(eui.Skin);generateEUI.paths['resource/eui_skins/loginScene.exml'] = window.loginScene = (function (_super) {
	__extends(loginScene, _super);
	function loginScene() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
	}
	var _proto = loginScene.prototype;

	return loginScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/joinItem.exml'] = window.joinItem = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/joinRoomNotice.exml'] = window.joinRoomNotice = (function (_super) {
	__extends(joinRoomNotice, _super);
	var joinRoomNotice$Skin65 = 	(function (_super) {
		__extends(joinRoomNotice$Skin65, _super);
		function joinRoomNotice$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = joinRoomNotice$Skin65.prototype;

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
		return joinRoomNotice$Skin65;
	})(eui.Skin);

	var joinRoomNotice$Skin66 = 	(function (_super) {
		__extends(joinRoomNotice$Skin66, _super);
		function joinRoomNotice$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = joinRoomNotice$Skin66.prototype;

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
		return joinRoomNotice$Skin66;
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
		t.skinName = joinRoomNotice$Skin65;
		return t;
	};
	_proto._btn_guanzhan_i = function () {
		var t = new eui.Button();
		this._btn_guanzhan = t;
		t.label = "观战";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = joinRoomNotice$Skin66;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuRecord.exml'] = window.NiuniuRecordSkin = (function (_super) {
	__extends(NiuniuRecordSkin, _super);
	var NiuniuRecordSkin$Skin67 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin67, _super);
		function NiuniuRecordSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuRecordSkin$Skin67.prototype;

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
			t.verticalCenter = 0;
			return t;
		};
		return NiuniuRecordSkin$Skin67;
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
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 225;
		t.x = 424;
		t.y = 1101.05;
		t.skinName = NiuniuRecordSkin$Skin67;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuRecordItem.exml'] = window.NiuniuRecordItem = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuRule.exml'] = window.NiuniuRule = (function (_super) {
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
		t.height = 1216;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuSkins.exml'] = window.NiuniuSkins = (function (_super) {
	__extends(NiuniuSkins, _super);
	var NiuniuSkins$Skin68 = 	(function (_super) {
		__extends(NiuniuSkins$Skin68, _super);
		function NiuniuSkins$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin68.prototype;

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
		return NiuniuSkins$Skin68;
	})(eui.Skin);

	var NiuniuSkins$Skin69 = 	(function (_super) {
		__extends(NiuniuSkins$Skin69, _super);
		function NiuniuSkins$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin69.prototype;

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
		return NiuniuSkins$Skin69;
	})(eui.Skin);

	var NiuniuSkins$Skin70 = 	(function (_super) {
		__extends(NiuniuSkins$Skin70, _super);
		function NiuniuSkins$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin70.prototype;

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
		return NiuniuSkins$Skin70;
	})(eui.Skin);

	var NiuniuSkins$Skin71 = 	(function (_super) {
		__extends(NiuniuSkins$Skin71, _super);
		function NiuniuSkins$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin71.prototype;

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
		return NiuniuSkins$Skin71;
	})(eui.Skin);

	var NiuniuSkins$Skin72 = 	(function (_super) {
		__extends(NiuniuSkins$Skin72, _super);
		function NiuniuSkins$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin72.prototype;

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
		return NiuniuSkins$Skin72;
	})(eui.Skin);

	var NiuniuSkins$Skin73 = 	(function (_super) {
		__extends(NiuniuSkins$Skin73, _super);
		function NiuniuSkins$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin73.prototype;

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
		return NiuniuSkins$Skin73;
	})(eui.Skin);

	var NiuniuSkins$Skin74 = 	(function (_super) {
		__extends(NiuniuSkins$Skin74, _super);
		function NiuniuSkins$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin74.prototype;

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
		return NiuniuSkins$Skin74;
	})(eui.Skin);

	var NiuniuSkins$Skin75 = 	(function (_super) {
		__extends(NiuniuSkins$Skin75, _super);
		function NiuniuSkins$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin75.prototype;

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
		return NiuniuSkins$Skin75;
	})(eui.Skin);

	var NiuniuSkins$Skin76 = 	(function (_super) {
		__extends(NiuniuSkins$Skin76, _super);
		function NiuniuSkins$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin76.prototype;

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
		return NiuniuSkins$Skin76;
	})(eui.Skin);

	var NiuniuSkins$Skin77 = 	(function (_super) {
		__extends(NiuniuSkins$Skin77, _super);
		function NiuniuSkins$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin77.prototype;

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
		return NiuniuSkins$Skin77;
	})(eui.Skin);

	var NiuniuSkins$Skin78 = 	(function (_super) {
		__extends(NiuniuSkins$Skin78, _super);
		function NiuniuSkins$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin78.prototype;

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
		return NiuniuSkins$Skin78;
	})(eui.Skin);

	var NiuniuSkins$Skin79 = 	(function (_super) {
		__extends(NiuniuSkins$Skin79, _super);
		function NiuniuSkins$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin79.prototype;

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
		return NiuniuSkins$Skin79;
	})(eui.Skin);

	var NiuniuSkins$Skin80 = 	(function (_super) {
		__extends(NiuniuSkins$Skin80, _super);
		function NiuniuSkins$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin80.prototype;

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
		return NiuniuSkins$Skin80;
	})(eui.Skin);

	var NiuniuSkins$Skin81 = 	(function (_super) {
		__extends(NiuniuSkins$Skin81, _super);
		function NiuniuSkins$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin81.prototype;

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
		return NiuniuSkins$Skin81;
	})(eui.Skin);

	var NiuniuSkins$Skin82 = 	(function (_super) {
		__extends(NiuniuSkins$Skin82, _super);
		function NiuniuSkins$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuniuSkins$Skin82.prototype;

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
		return NiuniuSkins$Skin82;
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
		t.height = 1216;
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
		t.x = 0;
		t.y = 1119;
		t.elementsContent = [this._Image1_i(),this._img_chat_i(),this._img_music_i(),this._img_index_i(),this._img_rule_i(),this._img_watch_i(),this._gp_roomcard_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dsGame_13niuniu_json.niuniu13_game_tab_bottom";
		t.verticalCenter = 0;
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
		t.skinName = NiuniuSkins$Skin68;
		return t;
	};
	_proto._btn_qiang_sure2_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure2 = t;
		t.label = "4倍";
		t.x = 120;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin69;
		return t;
	};
	_proto._btn_qiang_sure4_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure4 = t;
		t.label = "4倍";
		t.x = 240;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin70;
		return t;
	};
	_proto._btn_qiang_notsure_i = function () {
		var t = new eui.Button();
		this._btn_qiang_notsure = t;
		t.label = "不抢";
		t.x = 360;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin71;
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
		t.skinName = NiuniuSkins$Skin72;
		return t;
	};
	_proto._btn_qiang_notsure0_i = function () {
		var t = new eui.Button();
		this._btn_qiang_notsure0 = t;
		t.label = "不抢";
		t.x = 136;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin73;
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
		t.skinName = NiuniuSkins$Skin74;
		return t;
	};
	_proto._btn_rank_2_i = function () {
		var t = new eui.Button();
		this._btn_rank_2 = t;
		t.label = "1倍";
		t.x = 120;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin75;
		return t;
	};
	_proto._btn_rank_3_i = function () {
		var t = new eui.Button();
		this._btn_rank_3 = t;
		t.label = "1倍";
		t.x = 240;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin76;
		return t;
	};
	_proto._btn_rank_4_i = function () {
		var t = new eui.Button();
		this._btn_rank_4 = t;
		t.label = "1倍";
		t.x = 360;
		t.y = 0;
		t.skinName = NiuniuSkins$Skin77;
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
		t.skinName = NiuniuSkins$Skin78;
		return t;
	};
	_proto._btn_showcard_i = function () {
		var t = new eui.Button();
		this._btn_showcard = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin79;
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
		t.skinName = NiuniuSkins$Skin80;
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
		t.height = 1216;
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
		t.height = 1216;
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
		t.skinName = NiuniuSkins$Skin81;
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
		t.skinName = NiuniuSkins$Skin82;
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
		t.height = 1216;
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
		t.height = 1216;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuWatchItem.exml'] = window.NiuniuWatchItem = (function (_super) {
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