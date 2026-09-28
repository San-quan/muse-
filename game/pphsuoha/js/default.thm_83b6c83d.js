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
	var common_kuang_location$Skin3 = 	(function (_super) {
		__extends(common_kuang_location$Skin3, _super);
		function common_kuang_location$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_kuang_location$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_redxx";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_kuang_location$Skin3;
	})(eui.Skin);

	function common_kuang_location() {
		_super.call(this);
		this.skinParts = ["_img_meng","text6_0_1","line6_0_1","text6_0_2","line6_0_2","text6_0_3","line6_0_3","text6_0_4","line6_0_4","text6_0_5","line6_0_5","text6_1_2","line6_1_2","text6_1_3","line6_1_3","text6_1_4","line6_1_4","text6_1_5","line6_1_5","text6_2_3","line6_2_3","text6_2_4","line6_2_4","text6_2_5","line6_2_5","text6_3_4","line6_3_4","text6_3_5","line6_3_5","text6_4_5","line6_4_5","headImg6_0","_txt_nickname6_0","_txt_ip6_0","head6_0","headImg6_1","_txt_nickname6_1","_txt_ip6_1","head6_1","headImg6_2","_txt_nickname6_2","_txt_ip6_2","head6_2","headImg6_3","_txt_nickname6_3","_txt_ip6_3","head6_3","headImg6_4","_txt_nickname6_4","_txt_ip6_4","head6_4","headImg6_5","_txt_nickname6_5","_txt_ip6_5","head6_5","people6","_btn_close","_group_main"];
		
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
		t.elementsContent = [this._Rect1_i(),this.people6_i(),this._Label1_i(),this._btn_close_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x2d5c8e;
		t.height = 600;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.strokeAlpha = 0.8;
		t.strokeColor = 0xF7CB62;
		t.width = 900;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.people6_i = function () {
		var t = new eui.Group();
		this.people6 = t;
		t.height = 446;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.width = 725;
		t.x = 61;
		t.y = 58;
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
		t.fillColor = 0xff0000;
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
		t.horizontalCenter = 81.5;
		t.rotation = 110;
		t.width = 76;
		t.y = 183.14;
		t.elementsContent = [this._Rect3_i(),this.text6_0_2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 500;
		t.rotation = 0;
		t.width = 2;
		t.x = 38.11;
		t.y = -11.99;
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
		t.horizontalCenter = -18;
		t.rotation = -40;
		t.y = 85.16;
		t.elementsContent = [this._Rect4_i(),this.text6_0_3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 430;
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
		t.fillColor = 0xff0000;
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
		t.horizontalCenter = -233.5;
		t.rotation = 225;
		t.y = 241.58;
		t.elementsContent = [this._Rect6_i(),this.text6_0_5_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 240;
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
		t.horizontalCenter = 243;
		t.rotation = -45;
		t.y = 66.97;
		t.elementsContent = [this._Rect7_i(),this.text6_1_2_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 260;
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
		t.y = 52.08;
		t.elementsContent = [this._Rect8_i(),this.text6_1_3_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 340;
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
		t.horizontalCenter = 5;
		t.rotation = 220;
		t.y = 417.66;
		t.elementsContent = [this._Rect9_i(),this.text6_1_4_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 440;
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
		t.horizontalCenter = -76.5;
		t.rotation = -110;
		t.width = 76;
		t.y = 254.42;
		t.elementsContent = [this._Rect10_i(),this.text6_1_5_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
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
		t.horizontalCenter = 259;
		t.rotation = 225;
		t.y = 421.35;
		t.elementsContent = [this._Rect11_i(),this.text6_2_3_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 230;
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
		t.horizontalCenter = 89.5;
		t.rotation = -110;
		t.width = 76;
		t.y = 428.89;
		t.elementsContent = [this._Rect12_i(),this.text6_2_4_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 460;
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
		t.fillColor = 0xff0000;
		t.height = 630;
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
		t.y = 438.14;
		t.elementsContent = [this._Rect14_i(),this.text6_3_4_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
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
		t.y = 364.61;
		t.elementsContent = [this._Rect15_i(),this.text6_3_5_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
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
		t.y = 255.74;
		t.elementsContent = [this._Rect16_i(),this.text6_4_5_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xff0000;
		t.height = 240;
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
		t.height = 100;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 100;
		t.x = 190;
		t.y = 0;
		t.elementsContent = [this.headImg6_0_i(),this._txt_nickname6_0_i(),this._txt_ip6_0_i()];
		return t;
	};
	_proto.headImg6_0_i = function () {
		var t = new eui.Image();
		this.headImg6_0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._txt_nickname6_0_i = function () {
		var t = new eui.Label();
		this._txt_nickname6_0 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Label";
		t.y = -28.72;
		return t;
	};
	_proto._txt_ip6_0_i = function () {
		var t = new eui.Label();
		this._txt_ip6_0 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "fghjkl;";
		t.y = -58.62;
		return t;
	};
	_proto.head6_1_i = function () {
		var t = new eui.Group();
		this.head6_1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 455;
		t.y = 4.56;
		t.elementsContent = [this.headImg6_1_i(),this._txt_nickname6_1_i(),this._txt_ip6_1_i()];
		return t;
	};
	_proto.headImg6_1_i = function () {
		var t = new eui.Image();
		this.headImg6_1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._txt_nickname6_1_i = function () {
		var t = new eui.Label();
		this._txt_nickname6_1 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Label";
		t.y = -28.72;
		return t;
	};
	_proto._txt_ip6_1_i = function () {
		var t = new eui.Label();
		this._txt_ip6_1 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "fghjkl;";
		t.y = -58.62;
		return t;
	};
	_proto.head6_2_i = function () {
		var t = new eui.Group();
		this.head6_2 = t;
		t.height = 100;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 640.92;
		t.elementsContent = [this.headImg6_2_i(),this._txt_nickname6_2_i(),this._txt_ip6_2_i()];
		return t;
	};
	_proto.headImg6_2_i = function () {
		var t = new eui.Image();
		this.headImg6_2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._txt_nickname6_2_i = function () {
		var t = new eui.Label();
		this._txt_nickname6_2 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Label";
		t.y = -28.72;
		return t;
	};
	_proto._txt_ip6_2_i = function () {
		var t = new eui.Label();
		this._txt_ip6_2 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "fghjkl;";
		t.y = 108;
		return t;
	};
	_proto.head6_3_i = function () {
		var t = new eui.Group();
		this.head6_3 = t;
		t.height = 100;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 100;
		t.x = 455;
		t.y = 362.11;
		t.elementsContent = [this.headImg6_3_i(),this._txt_nickname6_3_i(),this._txt_ip6_3_i()];
		return t;
	};
	_proto.headImg6_3_i = function () {
		var t = new eui.Image();
		this.headImg6_3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._txt_nickname6_3_i = function () {
		var t = new eui.Label();
		this._txt_nickname6_3 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Label";
		t.y = 144.72;
		return t;
	};
	_proto._txt_ip6_3_i = function () {
		var t = new eui.Label();
		this._txt_ip6_3 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "fghjkl;";
		t.y = 114.82;
		return t;
	};
	_proto.head6_4_i = function () {
		var t = new eui.Group();
		this.head6_4 = t;
		t.height = 100;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 100;
		t.x = 190;
		t.y = 362.11;
		t.elementsContent = [this.headImg6_4_i(),this._txt_nickname6_4_i(),this._txt_ip6_4_i()];
		return t;
	};
	_proto.headImg6_4_i = function () {
		var t = new eui.Image();
		this.headImg6_4 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._txt_nickname6_4_i = function () {
		var t = new eui.Label();
		this._txt_nickname6_4 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Label";
		t.y = 144.72;
		return t;
	};
	_proto._txt_ip6_4_i = function () {
		var t = new eui.Label();
		this._txt_ip6_4 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "fghjkl;";
		t.y = 114.82;
		return t;
	};
	_proto.head6_5_i = function () {
		var t = new eui.Group();
		this.head6_5 = t;
		t.height = 100;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = -1.51;
		t.elementsContent = [this.headImg6_5_i(),this._txt_nickname6_5_i(),this._txt_ip6_5_i()];
		return t;
	};
	_proto.headImg6_5_i = function () {
		var t = new eui.Image();
		this.headImg6_5 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._txt_nickname6_5_i = function () {
		var t = new eui.Label();
		this._txt_nickname6_5 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "Label";
		t.y = -28.72;
		return t;
	};
	_proto._txt_ip6_5_i = function () {
		var t = new eui.Label();
		this._txt_ip6_5 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "fghjkl;";
		t.y = 108;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "玩家位置监控图";
		t.x = 11;
		t.y = 6.67;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.label = "";
		t.x = 744.13;
		t.y = -1.48;
		t.skinName = common_kuang_location$Skin3;
		return t;
	};
	return common_kuang_location;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_menulist.exml'] = window.common_kuang_menulist = (function (_super) {
	__extends(common_kuang_menulist, _super);
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
		return common_kuang_menulist$Skin8;
	})(eui.Skin);

	var common_kuang_menulist$Skin9 = 	(function (_super) {
		__extends(common_kuang_menulist$Skin9, _super);
		function common_kuang_menulist$Skin9() {
			_super.call(this);
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
		var _proto = common_kuang_menulist$Skin9.prototype;

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
		return common_kuang_menulist$Skin9;
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
		t.skinName = common_kuang_menulist$Skin4;
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
		t.skinName = common_kuang_menulist$Skin5;
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
		t.skinName = common_kuang_menulist$Skin6;
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
		t.skinName = common_kuang_menulist$Skin7;
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
		t.skinName = common_kuang_menulist$Skin8;
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
		t.skinName = common_kuang_menulist$Skin9;
		return t;
	};
	return common_kuang_menulist;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_player.exml'] = window.common_kuang_player = (function (_super) {
	__extends(common_kuang_player, _super);
	function common_kuang_player() {
		_super.call(this);
		this.skinParts = ["_img_meng","_img_bg","bunengyong0","ani0","bunengyong1","ani1","bunengyong2","ani2","bunengyong3","ani3","bunengyong4","ani4","_gp_ani","nickname","headImg","_label_zuan","ip","_label_rate","_group_main"];
		
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_player.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 0;
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "pph_sh_img0_json.sh_headbg_shu";
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
		t.elementsContent = [this._img_bg_i(),this._gp_ani_i(),this.nickname_i(),this.headImg_i(),this._label_zuan_i(),this.ip_i(),this._label_rate_i()];
		return t;
	};
	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 320;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(97,62,271,36);
		t.source = "pph_sh_img0_json.sh_kuang_playerinfo";
		t.width = 500;
		t.y = 0;
		return t;
	};
	_proto._gp_ani_i = function () {
		var t = new eui.Group();
		this._gp_ani = t;
		t.horizontalCenter = 0.5;
		t.y = 201.33;
		t.elementsContent = [this.ani0_i(),this.ani1_i(),this.ani2_i(),this.ani3_i(),this.ani4_i()];
		return t;
	};
	_proto.ani0_i = function () {
		var t = new eui.Group();
		this.ani0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.bunengyong0_i()];
		return t;
	};
	_proto._Image1_i = function () {
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
		t.bottom = -30;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "pph_sh_img0_json.sh_diamond";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "5";
		t.textColor = 0xffffff;
		t.verticalCenter = -0.5;
		t.x = 45.81;
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
		t.x = 85;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Group2_i(),this.bunengyong1_i()];
		return t;
	};
	_proto._Image3_i = function () {
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
		t.bottom = -30;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "pph_sh_img0_json.sh_diamond";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "5";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -0.5;
		t.x = 45.81;
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
		t.x = 170;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Group3_i(),this.bunengyong2_i()];
		return t;
	};
	_proto._Image5_i = function () {
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
		t.bottom = -30;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image6_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "pph_sh_img0_json.sh_diamond";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "5";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -0.5;
		t.x = 45.81;
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
		t.x = 255;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Group4_i(),this.bunengyong3_i()];
		return t;
	};
	_proto._Image7_i = function () {
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
		t.bottom = -30;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "pph_sh_img0_json.sh_diamond";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "5";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -0.5;
		t.x = 45.81;
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
		t.x = 340;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Group5_i(),this.bunengyong4_i()];
		return t;
	};
	_proto._Image9_i = function () {
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
		t.bottom = -30;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.elementsContent = [this._Image10_i(),this._Label5_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "pph_sh_img0_json.sh_diamond";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 35;
		t.text = "5";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -0.5;
		t.x = 45.81;
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
		t.fontFamily = "Arial";
		t.height = 25;
		t.size = 25;
		t.text = "昵称：魂族网络科技";
		t.textColor = 0xffffff;
		t.x = 158;
		t.y = 30;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 76;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.width = 76;
		t.x = 28.72;
		t.y = 35.33;
		return t;
	};
	_proto._label_zuan_i = function () {
		var t = new eui.Label();
		this._label_zuan = t;
		t.size = 25;
		t.text = "钻石：200";
		t.textColor = 0xffffff;
		t.x = 158;
		t.y = 70;
		return t;
	};
	_proto.ip_i = function () {
		var t = new eui.Label();
		this.ip = t;
		t.size = 25;
		t.text = "IP：121.131.121.123";
		t.textColor = 0xffffff;
		t.x = 158;
		t.y = 110;
		return t;
	};
	_proto._label_rate_i = function () {
		var t = new eui.Label();
		this._label_rate = t;
		t.size = 25;
		t.text = "胜率：4%(2/32)";
		t.textColor = 0xffffff;
		t.x = 158;
		t.y = 150;
		return t;
	};
	return common_kuang_player;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_set.exml'] = window.common_kuang_set = (function (_super) {
	__extends(common_kuang_set, _super);
	function common_kuang_set() {
		_super.call(this);
		this.skinParts = ["_img_meng","_gp_clear","_img_head","_txt_nickname","_txt_id","_txt_music_yes","_txt_music_no","bgMusic","_txt_audio_yes","_txt_audio_no","bgAudio","_gp_back","_group_main"];
		
		this.height = 400;
		this.width = 550;
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_kuang_set.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 400;
		t.width = 554;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x002924;
		t.height = 400;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 25;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "账号信息";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this._Rect2_i(),this._gp_clear_i(),this._img_head_i(),this._txt_nickname_i(),this._txt_id_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 100;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_clear_i = function () {
		var t = new eui.Group();
		this._gp_clear = t;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.width = 130;
		t.x = 401.34;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2CAB4B;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "清除缓存";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.height = 70;
		t.verticalCenter = 0;
		t.width = 70;
		t.x = 36;
		return t;
	};
	_proto._txt_nickname_i = function () {
		var t = new eui.Label();
		this._txt_nickname = t;
		t.size = 25;
		t.text = "魂族网络";
		t.x = 130;
		t.y = 20.33;
		return t;
	};
	_proto._txt_id_i = function () {
		var t = new eui.Label();
		this._txt_id = t;
		t.size = 25;
		t.text = "ID:999999";
		t.textColor = 0xb16021;
		t.x = 141.97;
		t.y = 56.34;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 190;
		t.elementsContent = [this._Rect4_i(),this.bgMusic_i(),this.bgAudio_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 100;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bgMusic_i = function () {
		var t = new eui.Group();
		this.bgMusic = t;
		t.height = 50;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label3_i(),this._txt_music_yes_i(),this._txt_music_no_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "背景音乐：";
		t.verticalCenter = 0;
		t.x = 36;
		return t;
	};
	_proto._txt_music_yes_i = function () {
		var t = new eui.Label();
		this._txt_music_yes = t;
		t.size = 25;
		t.text = "有";
		t.textColor = 0xffffff;
		t.verticalCenter = 0.5;
		t.x = 248;
		return t;
	};
	_proto._txt_music_no_i = function () {
		var t = new eui.Label();
		this._txt_music_no = t;
		t.size = 25;
		t.text = "无";
		t.textColor = 0x5b5b5b;
		t.verticalCenter = 0.5;
		t.x = 425.31;
		return t;
	};
	_proto.bgAudio_i = function () {
		var t = new eui.Group();
		this.bgAudio = t;
		t.height = 50;
		t.width = 550;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this._Label4_i(),this._txt_audio_yes_i(),this._txt_audio_no_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "游戏音效：";
		t.verticalCenter = 0;
		t.x = 36;
		return t;
	};
	_proto._txt_audio_yes_i = function () {
		var t = new eui.Label();
		this._txt_audio_yes = t;
		t.size = 25;
		t.text = "有";
		t.verticalCenter = 0.5;
		t.x = 248;
		return t;
	};
	_proto._txt_audio_no_i = function () {
		var t = new eui.Label();
		this._txt_audio_no = t;
		t.size = 25;
		t.text = "无";
		t.textColor = 0x5B5B5B;
		t.verticalCenter = 0.5;
		t.x = 425.31;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.x = 0;
		t.elementsContent = [this._Rect5_i(),this._gp_back_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 100;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_back_i = function () {
		var t = new eui.Group();
		this._gp_back = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 110;
		t.y = 43.55;
		t.elementsContent = [this._Rect6_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xec7636;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "返回";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "清除后，下次进入游戏需要重新授权登录";
		t.textColor = 0x47BD9F;
		t.y = 8;
		return t;
	};
	return common_kuang_set;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_kuang_sure.exml'] = window.common_kuang_sure = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/ProgressBarSkinLuying.exml'] = window.ProgressBarSkinLuying = (function (_super) {
	__extends(ProgressBarSkinLuying, _super);
	function ProgressBarSkinLuying() {
		_super.call(this);
		this.skinParts = ["labelDisplay","thumb"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this.labelDisplay_i(),this._Image1_i(),this.thumb_i()];
	}
	var _proto = ProgressBarSkinLuying.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/100";
		t.textAlign = "center";
		t.textColor = 0x3d0004;
		t.verticalAlign = "middle";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(78,6,178,11);
		t.source = "pph_sh_img0_json.sh_yy_huakuai";
		t.verticalCenter = 0;
		t.width = 220;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_yy_guidao";
		t.verticalCenter = 0;
		t.width = 217;
		return t;
	};
	return ProgressBarSkinLuying;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_luying_notice.exml'] = window.common_luying_notice = (function (_super) {
	__extends(common_luying_notice, _super);
	var common_luying_notice$Skin10 = 	(function (_super) {
		__extends(common_luying_notice$Skin10, _super);
		function common_luying_notice$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_luying_notice$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_shangchuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_luying_notice$Skin10;
	})(eui.Skin);

	var common_luying_notice$Skin11 = 	(function (_super) {
		__extends(common_luying_notice$Skin11, _super);
		function common_luying_notice$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = common_luying_notice$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_cancle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return common_luying_notice$Skin11;
	})(eui.Skin);

	function common_luying_notice() {
		_super.call(this);
		this.skinParts = ["_pro_jindu","_btn_shangchuan","_btn_cancel"];
		
		this.height = 200;
		this.width = 300;
		this.elementsContent = [this._Rect1_i(),this._pro_jindu_i(),this._Label1_i(),this._Group1_i()];
	}
	var _proto = common_luying_notice.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x000000;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._pro_jindu_i = function () {
		var t = new eui.ProgressBar();
		this._pro_jindu = t;
		t.horizontalCenter = 0;
		t.skinName = "ProgressBarSkinLuying";
		t.slideDuration = 500;
		t.value = 20;
		t.verticalCenter = -1.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 35;
		t.text = "语音录制中";
		t.y = 28;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 131;
		t.elementsContent = [this._btn_shangchuan_i(),this._btn_cancel_i()];
		return t;
	};
	_proto._btn_shangchuan_i = function () {
		var t = new eui.Button();
		this._btn_shangchuan = t;
		t.label = "";
		t.x = 0;
		t.y = 1;
		t.skinName = common_luying_notice$Skin10;
		return t;
	};
	_proto._btn_cancel_i = function () {
		var t = new eui.Button();
		this._btn_cancel = t;
		t.label = "";
		t.x = 137;
		t.y = 0;
		t.skinName = common_luying_notice$Skin11;
		return t;
	};
	return common_luying_notice;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/common_message_UI.exml'] = window.common_message_UI = (function (_super) {
	__extends(common_message_UI, _super);
	function common_message_UI() {
		_super.call(this);
		this.skinParts = ["_img_meng","_img_bg","biao1","biao2","biao3","biao4","biao5","biao6","biao7","biao8","biao9","biao10","biao11","biao12","biao13","biao14","biao15","biaoqing","message0","message1","message2","message3","message4","message5","message6","message7","message8","message9","wenzi","_img_yybg","_img_yuyan","wenziButton","_img_bqbg","_img_bq","biaoqingButton","_group_main"];
		
		this.elementsContent = [this._img_meng_i(),this._group_main_i()];
	}
	var _proto = common_message_UI.prototype;

	_proto._img_meng_i = function () {
		var t = new eui.Image();
		this._img_meng = t;
		t.alpha = 0;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_bg_i(),this.biaoqing_i(),this.wenzi_i(),this.wenziButton_i(),this.biaoqingButton_i()];
		return t;
	};
	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 460;
		t.scale9Grid = new egret.Rectangle(92,252,559,136);
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.source = "pph_sh_img0_json.sh_chat_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Scroller();
		this.biaoqing = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.width = 700;
		t.y = 78;
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
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "1_png";
		t.width = 83;
		t.x = 8;
		t.y = 0;
		return t;
	};
	_proto.biao2_i = function () {
		var t = new eui.Image();
		this.biao2 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "2_png";
		t.width = 83;
		t.x = 123;
		t.y = 0;
		return t;
	};
	_proto.biao3_i = function () {
		var t = new eui.Image();
		this.biao3 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "3_png";
		t.width = 83;
		t.x = 238;
		t.y = 0;
		return t;
	};
	_proto.biao4_i = function () {
		var t = new eui.Image();
		this.biao4 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "4_png";
		t.width = 83;
		t.x = 353;
		t.y = 0;
		return t;
	};
	_proto.biao5_i = function () {
		var t = new eui.Image();
		this.biao5 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "5_png";
		t.width = 83;
		t.x = 468;
		t.y = 0;
		return t;
	};
	_proto.biao6_i = function () {
		var t = new eui.Image();
		this.biao6 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "6_png";
		t.width = 83;
		t.x = 583;
		t.y = 0;
		return t;
	};
	_proto.biao7_i = function () {
		var t = new eui.Image();
		this.biao7 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "7_png";
		t.width = 83;
		t.x = 8;
		t.y = 120;
		return t;
	};
	_proto.biao8_i = function () {
		var t = new eui.Image();
		this.biao8 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "8_png";
		t.width = 83;
		t.x = 123;
		t.y = 120;
		return t;
	};
	_proto.biao9_i = function () {
		var t = new eui.Image();
		this.biao9 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "9_png";
		t.width = 83;
		t.x = 238;
		t.y = 120;
		return t;
	};
	_proto.biao10_i = function () {
		var t = new eui.Image();
		this.biao10 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "10_png";
		t.width = 83;
		t.x = 353;
		t.y = 120;
		return t;
	};
	_proto.biao11_i = function () {
		var t = new eui.Image();
		this.biao11 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "11_png";
		t.width = 83;
		t.x = 468;
		t.y = 120;
		return t;
	};
	_proto.biao12_i = function () {
		var t = new eui.Image();
		this.biao12 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "12_png";
		t.width = 83;
		t.x = 583;
		t.y = 120;
		return t;
	};
	_proto.biao13_i = function () {
		var t = new eui.Image();
		this.biao13 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "13_png";
		t.width = 83;
		t.x = 8;
		t.y = 240;
		return t;
	};
	_proto.biao14_i = function () {
		var t = new eui.Image();
		this.biao14 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "14_png";
		t.width = 83;
		t.x = 123;
		t.y = 240;
		return t;
	};
	_proto.biao15_i = function () {
		var t = new eui.Image();
		this.biao15 = t;
		t.height = 84;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "15_png";
		t.width = 83;
		t.x = 238;
		t.y = 240;
		return t;
	};
	_proto.wenzi_i = function () {
		var t = new eui.Scroller();
		this.wenzi = t;
		t.anchorOffsetX = 0;
		t.height = 450;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.width = 700;
		t.y = 79;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = -19;
		t.y = 1.52;
		t.elementsContent = [this.message0_i(),this.message1_i(),this.message2_i(),this.message3_i(),this.message4_i(),this.message5_i(),this.message6_i(),this.message7_i(),this.message8_i(),this.message9_i()];
		return t;
	};
	_proto.message0_i = function () {
		var t = new eui.Group();
		this.message0 = t;
		t.horizontalCenter = 0;
		t.y = 2.5;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342f30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "伐好意思，刚接了电话";
		t.textAlign = "left";
		t.textColor = 0xc5c5c5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Group();
		this.message1 = t;
		t.horizontalCenter = 0;
		t.y = 47.5;
		t.elementsContent = [this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "房间没满，房主再找几个嘛";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Group();
		this.message2 = t;
		t.horizontalCenter = 0;
		t.y = 92.5;
		t.elementsContent = [this._Rect3_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "这把我要通吃";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Group();
		this.message3 = t;
		t.horizontalCenter = 0;
		t.y = 137.5;
		t.elementsContent = [this._Rect4_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "这桩一柱擎天，稳如泰山";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message4_i = function () {
		var t = new eui.Group();
		this.message4 = t;
		t.horizontalCenter = 0;
		t.y = 182.5;
		t.elementsContent = [this._Rect5_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "别磨蹭了，时间就是金钱";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message5_i = function () {
		var t = new eui.Group();
		this.message5 = t;
		t.horizontalCenter = 0;
		t.y = 227.5;
		t.elementsContent = [this._Rect6_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "哎呦我滴妈，手气有点旺";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message6_i = function () {
		var t = new eui.Group();
		this.message6 = t;
		t.horizontalCenter = 0;
		t.y = 272.5;
		t.elementsContent = [this._Rect7_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "把把都是赢，你咋不上天";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message7_i = function () {
		var t = new eui.Group();
		this.message7 = t;
		t.horizontalCenter = 0;
		t.y = 317.5;
		t.elementsContent = [this._Rect8_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "这..这牌，气的我手直抖";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message8_i = function () {
		var t = new eui.Group();
		this.message8 = t;
		t.horizontalCenter = 0;
		t.y = 362.5;
		t.elementsContent = [this._Rect9_i(),this._Label9_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "四五六七八，要的就是发";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.message9_i = function () {
		var t = new eui.Group();
		this.message9 = t;
		t.horizontalCenter = 0;
		t.y = 407.5;
		t.elementsContent = [this._Rect10_i(),this._Label10_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x342F30;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 670;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.background = false;
		t.border = false;
		t.height = 26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "放学别走，再战三百回合";
		t.textAlign = "left";
		t.textColor = 0xC5C5C5;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.wenziButton_i = function () {
		var t = new eui.Group();
		this.wenziButton = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_yybg_i(),this._img_yuyan_i()];
		return t;
	};
	_proto._img_yybg_i = function () {
		var t = new eui.Image();
		this._img_yybg = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.source = "pph_sh_img0_json.sh_chat_title_lv";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_yuyan_i = function () {
		var t = new eui.Image();
		this._img_yuyan = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "pph_sh_img0_json.sh_chat_yuyan_green";
		t.verticalCenter = 0;
		return t;
	};
	_proto.biaoqingButton_i = function () {
		var t = new eui.Group();
		this.biaoqingButton = t;
		t.right = 0;
		t.y = 0;
		t.elementsContent = [this._img_bqbg_i(),this._img_bq_i()];
		return t;
	};
	_proto._img_bqbg_i = function () {
		var t = new eui.Image();
		this._img_bqbg = t;
		t.anchorOffsetX = 370;
		t.horizontalCenter = 0;
		t.scaleX = -0.95;
		t.scaleY = 0.95;
		t.source = "pph_sh_img0_json.sh_chat_title_lv";
		t.verticalCenter = 0;
		return t;
	};
	_proto._img_bq_i = function () {
		var t = new eui.Image();
		this._img_bq = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "pph_sh_img0_json.sh_chat_biaoqing_green";
		t.verticalCenter = 0;
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
		this.skinParts = ["_img_meng","_gp_backhall","_gp_jibenRule","_gp_bipai","_gp_btn_jiben","_gp_btn_bipai","_group_main"];
		
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
		t.source = "";
		t.width = 10;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._group_main_i = function () {
		var t = new eui.Group();
		this._group_main = t;
		t.height = 640;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 1080;
		t.x = 54;
		t.y = 32;
		t.elementsContent = [this._Rect1_i(),this._gp_backhall_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x002924;
		t.height = 800;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._gp_backhall_i = function () {
		var t = new eui.Group();
		this._gp_backhall = t;
		t.horizontalCenter = 0;
		t.y = 543.88;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0xEC7636;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "返回";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0f2f2d;
		t.height = 700;
		t.width = 1500;
		t.x = 0;
		t.y = -207.82;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 1040;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._gp_jibenRule_i(),this._gp_bipai_i()];
		return t;
	};
	_proto._gp_jibenRule_i = function () {
		var t = new eui.Group();
		this._gp_jibenRule = t;
		t.horizontalCenter = 0;
		t.width = 1040;
		t.y = 0;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "游戏用牌:";
		t.textColor = 0x47bd9f;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "一副标准的扑克牌，各门花色的牌只取(7,8,9,10，J，Q,K,A)，共有32张牌，可以2-6人完成游戏。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 38;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "基本规则：";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 150;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "游戏开始后，先发给各家2张牌，从第二张牌开始自动亮出，每发一张牌，牌面较大者优先叫牌。优先下注这可以选择下注，不加或者放弃;当别人下注后，可考虑是否“跟注” 或者“加注”。当发到第三张牌时，可以选择“梭”，即增加下注到允许的最大筹码值。最后的胜利者获得本局桌面上的全部筹码。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 188;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "恶底:起手发两张牌牌面最小的玩家自动扣除一定的分值到底池。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 340;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "梭哈:建房的时候选择50 100 300,对应恶底5 10 30,用户的思考时间15秒。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 378;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = " 下注和加注:可以选择5 10 20 50, 50仅在梭哈分300的时候出现，用户的思考时间15秒";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 416;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "特殊:A在可以组成顺子的情况下，可以当作6使用，此时该顺子为最小的顺子。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 492;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "离线:用户在离线之后接下来的时间再轮到他选择视作自动弃牌直到用户回来。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 530;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "叫牌规则:";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 606;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "1, 第一轮开始，发两张牌，一张暗牌，一张明牌，比那张明牌的大小，比单张的时候， A,K,Q,J,10,9,8,7。按照这个顺序比，相同的牌比花色。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 644;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "2, 发第2张明牌的时候，比对子，相同对子，比花色，没有对子，一次比单张大小，如果两张单牌都一样，比最大单牌的花色。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 720;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "3, 发第3张明牌时，比3条，如果没有3条，比对子，对子一样，比单牌，全部一样，比 对子花色，没有对子，依次比所有单牌的大小，如果所有单牌都一样，比最大单牌的花色。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 796;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "4, 发第4张明牌时，按同花顺，炸弹，葫芦，同花，顺子，3条，2对，1对，乌龙的顺序比牌。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 910;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "5, 出现两对牌型时，先比大对，如果相同，再比小对，若全部一样，比大对花色。";
		t.textAlign = "left";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 986;
		return t;
	};
	_proto._gp_bipai_i = function () {
		var t = new eui.Group();
		this._gp_bipai = t;
		t.width = 1040;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Label25_i(),this._Label26_i(),this._Label27_i(),this._Label28_i(),this._Label29_i(),this._Label30_i(),this._Label31_i(),this._Label32_i(),this._Label33_i()];
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "牌型大小:";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "同花顺:同一花色的顺子";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 38;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "炸弹:同四张加单张";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 76;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "葫芦:三同张加对子";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 114;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "同花:同一花色";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 152;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "顺子:花色不一样的顺子";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 190;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "三条:三同张加两单张";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 228;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "两对:两对两同张加一单张";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 266;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "对子:两同张加三单张";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 304;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "乌龙:五单张";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 342;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "同花顺> 炸弹> 葫芦>同花> 顺子> 三条> 两对> 对子> 乌龙";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 418;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "点数:";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 494;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "A>K>Q>J>10>9>8>7";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 532;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "特殊：";
		t.textColor = 0x47BD9F;
		t.x = 0;
		t.y = 580;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "牌面皆为两对:依次比较对子大小，相同，则比较单牌大小，完全相同，比较大对花色。";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 618;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "牌面皆为对子:比较对子大小，相同，则依次比较单牌大小，完全相同，比较对子花色";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 684;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "牌面皆为乌龙:依次比较单牌大小，完全相同，比较最大单牌花色。";
		t.textColor = 0x47BD9F;
		t.width = 1040;
		t.x = 0;
		t.y = 750;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = -9.44;
		t.elementsContent = [this._gp_btn_jiben_i(),this._gp_btn_bipai_i()];
		return t;
	};
	_proto._gp_btn_jiben_i = function () {
		var t = new eui.Group();
		this._gp_btn_jiben = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect4_i(),this._Label34_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2CAB4B;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "基本规则";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn_bipai_i = function () {
		var t = new eui.Group();
		this._gp_btn_bipai = t;
		t.x = 250;
		t.y = 0;
		t.elementsContent = [this._Rect5_i(),this._Label35_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2CAB4B;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "比牌规则";
		t.verticalCenter = 0;
		return t;
	};
	return common_wanfa_UI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 50;
		this.minHeight = 18;
		this.minWidth = 30;
		this.width = 600;
		this.elementsContent = [this._Rect1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xc5d6c5;
		t.height = 50;
		t.strokeColor = 0x45bda0;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Rect();
		this.thumb = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x122e2d;
		t.height = 46;
		t.verticalCenter = 0;
		t.width = 596;
		t.x = 2;
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
		t.visible = false;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/roonLifeScene.exml'] = window.roonLifeScene = (function (_super) {
	__extends(roonLifeScene, _super);
	function roonLifeScene() {
		_super.call(this);
		this.skinParts = ["bg","contentText0","contentText1","contentText2","contentText","contentText4"];
		
		this.height = 88;
		this.width = 440;
		this.elementsContent = [this.bg_i(),this._Group3_i()];
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
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.elementsContent = [this.contentText0_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto.contentText0_i = function () {
		var t = new eui.Label();
		this.contentText0 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "本局时长：10局";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 40;
		t.elementsContent = [this.contentText1_i(),this.contentText2_i()];
		return t;
	};
	_proto.contentText1_i = function () {
		var t = new eui.Label();
		this.contentText1 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "本局时长：10局";
		t.textAlign = "left";
		t.textColor = 0xfff442;
		t.verticalAlign = "middle";
		t.x = 76.25;
		t.y = 0;
		return t;
	};
	_proto.contentText2_i = function () {
		var t = new eui.Label();
		this.contentText2 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "房主：";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 80;
		t.elementsContent = [this.contentText_i(),this.contentText4_i()];
		return t;
	};
	_proto.contentText_i = function () {
		var t = new eui.Label();
		this.contentText = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "未开局房间将解散";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 122.5;
		t.y = 0;
		return t;
	};
	_proto.contentText4_i = function () {
		var t = new eui.Label();
		this.contentText4 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "00:00:00";
		t.textAlign = "left";
		t.textColor = 0xfff442;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return roonLifeScene;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/shuCommon/shu_common_jiesan.exml'] = window.shu_common_jiesan = (function (_super) {
	__extends(shu_common_jiesan, _super);
	var shu_common_jiesan$Skin12 = 	(function (_super) {
		__extends(shu_common_jiesan$Skin12, _super);
		function shu_common_jiesan$Skin12() {
			_super.call(this);
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
		var _proto = shu_common_jiesan$Skin12.prototype;

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
		return shu_common_jiesan$Skin12;
	})(eui.Skin);

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
		return shu_common_jiesan$Skin13;
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
		t.skinName = shu_common_jiesan$Skin12;
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
		t.skinName = shu_common_jiesan$Skin13;
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
		return shu_common_menu$Skin20;
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
		t.skinName = shu_common_menu$Skin14;
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
		t.skinName = shu_common_menu$Skin15;
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
		t.skinName = shu_common_menu$Skin16;
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
		t.skinName = shu_common_menu$Skin17;
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
		t.skinName = shu_common_menu$Skin18;
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
		t.skinName = shu_common_menu$Skin19;
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
		t.skinName = shu_common_menu$Skin20;
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
		this.skinParts = ["_txt_sit_nickname00","_txt_sit_fen00","_gp_watch_item00","_txt_sit_nickname01","_txt_sit_fen01","_gp_watch_item01","_txt_sit_nickname02","_txt_sit_fen02","_gp_watch_item02","_txt_sit_nickname03","_txt_sit_fen03","_gp_watch_item03","_txt_sit_nickname04","_txt_sit_fen04","_gp_watch_item04","_txt_sit_nickname05","_txt_sit_fen05","_gp_watch_item05","head1","nickname1","item0","head0","nickname0","item1","head2","nickname2","item2","head3","nickname3","item3","watchingPeopleList","joinXiaoxiGroup"];
		
		this.height = 570;
		this.width = 404;
		this.elementsContent = [this.joinXiaoxiGroup_i()];
	}
	var _proto = common_kuang_watch.prototype;

	_proto.joinXiaoxiGroup_i = function () {
		var t = new eui.Group();
		this.joinXiaoxiGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._gp_watch_item00_i(),this._gp_watch_item01_i(),this._gp_watch_item02_i(),this._gp_watch_item03_i(),this._gp_watch_item04_i(),this._gp_watch_item05_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x002924;
		t.height = 570;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 70;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "实时战况";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 92;
		t.elementsContent = [this._Rect3_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 50;
		t.width = 400;
		t.x = -1.52;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "昵称";
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "输赢";
		t.verticalCenter = 0.5;
		t.x = 250;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 360;
		t.elementsContent = [this._Rect4_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 50;
		t.width = 400;
		t.x = -1.52;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "看客";
		t.verticalCenter = 0.5;
		t.x = 53.03;
		return t;
	};
	_proto._gp_watch_item00_i = function () {
		var t = new eui.Group();
		this._gp_watch_item00 = t;
		t.height = 25;
		t.width = 305;
		t.x = 25;
		t.y = 156;
		t.elementsContent = [this._txt_sit_nickname00_i(),this._txt_sit_fen00_i()];
		return t;
	};
	_proto._txt_sit_nickname00_i = function () {
		var t = new eui.Label();
		this._txt_sit_nickname00 = t;
		t.size = 25;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 175;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_sit_fen00_i = function () {
		var t = new eui.Label();
		this._txt_sit_fen00 = t;
		t.size = 25;
		t.text = "-2000";
		t.textAlign = "center";
		t.width = 150;
		t.x = 155;
		t.y = 0;
		return t;
	};
	_proto._gp_watch_item01_i = function () {
		var t = new eui.Group();
		this._gp_watch_item01 = t;
		t.height = 25;
		t.width = 305;
		t.x = 25;
		t.y = 189;
		t.elementsContent = [this._txt_sit_nickname01_i(),this._txt_sit_fen01_i()];
		return t;
	};
	_proto._txt_sit_nickname01_i = function () {
		var t = new eui.Label();
		this._txt_sit_nickname01 = t;
		t.size = 25;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 175;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_sit_fen01_i = function () {
		var t = new eui.Label();
		this._txt_sit_fen01 = t;
		t.size = 25;
		t.text = "-2000";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 150;
		t.x = 155;
		t.y = 0;
		return t;
	};
	_proto._gp_watch_item02_i = function () {
		var t = new eui.Group();
		this._gp_watch_item02 = t;
		t.height = 25;
		t.width = 305;
		t.x = 25;
		t.y = 222;
		t.elementsContent = [this._txt_sit_nickname02_i(),this._txt_sit_fen02_i()];
		return t;
	};
	_proto._txt_sit_nickname02_i = function () {
		var t = new eui.Label();
		this._txt_sit_nickname02 = t;
		t.size = 25;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 175;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_sit_fen02_i = function () {
		var t = new eui.Label();
		this._txt_sit_fen02 = t;
		t.size = 25;
		t.text = "-2000";
		t.textAlign = "center";
		t.width = 150;
		t.x = 155;
		t.y = 0;
		return t;
	};
	_proto._gp_watch_item03_i = function () {
		var t = new eui.Group();
		this._gp_watch_item03 = t;
		t.height = 25;
		t.width = 305;
		t.x = 25;
		t.y = 255;
		t.elementsContent = [this._txt_sit_nickname03_i(),this._txt_sit_fen03_i()];
		return t;
	};
	_proto._txt_sit_nickname03_i = function () {
		var t = new eui.Label();
		this._txt_sit_nickname03 = t;
		t.size = 25;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 175;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_sit_fen03_i = function () {
		var t = new eui.Label();
		this._txt_sit_fen03 = t;
		t.size = 25;
		t.text = "-2000";
		t.textAlign = "center";
		t.width = 150;
		t.x = 155;
		t.y = 0;
		return t;
	};
	_proto._gp_watch_item04_i = function () {
		var t = new eui.Group();
		this._gp_watch_item04 = t;
		t.height = 25;
		t.width = 305;
		t.x = 25;
		t.y = 288;
		t.elementsContent = [this._txt_sit_nickname04_i(),this._txt_sit_fen04_i()];
		return t;
	};
	_proto._txt_sit_nickname04_i = function () {
		var t = new eui.Label();
		this._txt_sit_nickname04 = t;
		t.size = 25;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.width = 175;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_sit_fen04_i = function () {
		var t = new eui.Label();
		this._txt_sit_fen04 = t;
		t.size = 25;
		t.text = "-2000";
		t.textAlign = "center";
		t.width = 150;
		t.x = 155;
		t.y = 0;
		return t;
	};
	_proto._gp_watch_item05_i = function () {
		var t = new eui.Group();
		this._gp_watch_item05 = t;
		t.height = 25;
		t.width = 305;
		t.x = 25;
		t.y = 321;
		t.elementsContent = [this._txt_sit_nickname05_i(),this._txt_sit_fen05_i()];
		return t;
	};
	_proto._txt_sit_nickname05_i = function () {
		var t = new eui.Label();
		this._txt_sit_nickname05 = t;
		t.size = 25;
		t.text = "魂族网络";
		t.textAlign = "center";
		t.textColor = 0x4DBCC2;
		t.width = 175;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_sit_fen05_i = function () {
		var t = new eui.Label();
		this._txt_sit_fen05 = t;
		t.size = 25;
		t.text = "-2000";
		t.textAlign = "center";
		t.width = 150;
		t.x = 155;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 148;
		t.horizontalCenter = 2;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 400;
		t.y = 422;
		t.viewport = this.watchingPeopleList_i();
		return t;
	};
	_proto.watchingPeopleList_i = function () {
		var t = new eui.Group();
		this.watchingPeopleList = t;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 9;
		t.y = 16;
		t.elementsContent = [this._Group4_i(),this.nickname1_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.head1_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "smile先生";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.y = 90.33;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 104;
		t.y = 16;
		t.elementsContent = [this._Group5_i(),this.nickname0_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.head0_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "smile先生";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.y = 90.33;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 199;
		t.y = 16;
		t.elementsContent = [this._Group6_i(),this.nickname2_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.head2_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "smile先生";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.y = 90.33;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 294;
		t.y = 16;
		t.elementsContent = [this._Group7_i(),this.nickname3_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.head3_i()];
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "smile先生";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.y = 90.33;
		return t;
	};
	return common_kuang_watch;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/watch/watchlistItem.exml'] = window.watchlistItem = (function (_super) {
	__extends(watchlistItem, _super);
	function watchlistItem() {
		_super.call(this);
		this.skinParts = ["head","nickname","item"];
		
		this.height = 100;
		this.width = 91;
		this.elementsContent = [this.item_i()];
	}
	var _proto = watchlistItem.prototype;

	_proto.item_i = function () {
		var t = new eui.Group();
		this.item = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.nickname_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.head_i()];
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "tz_game_public_json.game_xiaoxi_default_head";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "smile先生";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.y = 90.33;
		return t;
	};
	return watchlistItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/activeLayer.exml'] = window.activeLayer = (function (_super) {
	__extends(activeLayer, _super);
	function activeLayer() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_gp_backhall","_label_userid","topGroup","_label_userid0","_label_userid1"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this._gp_backhall_i(),this.topGroup_i(),this._label_userid0_i(),this._label_userid1_i()];
	}
	var _proto = activeLayer.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 640;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_backhall_i = function () {
		var t = new eui.Group();
		this._gp_backhall = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 242;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0xEC7636;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "返回大厅";
		t.verticalCenter = 0;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0.33;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._label_userid_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 100;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._label_userid_i = function () {
		var t = new eui.Label();
		this._label_userid = t;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "热门活动";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._label_userid0_i = function () {
		var t = new eui.Label();
		this._label_userid0 = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "参与热门活动，钻石送不停";
		t.textAlign = "right";
		t.textColor = 0xFFFFFF;
		t.y = 116;
		return t;
	};
	_proto._label_userid1_i = function () {
		var t = new eui.Label();
		this._label_userid1 = t;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "暂无活动";
		t.textAlign = "right";
		t.textColor = 0xFFFFFF;
		t.y = 294.7;
		return t;
	};
	return activeLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/create/CreateSuohaSceneSkin.exml'] = window.CreateSuohaSceneSkin = (function (_super) {
	__extends(CreateSuohaSceneSkin, _super);
	var CreateSuohaSceneSkin$Skin21 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin21, _super);
		function CreateSuohaSceneSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 50.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin21;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin22 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin22, _super);
		function CreateSuohaSceneSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin22;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin23 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin23, _super);
		function CreateSuohaSceneSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin23;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin24 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin24, _super);
		function CreateSuohaSceneSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 45.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin24;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin25 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin25, _super);
		function CreateSuohaSceneSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 44.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin25;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin26 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin26, _super);
		function CreateSuohaSceneSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 45.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin26;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin27 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin27, _super);
		function CreateSuohaSceneSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin27;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin28 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin28, _super);
		function CreateSuohaSceneSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin28;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin29 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin29, _super);
		function CreateSuohaSceneSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin29;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin30 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin30, _super);
		function CreateSuohaSceneSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin30;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin31 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin31, _super);
		function CreateSuohaSceneSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin31;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin32 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin32, _super);
		function CreateSuohaSceneSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin32;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin33 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin33, _super);
		function CreateSuohaSceneSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin33;
	})(eui.Skin);

	var CreateSuohaSceneSkin$Skin34 = 	(function (_super) {
		__extends(CreateSuohaSceneSkin$Skin34, _super);
		function CreateSuohaSceneSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSuohaSceneSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 32;
			t.verticalCenter = 0;
			t.x = 51.5;
			return t;
		};
		return CreateSuohaSceneSkin$Skin34;
	})(eui.Skin);

	function CreateSuohaSceneSkin() {
		_super.call(this);
		this.skinParts = ["_rect_bg","payModeRadio1","payModeRadioText1","payModeRadio0","payModeRadioText0","payModeRadio3","palycount0","palycountText0","palycount1","palycountText1","palycount2","palycountText2","fenRadio1","fenRadioText1","fenRadio2","fenRadioText2","fenRadio3","fenRadioText3","fenRadio4","fenRadioText4","xianzhiRadio0","xianzhiRadioText0","xianzhiRadio1","xianzhiRadioText1","zhongtuRadio1","zhongtuRadioText1","zhongtuRadio0","zhongtuRadioText0","m_showtip","_gp_backhall","_gp_create"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this._Scroller1_i(),this.m_showtip_i(),this._Group28_i()];
	}
	var _proto = CreateSuohaSceneSkin.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 640;
		t.horizontalCenter = 0;
		t.width = 1080;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group27_i();
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Rect1_i(),this._Group4_i(),this._Group7_i(),this._Group12_i(),this._Group18_i(),this._Group22_i(),this._Group26_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0f2f2d;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = -2;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = -2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "付费方式：";
		t.textColor = 0x47bd9f;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 190;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 205;
		t.y = 0;
		t.elementsContent = [this.payModeRadio1_i(),this.payModeRadioText1_i()];
		return t;
	};
	_proto.payModeRadio1_i = function () {
		var t = new eui.RadioButton();
		this.payModeRadio1 = t;
		t.height = 37;
		t.label = "房主付";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin21;
		return t;
	};
	_proto.payModeRadioText1_i = function () {
		var t = new eui.Label();
		this.payModeRadioText1 = t;
		t.size = 32;
		t.text = "房主支付";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 50.5;
		return t;
	};
	_proto._Group2_i = function () {
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
		t.label = "AA支付";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin22;
		return t;
	};
	_proto.payModeRadioText0_i = function () {
		var t = new eui.Label();
		this.payModeRadioText0 = t;
		t.size = 32;
		t.text = "AA支付";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 100;
		t.elementsContent = [this._Rect3_i(),this._Label2_i(),this._Group6_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796a;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = -2;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "规则选择：";
		t.textColor = 0x47bd9f;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 190;
		t.elementsContent = [this._Group5_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.payModeRadio3_i(),this._Label3_i()];
		return t;
	};
	_proto.payModeRadio3_i = function () {
		var t = new eui.RadioButton();
		this.payModeRadio3 = t;
		t.groupName = "123";
		t.height = 36;
		t.label = "港式五张";
		t.selected = true;
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin23;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "港式五张";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 200;
		t.elementsContent = [this._Rect4_i(),this._Label4_i(),this._Group11_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = -2;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "局数玩法：";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 190;
		t.elementsContent = [this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Group8_i = function () {
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
		t.label = "10局";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin24;
		return t;
	};
	_proto.palycountText0_i = function () {
		var t = new eui.Label();
		this.palycountText0 = t;
		t.size = 32;
		t.text = "10局";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 45.5;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 205;
		t.y = 0;
		t.elementsContent = [this.palycount1_i(),this.palycountText1_i()];
		return t;
	};
	_proto.palycount1_i = function () {
		var t = new eui.RadioButton();
		this.palycount1 = t;
		t.height = 36;
		t.label = "15局";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin25;
		return t;
	};
	_proto.palycountText1_i = function () {
		var t = new eui.Label();
		this.palycountText1 = t;
		t.size = 32;
		t.text = "15局";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 44.5;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 410;
		t.y = 0;
		t.elementsContent = [this.palycount2_i(),this.palycountText2_i()];
		return t;
	};
	_proto.palycount2_i = function () {
		var t = new eui.RadioButton();
		this.palycount2 = t;
		t.label = "20局";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin26;
		return t;
	};
	_proto.palycountText2_i = function () {
		var t = new eui.Label();
		this.palycountText2 = t;
		t.size = 32;
		t.text = "20局";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 45.5;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 300;
		t.elementsContent = [this._Rect5_i(),this._Label5_i(),this._Group17_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = -2;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "梭哈分值：";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 190;
		t.elementsContent = [this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.fenRadio1_i(),this.fenRadioText1_i()];
		return t;
	};
	_proto.fenRadio1_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio1 = t;
		t.height = 36;
		t.label = "100";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin27;
		return t;
	};
	_proto.fenRadioText1_i = function () {
		var t = new eui.Label();
		this.fenRadioText1 = t;
		t.size = 32;
		t.text = "100";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 205;
		t.y = 0;
		t.elementsContent = [this.fenRadio2_i(),this.fenRadioText2_i()];
		return t;
	};
	_proto.fenRadio2_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio2 = t;
		t.height = 36;
		t.label = "200";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin28;
		return t;
	};
	_proto.fenRadioText2_i = function () {
		var t = new eui.Label();
		this.fenRadioText2 = t;
		t.size = 32;
		t.text = "200";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 410;
		t.y = 0;
		t.elementsContent = [this.fenRadio3_i(),this.fenRadioText3_i()];
		return t;
	};
	_proto.fenRadio3_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio3 = t;
		t.height = 36;
		t.label = "300";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin29;
		return t;
	};
	_proto.fenRadioText3_i = function () {
		var t = new eui.Label();
		this.fenRadioText3 = t;
		t.size = 32;
		t.text = "300";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 615;
		t.y = 0;
		t.elementsContent = [this.fenRadio4_i(),this.fenRadioText4_i()];
		return t;
	};
	_proto.fenRadio4_i = function () {
		var t = new eui.RadioButton();
		this.fenRadio4 = t;
		t.height = 36;
		t.label = "500";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin30;
		return t;
	};
	_proto.fenRadioText4_i = function () {
		var t = new eui.Label();
		this.fenRadioText4 = t;
		t.size = 32;
		t.text = "500";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 400;
		t.elementsContent = [this._Rect6_i(),this._Label6_i(),this._Group21_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = -2;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "50分选项：";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 190;
		t.elementsContent = [this._Group19_i(),this._Group20_i()];
		return t;
	};
	_proto._Group19_i = function () {
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
		t.label = "不限制";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin31;
		return t;
	};
	_proto.xianzhiRadioText0_i = function () {
		var t = new eui.Label();
		this.xianzhiRadioText0 = t;
		t.size = 32;
		t.text = "不限制";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 205;
		t.y = 0;
		t.elementsContent = [this.xianzhiRadio1_i(),this.xianzhiRadioText1_i()];
		return t;
	};
	_proto.xianzhiRadio1_i = function () {
		var t = new eui.RadioButton();
		this.xianzhiRadio1 = t;
		t.label = "限制一次";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin32;
		return t;
	};
	_proto.xianzhiRadioText1_i = function () {
		var t = new eui.Label();
		this.xianzhiRadioText1 = t;
		t.size = 32;
		t.text = "限制一次";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 50.5;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 500;
		t.elementsContent = [this._Rect7_i(),this._Label7_i(),this._Group25_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = -2;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "中途坐下：";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 190;
		t.y = 21;
		t.elementsContent = [this._Group23_i(),this._Group24_i()];
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 205;
		t.elementsContent = [this.zhongtuRadio1_i(),this.zhongtuRadioText1_i()];
		return t;
	};
	_proto.zhongtuRadio1_i = function () {
		var t = new eui.RadioButton();
		this.zhongtuRadio1 = t;
		t.height = 36;
		t.label = "不允许";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin33;
		return t;
	};
	_proto.zhongtuRadioText1_i = function () {
		var t = new eui.Label();
		this.zhongtuRadioText1 = t;
		t.size = 32;
		t.text = "不允许";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
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
		t.label = "允许";
		t.width = 36;
		t.x = 0;
		t.y = 0;
		t.skinName = CreateSuohaSceneSkin$Skin34;
		return t;
	};
	_proto.zhongtuRadioText0_i = function () {
		var t = new eui.Label();
		this.zhongtuRadioText0 = t;
		t.size = 32;
		t.text = "允许";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 51.5;
		return t;
	};
	_proto.m_showtip_i = function () {
		var t = new eui.Label();
		this.m_showtip = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "注：开房无消耗，坐下后扣出80个钻石，未开始则返还！";
		t.textColor = 0xb16021;
		t.y = 510;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 550.73;
		t.elementsContent = [this._gp_backhall_i(),this._gp_create_i()];
		return t;
	};
	_proto._gp_backhall_i = function () {
		var t = new eui.Group();
		this._gp_backhall = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Rect8_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0xEC7636;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "返回大厅";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_create_i = function () {
		var t = new eui.Group();
		this._gp_create = t;
		t.verticalCenter = 0;
		t.x = 500;
		t.y = 10;
		t.elementsContent = [this._Rect9_i(),this._Label9_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2CAB4B;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确定创建";
		t.verticalCenter = 0;
		return t;
	};
	return CreateSuohaSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/create/joinLayer.exml'] = window.joinLayer = (function (_super) {
	__extends(joinLayer, _super);
	function joinLayer() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_gp_btn_backhall","_txt_num0","_txt_num1","_txt_num2","_txt_num3","_txt_num4","_txt_num5","_gp_btn1","_gp_btn2","_gp_btn3","_gp_btn4","_gp_btn5","_gp_btn6","_gp_btn7","_gp_btn8","_gp_btn9","_gp_btn_delete","_gp_btn0","_gp_btn_empty"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this._Group8_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i()];
	}
	var _proto = joinLayer.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 640;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._gp_btn_backhall_i(),this._Label2_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x112928;
		t.height = 640;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_btn_backhall_i = function () {
		var t = new eui.Group();
		this._gp_btn_backhall = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 231;
		t.y = 10;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2CAB4B;
		t.height = 70;
		t.horizontalCenter = 0;
		t.strokeColor = 0x7A7A7A;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "返回大厅";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 29;
		t.text = "请输入六位房间号";
		t.textColor = 0x47bd9f;
		t.y = 232;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._txt_num0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_num_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_num0_i = function () {
		var t = new eui.Label();
		this._txt_num0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "8";
		t.textColor = 0xb16021;
		t.verticalCenter = 3;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 75;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._txt_num1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_num_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_num1_i = function () {
		var t = new eui.Label();
		this._txt_num1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "8";
		t.textColor = 0xB16021;
		t.verticalCenter = 3;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._txt_num2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_num_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_num2_i = function () {
		var t = new eui.Label();
		this._txt_num2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "8";
		t.textColor = 0xB16021;
		t.verticalCenter = 3;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._txt_num3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_num_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_num3_i = function () {
		var t = new eui.Label();
		this._txt_num3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "8";
		t.textColor = 0xb16021;
		t.verticalCenter = 3;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._txt_num4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_num_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_num4_i = function () {
		var t = new eui.Label();
		this._txt_num4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "8";
		t.textColor = 0xB16021;
		t.verticalCenter = 3;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 375;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._txt_num5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_num_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_num5_i = function () {
		var t = new eui.Label();
		this._txt_num5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "8";
		t.textColor = 0xb16021;
		t.verticalCenter = 3;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796a;
		t.height = 4;
		t.right = 0;
		t.width = 600;
		t.y = 158;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.right = 0;
		t.width = 600;
		t.y = 318;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.right = 0;
		t.width = 600;
		t.y = 478;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 160;
		t.right = 0;
		t.width = 600;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._gp_btn1_i(),this._gp_btn2_i(),this._gp_btn3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(2,31,2,29);
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 0;
		t.x = 198;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(2,31,2,29);
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._gp_btn1_i = function () {
		var t = new eui.Group();
		this._gp_btn1 = t;
		t.height = 160;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn2_i = function () {
		var t = new eui.Group();
		this._gp_btn2 = t;
		t.height = 160;
		t.width = 200;
		t.x = 200;
		t.y = 0;
		t.elementsContent = [this._Label4_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn3_i = function () {
		var t = new eui.Group();
		this._gp_btn3 = t;
		t.height = 160;
		t.width = 200;
		t.x = 400;
		t.y = 0;
		t.elementsContent = [this._Label5_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "3";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 160;
		t.right = 0;
		t.width = 600;
		t.y = 160;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._gp_btn4_i(),this._gp_btn5_i(),this._gp_btn6_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(2,31,2,29);
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 0;
		t.x = 198;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(2,31,2,29);
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._gp_btn4_i = function () {
		var t = new eui.Group();
		this._gp_btn4 = t;
		t.height = 160;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label6_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "4";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn5_i = function () {
		var t = new eui.Group();
		this._gp_btn5 = t;
		t.height = 160;
		t.width = 200;
		t.x = 200;
		t.y = 0;
		t.elementsContent = [this._Label7_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "5";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn6_i = function () {
		var t = new eui.Group();
		this._gp_btn6 = t;
		t.height = 160;
		t.width = 200;
		t.x = 400;
		t.y = 0;
		t.elementsContent = [this._Label8_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "6";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 160;
		t.right = 0;
		t.width = 600;
		t.y = 320;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._gp_btn7_i(),this._gp_btn8_i(),this._gp_btn9_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(2,31,2,29);
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 0;
		t.x = 198;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(2,31,2,29);
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._gp_btn7_i = function () {
		var t = new eui.Group();
		this._gp_btn7 = t;
		t.height = 160;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label9_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "7";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn8_i = function () {
		var t = new eui.Group();
		this._gp_btn8 = t;
		t.height = 160;
		t.width = 200;
		t.x = 200;
		t.y = 0;
		t.elementsContent = [this._Label10_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "8";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn9_i = function () {
		var t = new eui.Group();
		this._gp_btn9 = t;
		t.height = 160;
		t.width = 200;
		t.x = 400;
		t.y = 0;
		t.elementsContent = [this._Label11_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 160;
		t.right = 0;
		t.width = 600;
		t.y = 480;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._gp_btn_delete_i(),this._gp_btn0_i(),this._gp_btn_empty_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(2,31,2,29);
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 0;
		t.x = 198;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(2,31,2,29);
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._gp_btn_delete_i = function () {
		var t = new eui.Group();
		this._gp_btn_delete = t;
		t.height = 160;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label12_i()];
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "删除";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn0_i = function () {
		var t = new eui.Group();
		this._gp_btn0 = t;
		t.height = 160;
		t.width = 200;
		t.x = 200;
		t.y = 0;
		t.elementsContent = [this._Label13_i()];
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn_empty_i = function () {
		var t = new eui.Group();
		this._gp_btn_empty = t;
		t.height = 160;
		t.width = 200;
		t.x = 400;
		t.y = 0;
		t.elementsContent = [this._Label14_i()];
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "清空";
		t.verticalCenter = 0;
		return t;
	};
	return joinLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/findItem.exml'] = window.findItem = (function (_super) {
	__extends(findItem, _super);
	function findItem() {
		_super.call(this);
		this.skinParts = ["_img_icon","_txt_pwd","_txt_time","_txt_endtime","_gp_btn"];
		
		this.height = 90;
		this.width = 1080;
		this.elementsContent = [this._img_icon_i(),this._txt_pwd_i(),this._Group1_i(),this._gp_btn_i()];
	}
	var _proto = findItem.prototype;

	_proto._img_icon_i = function () {
		var t = new eui.Image();
		this._img_icon = t;
		t.height = 60;
		t.source = "pph_hall_json.hall_download";
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 9;
		return t;
	};
	_proto._txt_pwd_i = function () {
		var t = new eui.Label();
		this._txt_pwd = t;
		t.size = 25;
		t.text = "港式五张(房号:685246)";
		t.x = 79;
		t.y = 13.52;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 79;
		t.y = 51.64;
		t.elementsContent = [this._txt_time_i(),this._txt_endtime_i()];
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.size = 22;
		t.text = "2018-02-10 5分钟 20局";
		t.textColor = 0x47bd9f;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_endtime_i = function () {
		var t = new eui.Label();
		this._txt_endtime = t;
		t.size = 22;
		t.text = "18:00 结束";
		t.textColor = 0xb16021;
		t.x = 663.13;
		t.y = 0;
		return t;
	};
	_proto._gp_btn_i = function () {
		var t = new eui.Group();
		this._gp_btn = t;
		t.height = 65;
		t.right = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.width = 180;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2CAB4B;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 180;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "进入房间";
		t.verticalCenter = 0;
		return t;
	};
	return findItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/findLayer.exml'] = window.findLayer = (function (_super) {
	__extends(findLayer, _super);
	function findLayer() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_gp_backhall","_gp_kaifang","_gp_btn_joinroom","_gp_join"];
		
		this.height = 536;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this._Group1_i(),this._gp_kaifang_i(),this._gp_join_i()];
	}
	var _proto = findLayer.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 536;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 80;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "我的房间";
		t.verticalCenter = 0;
		t.x = 68.16;
		return t;
	};
	_proto._gp_kaifang_i = function () {
		var t = new eui.Group();
		this._gp_kaifang = t;
		t.x = 315;
		t.y = 125.38;
		t.elementsContent = [this._gp_backhall_i(),this._Label3_i()];
		return t;
	};
	_proto._gp_backhall_i = function () {
		var t = new eui.Group();
		this._gp_backhall = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2CAB4B;
		t.height = 70;
		t.horizontalCenter = 0;
		t.strokeColor = 0x7A7A7A;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "我要开房";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "创建新的房间，邀请好友一起来浪～";
		t.textColor = 0xc6420a;
		t.x = 42;
		t.y = 89.42;
		return t;
	};
	_proto._gp_join_i = function () {
		var t = new eui.Group();
		this._gp_join = t;
		t.x = 0;
		t.y = 282.74;
		t.elementsContent = [this._Group2_i(),this._gp_btn_joinroom_i(),this._Label6_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 80;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "加入房间";
		t.verticalCenter = 0;
		t.x = 68.16;
		return t;
	};
	_proto._gp_btn_joinroom_i = function () {
		var t = new eui.Group();
		this._gp_btn_joinroom = t;
		t.x = 315;
		t.y = 109.34;
		t.elementsContent = [this._Rect4_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2CAB4B;
		t.height = 70;
		t.horizontalCenter = 0;
		t.strokeColor = 0x7A7A7A;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "房号加入";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 23;
		t.text = "输入房间号码，加入好友的牌局～";
		t.textColor = 0xC6420A;
		t.x = 368;
		t.y = 198.76;
		return t;
	};
	return findLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/hallMainLayer.exml'] = window.hallMainLayer = (function (_super) {
	__extends(hallMainLayer, _super);
	var hallMainLayer$Skin35 = 	(function (_super) {
		__extends(hallMainLayer$Skin35, _super);
		function hallMainLayer$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_addzuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin35;
	})(eui.Skin);

	var hallMainLayer$Skin36 = 	(function (_super) {
		__extends(hallMainLayer$Skin36, _super);
		function hallMainLayer$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_download";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin36;
	})(eui.Skin);

	var hallMainLayer$Skin37 = 	(function (_super) {
		__extends(hallMainLayer$Skin37, _super);
		function hallMainLayer$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_xiangshan0_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin37;
	})(eui.Skin);

	var hallMainLayer$Skin38 = 	(function (_super) {
		__extends(hallMainLayer$Skin38, _super);
		function hallMainLayer$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_niuniu_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin38;
	})(eui.Skin);

	var hallMainLayer$Skin39 = 	(function (_super) {
		__extends(hallMainLayer$Skin39, _super);
		function hallMainLayer$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_golden2d_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin39;
	})(eui.Skin);

	var hallMainLayer$Skin40 = 	(function (_super) {
		__extends(hallMainLayer$Skin40, _super);
		function hallMainLayer$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_thirteenp_small";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin40;
	})(eui.Skin);

	var hallMainLayer$Skin41 = 	(function (_super) {
		__extends(hallMainLayer$Skin41, _super);
		function hallMainLayer$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_xiangshan1_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin41;
	})(eui.Skin);

	var hallMainLayer$Skin42 = 	(function (_super) {
		__extends(hallMainLayer$Skin42, _super);
		function hallMainLayer$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_niunine_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin42;
	})(eui.Skin);

	var hallMainLayer$Skin43 = 	(function (_super) {
		__extends(hallMainLayer$Skin43, _super);
		function hallMainLayer$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_golden2d_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin43;
	})(eui.Skin);

	var hallMainLayer$Skin44 = 	(function (_super) {
		__extends(hallMainLayer$Skin44, _super);
		function hallMainLayer$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallMainLayer$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_thirteenpph_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hallMainLayer$Skin44;
	})(eui.Skin);

	function hallMainLayer() {
		_super.call(this);
		this.skinParts = ["_rect_topbg","_gp_daili","_gp_huodong","_gp_qiandao","_gp_needmove0","_label_username","_img_head","_label_zuanNum","halad0","_gp_addzuan","_gp_needmove1","topGroup","_rect_lababg","m_notice","_scro_notice","_rect_midbg","_btn_game_showhand","_btn_game_showhand7","_btn_game_showhand3","_btn_game_showhand0","_btn_game_showhand1","_btn_game_showhand2","_btn_game_showhand4","_btn_game_showhand5","_btn_game_showhand6"];
		
		this.height = 496;
		this.width = 1080;
		this.elementsContent = [this._Group19_i()];
	}
	var _proto = hallMainLayer.prototype;

	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = -0.33;
		t.y = 0;
		t.elementsContent = [this.topGroup_i(),this._Group18_i()];
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1080;
		t.x = 0.33;
		t.y = 0;
		t.elementsContent = [this._rect_topbg_i(),this._gp_needmove0_i(),this._gp_needmove1_i()];
		return t;
	};
	_proto._rect_topbg_i = function () {
		var t = new eui.Rect();
		this._rect_topbg = t;
		t.fillColor = 0x0F2F2D;
		t.height = 100;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_needmove0_i = function () {
		var t = new eui.Group();
		this._gp_needmove0 = t;
		t.height = 65;
		t.right = 21;
		t.width = 480;
		t.y = 18;
		t.elementsContent = [this._gp_daili_i(),this._gp_huodong_i(),this._gp_qiandao_i()];
		return t;
	};
	_proto._gp_daili_i = function () {
		var t = new eui.Group();
		this._gp_daili = t;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2CAB4B;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 170;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "代理咨询";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_huodong_i = function () {
		var t = new eui.Group();
		this._gp_huodong = t;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 200;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2CAB4B;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "活动";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_qiandao_i = function () {
		var t = new eui.Group();
		this._gp_qiandao = t;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 350;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xEC7636;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "签到";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_needmove1_i = function () {
		var t = new eui.Group();
		this._gp_needmove1 = t;
		t.left = 16;
		t.y = 15;
		t.elementsContent = [this._label_username_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._label_username_i = function () {
		var t = new eui.Label();
		this._label_username = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "smile先生";
		t.x = 96.69;
		t.y = 1.92;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._img_head_i()];
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 4;
		t.source = "common_image_game_json.public_head_default";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 94;
		t.y = 34;
		t.elementsContent = [this._label_zuanNum_i(),this._gp_addzuan_i()];
		return t;
	};
	_proto._label_zuanNum_i = function () {
		var t = new eui.Label();
		this._label_zuanNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "088888";
		t.textAlign = "left";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._gp_addzuan_i = function () {
		var t = new eui.Group();
		this._gp_addzuan = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 98;
		t.elementsContent = [this.halad0_i(),this._Image1_i()];
		return t;
	};
	_proto.halad0_i = function () {
		var t = new eui.Button();
		this.halad0 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 38;
		t.y = 20;
		t.skinName = hallMainLayer$Skin35;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "pph_hall_json.hall_zuan";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 99;
		t.elementsContent = [this._Group4_i(),this._Group17_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = -0.5;
		t.elementsContent = [this._rect_lababg_i(),this._Image2_i(),this._scro_notice_i()];
		return t;
	};
	_proto._rect_lababg_i = function () {
		var t = new eui.Rect();
		this._rect_lababg = t;
		t.fillColor = 0x002924;
		t.height = 50;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 20;
		t.source = "pph_hall_json.hall_laba";
		t.verticalCenter = 0;
		return t;
	};
	_proto._scro_notice_i = function () {
		var t = new eui.Scroller();
		this._scro_notice = t;
		t.anchorOffsetX = 0;
		t.height = 32;
		t.horizontalCenter = 28;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1010;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
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
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 46.16;
		t.elementsContent = [this._rect_midbg_i(),this._Group16_i()];
		return t;
	};
	_proto._rect_midbg_i = function () {
		var t = new eui.Rect();
		this._rect_midbg = t;
		t.fillColor = 0x0F2F2D;
		t.height = 350;
		t.verticalCenter = 0;
		t.width = 1080;
		t.x = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -0.5;
		t.elementsContent = [this._Group5_i(),this._Group10_i(),this._Group15_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.x = 0;
		t.elementsContent = [this._btn_game_showhand_i(),this._Label4_i()];
		return t;
	};
	_proto._btn_game_showhand_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin36;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 43;
		t.text = "港式五张";
		t.textColor = 0x47bd9f;
		t.y = 307;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 330;
		t.y = 0;
		t.elementsContent = [this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand7_i(),this._Label5_i()];
		return t;
	};
	_proto._btn_game_showhand7_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand7 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin37;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "象山麻将";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 180;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand3_i(),this._Label6_i()];
		return t;
	};
	_proto._btn_game_showhand3_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand3 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin38;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "疯狂拼十";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 360;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand0_i(),this._Label7_i()];
		return t;
	};
	_proto._btn_game_showhand0_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand0 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin39;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "三张牌";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 540;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand1_i(),this._Label8_i()];
		return t;
	};
	_proto._btn_game_showhand1_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand1 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin40;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "闯三关";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 330;
		t.y = 189.92;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand2_i(),this._Label9_i()];
		return t;
	};
	_proto._btn_game_showhand2_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand2 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin41;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "西周麻将";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 180;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand4_i(),this._Label10_i()];
		return t;
	};
	_proto._btn_game_showhand4_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand4 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin42;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "九人拼十";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 360;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand5_i(),this._Label11_i()];
		return t;
	};
	_proto._btn_game_showhand5_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand5 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin43;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "八人三张";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 540;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand6_i(),this._Label12_i()];
		return t;
	};
	_proto._btn_game_showhand6_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand6 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = hallMainLayer$Skin44;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "大菠萝";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	return hallMainLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/huanleHall.exml'] = window.huanleHall = (function (_super) {
	__extends(huanleHall, _super);
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
			t.source = "pph_hall_json.hall_addzuan";
			t.percentWidth = 100;
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
			t.source = "pph_hall_json.hall_download";
			t.percentWidth = 100;
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
			t.source = "pph_hall_json.hall_gamegroup_xiangshan0_icon";
			t.percentWidth = 100;
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
			t.source = "pph_hall_json.hall_gamegroup_niuniu_icon";
			t.percentWidth = 100;
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
			t.source = "pph_hall_json.hall_gamegroup_golden2d_icon";
			t.percentWidth = 100;
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
			t.source = "pph_hall_json.hall_gamegroup_thirteenp_small";
			t.percentWidth = 100;
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
			t.source = "pph_hall_json.hall_gamegroup_xiangshan1_icon";
			t.percentWidth = 100;
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

	var huanleHall$Skin52 = 	(function (_super) {
		__extends(huanleHall$Skin52, _super);
		function huanleHall$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_niunine_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin52;
	})(eui.Skin);

	var huanleHall$Skin53 = 	(function (_super) {
		__extends(huanleHall$Skin53, _super);
		function huanleHall$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_golden2d_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin53;
	})(eui.Skin);

	var huanleHall$Skin54 = 	(function (_super) {
		__extends(huanleHall$Skin54, _super);
		function huanleHall$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = huanleHall$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_gamegroup_thirteenpph_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return huanleHall$Skin54;
	})(eui.Skin);

	function huanleHall() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_label_username","_img_head","_label_zuanNum","halad","topGroup","m_notice","_btn_game_showhand","_btn_game_showhand3","_btn_game_showhand0","_btn_game_showhand1","_btn_game_showhand2","_btn_game_showhand4","_btn_game_showhand5","_btn_game_showhand6","_btn_game_showhand7","_scrogp_main","_scro_main","_rect_jiangkbg","m_notice0","_gp_jiangkang","_rect_botbg","_rect_botxian","_img_hall_guang","_gp_hall","_img_find_guang","_gp_find","_img_replay_guang","_gp_replay","_img_mine_guang","_gp_mine","bottomGroup","_txt_notice","_gp_notice"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this._scro_main_i(),this._gp_jiangkang_i(),this.bottomGroup_i(),this._gp_notice_i()];
	}
	var _proto = huanleHall.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 640;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._scro_main_i = function () {
		var t = new eui.Scroller();
		this._scro_main = t;
		t.height = 536;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.viewport = this._scrogp_main_i();
		return t;
	};
	_proto._scrogp_main_i = function () {
		var t = new eui.Group();
		this._scrogp_main = t;
		t.elementsContent = [this._Group23_i()];
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -0.33;
		t.y = 0;
		t.elementsContent = [this.topGroup_i(),this._Group22_i()];
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0.33;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._label_username_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group6_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0f2f2d;
		t.height = 100;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._label_username_i = function () {
		var t = new eui.Label();
		this._label_username = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "寒松网络";
		t.x = 112.69;
		t.y = 16.92;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 16;
		t.elementsContent = [this._img_head_i()];
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 4;
		t.source = "common_image_game_json.public_head_default";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.width = 170;
		t.x = 579.23;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2cab4b;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 170;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "代理咨询";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.width = 130;
		t.x = 779.23;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2CAB4B;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "活动";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.width = 130;
		t.x = 929.23;
		t.elementsContent = [this._Rect4_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xec7636;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "签到";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 110;
		t.y = 49;
		t.elementsContent = [this._label_zuanNum_i(),this._Group5_i()];
		return t;
	};
	_proto._label_zuanNum_i = function () {
		var t = new eui.Label();
		this._label_zuanNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "088888";
		t.textAlign = "left";
		t.textColor = 0xb16021;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 98;
		t.elementsContent = [this.halad_i(),this._Image1_i()];
		return t;
	};
	_proto.halad_i = function () {
		var t = new eui.Button();
		this.halad = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 38;
		t.y = 20;
		t.skinName = huanleHall$Skin45;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "pph_hall_json.hall_zuan";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 99;
		t.elementsContent = [this._Group8_i(),this._Group21_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = -0.5;
		t.elementsContent = [this._Rect5_i(),this._Image2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x002924;
		t.height = 50;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 20;
		t.source = "pph_hall_json.hall_laba";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 32;
		t.horizontalCenter = 28;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1010;
		t.viewport = this._Group7_i();
		return t;
	};
	_proto._Group7_i = function () {
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
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 46.16;
		t.elementsContent = [this._Rect6_i(),this._Group20_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0f2f2d;
		t.height = 350;
		t.verticalCenter = 0;
		t.width = 1080;
		t.x = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -0.5;
		t.elementsContent = [this._Group9_i(),this._Group14_i(),this._Group19_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.x = 0;
		t.elementsContent = [this._btn_game_showhand_i(),this._Label4_i()];
		return t;
	};
	_proto._btn_game_showhand_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin46;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 43;
		t.text = "港式五张";
		t.textColor = 0x47bd9f;
		t.y = 307;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 330;
		t.y = 0;
		t.elementsContent = [this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand3_i(),this._Label5_i()];
		return t;
	};
	_proto._btn_game_showhand3_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand3 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin47;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "象山麻将";
		t.textColor = 0x47bd9f;
		t.y = 140;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 180;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand0_i(),this._Label6_i()];
		return t;
	};
	_proto._btn_game_showhand0_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand0 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin48;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "疯狂拼十";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 360;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand1_i(),this._Label7_i()];
		return t;
	};
	_proto._btn_game_showhand1_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand1 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin49;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "三张牌";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 540;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand2_i(),this._Label8_i()];
		return t;
	};
	_proto._btn_game_showhand2_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand2 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin50;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "闯三关";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 330;
		t.y = 189.92;
		t.elementsContent = [this._Group15_i(),this._Group16_i(),this._Group17_i(),this._Group18_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand4_i(),this._Label9_i()];
		return t;
	};
	_proto._btn_game_showhand4_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand4 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin51;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "西周麻将";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 180;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand5_i(),this._Label10_i()];
		return t;
	};
	_proto._btn_game_showhand5_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand5 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin52;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "九人拼十";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 360;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand6_i(),this._Label11_i()];
		return t;
	};
	_proto._btn_game_showhand6_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand6 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin53;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "八人三张";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 540;
		t.y = 0;
		t.elementsContent = [this._btn_game_showhand7_i(),this._Label12_i()];
		return t;
	};
	_proto._btn_game_showhand7_i = function () {
		var t = new eui.Button();
		this._btn_game_showhand7 = t;
		t.height = 130;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 130;
		t.x = 0;
		t.y = 0;
		t.skinName = huanleHall$Skin54;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "大菠萝";
		t.textColor = 0x47BD9F;
		t.y = 140;
		return t;
	};
	_proto._gp_jiangkang_i = function () {
		var t = new eui.Group();
		this._gp_jiangkang = t;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1080;
		t.x = 0;
		t.y = 497.43;
		t.elementsContent = [this._rect_jiangkbg_i(),this.m_notice0_i()];
		return t;
	};
	_proto._rect_jiangkbg_i = function () {
		var t = new eui.Rect();
		this._rect_jiangkbg = t;
		t.fillColor = 0x002924;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1900;
		return t;
	};
	_proto.m_notice0_i = function () {
		var t = new eui.Label();
		this.m_notice0 = t;
		t.horizontalCenter = 0;
		t.size = 19;
		t.text = "抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活";
		t.textColor = 0x8c8c8c;
		t.verticalCenter = 0;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.height = 102;
		t.width = 1080;
		t.x = 0;
		t.y = 536.4;
		t.elementsContent = [this._rect_botbg_i(),this._rect_botxian_i(),this._gp_hall_i(),this._gp_find_i(),this._gp_replay_i(),this._gp_mine_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._rect_botbg_i = function () {
		var t = new eui.Rect();
		this._rect_botbg = t;
		t.fillColor = 0x142528;
		t.height = 102;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1900;
		return t;
	};
	_proto._rect_botxian_i = function () {
		var t = new eui.Rect();
		this._rect_botxian = t;
		t.fillColor = 0x37796a;
		t.height = 5;
		t.horizontalCenter = 0;
		t.width = 1900;
		t.y = -1.52;
		return t;
	};
	_proto._gp_hall_i = function () {
		var t = new eui.Group();
		this._gp_hall = t;
		t.height = 50;
		t.width = 270;
		t.x = 0;
		t.y = 17.88;
		t.elementsContent = [this._img_hall_guang_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._img_hall_guang_i = function () {
		var t = new eui.Image();
		this._img_hall_guang = t;
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_btn_choosen";
		t.y = 30.7;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_dating_img";
		t.y = -5.52;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_dating_txt";
		t.y = 49.9;
		return t;
	};
	_proto._gp_find_i = function () {
		var t = new eui.Group();
		this._gp_find = t;
		t.height = 50;
		t.width = 270;
		t.x = 270;
		t.y = 17.88;
		t.elementsContent = [this._img_find_guang_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._img_find_guang_i = function () {
		var t = new eui.Image();
		this._img_find_guang = t;
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_btn_choosen";
		t.y = 30.7;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_find_img";
		t.y = -5.52;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_fund_txt";
		t.y = 49.9;
		return t;
	};
	_proto._gp_replay_i = function () {
		var t = new eui.Group();
		this._gp_replay = t;
		t.height = 50;
		t.width = 270;
		t.x = 540;
		t.y = 17.88;
		t.elementsContent = [this._img_replay_guang_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._img_replay_guang_i = function () {
		var t = new eui.Image();
		this._img_replay_guang = t;
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_btn_choosen";
		t.y = 30.7;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "pph_hall_json.hall_replay_img";
		t.y = -5.52;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_replay_txt";
		t.y = 49.9;
		return t;
	};
	_proto._gp_mine_i = function () {
		var t = new eui.Group();
		this._gp_mine = t;
		t.height = 50;
		t.width = 270;
		t.x = 810;
		t.y = 17.88;
		t.elementsContent = [this._img_mine_guang_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._img_mine_guang_i = function () {
		var t = new eui.Image();
		this._img_mine_guang = t;
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_btn_choosen";
		t.y = 30.7;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "pph_hall_json.hall_wode_img";
		t.y = -5.52;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pph_hall_json.hall_wode_txt";
		t.y = 49.9;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 4;
		t.x = 267;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 4;
		t.x = 537;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_jiange";
		t.verticalCenter = 4;
		t.x = 807;
		return t;
	};
	_proto._gp_notice_i = function () {
		var t = new eui.Group();
		this._gp_notice = t;
		t.x = 140;
		t.y = 0;
		t.elementsContent = [this._Rect7_i(),this._txt_notice_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0f2f2d;
		t.height = 60;
		t.strokeColor = 0x37796a;
		t.strokeWeight = 1;
		t.width = 800;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_notice_i = function () {
		var t = new eui.Label();
		this._txt_notice = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "联系客服获取信息";
		t.textColor = 0x37796a;
		t.verticalCenter = 0;
		return t;
	};
	return huanleHall;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/playerCenter.exml'] = window.playerCenter = (function (_super) {
	__extends(playerCenter, _super);
	var playerCenter$Skin55 = 	(function (_super) {
		__extends(playerCenter$Skin55, _super);
		function playerCenter$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = playerCenter$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_addzuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return playerCenter$Skin55;
	})(eui.Skin);

	function playerCenter() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_label_userid","_label_username","_img_head","_label_zuanNum","halad0","_gp_addzuan","topGroup","_gp_tuiguang","_gp_clear","_gp_more"];
		
		this.height = 536;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this.topGroup_i(),this._Group3_i()];
	}
	var _proto = playerCenter.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 536;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0.33;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._label_userid_i(),this._label_username_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 100;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._label_userid_i = function () {
		var t = new eui.Label();
		this._label_userid = t;
		t.size = 26;
		t.text = "ID:000000";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.x = 301.91;
		t.y = 56;
		return t;
	};
	_proto._label_username_i = function () {
		var t = new eui.Label();
		this._label_username = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "smile先生";
		t.x = 112.69;
		t.y = 16.92;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 24;
		t.elementsContent = [this._img_head_i()];
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "common_image_game_json.public_head_default";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 110;
		t.y = 49;
		t.elementsContent = [this._label_zuanNum_i(),this._gp_addzuan_i()];
		return t;
	};
	_proto._label_zuanNum_i = function () {
		var t = new eui.Label();
		this._label_zuanNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "088888";
		t.textAlign = "left";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._gp_addzuan_i = function () {
		var t = new eui.Group();
		this._gp_addzuan = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 98;
		t.elementsContent = [this.halad0_i(),this._Image1_i()];
		return t;
	};
	_proto.halad0_i = function () {
		var t = new eui.Button();
		this.halad0 = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 38;
		t.y = 20;
		t.skinName = playerCenter$Skin55;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "pph_hall_json.hall_zuan";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 1080;
		t.x = 0;
		t.y = 120;
		t.elementsContent = [this._Rect2_i(),this._gp_tuiguang_i(),this._gp_clear_i(),this._gp_more_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 390;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_tuiguang_i = function () {
		var t = new eui.Group();
		this._gp_tuiguang = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 98;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "推广后台";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.right = 15;
		t.size = 20;
		t.text = "点击成为推广员，尊享超值返利";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_clear_i = function () {
		var t = new eui.Group();
		this._gp_clear = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 100;
		t.elementsContent = [this._Rect4_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 98;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "清除缓存";
		t.textColor = 0x47bd9f;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.right = 15;
		t.size = 20;
		t.text = "清除后，下次进入游戏需要重新授权登录";
		t.textColor = 0x47bd9f;
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_more_i = function () {
		var t = new eui.Group();
		this._gp_more = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 200;
		t.elementsContent = [this._Rect5_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 98;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "更多特权";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.right = 15;
		t.size = 20;
		t.text = "更详细的代理教程，让你返利返不停";
		t.verticalCenter = 0;
		return t;
	};
	return playerCenter;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/qiandao.exml'] = window.qiandao = (function (_super) {
	__extends(qiandao, _super);
	function qiandao() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_gp_backhall","_rect_qian","_gp_qiandao","_txt_tishi","_rect_itembg0","_txt_continue0","_txt_award0","_img_isqian0","_rect_itembg1","_txt_continue1","_txt_award1","_img_isqian1","_rect_itembg2","_txt_continue2","_txt_award2","_img_isqian2","_rect_itembg3","_txt_continue3","_txt_award3","_img_isqian3","_rect_itembg4","_txt_continue4","_txt_award4","_img_isqian4","_rect_itembg5","_txt_continue5","_txt_award5","_img_isqian5","_rect_itembg6","_txt_continue6","_txt_award6","_img_isqian6"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this._Group1_i(),this._Label3_i(),this._Group2_i(),this._Group6_i(),this._Group10_i(),this._Group12_i()];
	}
	var _proto = qiandao.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 640;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 550.73;
		t.elementsContent = [this._gp_backhall_i(),this._gp_qiandao_i()];
		return t;
	};
	_proto._gp_backhall_i = function () {
		var t = new eui.Group();
		this._gp_backhall = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0xEC7636;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "返回大厅";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_qiandao_i = function () {
		var t = new eui.Group();
		this._gp_qiandao = t;
		t.verticalCenter = 0;
		t.x = 500;
		t.y = 10;
		t.elementsContent = [this._rect_qian_i(),this._Label2_i()];
		return t;
	};
	_proto._rect_qian_i = function () {
		var t = new eui.Rect();
		this._rect_qian = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2cab4b;
		t.height = 70;
		t.horizontalCenter = 0;
		t.strokeColor = 0x7a7a7a;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "签到";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "连续签到，奖励更丰厚";
		t.textAlign = "left";
		t.y = 17;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 76;
		t.elementsContent = [this._Rect2_i(),this._txt_tishi_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0f2f2d;
		t.height = 50;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_tishi_i = function () {
		var t = new eui.Label();
		this._txt_tishi = t;
		t.horizontalCenter = 0;
		t.text = "连续签到1天，今天可以领取50钻石";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 165;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_itembg0_i(),this._txt_continue0_i(),this._txt_award0_i(),this._Image1_i(),this._img_isqian0_i()];
		return t;
	};
	_proto._rect_itembg0_i = function () {
		var t = new eui.Rect();
		this._rect_itembg0 = t;
		t.fillColor = 0x36a297;
		t.height = 90;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_continue0_i = function () {
		var t = new eui.Label();
		this._txt_continue0 = t;
		t.size = 20;
		t.text = "第一天";
		t.textColor = 0x73bda8;
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto._txt_award0_i = function () {
		var t = new eui.Label();
		this._txt_award0 = t;
		t.text = "50";
		t.textColor = 0x73bda8;
		t.verticalCenter = 6;
		t.x = 106.62;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0.5;
		t.x = 174;
		return t;
	};
	_proto._img_isqian0_i = function () {
		var t = new eui.Image();
		this._img_isqian0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_dj";
		t.verticalCenter = 0.5;
		t.x = 230;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 345;
		t.y = 0;
		t.elementsContent = [this._rect_itembg1_i(),this._txt_continue1_i(),this._txt_award1_i(),this._Image2_i(),this._img_isqian1_i()];
		return t;
	};
	_proto._rect_itembg1_i = function () {
		var t = new eui.Rect();
		this._rect_itembg1 = t;
		t.fillColor = 0x0f2f2d;
		t.height = 90;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_continue1_i = function () {
		var t = new eui.Label();
		this._txt_continue1 = t;
		t.size = 20;
		t.text = "第二天";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto._txt_award1_i = function () {
		var t = new eui.Label();
		this._txt_award1 = t;
		t.text = "50";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 6;
		t.x = 108;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0.5;
		t.x = 174;
		return t;
	};
	_proto._img_isqian1_i = function () {
		var t = new eui.Image();
		this._img_isqian1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_dj";
		t.verticalCenter = 0.5;
		t.x = 230;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 690;
		t.y = 0;
		t.elementsContent = [this._rect_itembg2_i(),this._txt_continue2_i(),this._txt_award2_i(),this._Image3_i(),this._img_isqian2_i()];
		return t;
	};
	_proto._rect_itembg2_i = function () {
		var t = new eui.Rect();
		this._rect_itembg2 = t;
		t.fillColor = 0x0F2F2D;
		t.height = 90;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_continue2_i = function () {
		var t = new eui.Label();
		this._txt_continue2 = t;
		t.size = 20;
		t.text = "第三天";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto._txt_award2_i = function () {
		var t = new eui.Label();
		this._txt_award2 = t;
		t.text = "50";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 6;
		t.x = 108;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0.5;
		t.x = 174;
		return t;
	};
	_proto._img_isqian2_i = function () {
		var t = new eui.Image();
		this._img_isqian2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_dj";
		t.verticalCenter = 0.5;
		t.x = 230;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 285;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_itembg3_i(),this._txt_continue3_i(),this._txt_award3_i(),this._Image4_i(),this._img_isqian3_i()];
		return t;
	};
	_proto._rect_itembg3_i = function () {
		var t = new eui.Rect();
		this._rect_itembg3 = t;
		t.fillColor = 0x0F2F2D;
		t.height = 90;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_continue3_i = function () {
		var t = new eui.Label();
		this._txt_continue3 = t;
		t.size = 20;
		t.text = "第四天";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto._txt_award3_i = function () {
		var t = new eui.Label();
		this._txt_award3 = t;
		t.text = "50";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 6;
		t.x = 108;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0.5;
		t.x = 174;
		return t;
	};
	_proto._img_isqian3_i = function () {
		var t = new eui.Image();
		this._img_isqian3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_dj";
		t.verticalCenter = 0.5;
		t.x = 230;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 345;
		t.y = 0;
		t.elementsContent = [this._rect_itembg4_i(),this._txt_continue4_i(),this._txt_award4_i(),this._Image5_i(),this._img_isqian4_i()];
		return t;
	};
	_proto._rect_itembg4_i = function () {
		var t = new eui.Rect();
		this._rect_itembg4 = t;
		t.fillColor = 0x0F2F2D;
		t.height = 90;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_continue4_i = function () {
		var t = new eui.Label();
		this._txt_continue4 = t;
		t.size = 20;
		t.text = "第五天";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto._txt_award4_i = function () {
		var t = new eui.Label();
		this._txt_award4 = t;
		t.text = "50";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 6;
		t.x = 108;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0.5;
		t.x = 174;
		return t;
	};
	_proto._img_isqian4_i = function () {
		var t = new eui.Image();
		this._img_isqian4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_dj";
		t.verticalCenter = 0.5;
		t.x = 230;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 690;
		t.y = 0;
		t.elementsContent = [this._rect_itembg5_i(),this._txt_continue5_i(),this._txt_award5_i(),this._Image6_i(),this._img_isqian5_i()];
		return t;
	};
	_proto._rect_itembg5_i = function () {
		var t = new eui.Rect();
		this._rect_itembg5 = t;
		t.fillColor = 0x0F2F2D;
		t.height = 90;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_continue5_i = function () {
		var t = new eui.Label();
		this._txt_continue5 = t;
		t.size = 20;
		t.text = "第六天";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto._txt_award5_i = function () {
		var t = new eui.Label();
		this._txt_award5 = t;
		t.text = "50";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 6;
		t.x = 108;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0.5;
		t.x = 174;
		return t;
	};
	_proto._img_isqian5_i = function () {
		var t = new eui.Image();
		this._img_isqian5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_dj";
		t.verticalCenter = 0.5;
		t.x = 230;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 1020;
		t.y = 405;
		t.elementsContent = [this._Group11_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_itembg6_i(),this._txt_continue6_i(),this._txt_award6_i(),this._Image7_i(),this._img_isqian6_i()];
		return t;
	};
	_proto._rect_itembg6_i = function () {
		var t = new eui.Rect();
		this._rect_itembg6 = t;
		t.fillColor = 0x0F2F2D;
		t.height = 90;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_continue6_i = function () {
		var t = new eui.Label();
		this._txt_continue6 = t;
		t.size = 20;
		t.text = "第七天";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto._txt_award6_i = function () {
		var t = new eui.Label();
		this._txt_award6 = t;
		t.text = "50";
		t.textColor = 0x73BDA8;
		t.verticalCenter = 6;
		t.x = 108;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0.5;
		t.x = 174;
		return t;
	};
	_proto._img_isqian6_i = function () {
		var t = new eui.Image();
		this._img_isqian6 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_hall_json.hall_dj";
		t.verticalCenter = 0.5;
		t.x = 230;
		return t;
	};
	return qiandao;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/shop.exml'] = window.shop = (function (_super) {
	__extends(shop, _super);
	var shop$Skin56 = 	(function (_super) {
		__extends(shop$Skin56, _super);
		function shop$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin56;
	})(eui.Skin);

	var shop$Skin57 = 	(function (_super) {
		__extends(shop$Skin57, _super);
		function shop$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin57;
	})(eui.Skin);

	var shop$Skin58 = 	(function (_super) {
		__extends(shop$Skin58, _super);
		function shop$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin58;
	})(eui.Skin);

	var shop$Skin59 = 	(function (_super) {
		__extends(shop$Skin59, _super);
		function shop$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin59;
	})(eui.Skin);

	var shop$Skin60 = 	(function (_super) {
		__extends(shop$Skin60, _super);
		function shop$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin60;
	})(eui.Skin);

	var shop$Skin61 = 	(function (_super) {
		__extends(shop$Skin61, _super);
		function shop$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin61;
	})(eui.Skin);

	var shop$Skin62 = 	(function (_super) {
		__extends(shop$Skin62, _super);
		function shop$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin62;
	})(eui.Skin);

	var shop$Skin63 = 	(function (_super) {
		__extends(shop$Skin63, _super);
		function shop$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pph_hall_json.hall_danxuan_dian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shop$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_hall_json.hall_danxuan_kuang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin63;
	})(eui.Skin);

	function shop() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_gp_daichong","empty","_gp_backhall","_gp_btn_queding","_txt_goods_diamonds0","_img_song0","_img_chong0","_txt_goods_price_chong0","_txt_goods_award0","_rb_choose0","_txt_price0","_gp_goods0","_txt_goods_diamonds1","_img_song1","_img_chong1","_txt_goods_price_chong1","_txt_goods_award1","_rb_choose1","_txt_price1","_gp_goods1","_txt_goods_diamonds2","_img_song2","_img_chong2","_txt_goods_price_chong2","_txt_goods_award2","_rb_choose2","_txt_price2","_gp_goods2","_txt_goods_diamonds3","_img_song3","_img_chong3","_txt_goods_price_chong3","_txt_goods_award3","_rb_choose3","_txt_price3","_gp_goods3","_gp_goodslist","_gp_fanhui","_gp_btn_qddc","_gp_sousuo","_txt_uid","_label_userid","_label_userid0","_label_zuan","_label_username","_img_head","_txt_goods_diamonds4","_img_song4","_img_chong4","_txt_goods_price_chong4","_txt_goods_award4","_rb_choose4","_txt_price4","_gp_goods4","_txt_goods_diamonds5","_img_song5","_img_chong5","_txt_goods_price_chong5","_txt_goods_award5","_rb_choose5","_txt_price5","_gp_goods5","_txt_goods_diamonds6","_img_song6","_img_chong6","_txt_goods_price_chong6","_txt_goods_award6","_rb_choose6","_txt_price6","_gp_goods6","_txt_goods_diamonds7","_img_song7","_img_chong7","_txt_goods_price_chong7","_txt_goods_award7","_rb_choose7","_txt_price7","_gp_goods7","_gp_player","_gp_daichongui"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this._Label1_i(),this._gp_daichong_i(),this._Rect2_i(),this.empty_i(),this._gp_goodslist_i(),this._gp_daichongui_i()];
	}
	var _proto = shop.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "优惠期间，充值好礼大放送";
		t.textColor = 0xb16021;
		t.y = 12;
		return t;
	};
	_proto._gp_daichong_i = function () {
		var t = new eui.Group();
		this._gp_daichong = t;
		t.horizontalCenter = 404;
		t.verticalCenter = -294;
		t.elementsContent = [this._Rect1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2cab4b;
		t.height = 40;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "钻石代充";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 470;
		t.width = 1080;
		t.x = 0;
		t.y = 58;
		return t;
	};
	_proto.empty_i = function () {
		var t = new eui.Label();
		this.empty = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.lineSpacing = 20;
		t.size = 35;
		t.text = "输入玩家ID后点击搜索可代充指定数量的钻石";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 2;
		t.width = 352;
		return t;
	};
	_proto._gp_goodslist_i = function () {
		var t = new eui.Group();
		this._gp_goodslist = t;
		t.visible = false;
		t.x = 0;
		t.y = 58;
		t.elementsContent = [this._Group1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 65;
		t.y = 470;
		t.elementsContent = [this._gp_backhall_i(),this._gp_btn_queding_i()];
		return t;
	};
	_proto._gp_backhall_i = function () {
		var t = new eui.Group();
		this._gp_backhall = t;
		t.horizontalCenter = -250;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect3_i(),this._Label3_i()];
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
		t.width = 450;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "返回大厅";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn_queding_i = function () {
		var t = new eui.Group();
		this._gp_btn_queding = t;
		t.horizontalCenter = 250;
		t.verticalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect4_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2CAB4B;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确定充值";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 420;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect5_i(),this._gp_goods0_i(),this._gp_goods1_i(),this._gp_goods2_i(),this._gp_goods3_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0f2f2d;
		t.height = 400;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_goods0_i = function () {
		var t = new eui.Group();
		this._gp_goods0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._txt_goods_diamonds0_i(),this._img_song0_i(),this._img_chong0_i(),this._txt_goods_price_chong0_i(),this._txt_goods_award0_i(),this._rb_choose0_i(),this._txt_price0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_goods_diamonds0_i = function () {
		var t = new eui.Label();
		this._txt_goods_diamonds0 = t;
		t.fontFamily = "Arial";
		t.size = 38;
		t.text = "1000钻石";
		t.textColor = 0x47bd9f;
		t.verticalCenter = 0;
		t.x = 116;
		return t;
	};
	_proto._img_song0_i = function () {
		var t = new eui.Image();
		this._img_song0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_song";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 476;
		return t;
	};
	_proto._img_chong0_i = function () {
		var t = new eui.Image();
		this._img_chong0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_chong";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 318;
		return t;
	};
	_proto._txt_goods_price_chong0_i = function () {
		var t = new eui.Label();
		this._txt_goods_price_chong0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "5000";
		t.textColor = 0xb16021;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 398;
		return t;
	};
	_proto._txt_goods_award0_i = function () {
		var t = new eui.Label();
		this._txt_goods_award0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "5000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0.5;
		t.visible = false;
		t.x = 607;
		return t;
	};
	_proto._rb_choose0_i = function () {
		var t = new eui.RadioButton();
		this._rb_choose0 = t;
		t.label = "";
		t.verticalCenter = 3.5;
		t.x = 973;
		t.skinName = shop$Skin56;
		return t;
	};
	_proto._txt_price0_i = function () {
		var t = new eui.Label();
		this._txt_price0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 60;
		t.size = 35;
		t.text = "10元";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._gp_goods1_i = function () {
		var t = new eui.Group();
		this._gp_goods1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 100;
		t.elementsContent = [this._Image2_i(),this._txt_goods_diamonds1_i(),this._img_song1_i(),this._img_chong1_i(),this._txt_goods_price_chong1_i(),this._txt_goods_award1_i(),this._rb_choose1_i(),this._txt_price1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_goods_diamonds1_i = function () {
		var t = new eui.Label();
		this._txt_goods_diamonds1 = t;
		t.fontFamily = "Arial";
		t.size = 38;
		t.text = "5000钻石";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 116;
		return t;
	};
	_proto._img_song1_i = function () {
		var t = new eui.Image();
		this._img_song1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_song";
		t.verticalCenter = 0;
		t.x = 476;
		return t;
	};
	_proto._img_chong1_i = function () {
		var t = new eui.Image();
		this._img_chong1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_chong";
		t.verticalCenter = 0;
		t.x = 318;
		return t;
	};
	_proto._txt_goods_price_chong1_i = function () {
		var t = new eui.Label();
		this._txt_goods_price_chong1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "5000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._txt_goods_award1_i = function () {
		var t = new eui.Label();
		this._txt_goods_award1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "500";
		t.textColor = 0xB16021;
		t.verticalCenter = 0.5;
		t.x = 607;
		return t;
	};
	_proto._rb_choose1_i = function () {
		var t = new eui.RadioButton();
		this._rb_choose1 = t;
		t.label = "";
		t.verticalCenter = 3.5;
		t.x = 973;
		t.skinName = shop$Skin57;
		return t;
	};
	_proto._txt_price1_i = function () {
		var t = new eui.Label();
		this._txt_price1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 60;
		t.size = 35;
		t.text = "50元";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._gp_goods2_i = function () {
		var t = new eui.Group();
		this._gp_goods2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 200;
		t.elementsContent = [this._Image3_i(),this._txt_goods_diamonds2_i(),this._img_song2_i(),this._img_chong2_i(),this._txt_goods_price_chong2_i(),this._txt_goods_award2_i(),this._rb_choose2_i(),this._txt_price2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_manyzuan";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_goods_diamonds2_i = function () {
		var t = new eui.Label();
		this._txt_goods_diamonds2 = t;
		t.fontFamily = "Arial";
		t.size = 38;
		t.text = "10000钻石";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 116;
		return t;
	};
	_proto._img_song2_i = function () {
		var t = new eui.Image();
		this._img_song2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_song";
		t.verticalCenter = 0;
		t.x = 476;
		return t;
	};
	_proto._img_chong2_i = function () {
		var t = new eui.Image();
		this._img_chong2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_chong";
		t.verticalCenter = 0;
		t.x = 318;
		return t;
	};
	_proto._txt_goods_price_chong2_i = function () {
		var t = new eui.Label();
		this._txt_goods_price_chong2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "10000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._txt_goods_award2_i = function () {
		var t = new eui.Label();
		this._txt_goods_award2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "1000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0.5;
		t.x = 607;
		return t;
	};
	_proto._rb_choose2_i = function () {
		var t = new eui.RadioButton();
		this._rb_choose2 = t;
		t.label = "";
		t.verticalCenter = 3.5;
		t.x = 973;
		t.skinName = shop$Skin58;
		return t;
	};
	_proto._txt_price2_i = function () {
		var t = new eui.Label();
		this._txt_price2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 60;
		t.size = 35;
		t.text = "100元";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._gp_goods3_i = function () {
		var t = new eui.Group();
		this._gp_goods3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 300;
		t.elementsContent = [this._Image4_i(),this._txt_goods_diamonds3_i(),this._img_song3_i(),this._img_chong3_i(),this._txt_goods_price_chong3_i(),this._txt_goods_award3_i(),this._rb_choose3_i(),this._txt_price3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_manyzuan";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_goods_diamonds3_i = function () {
		var t = new eui.Label();
		this._txt_goods_diamonds3 = t;
		t.fontFamily = "Arial";
		t.size = 38;
		t.text = "10000钻石";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 116;
		return t;
	};
	_proto._img_song3_i = function () {
		var t = new eui.Image();
		this._img_song3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_song";
		t.verticalCenter = 0;
		t.x = 476;
		return t;
	};
	_proto._img_chong3_i = function () {
		var t = new eui.Image();
		this._img_chong3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_chong";
		t.verticalCenter = 0;
		t.x = 318;
		return t;
	};
	_proto._txt_goods_price_chong3_i = function () {
		var t = new eui.Label();
		this._txt_goods_price_chong3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "10000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._txt_goods_award3_i = function () {
		var t = new eui.Label();
		this._txt_goods_award3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "1000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0.5;
		t.x = 607;
		return t;
	};
	_proto._rb_choose3_i = function () {
		var t = new eui.RadioButton();
		this._rb_choose3 = t;
		t.label = "";
		t.verticalCenter = 3.5;
		t.x = 973;
		t.skinName = shop$Skin59;
		return t;
	};
	_proto._txt_price3_i = function () {
		var t = new eui.Label();
		this._txt_price3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 60;
		t.size = 35;
		t.text = "100元";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796a;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 98;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 198;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 298;
		return t;
	};
	_proto._gp_daichongui_i = function () {
		var t = new eui.Group();
		this._gp_daichongui = t;
		t.x = 0;
		t.y = 89;
		t.elementsContent = [this._Group4_i(),this._Group6_i(),this._gp_player_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 65;
		t.y = 452.18;
		t.elementsContent = [this._gp_fanhui_i(),this._gp_btn_qddc_i()];
		return t;
	};
	_proto._gp_fanhui_i = function () {
		var t = new eui.Group();
		this._gp_fanhui = t;
		t.horizontalCenter = -250;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect9_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0xEC7636;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "返回";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_btn_qddc_i = function () {
		var t = new eui.Group();
		this._gp_btn_qddc = t;
		t.horizontalCenter = 250;
		t.verticalCenter = 0;
		t.y = 10;
		t.elementsContent = [this._Rect10_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 30;
		t.fillColor = 0x2CAB4B;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 450;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "确定代充";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 243;
		t.y = 0;
		t.elementsContent = [this._gp_sousuo_i(),this._Group5_i()];
		return t;
	};
	_proto._gp_sousuo_i = function () {
		var t = new eui.Group();
		this._gp_sousuo = t;
		t.horizontalCenter = 197;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect11_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x2cab4b;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "搜索";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 1;
		t.elementsContent = [this._Image5_i(),this._txt_uid_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(20,19,20,26);
		t.source = "pph_hall_json.hall_num_bg";
		t.verticalCenter = 0;
		t.width = 350;
		t.x = 0;
		return t;
	};
	_proto._txt_uid_i = function () {
		var t = new eui.EditableText();
		this._txt_uid = t;
		t.height = 50;
		t.horizontalCenter = "0";
		t.prompt = "请输入玩家ID";
		t.size = 28;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 350;
		return t;
	};
	_proto._gp_player_i = function () {
		var t = new eui.Group();
		this._gp_player = t;
		t.x = 0;
		t.y = 90.09;
		t.elementsContent = [this._label_userid_i(),this._label_userid0_i(),this._label_zuan_i(),this._label_username_i(),this._img_head_i(),this._Scroller2_i()];
		return t;
	};
	_proto._label_userid_i = function () {
		var t = new eui.Label();
		this._label_userid = t;
		t.size = 30;
		t.text = "ID:000000";
		t.textAlign = "right";
		t.textColor = 0xFFFFFF;
		t.x = 330;
		t.y = 65.91;
		return t;
	};
	_proto._label_userid0_i = function () {
		var t = new eui.Label();
		this._label_userid0 = t;
		t.size = 30;
		t.text = "剩余钻石：";
		t.textAlign = "right";
		t.textColor = 0xFFFFFF;
		t.x = 589.22;
		t.y = 65.91;
		return t;
	};
	_proto._label_zuan_i = function () {
		var t = new eui.Label();
		this._label_zuan = t;
		t.size = 30;
		t.text = "200";
		t.textAlign = "right";
		t.textColor = 0xFFFFFF;
		t.x = 768.03;
		t.y = 65.91;
		return t;
	};
	_proto._label_username_i = function () {
		var t = new eui.Label();
		this._label_username = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "smile先生";
		t.x = 330;
		t.y = 18.17;
		return t;
	};
	_proto._img_head_i = function () {
		var t = new eui.Image();
		this._img_head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.source = "common_image_game_json.public_head_default";
		t.width = 70;
		t.x = 121.12;
		t.y = 0;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 202;
		t.width = 1080;
		t.x = 0;
		t.y = 140.33;
		t.viewport = this._Group8_i();
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group7_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect12_i(),this._gp_goods4_i(),this._gp_goods5_i(),this._gp_goods6_i(),this._gp_goods7_i(),this._Rect13_i(),this._Rect14_i(),this._Rect15_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 400;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_goods4_i = function () {
		var t = new eui.Group();
		this._gp_goods4 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._txt_goods_diamonds4_i(),this._img_song4_i(),this._img_chong4_i(),this._txt_goods_price_chong4_i(),this._txt_goods_award4_i(),this._rb_choose4_i(),this._txt_price4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_goods_diamonds4_i = function () {
		var t = new eui.Label();
		this._txt_goods_diamonds4 = t;
		t.fontFamily = "Arial";
		t.size = 38;
		t.text = "1000钻石";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 116;
		return t;
	};
	_proto._img_song4_i = function () {
		var t = new eui.Image();
		this._img_song4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_song";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 476;
		return t;
	};
	_proto._img_chong4_i = function () {
		var t = new eui.Image();
		this._img_chong4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_chong";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 318;
		return t;
	};
	_proto._txt_goods_price_chong4_i = function () {
		var t = new eui.Label();
		this._txt_goods_price_chong4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "5000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 398;
		return t;
	};
	_proto._txt_goods_award4_i = function () {
		var t = new eui.Label();
		this._txt_goods_award4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "5000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0.5;
		t.visible = false;
		t.x = 607;
		return t;
	};
	_proto._rb_choose4_i = function () {
		var t = new eui.RadioButton();
		this._rb_choose4 = t;
		t.label = "";
		t.verticalCenter = 3.5;
		t.x = 973;
		t.skinName = shop$Skin60;
		return t;
	};
	_proto._txt_price4_i = function () {
		var t = new eui.Label();
		this._txt_price4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 60;
		t.size = 35;
		t.text = "10元";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._gp_goods5_i = function () {
		var t = new eui.Group();
		this._gp_goods5 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 100;
		t.elementsContent = [this._Image7_i(),this._txt_goods_diamonds5_i(),this._img_song5_i(),this._img_chong5_i(),this._txt_goods_price_chong5_i(),this._txt_goods_award5_i(),this._rb_choose5_i(),this._txt_price5_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_zuan";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_goods_diamonds5_i = function () {
		var t = new eui.Label();
		this._txt_goods_diamonds5 = t;
		t.fontFamily = "Arial";
		t.size = 38;
		t.text = "5000钻石";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 116;
		return t;
	};
	_proto._img_song5_i = function () {
		var t = new eui.Image();
		this._img_song5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_song";
		t.verticalCenter = 0;
		t.x = 476;
		return t;
	};
	_proto._img_chong5_i = function () {
		var t = new eui.Image();
		this._img_chong5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_chong";
		t.verticalCenter = 0;
		t.x = 318;
		return t;
	};
	_proto._txt_goods_price_chong5_i = function () {
		var t = new eui.Label();
		this._txt_goods_price_chong5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "5000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._txt_goods_award5_i = function () {
		var t = new eui.Label();
		this._txt_goods_award5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "500";
		t.textColor = 0xB16021;
		t.verticalCenter = 0.5;
		t.x = 607;
		return t;
	};
	_proto._rb_choose5_i = function () {
		var t = new eui.RadioButton();
		this._rb_choose5 = t;
		t.label = "";
		t.verticalCenter = 3.5;
		t.x = 973;
		t.skinName = shop$Skin61;
		return t;
	};
	_proto._txt_price5_i = function () {
		var t = new eui.Label();
		this._txt_price5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 60;
		t.size = 35;
		t.text = "50元";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._gp_goods6_i = function () {
		var t = new eui.Group();
		this._gp_goods6 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 200;
		t.elementsContent = [this._Image8_i(),this._txt_goods_diamonds6_i(),this._img_song6_i(),this._img_chong6_i(),this._txt_goods_price_chong6_i(),this._txt_goods_award6_i(),this._rb_choose6_i(),this._txt_price6_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_manyzuan";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_goods_diamonds6_i = function () {
		var t = new eui.Label();
		this._txt_goods_diamonds6 = t;
		t.fontFamily = "Arial";
		t.size = 38;
		t.text = "10000钻石";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 116;
		return t;
	};
	_proto._img_song6_i = function () {
		var t = new eui.Image();
		this._img_song6 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_song";
		t.verticalCenter = 0;
		t.x = 476;
		return t;
	};
	_proto._img_chong6_i = function () {
		var t = new eui.Image();
		this._img_chong6 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_chong";
		t.verticalCenter = 0;
		t.x = 318;
		return t;
	};
	_proto._txt_goods_price_chong6_i = function () {
		var t = new eui.Label();
		this._txt_goods_price_chong6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "10000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._txt_goods_award6_i = function () {
		var t = new eui.Label();
		this._txt_goods_award6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "1000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0.5;
		t.x = 607;
		return t;
	};
	_proto._rb_choose6_i = function () {
		var t = new eui.RadioButton();
		this._rb_choose6 = t;
		t.label = "";
		t.verticalCenter = 3.5;
		t.x = 973;
		t.skinName = shop$Skin62;
		return t;
	};
	_proto._txt_price6_i = function () {
		var t = new eui.Label();
		this._txt_price6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 60;
		t.size = 35;
		t.text = "100元";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._gp_goods7_i = function () {
		var t = new eui.Group();
		this._gp_goods7 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 300;
		t.elementsContent = [this._Image9_i(),this._txt_goods_diamonds7_i(),this._img_song7_i(),this._img_chong7_i(),this._txt_goods_price_chong7_i(),this._txt_goods_award7_i(),this._rb_choose7_i(),this._txt_price7_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "pph_hall_json.hall_manyzuan";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_goods_diamonds7_i = function () {
		var t = new eui.Label();
		this._txt_goods_diamonds7 = t;
		t.fontFamily = "Arial";
		t.size = 38;
		t.text = "10000钻石";
		t.textColor = 0x47BD9F;
		t.verticalCenter = 0;
		t.x = 116;
		return t;
	};
	_proto._img_song7_i = function () {
		var t = new eui.Image();
		this._img_song7 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_song";
		t.verticalCenter = 0;
		t.x = 476;
		return t;
	};
	_proto._img_chong7_i = function () {
		var t = new eui.Image();
		this._img_chong7 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pph_hall_json.hall_chong";
		t.verticalCenter = 0;
		t.x = 318;
		return t;
	};
	_proto._txt_goods_price_chong7_i = function () {
		var t = new eui.Label();
		this._txt_goods_price_chong7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "10000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0;
		t.x = 398;
		return t;
	};
	_proto._txt_goods_award7_i = function () {
		var t = new eui.Label();
		this._txt_goods_award7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "1000";
		t.textColor = 0xB16021;
		t.verticalCenter = 0.5;
		t.x = 607;
		return t;
	};
	_proto._rb_choose7_i = function () {
		var t = new eui.RadioButton();
		this._rb_choose7 = t;
		t.label = "";
		t.verticalCenter = 3.5;
		t.x = 973;
		t.skinName = shop$Skin63;
		return t;
	};
	_proto._txt_price7_i = function () {
		var t = new eui.Label();
		this._txt_price7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 60;
		t.size = 35;
		t.text = "100元";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 98;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 198;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x37796A;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 1010;
		t.y = 298;
		return t;
	};
	return shop;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/zhanjiItem.exml'] = window.zhanjiItem = (function (_super) {
	__extends(zhanjiItem, _super);
	function zhanjiItem() {
		_super.call(this);
		this.skinParts = ["_img_game","_txt_pwd","_txt_time","_txt_nickname0","_txt_point0","_gp_player0","_txt_nickname1","_txt_point1","_gp_player1","_txt_nickname2","_txt_point2","_gp_player2","_txt_nickname3","_txt_point3","_gp_player3","_txt_nickname4","_txt_point4","_gp_player4","_txt_nickname5","_txt_point5","_gp_player5"];
		
		this.height = 85;
		this.width = 1041;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = zhanjiItem.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._img_game_i(),this._Group1_i(),this._txt_time_i(),this._gp_player0_i(),this._gp_player1_i(),this._gp_player2_i(),this._gp_player3_i(),this._gp_player4_i(),this._gp_player5_i()];
		return t;
	};
	_proto._img_game_i = function () {
		var t = new eui.Image();
		this._img_game = t;
		t.height = 60;
		t.source = "pph_hall_json.hall_download";
		t.width = 60;
		t.x = 0;
		t.y = 10.64;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 85;
		t.y = 0;
		t.elementsContent = [this._Label1_i(),this._txt_pwd_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "房间号：";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._txt_pwd_i = function () {
		var t = new eui.Label();
		this._txt_pwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "580353";
		t.textColor = 0xC6420A;
		t.verticalCenter = 0;
		t.x = 85.16;
		return t;
	};
	_proto._txt_time_i = function () {
		var t = new eui.Label();
		this._txt_time = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "2018-10-20 11:11:20";
		t.textColor = 0x47BD9F;
		t.x = 872.79;
		t.y = 0;
		return t;
	};
	_proto._gp_player0_i = function () {
		var t = new eui.Group();
		this._gp_player0 = t;
		t.height = 20;
		t.width = 168;
		t.x = 85;
		t.y = 40;
		t.elementsContent = [this._txt_nickname0_i(),this._txt_point0_i()];
		return t;
	};
	_proto._txt_nickname0_i = function () {
		var t = new eui.Label();
		this._txt_nickname0 = t;
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络了";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_point0_i = function () {
		var t = new eui.Label();
		this._txt_point0 = t;
		t.right = 0;
		t.size = 20;
		t.text = "+99999";
		t.textColor = 0xB16021;
		t.y = 0;
		return t;
	};
	_proto._gp_player1_i = function () {
		var t = new eui.Group();
		this._gp_player1 = t;
		t.height = 20;
		t.width = 168;
		t.x = 85;
		t.y = 65;
		t.elementsContent = [this._txt_nickname1_i(),this._txt_point1_i()];
		return t;
	};
	_proto._txt_nickname1_i = function () {
		var t = new eui.Label();
		this._txt_nickname1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络了";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_point1_i = function () {
		var t = new eui.Label();
		this._txt_point1 = t;
		t.right = 0;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0xB16021;
		t.y = 0;
		return t;
	};
	_proto._gp_player2_i = function () {
		var t = new eui.Group();
		this._gp_player2 = t;
		t.height = 20;
		t.width = 168;
		t.x = 265;
		t.y = 40;
		t.elementsContent = [this._txt_nickname2_i(),this._txt_point2_i()];
		return t;
	};
	_proto._txt_nickname2_i = function () {
		var t = new eui.Label();
		this._txt_nickname2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络了";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_point2_i = function () {
		var t = new eui.Label();
		this._txt_point2 = t;
		t.right = 0;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0xB16021;
		t.y = 0;
		return t;
	};
	_proto._gp_player3_i = function () {
		var t = new eui.Group();
		this._gp_player3 = t;
		t.height = 20;
		t.width = 168;
		t.x = 265;
		t.y = 65;
		t.elementsContent = [this._txt_nickname3_i(),this._txt_point3_i()];
		return t;
	};
	_proto._txt_nickname3_i = function () {
		var t = new eui.Label();
		this._txt_nickname3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络了";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_point3_i = function () {
		var t = new eui.Label();
		this._txt_point3 = t;
		t.right = 0;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0xB16021;
		t.y = 0;
		return t;
	};
	_proto._gp_player4_i = function () {
		var t = new eui.Group();
		this._gp_player4 = t;
		t.height = 20;
		t.width = 168;
		t.x = 445;
		t.y = 40;
		t.elementsContent = [this._txt_nickname4_i(),this._txt_point4_i()];
		return t;
	};
	_proto._txt_nickname4_i = function () {
		var t = new eui.Label();
		this._txt_nickname4 = t;
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络了";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_point4_i = function () {
		var t = new eui.Label();
		this._txt_point4 = t;
		t.right = 0;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0xB16021;
		t.y = 0;
		return t;
	};
	_proto._gp_player5_i = function () {
		var t = new eui.Group();
		this._gp_player5 = t;
		t.height = 20;
		t.width = 168;
		t.x = 445;
		t.y = 65;
		t.elementsContent = [this._txt_nickname5_i(),this._txt_point5_i()];
		return t;
	};
	_proto._txt_nickname5_i = function () {
		var t = new eui.Label();
		this._txt_nickname5 = t;
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络了";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._txt_point5_i = function () {
		var t = new eui.Label();
		this._txt_point5 = t;
		t.right = 0;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0xB16021;
		t.y = 0;
		return t;
	};
	return zhanjiItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall/zhanji/zhanjiLayer.exml'] = window.zhanjiLayer = (function (_super) {
	__extends(zhanjiLayer, _super);
	function zhanjiLayer() {
		_super.call(this);
		this.skinParts = ["_rect_bg","empty"];
		
		this.height = 536;
		this.width = 1080;
		this.elementsContent = [this._rect_bg_i(),this._Group1_i(),this._Group4_i(),this.empty_i()];
	}
	var _proto = zhanjiLayer.prototype;

	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.fillColor = 0x002924;
		t.height = 536;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0F2F2D;
		t.height = 80;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.right = 30;
		t.size = 21;
		t.text = "可看最近3天最多50条记录，包括已解散房间";
		t.textColor = 0x47bd9f;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.text = "我的房间";
		t.verticalCenter = 0;
		t.x = 68.16;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 98;
		t.elementsContent = [this._Image1_i(),this._Group2_i(),this._Label5_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "pph_hall_json.hall_download";
		t.width = 60;
		t.x = 0;
		t.y = 10.64;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 101;
		t.y = 0;
		t.elementsContent = [this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "房间号：";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "580353";
		t.textColor = 0xc6420a;
		t.verticalCenter = 0;
		t.x = 85.16;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "2018-10-20 11:11:20";
		t.textColor = 0x47bd9f;
		t.x = 872.79;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 99.72;
		t.y = 42.44;
		t.elementsContent = [this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.size = 20;
		t.text = "魂族网络了";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "Label";
		t.textColor = 0xb16021;
		t.x = 98.54;
		t.y = 0;
		return t;
	};
	_proto.empty_i = function () {
		var t = new eui.Label();
		this.empty = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "暂无牌局记录";
		t.textColor = 0x47bd9f;
		t.y = 194.15;
		return t;
	};
	return zhanjiLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/loadingRes.exml'] = window.loadingRes = (function (_super) {
	__extends(loadingRes, _super);
	function loadingRes() {
		_super.call(this);
		this.skinParts = ["notice","pro"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Group1_i(),this.notice_i(),this.pro_i()];
	}
	var _proto = loadingRes.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "loading_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.notice_i = function () {
		var t = new eui.Label();
		this.notice = t;
		t.rotation = 90;
		t.text = "正在进入游戏大厅...";
		t.verticalCenter = 0;
		t.x = 397.94;
		return t;
	};
	_proto.pro_i = function () {
		var t = new eui.ProgressBar();
		this.pro = t;
		t.rotation = 90;
		t.skinName = "skins.ProgressBarSkin";
		t.x = 478;
		t.y = 20;
		return t;
	};
	return loadingRes;
})(eui.Skin);generateEUI.paths['resource/eui_skins/suoha/suoha_Recorditem.exml'] = window.suoha_Recorditem = (function (_super) {
	__extends(suoha_Recorditem, _super);
	function suoha_Recorditem() {
		_super.call(this);
		this.skinParts = ["_img_bg","_txt_record_name","_img_card0","_img_card1","_img_card2","_img_card3","_img_card4","_txt_state","_bitmapLabel_point","_gp_record_item"];
		
		this.height = 62;
		this.width = 820;
		this.elementsContent = [this._gp_record_item_i()];
	}
	var _proto = suoha_Recorditem.prototype;

	_proto._gp_record_item_i = function () {
		var t = new eui.Group();
		this._gp_record_item = t;
		t.height = 62;
		t.horizontalCenter = 0;
		t.width = 820;
		t.y = 0;
		t.elementsContent = [this._img_bg_i(),this._txt_record_name_i(),this._img_card0_i(),this._img_card1_i(),this._img_card2_i(),this._img_card3_i(),this._img_card4_i(),this._txt_state_i(),this._Label1_i(),this._bitmapLabel_point_i()];
		return t;
	};
	_proto._img_bg_i = function () {
		var t = new eui.Image();
		this._img_bg = t;
		t.height = 62;
		t.source = "pph_sh_img0_json.sh_res_lanbg";
		t.width = 820;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._txt_record_name_i = function () {
		var t = new eui.Label();
		this._txt_record_name = t;
		t.height = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = -1;
		t.width = 180;
		t.x = 10;
		return t;
	};
	_proto._img_card0_i = function () {
		var t = new eui.Image();
		this._img_card0 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_bg";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 210;
		return t;
	};
	_proto._img_card1_i = function () {
		var t = new eui.Image();
		this._img_card1 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 260;
		t.y = 10;
		return t;
	};
	_proto._img_card2_i = function () {
		var t = new eui.Image();
		this._img_card2 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 310;
		t.y = 10;
		return t;
	};
	_proto._img_card3_i = function () {
		var t = new eui.Image();
		this._img_card3 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 360;
		t.y = 20;
		return t;
	};
	_proto._img_card4_i = function () {
		var t = new eui.Image();
		this._img_card4 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 410;
		t.y = 30;
		return t;
	};
	_proto._txt_state_i = function () {
		var t = new eui.Label();
		this._txt_state = t;
		t.text = "放弃";
		t.verticalCenter = -1;
		t.x = 502;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "积分";
		t.verticalCenter = -0.5;
		t.x = 609;
		return t;
	};
	_proto._bitmapLabel_point_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmapLabel_point = t;
		t.font = "sh_blue_fnt";
		t.height = 83;
		t.horizontalCenter = 337;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.text = "-50";
		t.verticalCenter = -0.5;
		return t;
	};
	return suoha_Recorditem;
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
	var suoha_totalResult$Skin64 = 	(function (_super) {
		__extends(suoha_totalResult$Skin64, _super);
		function suoha_totalResult$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suoha_totalResult$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin64;
	})(eui.Skin);

	var suoha_totalResult$Skin65 = 	(function (_super) {
		__extends(suoha_totalResult$Skin65, _super);
		function suoha_totalResult$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suoha_totalResult$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_detail";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin65;
	})(eui.Skin);

	var suoha_totalResult$Skin66 = 	(function (_super) {
		__extends(suoha_totalResult$Skin66, _super);
		function suoha_totalResult$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suoha_totalResult$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_rt_btn_replay";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin66;
	})(eui.Skin);

	var suoha_totalResult$Skin67 = 	(function (_super) {
		__extends(suoha_totalResult$Skin67, _super);
		function suoha_totalResult$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suoha_totalResult$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_jiantou";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin67;
	})(eui.Skin);

	var suoha_totalResult$Skin68 = 	(function (_super) {
		__extends(suoha_totalResult$Skin68, _super);
		function suoha_totalResult$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suoha_totalResult$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_jiantou";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin68;
	})(eui.Skin);

	var suoha_totalResult$Skin69 = 	(function (_super) {
		__extends(suoha_totalResult$Skin69, _super);
		function suoha_totalResult$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suoha_totalResult$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_confirm_lv";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin69;
	})(eui.Skin);

	var suoha_totalResult$Skin70 = 	(function (_super) {
		__extends(suoha_totalResult$Skin70, _super);
		function suoha_totalResult$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = suoha_totalResult$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_huifang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suoha_totalResult$Skin70;
	})(eui.Skin);

	function suoha_totalResult() {
		_super.call(this);
		this.skinParts = ["_rect_resbg","_txt_pwd","_txt_time","_btn_close","_txt_playcount","_txt_pwd1","_btn_detail","playAgain","_img_head0","_txt_nickname0","_txt_id0","_img_bigWin0","_txt_point0","_gp_item0","_img_head1","_txt_nickname1","_txt_id1","_img_bigWin1","_txt_point1","_gp_item1","_img_head2","_txt_nickname2","_txt_id2","_img_bigWin2","_txt_point2","_gp_item2","_img_head3","_txt_nickname3","_txt_id3","_img_bigWin3","_txt_point3","_gp_item3","_img_head4","_txt_nickname4","_txt_id4","_img_bigWin4","_txt_point4","_gp_item4","_img_head5","_txt_nickname5","_txt_id5","_img_bigWin5","_txt_point5","_gp_item5","_rect_recbg","_btn_record_prev","_btn_record_next","_bitmapLabel_ju","_img_bg0","_txt_record_name0","_img_card0","_txt_state0","_bitmapLabel_point0","_gp_record_item0","_img_bg1","_txt_record_name1","_img_card1","_txt_state1","_bitmapLabel_point1","_gp_record_item1","_img_bg2","_txt_record_name2","_img_card2","_txt_state2","_bitmapLabel_point2","_gp_record_item2","_img_bg3","_txt_record_name3","_img_card3","_txt_state3","_bitmapLabel_point3","_gp_record_item3","_img_bg4","_txt_record_name4","_img_card4","_txt_state4","_bitmapLabel_point4","_gp_record_item4","_img_bg5","_txt_record_name5","_img_card5","_txt_state5","_bitmapLabel_point5","_gp_record_item5","_gp_item","_btn_record_confirm","_btn_record_huifang","_gp_record"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Group17_i(),this._gp_record_i()];
	}
	var _proto = suoha_totalResult.prototype;

	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.height = 1080;
		t.rotation = 90;
		t.width = 640;
		t.x = 1080;
		t.y = 0;
		t.elementsContent = [this._rect_resbg_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Rect4_i(),this._Group4_i(),this._Label1_i(),this._gp_item0_i(),this._gp_item1_i(),this._gp_item2_i(),this._gp_item3_i(),this._gp_item4_i(),this._gp_item5_i()];
		return t;
	};
	_proto._rect_resbg_i = function () {
		var t = new eui.Rect();
		this._rect_resbg = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 62;
		t.elementsContent = [this._Rect1_i(),this._txt_pwd_i(),this._txt_time_i(),this._btn_close_i()];
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
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 499;
		t.skinName = suoha_totalResult$Skin64;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 156;
		t.elementsContent = [this._Rect2_i(),this._txt_playcount_i()];
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
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 279;
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
		t.y = 343;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 986;
		t.elementsContent = [this._btn_detail_i(),this.playAgain_i()];
		return t;
	};
	_proto._btn_detail_i = function () {
		var t = new eui.Button();
		this._btn_detail = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 308;
		t.skinName = suoha_totalResult$Skin65;
		return t;
	};
	_proto.playAgain_i = function () {
		var t = new eui.Button();
		this.playAgain = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = suoha_totalResult$Skin66;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "本产品仅供休闲娱乐使用，严禁赌博";
		t.y = 960;
		return t;
	};
	_proto._gp_item0_i = function () {
		var t = new eui.Group();
		this._gp_item0 = t;
		t.height = 82;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 359;
		t.elementsContent = [this._Group5_i(),this._Group6_i(),this._img_bigWin0_i(),this._txt_point0_i(),this._Rect5_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._img_head0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 102;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.verticalCenter = 0;
		t.width = 102;
		return t;
	};
	_proto._img_head0_i = function () {
		var t = new eui.Image();
		this._img_head0 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "pph_sh_img0_json.sh_head_default";
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
		t.source = "pph_sh_img0_json.sh_bigwin";
		t.verticalCenter = 0.5;
		t.x = 272;
		return t;
	};
	_proto._txt_point0_i = function () {
		var t = new eui.Label();
		this._txt_point0 = t;
		t.height = 25;
		t.horizontalCenter = 194.5;
		t.size = 25;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06fb06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 85;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.bottom = -6;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_item1_i = function () {
		var t = new eui.Group();
		this._gp_item1 = t;
		t.height = 82;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 456;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._img_bigWin1_i(),this._txt_point1_i(),this._Rect6_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._img_head1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 102;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.verticalCenter = 0;
		t.width = 102;
		return t;
	};
	_proto._img_head1_i = function () {
		var t = new eui.Image();
		this._img_head1 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "pph_sh_img0_json.sh_head_default";
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
		t.source = "pph_sh_img0_json.sh_bigwin";
		t.verticalCenter = 0.5;
		t.x = 272;
		return t;
	};
	_proto._txt_point1_i = function () {
		var t = new eui.Label();
		this._txt_point1 = t;
		t.height = 25;
		t.horizontalCenter = 194.5;
		t.size = 25;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06FB06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 85;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.bottom = -6;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_item2_i = function () {
		var t = new eui.Group();
		this._gp_item2 = t;
		t.height = 82;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 553;
		t.elementsContent = [this._Group9_i(),this._Group10_i(),this._img_bigWin2_i(),this._txt_point2_i(),this._Rect7_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._img_head2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 102;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.verticalCenter = 0;
		t.width = 102;
		return t;
	};
	_proto._img_head2_i = function () {
		var t = new eui.Image();
		this._img_head2 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "pph_sh_img0_json.sh_head_default";
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
		t.source = "pph_sh_img0_json.sh_bigwin";
		t.verticalCenter = 0.5;
		t.x = 272;
		return t;
	};
	_proto._txt_point2_i = function () {
		var t = new eui.Label();
		this._txt_point2 = t;
		t.height = 25;
		t.horizontalCenter = 194.5;
		t.size = 25;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06FB06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 85;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.bottom = -6;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_item3_i = function () {
		var t = new eui.Group();
		this._gp_item3 = t;
		t.height = 82;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 650;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this._img_bigWin3_i(),this._txt_point3_i(),this._Rect8_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._img_head3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 102;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.verticalCenter = 0;
		t.width = 102;
		return t;
	};
	_proto._img_head3_i = function () {
		var t = new eui.Image();
		this._img_head3 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "pph_sh_img0_json.sh_head_default";
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
		t.source = "pph_sh_img0_json.sh_bigwin";
		t.verticalCenter = 0.5;
		t.x = 272;
		return t;
	};
	_proto._txt_point3_i = function () {
		var t = new eui.Label();
		this._txt_point3 = t;
		t.height = 25;
		t.horizontalCenter = 194.5;
		t.size = 25;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0xe84545;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 85;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.bottom = -6;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_item4_i = function () {
		var t = new eui.Group();
		this._gp_item4 = t;
		t.height = 82;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 747;
		t.elementsContent = [this._Group13_i(),this._Group14_i(),this._img_bigWin4_i(),this._txt_point4_i(),this._Rect9_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._img_head4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 102;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.verticalCenter = 0;
		t.width = 102;
		return t;
	};
	_proto._img_head4_i = function () {
		var t = new eui.Image();
		this._img_head4 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.verticalCenter = 0.5;
		t.width = 81;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 100;
		t.elementsContent = [this._txt_nickname4_i(),this._txt_id4_i()];
		return t;
	};
	_proto._txt_nickname4_i = function () {
		var t = new eui.Label();
		this._txt_nickname4 = t;
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
	_proto._txt_id4_i = function () {
		var t = new eui.Label();
		this._txt_id4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "777777";
		t.textColor = 0x000000;
		t.y = 37.29;
		return t;
	};
	_proto._img_bigWin4_i = function () {
		var t = new eui.Image();
		this._img_bigWin4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_bigwin";
		t.verticalCenter = 0.5;
		t.x = 272;
		return t;
	};
	_proto._txt_point4_i = function () {
		var t = new eui.Label();
		this._txt_point4 = t;
		t.height = 25;
		t.horizontalCenter = 194.5;
		t.size = 25;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06FB06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 85;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.bottom = -6;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_item5_i = function () {
		var t = new eui.Group();
		this._gp_item5 = t;
		t.height = 82;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 844;
		t.elementsContent = [this._Group15_i(),this._Group16_i(),this._img_bigWin5_i(),this._txt_point5_i(),this._Rect10_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._img_head5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 102;
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.verticalCenter = 0;
		t.width = 102;
		return t;
	};
	_proto._img_head5_i = function () {
		var t = new eui.Image();
		this._img_head5 = t;
		t.height = 81;
		t.horizontalCenter = 0.5;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.verticalCenter = 0.5;
		t.width = 81;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 100;
		t.elementsContent = [this._txt_nickname5_i(),this._txt_id5_i()];
		return t;
	};
	_proto._txt_nickname5_i = function () {
		var t = new eui.Label();
		this._txt_nickname5 = t;
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
	_proto._txt_id5_i = function () {
		var t = new eui.Label();
		this._txt_id5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "777777";
		t.textColor = 0x000000;
		t.y = 37.29;
		return t;
	};
	_proto._img_bigWin5_i = function () {
		var t = new eui.Image();
		this._img_bigWin5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_bigwin";
		t.verticalCenter = 0.5;
		t.x = 272;
		return t;
	};
	_proto._txt_point5_i = function () {
		var t = new eui.Label();
		this._txt_point5 = t;
		t.height = 25;
		t.horizontalCenter = 194.5;
		t.size = 25;
		t.text = "+80000";
		t.textAlign = "center";
		t.textColor = 0x06fb06;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 85;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.bottom = -6;
		t.height = 4;
		t.horizontalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._gp_record_i = function () {
		var t = new eui.Group();
		this._gp_record = t;
		t.height = 640;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._rect_recbg_i(),this._Group18_i(),this._gp_item_i(),this._Group19_i()];
		return t;
	};
	_proto._rect_recbg_i = function () {
		var t = new eui.Rect();
		this._rect_recbg = t;
		t.fillAlpha = 0.4;
		t.fillColor = 0x5d5d5d;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.height = 66;
		t.x = 376;
		t.y = 6;
		t.elementsContent = [this._btn_record_prev_i(),this._btn_record_next_i(),this._Image7_i(),this._Image8_i(),this._bitmapLabel_ju_i()];
		return t;
	};
	_proto._btn_record_prev_i = function () {
		var t = new eui.Button();
		this._btn_record_prev = t;
		t.anchorOffsetY = 64;
		t.height = 64;
		t.label = "";
		t.rotation = 90;
		t.verticalCenter = 4;
		t.width = 64;
		t.x = 9.33;
		t.skinName = suoha_totalResult$Skin67;
		return t;
	};
	_proto._btn_record_next_i = function () {
		var t = new eui.Button();
		this._btn_record_next = t;
		t.anchorOffsetX = 64;
		t.height = 64;
		t.label = "";
		t.rotation = -90;
		t.verticalCenter = -2;
		t.width = 64;
		t.x = 294;
		t.skinName = suoha_totalResult$Skin68;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "pph_sh_img0_json.sh_wenzi_ju";
		t.verticalCenter = 2;
		t.x = 230;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "pph_sh_img0_json.sh_wenzi_di";
		t.verticalCenter = 0;
		t.x = 89.33;
		return t;
	};
	_proto._bitmapLabel_ju_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmapLabel_ju = t;
		t.font = "sh_orange_fnt";
		t.horizontalCenter = 3;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.text = "30";
		t.verticalCenter = 0;
		return t;
	};
	_proto._gp_item_i = function () {
		var t = new eui.Group();
		this._gp_item = t;
		t.horizontalCenter = 0;
		t.y = 110;
		t.elementsContent = [this._gp_record_item0_i(),this._gp_record_item1_i(),this._gp_record_item2_i(),this._gp_record_item3_i(),this._gp_record_item4_i(),this._gp_record_item5_i()];
		return t;
	};
	_proto._gp_record_item0_i = function () {
		var t = new eui.Group();
		this._gp_record_item0 = t;
		t.height = 62;
		t.width = 820;
		t.x = 52;
		t.y = 0;
		t.elementsContent = [this._img_bg0_i(),this._txt_record_name0_i(),this._img_card0_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._txt_state0_i(),this._Label2_i(),this._bitmapLabel_point0_i()];
		return t;
	};
	_proto._img_bg0_i = function () {
		var t = new eui.Image();
		this._img_bg0 = t;
		t.height = 62;
		t.source = "pph_sh_img0_json.sh_res_lanbg";
		t.width = 820;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._txt_record_name0_i = function () {
		var t = new eui.Label();
		this._txt_record_name0 = t;
		t.height = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = -1;
		t.width = 180;
		t.x = 10;
		return t;
	};
	_proto._img_card0_i = function () {
		var t = new eui.Image();
		this._img_card0 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_bg";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 210;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 260;
		t.y = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 310;
		t.y = 10;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 360;
		t.y = 20;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 410;
		t.y = 30;
		return t;
	};
	_proto._txt_state0_i = function () {
		var t = new eui.Label();
		this._txt_state0 = t;
		t.text = "放弃";
		t.verticalCenter = -1;
		t.x = 502;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "积分";
		t.verticalCenter = -0.5;
		t.x = 609;
		return t;
	};
	_proto._bitmapLabel_point0_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmapLabel_point0 = t;
		t.font = "sh_orange_fnt";
		t.height = 83;
		t.horizontalCenter = 337;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.text = "-50";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto._gp_record_item1_i = function () {
		var t = new eui.Group();
		this._gp_record_item1 = t;
		t.height = 62;
		t.width = 924;
		t.x = 0;
		t.y = 70;
		t.elementsContent = [this._img_bg1_i(),this._txt_record_name1_i(),this._img_card1_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._txt_state1_i(),this._Label3_i(),this._bitmapLabel_point1_i()];
		return t;
	};
	_proto._img_bg1_i = function () {
		var t = new eui.Image();
		this._img_bg1 = t;
		t.height = 62;
		t.scaleX = 2;
		t.source = "pph_sh_img0_json.sh_res_lanbg";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._txt_record_name1_i = function () {
		var t = new eui.Label();
		this._txt_record_name1 = t;
		t.height = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = -1;
		t.width = 180;
		t.x = 10;
		return t;
	};
	_proto._img_card1_i = function () {
		var t = new eui.Image();
		this._img_card1 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_bg";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 210;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 260;
		t.y = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 310;
		t.y = 10;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 360;
		t.y = 20;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 410;
		t.y = 30;
		return t;
	};
	_proto._txt_state1_i = function () {
		var t = new eui.Label();
		this._txt_state1 = t;
		t.text = "放弃";
		t.verticalCenter = -1;
		t.x = 556.65;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "积分";
		t.verticalCenter = -0.5;
		t.x = 662.65;
		return t;
	};
	_proto._bitmapLabel_point1_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmapLabel_point1 = t;
		t.font = "sh_orange_fnt";
		t.height = 83;
		t.horizontalCenter = 337;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.text = "-50";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto._gp_record_item2_i = function () {
		var t = new eui.Group();
		this._gp_record_item2 = t;
		t.height = 62;
		t.width = 924;
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this._img_bg2_i(),this._txt_record_name2_i(),this._img_card2_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._txt_state2_i(),this._Label4_i(),this._bitmapLabel_point2_i()];
		return t;
	};
	_proto._img_bg2_i = function () {
		var t = new eui.Image();
		this._img_bg2 = t;
		t.height = 62;
		t.scaleX = 2;
		t.source = "pph_sh_img0_json.sh_res_lanbg";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._txt_record_name2_i = function () {
		var t = new eui.Label();
		this._txt_record_name2 = t;
		t.height = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = -1;
		t.width = 180;
		t.x = 10;
		return t;
	};
	_proto._img_card2_i = function () {
		var t = new eui.Image();
		this._img_card2 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_bg";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 210;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 260;
		t.y = 10;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 310;
		t.y = 10;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 360;
		t.y = 20;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 410;
		t.y = 30;
		return t;
	};
	_proto._txt_state2_i = function () {
		var t = new eui.Label();
		this._txt_state2 = t;
		t.text = "放弃";
		t.verticalCenter = -1;
		t.x = 556.65;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "积分";
		t.verticalCenter = -0.5;
		t.x = 662.65;
		return t;
	};
	_proto._bitmapLabel_point2_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmapLabel_point2 = t;
		t.font = "sh_orange_fnt";
		t.height = 83;
		t.horizontalCenter = 337;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.text = "-50";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto._gp_record_item3_i = function () {
		var t = new eui.Group();
		this._gp_record_item3 = t;
		t.height = 62;
		t.width = 924;
		t.x = 0;
		t.y = 210;
		t.elementsContent = [this._img_bg3_i(),this._txt_record_name3_i(),this._img_card3_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._txt_state3_i(),this._Label5_i(),this._bitmapLabel_point3_i()];
		return t;
	};
	_proto._img_bg3_i = function () {
		var t = new eui.Image();
		this._img_bg3 = t;
		t.height = 62;
		t.scaleX = 2;
		t.source = "pph_sh_img0_json.sh_res_lanbg";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._txt_record_name3_i = function () {
		var t = new eui.Label();
		this._txt_record_name3 = t;
		t.height = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = -1;
		t.width = 180;
		t.x = 10;
		return t;
	};
	_proto._img_card3_i = function () {
		var t = new eui.Image();
		this._img_card3 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_bg";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 210;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 260;
		t.y = 10;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 310;
		t.y = 10;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 360;
		t.y = 20;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 410;
		t.y = 30;
		return t;
	};
	_proto._txt_state3_i = function () {
		var t = new eui.Label();
		this._txt_state3 = t;
		t.text = "放弃";
		t.verticalCenter = -1;
		t.x = 556.65;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "积分";
		t.verticalCenter = -0.5;
		t.x = 662.65;
		return t;
	};
	_proto._bitmapLabel_point3_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmapLabel_point3 = t;
		t.font = "sh_orange_fnt";
		t.height = 83;
		t.horizontalCenter = 337;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.text = "-50";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto._gp_record_item4_i = function () {
		var t = new eui.Group();
		this._gp_record_item4 = t;
		t.height = 62;
		t.width = 924;
		t.x = 0;
		t.y = 280;
		t.elementsContent = [this._img_bg4_i(),this._txt_record_name4_i(),this._img_card4_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._txt_state4_i(),this._Label6_i(),this._bitmapLabel_point4_i()];
		return t;
	};
	_proto._img_bg4_i = function () {
		var t = new eui.Image();
		this._img_bg4 = t;
		t.height = 62;
		t.scaleX = 2;
		t.source = "pph_sh_img0_json.sh_res_lanbg";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._txt_record_name4_i = function () {
		var t = new eui.Label();
		this._txt_record_name4 = t;
		t.height = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = -1;
		t.width = 180;
		t.x = 10;
		return t;
	};
	_proto._img_card4_i = function () {
		var t = new eui.Image();
		this._img_card4 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_bg";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 210;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 260;
		t.y = 10;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 310;
		t.y = 10;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 360;
		t.y = 20;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 410;
		t.y = 30;
		return t;
	};
	_proto._txt_state4_i = function () {
		var t = new eui.Label();
		this._txt_state4 = t;
		t.text = "放弃";
		t.verticalCenter = -1;
		t.x = 556.65;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "积分";
		t.verticalCenter = -0.5;
		t.x = 662.65;
		return t;
	};
	_proto._bitmapLabel_point4_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmapLabel_point4 = t;
		t.font = "sh_orange_fnt";
		t.height = 83;
		t.horizontalCenter = 337;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.text = "-50";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto._gp_record_item5_i = function () {
		var t = new eui.Group();
		this._gp_record_item5 = t;
		t.height = 62;
		t.width = 924;
		t.x = 0;
		t.y = 350;
		t.elementsContent = [this._img_bg5_i(),this._txt_record_name5_i(),this._img_card5_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._txt_state5_i(),this._Label7_i(),this._bitmapLabel_point5_i()];
		return t;
	};
	_proto._img_bg5_i = function () {
		var t = new eui.Image();
		this._img_bg5 = t;
		t.height = 62;
		t.scaleX = 2;
		t.source = "pph_sh_img0_json.sh_res_lanbg";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._txt_record_name5_i = function () {
		var t = new eui.Label();
		this._txt_record_name5 = t;
		t.height = 30;
		t.text = "魂族网络科技";
		t.verticalCenter = -1;
		t.width = 180;
		t.x = 10;
		return t;
	};
	_proto._img_card5_i = function () {
		var t = new eui.Image();
		this._img_card5 = t;
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_bg";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 210;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 260;
		t.y = 10;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 310;
		t.y = 10;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 360;
		t.y = 20;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "pph_sh_img0_json.card_4_3";
		t.verticalCenter = 0;
		t.width = 105;
		t.x = 410;
		t.y = 30;
		return t;
	};
	_proto._txt_state5_i = function () {
		var t = new eui.Label();
		this._txt_state5 = t;
		t.text = "放弃";
		t.verticalCenter = -1;
		t.x = 556.65;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "积分";
		t.verticalCenter = -0.5;
		t.x = 662.65;
		return t;
	};
	_proto._bitmapLabel_point5_i = function () {
		var t = new eui.BitmapLabel();
		this._bitmapLabel_point5 = t;
		t.font = "sh_orange_fnt";
		t.height = 83;
		t.horizontalCenter = 337;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.text = "-50";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.height = 74;
		t.width = 571;
		t.x = 255;
		t.y = 540.71;
		t.elementsContent = [this._btn_record_confirm_i(),this._btn_record_huifang_i()];
		return t;
	};
	_proto._btn_record_confirm_i = function () {
		var t = new eui.Button();
		this._btn_record_confirm = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = suoha_totalResult$Skin69;
		return t;
	};
	_proto._btn_record_huifang_i = function () {
		var t = new eui.Button();
		this._btn_record_huifang = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 384.26;
		t.skinName = suoha_totalResult$Skin70;
		return t;
	};
	return suoha_totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/suoha/suohaIndex.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	var NewFile$Skin71 = 	(function (_super) {
		__extends(NewFile$Skin71, _super);
		function NewFile$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_edit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin71;
	})(eui.Skin);

	var NewFile$Skin72 = 	(function (_super) {
		__extends(NewFile$Skin72, _super);
		function NewFile$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_wanfa";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin72;
	})(eui.Skin);

	var NewFile$Skin73 = 	(function (_super) {
		__extends(NewFile$Skin73, _super);
		function NewFile$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_set";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin73;
	})(eui.Skin);

	var NewFile$Skin74 = 	(function (_super) {
		__extends(NewFile$Skin74, _super);
		function NewFile$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.7),
						new eui.SetProperty("_Image1","scaleY",0.7)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_message";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin74;
	})(eui.Skin);

	var NewFile$Skin75 = 	(function (_super) {
		__extends(NewFile$Skin75, _super);
		function NewFile$Skin75() {
			_super.call(this);
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
		var _proto = NewFile$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_showhand";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin75;
	})(eui.Skin);

	var NewFile$Skin76 = 	(function (_super) {
		__extends(NewFile$Skin76, _super);
		function NewFile$Skin76() {
			_super.call(this);
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
		var _proto = NewFile$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_giveup";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin76;
	})(eui.Skin);

	var NewFile$Skin77 = 	(function (_super) {
		__extends(NewFile$Skin77, _super);
		function NewFile$Skin77() {
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
		var _proto = NewFile$Skin77.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_rank5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin77;
	})(eui.Skin);

	var NewFile$Skin78 = 	(function (_super) {
		__extends(NewFile$Skin78, _super);
		function NewFile$Skin78() {
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
		var _proto = NewFile$Skin78.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_rank10";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin78;
	})(eui.Skin);

	var NewFile$Skin79 = 	(function (_super) {
		__extends(NewFile$Skin79, _super);
		function NewFile$Skin79() {
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
		var _proto = NewFile$Skin79.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_rank20";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin79;
	})(eui.Skin);

	var NewFile$Skin80 = 	(function (_super) {
		__extends(NewFile$Skin80, _super);
		function NewFile$Skin80() {
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
		var _proto = NewFile$Skin80.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_rak50";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin80;
	})(eui.Skin);

	var NewFile$Skin81 = 	(function (_super) {
		__extends(NewFile$Skin81, _super);
		function NewFile$Skin81() {
			_super.call(this);
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
		var _proto = NewFile$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_bujiao";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin81;
	})(eui.Skin);

	var NewFile$Skin82 = 	(function (_super) {
		__extends(NewFile$Skin82, _super);
		function NewFile$Skin82() {
			_super.call(this);
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
		var _proto = NewFile$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_gen";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin82;
	})(eui.Skin);

	var NewFile$Skin83 = 	(function (_super) {
		__extends(NewFile$Skin83, _super);
		function NewFile$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.7),
						new eui.SetProperty("_Image1","scaleY",0.7)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_yy";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin83;
	})(eui.Skin);

	var NewFile$Skin84 = 	(function (_super) {
		__extends(NewFile$Skin84, _super);
		function NewFile$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.7),
						new eui.SetProperty("_Image1","scaleY",0.7)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_local";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin84;
	})(eui.Skin);

	var NewFile$Skin85 = 	(function (_super) {
		__extends(NewFile$Skin85, _super);
		function NewFile$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pph_sh_img0_json.sh_btn_quit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin85;
	})(eui.Skin);

	function NewFile() {
		_super.call(this);
		this.skinParts = ["_img_gamebg","_rule_pwd","_rule_payMode","_rule_zhongtu","_rule_suohafen","_txt_xianzhi","_gp_rulebg","totalPoint2","totalPoint","dir0","dir5","dir4","dir3","dir2","dir1","daojishi","dirGroup","cards_0_0","cards_0_1","cards_0_2","cards_0_3","cards_0_4","cardsGroup0","whoTalk","whoTalkGroup","playerBtn","havePeopleComing","_btn_wanfa","menu","toolGroup","xiaoxiBtn","xxGroup","headBg0","headImg0","yyxiaoxi0","nickname0","score0","offline0","message0","messagebg0","headTouch0","addPoint0","_img_roomowner0","headGroup0","cards_1_0","cards_1_1","cards_1_2","cards_1_3","cards_1_4","cardsGroup1","headBg1","headImg1","yyxiaoxi1","nickname1","score1","offline1","message1","messagebg1","headTouch1","addPoint1","_img_roomowner1","headGroup1","cards_3_0","cards_3_1","cards_3_2","cards_3_3","cards_3_4","cardsGroup3","headBg3","headImg3","yyxiaoxi3","nickname3","score3","offline3","message3","messagebg3","headTouch3","addPoint3","_img_roomowner3","headGroup3","cards_2_0","cards_2_1","cards_2_2","cards_2_3","cards_2_4","cardsGroup2","headBg2","headImg2","yyxiaoxi2","nickname2","score2","offline2","message2","messagebg2","headTouch2","addPoint2","_img_roomowner2","headGroup2","cards_4_0","cards_4_1","cards_4_2","cards_4_3","cards_4_4","cardsGroup4","headBg4","headImg4","yyxiaoxi4","nickname4","score4","offline4","message4","messagebg4","headTouch4","addPoint4","_img_roomowner4","headGroup4","cards_5_0","cards_5_1","cards_5_2","cards_5_3","cards_5_4","cardsGroup5","headBg5","headImg5","yyxiaoxi5","nickname5","score5","offline5","message5","messagebg5","headTouch5","addPoint5","_img_roomowner5","headGroup5","xiazhu_action1_btn","xiazhu_action1_group","xiazhu_action2_btn","xiazhu_action2_group","xiazhu_action_group","xiazhu_fen0_Btn","xiazhu_fen0_group","xiazhu_fen1_Btn","xiazhu_fen1_group","xiazhu_fen2_Btn","xiazhu_fen2_group","xiazhu_fen3_Btn","xiazhu_fen3_group","xiazhu_fen4_Btn","xiazhu_fen4_group","xiazhu_action0_btn","xiazhu_action0_group","xiazhu_fen_group","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","locBtn","locGroup","startBtn","startBtnGroup","_btn_quit","_rule_playCount","backHallBtn"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._img_gamebg_i(),this._gp_rulebg_i(),this.dirGroup_i(),this.cardsGroup0_i(),this.whoTalkGroup_i(),this.toolGroup_i(),this.xxGroup_i(),this.headGroup0_i(),this.headGroup1_i(),this.headGroup3_i(),this.headGroup2_i(),this.headGroup4_i(),this.headGroup5_i(),this.xiazhu_action_group_i(),this.xiazhu_fen_group_i(),this.yyGroup_i(),this.locGroup_i(),this.startBtnGroup_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._btn_quit_i(),this._rule_playCount_i(),this.backHallBtn_i()];
	}
	var _proto = NewFile.prototype;

	_proto._img_gamebg_i = function () {
		var t = new eui.Image();
		this._img_gamebg = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "sh_bg_png";
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto._gp_rulebg_i = function () {
		var t = new eui.Group();
		this._gp_rulebg = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 170;
		t.x = 0;
		t.y = 64.35;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._rule_pwd_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(16,14,13,13);
		t.source = "pph_sh_img0_json.sh_kuang_jianbian_yy";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._rule_pwd_i = function () {
		var t = new eui.Label();
		this._rule_pwd = t;
		t.fontFamily = "Arial";
		t.size = 23;
		t.text = "";
		t.textColor = 0xf9c159;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this._Image2_i(),this._rule_payMode_i(),this._rule_zhongtu_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(16,14,13,13);
		t.source = "pph_sh_img0_json.sh_kuang_jianbian_yy";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._rule_payMode_i = function () {
		var t = new eui.Label();
		this._rule_payMode = t;
		t.fontFamily = "Arial";
		t.size = 23;
		t.text = "支付：AA支付";
		t.textColor = 0xf9c159;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 15;
		return t;
	};
	_proto._rule_zhongtu_i = function () {
		var t = new eui.Label();
		this._rule_zhongtu = t;
		t.fontFamily = "Arial";
		t.size = 23;
		t.text = "";
		t.textColor = 0xF9C159;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this._Image3_i(),this._rule_suohafen_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(16,14,13,13);
		t.source = "pph_sh_img0_json.sh_kuang_jianbian_yy";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._rule_suohafen_i = function () {
		var t = new eui.Label();
		this._rule_suohafen = t;
		t.fontFamily = "Arial";
		t.size = 23;
		t.text = "";
		t.textColor = 0xf9c159;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 120;
		t.elementsContent = [this._Image4_i(),this._txt_xianzhi_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(16,14,13,13);
		t.source = "pph_sh_img0_json.sh_kuang_jianbian_yy";
		t.verticalCenter = 0;
		t.width = 170;
		t.x = 0;
		return t;
	};
	_proto._txt_xianzhi_i = function () {
		var t = new eui.Label();
		this._txt_xianzhi = t;
		t.fontFamily = "Arial";
		t.size = 23;
		t.text = "";
		t.textColor = 0xf9c159;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto.dirGroup_i = function () {
		var t = new eui.Group();
		this.dirGroup = t;
		t.height = 163;
		t.horizontalCenter = 0;
		t.verticalCenter = -14.5;
		t.width = 221;
		t.elementsContent = [this._Image5_i(),this._Group5_i(),this.dir0_i(),this.dir5_i(),this.dir4_i(),this.dir3_i(),this.dir2_i(),this.dir1_i(),this.daojishi_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "pph_sh_img0_json.sh_dir_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 84;
		t.horizontalCenter = 142;
		t.verticalCenter = 7.5;
		t.width = 117;
		t.elementsContent = [this._Image6_i(),this.totalPoint2_i(),this.totalPoint_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pph_sh_img0_json.sh_chouma";
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
		t.font = "sh_purple_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.text = "1850";
		t.y = 42.35;
		return t;
	};
	_proto.dir0_i = function () {
		var t = new eui.Image();
		this.dir0 = t;
		t.source = "pph_sh_img0_json.sh_dir_1";
		t.x = 27.5;
		t.y = 92.5;
		return t;
	};
	_proto.dir5_i = function () {
		var t = new eui.Image();
		this.dir5 = t;
		t.source = "pph_sh_img0_json.sh_dir_2";
		t.x = 12.76;
		t.y = 61.98;
		return t;
	};
	_proto.dir4_i = function () {
		var t = new eui.Image();
		this.dir4 = t;
		t.source = "pph_sh_img0_json.sh_dir_3-1";
		t.x = 13.61;
		t.y = 14.17;
		return t;
	};
	_proto.dir3_i = function () {
		var t = new eui.Image();
		this.dir3 = t;
		t.source = "pph_sh_img0_json.sh_dir_3";
		t.x = 67.49;
		t.y = 13.17;
		return t;
	};
	_proto.dir2_i = function () {
		var t = new eui.Image();
		this.dir2 = t;
		t.source = "pph_sh_img0_json.sh_dir_5";
		t.x = 129.47;
		t.y = 14.34;
		return t;
	};
	_proto.dir1_i = function () {
		var t = new eui.Image();
		this.dir1 = t;
		t.source = "pph_sh_img0_json.sh_dir_6";
		t.x = 135.66;
		t.y = 61.65;
		return t;
	};
	_proto.daojishi_i = function () {
		var t = new eui.Label();
		this.daojishi = t;
		t.fontFamily = "DFKai-SB";
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "99";
		t.textColor = 0xca8c13;
		t.verticalCenter = -5.5;
		return t;
	};
	_proto.cardsGroup0_i = function () {
		var t = new eui.Group();
		this.cardsGroup0 = t;
		t.height = 144;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 563;
		t.x = 287;
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
		t.source = "pph_sh_img0_json.card_3_11";
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
		t.source = "pph_sh_img0_json.card_3_11";
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
		t.source = "pph_sh_img0_json.card_3_11";
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
		t.source = "pph_sh_img0_json.card_3_11";
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
		t.source = "pph_sh_img0_json.card_3_11";
		t.width = 109;
		t.x = 507.94;
		t.y = 72;
		return t;
	};
	_proto.whoTalkGroup_i = function () {
		var t = new eui.Group();
		this.whoTalkGroup = t;
		t.horizontalCenter = 0;
		t.y = 237.8;
		t.elementsContent = [this.whoTalk_i()];
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
		t.x = 897;
		t.y = 9.35;
		t.elementsContent = [this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 0;
		t.elementsContent = [this.playerBtn_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto.playerBtn_i = function () {
		var t = new eui.Button();
		this.playerBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin71;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.scaleY = 0.9;
		t.source = "common_image_game_json.public_redpoint";
		t.x = -4.39;
		t.y = -2.48;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 65;
		t.elementsContent = [this._btn_wanfa_i()];
		return t;
	};
	_proto._btn_wanfa_i = function () {
		var t = new eui.Button();
		this._btn_wanfa = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = -1;
		t.skinName = NewFile$Skin72;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.width = 40;
		t.x = 130;
		t.y = 0;
		t.elementsContent = [this.menu_i()];
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin73;
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
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin74;
		return t;
	};
	_proto.headGroup0_i = function () {
		var t = new eui.Group();
		this.headGroup0 = t;
		t.height = 137;
		t.width = 91.8;
		t.x = 25.96;
		t.y = 473.8;
		t.elementsContent = [this.headBg0_i(),this.headImg0_i(),this.yyxiaoxi0_i(),this.nickname0_i(),this.score0_i(),this.offline0_i(),this.messagebg0_i(),this.headTouch0_i(),this.addPoint0_i(),this._img_roomowner0_i()];
		return t;
	};
	_proto.headBg0_i = function () {
		var t = new eui.Image();
		this.headBg0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 79;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.width = 79;
		t.x = 10.3;
		t.y = 10.3;
		return t;
	};
	_proto.yyxiaoxi0_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi0 = t;
		t.horizontalCenter = -0.3999999999999986;
		t.source = "pph_sh_img0_json.sh_yy_laba";
		t.y = 75;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = -0.3999999999999986;
		t.size = 23;
		t.text = "smile";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 115;
		t.y = 90.53;
		return t;
	};
	_proto.score0_i = function () {
		var t = new eui.Label();
		this.score0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0.10000000000000142;
		t.size = 23;
		t.text = "-600";
		t.textAlign = "center";
		t.textColor = 0xf4e135;
		t.verticalAlign = "middle";
		t.width = 94;
		t.y = 116.49;
		return t;
	};
	_proto.offline0_i = function () {
		var t = new eui.Image();
		this.offline0 = t;
		t.height = 80;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headoffline";
		t.width = 80;
		t.x = 8.9;
		t.y = 9.8;
		return t;
	};
	_proto.messagebg0_i = function () {
		var t = new eui.Group();
		this.messagebg0 = t;
		t.x = 79.67;
		t.y = 19.34;
		t.elementsContent = [this._Image7_i(),this.message0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(19,6,9,22);
		t.source = "pph_sh_img0_json.sh_qipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message0_i = function () {
		var t = new eui.Label();
		this.message0 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "怎么又断线了，网络怎么这";
		t.textColor = 0x000000;
		t.verticalCenter = -2;
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
	_proto.addPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint0 = t;
		t.font = "sh_orange_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.text = "+99999";
		t.y = -46;
		return t;
	};
	_proto._img_roomowner0_i = function () {
		var t = new eui.Image();
		this._img_roomowner0 = t;
		t.horizontalCenter = 0.10000000000000142;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_sh_img0_json.sh_roomowner";
		t.y = -1.66;
		return t;
	};
	_proto.headGroup1_i = function () {
		var t = new eui.Group();
		this.headGroup1 = t;
		t.height = 137;
		t.width = 91.8;
		t.x = 960;
		t.y = 268.48;
		t.elementsContent = [this.cardsGroup1_i(),this.headBg1_i(),this.headImg1_i(),this.yyxiaoxi1_i(),this.nickname1_i(),this.score1_i(),this.offline1_i(),this.messagebg1_i(),this.headTouch1_i(),this.addPoint1_i(),this._img_roomowner1_i()];
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.headBg1_i = function () {
		var t = new eui.Image();
		this.headBg1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 79;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.width = 79;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.yyxiaoxi1_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi1 = t;
		t.horizontalCenter = -0.3999999999999986;
		t.source = "pph_sh_img0_json.sh_yy_laba";
		t.y = 75;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = -0.3999999999999986;
		t.size = 23;
		t.text = "smile";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 115;
		t.y = 90.53;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0.10000000000000142;
		t.size = 23;
		t.text = "-600";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 94;
		t.y = 116.49;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Image();
		this.offline1 = t;
		t.height = 80;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headoffline";
		t.width = 80;
		t.x = 10.5;
		t.y = 11;
		return t;
	};
	_proto.messagebg1_i = function () {
		var t = new eui.Group();
		this.messagebg1 = t;
		t.right = 94.80000000000001;
		t.visible = false;
		t.y = 19.34;
		t.elementsContent = [this._Image8_i(),this.message1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 300;
		t.scale9Grid = new egret.Rectangle(19,6,9,22);
		t.scaleX = -1;
		t.source = "pph_sh_img0_json.sh_qipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Label();
		this.message1 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "怎么又断线了，网络怎么这";
		t.textColor = 0x000000;
		t.verticalCenter = -2;
		return t;
	};
	_proto.headTouch1_i = function () {
		var t = new eui.Rect();
		this.headTouch1 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.addPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint1 = t;
		t.font = "sh_orange_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.text = "+99999";
		t.y = -46;
		return t;
	};
	_proto._img_roomowner1_i = function () {
		var t = new eui.Image();
		this._img_roomowner1 = t;
		t.horizontalCenter = 0.10000000000000142;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_sh_img0_json.sh_roomowner";
		t.y = -1.66;
		return t;
	};
	_proto.headGroup3_i = function () {
		var t = new eui.Group();
		this.headGroup3 = t;
		t.height = 134;
		t.horizontalCenter = 0.5;
		t.width = 91;
		t.y = 12.48;
		t.elementsContent = [this.cardsGroup3_i(),this.headBg3_i(),this.headImg3_i(),this.yyxiaoxi3_i(),this.nickname3_i(),this.score3_i(),this.offline3_i(),this.messagebg3_i(),this.headTouch3_i(),this.addPoint3_i(),this._img_roomowner3_i()];
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.headBg3_i = function () {
		var t = new eui.Image();
		this.headBg3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.height = 79;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.width = 79;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.yyxiaoxi3_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi3 = t;
		t.horizontalCenter = -0.3999999999999986;
		t.source = "pph_sh_img0_json.sh_yy_laba";
		t.y = 75;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = -0.3999999999999986;
		t.size = 23;
		t.text = "smile";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 115;
		t.y = 90.53;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0.10000000000000142;
		t.size = 23;
		t.text = "-600";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 94;
		t.y = 116.49;
		return t;
	};
	_proto.offline3_i = function () {
		var t = new eui.Image();
		this.offline3 = t;
		t.height = 80;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headoffline";
		t.width = 80;
		t.x = 10.5;
		t.y = 11;
		return t;
	};
	_proto.messagebg3_i = function () {
		var t = new eui.Group();
		this.messagebg3 = t;
		t.x = 79.67;
		t.y = 19.34;
		t.elementsContent = [this._Image9_i(),this.message3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(19,6,9,22);
		t.source = "pph_sh_img0_json.sh_qipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Label();
		this.message3 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "怎么又断线了，网络怎么这";
		t.textColor = 0x000000;
		t.verticalCenter = -2;
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
	_proto.addPoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint3 = t;
		t.font = "sh_orange_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.text = "+99999";
		t.y = -48;
		return t;
	};
	_proto._img_roomowner3_i = function () {
		var t = new eui.Image();
		this._img_roomowner3 = t;
		t.horizontalCenter = 0.10000000000000142;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_sh_img0_json.sh_roomowner";
		t.y = -1.66;
		return t;
	};
	_proto.headGroup2_i = function () {
		var t = new eui.Group();
		this.headGroup2 = t;
		t.height = 134;
		t.right = 202;
		t.width = 91;
		t.y = 46;
		t.elementsContent = [this.cardsGroup2_i(),this.headBg2_i(),this.headImg2_i(),this.yyxiaoxi2_i(),this.nickname2_i(),this.score2_i(),this.offline2_i(),this.messagebg2_i(),this.headTouch2_i(),this.addPoint2_i(),this._img_roomowner2_i()];
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.headBg2_i = function () {
		var t = new eui.Image();
		this.headBg2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 79;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.width = 79;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.yyxiaoxi2_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi2 = t;
		t.horizontalCenter = -0.3999999999999986;
		t.source = "pph_sh_img0_json.sh_yy_laba";
		t.y = 75;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = -0.3999999999999986;
		t.size = 23;
		t.text = "smile";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 115;
		t.y = 90.53;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0.10000000000000142;
		t.size = 23;
		t.text = "-600";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 94;
		t.y = 116.49;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Image();
		this.offline2 = t;
		t.height = 80;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headoffline";
		t.width = 80;
		t.x = 10.5;
		t.y = 11;
		return t;
	};
	_proto.messagebg2_i = function () {
		var t = new eui.Group();
		this.messagebg2 = t;
		t.right = 94.80000000000001;
		t.y = 19.34;
		t.elementsContent = [this._Image10_i(),this.message2_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 300;
		t.scale9Grid = new egret.Rectangle(19,6,9,22);
		t.scaleX = -1;
		t.source = "pph_sh_img0_json.sh_qipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Label();
		this.message2 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "怎么又断线了，网络怎么这";
		t.textColor = 0x000000;
		t.verticalCenter = -2;
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
	_proto.addPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint2 = t;
		t.font = "sh_orange_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.text = "+99999";
		t.y = -48;
		return t;
	};
	_proto._img_roomowner2_i = function () {
		var t = new eui.Image();
		this._img_roomowner2 = t;
		t.horizontalCenter = 0.10000000000000142;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_sh_img0_json.sh_roomowner";
		t.y = -1.66;
		return t;
	};
	_proto.headGroup4_i = function () {
		var t = new eui.Group();
		this.headGroup4 = t;
		t.height = 134;
		t.left = 190;
		t.width = 91;
		t.y = 46;
		t.elementsContent = [this.cardsGroup4_i(),this.headBg4_i(),this.headImg4_i(),this.yyxiaoxi4_i(),this.nickname4_i(),this.score4_i(),this.offline4_i(),this.messagebg4_i(),this.headTouch4_i(),this.addPoint4_i(),this._img_roomowner4_i()];
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.headBg4_i = function () {
		var t = new eui.Image();
		this.headBg4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.height = 79;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.width = 79;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.yyxiaoxi4_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi4 = t;
		t.horizontalCenter = -0.3999999999999986;
		t.source = "pph_sh_img0_json.sh_yy_laba";
		t.y = 75;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = -0.3999999999999986;
		t.size = 23;
		t.text = "smile";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 115;
		t.y = 90.53;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0.10000000000000142;
		t.size = 23;
		t.text = "-600";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 94;
		t.y = 116.49;
		return t;
	};
	_proto.offline4_i = function () {
		var t = new eui.Image();
		this.offline4 = t;
		t.height = 80;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headoffline";
		t.width = 80;
		t.x = 10.5;
		t.y = 11;
		return t;
	};
	_proto.messagebg4_i = function () {
		var t = new eui.Group();
		this.messagebg4 = t;
		t.x = 79.67;
		t.y = 19.34;
		t.elementsContent = [this._Image11_i(),this.message4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(19,6,9,22);
		t.source = "pph_sh_img0_json.sh_qipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message4_i = function () {
		var t = new eui.Label();
		this.message4 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "怎么又断线了，网络怎么这";
		t.textColor = 0x000000;
		t.verticalCenter = -2;
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
	_proto.addPoint4_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint4 = t;
		t.font = "sh_orange_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.text = "+99999";
		t.y = -48;
		return t;
	};
	_proto._img_roomowner4_i = function () {
		var t = new eui.Image();
		this._img_roomowner4 = t;
		t.horizontalCenter = 0.10000000000000142;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_sh_img0_json.sh_roomowner";
		t.y = -1.66;
		return t;
	};
	_proto.headGroup5_i = function () {
		var t = new eui.Group();
		this.headGroup5 = t;
		t.height = 134;
		t.width = 91;
		t.x = 25;
		t.y = 268.48;
		t.elementsContent = [this.cardsGroup5_i(),this.headBg5_i(),this.headImg5_i(),this.yyxiaoxi5_i(),this.nickname5_i(),this.score5_i(),this.offline5_i(),this.messagebg5_i(),this.headTouch5_i(),this.addPoint5_i(),this._img_roomowner5_i()];
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_4_3";
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
		t.source = "pph_sh_img0_json.card_bg";
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
		t.source = "pph_sh_img0_json.card_bg";
		t.width = 108;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.headBg5_i = function () {
		var t = new eui.Image();
		this.headBg5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headbg_shu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg5_i = function () {
		var t = new eui.Image();
		this.headImg5 = t;
		t.height = 79;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_head_default";
		t.width = 79;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.yyxiaoxi5_i = function () {
		var t = new eui.Image();
		this.yyxiaoxi5 = t;
		t.horizontalCenter = -0.3999999999999986;
		t.source = "pph_sh_img0_json.sh_yy_laba";
		t.y = 75;
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = -0.3999999999999986;
		t.size = 23;
		t.text = "smile";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 115;
		t.y = 90.53;
		return t;
	};
	_proto.score5_i = function () {
		var t = new eui.Label();
		this.score5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0.10000000000000142;
		t.size = 23;
		t.text = "-600";
		t.textAlign = "center";
		t.textColor = 0xF4E135;
		t.verticalAlign = "middle";
		t.width = 94;
		t.y = 116.49;
		return t;
	};
	_proto.offline5_i = function () {
		var t = new eui.Image();
		this.offline5 = t;
		t.height = 80;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pph_sh_img0_json.sh_headoffline";
		t.width = 80;
		t.x = 10.5;
		t.y = 11;
		return t;
	};
	_proto.messagebg5_i = function () {
		var t = new eui.Group();
		this.messagebg5 = t;
		t.x = 79.67;
		t.y = 19.34;
		t.elementsContent = [this._Image12_i(),this.message5_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(19,6,9,22);
		t.source = "pph_sh_img0_json.sh_qipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message5_i = function () {
		var t = new eui.Label();
		this.message5 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "怎么又断线了，网络怎么这";
		t.textColor = 0x000000;
		t.verticalCenter = -2;
		return t;
	};
	_proto.headTouch5_i = function () {
		var t = new eui.Rect();
		this.headTouch5 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.addPoint5_i = function () {
		var t = new eui.BitmapLabel();
		this.addPoint5 = t;
		t.font = "sh_orange_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.text = "-99999";
		t.y = -48;
		return t;
	};
	_proto._img_roomowner5_i = function () {
		var t = new eui.Image();
		this._img_roomowner5 = t;
		t.horizontalCenter = 0.10000000000000142;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pph_sh_img0_json.sh_roomowner";
		t.y = -1.66;
		return t;
	};
	_proto.xiazhu_action_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_action_group = t;
		t.height = 71;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.width = 331;
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
		t.skinName = NewFile$Skin75;
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
		t.skinName = NewFile$Skin76;
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
		t.skinName = NewFile$Skin77;
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
		t.skinName = NewFile$Skin78;
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
		t.skinName = NewFile$Skin79;
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
		t.skinName = NewFile$Skin80;
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
		t.skinName = NewFile$Skin81;
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
		t.skinName = NewFile$Skin82;
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
		t.alpha = 1;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin83;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.visible = false;
		t.x = -34;
		t.y = -104;
		t.elementsContent = [this._Image13_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image13_i = function () {
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
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin84;
		return t;
	};
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 71;
		t.horizontalCenter = 5.5;
		t.width = 71;
		t.y = 374.34;
		t.elementsContent = [this.startBtn_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleY = 0.85;
		t.source = "pph_sh_img0_json.sh_btn_bg_lv";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "pph_sh_img0_json.sh_txt_startgame_lv";
		t.x = 33;
		t.y = 16.35;
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
		t.horizontalCenter = -283;
		t.size = 35;
		t.text = "弃牌";
		t.textColor = 0x020000;
		t.verticalCenter = 136.5;
		t.visible = false;
		return t;
	};
	_proto._btn_quit_i = function () {
		var t = new eui.Button();
		this._btn_quit = t;
		t.horizontalCenter = -485;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = -291;
		t.skinName = NewFile$Skin85;
		return t;
	};
	_proto._rule_playCount_i = function () {
		var t = new eui.Label();
		this._rule_playCount = t;
		t.size = 23;
		t.text = "3/30";
		t.textColor = 0xf9c159;
		t.x = 1024;
		t.y = 56.34;
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Image();
		this.backHallBtn = t;
		t.source = "pph_sh_img0_json.sh_btn_cha";
		t.visible = false;
		t.x = 968;
		t.y = 20;
		return t;
	};
	return NewFile;
})(eui.Skin);