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
generateEUI.skins = {}
generateEUI.paths['resource/eui_skins/applyAgent.exml'] = window.applyAgent = (function (_super) {
	__extends(applyAgent, _super);
	var applyAgent$Skin1 = 	(function (_super) {
		__extends(applyAgent$Skin1, _super);
		function applyAgent$Skin1() {
			_super.call(this);
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
		var _proto = applyAgent$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_zhuce_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return applyAgent$Skin1;
	})(eui.Skin);

	function applyAgent() {
		_super.call(this);
		this.skinParts = ["realname","phone","weixin","passward","confirePD","invitecode","zhuceBtn","adminWeb","username"];
		
		this.height = 750;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = applyAgent.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 28;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.realname_i(),this.phone_i(),this.weixin_i(),this.passward_i(),this.confirePD_i(),this.invitecode_i(),this._Image3_i(),this._Group1_i(),this.adminWeb_i(),this.username_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 700;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(6,6,42,41);
		t.source = "chuniu_hall_new_json.hall_agent_bg";
		t.verticalCenter = 0;
		t.width = 550;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hall_apply_agent_bg_png";
		t.verticalCenter = -7.5;
		return t;
	};
	_proto.realname_i = function () {
		var t = new eui.EditableText();
		this.realname = t;
		t.height = 25;
		t.prompt = "请输入真实姓名";
		t.promptColor = 0xFFFFFF;
		t.size = 25;
		t.strokeColor = 0xFFFFFF;
		t.text = "";
		t.width = 350;
		t.x = 157;
		t.y = 172;
		return t;
	};
	_proto.phone_i = function () {
		var t = new eui.EditableText();
		this.phone = t;
		t.height = 25;
		t.prompt = "请输入手机号";
		t.promptColor = 0xFFFFFF;
		t.size = 25;
		t.strokeColor = 0xFFFFFF;
		t.text = "";
		t.width = 350;
		t.x = 157;
		t.y = 248;
		return t;
	};
	_proto.weixin_i = function () {
		var t = new eui.EditableText();
		this.weixin = t;
		t.height = 25;
		t.prompt = "请输入微信号";
		t.promptColor = 0xFFFFFF;
		t.size = 25;
		t.strokeColor = 0xFFFFFF;
		t.text = "";
		t.width = 350;
		t.x = 157;
		t.y = 319;
		return t;
	};
	_proto.passward_i = function () {
		var t = new eui.EditableText();
		this.passward = t;
		t.displayAsPassword = true;
		t.height = 25;
		t.prompt = "请输入密码";
		t.promptColor = 0xFFFFFF;
		t.size = 25;
		t.strokeColor = 0xFFFFFF;
		t.text = "";
		t.width = 350;
		t.x = 157;
		t.y = 388;
		return t;
	};
	_proto.confirePD_i = function () {
		var t = new eui.EditableText();
		this.confirePD = t;
		t.displayAsPassword = true;
		t.height = 25;
		t.prompt = "请确认密码";
		t.promptColor = 0xFFFFFF;
		t.size = 25;
		t.strokeColor = 0xFFFFFF;
		t.text = "";
		t.width = 350;
		t.x = 157;
		t.y = 459;
		return t;
	};
	_proto.invitecode_i = function () {
		var t = new eui.EditableText();
		this.invitecode = t;
		t.height = 25;
		t.prompt = "请输入邀请码";
		t.promptColor = 0xFFFFFF;
		t.size = 25;
		t.strokeColor = 0xFFFFFF;
		t.text = "";
		t.width = 350;
		t.x = 157;
		t.y = 531;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "chuniu_hall_new_json.hall_applygent_btn";
		t.y = 18;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 644;
		t.elementsContent = [this.zhuceBtn_i()];
		return t;
	};
	_proto.zhuceBtn_i = function () {
		var t = new eui.Button();
		this.zhuceBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 2.5;
		t.skinName = applyAgent$Skin1;
		return t;
	};
	_proto.adminWeb_i = function () {
		var t = new eui.Label();
		this.adminWeb = t;
		t.size = 25;
		t.text = "已有账号登陆";
		t.x = 375;
		t.y = 644;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.EditableText();
		this.username = t;
		t.height = 25;
		t.prompt = "请输入用户名";
		t.promptColor = 0xffffff;
		t.size = 25;
		t.strokeColor = 0xffffff;
		t.text = "";
		t.verticalAlign = "middle";
		t.width = 350;
		t.x = 157;
		t.y = 102;
		return t;
	};
	return applyAgent;
})(eui.Skin);generateEUI.paths['resource/eui_skins/create.exml'] = window.creaet6n = (function (_super) {
	__extends(creaet6n, _super);
	var creaet6n$Skin2 = 	(function (_super) {
		__extends(creaet6n$Skin2, _super);
		function creaet6n$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin2;
	})(eui.Skin);

	var creaet6n$Skin3 = 	(function (_super) {
		__extends(creaet6n$Skin3, _super);
		function creaet6n$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin3;
	})(eui.Skin);

	var creaet6n$Skin4 = 	(function (_super) {
		__extends(creaet6n$Skin4, _super);
		function creaet6n$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin4;
	})(eui.Skin);

	var creaet6n$Skin5 = 	(function (_super) {
		__extends(creaet6n$Skin5, _super);
		function creaet6n$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin5;
	})(eui.Skin);

	var creaet6n$Skin6 = 	(function (_super) {
		__extends(creaet6n$Skin6, _super);
		function creaet6n$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin6;
	})(eui.Skin);

	var creaet6n$Skin7 = 	(function (_super) {
		__extends(creaet6n$Skin7, _super);
		function creaet6n$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin7;
	})(eui.Skin);

	var creaet6n$Skin8 = 	(function (_super) {
		__extends(creaet6n$Skin8, _super);
		function creaet6n$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin8;
	})(eui.Skin);

	var creaet6n$Skin9 = 	(function (_super) {
		__extends(creaet6n$Skin9, _super);
		function creaet6n$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin9;
	})(eui.Skin);

	var creaet6n$Skin10 = 	(function (_super) {
		__extends(creaet6n$Skin10, _super);
		function creaet6n$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin10;
	})(eui.Skin);

	var creaet6n$Skin11 = 	(function (_super) {
		__extends(creaet6n$Skin11, _super);
		function creaet6n$Skin11() {
			_super.call(this);
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
		var _proto = creaet6n$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "startCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return creaet6n$Skin11;
	})(eui.Skin);

	var creaet6n$Skin12 = 	(function (_super) {
		__extends(creaet6n$Skin12, _super);
		function creaet6n$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin12;
	})(eui.Skin);

	var creaet6n$Skin13 = 	(function (_super) {
		__extends(creaet6n$Skin13, _super);
		function creaet6n$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chuiniuDanxuandian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dianCreate";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 23;
			t.textColor = 0x697699;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		return creaet6n$Skin13;
	})(eui.Skin);

	var creaet6n$Skin14 = 	(function (_super) {
		__extends(creaet6n$Skin14, _super);
		function creaet6n$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gouCreate")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = creaet6n$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuiniuFuxuan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return creaet6n$Skin14;
	})(eui.Skin);

	function creaet6n() {
		_super.call(this);
		this.skinParts = ["m_menban","gameType0","gameTitle0","gtGroup0","gameType1","gameTitle1","gtGroup1","gameType2","gameTitle2","gtGroup2","gameType3","gameTitle3","gtGroup3","m_jushu2","m_jushu3","m_jushu1","m_jushu","m_fengding3","m_fengding1","m_fengding2","m_wanfa","m_renshu2","m_renshu0","m_renshu1","m_renshu","m_create","m_fufei1","m_fufei2","m_fufei","m_allinstart","m_showtip","m_mianban"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.m_menban_i(),this.m_mianban_i()];
	}
	var _proto = creaet6n.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_mianban_i = function () {
		var t = new eui.Group();
		this.m_mianban = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.m_jushu_i(),this.m_wanfa_i(),this.m_renshu_i(),this.m_create_i(),this.m_fufei_i(),this.m_allinstart_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "createBg1";
		t.y = -3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "createBg2";
		t.x = 41.71;
		t.y = 185.58;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 63.5;
		t.y = 142.43;
		t.elementsContent = [this.gtGroup0_i(),this.gtGroup1_i(),this.gtGroup2_i(),this.gtGroup3_i()];
		return t;
	};
	_proto.gtGroup0_i = function () {
		var t = new eui.Group();
		this.gtGroup0 = t;
		t.x = -7;
		t.y = 0;
		t.elementsContent = [this.gameType0_i(),this.gameTitle0_i()];
		return t;
	};
	_proto.gameType0_i = function () {
		var t = new eui.Image();
		this.gameType0 = t;
		t.source = "btnCreateYellow";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameTitle0_i = function () {
		var t = new eui.Image();
		this.gameTitle0 = t;
		t.horizontalCenter = 0;
		t.source = "bzCTY";
		t.y = 12;
		return t;
	};
	_proto.gtGroup1_i = function () {
		var t = new eui.Group();
		this.gtGroup1 = t;
		t.x = 100;
		t.y = 0;
		t.elementsContent = [this.gameType1_i(),this.gameTitle1_i()];
		return t;
	};
	_proto.gameType1_i = function () {
		var t = new eui.Image();
		this.gameType1 = t;
		t.source = "btnCreateBlue";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameTitle1_i = function () {
		var t = new eui.Image();
		this.gameTitle1 = t;
		t.horizontalCenter = 0;
		t.source = "shCTB";
		t.y = 12;
		return t;
	};
	_proto.gtGroup2_i = function () {
		var t = new eui.Group();
		this.gtGroup2 = t;
		t.x = 207;
		t.y = 0;
		t.elementsContent = [this.gameType2_i(),this.gameTitle2_i()];
		return t;
	};
	_proto.gameType2_i = function () {
		var t = new eui.Image();
		this.gameType2 = t;
		t.source = "btnCreateBlue";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameTitle2_i = function () {
		var t = new eui.Image();
		this.gameTitle2 = t;
		t.horizontalCenter = 0;
		t.source = "nnCTB";
		t.y = 12;
		return t;
	};
	_proto.gtGroup3_i = function () {
		var t = new eui.Group();
		this.gtGroup3 = t;
		t.x = 314;
		t.y = 0;
		t.elementsContent = [this.gameType3_i(),this.gameTitle3_i()];
		return t;
	};
	_proto.gameType3_i = function () {
		var t = new eui.Image();
		this.gameType3 = t;
		t.source = "btnCreateBlue";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameTitle3_i = function () {
		var t = new eui.Image();
		this.gameTitle3 = t;
		t.horizontalCenter = 0;
		t.source = "hhCTB";
		t.y = 12;
		return t;
	};
	_proto.m_jushu_i = function () {
		var t = new eui.Group();
		this.m_jushu = t;
		t.anchorOffsetY = 0;
		t.x = 156;
		t.y = 260.07;
		t.elementsContent = [this.m_jushu2_i(),this.m_jushu3_i(),this.m_jushu1_i()];
		return t;
	};
	_proto.m_jushu2_i = function () {
		var t = new eui.RadioButton();
		this.m_jushu2 = t;
		t.groupName = "m_jushu";
		t.height = 30;
		t.label = "20局";
		t.value = "20";
		t.width = 30;
		t.x = 109;
		t.y = -2.48;
		t.skinName = creaet6n$Skin2;
		return t;
	};
	_proto.m_jushu3_i = function () {
		var t = new eui.RadioButton();
		this.m_jushu3 = t;
		t.groupName = "m_jushu";
		t.height = 30;
		t.label = "30局";
		t.value = "30";
		t.width = 30;
		t.x = 217;
		t.y = -2.48;
		t.skinName = creaet6n$Skin3;
		return t;
	};
	_proto.m_jushu1_i = function () {
		var t = new eui.RadioButton();
		this.m_jushu1 = t;
		t.enabled = true;
		t.groupName = "m_jushu";
		t.height = 30;
		t.label = "10局";
		t.selected = true;
		t.value = "10";
		t.width = 30;
		t.x = 5.5;
		t.y = -2.48;
		t.skinName = creaet6n$Skin4;
		return t;
	};
	_proto.m_wanfa_i = function () {
		var t = new eui.Group();
		this.m_wanfa = t;
		t.x = 156;
		t.y = 330.3;
		t.elementsContent = [this.m_fengding3_i(),this.m_fengding1_i(),this.m_fengding2_i()];
		return t;
	};
	_proto.m_fengding3_i = function () {
		var t = new eui.RadioButton();
		this.m_fengding3 = t;
		t.groupName = "m_wanfa";
		t.height = 30;
		t.label = "100倍";
		t.value = "100";
		t.visible = false;
		t.width = 30;
		t.x = 217;
		t.y = 0;
		t.skinName = creaet6n$Skin5;
		return t;
	};
	_proto.m_fengding1_i = function () {
		var t = new eui.RadioButton();
		this.m_fengding1 = t;
		t.groupName = "m_wanfa";
		t.height = 30;
		t.label = "1倍";
		t.selected = true;
		t.value = "1";
		t.width = 30;
		t.x = 5.5;
		t.y = 0;
		t.skinName = creaet6n$Skin6;
		return t;
	};
	_proto.m_fengding2_i = function () {
		var t = new eui.RadioButton();
		this.m_fengding2 = t;
		t.groupName = "m_wanfa";
		t.height = 30;
		t.label = "10倍";
		t.value = "10";
		t.visible = false;
		t.width = 30;
		t.x = 109;
		t.y = 0;
		t.skinName = creaet6n$Skin7;
		return t;
	};
	_proto.m_renshu_i = function () {
		var t = new eui.Group();
		this.m_renshu = t;
		t.x = 156;
		t.y = 397.84;
		t.elementsContent = [this.m_renshu2_i(),this.m_renshu0_i(),this.m_renshu1_i()];
		return t;
	};
	_proto.m_renshu2_i = function () {
		var t = new eui.RadioButton();
		this.m_renshu2 = t;
		t.groupName = "m_renshu";
		t.height = 30;
		t.label = "6人";
		t.selected = true;
		t.value = "6";
		t.width = 30;
		t.x = 109;
		t.y = 0;
		t.skinName = creaet6n$Skin8;
		return t;
	};
	_proto.m_renshu0_i = function () {
		var t = new eui.RadioButton();
		this.m_renshu0 = t;
		t.groupName = "m_renshu";
		t.height = 30;
		t.label = "单挑";
		t.selected = false;
		t.value = "2";
		t.width = 30;
		t.x = 5.5;
		t.y = 0;
		t.skinName = creaet6n$Skin9;
		return t;
	};
	_proto.m_renshu1_i = function () {
		var t = new eui.RadioButton();
		this.m_renshu1 = t;
		t.groupName = "m_renshu";
		t.height = 30;
		t.label = "3人";
		t.value = "3";
		t.visible = false;
		t.width = 30;
		t.x = 109;
		t.y = 0;
		t.skinName = creaet6n$Skin10;
		return t;
	};
	_proto.m_create_i = function () {
		var t = new eui.Button();
		this.m_create = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 668.66;
		t.skinName = creaet6n$Skin11;
		return t;
	};
	_proto.m_fufei_i = function () {
		var t = new eui.Group();
		this.m_fufei = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 156;
		t.y = 468.51;
		t.elementsContent = [this.m_fufei1_i(),this.m_fufei2_i()];
		return t;
	};
	_proto.m_fufei1_i = function () {
		var t = new eui.RadioButton();
		this.m_fufei1 = t;
		t.groupName = "m_fufei";
		t.height = 30;
		t.label = "房主付";
		t.selected = false;
		t.value = "1";
		t.width = 30;
		t.x = 109;
		t.y = 0;
		t.skinName = creaet6n$Skin12;
		return t;
	};
	_proto.m_fufei2_i = function () {
		var t = new eui.RadioButton();
		this.m_fufei2 = t;
		t.groupName = "m_fufei";
		t.height = 30;
		t.label = "AA制";
		t.selected = true;
		t.value = "2";
		t.width = 30;
		t.x = 5.5;
		t.y = 0;
		t.skinName = creaet6n$Skin13;
		return t;
	};
	_proto.m_allinstart_i = function () {
		var t = new eui.CheckBox();
		this.m_allinstart = t;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.label = "";
		t.selected = false;
		t.visible = false;
		t.width = 30;
		t.x = 161.5;
		t.y = 515.72;
		t.skinName = creaet6n$Skin14;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 343.24;
		t.x = 153;
		t.y = 551.37;
		t.elementsContent = [this.m_showtip_i()];
		return t;
	};
	_proto.m_showtip_i = function () {
		var t = new eui.Label();
		this.m_showtip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 65.24;
		t.lineSpacing = 10;
		t.size = 22;
		t.text = "开房无消耗，坐下后扣除100钻石，未开局则返还。";
		t.textColor = 0x697699;
		t.width = 331.13;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return creaet6n;
})(eui.Skin);generateEUI.paths['resource/eui_skins/fankui.exml'] = window.fankui = (function (_super) {
	__extends(fankui, _super);
	var fankui$Skin15 = 	(function (_super) {
		__extends(fankui$Skin15, _super);
		function fankui$Skin15() {
			_super.call(this);
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
		var _proto = fankui$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_jijiao_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return fankui$Skin15;
	})(eui.Skin);

	function fankui() {
		_super.call(this);
		this.skinParts = ["comitFankui","playersContent"];
		
		this.height = 750;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = fankui.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this.playersContent_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 520;
		t.scale9Grid = new egret.Rectangle(6,6,42,41);
		t.source = "chuniu_hall_new_json.hall_agent_bg";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hall_fankui_kuang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "chuniu_hall_new_json.hall_fankui_title";
		t.y = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 473.68;
		t.elementsContent = [this.comitFankui_i()];
		return t;
	};
	_proto.comitFankui_i = function () {
		var t = new eui.Button();
		this.comitFankui = t;
		t.anchorOffsetX = 67.5;
		t.anchorOffsetY = 26.5;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = fankui$Skin15;
		return t;
	};
	_proto.playersContent_i = function () {
		var t = new eui.EditableText();
		this.playersContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.prompt = "请输入反馈意见。";
		t.promptColor = 0xffffff;
		t.text = "";
		t.width = 374.24;
		t.x = 145.96;
		t.y = 91;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "*注：您的反馈是我们进步的动力";
		t.verticalAlign = "middle";
		t.x = 137.96;
		t.y = 415.18;
		return t;
	};
	return fankui;
})(eui.Skin);generateEUI.paths['resource/eui_skins/hall.exml'] = window.hall = (function (_super) {
	__extends(hall, _super);
	var hall$Skin16 = 	(function (_super) {
		__extends(hall$Skin16, _super);
		function hall$Skin16() {
			_super.call(this);
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
		var _proto = hall$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hallAdd";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin16;
	})(eui.Skin);

	var hall$Skin17 = 	(function (_super) {
		__extends(hall$Skin17, _super);
		function hall$Skin17() {
			_super.call(this);
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
		var _proto = hall$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_shop_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin17;
	})(eui.Skin);

	var hall$Skin18 = 	(function (_super) {
		__extends(hall$Skin18, _super);
		function hall$Skin18() {
			_super.call(this);
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
		var _proto = hall$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_zhanji_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin18;
	})(eui.Skin);

	var hall$Skin19 = 	(function (_super) {
		__extends(hall$Skin19, _super);
		function hall$Skin19() {
			_super.call(this);
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
		var _proto = hall$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_find_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin19;
	})(eui.Skin);

	var hall$Skin20 = 	(function (_super) {
		__extends(hall$Skin20, _super);
		function hall$Skin20() {
			_super.call(this);
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
		var _proto = hall$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_set_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin20;
	})(eui.Skin);

	var hall$Skin21 = 	(function (_super) {
		__extends(hall$Skin21, _super);
		function hall$Skin21() {
			_super.call(this);
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
		var _proto = hall$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_fankui_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin21;
	})(eui.Skin);

	var hall$Skin22 = 	(function (_super) {
		__extends(hall$Skin22, _super);
		function hall$Skin22() {
			_super.call(this);
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
		var _proto = hall$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_apply_agent_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin22;
	})(eui.Skin);

	var hall$Skin23 = 	(function (_super) {
		__extends(hall$Skin23, _super);
		function hall$Skin23() {
			_super.call(this);
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
		var _proto = hall$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhong";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin23;
	})(eui.Skin);

	var hall$Skin24 = 	(function (_super) {
		__extends(hall$Skin24, _super);
		function hall$Skin24() {
			_super.call(this);
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
		var _proto = hall$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "suohua";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin24;
	})(eui.Skin);

	var hall$Skin25 = 	(function (_super) {
		__extends(hall$Skin25, _super);
		function hall$Skin25() {
			_super.call(this);
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
		var _proto = hall$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin25;
	})(eui.Skin);

	var hall$Skin26 = 	(function (_super) {
		__extends(hall$Skin26, _super);
		function hall$Skin26() {
			_super.call(this);
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
		var _proto = hall$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "honghei";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin26;
	})(eui.Skin);

	var hall$Skin27 = 	(function (_super) {
		__extends(hall$Skin27, _super);
		function hall$Skin27() {
			_super.call(this);
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
		var _proto = hall$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "danji";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin27;
	})(eui.Skin);

	function hall() {
		_super.call(this);
		this.skinParts = ["add","cardsNum","username","ID","head","shop","zhanji","find","set","fankuiBtn","applyBtn","labaBg","laba","juhua","waitConnect","hallshaizhong","biaozhong","suoha","niuniu","honghei","danji","contentGroup"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.cardsNum_i(),this.username_i(),this.ID_i(),this.head_i(),this._Group8_i(),this._Group10_i(),this.waitConnect_i(),this.hallshaizhong_i(),this.contentGroup_i()];
	}
	var _proto = hall.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "hallBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 37;
		t.width = 37;
		t.x = 579.75;
		t.y = 13.51;
		t.elementsContent = [this.add_i()];
		return t;
	};
	_proto.add_i = function () {
		var t = new eui.Button();
		this.add = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin16;
		return t;
	};
	_proto.cardsNum_i = function () {
		var t = new eui.Label();
		this.cardsNum = t;
		t.height = 25;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xf4ee44;
		t.width = 70;
		t.x = 503.94;
		t.y = 19.32;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.width = 150;
		t.x = 93.34;
		t.y = 35.82;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.size = 20;
		t.text = "ID:999999";
		t.textAlign = "center";
		t.textColor = 0xf46811;
		t.x = 115.02;
		t.y = 78.32;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.source = "33";
		t.visible = false;
		t.width = 68;
		t.x = 20.35;
		t.y = 25.78;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 950.16;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 60;
		t.x = 110;
		t.y = 0;
		t.elementsContent = [this.shop_i()];
		return t;
	};
	_proto.shop_i = function () {
		var t = new eui.Button();
		this.shop = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin17;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 60;
		t.x = 220;
		t.y = 0;
		t.elementsContent = [this.zhanji_i()];
		return t;
	};
	_proto.zhanji_i = function () {
		var t = new eui.Button();
		this.zhanji = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin18;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 60;
		t.x = 330;
		t.y = 0;
		t.elementsContent = [this.find_i()];
		return t;
	};
	_proto.find_i = function () {
		var t = new eui.Button();
		this.find = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin19;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.set_i()];
		return t;
	};
	_proto.set_i = function () {
		var t = new eui.Button();
		this.set = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin20;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 60;
		t.x = 440;
		t.y = 0;
		t.elementsContent = [this.fankuiBtn_i()];
		return t;
	};
	_proto.fankuiBtn_i = function () {
		var t = new eui.Button();
		this.fankuiBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin21;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 60;
		t.x = 550;
		t.y = 0;
		t.elementsContent = [this.applyBtn_i()];
		return t;
	};
	_proto.applyBtn_i = function () {
		var t = new eui.Button();
		this.applyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin22;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 26;
		t.y = 151.61;
		t.elementsContent = [this.labaBg_i(),this._Scroller1_i()];
		return t;
	};
	_proto.labaBg_i = function () {
		var t = new eui.Image();
		this.labaBg = t;
		t.horizontalCenter = 0;
		t.source = "laba";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 35;
		t.horizontalCenter = 21;
		t.verticalCenter = 0;
		t.width = 540;
		t.viewport = this._Group9_i();
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.laba_i()];
		return t;
	};
	_proto.laba_i = function () {
		var t = new eui.Label();
		this.laba = t;
		t.size = 22;
		t.text = "本游戏纯属娱乐，禁止赌博！！！";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.juhua_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "hallBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.hallshaizhong_i = function () {
		var t = new eui.Image();
		this.hallshaizhong = t;
		t.anchorOffsetX = 40.67;
		t.anchorOffsetY = 60.67;
		t.source = "hallShaizhong_tex_png";
		t.visible = false;
		t.x = 121.03;
		t.y = 791.84;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.height = 750;
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 190;
		t.elementsContent = [this._Group16_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 247.45000000000002;
		t.y = 58.80000000000004;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 380;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.biaozhong_i()];
		return t;
	};
	_proto.biaozhong_i = function () {
		var t = new eui.Button();
		this.biaozhong = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin23;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 380;
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this.suoha_i()];
		return t;
	};
	_proto.suoha_i = function () {
		var t = new eui.Button();
		this.suoha = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin24;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 380;
		t.x = 0;
		t.y = 280;
		t.elementsContent = [this.niuniu_i()];
		return t;
	};
	_proto.niuniu_i = function () {
		var t = new eui.Button();
		this.niuniu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin25;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 380;
		t.x = 0;
		t.y = 420;
		t.elementsContent = [this.honghei_i()];
		return t;
	};
	_proto.honghei_i = function () {
		var t = new eui.Button();
		this.honghei = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin26;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.right = 18;
		t.width = 240;
		t.y = 560;
		t.elementsContent = [this.danji_i()];
		return t;
	};
	_proto.danji_i = function () {
		var t = new eui.Button();
		this.danji = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = hall$Skin27;
		return t;
	};
	return hall;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HallFuncFight.exml'] = window.skins.HallFuncFight = (function (_super) {
	__extends(HallFuncFight, _super);
	var HallFuncFight$Skin28 = 	(function (_super) {
		__extends(HallFuncFight$Skin28, _super);
		function HallFuncFight$Skin28() {
			_super.call(this);
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
		var _proto = HallFuncFight$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanjiDetail";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallFuncFight$Skin28;
	})(eui.Skin);

	var HallFuncFight$Skin29 = 	(function (_super) {
		__extends(HallFuncFight$Skin29, _super);
		function HallFuncFight$Skin29() {
			_super.call(this);
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
		var _proto = HallFuncFight$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanjiDetail";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallFuncFight$Skin29;
	})(eui.Skin);

	function HallFuncFight() {
		_super.call(this);
		this.skinParts = ["m_menban","m_tips","m_bg0","m_roomid0","m_gametime0","m_score0","m_bg1","m_roomid1","m_gametime1","m_score1","m_scoll","m_chuangkou","m_mianban"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.m_menban_i(),this.m_mianban_i()];
	}
	var _proto = HallFuncFight.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_mianban_i = function () {
		var t = new eui.Group();
		this.m_mianban = t;
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.m_chuangkou_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(0,159,519,32);
		t.source = "zhanjiBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_chuangkou_i = function () {
		var t = new eui.Scroller();
		this.m_chuangkou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 570.15;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 430.31;
		t.x = 52.45;
		t.y = 125.59;
		t.viewport = this.m_scoll_i();
		return t;
	};
	_proto.m_scoll_i = function () {
		var t = new eui.Group();
		this.m_scoll = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = 15.15;
		t.elementsContent = [this.m_tips_i(),this._Group2_i(),this._Group4_i()];
		return t;
	};
	_proto.m_tips_i = function () {
		var t = new eui.Image();
		this.m_tips = t;
		t.horizontalCenter = 0;
		t.source = "zhanjiempty";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -0.15500000000000114;
		t.visible = false;
		t.y = 9;
		t.elementsContent = [this.m_bg0_i(),this.m_roomid0_i(),this.m_gametime0_i(),this.m_score0_i(),this._Label1_i(),this._Label2_i(),this._Group1_i()];
		return t;
	};
	_proto.m_bg0_i = function () {
		var t = new eui.Image();
		this.m_bg0 = t;
		t.source = "findAndFight_json.zafhh";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_roomid0_i = function () {
		var t = new eui.Label();
		this.m_roomid0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "999999";
		t.textColor = 0xFCDE6C;
		t.x = 158.5;
		t.y = 17;
		return t;
	};
	_proto.m_gametime0_i = function () {
		var t = new eui.Label();
		this.m_gametime0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "2018-02-02 23:59:59";
		t.textColor = 0xFCDE6C;
		t.x = 109;
		t.y = 44.5;
		return t;
	};
	_proto.m_score0_i = function () {
		var t = new eui.Label();
		this.m_score0 = t;
		t.anchorOffsetY = 0;
		t.borderColor = 0x000000;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "99999";
		t.textColor = 0xFCDE6C;
		t.x = 249.5;
		t.y = 17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "房间号：";
		t.textColor = 0xFCDE6C;
		t.x = 109;
		t.y = 17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "积分：";
		t.textColor = 0xFCDE6C;
		t.x = 215;
		t.y = 17;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 344;
		t.y = 25;
		t.elementsContent = [this._Button1_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = HallFuncFight$Skin28;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -0.15500000000000114;
		t.visible = false;
		t.y = 82;
		t.elementsContent = [this.m_bg1_i(),this.m_roomid1_i(),this.m_gametime1_i(),this.m_score1_i(),this._Label3_i(),this._Label4_i(),this._Group3_i()];
		return t;
	};
	_proto.m_bg1_i = function () {
		var t = new eui.Image();
		this.m_bg1 = t;
		t.source = "findAndFight_json.zafhh";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_roomid1_i = function () {
		var t = new eui.Label();
		this.m_roomid1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "999999";
		t.textColor = 0xFCDE6C;
		t.x = 158.5;
		t.y = 17;
		return t;
	};
	_proto.m_gametime1_i = function () {
		var t = new eui.Label();
		this.m_gametime1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "2018-02-02 23:59:59";
		t.textColor = 0xFCDE6C;
		t.x = 109;
		t.y = 44.5;
		return t;
	};
	_proto.m_score1_i = function () {
		var t = new eui.Label();
		this.m_score1 = t;
		t.anchorOffsetY = 0;
		t.borderColor = 0x000000;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "99999";
		t.textColor = 0xFCDE6C;
		t.x = 249.5;
		t.y = 17;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "房间号：";
		t.textColor = 0xFCDE6C;
		t.x = 109;
		t.y = 17;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "积分：";
		t.textColor = 0xFCDE6C;
		t.x = 215;
		t.y = 17;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 344;
		t.y = 25;
		t.elementsContent = [this._Button2_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = HallFuncFight$Skin29;
		return t;
	};
	return HallFuncFight;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HallFuncFind.exml'] = window.skins.HallFuncFind = (function (_super) {
	__extends(HallFuncFind, _super);
	function HallFuncFind() {
		_super.call(this);
		this.skinParts = ["m_menban","m_tips","m_scoll","m_chuangkou","m_mianban"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.m_menban_i(),this.m_mianban_i()];
	}
	var _proto = HallFuncFind.prototype;

	_proto.m_menban_i = function () {
		var t = new eui.Image();
		this.m_menban = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_mianban_i = function () {
		var t = new eui.Group();
		this.m_mianban = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.m_chuangkou_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,159,519,32);
		t.source = "faxianBg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.m_chuangkou_i = function () {
		var t = new eui.Scroller();
		this.m_chuangkou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 570;
		t.horizontalCenter = 10;
		t.rotation = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 435;
		t.y = 124.13;
		t.viewport = this.m_scoll_i();
		return t;
	};
	_proto.m_scoll_i = function () {
		var t = new eui.Group();
		this.m_scoll = t;
		t.height = 450;
		t.width = 355;
		t.x = 19;
		t.y = -376;
		t.elementsContent = [this.m_tips_i()];
		return t;
	};
	_proto.m_tips_i = function () {
		var t = new eui.Image();
		this.m_tips = t;
		t.horizontalCenter = 0;
		t.source = "faxianempty";
		t.verticalCenter = 0;
		return t;
	};
	return HallFuncFind;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HallFuncItemfight.exml'] = window.skins.HallFuncItemfight = (function (_super) {
	__extends(HallFuncItemfight, _super);
	var HallFuncItemfight$Skin30 = 	(function (_super) {
		__extends(HallFuncItemfight$Skin30, _super);
		function HallFuncItemfight$Skin30() {
			_super.call(this);
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
		var _proto = HallFuncItemfight$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhanjiDetail";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallFuncItemfight$Skin30;
	})(eui.Skin);

	function HallFuncItemfight() {
		_super.call(this);
		this.skinParts = ["m_bg","m_roomid","m_gametime","m_score","detail"];
		
		this.height = 70;
		this.minHeight = 18;
		this.minWidth = 30;
		this.width = 414;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = HallFuncItemfight.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.m_bg_i(),this.m_roomid_i(),this.m_gametime_i(),this.m_score_i(),this._Label1_i(),this._Label2_i(),this._Group1_i()];
		return t;
	};
	_proto.m_bg_i = function () {
		var t = new eui.Image();
		this.m_bg = t;
		t.source = "findAndFight_json.zafhh";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_roomid_i = function () {
		var t = new eui.Label();
		this.m_roomid = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "999999";
		t.textColor = 0xfcde6c;
		t.x = 153.81;
		t.y = 17;
		return t;
	};
	_proto.m_gametime_i = function () {
		var t = new eui.Label();
		this.m_gametime = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "2018-02-02 23:59:59";
		t.textColor = 0xfcde6c;
		t.x = 105.65;
		t.y = 44.5;
		return t;
	};
	_proto.m_score_i = function () {
		var t = new eui.Label();
		this.m_score = t;
		t.anchorOffsetY = 0;
		t.borderColor = 0x000000;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "999999";
		t.textColor = 0xfcde6c;
		t.x = 240.79;
		t.y = 17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "房间号：";
		t.textColor = 0xfcde6c;
		t.x = 104.98;
		t.y = 17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "积分：";
		t.textColor = 0xFCDE6C;
		t.x = 206.29;
		t.y = 17;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 20;
		t.x = 344;
		t.y = 25;
		t.elementsContent = [this.detail_i()];
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Button();
		this.detail = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = HallFuncItemfight$Skin30;
		return t;
	};
	return HallFuncItemfight;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HallFuncItemfind.exml'] = window.skins.HallFuncItemfind = (function (_super) {
	__extends(HallFuncItemfind, _super);
	var HallFuncItemfind$Skin31 = 	(function (_super) {
		__extends(HallFuncItemfind$Skin31, _super);
		function HallFuncItemfind$Skin31() {
			_super.call(this);
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
		var _proto = HallFuncItemfind$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "faxianJinru";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallFuncItemfind$Skin31;
	})(eui.Skin);

	function HallFuncItemfind() {
		_super.call(this);
		this.skinParts = ["m_bg","m_jushu","m_enterbtn","m_roomid"];
		
		this.height = 72;
		this.minHeight = 18;
		this.minWidth = 30;
		this.width = 414;
		this.elementsContent = [this.m_bg_i(),this.m_jushu_i(),this._Group1_i(),this.m_roomid_i(),this._Label1_i()];
	}
	var _proto = HallFuncItemfind.prototype;

	_proto.m_bg_i = function () {
		var t = new eui.Image();
		this.m_bg = t;
		t.source = "findAndFight_json.zafhh";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.m_jushu_i = function () {
		var t = new eui.Label();
		this.m_jushu = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "正在第1局游戏中";
		t.textColor = 0xfcde6c;
		t.x = 139.67;
		t.y = 46;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 346;
		t.elementsContent = [this.m_enterbtn_i()];
		return t;
	};
	_proto.m_enterbtn_i = function () {
		var t = new eui.Button();
		this.m_enterbtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = HallFuncItemfind$Skin31;
		return t;
	};
	_proto.m_roomid_i = function () {
		var t = new eui.BitmapLabel();
		this.m_roomid = t;
		t.font = "fightAndFind_fnt";
		t.text = "666666";
		t.x = 189.15;
		t.y = 17.91;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "房间号：";
		t.textColor = 0xfcde6c;
		t.x = 139.67;
		t.y = 17.34;
		return t;
	};
	return HallFuncItemfind;
})(eui.Skin);generateEUI.paths['resource/eui_skins/henxiangLoadingUI.exml'] = window.loadingUI = (function (_super) {
	__extends(loadingUI, _super);
	function loadingUI() {
		_super.call(this);
		this.skinParts = ["bg","title","pro"];
		
		this.height = 640;
		this.width = 1038;
		this.elementsContent = [this.bg_i(),this.title_i(),this.pro_i()];
	}
	var _proto = loadingUI.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.source = "ddzLoading_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 10.5;
		t.source = "waitWenzi_png";
		t.y = 387.09;
		return t;
	};
	_proto.pro_i = function () {
		var t = new eui.ProgressBar();
		this.pro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.skinName = "skins.ProgressBarSkin";
		t.y = 417.09;
		return t;
	};
	return loadingUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin1.exml'] = window.ProgressBarSkin1 = (function (_super) {
	__extends(ProgressBarSkin1, _super);
	function ProgressBarSkin1() {
		_super.call(this);
		this.skinParts = ["bg","thumb","labelDisplay"];
		
		this.height = 9;
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this.bg_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin1.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "loadingGGD_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "loadIngGJT_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return ProgressBarSkin1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/loadingUI.exml'] = window.loadingUI = (function (_super) {
	__extends(loadingUI, _super);
	function loadingUI() {
		_super.call(this);
		this.skinParts = ["bg","pro","loadd","title"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.pro_i(),this.loadd_i(),this.title_i()];
	}
	var _proto = loadingUI.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.source = "loadingGBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pro_i = function () {
		var t = new eui.ProgressBar();
		this.pro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.horizontalCenter = 0.5;
		t.skinName = "ProgressBarSkin1";
		t.y = 938.3;
		return t;
	};
	_proto.loadd_i = function () {
		var t = new eui.Label();
		this.loadd = t;
		t.horizontalCenter = 0;
		t.text = "Loading...";
		t.textColor = 0xab86f2;
		t.y = 895.2;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 0;
		t.source = "loadingBzT_png";
		t.y = 328;
		return t;
	};
	return loadingUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/mainScene.exml'] = window.mainScene = (function (_super) {
	__extends(mainScene, _super);
	var mainScene$Skin32 = 	(function (_super) {
		__extends(mainScene$Skin32, _super);
		function mainScene$Skin32() {
			_super.call(this);
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
		var _proto = mainScene$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhong";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainScene$Skin32;
	})(eui.Skin);

	var mainScene$Skin33 = 	(function (_super) {
		__extends(mainScene$Skin33, _super);
		function mainScene$Skin33() {
			_super.call(this);
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
		var _proto = mainScene$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "suohua";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainScene$Skin33;
	})(eui.Skin);

	var mainScene$Skin34 = 	(function (_super) {
		__extends(mainScene$Skin34, _super);
		function mainScene$Skin34() {
			_super.call(this);
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
		var _proto = mainScene$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainScene$Skin34;
	})(eui.Skin);

	var mainScene$Skin35 = 	(function (_super) {
		__extends(mainScene$Skin35, _super);
		function mainScene$Skin35() {
			_super.call(this);
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
		var _proto = mainScene$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "honghei";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainScene$Skin35;
	})(eui.Skin);

	var mainScene$Skin36 = 	(function (_super) {
		__extends(mainScene$Skin36, _super);
		function mainScene$Skin36() {
			_super.call(this);
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
		var _proto = mainScene$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "danji";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainScene$Skin36;
	})(eui.Skin);

	function mainScene() {
		_super.call(this);
		this.skinParts = ["biaozhong","suoha","niuniu","honghei","danji","contentGroup"];
		
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = mainScene.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.height = 750;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group6_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 247.45000000000002;
		t.y = 58.80000000000004;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 380;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.biaozhong_i()];
		return t;
	};
	_proto.biaozhong_i = function () {
		var t = new eui.Button();
		this.biaozhong = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = mainScene$Skin32;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 380;
		t.x = 0;
		t.y = 140;
		t.elementsContent = [this.suoha_i()];
		return t;
	};
	_proto.suoha_i = function () {
		var t = new eui.Button();
		this.suoha = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = mainScene$Skin33;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 380;
		t.x = 0;
		t.y = 280;
		t.elementsContent = [this.niuniu_i()];
		return t;
	};
	_proto.niuniu_i = function () {
		var t = new eui.Button();
		this.niuniu = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = mainScene$Skin34;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 380;
		t.x = 0;
		t.y = 420;
		t.elementsContent = [this.honghei_i()];
		return t;
	};
	_proto.honghei_i = function () {
		var t = new eui.Button();
		this.honghei = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = mainScene$Skin35;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.right = 18;
		t.width = 240;
		t.y = 560;
		t.elementsContent = [this.danji_i()];
		return t;
	};
	_proto.danji_i = function () {
		var t = new eui.Button();
		this.danji = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = mainScene$Skin36;
		return t;
	};
	return mainScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Notice.exml'] = window.Notice = (function (_super) {
	__extends(Notice, _super);
	function Notice() {
		_super.call(this);
		this.skinParts = ["content","confirm","cancel","mianban"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.mianban_i()];
	}
	var _proto = Notice.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mianban_i = function () {
		var t = new eui.Group();
		this.mianban = t;
		t.horizontalCenter = 0;
		t.y = 215;
		t.elementsContent = [this._Image2_i(),this.content_i(),this.confirm_i(),this.cancel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tishi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 195.33;
		t.horizontalCenter = 0;
		t.lineSpacing = 8;
		t.size = 22;
		t.text = "有游戏囧事打飞机顽皮偶尔感觉咩咩叫纳入规划in鹅肉共河内然后呢容纳后IE男人很";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 380;
		t.y = 92;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Image();
		this.confirm = t;
		t.height = 47;
		t.source = "yes_xiao_png";
		t.width = 124;
		t.x = 82.67;
		t.y = 345.95;
		return t;
	};
	_proto.cancel_i = function () {
		var t = new eui.Image();
		this.cancel = t;
		t.height = 47;
		t.source = "quxiao_png";
		t.width = 124;
		t.x = 283.67;
		t.y = 345.95;
		return t;
	};
	return Notice;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["bg","thumb","labelDisplay"];
		
		this.height = 7;
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this.bg_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "dibuloading_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "huangse_png";
		t.width = 571;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shop.exml'] = window.shop = (function (_super) {
	__extends(shop, _super);
	var shop$Skin37 = 	(function (_super) {
		__extends(shop$Skin37, _super);
		function shop$Skin37() {
			_super.call(this);
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
		var _proto = shop$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_shop_btn_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 25;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin37;
	})(eui.Skin);

	var shop$Skin38 = 	(function (_super) {
		__extends(shop$Skin38, _super);
		function shop$Skin38() {
			_super.call(this);
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
		var _proto = shop$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_shop_btn_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 25;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin38;
	})(eui.Skin);

	var shop$Skin39 = 	(function (_super) {
		__extends(shop$Skin39, _super);
		function shop$Skin39() {
			_super.call(this);
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
		var _proto = shop$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_shop_btn_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 25;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin39;
	})(eui.Skin);

	var shop$Skin40 = 	(function (_super) {
		__extends(shop$Skin40, _super);
		function shop$Skin40() {
			_super.call(this);
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
		var _proto = shop$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_shop_btn_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 25;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin40;
	})(eui.Skin);

	var shop$Skin41 = 	(function (_super) {
		__extends(shop$Skin41, _super);
		function shop$Skin41() {
			_super.call(this);
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
		var _proto = shop$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chuniu_hall_new_json.hall_shop_btn_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 25;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return shop$Skin41;
	})(eui.Skin);

	function shop() {
		_super.call(this);
		this.skinParts = ["menban","goodsIcon0","songImg0","zuannum0","songZuan0","buyBtn0","item0","goodsIcon1","songImg1","zuannum1","songZuan1","buyBtn1","item1","goodsIcon2","songImg2","zuannum2","songZuan2","buyBtn2","item2","goodsIcon3","songImg3","zuannum3","songZuan3","buyBtn3","item3","goodsIcon4","songImg4","zuannum4","songZuan4","buyBtn4","item4"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.menban_i(),this._Group11_i()];
	}
	var _proto = shop.prototype;

	_proto.menban_i = function () {
		var t = new eui.Image();
		this.menban = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -5.5;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_shop_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.x = 60.2;
		t.y = 149.8;
		t.elementsContent = [this.goodsIcon0_i(),this.songImg0_i(),this._Group1_i(),this.songZuan0_i(),this._Group2_i()];
		return t;
	};
	_proto.goodsIcon0_i = function () {
		var t = new eui.Image();
		this.goodsIcon0 = t;
		t.source = "chuniu_hall_new_json.hall_Icon_D1";
		t.verticalCenter = 0;
		t.x = 1.52;
		return t;
	};
	_proto.songImg0_i = function () {
		var t = new eui.Image();
		this.songImg0 = t;
		t.source = "chuniu_hall_new_json.hall_shop_song";
		t.verticalCenter = 0;
		t.x = 188.45;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 69.45;
		t.y = 13;
		t.elementsContent = [this._Image2_i(),this.zuannum0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "chuniu_hall_new_json.hall_yuab_jiao_xing";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zuannum0_i = function () {
		var t = new eui.Label();
		this.zuannum0 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xfffc3f;
		t.width = 100;
		t.x = 2.88;
		t.y = 2;
		return t;
	};
	_proto.songZuan0_i = function () {
		var t = new eui.Label();
		this.songZuan0 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 225.63;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 41;
		t.verticalCenter = 0;
		t.width = 89;
		t.x = 324;
		t.elementsContent = [this.buyBtn0_i()];
		return t;
	};
	_proto.buyBtn0_i = function () {
		var t = new eui.Button();
		this.buyBtn0 = t;
		t.horizontalCenter = 0;
		t.label = "￥999";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = shop$Skin37;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.x = 60.2;
		t.y = 236.16;
		t.elementsContent = [this.goodsIcon1_i(),this.songImg1_i(),this._Group3_i(),this.songZuan1_i(),this._Group4_i()];
		return t;
	};
	_proto.goodsIcon1_i = function () {
		var t = new eui.Image();
		this.goodsIcon1 = t;
		t.source = "chuniu_hall_new_json.hall_Icon_D2";
		t.verticalCenter = -6;
		t.x = -4.56;
		return t;
	};
	_proto.songImg1_i = function () {
		var t = new eui.Image();
		this.songImg1 = t;
		t.source = "chuniu_hall_new_json.hall_shop_song";
		t.verticalCenter = 0;
		t.x = 188.45;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 69.45;
		t.elementsContent = [this._Image3_i(),this.zuannum1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "chuniu_hall_new_json.hall_yuab_jiao_xing";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zuannum1_i = function () {
		var t = new eui.Label();
		this.zuannum1 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFFC3F;
		t.width = 100;
		t.x = 2.88;
		t.y = 2;
		return t;
	};
	_proto.songZuan1_i = function () {
		var t = new eui.Label();
		this.songZuan1 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 225.63;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 41;
		t.verticalCenter = 0;
		t.width = 89;
		t.x = 324;
		t.elementsContent = [this.buyBtn1_i()];
		return t;
	};
	_proto.buyBtn1_i = function () {
		var t = new eui.Button();
		this.buyBtn1 = t;
		t.label = "￥999";
		t.skinName = shop$Skin38;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.x = 60.2;
		t.y = 324.05;
		t.elementsContent = [this.goodsIcon2_i(),this.songImg2_i(),this._Group5_i(),this.songZuan2_i(),this._Group6_i()];
		return t;
	};
	_proto.goodsIcon2_i = function () {
		var t = new eui.Image();
		this.goodsIcon2 = t;
		t.source = "chuniu_hall_new_json.hall_Icon_D3";
		t.verticalCenter = 4;
		t.x = -3.04;
		return t;
	};
	_proto.songImg2_i = function () {
		var t = new eui.Image();
		this.songImg2 = t;
		t.source = "chuniu_hall_new_json.hall_shop_song";
		t.verticalCenter = 0;
		t.x = 188.45;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 69.45;
		t.elementsContent = [this._Image4_i(),this.zuannum2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "chuniu_hall_new_json.hall_yuab_jiao_xing";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zuannum2_i = function () {
		var t = new eui.Label();
		this.zuannum2 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFFC3F;
		t.width = 100;
		t.x = 2.88;
		t.y = 2;
		return t;
	};
	_proto.songZuan2_i = function () {
		var t = new eui.Label();
		this.songZuan2 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 225.63;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 41;
		t.verticalCenter = 0;
		t.width = 89;
		t.x = 324;
		t.elementsContent = [this.buyBtn2_i()];
		return t;
	};
	_proto.buyBtn2_i = function () {
		var t = new eui.Button();
		this.buyBtn2 = t;
		t.label = "￥999";
		t.skinName = shop$Skin39;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.x = 60.2;
		t.y = 411.91;
		t.elementsContent = [this.goodsIcon3_i(),this.songImg3_i(),this._Group7_i(),this.songZuan3_i(),this._Group8_i()];
		return t;
	};
	_proto.goodsIcon3_i = function () {
		var t = new eui.Image();
		this.goodsIcon3 = t;
		t.source = "chuniu_hall_new_json.hall_Icon_DinBag";
		t.verticalCenter = 0;
		t.x = 4.56;
		return t;
	};
	_proto.songImg3_i = function () {
		var t = new eui.Image();
		this.songImg3 = t;
		t.source = "chuniu_hall_new_json.hall_shop_song";
		t.verticalCenter = 0;
		t.x = 188.45;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 69.45;
		t.y = 13;
		t.elementsContent = [this._Image5_i(),this.zuannum3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "chuniu_hall_new_json.hall_yuab_jiao_xing";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zuannum3_i = function () {
		var t = new eui.Label();
		this.zuannum3 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFFC3F;
		t.width = 100;
		t.x = 2.88;
		t.y = 2;
		return t;
	};
	_proto.songZuan3_i = function () {
		var t = new eui.Label();
		this.songZuan3 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 225.63;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 41;
		t.verticalCenter = 0;
		t.width = 89;
		t.x = 324;
		t.elementsContent = [this.buyBtn3_i()];
		return t;
	};
	_proto.buyBtn3_i = function () {
		var t = new eui.Button();
		this.buyBtn3 = t;
		t.label = "￥999";
		t.skinName = shop$Skin40;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.x = 60.2;
		t.y = 498.26;
		t.elementsContent = [this.goodsIcon4_i(),this.songImg4_i(),this._Group9_i(),this.songZuan4_i(),this._Group10_i()];
		return t;
	};
	_proto.goodsIcon4_i = function () {
		var t = new eui.Image();
		this.goodsIcon4 = t;
		t.source = "chuniu_hall_new_json.hall_Icon_DinBox2";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.songImg4_i = function () {
		var t = new eui.Image();
		this.songImg4 = t;
		t.source = "chuniu_hall_new_json.hall_shop_song";
		t.verticalCenter = 0;
		t.x = 188.45;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 69.45;
		t.y = 13;
		t.elementsContent = [this._Image6_i(),this.zuannum4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "chuniu_hall_new_json.hall_yuab_jiao_xing";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zuannum4_i = function () {
		var t = new eui.Label();
		this.zuannum4 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xFFFC3F;
		t.width = 100;
		t.x = 2.88;
		t.y = 2;
		return t;
	};
	_proto.songZuan4_i = function () {
		var t = new eui.Label();
		this.songZuan4 = t;
		t.size = 25;
		t.text = "99999";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0.5;
		t.width = 100;
		t.x = 222.63;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 41;
		t.verticalCenter = 0;
		t.width = 89;
		t.x = 324;
		t.elementsContent = [this.buyBtn4_i()];
		return t;
	};
	_proto.buyBtn4_i = function () {
		var t = new eui.Button();
		this.buyBtn4 = t;
		t.label = "￥999";
		t.skinName = shop$Skin41;
		return t;
	};
	return shop;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/locationUI.exml'] = window.locationUI = (function (_super) {
	__extends(locationUI, _super);
	function locationUI() {
		_super.call(this);
		this.skinParts = ["txt01","line01","txt02","line02","txt03","line03","txt04","line04","txt05","line05","txt12","line12","txt13","line13","txt14","line14","txt15","line15","txt23","line23","txt24","line24","txt25","line25","txt34","line34","txt35","line35","txt45","line45","lineGroup0","txt222","line222","lineGroup2","headImg0","head0","headImg1","head1","headImg2","head2","headImg3","head3","headImg4","head4","headImg5","head5"];
		
		this.elementsContent = [this._Rect1_i(),this.lineGroup0_i(),this.lineGroup2_i(),this.head0_i(),this.head1_i(),this.head2_i(),this.head3_i(),this.head4_i(),this.head5_i()];
	}
	var _proto = locationUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.9;
		t.height = 900;
		t.strokeAlpha = 0.8;
		t.strokeColor = 0xF7CB62;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lineGroup0_i = function () {
		var t = new eui.Group();
		this.lineGroup0 = t;
		t.x = 61;
		t.y = 126;
		t.elementsContent = [this.line01_i(),this.line02_i(),this.line03_i(),this.line04_i(),this.line05_i(),this.line12_i(),this.line13_i(),this.line14_i(),this.line15_i(),this.line23_i(),this.line24_i(),this.line25_i(),this.line34_i(),this.line35_i(),this.line45_i()];
		return t;
	};
	_proto.line01_i = function () {
		var t = new eui.Group();
		this.line01 = t;
		t.rotation = -45;
		t.x = 268.51;
		t.y = 46.04;
		t.elementsContent = [this._Rect2_i(),this.txt01_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 130;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt01_i = function () {
		var t = new eui.Label();
		this.txt01 = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line02_i = function () {
		var t = new eui.Group();
		this.line02 = t;
		t.rotation = -20;
		t.x = 236.76;
		t.y = 46.77;
		t.elementsContent = [this._Rect3_i(),this.txt02_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 370;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt02_i = function () {
		var t = new eui.Label();
		this.txt02 = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line03_i = function () {
		var t = new eui.Group();
		this.line03 = t;
		t.x = 199;
		t.y = 39;
		t.elementsContent = [this._Rect4_i(),this.txt03_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 550;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt03_i = function () {
		var t = new eui.Label();
		this.txt03 = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -90;
		return t;
	};
	_proto.line04_i = function () {
		var t = new eui.Group();
		this.line04 = t;
		t.rotation = 20;
		t.x = 165.76;
		t.y = 15.82;
		t.elementsContent = [this._Rect5_i(),this.txt04_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 370;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt04_i = function () {
		var t = new eui.Label();
		this.txt04 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line05_i = function () {
		var t = new eui.Group();
		this.line05 = t;
		t.rotation = 45;
		t.x = 151;
		t.y = 0;
		t.elementsContent = [this._Rect6_i(),this.txt05_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 120;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt05_i = function () {
		var t = new eui.Label();
		this.txt05 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line12_i = function () {
		var t = new eui.Group();
		this.line12 = t;
		t.x = 416;
		t.y = 218.08;
		t.elementsContent = [this._Rect7_i(),this.txt12_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 155;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt12_i = function () {
		var t = new eui.Label();
		this.txt12 = t;
		t.horizontalCenter = 20;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.line13_i = function () {
		var t = new eui.Group();
		this.line13 = t;
		t.rotation = 20;
		t.x = 353;
		t.y = 191;
		t.elementsContent = [this._Rect8_i(),this.txt13_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 420;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt13_i = function () {
		var t = new eui.Label();
		this.txt13 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line14_i = function () {
		var t = new eui.Group();
		this.line14 = t;
		t.rotation = 50;
		t.x = 364.51;
		t.y = 155.28;
		t.elementsContent = [this._Rect9_i(),this.txt14_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 380;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt14_i = function () {
		var t = new eui.Label();
		this.txt14 = t;
		t.horizontalCenter = 2;
		t.rotation = -90;
		t.text = "999m";
		t.verticalCenter = 73;
		return t;
	};
	_proto.line15_i = function () {
		var t = new eui.Group();
		this.line15 = t;
		t.rotation = 90;
		t.x = 392.99;
		t.y = 130;
		t.elementsContent = [this._Rect10_i(),this.txt15_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt15_i = function () {
		var t = new eui.Label();
		this.txt15 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line23_i = function () {
		var t = new eui.Group();
		this.line23 = t;
		t.rotation = 45;
		t.x = 374.72;
		t.y = 452;
		t.elementsContent = [this._Rect11_i(),this.txt23_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 170;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt23_i = function () {
		var t = new eui.Label();
		this.txt23 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line24_i = function () {
		var t = new eui.Group();
		this.line24 = t;
		t.rotation = 90;
		t.x = 391;
		t.y = 440;
		t.elementsContent = [this._Rect12_i(),this.txt24_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 300;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt24_i = function () {
		var t = new eui.Label();
		this.txt24 = t;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line25_i = function () {
		var t = new eui.Group();
		this.line25 = t;
		t.rotation = -50;
		t.x = 76.51;
		t.y = 209.28;
		t.elementsContent = [this._Rect13_i(),this.txt25_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 380;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt25_i = function () {
		var t = new eui.Label();
		this.txt25 = t;
		t.horizontalCenter = 3;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = -87;
		return t;
	};
	_proto.line34_i = function () {
		var t = new eui.Group();
		this.line34 = t;
		t.rotation = -45;
		t.x = 50.77;
		t.y = 508.1;
		t.elementsContent = [this._Rect14_i(),this.txt34_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 170;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt34_i = function () {
		var t = new eui.Label();
		this.txt34 = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line35_i = function () {
		var t = new eui.Group();
		this.line35 = t;
		t.rotation = -20;
		t.x = 37;
		t.y = 219;
		t.elementsContent = [this._Rect15_i(),this.txt35_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 420;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt35_i = function () {
		var t = new eui.Label();
		this.txt35 = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.line45_i = function () {
		var t = new eui.Group();
		this.line45 = t;
		t.x = 0;
		t.y = 218.08;
		t.elementsContent = [this._Rect16_i(),this.txt45_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 155;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt45_i = function () {
		var t = new eui.Label();
		this.txt45 = t;
		t.horizontalCenter = 0;
		t.rotation = 90;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lineGroup2_i = function () {
		var t = new eui.Group();
		this.lineGroup2 = t;
		t.x = 71;
		t.y = 136;
		t.elementsContent = [this.line222_i()];
		return t;
	};
	_proto.line222_i = function () {
		var t = new eui.Group();
		this.line222 = t;
		t.x = 187;
		t.y = 25;
		t.elementsContent = [this._Rect17_i(),this.txt222_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 560;
		t.rotation = 0;
		t.width = 2;
		t.x = 38;
		t.y = 0;
		return t;
	};
	_proto.txt222_i = function () {
		var t = new eui.Label();
		this.txt222 = t;
		t.horizontalCenter = 22;
		t.rotation = 0;
		t.text = "999m";
		t.verticalCenter = 0;
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Group();
		this.head0 = t;
		t.horizontalCenter = 0;
		t.y = 46;
		t.elementsContent = [this.headImg0_i(),this._Image1_i()];
		return t;
	};
	_proto.headImg0_i = function () {
		var t = new eui.Image();
		this.headImg0 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "all_defaull_head_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,19,80,121);
		t.source = "biaozhunIndex_json.bzHeadkuang";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Group();
		this.head1 = t;
		t.x = 450;
		t.y = 230;
		t.elementsContent = [this.headImg1_i(),this._Image2_i()];
		return t;
	};
	_proto.headImg1_i = function () {
		var t = new eui.Image();
		this.headImg1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "all_defaull_head_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,19,80,121);
		t.source = "biaozhunIndex_json.bzHeadkuang";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Group();
		this.head2 = t;
		t.x = 450;
		t.y = 500;
		t.elementsContent = [this.headImg2_i(),this._Image3_i()];
		return t;
	};
	_proto.headImg2_i = function () {
		var t = new eui.Image();
		this.headImg2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "all_defaull_head_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,19,80,121);
		t.source = "biaozhunIndex_json.bzHeadkuang";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Group();
		this.head3 = t;
		t.horizontalCenter = 0;
		t.y = 724;
		t.elementsContent = [this.headImg3_i(),this._Image4_i()];
		return t;
	};
	_proto.headImg3_i = function () {
		var t = new eui.Image();
		this.headImg3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "all_defaull_head_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,19,80,121);
		t.source = "biaozhunIndex_json.bzHeadkuang";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Group();
		this.head4 = t;
		t.x = 50;
		t.y = 500;
		t.elementsContent = [this.headImg4_i(),this._Image5_i()];
		return t;
	};
	_proto.headImg4_i = function () {
		var t = new eui.Image();
		this.headImg4 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "all_defaull_head_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,19,80,121);
		t.source = "biaozhunIndex_json.bzHeadkuang";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.head5_i = function () {
		var t = new eui.Group();
		this.head5 = t;
		t.x = 50;
		t.y = 230;
		t.elementsContent = [this.headImg5_i(),this._Image6_i()];
		return t;
	};
	_proto.headImg5_i = function () {
		var t = new eui.Image();
		this.headImg5 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "all_defaull_head_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,19,80,121);
		t.source = "biaozhunIndex_json.bzHeadkuang";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	return locationUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/newMessage.exml'] = window.newMessage = (function (_super) {
	__extends(newMessage, _super);
	function newMessage() {
		_super.call(this);
		this.skinParts = ["menban","wenziButton","biaoqingButton","biao1","biao2","biao3","biao4","biao5","biao6","biao7","biao8","biao9","biao10","biao11","biao12","biao13","biao14","biao15","biaoqing","message1","message2","message3","message4","message5","message6","message7","message8","message9","message10","wenzi"];
		
		this.elementsContent = [this.menban_i(),this._Group3_i()];
	}
	var _proto = newMessage.prototype;

	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.height = 1038;
		t.strokeAlpha = 0;
		t.width = 640;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 232;
		t.y = 568;
		t.elementsContent = [this._Image1_i(),this.wenziButton_i(),this.biaoqingButton_i(),this.biaoqing_i(),this.wenzi_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "MessageBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wenziButton_i = function () {
		var t = new eui.Image();
		this.wenziButton = t;
		t.source = "wenzi_png";
		t.x = 8;
		t.y = 1.15;
		return t;
	};
	_proto.biaoqingButton_i = function () {
		var t = new eui.Image();
		this.biaoqingButton = t;
		t.source = "biaoqingN_png";
		t.x = 8;
		t.y = 196.52;
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
		t.text = "  我出去叫人";
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
		t.text = "  你的牌好靓哇";
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
		t.text = "  我当年横扫澳门五条街";
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
		t.text = "  算你牛逼";
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
		t.text = "  输得裤衩都没了";
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
		t.text = "  谢谢老板";
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
		t.text = "  玩游戏请先进群";
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
		t.text = "  别磨蹭快点打牌";
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
		t.text = "  别跟我抢庄";
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
		t.text = "  我给你们送温暖了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 370;
		return t;
	};
	return newMessage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/biaozhong/biaozhongIndex.exml'] = window.biaozhongIndex = (function (_super) {
	__extends(biaozhongIndex, _super);
	var biaozhongIndex$Skin42 = 	(function (_super) {
		__extends(biaozhongIndex$Skin42, _super);
		function biaozhongIndex$Skin42() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin42;
	})(eui.Skin);

	var biaozhongIndex$Skin43 = 	(function (_super) {
		__extends(biaozhongIndex$Skin43, _super);
		function biaozhongIndex$Skin43() {
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
		var _proto = biaozhongIndex$Skin43.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin43;
	})(eui.Skin);

	var biaozhongIndex$Skin44 = 	(function (_super) {
		__extends(biaozhongIndex$Skin44, _super);
		function biaozhongIndex$Skin44() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "location_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin44;
	})(eui.Skin);

	var biaozhongIndex$Skin45 = 	(function (_super) {
		__extends(biaozhongIndex$Skin45, _super);
		function biaozhongIndex$Skin45() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameset";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin45;
	})(eui.Skin);

	var biaozhongIndex$Skin46 = 	(function (_super) {
		__extends(biaozhongIndex$Skin46, _super);
		function biaozhongIndex$Skin46() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin46;
	})(eui.Skin);

	var biaozhongIndex$Skin47 = 	(function (_super) {
		__extends(biaozhongIndex$Skin47, _super);
		function biaozhongIndex$Skin47() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin47;
	})(eui.Skin);

	var biaozhongIndex$Skin48 = 	(function (_super) {
		__extends(biaozhongIndex$Skin48, _super);
		function biaozhongIndex$Skin48() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cn_bzms_jiayige_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin48;
	})(eui.Skin);

	var biaozhongIndex$Skin49 = 	(function (_super) {
		__extends(biaozhongIndex$Skin49, _super);
		function biaozhongIndex$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","callclick")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","callgray")
					])
			];
		}
		var _proto = biaozhongIndex$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "call";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin49;
	})(eui.Skin);

	var biaozhongIndex$Skin50 = 	(function (_super) {
		__extends(biaozhongIndex$Skin50, _super);
		function biaozhongIndex$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","reshakeclick")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = biaozhongIndex$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "reshake";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin50;
	})(eui.Skin);

	var biaozhongIndex$Skin51 = 	(function (_super) {
		__extends(biaozhongIndex$Skin51, _super);
		function biaozhongIndex$Skin51() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin51;
	})(eui.Skin);

	var biaozhongIndex$Skin52 = 	(function (_super) {
		__extends(biaozhongIndex$Skin52, _super);
		function biaozhongIndex$Skin52() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuYY";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin52;
	})(eui.Skin);

	var biaozhongIndex$Skin53 = 	(function (_super) {
		__extends(biaozhongIndex$Skin53, _super);
		function biaozhongIndex$Skin53() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuMsg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin53;
	})(eui.Skin);

	var biaozhongIndex$Skin54 = 	(function (_super) {
		__extends(biaozhongIndex$Skin54, _super);
		function biaozhongIndex$Skin54() {
			_super.call(this);
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
		var _proto = biaozhongIndex$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuPlayerList";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return biaozhongIndex$Skin54;
	})(eui.Skin);

	function biaozhongIndex() {
		_super.call(this);
		this.skinParts = ["menu","mySeat","playcount","roompwd","basescore","situp","locationBtn","setting","wanfa","jiesan","tool","whoJoin","joinNotice","dimissProcess","dismissGroup","menban","yaoqing","chatpop13","finalShai","finalGe","totalTrue","shaizhong","shaizhongGroup","myBaozi","myAnimate","mine0","mine1","mine2","mine4","mine3","myShaiGroup","yourTurn","watching","winnum","muchWin","myHeadImg","offline","myPoint","myName","chatpop12","myCallDian","myCallText","myCall","mykai","gou","myYY","biaoqing","myInfo","endImg","endContent","mybei","gameendTip","myAddPoint","jiayigeBtn","jiayigeGroup","geshu","whichGe","whichShai","callBtn","chooseShai0","chooseShai1","chooseShai2","chooseShai3","chooseShai4","chooseShai5","chooseShaiGroup","chooseGe","chooseGeGroup","myCallDian0","myCallText0","onecall","callGroup","jincaiZhong","resetBtn","readyStatus","messageT","messagebg","readyBtn","juhua","waitConnect","voiceplay","luyingNotice","lyNoticeGroup","xiaoxi","pangguanBtn","yying"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.menu_i(),this.mySeat_i(),this._Group1_i(),this._Group2_i(),this.tool_i(),this.joinNotice_i(),this.dismissGroup_i(),this.menban_i(),this.yaoqing_i(),this.totalTrue_i(),this.myShaiGroup_i(),this.yourTurn_i(),this.watching_i(),this.muchWin_i(),this.myInfo_i(),this.gameendTip_i(),this._Image6_i(),this.myAddPoint_i(),this.jiayigeGroup_i(),this.callGroup_i(),this.jincaiZhong_i(),this.resetBtn_i(),this.readyStatus_i(),this.messagebg_i(),this._Group7_i(),this.waitConnect_i(),this._Group11_i(),this.yying_i()];
	}
	var _proto = biaozhongIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 536.39;
		t.y = 13.5;
		t.skinName = biaozhongIndex$Skin42;
		return t;
	};
	_proto.mySeat_i = function () {
		var t = new eui.Image();
		this.mySeat = t;
		t.horizontalCenter = 0;
		t.source = "sit";
		t.visible = false;
		t.y = 794.83;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 12.5;
		t.y = 8;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this.roompwd_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 100;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.left = 18;
		t.text = "局数：0/1";
		t.y = 58.5;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.left = 18;
		t.text = "房间号：666666";
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 519.2;
		t.elementsContent = [this.basescore_i(),this._Label1_i()];
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bold = true;
		t.text = "底分：1分";
		t.textColor = 0x2e815c;
		t.x = 133.34;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "标准模式";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tool_i = function () {
		var t = new eui.Group();
		this.tool = t;
		t.anchorOffsetX = 388;
		t.scaleX = 1;
		t.visible = false;
		t.x = 521.5;
		t.y = 12.17;
		t.elementsContent = [this.situp_i(),this.locationBtn_i(),this.setting_i(),this.wanfa_i(),this.jiesan_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 78;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin43;
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 320;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin44;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 318;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin45;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 238;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin46;
		return t;
	};
	_proto.jiesan_i = function () {
		var t = new eui.Button();
		this.jiesan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 158;
		t.y = 0;
		t.skinName = biaozhongIndex$Skin47;
		return t;
	};
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.visible = false;
		t.x = 138;
		t.y = 2;
		t.elementsContent = [this._Image2_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.width = 330;
		t.y = 18;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
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
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 18;
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
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "share";
		t.visible = false;
		t.x = 389.08;
		t.y = 0;
		return t;
	};
	_proto.totalTrue_i = function () {
		var t = new eui.Group();
		this.totalTrue = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 565.58;
		t.elementsContent = [this.chatpop13_i(),this._Group3_i()];
		return t;
	};
	_proto.chatpop13_i = function () {
		var t = new eui.Image();
		this.chatpop13 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "final";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.finalShai_i(),this.finalGe_i()];
		return t;
	};
	_proto.finalShai_i = function () {
		var t = new eui.Image();
		this.finalShai = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		t.x = 122.07;
		return t;
	};
	_proto.finalGe_i = function () {
		var t = new eui.Label();
		this.finalGe = t;
		t.size = 40;
		t.text = "共36个";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.width = 125;
		t.x = 0;
		return t;
	};
	_proto.myShaiGroup_i = function () {
		var t = new eui.Group();
		this.myShaiGroup = t;
		t.horizontalCenter = 7;
		t.y = 739.21;
		t.elementsContent = [this.shaizhongGroup_i(),this.myAnimate_i(),this.mine0_i(),this.mine1_i(),this.mine2_i(),this.mine4_i(),this.mine3_i()];
		return t;
	};
	_proto.shaizhongGroup_i = function () {
		var t = new eui.Group();
		this.shaizhongGroup = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myAnimate_i = function () {
		var t = new eui.Group();
		this.myAnimate = t;
		t.height = 121;
		t.width = 161;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myBaozi_i()];
		return t;
	};
	_proto.myBaozi_i = function () {
		var t = new eui.Image();
		this.myBaozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.visible = false;
		t.x = -21.81;
		t.y = -30.66;
		return t;
	};
	_proto.mine0_i = function () {
		var t = new eui.Image();
		this.mine0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 13.91;
		t.y = 78.91;
		return t;
	};
	_proto.mine1_i = function () {
		var t = new eui.Image();
		this.mine1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 75.97;
		t.y = 81.69;
		return t;
	};
	_proto.mine2_i = function () {
		var t = new eui.Image();
		this.mine2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 92.67;
		t.y = 115;
		return t;
	};
	_proto.mine4_i = function () {
		var t = new eui.Image();
		this.mine4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 4.6;
		t.y = 115.64;
		return t;
	};
	_proto.mine3_i = function () {
		var t = new eui.Image();
		this.mine3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 50.36;
		t.y = 138.51;
		return t;
	};
	_proto.yourTurn_i = function () {
		var t = new eui.Image();
		this.yourTurn = t;
		t.horizontalCenter = 0;
		t.source = "yourTurn";
		t.verticalCenter = -42;
		return t;
	};
	_proto.watching_i = function () {
		var t = new eui.Image();
		this.watching = t;
		t.horizontalCenter = 203;
		t.source = "watching_png";
		t.verticalCenter = 338;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 6;
		t.y = 829.32;
		t.elementsContent = [this._Image4_i(),this.winnum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum_i = function () {
		var t = new eui.Label();
		this.winnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new eui.Group();
		this.myInfo = t;
		t.x = 6.5;
		t.y = 856.71;
		t.elementsContent = [this._Image5_i(),this.myHeadImg_i(),this.offline_i(),this.myPoint_i(),this.myName_i(),this.myCall_i(),this.mykai_i(),this.gou_i(),this.myYY_i(),this.biaoqing_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "myInfo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myHeadImg_i = function () {
		var t = new eui.Image();
		this.myHeadImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "33_png";
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 96;
		t.source = "offline";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.myPoint_i = function () {
		var t = new eui.Label();
		this.myPoint = t;
		t.height = 21;
		t.size = 21;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xf4df58;
		t.width = 71;
		t.x = 116.5;
		t.y = 60.09;
		return t;
	};
	_proto.myName_i = function () {
		var t = new eui.Label();
		this.myName = t;
		t.anchorOffsetX = 0;
		t.height = 21;
		t.size = 21;
		t.text = "魂族娱乐";
		t.width = 86;
		t.x = 110.5;
		t.y = 30.5;
		return t;
	};
	_proto.myCall_i = function () {
		var t = new eui.Group();
		this.myCall = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop12_i(),this.myCallDian_i(),this.myCallText_i()];
		return t;
	};
	_proto.chatpop12_i = function () {
		var t = new eui.Image();
		this.chatpop12 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myCallDian_i = function () {
		var t = new eui.Image();
		this.myCallDian = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto.myCallText_i = function () {
		var t = new eui.Label();
		this.myCallText = t;
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.mykai_i = function () {
		var t = new eui.Image();
		this.mykai = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "kai2";
		t.x = 0;
		t.y = -92.81;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "fly";
		t.x = 34;
		t.y = -6.99;
		return t;
	};
	_proto.myYY_i = function () {
		var t = new eui.Image();
		this.myYY = t;
		t.height = 96;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 100;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 7.6;
		t.y = 857.62;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.mybei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sunshi_png";
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "lossBei_fnt";
		t.text = "123";
		t.verticalCenter = 0;
		t.x = 147.4;
		return t;
	};
	_proto.mybei_i = function () {
		var t = new eui.Image();
		this.mybei = t;
		t.source = "bei_png";
		t.verticalCenter = 0;
		t.x = 312.92;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "callLeft_png";
		t.visible = false;
		t.x = 269;
		t.y = 721.56;
		return t;
	};
	_proto.myAddPoint_i = function () {
		var t = new eui.Label();
		this.myAddPoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "+20";
		t.x = 28;
		t.y = 907.34;
		return t;
	};
	_proto.jiayigeGroup_i = function () {
		var t = new eui.Group();
		this.jiayigeGroup = t;
		t.height = 20;
		t.width = 20;
		t.x = 506;
		t.y = 746;
		t.elementsContent = [this.jiayigeBtn_i()];
		return t;
	};
	_proto.jiayigeBtn_i = function () {
		var t = new eui.Button();
		this.jiayigeBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = biaozhongIndex$Skin48;
		return t;
	};
	_proto.callGroup_i = function () {
		var t = new eui.Group();
		this.callGroup = t;
		t.height = 183;
		t.width = 232;
		t.x = 408.39;
		t.y = 785.9;
		t.elementsContent = [this._Image7_i(),this._Group5_i(),this.callBtn_i(),this.chooseShaiGroup_i(),this.chooseGeGroup_i(),this.onecall_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "jiaoDianDi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 15.01;
		t.elementsContent = [this.whichGe_i(),this._Label2_i(),this._Group4_i()];
		return t;
	};
	_proto.whichGe_i = function () {
		var t = new eui.Group();
		this.whichGe = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0.61;
		t.elementsContent = [this._Image8_i(),this.geshu_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.geshu_i = function () {
		var t = new eui.Image();
		this.geshu = t;
		t.horizontalCenter = 0;
		t.source = "call30";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "个";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 116.07;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.whichShai_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whichShai_i = function () {
		var t = new eui.Image();
		this.whichShai = t;
		t.horizontalCenter = 0;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.callBtn_i = function () {
		var t = new eui.Button();
		this.callBtn = t;
		t.enabled = true;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 101;
		t.skinName = biaozhongIndex$Skin49;
		return t;
	};
	_proto.chooseShaiGroup_i = function () {
		var t = new eui.Group();
		this.chooseShaiGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = -132.97999999999996;
		t.y = -106.18999999999994;
		t.elementsContent = [this._Image10_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "callRight_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.blendMode = "normal";
		t.height = 73.34;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 342.67;
		t.y = 9.33;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.elementsContent = [this.chooseShai0_i(),this.chooseShai1_i(),this.chooseShai2_i(),this.chooseShai3_i(),this.chooseShai4_i(),this.chooseShai5_i()];
		return t;
	};
	_proto.chooseShai0_i = function () {
		var t = new eui.Group();
		this.chooseShai0 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 1;
		t.elementsContent = [this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai1_i = function () {
		var t = new eui.Group();
		this.chooseShai1 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 81;
		t.elementsContent = [this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai2_i = function () {
		var t = new eui.Group();
		this.chooseShai2 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 161;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai3_i = function () {
		var t = new eui.Group();
		this.chooseShai3 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 241;
		t.elementsContent = [this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai4_i = function () {
		var t = new eui.Group();
		this.chooseShai4 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 321;
		t.elementsContent = [this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseShai5_i = function () {
		var t = new eui.Group();
		this.chooseShai5 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.verticalCenter = 0.3299999999999983;
		t.x = 401;
		t.elementsContent = [this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai6";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chooseGeGroup_i = function () {
		var t = new eui.Group();
		this.chooseGeGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = -132.97999999999996;
		t.y = -106.18999999999994;
		t.elementsContent = [this._Image23_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "callLeft_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73.34;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 342.67;
		t.y = 9.33;
		t.viewport = this.chooseGe_i();
		return t;
	};
	_proto.chooseGe_i = function () {
		var t = new eui.Group();
		this.chooseGe = t;
		t.percentWidth = 100;
		return t;
	};
	_proto.onecall_i = function () {
		var t = new eui.Group();
		this.onecall = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -141.95;
		t.y = -98;
		t.elementsContent = [this.myCallDian0_i(),this.myCallText0_i()];
		return t;
	};
	_proto.myCallDian0_i = function () {
		var t = new eui.Image();
		this.myCallDian0 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		t.x = 4.77;
		return t;
	};
	_proto.myCallText0_i = function () {
		var t = new eui.Label();
		this.myCallText0 = t;
		t.height = 25;
		t.size = 25;
		t.text = "已被叫";
		t.textAlign = "center";
		t.textColor = 0xfcfcfc;
		t.verticalCenter = 0;
		t.x = 43.21;
		return t;
	};
	_proto.jincaiZhong_i = function () {
		var t = new eui.Group();
		this.jincaiZhong = t;
		t.horizontalCenter = 0;
		t.y = 447.57;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "bzInGame_json.betting";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "bzInGame_json.dot";
		t.verticalCenter = 0.5;
		t.x = 136.25;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.bottom = 15;
		t.source = "bzInGame_json.dot";
		t.x = 154.36;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.bottom = 15;
		t.source = "bzInGame_json.dot";
		t.x = 175.55;
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new eui.Button();
		this.resetBtn = t;
		t.horizontalCenter = 9;
		t.label = "";
		t.y = 649.55;
		t.skinName = biaozhongIndex$Skin50;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 16;
		t.y = 892.71;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 3.5;
		t.y = 778.91;
		t.elementsContent = [this._Image28_i(),this.messageT_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messageT_i = function () {
		var t = new eui.Label();
		this.messageT = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 692;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.skinName = biaozhongIndex$Skin51;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image29_i(),this.juhua_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 956.33;
		t.elementsContent = [this._Image30_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "dibuBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 105.29;
		t.y = 23.68;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = biaozhongIndex$Skin52;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = -7;
		t.y = -92.66;
		t.elementsContent = [this._Image31_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image31_i = function () {
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
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 284.5;
		t.y = 26.35;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = biaozhongIndex$Skin53;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 475.94;
		t.y = 26.35;
		t.elementsContent = [this.pangguanBtn_i()];
		return t;
	};
	_proto.pangguanBtn_i = function () {
		var t = new eui.Button();
		this.pangguanBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = biaozhongIndex$Skin54;
		return t;
	};
	_proto.yying_i = function () {
		var t = new eui.Image();
		this.yying = t;
		t.horizontalCenter = 0;
		t.source = "newPublic_json.isLuying";
		t.visible = false;
		t.y = 327.67;
		return t;
	};
	return biaozhongIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/biaozhong/chooseGe.exml'] = window.chooseGe = (function (_super) {
	__extends(chooseGe, _super);
	function chooseGe() {
		_super.call(this);
		this.skinParts = ["content","chooseShai6"];
		
		this.height = 73.6;
		this.width = 72;
		this.elementsContent = [this.chooseShai6_i()];
	}
	var _proto = chooseGe.prototype;

	_proto.chooseShai6_i = function () {
		var t = new eui.Group();
		this.chooseShai6 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 1;
		t.elementsContent = [this._Image1_i(),this.content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.horizontalCenter = 0;
		t.source = "call2";
		t.verticalCenter = 0;
		return t;
	};
	return chooseGe;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/biaozhong/headBox.exml'] = window.headBox = (function (_super) {
	__extends(headBox, _super);
	function headBox() {
		_super.call(this);
		this.skinParts = ["whoseTurn","headImg","nickname","point","offline","gou","YY","chatpop","callDian","callText","call","chatpop0","call0","addpoint","readyStatus","detail","winnum","muchWin","shaizhong","shaiDrangon","baozi","animate","shai0","shai1","shai2","shai4","shai3","kai","title","shaiGroup","biaoqing","yaoqing","sit","endImg","endContent","bei","gameendTip","userInfoGroup","message","messagebg"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.userInfoGroup_i(),this.messagebg_i()];
	}
	var _proto = headBox.prototype;

	_proto.userInfoGroup_i = function () {
		var t = new eui.Group();
		this.userInfoGroup = t;
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this.detail_i(),this._Image3_i(),this.muchWin_i(),this.shaiGroup_i(),this.biaoqing_i(),this.yaoqing_i(),this.sit_i(),this._Label2_i(),this.gameendTip_i()];
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Group();
		this.detail = t;
		t.x = 125.3;
		t.y = 41;
		t.elementsContent = [this._Image1_i(),this.whoseTurn_i(),this._Group1_i(),this.call_i(),this.call0_i(),this.addpoint_i(),this.readyStatus_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "headdikuang";
		t.x = 2.2;
		t.y = 1;
		return t;
	};
	_proto.whoseTurn_i = function () {
		var t = new eui.Image();
		this.whoseTurn = t;
		t.source = "bzHeadkuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 16.8;
		t.y = 21.15;
		t.elementsContent = [this.headImg_i(),this.nickname_i(),this.point_i(),this.offline_i(),this.gou_i(),this.YY_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "33_png";
		t.verticalCenter = -27.5;
		t.width = 73;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "tom922";
		t.textAlign = "center";
		t.width = 71;
		t.y = 80.78;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Label();
		this.point = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "999999";
		t.textAlign = "center";
		t.textColor = 0xf4df58;
		t.width = 71;
		t.y = 106.25;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 73;
		t.source = "offline";
		t.visible = false;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "fly";
		t.x = 17;
		t.y = -17;
		return t;
	};
	_proto.YY_i = function () {
		var t = new eui.Image();
		this.YY = t;
		t.height = 73;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 73;
		t.x = 1.03;
		t.y = 0;
		return t;
	};
	_proto.call_i = function () {
		var t = new eui.Group();
		this.call = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop_i(),this.callDian_i(),this.callText_i()];
		return t;
	};
	_proto.chatpop_i = function () {
		var t = new eui.Image();
		this.chatpop = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.callDian_i = function () {
		var t = new eui.Image();
		this.callDian = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto.callText_i = function () {
		var t = new eui.Label();
		this.callText = t;
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.call0_i = function () {
		var t = new eui.Group();
		this.call0 = t;
		t.visible = false;
		t.x = -109.32;
		t.y = -50;
		t.elementsContent = [this.chatpop0_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto.chatpop0_i = function () {
		var t = new eui.Image();
		this.chatpop0 = t;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.addpoint_i = function () {
		var t = new eui.Label();
		this.addpoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+10";
		t.textColor = 0xdfe200;
		t.x = 22.7;
		t.y = 44;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 12.3;
		t.y = 41.15;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.visible = false;
		t.x = 0;
		t.y = 53;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 123;
		t.y = 11;
		t.elementsContent = [this._Image4_i(),this.winnum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum_i = function () {
		var t = new eui.Label();
		this.winnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shaiGroup_i = function () {
		var t = new eui.Group();
		this.shaiGroup = t;
		t.x = 245.32;
		t.y = 50.32;
		t.elementsContent = [this.shaiDrangon_i(),this.animate_i(),this.shai0_i(),this.shai1_i(),this.shai2_i(),this.shai4_i(),this.shai3_i(),this.kai_i(),this.title_i()];
		return t;
	};
	_proto.shaiDrangon_i = function () {
		var t = new eui.Group();
		this.shaiDrangon = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animate_i = function () {
		var t = new eui.Group();
		this.animate = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.baozi_i()];
		return t;
	};
	_proto.baozi_i = function () {
		var t = new eui.Image();
		this.baozi = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "leopard";
		t.visible = false;
		t.x = -11.810000000000002;
		t.y = -30.66;
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 5.51;
		t.y = 55.67;
		return t;
	};
	_proto.shai1_i = function () {
		var t = new eui.Image();
		this.shai1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 53;
		t.y = 57.33;
		return t;
	};
	_proto.shai2_i = function () {
		var t = new eui.Image();
		this.shai2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 63.19;
		t.y = 83.3;
		return t;
	};
	_proto.shai4_i = function () {
		var t = new eui.Image();
		this.shai4 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = -3.96;
		t.y = 84.34;
		return t;
	};
	_proto.shai3_i = function () {
		var t = new eui.Image();
		this.shai3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 31.02;
		t.y = 100.87;
		return t;
	};
	_proto.kai_i = function () {
		var t = new eui.Image();
		this.kai = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kai1";
		t.x = -71.54;
		t.y = -96.62;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.visible = false;
		t.y = 18;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 134.1;
		t.y = 57;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "yaoqing";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto.sit_i = function () {
		var t = new eui.Image();
		this.sit = t;
		t.source = "sit";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "+10";
		t.textColor = 0x117a1b;
		t.visible = false;
		t.x = 144;
		t.y = 5;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 109;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 145.75;
		t.y = 51.4;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.bei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huoli_png";
		t.x = 7.34;
		t.y = 7.33;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "winbei_fnt";
		t.text = "389";
		t.verticalCenter = -1.5;
		t.x = 157.41;
		return t;
	};
	_proto.bei_i = function () {
		var t = new eui.Image();
		this.bei = t;
		t.source = "bei_png";
		t.verticalCenter = 0.5;
		t.x = 332.79;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 60;
		t.y = 37;
		t.elementsContent = [this._Image5_i(),this.message_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return headBox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/biaozhong/jincai.exml'] = window.jincai = (function (_super) {
	__extends(jincai, _super);
	var jincai$Skin55 = 	(function (_super) {
		__extends(jincai$Skin55, _super);
		function jincai$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btngreensmallclick"),
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = jincai$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btngreensmall";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return jincai$Skin55;
	})(eui.Skin);

	var jincai$Skin56 = 	(function (_super) {
		__extends(jincai$Skin56, _super);
		function jincai$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btngreensmallclick"),
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = jincai$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btngreensmall";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return jincai$Skin56;
	})(eui.Skin);

	var jincai$Skin57 = 	(function (_super) {
		__extends(jincai$Skin57, _super);
		function jincai$Skin57() {
			_super.call(this);
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
		var _proto = jincai$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "BTN_Close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return jincai$Skin57;
	})(eui.Skin);

	function jincai() {
		_super.call(this);
		this.skinParts = ["titleImg","qiangHead","beiqiangHead","bugouBtn","gouBtn","qiangkai","shainum","dizhu","shai0","shainum0","shai","mainGroup","closeBtn","daoji"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group7_i()];
	}
	var _proto = jincai.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -6;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.mainGroup_i(),this._Group6_i(),this.daoji_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "tipsbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 121;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 628;
		t.y = 11.77;
		t.elementsContent = [this._Image3_i(),this.titleImg_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "flytitle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.titleImg_i = function () {
		var t = new eui.Image();
		this.titleImg = t;
		t.horizontalCenter = 0.5;
		t.source = "fly8";
		t.verticalCenter = -18.5;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.horizontalCenter = 0.5;
		t.y = 170.4;
		t.elementsContent = [this.qiangHead_i(),this.beiqiangHead_i(),this._Group4_i(),this.qiangkai_i(),this.shainum_i(),this.dizhu_i(),this._Group5_i(),this.shai_i()];
		return t;
	};
	_proto.qiangHead_i = function () {
		var t = new eui.Image();
		this.qiangHead = t;
		t.height = 140;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "playerphoto";
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.beiqiangHead_i = function () {
		var t = new eui.Image();
		this.beiqiangHead = t;
		t.height = 140;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "playerphoto";
		t.width = 140;
		t.x = 434.24;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 135.22;
		t.elementsContent = [this._Image4_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "vs";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 51;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.verticalCenter = -1;
		t.width = 150;
		t.x = 0;
		t.elementsContent = [this.bugouBtn_i()];
		return t;
	};
	_proto.bugouBtn_i = function () {
		var t = new eui.Button();
		this.bugouBtn = t;
		t.horizontalCenter = 0;
		t.label = "不够";
		t.verticalCenter = 0;
		t.skinName = jincai$Skin55;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 51;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.verticalCenter = -1;
		t.width = 150;
		t.x = 392.18;
		t.elementsContent = [this.gouBtn_i()];
		return t;
	};
	_proto.gouBtn_i = function () {
		var t = new eui.Button();
		this.gouBtn = t;
		t.horizontalCenter = 0;
		t.label = "够";
		t.verticalCenter = 0;
		t.skinName = jincai$Skin56;
		return t;
	};
	_proto.qiangkai_i = function () {
		var t = new eui.Label();
		this.qiangkai = t;
		t.text = "抢开";
		t.x = 39.1;
		t.y = -35.25;
		return t;
	};
	_proto.shainum_i = function () {
		var t = new eui.Label();
		this.shainum = t;
		t.height = 30;
		t.text = "36个";
		t.textAlign = "right";
		t.width = 64;
		t.x = 450.66;
		t.y = -34.31;
		return t;
	};
	_proto.dizhu_i = function () {
		var t = new eui.Label();
		this.dizhu = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "20金币/注";
		t.textColor = 0xffff00;
		t.y = 82.84;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 164;
		t.y = 30.16;
		t.elementsContent = [this.shai0_i(),this.shainum0_i(),this._Label1_i()];
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pinshai1_png";
		t.verticalCenter = 0;
		t.x = 72.69;
		return t;
	};
	_proto.shainum0_i = function () {
		var t = new eui.Label();
		this.shainum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.text = "36个";
		t.textAlign = "right";
		t.verticalCenter = 0;
		t.width = 66;
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.text = "够不够？";
		t.textAlign = "right";
		t.verticalCenter = 0;
		t.x = 112.79;
		return t;
	};
	_proto.shai_i = function () {
		var t = new eui.Image();
		this.shai = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "pinshai1_png";
		t.x = 513.6799999999998;
		t.y = -38.420000000000016;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 634.36;
		t.y = 56.68;
		t.elementsContent = [this.closeBtn_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = jincai$Skin57;
		return t;
	};
	_proto.daoji_i = function () {
		var t = new eui.Label();
		this.daoji = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "10秒后结束竞猜";
		t.y = 392.36;
		return t;
	};
	return jincai;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/biaozhong/totalResult.exml'] = window.totalResult = (function (_super) {
	__extends(totalResult, _super);
	var totalResult$Skin58 = 	(function (_super) {
		__extends(totalResult$Skin58, _super);
		function totalResult$Skin58() {
			_super.call(this);
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
		var _proto = totalResult$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "totalJieping";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return totalResult$Skin58;
	})(eui.Skin);

	var totalResult$Skin59 = 	(function (_super) {
		__extends(totalResult$Skin59, _super);
		function totalResult$Skin59() {
			_super.call(this);
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
		var _proto = totalResult$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "totalBackHall";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return totalResult$Skin59;
	})(eui.Skin);

	function totalResult() {
		_super.call(this);
		this.skinParts = ["jieping","backHall","paiMing","nickname","ID","point","paiMing0","nickname1","ID2","point0","paiMing1","nickname2","ID3","point1","paiMing3","nickname4","ID5","point3","paiMing2","nickname3","ID4","point2","nickname0","ID0","ID1","roompwd","gamename","gametime"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
	}
	var _proto = totalResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "totalBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 861.79;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 0;
		t.elementsContent = [this.jieping_i()];
		return t;
	};
	_proto.jieping_i = function () {
		var t = new eui.Button();
		this.jieping = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = totalResult$Skin58;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 311.53;
		t.elementsContent = [this.backHall_i()];
		return t;
	};
	_proto.backHall_i = function () {
		var t = new eui.Button();
		this.backHall = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = totalResult$Skin59;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 57;
		t.y = 245.32;
		t.elementsContent = [this._Image2_i(),this.paiMing_i(),this.nickname_i(),this.ID_i(),this.point_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing_i = function () {
		var t = new eui.Image();
		this.paiMing = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450f;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.BitmapLabel();
		this.point = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 85.5;
		t.y = 319.32;
		t.elementsContent = [this._Image3_i(),this.paiMing0_i(),this.nickname1_i(),this.ID2_i(),this.point0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing0_i = function () {
		var t = new eui.Image();
		this.paiMing0 = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname1_i = function () {
		var t = new eui.Label();
		this.nickname1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point0_i = function () {
		var t = new eui.BitmapLabel();
		this.point0 = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 87.5;
		t.y = 467.32;
		t.elementsContent = [this._Image4_i(),this.paiMing1_i(),this.nickname2_i(),this.ID3_i(),this.point1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing1_i = function () {
		var t = new eui.Image();
		this.paiMing1 = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname2_i = function () {
		var t = new eui.Label();
		this.nickname2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID3_i = function () {
		var t = new eui.Label();
		this.ID3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point1_i = function () {
		var t = new eui.BitmapLabel();
		this.point1 = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 84.17;
		t.y = 541.32;
		t.elementsContent = [this._Image5_i(),this.paiMing3_i(),this.nickname4_i(),this.ID5_i(),this.point3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing3_i = function () {
		var t = new eui.Image();
		this.paiMing3 = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname4_i = function () {
		var t = new eui.Label();
		this.nickname4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID5_i = function () {
		var t = new eui.Label();
		this.ID5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point3_i = function () {
		var t = new eui.BitmapLabel();
		this.point3 = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 86.5;
		t.y = 393.32;
		t.elementsContent = [this._Image6_i(),this.paiMing2_i(),this.nickname3_i(),this.ID4_i(),this.point2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing2_i = function () {
		var t = new eui.Image();
		this.paiMing2 = t;
		t.source = "img_rank1";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname3_i = function () {
		var t = new eui.Label();
		this.nickname3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID4_i = function () {
		var t = new eui.Label();
		this.ID4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.point2_i = function () {
		var t = new eui.BitmapLabel();
		this.point2 = t;
		t.font = "win_total_fnt";
		t.text = "+9999";
		t.verticalCenter = 0.5;
		t.x = 359;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 85.5;
		t.y = 171.32;
		t.elementsContent = [this._Image7_i(),this.nickname0_i(),this.ID0_i(),this.ID1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname0_i = function () {
		var t = new eui.Label();
		this.nickname0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "昵称";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID0_i = function () {
		var t = new eui.Label();
		this.ID0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "ID";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "分数";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 365;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "名次";
		t.textColor = 0x78450f;
		t.verticalCenter = 0;
		t.x = 11;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 726.48;
		t.elementsContent = [this.roompwd_i(),this.gamename_i(),this.gametime_i()];
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.text = "房间号：666666";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gamename_i = function () {
		var t = new eui.Label();
		this.gamename = t;
		t.text = "模式：牛牛模式";
		t.x = 255.45;
		t.y = 0;
		return t;
	};
	_proto.gametime_i = function () {
		var t = new eui.Label();
		this.gametime = t;
		t.text = "时间：2017-01-01 20:20:20";
		t.x = 2.09;
		t.y = 62.52;
		return t;
	};
	return totalResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/biaozhong/totalResultItem.exml'] = window.totalResultItem = (function (_super) {
	__extends(totalResultItem, _super);
	function totalResultItem() {
		_super.call(this);
		this.skinParts = ["paiMing","nickname","ID","pmText","point"];
		
		this.height = 72;
		this.width = 529;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = totalResultItem.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.paiMing_i(),this.nickname_i(),this.ID_i(),this.pmText_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 72;
		t.source = "ITemitem";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.paiMing_i = function () {
		var t = new eui.Image();
		this.paiMing = t;
		t.source = "img_rank3";
		t.verticalCenter = 0;
		t.x = 17.5;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "魂族网络科技";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0;
		t.width = 150;
		t.x = 79;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0x78450F;
		t.verticalCenter = 0.5;
		t.width = 88;
		t.x = 247;
		return t;
	};
	_proto.pmText_i = function () {
		var t = new eui.Label();
		this.pmText = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "5";
		t.textColor = 0x78450f;
		t.verticalCenter = 1;
		t.x = 30;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 346;
		t.elementsContent = [this.point_i()];
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.BitmapLabel();
		this.point = t;
		t.font = "loss_total_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "-222666";
		t.verticalCenter = 0;
		return t;
	};
	return totalResultItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/biaozhong/wanfaBz.exml'] = window.wanfaBz = (function (_super) {
	__extends(wanfaBz, _super);
	function wanfaBz() {
		_super.call(this);
		this.skinParts = ["bg","bg0","type0","bg1","type1","bg2","type2","bg3","type3","content"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this._Group1_i(),this._Scroller1_i()];
	}
	var _proto = wanfaBz.prototype;

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
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wanfaBg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 96;
		t.y = 272;
		t.elementsContent = [this._Image2_i(),this.type0_i(),this.type1_i(),this.type2_i(),this.type3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "wanfaTitile_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.type0_i = function () {
		var t = new eui.Group();
		this.type0 = t;
		t.x = 1.5;
		t.y = 1;
		t.elementsContent = [this.bg0_i(),this._Label1_i()];
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Image();
		this.bg0 = t;
		t.source = "wanfaChoosen_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "标准模式";
		t.verticalCenter = 0;
		return t;
	};
	_proto.type1_i = function () {
		var t = new eui.Group();
		this.type1 = t;
		t.verticalCenter = 0;
		t.x = 114;
		t.elementsContent = [this.bg1_i(),this._Label2_i()];
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.source = "wanfaChoosen_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "梭哈模式";
		t.verticalCenter = 0;
		return t;
	};
	_proto.type2_i = function () {
		var t = new eui.Group();
		this.type2 = t;
		t.verticalCenter = 0;
		t.x = 226.5;
		t.elementsContent = [this.bg2_i(),this._Label3_i()];
		return t;
	};
	_proto.bg2_i = function () {
		var t = new eui.Image();
		this.bg2 = t;
		t.source = "wanfaChoosen_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "牛牛模式";
		t.verticalCenter = 0;
		return t;
	};
	_proto.type3_i = function () {
		var t = new eui.Group();
		this.type3 = t;
		t.verticalCenter = 0;
		t.x = 339;
		t.elementsContent = [this.bg3_i(),this._Label4_i()];
		return t;
	};
	_proto.bg3_i = function () {
		var t = new eui.Image();
		this.bg3 = t;
		t.source = "wanfaChoosen_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "红黑单双";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 544;
		t.horizontalCenter = 0;
		t.width = 438;
		t.y = 307.5;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 308;
		t.width = 268;
		t.elementsContent = [this.content_i()];
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.horizontalCenter = 0;
		t.source = "shWanfa_png";
		t.y = 13;
		return t;
	};
	return wanfaBz;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/niuniu/headBoxNn.exml'] = window.headBoxNn = (function (_super) {
	__extends(headBoxNn, _super);
	function headBoxNn() {
		_super.call(this);
		this.skinParts = ["whoseTurn","headImg","nickname","point","YY","offline","gou","chatpop","callDian","callText","call","chatpop0","call0","addpoint","readyStatus","zhuang","detail","winnum","muchWin","biaoqing","shaizhong","shaiDrangon","baozi","animate","shai0","shai1","shai2","shai4","shai3","kai","title","shaiGroup","yaoqing","sit","endImg","endContent","bei","gameendTip","userInfoGroup","message","messagebg"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.userInfoGroup_i(),this.messagebg_i()];
	}
	var _proto = headBoxNn.prototype;

	_proto.userInfoGroup_i = function () {
		var t = new eui.Group();
		this.userInfoGroup = t;
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this.detail_i(),this._Image3_i(),this.muchWin_i(),this.biaoqing_i(),this.shaiGroup_i(),this.yaoqing_i(),this.sit_i(),this._Label2_i(),this.gameendTip_i()];
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Group();
		this.detail = t;
		t.x = 125.3;
		t.y = 41;
		t.elementsContent = [this._Image1_i(),this.whoseTurn_i(),this._Group1_i(),this.call_i(),this.call0_i(),this.addpoint_i(),this.readyStatus_i(),this.zhuang_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "headdikuang";
		t.x = 2.2;
		t.y = 1;
		return t;
	};
	_proto.whoseTurn_i = function () {
		var t = new eui.Image();
		this.whoseTurn = t;
		t.source = "bzHeadkuang";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 16.8;
		t.y = 21.15;
		t.elementsContent = [this.headImg_i(),this.nickname_i(),this.point_i(),this.YY_i(),this.offline_i(),this.gou_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "33_png";
		t.verticalCenter = -27.5;
		t.width = 73;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "tom922";
		t.textAlign = "center";
		t.width = 71;
		t.y = 80.78;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Label();
		this.point = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "999999";
		t.textAlign = "center";
		t.textColor = 0xf4df58;
		t.width = 71;
		t.y = 106.25;
		return t;
	};
	_proto.YY_i = function () {
		var t = new eui.Image();
		this.YY = t;
		t.height = 73;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 73;
		t.x = 1.03;
		t.y = 0;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 73;
		t.source = "offline";
		t.visible = false;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "fly";
		t.x = 17;
		t.y = -17;
		return t;
	};
	_proto.call_i = function () {
		var t = new eui.Group();
		this.call = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop_i(),this.callDian_i(),this.callText_i()];
		return t;
	};
	_proto.chatpop_i = function () {
		var t = new eui.Image();
		this.chatpop = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.callDian_i = function () {
		var t = new eui.Image();
		this.callDian = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto.callText_i = function () {
		var t = new eui.Label();
		this.callText = t;
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.call0_i = function () {
		var t = new eui.Group();
		this.call0 = t;
		t.visible = false;
		t.x = -109.32;
		t.y = -50;
		t.elementsContent = [this.chatpop0_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto.chatpop0_i = function () {
		var t = new eui.Image();
		this.chatpop0 = t;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto.addpoint_i = function () {
		var t = new eui.Label();
		this.addpoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+10";
		t.textColor = 0xdfe200;
		t.x = 22.7;
		t.y = 44;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 12.3;
		t.y = 41.15;
		return t;
	};
	_proto.zhuang_i = function () {
		var t = new eui.Image();
		this.zhuang = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "dealer";
		t.x = 79;
		t.y = -13;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.visible = false;
		t.x = 0;
		t.y = 53;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 123;
		t.y = 11;
		t.elementsContent = [this._Image4_i(),this.winnum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum_i = function () {
		var t = new eui.Label();
		this.winnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 134.1;
		t.y = 57;
		return t;
	};
	_proto.shaiGroup_i = function () {
		var t = new eui.Group();
		this.shaiGroup = t;
		t.height = 162;
		t.width = 122;
		t.x = 245.32;
		t.y = 50.32;
		t.elementsContent = [this.shaiDrangon_i(),this.animate_i(),this.shai0_i(),this.shai1_i(),this.shai2_i(),this.shai4_i(),this.shai3_i(),this.kai_i(),this.title_i()];
		return t;
	};
	_proto.shaiDrangon_i = function () {
		var t = new eui.Group();
		this.shaiDrangon = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animate_i = function () {
		var t = new eui.Group();
		this.animate = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.baozi_i()];
		return t;
	};
	_proto.baozi_i = function () {
		var t = new eui.Image();
		this.baozi = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "leopard";
		t.visible = false;
		t.x = -11.810000000000002;
		t.y = -30.66;
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 5.51;
		t.y = 55.67;
		return t;
	};
	_proto.shai1_i = function () {
		var t = new eui.Image();
		this.shai1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 53;
		t.y = 57.33;
		return t;
	};
	_proto.shai2_i = function () {
		var t = new eui.Image();
		this.shai2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 63.19;
		t.y = 83.3;
		return t;
	};
	_proto.shai4_i = function () {
		var t = new eui.Image();
		this.shai4 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = -3.96;
		t.y = 84.34;
		return t;
	};
	_proto.shai3_i = function () {
		var t = new eui.Image();
		this.shai3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 31.02;
		t.y = 100.87;
		return t;
	};
	_proto.kai_i = function () {
		var t = new eui.Image();
		this.kai = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kai1";
		t.x = -71.54;
		t.y = -96.62;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuTitle10";
		t.y = 16;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "yaoqing";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto.sit_i = function () {
		var t = new eui.Image();
		this.sit = t;
		t.source = "sit";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "+10";
		t.textColor = 0x117a1b;
		t.visible = false;
		t.x = 144;
		t.y = 5;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 109;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 145.75;
		t.y = 51.4;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.bei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huoli_png";
		t.x = 7.34;
		t.y = 7.33;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "winbei_fnt";
		t.text = "389";
		t.verticalCenter = -1.5;
		t.x = 157.41;
		return t;
	};
	_proto.bei_i = function () {
		var t = new eui.Image();
		this.bei = t;
		t.source = "bei_png";
		t.verticalCenter = 0.5;
		t.x = 332.79;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 60;
		t.y = 37;
		t.elementsContent = [this._Image5_i(),this.message_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return headBoxNn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/niuniu/niuniuIndex.exml'] = window.niuniuIndex = (function (_super) {
	__extends(niuniuIndex, _super);
	var niuniuIndex$Skin60 = 	(function (_super) {
		__extends(niuniuIndex$Skin60, _super);
		function niuniuIndex$Skin60() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin60;
	})(eui.Skin);

	var niuniuIndex$Skin61 = 	(function (_super) {
		__extends(niuniuIndex$Skin61, _super);
		function niuniuIndex$Skin61() {
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
		var _proto = niuniuIndex$Skin61.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin61;
	})(eui.Skin);

	var niuniuIndex$Skin62 = 	(function (_super) {
		__extends(niuniuIndex$Skin62, _super);
		function niuniuIndex$Skin62() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "location_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin62;
	})(eui.Skin);

	var niuniuIndex$Skin63 = 	(function (_super) {
		__extends(niuniuIndex$Skin63, _super);
		function niuniuIndex$Skin63() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameset";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin63;
	})(eui.Skin);

	var niuniuIndex$Skin64 = 	(function (_super) {
		__extends(niuniuIndex$Skin64, _super);
		function niuniuIndex$Skin64() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin64;
	})(eui.Skin);

	var niuniuIndex$Skin65 = 	(function (_super) {
		__extends(niuniuIndex$Skin65, _super);
		function niuniuIndex$Skin65() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin65;
	})(eui.Skin);

	var niuniuIndex$Skin66 = 	(function (_super) {
		__extends(niuniuIndex$Skin66, _super);
		function niuniuIndex$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niubtnshakeclick")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","niubtnshakedisable")
					])
			];
		}
		var _proto = niuniuIndex$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niubtnshake";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin66;
	})(eui.Skin);

	var niuniuIndex$Skin67 = 	(function (_super) {
		__extends(niuniuIndex$Skin67, _super);
		function niuniuIndex$Skin67() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin67;
	})(eui.Skin);

	var niuniuIndex$Skin68 = 	(function (_super) {
		__extends(niuniuIndex$Skin68, _super);
		function niuniuIndex$Skin68() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuYY";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin68;
	})(eui.Skin);

	var niuniuIndex$Skin69 = 	(function (_super) {
		__extends(niuniuIndex$Skin69, _super);
		function niuniuIndex$Skin69() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuMsg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin69;
	})(eui.Skin);

	var niuniuIndex$Skin70 = 	(function (_super) {
		__extends(niuniuIndex$Skin70, _super);
		function niuniuIndex$Skin70() {
			_super.call(this);
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
		var _proto = niuniuIndex$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuPlayerList";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuIndex$Skin70;
	})(eui.Skin);

	function niuniuIndex() {
		_super.call(this);
		this.skinParts = ["yying","watching","menu","playcount","roompwd","basescore","shaizhong","shaizhongGroup","myBaozi","myAnimate","mine0","mine1","mine2","mine4","mine3","myLittleTitle","mytitle","myShaiGroup","situp","locationBtn","setting","wanfa","jiesan","tool","winnum0","muchWin","myzhuang","myHeadImg","offline","myPoint","myName","myYY","biaoqing","myInfo","dimissProcess","dismissGroup","endImg","endContent","mybei","gameendTip","myAddPoint","myDaojinum","callBtn","shaizi0","selected0","chooseShai0","shaizi1","selected1","chooseShai1","shaizi2","selected2","chooseShai2","shaizi3","selected3","chooseShai3","shaizi4","selected4","chooseShai4","chooseShai11","callGroup","yaoqing","menban","whoJoin","joinNotice","resetNum","resetNumGroup","tongpei","readyBtn","juhua","waitConnect","readyStatus","voiceplay","luyingNotice","lyNoticeGroup","xiaoxi","pangguanBtn","messageT","messagebg"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.yying_i(),this.watching_i(),this.menu_i(),this._Group1_i(),this._Group2_i(),this.myShaiGroup_i(),this.tool_i(),this.muchWin_i(),this.myzhuang_i(),this.myInfo_i(),this.dismissGroup_i(),this.gameendTip_i(),this.myAddPoint_i(),this.callGroup_i(),this.yaoqing_i(),this.menban_i(),this.joinNotice_i(),this.resetNumGroup_i(),this.tongpei_i(),this._Group6_i(),this.waitConnect_i(),this.readyStatus_i(),this._Group10_i(),this.messagebg_i()];
	}
	var _proto = niuniuIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yying_i = function () {
		var t = new eui.Image();
		this.yying = t;
		t.horizontalCenter = 0;
		t.source = "newPublic_json.isLuying";
		t.visible = false;
		t.y = 327.67;
		return t;
	};
	_proto.watching_i = function () {
		var t = new eui.Image();
		this.watching = t;
		t.source = "watching_png";
		t.x = 440;
		t.y = 815;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 536.39;
		t.y = 14.5;
		t.skinName = niuniuIndex$Skin60;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 12.5;
		t.y = 8;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this.roompwd_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 100;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.left = 18;
		t.text = "局数：0/1";
		t.y = 58.5;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.left = 18;
		t.text = "房间号：666666";
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 511;
		t.elementsContent = [this.basescore_i(),this._Label1_i()];
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bold = true;
		t.text = "底分：1分";
		t.textColor = 0x2e815c;
		t.x = 138;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "牛牛模式";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myShaiGroup_i = function () {
		var t = new eui.Group();
		this.myShaiGroup = t;
		t.height = 216;
		t.horizontalCenter = 7;
		t.width = 162;
		t.y = 745.87;
		t.elementsContent = [this.shaizhongGroup_i(),this.myAnimate_i(),this.mine0_i(),this.mine1_i(),this.mine2_i(),this.mine4_i(),this.mine3_i(),this.myLittleTitle_i(),this.mytitle_i()];
		return t;
	};
	_proto.shaizhongGroup_i = function () {
		var t = new eui.Group();
		this.shaizhongGroup = t;
		t.height = 218;
		t.width = 162;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myAnimate_i = function () {
		var t = new eui.Group();
		this.myAnimate = t;
		t.height = 121;
		t.width = 161;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myBaozi_i()];
		return t;
	};
	_proto.myBaozi_i = function () {
		var t = new eui.Image();
		this.myBaozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.visible = false;
		t.x = -21.81;
		t.y = -30.66;
		return t;
	};
	_proto.mine0_i = function () {
		var t = new eui.Image();
		this.mine0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 13.91;
		t.y = 78.91;
		return t;
	};
	_proto.mine1_i = function () {
		var t = new eui.Image();
		this.mine1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 75.97;
		t.y = 81.69;
		return t;
	};
	_proto.mine2_i = function () {
		var t = new eui.Image();
		this.mine2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 92.67;
		t.y = 115;
		return t;
	};
	_proto.mine4_i = function () {
		var t = new eui.Image();
		this.mine4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 4.6;
		t.y = 115.64;
		return t;
	};
	_proto.mine3_i = function () {
		var t = new eui.Image();
		this.mine3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "minered1";
		t.x = 50.36;
		t.y = 138.51;
		return t;
	};
	_proto.myLittleTitle_i = function () {
		var t = new eui.Label();
		this.myLittleTitle = t;
		t.horizontalCenter = 0;
		t.text = "niuniu";
		t.textColor = 0x0ca80b;
		t.y = 53.11;
		return t;
	};
	_proto.mytitle_i = function () {
		var t = new eui.Image();
		this.mytitle = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "niuTitle10";
		t.visible = false;
		t.y = 30;
		return t;
	};
	_proto.tool_i = function () {
		var t = new eui.Group();
		this.tool = t;
		t.anchorOffsetX = 388;
		t.scaleX = 1;
		t.visible = false;
		t.x = 521.5;
		t.y = 12.17;
		t.elementsContent = [this.situp_i(),this.locationBtn_i(),this.setting_i(),this.wanfa_i(),this.jiesan_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 79;
		t.y = 0;
		t.skinName = niuniuIndex$Skin61;
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = 0;
		t.skinName = niuniuIndex$Skin62;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 319;
		t.y = 0;
		t.skinName = niuniuIndex$Skin63;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 239;
		t.y = 0;
		t.skinName = niuniuIndex$Skin64;
		return t;
	};
	_proto.jiesan_i = function () {
		var t = new eui.Button();
		this.jiesan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 159;
		t.y = 0;
		t.skinName = niuniuIndex$Skin65;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 6;
		t.y = 835.98;
		t.elementsContent = [this._Image2_i(),this.winnum0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum0_i = function () {
		var t = new eui.Label();
		this.winnum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myzhuang_i = function () {
		var t = new eui.Image();
		this.myzhuang = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "dealer";
		t.visible = false;
		t.x = 183.5;
		t.y = 846.48;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new eui.Group();
		this.myInfo = t;
		t.x = 6.5;
		t.y = 863.37;
		t.elementsContent = [this._Image3_i(),this.myHeadImg_i(),this.offline_i(),this.myPoint_i(),this.myName_i(),this.myYY_i(),this.biaoqing_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "myInfo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myHeadImg_i = function () {
		var t = new eui.Image();
		this.myHeadImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "33_png";
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 96;
		t.source = "offline";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.myPoint_i = function () {
		var t = new eui.Label();
		this.myPoint = t;
		t.height = 21;
		t.size = 21;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xF4DF58;
		t.width = 71;
		t.x = 116.5;
		t.y = 60.09;
		return t;
	};
	_proto.myName_i = function () {
		var t = new eui.Label();
		this.myName = t;
		t.anchorOffsetX = 0;
		t.height = 21;
		t.size = 21;
		t.text = "魂族娱乐";
		t.width = 86;
		t.x = 110.5;
		t.y = 30.5;
		return t;
	};
	_proto.myYY_i = function () {
		var t = new eui.Image();
		this.myYY = t;
		t.height = 96;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 96;
		t.x = 5.65;
		t.y = 3.89;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
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
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 18;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 100;
		t.height = 155;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 408;
		t.x = 7.6;
		t.y = 864.28;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.mybei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sunshi_png";
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "lossBei_fnt";
		t.text = "123";
		t.verticalCenter = 0;
		t.x = 147.4;
		return t;
	};
	_proto.mybei_i = function () {
		var t = new eui.Image();
		this.mybei = t;
		t.source = "bei_png";
		t.verticalCenter = 0;
		t.x = 312.92;
		return t;
	};
	_proto.myAddPoint_i = function () {
		var t = new eui.Label();
		this.myAddPoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "+20";
		t.x = 30;
		t.y = 900.85;
		return t;
	};
	_proto.callGroup_i = function () {
		var t = new eui.Group();
		this.callGroup = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = 404;
		t.y = 732.13;
		t.elementsContent = [this._Group3_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 170.05;
		t.elementsContent = [this._Image5_i(),this.myDaojinum_i(),this.callBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "niubk1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myDaojinum_i = function () {
		var t = new eui.Label();
		this.myDaojinum = t;
		t.height = 45;
		t.size = 45;
		t.text = "10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		t.width = 51;
		t.x = 30.68;
		return t;
	};
	_proto.callBtn_i = function () {
		var t = new eui.Button();
		this.callBtn = t;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = -4.5;
		t.x = 108.59;
		t.skinName = niuniuIndex$Skin66;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = -2.39;
		t.y = -10;
		t.elementsContent = [this._Image6_i(),this._Group4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276.86;
		t.scale9Grid = new egret.Rectangle(53,39,506,89);
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niubk2";
		t.width = 399.31;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this.chooseShai0_i(),this.chooseShai1_i(),this.chooseShai2_i(),this.chooseShai3_i(),this.chooseShai4_i(),this.chooseShai11_i()];
		return t;
	};
	_proto.chooseShai0_i = function () {
		var t = new eui.Group();
		this.chooseShai0 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 1;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.shaizi0_i(),this.selected0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi0_i = function () {
		var t = new eui.Image();
		this.shaizi0 = t;
		t.horizontalCenter = 0;
		t.source = "red1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected0_i = function () {
		var t = new eui.Image();
		this.selected0 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai1_i = function () {
		var t = new eui.Group();
		this.chooseShai1 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 81;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.shaizi1_i(),this.selected1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi1_i = function () {
		var t = new eui.Image();
		this.shaizi1 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected1_i = function () {
		var t = new eui.Image();
		this.selected1 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai2_i = function () {
		var t = new eui.Group();
		this.chooseShai2 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 161;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.shaizi2_i(),this.selected2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi2_i = function () {
		var t = new eui.Image();
		this.shaizi2 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected2_i = function () {
		var t = new eui.Image();
		this.selected2 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai3_i = function () {
		var t = new eui.Group();
		this.chooseShai3 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 0;
		t.y = 79;
		t.elementsContent = [this._Image10_i(),this.shaizi3_i(),this.selected3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi3_i = function () {
		var t = new eui.Image();
		this.shaizi3 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected3_i = function () {
		var t = new eui.Image();
		this.selected3 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai4_i = function () {
		var t = new eui.Group();
		this.chooseShai4 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 81;
		t.y = 79;
		t.elementsContent = [this._Image11_i(),this.shaizi4_i(),this.selected4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi4_i = function () {
		var t = new eui.Image();
		this.shaizi4 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected4_i = function () {
		var t = new eui.Image();
		this.selected4 = t;
		t.height = 92;
		t.source = "niuselected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai11_i = function () {
		var t = new eui.Group();
		this.chooseShai11 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.visible = false;
		t.x = 159.75;
		t.y = 79;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai6";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 92;
		t.source = "niuselected";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "share";
		t.visible = false;
		t.x = 389.08;
		t.y = 0;
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
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.width = 330;
		t.y = 18;
		return t;
	};
	_proto.resetNumGroup_i = function () {
		var t = new eui.Group();
		this.resetNumGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Label2_i(),this.resetNum_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "重摇次数：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.resetNum_i = function () {
		var t = new eui.Label();
		this.resetNum = t;
		t.text = "10/20";
		t.textAlign = "left";
		t.textColor = 0x470000;
		t.x = 143;
		t.y = 0;
		return t;
	};
	_proto.tongpei_i = function () {
		var t = new eui.Image();
		this.tongpei = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "tongpeititle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 692;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = niuniuIndex$Skin67;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image16_i(),this.juhua_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 1038;
		t.source = "mengban_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 16;
		t.y = 899.37;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 956.33;
		t.elementsContent = [this._Image17_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "dibuBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 105.29;
		t.y = 23.68;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = niuniuIndex$Skin68;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = -7;
		t.y = -92.66;
		t.elementsContent = [this._Image18_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image18_i = function () {
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
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 284.5;
		t.y = 26.35;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = niuniuIndex$Skin69;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 475.94;
		t.y = 26.35;
		t.elementsContent = [this.pangguanBtn_i()];
		return t;
	};
	_proto.pangguanBtn_i = function () {
		var t = new eui.Button();
		this.pangguanBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = niuniuIndex$Skin70;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 3.5;
		t.y = 778.91;
		t.elementsContent = [this._Image19_i(),this.messageT_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messageT_i = function () {
		var t = new eui.Label();
		this.messageT = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return niuniuIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/RedBlack/headBoxRb.exml'] = window.headBox = (function (_super) {
	__extends(headBox, _super);
	function headBox() {
		_super.call(this);
		this.skinParts = ["whoseTurn","headImg","nickname","point","YY","offline","gou","chatpop","callDian","call","chatpop0","call0","out","addpoint","readyStatus","detail","winnum","muchWin","shaizhong","shaiDrangon","baozi","animate","shai0","shai1","shai2","shai4","shai3","kai","title","shaiGroup","biaoqing","yaoqing","sit","endImg","endContent","bei","gameendTip","onlyThese","userInfoGroup","message","messagebg"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.userInfoGroup_i(),this.messagebg_i()];
	}
	var _proto = headBox.prototype;

	_proto.userInfoGroup_i = function () {
		var t = new eui.Group();
		this.userInfoGroup = t;
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this.detail_i(),this._Image3_i(),this.muchWin_i(),this.shaiGroup_i(),this.biaoqing_i(),this.yaoqing_i(),this.sit_i(),this._Label2_i(),this.gameendTip_i(),this.onlyThese_i()];
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Group();
		this.detail = t;
		t.x = 125.3;
		t.y = 41;
		t.elementsContent = [this._Image1_i(),this.whoseTurn_i(),this._Group1_i(),this.call_i(),this.call0_i(),this._Group2_i(),this.addpoint_i(),this.readyStatus_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "headdikuang";
		t.x = 2.2;
		t.y = 1;
		return t;
	};
	_proto.whoseTurn_i = function () {
		var t = new eui.Image();
		this.whoseTurn = t;
		t.source = "bzHeadkuang";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 16.8;
		t.y = 21.15;
		t.elementsContent = [this.headImg_i(),this.nickname_i(),this.point_i(),this.YY_i(),this.offline_i(),this.gou_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.source = "33_png";
		t.verticalCenter = -27.5;
		t.width = 73;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "tom922";
		t.textAlign = "center";
		t.width = 71;
		t.y = 80.78;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Label();
		this.point = t;
		t.height = 21;
		t.horizontalCenter = 0.5;
		t.size = 21;
		t.text = "999999";
		t.textAlign = "center";
		t.textColor = 0xf4df58;
		t.width = 71;
		t.y = 106.25;
		return t;
	};
	_proto.YY_i = function () {
		var t = new eui.Image();
		this.YY = t;
		t.height = 73;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 73;
		t.x = 1.03;
		t.y = 0;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 73;
		t.source = "offline";
		t.visible = false;
		t.width = 73;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "fly";
		t.x = 17;
		t.y = -17;
		return t;
	};
	_proto.call_i = function () {
		var t = new eui.Group();
		this.call = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop_i(),this.callDian_i()];
		return t;
	};
	_proto.chatpop_i = function () {
		var t = new eui.Image();
		this.chatpop = t;
		t.scale9Grid = new egret.Rectangle(25,17,74,13);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.callDian_i = function () {
		var t = new eui.Image();
		this.callDian = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "mine4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.call0_i = function () {
		var t = new eui.Group();
		this.call0 = t;
		t.visible = false;
		t.x = -109.32;
		t.y = -50;
		t.elementsContent = [this.chatpop0_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto.chatpop0_i = function () {
		var t = new eui.Image();
		this.chatpop0 = t;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "mine4";
		t.x = 75.99;
		t.y = 9.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.size = 25;
		t.text = "3个";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 53;
		t.x = 14.42;
		t.y = 12.73;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 43;
		t.y = 52.5;
		t.elementsContent = [this.out_i()];
		return t;
	};
	_proto.out_i = function () {
		var t = new eui.Image();
		this.out = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "out";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addpoint_i = function () {
		var t = new eui.Label();
		this.addpoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+10";
		t.textColor = 0xdfe200;
		t.x = 22.7;
		t.y = 44;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 12.3;
		t.y = 41.15;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.visible = false;
		t.x = 0;
		t.y = 53;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 123;
		t.y = 11;
		t.elementsContent = [this._Image4_i(),this.winnum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum_i = function () {
		var t = new eui.Label();
		this.winnum = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shaiGroup_i = function () {
		var t = new eui.Group();
		this.shaiGroup = t;
		t.height = 162;
		t.width = 122;
		t.x = 245.32;
		t.y = 50.32;
		t.elementsContent = [this.shaiDrangon_i(),this.animate_i(),this.shai0_i(),this.shai1_i(),this.shai2_i(),this.shai4_i(),this.shai3_i(),this.kai_i(),this.title_i(),this._Image5_i()];
		return t;
	};
	_proto.shaiDrangon_i = function () {
		var t = new eui.Group();
		this.shaiDrangon = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animate_i = function () {
		var t = new eui.Group();
		this.animate = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.baozi_i()];
		return t;
	};
	_proto.baozi_i = function () {
		var t = new eui.Image();
		this.baozi = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "leopard";
		t.visible = false;
		t.x = -11.810000000000002;
		t.y = -30.66;
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 5.51;
		t.y = 55.67;
		return t;
	};
	_proto.shai1_i = function () {
		var t = new eui.Image();
		this.shai1 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 53;
		t.y = 57.33;
		return t;
	};
	_proto.shai2_i = function () {
		var t = new eui.Image();
		this.shai2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 63.19;
		t.y = 83.3;
		return t;
	};
	_proto.shai4_i = function () {
		var t = new eui.Image();
		this.shai4 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = -3.96;
		t.y = 84.34;
		return t;
	};
	_proto.shai3_i = function () {
		var t = new eui.Image();
		this.shai3 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mine1";
		t.x = 31.02;
		t.y = 100.87;
		return t;
	};
	_proto.kai_i = function () {
		var t = new eui.Image();
		this.kai = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kai1";
		t.visible = false;
		t.x = -71.54;
		t.y = -96.62;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.visible = false;
		t.y = 18;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 61.5;
		t.anchorOffsetY = 60;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "boom_0002";
		t.visible = false;
		t.x = 57.93;
		t.y = 128;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 134.1;
		t.y = 57;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "yaoqing";
		t.visible = false;
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto.sit_i = function () {
		var t = new eui.Image();
		this.sit = t;
		t.source = "sit";
		t.x = 132.1;
		t.y = 53;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "+10";
		t.textColor = 0x117a1b;
		t.visible = false;
		t.x = 144;
		t.y = 5;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 109;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.visible = false;
		t.x = 145.75;
		t.y = 51.4;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.bei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huoli_png";
		t.x = 7.34;
		t.y = 7.33;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "winbei_fnt";
		t.text = "389";
		t.verticalCenter = -1.5;
		t.x = 157.41;
		return t;
	};
	_proto.bei_i = function () {
		var t = new eui.Image();
		this.bei = t;
		t.source = "bei_png";
		t.verticalCenter = 0.5;
		t.x = 332.79;
		return t;
	};
	_proto.onlyThese_i = function () {
		var t = new eui.Image();
		this.onlyThese = t;
		t.height = 30;
		t.source = "Rb1ge";
		t.width = 30;
		t.x = 209.3;
		t.y = 175.48;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 60;
		t.y = 37;
		t.elementsContent = [this._Image6_i(),this.message_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.message_i = function () {
		var t = new eui.Label();
		this.message = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return headBox;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/RedBlack/redBlackIndex.exml'] = window.suohaIndex = (function (_super) {
	__extends(suohaIndex, _super);
	var suohaIndex$Skin71 = 	(function (_super) {
		__extends(suohaIndex$Skin71, _super);
		function suohaIndex$Skin71() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin71;
	})(eui.Skin);

	var suohaIndex$Skin72 = 	(function (_super) {
		__extends(suohaIndex$Skin72, _super);
		function suohaIndex$Skin72() {
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
		var _proto = suohaIndex$Skin72.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin72;
	})(eui.Skin);

	var suohaIndex$Skin73 = 	(function (_super) {
		__extends(suohaIndex$Skin73, _super);
		function suohaIndex$Skin73() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "location_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin73;
	})(eui.Skin);

	var suohaIndex$Skin74 = 	(function (_super) {
		__extends(suohaIndex$Skin74, _super);
		function suohaIndex$Skin74() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameset";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin74;
	})(eui.Skin);

	var suohaIndex$Skin75 = 	(function (_super) {
		__extends(suohaIndex$Skin75, _super);
		function suohaIndex$Skin75() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin75;
	})(eui.Skin);

	var suohaIndex$Skin76 = 	(function (_super) {
		__extends(suohaIndex$Skin76, _super);
		function suohaIndex$Skin76() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin76;
	})(eui.Skin);

	var suohaIndex$Skin77 = 	(function (_super) {
		__extends(suohaIndex$Skin77, _super);
		function suohaIndex$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","select1click")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","select1gray")
					])
			];
		}
		var _proto = suohaIndex$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "select1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin77;
	})(eui.Skin);

	var suohaIndex$Skin78 = 	(function (_super) {
		__extends(suohaIndex$Skin78, _super);
		function suohaIndex$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","select2click")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","select2gray")
					])
			];
		}
		var _proto = suohaIndex$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "select2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin78;
	})(eui.Skin);

	var suohaIndex$Skin79 = 	(function (_super) {
		__extends(suohaIndex$Skin79, _super);
		function suohaIndex$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","select3click")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","select3gray")
					])
			];
		}
		var _proto = suohaIndex$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "select3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin79;
	})(eui.Skin);

	var suohaIndex$Skin80 = 	(function (_super) {
		__extends(suohaIndex$Skin80, _super);
		function suohaIndex$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","select4click")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","select4gray")
					])
			];
		}
		var _proto = suohaIndex$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "select4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin80;
	})(eui.Skin);

	var suohaIndex$Skin81 = 	(function (_super) {
		__extends(suohaIndex$Skin81, _super);
		function suohaIndex$Skin81() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin81;
	})(eui.Skin);

	var suohaIndex$Skin82 = 	(function (_super) {
		__extends(suohaIndex$Skin82, _super);
		function suohaIndex$Skin82() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuYY";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin82;
	})(eui.Skin);

	var suohaIndex$Skin83 = 	(function (_super) {
		__extends(suohaIndex$Skin83, _super);
		function suohaIndex$Skin83() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuMsg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin83;
	})(eui.Skin);

	var suohaIndex$Skin84 = 	(function (_super) {
		__extends(suohaIndex$Skin84, _super);
		function suohaIndex$Skin84() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuPlayerList";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin84;
	})(eui.Skin);

	function suohaIndex() {
		_super.call(this);
		this.skinParts = ["watching","menu","playcount","roompwd","basescore","shaizhong","shaizhongGroup","myBaozi","myAnimate","mine0","mine1","mine2","mine4","mine3","myShaiGroup","situp","locationBtn","setting","wanfa","jiesan","tool","winnum0","muchWin","chatpop","myCallDian","myCall","myHeadImg","offline","myPoint","myName","out","myYY","biaoqing","myInfo","dimissProcess","dismissGroup","endImg","endContent","mybei","gameendTip","myAddPoint","myDaojinum","choose0","howmany0","choose1","howmany1","choose2","howmany2","choose3","howmany3","callGroup","yaoqing","menban","whoJoin","joinNotice","resetNum","resetNumGroup","kill","readyBtn","readyStatus","voiceplay","luyingNotice","lyNoticeGroup","xiaoxi","pangguanBtn","juhua","waitConnect","yying","messageT","messagebg"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.watching_i(),this.menu_i(),this._Group1_i(),this._Group2_i(),this.myShaiGroup_i(),this.tool_i(),this.muchWin_i(),this.myInfo_i(),this.dismissGroup_i(),this.gameendTip_i(),this.myAddPoint_i(),this.callGroup_i(),this.yaoqing_i(),this.menban_i(),this.joinNotice_i(),this.resetNumGroup_i(),this._Group10_i(),this._Group11_i(),this.readyStatus_i(),this._Group15_i(),this.waitConnect_i(),this.yying_i(),this.messagebg_i()];
	}
	var _proto = suohaIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.watching_i = function () {
		var t = new eui.Image();
		this.watching = t;
		t.source = "watching_png";
		t.x = 440;
		t.y = 811;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 536.39;
		t.y = 14.5;
		t.skinName = suohaIndex$Skin71;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 12.5;
		t.y = 8;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this.roompwd_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 100;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.left = 18;
		t.text = "局数：0/1";
		t.y = 58.5;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.left = 18;
		t.text = "房间号：666666";
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 516;
		t.elementsContent = [this.basescore_i(),this._Label1_i()];
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bold = true;
		t.text = "底分：1分";
		t.textColor = 0x2e815c;
		t.x = 138;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "红黑单双";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myShaiGroup_i = function () {
		var t = new eui.Group();
		this.myShaiGroup = t;
		t.height = 221;
		t.horizontalCenter = 7;
		t.width = 162;
		t.y = 741.87;
		t.elementsContent = [this.shaizhongGroup_i(),this.myAnimate_i(),this.mine0_i(),this.mine1_i(),this.mine2_i(),this.mine4_i(),this.mine3_i(),this._Image2_i()];
		return t;
	};
	_proto.shaizhongGroup_i = function () {
		var t = new eui.Group();
		this.shaizhongGroup = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myAnimate_i = function () {
		var t = new eui.Group();
		this.myAnimate = t;
		t.height = 121;
		t.width = 161;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myBaozi_i()];
		return t;
	};
	_proto.myBaozi_i = function () {
		var t = new eui.Image();
		this.myBaozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.visible = false;
		t.x = -21.81;
		t.y = -30.66;
		return t;
	};
	_proto.mine0_i = function () {
		var t = new eui.Image();
		this.mine0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 13.91;
		t.y = 83.91;
		return t;
	};
	_proto.mine1_i = function () {
		var t = new eui.Image();
		this.mine1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 75.97;
		t.y = 86.69;
		return t;
	};
	_proto.mine2_i = function () {
		var t = new eui.Image();
		this.mine2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 92.67;
		t.y = 120;
		return t;
	};
	_proto.mine4_i = function () {
		var t = new eui.Image();
		this.mine4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 4.6;
		t.y = 120.64;
		return t;
	};
	_proto.mine3_i = function () {
		var t = new eui.Image();
		this.mine3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 50.36;
		t.y = 143.51;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 61.5;
		t.anchorOffsetY = 60;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "boom_0002";
		t.visible = false;
		t.x = 85.14;
		t.y = 173.32;
		return t;
	};
	_proto.tool_i = function () {
		var t = new eui.Group();
		this.tool = t;
		t.anchorOffsetX = 388;
		t.scaleX = 1;
		t.x = 521.5;
		t.y = 12.17;
		t.elementsContent = [this.situp_i(),this.locationBtn_i(),this.setting_i(),this.wanfa_i(),this.jiesan_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 78;
		t.y = 0;
		t.skinName = suohaIndex$Skin72;
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = 0;
		t.skinName = suohaIndex$Skin73;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 318;
		t.y = 0;
		t.skinName = suohaIndex$Skin74;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 238;
		t.y = 0;
		t.skinName = suohaIndex$Skin75;
		return t;
	};
	_proto.jiesan_i = function () {
		var t = new eui.Button();
		this.jiesan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 158;
		t.y = 0;
		t.skinName = suohaIndex$Skin76;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 6;
		t.y = 831.98;
		t.elementsContent = [this._Image3_i(),this.winnum0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum0_i = function () {
		var t = new eui.Label();
		this.winnum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new eui.Group();
		this.myInfo = t;
		t.x = 6.5;
		t.y = 859.37;
		t.elementsContent = [this._Image4_i(),this.myCall_i(),this.myHeadImg_i(),this.offline_i(),this.myPoint_i(),this.myName_i(),this._Group3_i(),this.myYY_i(),this.biaoqing_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "myInfo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myCall_i = function () {
		var t = new eui.Group();
		this.myCall = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 94.05000000000001;
		t.y = -50;
		t.elementsContent = [this.chatpop_i(),this.myCallDian_i()];
		return t;
	};
	_proto.chatpop_i = function () {
		var t = new eui.Image();
		this.chatpop = t;
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(25,17,75,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "chatpop_png";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myCallDian_i = function () {
		var t = new eui.Image();
		this.myCallDian = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "select1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myHeadImg_i = function () {
		var t = new eui.Image();
		this.myHeadImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "33_png";
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 96;
		t.source = "offline";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.myPoint_i = function () {
		var t = new eui.Label();
		this.myPoint = t;
		t.height = 21;
		t.size = 21;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xF4DF58;
		t.width = 71;
		t.x = 116.5;
		t.y = 60.09;
		return t;
	};
	_proto.myName_i = function () {
		var t = new eui.Label();
		this.myName = t;
		t.anchorOffsetX = 0;
		t.height = 21;
		t.size = 21;
		t.text = "魂族娱乐";
		t.width = 86;
		t.x = 110.5;
		t.y = 30.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 20;
		t.x = 42.33;
		t.y = 41.67;
		t.elementsContent = [this.out_i()];
		return t;
	};
	_proto.out_i = function () {
		var t = new eui.Image();
		this.out = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6999999999999998;
		t.scaleY = 0.6999999999999998;
		t.source = "out";
		t.verticalCenter = 0;
		t.x = -32;
		t.y = 66;
		return t;
	};
	_proto.myYY_i = function () {
		var t = new eui.Image();
		this.myYY = t;
		t.height = 96;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
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
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 18;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 100;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 7.6;
		t.y = 860.28;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.mybei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sunshi_png";
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "lossBei_fnt";
		t.text = "123";
		t.verticalCenter = 0;
		t.x = 147.4;
		return t;
	};
	_proto.mybei_i = function () {
		var t = new eui.Image();
		this.mybei = t;
		t.source = "bei_png";
		t.verticalCenter = 0;
		t.x = 312.92;
		return t;
	};
	_proto.myAddPoint_i = function () {
		var t = new eui.Label();
		this.myAddPoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "+20";
		t.x = 30;
		t.y = 896.85;
		return t;
	};
	_proto.callGroup_i = function () {
		var t = new eui.Group();
		this.callGroup = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = 425;
		t.y = 701.13;
		t.elementsContent = [this._Group4_i(),this._Group9_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.myDaojinum_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "rBDojiBg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myDaojinum_i = function () {
		var t = new eui.Label();
		this.myDaojinum = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "99";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 51;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -1.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.y = 58.95;
		t.elementsContent = [this._Image7_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 363.74;
		t.scale9Grid = new egret.Rectangle(28,26,388,139);
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "rBbg";
		t.width = 335.82;
		t.x = 1.17;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 27.41;
		t.y = 18.99;
		t.elementsContent = [this.choose0_i(),this._Image8_i(),this.howmany0_i()];
		return t;
	};
	_proto.choose0_i = function () {
		var t = new eui.Button();
		this.choose0 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = suohaIndex$Skin77;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "numbg";
		t.y = 90;
		return t;
	};
	_proto.howmany0_i = function () {
		var t = new eui.Label();
		this.howmany0 = t;
		t.horizontalCenter = 0;
		t.text = "3个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 95.54;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 135.9;
		t.y = 18.99;
		t.elementsContent = [this.choose1_i(),this._Image9_i(),this.howmany1_i()];
		return t;
	};
	_proto.choose1_i = function () {
		var t = new eui.Button();
		this.choose1 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = suohaIndex$Skin78;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "numbg";
		t.y = 90;
		return t;
	};
	_proto.howmany1_i = function () {
		var t = new eui.Label();
		this.howmany1 = t;
		t.horizontalCenter = 0;
		t.text = "3个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 95.54;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 29.01;
		t.y = 123.79;
		t.elementsContent = [this.choose2_i(),this._Image10_i(),this.howmany2_i()];
		return t;
	};
	_proto.choose2_i = function () {
		var t = new eui.Button();
		this.choose2 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = suohaIndex$Skin79;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "numbg";
		t.y = 90;
		return t;
	};
	_proto.howmany2_i = function () {
		var t = new eui.Label();
		this.howmany2 = t;
		t.horizontalCenter = 0;
		t.text = "3个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 95.54;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 135.9;
		t.y = 124.2;
		t.elementsContent = [this.choose3_i(),this._Image11_i(),this.howmany3_i()];
		return t;
	};
	_proto.choose3_i = function () {
		var t = new eui.Button();
		this.choose3 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = suohaIndex$Skin80;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "numbg";
		t.y = 90;
		return t;
	};
	_proto.howmany3_i = function () {
		var t = new eui.Label();
		this.howmany3 = t;
		t.horizontalCenter = 0;
		t.text = "3个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 95.54;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "share";
		t.visible = false;
		t.x = 389.08;
		t.y = 0;
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
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.width = 330;
		t.y = 18;
		return t;
	};
	_proto.resetNumGroup_i = function () {
		var t = new eui.Group();
		this.resetNumGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -34;
		t.elementsContent = [this._Label2_i(),this.resetNum_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "重摇次数：";
		t.textColor = 0xffffff;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.resetNum_i = function () {
		var t = new eui.Label();
		this.resetNum = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "x7倍";
		t.textAlign = "left";
		t.textColor = 0xfff500;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 1;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1;
		t.elementsContent = [this.kill_i()];
		return t;
	};
	_proto.kill_i = function () {
		var t = new eui.Image();
		this.kill = t;
		t.horizontalCenter = 0;
		t.source = "Rb3kill";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 692;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin81;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 16;
		t.y = 895.37;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 956.33;
		t.elementsContent = [this._Image13_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "dibuBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 105.29;
		t.y = 23.68;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin82;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = -7;
		t.y = -92.66;
		t.elementsContent = [this._Image14_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image14_i = function () {
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
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 284.5;
		t.y = 26.35;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin83;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 475.94;
		t.y = 26.35;
		t.elementsContent = [this.pangguanBtn_i()];
		return t;
	};
	_proto.pangguanBtn_i = function () {
		var t = new eui.Button();
		this.pangguanBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin84;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this.juhua_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "redBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.yying_i = function () {
		var t = new eui.Image();
		this.yying = t;
		t.horizontalCenter = 0;
		t.source = "newPublic_json.isLuying";
		t.visible = false;
		t.y = 327.67;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 3.5;
		t.y = 778.91;
		t.elementsContent = [this._Image16_i(),this.messageT_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messageT_i = function () {
		var t = new eui.Label();
		this.messageT = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	return suohaIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/singleMode/singleMode.exml'] = window.singleMode = (function (_super) {
	__extends(singleMode, _super);
	var singleMode$Skin85 = 	(function (_super) {
		__extends(singleMode$Skin85, _super);
		function singleMode$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","repeatclick_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = singleMode$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "repeat_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return singleMode$Skin85;
	})(eui.Skin);

	var singleMode$Skin86 = 	(function (_super) {
		__extends(singleMode$Skin86, _super);
		function singleMode$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shakeclick_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = singleMode$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shake_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return singleMode$Skin86;
	})(eui.Skin);

	var singleMode$Skin87 = 	(function (_super) {
		__extends(singleMode$Skin87, _super);
		function singleMode$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BTN_BackClick_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = singleMode$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BTN_Back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return singleMode$Skin87;
	})(eui.Skin);

	function singleMode() {
		_super.call(this);
		this.skinParts = ["shaizhong","shaiDrangon","baozi","animate","shai0","shai1","shai2","shai4","shai3","title0","shaiGroup","reset","yaoyiyao","back"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.shaiGroup_i(),this.reset_i(),this.yaoyiyao_i(),this.back_i()];
	}
	var _proto = singleMode.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "singlemode_jpg";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.shaiGroup_i = function () {
		var t = new eui.Group();
		this.shaiGroup = t;
		t.horizontalCenter = 0;
		t.y = 547.38;
		t.elementsContent = [this.shaiDrangon_i(),this.animate_i(),this._Group1_i(),this.title0_i()];
		return t;
	};
	_proto.shaiDrangon_i = function () {
		var t = new eui.Group();
		this.shaiDrangon = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animate_i = function () {
		var t = new eui.Group();
		this.animate = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.baozi_i()];
		return t;
	};
	_proto.baozi_i = function () {
		var t = new eui.Image();
		this.baozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.x = -11.810000000000002;
		t.y = -30.66;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 133.42;
		t.elementsContent = [this.shai0_i(),this.shai1_i(),this.shai2_i(),this.shai4_i(),this.shai3_i()];
		return t;
	};
	_proto.shai0_i = function () {
		var t = new eui.Image();
		this.shai0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mine1";
		t.x = 19.46;
		t.y = 0;
		return t;
	};
	_proto.shai1_i = function () {
		var t = new eui.Image();
		this.shai1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mine1";
		t.x = 88.05;
		t.y = 0;
		return t;
	};
	_proto.shai2_i = function () {
		var t = new eui.Image();
		this.shai2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mine1";
		t.x = 103.78;
		t.y = 40;
		return t;
	};
	_proto.shai4_i = function () {
		var t = new eui.Image();
		this.shai4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mine1";
		t.x = 4.56;
		t.y = 40;
		return t;
	};
	_proto.shai3_i = function () {
		var t = new eui.Image();
		this.shai3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mine1";
		t.x = 54.12;
		t.y = 67.1;
		return t;
	};
	_proto.title0_i = function () {
		var t = new eui.Image();
		this.title0 = t;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.visible = false;
		t.y = 73.64;
		return t;
	};
	_proto.reset_i = function () {
		var t = new eui.Button();
		this.reset = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 840.24;
		t.skinName = singleMode$Skin85;
		return t;
	};
	_proto.yaoyiyao_i = function () {
		var t = new eui.Button();
		this.yaoyiyao = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 840.24;
		t.skinName = singleMode$Skin86;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Button();
		this.back = t;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 12;
		t.y = 12;
		t.skinName = singleMode$Skin87;
		return t;
	};
	return singleMode;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/suoha/suohaIndex.exml'] = window.suohaIndex = (function (_super) {
	__extends(suohaIndex, _super);
	var suohaIndex$Skin88 = 	(function (_super) {
		__extends(suohaIndex$Skin88, _super);
		function suohaIndex$Skin88() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "menu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin88;
	})(eui.Skin);

	var suohaIndex$Skin89 = 	(function (_super) {
		__extends(suohaIndex$Skin89, _super);
		function suohaIndex$Skin89() {
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
		var _proto = suohaIndex$Skin89.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.situp";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin89;
	})(eui.Skin);

	var suohaIndex$Skin90 = 	(function (_super) {
		__extends(suohaIndex$Skin90, _super);
		function suohaIndex$Skin90() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "location_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin90;
	})(eui.Skin);

	var suohaIndex$Skin91 = 	(function (_super) {
		__extends(suohaIndex$Skin91, _super);
		function suohaIndex$Skin91() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameset";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin91;
	})(eui.Skin);

	var suohaIndex$Skin92 = 	(function (_super) {
		__extends(suohaIndex$Skin92, _super);
		function suohaIndex$Skin92() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin92;
	})(eui.Skin);

	var suohaIndex$Skin93 = 	(function (_super) {
		__extends(suohaIndex$Skin93, _super);
		function suohaIndex$Skin93() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesan";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin93;
	})(eui.Skin);

	var suohaIndex$Skin94 = 	(function (_super) {
		__extends(suohaIndex$Skin94, _super);
		function suohaIndex$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btnshakeclick")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btnshakedisable")
					])
			];
		}
		var _proto = suohaIndex$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btnshake";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin94;
	})(eui.Skin);

	var suohaIndex$Skin95 = 	(function (_super) {
		__extends(suohaIndex$Skin95, _super);
		function suohaIndex$Skin95() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "biaozhunIndex_json.readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin95;
	})(eui.Skin);

	var suohaIndex$Skin96 = 	(function (_super) {
		__extends(suohaIndex$Skin96, _super);
		function suohaIndex$Skin96() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuYY";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin96;
	})(eui.Skin);

	var suohaIndex$Skin97 = 	(function (_super) {
		__extends(suohaIndex$Skin97, _super);
		function suohaIndex$Skin97() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuMsg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin97;
	})(eui.Skin);

	var suohaIndex$Skin98 = 	(function (_super) {
		__extends(suohaIndex$Skin98, _super);
		function suohaIndex$Skin98() {
			_super.call(this);
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
		var _proto = suohaIndex$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "newPublic_json.dibuPlayerList";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return suohaIndex$Skin98;
	})(eui.Skin);

	function suohaIndex() {
		_super.call(this);
		this.skinParts = ["yying","watching","menu","playcount","roompwd","basescore","situp","locationBtn","setting","wanfa","jiesan","tool","shaizhong","shaizhongGroup","myBaozi","myAnimate","mine0","mine1","mine2","mine4","mine3","mytitle","myShaiGroup","winnum0","muchWin","myHeadImg","offline","myPoint","myName","myYY","biaoqing","myInfo","dimissProcess","dismissGroup","endImg","endContent","mybei","gameendTip","myAddPoint","myDaojinum","callBtn","shaizi0","selected0","chooseShai0","shaizi1","selected1","chooseShai1","shaizi2","selected2","chooseShai2","shaizi3","selected3","chooseShai3","shaizi4","selected4","chooseShai4","chooseShai11","callGroup","yourMinCard","yaoqing","menban","whoJoin","joinNotice","readyStatus","messageT","messagebg","readyBtn","voiceplay","luyingNotice","lyNoticeGroup","xiaoxi","pangguanBtn","resetNum","resetNumGroup","juhua","waitConnect"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.yying_i(),this.watching_i(),this.menu_i(),this._Group1_i(),this._Group2_i(),this.tool_i(),this.myShaiGroup_i(),this.muchWin_i(),this.myInfo_i(),this.dismissGroup_i(),this.gameendTip_i(),this.myAddPoint_i(),this.callGroup_i(),this.yourMinCard_i(),this.yaoqing_i(),this.menban_i(),this.joinNotice_i(),this.readyStatus_i(),this.messagebg_i(),this._Group6_i(),this._Group10_i(),this.resetNumGroup_i(),this.waitConnect_i()];
	}
	var _proto = suohaIndex.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yying_i = function () {
		var t = new eui.Image();
		this.yying = t;
		t.horizontalCenter = 0;
		t.source = "newPublic_json.isLuying";
		t.visible = false;
		t.y = 327.67;
		return t;
	};
	_proto.watching_i = function () {
		var t = new eui.Image();
		this.watching = t;
		t.source = "watching_png";
		t.x = 440;
		t.y = 814;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Button();
		this.menu = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 536.39;
		t.y = 14.5;
		t.skinName = suohaIndex$Skin88;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 12.5;
		t.y = 8;
		t.elementsContent = [this._Rect1_i(),this.playcount_i(),this.roompwd_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 100;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playcount_i = function () {
		var t = new eui.Label();
		this.playcount = t;
		t.left = 18;
		t.text = "局数：0/1";
		t.y = 58.5;
		return t;
	};
	_proto.roompwd_i = function () {
		var t = new eui.Label();
		this.roompwd = t;
		t.left = 18;
		t.text = "房间号：666666";
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 499.62;
		t.elementsContent = [this.basescore_i(),this._Label1_i()];
		return t;
	};
	_proto.basescore_i = function () {
		var t = new eui.Label();
		this.basescore = t;
		t.bold = true;
		t.text = "底分：1分";
		t.textColor = 0x2e815c;
		t.x = 135.28;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "梭哈模式";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tool_i = function () {
		var t = new eui.Group();
		this.tool = t;
		t.anchorOffsetX = 388;
		t.scaleX = 1;
		t.visible = false;
		t.x = 521.5;
		t.y = 12.17;
		t.elementsContent = [this.situp_i(),this.locationBtn_i(),this.setting_i(),this.wanfa_i(),this.jiesan_i()];
		return t;
	};
	_proto.situp_i = function () {
		var t = new eui.Button();
		this.situp = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 81;
		t.y = 0;
		t.skinName = suohaIndex$Skin89;
		return t;
	};
	_proto.locationBtn_i = function () {
		var t = new eui.Button();
		this.locationBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = 0;
		t.skinName = suohaIndex$Skin90;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 321;
		t.y = 0;
		t.skinName = suohaIndex$Skin91;
		return t;
	};
	_proto.wanfa_i = function () {
		var t = new eui.Button();
		this.wanfa = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 241;
		t.y = 0;
		t.skinName = suohaIndex$Skin92;
		return t;
	};
	_proto.jiesan_i = function () {
		var t = new eui.Button();
		this.jiesan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 161;
		t.y = 0;
		t.skinName = suohaIndex$Skin93;
		return t;
	};
	_proto.myShaiGroup_i = function () {
		var t = new eui.Group();
		this.myShaiGroup = t;
		t.horizontalCenter = 7;
		t.y = 745.87;
		t.elementsContent = [this.shaizhongGroup_i(),this.myAnimate_i(),this.mine0_i(),this.mine1_i(),this.mine2_i(),this.mine4_i(),this.mine3_i(),this.mytitle_i()];
		return t;
	};
	_proto.shaizhongGroup_i = function () {
		var t = new eui.Group();
		this.shaizhongGroup = t;
		t.x = 0;
		t.y = -7;
		t.elementsContent = [this.shaizhong_i()];
		return t;
	};
	_proto.shaizhong_i = function () {
		var t = new eui.Image();
		this.shaizhong = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shaizhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myAnimate_i = function () {
		var t = new eui.Group();
		this.myAnimate = t;
		t.height = 121;
		t.width = 161;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.myBaozi_i()];
		return t;
	};
	_proto.myBaozi_i = function () {
		var t = new eui.Image();
		this.myBaozi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leopard";
		t.visible = false;
		t.x = -21.81;
		t.y = -30.66;
		return t;
	};
	_proto.mine0_i = function () {
		var t = new eui.Image();
		this.mine0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 13.91;
		t.y = 78.91;
		return t;
	};
	_proto.mine1_i = function () {
		var t = new eui.Image();
		this.mine1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 75.97;
		t.y = 81.69;
		return t;
	};
	_proto.mine2_i = function () {
		var t = new eui.Image();
		this.mine2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 92.67;
		t.y = 115;
		return t;
	};
	_proto.mine4_i = function () {
		var t = new eui.Image();
		this.mine4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 4.6;
		t.y = 115.64;
		return t;
	};
	_proto.mine3_i = function () {
		var t = new eui.Image();
		this.mine3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mine1";
		t.x = 50.36;
		t.y = 138.51;
		return t;
	};
	_proto.mytitle_i = function () {
		var t = new eui.Image();
		this.mytitle = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "suohaType6";
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.muchWin_i = function () {
		var t = new eui.Group();
		this.muchWin = t;
		t.x = 6;
		t.y = 835.98;
		t.elementsContent = [this._Image2_i(),this.winnum0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "typebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnum0_i = function () {
		var t = new eui.Label();
		this.winnum0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "10连胜";
		t.verticalCenter = 0;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new eui.Group();
		this.myInfo = t;
		t.x = 6.5;
		t.y = 863.37;
		t.elementsContent = [this._Image3_i(),this.myHeadImg_i(),this.offline_i(),this.myPoint_i(),this.myName_i(),this.myYY_i(),this.biaoqing_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "myInfo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myHeadImg_i = function () {
		var t = new eui.Image();
		this.myHeadImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.source = "33_png";
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.offline_i = function () {
		var t = new eui.Image();
		this.offline = t;
		t.height = 96;
		t.source = "offline";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.myPoint_i = function () {
		var t = new eui.Label();
		this.myPoint = t;
		t.height = 21;
		t.size = 21;
		t.text = "666666";
		t.textAlign = "center";
		t.textColor = 0xF4DF58;
		t.width = 71;
		t.x = 116.5;
		t.y = 60.09;
		return t;
	};
	_proto.myName_i = function () {
		var t = new eui.Label();
		this.myName = t;
		t.anchorOffsetX = 0;
		t.height = 21;
		t.size = 21;
		t.text = "魂族娱乐";
		t.width = 86;
		t.x = 110.5;
		t.y = 30.5;
		return t;
	};
	_proto.myYY_i = function () {
		var t = new eui.Image();
		this.myYY = t;
		t.height = 96;
		t.source = "newPublic_json.zhengzaishuohua";
		t.visible = false;
		t.width = 96;
		t.x = 3.65;
		t.y = 3.89;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Image();
		this.biaoqing = t;
		t.source = "10_png";
		t.visible = false;
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.dismissGroup_i = function () {
		var t = new eui.Group();
		this.dismissGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.dimissProcess_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
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
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 18;
		return t;
	};
	_proto.gameendTip_i = function () {
		var t = new eui.Group();
		this.gameendTip = t;
		t.anchorOffsetY = 100;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 7.6;
		t.y = 864.28;
		t.elementsContent = [this.endImg_i(),this.endContent_i(),this.mybei_i()];
		return t;
	};
	_proto.endImg_i = function () {
		var t = new eui.Image();
		this.endImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "sunshi_png";
		t.verticalCenter = 0;
		t.x = 9;
		return t;
	};
	_proto.endContent_i = function () {
		var t = new eui.BitmapLabel();
		this.endContent = t;
		t.font = "lossBei_fnt";
		t.text = "123";
		t.verticalCenter = 0;
		t.x = 147.4;
		return t;
	};
	_proto.mybei_i = function () {
		var t = new eui.Image();
		this.mybei = t;
		t.source = "bei_png";
		t.verticalCenter = 0;
		t.x = 312.92;
		return t;
	};
	_proto.myAddPoint_i = function () {
		var t = new eui.Label();
		this.myAddPoint = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "+20";
		t.x = 30;
		t.y = 900.85;
		return t;
	};
	_proto.callGroup_i = function () {
		var t = new eui.Group();
		this.callGroup = t;
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.x = 404;
		t.y = 724.13;
		t.elementsContent = [this._Group3_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 170.05;
		t.elementsContent = [this._Image5_i(),this.myDaojinum_i(),this.callBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "bkd";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myDaojinum_i = function () {
		var t = new eui.Label();
		this.myDaojinum = t;
		t.height = 45;
		t.size = 45;
		t.text = "10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		t.width = 51;
		t.x = 30.68;
		return t;
	};
	_proto.callBtn_i = function () {
		var t = new eui.Button();
		this.callBtn = t;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = -4.5;
		t.x = 108.59;
		t.skinName = suohaIndex$Skin94;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = -2.39;
		t.y = -10;
		t.elementsContent = [this._Image6_i(),this._Group4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276.86;
		t.scale9Grid = new egret.Rectangle(53,39,506,89);
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "bkt";
		t.width = 399.31;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this.chooseShai0_i(),this.chooseShai1_i(),this.chooseShai2_i(),this.chooseShai3_i(),this.chooseShai4_i(),this.chooseShai11_i()];
		return t;
	};
	_proto.chooseShai0_i = function () {
		var t = new eui.Group();
		this.chooseShai0 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 1;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.shaizi0_i(),this.selected0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi0_i = function () {
		var t = new eui.Image();
		this.shaizi0 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected0_i = function () {
		var t = new eui.Image();
		this.selected0 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai1_i = function () {
		var t = new eui.Group();
		this.chooseShai1 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 81;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.shaizi1_i(),this.selected1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi1_i = function () {
		var t = new eui.Image();
		this.shaizi1 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected1_i = function () {
		var t = new eui.Image();
		this.selected1 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai2_i = function () {
		var t = new eui.Group();
		this.chooseShai2 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 161;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this.shaizi2_i(),this.selected2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi2_i = function () {
		var t = new eui.Image();
		this.shaizi2 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected2_i = function () {
		var t = new eui.Image();
		this.selected2 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai3_i = function () {
		var t = new eui.Group();
		this.chooseShai3 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 0;
		t.y = 79;
		t.elementsContent = [this._Image10_i(),this.shaizi3_i(),this.selected3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi3_i = function () {
		var t = new eui.Image();
		this.shaizi3 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected3_i = function () {
		var t = new eui.Image();
		this.selected3 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai4_i = function () {
		var t = new eui.Group();
		this.chooseShai4 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.x = 81;
		t.y = 79;
		t.elementsContent = [this._Image11_i(),this.shaizi4_i(),this.selected4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shaizi4_i = function () {
		var t = new eui.Image();
		this.shaizi4 = t;
		t.horizontalCenter = 0;
		t.source = "pinshai5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected4_i = function () {
		var t = new eui.Image();
		this.selected4 = t;
		t.height = 92;
		t.source = "selected";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chooseShai11_i = function () {
		var t = new eui.Group();
		this.chooseShai11 = t;
		t.scaleX = 0.8000000000000002;
		t.scaleY = 0.8000000000000002;
		t.visible = false;
		t.x = 159.75;
		t.y = 79;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "number_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pinshai6";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 92;
		t.source = "selected";
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yourMinCard_i = function () {
		var t = new eui.Image();
		this.yourMinCard = t;
		t.horizontalCenter = 0;
		t.source = "minCard";
		t.y = 501.44;
		return t;
	};
	_proto.yaoqing_i = function () {
		var t = new eui.Image();
		this.yaoqing = t;
		t.source = "share";
		t.visible = false;
		t.x = 389.08;
		t.y = 0;
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
	_proto.joinNotice_i = function () {
		var t = new eui.Group();
		this.joinNotice = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this.whoJoin_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "topNotice";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.whoJoin_i = function () {
		var t = new eui.Label();
		this.whoJoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "岁is半年报 欧文费围观，每次不能玩那个我IE那个覅我GV你弄完了那个";
		t.width = 330;
		t.y = 18;
		return t;
	};
	_proto.readyStatus_i = function () {
		var t = new eui.Image();
		this.readyStatus = t;
		t.source = "biaozhunIndex_json.readyStatus";
		t.x = 16;
		t.y = 899.37;
		return t;
	};
	_proto.messagebg_i = function () {
		var t = new eui.Group();
		this.messagebg = t;
		t.visible = false;
		t.x = 3.5;
		t.y = 778.91;
		t.elementsContent = [this._Image16_i(),this.messageT_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "qipao_png";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messageT_i = function () {
		var t = new eui.Label();
		this.messageT = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "我当年横扫澳门五条加尔后台同仁堂让他人";
		t.textAlign = "center";
		t.verticalCenter = -11;
		t.width = 220;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.width = 20;
		t.y = 692;
		t.elementsContent = [this.readyBtn_i()];
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin95;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 956.33;
		t.elementsContent = [this._Image17_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "dibuBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 105.29;
		t.y = 23.68;
		t.elementsContent = [this.voiceplay_i(),this.lyNoticeGroup_i()];
		return t;
	};
	_proto.voiceplay_i = function () {
		var t = new eui.Button();
		this.voiceplay = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin96;
		return t;
	};
	_proto.lyNoticeGroup_i = function () {
		var t = new eui.Group();
		this.lyNoticeGroup = t;
		t.horizontalCenter = -7;
		t.y = -92.66;
		t.elementsContent = [this._Image18_i(),this.luyingNotice_i()];
		return t;
	};
	_proto._Image18_i = function () {
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
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 284.5;
		t.y = 26.35;
		t.elementsContent = [this.xiaoxi_i()];
		return t;
	};
	_proto.xiaoxi_i = function () {
		var t = new eui.Button();
		this.xiaoxi = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin97;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 475.94;
		t.y = 26.35;
		t.elementsContent = [this.pangguanBtn_i()];
		return t;
	};
	_proto.pangguanBtn_i = function () {
		var t = new eui.Button();
		this.pangguanBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = suohaIndex$Skin98;
		return t;
	};
	_proto.resetNumGroup_i = function () {
		var t = new eui.Group();
		this.resetNumGroup = t;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 41;
		t.elementsContent = [this._Label2_i(),this.resetNum_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "重摇次数：";
		t.textColor = 0x2e815c;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.resetNum_i = function () {
		var t = new eui.Label();
		this.resetNum = t;
		t.size = 25;
		t.text = "10/20";
		t.textAlign = "left";
		t.textColor = 0x2e815c;
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto.waitConnect_i = function () {
		var t = new eui.Group();
		this.waitConnect = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image19_i(),this.juhua_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "greenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juhua_i = function () {
		var t = new eui.Image();
		this.juhua = t;
		t.horizontalCenter = 0;
		t.source = "juhua_png";
		t.verticalCenter = 0;
		return t;
	};
	return suohaIndex;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/watchingList/wantchScene.exml'] = window.wantchScene = (function (_super) {
	__extends(wantchScene, _super);
	function wantchScene() {
		_super.call(this);
		this.skinParts = ["menban","baseScore","playgound","nickname","playerList","showGroup"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.menban_i(),this.showGroup_i()];
	}
	var _proto = wantchScene.prototype;

	_proto.menban_i = function () {
		var t = new eui.Image();
		this.menban = t;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.showGroup_i = function () {
		var t = new eui.Group();
		this.showGroup = t;
		t.x = 329;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.baseScore_i(),this.playgound_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "pangGuanBgNew_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.baseScore_i = function () {
		var t = new eui.Label();
		this.baseScore = t;
		t.size = 25;
		t.text = "0";
		t.x = 88;
		t.y = 140.69;
		return t;
	};
	_proto.playgound_i = function () {
		var t = new eui.Label();
		this.playgound = t;
		t.size = 25;
		t.text = "10/10";
		t.x = 88;
		t.y = 183.7;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 700;
		t.horizontalCenter = 0.5;
		t.width = 300;
		t.y = 324.04;
		t.viewport = this.playerList_i();
		return t;
	};
	_proto.playerList_i = function () {
		var t = new eui.Group();
		this.playerList = t;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.nickname_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "33_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.size = 20;
		t.text = "婚族网路互娱一天也";
		t.verticalCenter = 0.5;
		t.width = 120;
		t.x = 88.98;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "-99999";
		t.verticalCenter = 0.5;
		t.x = 226.08;
		return t;
	};
	return wantchScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/watchingList/watchItem.exml'] = window.watchItem = (function (_super) {
	__extends(watchItem, _super);
	function watchItem() {
		_super.call(this);
		this.skinParts = ["head","nickname","score"];
		
		this.height = 70;
		this.width = 290;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = watchItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this.head_i(),this.nickname_i(),this.score_i()];
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "33_png";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.size = 20;
		t.text = "婚族网路互娱一天也";
		t.verticalCenter = 0.5;
		t.width = 120;
		t.x = 88.98;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.size = 20;
		t.text = "-99999";
		t.verticalCenter = 0;
		t.x = 226.08;
		return t;
	};
	return watchItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/hengxiangUI/henxiangNewMessage.exml'] = window.newMessage = (function (_super) {
	__extends(newMessage, _super);
	function newMessage() {
		_super.call(this);
		this.skinParts = ["menban","wenziButton","biaoqingButton","biao1","biao2","biao3","biao4","biao5","biao6","biao7","biao8","biao9","biao10","biao11","biao12","biao13","biao14","biao15","biaoqing","message1","message2","message3","message4","message5","message6","message7","message8","message9","message10","wenzi"];
		
		this.height = 500;
		this.width = 408;
		this.elementsContent = [this.menban_i(),this._Group3_i()];
	}
	var _proto = newMessage.prototype;

	_proto.menban_i = function () {
		var t = new eui.Rect();
		this.menban = t;
		t.fillAlpha = 0;
		t.height = 1038;
		t.strokeAlpha = 0;
		t.width = 640;
		t.x = -239;
		t.y = -538;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.rotation = 90;
		t.x = 395.85;
		t.y = 74;
		t.elementsContent = [this._Image1_i(),this.wenziButton_i(),this.biaoqingButton_i(),this.biaoqing_i(),this.wenzi_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "MessageBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wenziButton_i = function () {
		var t = new eui.Image();
		this.wenziButton = t;
		t.source = "wenzi_png";
		t.x = 8;
		t.y = 1.15;
		return t;
	};
	_proto.biaoqingButton_i = function () {
		var t = new eui.Image();
		this.biaoqingButton = t;
		t.source = "biaoqingN_png";
		t.x = 8;
		t.y = 196.52;
		return t;
	};
	_proto.biaoqing_i = function () {
		var t = new eui.Scroller();
		this.biaoqing = t;
		t.anchorOffsetX = 0;
		t.height = 301;
		t.rotation = -90;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.visible = false;
		t.width = 341;
		t.x = 86;
		t.y = 369;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -19.01;
		t.y = 3.33;
		t.elementsContent = [this.biao1_i(),this.biao2_i(),this.biao3_i(),this.biao4_i(),this.biao5_i(),this.biao6_i(),this.biao7_i(),this.biao8_i(),this.biao9_i(),this.biao10_i(),this.biao11_i(),this.biao12_i(),this.biao13_i(),this.biao14_i(),this.biao15_i()];
		return t;
	};
	_proto.biao1_i = function () {
		var t = new eui.Image();
		this.biao1 = t;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1_png";
		t.x = 462;
		t.y = 5.66;
		return t;
	};
	_proto.biao2_i = function () {
		var t = new eui.Image();
		this.biao2 = t;
		t.height = 84;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2_png";
		t.width = 83;
		t.x = 463.65;
		t.y = 104.66;
		return t;
	};
	_proto.biao3_i = function () {
		var t = new eui.Image();
		this.biao3 = t;
		t.height = 84;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "3_png";
		t.width = 83;
		t.x = 461.67;
		t.y = 197.5;
		return t;
	};
	_proto.biao4_i = function () {
		var t = new eui.Image();
		this.biao4 = t;
		t.height = 84;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "4_png";
		t.width = 83;
		t.x = 371.34;
		t.y = 8;
		return t;
	};
	_proto.biao5_i = function () {
		var t = new eui.Image();
		this.biao5 = t;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "5_png";
		t.x = 367;
		t.y = 104.66;
		return t;
	};
	_proto.biao6_i = function () {
		var t = new eui.Image();
		this.biao6 = t;
		t.height = 84;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "6_png";
		t.width = 83;
		t.x = 369.5;
		t.y = 211;
		return t;
	};
	_proto.biao7_i = function () {
		var t = new eui.Image();
		this.biao7 = t;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "7_png";
		t.x = 281.37;
		t.y = 5;
		return t;
	};
	_proto.biao8_i = function () {
		var t = new eui.Image();
		this.biao8 = t;
		t.rotation = 90;
		t.source = "8_png";
		t.x = 276.48;
		t.y = 104.5;
		return t;
	};
	_proto.biao9_i = function () {
		var t = new eui.Image();
		this.biao9 = t;
		t.rotation = 90;
		t.source = "9_png";
		t.x = 271.48;
		t.y = 203;
		return t;
	};
	_proto.biao10_i = function () {
		var t = new eui.Image();
		this.biao10 = t;
		t.rotation = 90;
		t.source = "10_png";
		t.x = 188.48;
		t.y = 1.66;
		return t;
	};
	_proto.biao11_i = function () {
		var t = new eui.Image();
		this.biao11 = t;
		t.rotation = 90;
		t.source = "11_png";
		t.x = 180.85;
		t.y = 105;
		return t;
	};
	_proto.biao12_i = function () {
		var t = new eui.Image();
		this.biao12 = t;
		t.rotation = 90;
		t.source = "12_png";
		t.x = 179.85;
		t.y = 203;
		return t;
	};
	_proto.biao13_i = function () {
		var t = new eui.Image();
		this.biao13 = t;
		t.rotation = 90;
		t.source = "13_png";
		t.x = 91.85;
		t.y = 3.66;
		return t;
	};
	_proto.biao14_i = function () {
		var t = new eui.Image();
		this.biao14 = t;
		t.rotation = 90;
		t.source = "14_png";
		t.x = 88.85;
		t.y = 104.5;
		return t;
	};
	_proto.biao15_i = function () {
		var t = new eui.Image();
		this.biao15 = t;
		t.rotation = 90;
		t.source = "15_png";
		t.x = 91.35;
		t.y = 204;
		return t;
	};
	_proto.wenzi_i = function () {
		var t = new eui.Scroller();
		this.wenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 301;
		t.rotation = -90;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "auto";
		t.width = 322;
		t.x = 85.5;
		t.y = 369;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -77;
		t.y = 0.5;
		t.elementsContent = [this.message1_i(),this.message2_i(),this.message3_i(),this.message4_i(),this.message5_i(),this.message6_i(),this.message7_i(),this.message8_i(),this.message9_i(),this.message10_i()];
		return t;
	};
	_proto.message1_i = function () {
		var t = new eui.Label();
		this.message1 = t;
		t.background = false;
		t.border = false;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  我出去叫人";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = -4.5;
		t.percentWidth = 100;
		t.x = 398;
		return t;
	};
	_proto.message2_i = function () {
		var t = new eui.Label();
		this.message2 = t;
		t.background = false;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  你的牌好靓哇";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 358;
		return t;
	};
	_proto.message3_i = function () {
		var t = new eui.Label();
		this.message3 = t;
		t.background = false;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  我当年横扫澳门五条街";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 318;
		return t;
	};
	_proto.message4_i = function () {
		var t = new eui.Label();
		this.message4 = t;
		t.background = false;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  算你牛逼";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 278;
		return t;
	};
	_proto.message5_i = function () {
		var t = new eui.Label();
		this.message5 = t;
		t.background = false;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  输得裤衩都没了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 238;
		return t;
	};
	_proto.message6_i = function () {
		var t = new eui.Label();
		this.message6 = t;
		t.background = false;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  谢谢老板";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 198;
		return t;
	};
	_proto.message7_i = function () {
		var t = new eui.Label();
		this.message7 = t;
		t.background = false;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  玩游戏请先进群";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 158;
		return t;
	};
	_proto.message8_i = function () {
		var t = new eui.Label();
		this.message8 = t;
		t.background = false;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  别磨蹭快点打牌";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 118;
		return t;
	};
	_proto.message9_i = function () {
		var t = new eui.Label();
		this.message9 = t;
		t.background = false;
		t.backgroundColor = 0x3A3A3A;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  别跟我抢庄";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 78;
		return t;
	};
	_proto.message10_i = function () {
		var t = new eui.Label();
		this.message10 = t;
		t.background = false;
		t.backgroundColor = 0x000000;
		t.height = 26;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "  我给你们送温暖了";
		t.textAlign = "center";
		t.textColor = 0xEFC586;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.percentWidth = 100;
		t.x = 38;
		return t;
	};
	return newMessage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/hengxiangUI/henxiangNotice.exml'] = window.Notice = (function (_super) {
	__extends(Notice, _super);
	function Notice() {
		_super.call(this);
		this.skinParts = ["content","confirm","cancel","mianban"];
		
		this.height = 640;
		this.width = 1038;
		this.elementsContent = [this._Image1_i(),this.mianban_i()];
	}
	var _proto = Notice.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mianban_i = function () {
		var t = new eui.Group();
		this.mianban = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.content_i(),this.confirm_i(),this.cancel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tishi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.horizontalCenter = 0;
		t.lineSpacing = 8;
		t.size = 22;
		t.text = "有游戏囧事打飞机顽皮偶尔感觉咩咩叫纳入规划in鹅肉共河内然后呢容纳后IE男人很";
		t.textAlign = "left";
		t.textColor = 0xbcbaba;
		t.verticalAlign = "middle";
		t.width = 380;
		t.y = 76;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Image();
		this.confirm = t;
		t.height = 52;
		t.source = "yes_xiao_png";
		t.width = 135.5;
		t.x = 72;
		t.y = 252;
		return t;
	};
	_proto.cancel_i = function () {
		var t = new eui.Image();
		this.cancel = t;
		t.height = 52;
		t.source = "quxiao_png";
		t.width = 135.5;
		t.x = 273;
		t.y = 252;
		return t;
	};
	return Notice;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/hengxiangUI/henxiangSetting.exml'] = window.setting = (function (_super) {
	__extends(setting, _super);
	var setting$Skin99 = 	(function (_super) {
		__extends(setting$Skin99, _super);
		function setting$Skin99() {
			_super.call(this);
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
		var _proto = setting$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "lord_exit_btn_close_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return setting$Skin99;
	})(eui.Skin);

	function setting() {
		_super.call(this);
		this.skinParts = ["m_mengban","close","bgMusic","bgAudio"];
		
		this.height = 1038;
		this.width = 640;
		this.elementsContent = [this.m_mengban_i(),this._Group1_i()];
	}
	var _proto = setting.prototype;

	_proto.m_mengban_i = function () {
		var t = new eui.Image();
		this.m_mengban = t;
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 519;
		t.percentHeight = 100;
		t.source = "mengban_png";
		t.percentWidth = 100;
		t.x = 320;
		t.y = 519.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.close_i(),this.bgMusic_i(),this.bgAudio_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.label = "";
		t.visible = false;
		t.x = 432;
		t.y = 10.67;
		t.skinName = setting$Skin99;
		return t;
	};
	_proto.bgMusic_i = function () {
		var t = new eui.Image();
		this.bgMusic = t;
		t.source = "lord_game_setting_checked_png";
		t.x = 160;
		t.y = 156.5;
		return t;
	};
	_proto.bgAudio_i = function () {
		var t = new eui.Image();
		this.bgAudio = t;
		t.source = "lord_game_setting_checked_png";
		t.x = 160;
		t.y = 244.5;
		return t;
	};
	return setting;
})(eui.Skin);