import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import App from './App';

let tools;

jest.mock('./hooks/withAPIHook.js', () => {
	return (Component, url) => {
		return (props) => {
			const data = [
				{ id: 0, name: "Alex Morgan", country: "United States", searches: 100 },
				{ id: 1, name: "Megan Rapinoe", country: "United States", searches: 99 },
			];
			return <Component players={data} {...props} />;
		};
	}
})

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
	it('has players title', () => {
		rtl.act(() => {
			tools = rtl.render(<App />);
			expect(tools.queryByText(new RegExp("Players", 'i')))
				.toBeInTheDocument();
		});
	});
	it('has player zero', () => {
		rtl.act(() => {
			tools = rtl.render(<App />);
			expect(tools.queryByText(new RegExp("Player#0", 'i')))
				.toBeInTheDocument();
		});
	});
});