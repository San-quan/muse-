
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/fiveCardStud/suoha_Recorditem.exml'] = window.suoha_Recorditem = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/fiveCardStud/suoha_TotalResItem.exml'] = window.suoha_TotalResItem = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/fiveCardStud/suoha_totalResult.exml'] = window.suoha_totalResult = (function (_super) {
	__extends(suoha_totalResult, _super);
	var suoha_totalResult$Skin139 = 	(function (_super) {
		__extends(suoha_totalResult$Skin139, _super);
		function suoha_totalResult$Skin139() {
			_super.call(this);
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
		var _proto = suoha_totalResult$Skin139.prototype;

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
		return suoha_totalResult$Skin139;
	})(eui.Skin);

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
		return suoha_totalResult$Skin142;
	})(eui.Skin);

	var suoha_totalResult$Skin143 = 	(function (_super) {
		__extends(suoha_totalResult$Skin143, _super);
		function suoha_totalResult$Skin143() {
			_super.call(this);
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
		var _proto = suoha_totalResult$Skin143.prototype;

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
		return suoha_totalResult$Skin143;
	})(eui.Skin);

	var suoha_totalResult$Skin144 = 	(function (_super) {
		__extends(suoha_totalResult$Skin144, _super);
		function suoha_totalResult$Skin144() {
			_super.call(this);
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
		var _proto = suoha_totalResult$Skin144.prototype;

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
		return suoha_totalResult$Skin144;
	})(eui.Skin);

	var suoha_totalResult$Skin145 = 	(function (_super) {
		__extends(suoha_totalResult$Skin145, _super);
		function suoha_totalResult$Skin145() {
			_super.call(this);
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
		var _proto = suoha_totalResult$Skin145.prototype;

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
		return suoha_totalResult$Skin145;
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
		t.skinName = suoha_totalResult$Skin139;
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
		t.skinName = suoha_totalResult$Skin140;
		return t;
	};
	_proto.playAgain_i = function () {
		var t = new eui.Button();
		this.playAgain = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = suoha_totalResult$Skin141;
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
		t.skinName = suoha_totalResult$Skin142;
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
		t.skinName = suoha_totalResult$Skin143;
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
		t.skinName = suoha_totalResult$Skin144;
		return t;
	};
	_proto._btn_record_huifang_i = function () {
		var t = new eui.Button();
		this._btn_record_huifang = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 384.26;
		t.skinName = suoha_totalResult$Skin145;
		return t;
	};
	return suoha_totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/fiveCardStud/suohaIndex.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
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
		return NewFile$Skin147;
	})(eui.Skin);

	var NewFile$Skin148 = 	(function (_super) {
		__extends(NewFile$Skin148, _super);
		function NewFile$Skin148() {
			_super.call(this);
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
		var _proto = NewFile$Skin148.prototype;

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
		return NewFile$Skin148;
	})(eui.Skin);

	var NewFile$Skin149 = 	(function (_super) {
		__extends(NewFile$Skin149, _super);
		function NewFile$Skin149() {
			_super.call(this);
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
		var _proto = NewFile$Skin149.prototype;

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
		return NewFile$Skin149;
	})(eui.Skin);

	var NewFile$Skin150 = 	(function (_super) {
		__extends(NewFile$Skin150, _super);
		function NewFile$Skin150() {
			_super.call(this);
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
		var _proto = NewFile$Skin150.prototype;

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
		return NewFile$Skin151;
	})(eui.Skin);

	var NewFile$Skin152 = 	(function (_super) {
		__extends(NewFile$Skin152, _super);
		function NewFile$Skin152() {
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
		var _proto = NewFile$Skin152.prototype;

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
		return NewFile$Skin152;
	})(eui.Skin);

	var NewFile$Skin153 = 	(function (_super) {
		__extends(NewFile$Skin153, _super);
		function NewFile$Skin153() {
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
		var _proto = NewFile$Skin153.prototype;

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
		return NewFile$Skin153;
	})(eui.Skin);

	var NewFile$Skin154 = 	(function (_super) {
		__extends(NewFile$Skin154, _super);
		function NewFile$Skin154() {
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
		var _proto = NewFile$Skin154.prototype;

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
					])
			];
		}
		var _proto = NewFile$Skin156.prototype;

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
		return NewFile$Skin156;
	})(eui.Skin);

	var NewFile$Skin157 = 	(function (_super) {
		__extends(NewFile$Skin157, _super);
		function NewFile$Skin157() {
			_super.call(this);
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
		var _proto = NewFile$Skin157.prototype;

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
		return NewFile$Skin157;
	})(eui.Skin);

	var NewFile$Skin158 = 	(function (_super) {
		__extends(NewFile$Skin158, _super);
		function NewFile$Skin158() {
			_super.call(this);
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
		var _proto = NewFile$Skin158.prototype;

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
		return NewFile$Skin158;
	})(eui.Skin);

	var NewFile$Skin159 = 	(function (_super) {
		__extends(NewFile$Skin159, _super);
		function NewFile$Skin159() {
			_super.call(this);
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
		var _proto = NewFile$Skin159.prototype;

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
		return NewFile$Skin159;
	})(eui.Skin);

	var NewFile$Skin160 = 	(function (_super) {
		__extends(NewFile$Skin160, _super);
		function NewFile$Skin160() {
			_super.call(this);
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
		var _proto = NewFile$Skin160.prototype;

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
		return NewFile$Skin160;
	})(eui.Skin);

	var NewFile$Skin161 = 	(function (_super) {
		__extends(NewFile$Skin161, _super);
		function NewFile$Skin161() {
			_super.call(this);
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
		var _proto = NewFile$Skin161.prototype;

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
		return NewFile$Skin161;
	})(eui.Skin);

	var NewFile$Skin162 = 	(function (_super) {
		__extends(NewFile$Skin162, _super);
		function NewFile$Skin162() {
			_super.call(this);
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
		var _proto = NewFile$Skin162.prototype;

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
		return NewFile$Skin162;
	})(eui.Skin);

	function NewFile() {
		_super.call(this);
		this.skinParts = ["_img_gamebg","_rule_pwd","_rule_payMode","_rule_zhongtu","_rule_suohafen","_txt_xianzhi","_gp_rulebg","totalPoint2","totalPoint","dir0","dir5","dir4","dir3","dir2","dir1","daojishi","dirGroup","cards_0_0","cards_0_1","cards_0_2","cards_0_3","cards_0_4","cardsGroup0","whoTalk","whoTalkGroup","playerBtn","havePeopleComing","menuBtn","toolGroup","xiaoxiBtn","xxGroup","headBg0","headImg0","yyxiaoxi0","nickname0","score0","offline0","message0","messagebg0","headTouch0","addPoint0","_img_roomowner0","headGroup0","cards_1_0","cards_1_1","cards_1_2","cards_1_3","cards_1_4","cardsGroup1","headBg1","headImg1","yyxiaoxi1","nickname1","score1","offline1","message1","messagebg1","headTouch1","addPoint1","_img_roomowner1","headGroup1","cards_3_0","cards_3_1","cards_3_2","cards_3_3","cards_3_4","cardsGroup3","headBg3","headImg3","yyxiaoxi3","nickname3","score3","offline3","message3","messagebg3","headTouch3","addPoint3","_img_roomowner3","headGroup3","cards_2_0","cards_2_1","cards_2_2","cards_2_3","cards_2_4","cardsGroup2","headBg2","headImg2","yyxiaoxi2","nickname2","score2","offline2","message2","messagebg2","headTouch2","addPoint2","_img_roomowner2","headGroup2","cards_4_0","cards_4_1","cards_4_2","cards_4_3","cards_4_4","cardsGroup4","headBg4","headImg4","yyxiaoxi4","nickname4","score4","offline4","message4","messagebg4","headTouch4","addPoint4","_img_roomowner4","headGroup4","cards_5_0","cards_5_1","cards_5_2","cards_5_3","cards_5_4","cardsGroup5","headBg5","headImg5","yyxiaoxi5","nickname5","score5","offline5","message5","messagebg5","headTouch5","addPoint5","_img_roomowner5","headGroup5","xiazhu_action1_btn","xiazhu_action1_group","xiazhu_action2_btn","xiazhu_action2_group","xiazhu_action_group","xiazhu_fen0_Btn","xiazhu_fen0_group","xiazhu_fen1_Btn","xiazhu_fen1_group","xiazhu_fen2_Btn","xiazhu_fen2_group","xiazhu_fen3_Btn","xiazhu_fen3_group","xiazhu_fen4_Btn","xiazhu_fen4_group","xiazhu_action0_btn","xiazhu_action0_group","xiazhu_fen_group","voiceplay","luyingNotice","lyNoticeGroup","yyGroup","locGroup","startBtn","startBtnGroup","_rule_playCount","backHallBtn","_btn_wanfa","_btn_quit","menu","locBtn","menulist"];
		
		this.height = 640;
		this.width = 1080;
		this.elementsContent = [this._img_gamebg_i(),this._gp_rulebg_i(),this.dirGroup_i(),this.cardsGroup0_i(),this.whoTalkGroup_i(),this.toolGroup_i(),this.xxGroup_i(),this.headGroup0_i(),this.headGroup1_i(),this.headGroup3_i(),this.headGroup2_i(),this.headGroup4_i(),this.headGroup5_i(),this.xiazhu_action_group_i(),this.xiazhu_fen_group_i(),this.yyGroup_i(),this.locGroup_i(),this.startBtnGroup_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._rule_playCount_i(),this.backHallBtn_i(),this.menulist_i()];
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
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 155;
		t.x = 6;
		t.y = 5;
		t.elementsContent = [this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 83.34;
		t.elementsContent = [this.playerBtn_i(),this.havePeopleComing_i()];
		return t;
	};
	_proto.playerBtn_i = function () {
		var t = new eui.Button();
		this.playerBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin146;
		return t;
	};
	_proto.havePeopleComing_i = function () {
		var t = new eui.Image();
		this.havePeopleComing = t;
		t.scaleY = 0.9;
		t.source = "common_image_game_json.public_redpoint";
		t.x = 51.62;
		t.y = 5.52;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 71;
		t.verticalCenter = 0;
		t.width = 71;
		t.x = 0;
		t.elementsContent = [this.menuBtn_i()];
		return t;
	};
	_proto.menuBtn_i = function () {
		var t = new eui.Button();
		this.menuBtn = t;
		t.height = 71;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 71;
		t.y = 0;
		t.skinName = NewFile$Skin147;
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
		t.height = 106;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.width = 106;
		t.skinName = NewFile$Skin148;
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
		t.skinName = NewFile$Skin149;
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
		t.skinName = NewFile$Skin150;
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
		t.skinName = NewFile$Skin151;
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
		t.skinName = NewFile$Skin152;
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
		t.skinName = NewFile$Skin153;
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
		t.skinName = NewFile$Skin154;
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
		t.skinName = NewFile$Skin155;
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
		t.skinName = NewFile$Skin156;
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
		t.height = 106;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.width = 106;
		t.skinName = NewFile$Skin157;
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
		t.visible = false;
		t.width = 71;
		t.x = 1001.6;
		t.y = 416;
		t.elementsContent = [this._Button1_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin158;
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
	_proto._rule_playCount_i = function () {
		var t = new eui.Label();
		this._rule_playCount = t;
		t.size = 23;
		t.text = "局数3/30";
		t.textColor = 0xf9c159;
		t.x = 980;
		t.y = 6.34;
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
	_proto.menulist_i = function () {
		var t = new eui.Group();
		this.menulist = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.visible = false;
		t.width = 153;
		t.x = 927;
		t.y = 60;
		t.elementsContent = [this._Image16_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.scale9Grid = new egret.Rectangle(11,11,32,32);
		t.source = "cgImage_json.menulistBg";
		t.width = 153;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 15;
		t.elementsContent = [this._btn_wanfa_i()];
		return t;
	};
	_proto._btn_wanfa_i = function () {
		var t = new eui.Button();
		this._btn_wanfa = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin159;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 67;
		t.elementsContent = [this._btn_quit_i()];
		return t;
	};
	_proto._btn_quit_i = function () {
		var t = new eui.Button();
		this._btn_quit = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 1.5;
		t.skinName = NewFile$Skin160;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 118;
		t.y = 119;
		t.elementsContent = [this.menu_i()];
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin161;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.visible = false;
		t.width = 65;
		t.elementsContent = [this.locBtn_i()];
		return t;
	};
	_proto.locBtn_i = function () {
		var t = new eui.Button();
		this.locBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = NewFile$Skin162;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hangzhouMJ/wanfa_hzmj.exml'] = window.wanfa_hzmj = (function (_super) {
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
})(eui.Skin);