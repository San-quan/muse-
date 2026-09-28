
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/ShisanWater/sss_chooseCard.exml'] = window.sss_chooseCard = (function (_super) {
	__extends(sss_chooseCard, _super);
	var sss_chooseCard$Skin589 = 	(function (_super) {
		__extends(sss_chooseCard$Skin589, _super);
		function sss_chooseCard$Skin589() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin589.prototype;

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
		return sss_chooseCard$Skin589;
	})(eui.Skin);

	var sss_chooseCard$Skin590 = 	(function (_super) {
		__extends(sss_chooseCard$Skin590, _super);
		function sss_chooseCard$Skin590() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin590.prototype;

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
		return sss_chooseCard$Skin590;
	})(eui.Skin);

	var sss_chooseCard$Skin591 = 	(function (_super) {
		__extends(sss_chooseCard$Skin591, _super);
		function sss_chooseCard$Skin591() {
			_super.call(this);
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
		var _proto = sss_chooseCard$Skin591.prototype;

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
		return sss_chooseCard$Skin591;
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
		t.skinName = sss_chooseCard$Skin589;
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
		t.skinName = sss_chooseCard$Skin590;
		return t;
	};
	_proto.specialConfirmBtn_i = function () {
		var t = new eui.Button();
		this.specialConfirmBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 370;
		t.skinName = sss_chooseCard$Skin591;
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
		this.skinParts = ["top0","top1","top2","topTit","mycardTop","mid0","mid1","mid2","mid3","mid4","midTit","mycardMid","bottom0","bottom1","bottom2","bottom3","bottom4","botTit","mycardBottom","hasReadyCardsGroup","nickname","point","infoBox","headDi","headImg","offline","sitBtn","dalaba","hasReady","headGroup","pai0","pai1","pai2","pai3","pai4","pai5","pai6","pai7","pai8","pai9","pai10","pai11","pai12","specialTit","specialGroup","lipai0","lipai1","lipai2","lipai3","lipai4","lipai5","lipai6","peipai","lipaiGroup","mbg","message","messagebg","_bitLabel_myPoint","topPoint","topTitle","topGroup","midPoint","midTitle","midGroup","bottomPoint","botttomTitle","bottomGroup","totalPoint","totalTitle","totalGroup","mainGroup","headTouch"];
		
		this.elementsContent = [this.mainGroup_i(),this.headTouch_i()];
	}
	var _proto = sss_headbox.prototype;

	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.bottom = 0;
		t.height = 107;
		t.horizontalCenter = 0;
		t.width = 107;
		t.elementsContent = [this.hasReadyCardsGroup_i(),this.infoBox_i(),this.headGroup_i(),this.specialGroup_i(),this.lipaiGroup_i(),this.messagebg_i(),this._bitLabel_myPoint_i(),this.topGroup_i(),this.midGroup_i(),this.bottomGroup_i(),this.totalGroup_i()];
		return t;
	};
	_proto.hasReadyCardsGroup_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup = t;
		t.height = 260;
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
	_proto.infoBox_i = function () {
		var t = new eui.Group();
		this.infoBox = t;
		t.x = -109;
		t.y = 24;
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
		t.width = 120;
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
		t.width = 226;
		t.x = 220;
		t.y = -200;
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
		t.x = 220;
		t.y = -140;
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
		t.x = 220;
		t.y = -80;
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
		t.x = 220;
		t.y = -25;
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
	var sss_index$Skin592 = 	(function (_super) {
		__extends(sss_index$Skin592, _super);
		function sss_index$Skin592() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_index$Skin592.prototype;

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
		return sss_index$Skin592;
	})(eui.Skin);

	var sss_index$Skin593 = 	(function (_super) {
		__extends(sss_index$Skin593, _super);
		function sss_index$Skin593() {
			_super.call(this);
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
		var _proto = sss_index$Skin593.prototype;

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
		return sss_index$Skin593;
	})(eui.Skin);

	var sss_index$Skin594 = 	(function (_super) {
		__extends(sss_index$Skin594, _super);
		function sss_index$Skin594() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_index$Skin594.prototype;

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
		return sss_index$Skin594;
	})(eui.Skin);

	var sss_index$Skin595 = 	(function (_super) {
		__extends(sss_index$Skin595, _super);
		function sss_index$Skin595() {
			_super.call(this);
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
		var _proto = sss_index$Skin595.prototype;

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
		return sss_index$Skin595;
	})(eui.Skin);

	function sss_index() {
		_super.call(this);
		this.skinParts = ["top3","top0","top1","topTit0","mycardTop0","mid5","mid0","mid1","mid2","mid3","midTit0","mycardMid0","bottom5","bottom0","bottom1","bottom2","bottom3","botTit0","mycardBottom0","hasReadyCardsGroup0","nickname0","point0","infoBox0","headDi0","headImg0","offline0","sitBtn0","dalaba0","hasReady0","headGroup0","pai13","pai0","pai1","pai2","pai3","pai4","pai5","pai6","pai7","pai8","pai9","pai10","pai11","specialTit0","specialGroup0","lipai7","lipai0","lipai1","lipai2","lipai3","lipai4","lipai5","peipai0","lipaiGroup0","mbg0","message0","messagebg0","_bitLabel_myPoint0","topPoint0","topTitle0","topGroup0","midPoint0","midTitle0","midGroup0","bottomPoint0","botttomTitle0","bottomGroup0","totalPoint0","totalTitle0","totalGroup0","_img_logo","daojiGuang","daojishiTxt","daojiGroup","bottomBg","xiaoxiBtn","xxGroup","locBtn","locGroup","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","_rule_pwd","_rule_playCount","_rule_payMode","_rule_kaipai","_rule_guipai","_rule_specialCard","_gp_rulebg","menu","pg_Content","pangguanGroup","startBtn","startBtnGroup","_img_music"];
		
		this.height = 1080;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._img_logo_i(),this.daojiGroup_i(),this.bottomBg_i(),this.xxGroup_i(),this.locGroup_i(),this.yyGroup_i(),this._gp_rulebg_i(),this.menu_i(),this.pangguanGroup_i(),this.startBtnGroup_i(),this._img_music_i()];
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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 107;
		t.visible = false;
		t.width = 107;
		t.x = 206;
		t.y = 946;
		t.elementsContent = [this.hasReadyCardsGroup0_i(),this.infoBox0_i(),this.headGroup0_i(),this.specialGroup0_i(),this.lipaiGroup0_i(),this.messagebg0_i(),this._bitLabel_myPoint0_i(),this.topGroup0_i(),this.midGroup0_i(),this.bottomGroup0_i(),this.totalGroup0_i()];
		return t;
	};
	_proto.hasReadyCardsGroup0_i = function () {
		var t = new eui.Group();
		this.hasReadyCardsGroup0 = t;
		t.height = 260;
		t.width = 225;
		t.x = 1;
		t.y = -235;
		t.elementsContent = [this.mycardTop0_i(),this.mycardMid0_i(),this.mycardBottom0_i()];
		return t;
	};
	_proto.mycardTop0_i = function () {
		var t = new eui.Group();
		this.mycardTop0 = t;
		t.height = 119;
		t.horizontalCenter = 0.5;
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
	_proto.infoBox0_i = function () {
		var t = new eui.Group();
		this.infoBox0 = t;
		t.x = 95;
		t.y = 24;
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
		t.width = 120;
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
		t.visible = false;
		return t;
	};
	_proto.specialGroup0_i = function () {
		var t = new eui.Group();
		this.specialGroup0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = -41;
		t.y = 47;
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
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 211.24;
		t.y = 21;
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
		t.visible = false;
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
		t.x = 182;
		t.y = -200;
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
		t.x = 182;
		t.y = -140;
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
		t.x = 182;
		t.y = -80;
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
		t.x = 182;
		t.y = -25;
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
		t.x = 0;
		t.y = 11;
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
		t.y = 377;
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
		t.y = 821;
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
		t.skinName = sss_index$Skin592;
		return t;
	};
	_proto.locGroup_i = function () {
		var t = new eui.Group();
		this.locGroup = t;
		t.height = 71;
		t.visible = false;
		t.width = 71;
		t.x = 12;
		t.y = 993;
		t.elementsContent = [this.locBtn_i()];
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sss_index$Skin593;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 71;
		t.width = 71;
		t.x = 12;
		t.y = 907;
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
		t.skinName = sss_index$Skin594;
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
		t.y = 77.2;
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
		t.x = -53;
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
		t.elementsContent = [this._Group3_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Group2_i(),this._Label1_i()];
		return t;
	};
	_proto._Group2_i = function () {
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
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 86;
		t.elementsContent = [this._Group4_i(),this._Label2_i()];
		return t;
	};
	_proto._Group4_i = function () {
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
	_proto.startBtnGroup_i = function () {
		var t = new eui.Group();
		this.startBtnGroup = t;
		t.height = 71;
		t.horizontalCenter = 0;
		t.visible = false;
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
		t.skinName = sss_index$Skin595;
		return t;
	};
	_proto._img_music_i = function () {
		var t = new eui.Image();
		this._img_music = t;
		t.height = 71;
		t.source = "tz_game_public_json.btn_music_on";
		t.visible = false;
		t.width = 71;
		t.x = 12;
		t.y = 993;
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
	var sss_totalResult$Skin596 = 	(function (_super) {
		__extends(sss_totalResult$Skin596, _super);
		function sss_totalResult$Skin596() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_totalResult$Skin596.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
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
		return sss_totalResult$Skin596;
	})(eui.Skin);

	var sss_totalResult$Skin597 = 	(function (_super) {
		__extends(sss_totalResult$Skin597, _super);
		function sss_totalResult$Skin597() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sss_totalResult$Skin597.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
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
		return sss_totalResult$Skin597;
	})(eui.Skin);

	function sss_totalResult() {
		_super.call(this);
		this.skinParts = ["_rect_menban","headImg0","nickname0","ID0","point0","_img_bigWin0","item0","headImg1","nickname1","ID1","point1","_img_bigWin1","item1","headImg2","nickname2","ID2","point2","_img_bigWin2","item2","headImg3","nickname3","ID3","point3","_img_bigWin3","item3","pwd","playcount","gamename","time","_gp_main","backHall","jietu","playAgain","_gp_bot"];
		
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
		t.y = 40.03;
		t.elementsContent = [this._Group5_i(),this._Label1_i(),this._Group6_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 283;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xefefef;
		t.height = 110;
		t.width = 580;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfefefe;
		t.height = 110;
		t.width = 580;
		t.y = 110;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xEFEFEF;
		t.height = 110;
		t.width = 580;
		t.y = 220;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfefefe;
		t.height = 110;
		t.width = 580;
		t.y = 330;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.height = 110;
		t.width = 580;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg0_i(),this._Group1_i(),this.point0_i(),this._img_bigWin0_i()];
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
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname0_i(),this.ID0_i()];
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.size = 55;
		t.text = "+99999";
		t.textColor = 0x9a7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin0_i = function () {
		var t = new eui.Image();
		this._img_bigWin0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 110;
		t.width = 580;
		t.x = 0;
		t.y = 110;
		t.elementsContent = [this.headImg1_i(),this._Group2_i(),this.point1_i(),this._img_bigWin1_i()];
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
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname1_i(),this.ID1_i()];
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.size = 55;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin1_i = function () {
		var t = new eui.Image();
		this._img_bigWin1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 110;
		t.width = 580;
		t.x = 0;
		t.y = 220;
		t.elementsContent = [this.headImg2_i(),this._Group3_i(),this.point2_i(),this._img_bigWin2_i()];
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
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname2_i(),this.ID2_i()];
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.size = 55;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin2_i = function () {
		var t = new eui.Image();
		this._img_bigWin2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 110;
		t.width = 580;
		t.x = 0;
		t.y = 330;
		t.elementsContent = [this.headImg3_i(),this._Group4_i(),this.point3_i(),this._img_bigWin3_i()];
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
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname3_i(),this.ID3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.size = 55;
		t.text = "+999";
		t.textColor = 0x9a7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin3_i = function () {
		var t = new eui.Image();
		this._img_bigWin3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "战绩";
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 61;
		t.elementsContent = [this._Rect5_i(),this._Rect6_i(),this.pwd_i(),this.playcount_i(),this.gamename_i(),this.time_i()];
		return t;
	};
	_proto._Rect5_i = function () {
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
	_proto._Rect6_i = function () {
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
		t.text = "象山十三水";
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
		t.y = 939.82;
		t.elementsContent = [this._Label2_i(),this._Group7_i()];
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
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 54;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.backHall_i(),this.jietu_i(),this.playAgain_i()];
		return t;
	};
	_proto.backHall_i = function () {
		var t = new eui.Button();
		this.backHall = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = sss_totalResult$Skin596;
		return t;
	};
	_proto.jietu_i = function () {
		var t = new eui.Button();
		this.jietu = t;
		t.horizontalCenter = -11.5;
		t.label = "";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.playAgain_i = function () {
		var t = new eui.Button();
		this.playAgain = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.x = 302;
		t.skinName = sss_totalResult$Skin597;
		return t;
	};
	return sss_totalResult;
})(eui.Skin);