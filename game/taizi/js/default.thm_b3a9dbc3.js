
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
		t.elementsContent = [this._Image1_i(),this._Group6_i(),this.nickname_i(),this.headImg_i(),this.id_i(),this.ip_i(),this._label_rate_i(),this._gb_zuan_i()];
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
		t.x = 158;
		t.y = 29.33;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 76;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.width = 76;
		t.x = 24.73;
		t.y = 34;
		return t;
	};
	_proto.id_i = function () {
		var t = new eui.Label();
		this.id = t;
		t.size = 25;
		t.text = "666666";
		t.textColor = 0x000000;
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
		t.x = 158;
		t.y = 124;
		return t;
	};
	_proto._gb_zuan_i = function () {
		var t = new eui.Group();
		this._gb_zuan = t;
		t.x = 20;
		t.y = 124;
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
		t.text = "欢迎来到魂族网络游戏平台，祝你玩牌愉快！";
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
		return shu_common_jiesan$Skin10;
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
		t.skinName = shu_common_jiesan$Skin9;
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
		t.skinName = shu_common_jiesan$Skin10;
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
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
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
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
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
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
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
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
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
		return shu_common_menu$Skin17;
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
		t.skinName = shu_common_menu$Skin11;
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
		t.skinName = shu_common_menu$Skin12;
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
		t.skinName = shu_common_menu$Skin13;
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
		t.skinName = shu_common_menu$Skin14;
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
		t.skinName = shu_common_menu$Skin15;
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
		t.skinName = shu_common_menu$Skin16;
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
		t.skinName = shu_common_menu$Skin17;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/create/CreateShisanshui.exml'] = window.CreateShisanshui = (function (_super) {
	__extends(CreateShisanshui, _super);
	var CreateShisanshui$Skin18 = 	(function (_super) {
		__extends(CreateShisanshui$Skin18, _super);
		function CreateShisanshui$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateShisanshui$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.back";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateShisanshui$Skin18;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","source","hallImage_json.radioding")
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
			t.source = "hallImage_json.radiodi";
			t.percentWidth = 100;
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
			t.percentHeight = 100;
			t.source = "hallImage_json.createBtn";
			t.percentWidth = 100;
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

	function CreateShisanshui() {
		_super.call(this);
		this.skinParts = ["hallbg","top_bg","_btn_topback","m_showtip","palycount2","palycountText2","palycount3","palycountText3","palycount1","palycountText1","palycount0","palycountText0","payModeRadio1","payModeRadioText1","payModeRadio0","payModeRadioText0","playmodeRadio0","playmodeRadioText0","playmodeRadio1","playmodeRadioText1","playmodeRadio2","playmodeRadioText2","guiRadio1","guiRadioText1","guiRadio0","guiRadioText0","maRadio0","maRadioText0","maRadio1","maRadioText1","maRadio2","maRadioText2","maRadio3","maRadioText3","gaojiRadio1","gaojiRadioText1","gaojiRadio0","gaojiRadioText0","speedRadio1","gaojiRadioText2","speedRadio0","gaojiRadioText3","_gp_speed","_btn_createroom"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.hallbg_i(),this._Group1_i(),this._Group34_i()];
	}
	var _proto = CreateShisanshui.prototype;

	_proto.hallbg_i = function () {
		var t = new eui.Image();
		this.hallbg = t;
		t.height = 1388;
		t.source = "hallBg_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 106;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.top_bg_i(),this._btn_topback_i(),this._Image1_i()];
		return t;
	};
	_proto.top_bg_i = function () {
		var t = new eui.Image();
		this.top_bg = t;
		t.height = 106;
		t.source = "hallImage_json.top";
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
		t.skinName = CreateShisanshui$Skin18;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.csgtitle";
		t.x = 245;
		t.y = 30;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.height = 773;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -41;
		t.width = 600;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.m_showtip_i(),this._Group7_i(),this._Group11_i(),this._Group16_i(),this._Group20_i(),this._Group26_i(),this._Group30_i(),this._Group33_i(),this._btn_createroom_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 835;
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "hallImage_json.createBg2";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "多人闯三关适用于2-4人游戏";
		t.textColor = 0xf9f0c0;
		t.x = 321.27;
		t.y = 16.6;
		return t;
	};
	_proto.m_showtip_i = function () {
		var t = new eui.Label();
		this.m_showtip = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "注：开房无消耗，坐下后扣出80个钻石，未开始则返还！";
		t.textColor = 0xF9F0C0;
		t.x = 22.5;
		t.y = 799.62;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 560;
		t.x = 20;
		t.y = 45;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Group6_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_ju";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 53;
		t.elementsContent = [this.palycount2_i(),this.palycountText2_i()];
		return t;
	};
	_proto.palycount2_i = function () {
		var t = new eui.RadioButton();
		this.palycount2 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin19;
		return t;
	};
	_proto.palycountText2_i = function () {
		var t = new eui.Label();
		this.palycountText2 = t;
		t.size = 20;
		t.text = "20局(钻石x160)";
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 53;
		t.elementsContent = [this.palycount3_i(),this.palycountText3_i()];
		return t;
	};
	_proto.palycount3_i = function () {
		var t = new eui.RadioButton();
		this.palycount3 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin20;
		return t;
	};
	_proto.palycountText3_i = function () {
		var t = new eui.Label();
		this.palycountText3 = t;
		t.size = 20;
		t.text = "30局(钻石x160)";
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.palycount1_i(),this.palycountText1_i()];
		return t;
	};
	_proto.palycount1_i = function () {
		var t = new eui.RadioButton();
		this.palycount1 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin21;
		return t;
	};
	_proto.palycountText1_i = function () {
		var t = new eui.Label();
		this.palycountText1 = t;
		t.size = 20;
		t.text = "15局(钻石x120)";
		t.x = 44.5;
		t.y = 8;
		return t;
	};
	_proto._Group5_i = function () {
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
		t.skinName = CreateShisanshui$Skin22;
		return t;
	};
	_proto.palycountText0_i = function () {
		var t = new eui.Label();
		this.palycountText0 = t;
		t.size = 20;
		t.text = "10局(钻石x80)";
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 20;
		t.y = 185;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Group10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_pay";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group8_i = function () {
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
		t.skinName = CreateShisanshui$Skin23;
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
	_proto._Group9_i = function () {
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
		t.skinName = CreateShisanshui$Skin24;
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
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.width = 560;
		t.x = 20;
		t.y = 345;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Group15_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_wanfa";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group12_i(),this._Group13_i(),this._Group14_i()];
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.playmodeRadio0_i(),this.playmodeRadioText0_i()];
		return t;
	};
	_proto.playmodeRadio0_i = function () {
		var t = new eui.RadioButton();
		this.playmodeRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin25;
		return t;
	};
	_proto.playmodeRadioText0_i = function () {
		var t = new eui.Label();
		this.playmodeRadioText0 = t;
		t.size = 20;
		t.text = "13种特殊牌型";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.playmodeRadio1_i(),this.playmodeRadioText1_i()];
		return t;
	};
	_proto.playmodeRadio1_i = function () {
		var t = new eui.RadioButton();
		this.playmodeRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin26;
		return t;
	};
	_proto.playmodeRadioText1_i = function () {
		var t = new eui.Label();
		this.playmodeRadioText1 = t;
		t.size = 20;
		t.text = "23种特殊牌型";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 52;
		t.elementsContent = [this.playmodeRadio2_i(),this.playmodeRadioText2_i()];
		return t;
	};
	_proto.playmodeRadio2_i = function () {
		var t = new eui.RadioButton();
		this.playmodeRadio2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin27;
		return t;
	};
	_proto.playmodeRadioText2_i = function () {
		var t = new eui.Label();
		this.playmodeRadioText2 = t;
		t.size = 20;
		t.text = "无特殊牌型";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 20;
		t.y = 265;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Group19_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_ghost";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.width = 2;
		t.x = 144;
		t.y = 16;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group17_i(),this._Group18_i()];
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.guiRadio1_i(),this.guiRadioText1_i()];
		return t;
	};
	_proto.guiRadio1_i = function () {
		var t = new eui.RadioButton();
		this.guiRadio1 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateShisanshui$Skin28;
		return t;
	};
	_proto.guiRadioText1_i = function () {
		var t = new eui.Label();
		this.guiRadioText1 = t;
		t.size = 20;
		t.text = "无鬼牌";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group18_i = function () {
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
		t.skinName = CreateShisanshui$Skin29;
		return t;
	};
	_proto.guiRadioText0_i = function () {
		var t = new eui.Label();
		this.guiRadioText0 = t;
		t.size = 20;
		t.text = "有鬼牌";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.width = 560;
		t.x = 20;
		t.y = 495;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Group25_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_ma";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group21_i(),this._Group22_i(),this._Group23_i(),this._Group24_i()];
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 0;
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
		t.skinName = CreateShisanshui$Skin30;
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
	_proto._Group22_i = function () {
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
		t.skinName = CreateShisanshui$Skin31;
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
	_proto._Group23_i = function () {
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
		t.skinName = CreateShisanshui$Skin32;
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
	_proto._Group24_i = function () {
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
		t.skinName = CreateShisanshui$Skin33;
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
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 20;
		t.y = 645;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Group29_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 1;
		t.y = -2;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_high";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.x = 157;
		t.y = 21;
		t.elementsContent = [this._Group27_i(),this._Group28_i()];
		return t;
	};
	_proto._Group27_i = function () {
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
		t.text = "同时开牌";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group28_i = function () {
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
		t.text = "顺序开牌";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 20;
		t.y = 725;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._Image23_i(),this._gp_speed_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 1;
		t.y = -2;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_high";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._gp_speed_i = function () {
		var t = new eui.Group();
		this._gp_speed = t;
		t.x = 157;
		t.y = 21;
		t.elementsContent = [this._Group31_i(),this._Group32_i()];
		return t;
	};
	_proto._Group31_i = function () {
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
		t.skinName = CreateShisanshui$Skin36;
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
	_proto._Group32_i = function () {
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
		t.skinName = CreateShisanshui$Skin37;
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
		t.verticalCenter = 504.5;
		t.skinName = CreateShisanshui$Skin38;
		return t;
	};
	return CreateShisanshui;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/create/CreateSuohaSceneSkin.exml'] = window.CreateSuohaSceneSkin = (function (_super) {
	__extends(CreateSuohaSceneSkin, _super);
	var CreateSuohaSceneSkin$Skin39 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin39, _super);
		function CreateSuohaSceneSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin39.prototype;

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
		return CreateSuohaSceneSkin$Skin39;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin40 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin40, _super);
		function CreateSuohaSceneSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin40;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin41 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin41, _super);
		function CreateSuohaSceneSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin41;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin42 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin42, _super);
		function CreateSuohaSceneSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin42;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin43 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin43, _super);
		function CreateSuohaSceneSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin43;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin44 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin44, _super);
		function CreateSuohaSceneSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin44;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin45 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin45, _super);
		function CreateSuohaSceneSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin45;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin46 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin46, _super);
		function CreateSuohaSceneSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin46;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin47 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin47, _super);
		function CreateSuohaSceneSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin47;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin48 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin48, _super);
		function CreateSuohaSceneSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin48;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin49 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin49, _super);
		function CreateSuohaSceneSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin49;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin50 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin50, _super);
		function CreateSuohaSceneSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin50;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin51 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin51, _super);
		function CreateSuohaSceneSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin51;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin52 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin52, _super);
		function CreateSuohaSceneSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin52;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin53 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin53, _super);
		function CreateSuohaSceneSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin53;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin54 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin54, _super);
		function CreateSuohaSceneSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin54;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin55 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin55, _super);
		function CreateSuohaSceneSkin$Skin55() {
			_super.call(this);
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
		var _proto = CreateSuohaSceneSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_5_json.button_create";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSuohaSceneSkin$Skin55;
	})(eui.Skin);

	function CreateSuohaSceneSkin() {
		_super.call(this);
		this.skinParts = ["hallbg","top_bg","_btn_topback","m_showtip","palycount2","palycountText2","palycount1","palycountText1","palycount0","palycountText0","payModeRadio1","payModeRadioText1","payModeRadio0","payModeRadioText0","fenRadio0","fenRadioText0","fenRadio1","fenRadioText1","fenRadio2","fenRadioText2","fenRadio3","fenRadioText3","fenRadio4","fenRadioText4","fenRadio5","fenRadioText5","xianzhiRadio1","xianzhiRadioText1","xianzhiRadio0","xianzhiRadioText0","zhongtuRadio1","zhongtuRadioText1","zhongtuRadio0","zhongtuRadioText0","_btn_createroom"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.hallbg_i(),this._Group1_i(),this._Group27_i()];
	}
	var _proto = CreateSuohaSceneSkin.prototype;

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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 119;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.top_bg_i(),this._btn_topback_i(),this._Image1_i()];
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
		t.skinName = CreateSuohaSceneSkin$Skin39;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 52;
		t.source = "tz_hall_2_json.title_game_1";
		t.width = 221;
		t.x = 213.98;
		t.y = 30;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.height = 773;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.m_showtip_i(),this._Group6_i(),this._Group10_i(),this._Group18_i(),this._Group22_i(),this._Group26_i(),this._btn_createroom_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 650;
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "tz_hall_1_json.bg9_find";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "港式五张适用于2-6人游戏";
		t.textColor = 0xf9f0c0;
		t.x = 344;
		t.y = 22.68;
		return t;
	};
	_proto.m_showtip_i = function () {
		var t = new eui.Label();
		this.m_showtip = t;
		t.size = 20;
		t.text = "注：开房无消耗，坐下后扣出80个钻石，未开始则返还！";
		t.textColor = 0xF9F0C0;
		t.x = 22.5;
		t.y = 605.68;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 560;
		t.x = 20;
		t.y = 66.68;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Group5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_ju2";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 53;
		t.elementsContent = [this.palycount2_i(),this.palycountText2_i()];
		return t;
	};
	_proto.palycount2_i = function () {
		var t = new eui.RadioButton();
		this.palycount2 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin40;
		return t;
	};
	_proto.palycountText2_i = function () {
		var t = new eui.Label();
		this.palycountText2 = t;
		t.size = 20;
		t.text = "30局(钻石x160)";
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.palycount1_i(),this.palycountText1_i()];
		return t;
	};
	_proto.palycount1_i = function () {
		var t = new eui.RadioButton();
		this.palycount1 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin41;
		return t;
	};
	_proto.palycountText1_i = function () {
		var t = new eui.Label();
		this.palycountText1 = t;
		t.size = 20;
		t.text = "20局(钻石x120)";
		t.x = 44.5;
		t.y = 8;
		return t;
	};
	_proto._Group4_i = function () {
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
		t.skinName = CreateSuohaSceneSkin$Skin42;
		return t;
	};
	_proto.palycountText0_i = function () {
		var t = new eui.Label();
		this.palycountText0 = t;
		t.size = 20;
		t.text = "10局(钻石x80)";
		t.x = 45.5;
		t.y = 8;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 20;
		t.y = 206.68;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Group9_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_pay2";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Group7_i = function () {
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
		t.skinName = CreateSuohaSceneSkin$Skin43;
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
	_proto._Group8_i = function () {
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
		t.skinName = CreateSuohaSceneSkin$Skin44;
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
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.width = 560;
		t.x = 20;
		t.y = 286.68;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Group17_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_score";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 2;
		t.y = 0;
		t.elementsContent = [this.fenRadio0_i(),this.fenRadioText0_i()];
		return t;
	};
	_proto.fenRadio0_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin45;
		return t;
	};
	_proto.fenRadioText0_i = function () {
		var t = new eui.Label();
		this.fenRadioText0 = t;
		t.size = 20;
		t.text = "50";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 144;
		t.y = 0;
		t.elementsContent = [this.fenRadio1_i(),this.fenRadioText1_i()];
		return t;
	};
	_proto.fenRadio1_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin46;
		return t;
	};
	_proto.fenRadioText1_i = function () {
		var t = new eui.Label();
		this.fenRadioText1 = t;
		t.size = 20;
		t.text = "100";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 288;
		t.y = 0;
		t.elementsContent = [this.fenRadio2_i(),this.fenRadioText2_i()];
		return t;
	};
	_proto.fenRadio2_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin47;
		return t;
	};
	_proto.fenRadioText2_i = function () {
		var t = new eui.Label();
		this.fenRadioText2 = t;
		t.size = 20;
		t.text = "200";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 52;
		t.elementsContent = [this.fenRadio3_i(),this.fenRadioText3_i()];
		return t;
	};
	_proto.fenRadio3_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio3 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin48;
		return t;
	};
	_proto.fenRadioText3_i = function () {
		var t = new eui.Label();
		this.fenRadioText3 = t;
		t.size = 20;
		t.text = "300";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 144;
		t.y = 52;
		t.elementsContent = [this.fenRadio4_i(),this.fenRadioText4_i()];
		return t;
	};
	_proto.fenRadio4_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio4 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin49;
		return t;
	};
	_proto.fenRadioText4_i = function () {
		var t = new eui.Label();
		this.fenRadioText4 = t;
		t.size = 20;
		t.text = "500";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 288;
		t.y = 52;
		t.elementsContent = [this.fenRadio5_i(),this.fenRadioText5_i()];
		return t;
	};
	_proto.fenRadio5_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio5 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin50;
		return t;
	};
	_proto.fenRadioText5_i = function () {
		var t = new eui.Label();
		this.fenRadioText5 = t;
		t.size = 20;
		t.text = "1000";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 20;
		t.y = 436.68;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Group21_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_50";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.width = 2;
		t.x = 144;
		t.y = 16;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 157;
		t.elementsContent = [this._Group19_i(),this._Group20_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 206.5;
		t.y = 0;
		t.elementsContent = [this.xianzhiRadio1_i(),this.xianzhiRadioText1_i()];
		return t;
	};
	_proto.xianzhiRadio1_i = function () {
		var t = new eui.RadioButton();
		this.xianzhiRadio1 = t;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin51;
		return t;
	};
	_proto.xianzhiRadioText1_i = function () {
		var t = new eui.Label();
		this.xianzhiRadioText1 = t;
		t.size = 20;
		t.text = "限制一次";
		t.verticalCenter = 0;
		t.x = 50.5;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.xianzhiRadio0_i(),this.xianzhiRadioText0_i()];
		return t;
	};
	_proto.xianzhiRadio0_i = function () {
		var t = new eui.RadioButton();
		this.xianzhiRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin52;
		return t;
	};
	_proto.xianzhiRadioText0_i = function () {
		var t = new eui.Label();
		this.xianzhiRadioText0 = t;
		t.size = 20;
		t.text = "不限制";
		t.verticalCenter = 0;
		t.x = 51.5;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 20;
		t.y = 516.68;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Group25_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 1;
		t.y = -2;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_join";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.verticalCenter = 0;
		t.width = 2;
		t.x = 144;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 157;
		t.y = 21;
		t.elementsContent = [this._Group23_i(),this._Group24_i()];
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 206.5;
		t.elementsContent = [this.zhongtuRadio1_i(),this.zhongtuRadioText1_i()];
		return t;
	};
	_proto.zhongtuRadio1_i = function () {
		var t = new eui.RadioButton();
		this.zhongtuRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin53;
		return t;
	};
	_proto.zhongtuRadioText1_i = function () {
		var t = new eui.Label();
		this.zhongtuRadioText1 = t;
		t.size = 20;
		t.text = "不允许";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.zhongtuRadio0_i(),this.zhongtuRadioText0_i()];
		return t;
	};
	_proto.zhongtuRadio0_i = function () {
		var t = new eui.RadioButton();
		this.zhongtuRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin54;
		return t;
	};
	_proto.zhongtuRadioText0_i = function () {
		var t = new eui.Label();
		this.zhongtuRadioText0 = t;
		t.size = 20;
		t.text = "允许";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._btn_createroom_i = function () {
		var t = new eui.Button();
		this._btn_createroom = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 332.5;
		t.skinName = CreateSuohaSceneSkin$Skin55;
		return t;
	};
	return CreateSuohaSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/CreateNiuniuScene.exml'] = window.CreateNiuniuSceneSkin = (function (_super) {
	__extends(CreateNiuniuSceneSkin, _super);
	var CreateNiuniuSceneSkin$Skin56 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin56, _super);
		function CreateNiuniuSceneSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin56.prototype;

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
		return CreateNiuniuSceneSkin$Skin56;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin57 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin57, _super);
		function CreateNiuniuSceneSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin57;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin58 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin58, _super);
		function CreateNiuniuSceneSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin58;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin59 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin59, _super);
		function CreateNiuniuSceneSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin59;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin60 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin60, _super);
		function CreateNiuniuSceneSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin60;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin61 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin61, _super);
		function CreateNiuniuSceneSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin61;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin62 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin62, _super);
		function CreateNiuniuSceneSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin62;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin63 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin63, _super);
		function CreateNiuniuSceneSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin63;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin64 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin64, _super);
		function CreateNiuniuSceneSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin64;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin65 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin65, _super);
		function CreateNiuniuSceneSkin$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin65;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin66 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin66, _super);
		function CreateNiuniuSceneSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin66;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin67 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin67, _super);
		function CreateNiuniuSceneSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin67;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin68 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin68, _super);
		function CreateNiuniuSceneSkin$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin68;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin69 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin69, _super);
		function CreateNiuniuSceneSkin$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin69;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin70 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin70, _super);
		function CreateNiuniuSceneSkin$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin70;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin71 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin71, _super);
		function CreateNiuniuSceneSkin$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin71;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin72 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin72, _super);
		function CreateNiuniuSceneSkin$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.cicle_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.cicle_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin72;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin73 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin73, _super);
		function CreateNiuniuSceneSkin$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tz_hall_1_json.fang_on")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_1_json.fang_off";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin73;
	})(eui.Skin);

	var CreateNiuniuSceneSkin$Skin74 = 	(function (_super) {
		__extends(CreateNiuniuSceneSkin$Skin74, _super);
		function CreateNiuniuSceneSkin$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateNiuniuSceneSkin$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tz_hall_5_json.button_create";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateNiuniuSceneSkin$Skin74;
	})(eui.Skin);

	function CreateNiuniuSceneSkin() {
		_super.call(this);
		this.skinParts = ["hallbg","top_bg","_btn_topback","palycount0","palycount1","palycount2","palycountText2","palycountText1","palycountText0","m_showtip","payModeRadio0","payModeRadio1","jokerRadio0","jokerRadio1","jokerText1","jokerText0","baseScore1","baseScore0","baseScore2","playModeRadio0","playModeRadio1","playModeRadio10","playModeRadio11","playModeRadio12","playModeRadio13","cuopaiCheckbox","_btn_createroom"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.hallbg_i(),this._Group1_i(),this._Image2_i(),this._Group2_i(),this._Label1_i(),this.m_showtip_i(),this._Group3_i(),this._Group4_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._btn_createroom_i()];
	}
	var _proto = CreateNiuniuSceneSkin.prototype;

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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 119;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.top_bg_i(),this._btn_topback_i(),this._Image1_i()];
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
		t.skinName = CreateNiuniuSceneSkin$Skin56;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 52;
		t.source = "tz_hall_2_json.title_game_2";
		t.width = 221;
		t.x = 213.98;
		t.y = 30;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 820;
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "tz_hall_1_json.bg9_find";
		t.width = 600;
		t.x = 20;
		t.y = 127.32;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 560;
		t.x = 40;
		t.y = 216.35;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this.palycount0_i(),this.palycount1_i(),this.palycount2_i(),this.palycountText2_i(),this.palycountText1_i(),this.palycountText0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_ju";
		t.width = 71;
		t.x = 28;
		t.y = 24;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.width = 2;
		t.x = 110;
		t.y = 28;
		return t;
	};
	_proto.palycount0_i = function () {
		var t = new eui.RadioButton();
		this.palycount0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 133.5;
		t.y = 21;
		t.skinName = CreateNiuniuSceneSkin$Skin57;
		return t;
	};
	_proto.palycount1_i = function () {
		var t = new eui.RadioButton();
		this.palycount1 = t;
		t.label = "";
		t.width = 36;
		t.x = 340;
		t.y = 21;
		t.skinName = CreateNiuniuSceneSkin$Skin58;
		return t;
	};
	_proto.palycount2_i = function () {
		var t = new eui.RadioButton();
		this.palycount2 = t;
		t.label = "";
		t.width = 36;
		t.x = 133.5;
		t.y = 74;
		t.skinName = CreateNiuniuSceneSkin$Skin59;
		return t;
	};
	_proto.palycountText2_i = function () {
		var t = new eui.Label();
		this.palycountText2 = t;
		t.size = 20;
		t.text = "30局(钻石x160)";
		t.x = 185;
		t.y = 82;
		return t;
	};
	_proto.palycountText1_i = function () {
		var t = new eui.Label();
		this.palycountText1 = t;
		t.size = 20;
		t.text = "20局(钻石x120)";
		t.x = 390.5;
		t.y = 29;
		return t;
	};
	_proto.palycountText0_i = function () {
		var t = new eui.Label();
		this.palycountText0 = t;
		t.size = 20;
		t.text = "10局(钻石x80)";
		t.x = 185;
		t.y = 29;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "疯狂拼十适用于2-5人游戏";
		t.textColor = 0xf9f0c0;
		t.x = 364;
		t.y = 168.14;
		return t;
	};
	_proto.m_showtip_i = function () {
		var t = new eui.Label();
		this.m_showtip = t;
		t.size = 20;
		t.text = "注：开房无消耗，坐下后扣出80个钻石，未开始则返还！";
		t.textColor = 0xF9F0C0;
		t.x = 42.5;
		t.y = 878.27;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 40;
		t.y = 353.35;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this.payModeRadio0_i(),this.payModeRadio1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_pay";
		t.width = 71;
		t.x = 28;
		t.y = 21;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.width = 2;
		t.x = 110;
		t.y = 16;
		return t;
	};
	_proto.payModeRadio0_i = function () {
		var t = new eui.RadioButton();
		this.payModeRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 133.5;
		t.y = 18;
		t.skinName = CreateNiuniuSceneSkin$Skin60;
		return t;
	};
	_proto.payModeRadio1_i = function () {
		var t = new eui.RadioButton();
		this.payModeRadio1 = t;
		t.label = "";
		t.width = 36;
		t.x = 340;
		t.y = 18;
		t.skinName = CreateNiuniuSceneSkin$Skin61;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "房主支付";
		t.x = 390.5;
		t.y = 26;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "AA支付";
		t.x = 185;
		t.y = 26;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 40;
		t.y = 507.01;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this.jokerRadio0_i(),this.jokerRadio1_i(),this.jokerText1_i(),this.jokerText0_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_ghost";
		t.width = 71;
		t.x = 28;
		t.y = 21;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.width = 2;
		t.x = 110;
		t.y = 16;
		return t;
	};
	_proto.jokerRadio0_i = function () {
		var t = new eui.RadioButton();
		this.jokerRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 133.5;
		t.y = 18;
		t.skinName = CreateNiuniuSceneSkin$Skin62;
		return t;
	};
	_proto.jokerRadio1_i = function () {
		var t = new eui.RadioButton();
		this.jokerRadio1 = t;
		t.label = "";
		t.width = 36;
		t.x = 340;
		t.y = 18;
		t.skinName = CreateNiuniuSceneSkin$Skin63;
		return t;
	};
	_proto.jokerText1_i = function () {
		var t = new eui.Label();
		this.jokerText1 = t;
		t.size = 20;
		t.text = "无鬼牌";
		t.x = 390.5;
		t.y = 26;
		return t;
	};
	_proto.jokerText0_i = function () {
		var t = new eui.Label();
		this.jokerText0 = t;
		t.size = 20;
		t.text = "有鬼牌";
		t.x = 185;
		t.y = 26;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 560;
		t.x = 40;
		t.y = 429.68;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Group8_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_rank";
		t.width = 71;
		t.x = 28;
		t.y = 21;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.width = 2;
		t.x = 110;
		t.y = 16;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 133.5;
		t.y = 18;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.y = 0;
		t.elementsContent = [this.baseScore1_i(),this._Label4_i()];
		return t;
	};
	_proto.baseScore1_i = function () {
		var t = new eui.RadioButton();
		this.baseScore1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateNiuniuSceneSkin$Skin64;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "8分";
		t.x = 50.5;
		t.y = 8;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.baseScore0_i(),this._Label5_i()];
		return t;
	};
	_proto.baseScore0_i = function () {
		var t = new eui.RadioButton();
		this.baseScore0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateNiuniuSceneSkin$Skin65;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "3分";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 135;
		t.y = 0;
		t.elementsContent = [this.baseScore2_i(),this._Label6_i()];
		return t;
	};
	_proto.baseScore2_i = function () {
		var t = new eui.RadioButton();
		this.baseScore2 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateNiuniuSceneSkin$Skin66;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "5分";
		t.x = 51.5;
		t.y = 8;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 260;
		t.width = 560;
		t.x = 40;
		t.y = 584.03;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Image17_i(),this.playModeRadio0_i(),this.playModeRadio1_i(),this._Label7_i(),this._Label8_i(),this._Image18_i(),this.playModeRadio10_i(),this.playModeRadio11_i(),this.playModeRadio12_i(),this.playModeRadio13_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 260;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 1;
		t.y = -2;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_zhuang";
		t.width = 71;
		t.x = 28;
		t.y = 24;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.width = 2;
		t.x = 110;
		t.y = 28;
		return t;
	};
	_proto.playModeRadio0_i = function () {
		var t = new eui.RadioButton();
		this.playModeRadio0 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 133.5;
		t.y = 21;
		t.skinName = CreateNiuniuSceneSkin$Skin67;
		return t;
	};
	_proto.playModeRadio1_i = function () {
		var t = new eui.RadioButton();
		this.playModeRadio1 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 133.5;
		t.y = 122.99;
		t.skinName = CreateNiuniuSceneSkin$Skin68;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "轮庄";
		t.x = 185;
		t.y = 130.99;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "抢庄";
		t.x = 185;
		t.y = 29;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 172;
		t.source = "tz_hall_1_json.creatr_niuniu_ele";
		t.width = 25;
		t.x = 265.48;
		t.y = 56.66;
		return t;
	};
	_proto.playModeRadio10_i = function () {
		var t = new eui.RadioButton();
		this.playModeRadio10 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 317.16;
		t.y = 45.99;
		t.skinName = CreateNiuniuSceneSkin$Skin69;
		return t;
	};
	_proto.playModeRadio11_i = function () {
		var t = new eui.RadioButton();
		this.playModeRadio11 = t;
		t.height = 36;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 36;
		t.x = 317.16;
		t.y = 96;
		t.skinName = CreateNiuniuSceneSkin$Skin70;
		return t;
	};
	_proto.playModeRadio12_i = function () {
		var t = new eui.RadioButton();
		this.playModeRadio12 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 318.5;
		t.y = 145.99;
		t.skinName = CreateNiuniuSceneSkin$Skin71;
		return t;
	};
	_proto.playModeRadio13_i = function () {
		var t = new eui.RadioButton();
		this.playModeRadio13 = t;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 318.5;
		t.y = 196.99;
		t.skinName = CreateNiuniuSceneSkin$Skin72;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "无点下庄";
		t.x = 370.5;
		t.y = 53.99;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "十点上庄";
		t.x = 370.5;
		t.y = 104;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "每把换庄";
		t.x = 367.66;
		t.y = 152.99;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "二点及以下";
		t.x = 367.66;
		t.y = 202.97;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.visible = false;
		t.width = 560;
		t.x = 39;
		t.y = 813.67;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Label13_i(),this.cuopaiCheckbox_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(12,12,6,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_1_json.create_item_bg";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_hall_2_json.txt_create_high";
		t.width = 71;
		t.x = 28;
		t.y = 21;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(0,0,2,2);
		t.source = "tz_hall_1_json.line_shu";
		t.width = 2;
		t.x = 110;
		t.y = 16;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "搓牌";
		t.x = 185;
		t.y = 26;
		return t;
	};
	_proto.cuopaiCheckbox_i = function () {
		var t = new eui.CheckBox();
		this.cuopaiCheckbox = t;
		t.label = "";
		t.x = 133.5;
		t.y = 18;
		t.skinName = CreateNiuniuSceneSkin$Skin73;
		return t;
	};
	_proto._btn_createroom_i = function () {
		var t = new eui.Button();
		this._btn_createroom = t;
		t.label = "";
		t.x = 180.5;
		t.y = 952.32;
		t.skinName = CreateNiuniuSceneSkin$Skin74;
		return t;
	};
	return CreateNiuniuSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/faxian/faxianItem.exml'] = window.faxianItem = (function (_super) {
	__extends(faxianItem, _super);
	var faxianItem$Skin75 = 	(function (_super) {
		__extends(faxianItem$Skin75, _super);
		function faxianItem$Skin75() {
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
		var _proto = faxianItem$Skin75.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.csgenter";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return faxianItem$Skin75;
	})(eui.Skin);

	function faxianItem() {
		_super.call(this);
		this.skinParts = ["bg","enterBtn","statusText","pwd"];
		
		this.height = 83;
		this.width = 546;
		this.elementsContent = [this.bg_i(),this.enterBtn_i(),this._Group2_i()];
	}
	var _proto = faxianItem.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "hallImage_json.csgzhanji";
		t.y = 0;
		return t;
	};
	_proto.enterBtn_i = function () {
		var t = new eui.Button();
		this.enterBtn = t;
		t.horizontalCenter = 200;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = faxianItem$Skin75;
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
	function faxianMainScene() {
		_super.call(this);
		this.skinParts = ["content"];
		
		this.height = 870;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = faxianMainScene.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 837;
		t.horizontalCenter = 0;
		t.scaleX = 0.99;
		t.scaleY = 0.99;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 837;
		t.scale9Grid = new egret.Rectangle(22,18,15,14);
		t.source = "hallImage_json.zhanjisignfindBg";
		t.width = 580;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.faxian";
		t.y = 20;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 760;
		t.scale9Grid = new egret.Rectangle(9,9,38,47);
		t.source = "hallImage_json.findBg";
		t.width = 560;
		t.x = 10;
		t.y = 70;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 740;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 80;
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
		t.source = "hallImage_json.gswzzhanji";
		t.y = 0;
		return t;
	};
	return faxianMainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/hallMainScene.exml'] = window.hallMainScene = (function (_super) {
	__extends(hallMainScene, _super);
	var hallMainScene$Skin76 = 	(function (_super) {
		__extends(hallMainScene$Skin76, _super);
		function hallMainScene$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainScene$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.csg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainScene$Skin76;
	})(eui.Skin);

	var hallMainScene$Skin77 = 	(function (_super) {
		__extends(hallMainScene$Skin77, _super);
		function hallMainScene$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainScene$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.hlnn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainScene$Skin77;
	})(eui.Skin);

	var hallMainScene$Skin78 = 	(function (_super) {
		__extends(hallMainScene$Skin78, _super);
		function hallMainScene$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainScene$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.gswz";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainScene$Skin78;
	})(eui.Skin);

	var hallMainScene$Skin79 = 	(function (_super) {
		__extends(hallMainScene$Skin79, _super);
		function hallMainScene$Skin79() {
			_super.call(this);
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
		var _proto = hallMainScene$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_2_json.button_game_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainScene$Skin79;
	})(eui.Skin);

	var hallMainScene$Skin80 = 	(function (_super) {
		__extends(hallMainScene$Skin80, _super);
		function hallMainScene$Skin80() {
			_super.call(this);
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
		var _proto = hallMainScene$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_2_json.button_game_5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainScene$Skin80;
	})(eui.Skin);

	function hallMainScene() {
		_super.call(this);
		this.skinParts = ["m_notice","lunboGroup","lunScroller","_btn_game_shisanshui","_gp_shisanshui","_btn_game_niuniu","_gp_niuniu","_btn_game_showhand","_gp_showhand","gameList0","gameMainScroller","_btn_game_paijiu","_btn_game_baijiale"];
		
		this.height = 882;
		this.width = 640;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = hallMainScene.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this.lunScroller_i(),this._Image2_i(),this.gameMainScroller_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = 15;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.laba";
		t.verticalCenter = 0;
		t.x = 10;
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
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
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
	_proto.lunScroller_i = function () {
		var t = new eui.Scroller();
		this.lunScroller = t;
		t.height = 282;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.width = 628;
		t.y = 56;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.lunboGroup_i()];
		return t;
	};
	_proto.lunboGroup_i = function () {
		var t = new eui.Group();
		this.lunboGroup = t;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.xiangyun";
		t.y = 348;
		return t;
	};
	_proto.gameMainScroller_i = function () {
		var t = new eui.Scroller();
		this.gameMainScroller = t;
		t.height = 476;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 640;
		t.y = 368;
		t.viewport = this.gameList0_i();
		return t;
	};
	_proto.gameList0_i = function () {
		var t = new eui.Group();
		this.gameList0 = t;
		t.anchorOffsetY = 0;
		t.height = 476;
		t.y = -13;
		t.elementsContent = [this._gp_shisanshui_i(),this._gp_niuniu_i(),this._gp_showhand_i()];
		return t;
	};
	_proto._gp_shisanshui_i = function () {
		var t = new eui.Group();
		this._gp_shisanshui = t;
		t.height = 151;
		t.horizontalCenter = 0;
		t.width = 630;
		t.y = 6;
		t.elementsContent = [this._btn_game_shisanshui_i()];
		return t;
	};
	_proto._btn_game_shisanshui_i = function () {
		var t = new eui.Button();
		this._btn_game_shisanshui = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hallMainScene$Skin76;
		return t;
	};
	_proto._gp_niuniu_i = function () {
		var t = new eui.Group();
		this._gp_niuniu = t;
		t.height = 151;
		t.horizontalCenter = 0;
		t.width = 630;
		t.y = 163;
		t.elementsContent = [this._btn_game_niuniu_i()];
		return t;
	};
	_proto._btn_game_niuniu_i = function () {
		var t = new eui.Button();
		this._btn_game_niuniu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hallMainScene$Skin77;
		return t;
	};
	_proto._gp_showhand_i = function () {
		var t = new eui.Group();
		this._gp_showhand = t;
		t.height = 151;
		t.horizontalCenter = 0;
		t.width = 630;
		t.y = 319;
		t.elementsContent = [this._btn_game_showhand_i()];
		return t;
	};
	_proto._btn_game_showhand_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = hallMainScene$Skin78;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 170;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.y = 535;
		t.elementsContent = [this._btn_game_paijiu_i()];
		return t;
	};
	_proto._btn_game_paijiu_i = function () {
		var t = new eui.Button();
		this._btn_game_paijiu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hallMainScene$Skin79;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 170;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.y = 712;
		t.elementsContent = [this._btn_game_baijiale_i()];
		return t;
	};
	_proto._btn_game_baijiale_i = function () {
		var t = new eui.Button();
		this._btn_game_baijiale = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hallMainScene$Skin80;
		return t;
	};
	return hallMainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/historyItem.exml'] = window.historyItem = (function (_super) {
	__extends(historyItem, _super);
	function historyItem() {
		_super.call(this);
		this.skinParts = ["orderTime","zuanshi","money"];
		
		this.height = 30;
		this.width = 433;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = historyItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.orderTime_i(),this.zuanshi_i(),this.money_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "hallImage_json.shopheng1";
		t.x = 0;
		return t;
	};
	_proto.orderTime_i = function () {
		var t = new eui.Label();
		this.orderTime = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 6;
		t.size = 20;
		t.text = "2010-00-00 00:00:00";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto.zuanshi_i = function () {
		var t = new eui.Label();
		this.zuanshi = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 64.5;
		t.size = 20;
		t.text = "钻石1000";
		t.textAlign = "center";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 20;
		t.text = "￥100";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	return historyItem;
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
			t.percentHeight = 100;
			t.source = "hallImage_json.zero";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			t.source = "hallImage_json.qiandaoicon";
			t.percentWidth = 100;
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
			t.percentHeight = 100;
			t.source = "hallImage_json.csg";
			t.percentWidth = 100;
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
			t.percentHeight = 100;
			t.source = "hallImage_json.hlnn";
			t.percentWidth = 100;
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
			t.percentHeight = 100;
			t.source = "hallImage_json.gswz";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
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
			t.source = "tz_hall_2_json.button_game_4";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
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
			t.source = "tz_hall_2_json.button_game_5";
			t.percentWidth = 100;
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

	var huanleHall$Skin88 = 	(function (_super) {
		__extends(huanleHall$Skin88, _super);
		function huanleHall$Skin88() {
			_super.call(this);
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
		var _proto = huanleHall$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.shopBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin88;
	})(eui.Skin);

	var huanleHall$Skin89 = 	(function (_super) {
		__extends(huanleHall$Skin89, _super);
		function huanleHall$Skin89() {
			_super.call(this);
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
		var _proto = huanleHall$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.zhanjiBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin89;
	})(eui.Skin);

	var huanleHall$Skin90 = 	(function (_super) {
		__extends(huanleHall$Skin90, _super);
		function huanleHall$Skin90() {
			_super.call(this);
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
		var _proto = huanleHall$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.av9w15jk30";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin90;
	})(eui.Skin);

	var huanleHall$Skin91 = 	(function (_super) {
		__extends(huanleHall$Skin91, _super);
		function huanleHall$Skin91() {
			_super.call(this);
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
		var _proto = huanleHall$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.findBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin91;
	})(eui.Skin);

	var huanleHall$Skin92 = 	(function (_super) {
		__extends(huanleHall$Skin92, _super);
		function huanleHall$Skin92() {
			_super.call(this);
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
		var _proto = huanleHall$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.userinfoBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin92;
	})(eui.Skin);

	function huanleHall() {
		_super.call(this);
		this.skinParts = ["hallbg","_label_userid","_label_zuanNum","_label_username","halad","head","_btn_qiandao","topGroup","m_notice","lunboGroup","lunScroller","_btn_game_shisanshui","_gp_shisanshui","_btn_game_niuniu","_gp_niuniu","_btn_game_showhand","_gp_showhand","gameList0","gameMainScroller","_btn_game_paijiu","_btn_game_baijiale","main","mains","_btn_shop","_btn_zhanji","mainSceneBtn","_btn_find","_btn_myInfo","bottomGroup"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.hallbg_i(),this.topGroup_i(),this.mains_i(),this.bottomGroup_i()];
	}
	var _proto = huanleHall.prototype;

	_proto.hallbg_i = function () {
		var t = new eui.Image();
		this.hallbg = t;
		t.height = 1388;
		t.source = "hallBg_jpg";
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
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._label_userid_i(),this._label_zuanNum_i(),this._label_username_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.top";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.IDBg";
		t.x = 120;
		t.y = 55;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.zuanshidi";
		t.x = 290;
		t.y = 55;
		return t;
	};
	_proto._label_userid_i = function () {
		var t = new eui.Label();
		this._label_userid = t;
		t.size = 28;
		t.text = "ID:000000";
		t.textAlign = "right";
		t.textColor = 0xebe175;
		t.x = 125;
		t.y = 58;
		return t;
	};
	_proto._label_zuanNum_i = function () {
		var t = new eui.Label();
		this._label_zuanNum = t;
		t.height = 25;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xebe175;
		t.width = 112;
		t.x = 320;
		t.y = 58;
		return t;
	};
	_proto._label_username_i = function () {
		var t = new eui.Label();
		this._label_username = t;
		t.size = 28;
		t.text = "魂族网络科技";
		t.x = 120;
		t.y = 20;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 25;
		t.width = 25;
		t.x = 436;
		t.y = 58;
		t.elementsContent = [this.halad_i()];
		return t;
	};
	_proto.halad_i = function () {
		var t = new eui.Button();
		this.halad = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 25;
		t.skinName = huanleHall$Skin81;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 16;
		t.y = 6;
		t.elementsContent = [this._Image4_i(),this.head_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.headframe";
		t.verticalCenter = 0;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.horizontalCenter = -0.5;
		t.source = "common_image_game_json.public_head_default";
		t.verticalCenter = -1;
		t.width = 75;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 550;
		t.y = 25;
		t.elementsContent = [this._btn_qiandao_i()];
		return t;
	};
	_proto._btn_qiandao_i = function () {
		var t = new eui.Button();
		this._btn_qiandao = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin82;
		return t;
	};
	_proto.mains_i = function () {
		var t = new eui.Group();
		this.mains = t;
		t.x = 0;
		t.y = 106;
		t.elementsContent = [this.main_i()];
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group5_i(),this.lunScroller_i(),this._Image6_i(),this.gameMainScroller_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = 15;
		t.elementsContent = [this._Image5_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.laba";
		t.verticalCenter = 0;
		t.x = 10;
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
		t.viewport = this._Group4_i();
		return t;
	};
	_proto._Group4_i = function () {
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
	_proto.lunScroller_i = function () {
		var t = new eui.Scroller();
		this.lunScroller = t;
		t.height = 282;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.width = 628;
		t.y = 56;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.lunboGroup_i()];
		return t;
	};
	_proto.lunboGroup_i = function () {
		var t = new eui.Group();
		this.lunboGroup = t;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.xiangyun";
		t.y = 348;
		return t;
	};
	_proto.gameMainScroller_i = function () {
		var t = new eui.Scroller();
		this.gameMainScroller = t;
		t.height = 476;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.width = 640;
		t.y = 368;
		t.viewport = this.gameList0_i();
		return t;
	};
	_proto.gameList0_i = function () {
		var t = new eui.Group();
		this.gameList0 = t;
		t.anchorOffsetY = 0;
		t.height = 476;
		t.y = -13;
		t.elementsContent = [this._gp_shisanshui_i(),this._gp_niuniu_i(),this._gp_showhand_i()];
		return t;
	};
	_proto._gp_shisanshui_i = function () {
		var t = new eui.Group();
		this._gp_shisanshui = t;
		t.height = 151;
		t.horizontalCenter = 0;
		t.width = 630;
		t.y = 6;
		t.elementsContent = [this._btn_game_shisanshui_i()];
		return t;
	};
	_proto._btn_game_shisanshui_i = function () {
		var t = new eui.Button();
		this._btn_game_shisanshui = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin83;
		return t;
	};
	_proto._gp_niuniu_i = function () {
		var t = new eui.Group();
		this._gp_niuniu = t;
		t.height = 151;
		t.horizontalCenter = 0;
		t.width = 630;
		t.y = 163;
		t.elementsContent = [this._btn_game_niuniu_i()];
		return t;
	};
	_proto._btn_game_niuniu_i = function () {
		var t = new eui.Button();
		this._btn_game_niuniu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin84;
		return t;
	};
	_proto._gp_showhand_i = function () {
		var t = new eui.Group();
		this._gp_showhand = t;
		t.height = 151;
		t.horizontalCenter = 0;
		t.width = 630;
		t.y = 319;
		t.elementsContent = [this._btn_game_showhand_i()];
		return t;
	};
	_proto._btn_game_showhand_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin85;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 170;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.y = 535;
		t.elementsContent = [this._btn_game_paijiu_i()];
		return t;
	};
	_proto._btn_game_paijiu_i = function () {
		var t = new eui.Button();
		this._btn_game_paijiu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin86;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 170;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.y = 712;
		t.elementsContent = [this._btn_game_baijiale_i()];
		return t;
	};
	_proto._btn_game_baijiale_i = function () {
		var t = new eui.Button();
		this._btn_game_baijiale = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin87;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.x = 0;
		t.y = 973;
		t.elementsContent = [this._Image7_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.hallBottomBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 38.98;
		t.y = 41;
		t.elementsContent = [this._btn_shop_i()];
		return t;
	};
	_proto._btn_shop_i = function () {
		var t = new eui.Button();
		this._btn_shop = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 2;
		t.skinName = huanleHall$Skin88;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 155.59;
		t.y = 41;
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
		t.x = 2;
		t.y = -6;
		t.skinName = huanleHall$Skin89;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 291;
		t.y = 41;
		t.elementsContent = [this.mainSceneBtn_i()];
		return t;
	};
	_proto.mainSceneBtn_i = function () {
		var t = new eui.Button();
		this.mainSceneBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin90;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 427.23;
		t.y = 41;
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
		t.x = 0;
		t.y = -4;
		t.skinName = huanleHall$Skin91;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 553.89;
		t.y = 41;
		t.elementsContent = [this._btn_myInfo_i()];
		return t;
	};
	_proto._btn_myInfo_i = function () {
		var t = new eui.Button();
		this._btn_myInfo = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = huanleHall$Skin92;
		return t;
	};
	return huanleHall;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/playerCenter.exml'] = window.playerCenter = (function (_super) {
	__extends(playerCenter, _super);
	var playerCenter$Skin93 = 	(function (_super) {
		__extends(playerCenter$Skin93, _super);
		function playerCenter$Skin93() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","tz_hall_2_json.signup")
					])
			];
		}
		var _proto = playerCenter$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_hall_2_json.sign";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return playerCenter$Skin93;
	})(eui.Skin);

	var playerCenter$Skin94 = 	(function (_super) {
		__extends(playerCenter$Skin94, _super);
		function playerCenter$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.signyet")
					])
			];
		}
		var _proto = playerCenter$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.signBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return playerCenter$Skin94;
	})(eui.Skin);

	function playerCenter() {
		_super.call(this);
		this.skinParts = ["dailiGroup","headImage","headbox","ID","zuanNum","nickname","fuwuContent","fuwu","tiaoKuan","qianTitle","content","qianBtn","resetLogin"];
		
		this.height = 830;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this.dailiGroup_i(),this._Group5_i(),this._Image10_i(),this._Group9_i()];
	}
	var _proto = playerCenter.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 1;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 491.68;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Button1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "tz_hall_1_json.bg9_find";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 5;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,0,2,3);
		t.source = "tz_hall_1_json.line";
		t.width = 500;
		t.y = 47;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "每日签到奖励";
		t.textColor = 0xffec8e;
		t.x = 40;
		t.y = 17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 75;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "您已连续签到9天，本次签到的到1钻石";
		t.width = 470;
		t.y = 59.5;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 60;
		t.skinName = playerCenter$Skin93;
		return t;
	};
	_proto.dailiGroup_i = function () {
		var t = new eui.Group();
		this.dailiGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 730.9;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(23,19,12,12);
		t.source = "tz_hall_1_json.bg9_find";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tz_hall_2_json.txt_daililogin";
		t.verticalCenter = 0.5;
		t.x = 19;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "tz_hall_2_json.txt_daililogin_go";
		t.verticalCenter = 0.5;
		t.x = 485;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 211.58;
		t.elementsContent = [this.headbox_i(),this._Group4_i(),this.nickname_i()];
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
		t.source = "tz_hall_2_json.top_headbigbg";
		t.width = 146;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImage_i = function () {
		var t = new eui.Image();
		this.headImage = t;
		t.fillMode = "scale";
		t.height = 130;
		t.horizontalCenter = -1;
		t.source = "common_image_game_json.public_head_default";
		t.verticalCenter = -2;
		t.width = 130;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 207.1;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image7_i(),this.ID_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "tz_hall_1_json.idbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "ID：666666";
		t.textAlign = "center";
		t.textColor = 0xffd968;
		t.verticalCenter = -0.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 204;
		t.elementsContent = [this._Image8_i(),this.zuanNum_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "tz_hall_1_json.idbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zuanNum_i = function () {
		var t = new eui.Label();
		this.zuanNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 10;
		t.size = 23;
		t.text = "999999999";
		t.textAlign = "center";
		t.textColor = 0xFFD968;
		t.verticalCenter = -0.5;
		t.width = 122;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = -14;
		t.source = "tz_hall_2_json.zuanshi";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "婚族网络科技";
		t.y = 158.42;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 837;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(9,8,43,43);
		t.source = "hallImage_json.zhanjisignfindBg";
		t.width = 580;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.scaleX = 0.98;
		t.scaleY = 0.98;
		t.width = 200;
		t.x = 195;
		t.y = 536.37;
		t.elementsContent = [this._Group8_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -157;
		t.y = -547;
		t.elementsContent = [this._Group7_i(),this._Image11_i(),this.tiaoKuan_i(),this._Image12_i(),this.qianTitle_i(),this.content_i(),this.qianBtn_i(),this.resetLogin_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 373.55;
		t.elementsContent = [this.fuwu_i()];
		return t;
	};
	_proto.fuwu_i = function () {
		var t = new eui.Scroller();
		this.fuwu = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 570;
		t.x = -12.000000000000007;
		t.y = 6.08;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.fuwuContent_i()];
		return t;
	};
	_proto.fuwuContent_i = function () {
		var t = new eui.Image();
		this.fuwuContent = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "fuwuTExt_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.qiandao";
		t.y = 20;
		return t;
	};
	_proto.tiaoKuan_i = function () {
		var t = new eui.Image();
		this.tiaoKuan = t;
		t.horizontalCenter = 0;
		t.source = "hallImage_json.xieyi";
		t.y = 322.58;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 242;
		t.scale9Grid = new egret.Rectangle(9,9,49,51);
		t.source = "hallImage_json.signBg";
		t.width = 570;
		t.x = 0;
		t.y = 69;
		return t;
	};
	_proto.qianTitle_i = function () {
		var t = new eui.Label();
		this.qianTitle = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "每日签到奖励";
		t.x = 51;
		t.y = 97;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.height = 100;
		t.size = 25;
		t.text = "您已连续签到9天，本次签到的到1钻石";
		t.width = 470;
		t.x = 51;
		t.y = 137.5;
		return t;
	};
	_proto.qianBtn_i = function () {
		var t = new eui.Button();
		this.qianBtn = t;
		t.enabled = true;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.touchEnabled = true;
		t.y = 240;
		t.skinName = playerCenter$Skin94;
		return t;
	};
	_proto.resetLogin_i = function () {
		var t = new eui.Image();
		this.resetLogin = t;
		t.horizontalCenter = 0;
		t.source = "hallImage_json.exit";
		t.y = 385.45;
		return t;
	};
	return playerCenter;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/shop.exml'] = window.shop = (function (_super) {
	__extends(shop, _super);
	var shop$Skin95 = 	(function (_super) {
		__extends(shop$Skin95, _super);
		function shop$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.yuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin95;
	})(eui.Skin);

	var shop$Skin96 = 	(function (_super) {
		__extends(shop$Skin96, _super);
		function shop$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.yuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin96;
	})(eui.Skin);

	var shop$Skin97 = 	(function (_super) {
		__extends(shop$Skin97, _super);
		function shop$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.yuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin97;
	})(eui.Skin);

	var shop$Skin98 = 	(function (_super) {
		__extends(shop$Skin98, _super);
		function shop$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.yuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin98;
	})(eui.Skin);

	var shop$Skin99 = 	(function (_super) {
		__extends(shop$Skin99, _super);
		function shop$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hallImage_json.yuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin99;
	})(eui.Skin);

	function shop() {
		_super.call(this);
		this.skinParts = ["goods0","buyBtn0","item0","goods1","buyBtn1","item1","goods2","buyBtn2","item2","goods3","buyBtn3","item3","goods4","buyBtn4","item4","goodsTitle","historyTitle","orderTime","zuanshi","money","orderTime0","zuanshi0","money0","orderTime1","zuanshi1","money1","orderTime2","zuanshi2","money2","orderTime3","zuanshi3","money3","history"];
		
		this.height = 870;
		this.width = 640;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = shop.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.98;
		t.scaleY = 0.98;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.goodsTitle_i(),this.historyTitle_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.shop";
		t.y = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 837;
		t.scale9Grid = new egret.Rectangle(10,10,42,32);
		t.source = "hallImage_json.zhanjisignfindBg";
		t.width = 570;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(10,10,40,39);
		t.source = "hallImage_json.zhanjisignfindBg";
		t.width = 500;
		t.y = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.public_icon_zuanshi";
		t.x = 70;
		t.y = 145;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.shopheng1";
		t.y = 180;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.public_icon_zuanshi";
		t.x = 70;
		t.y = 215;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.shopheng2";
		t.width = 433;
		t.y = 253;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.public_icon_zuanshi";
		t.x = 70;
		t.y = 290;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.shopheng1";
		t.y = 328;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.public_icon_zuanshi";
		t.x = 70;
		t.y = 360;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.shopheng2";
		t.width = 433;
		t.y = 398;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "hallImage_json.public_icon_zuanshi";
		t.x = 70;
		t.y = 435;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hallImage_json.shopheng1";
		t.y = 473;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 250;
		t.horizontalCenter = 0;
		t.source = "hallImage_json.shopBottomBg";
		t.width = 500;
		t.y = 565;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.height = 44;
		t.x = 117.92;
		t.y = 134.64;
		t.elementsContent = [this.goods0_i(),this.buyBtn0_i()];
		return t;
	};
	_proto.goods0_i = function () {
		var t = new eui.Label();
		this.goods0 = t;
		t.text = "0000";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.buyBtn0_i = function () {
		var t = new eui.Button();
		this.buyBtn0 = t;
		t.label = "￥20";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 266.78;
		t.skinName = shop$Skin95;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 44;
		t.x = 117.92;
		t.y = 208.25;
		t.elementsContent = [this.goods1_i(),this.buyBtn1_i()];
		return t;
	};
	_proto.goods1_i = function () {
		var t = new eui.Label();
		this.goods1 = t;
		t.text = "0000";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.buyBtn1_i = function () {
		var t = new eui.Button();
		this.buyBtn1 = t;
		t.label = "￥20";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 266.78;
		t.skinName = shop$Skin96;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 44;
		t.x = 117.26;
		t.y = 283.4;
		t.elementsContent = [this.goods2_i(),this.buyBtn2_i()];
		return t;
	};
	_proto.goods2_i = function () {
		var t = new eui.Label();
		this.goods2 = t;
		t.text = "0000";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.buyBtn2_i = function () {
		var t = new eui.Button();
		this.buyBtn2 = t;
		t.label = "￥20";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 266.78;
		t.skinName = shop$Skin97;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 44;
		t.x = 117.48;
		t.y = 352.47;
		t.elementsContent = [this.goods3_i(),this.buyBtn3_i()];
		return t;
	};
	_proto.goods3_i = function () {
		var t = new eui.Label();
		this.goods3 = t;
		t.text = "0000";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.buyBtn3_i = function () {
		var t = new eui.Button();
		this.buyBtn3 = t;
		t.label = "￥20";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 266.78;
		t.skinName = shop$Skin98;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 44;
		t.x = 117.7;
		t.y = 428.6;
		t.elementsContent = [this.goods4_i(),this.buyBtn4_i()];
		return t;
	};
	_proto.goods4_i = function () {
		var t = new eui.Label();
		this.goods4 = t;
		t.text = "0000";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.buyBtn4_i = function () {
		var t = new eui.Button();
		this.buyBtn4 = t;
		t.label = "￥20";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 266.78;
		t.skinName = shop$Skin99;
		return t;
	};
	_proto.goodsTitle_i = function () {
		var t = new eui.Label();
		this.goodsTitle = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "充值加送活动火热进行中";
		t.x = 38;
		t.y = 62.13;
		return t;
	};
	_proto.historyTitle_i = function () {
		var t = new eui.Label();
		this.historyTitle = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "最近一周充值记录";
		t.x = 30;
		t.y = 531.58;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.width = 512.12;
		t.x = 31.92;
		t.y = 590;
		t.viewport = this.history_i();
		return t;
	};
	_proto.history_i = function () {
		var t = new eui.Group();
		this.history = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 248.48;
		t.width = 510.61;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.width = 433;
		t.y = 6.12;
		t.elementsContent = [this._Image15_i(),this.orderTime_i(),this.zuanshi_i(),this.money_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "hallImage_json.shopheng1";
		t.x = 0;
		return t;
	};
	_proto.orderTime_i = function () {
		var t = new eui.Label();
		this.orderTime = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 6;
		t.size = 20;
		t.text = "2010-00-00 00:00:00";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto.zuanshi_i = function () {
		var t = new eui.Label();
		this.zuanshi = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 64.5;
		t.size = 20;
		t.text = "钻石1000";
		t.textAlign = "center";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 20;
		t.text = "￥100";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0.4399999999999977;
		t.width = 433;
		t.y = 47.03;
		t.elementsContent = [this._Image16_i(),this.orderTime0_i(),this.zuanshi0_i(),this.money0_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "hallImage_json.shopheng1";
		t.x = 0;
		return t;
	};
	_proto.orderTime0_i = function () {
		var t = new eui.Label();
		this.orderTime0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 6;
		t.size = 20;
		t.text = "2010-00-00 00:00:00";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto.zuanshi0_i = function () {
		var t = new eui.Label();
		this.zuanshi0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 64.5;
		t.size = 20;
		t.text = "钻石1000";
		t.textAlign = "center";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.money0_i = function () {
		var t = new eui.Label();
		this.money0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 20;
		t.text = "￥100";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0.4399999999999977;
		t.width = 433;
		t.y = 84.87;
		t.elementsContent = [this._Image17_i(),this.orderTime1_i(),this.zuanshi1_i(),this.money1_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "hallImage_json.shopheng1";
		t.x = 0;
		return t;
	};
	_proto.orderTime1_i = function () {
		var t = new eui.Label();
		this.orderTime1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 6;
		t.size = 20;
		t.text = "2010-00-00 00:00:00";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto.zuanshi1_i = function () {
		var t = new eui.Label();
		this.zuanshi1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 64.5;
		t.size = 20;
		t.text = "钻石1000";
		t.textAlign = "center";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.money1_i = function () {
		var t = new eui.Label();
		this.money1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 20;
		t.text = "￥100";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0.4399999999999977;
		t.width = 433;
		t.y = 124.27;
		t.elementsContent = [this._Image18_i(),this.orderTime2_i(),this.zuanshi2_i(),this.money2_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "hallImage_json.shopheng1";
		t.x = 0;
		return t;
	};
	_proto.orderTime2_i = function () {
		var t = new eui.Label();
		this.orderTime2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 6;
		t.size = 20;
		t.text = "2010-00-00 00:00:00";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto.zuanshi2_i = function () {
		var t = new eui.Label();
		this.zuanshi2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 64.5;
		t.size = 20;
		t.text = "钻石1000";
		t.textAlign = "center";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.money2_i = function () {
		var t = new eui.Label();
		this.money2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 20;
		t.text = "￥100";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0.4399999999999977;
		t.width = 433;
		t.y = 162.27;
		t.elementsContent = [this._Image19_i(),this.orderTime3_i(),this.zuanshi3_i(),this.money3_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "hallImage_json.shopheng1";
		t.x = 0;
		return t;
	};
	_proto.orderTime3_i = function () {
		var t = new eui.Label();
		this.orderTime3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 6;
		t.size = 20;
		t.text = "2010-00-00 00:00:00";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	_proto.zuanshi3_i = function () {
		var t = new eui.Label();
		this.zuanshi3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 64.5;
		t.size = 20;
		t.text = "钻石1000";
		t.textAlign = "center";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.money3_i = function () {
		var t = new eui.Label();
		this.money3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 20;
		t.text = "￥100";
		t.textColor = 0xcccccc;
		t.verticalCenter = 0;
		return t;
	};
	return shop;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/nn_theird.exml'] = window.nn_theird = (function (_super) {
	__extends(nn_theird, _super);
	function nn_theird() {
		_super.call(this);
		this.skinParts = ["menban","playcount","pai00","pai01","pai02","pai03","pai04","type0","nickname0","point0","userInfo0","pai10","pai11","pai12","pai13","pai14","type1","nickname1","point1","userInfo1","pai20","pai21","pai22","pai23","pai24","type2","nickname2","point2","userInfo2","pai30","pai31","pai32","pai33","pai34","type3","nickname3","point3","userInfo3","pai40","pai41","pai42","pai43","pai44","type4","nickname4","point4","userInfo4","pai50","pai51","pai52","pai53","pai54","type5","nickname5","point5","userInfo5"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.menban_i(),this._Rect1_i(),this._Image1_i(),this.playcount_i(),this._Scroller1_i()];
	}
	var _proto = nn_theird.prototype;

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
		t.viewport = this._Group13_i();
		return t;
	};
	_proto._Group13_i = function () {
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
		t.width = 540;
		t.y = 20;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.point0_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "tz_zhanji_cardType_json.zhanji_nn_txt_n6";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 7.6;
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
	_proto.userInfo1_i = function () {
		var t = new eui.Group();
		this.userInfo1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 115;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this.point1_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this.point2_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this.point3_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
		t.elementsContent = [this._Group9_i(),this._Group10_i(),this.point4_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this.point5_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
	return nn_theird;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/second.exml'] = window.second = (function (_super) {
	__extends(second, _super);
	function second() {
		_super.call(this);
		this.skinParts = ["menban","bg0","point5","point6","point7","point8","point9","point0","juCount0","showWindow","hzmj_pwd","hzmj_playcount","hzmj_peoplecount","hzmj_rule","nickname0","nickname1","nickname2","nickname3","nickname4","nickname5"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.menban_i(),this._Rect1_i(),this._Image1_i(),this._Scroller1_i(),this.hzmj_rule_i(),this._Rect2_i(),this._Group2_i()];
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
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 837;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 610;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 837;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,99,24,26);
		t.source = "tz_hall_1_json.bg9_fight";
		t.verticalCenter = 0;
		t.width = 610;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.width = 580;
		t.y = 268;
		t.viewport = this.showWindow_i();
		return t;
	};
	_proto.showWindow_i = function () {
		var t = new eui.Group();
		this.showWindow = t;
		t.y = -24;
		t.elementsContent = [this._Group1_i()];
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
	_proto.hzmj_rule_i = function () {
		var t = new eui.Group();
		this.hzmj_rule = t;
		t.horizontalCenter = 0;
		t.y = 150;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.hzmj_pwd_i(),this.hzmj_playcount_i(),this.hzmj_peoplecount_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "tz_hall_3_json.hall_zhanji_s_pwd";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tz_hall_3_json.hall_zhanji_s_ju";
		t.verticalCenter = 0;
		t.x = 144;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.rotation = 358.99;
		t.source = "tz_hall_3_json.hall_zhanji_s_people";
		t.verticalCenter = 0;
		t.x = 254;
		return t;
	};
	_proto.hzmj_pwd_i = function () {
		var t = new eui.Label();
		this.hzmj_pwd = t;
		t.size = 25;
		t.text = "999999";
		t.textColor = 0xFCDD76;
		t.verticalCenter = 0;
		t.x = 36;
		return t;
	};
	_proto.hzmj_playcount_i = function () {
		var t = new eui.Label();
		this.hzmj_playcount = t;
		t.size = 25;
		t.text = "10";
		t.textColor = 0xFCDD76;
		t.verticalCenter = 0;
		t.x = 175.98;
		return t;
	};
	_proto.hzmj_peoplecount_i = function () {
		var t = new eui.Label();
		this.hzmj_peoplecount = t;
		t.size = 25;
		t.text = "4";
		t.textColor = 0xFCDD76;
		t.verticalCenter = 0;
		t.x = 289.33;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0x000000;
		t.width = 580;
		t.y = 250;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 31;
		t.y = 221;
		t.elementsContent = [this.nickname0_i(),this.nickname1_i(),this.nickname2_i(),this.nickname3_i(),this.nickname4_i(),this.nickname5_i()];
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.height = 20;
		t.size = 19;
		t.text = "魂族网络";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 0;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 86;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.height = 20;
		t.size = 19;
		t.text = "魂族网络";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 172;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.height = 20;
		t.size = 19;
		t.text = "魂族网络";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 258;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.height = 20;
		t.size = 19;
		t.text = "魂族网络";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 344;
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.height = 20;
		t.size = 19;
		t.text = "魂族网络";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 430;
		t.y = 10;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/sh_theird.exml'] = window.sss_theird = (function (_super) {
	__extends(sss_theird, _super);
	function sss_theird() {
		_super.call(this);
		this.skinParts = ["menban","playcount","pai00","pai01","pai02","pai03","pai04","type0","nickname0","point0","userInfo0","pai10","pai11","pai12","pai13","pai14","type1","nickname1","point1","userInfo1","pai20","pai21","pai22","pai23","pai24","type2","nickname2","point2","userInfo2","pai30","pai31","pai32","pai33","pai34","type3","nickname3","point3","userInfo3","pai40","pai41","pai42","pai43","pai44","type4","nickname4","point4","userInfo4","pai50","pai51","pai52","pai53","pai54","type5","nickname5","point5","userInfo5"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.menban_i(),this._Rect1_i(),this._Image1_i(),this.playcount_i(),this._Scroller1_i()];
	}
	var _proto = sss_theird.prototype;

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
		t.viewport = this._Group13_i();
		return t;
	};
	_proto._Group13_i = function () {
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
		t.width = 540;
		t.y = 20;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.point0_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "tz_zhanji_cardType_json.zhanji_suoha_card_type7";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 23;
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 7.6;
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
	_proto.userInfo1_i = function () {
		var t = new eui.Group();
		this.userInfo1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.y = 115;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this.point1_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this.point2_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this.point3_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
		t.elementsContent = [this._Group9_i(),this._Group10_i(),this.point4_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this.point5_i()];
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.source = "nncards_json.card_3_11";
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
		t.x = 7.6;
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
	return sss_theird;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/sss_theird.exml'] = window.sss_theird = (function (_super) {
	__extends(sss_theird, _super);
	function sss_theird() {
		_super.call(this);
		this.skinParts = ["menban","playcount","pai02","pai01","pai00","pai07","pai06","pai05","pai04","pai03","pai012","pai011","pai010","pai09","pai08","nickname0","point0","type00","type01","type02","userInfo0","pai12","pai11","pai10","pai17","pai16","pai15","pai14","pai13","pai112","pai111","pai110","pai19","pai18","nickname1","type10","type11","type12","point1","userInfo1","pai22","pai21","pai20","pai27","pai26","pai25","pai24","pai23","pai212","pai211","pai210","pai29","pai28","nickname2","point2","type20","type21","type22","userInfo2","pai32","pai31","pai30","pai37","pai36","pai35","pai34","pai33","pai312","pai311","pai310","pai39","pai38","nickname3","point3","type30","type31","type32","userInfo3","pai42","pai41","pai40","pai47","pai46","pai45","pai44","pai43","pai412","pai411","pai410","pai49","pai48","nickname4","point4","type40","type41","type42","userInfo4","pai0","pai1","pai2","pai3","pai4","pai5","pai6","pai7","pai8","pai9","pai50","pai51","pai52","nickname5","point5","type0","type1","type2","userInfo5"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this.menban_i(),this._Rect1_i(),this._Image1_i(),this.playcount_i(),this._Scroller1_i()];
	}
	var _proto = sss_theird.prototype;

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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
		t.source = "nncards_json.card_1_13";
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
	return sss_theird;
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
	var zhanjiMainItem$Skin100 = 	(function (_super) {
		__extends(zhanjiMainItem$Skin100, _super);
		function zhanjiMainItem$Skin100() {
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
		var _proto = zhanjiMainItem$Skin100.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.hlnndetail";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return zhanjiMainItem$Skin100;
	})(eui.Skin);

	function zhanjiMainItem() {
		_super.call(this);
		this.skinParts = ["bg","time","pwd","score","detail"];
		
		this.height = 84;
		this.width = 539;
		this.elementsContent = [this.bg_i(),this._Group1_i(),this.detail_i()];
	}
	var _proto = zhanjiMainItem.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "hallImage_json.hlnnzhanji";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 145;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.time_i(),this.pwd_i(),this.score_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(13,11,21,20);
		t.source = "hallImage_json.zhanjiBg";
		t.width = 380;
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
		t.y = 15;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "时间：";
		t.x = 27;
		t.y = 40;
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
		t.y = 15;
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
		t.y = 40;
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
		t.y = 15;
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
		t.y = 15;
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Button();
		this.detail = t;
		t.label = "";
		t.verticalCenter = 0.5;
		t.x = 435;
		t.skinName = zhanjiMainItem$Skin100;
		return t;
	};
	return zhanjiMainItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/zhanjiMainScene.exml'] = window.zhanjiMainScene = (function (_super) {
	__extends(zhanjiMainScene, _super);
	var zhanjiMainScene$Skin101 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin101, _super);
		function zhanjiMainScene$Skin101() {
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
		var _proto = zhanjiMainScene$Skin101.prototype;

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
		return zhanjiMainScene$Skin101;
	})(eui.Skin);

	var zhanjiMainScene$Skin102 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin102, _super);
		function zhanjiMainScene$Skin102() {
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
		var _proto = zhanjiMainScene$Skin102.prototype;

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
		return zhanjiMainScene$Skin102;
	})(eui.Skin);

	var zhanjiMainScene$Skin103 = 	(function (_super) {
		__extends(zhanjiMainScene$Skin103, _super);
		function zhanjiMainScene$Skin103() {
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
		var _proto = zhanjiMainScene$Skin103.prototype;

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
		return zhanjiMainScene$Skin103;
	})(eui.Skin);

	function zhanjiMainScene() {
		_super.call(this);
		this.skinParts = ["allRecord","myCreate","myJoin","empty","juhua","zhanjiContent"];
		
		this.height = 870;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = zhanjiMainScene.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.99;
		t.scaleY = 0.99;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this.empty_i(),this.juhua_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 837;
		t.scale9Grid = new egret.Rectangle(20,10,23,38);
		t.source = "hallImage_json.zhanjisignfindBg";
		t.width = 570;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hallImage_json.zhanji";
		t.y = 10;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 710;
		t.scale9Grid = new egret.Rectangle(9,9,22,46);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hallImage_json.zhanjiBg";
		t.width = 550;
		t.x = 10;
		t.y = 125;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 24;
		t.y = 60;
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
		t.skinName = zhanjiMainScene$Skin101;
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
		t.skinName = zhanjiMainScene$Skin102;
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
		t.skinName = zhanjiMainScene$Skin103;
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
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 550;
		t.y = 130;
		t.viewport = this.zhanjiContent_i();
		return t;
	};
	_proto.zhanjiContent_i = function () {
		var t = new eui.Group();
		this.zhanjiContent = t;
		return t;
	};
	return zhanjiMainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuRecord.exml'] = window.NiuniuRecordSkin = (function (_super) {
	__extends(NiuniuRecordSkin, _super);
	var NiuniuRecordSkin$Skin104 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin104, _super);
		function NiuniuRecordSkin$Skin104() {
			_super.call(this);
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
		var _proto = NiuniuRecordSkin$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_1_json.nn_rt_btn_back";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuniuRecordSkin$Skin104;
	})(eui.Skin);

	var NiuniuRecordSkin$Skin105 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin105, _super);
		function NiuniuRecordSkin$Skin105() {
			_super.call(this);
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
		var _proto = NiuniuRecordSkin$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_1_json.nn_rt_btn_share";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuniuRecordSkin$Skin105;
	})(eui.Skin);

	var NiuniuRecordSkin$Skin106 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin106, _super);
		function NiuniuRecordSkin$Skin106() {
			_super.call(this);
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
		var _proto = NiuniuRecordSkin$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_1_json.nn_rt_btn_replay";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuniuRecordSkin$Skin106;
	})(eui.Skin);

	function NiuniuRecordSkin() {
		_super.call(this);
		this.skinParts = ["recordbg","_img_player1_head","_txt_player1_name","_txt_player1_id","_txt_player1_allkill","_txt_player1_allpei","_txt_player1_niuniu","_bitmap_player1_score","_img_player1_bigwin","_gp_player1","_img_player2_head","_txt_player2_name","_txt_player2_id","_txt_player2_allkill","_txt_player2_allpei","_txt_player2_niuniu","_bitmap_player2_score","_img_player2_bigwin","_gp_player2","_img_player3_head","_txt_player3_name","_txt_player3_id","_txt_player3_allkill","_txt_player3_allpei","_txt_player3_niuniu","_bitmap_player3_score","_img_player3_bigwin","_gp_player3","_img_player4_head","_txt_player4_name","_txt_player4_id","_txt_player4_allkill","_txt_player4_allpei","_txt_player4_niuniu","_bitmap_player4_score","_img_player4_bigwin","_gp_player4","_img_player5_head","_txt_player5_name","_txt_player5_id","_txt_player5_allkill","_txt_player5_allpei","_txt_player5_niuniu","_bitmap_player5_score","_img_player5_bigwin","_gp_player5","_img_player6_head","_txt_player6_name","_txt_player6_id","_txt_player6_allkill","_txt_player6_allpei","_txt_player6_niuniu","_bitmap_player6_score","_img_player6_bigwin","_gp_player6","_btn_gohall","_btn_sharescreen","_btn_createagain","_txt_roompwd","_txt_time","_gp_main"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._gp_main_i()];
	}
	var _proto = NiuniuRecordSkin.prototype;

	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.height = 640;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.recordbg_i(),this._Group2_i()];
		return t;
	};
	_proto.recordbg_i = function () {
		var t = new eui.Image();
		this.recordbg = t;
		t.height = 640;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_rt_bg_png";
		t.width = 1360;
		t.x = -140;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 575.76;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 998.49;
		t.x = 38.48;
		t.y = 31.39;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._btn_gohall_i(),this._btn_sharescreen_i(),this._btn_createagain_i(),this._txt_roompwd_i(),this._txt_time_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_title_bg";
		t.x = 314.07;
		t.y = 0.88;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_2_json.nn_result_all";
		t.x = 410.07;
		t.y = 12.88;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 140;
		t.elementsContent = [this._gp_player1_i(),this._gp_player2_i(),this._gp_player3_i(),this._gp_player4_i(),this._gp_player5_i(),this._gp_player6_i()];
		return t;
	};
	_proto._gp_player1_i = function () {
		var t = new eui.Group();
		this._gp_player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 376;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 189;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._img_player1_head_i(),this._txt_player1_name_i(),this._txt_player1_id_i(),this._txt_player1_allkill_i(),this._txt_player1_allpei_i(),this._txt_player1_niuniu_i(),this._bitmap_player1_score_i(),this._img_player1_bigwin_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headmid_bg";
		t.x = 48.57;
		t.y = 15.24;
		return t;
	};
	_proto._img_player1_head_i = function () {
		var t = new eui.Image();
		this._img_player1_head = t;
		t.height = 76;
		t.source = "niuniu_2_json.head_default";
		t.width = 76;
		t.x = 53.47;
		t.y = 19.29;
		return t;
	};
	_proto._txt_player1_name_i = function () {
		var t = new eui.Label();
		this._txt_player1_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 3.5;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 22;
		t.text = "魂族网络科技";
		t.verticalCenter = -70;
		return t;
	};
	_proto._txt_player1_id_i = function () {
		var t = new eui.Label();
		this._txt_player1_id = t;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "ID:999999";
		t.textColor = 0xfceac2;
		t.verticalCenter = -42;
		return t;
	};
	_proto._txt_player1_allkill_i = function () {
		var t = new eui.Label();
		this._txt_player1_allkill = t;
		t.size = 22;
		t.text = "通杀次数：99";
		t.textColor = 0x7c7777;
		t.x = 27;
		t.y = 180.66;
		return t;
	};
	_proto._txt_player1_allpei_i = function () {
		var t = new eui.Label();
		this._txt_player1_allpei = t;
		t.size = 22;
		t.text = "通赔次数：99";
		t.textColor = 0x7c7777;
		t.x = 27;
		t.y = 210.66;
		return t;
	};
	_proto._txt_player1_niuniu_i = function () {
		var t = new eui.Label();
		this._txt_player1_niuniu = t;
		t.size = 22;
		t.text = "牛牛次数：99";
		t.textColor = 0x7c7777;
		t.x = 27;
		t.y = 240.66;
		return t;
	};
	_proto._bitmap_player1_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player1_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -1.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 119;
		return t;
	};
	_proto._img_player1_bigwin_i = function () {
		var t = new eui.Image();
		this._img_player1_bigwin = t;
		t.source = "niuniu_2_json.nn_bigwin";
		t.x = 36;
		t.y = 313.78;
		return t;
	};
	_proto._gp_player2_i = function () {
		var t = new eui.Group();
		this._gp_player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 376;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 189;
		t.x = 160;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._img_player2_head_i(),this._txt_player2_name_i(),this._txt_player2_id_i(),this._txt_player2_allkill_i(),this._txt_player2_allpei_i(),this._txt_player2_niuniu_i(),this._bitmap_player2_score_i(),this._img_player2_bigwin_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headmid_bg";
		t.x = 48.57;
		t.y = 15.24;
		return t;
	};
	_proto._img_player2_head_i = function () {
		var t = new eui.Image();
		this._img_player2_head = t;
		t.height = 76;
		t.source = "niuniu_2_json.head_default";
		t.width = 76;
		t.x = 53.47;
		t.y = 19.29;
		return t;
	};
	_proto._txt_player2_name_i = function () {
		var t = new eui.Label();
		this._txt_player2_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 3.5;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 22;
		t.text = "魂族网络科技";
		t.verticalCenter = -70;
		return t;
	};
	_proto._txt_player2_id_i = function () {
		var t = new eui.Label();
		this._txt_player2_id = t;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "ID:999999";
		t.textColor = 0xFCEAC2;
		t.verticalCenter = -42;
		return t;
	};
	_proto._txt_player2_allkill_i = function () {
		var t = new eui.Label();
		this._txt_player2_allkill = t;
		t.size = 22;
		t.text = "通杀次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 180.66;
		return t;
	};
	_proto._txt_player2_allpei_i = function () {
		var t = new eui.Label();
		this._txt_player2_allpei = t;
		t.size = 22;
		t.text = "通赔次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 210.66;
		return t;
	};
	_proto._txt_player2_niuniu_i = function () {
		var t = new eui.Label();
		this._txt_player2_niuniu = t;
		t.size = 22;
		t.text = "牛牛次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 240.66;
		return t;
	};
	_proto._bitmap_player2_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player2_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -1.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 119;
		return t;
	};
	_proto._img_player2_bigwin_i = function () {
		var t = new eui.Image();
		this._img_player2_bigwin = t;
		t.source = "niuniu_2_json.nn_bigwin";
		t.x = 36;
		t.y = 313.78;
		return t;
	};
	_proto._gp_player3_i = function () {
		var t = new eui.Group();
		this._gp_player3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 376;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 189;
		t.x = 320;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._img_player3_head_i(),this._txt_player3_name_i(),this._txt_player3_id_i(),this._txt_player3_allkill_i(),this._txt_player3_allpei_i(),this._txt_player3_niuniu_i(),this._bitmap_player3_score_i(),this._img_player3_bigwin_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headmid_bg";
		t.x = 48.57;
		t.y = 15.24;
		return t;
	};
	_proto._img_player3_head_i = function () {
		var t = new eui.Image();
		this._img_player3_head = t;
		t.height = 76;
		t.source = "niuniu_2_json.head_default";
		t.width = 76;
		t.x = 53.47;
		t.y = 19.29;
		return t;
	};
	_proto._txt_player3_name_i = function () {
		var t = new eui.Label();
		this._txt_player3_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 3.5;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 22;
		t.text = "魂族网络科技";
		t.verticalCenter = -70;
		return t;
	};
	_proto._txt_player3_id_i = function () {
		var t = new eui.Label();
		this._txt_player3_id = t;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "ID:999999";
		t.textColor = 0xFCEAC2;
		t.verticalCenter = -42;
		return t;
	};
	_proto._txt_player3_allkill_i = function () {
		var t = new eui.Label();
		this._txt_player3_allkill = t;
		t.size = 22;
		t.text = "通杀次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 180.66;
		return t;
	};
	_proto._txt_player3_allpei_i = function () {
		var t = new eui.Label();
		this._txt_player3_allpei = t;
		t.size = 22;
		t.text = "通赔次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 210.66;
		return t;
	};
	_proto._txt_player3_niuniu_i = function () {
		var t = new eui.Label();
		this._txt_player3_niuniu = t;
		t.size = 22;
		t.text = "牛牛次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 240.66;
		return t;
	};
	_proto._bitmap_player3_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player3_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -1.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 119;
		return t;
	};
	_proto._img_player3_bigwin_i = function () {
		var t = new eui.Image();
		this._img_player3_bigwin = t;
		t.source = "niuniu_2_json.nn_bigwin";
		t.x = 36;
		t.y = 313.78;
		return t;
	};
	_proto._gp_player4_i = function () {
		var t = new eui.Group();
		this._gp_player4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 376;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 189;
		t.x = 480;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._img_player4_head_i(),this._txt_player4_name_i(),this._txt_player4_id_i(),this._txt_player4_allkill_i(),this._txt_player4_allpei_i(),this._txt_player4_niuniu_i(),this._bitmap_player4_score_i(),this._img_player4_bigwin_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headmid_bg";
		t.x = 48.57;
		t.y = 15.24;
		return t;
	};
	_proto._img_player4_head_i = function () {
		var t = new eui.Image();
		this._img_player4_head = t;
		t.height = 76;
		t.source = "niuniu_2_json.head_default";
		t.width = 76;
		t.x = 53.47;
		t.y = 19.29;
		return t;
	};
	_proto._txt_player4_name_i = function () {
		var t = new eui.Label();
		this._txt_player4_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 3.5;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 22;
		t.text = "魂族网络科技";
		t.verticalCenter = -70;
		return t;
	};
	_proto._txt_player4_id_i = function () {
		var t = new eui.Label();
		this._txt_player4_id = t;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "ID:999999";
		t.textColor = 0xFCEAC2;
		t.verticalCenter = -42;
		return t;
	};
	_proto._txt_player4_allkill_i = function () {
		var t = new eui.Label();
		this._txt_player4_allkill = t;
		t.size = 22;
		t.text = "通杀次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 180.66;
		return t;
	};
	_proto._txt_player4_allpei_i = function () {
		var t = new eui.Label();
		this._txt_player4_allpei = t;
		t.size = 22;
		t.text = "通赔次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 210.66;
		return t;
	};
	_proto._txt_player4_niuniu_i = function () {
		var t = new eui.Label();
		this._txt_player4_niuniu = t;
		t.size = 22;
		t.text = "牛牛次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 240.66;
		return t;
	};
	_proto._bitmap_player4_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player4_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -1.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 119;
		return t;
	};
	_proto._img_player4_bigwin_i = function () {
		var t = new eui.Image();
		this._img_player4_bigwin = t;
		t.source = "niuniu_2_json.nn_bigwin";
		t.x = 36;
		t.y = 313.78;
		return t;
	};
	_proto._gp_player5_i = function () {
		var t = new eui.Group();
		this._gp_player5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 376;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 189;
		t.x = 640;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._img_player5_head_i(),this._txt_player5_name_i(),this._txt_player5_id_i(),this._txt_player5_allkill_i(),this._txt_player5_allpei_i(),this._txt_player5_niuniu_i(),this._bitmap_player5_score_i(),this._img_player5_bigwin_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headmid_bg";
		t.x = 48.57;
		t.y = 15.24;
		return t;
	};
	_proto._img_player5_head_i = function () {
		var t = new eui.Image();
		this._img_player5_head = t;
		t.height = 76;
		t.source = "niuniu_2_json.head_default";
		t.width = 76;
		t.x = 53.47;
		t.y = 19.29;
		return t;
	};
	_proto._txt_player5_name_i = function () {
		var t = new eui.Label();
		this._txt_player5_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 3.5;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 22;
		t.text = "魂族网络科技";
		t.verticalCenter = -70;
		return t;
	};
	_proto._txt_player5_id_i = function () {
		var t = new eui.Label();
		this._txt_player5_id = t;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "ID:999999";
		t.textColor = 0xFCEAC2;
		t.verticalCenter = -42;
		return t;
	};
	_proto._txt_player5_allkill_i = function () {
		var t = new eui.Label();
		this._txt_player5_allkill = t;
		t.size = 22;
		t.text = "通杀次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 180.66;
		return t;
	};
	_proto._txt_player5_allpei_i = function () {
		var t = new eui.Label();
		this._txt_player5_allpei = t;
		t.size = 22;
		t.text = "通赔次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 210.66;
		return t;
	};
	_proto._txt_player5_niuniu_i = function () {
		var t = new eui.Label();
		this._txt_player5_niuniu = t;
		t.size = 22;
		t.text = "牛牛次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 240.66;
		return t;
	};
	_proto._bitmap_player5_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player5_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -1.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 119;
		return t;
	};
	_proto._img_player5_bigwin_i = function () {
		var t = new eui.Image();
		this._img_player5_bigwin = t;
		t.source = "niuniu_2_json.nn_bigwin";
		t.x = 36;
		t.y = 313.78;
		return t;
	};
	_proto._gp_player6_i = function () {
		var t = new eui.Group();
		this._gp_player6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 376;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 189;
		t.x = 800;
		t.y = 0;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._img_player6_head_i(),this._txt_player6_name_i(),this._txt_player6_id_i(),this._txt_player6_allkill_i(),this._txt_player6_allpei_i(),this._txt_player6_niuniu_i(),this._bitmap_player6_score_i(),this._img_player6_bigwin_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_rt_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headmid_bg";
		t.x = 48.57;
		t.y = 15.24;
		return t;
	};
	_proto._img_player6_head_i = function () {
		var t = new eui.Image();
		this._img_player6_head = t;
		t.height = 76;
		t.source = "niuniu_2_json.head_default";
		t.width = 76;
		t.x = 53.47;
		t.y = 19.29;
		return t;
	};
	_proto._txt_player6_name_i = function () {
		var t = new eui.Label();
		this._txt_player6_name = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 3.5;
		t.maxHeight = 22;
		t.maxWidth = 132;
		t.size = 22;
		t.text = "魂族网络科技";
		t.verticalCenter = -70;
		return t;
	};
	_proto._txt_player6_id_i = function () {
		var t = new eui.Label();
		this._txt_player6_id = t;
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "ID:999999";
		t.textColor = 0xFCEAC2;
		t.verticalCenter = -42;
		return t;
	};
	_proto._txt_player6_allkill_i = function () {
		var t = new eui.Label();
		this._txt_player6_allkill = t;
		t.size = 22;
		t.text = "通杀次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 180.66;
		return t;
	};
	_proto._txt_player6_allpei_i = function () {
		var t = new eui.Label();
		this._txt_player6_allpei = t;
		t.size = 22;
		t.text = "通赔次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 210.66;
		return t;
	};
	_proto._txt_player6_niuniu_i = function () {
		var t = new eui.Label();
		this._txt_player6_niuniu = t;
		t.size = 22;
		t.text = "牛牛次数：99";
		t.textColor = 0x7C7777;
		t.x = 27;
		t.y = 240.66;
		return t;
	};
	_proto._bitmap_player6_score_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player6_score = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -1.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 119;
		return t;
	};
	_proto._img_player6_bigwin_i = function () {
		var t = new eui.Image();
		this._img_player6_bigwin = t;
		t.source = "niuniu_2_json.nn_bigwin";
		t.x = 36;
		t.y = 313.78;
		return t;
	};
	_proto._btn_gohall_i = function () {
		var t = new eui.Button();
		this._btn_gohall = t;
		t.horizontalCenter = -301.245;
		t.label = "";
		t.verticalCenter = 244.12;
		t.skinName = NiuniuRecordSkin$Skin104;
		return t;
	};
	_proto._btn_sharescreen_i = function () {
		var t = new eui.Button();
		this._btn_sharescreen = t;
		t.horizontalCenter = 1.7549999999999955;
		t.label = "";
		t.verticalCenter = 242.12;
		t.skinName = NiuniuRecordSkin$Skin105;
		return t;
	};
	_proto._btn_createagain_i = function () {
		var t = new eui.Button();
		this._btn_createagain = t;
		t.horizontalCenter = 299.755;
		t.label = "";
		t.verticalCenter = 241.12;
		t.skinName = NiuniuRecordSkin$Skin106;
		return t;
	};
	_proto._txt_roompwd_i = function () {
		var t = new eui.Label();
		this._txt_roompwd = t;
		t.right = 4.490000000000009;
		t.size = 23;
		t.text = "房号：999999";
		t.verticalCenter = -249.38;
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.right = 2.490000000000009;
		t.size = 23;
		t.text = "2018-12-30 12:59:59";
		t.verticalCenter = -215.38;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			t.source = "niuniu_2_json.nn_btn_qiang";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			t.source = "niuniu_2_json.nn_btn_buqiang";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			t.source = "niuniu_2_json.nn_btn_score";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			t.source = "niuniu_2_json.nn_btn_score2";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			t.source = "niuniu_2_json.nn_btn_score3";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score2";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score3";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score5";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score8";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score2";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score3";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_score5";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_cuopai";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_show";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_start";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu_2_json.nn_btn_sitdown";
			t.percentWidth = 100;
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
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
		return NiuniuSkins$Skin126;
	})(eui.Skin);

	var NiuniuSkins$Skin127 = 	(function (_super) {
		__extends(NiuniuSkins$Skin127, _super);
		function NiuniuSkins$Skin127() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin127.prototype;

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
		return NiuniuSkins$Skin127;
	})(eui.Skin);

	var NiuniuSkins$Skin128 = 	(function (_super) {
		__extends(NiuniuSkins$Skin128, _super);
		function NiuniuSkins$Skin128() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin128.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_game_json.public_btn_menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuniuSkins$Skin128;
	})(eui.Skin);

	var NiuniuSkins$Skin129 = 	(function (_super) {
		__extends(NiuniuSkins$Skin129, _super);
		function NiuniuSkins$Skin129() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin129.prototype;

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
		return NiuniuSkins$Skin129;
	})(eui.Skin);

	function NiuniuSkins() {
		_super.call(this);
		this.skinParts = ["niuniubg","_txt_roompwd","_txt_playmode","_txt_jushu","_txt_paymode","_txt_basescore","_txt_roomowner","_txt_lunmode","_gp_rulebg","_img_player1_cardsdata_1","_img_player1_cardsdata_2","_img_player1_cardsdata_3","_img_player1_cardsdata_4","_img_player1_cardsdata_5","_img_player1_cardstypebg","_img_player1_cardstype","_bitmap_player1_niurank","_gp_player1_cardstype","_gp_player1_cardsdata","_btn_qiang_sure","_btn_qiang_notsure","_gp_qiang_actionbtn","_btn_rank_1","_btn_rank_2","_btn_rank_3","_gp_rankbtn3","_btn_rank_4","_btn_rank_5","_btn_rank_6","_btn_rank_7","_btn_rank_8","_gp_rankbtn5","_btn_rank_9","_btn_rank_10","_btn_rank_11","_btn_rank_12","_gp_rankbtn0","_btn_cuopai","_btn_showcard","_gp_operatebtn","_img_player1_head","_img_player1_offline","_img_player1_yuyinMark","_txt_player1_name","_txt_player1_score","_img_player1_kuang","_img_player1_zhuang","_img_player1_rankbg","_txt_player1_rankvalue","_gp_player1_rank","_img_player1_tapscorebg","_bitmap_player1_tapscore","_gp_player1_tapscore","_img_player1_qiangmark","headTouch1","_gp_player1_headinfo","_txt_player1_message","_gp_player1_message","_gp_player1","_img_player2_cardsdata_1","_img_player2_cardsdata_2","_img_player2_cardsdata_3","_img_player2_cardsdata_4","_img_player2_cardsdata_5","_img_player2_cardstypebg","_img_player2_cardstype","_bitmap_player2_niurank","_gp_player2_cardstype","_gp_player2_cardsdata","_img_player2_head","_txt_player2_name","_img_player2_offline","_img_player2_yuyinMark","_txt_player2_score","_img_player2_kuang","_img_player2_zhuang","_img_player2_rankbg","_txt_player2_rankvalue","_gp_player2_rank","_img_player2_tapscorebg","_bitmap_player2_tapscore","_gp_player2_tapscore","_img_player2_qiangmark","headTouch2","_gp_player2_headinfo","_txt_player2_message","_gp_player2_message","_gp_player2","_img_player3_head","_img_player3_offline","_img_player3_yuyinMark","_txt_player3_name","_txt_player3_score","_img_player3_kuang","_img_player3_zhuang","_img_player3_rankbg","_txt_player3_rankvalue","_gp_player3_rank","_img_player3_tapscorebg","_bitmap_player3_tapscore","_gp_player3_tapscore","_img_player3_qiangmark","headTouch3","_gp_player3_headinfo","_img_player3_cardsdata_1","_img_player3_cardsdata_2","_img_player3_cardsdata_3","_img_player3_cardsdata_4","_img_player3_cardsdata_5","_img_player3_cardstypebg","_img_player3_cardstype","_bitmap_player3_niurank","_gp_player3_cardstype","_gp_player3_cardsdata","_txt_player3_message","_gp_player3_message","_gp_player3","_img_player4_head","_img_player4_offline","_img_player4_yuyinMark","_txt_player4_name","_txt_player4_score","_img_player4_kuang","_img_player4_zhuang","_img_player4_rankbg","_txt_player4_rankvalue","_gp_player4_rank","_img_player4_tapscorebg","_bitmap_player4_tapscore","_gp_player4_tapscore","_img_player4_qiangmark","headTouch4","_gp_player4_headinfo","_img_player4_cardsdata_1","_img_player4_cardsdata_2","_img_player4_cardsdata_3","_img_player4_cardsdata_4","_img_player4_cardsdata_5","_img_player4_cardstypebg","_img_player4_cardstype","_bitmap_player4_niurank","_gp_player4_cardstype","_gp_player4_cardsdata","_txt_player4_message","_gp_player4_message","_gp_player4","_img_player5_head","_txt_player5_name","_img_player5_offline","_img_player5_yuyinMark","_txt_player5_score","_img_player5_kuang","_img_player5_zhuang","_img_player5_rankbg","_txt_player5_rankvalue","_gp_player5_rank","_img_player5_tapscorebg","_bitmap_player5_tapscore","_gp_player5_tapscore","_img_player5_qiangmark","headTouch5","_gp_player5_headinfo","_img_player5_cardsdata_1","_img_player5_cardsdata_2","_img_player5_cardsdata_3","_img_player5_cardsdata_4","_img_player5_cardsdata_5","_img_player5_cardstypebg","_img_player5_cardstype","_bitmap_player5_niurank","_gp_player5_cardstype","_gp_player5_cardsdata","_txt_player5_message","_gp_player5_message","_gp_player5","_img_player6_cardsdata_1","_img_player6_cardsdata_2","_img_player6_cardsdata_3","_img_player6_cardsdata_4","_img_player6_cardsdata_5","_img_player6_cardstypebg","_img_player6_cardstype","_bitmap_player6_niurank","_gp_player6_cardstype","_gp_player6_cardsdata","_img_player6_head","_txt_player6_name","_img_player6_offline","_img_player6_yuyinMark","_txt_player6_score","_img_player6_kuang","_img_player6_zhuang","_img_player6_rankbg","_txt_player6_rankvalue","_gp_player6_rank","_img_player6_tapscorebg","_bitmap_player6_tapscore","_gp_player6_tapscore","_img_player6_qiangmark","headTouch6","_gp_player6_headinfo","_txt_player6_message","_gp_player6_message","_gp_player6","_img_clickbg","_bitmap_clickvalue","_gp_showstate_click","_txt_showstate_tag","_gp_showstate_tap","_btn_showstate_start","_btn_showstate_sitdown","_gp_showstate","_btn_voice","locBtn","_btn_chat","luyingNotice","lyNoticeGroup","_gp_voicemsg","_img_sit1","_img_sit2","_img_sit3","_img_sit4","_img_sit5","_img_sit6","_btn_menu","_btn_message","havePeopleComing","_gp_menu","bg0","contentText1","contentText2"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Group1_i(),this._gp_rulebg_i(),this._gp_player1_i(),this._gp_player2_i(),this._gp_player3_i(),this._gp_player4_i(),this._gp_player5_i(),this._gp_player6_i(),this._gp_showstate_i(),this._gp_voicemsg_i(),this._img_sit1_i(),this._img_sit2_i(),this._img_sit3_i(),this._img_sit4_i(),this._img_sit5_i(),this._img_sit6_i(),this._gp_menu_i(),this._Group3_i()];
	}
	var _proto = NiuniuSkins.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 640;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.niuniubg_i()];
		return t;
	};
	_proto.niuniubg_i = function () {
		var t = new eui.Image();
		this.niuniubg = t;
		t.height = 640;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nnbg_png";
		t.width = 1360;
		t.x = -140;
		t.y = 0;
		return t;
	};
	_proto._gp_rulebg_i = function () {
		var t = new eui.Group();
		this._gp_rulebg = t;
		t.height = 200;
		t.width = 200;
		t.x = 877;
		t.y = 9;
		t.elementsContent = [this._Image1_i(),this._txt_roompwd_i(),this._txt_playmode_i(),this._txt_jushu_i(),this._txt_paymode_i(),this._txt_basescore_i(),this._txt_roomowner_i(),this._txt_lunmode_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 194;
		t.scale9Grid = new egret.Rectangle(16,14,13,13);
		t.source = "niuniu_2_json.nn_topright_bg";
		t.width = 194;
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto._txt_roompwd_i = function () {
		var t = new eui.Label();
		this._txt_roompwd = t;
		t.size = 22;
		t.text = "房号：999999";
		t.x = 24;
		t.y = 4.5;
		return t;
	};
	_proto._txt_playmode_i = function () {
		var t = new eui.Label();
		this._txt_playmode = t;
		t.size = 22;
		t.text = "玩法：轮庄模式";
		t.x = 24;
		t.y = 32;
		return t;
	};
	_proto._txt_jushu_i = function () {
		var t = new eui.Label();
		this._txt_jushu = t;
		t.size = 22;
		t.text = "局数：30/30";
		t.x = 24;
		t.y = 59;
		return t;
	};
	_proto._txt_paymode_i = function () {
		var t = new eui.Label();
		this._txt_paymode = t;
		t.size = 22;
		t.text = "支付：AA支付";
		t.x = 24;
		t.y = 85;
		return t;
	};
	_proto._txt_basescore_i = function () {
		var t = new eui.Label();
		this._txt_basescore = t;
		t.size = 22;
		t.text = "底分：5分";
		t.x = 24;
		t.y = 112;
		return t;
	};
	_proto._txt_roomowner_i = function () {
		var t = new eui.Label();
		this._txt_roomowner = t;
		t.size = 22;
		t.text = "房主：魂族网络";
		t.x = 24;
		t.y = 139;
		return t;
	};
	_proto._txt_lunmode_i = function () {
		var t = new eui.Label();
		this._txt_lunmode = t;
		t.size = 22;
		t.text = "模式：十点上庄";
		t.x = 24;
		t.y = 165.5;
		return t;
	};
	_proto._gp_player1_i = function () {
		var t = new eui.Group();
		this._gp_player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206.67;
		t.width = 981.34;
		t.x = 4.33;
		t.y = 430.33;
		t.elementsContent = [this._gp_player1_cardsdata_i(),this._gp_qiang_actionbtn_i(),this._gp_rankbtn3_i(),this._gp_rankbtn5_i(),this._gp_rankbtn0_i(),this._gp_operatebtn_i(),this._gp_player1_headinfo_i(),this._gp_player1_message_i()];
		return t;
	};
	_proto._gp_player1_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player1_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138.68;
		t.width = 546.68;
		t.x = 259.02;
		t.y = 60.35;
		t.elementsContent = [this._img_player1_cardsdata_1_i(),this._img_player1_cardsdata_2_i(),this._img_player1_cardsdata_3_i(),this._img_player1_cardsdata_4_i(),this._img_player1_cardsdata_5_i(),this._gp_player1_cardstype_i()];
		return t;
	};
	_proto._img_player1_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_1 = t;
		t.source = "nncards_json.card_4_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_2 = t;
		t.source = "nncards_json.card_4_13";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_3 = t;
		t.source = "nncards_json.card_4_13";
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_4 = t;
		t.source = "nncards_json.card_4_13";
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto._img_player1_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player1_cardsdata_5 = t;
		t.source = "nncards_json.card_5_15";
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
		t.x = 128.34;
		t.y = -73.67;
		t.elementsContent = [this._img_player1_cardstypebg_i(),this._img_player1_cardstype_i(),this._bitmap_player1_niurank_i()];
		return t;
	};
	_proto._img_player1_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player1_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniu_2_json.nn_tap";
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
		t.source = "niuniu_1_json.nn_txt_n14";
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
		t.height = 54;
		t.width = 318;
		t.x = 376;
		t.y = -6;
		t.elementsContent = [this._btn_qiang_sure_i(),this._btn_qiang_notsure_i()];
		return t;
	};
	_proto._btn_qiang_sure_i = function () {
		var t = new eui.Button();
		this._btn_qiang_sure = t;
		t.horizontalCenter = -86;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin107;
		return t;
	};
	_proto._btn_qiang_notsure_i = function () {
		var t = new eui.Button();
		this._btn_qiang_notsure = t;
		t.horizontalCenter = 83;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin108;
		return t;
	};
	_proto._gp_rankbtn3_i = function () {
		var t = new eui.Group();
		this._gp_rankbtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.visible = false;
		t.width = 390.33;
		t.x = 340.68;
		t.y = 2.06;
		t.elementsContent = [this._btn_rank_1_i(),this._btn_rank_2_i(),this._btn_rank_3_i()];
		return t;
	};
	_proto._btn_rank_1_i = function () {
		var t = new eui.Button();
		this._btn_rank_1 = t;
		t.horizontalCenter = -134.165;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin109;
		return t;
	};
	_proto._btn_rank_2_i = function () {
		var t = new eui.Button();
		this._btn_rank_2 = t;
		t.horizontalCenter = -4.164999999999992;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin110;
		return t;
	};
	_proto._btn_rank_3_i = function () {
		var t = new eui.Button();
		this._btn_rank_3 = t;
		t.horizontalCenter = 125.83500000000001;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin111;
		return t;
	};
	_proto._gp_rankbtn5_i = function () {
		var t = new eui.Group();
		this._gp_rankbtn5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.x = 209;
		t.y = 2.06;
		t.elementsContent = [this._btn_rank_4_i(),this._btn_rank_5_i(),this._btn_rank_6_i(),this._btn_rank_7_i(),this._btn_rank_8_i()];
		return t;
	};
	_proto._btn_rank_4_i = function () {
		var t = new eui.Button();
		this._btn_rank_4 = t;
		t.horizontalCenter = -256.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin112;
		return t;
	};
	_proto._btn_rank_5_i = function () {
		var t = new eui.Button();
		this._btn_rank_5 = t;
		t.horizontalCenter = -126.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin113;
		return t;
	};
	_proto._btn_rank_6_i = function () {
		var t = new eui.Button();
		this._btn_rank_6 = t;
		t.horizontalCenter = 3.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin114;
		return t;
	};
	_proto._btn_rank_7_i = function () {
		var t = new eui.Button();
		this._btn_rank_7 = t;
		t.horizontalCenter = 133.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin115;
		return t;
	};
	_proto._btn_rank_8_i = function () {
		var t = new eui.Button();
		this._btn_rank_8 = t;
		t.horizontalCenter = 263.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin116;
		return t;
	};
	_proto._gp_rankbtn0_i = function () {
		var t = new eui.Group();
		this._gp_rankbtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 99.82999999999998;
		t.visible = false;
		t.y = 2;
		t.elementsContent = [this._btn_rank_9_i(),this._btn_rank_10_i(),this._btn_rank_11_i(),this._btn_rank_12_i()];
		return t;
	};
	_proto._btn_rank_9_i = function () {
		var t = new eui.Button();
		this._btn_rank_9 = t;
		t.horizontalCenter = -256.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin117;
		return t;
	};
	_proto._btn_rank_10_i = function () {
		var t = new eui.Button();
		this._btn_rank_10 = t;
		t.horizontalCenter = -126.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin118;
		return t;
	};
	_proto._btn_rank_11_i = function () {
		var t = new eui.Button();
		this._btn_rank_11 = t;
		t.horizontalCenter = 3.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin119;
		return t;
	};
	_proto._btn_rank_12_i = function () {
		var t = new eui.Button();
		this._btn_rank_12 = t;
		t.horizontalCenter = 133.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin120;
		return t;
	};
	_proto._gp_operatebtn_i = function () {
		var t = new eui.Group();
		this._gp_operatebtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 141.34;
		t.width = 161.33;
		t.x = 819.32;
		t.y = 59.38;
		t.elementsContent = [this._btn_cuopai_i(),this._btn_showcard_i()];
		return t;
	};
	_proto._btn_cuopai_i = function () {
		var t = new eui.Button();
		this._btn_cuopai = t;
		t.horizontalCenter = 0.8349999999999937;
		t.label = "";
		t.verticalCenter = -38.67;
		t.visible = false;
		t.skinName = NiuniuSkins$Skin121;
		return t;
	};
	_proto._btn_showcard_i = function () {
		var t = new eui.Button();
		this._btn_showcard = t;
		t.horizontalCenter = 0.8349999999999937;
		t.label = "";
		t.verticalCenter = 36.33;
		t.skinName = NiuniuSkins$Skin122;
		return t;
	};
	_proto._gp_player1_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player1_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 208;
		t.x = 41;
		t.y = 56;
		t.elementsContent = [this._Image2_i(),this._img_player1_head_i(),this._img_player1_offline_i(),this._img_player1_yuyinMark_i(),this._txt_player1_name_i(),this._txt_player1_score_i(),this._img_player1_kuang_i(),this._img_player1_zhuang_i(),this._gp_player1_rank_i(),this._gp_player1_tapscore_i(),this._img_player1_qiangmark_i(),this.headTouch1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headbg_heng";
		t.x = 0;
		t.y = 35.33;
		return t;
	};
	_proto._img_player1_head_i = function () {
		var t = new eui.Image();
		this._img_player1_head = t;
		t.height = 72;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.x = 8.01;
		t.y = 42.3;
		return t;
	};
	_proto._img_player1_offline_i = function () {
		var t = new eui.Image();
		this._img_player1_offline = t;
		t.source = "niuniu_2_json.nn_headoffline";
		t.x = 8.6;
		t.y = 42.6;
		return t;
	};
	_proto._img_player1_yuyinMark_i = function () {
		var t = new eui.Image();
		this._img_player1_yuyinMark = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 9;
		t.y = 43;
		return t;
	};
	_proto._txt_player1_name_i = function () {
		var t = new eui.Label();
		this._txt_player1_name = t;
		t.horizontalCenter = 30;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 20;
		t.text = "魂族网络科";
		t.verticalCenter = -7;
		return t;
	};
	_proto._txt_player1_score_i = function () {
		var t = new eui.Label();
		this._txt_player1_score = t;
		t.horizontalCenter = 24;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 29;
		return t;
	};
	_proto._img_player1_kuang_i = function () {
		var t = new eui.Image();
		this._img_player1_kuang = t;
		t.source = "niuniu_2_json.nn_headbg_hengkuang";
		t.x = 1.33;
		t.y = 34;
		return t;
	};
	_proto._img_player1_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player1_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = -28;
		t.y = 16.95;
		return t;
	};
	_proto._gp_player1_rank_i = function () {
		var t = new eui.Group();
		this._gp_player1_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.width = 94.67;
		t.x = 98;
		t.y = -6.29;
		t.elementsContent = [this._img_player1_rankbg_i(),this._txt_player1_rankvalue_i()];
		return t;
	};
	_proto._img_player1_rankbg_i = function () {
		var t = new eui.Image();
		this._img_player1_rankbg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_2_json.nn_coin_bg";
		t.x = 1.5;
		t.y = -1.91;
		return t;
	};
	_proto._txt_player1_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player1_rankvalue = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "99";
		t.textColor = 0xFCEFB8;
		t.x = 46.68;
		t.y = 7.33;
		return t;
	};
	_proto._gp_player1_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player1_tapscore = t;
		t.height = 135;
		t.width = 265;
		t.x = -70.69;
		t.y = -60.69;
		t.elementsContent = [this._img_player1_tapscorebg_i(),this._bitmap_player1_tapscore_i()];
		return t;
	};
	_proto._img_player1_tapscorebg_i = function () {
		var t = new eui.Image();
		this._img_player1_tapscorebg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_scorebg_1";
		t.x = -7.98;
		t.y = -3.99;
		return t;
	};
	_proto._bitmap_player1_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player1_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -17.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = -9.5;
		return t;
	};
	_proto._img_player1_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player1_qiangmark = t;
		t.height = 56;
		t.source = "niuniu_1_json.nn_qiang_mark";
		t.width = 53;
		t.x = 122;
		t.y = -24;
		return t;
	};
	_proto.headTouch1_i = function () {
		var t = new eui.Rect();
		this.headTouch1 = t;
		t.fillAlpha = 0;
		t.height = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190;
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto._gp_player1_message_i = function () {
		var t = new eui.Group();
		this._gp_player1_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 83;
		t.y = 49;
		t.elementsContent = [this._Image3_i(),this._txt_player1_message_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player1_message_i = function () {
		var t = new eui.Label();
		this._txt_player1_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player2_i = function () {
		var t = new eui.Group();
		this._gp_player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 159;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 416.67;
		t.x = 16;
		t.y = 289;
		t.elementsContent = [this._gp_player2_cardsdata_i(),this._gp_player2_headinfo_i(),this._gp_player2_message_i()];
		return t;
	};
	_proto._gp_player2_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player2_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 300.68;
		t.x = 117.01;
		t.y = 40.39;
		t.elementsContent = [this._img_player2_cardsdata_1_i(),this._img_player2_cardsdata_2_i(),this._img_player2_cardsdata_3_i(),this._img_player2_cardsdata_4_i(),this._img_player2_cardsdata_5_i(),this._gp_player2_cardstype_i()];
		return t;
	};
	_proto._img_player2_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 48;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 97;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player2_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 195;
		t.y = 0;
		return t;
	};
	_proto._gp_player2_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player2_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 350;
		t.x = 5.34;
		t.y = 122.77;
		t.elementsContent = [this._img_player2_cardstypebg_i(),this._img_player2_cardstype_i(),this._bitmap_player2_niurank_i()];
		return t;
	};
	_proto._img_player2_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player2_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniu_2_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player2_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player2_cardstype = t;
		t.right = 128;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "niuniu_1_json.nn_txt_n5";
		t.verticalCenter = 1;
		return t;
	};
	_proto._bitmap_player2_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player2_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 237;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = 2.5;
		return t;
	};
	_proto._gp_player2_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player2_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 175;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 101;
		t.x = 16;
		t.y = -20;
		t.elementsContent = [this._Image4_i(),this._img_player2_head_i(),this._txt_player2_name_i(),this._img_player2_offline_i(),this._img_player2_yuyinMark_i(),this._txt_player2_score_i(),this._img_player2_kuang_i(),this._img_player2_zhuang_i(),this._gp_player2_rank_i(),this._gp_player2_tapscore_i(),this._img_player2_qiangmark_i(),this.headTouch2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headbg_shu";
		t.x = 0;
		t.y = 35.33;
		return t;
	};
	_proto._img_player2_head_i = function () {
		var t = new eui.Image();
		this._img_player2_head = t;
		t.height = 72;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.x = 9.01;
		t.y = 42.3;
		return t;
	};
	_proto._txt_player2_name_i = function () {
		var t = new eui.Label();
		this._txt_player2_name = t;
		t.horizontalCenter = -5.5;
		t.maxHeight = 20;
		t.maxWidth = 80;
		t.size = 20;
		t.text = "魂族网络";
		t.verticalCenter = 40.5;
		return t;
	};
	_proto._img_player2_offline_i = function () {
		var t = new eui.Image();
		this._img_player2_offline = t;
		t.source = "niuniu_2_json.nn_headoffline";
		t.x = 9.6;
		t.y = 42.6;
		return t;
	};
	_proto._img_player2_yuyinMark_i = function () {
		var t = new eui.Image();
		this._img_player2_yuyinMark = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 9;
		t.y = 43;
		return t;
	};
	_proto._txt_player2_score_i = function () {
		var t = new eui.Label();
		this._txt_player2_score = t;
		t.horizontalCenter = -7.5;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 66.5;
		return t;
	};
	_proto._img_player2_kuang_i = function () {
		var t = new eui.Image();
		this._img_player2_kuang = t;
		t.source = "niuniu_2_json.nn_headbg_shukuang";
		t.x = -4.67;
		t.y = 34;
		return t;
	};
	_proto._img_player2_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player2_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = -32;
		t.y = 16.95;
		return t;
	};
	_proto._gp_player2_rank_i = function () {
		var t = new eui.Group();
		this._gp_player2_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.width = 94.67;
		t.x = 98;
		t.y = 19.71;
		t.elementsContent = [this._img_player2_rankbg_i(),this._txt_player2_rankvalue_i()];
		return t;
	};
	_proto._img_player2_rankbg_i = function () {
		var t = new eui.Image();
		this._img_player2_rankbg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_2_json.nn_coin_bg";
		t.x = 1.5;
		t.y = -1.91;
		return t;
	};
	_proto._txt_player2_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player2_rankvalue = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "99";
		t.textColor = 0xFCEFB8;
		t.x = 46.68;
		t.y = 7.33;
		return t;
	};
	_proto._gp_player2_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player2_tapscore = t;
		t.height = 135;
		t.width = 265;
		t.x = -78.67;
		t.y = -56.7;
		t.elementsContent = [this._img_player2_tapscorebg_i(),this._bitmap_player2_tapscore_i()];
		return t;
	};
	_proto._img_player2_tapscorebg_i = function () {
		var t = new eui.Image();
		this._img_player2_tapscorebg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_scorebg_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._bitmap_player2_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player2_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -4.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_player2_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player2_qiangmark = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_qiang_mark";
		t.visible = false;
		t.width = 53;
		t.x = 110.33;
		t.y = 2.33;
		return t;
	};
	_proto.headTouch2_i = function () {
		var t = new eui.Rect();
		this.headTouch2 = t;
		t.fillAlpha = 0;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 91;
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto._gp_player2_message_i = function () {
		var t = new eui.Group();
		this._gp_player2_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 81.33;
		t.y = -2.67;
		t.elementsContent = [this._Image5_i(),this._txt_player2_message_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player2_message_i = function () {
		var t = new eui.Label();
		this._txt_player2_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player3_i = function () {
		var t = new eui.Group();
		this._gp_player3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 239.67;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 292;
		t.x = 187.66;
		t.y = 96;
		t.elementsContent = [this._gp_player3_headinfo_i(),this._gp_player3_cardsdata_i(),this._gp_player3_message_i()];
		return t;
	};
	_proto._gp_player3_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player3_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 208;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._img_player3_head_i(),this._img_player3_offline_i(),this._img_player3_yuyinMark_i(),this._txt_player3_name_i(),this._txt_player3_score_i(),this._img_player3_kuang_i(),this._img_player3_zhuang_i(),this._gp_player3_rank_i(),this._gp_player3_tapscore_i(),this._img_player3_qiangmark_i(),this.headTouch3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headbg_heng";
		t.x = 0;
		t.y = 35.33;
		return t;
	};
	_proto._img_player3_head_i = function () {
		var t = new eui.Image();
		this._img_player3_head = t;
		t.height = 72;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.x = 8.01;
		t.y = 42.3;
		return t;
	};
	_proto._img_player3_offline_i = function () {
		var t = new eui.Image();
		this._img_player3_offline = t;
		t.source = "niuniu_2_json.nn_headoffline";
		t.x = 9.6;
		t.y = 42;
		return t;
	};
	_proto._img_player3_yuyinMark_i = function () {
		var t = new eui.Image();
		this._img_player3_yuyinMark = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 9;
		t.y = 43;
		return t;
	};
	_proto._txt_player3_name_i = function () {
		var t = new eui.Label();
		this._txt_player3_name = t;
		t.horizontalCenter = 26;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 20;
		t.text = "魂族网络";
		t.verticalCenter = -7;
		return t;
	};
	_proto._txt_player3_score_i = function () {
		var t = new eui.Label();
		this._txt_player3_score = t;
		t.horizontalCenter = 24;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xffeabf;
		t.verticalCenter = 29;
		return t;
	};
	_proto._img_player3_kuang_i = function () {
		var t = new eui.Image();
		this._img_player3_kuang = t;
		t.source = "niuniu_2_json.nn_headbg_hengkuang";
		t.x = 1.33;
		t.y = 34;
		return t;
	};
	_proto._img_player3_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player3_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = -28;
		t.y = 16.95;
		return t;
	};
	_proto._gp_player3_rank_i = function () {
		var t = new eui.Group();
		this._gp_player3_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.width = 94.67;
		t.x = 189;
		t.y = 86.71;
		t.elementsContent = [this._img_player3_rankbg_i(),this._txt_player3_rankvalue_i()];
		return t;
	};
	_proto._img_player3_rankbg_i = function () {
		var t = new eui.Image();
		this._img_player3_rankbg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_2_json.nn_coin_bg";
		t.x = 1.5;
		t.y = -1.91;
		return t;
	};
	_proto._txt_player3_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player3_rankvalue = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "99";
		t.textColor = 0xfcefb8;
		t.x = 46.68;
		t.y = 7.33;
		return t;
	};
	_proto._gp_player3_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player3_tapscore = t;
		t.height = 135;
		t.width = 265;
		t.x = -23.67;
		t.y = -48.7;
		t.elementsContent = [this._img_player3_tapscorebg_i(),this._bitmap_player3_tapscore_i()];
		return t;
	};
	_proto._img_player3_tapscorebg_i = function () {
		var t = new eui.Image();
		this._img_player3_tapscorebg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_scorebg_1";
		t.x = 13;
		t.y = 0;
		return t;
	};
	_proto._bitmap_player3_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player3_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 11.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.verticalCenter = -2;
		return t;
	};
	_proto._img_player3_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player3_qiangmark = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_qiang_mark";
		t.width = 53;
		t.x = 210.33;
		t.y = 68.33;
		return t;
	};
	_proto.headTouch3_i = function () {
		var t = new eui.Rect();
		this.headTouch3 = t;
		t.fillAlpha = 0;
		t.height = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190;
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto._gp_player3_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player3_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 300.68;
		t.x = 0.01;
		t.y = 133.16;
		t.elementsContent = [this._img_player3_cardsdata_1_i(),this._img_player3_cardsdata_2_i(),this._img_player3_cardsdata_3_i(),this._img_player3_cardsdata_4_i(),this._img_player3_cardsdata_5_i(),this._gp_player3_cardstype_i()];
		return t;
	};
	_proto._img_player3_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 48;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 97;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player3_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 195;
		t.y = 0;
		return t;
	};
	_proto._gp_player3_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player3_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 350;
		t.x = 5.34;
		t.y = 122.77;
		t.elementsContent = [this._img_player3_cardstypebg_i(),this._img_player3_cardstype_i(),this._bitmap_player3_niurank_i()];
		return t;
	};
	_proto._img_player3_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player3_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniu_2_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player3_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player3_cardstype = t;
		t.right = 137;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "niuniu_1_json.nn_txt_n4";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._bitmap_player3_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player3_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 231;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -2.5;
		return t;
	};
	_proto._gp_player3_message_i = function () {
		var t = new eui.Group();
		this._gp_player3_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9.33;
		t.y = 6.33;
		t.elementsContent = [this._Image7_i(),this._txt_player3_message_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player3_message_i = function () {
		var t = new eui.Label();
		this._txt_player3_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player4_i = function () {
		var t = new eui.Group();
		this._gp_player4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 239.67;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 292;
		t.x = 425.33;
		t.y = 21.35;
		t.elementsContent = [this._gp_player4_headinfo_i(),this._gp_player4_cardsdata_i(),this._gp_player4_message_i()];
		return t;
	};
	_proto._gp_player4_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player4_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 208;
		t.x = 42;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._img_player4_head_i(),this._img_player4_offline_i(),this._img_player4_yuyinMark_i(),this._txt_player4_name_i(),this._txt_player4_score_i(),this._img_player4_kuang_i(),this._img_player4_zhuang_i(),this._gp_player4_rank_i(),this._gp_player4_tapscore_i(),this._img_player4_qiangmark_i(),this.headTouch4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headbg_heng";
		t.x = 0;
		t.y = 35.33;
		return t;
	};
	_proto._img_player4_head_i = function () {
		var t = new eui.Image();
		this._img_player4_head = t;
		t.height = 72;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.x = 8.01;
		t.y = 42.3;
		return t;
	};
	_proto._img_player4_offline_i = function () {
		var t = new eui.Image();
		this._img_player4_offline = t;
		t.source = "niuniu_2_json.nn_headoffline";
		t.x = 9.6;
		t.y = 42;
		return t;
	};
	_proto._img_player4_yuyinMark_i = function () {
		var t = new eui.Image();
		this._img_player4_yuyinMark = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 9;
		t.y = 43;
		return t;
	};
	_proto._txt_player4_name_i = function () {
		var t = new eui.Label();
		this._txt_player4_name = t;
		t.horizontalCenter = 26;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 20;
		t.text = "魂族网络";
		t.verticalCenter = -7;
		return t;
	};
	_proto._txt_player4_score_i = function () {
		var t = new eui.Label();
		this._txt_player4_score = t;
		t.horizontalCenter = 24;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 29;
		return t;
	};
	_proto._img_player4_kuang_i = function () {
		var t = new eui.Image();
		this._img_player4_kuang = t;
		t.source = "niuniu_2_json.nn_headbg_hengkuang";
		t.x = 1.33;
		t.y = 34;
		return t;
	};
	_proto._img_player4_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player4_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = -28;
		t.y = 16.95;
		return t;
	};
	_proto._gp_player4_rank_i = function () {
		var t = new eui.Group();
		this._gp_player4_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.width = 94.67;
		t.x = 189;
		t.y = 86.71;
		t.elementsContent = [this._img_player4_rankbg_i(),this._txt_player4_rankvalue_i()];
		return t;
	};
	_proto._img_player4_rankbg_i = function () {
		var t = new eui.Image();
		this._img_player4_rankbg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_2_json.nn_coin_bg";
		t.x = 1.5;
		t.y = -1.91;
		return t;
	};
	_proto._txt_player4_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player4_rankvalue = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "99";
		t.textColor = 0xFCEFB8;
		t.x = 46.68;
		t.y = 7.33;
		return t;
	};
	_proto._gp_player4_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player4_tapscore = t;
		t.height = 135;
		t.width = 265;
		t.x = -23.67;
		t.y = -48.7;
		t.elementsContent = [this._img_player4_tapscorebg_i(),this._bitmap_player4_tapscore_i()];
		return t;
	};
	_proto._img_player4_tapscorebg_i = function () {
		var t = new eui.Image();
		this._img_player4_tapscorebg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_scorebg_1";
		t.x = 13;
		t.y = 0;
		return t;
	};
	_proto._bitmap_player4_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player4_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 11.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.verticalCenter = -2;
		return t;
	};
	_proto._img_player4_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player4_qiangmark = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_qiang_mark";
		t.width = 53;
		t.x = 210.33;
		t.y = 68.33;
		return t;
	};
	_proto.headTouch4_i = function () {
		var t = new eui.Rect();
		this.headTouch4 = t;
		t.fillAlpha = 0;
		t.height = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190;
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto._gp_player4_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player4_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.68;
		t.horizontalCenter = 2.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 300.68;
		t.y = 135.06;
		t.elementsContent = [this._img_player4_cardsdata_1_i(),this._img_player4_cardsdata_2_i(),this._img_player4_cardsdata_3_i(),this._img_player4_cardsdata_4_i(),this._img_player4_cardsdata_5_i(),this._gp_player4_cardstype_i()];
		return t;
	};
	_proto._img_player4_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 48;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 97;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player4_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 195;
		t.y = 0;
		return t;
	};
	_proto._gp_player4_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player4_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 350;
		t.x = 5.34;
		t.y = 119.92;
		t.elementsContent = [this._img_player4_cardstypebg_i(),this._img_player4_cardstype_i(),this._bitmap_player4_niurank_i()];
		return t;
	};
	_proto._img_player4_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player4_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniu_2_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player4_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player4_cardstype = t;
		t.right = 137;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "niuniu_1_json.nn_txt_n4";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._bitmap_player4_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player4_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 231;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -2.5;
		return t;
	};
	_proto._gp_player4_message_i = function () {
		var t = new eui.Group();
		this._gp_player4_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 70.26;
		t.y = 6.33;
		t.elementsContent = [this._Image9_i(),this._txt_player4_message_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player4_message_i = function () {
		var t = new eui.Label();
		this._txt_player4_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.34;
		return t;
	};
	_proto._gp_player5_i = function () {
		var t = new eui.Group();
		this._gp_player5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 239.67;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 292;
		t.x = 676.64;
		t.y = 96;
		t.elementsContent = [this._gp_player5_headinfo_i(),this._gp_player5_cardsdata_i(),this._gp_player5_message_i()];
		return t;
	};
	_proto._gp_player5_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player5_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 208;
		t.x = 91;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._img_player5_head_i(),this._txt_player5_name_i(),this._img_player5_offline_i(),this._img_player5_yuyinMark_i(),this._txt_player5_score_i(),this._img_player5_kuang_i(),this._img_player5_zhuang_i(),this._gp_player5_rank_i(),this._gp_player5_tapscore_i(),this._img_player5_qiangmark_i(),this.headTouch5_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headbg_heng";
		t.x = 0;
		t.y = 35.33;
		return t;
	};
	_proto._img_player5_head_i = function () {
		var t = new eui.Image();
		this._img_player5_head = t;
		t.height = 72;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.x = 8.01;
		t.y = 42.3;
		return t;
	};
	_proto._txt_player5_name_i = function () {
		var t = new eui.Label();
		this._txt_player5_name = t;
		t.horizontalCenter = 26;
		t.maxHeight = 20;
		t.maxWidth = 100;
		t.size = 20;
		t.text = "魂族网络";
		t.verticalCenter = -7;
		return t;
	};
	_proto._img_player5_offline_i = function () {
		var t = new eui.Image();
		this._img_player5_offline = t;
		t.source = "niuniu_2_json.nn_headoffline";
		t.x = 9.6;
		t.y = 41.6;
		return t;
	};
	_proto._img_player5_yuyinMark_i = function () {
		var t = new eui.Image();
		this._img_player5_yuyinMark = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 9;
		t.y = 43;
		return t;
	};
	_proto._txt_player5_score_i = function () {
		var t = new eui.Label();
		this._txt_player5_score = t;
		t.horizontalCenter = 24;
		t.maxHeight = 20;
		t.maxWidth = 56;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 29;
		return t;
	};
	_proto._img_player5_kuang_i = function () {
		var t = new eui.Image();
		this._img_player5_kuang = t;
		t.source = "niuniu_2_json.nn_headbg_hengkuang";
		t.x = 1.33;
		t.y = 34;
		return t;
	};
	_proto._img_player5_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player5_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = -28;
		t.y = 16.95;
		return t;
	};
	_proto._gp_player5_rank_i = function () {
		var t = new eui.Group();
		this._gp_player5_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.width = 94.67;
		t.x = -95;
		t.y = 86.71;
		t.elementsContent = [this._img_player5_rankbg_i(),this._txt_player5_rankvalue_i()];
		return t;
	};
	_proto._img_player5_rankbg_i = function () {
		var t = new eui.Image();
		this._img_player5_rankbg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_2_json.nn_coin_bg";
		t.x = 1.5;
		t.y = -1.91;
		return t;
	};
	_proto._txt_player5_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player5_rankvalue = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "99";
		t.textColor = 0xFCEFB8;
		t.x = 46.68;
		t.y = 7.33;
		return t;
	};
	_proto._gp_player5_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player5_tapscore = t;
		t.height = 135;
		t.width = 265;
		t.x = -23.67;
		t.y = -48.7;
		t.elementsContent = [this._img_player5_tapscorebg_i(),this._bitmap_player5_tapscore_i()];
		return t;
	};
	_proto._img_player5_tapscorebg_i = function () {
		var t = new eui.Image();
		this._img_player5_tapscorebg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_scorebg_1";
		t.x = 13;
		t.y = 0;
		return t;
	};
	_proto._bitmap_player5_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player5_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 13.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.verticalCenter = -2;
		return t;
	};
	_proto._img_player5_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player5_qiangmark = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_qiang_mark";
		t.width = 53;
		t.x = -66.67;
		t.y = 68.33;
		return t;
	};
	_proto.headTouch5_i = function () {
		var t = new eui.Rect();
		this.headTouch5 = t;
		t.fillAlpha = 0;
		t.height = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190;
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto._gp_player5_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player5_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 300.68;
		t.x = 0.01;
		t.y = 133.16;
		t.elementsContent = [this._img_player5_cardsdata_1_i(),this._img_player5_cardsdata_2_i(),this._img_player5_cardsdata_3_i(),this._img_player5_cardsdata_4_i(),this._img_player5_cardsdata_5_i(),this._gp_player5_cardstype_i()];
		return t;
	};
	_proto._img_player5_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 48;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 97;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player5_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 195;
		t.y = 0;
		return t;
	};
	_proto._gp_player5_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player5_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 350;
		t.x = 5.34;
		t.y = 122.76;
		t.elementsContent = [this._img_player5_cardstypebg_i(),this._img_player5_cardstype_i(),this._bitmap_player5_niurank_i()];
		return t;
	};
	_proto._img_player5_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player5_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniu_2_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player5_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player5_cardstype = t;
		t.right = 139;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "niuniu_1_json.nn_txt_n10";
		t.verticalCenter = 1;
		return t;
	};
	_proto._bitmap_player5_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player5_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 228;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto._gp_player5_message_i = function () {
		var t = new eui.Group();
		this._gp_player5_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -139.39;
		t.y = 3.33;
		t.elementsContent = [this._Image11_i(),this._txt_player5_message_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_rightmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player5_message_i = function () {
		var t = new eui.Label();
		this._txt_player5_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 9.84;
		return t;
	};
	_proto._gp_player6_i = function () {
		var t = new eui.Group();
		this._gp_player6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 159;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 416.67;
		t.x = 744.65;
		t.y = 289;
		t.elementsContent = [this._gp_player6_cardsdata_i(),this._gp_player6_headinfo_i(),this._gp_player6_message_i()];
		return t;
	};
	_proto._gp_player6_cardsdata_i = function () {
		var t = new eui.Group();
		this._gp_player6_cardsdata = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 300.68;
		t.x = 5.01;
		t.y = 40.39;
		t.elementsContent = [this._img_player6_cardsdata_1_i(),this._img_player6_cardsdata_2_i(),this._img_player6_cardsdata_3_i(),this._img_player6_cardsdata_4_i(),this._img_player6_cardsdata_5_i(),this._gp_player6_cardstype_i()];
		return t;
	};
	_proto._img_player6_cardsdata_1_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_2_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 48;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_3_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 97;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_4_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 146;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardsdata_5_i = function () {
		var t = new eui.Image();
		this._img_player6_cardsdata_5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "nncards_json.card_4_13";
		t.x = 195;
		t.y = 0;
		return t;
	};
	_proto._gp_player6_cardstype_i = function () {
		var t = new eui.Group();
		this._gp_player6_cardstype = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 350;
		t.x = 5.34;
		t.y = 122.76;
		t.elementsContent = [this._img_player6_cardstypebg_i(),this._img_player6_cardstype_i(),this._bitmap_player6_niurank_i()];
		return t;
	};
	_proto._img_player6_cardstypebg_i = function () {
		var t = new eui.Image();
		this._img_player6_cardstypebg = t;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.source = "niuniu_2_json.nn_tap";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_player6_cardstype_i = function () {
		var t = new eui.Image();
		this._img_player6_cardstype = t;
		t.right = 121;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "niuniu_1_json.nn_txt_n0";
		t.verticalCenter = 1;
		return t;
	};
	_proto._bitmap_player6_niurank_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player6_niurank = t;
		t.font = "mj_task_coin2_fnt";
		t.left = 242;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "x99";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._gp_player6_headinfo_i = function () {
		var t = new eui.Group();
		this._gp_player6_headinfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 175;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 101;
		t.x = 309;
		t.y = -20;
		t.elementsContent = [this._Image12_i(),this._img_player6_head_i(),this._txt_player6_name_i(),this._img_player6_offline_i(),this._img_player6_yuyinMark_i(),this._txt_player6_score_i(),this._img_player6_kuang_i(),this._img_player6_zhuang_i(),this._gp_player6_rank_i(),this._gp_player6_tapscore_i(),this._img_player6_qiangmark_i(),this.headTouch6_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "niuniu_2_json.nn_headbg_shu";
		t.x = 0;
		t.y = 35.33;
		return t;
	};
	_proto._img_player6_head_i = function () {
		var t = new eui.Image();
		this._img_player6_head = t;
		t.height = 72;
		t.source = "common_image_game_json.public_head2_default";
		t.width = 72;
		t.x = 9.01;
		t.y = 42.3;
		return t;
	};
	_proto._txt_player6_name_i = function () {
		var t = new eui.Label();
		this._txt_player6_name = t;
		t.horizontalCenter = -5.5;
		t.maxHeight = 20;
		t.maxWidth = 80;
		t.size = 20;
		t.text = "魂族网络";
		t.verticalCenter = 40.5;
		return t;
	};
	_proto._img_player6_offline_i = function () {
		var t = new eui.Image();
		this._img_player6_offline = t;
		t.source = "niuniu_2_json.nn_headoffline";
		t.x = 8;
		t.y = 42.6;
		return t;
	};
	_proto._img_player6_yuyinMark_i = function () {
		var t = new eui.Image();
		this._img_player6_yuyinMark = t;
		t.height = 72;
		t.source = "tz_game_public_json.public_dalaba";
		t.width = 72;
		t.x = 9;
		t.y = 43;
		return t;
	};
	_proto._txt_player6_score_i = function () {
		var t = new eui.Label();
		this._txt_player6_score = t;
		t.horizontalCenter = -7.5;
		t.maxHeight = 20;
		t.maxWidth = 80;
		t.size = 20;
		t.text = "99999";
		t.textColor = 0xFFEABF;
		t.verticalCenter = 66.5;
		return t;
	};
	_proto._img_player6_kuang_i = function () {
		var t = new eui.Image();
		this._img_player6_kuang = t;
		t.source = "niuniu_2_json.nn_headbg_shukuang";
		t.x = -4.67;
		t.y = 34;
		return t;
	};
	_proto._img_player6_zhuang_i = function () {
		var t = new eui.Image();
		this._img_player6_zhuang = t;
		t.source = "niuniu_2_json.nn_zhuag";
		t.x = -32;
		t.y = 16.95;
		return t;
	};
	_proto._gp_player6_rank_i = function () {
		var t = new eui.Group();
		this._gp_player6_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.width = 94.67;
		t.x = -124;
		t.y = 19.71;
		t.elementsContent = [this._img_player6_rankbg_i(),this._txt_player6_rankvalue_i()];
		return t;
	};
	_proto._img_player6_rankbg_i = function () {
		var t = new eui.Image();
		this._img_player6_rankbg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_2_json.nn_coin_bg";
		t.x = 1.5;
		t.y = -1.91;
		return t;
	};
	_proto._txt_player6_rankvalue_i = function () {
		var t = new eui.Label();
		this._txt_player6_rankvalue = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "99";
		t.textColor = 0xFCEFB8;
		t.x = 46.68;
		t.y = 7.33;
		return t;
	};
	_proto._gp_player6_tapscore_i = function () {
		var t = new eui.Group();
		this._gp_player6_tapscore = t;
		t.height = 135;
		t.width = 265;
		t.x = -78.67;
		t.y = -56.7;
		t.elementsContent = [this._img_player6_tapscorebg_i(),this._bitmap_player6_tapscore_i()];
		return t;
	};
	_proto._img_player6_tapscorebg_i = function () {
		var t = new eui.Image();
		this._img_player6_tapscorebg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_scorebg_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._bitmap_player6_tapscore_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmap_player6_tapscore = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = -7.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+999";
		t.verticalCenter = -2;
		return t;
	};
	_proto._img_player6_qiangmark_i = function () {
		var t = new eui.Image();
		this._img_player6_qiangmark = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_1_json.nn_qiang_mark";
		t.width = 53;
		t.x = -93.67;
		t.y = -2.67;
		return t;
	};
	_proto.headTouch6_i = function () {
		var t = new eui.Rect();
		this.headTouch6 = t;
		t.fillAlpha = 0;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 91;
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto._gp_player6_message_i = function () {
		var t = new eui.Group();
		this._gp_player6_message = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 81.09;
		t.y = -2.14;
		t.elementsContent = [this._Image13_i(),this._txt_player6_message_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.source = "kxmh_message_json.kxmh_rightmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_player6_message_i = function () {
		var t = new eui.Label();
		this._txt_player6_message = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 8.84;
		return t;
	};
	_proto._gp_showstate_i = function () {
		var t = new eui.Group();
		this._gp_showstate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.width = 288;
		t.x = 396;
		t.y = 287;
		t.elementsContent = [this._gp_showstate_click_i(),this._gp_showstate_tap_i(),this._btn_showstate_start_i(),this._btn_showstate_sitdown_i()];
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
		t.y = 0;
		t.elementsContent = [this._img_clickbg_i(),this._bitmap_clickvalue_i()];
		return t;
	};
	_proto._img_clickbg_i = function () {
		var t = new eui.Image();
		this._img_clickbg = t;
		t.source = "niuniu_2_json.nn_clickbg";
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
		t.y = 84;
		t.elementsContent = [this._Image14_i(),this._txt_showstate_tag_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(0,1,288,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "niuniu_2_json.nn_tap";
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
	_proto._btn_showstate_start_i = function () {
		var t = new eui.Button();
		this._btn_showstate_start = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 110;
		t.visible = false;
		t.skinName = NiuniuSkins$Skin123;
		return t;
	};
	_proto._btn_showstate_sitdown_i = function () {
		var t = new eui.Button();
		this._btn_showstate_sitdown = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 4;
		t.label = "";
		t.verticalCenter = 109;
		t.visible = false;
		t.skinName = NiuniuSkins$Skin124;
		return t;
	};
	_proto._gp_voicemsg_i = function () {
		var t = new eui.Group();
		this._gp_voicemsg = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 102.66;
		t.x = 987.98;
		t.y = 420;
		t.elementsContent = [this._btn_voice_i(),this.locBtn_i(),this._btn_chat_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto._btn_voice_i = function () {
		var t = new eui.Button();
		this._btn_voice = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 15.5;
		t.skinName = NiuniuSkins$Skin125;
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -64.5;
		t.skinName = NiuniuSkins$Skin126;
		return t;
	};
	_proto._btn_chat_i = function () {
		var t = new eui.Button();
		this._btn_chat = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 95.5;
		t.skinName = NiuniuSkins$Skin127;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = -17.89;
		t.y = -18.04;
		t.elementsContent = [this._Image15_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image15_i = function () {
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
	_proto._img_sit1_i = function () {
		var t = new eui.Image();
		this._img_sit1 = t;
		t.horizontalCenter = -452;
		t.source = "common_image_game_json.public_head2_default";
		t.verticalCenter = 246;
		return t;
	};
	_proto._img_sit2_i = function () {
		var t = new eui.Image();
		this._img_sit2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "common_image_game_json.public_head2_default";
		t.x = 28;
		t.y = 304;
		return t;
	};
	_proto._img_sit3_i = function () {
		var t = new eui.Image();
		this._img_sit3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "common_image_game_json.public_head2_default";
		t.x = 228;
		t.y = 122;
		return t;
	};
	_proto._img_sit4_i = function () {
		var t = new eui.Image();
		this._img_sit4 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "common_image_game_json.public_head2_default";
		t.x = 507;
		t.y = 47.67;
		return t;
	};
	_proto._img_sit5_i = function () {
		var t = new eui.Image();
		this._img_sit5 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "common_image_game_json.public_head2_default";
		t.x = 773;
		t.y = 122;
		return t;
	};
	_proto._img_sit6_i = function () {
		var t = new eui.Image();
		this._img_sit6 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "common_image_game_json.public_head2_default";
		t.x = 966.68;
		t.y = 304;
		return t;
	};
	_proto._gp_menu_i = function () {
		var t = new eui.Group();
		this._gp_menu = t;
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._btn_menu_i(),this._btn_message_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto._btn_menu_i = function () {
		var t = new eui.Button();
		this._btn_menu = t;
		t.horizontalCenter = -43.5;
		t.label = "";
		t.verticalCenter = -51.5;
		t.skinName = NiuniuSkins$Skin128;
		return t;
	};
	_proto._btn_message_i = function () {
		var t = new eui.Button();
		this._btn_message = t;
		t.horizontalCenter = 49.5;
		t.label = "";
		t.verticalCenter = -51.5;
		t.skinName = NiuniuSkins$Skin129;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.height = 17;
		t.source = "niuniu_2_json.nn_redpoint";
		t.width = 15;
		t.x = 163;
		t.y = 13;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.bg0_i(),this._Group2_i()];
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Rect();
		this.bg0 = t;
		t.alpha = 0.3;
		t.height = 104;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 110;
		t.y = 20;
		t.elementsContent = [this.contentText1_i(),this.contentText2_i()];
		return t;
	};
	_proto.contentText1_i = function () {
		var t = new eui.Label();
		this.contentText1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "多少时间未开局将解散。";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.y = 31;
		return t;
	};
	_proto.contentText2_i = function () {
		var t = new eui.Label();
		this.contentText2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "本局时长：10局";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	return NiuniuSkins;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShisanWater/sss_chooseCard.exml'] = window.sss_chooseCard = (function (_super) {
	__extends(sss_chooseCard, _super);
	var sss_chooseCard$Skin130 = 	(function (_super) {
		__extends(sss_chooseCard$Skin130, _super);
		function sss_chooseCard$Skin130() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin130.prototype;

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
		return sss_chooseCard$Skin130;
	})(eui.Skin);

	var sss_chooseCard$Skin131 = 	(function (_super) {
		__extends(sss_chooseCard$Skin131, _super);
		function sss_chooseCard$Skin131() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin131.prototype;

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
		return sss_chooseCard$Skin131;
	})(eui.Skin);

	var sss_chooseCard$Skin132 = 	(function (_super) {
		__extends(sss_chooseCard$Skin132, _super);
		function sss_chooseCard$Skin132() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin132.prototype;

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
		return sss_chooseCard$Skin132;
	})(eui.Skin);

	function sss_chooseCard() {
		_super.call(this);
		this.skinParts = ["_img_meng","daojiQuan","daojishiTxt","hadChoosen0","head1","mid1","foot0","head2","mid2","footT1","hadChoosen1","head0","mid0","foot1","head3","mid3","footT0","hadChoosen2","head4","mid4","foot2","head5","mid5","footT2","hadChoosen3","head6","mid6","foot3","head7","mid7","footT3","itemGroup","card0","card1","card2","card3","card4","card5","card6","card7","card8","card9","card10","card11","card12","chupaiBtn","specialCancelBtn","specialConfirmBtn","specialText","specialGroup","tipContent","showTip","_group_main"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
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
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 950;
		t.verticalCenter = 0;
		t.width = 555;
		t.x = 43;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Scroller1_i(),this._Group10_i(),this.chupaiBtn_i(),this.specialGroup_i(),this.showTip_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_xipai_title";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 105;
		t.width = 102;
		t.x = 386;
		t.y = 75;
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
		t.horizontalCenter = 0;
		t.width = 620;
		t.y = 588.66;
		t.viewport = this.itemGroup_i();
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.elementsContent = [this._Group3_i(),this._Group5_i(),this._Group7_i(),this._Group9_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.hadChoosen0_i(),this._Rect1_i(),this._Group2_i()];
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
	_proto._Group2_i = function () {
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
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 0;
		return t;
	};
	_proto.mid1_i = function () {
		var t = new eui.Label();
		this.mid1 = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.foot0_i = function () {
		var t = new eui.Label();
		this.foot0 = t;
		t.horizontalCenter = 0;
		t.size = 40;
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
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -0.5;
		t.x = 155;
		t.elementsContent = [this.hadChoosen1_i(),this._Rect2_i(),this._Group4_i()];
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
	_proto._Group4_i = function () {
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
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -0.5;
		t.x = 310;
		t.elementsContent = [this.hadChoosen2_i(),this._Rect3_i(),this._Group6_i()];
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
	_proto._Group6_i = function () {
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
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -0.5;
		t.x = 465;
		t.elementsContent = [this.hadChoosen3_i(),this._Rect4_i(),this._Group8_i()];
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
	_proto._Group8_i = function () {
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
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 75;
		t.elementsContent = [this._Image3_i(),this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i(),this.card5_i(),this.card6_i(),this.card7_i(),this.card8_i(),this.card9_i(),this.card10_i(),this.card11_i(),this.card12_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sss_xipai_main_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 19.31;
		t.y = 20;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_5";
		t.width = 109;
		t.x = 124.31;
		t.y = 20;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "组1_png";
		t.width = 109;
		t.x = 229.31;
		t.y = 20;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Image();
		this.card3 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 19.31;
		t.y = 170;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Image();
		this.card4 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 124.31;
		t.y = 170;
		return t;
	};
	_proto.card5_i = function () {
		var t = new eui.Image();
		this.card5 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 229.31;
		t.y = 170;
		return t;
	};
	_proto.card6_i = function () {
		var t = new eui.Image();
		this.card6 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 334.31;
		t.y = 170;
		return t;
	};
	_proto.card7_i = function () {
		var t = new eui.Image();
		this.card7 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 439.31;
		t.y = 170;
		return t;
	};
	_proto.card8_i = function () {
		var t = new eui.Image();
		this.card8 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 19.31;
		t.y = 320;
		return t;
	};
	_proto.card9_i = function () {
		var t = new eui.Image();
		this.card9 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 124.31;
		t.y = 320;
		return t;
	};
	_proto.card10_i = function () {
		var t = new eui.Image();
		this.card10 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 229.31;
		t.y = 320;
		return t;
	};
	_proto.card11_i = function () {
		var t = new eui.Image();
		this.card11 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 334.31;
		t.y = 320;
		return t;
	};
	_proto.card12_i = function () {
		var t = new eui.Image();
		this.card12 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nncards_json.card_1_13";
		t.width = 109;
		t.x = 439.31;
		t.y = 320;
		return t;
	};
	_proto.chupaiBtn_i = function () {
		var t = new eui.Button();
		this.chupaiBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 426.5;
		t.skinName = sss_chooseCard$Skin130;
		return t;
	};
	_proto.specialGroup_i = function () {
		var t = new eui.Group();
		this.specialGroup = t;
		t.x = -11;
		t.y = 815;
		t.elementsContent = [this._Image4_i(),this._Group11_i(),this.specialText_i()];
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
	_proto._Group11_i = function () {
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
		t.skinName = sss_chooseCard$Skin131;
		return t;
	};
	_proto.specialConfirmBtn_i = function () {
		var t = new eui.Button();
		this.specialConfirmBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 370;
		t.skinName = sss_chooseCard$Skin132;
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
		this.skinParts = ["hadChoosen","head","mid","footT","head0","mid0","footT0"];
		
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
		t.elementsContent = [this.head_i(),this.mid_i(),this.footT_i(),this.head0_i(),this.mid0_i(),this.footT0_i()];
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Label();
		this.head = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0xb75616;
		t.y = 0;
		return t;
	};
	_proto.mid_i = function () {
		var t = new eui.Label();
		this.mid = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.footT_i = function () {
		var t = new eui.Label();
		this.footT = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "同花顺";
		t.textColor = 0x000000;
		t.y = 128.33;
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
		t.width = 158;
		t.y = 0;
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
		t.width = 225;
		t.y = 65;
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
		t.width = 225;
		t.y = 130;
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
		t.visible = false;
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
		t.text = "魂族网络科";
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
		t.scaleX = 0.8;
		t.scaleY = 0.8;
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
		t.visible = false;
		t.width = 226;
		t.x = 164;
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
		t.visible = false;
		t.width = 226;
		t.x = 164;
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
		t.visible = false;
		t.width = 226;
		t.x = 164;
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
		t.visible = false;
		t.width = 226;
		t.x = 164;
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
	var sss_index$Skin133 = 	(function (_super) {
		__extends(sss_index$Skin133, _super);
		function sss_index$Skin133() {
			_super.call(this);
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
		var _proto = sss_index$Skin133.prototype;

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
		return sss_index$Skin133;
	})(eui.Skin);

	var sss_index$Skin134 = 	(function (_super) {
		__extends(sss_index$Skin134, _super);
		function sss_index$Skin134() {
			_super.call(this);
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
		var _proto = sss_index$Skin134.prototype;

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
		return sss_index$Skin134;
	})(eui.Skin);

	var sss_index$Skin135 = 	(function (_super) {
		__extends(sss_index$Skin135, _super);
		function sss_index$Skin135() {
			_super.call(this);
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
		var _proto = sss_index$Skin135.prototype;

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
		return sss_index$Skin135;
	})(eui.Skin);

	var sss_index$Skin136 = 	(function (_super) {
		__extends(sss_index$Skin136, _super);
		function sss_index$Skin136() {
			_super.call(this);
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
		var _proto = sss_index$Skin136.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_btn_start";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_index$Skin136;
	})(eui.Skin);

	function sss_index() {
		_super.call(this);
		this.skinParts = ["_img_logo","daojiGuang","daojishiTxt","daojiGroup","bottomBg","xiaoxiBtn","xxGroup","locBtn","locGroup","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","_rule_pwd","_rule_playCount","_rule_payMode","_rule_kaipai","_rule_guipai","_rule_specialCard","_gp_rulebg","menu","pg_Content","pangguanGroup","top03","top02","top01","topTit0","mycardTop0","mid05","mid04","mid03","mid02","mid01","midTit0","mycardMid0","bottom05","bottom04","bottom03","bottom02","bottom01","botTit0","mycardBottom0","hasReadyCards","nickname","point","pai112","pai111","pai110","pai19","pai18","pai17","pai16","pai15","pai14","pai13","pai12","pai11","pai10","peipai1","paiGroup1","pai49","pai50","pai51","pai52","pai53","pai54","pai55","peipai4","paiGroup4","message1","messagebg0","bottomPoint0","topPoint","topPoint0","topPoint1","topPoint2","top0","top1","top2","topTit1","mycardTop1","mid0","mid1","mid2","mid3","mid4","midTit1","mycardMid1","bottom0","bottom1","bottom2","bottom3","bottom4","botTit1","mycardBottom1","hasReadyCards0","nickname0","point0","pai0","pai1","pai2","pai3","pai4","pai5","pai6","pai7","pai8","pai9","pai20","pai21","pai22","peipai0","paiGroup0","pai59","pai60","pai61","pai62","pai63","pai64","pai65","peipai5","paiGroup5","message0","messagebg1","top3","top4","top5","topTit2","mycardTop2","mid5","mid6","mid7","mid8","mid9","midTit2","mycardMid2","bottom5","bottom6","bottom7","bottom8","bottom9","botTit2","mycardBottom2","hasReadyCards1","nickname1","point1","pai23","pai24","pai25","pai26","pai27","pai28","pai29","pai30","pai31","pai32","pai33","pai34","pai35","peipai2","paiGroup2","pai56","pai57","pai58","pai66","pai67","pai68","pai69","peipai6","paiGroup6","message2","messagebg2","top6","top7","top8","topTit3","mycardTop3","mid10","mid11","mid12","mid13","mid14","midTit3","mycardMid3","bottom10","bottom11","bottom12","bottom13","bottom14","botTit3","mycardBottom3","hasReadyCards2","nickname2","point2","pai36","pai37","pai38","pai39","pai40","pai41","pai42","pai43","pai44","pai45","pai46","pai47","pai48","peipai3","paiGroup3","pai70","pai71","pai72","pai73","pai74","pai75","pai76","peipai7","paiGroup7","message3","messagebg3","startBtn","startBtnGroup","_img_music"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._img_logo_i(),this.daojiGroup_i(),this.bottomBg_i(),this.xxGroup_i(),this.locGroup_i(),this.yyGroup_i(),this._gp_rulebg_i(),this.menu_i(),this.pangguanGroup_i(),this._Group11_i(),this._Group14_i(),this._Group17_i(),this._Group20_i(),this.startBtnGroup_i(),this._Image26_i(),this._img_music_i()];
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
		t.x = 12;
		t.y = 843;
		t.elementsContent = [this.xiaoxiBtn_i()];
		return t;
	};
	_proto.xiaoxiBtn_i = function () {
		var t = new eui.Button();
		this.xiaoxiBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin133;
		return t;
	};
	_proto.locGroup_i = function () {
		var t = new eui.Group();
		this.locGroup = t;
		t.height = 71;
		t.width = 71;
		t.x = 12;
		t.y = 929;
		t.elementsContent = [this.locBtn_i()];
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin134;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 71;
		t.width = 71;
		t.x = 12;
		t.y = 757.5;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin135;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.x = -16;
		t.y = -104;
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
		t.y = 113.2;
		t.elementsContent = [this._Image4_i(),this._rule_pwd_i(),this._rule_playCount_i(),this._rule_payMode_i(),this._rule_kaipai_i(),this._rule_guipai_i(),this._rule_specialCard_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 170;
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
		t.x = 152.69;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image5_i = function () {
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
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
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
		t.text = "魂族网络科";
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
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image9_i = function () {
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
		t.text = "魂族网络科";
		t.width = 80;
		t.y = 75.5;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.visible = false;
		t.width = 110;
		t.x = 265;
		t.y = 867.78;
		t.elementsContent = [this.hasReadyCards_i(),this._Group5_i(),this._Group6_i(),this.paiGroup1_i(),this.paiGroup4_i(),this.messagebg0_i(),this.bottomPoint0_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto.hasReadyCards_i = function () {
		var t = new eui.Group();
		this.hasReadyCards = t;
		t.x = -53;
		t.y = -201.57;
		t.elementsContent = [this.mycardTop0_i(),this.mycardMid0_i(),this.mycardBottom0_i()];
		return t;
	};
	_proto.mycardTop0_i = function () {
		var t = new eui.Group();
		this.mycardTop0 = t;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top03_i(),this.top02_i(),this.top01_i(),this.topTit0_i()];
		return t;
	};
	_proto.top03_i = function () {
		var t = new eui.Image();
		this.top03 = t;
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
	_proto.top02_i = function () {
		var t = new eui.Image();
		this.top02 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 82;
		t.y = 109.53;
		return t;
	};
	_proto.top01_i = function () {
		var t = new eui.Image();
		this.top01 = t;
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
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.x = -9;
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
		t.elementsContent = [this.mid05_i(),this.mid04_i(),this.mid03_i(),this.mid02_i(),this.mid01_i(),this.midTit0_i()];
		return t;
	};
	_proto.mid05_i = function () {
		var t = new eui.Image();
		this.mid05 = t;
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
	_proto.mid04_i = function () {
		var t = new eui.Image();
		this.mid04 = t;
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
	_proto.mid03_i = function () {
		var t = new eui.Image();
		this.mid03 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.mid02_i = function () {
		var t = new eui.Image();
		this.mid02 = t;
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
	_proto.mid01_i = function () {
		var t = new eui.Image();
		this.mid01 = t;
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
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.x = -9;
		t.y = 55;
		return t;
	};
	_proto.mycardBottom0_i = function () {
		var t = new eui.Group();
		this.mycardBottom0 = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 225;
		t.y = 130;
		t.elementsContent = [this.bottom05_i(),this.bottom04_i(),this.bottom03_i(),this.bottom02_i(),this.bottom01_i(),this.botTit0_i()];
		return t;
	};
	_proto.bottom05_i = function () {
		var t = new eui.Image();
		this.bottom05 = t;
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
	_proto.bottom04_i = function () {
		var t = new eui.Image();
		this.bottom04 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "nncards_json.card_bg";
		t.width = 75;
		t.x = 95;
		t.y = 110.32;
		return t;
	};
	_proto.bottom03_i = function () {
		var t = new eui.Image();
		this.bottom03 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "nncards_json.card_4_3";
		t.width = 75;
		t.x = 115;
		t.y = 109.53;
		return t;
	};
	_proto.bottom02_i = function () {
		var t = new eui.Image();
		this.bottom02 = t;
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
	_proto.bottom01_i = function () {
		var t = new eui.Image();
		this.bottom01 = t;
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
		t.horizontalCenter = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.y = 57;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
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
		t.text = "魂族网络科";
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
		t.textColor = 0xffe187;
		t.y = 33.8;
		return t;
	};
	_proto.paiGroup1_i = function () {
		var t = new eui.Group();
		this.paiGroup1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.y = -121;
		t.elementsContent = [this.pai112_i(),this.pai111_i(),this.pai110_i(),this.pai19_i(),this.pai18_i(),this.pai17_i(),this.pai16_i(),this.pai15_i(),this.pai14_i(),this.pai13_i(),this.pai12_i(),this.pai11_i(),this.pai10_i(),this.peipai1_i()];
		return t;
	};
	_proto.pai112_i = function () {
		var t = new eui.Image();
		this.pai112 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai111_i = function () {
		var t = new eui.Image();
		this.pai111 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai110_i = function () {
		var t = new eui.Image();
		this.pai110 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai19_i = function () {
		var t = new eui.Image();
		this.pai19 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai18_i = function () {
		var t = new eui.Image();
		this.pai18 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai17_i = function () {
		var t = new eui.Image();
		this.pai17 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai16_i = function () {
		var t = new eui.Image();
		this.pai16 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai15_i = function () {
		var t = new eui.Image();
		this.pai15 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai14_i = function () {
		var t = new eui.Image();
		this.pai14 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai13_i = function () {
		var t = new eui.Image();
		this.pai13 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai12_i = function () {
		var t = new eui.Image();
		this.pai12 = t;
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
	_proto.pai10_i = function () {
		var t = new eui.Image();
		this.pai10 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.peipai1_i = function () {
		var t = new eui.Image();
		this.peipai1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 31.5;
		return t;
	};
	_proto.paiGroup4_i = function () {
		var t = new eui.Group();
		this.paiGroup4 = t;
		t.horizontalCenter = 2;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.y = -117;
		t.elementsContent = [this.pai49_i(),this.pai50_i(),this.pai51_i(),this.pai52_i(),this.pai53_i(),this.pai54_i(),this.pai55_i(),this.peipai4_i()];
		return t;
	};
	_proto.pai49_i = function () {
		var t = new eui.Image();
		this.pai49 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai50_i = function () {
		var t = new eui.Image();
		this.pai50 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai51_i = function () {
		var t = new eui.Image();
		this.pai51 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai52_i = function () {
		var t = new eui.Image();
		this.pai52 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai53_i = function () {
		var t = new eui.Image();
		this.pai53 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai54_i = function () {
		var t = new eui.Image();
		this.pai54 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai55_i = function () {
		var t = new eui.Image();
		this.pai55 = t;
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
	_proto.messagebg0_i = function () {
		var t = new eui.Group();
		this.messagebg0 = t;
		t.x = 41;
		t.y = 25;
		t.elementsContent = [this._Image12_i(),this.message1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
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
	_proto.bottomPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint0 = t;
		t.font = "coin_action_fnt";
		t.horizontalCenter = -5;
		t.text = "+10";
		t.y = -45.44;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 164;
		t.y = -170;
		t.elementsContent = [this.topPoint_i(),this._Image13_i()];
		return t;
	};
	_proto.topPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "sss_fnt_title_json.sss_mid_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 164;
		t.y = -105;
		t.elementsContent = [this.topPoint0_i(),this._Image14_i()];
		return t;
	};
	_proto.topPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint0 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "sss_fnt_title_json.sss_mid_lose";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 164;
		t.y = -30;
		t.elementsContent = [this.topPoint1_i(),this._Image15_i()];
		return t;
	};
	_proto.topPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint1 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "sss_fnt_title_json.sss_bottom_win";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 62;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 226;
		t.x = 164;
		t.y = 45;
		t.elementsContent = [this.topPoint2_i(),this._Image16_i()];
		return t;
	};
	_proto.topPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint2 = t;
		t.font = "coin_action_fnt";
		t.text = "+10";
		t.x = 116;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "sss_fnt_title_json.sss_head_lose";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.visible = false;
		t.width = 110;
		t.x = 520;
		t.y = 465;
		t.elementsContent = [this.hasReadyCards0_i(),this._Group12_i(),this._Group13_i(),this.paiGroup0_i(),this.paiGroup5_i(),this.messagebg1_i()];
		return t;
	};
	_proto.hasReadyCards0_i = function () {
		var t = new eui.Group();
		this.hasReadyCards0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = -202;
		t.y = -58;
		t.elementsContent = [this.mycardTop1_i(),this.mycardMid1_i(),this.mycardBottom1_i()];
		return t;
	};
	_proto.mycardTop1_i = function () {
		var t = new eui.Group();
		this.mycardTop1 = t;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top0_i(),this.top1_i(),this.top2_i(),this.topTit1_i()];
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
	_proto.topTit1_i = function () {
		var t = new eui.Image();
		this.topTit1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.x = -9;
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
		t.elementsContent = [this.mid0_i(),this.mid1_i(),this.mid2_i(),this.mid3_i(),this.mid4_i(),this.midTit1_i()];
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
	_proto.midTit1_i = function () {
		var t = new eui.Image();
		this.midTit1 = t;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.x = -9;
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
		t.elementsContent = [this.bottom0_i(),this.bottom1_i(),this.bottom2_i(),this.bottom3_i(),this.bottom4_i(),this.botTit1_i()];
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
	_proto.botTit1_i = function () {
		var t = new eui.Image();
		this.botTit1 = t;
		t.horizontalCenter = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.y = 57;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect2_i(),this.nickname0_i(),this.point0_i()];
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
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "魂族网络科";
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
	_proto.paiGroup0_i = function () {
		var t = new eui.Group();
		this.paiGroup0 = t;
		t.horizontalCenter = -94;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 1;
		t.elementsContent = [this.pai0_i(),this.pai1_i(),this.pai2_i(),this.pai3_i(),this.pai4_i(),this.pai5_i(),this.pai6_i(),this.pai7_i(),this.pai8_i(),this.pai9_i(),this.pai20_i(),this.pai21_i(),this.pai22_i(),this.peipai0_i()];
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
	_proto.pai20_i = function () {
		var t = new eui.Image();
		this.pai20 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai21_i = function () {
		var t = new eui.Image();
		this.pai21 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai22_i = function () {
		var t = new eui.Image();
		this.pai22 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.peipai0_i = function () {
		var t = new eui.Image();
		this.peipai0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 32.5;
		return t;
	};
	_proto.paiGroup5_i = function () {
		var t = new eui.Group();
		this.paiGroup5 = t;
		t.horizontalCenter = -152;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 1;
		t.elementsContent = [this.pai59_i(),this.pai60_i(),this.pai61_i(),this.pai62_i(),this.pai63_i(),this.pai64_i(),this.pai65_i(),this.peipai5_i()];
		return t;
	};
	_proto.pai59_i = function () {
		var t = new eui.Image();
		this.pai59 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai60_i = function () {
		var t = new eui.Image();
		this.pai60 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai61_i = function () {
		var t = new eui.Image();
		this.pai61 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai62_i = function () {
		var t = new eui.Image();
		this.pai62 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai63_i = function () {
		var t = new eui.Image();
		this.pai63 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai64_i = function () {
		var t = new eui.Image();
		this.pai64 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai65_i = function () {
		var t = new eui.Image();
		this.pai65 = t;
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
	_proto.messagebg1_i = function () {
		var t = new eui.Group();
		this.messagebg1 = t;
		t.x = -205;
		t.y = -20;
		t.elementsContent = [this._Image19_i(),this.message0_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 300;
		t.scale9Grid = new egret.Rectangle(34,6,207,22);
		t.scaleX = -1;
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
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.visible = false;
		t.width = 110;
		t.x = 10;
		t.y = 465;
		t.elementsContent = [this.hasReadyCards1_i(),this._Group15_i(),this._Group16_i(),this.paiGroup2_i(),this.paiGroup6_i(),this.messagebg2_i()];
		return t;
	};
	_proto.hasReadyCards1_i = function () {
		var t = new eui.Group();
		this.hasReadyCards1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 107;
		t.y = -58;
		t.elementsContent = [this.mycardTop2_i(),this.mycardMid2_i(),this.mycardBottom2_i()];
		return t;
	};
	_proto.mycardTop2_i = function () {
		var t = new eui.Group();
		this.mycardTop2 = t;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top3_i(),this.top4_i(),this.top5_i(),this.topTit2_i()];
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
	_proto.topTit2_i = function () {
		var t = new eui.Image();
		this.topTit2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.x = -9;
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
		t.elementsContent = [this.mid5_i(),this.mid6_i(),this.mid7_i(),this.mid8_i(),this.mid9_i(),this.midTit2_i()];
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
	_proto.midTit2_i = function () {
		var t = new eui.Image();
		this.midTit2 = t;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.x = -9;
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
		t.elementsContent = [this.bottom5_i(),this.bottom6_i(),this.bottom7_i(),this.bottom8_i(),this.bottom9_i(),this.botTit2_i()];
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
	_proto.botTit2_i = function () {
		var t = new eui.Image();
		this.botTit2 = t;
		t.horizontalCenter = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.y = 57;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect3_i(),this.nickname1_i(),this.point1_i()];
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
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "魂族网络科";
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
	_proto.paiGroup2_i = function () {
		var t = new eui.Group();
		this.paiGroup2 = t;
		t.horizontalCenter = 98;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 1;
		t.elementsContent = [this.pai23_i(),this.pai24_i(),this.pai25_i(),this.pai26_i(),this.pai27_i(),this.pai28_i(),this.pai29_i(),this.pai30_i(),this.pai31_i(),this.pai32_i(),this.pai33_i(),this.pai34_i(),this.pai35_i(),this.peipai2_i()];
		return t;
	};
	_proto.pai23_i = function () {
		var t = new eui.Image();
		this.pai23 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai24_i = function () {
		var t = new eui.Image();
		this.pai24 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai25_i = function () {
		var t = new eui.Image();
		this.pai25 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai26_i = function () {
		var t = new eui.Image();
		this.pai26 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai27_i = function () {
		var t = new eui.Image();
		this.pai27 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai28_i = function () {
		var t = new eui.Image();
		this.pai28 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai29_i = function () {
		var t = new eui.Image();
		this.pai29 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai30_i = function () {
		var t = new eui.Image();
		this.pai30 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai31_i = function () {
		var t = new eui.Image();
		this.pai31 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai32_i = function () {
		var t = new eui.Image();
		this.pai32 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai33_i = function () {
		var t = new eui.Image();
		this.pai33 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai34_i = function () {
		var t = new eui.Image();
		this.pai34 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai35_i = function () {
		var t = new eui.Image();
		this.pai35 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.peipai2_i = function () {
		var t = new eui.Image();
		this.peipai2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 32.5;
		return t;
	};
	_proto.paiGroup6_i = function () {
		var t = new eui.Group();
		this.paiGroup6 = t;
		t.horizontalCenter = 154;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 1;
		t.elementsContent = [this.pai56_i(),this.pai57_i(),this.pai58_i(),this.pai66_i(),this.pai67_i(),this.pai68_i(),this.pai69_i(),this.peipai6_i()];
		return t;
	};
	_proto.pai56_i = function () {
		var t = new eui.Image();
		this.pai56 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai57_i = function () {
		var t = new eui.Image();
		this.pai57 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai58_i = function () {
		var t = new eui.Image();
		this.pai58 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai66_i = function () {
		var t = new eui.Image();
		this.pai66 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai67_i = function () {
		var t = new eui.Image();
		this.pai67 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai68_i = function () {
		var t = new eui.Image();
		this.pai68 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai69_i = function () {
		var t = new eui.Image();
		this.pai69 = t;
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
	_proto.messagebg2_i = function () {
		var t = new eui.Group();
		this.messagebg2 = t;
		t.x = 13;
		t.y = -20;
		t.elementsContent = [this._Image22_i(),this.message2_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
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
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.visible = false;
		t.width = 110;
		t.x = 87;
		t.y = 193.78;
		t.elementsContent = [this.hasReadyCards2_i(),this._Group18_i(),this._Group19_i(),this.paiGroup3_i(),this.paiGroup7_i(),this.messagebg3_i()];
		return t;
	};
	_proto.hasReadyCards2_i = function () {
		var t = new eui.Group();
		this.hasReadyCards2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 129;
		t.y = -58;
		t.elementsContent = [this.mycardTop3_i(),this.mycardMid3_i(),this.mycardBottom3_i()];
		return t;
	};
	_proto.mycardTop3_i = function () {
		var t = new eui.Group();
		this.mycardTop3 = t;
		t.horizontalCenter = 0.5;
		t.width = 158;
		t.y = 0;
		t.elementsContent = [this.top6_i(),this.top7_i(),this.top8_i(),this.topTit3_i()];
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
		t.source = "nncards_json.card_sss_bg";
		t.width = 75;
		t.x = 102;
		t.y = 113.53;
		return t;
	};
	_proto.topTit3_i = function () {
		var t = new eui.Image();
		this.topTit3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.x = -9;
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
		t.elementsContent = [this.mid10_i(),this.mid11_i(),this.mid12_i(),this.mid13_i(),this.mid14_i(),this.midTit3_i()];
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
	_proto.midTit3_i = function () {
		var t = new eui.Image();
		this.midTit3 = t;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.x = -9;
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
		t.elementsContent = [this.bottom10_i(),this.bottom11_i(),this.bottom12_i(),this.bottom13_i(),this.bottom14_i(),this.botTit3_i()];
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
	_proto.botTit3_i = function () {
		var t = new eui.Image();
		this.botTit3 = t;
		t.horizontalCenter = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_type_22";
		t.visible = false;
		t.y = 57;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image23_i(),this._Image24_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tz_sss_img_json.sss_head_default";
		t.width = 95;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 112;
		t.elementsContent = [this._Rect4_i(),this.nickname2_i(),this.point2_i()];
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
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "魂族网络科";
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
	_proto.paiGroup3_i = function () {
		var t = new eui.Group();
		this.paiGroup3 = t;
		t.horizontalCenter = 222;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 47;
		t.elementsContent = [this.pai36_i(),this.pai37_i(),this.pai38_i(),this.pai39_i(),this.pai40_i(),this.pai41_i(),this.pai42_i(),this.pai43_i(),this.pai44_i(),this.pai45_i(),this.pai46_i(),this.pai47_i(),this.pai48_i(),this.peipai3_i()];
		return t;
	};
	_proto.pai36_i = function () {
		var t = new eui.Image();
		this.pai36 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai37_i = function () {
		var t = new eui.Image();
		this.pai37 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai38_i = function () {
		var t = new eui.Image();
		this.pai38 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai39_i = function () {
		var t = new eui.Image();
		this.pai39 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai40_i = function () {
		var t = new eui.Image();
		this.pai40 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai41_i = function () {
		var t = new eui.Image();
		this.pai41 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai42_i = function () {
		var t = new eui.Image();
		this.pai42 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai43_i = function () {
		var t = new eui.Image();
		this.pai43 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai44_i = function () {
		var t = new eui.Image();
		this.pai44 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai45_i = function () {
		var t = new eui.Image();
		this.pai45 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai46_i = function () {
		var t = new eui.Image();
		this.pai46 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai47_i = function () {
		var t = new eui.Image();
		this.pai47 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai48_i = function () {
		var t = new eui.Image();
		this.pai48 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.peipai3_i = function () {
		var t = new eui.Image();
		this.peipai3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "tz_sss_img_json.sss_lipaizhong";
		t.verticalCenter = 32.5;
		return t;
	};
	_proto.paiGroup7_i = function () {
		var t = new eui.Group();
		this.paiGroup7 = t;
		t.horizontalCenter = 160;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 47;
		t.elementsContent = [this.pai70_i(),this.pai71_i(),this.pai72_i(),this.pai73_i(),this.pai74_i(),this.pai75_i(),this.pai76_i(),this.peipai7_i()];
		return t;
	};
	_proto.pai70_i = function () {
		var t = new eui.Image();
		this.pai70 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai71_i = function () {
		var t = new eui.Image();
		this.pai71 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai72_i = function () {
		var t = new eui.Image();
		this.pai72 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai73_i = function () {
		var t = new eui.Image();
		this.pai73 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai74_i = function () {
		var t = new eui.Image();
		this.pai74 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai75_i = function () {
		var t = new eui.Image();
		this.pai75 = t;
		t.height = 127;
		t.source = "nncards_json.card_4_3";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai76_i = function () {
		var t = new eui.Image();
		this.pai76 = t;
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
	_proto.messagebg3_i = function () {
		var t = new eui.Group();
		this.messagebg3 = t;
		t.x = 41;
		t.y = 3;
		t.elementsContent = [this._Image25_i(),this.message3_i()];
		return t;
	};
	_proto._Image25_i = function () {
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
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 71;
		t.horizontalCenter = 0;
		t.width = 71;
		t.y = 770;
		t.elementsContent = [this.startBtn_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin136;
		return t;
	};
	_proto._Image26_i = function () {
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
		t.x = 12;
		t.y = 929;
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
		t.text = "魂族网络科";
		t.textAlign = "center";
		t.width = 80;
		t.y = 75.5;
		return t;
	};
	return sss_pgHead;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShisanWater/sss_totalResult.exml'] = window.sss_totalResult = (function (_super) {
	__extends(sss_totalResult, _super);
	var sss_totalResult$Skin137 = 	(function (_super) {
		__extends(sss_totalResult$Skin137, _super);
		function sss_totalResult$Skin137() {
			_super.call(this);
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
		var _proto = sss_totalResult$Skin137.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
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
		return sss_totalResult$Skin137;
	})(eui.Skin);

	var sss_totalResult$Skin138 = 	(function (_super) {
		__extends(sss_totalResult$Skin138, _super);
		function sss_totalResult$Skin138() {
			_super.call(this);
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
		var _proto = sss_totalResult$Skin138.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sss_img_json.sss_rt_btn_share";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sss_totalResult$Skin138;
	})(eui.Skin);

	var sss_totalResult$Skin139 = 	(function (_super) {
		__extends(sss_totalResult$Skin139, _super);
		function sss_totalResult$Skin139() {
			_super.call(this);
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
		var _proto = sss_totalResult$Skin139.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
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
		return sss_totalResult$Skin139;
	})(eui.Skin);

	function sss_totalResult() {
		_super.call(this);
		this.skinParts = ["pwd","playcount","gamename","time","headImg0","nickname0","ID0","point0","item0","headImg1","nickname1","ID1","point1","item1","headImg2","nickname2","ID2","point2","item2","headImg3","nickname3","ID3","point3","item3","bigwin0","bigwin1","bigwin2","bigwin3","backHall","jietu","playAgain"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Group1_i(),this._Image2_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.bigwin0_i(),this.bigwin1_i(),this.bigwin2_i(),this.bigwin3_i(),this._Group10_i()];
	}
	var _proto = sss_totalResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sss_hallbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 137;
		t.fontFamily = "Microsoft YaHei";
		t.right = 24;
		t.size = 20;
		t.text = "本产品仅供娱乐，禁止赌博！";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 135.43;
		t.elementsContent = [this.pwd_i(),this.playcount_i(),this.gamename_i(),this.time_i()];
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "房号:999999";
		t.x = 349.7;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "局数：16";
		t.x = 349.7;
		t.y = 30;
		return t;
	};
	_proto.gamename_i = function () {
		var t = new eui.Label();
		this.gamename = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "闯三关";
		t.x = 0;
		t.y = 0.4;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "时间：2017-01-01 10:10:10";
		t.x = 0;
		t.y = 30.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_title";
		t.top = 0;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.horizontalCenter = -9.5;
		t.y = 222;
		t.elementsContent = [this._Image3_i(),this._Group2_i(),this._Group3_i(),this.point0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tz_sss_img_json.sss_itembg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 17;
		t.elementsContent = [this._Image4_i(),this.headImg0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 95;
		t.horizontalCenter = 0.5;
		t.source = "tz_sss_img_json.sss_head_default";
		t.verticalCenter = -1;
		t.width = 95;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 135.34;
		t.elementsContent = [this.nickname0_i(),this.ID0_i()];
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.y = 0;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "ID:666666";
		t.textColor = 0xfcd658;
		t.y = 42.65;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.BitmapLabel();
		this.point0 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 138.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.horizontalCenter = -9.5;
		t.y = 372;
		t.elementsContent = [this._Image5_i(),this._Group4_i(),this._Group5_i(),this.point1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "tz_sss_img_json.sss_itembg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 17;
		t.elementsContent = [this._Image6_i(),this.headImg1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 95;
		t.horizontalCenter = 0.5;
		t.source = "tz_sss_img_json.sss_head_default";
		t.verticalCenter = -1;
		t.width = 95;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 135.34;
		t.elementsContent = [this.nickname1_i(),this.ID1_i()];
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.y = 0;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "ID:666666";
		t.textColor = 0xFCD658;
		t.y = 42.65;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.BitmapLabel();
		this.point1 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 138.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.horizontalCenter = -9.5;
		t.y = 522;
		t.elementsContent = [this._Image7_i(),this._Group6_i(),this._Group7_i(),this.point2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "tz_sss_img_json.sss_itembg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 17;
		t.elementsContent = [this._Image8_i(),this.headImg2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 95;
		t.horizontalCenter = 0.5;
		t.source = "tz_sss_img_json.sss_head_default";
		t.verticalCenter = -1;
		t.width = 95;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 135.34;
		t.elementsContent = [this.nickname2_i(),this.ID2_i()];
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.y = 0;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "ID:666666";
		t.textColor = 0xFCD658;
		t.y = 42.65;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.BitmapLabel();
		this.point2 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 138.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.horizontalCenter = -9.5;
		t.y = 672;
		t.elementsContent = [this._Image9_i(),this._Group8_i(),this._Group9_i(),this.point3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "tz_sss_img_json.sss_itembg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 17;
		t.elementsContent = [this._Image10_i(),this.headImg3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sss_img_json.sss_headbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.height = 95;
		t.horizontalCenter = 0.5;
		t.source = "tz_sss_img_json.sss_head_default";
		t.verticalCenter = -1;
		t.width = 95;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 135.34;
		t.elementsContent = [this.nickname3_i(),this.ID3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "魂族网络科技";
		t.y = 0;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "ID:666666";
		t.textColor = 0xFCD658;
		t.y = 42.65;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.BitmapLabel();
		this.point3 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 138.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "+999";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bigwin0_i = function () {
		var t = new eui.Image();
		this.bigwin0 = t;
		t.source = "tz_sss_img_json.sss_bigwin";
		t.x = 548;
		t.y = 236;
		return t;
	};
	_proto.bigwin1_i = function () {
		var t = new eui.Image();
		this.bigwin1 = t;
		t.source = "tz_sss_img_json.sss_bigwin";
		t.x = 548;
		t.y = 386;
		return t;
	};
	_proto.bigwin2_i = function () {
		var t = new eui.Image();
		this.bigwin2 = t;
		t.source = "tz_sss_img_json.sss_bigwin";
		t.x = 548;
		t.y = 536;
		return t;
	};
	_proto.bigwin3_i = function () {
		var t = new eui.Image();
		this.bigwin3 = t;
		t.source = "tz_sss_img_json.sss_bigwin";
		t.x = 548;
		t.y = 686;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.horizontalCenter = 0;
		t.width = 492;
		t.y = 852;
		t.elementsContent = [this.backHall_i(),this.jietu_i(),this.playAgain_i()];
		return t;
	};
	_proto.backHall_i = function () {
		var t = new eui.Button();
		this.backHall = t;
		t.horizontalCenter = -173;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_totalResult$Skin137;
		return t;
	};
	_proto.jietu_i = function () {
		var t = new eui.Button();
		this.jietu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_totalResult$Skin138;
		return t;
	};
	_proto.playAgain_i = function () {
		var t = new eui.Button();
		this.playAgain = t;
		t.horizontalCenter = 173;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_totalResult$Skin139;
		return t;
	};
	return sss_totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/suoha/suoha_TotalResItem.exml'] = window.suoha_TotalResItem = (function (_super) {
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
	var suoha_totalResult$Skin140 = 	(function (_super) {
		__extends(suoha_totalResult$Skin140, _super);
		function suoha_totalResult$Skin140() {
			_super.call(this);
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
		var _proto = suoha_totalResult$Skin140.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_rt_btn_back";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin140;
	})(eui.Skin);

	var suoha_totalResult$Skin141 = 	(function (_super) {
		__extends(suoha_totalResult$Skin141, _super);
		function suoha_totalResult$Skin141() {
			_super.call(this);
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
		var _proto = suoha_totalResult$Skin141.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_rt_btn_share";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin141;
	})(eui.Skin);

	var suoha_totalResult$Skin142 = 	(function (_super) {
		__extends(suoha_totalResult$Skin142, _super);
		function suoha_totalResult$Skin142() {
			_super.call(this);
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
		var _proto = suoha_totalResult$Skin142.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tz_sh_images_json.sh_rt_btn_replay";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin142;
	})(eui.Skin);

	function suoha_totalResult() {
		_super.call(this);
		this.skinParts = ["headImg0","nickname0","ID0","point0","bigWin0","item0","headImg1","nickname1","ID1","point1","bigWin1","item1","headImg2","nickname2","ID2","point2","bigWin2","item2","headImg3","nickname3","ID3","point3","bigWin3","item3","headImg4","nickname4","ID4","point4","bigWin4","item4","headImg5","nickname5","ID5","point5","bigWin5","item5","backHall","jietu","playAgain","pwd","gamename","playcount","time"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group8_i(),this._Group12_i(),this._Label1_i(),this.pwd_i(),this.gamename_i(),this.playcount_i(),this.time_i()];
	}
	var _proto = suoha_totalResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sh_zong_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 57.82;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_title_bg";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tz_sh_images_json.sh_result_all";
		t.y = 16;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 280;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 960;
		t.y = 185;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image4_i(),this._Group2_i(),this.nickname0_i(),this.ID0_i(),this.point0_i(),this.bigWin0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.组 47";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 37;
		t.y = 20;
		t.elementsContent = [this._Image5_i(),this.headImg0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_headmid_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 78;
		t.source = "tz_sh_images_json.sh_head_default";
		t.width = 78;
		t.x = 3.5;
		t.y = 3;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "魂族网络科技";
		t.width = 108;
		t.y = 113.17;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "ID:666666";
		t.textColor = 0xffdf56;
		t.y = 134.64;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.BitmapLabel();
		this.point0 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+9898";
		t.y = 176.66;
		return t;
	};
	_proto.bigWin0_i = function () {
		var t = new eui.Image();
		this.bigWin0 = t;
		t.horizontalCenter = 0.5;
		t.source = "tz_sh_images_json.sh_bigwin";
		t.y = 202.35;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.verticalCenter = 0;
		t.x = 160;
		t.elementsContent = [this._Image6_i(),this._Group3_i(),this.nickname1_i(),this.ID1_i(),this.point1_i(),this.bigWin1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.组 47";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 37;
		t.y = 20;
		t.elementsContent = [this._Image7_i(),this.headImg1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_headmid_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 78;
		t.source = "tz_sh_images_json.sh_head_default";
		t.width = 78;
		t.x = 3.5;
		t.y = 3;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "魂族网络科技";
		t.width = 108;
		t.y = 113.17;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "ID:666666";
		t.textColor = 0xFFDF56;
		t.y = 134.64;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.BitmapLabel();
		this.point1 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+9898";
		t.y = 176.66;
		return t;
	};
	_proto.bigWin1_i = function () {
		var t = new eui.Image();
		this.bigWin1 = t;
		t.horizontalCenter = 0.5;
		t.source = "tz_sh_images_json.sh_bigwin";
		t.y = 202.35;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.verticalCenter = 0;
		t.x = 320;
		t.elementsContent = [this._Image8_i(),this._Group4_i(),this.nickname2_i(),this.ID2_i(),this.point2_i(),this.bigWin2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.组 47";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 37;
		t.y = 20;
		t.elementsContent = [this._Image9_i(),this.headImg2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_headmid_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 78;
		t.source = "tz_sh_images_json.sh_head_default";
		t.width = 78;
		t.x = 3.5;
		t.y = 3;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "魂族网络科技";
		t.width = 108;
		t.y = 113.17;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "ID:666666";
		t.textColor = 0xFFDF56;
		t.y = 134.64;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.BitmapLabel();
		this.point2 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+9898";
		t.y = 176.66;
		return t;
	};
	_proto.bigWin2_i = function () {
		var t = new eui.Image();
		this.bigWin2 = t;
		t.horizontalCenter = 0.5;
		t.source = "tz_sh_images_json.sh_bigwin";
		t.y = 202.35;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.verticalCenter = 0;
		t.x = 480;
		t.elementsContent = [this._Image10_i(),this._Group5_i(),this.nickname3_i(),this.ID3_i(),this.point3_i(),this.bigWin3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.组 47";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 37;
		t.y = 20;
		t.elementsContent = [this._Image11_i(),this.headImg3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_headmid_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.height = 78;
		t.source = "tz_sh_images_json.sh_head_default";
		t.width = 78;
		t.x = 3.5;
		t.y = 3;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "魂族网络科技";
		t.width = 108;
		t.y = 113.17;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "ID:666666";
		t.textColor = 0xFFDF56;
		t.y = 134.64;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.BitmapLabel();
		this.point3 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+9898";
		t.y = 176.66;
		return t;
	};
	_proto.bigWin3_i = function () {
		var t = new eui.Image();
		this.bigWin3 = t;
		t.horizontalCenter = 0.5;
		t.source = "tz_sh_images_json.sh_bigwin";
		t.y = 202.35;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.verticalCenter = 0;
		t.x = 640;
		t.elementsContent = [this._Image12_i(),this._Group6_i(),this.nickname4_i(),this.ID4_i(),this.point4_i(),this.bigWin4_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.组 47";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 37;
		t.y = 20;
		t.elementsContent = [this._Image13_i(),this.headImg4_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_headmid_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.height = 78;
		t.source = "tz_sh_images_json.sh_head_default";
		t.width = 78;
		t.x = 3.5;
		t.y = 3;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "魂族网络科技";
		t.width = 108;
		t.y = 113.17;
		return t;
	};
	_proto.ID4_i = function () {
		var t = new eui.Label();
		this.ID4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "ID:666666";
		t.textColor = 0xFFDF56;
		t.y = 134.64;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.BitmapLabel();
		this.point4 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+9898";
		t.y = 176.66;
		return t;
	};
	_proto.bigWin4_i = function () {
		var t = new eui.Image();
		this.bigWin4 = t;
		t.horizontalCenter = 0.5;
		t.source = "tz_sh_images_json.sh_bigwin";
		t.y = 202.35;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.verticalCenter = 0;
		t.x = 800;
		t.elementsContent = [this._Image14_i(),this._Group7_i(),this.nickname5_i(),this.ID5_i(),this.point5_i(),this.bigWin5_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.组 47";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 37;
		t.y = 20;
		t.elementsContent = [this._Image15_i(),this.headImg5_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "tz_sh_images_json.sh_headmid_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg5_i = function () {
		var t = new eui.Image();
		this.headImg5 = t;
		t.height = 78;
		t.source = "tz_sh_images_json.sh_head_default";
		t.width = 78;
		t.x = 3.5;
		t.y = 3;
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "魂族网络科技";
		t.width = 108;
		t.y = 113.17;
		return t;
	};
	_proto.ID5_i = function () {
		var t = new eui.Label();
		this.ID5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 18;
		t.text = "ID:666666";
		t.textColor = 0xFFDF56;
		t.y = 134.64;
		return t;
	};
	_proto.point5_i = function () {
		var t = new eui.BitmapLabel();
		this.point5 = t;
		t.font = "MJ_number03_golden_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+9898";
		t.y = 176.66;
		return t;
	};
	_proto.bigWin5_i = function () {
		var t = new eui.Image();
		this.bigWin5 = t;
		t.horizontalCenter = 0.5;
		t.source = "tz_sh_images_json.sh_bigwin";
		t.y = 202.35;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 523;
		t.elementsContent = [this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 0;
		t.elementsContent = [this.backHall_i()];
		return t;
	};
	_proto.backHall_i = function () {
		var t = new eui.Button();
		this.backHall = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suoha_totalResult$Skin140;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 200;
		t.elementsContent = [this.jietu_i()];
		return t;
	};
	_proto.jietu_i = function () {
		var t = new eui.Button();
		this.jietu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suoha_totalResult$Skin141;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 400;
		t.elementsContent = [this.playAgain_i()];
		return t;
	};
	_proto.playAgain_i = function () {
		var t = new eui.Button();
		this.playAgain = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suoha_totalResult$Skin142;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.right = 24;
		t.size = 20;
		t.text = "本产品仅供娱乐，禁止赌博！";
		t.y = 599.1;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 66;
		t.size = 22;
		t.text = "房号:999999";
		t.y = 117.91;
		return t;
	};
	_proto.gamename_i = function () {
		var t = new eui.Label();
		this.gamename = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "港式五张";
		t.x = 71.54;
		t.y = 118.31;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 101;
		t.size = 22;
		t.text = "局数：16";
		t.y = 147.91;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "时间：2017-01-01 10:10:10";
		t.x = 71.54;
		t.y = 148.31;
		return t;
	};
	return suoha_totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/suoha/suohaIndex.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	var NewFile$Skin143 = 	(function (_super) {
		__extends(NewFile$Skin143, _super);
		function NewFile$Skin143() {
			_super.call(this);
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
		var _proto = NewFile$Skin143.prototype;

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
		return NewFile$Skin143;
	})(eui.Skin);

	var NewFile$Skin144 = 	(function (_super) {
		__extends(NewFile$Skin144, _super);
		function NewFile$Skin144() {
			_super.call(this);
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
		var _proto = NewFile$Skin144.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_image_game_json.public_btn_menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin144;
	})(eui.Skin);

	var NewFile$Skin145 = 	(function (_super) {
		__extends(NewFile$Skin145, _super);
		function NewFile$Skin145() {
			_super.call(this);
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
		var _proto = NewFile$Skin145.prototype;

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
		return NewFile$Skin145;
	})(eui.Skin);

	var NewFile$Skin146 = 	(function (_super) {
		__extends(NewFile$Skin146, _super);
		function NewFile$Skin146() {
			_super.call(this);
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
		var _proto = NewFile$Skin146.prototype;

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
		return NewFile$Skin146;
	})(eui.Skin);

	var NewFile$Skin147 = 	(function (_super) {
		__extends(NewFile$Skin147, _super);
		function NewFile$Skin147() {
			_super.call(this);
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
		var _proto = NewFile$Skin147.prototype;

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
		return NewFile$Skin147;
	})(eui.Skin);

	var NewFile$Skin148 = 	(function (_super) {
		__extends(NewFile$Skin148, _super);
		function NewFile$Skin148() {
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
		var _proto = NewFile$Skin148.prototype;

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
		return NewFile$Skin148;
	})(eui.Skin);

	var NewFile$Skin149 = 	(function (_super) {
		__extends(NewFile$Skin149, _super);
		function NewFile$Skin149() {
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
		var _proto = NewFile$Skin149.prototype;

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
		return NewFile$Skin149;
	})(eui.Skin);

	var NewFile$Skin150 = 	(function (_super) {
		__extends(NewFile$Skin150, _super);
		function NewFile$Skin150() {
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
		var _proto = NewFile$Skin150.prototype;

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
		return NewFile$Skin150;
	})(eui.Skin);

	var NewFile$Skin151 = 	(function (_super) {
		__extends(NewFile$Skin151, _super);
		function NewFile$Skin151() {
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
		var _proto = NewFile$Skin151.prototype;

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
		return NewFile$Skin151;
	})(eui.Skin);

	var NewFile$Skin152 = 	(function (_super) {
		__extends(NewFile$Skin152, _super);
		function NewFile$Skin152() {
			_super.call(this);
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
		var _proto = NewFile$Skin152.prototype;

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
		return NewFile$Skin152;
	})(eui.Skin);

	var NewFile$Skin153 = 	(function (_super) {
		__extends(NewFile$Skin153, _super);
		function NewFile$Skin153() {
			_super.call(this);
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
		var _proto = NewFile$Skin153.prototype;

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
		return NewFile$Skin153;
	})(eui.Skin);

	var NewFile$Skin154 = 	(function (_super) {
		__extends(NewFile$Skin154, _super);
		function NewFile$Skin154() {
			_super.call(this);
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
		var _proto = NewFile$Skin154.prototype;

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
		return NewFile$Skin154;
	})(eui.Skin);

	var NewFile$Skin155 = 	(function (_super) {
		__extends(NewFile$Skin155, _super);
		function NewFile$Skin155() {
			_super.call(this);
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
		var _proto = NewFile$Skin155.prototype;

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
		return NewFile$Skin155;
	})(eui.Skin);

	var NewFile$Skin156 = 	(function (_super) {
		__extends(NewFile$Skin156, _super);
		function NewFile$Skin156() {
			_super.call(this);
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
		var _proto = NewFile$Skin156.prototype;

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
		return NewFile$Skin156;
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
		t.skinName = NewFile$Skin143;
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
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin144;
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
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin145;
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
		t.skinName = NewFile$Skin146;
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
		t.skinName = NewFile$Skin147;
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
		t.skinName = NewFile$Skin148;
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
		t.skinName = NewFile$Skin149;
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
		t.skinName = NewFile$Skin150;
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
		t.skinName = NewFile$Skin151;
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
		t.skinName = NewFile$Skin152;
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
		t.skinName = NewFile$Skin153;
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
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin154;
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
		t.skinName = NewFile$Skin155;
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
		t.skinName = NewFile$Skin156;
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