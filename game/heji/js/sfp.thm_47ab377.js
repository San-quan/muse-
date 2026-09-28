
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/shisanShui/disabled.exml'] = window.disabled = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/sifupai/sfp_create.exml'] = window.sfp_create = (function (_super) {
	__extends(sfp_create, _super);
	var sfp_create$Skin598 = 	(function (_super) {
		__extends(sfp_create$Skin598, _super);
		function sfp_create$Skin598() {
			_super.call(this);
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
		var _proto = sfp_create$Skin598.prototype;

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
		return sfp_create$Skin598;
	})(eui.Skin);

	var sfp_create$Skin599 = 	(function (_super) {
		__extends(sfp_create$Skin599, _super);
		function sfp_create$Skin599() {
			_super.call(this);
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
		var _proto = sfp_create$Skin599.prototype;

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
		return sfp_create$Skin599;
	})(eui.Skin);

	var sfp_create$Skin600 = 	(function (_super) {
		__extends(sfp_create$Skin600, _super);
		function sfp_create$Skin600() {
			_super.call(this);
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
		var _proto = sfp_create$Skin600.prototype;

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
		return sfp_create$Skin600;
	})(eui.Skin);

	var sfp_create$Skin601 = 	(function (_super) {
		__extends(sfp_create$Skin601, _super);
		function sfp_create$Skin601() {
			_super.call(this);
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
		var _proto = sfp_create$Skin601.prototype;

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
		return sfp_create$Skin601;
	})(eui.Skin);

	var sfp_create$Skin602 = 	(function (_super) {
		__extends(sfp_create$Skin602, _super);
		function sfp_create$Skin602() {
			_super.call(this);
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
		var _proto = sfp_create$Skin602.prototype;

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
		return sfp_create$Skin602;
	})(eui.Skin);

	var sfp_create$Skin603 = 	(function (_super) {
		__extends(sfp_create$Skin603, _super);
		function sfp_create$Skin603() {
			_super.call(this);
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
		var _proto = sfp_create$Skin603.prototype;

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
		return sfp_create$Skin603;
	})(eui.Skin);

	var sfp_create$Skin604 = 	(function (_super) {
		__extends(sfp_create$Skin604, _super);
		function sfp_create$Skin604() {
			_super.call(this);
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
		var _proto = sfp_create$Skin604.prototype;

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
		return sfp_create$Skin604;
	})(eui.Skin);

	var sfp_create$Skin605 = 	(function (_super) {
		__extends(sfp_create$Skin605, _super);
		function sfp_create$Skin605() {
			_super.call(this);
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
		var _proto = sfp_create$Skin605.prototype;

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
		return sfp_create$Skin605;
	})(eui.Skin);

	var sfp_create$Skin606 = 	(function (_super) {
		__extends(sfp_create$Skin606, _super);
		function sfp_create$Skin606() {
			_super.call(this);
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
		var _proto = sfp_create$Skin606.prototype;

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
		return sfp_create$Skin606;
	})(eui.Skin);

	var sfp_create$Skin607 = 	(function (_super) {
		__extends(sfp_create$Skin607, _super);
		function sfp_create$Skin607() {
			_super.call(this);
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
		var _proto = sfp_create$Skin607.prototype;

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
		return sfp_create$Skin607;
	})(eui.Skin);

	var sfp_create$Skin608 = 	(function (_super) {
		__extends(sfp_create$Skin608, _super);
		function sfp_create$Skin608() {
			_super.call(this);
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
		var _proto = sfp_create$Skin608.prototype;

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
		return sfp_create$Skin608;
	})(eui.Skin);

	var sfp_create$Skin609 = 	(function (_super) {
		__extends(sfp_create$Skin609, _super);
		function sfp_create$Skin609() {
			_super.call(this);
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
		var _proto = sfp_create$Skin609.prototype;

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
		return sfp_create$Skin609;
	})(eui.Skin);

	var sfp_create$Skin610 = 	(function (_super) {
		__extends(sfp_create$Skin610, _super);
		function sfp_create$Skin610() {
			_super.call(this);
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
		var _proto = sfp_create$Skin610.prototype;

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
		return sfp_create$Skin610;
	})(eui.Skin);

	function sfp_create() {
		_super.call(this);
		this.skinParts = ["m_menban","hallbg","m_showtip","m_squarecards0","m_squarecards1","m_laoqi","m_aloneReward0","m_aloneReward1","m_jiafan","m_maque0","m_maque1","m_jiafan0","m_shuffleCardsWay0","m_shuffleCardsWay1","m_maxScore","m_gameground2","m_gameground3","m_gameground1","m_gameground","m_create","m_close","m_mianban"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this.m_menban_i(),this.m_mianban_i()];
	}
	var _proto = sfp_create.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.percentHeight = 100;
		t.source = "common_image_json.public_meng2";
		t.percentWidth = 100;
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
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.hallbg_i(),this._Group1_i(),this.m_laoqi_i(),this.m_jiafan_i(),this.m_jiafan0_i(),this.m_maxScore_i(),this.m_gameground_i(),this.m_create_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,80,80);
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
		t.source = "hallImage_json.sfpTitle";
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
	_proto.m_laoqi_i = function () {
		var t = new eui.Group();
		this.m_laoqi = t;
		t.x = 300;
		t.y = 230.32;
		t.elementsContent = [this._Label1_i(),this.m_squarecards0_i(),this.m_squarecards1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "正点：";
		t.verticalCenter = 0;
		t.x = -100;
		return t;
	};
	_proto.m_squarecards0_i = function () {
		var t = new eui.RadioButton();
		this.m_squarecards0 = t;
		t.enabled = true;
		t.groupName = "squarecards";
		t.height = 47;
		t.label = "开启";
		t.selected = true;
		t.value = "1";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 0;
		t.skinName = sfp_create$Skin598;
		return t;
	};
	_proto.m_squarecards1_i = function () {
		var t = new eui.RadioButton();
		this.m_squarecards1 = t;
		t.groupName = "squarecards";
		t.height = 47;
		t.label = "不开启";
		t.selected = false;
		t.value = "0";
		t.width = 47;
		t.x = 148;
		t.y = 0;
		t.skinName = sfp_create$Skin599;
		return t;
	};
	_proto.m_jiafan_i = function () {
		var t = new eui.Group();
		this.m_jiafan = t;
		t.x = 300;
		t.y = 300.32;
		t.elementsContent = [this._Label2_i(),this.m_aloneReward0_i(),this.m_aloneReward1_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "独奖：";
		t.verticalCenter = 0;
		t.x = -100;
		return t;
	};
	_proto.m_aloneReward0_i = function () {
		var t = new eui.RadioButton();
		this.m_aloneReward0 = t;
		t.enabled = true;
		t.groupName = "aloneReward";
		t.height = 47;
		t.label = "开启";
		t.selected = false;
		t.value = "1";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 0;
		t.skinName = sfp_create$Skin600;
		return t;
	};
	_proto.m_aloneReward1_i = function () {
		var t = new eui.RadioButton();
		this.m_aloneReward1 = t;
		t.groupName = "aloneReward";
		t.height = 47;
		t.label = "不开启";
		t.selected = true;
		t.value = "0";
		t.width = 47;
		t.x = 148;
		t.y = 0;
		t.skinName = sfp_create$Skin601;
		return t;
	};
	_proto.m_jiafan0_i = function () {
		var t = new eui.Group();
		this.m_jiafan0 = t;
		t.x = 300;
		t.y = 441.93;
		t.elementsContent = [this._Label3_i(),this.m_maque0_i(),this.m_maque1_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "麻雀：";
		t.verticalCenter = 0;
		t.x = -100;
		return t;
	};
	_proto.m_maque0_i = function () {
		var t = new eui.RadioButton();
		this.m_maque0 = t;
		t.enabled = true;
		t.groupName = "maque";
		t.height = 47;
		t.label = "开启";
		t.selected = true;
		t.value = "1";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 0;
		t.skinName = sfp_create$Skin602;
		return t;
	};
	_proto.m_maque1_i = function () {
		var t = new eui.RadioButton();
		this.m_maque1 = t;
		t.groupName = "maque";
		t.height = 47;
		t.label = "不开启";
		t.selected = false;
		t.value = "0";
		t.width = 47;
		t.x = 148;
		t.y = 0;
		t.skinName = sfp_create$Skin603;
		return t;
	};
	_proto.m_maxScore_i = function () {
		var t = new eui.Group();
		this.m_maxScore = t;
		t.x = 300;
		t.y = 370.32;
		t.elementsContent = [this._Label4_i(),this.m_shuffleCardsWay0_i(),this.m_shuffleCardsWay1_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "洗牌：";
		t.verticalCenter = 0;
		t.x = -100;
		return t;
	};
	_proto.m_shuffleCardsWay0_i = function () {
		var t = new eui.RadioButton();
		this.m_shuffleCardsWay0 = t;
		t.enabled = true;
		t.groupName = "shuffleCardsWay";
		t.height = 47;
		t.label = "洗牌";
		t.selected = true;
		t.value = "1";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 0;
		t.skinName = sfp_create$Skin604;
		return t;
	};
	_proto.m_shuffleCardsWay1_i = function () {
		var t = new eui.RadioButton();
		this.m_shuffleCardsWay1 = t;
		t.groupName = "shuffleCardsWay";
		t.height = 47;
		t.label = "不洗牌";
		t.value = "2";
		t.width = 47;
		t.x = 148;
		t.y = 0;
		t.skinName = sfp_create$Skin605;
		return t;
	};
	_proto.m_gameground_i = function () {
		var t = new eui.Group();
		this.m_gameground = t;
		t.x = 300;
		t.y = 160.32;
		t.elementsContent = [this._Label5_i(),this.m_gameground2_i(),this.m_gameground3_i(),this.m_gameground1_i()];
		return t;
	};
	_proto._Label5_i = function () {
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
		t.label = "8局";
		t.value = "8";
		t.width = 47;
		t.x = 148;
		t.y = 0;
		t.skinName = sfp_create$Skin606;
		return t;
	};
	_proto.m_gameground3_i = function () {
		var t = new eui.RadioButton();
		this.m_gameground3 = t;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "12局";
		t.value = "12";
		t.width = 47;
		t.x = 296;
		t.y = 0;
		t.skinName = sfp_create$Skin607;
		return t;
	};
	_proto.m_gameground1_i = function () {
		var t = new eui.RadioButton();
		this.m_gameground1 = t;
		t.enabled = true;
		t.groupName = "m_jushu";
		t.height = 47;
		t.label = "4局";
		t.selected = true;
		t.value = "4";
		t.width = 47;
		t.x = 0;
		t.y = 0;
		t.skinName = sfp_create$Skin608;
		return t;
	};
	_proto.m_create_i = function () {
		var t = new eui.Button();
		this.m_create = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 625;
		t.skinName = sfp_create$Skin609;
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
		t.skinName = sfp_create$Skin610;
		return t;
	};
	return sfp_create;
})(eui.Skin);generateEUI.paths['resource/eui_skins/sifupai/sfp_Index.exml'] = window.sfp_Index = (function (_super) {
	__extends(sfp_Index, _super);
	var sfp_Index$Skin611 = 	(function (_super) {
		__extends(sfp_Index$Skin611, _super);
		function sfp_Index$Skin611() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin611.prototype;

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
		return sfp_Index$Skin611;
	})(eui.Skin);

	var sfp_Index$Skin612 = 	(function (_super) {
		__extends(sfp_Index$Skin612, _super);
		function sfp_Index$Skin612() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin612.prototype;

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
		return sfp_Index$Skin612;
	})(eui.Skin);

	var sfp_Index$Skin613 = 	(function (_super) {
		__extends(sfp_Index$Skin613, _super);
		function sfp_Index$Skin613() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin613.prototype;

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
		return sfp_Index$Skin613;
	})(eui.Skin);

	var sfp_Index$Skin614 = 	(function (_super) {
		__extends(sfp_Index$Skin614, _super);
		function sfp_Index$Skin614() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin614.prototype;

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
		return sfp_Index$Skin614;
	})(eui.Skin);

	var sfp_Index$Skin615 = 	(function (_super) {
		__extends(sfp_Index$Skin615, _super);
		function sfp_Index$Skin615() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin615.prototype;

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
		return sfp_Index$Skin615;
	})(eui.Skin);

	var sfp_Index$Skin616 = 	(function (_super) {
		__extends(sfp_Index$Skin616, _super);
		function sfp_Index$Skin616() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin616.prototype;

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
		return sfp_Index$Skin616;
	})(eui.Skin);

	var sfp_Index$Skin617 = 	(function (_super) {
		__extends(sfp_Index$Skin617, _super);
		function sfp_Index$Skin617() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sfp_Index$Skin617.prototype;

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
		return sfp_Index$Skin617;
	})(eui.Skin);

	var sfp_Index$Skin618 = 	(function (_super) {
		__extends(sfp_Index$Skin618, _super);
		function sfp_Index$Skin618() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin618.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sfp_table_json.sfp_inGameSit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_Index$Skin618;
	})(eui.Skin);

	var sfp_Index$Skin619 = 	(function (_super) {
		__extends(sfp_Index$Skin619, _super);
		function sfp_Index$Skin619() {
			_super.call(this);
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
						new eui.SetProperty("_Image1","source","sfp_table_json.sfp_chupai_btn_an")
					])
			];
		}
		var _proto = sfp_Index$Skin619.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sfp_table_json.sfp_chupai_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_Index$Skin619;
	})(eui.Skin);

	var sfp_Index$Skin620 = 	(function (_super) {
		__extends(sfp_Index$Skin620, _super);
		function sfp_Index$Skin620() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin620.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sfp_table_json.sfp_tishi_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_Index$Skin620;
	})(eui.Skin);

	var sfp_Index$Skin621 = 	(function (_super) {
		__extends(sfp_Index$Skin621, _super);
		function sfp_Index$Skin621() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin621.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sfp_table_json.sfp_ready_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_Index$Skin621;
	})(eui.Skin);

	var sfp_Index$Skin622 = 	(function (_super) {
		__extends(sfp_Index$Skin622, _super);
		function sfp_Index$Skin622() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin622.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sfp_ingameInvite";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_Index$Skin622;
	})(eui.Skin);

	var sfp_Index$Skin623 = 	(function (_super) {
		__extends(sfp_Index$Skin623, _super);
		function sfp_Index$Skin623() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin623.prototype;

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
		return sfp_Index$Skin623;
	})(eui.Skin);

	var sfp_Index$Skin624 = 	(function (_super) {
		__extends(sfp_Index$Skin624, _super);
		function sfp_Index$Skin624() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin624.prototype;

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
		return sfp_Index$Skin624;
	})(eui.Skin);

	var sfp_Index$Skin625 = 	(function (_super) {
		__extends(sfp_Index$Skin625, _super);
		function sfp_Index$Skin625() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin625.prototype;

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
		return sfp_Index$Skin625;
	})(eui.Skin);

	var sfp_Index$Skin626 = 	(function (_super) {
		__extends(sfp_Index$Skin626, _super);
		function sfp_Index$Skin626() {
			_super.call(this);
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
		var _proto = sfp_Index$Skin626.prototype;

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
		return sfp_Index$Skin626;
	})(eui.Skin);

	var sfp_Index$Skin627 = 	(function (_super) {
		__extends(sfp_Index$Skin627, _super);
		function sfp_Index$Skin627() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sfp_Index$Skin627.prototype;

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
		return sfp_Index$Skin627;
	})(eui.Skin);

	var sfp_Index$Skin628 = 	(function (_super) {
		__extends(sfp_Index$Skin628, _super);
		function sfp_Index$Skin628() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sfp_Index$Skin628.prototype;

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
		return sfp_Index$Skin628;
	})(eui.Skin);

	function sfp_Index() {
		_super.call(this);
		this.skinParts = ["menban","roomPwd","peoplecount","jushu","dujiang","xipai","zhengdian","maque","roominfos","headDi0","headImg0","nickname0","point0","roomownerlogo0","hasready0","offline0","singlePoint0","msg0","msgGroup0","order0","tableScore0","gongxianScore0","scoreGroup0","maque0","users0","pressBtn0","userInfo0","headDi1","headImg1","nickname1","point1","roomownerlogo1","hasready1","offline1","singlePoint1","msg1","msgGroup1","order1","tableScore1","gongxianScore1","scoreGroup1","maque1","users1","pressBtn1","userInfo1","headDi2","headImg2","nickname2","point2","roomownerlogo2","hasready2","offline2","singlePoint2","msg2","msgGroup2","order2","tableScore2","gongxianScore2","scoreGroup2","maque2","users2","pressBtn2","userInfo2","headDi3","headImg3","nickname3","point3","roomownerlogo3","hasready3","offline3","singlePoint3","msg3","msgGroup3","order3","tableScore3","gongxianScore3","scoreGroup3","maque3","users3","pressBtn3","userInfo3","wanfa","diaband","situp","setting","locBtn","menulist","menu","testpai0","testpai1","testpai2","testpai3","testpai4","testpai5","testpai6","testpai7","testpai8","testpai9","testpai10","testpai11","testpai28","testpai12","testpai13","testpai14","testpai15","testpai16","testpai17","testpai18","testpai19","testpai20","testpai21","testpai22","testpai23","testpai24","testpai25","testpai27","testpai26","outpai00","outpai0","outpai1","outpai2","outpai3","outpai4","outpai5","outpai6","outpai7","outpai9","outpai10","outpai11","outpai12","outpai13","outpai14","outpai15","outpai8","outpai16","outpai17","outpai18","outpai19","outpai20","outpai21","outpai22","outpai23","outpai24","outpai25","outpai26","outpai27","outpai28","outpai29","outpai30","outpai31","outpai32","outpai33","outpai34","outpai35","outpai36","outpai37","outpai38","outpai39","outpai40","outpai41","outpai42","outpai43","outpai44","outpai45","outpai46","outpai47","outpai48","outpai49","outpai50","outpai51","outpai52","outpai53","outpai54","outpai55","outpai56","outpai57","outpai58","outpai59","outpai60","outpai61","outpai62","outpai63","sitBtn","sitGroup","chupai","chupaiGroup","tishi","tishiGroup","readyBtn","readyGroup","voice0","voice1","voice2","voice3","luying","invite","inviteGroup","pangguan","inviteNotice","daojinum0","daoji0","daojinum1","daoji1","daojinum2","daoji2","daojinum3","daoji3","deskscore","deskscoreGroup","nextStepBtn","huifangStartBtn","huifangStartGroup","parseBtn","parseGroup","resetBtn","resetGroup","huifangGroup","backHallBtn","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","xiaoxi","xxGroup","whoJoin","joinNotice","juhua","waitConnect"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this.menban_i(),this.roominfos_i(),this.userInfo0_i(),this.userInfo1_i(),this.userInfo2_i(),this.userInfo3_i(),this.menulist_i(),this._Group12_i(),this._Group13_i(),this.testpai11_i(),this.testpai28_i(),this._Group14_i(),this.testpai22_i(),this.testpai23_i(),this.testpai24_i(),this.testpai25_i(),this.testpai27_i(),this.testpai26_i(),this._Group15_i(),this._Group16_i(),this._Group17_i(),this._Group18_i(),this.sitGroup_i(),this.chupaiGroup_i(),this.tishiGroup_i(),this.readyGroup_i(),this.luying_i(),this.inviteGroup_i(),this.pangguan_i(),this.inviteNotice_i(),this.daoji0_i(),this.daoji1_i(),this.daoji2_i(),this.daoji3_i(),this.deskscoreGroup_i(),this.huifangGroup_i(),this.backHallBtn_i(),this.yyGroup_i(),this.xxGroup_i(),this.joinNotice_i(),this.waitConnect_i()];
	}
	var _proto = sfp_Index.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_BG_png";
		t.verticalCenter = 0;
		t.width = 1500;
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
	_proto.roominfos_i = function () {
		var t = new eui.Group();
		this.roominfos = t;
		t.height = 200;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 200;
		t.x = 11.88;
		t.y = 7.37;
		t.elementsContent = [this._Image2_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_rule";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.roomPwd_i(),this.peoplecount_i(),this.jushu_i(),this.dujiang_i(),this.xipai_i(),this.zhengdian_i(),this.maque_i()];
		return t;
	};
	_proto.roomPwd_i = function () {
		var t = new eui.Label();
		this.roomPwd = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "房间号：666666";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.peoplecount_i = function () {
		var t = new eui.Label();
		this.peoplecount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "人数：4人";
		t.x = 0;
		t.y = 26.56;
		return t;
	};
	_proto.jushu_i = function () {
		var t = new eui.Label();
		this.jushu = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "第20/20局";
		t.x = 2.93;
		t.y = 54.79;
		return t;
	};
	_proto.dujiang_i = function () {
		var t = new eui.Label();
		this.dujiang = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "有毒将开";
		t.x = 0;
		t.y = 79.68;
		return t;
	};
	_proto.xipai_i = function () {
		var t = new eui.Label();
		this.xipai = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "不洗牌";
		t.x = 0;
		t.y = 108.21;
		return t;
	};
	_proto.zhengdian_i = function () {
		var t = new eui.Label();
		this.zhengdian = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "有整点是";
		t.x = 0;
		t.y = 134.87;
		return t;
	};
	_proto.maque_i = function () {
		var t = new eui.Label();
		this.maque = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "有整点是";
		t.x = 0;
		t.y = 161.16;
		return t;
	};
	_proto.userInfo0_i = function () {
		var t = new eui.Group();
		this.userInfo0 = t;
		t.height = 84;
		t.width = 173;
		t.x = 10;
		t.y = 369.79;
		t.elementsContent = [this.users0_i(),this.pressBtn0_i()];
		return t;
	};
	_proto.users0_i = function () {
		var t = new eui.Group();
		this.users0 = t;
		t.height = 100;
		t.width = 173;
		t.x = 10.66;
		t.y = -25.01;
		t.elementsContent = [this._Group2_i(),this.scoreGroup0_i(),this.maque0_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.x = 1.43;
		t.y = 0;
		t.elementsContent = [this.headDi0_i(),this.headImg0_i(),this.nickname0_i(),this.point0_i(),this.roomownerlogo0_i(),this.hasready0_i(),this.offline0_i(),this.singlePoint0_i(),this.msgGroup0_i(),this.order0_i()];
		return t;
	};
	_proto.headDi0_i = function () {
		var t = new eui.Image();
		this.headDi0 = t;
		t.source = "sfp_table_json.sfp_headBoxDi";
		t.x = 0;
		t.y = 40.6;
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
		t.y = 48.6;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.width = 80;
		t.x = 86;
		t.y = 55.52;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.x = 90;
		t.y = 91.64;
		return t;
	};
	_proto.roomownerlogo0_i = function () {
		var t = new eui.Image();
		this.roomownerlogo0 = t;
		t.source = "sfp_roomOwnerLogo";
		t.x = 5.74;
		t.y = 45.6;
		return t;
	};
	_proto.hasready0_i = function () {
		var t = new eui.Image();
		this.hasready0 = t;
		t.source = "sfp_hasReady";
		t.x = 9;
		t.y = 80.18;
		return t;
	};
	_proto.offline0_i = function () {
		var t = new eui.Image();
		this.offline0 = t;
		t.source = "sfp_offline";
		t.x = 7.36;
		t.y = 49.27;
		return t;
	};
	_proto.singlePoint0_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint0 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 173.92;
		t.y = 45.15;
		return t;
	};
	_proto.msgGroup0_i = function () {
		var t = new eui.Group();
		this.msgGroup0 = t;
		t.x = 29.5;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.msg0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kxmh_leftmsgqipao";
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
	_proto.order0_i = function () {
		var t = new eui.Image();
		this.order0 = t;
		t.source = "sfp_table_json.sfp_first_run";
		t.x = -9.84;
		t.y = 31.17;
		return t;
	};
	_proto.scoreGroup0_i = function () {
		var t = new eui.Group();
		this.scoreGroup0 = t;
		t.x = 0;
		t.y = 112;
		t.elementsContent = [this._Image4_i(),this.tableScore0_i(),this.gongxianScore0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_fen_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tableScore0_i = function () {
		var t = new eui.Label();
		this.tableScore0 = t;
		t.size = 20;
		t.text = "9999";
		t.verticalCenter = -0.5;
		t.x = 27.99;
		return t;
	};
	_proto.gongxianScore0_i = function () {
		var t = new eui.Label();
		this.gongxianScore0 = t;
		t.size = 20;
		t.text = "9999";
		t.verticalCenter = -0.5;
		t.x = 99.33;
		return t;
	};
	_proto.maque0_i = function () {
		var t = new eui.Image();
		this.maque0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sfp_table_json.sfp_maque_icon";
		t.x = 0.51;
		t.y = 83.34;
		return t;
	};
	_proto.pressBtn0_i = function () {
		var t = new eui.Image();
		this.pressBtn0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "sfp_table_json.sfp_user_invite_btn";
		t.verticalCenter = 0;
		return t;
	};
	_proto.userInfo1_i = function () {
		var t = new eui.Group();
		this.userInfo1 = t;
		t.height = 84;
		t.width = 173;
		t.x = 893.44;
		t.y = 218;
		t.elementsContent = [this.users1_i(),this.pressBtn1_i()];
		return t;
	};
	_proto.users1_i = function () {
		var t = new eui.Group();
		this.users1 = t;
		t.height = 84;
		t.width = 173;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group3_i(),this.scoreGroup1_i(),this.maque1_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.x = -190.65;
		t.y = -32;
		t.elementsContent = [this.headDi1_i(),this.headImg1_i(),this.nickname1_i(),this.point1_i(),this.roomownerlogo1_i(),this.hasready1_i(),this.offline1_i(),this.singlePoint1_i(),this.msgGroup1_i(),this.order1_i()];
		return t;
	};
	_proto.headDi1_i = function () {
		var t = new eui.Image();
		this.headDi1 = t;
		t.source = "sfp_table_json.sfp_headBoxDi";
		t.x = 242.49;
		t.y = 40.6;
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 250.49;
		t.y = 48.6;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.width = 80;
		t.x = 328.49;
		t.y = 55.52;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.Label();
		this.point1 = t;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.x = 332.49;
		t.y = 91.64;
		return t;
	};
	_proto.roomownerlogo1_i = function () {
		var t = new eui.Image();
		this.roomownerlogo1 = t;
		t.source = "sfp_roomOwnerLogo";
		t.x = 248.23;
		t.y = 45.6;
		return t;
	};
	_proto.hasready1_i = function () {
		var t = new eui.Image();
		this.hasready1 = t;
		t.source = "sfp_hasReady";
		t.x = 251.49;
		t.y = 80.18;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Image();
		this.offline1 = t;
		t.source = "sfp_offline";
		t.x = 249.85;
		t.y = 49.27;
		return t;
	};
	_proto.singlePoint1_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint1 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 143.08;
		t.y = 50.48;
		return t;
	};
	_proto.msgGroup1_i = function () {
		var t = new eui.Group();
		this.msgGroup1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.msg1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 300;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "kxmh_leftmsgqipao";
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
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 8.99;
		return t;
	};
	_proto.order1_i = function () {
		var t = new eui.Image();
		this.order1 = t;
		t.source = "sfp_table_json.sfp_first_run";
		t.x = 234.23;
		t.y = 37.89;
		return t;
	};
	_proto.scoreGroup1_i = function () {
		var t = new eui.Group();
		this.scoreGroup1 = t;
		t.x = 15.85;
		t.y = 78.26;
		t.elementsContent = [this._Image6_i(),this.tableScore1_i(),this.gongxianScore1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_fen_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tableScore1_i = function () {
		var t = new eui.Label();
		this.tableScore1 = t;
		t.size = 20;
		t.text = "9999";
		t.verticalCenter = -0.5;
		t.x = 27.99;
		return t;
	};
	_proto.gongxianScore1_i = function () {
		var t = new eui.Label();
		this.gongxianScore1 = t;
		t.size = 20;
		t.text = "9999";
		t.verticalCenter = -0.5;
		t.x = 99.33;
		return t;
	};
	_proto.maque1_i = function () {
		var t = new eui.Image();
		this.maque1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sfp_table_json.sfp_maque_icon";
		t.x = 14.51;
		t.y = 51.34;
		return t;
	};
	_proto.pressBtn1_i = function () {
		var t = new eui.Image();
		this.pressBtn1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "sfp_table_json.sfp_user_sit_btn";
		t.verticalCenter = 0;
		return t;
	};
	_proto.userInfo2_i = function () {
		var t = new eui.Group();
		this.userInfo2 = t;
		t.height = 84;
		t.width = 173;
		t.x = 454;
		t.y = 8.23;
		t.elementsContent = [this.users2_i(),this.pressBtn2_i()];
		return t;
	};
	_proto.users2_i = function () {
		var t = new eui.Group();
		this.users2 = t;
		t.height = 84;
		t.width = 173;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group4_i(),this.order2_i(),this.scoreGroup2_i(),this.maque2_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.x = -240;
		t.y = 5.07;
		t.elementsContent = [this.headDi2_i(),this.headImg2_i(),this.nickname2_i(),this.point2_i(),this.roomownerlogo2_i(),this.hasready2_i(),this.offline2_i(),this.singlePoint2_i(),this.msgGroup2_i()];
		return t;
	};
	_proto.headDi2_i = function () {
		var t = new eui.Image();
		this.headDi2 = t;
		t.source = "sfp_table_json.sfp_headBoxDi";
		t.x = 295.82;
		t.y = 0;
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 303.82;
		t.y = 8;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.width = 80;
		t.x = 381.82;
		t.y = 14.92;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.Label();
		this.point2 = t;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.x = 385.82;
		t.y = 51.04;
		return t;
	};
	_proto.roomownerlogo2_i = function () {
		var t = new eui.Image();
		this.roomownerlogo2 = t;
		t.source = "sfp_roomOwnerLogo";
		t.x = 301.56;
		t.y = 5;
		return t;
	};
	_proto.hasready2_i = function () {
		var t = new eui.Image();
		this.hasready2 = t;
		t.source = "sfp_hasReady";
		t.x = 304.82;
		t.y = 39.58;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Image();
		this.offline2 = t;
		t.source = "sfp_offline";
		t.x = 303.18;
		t.y = 8.67;
		return t;
	};
	_proto.singlePoint2_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint2 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 196.41;
		t.y = 9.88;
		return t;
	};
	_proto.msgGroup2_i = function () {
		var t = new eui.Group();
		this.msgGroup2 = t;
		t.x = 0;
		t.y = 2.05;
		t.elementsContent = [this._Image7_i(),this.msg2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 300;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "kxmh_leftmsgqipao";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.msg2_i = function () {
		var t = new eui.Label();
		this.msg2 = t;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 8.99;
		return t;
	};
	_proto.order2_i = function () {
		var t = new eui.Image();
		this.order2 = t;
		t.source = "sfp_table_json.sfp_first_run";
		t.x = 7.6;
		t.y = -1.33;
		return t;
	};
	_proto.scoreGroup2_i = function () {
		var t = new eui.Group();
		this.scoreGroup2 = t;
		t.x = 11.83;
		t.y = 81.39;
		t.elementsContent = [this._Image8_i(),this.tableScore2_i(),this.gongxianScore2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_fen_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tableScore2_i = function () {
		var t = new eui.Label();
		this.tableScore2 = t;
		t.size = 20;
		t.text = "9999";
		t.verticalCenter = -0.5;
		t.x = 27.99;
		return t;
	};
	_proto.gongxianScore2_i = function () {
		var t = new eui.Label();
		this.gongxianScore2 = t;
		t.size = 20;
		t.text = "9999";
		t.verticalCenter = -0.5;
		t.x = 99.33;
		return t;
	};
	_proto.maque2_i = function () {
		var t = new eui.Image();
		this.maque2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sfp_table_json.sfp_maque_icon";
		t.x = 9.51;
		t.y = 50.34;
		return t;
	};
	_proto.pressBtn2_i = function () {
		var t = new eui.Image();
		this.pressBtn2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "sfp_table_json.sfp_user_sit_btn";
		t.verticalCenter = 0;
		return t;
	};
	_proto.userInfo3_i = function () {
		var t = new eui.Group();
		this.userInfo3 = t;
		t.height = 84;
		t.width = 173;
		t.x = 10;
		t.y = 218;
		t.elementsContent = [this.users3_i(),this.pressBtn3_i()];
		return t;
	};
	_proto.users3_i = function () {
		var t = new eui.Group();
		this.users3 = t;
		t.height = 100;
		t.width = 173;
		t.x = 5.61;
		t.y = -28.6;
		t.elementsContent = [this._Group5_i(),this.order3_i(),this.scoreGroup3_i(),this.maque3_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.x = 5.06;
		t.y = 0;
		t.elementsContent = [this.headDi3_i(),this.headImg3_i(),this.nickname3_i(),this.point3_i(),this.roomownerlogo3_i(),this.hasready3_i(),this.offline3_i(),this.singlePoint3_i(),this.msgGroup3_i()];
		return t;
	};
	_proto.headDi3_i = function () {
		var t = new eui.Image();
		this.headDi3 = t;
		t.source = "sfp_table_json.sfp_headBoxDi";
		t.x = 0;
		t.y = 40.6;
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "666662_png";
		t.width = 65;
		t.x = 8;
		t.y = 48.6;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.text = "紫碧罗";
		t.textAlign = "center";
		t.width = 80;
		t.x = 86;
		t.y = 55.52;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.Label();
		this.point3 = t;
		t.size = 20;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xFCEA64;
		t.width = 67;
		t.x = 90;
		t.y = 91.64;
		return t;
	};
	_proto.roomownerlogo3_i = function () {
		var t = new eui.Image();
		this.roomownerlogo3 = t;
		t.source = "sfp_roomOwnerLogo";
		t.x = 5.74;
		t.y = 45.6;
		return t;
	};
	_proto.hasready3_i = function () {
		var t = new eui.Image();
		this.hasready3 = t;
		t.source = "sfp_hasReady";
		t.x = 9;
		t.y = 80.18;
		return t;
	};
	_proto.offline3_i = function () {
		var t = new eui.Image();
		this.offline3 = t;
		t.source = "sfp_offline";
		t.visible = false;
		t.x = 7.36;
		t.y = 49.27;
		return t;
	};
	_proto.singlePoint3_i = function () {
		var t = new eui.BitmapLabel();
		this.singlePoint3 = t;
		t.font = "resultcoin_lose_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "+10";
		t.x = 173.92;
		t.y = 45.15;
		return t;
	};
	_proto.msgGroup3_i = function () {
		var t = new eui.Group();
		this.msgGroup3 = t;
		t.x = 29.5;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.msg3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kxmh_leftmsgqipao";
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
		t.text = "怎么又断线了,网络怎么这么差呀";
		t.y = 8.99;
		return t;
	};
	_proto.order3_i = function () {
		var t = new eui.Image();
		this.order3 = t;
		t.source = "sfp_table_json.sfp_first_run";
		t.x = 0;
		t.y = 27.45;
		return t;
	};
	_proto.scoreGroup3_i = function () {
		var t = new eui.Group();
		this.scoreGroup3 = t;
		t.x = 5.05;
		t.y = 115.59;
		t.elementsContent = [this._Image10_i(),this.tableScore3_i(),this.gongxianScore3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_fen_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tableScore3_i = function () {
		var t = new eui.Label();
		this.tableScore3 = t;
		t.size = 20;
		t.text = "9999";
		t.verticalCenter = -0.5;
		t.x = 27.99;
		return t;
	};
	_proto.gongxianScore3_i = function () {
		var t = new eui.Label();
		this.gongxianScore3 = t;
		t.size = 20;
		t.text = "9999";
		t.verticalCenter = -0.5;
		t.x = 99.33;
		return t;
	};
	_proto.maque3_i = function () {
		var t = new eui.Image();
		this.maque3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sfp_table_json.sfp_maque_icon";
		t.x = 0.51;
		t.y = 83.34;
		return t;
	};
	_proto.pressBtn3_i = function () {
		var t = new eui.Image();
		this.pressBtn3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "sfp_table_json.sfp_user_sit_btn";
		t.verticalCenter = 0;
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
		t.elementsContent = [this._Image11_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 226;
		t.scale9Grid = new egret.Rectangle(11,11,32,32);
		t.source = "cgImage_json.menulistBg";
		t.width = 153;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
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
		t.skinName = sfp_Index$Skin611;
		return t;
	};
	_proto._Group7_i = function () {
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
		t.skinName = sfp_Index$Skin612;
		return t;
	};
	_proto._Group8_i = function () {
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
		t.skinName = sfp_Index$Skin613;
		return t;
	};
	_proto._Group9_i = function () {
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
		t.skinName = sfp_Index$Skin614;
		return t;
	};
	_proto._Group10_i = function () {
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
		t.skinName = sfp_Index$Skin615;
		return t;
	};
	_proto._Group11_i = function () {
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
		t.skinName = sfp_Index$Skin616;
		return t;
	};
	_proto._Group12_i = function () {
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
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin617;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 501.11;
		t.elementsContent = [this.testpai0_i(),this.testpai1_i(),this.testpai2_i(),this.testpai3_i(),this.testpai4_i(),this.testpai5_i(),this.testpai6_i(),this.testpai7_i(),this.testpai8_i(),this.testpai9_i(),this.testpai10_i(),this._Label1_i()];
		return t;
	};
	_proto.testpai0_i = function () {
		var t = new eui.Image();
		this.testpai0 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.testpai1_i = function () {
		var t = new eui.Image();
		this.testpai1 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 40.33;
		t.y = 0;
		return t;
	};
	_proto.testpai2_i = function () {
		var t = new eui.Image();
		this.testpai2 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.testpai3_i = function () {
		var t = new eui.Image();
		this.testpai3 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 57;
		t.y = 0;
		return t;
	};
	_proto.testpai4_i = function () {
		var t = new eui.Image();
		this.testpai4 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto.testpai5_i = function () {
		var t = new eui.Image();
		this.testpai5 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 95;
		t.y = 0;
		return t;
	};
	_proto.testpai6_i = function () {
		var t = new eui.Image();
		this.testpai6 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto.testpai7_i = function () {
		var t = new eui.Image();
		this.testpai7 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 133;
		t.y = 0;
		return t;
	};
	_proto.testpai8_i = function () {
		var t = new eui.Image();
		this.testpai8 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto.testpai9_i = function () {
		var t = new eui.Image();
		this.testpai9 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f10";
		t.width = 117;
		t.x = 171;
		t.y = 0;
		return t;
	};
	_proto.testpai10_i = function () {
		var t = new eui.Image();
		this.testpai10 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 1045;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "Label";
		t.textColor = 0xe84e4e;
		t.visible = false;
		t.x = 10;
		t.y = 103;
		return t;
	};
	_proto.testpai11_i = function () {
		var t = new eui.Image();
		this.testpai11 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 172;
		t.y = 5.33;
		return t;
	};
	_proto.testpai28_i = function () {
		var t = new eui.Image();
		this.testpai28 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 186;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 33;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.y = 1.5;
		t.elementsContent = [this.testpai12_i(),this.testpai13_i(),this.testpai14_i(),this.testpai15_i(),this.testpai16_i(),this.testpai17_i(),this.testpai18_i(),this.testpai19_i(),this.testpai20_i(),this.testpai21_i(),this._Label2_i()];
		return t;
	};
	_proto.testpai12_i = function () {
		var t = new eui.Image();
		this.testpai12 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.testpai13_i = function () {
		var t = new eui.Image();
		this.testpai13 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 13;
		t.y = 0;
		return t;
	};
	_proto.testpai14_i = function () {
		var t = new eui.Image();
		this.testpai14 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 57;
		t.y = 0;
		return t;
	};
	_proto.testpai15_i = function () {
		var t = new eui.Image();
		this.testpai15 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 76;
		t.y = 0;
		return t;
	};
	_proto.testpai16_i = function () {
		var t = new eui.Image();
		this.testpai16 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 95;
		t.y = 0;
		return t;
	};
	_proto.testpai17_i = function () {
		var t = new eui.Image();
		this.testpai17 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 114;
		t.y = 0;
		return t;
	};
	_proto.testpai18_i = function () {
		var t = new eui.Image();
		this.testpai18 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 133;
		t.y = 0;
		return t;
	};
	_proto.testpai19_i = function () {
		var t = new eui.Image();
		this.testpai19 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto.testpai20_i = function () {
		var t = new eui.Image();
		this.testpai20 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f10";
		t.width = 117;
		t.x = 171;
		t.y = 0;
		return t;
	};
	_proto.testpai21_i = function () {
		var t = new eui.Image();
		this.testpai21 = t;
		t.height = 163;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 1045;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "Label";
		t.textColor = 0xE84E4E;
		t.visible = false;
		t.x = 10;
		t.y = 103;
		return t;
	};
	_proto.testpai22_i = function () {
		var t = new eui.Image();
		this.testpai22 = t;
		t.height = 163;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 222;
		t.y = 52;
		return t;
	};
	_proto.testpai23_i = function () {
		var t = new eui.Image();
		this.testpai23 = t;
		t.height = 163;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 222;
		t.y = 66;
		return t;
	};
	_proto.testpai24_i = function () {
		var t = new eui.Image();
		this.testpai24 = t;
		t.height = 163;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 222;
		t.y = 80;
		return t;
	};
	_proto.testpai25_i = function () {
		var t = new eui.Image();
		this.testpai25 = t;
		t.height = 163;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 174;
		t.y = 78;
		return t;
	};
	_proto.testpai27_i = function () {
		var t = new eui.Image();
		this.testpai27 = t;
		t.height = 163;
		t.rotation = -90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 871.7;
		t.y = 500;
		return t;
	};
	_proto.testpai26_i = function () {
		var t = new eui.Image();
		this.testpai26 = t;
		t.height = 163;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.visible = false;
		t.width = 117;
		t.x = 224;
		t.y = 430;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 339;
		t.y = 369.87;
		t.elementsContent = [this.outpai00_i(),this.outpai0_i(),this.outpai1_i(),this.outpai2_i(),this.outpai3_i(),this.outpai4_i(),this.outpai5_i(),this.outpai6_i(),this.outpai7_i(),this.outpai9_i(),this.outpai10_i(),this.outpai11_i(),this._Label3_i(),this.outpai12_i(),this.outpai13_i(),this.outpai14_i(),this.outpai15_i(),this.outpai8_i()];
		return t;
	};
	_proto.outpai00_i = function () {
		var t = new eui.Image();
		this.outpai00 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outpai0_i = function () {
		var t = new eui.Image();
		this.outpai0 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto.outpai1_i = function () {
		var t = new eui.Image();
		this.outpai1 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto.outpai2_i = function () {
		var t = new eui.Image();
		this.outpai2 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.outpai3_i = function () {
		var t = new eui.Image();
		this.outpai3 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.outpai4_i = function () {
		var t = new eui.Image();
		this.outpai4 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.outpai5_i = function () {
		var t = new eui.Image();
		this.outpai5 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.outpai6_i = function () {
		var t = new eui.Image();
		this.outpai6 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.outpai7_i = function () {
		var t = new eui.Image();
		this.outpai7 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 160;
		t.y = 0;
		return t;
	};
	_proto.outpai9_i = function () {
		var t = new eui.Image();
		this.outpai9 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto.outpai10_i = function () {
		var t = new eui.Image();
		this.outpai10 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.outpai11_i = function () {
		var t = new eui.Image();
		this.outpai11 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 220;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "7先";
		t.textColor = 0x0B7505;
		t.x = 150.68;
		t.y = 78;
		return t;
	};
	_proto.outpai12_i = function () {
		var t = new eui.Image();
		this.outpai12 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto.outpai13_i = function () {
		var t = new eui.Image();
		this.outpai13 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 260;
		t.y = 0;
		return t;
	};
	_proto.outpai14_i = function () {
		var t = new eui.Image();
		this.outpai14 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 280;
		t.y = 0;
		return t;
	};
	_proto.outpai15_i = function () {
		var t = new eui.Image();
		this.outpai15 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.outpai8_i = function () {
		var t = new eui.Image();
		this.outpai8 = t;
		t.height = 163;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 320;
		t.y = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 370;
		t.y = 138.19;
		t.elementsContent = [this.outpai16_i(),this.outpai17_i(),this.outpai18_i(),this.outpai19_i(),this.outpai20_i(),this.outpai21_i(),this.outpai22_i(),this.outpai23_i(),this.outpai24_i(),this.outpai25_i(),this.outpai26_i(),this.outpai27_i(),this.outpai28_i(),this.outpai29_i(),this.outpai30_i(),this.outpai31_i()];
		return t;
	};
	_proto.outpai16_i = function () {
		var t = new eui.Image();
		this.outpai16 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outpai17_i = function () {
		var t = new eui.Image();
		this.outpai17 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto.outpai18_i = function () {
		var t = new eui.Image();
		this.outpai18 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 36;
		t.y = 0;
		return t;
	};
	_proto.outpai19_i = function () {
		var t = new eui.Image();
		this.outpai19 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 54;
		t.y = 0;
		return t;
	};
	_proto.outpai20_i = function () {
		var t = new eui.Image();
		this.outpai20 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outpai21_i = function () {
		var t = new eui.Image();
		this.outpai21 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.outpai22_i = function () {
		var t = new eui.Image();
		this.outpai22 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 108;
		t.y = 0;
		return t;
	};
	_proto.outpai23_i = function () {
		var t = new eui.Image();
		this.outpai23 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 126;
		t.y = 0;
		return t;
	};
	_proto.outpai24_i = function () {
		var t = new eui.Image();
		this.outpai24 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 144;
		t.y = 0;
		return t;
	};
	_proto.outpai25_i = function () {
		var t = new eui.Image();
		this.outpai25 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto.outpai26_i = function () {
		var t = new eui.Image();
		this.outpai26 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto.outpai27_i = function () {
		var t = new eui.Image();
		this.outpai27 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 198;
		t.y = 0;
		return t;
	};
	_proto.outpai28_i = function () {
		var t = new eui.Image();
		this.outpai28 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outpai29_i = function () {
		var t = new eui.Image();
		this.outpai29 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 234;
		t.y = 0;
		return t;
	};
	_proto.outpai30_i = function () {
		var t = new eui.Image();
		this.outpai30 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 252;
		t.y = 0;
		return t;
	};
	_proto.outpai31_i = function () {
		var t = new eui.Image();
		this.outpai31 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 270;
		t.y = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 198.79;
		t.y = 241.31;
		t.elementsContent = [this.outpai32_i(),this.outpai33_i(),this.outpai34_i(),this.outpai35_i(),this.outpai36_i(),this.outpai37_i(),this.outpai38_i(),this.outpai39_i(),this.outpai40_i(),this.outpai41_i(),this.outpai42_i(),this.outpai43_i(),this.outpai44_i(),this.outpai45_i(),this.outpai46_i(),this.outpai47_i(),this._Label4_i()];
		return t;
	};
	_proto.outpai32_i = function () {
		var t = new eui.Image();
		this.outpai32 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outpai33_i = function () {
		var t = new eui.Image();
		this.outpai33 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto.outpai34_i = function () {
		var t = new eui.Image();
		this.outpai34 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 36;
		t.y = 0;
		return t;
	};
	_proto.outpai35_i = function () {
		var t = new eui.Image();
		this.outpai35 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 54;
		t.y = 0;
		return t;
	};
	_proto.outpai36_i = function () {
		var t = new eui.Image();
		this.outpai36 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outpai37_i = function () {
		var t = new eui.Image();
		this.outpai37 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.outpai38_i = function () {
		var t = new eui.Image();
		this.outpai38 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 108;
		t.y = 0;
		return t;
	};
	_proto.outpai39_i = function () {
		var t = new eui.Image();
		this.outpai39 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 126;
		t.y = 0;
		return t;
	};
	_proto.outpai40_i = function () {
		var t = new eui.Image();
		this.outpai40 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 144;
		t.y = 0;
		return t;
	};
	_proto.outpai41_i = function () {
		var t = new eui.Image();
		this.outpai41 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto.outpai42_i = function () {
		var t = new eui.Image();
		this.outpai42 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto.outpai43_i = function () {
		var t = new eui.Image();
		this.outpai43 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 198;
		t.y = 0;
		return t;
	};
	_proto.outpai44_i = function () {
		var t = new eui.Image();
		this.outpai44 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outpai45_i = function () {
		var t = new eui.Image();
		this.outpai45 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 234;
		t.y = 0;
		return t;
	};
	_proto.outpai46_i = function () {
		var t = new eui.Image();
		this.outpai46 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 252;
		t.y = 0;
		return t;
	};
	_proto.outpai47_i = function () {
		var t = new eui.Image();
		this.outpai47 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 270;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "7先";
		t.textColor = 0x0b7505;
		t.x = 132.01;
		t.y = 63.35;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 544;
		t.y = 241;
		t.elementsContent = [this.outpai48_i(),this.outpai49_i(),this.outpai50_i(),this.outpai51_i(),this.outpai52_i(),this.outpai53_i(),this.outpai54_i(),this.outpai55_i(),this.outpai56_i(),this.outpai57_i(),this.outpai58_i(),this.outpai59_i(),this.outpai60_i(),this.outpai61_i(),this.outpai62_i(),this.outpai63_i()];
		return t;
	};
	_proto.outpai48_i = function () {
		var t = new eui.Image();
		this.outpai48 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.outpai49_i = function () {
		var t = new eui.Image();
		this.outpai49 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto.outpai50_i = function () {
		var t = new eui.Image();
		this.outpai50 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 36;
		t.y = 0;
		return t;
	};
	_proto.outpai51_i = function () {
		var t = new eui.Image();
		this.outpai51 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 54;
		t.y = 0;
		return t;
	};
	_proto.outpai52_i = function () {
		var t = new eui.Image();
		this.outpai52 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.outpai53_i = function () {
		var t = new eui.Image();
		this.outpai53 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.outpai54_i = function () {
		var t = new eui.Image();
		this.outpai54 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 108;
		t.y = 0;
		return t;
	};
	_proto.outpai55_i = function () {
		var t = new eui.Image();
		this.outpai55 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 126;
		t.y = 0;
		return t;
	};
	_proto.outpai56_i = function () {
		var t = new eui.Image();
		this.outpai56 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 144;
		t.y = 0;
		return t;
	};
	_proto.outpai57_i = function () {
		var t = new eui.Image();
		this.outpai57 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto.outpai58_i = function () {
		var t = new eui.Image();
		this.outpai58 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto.outpai59_i = function () {
		var t = new eui.Image();
		this.outpai59 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 198;
		t.y = 0;
		return t;
	};
	_proto.outpai60_i = function () {
		var t = new eui.Image();
		this.outpai60 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 216;
		t.y = 0;
		return t;
	};
	_proto.outpai61_i = function () {
		var t = new eui.Image();
		this.outpai61 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 234;
		t.y = 0;
		return t;
	};
	_proto.outpai62_i = function () {
		var t = new eui.Image();
		this.outpai62 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 252;
		t.y = 0;
		return t;
	};
	_proto.outpai63_i = function () {
		var t = new eui.Image();
		this.outpai63 = t;
		t.height = 163;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "sfp_pai_json.sfp_f5";
		t.width = 117;
		t.x = 270;
		t.y = 0;
		return t;
	};
	_proto.sitGroup_i = function () {
		var t = new eui.Group();
		this.sitGroup = t;
		t.height = 70;
		t.horizontalCenter = 17.5;
		t.width = 195;
		t.y = 410.33;
		t.elementsContent = [this.sitBtn_i()];
		return t;
	};
	_proto.sitBtn_i = function () {
		var t = new eui.Button();
		this.sitBtn = t;
		t.horizontalCenter = -2;
		t.label = "";
		t.verticalCenter = 0.5;
		t.skinName = sfp_Index$Skin618;
		return t;
	};
	_proto.chupaiGroup_i = function () {
		var t = new eui.Group();
		this.chupaiGroup = t;
		t.height = 50;
		t.width = 100;
		t.x = 602.2;
		t.y = 425.01;
		t.elementsContent = [this.chupai_i()];
		return t;
	};
	_proto.chupai_i = function () {
		var t = new eui.Button();
		this.chupai = t;
		t.enabled = false;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin619;
		return t;
	};
	_proto.tishiGroup_i = function () {
		var t = new eui.Group();
		this.tishiGroup = t;
		t.width = 100;
		t.x = 412.04;
		t.y = 422.67;
		t.elementsContent = [this.tishi_i()];
		return t;
	};
	_proto.tishi_i = function () {
		var t = new eui.Button();
		this.tishi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin620;
		return t;
	};
	_proto.readyGroup_i = function () {
		var t = new eui.Group();
		this.readyGroup = t;
		t.height = 70;
		t.horizontalCenter = 15.5;
		t.width = 195;
		t.y = 410.32;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin621;
		return t;
	};
	_proto.luying_i = function () {
		var t = new eui.Group();
		this.luying = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image12_i(),this._Group19_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "jiesan_json.voiceBG";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 83;
		t.y = 17;
		t.elementsContent = [this.voice0_i(),this.voice1_i(),this.voice2_i(),this.voice3_i()];
		return t;
	};
	_proto.voice0_i = function () {
		var t = new eui.Image();
		this.voice0 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_1";
		t.y = 54;
		return t;
	};
	_proto.voice1_i = function () {
		var t = new eui.Image();
		this.voice1 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_2";
		t.y = 36;
		return t;
	};
	_proto.voice2_i = function () {
		var t = new eui.Image();
		this.voice2 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_3";
		t.visible = false;
		t.y = 18;
		return t;
	};
	_proto.voice3_i = function () {
		var t = new eui.Image();
		this.voice3 = t;
		t.horizontalCenter = 0;
		t.source = "jiesan_json.voice_4";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.inviteGroup_i = function () {
		var t = new eui.Group();
		this.inviteGroup = t;
		t.height = 70;
		t.width = 185;
		t.x = 463.32;
		t.y = 410.82;
		t.elementsContent = [this.invite_i()];
		return t;
	};
	_proto.invite_i = function () {
		var t = new eui.Button();
		this.invite = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin622;
		return t;
	};
	_proto.pangguan_i = function () {
		var t = new eui.Image();
		this.pangguan = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "sfp_pangguan";
		t.x = 922.72;
		t.y = 348.65;
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
		t.elementsContent = [this._Image13_i(),this._Rect1_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.source = "inviteJIANtou_png";
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daoji0_i = function () {
		var t = new eui.Group();
		this.daoji0 = t;
		t.x = 311;
		t.y = 414.04;
		t.elementsContent = [this._Image14_i(),this.daojinum0_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_qinyou_pop_time_bg";
		t.x = 1.44;
		t.y = 0;
		return t;
	};
	_proto.daojinum0_i = function () {
		var t = new eui.Label();
		this.daojinum0 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.text = "99";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 34;
		return t;
	};
	_proto.daoji1_i = function () {
		var t = new eui.Group();
		this.daoji1 = t;
		t.x = 837.04;
		t.y = 246.1;
		t.elementsContent = [this._Image15_i(),this.daojinum1_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_qinyou_pop_time_bg";
		t.x = 1.44;
		t.y = 0;
		return t;
	};
	_proto.daojinum1_i = function () {
		var t = new eui.Label();
		this.daojinum1 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.text = "99";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 34;
		return t;
	};
	_proto.daoji2_i = function () {
		var t = new eui.Group();
		this.daoji2 = t;
		t.x = 624.45;
		t.y = 18.9;
		t.elementsContent = [this._Image16_i(),this.daojinum2_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_qinyou_pop_time_bg";
		t.x = 1.44;
		t.y = 0;
		return t;
	};
	_proto.daojinum2_i = function () {
		var t = new eui.Label();
		this.daojinum2 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.text = "99";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 34;
		return t;
	};
	_proto.daoji3_i = function () {
		var t = new eui.Group();
		this.daoji3 = t;
		t.x = 174.75;
		t.y = 231.44;
		t.elementsContent = [this._Image17_i(),this.daojinum3_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_qinyou_pop_time_bg";
		t.x = 1.44;
		t.y = 0;
		return t;
	};
	_proto.daojinum3_i = function () {
		var t = new eui.Label();
		this.daojinum3 = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.text = "99";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 34;
		return t;
	};
	_proto.deskscoreGroup_i = function () {
		var t = new eui.Group();
		this.deskscoreGroup = t;
		t.x = 829.52;
		t.y = 442;
		t.elementsContent = [this._Image18_i(),this.deskscore_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_benlun_score";
		t.x = 0;
		t.y = 0.61;
		return t;
	};
	_proto.deskscore_i = function () {
		var t = new eui.Label();
		this.deskscore = t;
		t.size = 20;
		t.text = "999";
		t.verticalCenter = 0;
		t.x = 91.25;
		return t;
	};
	_proto.huifangGroup_i = function () {
		var t = new eui.Group();
		this.huifangGroup = t;
		t.horizontalCenter = 26;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image19_i(),this._Group20_i(),this.huifangStartGroup_i(),this.parseGroup_i(),this.resetGroup_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "zhanji_bg10_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.verticalCenter = 8;
		t.width = 50;
		t.x = 414;
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
		t.skinName = sfp_Index$Skin623;
		return t;
	};
	_proto.huifangStartGroup_i = function () {
		var t = new eui.Group();
		this.huifangStartGroup = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 8;
		t.width = 50;
		t.elementsContent = [this.huifangStartBtn_i()];
		return t;
	};
	_proto.huifangStartBtn_i = function () {
		var t = new eui.Button();
		this.huifangStartBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin624;
		return t;
	};
	_proto.parseGroup_i = function () {
		var t = new eui.Group();
		this.parseGroup = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 8;
		t.width = 50;
		t.elementsContent = [this.parseBtn_i()];
		return t;
	};
	_proto.parseBtn_i = function () {
		var t = new eui.Button();
		this.parseBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin625;
		return t;
	};
	_proto.resetGroup_i = function () {
		var t = new eui.Group();
		this.resetGroup = t;
		t.height = 50;
		t.verticalCenter = 8;
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
		t.skinName = sfp_Index$Skin626;
		return t;
	};
	_proto.backHallBtn_i = function () {
		var t = new eui.Image();
		this.backHallBtn = t;
		t.scaleX = -1;
		t.source = "zhanji_game_back_png";
		t.visible = false;
		t.x = 1047.17;
		t.y = 556;
		return t;
	};
	_proto.yyGroup_i = function () {
		var t = new eui.Group();
		this.yyGroup = t;
		t.height = 80;
		t.width = 80;
		t.x = 982.17;
		t.y = 336.86;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin627;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.x = -18;
		t.y = -92.66;
		t.elementsContent = [this._Image20_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image20_i = function () {
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
		t.y = 420.3;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = sfp_Index$Skin628;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.width = 365;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Rect2_i = function () {
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
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image21_i(),this.juhua_i(),this._Label5_i()];
		return t;
	};
	_proto._Image21_i = function () {
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
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "正在连接服务器，请稍候……";
		t.y = 413.67;
		return t;
	};
	return sfp_Index;
})(eui.Skin);generateEUI.paths['resource/eui_skins/sifupai/sfp_single_sesult.exml'] = window.sfp_single_sesult = (function (_super) {
	__extends(sfp_single_sesult, _super);
	var sfp_single_sesult$Skin629 = 	(function (_super) {
		__extends(sfp_single_sesult$Skin629, _super);
		function sfp_single_sesult$Skin629() {
			_super.call(this);
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
		var _proto = sfp_single_sesult$Skin629.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sfp_table_json.sfp_share_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_single_sesult$Skin629;
	})(eui.Skin);

	var sfp_single_sesult$Skin630 = 	(function (_super) {
		__extends(sfp_single_sesult$Skin630, _super);
		function sfp_single_sesult$Skin630() {
			_super.call(this);
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
		var _proto = sfp_single_sesult$Skin630.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sfp_table_json.sfp_continue_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_single_sesult$Skin630;
	})(eui.Skin);

	function sfp_single_sesult() {
		_super.call(this);
		this.skinParts = ["itemBg0","head0","maque0","nickname0","ID0","order0","beGunCount0","allWinCount0","gunCount0","specialCount0","win0","item0","itemBg1","head1","maque1","nickname1","ID1","order1","beGunCount1","allWinCount1","gunCount1","specialCount1","win1","item1","itemBg2","head2","maque2","nickname2","ID2","order2","beGunCount2","allWinCount2","gunCount2","specialCount2","win2","item2","itemBg3","head3","maque3","nickname3","ID3","order3","beGunCount3","allWinCount3","gunCount3","specialCount3","win3","item3","jieping","jieGroup","backHall","time","dujiang","xipai","zhengdian","playcount","pwd","paymod"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group17_i(),this._Group19_i(),this._Group20_i(),this._Image26_i(),this._Image27_i()];
	}
	var _proto = sfp_single_sesult.prototype;

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
		t.source = "sfp_jiesuan_bg_png";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_result_di_png";
		t.width = 1060;
		t.y = 91;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 110.48;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.itemBg0_i(),this._Group1_i(),this._Group2_i(),this.order0_i(),this._Group3_i(),this._Group4_i(),this.win0_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto.itemBg0_i = function () {
		var t = new eui.Image();
		this.itemBg0 = t;
		t.source = "sfp_jiesuan_item_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0.5;
		t.x = 4.56;
		t.elementsContent = [this.head0_i(),this._Image4_i(),this.maque0_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3.5;
		t.width = 90;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan_head_di";
		t.verticalCenter = 0;
		t.width = 105;
		return t;
	};
	_proto.maque0_i = function () {
		var t = new eui.Image();
		this.maque0 = t;
		t.source = "sfp_table_json.sfp_maque_icon";
		t.x = 4;
		t.y = 76;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 79.64;
		t.elementsContent = [this.nickname0_i(),this.ID0_i()];
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 115;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.height = 23;
		t.size = 23;
		t.text = "ID:666666";
		t.textColor = 0xffffff;
		t.width = 107;
		t.x = 4;
		t.y = 30.03;
		return t;
	};
	_proto.order0_i = function () {
		var t = new eui.Image();
		this.order0 = t;
		t.source = "sfp_table_json.sfp_single_one_jia";
		t.verticalCenter = -7.5;
		t.x = 196.52;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 900.36;
		t.y = 71.88;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.beGunCount0_i(),this.allWinCount0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_total_fen";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_fenenenen";
		t.verticalCenter = 0;
		t.x = 68.12;
		return t;
	};
	_proto.beGunCount0_i = function () {
		var t = new eui.Label();
		this.beGunCount0 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 24.87;
		return t;
	};
	_proto.allWinCount0_i = function () {
		var t = new eui.Label();
		this.allWinCount0 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 93.01;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 182.08;
		t.y = 71.38;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.gunCount0_i(),this.specialCount0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_fenenenen";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_shang_fen";
		t.verticalCenter = 0;
		t.x = 68.12;
		return t;
	};
	_proto.gunCount0_i = function () {
		var t = new eui.Label();
		this.gunCount0 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 24.87;
		return t;
	};
	_proto.specialCount0_i = function () {
		var t = new eui.Label();
		this.specialCount0 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 93.01;
		return t;
	};
	_proto.win0_i = function () {
		var t = new eui.Image();
		this.win0 = t;
		t.source = "sfp_table_json.sfp_single_win";
		t.x = 938.66;
		t.y = 15;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 152;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "sfp_pai_json.sfp_ht4";
		t.visible = false;
		t.width = 110;
		t.x = 180;
		t.y = 9.6;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 152;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "sfp_pai_json.sfp_ht4";
		t.visible = false;
		t.width = 110;
		t.x = 193;
		t.y = 9.6;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.horizontalCenter = 0;
		t.y = 105;
		t.elementsContent = [this.itemBg1_i(),this._Group5_i(),this._Group6_i(),this.order1_i(),this._Group7_i(),this._Group8_i(),this.win1_i()];
		return t;
	};
	_proto.itemBg1_i = function () {
		var t = new eui.Image();
		this.itemBg1 = t;
		t.source = "sfp_jiesuan_item_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0.5;
		t.x = 4.56;
		t.elementsContent = [this.head1_i(),this._Image11_i(),this.maque1_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3.5;
		t.width = 90;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan_head_di";
		t.verticalCenter = 0;
		t.width = 105;
		return t;
	};
	_proto.maque1_i = function () {
		var t = new eui.Image();
		this.maque1 = t;
		t.source = "sfp_table_json.sfp_maque_icon";
		t.x = 4;
		t.y = 76;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 79.64;
		t.elementsContent = [this.nickname1_i(),this.ID1_i()];
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 115;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.height = 23;
		t.size = 23;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 107;
		t.x = 4;
		t.y = 30.03;
		return t;
	};
	_proto.order1_i = function () {
		var t = new eui.Image();
		this.order1 = t;
		t.source = "sfp_table_json.sfp_single_two_jia";
		t.verticalCenter = -7.5;
		t.x = 196.52;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 900.36;
		t.y = 71.88;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this.beGunCount1_i(),this.allWinCount1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_total_fen";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_fenenenen";
		t.verticalCenter = 0;
		t.x = 68.12;
		return t;
	};
	_proto.beGunCount1_i = function () {
		var t = new eui.Label();
		this.beGunCount1 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 24.87;
		return t;
	};
	_proto.allWinCount1_i = function () {
		var t = new eui.Label();
		this.allWinCount1 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 93.01;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 182.08;
		t.y = 71.38;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this.gunCount1_i(),this.specialCount1_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_fenenenen";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_shang_fen";
		t.verticalCenter = 0;
		t.x = 68.12;
		return t;
	};
	_proto.gunCount1_i = function () {
		var t = new eui.Label();
		this.gunCount1 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 24.87;
		return t;
	};
	_proto.specialCount1_i = function () {
		var t = new eui.Label();
		this.specialCount1 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 93.01;
		return t;
	};
	_proto.win1_i = function () {
		var t = new eui.Image();
		this.win1 = t;
		t.source = "sfp_table_json.sfp_single_win";
		t.x = 938.66;
		t.y = 15;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.horizontalCenter = 0;
		t.y = 210;
		t.elementsContent = [this.itemBg2_i(),this._Group9_i(),this._Group10_i(),this.order2_i(),this._Group11_i(),this._Group12_i(),this.win2_i()];
		return t;
	};
	_proto.itemBg2_i = function () {
		var t = new eui.Image();
		this.itemBg2 = t;
		t.source = "sfp_jiesuan_item_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0.5;
		t.x = 4.56;
		t.elementsContent = [this.head2_i(),this._Image16_i(),this.maque2_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3.5;
		t.width = 90;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan_head_di";
		t.verticalCenter = 0;
		t.width = 105;
		return t;
	};
	_proto.maque2_i = function () {
		var t = new eui.Image();
		this.maque2 = t;
		t.source = "sfp_table_json.sfp_maque_icon";
		t.x = 4;
		t.y = 76;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 79.64;
		t.elementsContent = [this.nickname2_i(),this.ID2_i()];
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 115;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.height = 23;
		t.size = 23;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 107;
		t.x = 4;
		t.y = 30.03;
		return t;
	};
	_proto.order2_i = function () {
		var t = new eui.Image();
		this.order2 = t;
		t.source = "sfp_table_json.sfp_single_three_jia";
		t.verticalCenter = -7.5;
		t.x = 196.52;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 900.36;
		t.y = 71.88;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this.beGunCount2_i(),this.allWinCount2_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_total_fen";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_fenenenen";
		t.verticalCenter = 0;
		t.x = 68.12;
		return t;
	};
	_proto.beGunCount2_i = function () {
		var t = new eui.Label();
		this.beGunCount2 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 24.87;
		return t;
	};
	_proto.allWinCount2_i = function () {
		var t = new eui.Label();
		this.allWinCount2 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 93.01;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 182.08;
		t.y = 71.38;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this.gunCount2_i(),this.specialCount2_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_fenenenen";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_shang_fen";
		t.verticalCenter = 0;
		t.x = 68.12;
		return t;
	};
	_proto.gunCount2_i = function () {
		var t = new eui.Label();
		this.gunCount2 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 24.87;
		return t;
	};
	_proto.specialCount2_i = function () {
		var t = new eui.Label();
		this.specialCount2 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 93.01;
		return t;
	};
	_proto.win2_i = function () {
		var t = new eui.Image();
		this.win2 = t;
		t.source = "sfp_table_json.sfp_single_win";
		t.x = 938.66;
		t.y = 15;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.horizontalCenter = 0;
		t.y = 315;
		t.elementsContent = [this.itemBg3_i(),this._Group13_i(),this._Group14_i(),this.order3_i(),this._Group15_i(),this._Group16_i(),this.win3_i()];
		return t;
	};
	_proto.itemBg3_i = function () {
		var t = new eui.Image();
		this.itemBg3 = t;
		t.source = "sfp_jiesuan_item_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0.5;
		t.x = 4.56;
		t.elementsContent = [this.head3_i(),this._Image21_i(),this.maque3_i()];
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3.5;
		t.width = 90;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan_head_di";
		t.verticalCenter = 0;
		t.width = 105;
		return t;
	};
	_proto.maque3_i = function () {
		var t = new eui.Image();
		this.maque3 = t;
		t.source = "sfp_table_json.sfp_maque_icon";
		t.x = 4;
		t.y = 76;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.x = 79.64;
		t.elementsContent = [this.nickname3_i(),this.ID3_i()];
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.size = 23;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 115;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.height = 23;
		t.size = 23;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 107;
		t.x = 4;
		t.y = 30.03;
		return t;
	};
	_proto.order3_i = function () {
		var t = new eui.Image();
		this.order3 = t;
		t.source = "sfp_table_json.sfp_single_one_jia";
		t.verticalCenter = -7.5;
		t.x = 196.52;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 900.36;
		t.y = 71.88;
		t.elementsContent = [this._Image22_i(),this._Image23_i(),this.beGunCount3_i(),this.allWinCount3_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_total_fen";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_fenenenen";
		t.verticalCenter = 0;
		t.x = 68.12;
		return t;
	};
	_proto.beGunCount3_i = function () {
		var t = new eui.Label();
		this.beGunCount3 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 24.87;
		return t;
	};
	_proto.allWinCount3_i = function () {
		var t = new eui.Label();
		this.allWinCount3 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 93.01;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 182.08;
		t.y = 71.38;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this.gunCount3_i(),this.specialCount3_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_fenenenen";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_single_shang_fen";
		t.verticalCenter = 0;
		t.x = 68.12;
		return t;
	};
	_proto.gunCount3_i = function () {
		var t = new eui.Label();
		this.gunCount3 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 24.87;
		return t;
	};
	_proto.specialCount3_i = function () {
		var t = new eui.Label();
		this.specialCount3 = t;
		t.size = 18;
		t.text = "9999";
		t.verticalCenter = 0.5;
		t.x = 93.01;
		return t;
	};
	_proto.win3_i = function () {
		var t = new eui.Image();
		this.win3 = t;
		t.source = "sfp_table_json.sfp_single_win";
		t.x = 938.66;
		t.y = 15;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 556.69;
		t.elementsContent = [this.jieGroup_i(),this._Group18_i()];
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
		t.skinName = sfp_single_sesult$Skin629;
		return t;
	};
	_proto._Group18_i = function () {
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
		t.skinName = sfp_single_sesult$Skin630;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 682.06;
		t.y = 18.41;
		t.elementsContent = [this.time_i(),this.dujiang_i(),this.xipai_i(),this.zhengdian_i(),this.playcount_i(),this.pwd_i(),this.paymod_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
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
	_proto.dujiang_i = function () {
		var t = new eui.Label();
		this.dujiang = t;
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "有毒将";
		t.x = 141.51;
		return t;
	};
	_proto.xipai_i = function () {
		var t = new eui.Label();
		this.xipai = t;
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "不洗牌";
		t.x = 218.04;
		return t;
	};
	_proto.zhengdian_i = function () {
		var t = new eui.Label();
		this.zhengdian = t;
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "有整点";
		t.x = 293.06;
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
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "666666";
		t.textColor = 0xffffff;
		t.x = 55.03;
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
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "时间：";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "局数：";
		t.x = 273.01;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "房号：";
		t.x = 3.18;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_jiesuan_title";
		t.x = 99.61;
		t.y = 10.53;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan";
		t.y = 3;
		return t;
	};
	return sfp_single_sesult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/sifupai/sfp_total_sesult.exml'] = window.sfp_total_sesult = (function (_super) {
	__extends(sfp_total_sesult, _super);
	var sfp_total_sesult$Skin631 = 	(function (_super) {
		__extends(sfp_total_sesult$Skin631, _super);
		function sfp_total_sesult$Skin631() {
			_super.call(this);
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
		var _proto = sfp_total_sesult$Skin631.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sfp_table_json.sfp_share_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_total_sesult$Skin631;
	})(eui.Skin);

	var sfp_total_sesult$Skin632 = 	(function (_super) {
		__extends(sfp_total_sesult$Skin632, _super);
		function sfp_total_sesult$Skin632() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sfp_total_sesult$Skin632.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sfp_table_json.sfp_back_hall_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return sfp_total_sesult$Skin632;
	})(eui.Skin);

	function sfp_total_sesult() {
		_super.call(this);
		this.skinParts = ["itemBg0","totalScore0","winCount0","failCount0","maxScore0","kingBomCount0","sevenLineCount0","head0","roomOwner0","nickname0","ID0","bigWin0","item0","itemBg1","totalScore1","winCount1","failCount1","maxScore1","kingBomCount1","sevenLineCount1","head1","roomOwner1","nickname1","ID1","bigWin1","item1","itemBg2","totalScore2","winCount2","failCount2","maxScore2","kingBomCount2","sevenLineCount2","head2","roomOwner2","nickname2","ID2","bigWin2","item2","itemBg3","totalScore3","winCount3","failCount3","maxScore3","kingBomCount3","sevenLineCount3","head3","roomOwner3","nickname3","ID3","bigWin3","item3","jieping","jieGroup","backHall","time","dujiang","xipai","zhengdian","playcount","pwd"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group9_i(),this._Group11_i(),this._Group12_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
	}
	var _proto = sfp_total_sesult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_jiesuan_bg_png";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "sfp_result_di_png";
		t.y = 91;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 112.21;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.itemBg0_i(),this.totalScore0_i(),this._Group1_i(),this._Group2_i(),this.roomOwner0_i(),this.nickname0_i(),this.ID0_i(),this.bigWin0_i()];
		return t;
	};
	_proto.itemBg0_i = function () {
		var t = new eui.Image();
		this.itemBg0 = t;
		t.source = "sfp_total_item_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.totalScore0_i = function () {
		var t = new eui.BitmapLabel();
		this.totalScore0 = t;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 178;
		t.x = 95.84;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label1_i(),this.winCount0_i(),this.failCount0_i(),this.maxScore0_i(),this.kingBomCount0_i(),this.sevenLineCount0_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "胜利次数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winCount0_i = function () {
		var t = new eui.Label();
		this.winCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.failCount0_i = function () {
		var t = new eui.Label();
		this.failCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.maxScore0_i = function () {
		var t = new eui.Label();
		this.maxScore0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.kingBomCount0_i = function () {
		var t = new eui.Label();
		this.kingBomCount0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.sevenLineCount0_i = function () {
		var t = new eui.Label();
		this.sevenLineCount0 = t;
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
		t.text = "失败次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "单局最高分";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "王炸次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "7线以上次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -53.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 7.28;
		t.elementsContent = [this.head0_i(),this._Image3_i()];
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3.5;
		t.width = 90;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan_head_di";
		t.verticalCenter = 0;
		t.width = 105;
		return t;
	};
	_proto.roomOwner0_i = function () {
		var t = new eui.Image();
		this.roomOwner0 = t;
		t.source = "sfp_table_json.sfp_roomOwnerLogo";
		t.x = 71.84;
		t.y = 6.67;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 46;
		t.size = 23;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 115;
		t.y = 18.15;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.height = 23;
		t.horizontalCenter = 44;
		t.size = 23;
		t.text = "ID:666666";
		t.textColor = 0xffffff;
		t.width = 107;
		t.y = 48.18;
		return t;
	};
	_proto.bigWin0_i = function () {
		var t = new eui.Image();
		this.bigWin0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sfp_table_json.sfp_big_win";
		t.x = -2.9799999999999898;
		t.y = -3.710000000000008;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 225;
		t.y = 0;
		t.elementsContent = [this.itemBg1_i(),this.totalScore1_i(),this._Group3_i(),this._Group4_i(),this.roomOwner1_i(),this.nickname1_i(),this.ID1_i(),this.bigWin1_i()];
		return t;
	};
	_proto.itemBg1_i = function () {
		var t = new eui.Image();
		this.itemBg1 = t;
		t.source = "sfp_total_item_bg_png";
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
		t.verticalCenter = 178;
		t.x = 95.84;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label6_i(),this.winCount1_i(),this.failCount1_i(),this.maxScore1_i(),this.kingBomCount1_i(),this.sevenLineCount1_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "胜利次数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winCount1_i = function () {
		var t = new eui.Label();
		this.winCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.failCount1_i = function () {
		var t = new eui.Label();
		this.failCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.maxScore1_i = function () {
		var t = new eui.Label();
		this.maxScore1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.kingBomCount1_i = function () {
		var t = new eui.Label();
		this.kingBomCount1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.sevenLineCount1_i = function () {
		var t = new eui.Label();
		this.sevenLineCount1 = t;
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
		t.text = "失败次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "单局最高分";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "王炸次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "7线以上次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -53.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 7.28;
		t.elementsContent = [this.head1_i(),this._Image4_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3.5;
		t.width = 90;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan_head_di";
		t.verticalCenter = 0;
		t.width = 105;
		return t;
	};
	_proto.roomOwner1_i = function () {
		var t = new eui.Image();
		this.roomOwner1 = t;
		t.source = "sfp_table_json.sfp_roomOwnerLogo";
		t.x = 71.84;
		t.y = 6.67;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 46;
		t.size = 23;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 115;
		t.y = 18.15;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.height = 23;
		t.horizontalCenter = 44;
		t.size = 23;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 107;
		t.y = 48.18;
		return t;
	};
	_proto.bigWin1_i = function () {
		var t = new eui.Image();
		this.bigWin1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sfp_table_json.sfp_big_win";
		t.x = -2.9799999999999898;
		t.y = -3.710000000000008;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 450;
		t.y = 0;
		t.elementsContent = [this.itemBg2_i(),this.totalScore2_i(),this._Group5_i(),this._Group6_i(),this.roomOwner2_i(),this.nickname2_i(),this.ID2_i(),this.bigWin2_i()];
		return t;
	};
	_proto.itemBg2_i = function () {
		var t = new eui.Image();
		this.itemBg2 = t;
		t.source = "sfp_total_item_bg_png";
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
		t.verticalCenter = 178;
		t.x = 95.84;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label11_i(),this.winCount2_i(),this.failCount2_i(),this.maxScore2_i(),this.kingBomCount2_i(),this.sevenLineCount2_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "胜利次数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winCount2_i = function () {
		var t = new eui.Label();
		this.winCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.failCount2_i = function () {
		var t = new eui.Label();
		this.failCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.maxScore2_i = function () {
		var t = new eui.Label();
		this.maxScore2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.kingBomCount2_i = function () {
		var t = new eui.Label();
		this.kingBomCount2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.sevenLineCount2_i = function () {
		var t = new eui.Label();
		this.sevenLineCount2 = t;
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
		t.text = "失败次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "单局最高分";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "王炸次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "7线以上次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -53.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 7.28;
		t.elementsContent = [this.head2_i(),this._Image5_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3.5;
		t.width = 90;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan_head_di";
		t.verticalCenter = 0;
		t.width = 105;
		return t;
	};
	_proto.roomOwner2_i = function () {
		var t = new eui.Image();
		this.roomOwner2 = t;
		t.source = "sfp_table_json.sfp_roomOwnerLogo";
		t.x = 71.84;
		t.y = 6.67;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 46;
		t.size = 23;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 115;
		t.y = 18.15;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.height = 23;
		t.horizontalCenter = 44;
		t.size = 23;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 107;
		t.y = 48.18;
		return t;
	};
	_proto.bigWin2_i = function () {
		var t = new eui.Image();
		this.bigWin2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sfp_table_json.sfp_big_win";
		t.x = -2.9799999999999898;
		t.y = -3.710000000000008;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.x = 675;
		t.y = 0;
		t.elementsContent = [this.itemBg3_i(),this.totalScore3_i(),this._Group7_i(),this._Group8_i(),this.roomOwner3_i(),this.nickname3_i(),this.ID3_i(),this.bigWin3_i()];
		return t;
	};
	_proto.itemBg3_i = function () {
		var t = new eui.Image();
		this.itemBg3 = t;
		t.source = "sfp_total_item_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.totalScore3_i = function () {
		var t = new eui.BitmapLabel();
		this.totalScore3 = t;
		t.font = "resultcoin_win_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "+999";
		t.verticalCenter = 178;
		t.x = 95.84;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 121.66;
		t.elementsContent = [this._Label16_i(),this.winCount3_i(),this.failCount3_i(),this.maxScore3_i(),this.kingBomCount3_i(),this.sevenLineCount3_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i()];
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "胜利次数";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winCount3_i = function () {
		var t = new eui.Label();
		this.winCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto.failCount3_i = function () {
		var t = new eui.Label();
		this.failCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 40;
		return t;
	};
	_proto.maxScore3_i = function () {
		var t = new eui.Label();
		this.maxScore3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 80;
		return t;
	};
	_proto.kingBomCount3_i = function () {
		var t = new eui.Label();
		this.kingBomCount3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0";
		t.x = 130;
		t.y = 120;
		return t;
	};
	_proto.sevenLineCount3_i = function () {
		var t = new eui.Label();
		this.sevenLineCount3 = t;
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
		t.text = "失败次数";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "单局最高分";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "王炸次数";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "7线以上次数";
		t.x = 0;
		t.y = 160;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -53.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 7.28;
		t.elementsContent = [this.head3_i(),this._Image6_i()];
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.source = "jiesan_json.sss_jiesan_defaulthead";
		t.verticalCenter = -3.5;
		t.width = 90;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan_head_di";
		t.verticalCenter = 0;
		t.width = 105;
		return t;
	};
	_proto.roomOwner3_i = function () {
		var t = new eui.Image();
		this.roomOwner3 = t;
		t.source = "sfp_table_json.sfp_roomOwnerLogo";
		t.x = 71.84;
		t.y = 6.67;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 23;
		t.horizontalCenter = 46;
		t.size = 23;
		t.text = "紫碧罗科";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 115;
		t.y = 18.15;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.height = 23;
		t.horizontalCenter = 44;
		t.size = 23;
		t.text = "ID:666666";
		t.textColor = 0xFFFFFF;
		t.width = 107;
		t.y = 48.18;
		return t;
	};
	_proto.bigWin3_i = function () {
		var t = new eui.Image();
		this.bigWin3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sfp_table_json.sfp_big_win";
		t.x = -2.9799999999999898;
		t.y = -3.710000000000008;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 561.33;
		t.elementsContent = [this.jieGroup_i(),this._Group10_i()];
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
		t.skinName = sfp_total_sesult$Skin631;
		return t;
	};
	_proto._Group10_i = function () {
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
		t.skinName = sfp_total_sesult$Skin632;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 682.06;
		t.y = 18.41;
		t.elementsContent = [this.time_i(),this.dujiang_i(),this.xipai_i(),this.zhengdian_i(),this.playcount_i(),this.pwd_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i()];
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
	_proto.dujiang_i = function () {
		var t = new eui.Label();
		this.dujiang = t;
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "有毒将";
		t.x = 141.51;
		return t;
	};
	_proto.xipai_i = function () {
		var t = new eui.Label();
		this.xipai = t;
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "不洗牌";
		t.x = 218.04;
		return t;
	};
	_proto.zhengdian_i = function () {
		var t = new eui.Label();
		this.zhengdian = t;
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "有整点";
		t.x = 293.06;
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
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "666666";
		t.textColor = 0xffffff;
		t.x = 55.03;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
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
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "时间：";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "局数：";
		t.x = 273.01;
		t.y = 0;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.bottom = 6;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "房号：";
		t.x = 3.18;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "sfp_table_json.sfp_jiesuan_title";
		t.x = 99.61;
		t.y = 10.53;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_jiesuan";
		t.visible = false;
		t.y = 3;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sfp_table_json.sfp_total_title";
		t.y = 3;
		return t;
	};
	return sfp_total_sesult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/sifupai/wanfa_sfp.exml'] = window.wanfa_sfp = (function (_super) {
	__extends(wanfa_sfp, _super);
	var wanfa_sfp$Skin633 = 	(function (_super) {
		__extends(wanfa_sfp$Skin633, _super);
		function wanfa_sfp$Skin633() {
			_super.call(this);
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
		var _proto = wanfa_sfp$Skin633.prototype;

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
		return wanfa_sfp$Skin633;
	})(eui.Skin);

	function wanfa_sfp() {
		_super.call(this);
		this.skinParts = ["bg","cont","close"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this.bg_i(),this._Group3_i()];
	}
	var _proto = wanfa_sfp.prototype;

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
		t.source = "rule_sfp_png";
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
		t.skinName = wanfa_sfp$Skin633;
		return t;
	};
	return wanfa_sfp;
})(eui.Skin);