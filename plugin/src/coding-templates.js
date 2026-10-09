/* global Zotero */

// Copies the bundled note templates into Better Notes. Runs when the plugin is
// installed or updated, when a template has gone missing, and on demand from
// Tools > Reinstall Coding Templates.
CodingTemplates = {
	id: null,
	version: null,
	rootURI: null,
	menuID: null,
	stopped: false,
	busy: false,
	FTL_FILE: 'coding-templates.ftl',
	PREF: 'extensions.coding-templates.installedVersion',
	// Templates from earlier versions that were renamed or dropped
	OBSOLETE: [
		'[Text] Code Co-occurrence (Collection)',
		'[Text] Code Co-occurrence BODY (do not use)',
		'[Item] Code Co-occurrence',
		'[Item] Code Co-occurrence BODY (do not use)',
		// The selected-items templates gained "(Selected items)" in 1.2.1
		'[Item] Code Matrix',
		'[Item] Code Overview',
		'[Item] Code Report',
		'[Item] Code by Source',
		'[Item] Codebook',
		'[Item] Memo Report',
		'[Item] Theme Document',
		'[Item] Theme Map',
		'[Item] Uncoded Highlights',
		// Helpers were renamed in 1.2.0 so they sort to the bottom of the template list
		'[Item] Code Matrix BODY (do not use)',
		'[Item] Code Overview BODY (do not use)',
		'[Item] Code Report BODY (do not use)',
		'[Item] Code by Source BODY (do not use)',
		'[Item] Codebook BODY (do not use)',
		'[Item] Memo Report BODY (do not use)',
		'[Item] Theme Document BODY (do not use)',
		'[Item] Theme Map BODY (do not use)',
		'[Item] Uncoded Highlights BODY (do not use)',
		'[Text] Code Matrix BODY (do not use)',
		'[Text] Code Overview BODY (do not use)',
		'[Text] Code Report BODY (do not use)',
		'[Text] Code by Source BODY (do not use)',
		'[Text] Codebook BODY (do not use)',
		'[Text] Memo Report BODY (do not use)',
		'[Text] Theme Document BODY (do not use)',
		'[Text] Theme Map BODY (do not use)',
		'[Text] Uncoded Highlights BODY (do not use)',
	],

	init({ id, version, rootURI }) {
		this.id = id;
		this.version = version;
		this.rootURI = rootURI;
		this.registerMenu();
	},

	log(msg) {
		Zotero.debug(`Coding Templates: ${msg}`);
	},

	registerMenu() {
		if (!(Zotero.MenuManager && Zotero.MenuManager.registerMenu)) return;
		this.menuID = Zotero.MenuManager.registerMenu({
			menuID: 'coding-templates-tools-menu',
			pluginID: this.id,
			target: 'main/menubar/tools',
			menus: [
				{
					menuType: 'menuitem',
					l10nID: 'coding-templates-reinstall',
					onCommand: () => {
						this.installTemplates({ waitSeconds: 5, announce: true });
					},
				},
			],
		});
	},

	unregisterMenu() {
		if (this.menuID && Zotero.MenuManager && Zotero.MenuManager.unregisterMenu) {
			Zotero.MenuManager.unregisterMenu(this.menuID);
		}
		this.menuID = null;
	},

	addToWindow(window) {
		window.MozXULElement.insertFTLIfNeeded(this.FTL_FILE);
	},

	addToAllWindows() {
		for (let win of Zotero.getMainWindows()) {
			if (win.ZoteroPane) this.addToWindow(win);
		}
	},

	removeFromWindow(window) {
		window.document.querySelector(`link[rel="localization"][href="${this.FTL_FILE}"]`)?.remove();
	},

	removeFromAllWindows() {
		for (let win of Zotero.getMainWindows()) {
			if (win.ZoteroPane) this.removeFromWindow(win);
		}
	},

	notify(headline, lines = []) {
		let progress = new Zotero.ProgressWindow();
		progress.changeHeadline(headline);
		for (let line of lines) progress.addDescription(line);
		progress.show();
		progress.startCloseTimer(10000);
	},

	// Better Notes may finish starting after this plugin does, so wait for it
	async getBetterNotes(waitSeconds) {
		for (let i = 0; i <= waitSeconds; i++) {
			if (this.stopped) return null;
			let api = Zotero.BetterNotes && Zotero.BetterNotes.api && Zotero.BetterNotes.api.template;
			if (api && typeof api.setTemplate == 'function' && typeof api.getTemplateText == 'function') {
				return api;
			}
			await Zotero.Promise.delay(1000);
		}
		return null;
	},

	async loadTemplates() {
		return JSON.parse(await Zotero.File.getResourceAsync(this.rootURI + 'templates.json'));
	},

	async onStartup() {
		try {
			await Zotero.uiReadyPromise;
			let api = await this.getBetterNotes(120);
			if (!api) {
				if (!this.stopped) {
					this.notify('Coding Templates', [
						'Better Notes was not found, so the templates were not installed.',
						'Install the Better Notes plugin, restart Zotero, and they will be added automatically.',
					]);
				}
				return;
			}
			let templates = await this.loadTemplates();
			let upToDate = Zotero.Prefs.get(this.PREF, true) === this.version
				&& Object.keys(templates).every(name => api.getTemplateText(name));
			if (upToDate) {
				this.log('templates already installed for version ' + this.version);
				return;
			}
			await this.installTemplates({ waitSeconds: 5, announce: true });
		}
		catch (e) {
			Zotero.logError(e);
		}
	},

	async installTemplates({ waitSeconds, announce }) {
		if (this.busy) return false;
		this.busy = true;
		try {
			let api = await this.getBetterNotes(waitSeconds);
			if (!api) {
				this.notify('Coding Templates', [
					'Better Notes was not found, so the templates were not installed.',
					'Install the Better Notes plugin and restart Zotero.',
				]);
				return false;
			}
			let templates = await this.loadTemplates();
			let names = Object.keys(templates);
			// Better Notes ignores writes until its own template store is ready,
			// so write, read back, and retry until every template has stuck
			let stored = 0;
			for (let attempt = 0; attempt < 30 && !this.stopped; attempt++) {
				stored = 0;
				for (let name of names) {
					if (api.getTemplateText(name) !== templates[name]) {
						api.setTemplate({ name, text: templates[name] });
					}
					if (api.getTemplateText(name) === templates[name]) stored++;
				}
				if (stored == names.length) break;
				await Zotero.Promise.delay(1000);
			}
			if (stored != names.length) {
				this.notify('Coding Templates', [
					`Only ${stored} of ${names.length} templates could be installed.`,
					'Restart Zotero and choose Tools, then Reinstall Coding Templates.',
				]);
				return false;
			}
			for (let name of this.OBSOLETE) {
				if (api.getTemplateText(name) && typeof api.removeTemplate == 'function') {
					api.removeTemplate(name);
				}
			}
			Zotero.Prefs.set(this.PREF, this.version, true);
			this.log(`installed ${names.length} templates, version ${this.version}`);
			if (announce) {
				this.notify(`Coding templates installed (${names.length})`, [
					'Create notes from them with New Note, then New Standalone Note from Template.',
				]);
			}
			return true;
		}
		catch (e) {
			Zotero.logError(e);
			this.notify('Coding Templates', ['The templates could not be installed: ' + e]);
			return false;
		}
		finally {
			this.busy = false;
		}
	},
};
