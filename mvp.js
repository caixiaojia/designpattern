/**
 * Created by shawntsia on 2017/9/9.
 * mvp模式，方便data和view进行分离
 * //mvp模式目前还没有完全完成
 */

~(function() {
	var MVP = function() {

	};
	MVP.model = function() {
		var M = {};
		var data = {};
		var conf = {};

		return {
			getData : function(m) {
				return M.data[m];
			},
			setData : function(m, v) {
				M.data[m] = v;
				return v;
			},
			getConf : function(c) {
				return M.conf[c];
			},
			setConf : function(c, v) {
				M.conf[c] = v;
				return M.conf
			}
		}
	};
	MVP.view = function() {
		return function(str) {
			return html;
		}
	};
	MVP.presenter = function() {

	};
	MVP.init = function() {

	};
	window.MVP = MVP;
})();
