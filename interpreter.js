/**
 * Created by shawntsia on 2017/9/9.
 * Interpreter : 解释器模式,通常用来进行文档元素的便利，我理解就如同相同规则的迭代
 */

function getSublingName(node) {
	if(node.previousNode) {
		var name = '',
			count = 1,
			nodeName = node.nodeName,
			sibling = node.previousSibling;
		while(sibling) {
			// 进行赋值和操作
			sibling = node.previousSibling;
		}
	} else {
		return '';
	}
}