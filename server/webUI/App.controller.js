sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessagePopover","sap/ui/model/resource/ResourceModel"],
function(oController, oMessagePop, oResourceModel){
return oController.extend("server.webUI.App",{
	onInit: function(oEvent) {
        var oVizFrame = this.getView().byId("idVizFrameScatter");
        var oPopOver = this.getView().byId("idPopOver");
        var oData = {
            "book" : [{
                "Revenue" : 500,
                "Profit" : 100,
                "Units Sold" : 10,
                "Item Category" : "Dairy"
            },
            {
                "Revenue" : 400,
                "Profit" : 200,
                "Units Sold" : 50,
                "Item Category" : "Vegetarian"
            }]
        };
        var oModel = new sap.ui.model.json.JSONModel(oData);
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                name: 'Item Category',
                value: "{Item Category}"
            }],
            measures: [{
                name: 'Revenue',
                value: '{Revenue}'
            }, {
                name: 'Profit',
                value: '{Profit}'
            }, {
                name: 'Units Sold',
                value: '{Units Sold}'
            }],
            data: {
                path: "/book"
            }
        });

        oVizFrame.setDataset(oDataset);
        oVizFrame.setModel(oModel);

        oVizFrame.setVizProperties({
            valueAxis: {
                label: {
                    formatString: 'u'
                }
            },
            valueAxis2: {
                label: {
                    formatString: 'u'
                }
            },
            plotArea: {
                dataLabel: {
                    visible: true,
                    hideWhenOverlap: true
                }
            },
            legend: {
                title: {
                    visible: false
                }
            },
            sizeLegend: {
                title: {
                    visible: true
                }
            },

            title: {
                visible: true,
                text: 'Bone Data'
            }

        });



        var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "valueAxis",
                'type': "Measure",
                'values': ["Units Sold"]
            }),
            feedValueAxis2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "valueAxis2",
                'type': "Measure",
                'values': ["Profit"]
            }),
            feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "color",
                'type': "Dimension",
                'values': ["Item Category"]
            });

        oVizFrame.addFeed(feedValueAxis);
        oVizFrame.addFeed(feedValueAxis2);
        oVizFrame.addFeed(feedColor);
        oPopOver.connect(oVizFrame.getVizUid());
    }

	
});
});