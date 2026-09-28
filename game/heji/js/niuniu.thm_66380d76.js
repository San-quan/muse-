
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/niuniu/NiuniuRecord.1.exml'] = window.NiuniuRecordSkin = (function (_super) {
	__extends(NiuniuRecordSkin, _super);
	var NiuniuRecordSkin$Skin440 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin440, _super);
		function NiuniuRecordSkin$Skin440() {
			_super.call(this);
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
		var _proto = NiuniuRecordSkin$Skin440.prototype;

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
		return NiuniuRecordSkin$Skin440;
	})(eui.Skin);

	var NiuniuRecordSkin$Skin441 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin441, _super);
		function NiuniuRecordSkin$Skin441() {
			_super.call(this);
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
		var _proto = NiuniuRecordSkin$Skin441.prototype;

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
		return NiuniuRecordSkin$Skin441;
	})(eui.Skin);

	var NiuniuRecordSkin$Skin442 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin442, _super);
		function NiuniuRecordSkin$Skin442() {
			_super.call(this);
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
		var _proto = NiuniuRecordSkin$Skin442.prototype;

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
		return NiuniuRecordSkin$Skin442;
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
		t.skinName = NiuniuRecordSkin$Skin440;
		return t;
	};
	_proto._btn_sharescreen_i = function () {
		var t = new eui.Button();
		this._btn_sharescreen = t;
		t.horizontalCenter = 1.7549999999999955;
		t.label = "";
		t.verticalCenter = 242.12;
		t.skinName = NiuniuRecordSkin$Skin441;
		return t;
	};
	_proto._btn_createagain_i = function () {
		var t = new eui.Button();
		this._btn_createagain = t;
		t.horizontalCenter = 299.755;
		t.label = "";
		t.verticalCenter = 241.12;
		t.skinName = NiuniuRecordSkin$Skin442;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/niuniu/NiuniuRecord.exml'] = window.NiuniuRecordSkin = (function (_super) {
	__extends(NiuniuRecordSkin, _super);
	var NiuniuRecordSkin$Skin443 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin443, _super);
		function NiuniuRecordSkin$Skin443() {
			_super.call(this);
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
		var _proto = NiuniuRecordSkin$Skin443.prototype;

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
		return NiuniuRecordSkin$Skin443;
	})(eui.Skin);

	var NiuniuRecordSkin$Skin444 = 	(function (_super) {
		__extends(NiuniuRecordSkin$Skin444, _super);
		function NiuniuRecordSkin$Skin444() {
			_super.call(this);
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
		var _proto = NiuniuRecordSkin$Skin444.prototype;

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
		return NiuniuRecordSkin$Skin444;
	})(eui.Skin);

	function NiuniuRecordSkin() {
		_super.call(this);
		this.skinParts = ["_rect_menban","headImg0","nickname0","ID0","point0","_img_bigWin0","item0","headImg1","nickname1","ID1","point1","_img_bigWin1","item1","headImg2","nickname2","ID2","point2","_img_bigWin2","item2","headImg3","nickname3","ID3","point3","_img_bigWin3","item3","headImg4","nickname4","ID4","point4","_img_bigWin4","item4","headImg5","nickname5","ID5","point5","_img_bigWin5","item5","pwd","playcount","gamename","time","_gp_main","backHall","jietu","playAgain","_gp_bot"];
		
		this.height = 720;
		this.width = 1215;
		this.elementsContent = [this._Group10_i()];
	}
	var _proto = NiuniuRecordSkin.prototype;

	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 1080;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._rect_menban_i(),this._gp_main_i(),this._gp_bot_i()];
		return t;
	};
	_proto._rect_menban_i = function () {
		var t = new eui.Rect();
		this._rect_menban = t;
		t.fillColor = 0x291d11;
		t.height = 1500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto._gp_main_i = function () {
		var t = new eui.Group();
		this._gp_main = t;
		t.x = 20;
		t.y = 40.03;
		t.elementsContent = [this._Group7_i(),this._Label1_i(),this._Group8_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 283;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i()];
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
		t.fillColor = 0xFEFEFE;
		t.height = 90;
		t.width = 580;
		t.y = 450;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.height = 90;
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
		t.size = 28;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.size = 28;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.Label();
		this.point0 = t;
		t.size = 45;
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
		t.x = 299;
		t.y = 186;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 90;
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
		t.size = 50;
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
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 180;
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
		t.size = 50;
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
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 270;
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
		t.size = 50;
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
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 360;
		t.elementsContent = [this.headImg4_i(),this._Group5_i(),this.point4_i(),this._img_bigWin4_i()];
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
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname4_i(),this.ID4_i()];
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID4_i = function () {
		var t = new eui.Label();
		this.ID4 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point4_i = function () {
		var t = new eui.Label();
		this.point4 = t;
		t.size = 50;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin4_i = function () {
		var t = new eui.Image();
		this._img_bigWin4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "nn_bigwin_png";
		t.verticalCenter = 0.5;
		t.x = 309;
		t.y = 186;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 90;
		t.width = 580;
		t.x = 0;
		t.y = 450;
		t.elementsContent = [this.headImg5_i(),this._Group6_i(),this.point5_i(),this._img_bigWin5_i()];
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
		t.verticalCenter = 1.5;
		t.x = 104.72;
		t.elementsContent = [this.nickname5_i(),this.ID5_i()];
		return t;
	};
	_proto.nickname5_i = function () {
		var t = new eui.Label();
		this.nickname5 = t;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "魂族网络科技";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ID5_i = function () {
		var t = new eui.Label();
		this.ID5 = t;
		t.size = 30;
		t.text = "玩家ID:666666";
		t.textColor = 0x312622;
		t.x = 0;
		t.y = 42.65;
		return t;
	};
	_proto.point5_i = function () {
		var t = new eui.Label();
		this.point5 = t;
		t.size = 50;
		t.text = "+999";
		t.textColor = 0x9A7400;
		t.verticalCenter = 0.5;
		t.x = 411.88;
		return t;
	};
	_proto._img_bigWin5_i = function () {
		var t = new eui.Image();
		this._img_bigWin5 = t;
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
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 61;
		t.elementsContent = [this._Rect7_i(),this._Rect8_i(),this.pwd_i(),this.playcount_i(),this.gamename_i(),this.time_i()];
		return t;
	};
	_proto._Rect7_i = function () {
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
	_proto._Rect8_i = function () {
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
		t.text = "疯狂拼十";
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
		t.elementsContent = [this._Label2_i(),this._Group9_i()];
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
	_proto._Group9_i = function () {
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
		t.skinName = NiuniuRecordSkin$Skin443;
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
		t.skinName = NiuniuRecordSkin$Skin444;
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
	var NiuniuSkins$Skin445 = 	(function (_super) {
		__extends(NiuniuSkins$Skin445, _super);
		function NiuniuSkins$Skin445() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin445.prototype;

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
		return NiuniuSkins$Skin445;
	})(eui.Skin);

	var NiuniuSkins$Skin446 = 	(function (_super) {
		__extends(NiuniuSkins$Skin446, _super);
		function NiuniuSkins$Skin446() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin446.prototype;

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
		return NiuniuSkins$Skin446;
	})(eui.Skin);

	var NiuniuSkins$Skin447 = 	(function (_super) {
		__extends(NiuniuSkins$Skin447, _super);
		function NiuniuSkins$Skin447() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin447.prototype;

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
		return NiuniuSkins$Skin447;
	})(eui.Skin);

	var NiuniuSkins$Skin448 = 	(function (_super) {
		__extends(NiuniuSkins$Skin448, _super);
		function NiuniuSkins$Skin448() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin448.prototype;

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
		return NiuniuSkins$Skin448;
	})(eui.Skin);

	var NiuniuSkins$Skin449 = 	(function (_super) {
		__extends(NiuniuSkins$Skin449, _super);
		function NiuniuSkins$Skin449() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin449.prototype;

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
		return NiuniuSkins$Skin449;
	})(eui.Skin);

	var NiuniuSkins$Skin450 = 	(function (_super) {
		__extends(NiuniuSkins$Skin450, _super);
		function NiuniuSkins$Skin450() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin450.prototype;

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
		return NiuniuSkins$Skin450;
	})(eui.Skin);

	var NiuniuSkins$Skin451 = 	(function (_super) {
		__extends(NiuniuSkins$Skin451, _super);
		function NiuniuSkins$Skin451() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin451.prototype;

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
		return NiuniuSkins$Skin451;
	})(eui.Skin);

	var NiuniuSkins$Skin452 = 	(function (_super) {
		__extends(NiuniuSkins$Skin452, _super);
		function NiuniuSkins$Skin452() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin452.prototype;

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
		return NiuniuSkins$Skin452;
	})(eui.Skin);

	var NiuniuSkins$Skin453 = 	(function (_super) {
		__extends(NiuniuSkins$Skin453, _super);
		function NiuniuSkins$Skin453() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin453.prototype;

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
		return NiuniuSkins$Skin453;
	})(eui.Skin);

	var NiuniuSkins$Skin454 = 	(function (_super) {
		__extends(NiuniuSkins$Skin454, _super);
		function NiuniuSkins$Skin454() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin454.prototype;

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
		return NiuniuSkins$Skin454;
	})(eui.Skin);

	var NiuniuSkins$Skin455 = 	(function (_super) {
		__extends(NiuniuSkins$Skin455, _super);
		function NiuniuSkins$Skin455() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin455.prototype;

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
		return NiuniuSkins$Skin455;
	})(eui.Skin);

	var NiuniuSkins$Skin456 = 	(function (_super) {
		__extends(NiuniuSkins$Skin456, _super);
		function NiuniuSkins$Skin456() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin456.prototype;

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
		return NiuniuSkins$Skin456;
	})(eui.Skin);

	var NiuniuSkins$Skin457 = 	(function (_super) {
		__extends(NiuniuSkins$Skin457, _super);
		function NiuniuSkins$Skin457() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin457.prototype;

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
		return NiuniuSkins$Skin457;
	})(eui.Skin);

	var NiuniuSkins$Skin458 = 	(function (_super) {
		__extends(NiuniuSkins$Skin458, _super);
		function NiuniuSkins$Skin458() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin458.prototype;

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
		return NiuniuSkins$Skin458;
	})(eui.Skin);

	var NiuniuSkins$Skin459 = 	(function (_super) {
		__extends(NiuniuSkins$Skin459, _super);
		function NiuniuSkins$Skin459() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin459.prototype;

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
		return NiuniuSkins$Skin459;
	})(eui.Skin);

	var NiuniuSkins$Skin460 = 	(function (_super) {
		__extends(NiuniuSkins$Skin460, _super);
		function NiuniuSkins$Skin460() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin460.prototype;

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
		return NiuniuSkins$Skin460;
	})(eui.Skin);

	var NiuniuSkins$Skin461 = 	(function (_super) {
		__extends(NiuniuSkins$Skin461, _super);
		function NiuniuSkins$Skin461() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin461.prototype;

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
		return NiuniuSkins$Skin461;
	})(eui.Skin);

	var NiuniuSkins$Skin462 = 	(function (_super) {
		__extends(NiuniuSkins$Skin462, _super);
		function NiuniuSkins$Skin462() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin462.prototype;

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
		return NiuniuSkins$Skin462;
	})(eui.Skin);

	var NiuniuSkins$Skin463 = 	(function (_super) {
		__extends(NiuniuSkins$Skin463, _super);
		function NiuniuSkins$Skin463() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin463.prototype;

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
		return NiuniuSkins$Skin463;
	})(eui.Skin);

	var NiuniuSkins$Skin464 = 	(function (_super) {
		__extends(NiuniuSkins$Skin464, _super);
		function NiuniuSkins$Skin464() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin464.prototype;

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
		return NiuniuSkins$Skin464;
	})(eui.Skin);

	var NiuniuSkins$Skin465 = 	(function (_super) {
		__extends(NiuniuSkins$Skin465, _super);
		function NiuniuSkins$Skin465() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin465.prototype;

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
		return NiuniuSkins$Skin465;
	})(eui.Skin);

	var NiuniuSkins$Skin466 = 	(function (_super) {
		__extends(NiuniuSkins$Skin466, _super);
		function NiuniuSkins$Skin466() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin466.prototype;

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
		return NiuniuSkins$Skin466;
	})(eui.Skin);

	var NiuniuSkins$Skin467 = 	(function (_super) {
		__extends(NiuniuSkins$Skin467, _super);
		function NiuniuSkins$Skin467() {
			_super.call(this);
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
		var _proto = NiuniuSkins$Skin467.prototype;

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
		return NiuniuSkins$Skin467;
	})(eui.Skin);

	function NiuniuSkins() {
		_super.call(this);
		this.skinParts = ["niuniubg","_txt_roompwd","_txt_playmode","_txt_jushu","_txt_paymode","_txt_basescore","_txt_roomowner","_txt_lunmode","_gp_rulebg","_img_player1_cardsdata_1","_img_player1_cardsdata_2","_img_player1_cardsdata_3","_img_player1_cardsdata_4","_img_player1_cardsdata_5","_img_player1_cardstypebg","_img_player1_cardstype","_bitmap_player1_niurank","_gp_player1_cardstype","_gp_player1_cardsdata","_btn_qiang_sure","_btn_qiang_notsure","_gp_qiang_actionbtn","_btn_rank_1","_btn_rank_2","_btn_rank_3","_gp_rankbtn3","_btn_rank_4","_btn_rank_5","_btn_rank_6","_btn_rank_7","_btn_rank_8","_gp_rankbtn5","_btn_rank_9","_btn_rank_10","_btn_rank_11","_btn_rank_12","_gp_rankbtn0","_btn_cuopai","_btn_showcard","_gp_operatebtn","_img_player1_head","_img_player1_offline","_img_player1_yuyinMark","_txt_player1_name","_txt_player1_score","_img_player1_kuang","_img_player1_zhuang","_img_player1_rankbg","_txt_player1_rankvalue","_gp_player1_rank","_img_player1_tapscorebg","_bitmap_player1_tapscore","_gp_player1_tapscore","_img_player1_qiangmark","headTouch1","_gp_player1_headinfo","_txt_player1_message","_gp_player1_message","_gp_player1","_img_player2_cardsdata_1","_img_player2_cardsdata_2","_img_player2_cardsdata_3","_img_player2_cardsdata_4","_img_player2_cardsdata_5","_img_player2_cardstypebg","_img_player2_cardstype","_bitmap_player2_niurank","_gp_player2_cardstype","_gp_player2_cardsdata","_img_player2_head","_txt_player2_name","_img_player2_offline","_img_player2_yuyinMark","_txt_player2_score","_img_player2_kuang","_img_player2_zhuang","_img_player2_rankbg","_txt_player2_rankvalue","_gp_player2_rank","_img_player2_tapscorebg","_bitmap_player2_tapscore","_gp_player2_tapscore","_img_player2_qiangmark","headTouch2","_gp_player2_headinfo","_txt_player2_message","_gp_player2_message","_gp_player2","_img_player3_head","_img_player3_offline","_img_player3_yuyinMark","_txt_player3_name","_txt_player3_score","_img_player3_kuang","_img_player3_zhuang","_img_player3_rankbg","_txt_player3_rankvalue","_gp_player3_rank","_img_player3_tapscorebg","_bitmap_player3_tapscore","_gp_player3_tapscore","_img_player3_qiangmark","headTouch3","_gp_player3_headinfo","_img_player3_cardsdata_1","_img_player3_cardsdata_2","_img_player3_cardsdata_3","_img_player3_cardsdata_4","_img_player3_cardsdata_5","_img_player3_cardstypebg","_img_player3_cardstype","_bitmap_player3_niurank","_gp_player3_cardstype","_gp_player3_cardsdata","_txt_player3_message","_gp_player3_message","_gp_player3","_img_player4_head","_img_player4_offline","_img_player4_yuyinMark","_txt_player4_name","_txt_player4_score","_img_player4_kuang","_img_player4_zhuang","_img_player4_rankbg","_txt_player4_rankvalue","_gp_player4_rank","_img_player4_tapscorebg","_bitmap_player4_tapscore","_gp_player4_tapscore","_img_player4_qiangmark","headTouch4","_gp_player4_headinfo","_img_player4_cardsdata_1","_img_player4_cardsdata_2","_img_player4_cardsdata_3","_img_player4_cardsdata_4","_img_player4_cardsdata_5","_img_player4_cardstypebg","_img_player4_cardstype","_bitmap_player4_niurank","_gp_player4_cardstype","_gp_player4_cardsdata","_txt_player4_message","_gp_player4_message","_gp_player4","_img_player5_head","_txt_player5_name","_img_player5_offline","_img_player5_yuyinMark","_txt_player5_score","_img_player5_kuang","_img_player5_zhuang","_img_player5_rankbg","_txt_player5_rankvalue","_gp_player5_rank","_img_player5_tapscorebg","_bitmap_player5_tapscore","_gp_player5_tapscore","_img_player5_qiangmark","headTouch5","_gp_player5_headinfo","_img_player5_cardsdata_1","_img_player5_cardsdata_2","_img_player5_cardsdata_3","_img_player5_cardsdata_4","_img_player5_cardsdata_5","_img_player5_cardstypebg","_img_player5_cardstype","_bitmap_player5_niurank","_gp_player5_cardstype","_gp_player5_cardsdata","_txt_player5_message","_gp_player5_message","_gp_player5","_img_player6_cardsdata_1","_img_player6_cardsdata_2","_img_player6_cardsdata_3","_img_player6_cardsdata_4","_img_player6_cardsdata_5","_img_player6_cardstypebg","_img_player6_cardstype","_bitmap_player6_niurank","_gp_player6_cardstype","_gp_player6_cardsdata","_img_player6_head","_txt_player6_name","_img_player6_offline","_img_player6_yuyinMark","_txt_player6_score","_img_player6_kuang","_img_player6_zhuang","_img_player6_rankbg","_txt_player6_rankvalue","_gp_player6_rank","_img_player6_tapscorebg","_bitmap_player6_tapscore","_gp_player6_tapscore","_img_player6_qiangmark","headTouch6","_gp_player6_headinfo","_txt_player6_message","_gp_player6_message","_gp_player6","_img_clickbg","_bitmap_clickvalue","_gp_showstate_click","_txt_showstate_tag","_gp_showstate_tap","_btn_showstate_start","_btn_showstate_sitdown","_gp_showstate","_btn_voice","locBtn","_btn_chat","luyingNotice","lyNoticeGroup","_gp_voicemsg","_img_sit1","_img_sit2","_img_sit3","_img_sit4","_img_sit5","_img_sit6","_btn_menu","_btn_message","havePeopleComing","_gp_menu","bg0","contentText","contentText0","roomlifeUI"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._Group1_i(),this._gp_rulebg_i(),this._gp_player1_i(),this._gp_player2_i(),this._gp_player3_i(),this._gp_player4_i(),this._gp_player5_i(),this._gp_player6_i(),this._gp_showstate_i(),this._gp_voicemsg_i(),this._img_sit1_i(),this._img_sit2_i(),this._img_sit3_i(),this._img_sit4_i(),this._img_sit5_i(),this._img_sit6_i(),this._gp_menu_i(),this.roomlifeUI_i()];
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
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nnbg_png";
		t.width = 1360;
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
		t.skinName = NiuniuSkins$Skin445;
		return t;
	};
	_proto._btn_qiang_notsure_i = function () {
		var t = new eui.Button();
		this._btn_qiang_notsure = t;
		t.horizontalCenter = 83;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin446;
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
		t.skinName = NiuniuSkins$Skin447;
		return t;
	};
	_proto._btn_rank_2_i = function () {
		var t = new eui.Button();
		this._btn_rank_2 = t;
		t.horizontalCenter = -4.164999999999992;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin448;
		return t;
	};
	_proto._btn_rank_3_i = function () {
		var t = new eui.Button();
		this._btn_rank_3 = t;
		t.horizontalCenter = 125.83500000000001;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin449;
		return t;
	};
	_proto._gp_rankbtn5_i = function () {
		var t = new eui.Group();
		this._gp_rankbtn5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.visible = false;
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
		t.skinName = NiuniuSkins$Skin450;
		return t;
	};
	_proto._btn_rank_5_i = function () {
		var t = new eui.Button();
		this._btn_rank_5 = t;
		t.horizontalCenter = -126.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin451;
		return t;
	};
	_proto._btn_rank_6_i = function () {
		var t = new eui.Button();
		this._btn_rank_6 = t;
		t.horizontalCenter = 3.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin452;
		return t;
	};
	_proto._btn_rank_7_i = function () {
		var t = new eui.Button();
		this._btn_rank_7 = t;
		t.horizontalCenter = 133.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin453;
		return t;
	};
	_proto._btn_rank_8_i = function () {
		var t = new eui.Button();
		this._btn_rank_8 = t;
		t.horizontalCenter = 263.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin454;
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
		t.skinName = NiuniuSkins$Skin455;
		return t;
	};
	_proto._btn_rank_10_i = function () {
		var t = new eui.Button();
		this._btn_rank_10 = t;
		t.horizontalCenter = -126.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin456;
		return t;
	};
	_proto._btn_rank_11_i = function () {
		var t = new eui.Button();
		this._btn_rank_11 = t;
		t.horizontalCenter = 3.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin457;
		return t;
	};
	_proto._btn_rank_12_i = function () {
		var t = new eui.Button();
		this._btn_rank_12 = t;
		t.horizontalCenter = 133.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NiuniuSkins$Skin458;
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
		t.skinName = NiuniuSkins$Skin459;
		return t;
	};
	_proto._btn_showcard_i = function () {
		var t = new eui.Button();
		this._btn_showcard = t;
		t.horizontalCenter = 0.8349999999999937;
		t.label = "";
		t.verticalCenter = 36.33;
		t.skinName = NiuniuSkins$Skin460;
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
		t.skinName = NiuniuSkins$Skin461;
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
		t.skinName = NiuniuSkins$Skin462;
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
		t.height = 71;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 15.5;
		t.width = 71;
		t.skinName = NiuniuSkins$Skin463;
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = -64.5;
		t.visible = false;
		t.skinName = NiuniuSkins$Skin464;
		return t;
	};
	_proto._btn_chat_i = function () {
		var t = new eui.Button();
		this._btn_chat = t;
		t.height = 71;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 95.5;
		t.width = 71;
		t.skinName = NiuniuSkins$Skin465;
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
		t.x = 512;
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
		t.height = 100;
		t.width = 200;
		t.x = 0;
		t.y = -12;
		t.elementsContent = [this._btn_menu_i(),this._btn_message_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto._btn_menu_i = function () {
		var t = new eui.Button();
		this._btn_menu = t;
		t.height = 71;
		t.horizontalCenter = -43.5;
		t.label = "";
		t.verticalCenter = 12.5;
		t.width = 71;
		t.skinName = NiuniuSkins$Skin466;
		return t;
	};
	_proto._btn_message_i = function () {
		var t = new eui.Button();
		this._btn_message = t;
		t.horizontalCenter = 49.5;
		t.label = "";
		t.verticalCenter = 12.5;
		t.visible = false;
		t.skinName = NiuniuSkins$Skin467;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.height = 17;
		t.source = "niuniu_2_json.nn_redpoint";
		t.visible = false;
		t.width = 15;
		t.x = 163;
		t.y = 77;
		return t;
	};
	_proto.roomlifeUI_i = function () {
		var t = new eui.Group();
		this.roomlifeUI = t;
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
	return NiuniuSkins;
})(eui.Skin);