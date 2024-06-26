// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {action} from '@storybook/addon-actions';
import {CheckboxArgs, createCheckbox} from './fixtures/createCheckbox';

export default {
	title: 'Library/Checkbox',
	argTypes: {
		label: {control: 'text'},
		isChecked: {control: 'boolean'},
		isIndeterminate: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
		isReadOnly: {control: 'boolean'},
		hasValue: {control: 'boolean'},
		indicatorIcon: {control: 'boolean'},
		onChange: {
			action: 'changed',
			table: {
				disable: true,
			},
		},
	},
};

const Template = ({...args}: CheckboxArgs) => {
	return createCheckbox({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Label',
	isChecked: false,
	isIndeterminate: false,
	isDisabled: false,
	isAutoFocused: false,
	isReadOnly: false,
	hasValue: false,
	indicatorIcon: false,
	onChange: action('checkbox-onchange'),
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox>Label</vscode-checkbox>`,
		},
	},
};

export const WithChecked: any = Template.bind({});
WithChecked.args = {
	...Default.args,
	isChecked: true,
};
WithChecked.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox checked>Label</vscode-checkbox>`,
		},
	},
};

export const WithIndeterminate: any = Template.bind({});
WithIndeterminate.args = {
	...Default.args,
	isIndeterminate: true,
};
WithIndeterminate.parameters = {
	docs: {
		source: {
			code: `// JavaScript\n\nconst checkbox = document.getElementById("baz");\ncheckbox.indeterminate = true;\n\n<!-- HTML -->\n\n<vscode-checkbox id="baz">Label</vscode-checkbox>`,
		},
	},
};

export const WithAutoFocus: any = Template.bind({});
WithAutoFocus.args = {
	...Default.args,
	isAutoFocused: true,
};
WithAutoFocus.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox autofocus>Label</vscode-checkbox>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox disabled>Label</vscode-checkbox>`,
		},
	},
};

export const WithReadOnly: any = Template.bind({});
WithReadOnly.args = {
	...Default.args,
	isReadOnly: true,
};
WithReadOnly.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox readonly>Label</vscode-checkbox>`,
		},
	},
};

export const WithValue: any = Template.bind({});
WithValue.args = {
	...Default.args,
	hasValue: true,
};
WithValue.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox value="baz">Label</vscode-checkbox>`,
		},
	},
};
