
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/public/roomLifeUI.exml'] = window.roomLifeUI = (function (_super) {
	__extends(roomLifeUI, _super);
	function roomLifeUI() {
		_super.call(this);
		this.skinParts = ["contentText"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = roomLifeUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.contentText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "ingameTip_png";
		t.width = 590;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.contentText_i = function () {
		var t = new eui.Label();
		this.contentText = t;
		t.horizontalCenter = 0;
		t.text = "9999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return roomLifeUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shisanShui/create13shui.exml'] = window.create13shui = (function (_super) {
	__extends(create13shui, _super);
	var create13shui$Skin544 = 	(function (_super) {
		__extends(create13shui$Skin544, _super);
		function create13shui$Skin544() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin544.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin544;
	})(eui.Skin);

	var create13shui$Skin545 = 	(function (_super) {
		__extends(create13shui$Skin545, _super);
		function create13shui$Skin545() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin545.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin545;
	})(eui.Skin);

	var create13shui$Skin546 = 	(function (_super) {
		__extends(create13shui$Skin546, _super);
		function create13shui$Skin546() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin546.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin546;
	})(eui.Skin);

	var create13shui$Skin547 = 	(function (_super) {
		__extends(create13shui$Skin547, _super);
		function create13shui$Skin547() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_checkbox_1 2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin547.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_checkbox_2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin547;
	})(eui.Skin);

	var create13shui$Skin548 = 	(function (_super) {
		__extends(create13shui$Skin548, _super);
		function create13shui$Skin548() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin548.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin548;
	})(eui.Skin);

	var create13shui$Skin549 = 	(function (_super) {
		__extends(create13shui$Skin549, _super);
		function create13shui$Skin549() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin549.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin549;
	})(eui.Skin);

	var create13shui$Skin550 = 	(function (_super) {
		__extends(create13shui$Skin550, _super);
		function create13shui$Skin550() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin550.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin550;
	})(eui.Skin);

	var create13shui$Skin551 = 	(function (_super) {
		__extends(create13shui$Skin551, _super);
		function create13shui$Skin551() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin551.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin551;
	})(eui.Skin);

	var create13shui$Skin552 = 	(function (_super) {
		__extends(create13shui$Skin552, _super);
		function create13shui$Skin552() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin552.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin552;
	})(eui.Skin);

	var create13shui$Skin553 = 	(function (_super) {
		__extends(create13shui$Skin553, _super);
		function create13shui$Skin553() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin553.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin553;
	})(eui.Skin);

	var create13shui$Skin554 = 	(function (_super) {
		__extends(create13shui$Skin554, _super);
		function create13shui$Skin554() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin554.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin554;
	})(eui.Skin);

	var create13shui$Skin555 = 	(function (_super) {
		__extends(create13shui$Skin555, _super);
		function create13shui$Skin555() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hallImage_json.tdh_btn_radio_1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = create13shui$Skin555.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.tdh_btn_radio_2 2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 60;
			return t;
		};
		return create13shui$Skin555;
	})(eui.Skin);

	var create13shui$Skin556 = 	(function (_super) {
		__extends(create13shui$Skin556, _super);
		function create13shui$Skin556() {
			_super.call(this);
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
		var _proto = create13shui$Skin556.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.createRoom";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return create13shui$Skin556;
	})(eui.Skin);

	var create13shui$Skin557 = 	(function (_super) {
		__extends(create13shui$Skin557, _super);
		function create13shui$Skin557() {
			_super.call(this);
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
		var _proto = create13shui$Skin557.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallImage_json.backTitle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return create13shui$Skin557;
	})(eui.Skin);

	function create13shui() {
		_super.call(this);
		this.skinParts = ["m_menban","hallbg","m_jushu1","m_jushu3","m_jushu2","m_jushu","m_ma","maCard","m_mapai","m_peoplecount0","m_peoplecount1","m_peoplecount2","m_peoplecount3","m_peoplecount","m_lipai1","m_lipai2","m_lipai3","m_lipai4","m_lipai","m_create","m_showtip","m_close","m_mianban","m_menban0","juhua","creating"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this.m_menban_i(),this.m_mianban_i(),this.creating_i()];
	}
	var _proto = create13shui.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.height = 720;
		t.source = "common_image_json.public_meng2";
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_mianban_i = function () {
		var t = new eui.Group();
		this.m_mianban = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1215;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.hallbg_i(),this.m_jushu_i(),this.m_mapai_i(),this.m_peoplecount_i(),this.m_lipai_i(),this.m_create_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.horizontalCenter = -1.5;
		t.source = "hallImage_json.createBottom";
		t.width = 1215;
		t.y = -2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.source = "hallImage_json.createTop";
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hallImage_json.dysssTitle";
		t.x = 25;
		t.y = 25;
		return t;
	};
	_proto.hallbg_i = function () {
		var t = new eui.Image();
		this.hallbg = t;
		t.height = 550;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(87,86,13,8);
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hallImage_json.createBg";
		t.verticalCenter = 0;
		t.width = 1054;
		return t;
	};
	_proto.m_jushu_i = function () {
		var t = new eui.Group();
		this.m_jushu = t;
		t.x = 300;
		t.y = 270;
		t.elementsContent = [this._Label1_i(),this.m_jushu1_i(),this.m_jushu3_i(),this.m_jushu2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "局数：";
		t.verticalCenter = 0;
		t.x = -100;
		return t;
	};
	_proto.m_jushu1_i = function () {
		var t = new eui.RadioButton();
		this.m_jushu1 = t;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "20局";
		t.value = "20";
		t.width = 47;
		t.x = 200;
		t.y = 0;
		t.skinName = create13shui$Skin544;
		return t;
	};
	_proto.m_jushu3_i = function () {
		var t = new eui.RadioButton();
		this.m_jushu3 = t;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "30局";
		t.value = "30";
		t.width = 47;
		t.x = 400;
		t.y = 0;
		t.skinName = create13shui$Skin545;
		return t;
	};
	_proto.m_jushu2_i = function () {
		var t = new eui.RadioButton();
		this.m_jushu2 = t;
		t.enabled = true;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "10局";
		t.selected = true;
		t.value = "10";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 0;
		t.skinName = create13shui$Skin546;
		return t;
	};
	_proto.m_mapai_i = function () {
		var t = new eui.Group();
		this.m_mapai = t;
		t.x = 300;
		t.y = 456.98;
		t.elementsContent = [this._Label2_i(),this.m_ma_i(),this.maCard_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "马牌：";
		t.verticalCenter = 0;
		t.x = -100;
		return t;
	};
	_proto.m_ma_i = function () {
		var t = new eui.CheckBox();
		this.m_ma = t;
		t.height = 46.5;
		t.label = "输赢积分翻倍";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = false;
		t.verticalCenter = 0;
		t.width = 54;
		t.x = -2;
		t.skinName = create13shui$Skin547;
		return t;
	};
	_proto.maCard_i = function () {
		var t = new eui.Image();
		this.maCard = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pai_json.t14";
		t.verticalCenter = 0;
		t.x = 285.66;
		return t;
	};
	_proto.m_peoplecount_i = function () {
		var t = new eui.Group();
		this.m_peoplecount = t;
		t.x = 300;
		t.y = 150;
		t.elementsContent = [this._Label3_i(),this.m_peoplecount0_i(),this.m_peoplecount1_i(),this.m_peoplecount2_i(),this.m_peoplecount3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "人数：";
		t.x = -100;
		t.y = 9;
		return t;
	};
	_proto.m_peoplecount0_i = function () {
		var t = new eui.RadioButton();
		this.m_peoplecount0 = t;
		t.groupName = "m_peoplecount";
		t.height = 47;
		t.label = "4人";
		t.selected = true;
		t.value = "4";
		t.width = 47;
		t.x = 0;
		t.y = 0;
		t.skinName = create13shui$Skin548;
		return t;
	};
	_proto.m_peoplecount1_i = function () {
		var t = new eui.RadioButton();
		this.m_peoplecount1 = t;
		t.groupName = "m_peoplecount";
		t.height = 47;
		t.label = "5人(加一色)";
		t.selected = false;
		t.value = "5";
		t.width = 47;
		t.x = 200;
		t.y = 0;
		t.skinName = create13shui$Skin549;
		return t;
	};
	_proto.m_peoplecount2_i = function () {
		var t = new eui.RadioButton();
		this.m_peoplecount2 = t;
		t.groupName = "m_peoplecount";
		t.height = 47;
		t.label = "3人";
		t.selected = false;
		t.value = "3";
		t.width = 47;
		t.x = 0;
		t.y = 60;
		t.skinName = create13shui$Skin550;
		return t;
	};
	_proto.m_peoplecount3_i = function () {
		var t = new eui.RadioButton();
		this.m_peoplecount3 = t;
		t.groupName = "m_peoplecount";
		t.height = 47;
		t.label = "2人";
		t.selected = false;
		t.value = "2";
		t.width = 47;
		t.x = 200;
		t.y = 60;
		t.skinName = create13shui$Skin551;
		return t;
	};
	_proto.m_lipai_i = function () {
		var t = new eui.Group();
		this.m_lipai = t;
		t.x = 300;
		t.y = 333.32;
		t.elementsContent = [this._Label4_i(),this.m_lipai1_i(),this.m_lipai2_i(),this.m_lipai3_i(),this.m_lipai4_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "玩法：";
		t.x = -100;
		t.y = 9;
		return t;
	};
	_proto.m_lipai1_i = function () {
		var t = new eui.RadioButton();
		this.m_lipai1 = t;
		t.groupName = "m_lipai";
		t.height = 47;
		t.label = "30秒";
		t.selected = true;
		t.value = "30";
		t.width = 47;
		t.x = 0;
		t.y = 0;
		t.skinName = create13shui$Skin552;
		return t;
	};
	_proto.m_lipai2_i = function () {
		var t = new eui.RadioButton();
		this.m_lipai2 = t;
		t.groupName = "m_lipai";
		t.height = 47;
		t.label = "60秒";
		t.selected = false;
		t.value = "60";
		t.width = 47;
		t.x = 200;
		t.y = 0;
		t.skinName = create13shui$Skin553;
		return t;
	};
	_proto.m_lipai3_i = function () {
		var t = new eui.RadioButton();
		this.m_lipai3 = t;
		t.groupName = "m_lipai";
		t.height = 47;
		t.label = "90秒";
		t.selected = false;
		t.value = "90";
		t.verticalCenter = 30;
		t.width = 47;
		t.x = 0;
		t.skinName = create13shui$Skin554;
		return t;
	};
	_proto.m_lipai4_i = function () {
		var t = new eui.RadioButton();
		this.m_lipai4 = t;
		t.groupName = "m_lipai";
		t.height = 47;
		t.label = "不限时";
		t.selected = false;
		t.value = "0";
		t.verticalCenter = 30;
		t.width = 47;
		t.x = 200;
		t.skinName = create13shui$Skin555;
		return t;
	};
	_proto.m_create_i = function () {
		var t = new eui.Button();
		this.m_create = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 625;
		t.skinName = create13shui$Skin556;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 550;
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
		t.textColor = 0xffee38;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 66;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 72;
		t.x = 1097.23;
		t.y = 15.44;
		t.elementsContent = [this.m_close_i()];
		return t;
	};
	_proto.m_close_i = function () {
		var t = new eui.Button();
		this.m_close = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = create13shui$Skin557;
		return t;
	};
	_proto.creating_i = function () {
		var t = new eui.Group();
		this.creating = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.m_menban0_i(),this.juhua_i()];
		return t;
	};
	_proto.m_menban0_i = function () {
		var t = new eui.Image();
		this.m_menban0 = t;
		t.percentHeight = 100;
		t.source = "common_image_json.public_meng2";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
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
	return create13shui;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shisanShui/disabled.exml'] = window.disabled = (function (_super) {
	__extends(disabled, _super);
	var disabled$Skin558 = 	(function (_super) {
		__extends(disabled$Skin558, _super);
		function disabled$Skin558() {
			_super.call(this);
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
		var _proto = disabled$Skin558.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesanRefuse";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return disabled$Skin558;
	})(eui.Skin);

	var disabled$Skin559 = 	(function (_super) {
		__extends(disabled$Skin559, _super);
		function disabled$Skin559() {
			_super.call(this);
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
		var _proto = disabled$Skin559.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesanAgree";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return disabled$Skin559;
	})(eui.Skin);

	function disabled() {
		_super.call(this);
		this.skinParts = ["jiesanDesc","daojiNum","statusBg0","nickname0","status0","head0","item0","statusBg1","nickname1","status1","head1","item1","statusBg2","nickname2","status2","head2","item2","statusBg3","nickname3","status3","head3","item3","statusBg4","nickname4","status4","head4","item4","refuse","agree"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.jiesanDesc_i(),this._Label1_i(),this.daojiNum_i(),this._Image3_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this._Group8_i(),this._Image10_i(),this._Image11_i()];
	}
	var _proto = disabled.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiesanBg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jiesanDesc_i = function () {
		var t = new eui.Label();
		this.jiesanDesc = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "玩家申请解散房间是否同意，全部玩家同意后房间会被解散。";
		t.textAlign = "center";
		t.textColor = 0x73678d;
		t.width = 750;
		t.y = 193;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "超过一分钟未做选择，则默认同意";
		t.textColor = 0x73678d;
		t.x = 403;
		t.y = 228.35;
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
		t.y = 139.2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_mid_bg";
		t.y = 274.77;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 216.6;
		t.y = 278.44;
		t.elementsContent = [this.statusBg0_i(),this.nickname0_i(),this.status0_i(),this._Group1_i()];
		return t;
	};
	_proto.statusBg0_i = function () {
		var t = new eui.Image();
		this.statusBg0 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_agree";
		t.y = 143;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "紫碧罗科技";
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
		t.elementsContent = [this.head0_i(),this._Image4_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 360.6;
		t.y = 278.44;
		t.elementsContent = [this.statusBg1_i(),this.nickname1_i(),this.status1_i(),this._Group2_i()];
		return t;
	};
	_proto.statusBg1_i = function () {
		var t = new eui.Image();
		this.statusBg1 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_waiting";
		t.y = 143;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "紫碧罗科技";
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
		t.elementsContent = [this.head1_i(),this._Image5_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 506.6;
		t.y = 278.44;
		t.elementsContent = [this._Image6_i(),this.statusBg2_i(),this.nickname2_i(),this.status2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image6_i = function () {
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
		t.source = "jiesan_json.sss_jiesan_waiting";
		t.y = 143;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "紫碧罗科技";
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
		t.elementsContent = [this.head2_i(),this._Image7_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.x = 650.6;
		t.y = 278.44;
		t.elementsContent = [this.statusBg3_i(),this.nickname3_i(),this.status3_i(),this._Group4_i()];
		return t;
	};
	_proto.statusBg3_i = function () {
		var t = new eui.Image();
		this.statusBg3 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_waiting";
		t.y = 143;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "紫碧罗科技";
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
		t.elementsContent = [this.head3_i(),this._Image8_i()];
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.x = 796.6;
		t.y = 278.44;
		t.elementsContent = [this.statusBg4_i(),this.nickname4_i(),this.status4_i(),this._Group5_i()];
		return t;
	};
	_proto.statusBg4_i = function () {
		var t = new eui.Image();
		this.statusBg4 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_waiting";
		t.y = 143;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "紫碧罗科技";
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
		t.elementsContent = [this.head4_i(),this._Image9_i()];
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Image();
		this.head4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3;
		t.width = 70;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_Image_Kuang";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 475.02;
		t.elementsContent = [this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group6_i = function () {
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
		t.skinName = disabled$Skin558;
		return t;
	};
	_proto._Group7_i = function () {
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
		t.skinName = disabled$Skin559;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "disbandClock";
		t.y = 126.67;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_title";
		t.y = 68;
		return t;
	};
	return disabled;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shisanShui/headbox.exml'] = window.headbox = (function (_super) {
	__extends(headbox, _super);
	function headbox() {
		_super.call(this);
		this.skinParts = ["headDi","headImg","nickname","point","roomownerlogo","hasready","offline","singlePoint","msg","msgGroup","userInfo"];
		
		this.elementsContent = [this.userInfo_i()];
	}
	var _proto = headbox.prototype;

	_proto.userInfo_i = function () {
		var t = new eui.Group();
		this.userInfo = t;
		t.height = 84;
		t.width = 173;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headDi_i(),this.headImg_i(),this.nickname_i(),this.point_i(),this.roomownerlogo_i(),this.hasready_i(),this.offline_i(),this.singlePoint_i(),this.msgGroup_i()];
		return t;
	};
	_proto.headDi_i = function () {
		var t = new eui.Image();
		this.headDi = t;
		t.source = "headBoxDi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 39.5;
		t.size = 20;
		t.text = "紫碧罗科技";
		t.textAlign = "center";
		t.width = 80;
		t.y = 14.92;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Label();
		this.point = t;
		t.horizontalCenter = 51;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.y = 51.04;
		return t;
	};
	_proto.roomownerlogo_i = function () {
		var t = new eui.Image();
		this.roomownerlogo = t;
		t.source = "roomOwnerLogo";
		t.x = 5.74;
		t.y = 5;
		return t;
	};
	_proto.hasready_i = function () {
		var t = new eui.Image();
		this.hasready = t;
		t.source = "hasReady";
		t.x = 9;
		t.y = 39.58;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.source = "offline2_png";
		t.x = 7.36;
		t.y = 8.67;
		return t;
	};
	_proto.singlePoint_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 57.25;
		t.y = 80.31;
		return t;
	};
	_proto.msgGroup_i = function () {
		var t = new eui.Group();
		this.msgGroup = t;
		t.x = 29.5;
		t.y = -40.6;
		t.elementsContent = [this._Image1_i(),this.msg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.msg_i = function () {
		var t = new eui.Label();
		this.msg = t;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 8.99;
		return t;
	};
	return headbox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shisanShui/roomResult.exml'] = window.roomResult = (function (_super) {
	__extends(roomResult, _super);
	var roomResult$Skin560 = 	(function (_super) {
		__extends(roomResult$Skin560, _super);
		function roomResult$Skin560() {
			_super.call(this);
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
		var _proto = roomResult$Skin560.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "totalShare_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomResult$Skin560;
	})(eui.Skin);

	var roomResult$Skin561 = 	(function (_super) {
		__extends(roomResult$Skin561, _super);
		function roomResult$Skin561() {
			_super.call(this);
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
		var _proto = roomResult$Skin561.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "totalBack_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return roomResult$Skin561;
	})(eui.Skin);

	function roomResult() {
		_super.call(this);
		this.skinParts = ["itemBg0","head0","nickname0","ID0","bigWin0","allWinCount0","specialCount0","gunCount0","beGunCount0","allGunCount0","totalPoint0","item0","itemBg1","totalPoint1","allWinCount1","specialCount1","gunCount1","beGunCount1","allGunCount1","nickname1","ID1","head1","bigWin1","item1","itemBg2","totalPoint2","allWinCount2","specialCount2","gunCount2","beGunCount2","allGunCount2","head2","bigWin2","nickname2","ID2","item2","itemBg3","totalPoint3","allWinCount3","specialCount3","gunCount3","beGunCount3","allGunCount3","head3","bigWin3","nickname3","ID3","item3","itemBg4","totalPoint4","allWinCount4","specialCount4","gunCount4","beGunCount4","allGunCount4","head4","bigWin4","nickname4","ID4","item4","jieping","jieGroup","backHall","time","playcount","pwd","maCard","basescore","paymod"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group16_i(),this._Group18_i(),this._Group19_i(),this._Image14_i()];
	}
	var _proto = roomResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mengban_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "totalBg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 75.19;
		t.elementsContent = [this._Image3_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "total_mid_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 10.92;
		t.y = 16.66;
		t.elementsContent = [this.itemBg0_i(),this._Group1_i(),this.nickname0_i(),this.ID0_i(),this.bigWin0_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto.itemBg0_i = function () {
		var t = new eui.Image();
		this.itemBg0 = t;
		t.source = "totalLose_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 19.4;
		t.y = 15.94;
		t.elementsContent = [this._Image4_i(),this.head0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.horizontalCenter = 0;
		t.source = "headBg_png";
		t.verticalCenter = 0;
		t.width = 66;
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 100;
		t.x = 90;
		t.y = 27.07;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.height = 20;
		t.size = 20;
		t.text = "ID:666666";
		t.textColor = 0xffffff;
		t.width = 100;
		t.x = 90;
		t.y = 57.1;
		return t;
	};
	_proto.bigWin0_i = function () {
		var t = new eui.Image();
		this.bigWin0 = t;
		t.source = "bigWin_png";
		t.x = -1.63;
		t.y = -4.69;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label1_i(),this.allWinCount0_i(),this.specialCount0_i(),this.gunCount0_i(),this.beGunCount0_i(),this.allGunCount0_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "总赢牌局数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.allWinCount0_i = function () {
		var t = new eui.Label();
		this.allWinCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.specialCount0_i = function () {
		var t = new eui.Label();
		this.specialCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.gunCount0_i = function () {
		var t = new eui.Label();
		this.gunCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.beGunCount0_i = function () {
		var t = new eui.Label();
		this.beGunCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.allGunCount0_i = function () {
		var t = new eui.Label();
		this.allGunCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 160;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "特殊牌次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "打枪总次数";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "被打总次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "全垒打次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 369.32;
		t.elementsContent = [this.totalPoint0_i(),this._Image5_i()];
		return t;
	};
	_proto.totalPoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint0 = t;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 0;
		t.x = 79.32;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "total_scorel_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 215.92;
		t.y = 16.66;
		t.elementsContent = [this.itemBg1_i(),this._Group4_i(),this._Group5_i(),this.nickname1_i(),this.ID1_i(),this._Group6_i(),this.bigWin1_i()];
		return t;
	};
	_proto.itemBg1_i = function () {
		var t = new eui.Image();
		this.itemBg1 = t;
		t.source = "totalLose_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 369.32;
		t.elementsContent = [this.totalPoint1_i(),this._Image6_i()];
		return t;
	};
	_proto.totalPoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint1 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 0;
		t.x = 79.32;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "total_scorel_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label6_i(),this.allWinCount1_i(),this.specialCount1_i(),this.gunCount1_i(),this.beGunCount1_i(),this.allGunCount1_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "总赢牌局数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.allWinCount1_i = function () {
		var t = new eui.Label();
		this.allWinCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.specialCount1_i = function () {
		var t = new eui.Label();
		this.specialCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.gunCount1_i = function () {
		var t = new eui.Label();
		this.gunCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.beGunCount1_i = function () {
		var t = new eui.Label();
		this.beGunCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.allGunCount1_i = function () {
		var t = new eui.Label();
		this.allGunCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 160;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "特殊牌次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "打枪总次数";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "被打总次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "全垒打次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 90;
		t.y = 27.07;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 90;
		t.y = 57.1;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 19.4;
		t.y = 15.94;
		t.elementsContent = [this._Image7_i(),this.head1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.horizontalCenter = 0;
		t.source = "headBg_png";
		t.verticalCenter = 0;
		t.width = 66;
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.bigWin1_i = function () {
		var t = new eui.Image();
		this.bigWin1 = t;
		t.source = "bigWin_png";
		t.x = -0.11;
		t.y = -4.69;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 420.92;
		t.y = 16.66;
		t.elementsContent = [this.itemBg2_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this.bigWin2_i(),this.nickname2_i(),this.ID2_i()];
		return t;
	};
	_proto.itemBg2_i = function () {
		var t = new eui.Image();
		this.itemBg2 = t;
		t.source = "totalLose_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 369.32;
		t.elementsContent = [this.totalPoint2_i(),this._Image8_i()];
		return t;
	};
	_proto.totalPoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint2 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 0;
		t.x = 79.32;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "total_scorel_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label11_i(),this.allWinCount2_i(),this.specialCount2_i(),this.gunCount2_i(),this.beGunCount2_i(),this.allGunCount2_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "总赢牌局数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.allWinCount2_i = function () {
		var t = new eui.Label();
		this.allWinCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.specialCount2_i = function () {
		var t = new eui.Label();
		this.specialCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.gunCount2_i = function () {
		var t = new eui.Label();
		this.gunCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.beGunCount2_i = function () {
		var t = new eui.Label();
		this.beGunCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.allGunCount2_i = function () {
		var t = new eui.Label();
		this.allGunCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 160;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "特殊牌次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "打枪总次数";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "被打总次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "全垒打次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 19.4;
		t.y = 15.94;
		t.elementsContent = [this._Image9_i(),this.head2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.horizontalCenter = 0;
		t.source = "headBg_png";
		t.verticalCenter = 0;
		t.width = 66;
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.bigWin2_i = function () {
		var t = new eui.Image();
		this.bigWin2 = t;
		t.source = "bigWin_png";
		t.x = -0.11;
		t.y = -4.69;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 90;
		t.y = 27.07;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 90;
		t.y = 57.1;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.x = 625.92;
		t.y = 16.66;
		t.elementsContent = [this.itemBg3_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this.bigWin3_i(),this.nickname3_i(),this.ID3_i()];
		return t;
	};
	_proto.itemBg3_i = function () {
		var t = new eui.Image();
		this.itemBg3 = t;
		t.source = "totalLose_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 369.32;
		t.elementsContent = [this.totalPoint3_i(),this._Image10_i()];
		return t;
	};
	_proto.totalPoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint3 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 0;
		t.x = 79.32;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "total_scorel_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label16_i(),this.allWinCount3_i(),this.specialCount3_i(),this.gunCount3_i(),this.beGunCount3_i(),this.allGunCount3_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i()];
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "总赢牌局数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.allWinCount3_i = function () {
		var t = new eui.Label();
		this.allWinCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.specialCount3_i = function () {
		var t = new eui.Label();
		this.specialCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.gunCount3_i = function () {
		var t = new eui.Label();
		this.gunCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.beGunCount3_i = function () {
		var t = new eui.Label();
		this.beGunCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.allGunCount3_i = function () {
		var t = new eui.Label();
		this.allGunCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 160;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "特殊牌次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "打枪总次数";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "被打总次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "全垒打次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 19.4;
		t.y = 15.94;
		t.elementsContent = [this._Image11_i(),this.head3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.horizontalCenter = 0;
		t.source = "headBg_png";
		t.verticalCenter = 0;
		t.width = 66;
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.bigWin3_i = function () {
		var t = new eui.Image();
		this.bigWin3 = t;
		t.source = "bigWin_png";
		t.x = -0.11;
		t.y = -4.69;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 90;
		t.y = 27.07;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.height = 20;
		t.size = 20;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 90;
		t.y = 57.1;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.x = 830.92;
		t.y = 16.66;
		t.elementsContent = [this.itemBg4_i(),this._Group13_i(),this._Group14_i(),this._Group15_i(),this.bigWin4_i(),this.nickname4_i(),this.ID4_i()];
		return t;
	};
	_proto.itemBg4_i = function () {
		var t = new eui.Image();
		this.itemBg4 = t;
		t.source = "totalLose_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 369.32;
		t.elementsContent = [this.totalPoint4_i(),this._Image12_i()];
		return t;
	};
	_proto.totalPoint4_i = function () {
		var t = new eui.BitmapLabel();
		this.totalPoint4 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 0;
		t.x = 79.32;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "total_scorel_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label21_i(),this.allWinCount4_i(),this.specialCount4_i(),this.gunCount4_i(),this.beGunCount4_i(),this.allGunCount4_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Label25_i()];
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "总赢牌局数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.allWinCount4_i = function () {
		var t = new eui.Label();
		this.allWinCount4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.specialCount4_i = function () {
		var t = new eui.Label();
		this.specialCount4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.gunCount4_i = function () {
		var t = new eui.Label();
		this.gunCount4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.beGunCount4_i = function () {
		var t = new eui.Label();
		this.beGunCount4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.allGunCount4_i = function () {
		var t = new eui.Label();
		this.allGunCount4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 160;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "特殊牌次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "打枪总次数";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "被打总次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "全垒打次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 19.4;
		t.y = 15.94;
		t.elementsContent = [this._Image13_i(),this.head4_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.horizontalCenter = 0;
		t.source = "headBg_png";
		t.verticalCenter = 0;
		t.width = 66;
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Image();
		this.head4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto.bigWin4_i = function () {
		var t = new eui.Image();
		this.bigWin4 = t;
		t.source = "bigWin_png";
		t.x = -0.11;
		t.y = -4.69;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 90;
		t.y = 27.07;
		return t;
	};
	_proto.ID4_i = function () {
		var t = new eui.Label();
		this.ID4 = t;
		t.height = 20;
		t.size = 20;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.x = 90;
		t.y = 57.1;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 550.69;
		t.elementsContent = [this.jieGroup_i(),this._Group17_i()];
		return t;
	};
	_proto.jieGroup_i = function () {
		var t = new eui.Group();
		this.jieGroup = t;
		t.height = 65;
		t.width = 160;
		t.x = 228.35;
		t.y = 0;
		t.elementsContent = [this.jieping_i()];
		return t;
	};
	_proto.jieping_i = function () {
		var t = new eui.Button();
		this.jieping = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = roomResult$Skin560;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 160;
		t.x = 0;
		t.y = 0.92;
		t.elementsContent = [this.backHall_i()];
		return t;
	};
	_proto.backHall_i = function () {
		var t = new eui.Button();
		this.backHall = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = roomResult$Skin561;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 682.06;
		t.y = 11.76;
		t.elementsContent = [this.time_i(),this.playcount_i(),this.pwd_i(),this.maCard_i(),this.basescore_i(),this.paymod_i(),this._Label26_i(),this._Label27_i(),this._Label28_i(),this._Label29_i(),this._Label30_i(),this._Label31_i()];
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "2018-01-01 12:20:30";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.x = 52;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "20";
		t.textColor = 0xffffff;
		t.x = 326.83;
		t.y = 0;
		return t;
	};
	_proto.pwd_i = function () {
		var t = new eui.Label();
		this.pwd = t;
		t.bottom = 8;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "666666";
		t.textColor = 0xffffff;
		t.x = 302.03;
		return t;
	};
	_proto.maCard_i = function () {
		var t = new eui.Label();
		this.maCard = t;
		t.bottom = 8;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "黑桃5";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.x = 52;
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bottom = 8;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "2";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.x = 199.68;
		return t;
	};
	_proto.paymod_i = function () {
		var t = new eui.Label();
		this.paymod = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "AA";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.visible = false;
		t.x = 2.84;
		t.y = 40.25;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "时间：";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "时间";
		t.visible = false;
		t.x = -60.48;
		t.y = 39.25;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.bottom = 8;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "麻雀：";
		t.x = 2.01;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "局数：";
		t.x = 273.01;
		t.y = 0;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.bottom = 8;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "房号：";
		t.x = 250.18;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.bottom = 8;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "人数：";
		t.x = 146.74;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "total_title_bg_png";
		t.x = 99.61;
		t.y = 3.87;
		return t;
	};
	return roomResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shisanShui/setting.exml'] = window.setting = (function (_super) {
	__extends(setting, _super);
	var setting$Skin562 = 	(function (_super) {
		__extends(setting$Skin562, _super);
		function setting$Skin562() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = setting$Skin562.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_ic_guanbi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return setting$Skin562;
	})(eui.Skin);

	function setting() {
		_super.call(this);
		this.skinParts = ["m_mengban","close","musicV","bgMusic","zb","audioV","bgAudio"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.m_mengban_i(),this._Group3_i()];
	}
	var _proto = setting.prototype;

	_proto.m_mengban_i = function () {
		var t = new eui.Image();
		this.m_mengban = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 558;
		t.elementsContent = [this._Image1_i(),this.close_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "soundbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.label = "";
		t.x = 493.5;
		t.y = -20;
		t.skinName = setting$Skin562;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.width = 471;
		t.y = 101;
		t.elementsContent = [this._Image2_i(),this.musicV_i(),this.bgMusic_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "setmusic";
		t.verticalCenter = 0;
		t.x = 0;
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
		t.source = "soundon";
		t.verticalCenter = 1;
		t.x = 419.67;
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
		t.x = 419.5;
		t.y = 6;
		return t;
	};
	return setting;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shisanShui/shisandaoIndex.exml'] = window.shisandaoIndex = (function (_super) {
	__extends(shisandaoIndex, _super);
	var shisandaoIndex$Skin563 = 	(function (_super) {
		__extends(shisandaoIndex$Skin563, _super);
		function shisandaoIndex$Skin563() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shisandaoIndex$Skin563.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cgImage_json.menuBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin563;
	})(eui.Skin);

	var shisandaoIndex$Skin564 = 	(function (_super) {
		__extends(shisandaoIndex$Skin564, _super);
		function shisandaoIndex$Skin564() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","duiziAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin564.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "duizi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin564;
	})(eui.Skin);

	var shisandaoIndex$Skin565 = 	(function (_super) {
		__extends(shisandaoIndex$Skin565, _super);
		function shisandaoIndex$Skin565() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","liangduiAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin565.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "liangdui";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin565;
	})(eui.Skin);

	var shisandaoIndex$Skin566 = 	(function (_super) {
		__extends(shisandaoIndex$Skin566, _super);
		function shisandaoIndex$Skin566() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","santiaoAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin566.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "santiao";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin566;
	})(eui.Skin);

	var shisandaoIndex$Skin567 = 	(function (_super) {
		__extends(shisandaoIndex$Skin567, _super);
		function shisandaoIndex$Skin567() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","shunziAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin567.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shunzi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin567;
	})(eui.Skin);

	var shisandaoIndex$Skin568 = 	(function (_super) {
		__extends(shisandaoIndex$Skin568, _super);
		function shisandaoIndex$Skin568() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","tonghuaAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin568.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tonghua";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin568;
	})(eui.Skin);

	var shisandaoIndex$Skin569 = 	(function (_super) {
		__extends(shisandaoIndex$Skin569, _super);
		function shisandaoIndex$Skin569() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","huliAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin569.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hulu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin569;
	})(eui.Skin);

	var shisandaoIndex$Skin570 = 	(function (_super) {
		__extends(shisandaoIndex$Skin570, _super);
		function shisandaoIndex$Skin570() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","zhadanAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin570.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhadan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin570;
	})(eui.Skin);

	var shisandaoIndex$Skin571 = 	(function (_super) {
		__extends(shisandaoIndex$Skin571, _super);
		function shisandaoIndex$Skin571() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","tonghuashunAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin571.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tonghuashun";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin571;
	})(eui.Skin);

	var shisandaoIndex$Skin572 = 	(function (_super) {
		__extends(shisandaoIndex$Skin572, _super);
		function shisandaoIndex$Skin572() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","inGameImage_json.fiveSameAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin572.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "inGameImage_json.fiveSame";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin572;
	})(eui.Skin);

	var shisandaoIndex$Skin573 = 	(function (_super) {
		__extends(shisandaoIndex$Skin573, _super);
		function shisandaoIndex$Skin573() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shisandaoIndex$Skin573.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "inGameImage_json.autoPai";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin573;
	})(eui.Skin);

	var shisandaoIndex$Skin574 = 	(function (_super) {
		__extends(shisandaoIndex$Skin574, _super);
		function shisandaoIndex$Skin574() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shisandaoIndex$Skin574.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sss_special_confirm_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin574;
	})(eui.Skin);

	var shisandaoIndex$Skin575 = 	(function (_super) {
		__extends(shisandaoIndex$Skin575, _super);
		function shisandaoIndex$Skin575() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin575.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ingameInvite";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin575;
	})(eui.Skin);

	var shisandaoIndex$Skin576 = 	(function (_super) {
		__extends(shisandaoIndex$Skin576, _super);
		function shisandaoIndex$Skin576() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","startGameAn")
					])
			];
		}
		var _proto = shisandaoIndex$Skin576.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "startGame";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin576;
	})(eui.Skin);

	var shisandaoIndex$Skin577 = 	(function (_super) {
		__extends(shisandaoIndex$Skin577, _super);
		function shisandaoIndex$Skin577() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin577.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "InGameReadyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin577;
	})(eui.Skin);

	var shisandaoIndex$Skin578 = 	(function (_super) {
		__extends(shisandaoIndex$Skin578, _super);
		function shisandaoIndex$Skin578() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin578.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "inGameSit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin578;
	})(eui.Skin);

	var shisandaoIndex$Skin579 = 	(function (_super) {
		__extends(shisandaoIndex$Skin579, _super);
		function shisandaoIndex$Skin579() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin579.prototype;

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
		return shisandaoIndex$Skin579;
	})(eui.Skin);

	var shisandaoIndex$Skin580 = 	(function (_super) {
		__extends(shisandaoIndex$Skin580, _super);
		function shisandaoIndex$Skin580() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin580.prototype;

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
		return shisandaoIndex$Skin580;
	})(eui.Skin);

	var shisandaoIndex$Skin581 = 	(function (_super) {
		__extends(shisandaoIndex$Skin581, _super);
		function shisandaoIndex$Skin581() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin581.prototype;

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
		return shisandaoIndex$Skin581;
	})(eui.Skin);

	var shisandaoIndex$Skin582 = 	(function (_super) {
		__extends(shisandaoIndex$Skin582, _super);
		function shisandaoIndex$Skin582() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin582.prototype;

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
		return shisandaoIndex$Skin582;
	})(eui.Skin);

	var shisandaoIndex$Skin583 = 	(function (_super) {
		__extends(shisandaoIndex$Skin583, _super);
		function shisandaoIndex$Skin583() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin583.prototype;

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
		return shisandaoIndex$Skin583;
	})(eui.Skin);

	var shisandaoIndex$Skin584 = 	(function (_super) {
		__extends(shisandaoIndex$Skin584, _super);
		function shisandaoIndex$Skin584() {
			_super.call(this);
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
		var _proto = shisandaoIndex$Skin584.prototype;

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
		return shisandaoIndex$Skin584;
	})(eui.Skin);

	var shisandaoIndex$Skin585 = 	(function (_super) {
		__extends(shisandaoIndex$Skin585, _super);
		function shisandaoIndex$Skin585() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shisandaoIndex$Skin585.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "inGameImage_json.chupaiInGame";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return shisandaoIndex$Skin585;
	})(eui.Skin);

	var shisandaoIndex$Skin586 = 	(function (_super) {
		__extends(shisandaoIndex$Skin586, _super);
		function shisandaoIndex$Skin586() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shisandaoIndex$Skin586.prototype;

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
		return shisandaoIndex$Skin586;
	})(eui.Skin);

	var shisandaoIndex$Skin587 = 	(function (_super) {
		__extends(shisandaoIndex$Skin587, _super);
		function shisandaoIndex$Skin587() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = shisandaoIndex$Skin587.prototype;

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
		return shisandaoIndex$Skin587;
	})(eui.Skin);

	function shisandaoIndex() {
		_super.call(this);
		this.skinParts = ["menu","roomPwd","peoplecount","paimode","macard","jushu","difen","roominfos","top13","top12","top11","topTit1","mycardTop1","mid15","mid14","mid13","mid12","mid11","midTit1","mycardMid1","bottom15","bottom14","bottom13","bottom12","bottom11","botTit1","mycardBottom1","hadReady1","top23","top22","top21","topTit2","mycardTop2","mid25","mid24","mid23","mid22","mid21","midTit2","mycardMid2","bottom25","bottom24","bottom23","bottom22","bottom21","botTit2","mycardBottom2","hadReady2","top33","top32","top31","topTit3","mycardTop3","mid35","mid34","mid33","mid32","mid31","midTit3","mycardMid3","bottom35","bottom34","bottom33","bottom32","bottom31","botTit3","mycardBottom3","hadReady3","top43","top42","top41","topTit4","mycardTop4","mid45","mid44","mid43","mid42","mid41","midTit4","mycardMid4","bottom45","bottom44","bottom43","bottom42","bottom41","botTit4","mycardBottom4","hadReady4","top03","top02","top01","topTit0","topPoint","mycardTop0","mid05","mid04","mid03","mid02","mid01","midTit0","midPoint","mycardMid0","bottom05","bottom04","bottom03","bottom02","bottom01","botTit0","bottomPoint","mycardBottom0","hadReady0","headDi0","headImg0","nickname0","point0","roomownerlogo0","hasready0","offline0","singlePoint0","msg0","msgGroup0","userInfo0","headDi1","headImg1","nickname1","point1","roomownerlogo1","hasready1","offline1","singlePoint1","msg1","msgGroup1","userInfo1","headDi2","headImg2","nickname2","point2","roomownerlogo2","hasready2","singlePoint2","offline2","msg2","msgGroup2","userInfo2","headDi4","headImg4","nickname4","point4","roomownerlogo4","hasready4","singlePoint4","offline4","msg4","msgGroup4","userInfo4","headDi3","headImg3","nickname3","point3","roomownerlogo3","hasready3","offline3","singlePoint3","msg3","msgGroup3","userInfo3","pai112","pai111","pai110","pai19","pai18","pai17","pai16","pai15","pai14","pai13","pai12","pai11","pai10","peipai1","paiGroup1","special0","special1","special2","special3","special4","special5","special6","special7","special8","special9","special10","special11","special12","specialType","mySpecialGroup","pai212","pai211","pai210","pai29","pai28","pai27","pai26","pai25","pai24","pai23","pai22","pai21","pai20","peipai2","paiGroup2","pai312","pai311","pai310","pai39","pai38","pai37","pai36","pai35","pai34","pai33","pai32","pai31","pai30","peipai3","paiGroup3","pai412","pai411","pai410","pai49","pai48","pai47","pai46","pai45","pai44","pai43","pai42","pai41","pai40","peipai4","paiGroup4","daojiquan","daojiNum","headDao2","headDao1","headDao0","headGuang","headDao","midDao4","midDao3","midDao2","midDao1","midDao0","midGuang","midDao","tailDao4","tailDao3","tailDao2","tailDao1","tailDao0","footGuang","tailDao","type0","type1","type2","type3","type4","type5","type6","type7","type8","chooseTypeGroup","autoLiPai","specialConfirm","specialText","specialGroup","liPai","pangguan","invite","inviteGroup","startBtn","readyBtn","readyGroup","sitBtn","sitGroup","pai012","pai011","pai010","pai09","pai08","pai07","pai06","pai05","pai04","pai03","pai02","pai01","pai00","peipai0","paiGroup0","menban","wanfa","diaband","situp","setting","locBtn","menulist","username0","userpoint0","single0","username1","userpoint1","single1","username2","userpoint2","single2","username3","userpoint3","single3","singleResult","tipContent","showTip","voice1","voice2","voice3","voice4","luying","chupai","chupaiGroup","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","xiaoxi","xxGroup","juhua","waitConnect","inviteNotice","whoJoin","joinNotice"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.roominfos_i(),this.hadReady1_i(),this.hadReady2_i(),this.hadReady3_i(),this.hadReady4_i(),this.hadReady0_i(),this.userInfo0_i(),this.userInfo1_i(),this.userInfo2_i(),this.userInfo4_i(),this.userInfo3_i(),this.paiGroup1_i(),this.mySpecialGroup_i(),this.paiGroup2_i(),this.paiGroup3_i(),this.paiGroup4_i(),this.liPai_i(),this.pangguan_i(),this.inviteGroup_i(),this.startBtn_i(),this.readyGroup_i(),this.sitGroup_i(),this.paiGroup0_i(),this.menban_i(),this.menulist_i(),this.singleResult_i(),this.showTip_i(),this.luying_i(),this.chupaiGroup_i(),this.yyGroup_i(),this.xxGroup_i(),this.waitConnect_i(),this.inviteNotice_i(),this.joinNotice_i()];
	}
	var _proto = shisandaoIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "13ShuiTable_png";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 80;
		t.x = 999.47;
		t.y = 7;
		t.elementsContent = [this.menu_i()];
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -2;
		t.skinName = shisandaoIndex$Skin563;
		return t;
	};
	_proto.roominfos_i = function () {
		var t = new eui.Group();
		this.roominfos = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 29.21;
		t.y = 8.7;
		t.elementsContent = [this._Rect1_i(),this.roomPwd_i(),this.peoplecount_i(),this.paimode_i(),this.macard_i(),this.jushu_i(),this.difen_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 120;
		t.visible = false;
		t.width = 271;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomPwd_i = function () {
		var t = new eui.Label();
		this.roomPwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "房间号：666666";
		t.x = -21.55;
		t.y = 0;
		return t;
	};
	_proto.peoplecount_i = function () {
		var t = new eui.Label();
		this.peoplecount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "人数：4人";
		t.x = -21.55;
		t.y = 31;
		return t;
	};
	_proto.paimode_i = function () {
		var t = new eui.Label();
		this.paimode = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "房主支付";
		t.visible = false;
		t.x = -21.55;
		t.y = 62;
		return t;
	};
	_proto.macard_i = function () {
		var t = new eui.Label();
		this.macard = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "麻雀:黑桃5";
		t.x = -21.55;
		t.y = 93;
		return t;
	};
	_proto.jushu_i = function () {
		var t = new eui.Label();
		this.jushu = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "第20/20局";
		t.x = -18.62;
		t.y = 63.67;
		return t;
	};
	_proto.difen_i = function () {
		var t = new eui.Label();
		this.difen = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 23;
		t.text = "底分：20";
		t.visible = false;
		t.x = 96.83;
		t.y = 30.6;
		return t;
	};
	_proto.hadReady1_i = function () {
		var t = new eui.Group();
		this.hadReady1 = t;
		t.height = 250;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 234;
		t.x = 779;
		t.y = 256.05;
		t.elementsContent = [this.mycardTop1_i(),this.mycardMid1_i(),this.mycardBottom1_i()];
		return t;
	};
	_proto.mycardTop1_i = function () {
		var t = new eui.Group();
		this.mycardTop1 = t;
		t.x = 1.34;
		t.y = -13.69;
		t.elementsContent = [this.top13_i(),this.top12_i(),this.top11_i(),this.topTit1_i()];
		return t;
	};
	_proto.top13_i = function () {
		var t = new eui.Image();
		this.top13 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.top12_i = function () {
		var t = new eui.Image();
		this.top12 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
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
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.topTit1_i = function () {
		var t = new eui.Image();
		this.topTit1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type8_png";
		t.visible = false;
		t.x = -15;
		t.y = 55;
		return t;
	};
	_proto.mycardMid1_i = function () {
		var t = new eui.Group();
		this.mycardMid1 = t;
		t.x = 3.11;
		t.y = 49.55;
		t.elementsContent = [this.mid15_i(),this.mid14_i(),this.mid13_i(),this.mid12_i(),this.mid11_i(),this.midTit1_i()];
		return t;
	};
	_proto.mid15_i = function () {
		var t = new eui.Image();
		this.mid15 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
		t.y = 114.53;
		return t;
	};
	_proto.mid14_i = function () {
		var t = new eui.Image();
		this.mid14 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.mid13_i = function () {
		var t = new eui.Image();
		this.mid13 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.mid12_i = function () {
		var t = new eui.Image();
		this.mid12 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.mid11_i = function () {
		var t = new eui.Image();
		this.mid11 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit1_i = function () {
		var t = new eui.Image();
		this.midTit1 = t;
		t.source = "type9_png";
		t.visible = false;
		t.x = -10;
		t.y = 55;
		return t;
	};
	_proto.mycardBottom1_i = function () {
		var t = new eui.Group();
		this.mycardBottom1 = t;
		t.height = 139;
		t.width = 195;
		t.x = 2;
		t.y = 110;
		t.elementsContent = [this.bottom15_i(),this.bottom14_i(),this.bottom13_i(),this.bottom12_i(),this.bottom11_i(),this.botTit1_i()];
		return t;
	};
	_proto.bottom15_i = function () {
		var t = new eui.Image();
		this.bottom15 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
		t.y = 114.53;
		return t;
	};
	_proto.bottom14_i = function () {
		var t = new eui.Image();
		this.bottom14 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.bottom13_i = function () {
		var t = new eui.Image();
		this.bottom13 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.bottom12_i = function () {
		var t = new eui.Image();
		this.bottom12 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.bottom11_i = function () {
		var t = new eui.Image();
		this.bottom11 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit1_i = function () {
		var t = new eui.Image();
		this.botTit1 = t;
		t.horizontalCenter = 13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type9_png";
		t.visible = false;
		t.y = 57;
		return t;
	};
	_proto.hadReady2_i = function () {
		var t = new eui.Group();
		this.hadReady2 = t;
		t.height = 250;
		t.scaleX = 1.08;
		t.scaleY = 1.08;
		t.width = 234;
		t.x = 561;
		t.y = 40;
		t.elementsContent = [this.mycardTop2_i(),this.mycardMid2_i(),this.mycardBottom2_i()];
		return t;
	};
	_proto.mycardTop2_i = function () {
		var t = new eui.Group();
		this.mycardTop2 = t;
		t.x = 24;
		t.y = -10.9;
		t.elementsContent = [this.top23_i(),this.top22_i(),this.top21_i(),this.topTit2_i()];
		return t;
	};
	_proto.top23_i = function () {
		var t = new eui.Image();
		this.top23 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 56.02;
		t.y = 110.32;
		return t;
	};
	_proto.top22_i = function () {
		var t = new eui.Image();
		this.top22 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 80.99;
		t.y = 109.53;
		return t;
	};
	_proto.top21_i = function () {
		var t = new eui.Image();
		this.top21 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 113.53;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 106.02;
		t.y = 113.53;
		return t;
	};
	_proto.topTit2_i = function () {
		var t = new eui.Image();
		this.topTit2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type9_png";
		t.visible = false;
		t.x = -31;
		t.y = 55;
		return t;
	};
	_proto.mycardMid2_i = function () {
		var t = new eui.Group();
		this.mycardMid2 = t;
		t.x = 3.11;
		t.y = 49.55;
		t.elementsContent = [this.mid25_i(),this.mid24_i(),this.mid23_i(),this.mid22_i(),this.mid21_i(),this.midTit2_i()];
		return t;
	};
	_proto.mid25_i = function () {
		var t = new eui.Image();
		this.mid25 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
		t.y = 114.53;
		return t;
	};
	_proto.mid24_i = function () {
		var t = new eui.Image();
		this.mid24 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.mid23_i = function () {
		var t = new eui.Image();
		this.mid23 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.mid22_i = function () {
		var t = new eui.Image();
		this.mid22 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.mid21_i = function () {
		var t = new eui.Image();
		this.mid21 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit2_i = function () {
		var t = new eui.Image();
		this.midTit2 = t;
		t.source = "type9_png";
		t.visible = false;
		t.x = -12;
		t.y = 55;
		return t;
	};
	_proto.mycardBottom2_i = function () {
		var t = new eui.Group();
		this.mycardBottom2 = t;
		t.width = 195;
		t.x = 2;
		t.y = 110;
		t.elementsContent = [this.bottom25_i(),this.bottom24_i(),this.bottom23_i(),this.bottom22_i(),this.bottom21_i(),this.botTit2_i()];
		return t;
	};
	_proto.bottom25_i = function () {
		var t = new eui.Image();
		this.bottom25 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
		t.y = 114.53;
		return t;
	};
	_proto.bottom24_i = function () {
		var t = new eui.Image();
		this.bottom24 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.bottom23_i = function () {
		var t = new eui.Image();
		this.bottom23 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.bottom22_i = function () {
		var t = new eui.Image();
		this.bottom22 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.bottom21_i = function () {
		var t = new eui.Image();
		this.bottom21 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit2_i = function () {
		var t = new eui.Image();
		this.botTit2 = t;
		t.horizontalCenter = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type9_png";
		t.visible = false;
		t.y = 56;
		return t;
	};
	_proto.hadReady3_i = function () {
		var t = new eui.Group();
		this.hadReady3 = t;
		t.height = 250;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 234;
		t.x = 301;
		t.y = 42.46;
		t.elementsContent = [this.mycardTop3_i(),this.mycardMid3_i(),this.mycardBottom3_i()];
		return t;
	};
	_proto.mycardTop3_i = function () {
		var t = new eui.Group();
		this.mycardTop3 = t;
		t.x = 1.34;
		t.y = -12.76;
		t.elementsContent = [this.top33_i(),this.top32_i(),this.top31_i(),this.topTit3_i()];
		return t;
	};
	_proto.top33_i = function () {
		var t = new eui.Image();
		this.top33 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.top32_i = function () {
		var t = new eui.Image();
		this.top32 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.top31_i = function () {
		var t = new eui.Image();
		this.top31 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.topTit3_i = function () {
		var t = new eui.Image();
		this.topTit3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type9_png";
		t.visible = false;
		t.x = -16;
		t.y = 55;
		return t;
	};
	_proto.mycardMid3_i = function () {
		var t = new eui.Group();
		this.mycardMid3 = t;
		t.x = 3.11;
		t.y = 49.55;
		t.elementsContent = [this.mid35_i(),this.mid34_i(),this.mid33_i(),this.mid32_i(),this.mid31_i(),this.midTit3_i()];
		return t;
	};
	_proto.mid35_i = function () {
		var t = new eui.Image();
		this.mid35 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
		t.y = 114.53;
		return t;
	};
	_proto.mid34_i = function () {
		var t = new eui.Image();
		this.mid34 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.mid33_i = function () {
		var t = new eui.Image();
		this.mid33 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.mid32_i = function () {
		var t = new eui.Image();
		this.mid32 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.mid31_i = function () {
		var t = new eui.Image();
		this.mid31 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit3_i = function () {
		var t = new eui.Image();
		this.midTit3 = t;
		t.source = "type9_png";
		t.visible = false;
		t.x = -18;
		t.y = 55;
		return t;
	};
	_proto.mycardBottom3_i = function () {
		var t = new eui.Group();
		this.mycardBottom3 = t;
		t.width = 195;
		t.x = 2;
		t.y = 110;
		t.elementsContent = [this.bottom35_i(),this.bottom34_i(),this.bottom33_i(),this.bottom32_i(),this.bottom31_i(),this.botTit3_i()];
		return t;
	};
	_proto.bottom35_i = function () {
		var t = new eui.Image();
		this.bottom35 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
		t.y = 114.53;
		return t;
	};
	_proto.bottom34_i = function () {
		var t = new eui.Image();
		this.bottom34 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.bottom33_i = function () {
		var t = new eui.Image();
		this.bottom33 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.bottom32_i = function () {
		var t = new eui.Image();
		this.bottom32 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.bottom31_i = function () {
		var t = new eui.Image();
		this.bottom31 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit3_i = function () {
		var t = new eui.Image();
		this.botTit3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type9_png";
		t.visible = false;
		t.x = -15;
		t.y = 55;
		return t;
	};
	_proto.hadReady4_i = function () {
		var t = new eui.Group();
		this.hadReady4 = t;
		t.height = 250;
		t.scaleX = 1.08;
		t.scaleY = 1.08;
		t.width = 234;
		t.x = 164.84;
		t.y = 192.51;
		t.elementsContent = [this.mycardTop4_i(),this.mycardMid4_i(),this.mycardBottom4_i()];
		return t;
	};
	_proto.mycardTop4_i = function () {
		var t = new eui.Group();
		this.mycardTop4 = t;
		t.x = 24;
		t.y = -10.9;
		t.elementsContent = [this.top43_i(),this.top42_i(),this.top41_i(),this.topTit4_i()];
		return t;
	};
	_proto.top43_i = function () {
		var t = new eui.Image();
		this.top43 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 56.02;
		t.y = 110.32;
		return t;
	};
	_proto.top42_i = function () {
		var t = new eui.Image();
		this.top42 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 75.02;
		t.y = 109.53;
		return t;
	};
	_proto.top41_i = function () {
		var t = new eui.Image();
		this.top41 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 113.53;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 106.02;
		t.y = 113.53;
		return t;
	};
	_proto.topTit4_i = function () {
		var t = new eui.Image();
		this.topTit4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type9_png";
		t.visible = false;
		t.x = -31;
		t.y = 55;
		return t;
	};
	_proto.mycardMid4_i = function () {
		var t = new eui.Group();
		this.mycardMid4 = t;
		t.x = 3.11;
		t.y = 49.55;
		t.elementsContent = [this.mid45_i(),this.mid44_i(),this.mid43_i(),this.mid42_i(),this.mid41_i(),this.midTit4_i()];
		return t;
	};
	_proto.mid45_i = function () {
		var t = new eui.Image();
		this.mid45 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
		t.y = 114.53;
		return t;
	};
	_proto.mid44_i = function () {
		var t = new eui.Image();
		this.mid44 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.mid43_i = function () {
		var t = new eui.Image();
		this.mid43 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.mid42_i = function () {
		var t = new eui.Image();
		this.mid42 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.mid41_i = function () {
		var t = new eui.Image();
		this.mid41 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit4_i = function () {
		var t = new eui.Image();
		this.midTit4 = t;
		t.source = "type9_png";
		t.visible = false;
		t.x = -12;
		t.y = 55;
		return t;
	};
	_proto.mycardBottom4_i = function () {
		var t = new eui.Group();
		this.mycardBottom4 = t;
		t.width = 195;
		t.x = 2;
		t.y = 110;
		t.elementsContent = [this.bottom45_i(),this.bottom44_i(),this.bottom43_i(),this.bottom42_i(),this.bottom41_i(),this.botTit4_i()];
		return t;
	};
	_proto.bottom45_i = function () {
		var t = new eui.Image();
		this.bottom45 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
		t.y = 114.53;
		return t;
	};
	_proto.bottom44_i = function () {
		var t = new eui.Image();
		this.bottom44 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.bottom43_i = function () {
		var t = new eui.Image();
		this.bottom43 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
		t.y = 109.53;
		return t;
	};
	_proto.bottom42_i = function () {
		var t = new eui.Image();
		this.bottom42 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 10;
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.bottom41_i = function () {
		var t = new eui.Image();
		this.bottom41 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = 20;
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.botTit4_i = function () {
		var t = new eui.Image();
		this.botTit4 = t;
		t.horizontalCenter = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type9_png";
		t.visible = false;
		t.y = 56;
		return t;
	};
	_proto.hadReady0_i = function () {
		var t = new eui.Group();
		this.hadReady0 = t;
		t.height = 250;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 234;
		t.x = 432.96;
		t.y = 343.87;
		t.elementsContent = [this.mycardTop0_i(),this.mycardMid0_i(),this.mycardBottom0_i()];
		return t;
	};
	_proto.mycardTop0_i = function () {
		var t = new eui.Group();
		this.mycardTop0 = t;
		t.x = 1.34;
		t.y = -13.12;
		t.elementsContent = [this.top03_i(),this.top02_i(),this.top01_i(),this.topTit0_i(),this.topPoint_i()];
		return t;
	};
	_proto.top03_i = function () {
		var t = new eui.Image();
		this.top03 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -10;
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.top02_i = function () {
		var t = new eui.Image();
		this.top02 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
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
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
		t.y = 113.53;
		return t;
	};
	_proto.topTit0_i = function () {
		var t = new eui.Image();
		this.topTit0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "type9_png";
		t.visible = false;
		t.x = -9;
		t.y = 55;
		return t;
	};
	_proto.topPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.topPoint = t;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 226;
		t.y = 37.55;
		return t;
	};
	_proto.mycardMid0_i = function () {
		var t = new eui.Group();
		this.mycardMid0 = t;
		t.x = 3.11;
		t.y = 49.55;
		t.elementsContent = [this.mid05_i(),this.mid04_i(),this.mid03_i(),this.mid02_i(),this.mid01_i(),this.midTit0_i(),this.midPoint_i()];
		return t;
	};
	_proto.mid05_i = function () {
		var t = new eui.Image();
		this.mid05 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55;
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
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.mid03_i = function () {
		var t = new eui.Image();
		this.mid03 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
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
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
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
		t.source = "poke61";
		t.width = 75;
		t.x = 155;
		t.y = 122.68;
		return t;
	};
	_proto.midTit0_i = function () {
		var t = new eui.Image();
		this.midTit0 = t;
		t.source = "type9_png";
		t.visible = false;
		t.x = -9;
		t.y = 55;
		return t;
	};
	_proto.midPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.midPoint = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 225;
		t.y = 44.54;
		return t;
	};
	_proto.mycardBottom0_i = function () {
		var t = new eui.Group();
		this.mycardBottom0 = t;
		t.width = 195;
		t.x = 2;
		t.y = 110;
		t.elementsContent = [this.bottom05_i(),this.bottom04_i(),this.bottom03_i(),this.bottom02_i(),this.bottom01_i(),this.botTit0_i(),this.bottomPoint_i()];
		return t;
	};
	_proto.bottom05_i = function () {
		var t = new eui.Image();
		this.bottom05 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.rotation = -20;
		t.source = "poke61";
		t.width = 75;
		t.x = 55.9;
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
		t.source = "poke61";
		t.width = 75;
		t.x = 80;
		t.y = 110.32;
		return t;
	};
	_proto.bottom03_i = function () {
		var t = new eui.Image();
		this.bottom03 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 106;
		t.height = 105.3;
		t.source = "poke61";
		t.width = 75;
		t.x = 105;
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
		t.source = "poke61";
		t.width = 75;
		t.x = 130;
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
		t.source = "poke61";
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
		t.source = "type9_png";
		t.visible = false;
		t.y = 57;
		return t;
	};
	_proto.bottomPoint_i = function () {
		var t = new eui.BitmapLabel();
		this.bottomPoint = t;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 224.34;
		t.y = 48.34;
		return t;
	};
	_proto.userInfo0_i = function () {
		var t = new eui.Group();
		this.userInfo0 = t;
		t.height = 84;
		t.width = 173;
		t.x = 2;
		t.y = 480.45;
		t.elementsContent = [this.headDi0_i(),this.headImg0_i(),this.nickname0_i(),this.point0_i(),this.roomownerlogo0_i(),this.hasready0_i(),this.offline0_i(),this.singlePoint0_i(),this.msgGroup0_i(),this._Image3_i()];
		return t;
	};
	_proto.headDi0_i = function () {
		var t = new eui.Image();
		this.headDi0 = t;
		t.source = "headBoxDi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 39.5;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.width = 80;
		t.y = 14.92;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.horizontalCenter = 51;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xfcea64;
		t.width = 67;
		t.y = 51.04;
		return t;
	};
	_proto.roomownerlogo0_i = function () {
		var t = new eui.Image();
		this.roomownerlogo0 = t;
		t.source = "roomOwnerLogo";
		t.x = 5.74;
		t.y = 5;
		return t;
	};
	_proto.hasready0_i = function () {
		var t = new eui.Image();
		this.hasready0 = t;
		t.source = "hasReady";
		t.x = 9;
		t.y = 39.58;
		return t;
	};
	_proto.offline0_i = function () {
		var t = new eui.Image();
		this.offline0 = t;
		t.source = "offline2_png";
		t.x = 7.36;
		t.y = 8.67;
		return t;
	};
	_proto.singlePoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint0 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 57.25;
		t.y = 80.31;
		return t;
	};
	_proto.msgGroup0_i = function () {
		var t = new eui.Group();
		this.msgGroup0 = t;
		t.x = 29.5;
		t.y = -40.6;
		t.elementsContent = [this._Image2_i(),this.msg0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.msg0_i = function () {
		var t = new eui.Label();
		this.msg0 = t;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 8.99;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "shui_png";
		t.width = 20;
		t.x = 80;
		t.y = 51;
		return t;
	};
	_proto.userInfo1_i = function () {
		var t = new eui.Group();
		this.userInfo1 = t;
		t.x = 899.48;
		t.y = 157.32;
		t.elementsContent = [this.headDi1_i(),this.headImg1_i(),this.nickname1_i(),this.point1_i(),this._Image4_i(),this.roomownerlogo1_i(),this.hasready1_i(),this.offline1_i(),this.singlePoint1_i(),this.msgGroup1_i()];
		return t;
	};
	_proto.headDi1_i = function () {
		var t = new eui.Image();
		this.headDi1 = t;
		t.source = "headBoxDi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.alpha = 1;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 39.5;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 80;
		t.y = 14.92;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.horizontalCenter = 50;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.y = 50.84;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "shui_png";
		t.width = 20;
		t.x = 80;
		t.y = 51;
		return t;
	};
	_proto.roomownerlogo1_i = function () {
		var t = new eui.Image();
		this.roomownerlogo1 = t;
		t.source = "roomOwnerLogo";
		t.x = 5.74;
		t.y = 5;
		return t;
	};
	_proto.hasready1_i = function () {
		var t = new eui.Image();
		this.hasready1 = t;
		t.source = "hasReady";
		t.x = 9;
		t.y = 39.58;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Image();
		this.offline1 = t;
		t.source = "offline2_png";
		t.x = 8.39;
		t.y = 8.24;
		return t;
	};
	_proto.singlePoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint1 = t;
		t.anchorOffsetX = 0;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = -102.09;
		t.y = 39.28;
		return t;
	};
	_proto.msgGroup1_i = function () {
		var t = new eui.Group();
		this.msgGroup1 = t;
		t.x = -238.03;
		t.y = -32.53;
		t.elementsContent = [this._Image5_i(),this.msg1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rightmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.msg1_i = function () {
		var t = new eui.Label();
		this.msg1 = t;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "我当年横扫澳门五条街";
		t.y = 9.31;
		return t;
	};
	_proto.userInfo2_i = function () {
		var t = new eui.Group();
		this.userInfo2 = t;
		t.height = 84;
		t.width = 173;
		t.x = 794.14;
		t.y = 32;
		t.elementsContent = [this.headDi2_i(),this.headImg2_i(),this.nickname2_i(),this.point2_i(),this._Image6_i(),this.roomownerlogo2_i(),this.hasready2_i(),this.singlePoint2_i(),this.offline2_i(),this.msgGroup2_i()];
		return t;
	};
	_proto.headDi2_i = function () {
		var t = new eui.Image();
		this.headDi2 = t;
		t.source = "headBoxDi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.alpha = 1;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 39.5;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.width = 80;
		t.y = 14.92;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.horizontalCenter = 50;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.y = 50.84;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "shui_png";
		t.width = 20;
		t.x = 80;
		t.y = 51;
		return t;
	};
	_proto.roomownerlogo2_i = function () {
		var t = new eui.Image();
		this.roomownerlogo2 = t;
		t.source = "roomOwnerLogo";
		t.x = 5.74;
		t.y = 5;
		return t;
	};
	_proto.hasready2_i = function () {
		var t = new eui.Image();
		this.hasready2 = t;
		t.source = "hasReady";
		t.x = 9;
		t.y = 39.58;
		return t;
	};
	_proto.singlePoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint2 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+999";
		t.x = -106.29;
		t.y = 20.28;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Image();
		this.offline2 = t;
		t.source = "offline2_png";
		t.x = 7.98;
		t.y = 7.98;
		return t;
	};
	_proto.msgGroup2_i = function () {
		var t = new eui.Group();
		this.msgGroup2 = t;
		t.visible = false;
		t.x = -244.87;
		t.y = 5.66;
		t.elementsContent = [this._Image7_i(),this.msg2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 300;
		t.scale9Grid = new egret.Rectangle(34,6,207,23);
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "leftmsgqipao";
		t.width = 300;
		t.x = -3.99;
		t.y = 0;
		return t;
	};
	_proto.msg2_i = function () {
		var t = new eui.Label();
		this.msg2 = t;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "我当年横扫澳门五条街";
		t.y = 8.94;
		return t;
	};
	_proto.userInfo4_i = function () {
		var t = new eui.Group();
		this.userInfo4 = t;
		t.height = 84;
		t.width = 173;
		t.x = 8;
		t.y = 176.51;
		t.elementsContent = [this.headDi4_i(),this.headImg4_i(),this.nickname4_i(),this.point4_i(),this._Image8_i(),this.roomownerlogo4_i(),this.hasready4_i(),this.singlePoint4_i(),this.offline4_i(),this.msgGroup4_i()];
		return t;
	};
	_proto.headDi4_i = function () {
		var t = new eui.Image();
		this.headDi4 = t;
		t.source = "headBoxDi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.alpha = 1;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 39.5;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.width = 80;
		t.y = 14.92;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.Label();
		this.point4 = t;
		t.horizontalCenter = 50;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.y = 50.84;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "shui_png";
		t.width = 20;
		t.x = 80;
		t.y = 51;
		return t;
	};
	_proto.roomownerlogo4_i = function () {
		var t = new eui.Image();
		this.roomownerlogo4 = t;
		t.source = "roomOwnerLogo";
		t.x = 5.74;
		t.y = 5;
		return t;
	};
	_proto.hasready4_i = function () {
		var t = new eui.Image();
		this.hasready4 = t;
		t.source = "hasReady";
		t.x = 9;
		t.y = 39.58;
		return t;
	};
	_proto.singlePoint4_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint4 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+999";
		t.x = 172.25;
		t.y = 28.91;
		return t;
	};
	_proto.offline4_i = function () {
		var t = new eui.Image();
		this.offline4 = t;
		t.source = "offline2_png";
		t.x = 7.98;
		t.y = 7.98;
		return t;
	};
	_proto.msgGroup4_i = function () {
		var t = new eui.Group();
		this.msgGroup4 = t;
		t.visible = false;
		t.x = 24.34;
		t.y = -42.74;
		t.elementsContent = [this._Image9_i(),this.msg4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(34,6,207,23);
		t.scaleY = 1;
		t.source = "leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.msg4_i = function () {
		var t = new eui.Label();
		this.msg4 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条街";
		t.y = 8.94;
		return t;
	};
	_proto.userInfo3_i = function () {
		var t = new eui.Group();
		this.userInfo3 = t;
		t.width = 173;
		t.x = 125;
		t.y = 32;
		t.elementsContent = [this.headDi3_i(),this.headImg3_i(),this.nickname3_i(),this.point3_i(),this._Image10_i(),this.roomownerlogo3_i(),this.hasready3_i(),this.offline3_i(),this.singlePoint3_i(),this.msgGroup3_i()];
		return t;
	};
	_proto.headDi3_i = function () {
		var t = new eui.Image();
		this.headDi3 = t;
		t.source = "headBoxDi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.alpha = 1;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 8;
		t.y = 7.83;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.horizontalCenter = 39.5;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.width = 80;
		t.y = 14.92;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.horizontalCenter = 51;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.y = 50.84;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "shui_png";
		t.width = 20;
		t.x = 80;
		t.y = 51;
		return t;
	};
	_proto.roomownerlogo3_i = function () {
		var t = new eui.Image();
		this.roomownerlogo3 = t;
		t.source = "roomOwnerLogo";
		t.x = 5.74;
		t.y = 5;
		return t;
	};
	_proto.hasready3_i = function () {
		var t = new eui.Image();
		this.hasready3 = t;
		t.source = "hasReady";
		t.x = 9;
		t.y = 39.58;
		return t;
	};
	_proto.offline3_i = function () {
		var t = new eui.Image();
		this.offline3 = t;
		t.source = "offline2_png";
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto.singlePoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint3 = t;
		t.anchorOffsetY = -3;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+1000";
		t.x = 180.55;
		t.y = 9.02;
		return t;
	};
	_proto.msgGroup3_i = function () {
		var t = new eui.Group();
		this.msgGroup3 = t;
		t.anchorOffsetX = 300;
		t.x = 322.73;
		t.y = 2.35;
		t.elementsContent = [this._Image11_i(),this.msg3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(34,6,207,26);
		t.scaleY = 1;
		t.source = "leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.msg3_i = function () {
		var t = new eui.Label();
		this.msg3 = t;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "我当年横扫澳门五条街";
		t.y = 8.94;
		return t;
	};
	_proto.paiGroup1_i = function () {
		var t = new eui.Group();
		this.paiGroup1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 686;
		t.y = 282;
		t.elementsContent = [this.pai112_i(),this.pai111_i(),this.pai110_i(),this.pai19_i(),this.pai18_i(),this.pai17_i(),this.pai16_i(),this.pai15_i(),this.pai14_i(),this.pai13_i(),this.pai12_i(),this.pai11_i(),this.pai10_i(),this.peipai1_i()];
		return t;
	};
	_proto.pai112_i = function () {
		var t = new eui.Image();
		this.pai112 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai111_i = function () {
		var t = new eui.Image();
		this.pai111 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai110_i = function () {
		var t = new eui.Image();
		this.pai110 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai19_i = function () {
		var t = new eui.Image();
		this.pai19 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai18_i = function () {
		var t = new eui.Image();
		this.pai18 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai17_i = function () {
		var t = new eui.Image();
		this.pai17 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai16_i = function () {
		var t = new eui.Image();
		this.pai16 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai15_i = function () {
		var t = new eui.Image();
		this.pai15 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai14_i = function () {
		var t = new eui.Image();
		this.pai14 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai13_i = function () {
		var t = new eui.Image();
		this.pai13 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai12_i = function () {
		var t = new eui.Image();
		this.pai12 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai11_i = function () {
		var t = new eui.Image();
		this.pai11 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai10_i = function () {
		var t = new eui.Image();
		this.pai10 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.peipai1_i = function () {
		var t = new eui.Image();
		this.peipai1 = t;
		t.horizontalCenter = 0;
		t.source = "peipai";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mySpecialGroup_i = function () {
		var t = new eui.Group();
		this.mySpecialGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 321.75;
		t.y = 469.25;
		t.elementsContent = [this.special0_i(),this.special1_i(),this.special2_i(),this.special3_i(),this.special4_i(),this.special5_i(),this.special6_i(),this.special7_i(),this.special8_i(),this.special9_i(),this.special10_i(),this.special11_i(),this.special12_i(),this.specialType_i()];
		return t;
	};
	_proto.special0_i = function () {
		var t = new eui.Image();
		this.special0 = t;
		t.height = 127;
		t.source = "t14";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.special1_i = function () {
		var t = new eui.Image();
		this.special1 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.special2_i = function () {
		var t = new eui.Image();
		this.special2 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.special3_i = function () {
		var t = new eui.Image();
		this.special3 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.special4_i = function () {
		var t = new eui.Image();
		this.special4 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.special5_i = function () {
		var t = new eui.Image();
		this.special5 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.special6_i = function () {
		var t = new eui.Image();
		this.special6 = t;
		t.height = 127;
		t.source = "t14";
		t.width = 97;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto.special7_i = function () {
		var t = new eui.Image();
		this.special7 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 210;
		t.y = 0;
		return t;
	};
	_proto.special8_i = function () {
		var t = new eui.Image();
		this.special8 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto.special9_i = function () {
		var t = new eui.Image();
		this.special9 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 270;
		t.y = 0;
		return t;
	};
	_proto.special10_i = function () {
		var t = new eui.Image();
		this.special10 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.special11_i = function () {
		var t = new eui.Image();
		this.special11 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 330;
		t.y = 0;
		return t;
	};
	_proto.special12_i = function () {
		var t = new eui.Image();
		this.special12 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.specialType_i = function () {
		var t = new eui.Image();
		this.specialType = t;
		t.horizontalCenter = 0;
		t.source = "peipai";
		t.verticalCenter = 20.5;
		return t;
	};
	_proto.paiGroup2_i = function () {
		var t = new eui.Group();
		this.paiGroup2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.x = 384.14;
		t.y = 164.77;
		t.elementsContent = [this.pai212_i(),this.pai211_i(),this.pai210_i(),this.pai29_i(),this.pai28_i(),this.pai27_i(),this.pai26_i(),this.pai25_i(),this.pai24_i(),this.pai23_i(),this.pai22_i(),this.pai21_i(),this.pai20_i(),this.peipai2_i()];
		return t;
	};
	_proto.pai212_i = function () {
		var t = new eui.Image();
		this.pai212 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai211_i = function () {
		var t = new eui.Image();
		this.pai211 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai210_i = function () {
		var t = new eui.Image();
		this.pai210 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai29_i = function () {
		var t = new eui.Image();
		this.pai29 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai28_i = function () {
		var t = new eui.Image();
		this.pai28 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai27_i = function () {
		var t = new eui.Image();
		this.pai27 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai26_i = function () {
		var t = new eui.Image();
		this.pai26 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai25_i = function () {
		var t = new eui.Image();
		this.pai25 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai24_i = function () {
		var t = new eui.Image();
		this.pai24 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai23_i = function () {
		var t = new eui.Image();
		this.pai23 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai22_i = function () {
		var t = new eui.Image();
		this.pai22 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai21_i = function () {
		var t = new eui.Image();
		this.pai21 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai20_i = function () {
		var t = new eui.Image();
		this.pai20 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.peipai2_i = function () {
		var t = new eui.Image();
		this.peipai2 = t;
		t.horizontalCenter = 0;
		t.source = "peipai";
		t.verticalCenter = 0;
		return t;
	};
	_proto.paiGroup3_i = function () {
		var t = new eui.Group();
		this.paiGroup3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.x = 257;
		t.y = 164;
		t.elementsContent = [this.pai312_i(),this.pai311_i(),this.pai310_i(),this.pai39_i(),this.pai38_i(),this.pai37_i(),this.pai36_i(),this.pai35_i(),this.pai34_i(),this.pai33_i(),this.pai32_i(),this.pai31_i(),this.pai30_i(),this.peipai3_i()];
		return t;
	};
	_proto.pai312_i = function () {
		var t = new eui.Image();
		this.pai312 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai311_i = function () {
		var t = new eui.Image();
		this.pai311 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai310_i = function () {
		var t = new eui.Image();
		this.pai310 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai39_i = function () {
		var t = new eui.Image();
		this.pai39 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai38_i = function () {
		var t = new eui.Image();
		this.pai38 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai37_i = function () {
		var t = new eui.Image();
		this.pai37 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai36_i = function () {
		var t = new eui.Image();
		this.pai36 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai35_i = function () {
		var t = new eui.Image();
		this.pai35 = t;
		t.height = 127;
		t.source = "t14";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai34_i = function () {
		var t = new eui.Image();
		this.pai34 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai33_i = function () {
		var t = new eui.Image();
		this.pai33 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai32_i = function () {
		var t = new eui.Image();
		this.pai32 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai31_i = function () {
		var t = new eui.Image();
		this.pai31 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai30_i = function () {
		var t = new eui.Image();
		this.pai30 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.peipai3_i = function () {
		var t = new eui.Image();
		this.peipai3 = t;
		t.horizontalCenter = 0;
		t.source = "peipai";
		t.verticalCenter = 0;
		return t;
	};
	_proto.paiGroup4_i = function () {
		var t = new eui.Group();
		this.paiGroup4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.x = 93;
		t.y = 279.78;
		t.elementsContent = [this.pai412_i(),this.pai411_i(),this.pai410_i(),this.pai49_i(),this.pai48_i(),this.pai47_i(),this.pai46_i(),this.pai45_i(),this.pai44_i(),this.pai43_i(),this.pai42_i(),this.pai41_i(),this.pai40_i(),this.peipai4_i()];
		return t;
	};
	_proto.pai412_i = function () {
		var t = new eui.Image();
		this.pai412 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai411_i = function () {
		var t = new eui.Image();
		this.pai411 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.pai410_i = function () {
		var t = new eui.Image();
		this.pai410 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.pai49_i = function () {
		var t = new eui.Image();
		this.pai49 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.pai48_i = function () {
		var t = new eui.Image();
		this.pai48 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.pai47_i = function () {
		var t = new eui.Image();
		this.pai47 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.pai46_i = function () {
		var t = new eui.Image();
		this.pai46 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.pai45_i = function () {
		var t = new eui.Image();
		this.pai45 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.pai44_i = function () {
		var t = new eui.Image();
		this.pai44 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.pai43_i = function () {
		var t = new eui.Image();
		this.pai43 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.pai42_i = function () {
		var t = new eui.Image();
		this.pai42 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 250;
		t.y = 0;
		return t;
	};
	_proto.pai41_i = function () {
		var t = new eui.Image();
		this.pai41 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.pai40_i = function () {
		var t = new eui.Image();
		this.pai40 = t;
		t.height = 127;
		t.source = "poke61";
		t.width = 97;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.peipai4_i = function () {
		var t = new eui.Image();
		this.peipai4 = t;
		t.horizontalCenter = 0;
		t.source = "peipai";
		t.verticalCenter = 0;
		return t;
	};
	_proto.liPai_i = function () {
		var t = new eui.Group();
		this.liPai = t;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this._Group3_i(),this._Label1_i(),this.chooseTypeGroup_i(),this._Group13_i(),this.specialGroup_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 640;
		t.source = "mengban_png";
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 111;
		t.y = 22.73;
		t.elementsContent = [this._Image13_i(),this._Group2_i(),this.headDao_i(),this.midDao_i(),this.tailDao_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "lipaiDi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = -90.58;
		t.y = 152.73;
		t.elementsContent = [this.daojiquan_i(),this.daojiNum_i()];
		return t;
	};
	_proto.daojiquan_i = function () {
		var t = new eui.Image();
		this.daojiquan = t;
		t.source = "inGameDaojishiD";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojiNum_i = function () {
		var t = new eui.Label();
		this.daojiNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "999";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 88;
		return t;
	};
	_proto.headDao_i = function () {
		var t = new eui.Group();
		this.headDao = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 300;
		t.y = 36.84;
		t.elementsContent = [this.headDao2_i(),this.headDao1_i(),this.headDao0_i(),this.headGuang_i()];
		return t;
	};
	_proto.headDao2_i = function () {
		var t = new eui.Image();
		this.headDao2 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 0;
		return t;
	};
	_proto.headDao1_i = function () {
		var t = new eui.Image();
		this.headDao1 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0.5;
		t.width = 97;
		t.x = 50;
		return t;
	};
	_proto.headDao0_i = function () {
		var t = new eui.Image();
		this.headDao0 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 100;
		return t;
	};
	_proto.headGuang_i = function () {
		var t = new eui.Image();
		this.headGuang = t;
		t.scaleX = 0.65;
		t.source = "mAndTguang_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.midDao_i = function () {
		var t = new eui.Group();
		this.midDao = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 250;
		t.y = 115.57;
		t.elementsContent = [this.midDao4_i(),this.midDao3_i(),this.midDao2_i(),this.midDao1_i(),this.midDao0_i(),this.midGuang_i()];
		return t;
	};
	_proto.midDao4_i = function () {
		var t = new eui.Image();
		this.midDao4 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 0;
		return t;
	};
	_proto.midDao3_i = function () {
		var t = new eui.Image();
		this.midDao3 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 50;
		return t;
	};
	_proto.midDao2_i = function () {
		var t = new eui.Image();
		this.midDao2 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 100;
		return t;
	};
	_proto.midDao1_i = function () {
		var t = new eui.Image();
		this.midDao1 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 150;
		return t;
	};
	_proto.midDao0_i = function () {
		var t = new eui.Image();
		this.midDao0 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 200;
		return t;
	};
	_proto.midGuang_i = function () {
		var t = new eui.Image();
		this.midGuang = t;
		t.scaleX = 0.84;
		t.scaleY = 1;
		t.source = "headGuang_png";
		t.visible = false;
		t.x = 0.34;
		t.y = 0;
		return t;
	};
	_proto.tailDao_i = function () {
		var t = new eui.Group();
		this.tailDao = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 231.99;
		t.y = 205;
		t.elementsContent = [this.tailDao4_i(),this.tailDao3_i(),this.tailDao2_i(),this.tailDao1_i(),this.tailDao0_i(),this.footGuang_i()];
		return t;
	};
	_proto.tailDao4_i = function () {
		var t = new eui.Image();
		this.tailDao4 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 0;
		return t;
	};
	_proto.tailDao3_i = function () {
		var t = new eui.Image();
		this.tailDao3 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 60;
		return t;
	};
	_proto.tailDao2_i = function () {
		var t = new eui.Image();
		this.tailDao2 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 120;
		return t;
	};
	_proto.tailDao1_i = function () {
		var t = new eui.Image();
		this.tailDao1 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 180;
		return t;
	};
	_proto.tailDao0_i = function () {
		var t = new eui.Image();
		this.tailDao0 = t;
		t.height = 127;
		t.source = "paibei";
		t.verticalCenter = 0;
		t.width = 97;
		t.x = 240;
		return t;
	};
	_proto.footGuang_i = function () {
		var t = new eui.Image();
		this.footGuang = t;
		t.scaleX = 0.94;
		t.scaleY = 1;
		t.source = "headGuang_png";
		t.visible = false;
		t.x = 0.67;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "选择相应的牌之后，点击你想要放的位置，必须满足尾道>中道>头道。";
		t.textColor = 0xfff177;
		t.visible = false;
		t.x = 331;
		t.y = 244;
		return t;
	};
	_proto.chooseTypeGroup_i = function () {
		var t = new eui.Group();
		this.chooseTypeGroup = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 46;
		t.y = 573.22;
		t.elementsContent = [this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 135;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.type0_i()];
		return t;
	};
	_proto.type0_i = function () {
		var t = new eui.Button();
		this.type0 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin564;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 135;
		t.x = 120;
		t.y = 0;
		t.elementsContent = [this.type1_i()];
		return t;
	};
	_proto.type1_i = function () {
		var t = new eui.Button();
		this.type1 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin565;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 135;
		t.x = 240;
		t.y = 0;
		t.elementsContent = [this.type2_i()];
		return t;
	};
	_proto.type2_i = function () {
		var t = new eui.Button();
		this.type2 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin566;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 135;
		t.x = 360;
		t.y = 0;
		t.elementsContent = [this.type3_i()];
		return t;
	};
	_proto.type3_i = function () {
		var t = new eui.Button();
		this.type3 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin567;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 135;
		t.x = 480;
		t.y = 0;
		t.elementsContent = [this.type4_i()];
		return t;
	};
	_proto.type4_i = function () {
		var t = new eui.Button();
		this.type4 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin568;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 135;
		t.x = 600;
		t.y = 0;
		t.elementsContent = [this.type5_i()];
		return t;
	};
	_proto.type5_i = function () {
		var t = new eui.Button();
		this.type5 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin569;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 135;
		t.x = 720;
		t.y = 0;
		t.elementsContent = [this.type6_i()];
		return t;
	};
	_proto.type6_i = function () {
		var t = new eui.Button();
		this.type6 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin570;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 135;
		t.x = 840;
		t.y = 0;
		t.elementsContent = [this.type7_i()];
		return t;
	};
	_proto.type7_i = function () {
		var t = new eui.Button();
		this.type7 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin571;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.verticalCenter = 0;
		t.width = 135;
		t.x = 960;
		t.elementsContent = [this.type8_i()];
		return t;
	};
	_proto.type8_i = function () {
		var t = new eui.Button();
		this.type8 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin572;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 944.35;
		t.y = 249.31;
		t.elementsContent = [this.autoLiPai_i()];
		return t;
	};
	_proto.autoLiPai_i = function () {
		var t = new eui.Button();
		this.autoLiPai = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin573;
		return t;
	};
	_proto.specialGroup_i = function () {
		var t = new eui.Group();
		this.specialGroup = t;
		t.x = 872.34;
		t.y = 57.66;
		t.elementsContent = [this._Image14_i(),this.specialConfirm_i(),this.specialText_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "sss_special_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.specialConfirm_i = function () {
		var t = new eui.Button();
		this.specialConfirm = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 104.66;
		t.skinName = shisandaoIndex$Skin574;
		return t;
	};
	_proto.specialText_i = function () {
		var t = new eui.Label();
		this.specialText = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "出现特殊牌型【一条龙】，是否按照特殊牌型出牌。";
		t.textColor = 0x000000;
		t.width = 170;
		t.x = 10;
		t.y = 26.02;
		return t;
	};
	_proto.pangguan_i = function () {
		var t = new eui.Image();
		this.pangguan = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pangguan";
		t.visible = false;
		t.x = 925.39;
		t.y = 283.34;
		return t;
	};
	_proto.inviteGroup_i = function () {
		var t = new eui.Group();
		this.inviteGroup = t;
		t.height = 70;
		t.visible = false;
		t.width = 185;
		t.x = 807.33;
		t.y = 473.53;
		t.elementsContent = [this.invite_i()];
		return t;
	};
	_proto.invite_i = function () {
		var t = new eui.Button();
		this.invite = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.58;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin575;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.visible = false;
		t.x = 349.31;
		t.y = 365;
		t.skinName = shisandaoIndex$Skin576;
		return t;
	};
	_proto.readyGroup_i = function () {
		var t = new eui.Group();
		this.readyGroup = t;
		t.height = 70;
		t.width = 195;
		t.x = 803.31;
		t.y = 548.62;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin577;
		return t;
	};
	_proto.sitGroup_i = function () {
		var t = new eui.Group();
		this.sitGroup = t;
		t.height = 70;
		t.visible = false;
		t.width = 195;
		t.x = 583.34;
		t.y = 367.68;
		t.elementsContent = [this.sitBtn_i()];
		return t;
	};
	_proto.sitBtn_i = function () {
		var t = new eui.Button();
		this.sitBtn = t;
		t.horizontalCenter = -2;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0.5;
		t.skinName = shisandaoIndex$Skin578;
		return t;
	};
	_proto.paiGroup0_i = function () {
		var t = new eui.Group();
		this.paiGroup0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 125;
		t.y = 434.96;
		t.elementsContent = [this.pai012_i(),this.pai011_i(),this.pai010_i(),this.pai09_i(),this.pai08_i(),this.pai07_i(),this.pai06_i(),this.pai05_i(),this.pai04_i(),this.pai03_i(),this.pai02_i(),this.pai01_i(),this.pai00_i(),this.peipai0_i()];
		return t;
	};
	_proto.pai012_i = function () {
		var t = new eui.Image();
		this.pai012 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai011_i = function () {
		var t = new eui.Image();
		this.pai011 = t;
		t.height = 140;
		t.source = "ht2";
		t.width = 107;
		t.x = 60.5;
		t.y = 0;
		return t;
	};
	_proto.pai010_i = function () {
		var t = new eui.Image();
		this.pai010 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 119;
		t.y = 0;
		return t;
	};
	_proto.pai09_i = function () {
		var t = new eui.Image();
		this.pai09 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 178.5;
		t.y = 0;
		return t;
	};
	_proto.pai08_i = function () {
		var t = new eui.Image();
		this.pai08 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 238;
		t.y = 0;
		return t;
	};
	_proto.pai07_i = function () {
		var t = new eui.Image();
		this.pai07 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 297.5;
		t.y = -1;
		return t;
	};
	_proto.pai06_i = function () {
		var t = new eui.Image();
		this.pai06 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 357;
		t.y = 0;
		return t;
	};
	_proto.pai05_i = function () {
		var t = new eui.Image();
		this.pai05 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 416.5;
		t.y = 0;
		return t;
	};
	_proto.pai04_i = function () {
		var t = new eui.Image();
		this.pai04 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 477;
		t.y = 0;
		return t;
	};
	_proto.pai03_i = function () {
		var t = new eui.Image();
		this.pai03 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 535.5;
		t.y = 0;
		return t;
	};
	_proto.pai02_i = function () {
		var t = new eui.Image();
		this.pai02 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 595;
		t.y = 0;
		return t;
	};
	_proto.pai01_i = function () {
		var t = new eui.Image();
		this.pai01 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 654.5;
		t.y = 0;
		return t;
	};
	_proto.pai00_i = function () {
		var t = new eui.Image();
		this.pai00 = t;
		t.height = 140;
		t.source = "ht14";
		t.width = 107;
		t.x = 716;
		t.y = 0;
		return t;
	};
	_proto.peipai0_i = function () {
		var t = new eui.Image();
		this.peipai0 = t;
		t.horizontalCenter = 0;
		t.source = "type35_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 153;
		t.height = 226;
		t.visible = false;
		t.width = 153;
		t.x = 1080;
		t.y = 100;
		t.elementsContent = [this._Image15_i(),this._Group14_i(),this._Group15_i(),this._Group16_i(),this._Group17_i(),this._Group18_i(),this._Group19_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 226;
		t.scale9Grid = new egret.Rectangle(11,11,32,32);
		t.source = "cgImage_json.menulistBg";
		t.width = 153;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.visible = false;
		t.width = 118;
		t.y = 15;
		t.elementsContent = [this._Button1_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = shisandaoIndex$Skin579;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 15;
		t.elementsContent = [this.wanfa_i()];
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin580;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 67;
		t.elementsContent = [this.diaband_i()];
		return t;
	};
	_proto.diaband_i = function () {
		var t = new eui.Button();
		this.diaband = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin581;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 119;
		t.elementsContent = [this.situp_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = shisandaoIndex$Skin582;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 171;
		t.elementsContent = [this.setting_i()];
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin583;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.visible = false;
		t.width = 65;
		t.y = 223;
		t.elementsContent = [this.locBtn_i()];
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin584;
		return t;
	};
	_proto.singleResult_i = function () {
		var t = new eui.Group();
		this.singleResult = t;
		t.visible = false;
		t.x = 3.84;
		t.y = 502.96;
		t.elementsContent = [this._Image16_i(),this.single0_i(),this.single1_i(),this.single2_i(),this.single3_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.scale9Grid = new egret.Rectangle(21,47,131,46);
		t.source = "single_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.single0_i = function () {
		var t = new eui.Group();
		this.single0 = t;
		t.horizontalCenter = 0.5;
		t.y = 39.5;
		t.elementsContent = [this.username0_i(),this.userpoint0_i()];
		return t;
	};
	_proto.username0_i = function () {
		var t = new eui.Label();
		this.username0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "紫碧罗";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userpoint0_i = function () {
		var t = new eui.Label();
		this.userpoint0 = t;
		t.height = 18;
		t.size = 18;
		t.text = "+9999";
		t.textAlign = "center";
		t.textColor = 0xffef66;
		t.width = 51;
		t.x = 80.69;
		t.y = 0;
		return t;
	};
	_proto.single1_i = function () {
		var t = new eui.Group();
		this.single1 = t;
		t.horizontalCenter = 0.5;
		t.y = 59.5;
		t.elementsContent = [this.username1_i(),this.userpoint1_i()];
		return t;
	};
	_proto.username1_i = function () {
		var t = new eui.Label();
		this.username1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "紫碧罗";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userpoint1_i = function () {
		var t = new eui.Label();
		this.userpoint1 = t;
		t.height = 18;
		t.size = 18;
		t.text = "+9999";
		t.textAlign = "center";
		t.textColor = 0xFFEF66;
		t.width = 51;
		t.x = 80.69;
		t.y = 0;
		return t;
	};
	_proto.single2_i = function () {
		var t = new eui.Group();
		this.single2 = t;
		t.horizontalCenter = 0.5;
		t.y = 79.5;
		t.elementsContent = [this.username2_i(),this.userpoint2_i()];
		return t;
	};
	_proto.username2_i = function () {
		var t = new eui.Label();
		this.username2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "紫碧罗";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userpoint2_i = function () {
		var t = new eui.Label();
		this.userpoint2 = t;
		t.height = 18;
		t.size = 18;
		t.text = "-9999";
		t.textAlign = "center";
		t.textColor = 0x79b6f7;
		t.width = 51;
		t.x = 80.69;
		t.y = 0;
		return t;
	};
	_proto.single3_i = function () {
		var t = new eui.Group();
		this.single3 = t;
		t.horizontalCenter = 0.5;
		t.y = 98.5;
		t.elementsContent = [this.username3_i(),this.userpoint3_i()];
		return t;
	};
	_proto.username3_i = function () {
		var t = new eui.Label();
		this.username3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 18;
		t.size = 18;
		t.text = "紫碧罗";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userpoint3_i = function () {
		var t = new eui.Label();
		this.userpoint3 = t;
		t.height = 18;
		t.size = 18;
		t.text = "-9999";
		t.textAlign = "center";
		t.textColor = 0x79B6F7;
		t.width = 51;
		t.x = 80.69;
		t.y = 0;
		return t;
	};
	_proto.showTip_i = function () {
		var t = new eui.Group();
		this.showTip = t;
		t.horizontalCenter = 0;
		t.y = 385.82;
		t.elementsContent = [this._Image17_i(),this.tipContent_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "ingameTip_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipContent_i = function () {
		var t = new eui.Label();
		this.tipContent = t;
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
	_proto.luying_i = function () {
		var t = new eui.Group();
		this.luying = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image18_i(),this._Group20_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "jiesan_json.voiceBG";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 83;
		t.y = 17;
		t.elementsContent = [this.voice1_i(),this.voice2_i(),this.voice3_i(),this.voice4_i()];
		return t;
	};
	_proto.voice1_i = function () {
		var t = new eui.Image();
		this.voice1 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_1";
		t.y = 54;
		return t;
	};
	_proto.voice2_i = function () {
		var t = new eui.Image();
		this.voice2 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_2";
		t.visible = false;
		t.y = 36;
		return t;
	};
	_proto.voice3_i = function () {
		var t = new eui.Image();
		this.voice3 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_3";
		t.visible = false;
		t.y = 18;
		return t;
	};
	_proto.voice4_i = function () {
		var t = new eui.Image();
		this.voice4 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_4";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.chupaiGroup_i = function () {
		var t = new eui.Group();
		this.chupaiGroup = t;
		t.height = 63;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 183;
		t.y = 455.6;
		t.elementsContent = [this.chupai_i()];
		return t;
	};
	_proto.chupai_i = function () {
		var t = new eui.Button();
		this.chupai = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin585;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 982.17;
		t.y = 395.97;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin586;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.x = -18;
		t.y = -92.66;
		t.elementsContent = [this._Image19_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "ddz_yy_qp_bg_png";
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
		t.width = 100;
		t.y = 12.65;
		return t;
	};
	_proto.xxGroup_i = function () {
		var t = new eui.Group();
		this.xxGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 982.67;
		t.y = 479.41;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = shisandaoIndex$Skin587;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image20_i(),this.juhua_i(),this._Label2_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 32;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "正在连接服务器，请稍候……";
		t.y = 413.67;
		return t;
	};
	_proto.inviteNotice_i = function () {
		var t = new eui.Group();
		this.inviteNotice = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image21_i(),this._Rect2_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.source = "inviteJIANtou_png";
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 100;
		t.strokeAlpha = 0;
		t.width = 100;
		t.x = 81;
		t.y = 0;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.width = 365;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.8;
		t.height = 100;
		t.strokeAlpha = 1;
		t.strokeColor = 0x999461;
		t.strokeWeight = 2;
		t.width = 365;
		t.x = 0;
		t.y = -6;
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
	return shisandaoIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shisanShui/wanfa13.exml'] = window.wanfa13 = (function (_super) {
	__extends(wanfa13, _super);
	var wanfa13$Skin588 = 	(function (_super) {
		__extends(wanfa13$Skin588, _super);
		function wanfa13$Skin588() {
			_super.call(this);
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
		var _proto = wanfa13$Skin588.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_ic_guanbi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return wanfa13$Skin588;
	})(eui.Skin);

	function wanfa13() {
		_super.call(this);
		this.skinParts = ["bg","cont","close"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.bg_i(),this._Group3_i()];
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
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 918;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this._Image2_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
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
		t.horizontalCenter = 0;
		t.source = "rule13_png";
		t.width = 839;
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
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 100;
		t.width = 68;
		t.x = 852;
		t.y = -22;
		t.elementsContent = [this.close_i()];
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = wanfa13$Skin588;
		return t;
	};
	return wanfa13;
})(eui.Skin);