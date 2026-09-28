
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/zhuoyueShisan/sss_chooseCard.exml'] = window.sss_chooseCard = (function (_super) {
	__extends(sss_chooseCard, _super);
	var sss_chooseCard$Skin888 = 	(function (_super) {
		__extends(sss_chooseCard$Skin888, _super);
		function sss_chooseCard$Skin888() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin888.prototype;

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
		return sss_chooseCard$Skin888;
	})(eui.Skin);

	var sss_chooseCard$Skin889 = 	(function (_super) {
		__extends(sss_chooseCard$Skin889, _super);
		function sss_chooseCard$Skin889() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin889.prototype;

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
		return sss_chooseCard$Skin889;
	})(eui.Skin);

	var sss_chooseCard$Skin890 = 	(function (_super) {
		__extends(sss_chooseCard$Skin890, _super);
		function sss_chooseCard$Skin890() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin890.prototype;

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
		return sss_chooseCard$Skin890;
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
		t.skinName = sss_chooseCard$Skin888;
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
		t.skinName = sss_chooseCard$Skin889;
		return t;
	};
	_proto.specialConfirmBtn_i = function () {
		var t = new eui.Button();
		this.specialConfirmBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 370;
		t.skinName = sss_chooseCard$Skin890;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhuoyueShisan/sss_chooseItem.exml'] = window.sss_chooseItem = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhuoyueShisan/sss_headbox.exml'] = window.sss_headbox = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhuoyueShisan/sss_index.exml'] = window.sss_index = (function (_super) {
	__extends(sss_index, _super);
	var sss_index$Skin891 = 	(function (_super) {
		__extends(sss_index$Skin891, _super);
		function sss_index$Skin891() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_index$Skin891.prototype;

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
		return sss_index$Skin891;
	})(eui.Skin);

	var sss_index$Skin892 = 	(function (_super) {
		__extends(sss_index$Skin892, _super);
		function sss_index$Skin892() {
			_super.call(this);
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
		var _proto = sss_index$Skin892.prototype;

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
		return sss_index$Skin892;
	})(eui.Skin);

	var sss_index$Skin893 = 	(function (_super) {
		__extends(sss_index$Skin893, _super);
		function sss_index$Skin893() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_index$Skin893.prototype;

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
		return sss_index$Skin893;
	})(eui.Skin);

	var sss_index$Skin894 = 	(function (_super) {
		__extends(sss_index$Skin894, _super);
		function sss_index$Skin894() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_index$Skin894.prototype;

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
		return sss_index$Skin894;
	})(eui.Skin);

	var sss_index$Skin895 = 	(function (_super) {
		__extends(sss_index$Skin895, _super);
		function sss_index$Skin895() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_index$Skin895.prototype;

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
		return sss_index$Skin895;
	})(eui.Skin);

	var sss_index$Skin896 = 	(function (_super) {
		__extends(sss_index$Skin896, _super);
		function sss_index$Skin896() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_index$Skin896.prototype;

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
		return sss_index$Skin896;
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
		t.height = 71;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 71;
		t.skinName = sss_index$Skin891;
		return t;
	};
	_proto.locGroup_i = function () {
		var t = new eui.Group();
		this.locGroup = t;
		t.height = 71;
		t.visible = false;
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
		t.skinName = sss_index$Skin892;
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
		t.height = 71;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 71;
		t.skinName = sss_index$Skin893;
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
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cgImage_json.menuBtn";
		t.x = 21;
		t.y = 21;
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
		t.skinName = sss_index$Skin894;
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
		t.skinName = sss_index$Skin895;
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
		t.visible = false;
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
		t.skinName = sss_index$Skin896;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhuoyueShisan/sss_pgHead.exml'] = window.sss_pgHead = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/zhuoyueShisan/sss_totalResult.exml'] = window.sss_totalResult = (function (_super) {
	__extends(sss_totalResult, _super);
	var sss_totalResult$Skin897 = 	(function (_super) {
		__extends(sss_totalResult$Skin897, _super);
		function sss_totalResult$Skin897() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_totalResult$Skin897.prototype;

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
		return sss_totalResult$Skin897;
	})(eui.Skin);

	var sss_totalResult$Skin898 = 	(function (_super) {
		__extends(sss_totalResult$Skin898, _super);
		function sss_totalResult$Skin898() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_totalResult$Skin898.prototype;

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
		return sss_totalResult$Skin898;
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
		t.height = 2000;
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
		t.skinName = sss_totalResult$Skin897;
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
		t.skinName = sss_totalResult$Skin898;
		return t;
	};
	return sss_totalResult;
})(eui.Skin);