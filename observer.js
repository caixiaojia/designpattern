// 观察者模式
// 双向通信，既是消息的发送者，也是消息的创造者／有别于中介者模式

var Objserver = (function() {
    var _messages = {};
    return {
        register : function(type, fn) {
            if(typeof message[type] === 'undefined') {
                message[type] = [fn];
            } else {
                _messages[type].push(fn);
            }
        },
        fire : function(type, args) {
            if(!_messages[type]) return;
            var events = {
                type : type,
                args : args || {}
            },
            i = 0,
            len = _messages[type].length;
            for(; i < len; i++) {
                _messages[type][i].call(this, events);
            }
        },
        remove: function() {
            if(_messages[type] instanceof Array) {
                var i = _messages[type].length - 1;
                for(; i >= 0; i--) {
                    _messages[type][i] === fn && _messages[type].splice[i, 1]
                }
            }

        }
    }
})();
