/**
 * Internal dependencies
 */
import { registerPullquoteBlock } from '../';
import { blockEditRender } from 'blocks/test/helpers';

describe( 'core/pullquote', () => {
	beforeAll( () => {
		registerPullquoteBlock();
	} );

	test( 'block edit matches snapshot', () => {
		const wrapper = blockEditRender( 'core/pullquote' );

		expect( wrapper ).toMatchSnapshot();
	} );
} );
