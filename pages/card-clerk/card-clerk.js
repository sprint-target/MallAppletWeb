var e = require("../../api.js"), n = getApp();

Page({
    data: {},
    onLoad: function(o) {
        n.pageOnLoad(this);
        var t = this, c = wx.getStorageSync("user_info");
        t.setData({
            store: wx.getStorageSync("store"),
            user_info: c
        }), wx.showModal({
            title: "提示",
            content: "是否核销预约？",
            success: function(t) {
                t.confirm ? (wx.showLoading({
                    title: "核销中"
                }), n.request({
                    url: e.user.card_clerk,
                    data: {
                        user_card_id: decodeURIComponent(o.scene)
                    },
                    success: function(e) {
                        wx.showModal({
                            title: "提示",
                            content: e.msg,
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && wx.redirectTo({
                                    url: "/pages/index/index"
                                });
                            }
                        });
                    },
                    complete: function() {
                        wx.hideLoading();
                    }
                })) : t.cancel && wx.redirectTo({
                    url: "/pages/index/index"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        n.pageOnShow(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});