sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessagePopover","sap/ui/model/resource/ResourceModel"],
function(oController, oMessagePop, oResourceModel){
return oController.extend("server.webUI.App",{
	onInit: function(oEvent) {
        var oVizFrame = this.getView().byId("idVizFrameScatter");
        var oPopOver = this.getView().byId("idPopOver");
        var oData = {
            "bone" : [{
                "Bone ID" : 'BB1',
                "Sensor Value" : 112,
                "Time" : 2
            },
            {
                "Bone ID" : 'BB2',
                "Sensor Value" : 83,
                "Time" : 7
            },
            {
                "Bone ID" : 'BB1',
                "Sensor Value" : 67,
                "Time" : 9
            }]
        };
        var oModel = new sap.ui.model.json.JSONModel(oData);
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                name: 'Bone ID',
                value: "{Bone ID}"
            }],
            measures: [{
                name: 'Sensor Value',
                value: '{Sensor Value}'
            }, {
                name: 'Time',
                value: '{Time}'
            }],
            data: {
                path: "/bone"
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
                'values': ["Time"]
            }),
            feedValueAxis2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "valueAxis2",
                'type': "Measure",
                'values': ["Sensor Value"]
            }),
            feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "color",
                'type': "Dimension",
                'values': ["Bone ID"]
            });

        oVizFrame.addFeed(feedValueAxis);
        oVizFrame.addFeed(feedValueAxis2);
        oVizFrame.addFeed(feedColor);
        oPopOver.connect(oVizFrame.getVizUid());
    }

	
});
});