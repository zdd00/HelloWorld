/**
 *
 * @authors zdd (962375670@qq.com)
 * @date    2015-12-17 18:18:06
 * @version $Id$
 */
//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 31 ? (_PageHeight - 31) / 2 : 0,
    _LoadingLeft = _PageWidth > 31 ? (_PageWidth - 31) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background: #fff;z-index:10000;"><div style="width:20%; height:auto; position:absolute; left:50%; top:40%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);"><img src="http://xiyou.360eol.com/Public/Wap/images/load.gif" width="100%"/></div></div>';
//呈现loading效果
document.write(_LoadingHtml);

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
