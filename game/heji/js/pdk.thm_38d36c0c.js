
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/hangzhouMJ/wanfa_hzmj.exml'] = window.wanfa_hzmj = (function (_super) {
	__extends(wanfa_hzmj, _super);
	var wanfa_hzmj$Skin394 = 	(function (_super) {
		__extends(wanfa_hzmj$Skin394, _super);
		function wanfa_hzmj$Skin394() {
			_super.call(this);
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
		var _proto = wanfa_hzmj$Skin394.prototype;

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
		return wanfa_hzmj$Skin394;
	})(eui.Skin);

	function wanfa_hzmj() {
		_super.call(this);
		this.skinParts = ["bg","cont","close"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.bg_i(),this._Group3_i()];
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
		t.source = "rule_hzmj_png";
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
		t.skinName = wanfa_hzmj$Skin394;
		return t;
	};
	return wanfa_hzmj;
})(eui.Skin);generateEUI.paths['resource/eui_skins/paodekuai/createPdk.exml'] = window.createPdk = (function (_super) {
	__extends(createPdk, _super);
	var createPdk$Skin512 = 	(function (_super) {
		__extends(createPdk$Skin512, _super);
		function createPdk$Skin512() {
			_super.call(this);
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
		var _proto = createPdk$Skin512.prototype;

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
			t.size = 25;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createPdk$Skin512;
	})(eui.Skin);

	var createPdk$Skin513 = 	(function (_super) {
		__extends(createPdk$Skin513, _super);
		function createPdk$Skin513() {
			_super.call(this);
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
		var _proto = createPdk$Skin513.prototype;

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
			t.size = 25;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createPdk$Skin513;
	})(eui.Skin);

	var createPdk$Skin514 = 	(function (_super) {
		__extends(createPdk$Skin514, _super);
		function createPdk$Skin514() {
			_super.call(this);
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
		var _proto = createPdk$Skin514.prototype;

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
			t.size = 25;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 50;
			return t;
		};
		return createPdk$Skin514;
	})(eui.Skin);

	var createPdk$Skin515 = 	(function (_super) {
		__extends(createPdk$Skin515, _super);
		function createPdk$Skin515() {
			_super.call(this);
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
		var _proto = createPdk$Skin515.prototype;

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
		return createPdk$Skin515;
	})(eui.Skin);

	var createPdk$Skin516 = 	(function (_super) {
		__extends(createPdk$Skin516, _super);
		function createPdk$Skin516() {
			_super.call(this);
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
		var _proto = createPdk$Skin516.prototype;

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
		return createPdk$Skin516;
	})(eui.Skin);

	function createPdk() {
		_super.call(this);
		this.skinParts = ["m_menban","hallbg","m_showtip","m_gameground2","m_gameground3","m_gameground1","m_gameground","m_create","m_close","m_mianban"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this.m_menban_i(),this.m_mianban_i()];
	}
	var _proto = createPdk.prototype;

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
		t.elementsContent = [this._Group2_i(),this.m_close_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.width = 1215;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.hallbg_i(),this._Group1_i(),this.m_gameground_i(),this.m_create_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,80,80);
		t.scaleY = 1;
		t.source = "hallImage_json.createBottom";
		t.width = 1215;
		t.y = 0;
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
		t.source = "hallImage_json.pdkTitle";
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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 530;
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
	_proto.m_gameground_i = function () {
		var t = new eui.Group();
		this.m_gameground = t;
		t.x = 300;
		t.y = 330;
		t.elementsContent = [this._Label1_i(),this.m_gameground2_i(),this.m_gameground3_i(),this.m_gameground1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "局数：";
		t.verticalCenter = 0;
		t.x = -100;
		return t;
	};
	_proto.m_gameground2_i = function () {
		var t = new eui.RadioButton();
		this.m_gameground2 = t;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "20局";
		t.selected = false;
		t.value = "20";
		t.width = 47;
		t.x = 152.5;
		t.y = 0;
		t.skinName = createPdk$Skin512;
		return t;
	};
	_proto.m_gameground3_i = function () {
		var t = new eui.RadioButton();
		this.m_gameground3 = t;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "30局";
		t.selected = false;
		t.value = "30";
		t.width = 47;
		t.x = 305;
		t.y = 0;
		t.skinName = createPdk$Skin513;
		return t;
	};
	_proto.m_gameground1_i = function () {
		var t = new eui.RadioButton();
		this.m_gameground1 = t;
		t.enabled = true;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "10局";
		t.selected = true;
		t.value = "10";
		t.width = 47;
		t.x = 0;
		t.y = 0;
		t.skinName = createPdk$Skin514;
		return t;
	};
	_proto.m_create_i = function () {
		var t = new eui.Button();
		this.m_create = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -0.5;
		t.label = "";
		t.y = 625;
		t.skinName = createPdk$Skin515;
		return t;
	};
	_proto.m_close_i = function () {
		var t = new eui.Button();
		this.m_close = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1097.23;
		t.y = 15.44;
		t.skinName = createPdk$Skin516;
		return t;
	};
	return createPdk;
})(eui.Skin);generateEUI.paths['resource/eui_skins/paodekuai/pdkIndex.exml'] = window.pdkIndex = (function (_super) {
	__extends(pdkIndex, _super);
	var pdkIndex$Skin517 = 	(function (_super) {
		__extends(pdkIndex$Skin517, _super);
		function pdkIndex$Skin517() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin517.prototype;

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
		return pdkIndex$Skin517;
	})(eui.Skin);

	var pdkIndex$Skin518 = 	(function (_super) {
		__extends(pdkIndex$Skin518, _super);
		function pdkIndex$Skin518() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","call_landlord_n"),
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin518.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "call_landlord_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin518;
	})(eui.Skin);

	var pdkIndex$Skin519 = 	(function (_super) {
		__extends(pdkIndex$Skin519, _super);
		function pdkIndex$Skin519() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","grab_landlord_n"),
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin519.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "grab_landlord_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin519;
	})(eui.Skin);

	var pdkIndex$Skin520 = 	(function (_super) {
		__extends(pdkIndex$Skin520, _super);
		function pdkIndex$Skin520() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ddz_desk_json.call_one_n")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","ddz_desk_json.call_one_n_h")
					])
			];
		}
		var _proto = pdkIndex$Skin520.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ddz_desk_json.call_one_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin520;
	})(eui.Skin);

	var pdkIndex$Skin521 = 	(function (_super) {
		__extends(pdkIndex$Skin521, _super);
		function pdkIndex$Skin521() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ddz_desk_json.call_two_n")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","ddz_desk_json.call_two_n_h")
					])
			];
		}
		var _proto = pdkIndex$Skin521.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ddz_desk_json.call_two_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin521;
	})(eui.Skin);

	var pdkIndex$Skin522 = 	(function (_super) {
		__extends(pdkIndex$Skin522, _super);
		function pdkIndex$Skin522() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ddz_desk_json.call_tree_n")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","ddz_desk_json.call_tree_n_h")
					])
			];
		}
		var _proto = pdkIndex$Skin522.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ddz_desk_json.call_tree_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin522;
	})(eui.Skin);

	var pdkIndex$Skin523 = 	(function (_super) {
		__extends(pdkIndex$Skin523, _super);
		function pdkIndex$Skin523() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","not_grab_landlord_n"),
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin523.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "not_grab_landlord_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin523;
	})(eui.Skin);

	var pdkIndex$Skin524 = 	(function (_super) {
		__extends(pdkIndex$Skin524, _super);
		function pdkIndex$Skin524() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tips_n"),
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin524.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tips_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin524;
	})(eui.Skin);

	var pdkIndex$Skin525 = 	(function (_super) {
		__extends(pdkIndex$Skin525, _super);
		function pdkIndex$Skin525() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","out_n"),
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin525.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "out_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin525;
	})(eui.Skin);

	var pdkIndex$Skin526 = 	(function (_super) {
		__extends(pdkIndex$Skin526, _super);
		function pdkIndex$Skin526() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","not_out_n"),
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin526.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "not_out_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin526;
	})(eui.Skin);

	var pdkIndex$Skin527 = 	(function (_super) {
		__extends(pdkIndex$Skin527, _super);
		function pdkIndex$Skin527() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin527.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yaobuqibutu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin527;
	})(eui.Skin);

	var pdkIndex$Skin528 = 	(function (_super) {
		__extends(pdkIndex$Skin528, _super);
		function pdkIndex$Skin528() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin528.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ddzReady";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin528;
	})(eui.Skin);

	var pdkIndex$Skin529 = 	(function (_super) {
		__extends(pdkIndex$Skin529, _super);
		function pdkIndex$Skin529() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin529.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ddzMingpai";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin529;
	})(eui.Skin);

	var pdkIndex$Skin530 = 	(function (_super) {
		__extends(pdkIndex$Skin530, _super);
		function pdkIndex$Skin530() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","double_n"),
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin530.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "double_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin530;
	})(eui.Skin);

	var pdkIndex$Skin531 = 	(function (_super) {
		__extends(pdkIndex$Skin531, _super);
		function pdkIndex$Skin531() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","not_double_n"),
						new eui.SetProperty("_Image1","scaleX",1.2),
						new eui.SetProperty("_Image1","scaleY",1.2)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin531.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "not_double_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin531;
	})(eui.Skin);

	var pdkIndex$Skin532 = 	(function (_super) {
		__extends(pdkIndex$Skin532, _super);
		function pdkIndex$Skin532() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin532.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ddz_desk_json.desk_jipai";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin532;
	})(eui.Skin);

	var pdkIndex$Skin533 = 	(function (_super) {
		__extends(pdkIndex$Skin533, _super);
		function pdkIndex$Skin533() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","cgImage_json.lyBtn")
					])
			];
		}
		var _proto = pdkIndex$Skin533.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
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
		return pdkIndex$Skin533;
	})(eui.Skin);

	var pdkIndex$Skin534 = 	(function (_super) {
		__extends(pdkIndex$Skin534, _super);
		function pdkIndex$Skin534() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = pdkIndex$Skin534.prototype;

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
		return pdkIndex$Skin534;
	})(eui.Skin);

	var pdkIndex$Skin535 = 	(function (_super) {
		__extends(pdkIndex$Skin535, _super);
		function pdkIndex$Skin535() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","ddz_desk_json.ddz_startGameAn")
					])
			];
		}
		var _proto = pdkIndex$Skin535.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ddz_desk_json.ddz_startGame";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkIndex$Skin535;
	})(eui.Skin);

	var pdkIndex$Skin536 = 	(function (_super) {
		__extends(pdkIndex$Skin536, _super);
		function pdkIndex$Skin536() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin536.prototype;

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
		return pdkIndex$Skin536;
	})(eui.Skin);

	var pdkIndex$Skin537 = 	(function (_super) {
		__extends(pdkIndex$Skin537, _super);
		function pdkIndex$Skin537() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin537.prototype;

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
		return pdkIndex$Skin537;
	})(eui.Skin);

	var pdkIndex$Skin538 = 	(function (_super) {
		__extends(pdkIndex$Skin538, _super);
		function pdkIndex$Skin538() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin538.prototype;

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
		return pdkIndex$Skin538;
	})(eui.Skin);

	var pdkIndex$Skin539 = 	(function (_super) {
		__extends(pdkIndex$Skin539, _super);
		function pdkIndex$Skin539() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin539.prototype;

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
		return pdkIndex$Skin539;
	})(eui.Skin);

	var pdkIndex$Skin540 = 	(function (_super) {
		__extends(pdkIndex$Skin540, _super);
		function pdkIndex$Skin540() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin540.prototype;

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
		return pdkIndex$Skin540;
	})(eui.Skin);

	var pdkIndex$Skin541 = 	(function (_super) {
		__extends(pdkIndex$Skin541, _super);
		function pdkIndex$Skin541() {
			_super.call(this);
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
		var _proto = pdkIndex$Skin541.prototype;

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
		return pdkIndex$Skin541;
	})(eui.Skin);

	function pdkIndex() {
		_super.call(this);
		this.skinParts = ["bg","beilv","menu","outPai10","outPai11","outPai12","outPai13","outPai14","outPai15","outPai16","outPai17","outPai18","outPai19","outPai110","outPai111","outPai112","outPai113","outPai114","outPai115","outPai116","outPai117","outPai118","outPai119","outPai1","outPai20","outPai21","outPai22","outPai23","outPai24","outPai25","outPai26","outPai27","outPai28","outPai29","outPai210","outPai211","outPai212","outPai213","outPai214","outPai215","outPai216","outPai217","outPai218","outPai219","outPai2","outPai00","outPai01","outPai02","outPai03","outPai04","outPai05","outPai06","outPai07","outPai08","outPai09","outPai010","outPai011","outPai012","outPai013","outPai014","outPai015","outPai016","outPai017","outPai018","outPai019","outPai0","daojiNum0","daojishi0","daojiNum1","daojishi1","daojiNum2","daojishi2","paiNum2","pai2","paiNum1","pai1","headImage0","headDi0","message0","messagebg0","offline0","dizhu0","name0","biaoqing0","singlePoint0","point0","luyinzhong0","headClick0","invite0","sit0","user0","pai00","pai01","pai02","pai03","pai04","pai05","pai06","pai07","pai08","pai09","pai010","pai011","pai012","pai013","pai014","pai015","pai016","pai017","pai018","pai019","minglogo","pai0","mingpai10","mingpai11","mingpai12","mingpai13","mingpai14","mingpai15","mingpai16","mingpai17","mingpai18","mingpai19","mingpai110","mingpai111","mingpai112","mingpai113","mingpai114","mingpai115","mingpai116","mingpai117","mingpai118","mingpai119","mingpai1","jingbao0","status0","mingpai00","mingpai01","mingpai02","mingpai03","mingpai04","mingpai05","mingpai06","mingpai07","mingpai08","mingpai09","mingpai010","mingpai011","mingpai012","mingpai013","mingpai014","mingpai015","mingpai016","mingpai017","mingpai018","mingpai019","mingpai0","jingbao2","jingbao1","jiaodizhu","qiangdizhu","jiaodizhuGroup","jiaodizhu0","callPoint0","jiaodizhu1","callPoint1","jiaodizhu2","callPoint2","buqiang","buqiangGroup","qdzStatus","tishi","tishiGroup","chupai","chupaiGroup","buchu","buchuGroup","yaobuqi","ybqStatus","chupaiStatus","ready","mingReady","readyStatus","jiabei","bujiabei","jiabeiStatus","headImage1","headDi1","luyinzhong1","dizhu1","name1","point1","biaoqing1","status1","message1","messagebg1","headClick1","invite1","sit1","offline1","singlePoint1","user1","headImage2","headDi2","dizhu2","name2","point2","biaoqing2","status2","message2","messagebg2","offline2","headClick2","invite2","sit2","luyinzhong2","singlePoint2","user2","jipaiBtn","jipaiGroup","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","xiaoxi","xxGroup","maxBasescore","roompwd","playcount","startBtn","dimissProcess","dismissGroup","whoJoin","joinNotice","yaoqing","menban","menban0","jipai2","jipai1","jipai15","jipai14","jipai13","jipai12","jipai11","jipai10","jipai9","jipai8","jipai7","jipai6","jipai5","jipai4","jipai3","jipaiqiMenban","jipaiqi","wanfa","diaband","situp","setting","locBtn","menulist","voice1","voice2","voice3","voice4","luying","juhua","waitConnect"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.bg_i(),this._Group10_i(),this.startBtn_i(),this.dismissGroup_i(),this.joinNotice_i(),this.yaoqing_i(),this.menban_i(),this.menban0_i(),this.jipaiqi_i(),this.menulist_i(),this.luying_i(),this.waitConnect_i()];
	}
	var _proto = pdkIndex.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "pdk_desk_bg_png";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 635;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 1032;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.outPai1_i(),this.outPai2_i(),this.outPai0_i(),this.daojishi0_i(),this.daojishi1_i(),this.daojishi2_i(),this.pai2_i(),this.pai1_i(),this.user0_i(),this.pai0_i(),this.mingpai1_i(),this.jingbao0_i(),this.status0_i(),this.mingpai0_i(),this.jingbao2_i(),this.jingbao1_i(),this.qdzStatus_i(),this.chupaiStatus_i(),this.readyStatus_i(),this.jiabeiStatus_i(),this.user1_i(),this.user2_i(),this.jipaiGroup_i(),this.yyGroup_i(),this.xxGroup_i(),this.maxBasescore_i(),this._Group9_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 190.19;
		t.y = 18.96;
		t.elementsContent = [this._Image1_i(),this.beilv_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ddz_desk_json.ddz_deskPoint";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.beilv_i = function () {
		var t = new eui.Label();
		this.beilv = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 11;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 80;
		t.x = 967.68;
		t.y = 5.48;
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
		t.skinName = pdkIndex$Skin517;
		return t;
	};
	_proto.outPai1_i = function () {
		var t = new eui.Group();
		this.outPai1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 900;
		t.x = 123.63;
		t.y = 171.65;
		t.elementsContent = [this.outPai10_i(),this.outPai11_i(),this.outPai12_i(),this.outPai13_i(),this.outPai14_i(),this.outPai15_i(),this.outPai16_i(),this.outPai17_i(),this.outPai18_i(),this.outPai19_i(),this.outPai110_i(),this.outPai111_i(),this.outPai112_i(),this.outPai113_i(),this.outPai114_i(),this.outPai115_i(),this.outPai116_i(),this.outPai117_i(),this.outPai118_i(),this.outPai119_i()];
		return t;
	};
	_proto.outPai10_i = function () {
		var t = new eui.Image();
		this.outPai10 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.outPai11_i = function () {
		var t = new eui.Image();
		this.outPai11 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 45;
		t.y = 10;
		return t;
	};
	_proto.outPai12_i = function () {
		var t = new eui.Image();
		this.outPai12 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 90;
		t.y = 20;
		return t;
	};
	_proto.outPai13_i = function () {
		var t = new eui.Image();
		this.outPai13 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 135;
		t.y = 30;
		return t;
	};
	_proto.outPai14_i = function () {
		var t = new eui.Image();
		this.outPai14 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 180;
		t.y = 40;
		return t;
	};
	_proto.outPai15_i = function () {
		var t = new eui.Image();
		this.outPai15 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 225;
		t.y = 50;
		return t;
	};
	_proto.outPai16_i = function () {
		var t = new eui.Image();
		this.outPai16 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 270;
		t.y = 60;
		return t;
	};
	_proto.outPai17_i = function () {
		var t = new eui.Image();
		this.outPai17 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 315;
		t.y = 70;
		return t;
	};
	_proto.outPai18_i = function () {
		var t = new eui.Image();
		this.outPai18 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 360;
		t.y = 80;
		return t;
	};
	_proto.outPai19_i = function () {
		var t = new eui.Image();
		this.outPai19 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 405;
		t.y = 90;
		return t;
	};
	_proto.outPai110_i = function () {
		var t = new eui.Image();
		this.outPai110 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 450;
		t.y = 100;
		return t;
	};
	_proto.outPai111_i = function () {
		var t = new eui.Image();
		this.outPai111 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 495;
		t.y = 110;
		return t;
	};
	_proto.outPai112_i = function () {
		var t = new eui.Image();
		this.outPai112 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 540;
		t.y = 120;
		return t;
	};
	_proto.outPai113_i = function () {
		var t = new eui.Image();
		this.outPai113 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 585;
		t.y = 130;
		return t;
	};
	_proto.outPai114_i = function () {
		var t = new eui.Image();
		this.outPai114 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 630;
		t.y = 140;
		return t;
	};
	_proto.outPai115_i = function () {
		var t = new eui.Image();
		this.outPai115 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 675;
		t.y = 150;
		return t;
	};
	_proto.outPai116_i = function () {
		var t = new eui.Image();
		this.outPai116 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 720;
		t.y = 160;
		return t;
	};
	_proto.outPai117_i = function () {
		var t = new eui.Image();
		this.outPai117 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 765;
		t.y = 170;
		return t;
	};
	_proto.outPai118_i = function () {
		var t = new eui.Image();
		this.outPai118 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 810;
		t.y = 180;
		return t;
	};
	_proto.outPai119_i = function () {
		var t = new eui.Image();
		this.outPai119 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 855;
		t.y = 190;
		return t;
	};
	_proto.outPai2_i = function () {
		var t = new eui.Group();
		this.outPai2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 900;
		t.x = 145.96;
		t.y = 170.12;
		t.elementsContent = [this.outPai20_i(),this.outPai21_i(),this.outPai22_i(),this.outPai23_i(),this.outPai24_i(),this.outPai25_i(),this.outPai26_i(),this.outPai27_i(),this.outPai28_i(),this.outPai29_i(),this.outPai210_i(),this.outPai211_i(),this.outPai212_i(),this.outPai213_i(),this.outPai214_i(),this.outPai215_i(),this.outPai216_i(),this.outPai217_i(),this.outPai218_i(),this.outPai219_i()];
		return t;
	};
	_proto.outPai20_i = function () {
		var t = new eui.Image();
		this.outPai20 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.outPai21_i = function () {
		var t = new eui.Image();
		this.outPai21 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 45;
		t.y = 10;
		return t;
	};
	_proto.outPai22_i = function () {
		var t = new eui.Image();
		this.outPai22 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 90;
		t.y = 20;
		return t;
	};
	_proto.outPai23_i = function () {
		var t = new eui.Image();
		this.outPai23 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 135;
		t.y = 30;
		return t;
	};
	_proto.outPai24_i = function () {
		var t = new eui.Image();
		this.outPai24 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 180;
		t.y = 40;
		return t;
	};
	_proto.outPai25_i = function () {
		var t = new eui.Image();
		this.outPai25 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 225;
		t.y = 50;
		return t;
	};
	_proto.outPai26_i = function () {
		var t = new eui.Image();
		this.outPai26 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 270;
		t.y = 60;
		return t;
	};
	_proto.outPai27_i = function () {
		var t = new eui.Image();
		this.outPai27 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 315;
		t.y = 70;
		return t;
	};
	_proto.outPai28_i = function () {
		var t = new eui.Image();
		this.outPai28 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 360;
		t.y = 80;
		return t;
	};
	_proto.outPai29_i = function () {
		var t = new eui.Image();
		this.outPai29 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 405;
		t.y = 90;
		return t;
	};
	_proto.outPai210_i = function () {
		var t = new eui.Image();
		this.outPai210 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 450;
		t.y = 100;
		return t;
	};
	_proto.outPai211_i = function () {
		var t = new eui.Image();
		this.outPai211 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 495;
		t.y = 110;
		return t;
	};
	_proto.outPai212_i = function () {
		var t = new eui.Image();
		this.outPai212 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 540;
		t.y = 120;
		return t;
	};
	_proto.outPai213_i = function () {
		var t = new eui.Image();
		this.outPai213 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 585;
		t.y = 130;
		return t;
	};
	_proto.outPai214_i = function () {
		var t = new eui.Image();
		this.outPai214 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 630;
		t.y = 140;
		return t;
	};
	_proto.outPai215_i = function () {
		var t = new eui.Image();
		this.outPai215 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 675;
		t.y = 150;
		return t;
	};
	_proto.outPai216_i = function () {
		var t = new eui.Image();
		this.outPai216 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 720;
		t.y = 160;
		return t;
	};
	_proto.outPai217_i = function () {
		var t = new eui.Image();
		this.outPai217 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 765;
		t.y = 170;
		return t;
	};
	_proto.outPai218_i = function () {
		var t = new eui.Image();
		this.outPai218 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 810;
		t.y = 180;
		return t;
	};
	_proto.outPai219_i = function () {
		var t = new eui.Image();
		this.outPai219 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 855;
		t.y = 190;
		return t;
	};
	_proto.outPai0_i = function () {
		var t = new eui.Group();
		this.outPai0 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 900;
		t.x = 156;
		t.y = 326.94;
		t.elementsContent = [this.outPai00_i(),this.outPai01_i(),this.outPai02_i(),this.outPai03_i(),this.outPai04_i(),this.outPai05_i(),this.outPai06_i(),this.outPai07_i(),this.outPai08_i(),this.outPai09_i(),this.outPai010_i(),this.outPai011_i(),this.outPai012_i(),this.outPai013_i(),this.outPai014_i(),this.outPai015_i(),this.outPai016_i(),this.outPai017_i(),this.outPai018_i(),this.outPai019_i()];
		return t;
	};
	_proto.outPai00_i = function () {
		var t = new eui.Image();
		this.outPai00 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.outPai01_i = function () {
		var t = new eui.Image();
		this.outPai01 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 45;
		t.y = 10;
		return t;
	};
	_proto.outPai02_i = function () {
		var t = new eui.Image();
		this.outPai02 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 90;
		t.y = 20;
		return t;
	};
	_proto.outPai03_i = function () {
		var t = new eui.Image();
		this.outPai03 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 135;
		t.y = 30;
		return t;
	};
	_proto.outPai04_i = function () {
		var t = new eui.Image();
		this.outPai04 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 180;
		t.y = 40;
		return t;
	};
	_proto.outPai05_i = function () {
		var t = new eui.Image();
		this.outPai05 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 225;
		t.y = 50;
		return t;
	};
	_proto.outPai06_i = function () {
		var t = new eui.Image();
		this.outPai06 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 270;
		t.y = 60;
		return t;
	};
	_proto.outPai07_i = function () {
		var t = new eui.Image();
		this.outPai07 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 315;
		t.y = 70;
		return t;
	};
	_proto.outPai08_i = function () {
		var t = new eui.Image();
		this.outPai08 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 360;
		t.y = 80;
		return t;
	};
	_proto.outPai09_i = function () {
		var t = new eui.Image();
		this.outPai09 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 405;
		t.y = 90;
		return t;
	};
	_proto.outPai010_i = function () {
		var t = new eui.Image();
		this.outPai010 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 450;
		t.y = 100;
		return t;
	};
	_proto.outPai011_i = function () {
		var t = new eui.Image();
		this.outPai011 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 495;
		t.y = 110;
		return t;
	};
	_proto.outPai012_i = function () {
		var t = new eui.Image();
		this.outPai012 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 540;
		t.y = 120;
		return t;
	};
	_proto.outPai013_i = function () {
		var t = new eui.Image();
		this.outPai013 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 585;
		t.y = 130;
		return t;
	};
	_proto.outPai014_i = function () {
		var t = new eui.Image();
		this.outPai014 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 630;
		t.y = 140;
		return t;
	};
	_proto.outPai015_i = function () {
		var t = new eui.Image();
		this.outPai015 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 675;
		t.y = 150;
		return t;
	};
	_proto.outPai016_i = function () {
		var t = new eui.Image();
		this.outPai016 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 720;
		t.y = 160;
		return t;
	};
	_proto.outPai017_i = function () {
		var t = new eui.Image();
		this.outPai017 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 765;
		t.y = 170;
		return t;
	};
	_proto.outPai018_i = function () {
		var t = new eui.Image();
		this.outPai018 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 810;
		t.y = 180;
		return t;
	};
	_proto.outPai019_i = function () {
		var t = new eui.Image();
		this.outPai019 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "pai_json.f12";
		t.verticalCenter = 0;
		t.x = 855;
		t.y = 190;
		return t;
	};
	_proto.daojishi0_i = function () {
		var t = new eui.Group();
		this.daojishi0 = t;
		t.x = 302.36;
		t.y = 372.45;
		t.elementsContent = [this._Image2_i(),this.daojiNum0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "img_GamePlay_Timing_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojiNum0_i = function () {
		var t = new eui.Label();
		this.daojiNum0 = t;
		t.height = 30;
		t.horizontalCenter = -1;
		t.size = 30;
		t.text = "15";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 34;
		t.y = 20.54;
		return t;
	};
	_proto.daojishi1_i = function () {
		var t = new eui.Group();
		this.daojishi1 = t;
		t.x = 885.07;
		t.y = 211.08;
		t.elementsContent = [this._Image3_i(),this.daojiNum1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ddz_desk_json.img_GamePlay_Timing_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojiNum1_i = function () {
		var t = new eui.Label();
		this.daojiNum1 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.text = "15";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 34;
		t.y = 20.54;
		return t;
	};
	_proto.daojishi2_i = function () {
		var t = new eui.Group();
		this.daojishi2 = t;
		t.x = 85.1;
		t.y = 208.06;
		t.elementsContent = [this._Image4_i(),this.daojiNum2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_GamePlay_Timing_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojiNum2_i = function () {
		var t = new eui.Label();
		this.daojiNum2 = t;
		t.height = 30;
		t.horizontalCenter = -1;
		t.text = "15";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 34;
		t.y = 20.54;
		return t;
	};
	_proto.pai2_i = function () {
		var t = new eui.Group();
		this.pai2 = t;
		t.visible = false;
		t.x = 90.21;
		t.y = 288.19;
		t.elementsContent = [this._Image5_i(),this.paiNum2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "pai_json.poke61";
		t.width = 54;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiNum2_i = function () {
		var t = new eui.Label();
		this.paiNum2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "20";
		t.textColor = 0x000000;
		t.y = 25.69;
		return t;
	};
	_proto.pai1_i = function () {
		var t = new eui.Group();
		this.pai1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 876.71;
		t.y = 288.14;
		t.elementsContent = [this._Image6_i(),this.paiNum1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "pai_json.poke61";
		t.width = 54;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiNum1_i = function () {
		var t = new eui.Label();
		this.paiNum1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "20";
		t.textColor = 0x000000;
		t.y = 25.69;
		return t;
	};
	_proto.user0_i = function () {
		var t = new eui.Group();
		this.user0 = t;
		t.height = 104;
		t.width = 104;
		t.x = -13.54;
		t.y = 359.05;
		t.elementsContent = [this.headImage0_i(),this.headDi0_i(),this.messagebg0_i(),this.offline0_i(),this.dizhu0_i(),this.name0_i(),this.biaoqing0_i(),this.singlePoint0_i(),this.point0_i(),this.luyinzhong0_i(),this.headClick0_i(),this.invite0_i(),this.sit0_i()];
		return t;
	};
	_proto.headImage0_i = function () {
		var t = new eui.Image();
		this.headImage0 = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.source = "ddz_desk_json.ddz_head_defult";
		t.width = 90;
		t.y = 5.32;
		return t;
	};
	_proto.headDi0_i = function () {
		var t = new eui.Image();
		this.headDi0 = t;
		t.horizontalCenter = 0;
		t.source = "ddz_desk_json.desk_headDi";
		t.y = 0;
		return t;
	};
	_proto.messagebg0_i = function () {
		var t = new eui.Group();
		this.messagebg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 49.37;
		t.y = -49.73;
		t.elementsContent = [this._Image7_i(),this.message0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "kxmh_leftmsgqipao";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message0_i = function () {
		var t = new eui.Label();
		this.message0 = t;
		t.height = 20;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "我当年横扫澳门五条街";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		t.y = 9.4;
		return t;
	};
	_proto.offline0_i = function () {
		var t = new eui.Image();
		this.offline0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ddz_desk_json.img_GamePlay_OffLine_DDZ";
		t.visible = false;
		t.x = 13.49;
		t.y = 43.65;
		return t;
	};
	_proto.dizhu0_i = function () {
		var t = new eui.Image();
		this.dizhu0 = t;
		t.source = "pdk_desk_imgs_json.pdk_head_banker";
		t.x = 77.5;
		t.y = 1.51;
		return t;
	};
	_proto.name0_i = function () {
		var t = new eui.Label();
		this.name0 = t;
		t.height = 25;
		t.horizontalCenter = 2.5;
		t.size = 25;
		t.text = "GT棋牌";
		t.textAlign = "center";
		t.width = 125;
		t.y = 111.4;
		return t;
	};
	_proto.biaoqing0_i = function () {
		var t = new eui.Image();
		this.biaoqing0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.source = "15_png";
		t.visible = false;
		t.width = 90;
		t.y = 10.13;
		return t;
	};
	_proto.singlePoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint0 = t;
		t.font = "coin_action_fnt";
		t.left = 0;
		t.text = "+10";
		t.visible = false;
		t.y = -67;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.y = 138.98;
		return t;
	};
	_proto.luyinzhong0_i = function () {
		var t = new eui.Image();
		this.luyinzhong0 = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "dalaba_png";
		t.verticalCenter = -2.5;
		return t;
	};
	_proto.headClick0_i = function () {
		var t = new eui.Rect();
		this.headClick0 = t;
		t.fillAlpha = 0;
		t.height = 104;
		t.width = 104;
		t.x = 0;
		t.y = -3;
		return t;
	};
	_proto.invite0_i = function () {
		var t = new eui.Image();
		this.invite0 = t;
		t.horizontalCenter = 0.5;
		t.source = "ddz_desk_json.ddz_user_invite_btn";
		t.y = 1.52;
		return t;
	};
	_proto.sit0_i = function () {
		var t = new eui.Image();
		this.sit0 = t;
		t.horizontalCenter = 0.5;
		t.source = "ddz_desk_json.ddz_user_sit_btn";
		t.y = 0;
		return t;
	};
	_proto.pai0_i = function () {
		var t = new eui.Group();
		this.pai0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 10;
		t.y = 436.74;
		t.elementsContent = [this.pai00_i(),this.pai01_i(),this.pai02_i(),this.pai03_i(),this.pai04_i(),this.pai05_i(),this.pai06_i(),this.pai07_i(),this.pai08_i(),this.pai09_i(),this.pai010_i(),this.pai011_i(),this.pai012_i(),this.pai013_i(),this.pai014_i(),this.pai015_i(),this.pai016_i(),this.pai017_i(),this.pai018_i(),this.pai019_i(),this.minglogo_i()];
		return t;
	};
	_proto.pai00_i = function () {
		var t = new eui.Image();
		this.pai00 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto.pai01_i = function () {
		var t = new eui.Image();
		this.pai01 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 50;
		t.y = 35;
		return t;
	};
	_proto.pai02_i = function () {
		var t = new eui.Image();
		this.pai02 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto.pai03_i = function () {
		var t = new eui.Image();
		this.pai03 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 150;
		t.y = 35;
		return t;
	};
	_proto.pai04_i = function () {
		var t = new eui.Image();
		this.pai04 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 200;
		t.y = 35;
		return t;
	};
	_proto.pai05_i = function () {
		var t = new eui.Image();
		this.pai05 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 250;
		t.y = 35;
		return t;
	};
	_proto.pai06_i = function () {
		var t = new eui.Image();
		this.pai06 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 300;
		t.y = 35;
		return t;
	};
	_proto.pai07_i = function () {
		var t = new eui.Image();
		this.pai07 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 350;
		t.y = 35;
		return t;
	};
	_proto.pai08_i = function () {
		var t = new eui.Image();
		this.pai08 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 400;
		t.y = 35;
		return t;
	};
	_proto.pai09_i = function () {
		var t = new eui.Image();
		this.pai09 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 450;
		t.y = 35;
		return t;
	};
	_proto.pai010_i = function () {
		var t = new eui.Image();
		this.pai010 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 500;
		t.y = 35;
		return t;
	};
	_proto.pai011_i = function () {
		var t = new eui.Image();
		this.pai011 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 550;
		t.y = 35;
		return t;
	};
	_proto.pai012_i = function () {
		var t = new eui.Image();
		this.pai012 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 600;
		t.y = 35;
		return t;
	};
	_proto.pai013_i = function () {
		var t = new eui.Image();
		this.pai013 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 650;
		t.y = 35;
		return t;
	};
	_proto.pai014_i = function () {
		var t = new eui.Image();
		this.pai014 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 700;
		t.y = 35;
		return t;
	};
	_proto.pai015_i = function () {
		var t = new eui.Image();
		this.pai015 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 750;
		t.y = 35;
		return t;
	};
	_proto.pai016_i = function () {
		var t = new eui.Image();
		this.pai016 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 800;
		t.y = 35;
		return t;
	};
	_proto.pai017_i = function () {
		var t = new eui.Image();
		this.pai017 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 850;
		t.y = 35;
		return t;
	};
	_proto.pai018_i = function () {
		var t = new eui.Image();
		this.pai018 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 897.85;
		t.y = 35;
		return t;
	};
	_proto.pai019_i = function () {
		var t = new eui.Image();
		this.pai019 = t;
		t.height = 158.18;
		t.source = "pai_json.f12";
		t.width = 121.41;
		t.x = 950;
		t.y = 35;
		return t;
	};
	_proto.minglogo_i = function () {
		var t = new eui.Image();
		this.minglogo = t;
		t.source = "img_Card_mingpai";
		t.x = 963;
		t.y = 122;
		return t;
	};
	_proto.mingpai1_i = function () {
		var t = new eui.Group();
		this.mingpai1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 87.78;
		t.y = 142.84;
		t.elementsContent = [this.mingpai10_i(),this.mingpai11_i(),this.mingpai12_i(),this.mingpai13_i(),this.mingpai14_i(),this.mingpai15_i(),this.mingpai16_i(),this.mingpai17_i(),this.mingpai18_i(),this.mingpai19_i(),this.mingpai110_i(),this.mingpai111_i(),this.mingpai112_i(),this.mingpai113_i(),this.mingpai114_i(),this.mingpai115_i(),this.mingpai116_i(),this.mingpai117_i(),this.mingpai118_i(),this.mingpai119_i()];
		return t;
	};
	_proto.mingpai10_i = function () {
		var t = new eui.Image();
		this.mingpai10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mingpai11_i = function () {
		var t = new eui.Image();
		this.mingpai11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto.mingpai12_i = function () {
		var t = new eui.Image();
		this.mingpai12 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.mingpai13_i = function () {
		var t = new eui.Image();
		this.mingpai13 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.mingpai14_i = function () {
		var t = new eui.Image();
		this.mingpai14 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 160;
		t.y = 0;
		return t;
	};
	_proto.mingpai15_i = function () {
		var t = new eui.Image();
		this.mingpai15 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.mingpai16_i = function () {
		var t = new eui.Image();
		this.mingpai16 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto.mingpai17_i = function () {
		var t = new eui.Image();
		this.mingpai17 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 280;
		t.y = 0;
		return t;
	};
	_proto.mingpai18_i = function () {
		var t = new eui.Image();
		this.mingpai18 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 320;
		t.y = 0;
		return t;
	};
	_proto.mingpai19_i = function () {
		var t = new eui.Image();
		this.mingpai19 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.mingpai110_i = function () {
		var t = new eui.Image();
		this.mingpai110 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto.mingpai111_i = function () {
		var t = new eui.Image();
		this.mingpai111 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 40;
		t.y = 80;
		return t;
	};
	_proto.mingpai112_i = function () {
		var t = new eui.Image();
		this.mingpai112 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto.mingpai113_i = function () {
		var t = new eui.Image();
		this.mingpai113 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 120;
		t.y = 80;
		return t;
	};
	_proto.mingpai114_i = function () {
		var t = new eui.Image();
		this.mingpai114 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 160;
		t.y = 80;
		return t;
	};
	_proto.mingpai115_i = function () {
		var t = new eui.Image();
		this.mingpai115 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 200;
		t.y = 80;
		return t;
	};
	_proto.mingpai116_i = function () {
		var t = new eui.Image();
		this.mingpai116 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 240;
		t.y = 80;
		return t;
	};
	_proto.mingpai117_i = function () {
		var t = new eui.Image();
		this.mingpai117 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 280;
		t.y = 80;
		return t;
	};
	_proto.mingpai118_i = function () {
		var t = new eui.Image();
		this.mingpai118 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 320;
		t.y = 80;
		return t;
	};
	_proto.mingpai119_i = function () {
		var t = new eui.Image();
		this.mingpai119 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 360;
		t.y = 80;
		return t;
	};
	_proto.jingbao0_i = function () {
		var t = new eui.Image();
		this.jingbao0 = t;
		t.source = "lord_anim_remain_alarm_1";
		t.x = 97.3;
		t.y = 407.82;
		return t;
	};
	_proto.status0_i = function () {
		var t = new eui.Image();
		this.status0 = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "ddz_desk_json.player_ready";
		t.y = 388.2;
		return t;
	};
	_proto.mingpai0_i = function () {
		var t = new eui.Group();
		this.mingpai0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 671.31;
		t.y = 144.21;
		t.elementsContent = [this.mingpai00_i(),this.mingpai01_i(),this.mingpai02_i(),this.mingpai03_i(),this.mingpai04_i(),this.mingpai05_i(),this.mingpai06_i(),this.mingpai07_i(),this.mingpai08_i(),this.mingpai09_i(),this.mingpai010_i(),this.mingpai011_i(),this.mingpai012_i(),this.mingpai013_i(),this.mingpai014_i(),this.mingpai015_i(),this.mingpai016_i(),this.mingpai017_i(),this.mingpai018_i(),this.mingpai019_i()];
		return t;
	};
	_proto.mingpai00_i = function () {
		var t = new eui.Image();
		this.mingpai00 = t;
		t.height = 152;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.width = 110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mingpai01_i = function () {
		var t = new eui.Image();
		this.mingpai01 = t;
		t.height = 152;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.width = 110;
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto.mingpai02_i = function () {
		var t = new eui.Image();
		this.mingpai02 = t;
		t.height = 152;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.width = 110;
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.mingpai03_i = function () {
		var t = new eui.Image();
		this.mingpai03 = t;
		t.height = 152;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.width = 110;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.mingpai04_i = function () {
		var t = new eui.Image();
		this.mingpai04 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 160;
		t.y = 0;
		return t;
	};
	_proto.mingpai05_i = function () {
		var t = new eui.Image();
		this.mingpai05 = t;
		t.source = "pai_json.f12";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.mingpai06_i = function () {
		var t = new eui.Image();
		this.mingpai06 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto.mingpai07_i = function () {
		var t = new eui.Image();
		this.mingpai07 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 280;
		t.y = 0;
		return t;
	};
	_proto.mingpai08_i = function () {
		var t = new eui.Image();
		this.mingpai08 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 320;
		t.y = 0;
		return t;
	};
	_proto.mingpai09_i = function () {
		var t = new eui.Image();
		this.mingpai09 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.mingpai010_i = function () {
		var t = new eui.Image();
		this.mingpai010 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto.mingpai011_i = function () {
		var t = new eui.Image();
		this.mingpai011 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 40;
		t.y = 80;
		return t;
	};
	_proto.mingpai012_i = function () {
		var t = new eui.Image();
		this.mingpai012 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto.mingpai013_i = function () {
		var t = new eui.Image();
		this.mingpai013 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 120;
		t.y = 80;
		return t;
	};
	_proto.mingpai014_i = function () {
		var t = new eui.Image();
		this.mingpai014 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 160;
		t.y = 80;
		return t;
	};
	_proto.mingpai015_i = function () {
		var t = new eui.Image();
		this.mingpai015 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 200;
		t.y = 80;
		return t;
	};
	_proto.mingpai016_i = function () {
		var t = new eui.Image();
		this.mingpai016 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 240;
		t.y = 80;
		return t;
	};
	_proto.mingpai017_i = function () {
		var t = new eui.Image();
		this.mingpai017 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 280;
		t.y = 80;
		return t;
	};
	_proto.mingpai018_i = function () {
		var t = new eui.Image();
		this.mingpai018 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 320;
		t.y = 80;
		return t;
	};
	_proto.mingpai019_i = function () {
		var t = new eui.Image();
		this.mingpai019 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pai_json.f12";
		t.x = 360;
		t.y = 80;
		return t;
	};
	_proto.jingbao2_i = function () {
		var t = new eui.Image();
		this.jingbao2 = t;
		t.source = "lord_anim_remain_alarm_1";
		t.visible = false;
		t.x = 97.12;
		t.y = 107.27;
		return t;
	};
	_proto.jingbao1_i = function () {
		var t = new eui.Image();
		this.jingbao1 = t;
		t.source = "lord_anim_remain_alarm_1";
		t.x = 892.54;
		t.y = 108.77;
		return t;
	};
	_proto.qdzStatus_i = function () {
		var t = new eui.Group();
		this.qdzStatus = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 377.81;
		t.elementsContent = [this.jiaodizhuGroup_i(),this.callPoint0_i(),this.callPoint1_i(),this.callPoint2_i(),this.buqiangGroup_i()];
		return t;
	};
	_proto.jiaodizhuGroup_i = function () {
		var t = new eui.Group();
		this.jiaodizhuGroup = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 20;
		t.x = 50;
		t.elementsContent = [this.jiaodizhu_i(),this.qiangdizhu_i()];
		return t;
	};
	_proto.jiaodizhu_i = function () {
		var t = new eui.Button();
		this.jiaodizhu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin518;
		return t;
	};
	_proto.qiangdizhu_i = function () {
		var t = new eui.Button();
		this.qiangdizhu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin519;
		return t;
	};
	_proto.callPoint0_i = function () {
		var t = new eui.Group();
		this.callPoint0 = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 0;
		t.elementsContent = [this.jiaodizhu0_i()];
		return t;
	};
	_proto.jiaodizhu0_i = function () {
		var t = new eui.Button();
		this.jiaodizhu0 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin520;
		return t;
	};
	_proto.callPoint1_i = function () {
		var t = new eui.Group();
		this.callPoint1 = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 120;
		t.elementsContent = [this.jiaodizhu1_i()];
		return t;
	};
	_proto.jiaodizhu1_i = function () {
		var t = new eui.Button();
		this.jiaodizhu1 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin521;
		return t;
	};
	_proto.callPoint2_i = function () {
		var t = new eui.Group();
		this.callPoint2 = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 240;
		t.elementsContent = [this.jiaodizhu2_i()];
		return t;
	};
	_proto.jiaodizhu2_i = function () {
		var t = new eui.Button();
		this.jiaodizhu2 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin522;
		return t;
	};
	_proto.buqiangGroup_i = function () {
		var t = new eui.Group();
		this.buqiangGroup = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 360;
		t.elementsContent = [this.buqiang_i()];
		return t;
	};
	_proto.buqiang_i = function () {
		var t = new eui.Button();
		this.buqiang = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin523;
		return t;
	};
	_proto.chupaiStatus_i = function () {
		var t = new eui.Group();
		this.chupaiStatus = t;
		t.height = 54;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 236;
		t.y = 376.51;
		t.elementsContent = [this.tishiGroup_i(),this.chupaiGroup_i(),this.buchuGroup_i(),this.ybqStatus_i()];
		return t;
	};
	_proto.tishiGroup_i = function () {
		var t = new eui.Group();
		this.tishiGroup = t;
		t.height = 20;
		t.width = 20;
		t.x = 50;
		t.y = 17;
		t.elementsContent = [this.tishi_i()];
		return t;
	};
	_proto.tishi_i = function () {
		var t = new eui.Button();
		this.tishi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin524;
		return t;
	};
	_proto.chupaiGroup_i = function () {
		var t = new eui.Group();
		this.chupaiGroup = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 170;
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
		t.skinName = pdkIndex$Skin525;
		return t;
	};
	_proto.buchuGroup_i = function () {
		var t = new eui.Group();
		this.buchuGroup = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 20;
		t.x = 50;
		t.elementsContent = [this.buchu_i()];
		return t;
	};
	_proto.buchu_i = function () {
		var t = new eui.Button();
		this.buchu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.y = -649.0000000000001;
		t.skinName = pdkIndex$Skin526;
		return t;
	};
	_proto.ybqStatus_i = function () {
		var t = new eui.Group();
		this.ybqStatus = t;
		t.height = 58;
		t.visible = false;
		t.width = 122;
		t.x = 113.64;
		t.y = -4.56;
		t.elementsContent = [this.yaobuqi_i()];
		return t;
	};
	_proto.yaobuqi_i = function () {
		var t = new eui.Button();
		this.yaobuqi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin527;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Group();
		this.readyStatus = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 345.98;
		t.elementsContent = [this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.verticalCenter = 0;
		t.width = 20;
		t.elementsContent = [this.ready_i()];
		return t;
	};
	_proto.ready_i = function () {
		var t = new eui.Button();
		this.ready = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin528;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 20;
		t.x = 133;
		t.elementsContent = [this.mingReady_i()];
		return t;
	};
	_proto.mingReady_i = function () {
		var t = new eui.Button();
		this.mingReady = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin529;
		return t;
	};
	_proto.jiabeiStatus_i = function () {
		var t = new eui.Group();
		this.jiabeiStatus = t;
		t.visible = false;
		t.x = 399.36;
		t.y = 345.98;
		t.elementsContent = [this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 79;
		t.y = 20;
		t.elementsContent = [this.jiabei_i()];
		return t;
	};
	_proto.jiabei_i = function () {
		var t = new eui.Button();
		this.jiabei = t;
		t.horizontalCenter = -33.5;
		t.label = "";
		t.verticalCenter = -5;
		t.skinName = pdkIndex$Skin530;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 89;
		t.y = 30;
		t.elementsContent = [this.bujiabei_i()];
		return t;
	};
	_proto.bujiabei_i = function () {
		var t = new eui.Button();
		this.bujiabei = t;
		t.horizontalCenter = 76.5;
		t.label = "";
		t.verticalCenter = -15;
		t.skinName = pdkIndex$Skin531;
		return t;
	};
	_proto.user1_i = function () {
		var t = new eui.Group();
		this.user1 = t;
		t.height = 104;
		t.width = 105;
		t.x = 949.1;
		t.y = 150;
		t.elementsContent = [this.headImage1_i(),this.headDi1_i(),this.luyinzhong1_i(),this.dizhu1_i(),this.name1_i(),this.point1_i(),this.biaoqing1_i(),this._Group7_i(),this.messagebg1_i(),this.headClick1_i(),this.invite1_i(),this.sit1_i(),this.offline1_i(),this.singlePoint1_i()];
		return t;
	};
	_proto.headImage1_i = function () {
		var t = new eui.Image();
		this.headImage1 = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.source = "ddz_desk_json.ddz_head_defult";
		t.width = 90;
		t.y = 11.66;
		return t;
	};
	_proto.headDi1_i = function () {
		var t = new eui.Image();
		this.headDi1 = t;
		t.horizontalCenter = 0;
		t.source = "ddz_desk_json.desk_headDi";
		t.y = 7;
		return t;
	};
	_proto.luyinzhong1_i = function () {
		var t = new eui.Image();
		this.luyinzhong1 = t;
		t.horizontalCenter = 1;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "dalaba_png";
		t.verticalCenter = 4.5;
		return t;
	};
	_proto.dizhu1_i = function () {
		var t = new eui.Image();
		this.dizhu1 = t;
		t.source = "pdk_desk_imgs_json.pdk_head_banker";
		t.x = 76.46;
		t.y = 3.51;
		return t;
	};
	_proto.name1_i = function () {
		var t = new eui.Label();
		this.name1 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "GT棋牌";
		t.textAlign = "center";
		t.width = 80;
		t.y = 115.18;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.height = 20;
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "99999999";
		t.textAlign = "center";
		t.width = 90;
		t.y = 136.7;
		return t;
	};
	_proto.biaoqing1_i = function () {
		var t = new eui.Image();
		this.biaoqing1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.source = "15_png";
		t.visible = false;
		t.width = 90;
		t.y = 18.06;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 47.67;
		t.width = 110;
		t.x = -200.64;
		t.y = 41.89;
		t.elementsContent = [this.status1_i()];
		return t;
	};
	_proto.status1_i = function () {
		var t = new eui.Image();
		this.status1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "ddz_desk_json.player_ready";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messagebg1_i = function () {
		var t = new eui.Group();
		this.messagebg1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -185.32;
		t.y = -45.28;
		t.elementsContent = [this._Image8_i(),this.message1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "kxmh_leftmsgqipao";
		t.x = 210;
		t.y = 0;
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Label();
		this.message1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "我当年横扫澳门五条街";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = -25.76;
		t.y = 11.88;
		return t;
	};
	_proto.headClick1_i = function () {
		var t = new eui.Rect();
		this.headClick1 = t;
		t.fillAlpha = 0;
		t.height = 104;
		t.width = 104;
		t.x = -2;
		t.y = 7;
		return t;
	};
	_proto.invite1_i = function () {
		var t = new eui.Image();
		this.invite1 = t;
		t.horizontalCenter = 0.5;
		t.source = "ddz_desk_json.ddz_user_invite_btn";
		t.y = 9.31;
		return t;
	};
	_proto.sit1_i = function () {
		var t = new eui.Image();
		this.sit1 = t;
		t.horizontalCenter = 0.5;
		t.source = "ddz_desk_json.ddz_user_sit_btn";
		t.y = 9.31;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Image();
		this.offline1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ddz_desk_json.img_GamePlay_OffLine_DDZ";
		t.visible = false;
		t.y = 47.98;
		return t;
	};
	_proto.singlePoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint1 = t;
		t.anchorOffsetY = 2;
		t.font = "coin_action_fnt";
		t.right = 0;
		t.text = "+100000";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.user2_i = function () {
		var t = new eui.Group();
		this.user2 = t;
		t.height = 104;
		t.width = 104;
		t.x = -21.22;
		t.y = 150;
		t.elementsContent = [this._Group8_i(),this.headClick2_i(),this.invite2_i(),this.sit2_i(),this.luyinzhong2_i(),this.singlePoint2_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 5;
		t.y = -53.28;
		t.elementsContent = [this.headImage2_i(),this.headDi2_i(),this.dizhu2_i(),this.name2_i(),this.point2_i(),this.biaoqing2_i(),this.status2_i(),this.messagebg2_i(),this.offline2_i()];
		return t;
	};
	_proto.headImage2_i = function () {
		var t = new eui.Image();
		this.headImage2 = t;
		t.height = 90;
		t.source = "ddz_desk_json.ddz_head_defult";
		t.width = 90;
		t.x = 4;
		t.y = 58.27;
		return t;
	};
	_proto.headDi2_i = function () {
		var t = new eui.Image();
		this.headDi2 = t;
		t.source = "ddz_desk_json.desk_headDi";
		t.x = 0;
		t.y = 54.28;
		return t;
	};
	_proto.dizhu2_i = function () {
		var t = new eui.Image();
		this.dizhu2 = t;
		t.source = "pdk_desk_imgs_json.pdk_head_banker";
		t.x = 73.02;
		t.y = 48.79;
		return t;
	};
	_proto.name2_i = function () {
		var t = new eui.Label();
		this.name2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "GT棋牌";
		t.textAlign = "center";
		t.width = 80;
		t.x = 9;
		t.y = 158.94;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "99999999";
		t.textAlign = "center";
		t.width = 90;
		t.x = 5;
		t.y = 182.93;
		return t;
	};
	_proto.biaoqing2_i = function () {
		var t = new eui.Image();
		this.biaoqing2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.source = "15_png";
		t.width = 90;
		t.x = 9;
		t.y = 63.71;
		return t;
	};
	_proto.status2_i = function () {
		var t = new eui.Image();
		this.status2 = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "ddz_desk_json.player_ready";
		t.x = 174;
		t.y = 92.28;
		return t;
	};
	_proto.messagebg2_i = function () {
		var t = new eui.Group();
		this.messagebg2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 71.01;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.message2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "kxmh_leftmsgqipao";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Label();
		this.message2 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条街";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		t.y = 13.4;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Image();
		this.offline2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ddz_desk_json.img_GamePlay_OffLine_DDZ";
		t.x = 10;
		t.y = 98.95;
		return t;
	};
	_proto.headClick2_i = function () {
		var t = new eui.Rect();
		this.headClick2 = t;
		t.fillAlpha = 0;
		t.height = 104;
		t.visible = false;
		t.width = 104;
		t.x = 2.56;
		t.y = -1.54;
		return t;
	};
	_proto.invite2_i = function () {
		var t = new eui.Image();
		this.invite2 = t;
		t.horizontalCenter = 0;
		t.source = "ddz_desk_json.ddz_user_invite_btn";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.sit2_i = function () {
		var t = new eui.Image();
		this.sit2 = t;
		t.horizontalCenter = 0;
		t.source = "ddz_desk_json.ddz_user_sit_btn";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.luyinzhong2_i = function () {
		var t = new eui.Image();
		this.luyinzhong2 = t;
		t.horizontalCenter = 2.5;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "dalaba_png";
		t.verticalCenter = -2.5;
		t.visible = false;
		return t;
	};
	_proto.singlePoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint2 = t;
		t.font = "coin_action_fnt";
		t.left = 0;
		t.text = "+10";
		t.visible = false;
		t.y = -29;
		return t;
	};
	_proto.jipaiGroup_i = function () {
		var t = new eui.Group();
		this.jipaiGroup = t;
		t.height = 20;
		t.visible = false;
		t.width = 20;
		t.x = 804.45;
		t.y = 599.56;
		t.elementsContent = [this.jipaiBtn_i()];
		return t;
	};
	_proto.jipaiBtn_i = function () {
		var t = new eui.Button();
		this.jipaiBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin532;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 958.78;
		t.y = 314.16;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin533;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.x = -18;
		t.y = -92.66;
		t.elementsContent = [this._Image10_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image10_i = function () {
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
		t.height = 20;
		t.width = 20;
		t.x = 988.86;
		t.y = 413.2;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = pdkIndex$Skin534;
		return t;
	};
	_proto.maxBasescore_i = function () {
		var t = new eui.Label();
		this.maxBasescore = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 272;
		t.size = 24;
		t.text = "本房间倍数无上限";
		t.textColor = 0xffc74f;
		t.visible = false;
		t.y = 593.48;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = -3.99;
		t.y = 8.29;
		t.elementsContent = [this._Rect1_i(),this.roompwd_i(),this.playcount_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.6;
		t.height = 80;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 180;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "房号：999999";
		t.x = 10;
		t.y = 16.6;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "局数：999999";
		t.x = 10;
		t.y = 42.35;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 35.5;
		t.visible = false;
		t.skinName = pdkIndex$Skin535;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 365;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "ddz_desk_json.ddz_topNotice";
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
		t.elementsContent = [this._Image12_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "ddz_desk_json.ddz_topNotice";
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
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "inviteJIANtou_png";
		t.visible = false;
		return t;
	};
	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
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
	_proto.jipaiqi_i = function () {
		var t = new eui.Group();
		this.jipaiqi = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group11_i(),this.jipaiqiMenban_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 536.91;
		t.y = 488.31;
		t.elementsContent = [this._Image13_i(),this.jipai2_i(),this.jipai1_i(),this.jipai15_i(),this.jipai14_i(),this.jipai13_i(),this.jipai12_i(),this.jipai11_i(),this.jipai10_i(),this.jipai9_i(),this.jipai8_i(),this.jipai7_i(),this.jipai6_i(),this.jipai5_i(),this.jipai4_i(),this.jipai3_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "ddz_desk_json.img_Gameplay_RestCardBackground";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jipai2_i = function () {
		var t = new eui.Label();
		this.jipai2 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 50;
		t.y = 43;
		return t;
	};
	_proto.jipai1_i = function () {
		var t = new eui.Label();
		this.jipai1 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 81;
		t.y = 43;
		return t;
	};
	_proto.jipai15_i = function () {
		var t = new eui.Label();
		this.jipai15 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 112;
		t.y = 43;
		return t;
	};
	_proto.jipai14_i = function () {
		var t = new eui.Label();
		this.jipai14 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 143;
		t.y = 43;
		return t;
	};
	_proto.jipai13_i = function () {
		var t = new eui.Label();
		this.jipai13 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 174;
		t.y = 43;
		return t;
	};
	_proto.jipai12_i = function () {
		var t = new eui.Label();
		this.jipai12 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 202.99;
		t.y = 43;
		return t;
	};
	_proto.jipai11_i = function () {
		var t = new eui.Label();
		this.jipai11 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 234.66;
		t.y = 43;
		return t;
	};
	_proto.jipai10_i = function () {
		var t = new eui.Label();
		this.jipai10 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 264.99;
		t.y = 43;
		return t;
	};
	_proto.jipai9_i = function () {
		var t = new eui.Label();
		this.jipai9 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 298;
		t.y = 43;
		return t;
	};
	_proto.jipai8_i = function () {
		var t = new eui.Label();
		this.jipai8 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 326.32;
		t.y = 43;
		return t;
	};
	_proto.jipai7_i = function () {
		var t = new eui.Label();
		this.jipai7 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 356.01;
		t.y = 43;
		return t;
	};
	_proto.jipai6_i = function () {
		var t = new eui.Label();
		this.jipai6 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 386.9;
		t.y = 43;
		return t;
	};
	_proto.jipai5_i = function () {
		var t = new eui.Label();
		this.jipai5 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 417.4;
		t.y = 43;
		return t;
	};
	_proto.jipai4_i = function () {
		var t = new eui.Label();
		this.jipai4 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 448.4;
		t.y = 43;
		return t;
	};
	_proto.jipai3_i = function () {
		var t = new eui.Label();
		this.jipai3 = t;
		t.text = "4";
		t.textColor = 0x020202;
		t.x = 479.33;
		t.y = 43;
		return t;
	};
	_proto.jipaiqiMenban_i = function () {
		var t = new eui.Rect();
		this.jipaiqiMenban = t;
		t.fillAlpha = 0;
		t.height = 640;
		t.strokeAlpha = 0;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 153;
		t.height = 226;
		t.right = 0;
		t.visible = false;
		t.width = 153;
		t.y = 100;
		t.elementsContent = [this._Image14_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i(),this._Group17_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 226;
		t.scale9Grid = new egret.Rectangle(11,11,32,32);
		t.source = "cgImage_json.menulistBg";
		t.width = 153;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
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
		t.skinName = pdkIndex$Skin536;
		return t;
	};
	_proto._Group13_i = function () {
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
		t.skinName = pdkIndex$Skin537;
		return t;
	};
	_proto._Group14_i = function () {
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
		t.skinName = pdkIndex$Skin538;
		return t;
	};
	_proto._Group15_i = function () {
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
		t.skinName = pdkIndex$Skin539;
		return t;
	};
	_proto._Group16_i = function () {
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
		t.skinName = pdkIndex$Skin540;
		return t;
	};
	_proto._Group17_i = function () {
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
		t.skinName = pdkIndex$Skin541;
		return t;
	};
	_proto.luying_i = function () {
		var t = new eui.Group();
		this.luying = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image15_i(),this._Group18_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "jiesan_json.voiceBG";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group18_i = function () {
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
		t.y = 36;
		return t;
	};
	_proto.voice3_i = function () {
		var t = new eui.Image();
		this.voice3 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_3";
		t.y = 18;
		return t;
	};
	_proto.voice4_i = function () {
		var t = new eui.Image();
		this.voice4 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_4";
		t.y = 0;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._Image16_i(),this.juhua_i(),this._Label1_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.width = 1500;
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
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "正在连接服务器，请稍候……";
		t.y = 413.67;
		return t;
	};
	return pdkIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/paodekuai/pdkSingleResult.exml'] = window.pdkSingleResult = (function (_super) {
	__extends(pdkSingleResult, _super);
	function pdkSingleResult() {
		_super.call(this);
		this.skinParts = ["menban","winBg","winText","head0","nickname0","point0","spring0","jisuan0","item0","head1","nickname1","point1","jisuan1","spring1","item1","head2","nickname2","point2","jisuan2","spring2","item2"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.menban_i(),this.winBg_i(),this.winText_i(),this.item0_i(),this.item1_i(),this.item2_i()];
	}
	var _proto = pdkSingleResult.prototype;

	_proto.menban_i = function () {
		var t = new eui.Image();
		this.menban = t;
		t.alpha = 1;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "mengban_png";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.winBg_i = function () {
		var t = new eui.Image();
		this.winBg = t;
		t.horizontalCenter = -17.5;
		t.source = "ddzlose_png";
		t.y = 176;
		return t;
	};
	_proto.winText_i = function () {
		var t = new eui.Image();
		this.winText = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wintitle2_png";
		t.x = 275;
		t.y = 59.33;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.height = 88;
		t.horizontalCenter = 14.5;
		t.width = 577;
		t.y = 248;
		t.elementsContent = [this.head0_i(),this.nickname0_i(),this.point0_i(),this._Rect1_i(),this.spring0_i(),this.jisuan0_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.height = 88;
		t.source = "ddz_desk_json.ddz_head_defult";
		t.width = 88;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "紫碧罗科技";
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 118.96;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.BitmapLabel();
		this.point0 = t;
		t.font = "result-export1_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+1234564";
		t.verticalCenter = -6;
		t.x = 472.88;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0;
		t.height = 94;
		t.strokeColor = 0xffc823;
		t.strokeWeight = 3;
		t.verticalCenter = 0;
		t.width = 94;
		t.x = -3;
		return t;
	};
	_proto.spring0_i = function () {
		var t = new eui.Image();
		this.spring0 = t;
		t.source = "pdk_desk_imgs_json.pdk_sparing_icon ";
		t.x = 2.14;
		t.y = 19.52;
		return t;
	};
	_proto.jisuan0_i = function () {
		var t = new eui.Label();
		this.jisuan0 = t;
		t.text = "100+100";
		t.verticalCenter = 0;
		t.x = 314.69;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 88;
		t.horizontalCenter = 14.5;
		t.width = 577;
		t.y = 348;
		t.elementsContent = [this.head1_i(),this.nickname1_i(),this.point1_i(),this.jisuan1_i(),this._Rect2_i(),this.spring1_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.height = 88;
		t.source = "ddz_desk_json.ddz_head_defult";
		t.width = 88;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "紫碧罗科技";
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 118.96;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.BitmapLabel();
		this.point1 = t;
		t.font = "result-export1_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+1234564";
		t.verticalCenter = -6;
		t.x = 472.88;
		return t;
	};
	_proto.jisuan1_i = function () {
		var t = new eui.Label();
		this.jisuan1 = t;
		t.text = "100+100";
		t.verticalCenter = 0;
		t.x = 314.69;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0;
		t.height = 94;
		t.strokeColor = 0xFFC823;
		t.strokeWeight = 3;
		t.verticalCenter = 0;
		t.width = 94;
		t.x = -3;
		return t;
	};
	_proto.spring1_i = function () {
		var t = new eui.Image();
		this.spring1 = t;
		t.source = "pdk_desk_imgs_json.pdk_sparing_icon ";
		t.x = 2.14;
		t.y = 19.52;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 88;
		t.horizontalCenter = 14.5;
		t.width = 577;
		t.y = 448;
		t.elementsContent = [this.head2_i(),this.nickname2_i(),this.point2_i(),this.jisuan2_i(),this._Rect3_i(),this.spring2_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.height = 88;
		t.source = "ddz_desk_json.ddz_head_defult";
		t.width = 88;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "紫碧罗科技";
		t.verticalCenter = 0;
		t.x = 118.96;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.BitmapLabel();
		this.point2 = t;
		t.font = "result-export1_fnt";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "+1234564";
		t.verticalCenter = -6;
		t.x = 472.88;
		return t;
	};
	_proto.jisuan2_i = function () {
		var t = new eui.Label();
		this.jisuan2 = t;
		t.text = "100+100";
		t.verticalCenter = 0;
		t.x = 314.69;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0;
		t.height = 94;
		t.strokeColor = 0xFFC823;
		t.strokeWeight = 3;
		t.verticalCenter = 0;
		t.width = 94;
		t.x = -3;
		return t;
	};
	_proto.spring2_i = function () {
		var t = new eui.Image();
		this.spring2 = t;
		t.source = "pdk_desk_imgs_json.pdk_sparing_icon ";
		t.x = 2.14;
		t.y = 19.52;
		return t;
	};
	return pdkSingleResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/paodekuai/pdkTotalResult.exml'] = window.pdkTotalResult = (function (_super) {
	__extends(pdkTotalResult, _super);
	var pdkTotalResult$Skin542 = 	(function (_super) {
		__extends(pdkTotalResult$Skin542, _super);
		function pdkTotalResult$Skin542() {
			_super.call(this);
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
		var _proto = pdkTotalResult$Skin542.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hzmj_totalResult_json.hzmj_tShare";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkTotalResult$Skin542;
	})(eui.Skin);

	var pdkTotalResult$Skin543 = 	(function (_super) {
		__extends(pdkTotalResult$Skin543, _super);
		function pdkTotalResult$Skin543() {
			_super.call(this);
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
		var _proto = pdkTotalResult$Skin543.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hzmj_totalResult_json.hzmj_tBack";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return pdkTotalResult$Skin543;
	})(eui.Skin);

	function pdkTotalResult() {
		_super.call(this);
		this.skinParts = ["roomPwdRule","timer","noticeGame","playcount","sbareBtn","backBtn","headImg0","roomown0","headbox0","nickname0","ID0","bigWin0","totalScore0","item0","totalScore1","headImg1","roomown1","headbox1","nickname1","ID1","bigWin1","item1","totalScore2","headImg2","roomown2","headbox2","nickname2","ID2","bigWin2","item2"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this.roomPwdRule_i(),this.timer_i(),this.noticeGame_i(),this.playcount_i(),this._Image2_i(),this._Group3_i(),this._Group7_i(),this._Image10_i()];
	}
	var _proto = pdkTotalResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_jiesuan_bg_png";
		t.width = 1500;
		t.y = 0;
		return t;
	};
	_proto.roomPwdRule_i = function () {
		var t = new eui.Label();
		this.roomPwdRule = t;
		t.size = 25;
		t.text = "房号：888888";
		t.textColor = 0xFFFFFF;
		t.x = 709;
		t.y = 16;
		return t;
	};
	_proto.timer_i = function () {
		var t = new eui.Label();
		this.timer = t;
		t.size = 25;
		t.text = "时间：2018-10-10 10:10:10";
		t.textColor = 0xFFFFFF;
		t.x = 709;
		t.y = 51;
		return t;
	};
	_proto.noticeGame_i = function () {
		var t = new eui.Label();
		this.noticeGame = t;
		t.size = 23;
		t.text = "本结果仅供娱乐，禁止赌博！";
		t.textColor = 0xFFFFFF;
		t.x = 758.8;
		t.y = 552.65;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.size = 25;
		t.text = "局数：80";
		t.textColor = 0xFFFFFF;
		t.x = 905;
		t.y = 16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_totalResult_json.hzmj_trTit";
		t.y = 6.66;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 543.01;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.sbareBtn_i()];
		return t;
	};
	_proto.sbareBtn_i = function () {
		var t = new eui.Button();
		this.sbareBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = pdkTotalResult$Skin542;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 203.48;
		t.y = 0;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = pdkTotalResult$Skin543;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -0.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this.item0_i(),this.item1_i(),this.item2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 240;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(116,57,696,344);
		t.source = "sfp_result_di_png";
		t.verticalCenter = 0;
		t.width = 700;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.verticalCenter = 0.5;
		t.x = 17.37;
		t.elementsContent = [this._Image4_i(),this._Group4_i(),this.bigWin0_i(),this.totalScore0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "pdk_desk_imgs_json.pdk_result_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 15;
		t.elementsContent = [this.headbox0_i(),this.nickname0_i(),this.ID0_i()];
		return t;
	};
	_proto.headbox0_i = function () {
		var t = new eui.Group();
		this.headbox0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg0_i(),this._Image5_i(),this.roomown0_i()];
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomown0_i = function () {
		var t = new eui.Image();
		this.roomown0 = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hzmj_totalResult_json.hzmj_tRoomowner";
		t.top = 0;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 86;
		t.x = 80;
		t.y = 10.66;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.height = 20;
		t.size = 20;
		t.text = "ID:999999";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.x = 80;
		t.y = 37.33;
		return t;
	};
	_proto.bigWin0_i = function () {
		var t = new eui.Image();
		this.bigWin0 = t;
		t.left = 0;
		t.source = "hzmj_totalResult_json.hzmj_bigWin";
		t.top = 0;
		return t;
	};
	_proto.totalScore0_i = function () {
		var t = new eui.BitmapLabel();
		this.totalScore0 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 52.5;
		t.x = 95.84;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.verticalCenter = 0.5;
		t.x = 242.37;
		t.elementsContent = [this._Image6_i(),this.totalScore1_i(),this._Group5_i(),this.bigWin1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "pdk_desk_imgs_json.pdk_result_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.totalScore1_i = function () {
		var t = new eui.BitmapLabel();
		this.totalScore1 = t;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 52.5;
		t.x = 95.84;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 15;
		t.elementsContent = [this.headbox1_i(),this.nickname1_i(),this.ID1_i()];
		return t;
	};
	_proto.headbox1_i = function () {
		var t = new eui.Group();
		this.headbox1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg1_i(),this._Image7_i(),this.roomown1_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomown1_i = function () {
		var t = new eui.Image();
		this.roomown1 = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hzmj_totalResult_json.hzmj_tRoomowner";
		t.top = 0;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 86;
		t.x = 80;
		t.y = 10.66;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.height = 20;
		t.size = 20;
		t.text = "ID:999999";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.x = 80;
		t.y = 37.33;
		return t;
	};
	_proto.bigWin1_i = function () {
		var t = new eui.Image();
		this.bigWin1 = t;
		t.left = 0;
		t.source = "hzmj_totalResult_json.hzmj_bigWin";
		t.top = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.verticalCenter = 0.5;
		t.x = 467.37;
		t.elementsContent = [this._Image8_i(),this.totalScore2_i(),this._Group6_i(),this.bigWin2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "pdk_desk_imgs_json.pdk_result_item_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.totalScore2_i = function () {
		var t = new eui.BitmapLabel();
		this.totalScore2 = t;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 52.5;
		t.x = 95.84;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 15;
		t.elementsContent = [this.headbox2_i(),this.nickname2_i(),this.ID2_i()];
		return t;
	};
	_proto.headbox2_i = function () {
		var t = new eui.Group();
		this.headbox2 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg2_i(),this._Image9_i(),this.roomown2_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "hzmj_head_defult";
		t.verticalCenter = 0;
		t.width = 69;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hzmj_player_json.hzmj_kk";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomown2_i = function () {
		var t = new eui.Image();
		this.roomown2 = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hzmj_totalResult_json.hzmj_tRoomowner";
		t.top = 0;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "visitor_64";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 86;
		t.x = 80;
		t.y = 10.66;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.height = 20;
		t.size = 20;
		t.text = "ID:999999";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.x = 80;
		t.y = 37.33;
		return t;
	};
	_proto.bigWin2_i = function () {
		var t = new eui.Image();
		this.bigWin2 = t;
		t.left = 0;
		t.source = "hzmj_totalResult_json.hzmj_bigWin";
		t.top = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "pdk_desk_imgs_json.pdk_icon_bg";
		t.x = 20.34;
		t.y = 12.74;
		return t;
	};
	return pdkTotalResult;
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
})(eui.Skin);