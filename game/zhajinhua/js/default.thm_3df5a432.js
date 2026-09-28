
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/clubItem.exml'] = window.hallItem = (function (_super) {
	__extends(hallItem, _super);
	function hallItem() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_txt_name"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = hallItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_bg_i(),this._txt_name_i()];
		return t;
	};
	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0xEBF3EC;
		t.height = 46;
		t.width = 566;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_name_i = function () {
		var t = new eui.Label();
		this._txt_name = t;
		t.size = 25;
		t.text = "的俱乐部";
		t.textColor = 0x000000;
		t.verticalCenter = 0.5;
		t.x = 5;
		return t;
	};
	return hallItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/clubRoomItem.exml'] = window.clubRoomItem = (function (_super) {
	__extends(clubRoomItem, _super);
	function clubRoomItem() {
		_super.call(this);
		this.skinParts = ["_txt_gamename","_txt_pwd","_txt_time"];
		
		this.height = 144;
		this.width = 294;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = clubRoomItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._txt_gamename_i(),this._txt_pwd_i(),this._txt_time_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.join_room2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_gamename_i = function () {
		var t = new eui.Label();
		this._txt_gamename = t;
		t.horizontalCenter = 0;
		t.text = "六人炸金花";
		t.y = 7.66;
		return t;
	};
	_proto._txt_pwd_i = function () {
		var t = new eui.Label();
		this._txt_pwd = t;
		t.size = 25;
		t.text = "房号：999999";
		t.textColor = 0x000000;
		t.x = 41.23;
		t.y = 53.09;
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.size = 25;
		t.text = "时间：10-22 20:20";
		t.textColor = 0x000000;
		t.x = 39.11;
		t.y = 91.88;
		return t;
	};
	return clubRoomItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/createZjh.exml'] = window.createZjh = (function (_super) {
	__extends(createZjh, _super);
	var createZjh$Skin22 = 	(function (_super) {
		__extends(createZjh$Skin22, _super);
		function createZjh$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 26.8;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			return t;
		};
		return createZjh$Skin22;
	})(eui.Skin);

	var createZjh$Skin23 = 	(function (_super) {
		__extends(createZjh$Skin23, _super);
		function createZjh$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 26.8;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			return t;
		};
		return createZjh$Skin23;
	})(eui.Skin);

	var createZjh$Skin24 = 	(function (_super) {
		__extends(createZjh$Skin24, _super);
		function createZjh$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 26.8;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			return t;
		};
		return createZjh$Skin24;
	})(eui.Skin);

	var createZjh$Skin25 = 	(function (_super) {
		__extends(createZjh$Skin25, _super);
		function createZjh$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin25;
	})(eui.Skin);

	var createZjh$Skin26 = 	(function (_super) {
		__extends(createZjh$Skin26, _super);
		function createZjh$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin26;
	})(eui.Skin);

	var createZjh$Skin27 = 	(function (_super) {
		__extends(createZjh$Skin27, _super);
		function createZjh$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin27;
	})(eui.Skin);

	var createZjh$Skin28 = 	(function (_super) {
		__extends(createZjh$Skin28, _super);
		function createZjh$Skin28() {
			_super.call(this);
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
		var _proto = createZjh$Skin28.prototype;

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
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin28;
	})(eui.Skin);

	var createZjh$Skin29 = 	(function (_super) {
		__extends(createZjh$Skin29, _super);
		function createZjh$Skin29() {
			_super.call(this);
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
		var _proto = createZjh$Skin29.prototype;

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
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin29;
	})(eui.Skin);

	var createZjh$Skin30 = 	(function (_super) {
		__extends(createZjh$Skin30, _super);
		function createZjh$Skin30() {
			_super.call(this);
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
		var _proto = createZjh$Skin30.prototype;

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
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin30;
	})(eui.Skin);

	var createZjh$Skin31 = 	(function (_super) {
		__extends(createZjh$Skin31, _super);
		function createZjh$Skin31() {
			_super.call(this);
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
		var _proto = createZjh$Skin31.prototype;

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
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin31;
	})(eui.Skin);

	var createZjh$Skin32 = 	(function (_super) {
		__extends(createZjh$Skin32, _super);
		function createZjh$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin32;
	})(eui.Skin);

	var createZjh$Skin33 = 	(function (_super) {
		__extends(createZjh$Skin33, _super);
		function createZjh$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin33;
	})(eui.Skin);

	var createZjh$Skin34 = 	(function (_super) {
		__extends(createZjh$Skin34, _super);
		function createZjh$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin34;
	})(eui.Skin);

	var createZjh$Skin35 = 	(function (_super) {
		__extends(createZjh$Skin35, _super);
		function createZjh$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin35;
	})(eui.Skin);

	var createZjh$Skin36 = 	(function (_super) {
		__extends(createZjh$Skin36, _super);
		function createZjh$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "1000";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin36;
	})(eui.Skin);

	var createZjh$Skin37 = 	(function (_super) {
		__extends(createZjh$Skin37, _super);
		function createZjh$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 32.4;
			this.width = 32.4;
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
		var _proto = createZjh$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zjh_hall_json.hall_gou";
			t.percentWidth = 100;
			t.y = -1.33;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.text = "2分";
			t.textColor = 0x111431;
			t.verticalCenter = 3;
			t.x = 26.8;
			return t;
		};
		return createZjh$Skin37;
	})(eui.Skin);

	var createZjh$Skin38 = 	(function (_super) {
		__extends(createZjh$Skin38, _super);
		function createZjh$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createZjh$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.cancel";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return createZjh$Skin38;
	})(eui.Skin);

	var createZjh$Skin39 = 	(function (_super) {
		__extends(createZjh$Skin39, _super);
		function createZjh$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = createZjh$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.button2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return createZjh$Skin39;
	})(eui.Skin);

	function createZjh() {
		_super.call(this);
		this.skinParts = ["_rect_menban","_RdBtn_baseScore0","_RdBtn_baseScore1","_RdBtn_baseScore2","_RdBtn_chip0","_RdBtn_chip1","_RdBtn_chip2","_checkBox_rule0","_checkBox_rule1","_checkBox_rule2","_checkBox_rule3","_RdBtn_playcount0","_RdBtn_playcount1","_RdBtn_shangxian0","_RdBtn_shangxian1","_RdBtn_shangxian2","_RdBtn_shangxian3","_img_close","_btn_createroom","_gp_main"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._rect_menban_i(),this._gp_main_i()];
	}
	var _proto = createZjh.prototype;

	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillAlpha = 0.5;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.scaleX = 1.15;
		t.scaleY = 1.15;
		t.width = 530;
		t.x = 70;
		t.y = 102;
		t.elementsContent = [this._Rect1_i(),this._Group12_i(),this._img_close_i(),this._Image1_i(),this._btn_createroom_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x634fa6;
		t.height = 880;
		t.strokeColor = 0xa684f2;
		t.strokeWeight = 1;
		t.width = 529;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 19;
		t.y = 57;
		t.elementsContent = [this._Rect2_i(),this._Group1_i(),this._Group3_i(),this._Group5_i(),this._Group7_i(),this._Group9_i(),this._Group11_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 4;
		t.ellipseWidth = 4;
		t.fillColor = 0x111431;
		t.height = 740;
		t.strokeColor = 0xa684f2;
		t.strokeWeight = 1;
		t.width = 497;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 5.4;
		t.elementsContent = [this._Rect3_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4e3f79;
		t.height = 48.6;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 20.9;
		t.text = "创建房间,游戏未进行,5分钟自动关闭房间且退还房卡";
		t.textColor = 0xefd0a4;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 59.8;
		t.elementsContent = [this._Rect4_i(),this._Group2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xbbbff1;
		t.height = 108;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 106.66;
		t.y = 10.5;
		t.elementsContent = [this._RdBtn_baseScore0_i(),this._RdBtn_baseScore1_i(),this._RdBtn_baseScore2_i()];
		return t;
	};
	_proto._RdBtn_baseScore0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_baseScore0 = t;
		t.height = 32.4;
		t.label = "2分";
		t.width = 32.4;
		t.x = 0;
		t.y = 0;
		t.skinName = createZjh$Skin22;
		return t;
	};
	_proto._RdBtn_baseScore1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_baseScore1 = t;
		t.height = 32.4;
		t.label = "4分";
		t.width = 32.4;
		t.x = 100;
		t.y = 0;
		t.skinName = createZjh$Skin23;
		return t;
	};
	_proto._RdBtn_baseScore2_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_baseScore2 = t;
		t.height = 32.4;
		t.label = "8分";
		t.width = 32.4;
		t.x = 200;
		t.y = 0;
		t.skinName = createZjh$Skin24;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "底分：";
		t.textColor = 0x111431;
		t.x = 17;
		t.y = 20.5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 173.2;
		t.elementsContent = [this._Rect5_i(),this._Group4_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 162;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 106.66;
		t.y = 10.5;
		t.elementsContent = [this._RdBtn_chip0_i(),this._RdBtn_chip1_i(),this._RdBtn_chip2_i()];
		return t;
	};
	_proto._RdBtn_chip0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_chip0 = t;
		t.height = 32.4;
		t.label = "2/5,4/10,8/20,10/25";
		t.width = 32.4;
		t.x = 0;
		t.y = 0;
		t.skinName = createZjh$Skin25;
		return t;
	};
	_proto._RdBtn_chip1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_chip1 = t;
		t.height = 32.4;
		t.label = "4/10,8/20,10/25,20/50";
		t.width = 32.4;
		t.x = 0;
		t.y = 54;
		t.skinName = createZjh$Skin26;
		return t;
	};
	_proto._RdBtn_chip2_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_chip2 = t;
		t.height = 32.4;
		t.label = "6/15,10/25,20/50,40/100";
		t.width = 32.4;
		t.x = 0;
		t.y = 108;
		t.skinName = createZjh$Skin27;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "筹码：";
		t.textColor = 0x111431;
		t.x = 17;
		t.y = 20.5;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 340.6;
		t.elementsContent = [this._Rect6_i(),this._Group6_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 216;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 106.66;
		t.y = 10.5;
		t.elementsContent = [this._checkBox_rule0_i(),this._checkBox_rule1_i(),this._checkBox_rule2_i(),this._checkBox_rule3_i()];
		return t;
	};
	_proto._checkBox_rule0_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_rule0 = t;
		t.height = 32.4;
		t.label = "100分以下不能比牌";
		t.width = 32.4;
		t.x = 0;
		t.y = 0;
		t.skinName = createZjh$Skin28;
		return t;
	};
	_proto._checkBox_rule1_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_rule1 = t;
		t.height = 32.4;
		t.label = "闷牌，全场禁止比牌";
		t.width = 32.4;
		t.x = 0;
		t.y = 54;
		t.skinName = createZjh$Skin29;
		return t;
	};
	_proto._checkBox_rule2_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_rule2 = t;
		t.height = 32.4;
		t.label = "首轮禁止看牌";
		t.width = 32.4;
		t.x = 0;
		t.y = 108;
		t.skinName = createZjh$Skin30;
		return t;
	};
	_proto._checkBox_rule3_i = function () {
		var t = new eui.CheckBox();
		this._checkBox_rule3 = t;
		t.height = 32.4;
		t.label = "只发大牌(AKQJ10)";
		t.width = 32.4;
		t.x = 0;
		t.y = 162;
		t.skinName = createZjh$Skin31;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "规则：";
		t.textColor = 0x111431;
		t.x = 17;
		t.y = 20.5;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 562;
		t.elementsContent = [this._Rect7_i(),this._Group8_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 108;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 106.66;
		t.y = 10.5;
		t.elementsContent = [this._RdBtn_playcount0_i(),this._RdBtn_playcount1_i()];
		return t;
	};
	_proto._RdBtn_playcount0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_playcount0 = t;
		t.height = 32.4;
		t.label = "10局x一张房卡";
		t.width = 32.4;
		t.x = 0;
		t.y = 0;
		t.skinName = createZjh$Skin32;
		return t;
	};
	_proto._RdBtn_playcount1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_playcount1 = t;
		t.height = 32.4;
		t.label = "20局x两张房卡";
		t.width = 32.4;
		t.x = 0;
		t.y = 54;
		t.skinName = createZjh$Skin33;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "局数：";
		t.textColor = 0x111431;
		t.x = 17;
		t.y = 20.5;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 675.4;
		t.elementsContent = [this._Rect8_i(),this._Group10_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBBBFF1;
		t.height = 54;
		t.width = 493;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 106.66;
		t.y = 10.5;
		t.elementsContent = [this._RdBtn_shangxian0_i(),this._RdBtn_shangxian1_i(),this._RdBtn_shangxian2_i(),this._RdBtn_shangxian3_i()];
		return t;
	};
	_proto._RdBtn_shangxian0_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_shangxian0 = t;
		t.height = 32.4;
		t.label = "无";
		t.width = 32.4;
		t.x = 0;
		t.y = 0;
		t.skinName = createZjh$Skin34;
		return t;
	};
	_proto._RdBtn_shangxian1_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_shangxian1 = t;
		t.height = 32.4;
		t.label = "500";
		t.width = 32.4;
		t.x = 59.4;
		t.y = 0;
		t.skinName = createZjh$Skin35;
		return t;
	};
	_proto._RdBtn_shangxian2_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_shangxian2 = t;
		t.height = 32.4;
		t.label = "1000";
		t.width = 32.4;
		t.x = 132.2;
		t.y = 0;
		t.skinName = createZjh$Skin36;
		return t;
	};
	_proto._RdBtn_shangxian3_i = function () {
		var t = new eui.RadioButton();
		this._RdBtn_shangxian3 = t;
		t.height = 32.4;
		t.label = "2000";
		t.width = 32.4;
		t.x = 220.6;
		t.y = 0;
		t.skinName = createZjh$Skin37;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "上限：";
		t.textColor = 0x111431;
		t.x = 17;
		t.y = 20.5;
		return t;
	};
	_proto._img_close_i = function () {
		var t = new eui.Button();
		this._img_close = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 495.47;
		t.y = -24.25;
		t.skinName = createZjh$Skin38;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.64;
		t.scaleY = 0.64;
		t.source = "zjh_hall_json.createroom2";
		t.y = 12.3;
		return t;
	};
	_proto._btn_createroom_i = function () {
		var t = new eui.Button();
		this._btn_createroom = t;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.verticalCenter = 397.5;
		t.skinName = createZjh$Skin39;
		return t;
	};
	return createZjh;
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
	var huanleHall$Skin40 = 	(function (_super) {
		__extends(huanleHall$Skin40, _super);
		function huanleHall$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.zjh6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin40;
	})(eui.Skin);

	var huanleHall$Skin41 = 	(function (_super) {
		__extends(huanleHall$Skin41, _super);
		function huanleHall$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.zjh9";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin41;
	})(eui.Skin);

	var huanleHall$Skin42 = 	(function (_super) {
		__extends(huanleHall$Skin42, _super);
		function huanleHall$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.zjh12";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin42;
	})(eui.Skin);

	var huanleHall$Skin43 = 	(function (_super) {
		__extends(huanleHall$Skin43, _super);
		function huanleHall$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.xz";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin43;
	})(eui.Skin);

	var huanleHall$Skin44 = 	(function (_super) {
		__extends(huanleHall$Skin44, _super);
		function huanleHall$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.mpzjh";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin44;
	})(eui.Skin);

	var huanleHall$Skin45 = 	(function (_super) {
		__extends(huanleHall$Skin45, _super);
		function huanleHall$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.joinroom";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin45;
	})(eui.Skin);

	var huanleHall$Skin46 = 	(function (_super) {
		__extends(huanleHall$Skin46, _super);
		function huanleHall$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.gonghui";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin46;
	})(eui.Skin);

	var huanleHall$Skin47 = 	(function (_super) {
		__extends(huanleHall$Skin47, _super);
		function huanleHall$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.jgonghui";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin47;
	})(eui.Skin);

	var huanleHall$Skin48 = 	(function (_super) {
		__extends(huanleHall$Skin48, _super);
		function huanleHall$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.gotohome";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin48;
	})(eui.Skin);

	var huanleHall$Skin49 = 	(function (_super) {
		__extends(huanleHall$Skin49, _super);
		function huanleHall$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.persional";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin49;
	})(eui.Skin);

	var huanleHall$Skin50 = 	(function (_super) {
		__extends(huanleHall$Skin50, _super);
		function huanleHall$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.sendcard";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin50;
	})(eui.Skin);

	var huanleHall$Skin51 = 	(function (_super) {
		__extends(huanleHall$Skin51, _super);
		function huanleHall$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.button2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin51;
	})(eui.Skin);

	function huanleHall() {
		_super.call(this);
		this.skinParts = ["_img_bg","_btn_game0","_btn_game1","_btn_game2","_btn_game3","_btn_game4","_gp_games","_gp_roomlist","_scro_gamelist","_img_head","_txt_id","_txt_nickname","_txt_cards","_btn_joinRoom","_btn_changeClub","_btn_club","_btn_backIndex","_btn_personalCenter","_btn_tuiguang","m_notice","_editTxt_pwd","_gp_btn_join_room","_gp_joinroom","_txt_desc","_gp_desc","_rect_clublist","_rect_clubbg","_gp_clublist_content","_gp_clublist","_rect_tishi_menban0","_btn_cancel","_txt1","_txt_tishi","_gp_tishi","_gp_sure"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._img_bg_i(),this._scro_gamelist_i(),this._Group9_i(),this._Group11_i(),this._gp_joinroom_i(),this._gp_desc_i(),this._gp_clublist_i(),this._gp_sure_i()];
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
		t.viewport = this._Group4_i();
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._gp_games_i(),this._gp_roomlist_i()];
		return t;
	};
	_proto._gp_games_i = function () {
		var t = new eui.Group();
		this._gp_games = t;
		t.visible = false;
		t.x = 24;
		t.y = 135;
		t.elementsContent = [this._btn_game0_i(),this._btn_game1_i(),this._btn_game2_i(),this._btn_game3_i(),this._btn_game4_i()];
		return t;
	};
	_proto._btn_game0_i = function () {
		var t = new eui.Button();
		this._btn_game0 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin40;
		return t;
	};
	_proto._btn_game1_i = function () {
		var t = new eui.Button();
		this._btn_game1 = t;
		t.label = "";
		t.x = 375;
		t.y = 0;
		t.skinName = huanleHall$Skin41;
		return t;
	};
	_proto._btn_game2_i = function () {
		var t = new eui.Button();
		this._btn_game2 = t;
		t.label = "";
		t.x = 0;
		t.y = 224;
		t.skinName = huanleHall$Skin42;
		return t;
	};
	_proto._btn_game3_i = function () {
		var t = new eui.Button();
		this._btn_game3 = t;
		t.label = "";
		t.x = 375;
		t.y = 233;
		t.skinName = huanleHall$Skin43;
		return t;
	};
	_proto._btn_game4_i = function () {
		var t = new eui.Button();
		this._btn_game4 = t;
		t.label = "";
		t.x = 0;
		t.y = 473;
		t.skinName = huanleHall$Skin44;
		return t;
	};
	_proto._gp_roomlist_i = function () {
		var t = new eui.Group();
		this._gp_roomlist = t;
		t.width = 750;
		t.x = 0;
		t.y = 134.59;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 40;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.join_room2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "六人炸金花";
		t.y = 7.66;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "房号：999999";
		t.textColor = 0x000000;
		t.x = 41.23;
		t.y = 53.09;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "时间：10-22 20:20";
		t.textColor = 0x000000;
		t.x = 39.11;
		t.y = 91.88;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 415;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.join_room2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "六人炸金花";
		t.y = 7.66;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "房号：999999";
		t.textColor = 0x000000;
		t.x = 41.23;
		t.y = 53.09;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "时间：10-22 20:20";
		t.textColor = 0x000000;
		t.x = 39.11;
		t.y = 91.88;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 415;
		t.y = 155;
		t.elementsContent = [this._Image3_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.join_room2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "六人炸金花";
		t.y = 7.66;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "房号：999999";
		t.textColor = 0x000000;
		t.x = 41.23;
		t.y = 53.09;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "时间：10-22 20:20";
		t.textColor = 0x000000;
		t.x = 39.11;
		t.y = 91.88;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Group8_i(),this._btn_joinRoom_i(),this._btn_changeClub_i(),this._btn_club_i(),this._btn_backIndex_i(),this._btn_personalCenter_i(),this._btn_tuiguang_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.91;
		t.scaleY = 0.91;
		t.source = "zjh_hall_json.topbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._txt_nickname_i(),this._Group7_i()];
		return t;
	};
	_proto._Group5_i = function () {
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
		t.fillColor = 0x7a61ad;
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
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
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
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 107;
		t.y = 36.4;
		t.elementsContent = [this._Rect3_i(),this._Image5_i(),this._txt_cards_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 60;
		t.ellipseWidth = 40;
		t.fillColor = 0x321650;
		t.height = 35;
		t.strokeAlpha = 1;
		t.strokeColor = 0x747ebc;
		t.strokeWeight = 1;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 24.27;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "zjh_hall_json.card";
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
	_proto._btn_joinRoom_i = function () {
		var t = new eui.Button();
		this._btn_joinRoom = t;
		t.height = 85.12;
		t.label = "";
		t.verticalCenter = -0.5;
		t.width = 82.5;
		t.x = 344;
		t.skinName = huanleHall$Skin45;
		return t;
	};
	_proto._btn_changeClub_i = function () {
		var t = new eui.Button();
		this._btn_changeClub = t;
		t.height = 85.12;
		t.label = "";
		t.verticalCenter = -0.5;
		t.width = 82.5;
		t.x = 344;
		t.skinName = huanleHall$Skin46;
		return t;
	};
	_proto._btn_club_i = function () {
		var t = new eui.Button();
		this._btn_club = t;
		t.height = 85.12;
		t.label = "";
		t.verticalCenter = -0.5;
		t.width = 82.5;
		t.x = 440;
		t.skinName = huanleHall$Skin47;
		return t;
	};
	_proto._btn_backIndex_i = function () {
		var t = new eui.Button();
		this._btn_backIndex = t;
		t.height = 85.12;
		t.label = "";
		t.verticalCenter = -0.5;
		t.width = 82.5;
		t.x = 440;
		t.skinName = huanleHall$Skin48;
		return t;
	};
	_proto._btn_personalCenter_i = function () {
		var t = new eui.Button();
		this._btn_personalCenter = t;
		t.height = 85.12;
		t.label = "";
		t.verticalCenter = -0.5;
		t.width = 82.5;
		t.x = 536;
		t.skinName = huanleHall$Skin49;
		return t;
	};
	_proto._btn_tuiguang_i = function () {
		var t = new eui.Button();
		this._btn_tuiguang = t;
		t.height = 85.12;
		t.horizontalCenter = 304;
		t.label = "";
		t.verticalCenter = -0.5;
		t.width = 82.5;
		t.skinName = huanleHall$Skin50;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 9;
		t.y = 0;
		t.elementsContent = [this._Rect4_i(),this._Image6_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 750;
		t.y = 2;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.laba";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 655;
		t.x = 95;
		t.viewport = this._Group10_i();
		return t;
	};
	_proto._Group10_i = function () {
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
	_proto._gp_joinroom_i = function () {
		var t = new eui.Group();
		this._gp_joinroom = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect5_i(),this._Group13_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 38;
		t.y = 381;
		t.elementsContent = [this._Rect6_i(),this._Label10_i(),this._Group12_i(),this._gp_btn_join_room_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xffffff;
		t.height = 455;
		t.width = 675;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.text = "输房间密码加入游戏 ";
		t.textColor = 0x000000;
		t.x = 198;
		t.y = 217.96;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 81.81;
		t.y = 78.46;
		t.elementsContent = [this._Label11_i(),this._editTxt_pwd_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "房间密码：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._editTxt_pwd_i = function () {
		var t = new eui.EditableText();
		this._editTxt_pwd = t;
		t.border = true;
		t.borderColor = 0xe6e6e6;
		t.height = 67.5;
		t.prompt = "请输入房间密码";
		t.promptColor = 0x8c8c8c;
		t.size = 32;
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = 146.36;
		t.y = 0;
		return t;
	};
	_proto._gp_btn_join_room_i = function () {
		var t = new eui.Group();
		this._gp_btn_join_room = t;
		t.x = 0;
		t.y = 372;
		t.elementsContent = [this._Rect7_i(),this._Rect8_i(),this._Label12_i(),this._Rect9_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xf2f2f2;
		t.height = 83;
		t.width = 675;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf2f2f2;
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 675;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "加入";
		t.textColor = 0x40affe;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd0d0d0;
		t.height = 1;
		t.width = 675;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_desc_i = function () {
		var t = new eui.Group();
		this._gp_desc = t;
		t.x = 175;
		t.y = 568;
		t.elementsContent = [this._Rect10_i(),this._txt_desc_i()];
		return t;
	};
	_proto._Rect10_i = function () {
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
	_proto._gp_clublist_i = function () {
		var t = new eui.Group();
		this._gp_clublist = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_clublist_i(),this._Group16_i()];
		return t;
	};
	_proto._rect_clublist_i = function () {
		var t = new eui.Rect();
		this._rect_clublist = t;
		t.fillAlpha = 0;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._rect_clubbg_i(),this._gp_clublist_content_i(),this._Group15_i()];
		return t;
	};
	_proto._rect_clubbg_i = function () {
		var t = new eui.Rect();
		this._rect_clubbg = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 308;
		t.width = 675;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_clublist_content_i = function () {
		var t = new eui.Group();
		this._gp_clublist_content = t;
		t.x = 55;
		t.y = 181;
		t.elementsContent = [this._Rect11_i(),this._Group14_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 46;
		t.width = 566;
		t.x = 0;
		t.y = 46;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect12_i(),this._Label13_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xebf3ec;
		t.height = 46;
		t.width = 566;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "的俱乐部";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect13_i(),this._Rect14_i(),this._Label14_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x4070fb;
		t.height = 99;
		t.width = 675;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4070fb;
		t.height = 20;
		t.width = 675;
		t.x = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "选择俱乐部";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_sure_i = function () {
		var t = new eui.Group();
		this._gp_sure = t;
		t.visible = false;
		t.elementsContent = [this._rect_tishi_menban0_i(),this._gp_tishi_i()];
		return t;
	};
	_proto._rect_tishi_menban0_i = function () {
		var t = new eui.Rect();
		this._rect_tishi_menban0 = t;
		t.alpha = 0.7;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_tishi_i = function () {
		var t = new eui.Group();
		this._gp_tishi = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect15_i(),this._Group17_i(),this._Group18_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x6D4BA8;
		t.height = 413;
		t.strokeColor = 0xDE51F1;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 314.69;
		t.elementsContent = [this._btn_cancel_i()];
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.height = 68;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.verticalCenter = 0;
		t.width = 219;
		t.skinName = huanleHall$Skin51;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 28;
		t.y = 26.75;
		t.elementsContent = [this._txt1_i(),this._txt_tishi_i()];
		return t;
	};
	_proto._txt1_i = function () {
		var t = new eui.Rect();
		this._txt1 = t;
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
		t.size = 35;
		t.text = "俱乐部功能永久免费开放，是否开启？";
		t.textAlign = "center";
		t.width = 500;
		t.y = 96.58;
		return t;
	};
	return huanleHall;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/personaleCenter.exml'] = window.personaleCenter = (function (_super) {
	__extends(personaleCenter, _super);
	var personaleCenter$Skin52 = 	(function (_super) {
		__extends(personaleCenter$Skin52, _super);
		function personaleCenter$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = personaleCenter$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.button2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return personaleCenter$Skin52;
	})(eui.Skin);

	var personaleCenter$Skin53 = 	(function (_super) {
		__extends(personaleCenter$Skin53, _super);
		function personaleCenter$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = personaleCenter$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.button1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return personaleCenter$Skin53;
	})(eui.Skin);

	var personaleCenter$Skin54 = 	(function (_super) {
		__extends(personaleCenter$Skin54, _super);
		function personaleCenter$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = personaleCenter$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjh_hall_json.button2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return personaleCenter$Skin54;
	})(eui.Skin);

	function personaleCenter() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_img_head","_txt_nickname","_txt_cardnum","_gp_getcard","_gp_sendcard","_gp_cardHistory","_gp_gamerecord","_gp_openrecord","_txt_fangw","_gp_fangwei","_img_joinclub","_img_clubswitch","_gp_invitepeople","_gp_playerlist","_gp_zhanji","_gp_club","_gp_quitlogin","_gp_backindex","_rect_tishi_menban","_btn_cancel","_btn_queding","_txt0","_txt_peoplename0","_gp_tishi","_gp_main","_rect_sure_menban","_btn_cancel0","_txt2","_txt_tishi0","_gp_suresecond","_gp_sure","_rect_fangwei_menban","_editTxt_fangwei","_gp_btn_fangwei","_gp_fangwei_second","_gp_fangwei_set","_rect_joinclub_bg","_editTxt_clubid","_gp_btn_joinclub_qd","_gp_btn_joinclub_qx","_gp_joinclub_second","_gp_joinclub"];
		
		this.height = 1216;
		this.width = 750;
		this.elementsContent = [this._rect_bg_i(),this._Group1_i(),this._gp_sendcard_i(),this._gp_cardHistory_i(),this._gp_gamerecord_i(),this._gp_openrecord_i(),this._gp_fangwei_i(),this._Group2_i(),this._gp_club_i(),this._gp_quitlogin_i(),this._gp_backindex_i(),this._gp_main_i(),this._gp_sure_i(),this._gp_fangwei_set_i(),this._gp_joinclub_i()];
	}
	var _proto = personaleCenter.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x0e0226;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._img_head_i(),this._txt_nickname_i(),this._Image1_i(),this._gp_getcard_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291c4d;
		t.height = 173.5;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 140;
		t.verticalCenter = 0;
		t.width = 140;
		t.x = 39;
		return t;
	};
	_proto._txt_nickname_i = function () {
		var t = new eui.Label();
		this._txt_nickname = t;
		t.anchorOffsetY = 0;
		t.text = "魂族网络科技";
		t.x = 200;
		t.y = 32.45;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "zjh_hall_json.homepage_phone";
		t.visible = false;
		t.x = 200;
		t.y = 99.78;
		return t;
	};
	_proto._gp_getcard_i = function () {
		var t = new eui.Group();
		this._gp_getcard = t;
		t.verticalCenter = 0;
		t.x = 542.67;
		t.elementsContent = [this._Rect2_i(),this._txt_cardnum_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x0d062a;
		t.height = 140;
		t.strokeColor = 0xffa500;
		t.strokeWeight = 1;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_cardnum_i = function () {
		var t = new eui.Label();
		this._txt_cardnum = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0.5;
		t.text = "5张";
		t.width = -96.67;
		t.y = 35.33;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "领取房卡";
		t.textColor = 0xffa500;
		t.y = 82;
		return t;
	};
	_proto._gp_sendcard_i = function () {
		var t = new eui.Group();
		this._gp_sendcard = t;
		t.x = 0;
		t.y = 184;
		t.elementsContent = [this._Rect3_i(),this._Image2_i(),this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291c4d;
		t.height = 94.2;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_hall_json.rc_icon_sendredpackage";
		t.verticalCenter = 0.5;
		t.x = 29;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.rc_icon_rightarrow";
		t.verticalCenter = 0;
		t.x = 700.99;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "发送房卡";
		t.verticalCenter = 0.5;
		t.x = 118.33;
		return t;
	};
	_proto._gp_cardHistory_i = function () {
		var t = new eui.Group();
		this._gp_cardHistory = t;
		t.horizontalCenter = 0;
		t.y = 289;
		t.elementsContent = [this._Rect4_i(),this._Image4_i(),this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291C4D;
		t.height = 94.2;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_hall_json.rc_icon_redpackage";
		t.verticalCenter = 0.5;
		t.x = 29;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.rc_icon_rightarrow";
		t.verticalCenter = 0;
		t.x = 700.99;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "卡包记录";
		t.verticalCenter = 0.5;
		t.x = 118.33;
		return t;
	};
	_proto._gp_gamerecord_i = function () {
		var t = new eui.Group();
		this._gp_gamerecord = t;
		t.height = 95;
		t.horizontalCenter = 0;
		t.y = 394;
		t.elementsContent = [this._Rect5_i(),this._Image6_i(),this._Image7_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291C4D;
		t.height = 94.2;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_hall_json.rc_icon_redpackage";
		t.verticalCenter = 0.5;
		t.x = 29;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.rc_icon_rightarrow";
		t.verticalCenter = 0;
		t.x = 700.99;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "游戏记录";
		t.verticalCenter = 0.5;
		t.x = 118.33;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "(我参与的)";
		t.textColor = 0xffa500;
		t.verticalCenter = 0.5;
		t.x = 244.27;
		return t;
	};
	_proto._gp_openrecord_i = function () {
		var t = new eui.Group();
		this._gp_openrecord = t;
		t.height = 95;
		t.horizontalCenter = 0;
		t.y = 499;
		t.elementsContent = [this._Rect6_i(),this._Label6_i(),this._Image8_i(),this._Image9_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291C4D;
		t.height = 94.2;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "(我创建的)";
		t.textColor = 0xFFA500;
		t.verticalCenter = 0.5;
		t.x = 244.27;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_hall_json.kfcx";
		t.verticalCenter = 0.5;
		t.x = 29;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.rc_icon_rightarrow";
		t.verticalCenter = 0;
		t.x = 700.99;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.text = "开房查询";
		t.verticalCenter = 0.5;
		t.x = 118.33;
		return t;
	};
	_proto._gp_fangwei_i = function () {
		var t = new eui.Group();
		this._gp_fangwei = t;
		t.height = 95;
		t.horizontalCenter = 0;
		t.x = 10;
		t.y = 604;
		t.elementsContent = [this._Rect7_i(),this._txt_fangw_i(),this._Image10_i(),this._Image11_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291C4D;
		t.height = 94.2;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_fangw_i = function () {
		var t = new eui.Label();
		this._txt_fangw = t;
		t.right = 70;
		t.text = "789210";
		t.textColor = 0xFFA500;
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_hall_json.mycode";
		t.verticalCenter = 0.5;
		t.x = 29;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "zjh_hall_json.rc_icon_rightarrow";
		t.verticalCenter = 0;
		t.x = 700.99;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.text = "设置防伪码";
		t.verticalCenter = 0.5;
		t.x = 118.33;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 95;
		t.horizontalCenter = 0;
		t.x = 20;
		t.y = 709;
		t.elementsContent = [this._Rect8_i(),this._Image12_i(),this._Label9_i(),this._img_joinclub_i(),this._img_clubswitch_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291C4D;
		t.height = 94.2;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_hall_json.qzgl";
		t.verticalCenter = 0.5;
		t.x = 29;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.text = "俱乐部管理";
		t.verticalCenter = 0.5;
		t.x = 118.33;
		return t;
	};
	_proto._img_joinclub_i = function () {
		var t = new eui.Image();
		this._img_joinclub = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "zjh_hall_json.joingonghui";
		t.verticalCenter = 0.5;
		t.visible = false;
		t.x = 342.29;
		return t;
	};
	_proto._img_clubswitch_i = function () {
		var t = new eui.Image();
		this._img_clubswitch = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "zjh_hall_json.btn_off";
		t.verticalCenter = 0;
		t.x = 603.31;
		return t;
	};
	_proto._gp_club_i = function () {
		var t = new eui.Group();
		this._gp_club = t;
		t.horizontalCenter = 0;
		t.x = 30;
		t.y = 804;
		t.elementsContent = [this._Rect9_i(),this._Rect10_i(),this._Rect11_i(),this._Rect12_i(),this._Rect13_i(),this._gp_invitepeople_i(),this._gp_playerlist_i(),this._gp_zhanji_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291C4D;
		t.height = 187.5;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x444444;
		t.height = 1;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 750;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x9b8ee0;
		t.height = 90;
		t.verticalCenter = 0;
		t.width = 1.5;
		t.x = 180;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x9B8EE0;
		t.height = 90;
		t.verticalCenter = 0;
		t.width = 1.5;
		t.x = 360;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x9B8EE0;
		t.height = 90;
		t.verticalCenter = 0;
		t.width = 1.5;
		t.x = 540;
		return t;
	};
	_proto._gp_invitepeople_i = function () {
		var t = new eui.Group();
		this._gp_invitepeople = t;
		t.verticalCenter = 0.5;
		t.x = 31;
		t.elementsContent = [this._Image13_i(),this._Label10_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "zjh_hall_json.homepage_invite";
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "邀请成员";
		t.y = 88.9;
		return t;
	};
	_proto._gp_playerlist_i = function () {
		var t = new eui.Group();
		this._gp_playerlist = t;
		t.verticalCenter = 0.5;
		t.x = 195;
		t.elementsContent = [this._Image14_i(),this._Label11_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "zjh_hall_json.member_union";
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "俱乐部成员";
		t.y = 88.9;
		return t;
	};
	_proto._gp_zhanji_i = function () {
		var t = new eui.Group();
		this._gp_zhanji = t;
		t.verticalCenter = 0.5;
		t.x = 391;
		t.elementsContent = [this._Image15_i(),this._Label12_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "zjh_hall_json.kfcx";
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "战绩统计";
		t.y = 88.9;
		return t;
	};
	_proto._gp_quitlogin_i = function () {
		var t = new eui.Group();
		this._gp_quitlogin = t;
		t.height = 95;
		t.left = 0;
		t.y = 1095;
		t.elementsContent = [this._Rect14_i(),this._Image16_i(),this._Label13_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291C4D;
		t.height = 94.2;
		t.left = 0;
		t.width = 350;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_hall_json.mycode";
		t.verticalCenter = 0.5;
		t.x = 29;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.text = "退出登录";
		t.verticalCenter = 0.5;
		t.x = 118.33;
		return t;
	};
	_proto._gp_backindex_i = function () {
		var t = new eui.Group();
		this._gp_backindex = t;
		t.height = 95;
		t.x = 400;
		t.y = 1095;
		t.elementsContent = [this._Rect15_i(),this._Image17_i(),this._Label14_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x291C4D;
		t.height = 94.2;
		t.left = 0;
		t.width = 350;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "zjh_hall_json.mycode";
		t.verticalCenter = 0.5;
		t.x = 29;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.text = "返回首页";
		t.verticalCenter = 0.5;
		t.x = 118.33;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
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
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_tishi_i = function () {
		var t = new eui.Group();
		this._gp_tishi = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect16_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x6D4BA8;
		t.height = 413;
		t.strokeColor = 0xDE51F1;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 61;
		t.y = 314.69;
		t.elementsContent = [this._btn_cancel_i(),this._btn_queding_i()];
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.height = 68;
		t.label = "取消";
		t.verticalCenter = 0;
		t.width = 219;
		t.x = 263.6;
		t.skinName = personaleCenter$Skin52;
		return t;
	};
	_proto._btn_queding_i = function () {
		var t = new eui.Button();
		this._btn_queding = t;
		t.height = 68;
		t.label = "确定";
		t.verticalCenter = 0;
		t.width = 219;
		t.x = 0;
		t.skinName = personaleCenter$Skin53;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 28;
		t.y = 26.75;
		t.elementsContent = [this._txt0_i(),this._txt_peoplename0_i()];
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
	_proto._txt_peoplename0_i = function () {
		var t = new eui.Label();
		this._txt_peoplename0 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "俱乐部功能永久免费开放，是否开启？";
		t.textAlign = "center";
		t.width = 500;
		t.y = 96.58;
		return t;
	};
	_proto._gp_sure_i = function () {
		var t = new eui.Group();
		this._gp_sure = t;
		t.visible = false;
		t.elementsContent = [this._rect_sure_menban_i(),this._gp_suresecond_i()];
		return t;
	};
	_proto._rect_sure_menban_i = function () {
		var t = new eui.Rect();
		this._rect_sure_menban = t;
		t.alpha = 0.7;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_suresecond_i = function () {
		var t = new eui.Group();
		this._gp_suresecond = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect17_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x6D4BA8;
		t.height = 413;
		t.strokeColor = 0xDE51F1;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 314.69;
		t.elementsContent = [this._btn_cancel0_i()];
		return t;
	};
	_proto._btn_cancel0_i = function () {
		var t = new eui.Button();
		this._btn_cancel0 = t;
		t.height = 68;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.verticalCenter = 0;
		t.width = 219;
		t.skinName = personaleCenter$Skin54;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 28;
		t.y = 26.75;
		t.elementsContent = [this._txt2_i(),this._txt_tishi0_i()];
		return t;
	};
	_proto._txt2_i = function () {
		var t = new eui.Rect();
		this._txt2 = t;
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
	_proto._txt_tishi0_i = function () {
		var t = new eui.Label();
		this._txt_tishi0 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "俱乐部功能永久免费开放，是否开启？";
		t.textAlign = "center";
		t.width = 500;
		t.y = 96.58;
		return t;
	};
	_proto._gp_fangwei_set_i = function () {
		var t = new eui.Group();
		this._gp_fangwei_set = t;
		t.visible = false;
		t.elementsContent = [this._rect_fangwei_menban_i(),this._gp_fangwei_second_i()];
		return t;
	};
	_proto._rect_fangwei_menban_i = function () {
		var t = new eui.Rect();
		this._rect_fangwei_menban = t;
		t.fillAlpha = 0;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_fangwei_second_i = function () {
		var t = new eui.Group();
		this._gp_fangwei_second = t;
		t.x = 38;
		t.y = 381;
		t.elementsContent = [this._Rect18_i(),this._Label15_i(),this._Group7_i(),this._gp_btn_fangwei_i()];
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 455;
		t.width = 675;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 32;
		t.text = "防伪码设置";
		t.textColor = 0x000000;
		t.y = 49.96;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 152.46;
		t.elementsContent = [this._editTxt_fangwei_i()];
		return t;
	};
	_proto._editTxt_fangwei_i = function () {
		var t = new eui.EditableText();
		this._editTxt_fangwei = t;
		t.border = true;
		t.borderColor = 0xE6E6E6;
		t.height = 80;
		t.prompt = "输入1-6个数字";
		t.promptColor = 0x8C8C8C;
		t.size = 32;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_btn_fangwei_i = function () {
		var t = new eui.Group();
		this._gp_btn_fangwei = t;
		t.horizontalCenter = 0.5;
		t.y = 308;
		t.elementsContent = [this._Rect19_i(),this._Label16_i()];
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0x2ec4fc;
		t.height = 80;
		t.width = 490;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 33;
		t.text = "确认";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_joinclub_i = function () {
		var t = new eui.Group();
		this._gp_joinclub = t;
		t.visible = false;
		t.elementsContent = [this._rect_joinclub_bg_i(),this._gp_joinclub_second_i()];
		return t;
	};
	_proto._rect_joinclub_bg_i = function () {
		var t = new eui.Rect();
		this._rect_joinclub_bg = t;
		t.fillAlpha = 0;
		t.height = 1216;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_joinclub_second_i = function () {
		var t = new eui.Group();
		this._gp_joinclub_second = t;
		t.x = 131;
		t.y = 471;
		t.elementsContent = [this._Rect20_i(),this._Group8_i(),this._gp_btn_joinclub_qd_i(),this._gp_btn_joinclub_qx_i(),this._Group9_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xFFFFFF;
		t.height = 274;
		t.width = 489;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 116.46;
		t.elementsContent = [this._editTxt_clubid_i()];
		return t;
	};
	_proto._editTxt_clubid_i = function () {
		var t = new eui.EditableText();
		this._editTxt_clubid = t;
		t.border = true;
		t.borderColor = 0xE6E6E6;
		t.height = 59;
		t.horizontalCenter = "0";
		t.promptColor = 0x8C8C8C;
		t.size = 32;
		t.verticalAlign = "middle";
		t.width = 416;
		t.y = 0;
		return t;
	};
	_proto._gp_btn_joinclub_qd_i = function () {
		var t = new eui.Group();
		this._gp_btn_joinclub_qd = t;
		t.x = 190;
		t.y = 208;
		t.elementsContent = [this._Rect21_i(),this._Label17_i()];
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x1e9fff;
		t.height = 49;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确定";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn_joinclub_qx_i = function () {
		var t = new eui.Group();
		this._gp_btn_joinclub_qx = t;
		t.x = 340;
		t.y = 208;
		t.elementsContent = [this._Rect22_i(),this._Label18_i()];
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xffffff;
		t.height = 49;
		t.strokeColor = 0xdedede;
		t.strokeWeight = 1;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "取消";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Rect23_i(),this._Label19_i(),this._Rect24_i()];
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf8f8f8;
		t.height = 83;
		t.width = 489;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.text = "请输入邀请码，并确认";
		t.textColor = 0x000000;
		t.verticalCenter = 0.5;
		t.x = 37;
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xeeeeee;
		t.height = 1;
		t.horizontalCenter = 0;
		t.width = 489;
		return t;
	};
	return personaleCenter;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhajinhua/joinRoomNoticeZjh.exml'] = window.joinRoomNoticeZjh = (function (_super) {
	__extends(joinRoomNoticeZjh, _super);
	var joinRoomNoticeZjh$Skin55 = 	(function (_super) {
		__extends(joinRoomNoticeZjh$Skin55, _super);
		function joinRoomNoticeZjh$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = joinRoomNoticeZjh$Skin55.prototype;

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
		return joinRoomNoticeZjh$Skin55;
	})(eui.Skin);

	var joinRoomNoticeZjh$Skin56 = 	(function (_super) {
		__extends(joinRoomNoticeZjh$Skin56, _super);
		function joinRoomNoticeZjh$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = joinRoomNoticeZjh$Skin56.prototype;

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
		return joinRoomNoticeZjh$Skin56;
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
		t.height = 1216;
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
		t.skinName = joinRoomNoticeZjh$Skin55;
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
		t.skinName = joinRoomNoticeZjh$Skin56;
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
		t.height = 1216;
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
	var zjhIndex$Skin57 = 	(function (_super) {
		__extends(zjhIndex$Skin57, _super);
		function zjhIndex$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
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
		var _proto = zjhIndex$Skin57.prototype;

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
		return zjhIndex$Skin57;
	})(eui.Skin);

	var zjhIndex$Skin58 = 	(function (_super) {
		__extends(zjhIndex$Skin58, _super);
		function zjhIndex$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin58.prototype;

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
		return zjhIndex$Skin58;
	})(eui.Skin);

	var zjhIndex$Skin59 = 	(function (_super) {
		__extends(zjhIndex$Skin59, _super);
		function zjhIndex$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin59.prototype;

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
		return zjhIndex$Skin59;
	})(eui.Skin);

	var zjhIndex$Skin60 = 	(function (_super) {
		__extends(zjhIndex$Skin60, _super);
		function zjhIndex$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin60.prototype;

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
		return zjhIndex$Skin60;
	})(eui.Skin);

	var zjhIndex$Skin61 = 	(function (_super) {
		__extends(zjhIndex$Skin61, _super);
		function zjhIndex$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin61.prototype;

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
		return zjhIndex$Skin61;
	})(eui.Skin);

	var zjhIndex$Skin62 = 	(function (_super) {
		__extends(zjhIndex$Skin62, _super);
		function zjhIndex$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin62.prototype;

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
		return zjhIndex$Skin62;
	})(eui.Skin);

	var zjhIndex$Skin63 = 	(function (_super) {
		__extends(zjhIndex$Skin63, _super);
		function zjhIndex$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin63.prototype;

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
		return zjhIndex$Skin63;
	})(eui.Skin);

	var zjhIndex$Skin64 = 	(function (_super) {
		__extends(zjhIndex$Skin64, _super);
		function zjhIndex$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin64.prototype;

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
		return zjhIndex$Skin64;
	})(eui.Skin);

	var zjhIndex$Skin65 = 	(function (_super) {
		__extends(zjhIndex$Skin65, _super);
		function zjhIndex$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin65.prototype;

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
		return zjhIndex$Skin65;
	})(eui.Skin);

	var zjhIndex$Skin66 = 	(function (_super) {
		__extends(zjhIndex$Skin66, _super);
		function zjhIndex$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin66.prototype;

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
		return zjhIndex$Skin66;
	})(eui.Skin);

	var zjhIndex$Skin67 = 	(function (_super) {
		__extends(zjhIndex$Skin67, _super);
		function zjhIndex$Skin67() {
			_super.call(this);
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
		var _proto = zjhIndex$Skin67.prototype;

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
		return zjhIndex$Skin67;
	})(eui.Skin);

	var zjhIndex$Skin68 = 	(function (_super) {
		__extends(zjhIndex$Skin68, _super);
		function zjhIndex$Skin68() {
			_super.call(this);
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
		var _proto = zjhIndex$Skin68.prototype;

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
		return zjhIndex$Skin68;
	})(eui.Skin);

	var zjhIndex$Skin69 = 	(function (_super) {
		__extends(zjhIndex$Skin69, _super);
		function zjhIndex$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin69.prototype;

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
		return zjhIndex$Skin69;
	})(eui.Skin);

	var zjhIndex$Skin70 = 	(function (_super) {
		__extends(zjhIndex$Skin70, _super);
		function zjhIndex$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin70.prototype;

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
		return zjhIndex$Skin70;
	})(eui.Skin);

	var zjhIndex$Skin71 = 	(function (_super) {
		__extends(zjhIndex$Skin71, _super);
		function zjhIndex$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = zjhIndex$Skin71.prototype;

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
		return zjhIndex$Skin71;
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
		t.height = 1215;
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
		t.height = 1216;
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
		t.skinName = zjhIndex$Skin57;
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
		t.skinName = zjhIndex$Skin58;
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
		t.horizontalCenter = 0;
		t.y = 1133;
		t.elementsContent = [this._Image18_i(),this._txt_paiType_i(),this._btn_rule_i(),this._btn_video_i(),this._btn_index_i(),this._btn_watch_i(),this.xiaoxi_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
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
		t.skinName = zjhIndex$Skin59;
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
		t.skinName = zjhIndex$Skin60;
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
		t.skinName = zjhIndex$Skin61;
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
		t.skinName = zjhIndex$Skin62;
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
		t.height = 1216;
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
		t.skinName = zjhIndex$Skin63;
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
		t.skinName = zjhIndex$Skin64;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.label = "取消";
		t.verticalCenter = 2;
		t.x = 252;
		t.skinName = zjhIndex$Skin65;
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
		t.height = 1216;
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
		t.skinName = zjhIndex$Skin66;
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
		t.height = 1500;
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
		t.skinName = zjhIndex$Skin67;
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
		t.skinName = zjhIndex$Skin68;
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
		t.skinName = zjhIndex$Skin69;
		return t;
	};
	_proto._btn_set_ok_i = function () {
		var t = new eui.Button();
		this._btn_set_ok = t;
		t.horizontalCenter = 0.5;
		t.label = "确定";
		t.y = 208.87;
		t.skinName = zjhIndex$Skin70;
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
		t.skinName = zjhIndex$Skin71;
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
		t.height = 1216;
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
		t.height = 1216;
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