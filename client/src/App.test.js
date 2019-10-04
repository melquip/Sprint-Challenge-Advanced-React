import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import App from './App';

let tools;
let rendered;

beforeEach(() => {
	rtl.cleanup();
});

describe('App', () => {
	
	it('can debug', () => {
		rtl.act(() => {
			tools = rtl.render(<App />);
			tools.debug();
		});
	});
	it('has players', () => {
		rtl.act(() => {
			tools = rtl.render(<App />);
			expect(tools.queryByText(new RegExp("Players", 'i')))
				.toBeInTheDocument();
		});
	});
});