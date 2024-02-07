import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { Ident, Serials, d, versify } from '../src/core';
import { Saider } from '../src/saider';
import { Serder } from '../src/serder';
import {
    serializeACDCAttachment,
    serializeIssExnAttachment,
} from '../src/utils';

describe('serializeIssExnAttachment', () => {
    it('serializes iss data', () => {
        const [saider, data] = Saider.saidify({
            d: '',
            v: versify(Ident.KERI, undefined, Serials.JSON, 0),
        });

        const result = serializeIssExnAttachment(new Serder(data), saider);

        assert.equal(
            d(result),
            '-VAS-GAB0AAAAAAAAAAAAAAAAAAAAAAAEKZPmzJqhx76bcC2ftPQgeRirmOd8ZBOtGVqHJrSm7F1'
        );
    });
});

describe('serializeACDCAttachment', () => {
    it('serializes acdc data', () => {
        const [saider, data] = Saider.saidify({
            d: '',
            v: versify(Ident.ACDC, undefined, Serials.JSON, 0),
            a: {
                LEI: '123',
            },
        });

        const result = serializeACDCAttachment(new Serder(data), saider);

        assert.equal(
            d(result),
            '-IABBHsiZCI6IkVORTZzbWw4X1NMZVIzdk9NajRJRExLX2Nn0AAAAAAAAAAAAAAAAAAAAAAAENE6sml8_SLeR3vOMj4IDLK_cgd-A-vtg0Jnu7ozdBjW'
        );
    });
});
