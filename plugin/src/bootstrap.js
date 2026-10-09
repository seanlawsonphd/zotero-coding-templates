/* global Zotero, Services */

var CodingTemplates;

function install() {}

async function startup({ id, version, rootURI }) {
	Services.scriptloader.loadSubScript(rootURI + 'coding-templates.js');
	CodingTemplates.init({ id, version, rootURI });
	CodingTemplates.addToAllWindows();
	// Not awaited: waiting for Better Notes must not hold up Zotero's startup
	CodingTemplates.onStartup();
}

function onMainWindowLoad({ window }) {
	CodingTemplates.addToWindow(window);
}

function onMainWindowUnload({ window }) {
	CodingTemplates.removeFromWindow(window);
}

function shutdown() {
	CodingTemplates.stopped = true;
	CodingTemplates.removeFromAllWindows();
	CodingTemplates.unregisterMenu();
	CodingTemplates = undefined;
}

function uninstall() {}
