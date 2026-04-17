/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["zgit/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
