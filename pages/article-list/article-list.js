var t = require("../../api.js"), n = getApp();

Page({
    data: {
        article_list: []
    },
    onLoad: function(a) {
        n.pageOnLoad(this);
        var i = this;
        wx.showLoading(), n.request({
            url: t.default.article_list,
            data: {
                cat_id: 2
            },
            success: function(t) {
                wx.hideLoading(), i.setData({
                    article_list: t.data.list
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});