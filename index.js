import Component from './lib/index.svelte';

export default (options = {}) => {
	const {
		content = new TypeError('Content is not defined.'),
		htmlClassNamespace = '',
		onCreate = () => {},
		onDestroy = () => {},
		onShow = () => {},
		onClose = () => {}
	} = options;

	if (content instanceof TypeError) {
		throw content;
	}

	const instance = new Component({
		target: document.body,
		data: {
			content,
			htmlClassNamespace,
			onCreate,
			onDestroy,
			onShow,
			onClose
		}
	});

	return {
		show: () => {
			instance.show();
		},
		close: () => {
			instance.close();
		},
		destroy: () => {
			instance.destroy();
		}
	};
};
