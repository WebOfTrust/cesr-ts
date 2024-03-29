import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import libsodium from 'libsodium-wrappers-sumo';

import { Signer } from '../src/signer';
import { Matter, MtrDex } from '../src/matter';
import { b } from '../src/core';

describe('Signer', () => {
    it('should sign things', async () => {
        await libsodium.ready;

        const signer = new Signer({}); // defaults provide Ed25519 signer Ed25519 verfer
        assert.equal(signer.code, MtrDex.Ed25519_Seed);
        assert.equal(signer.raw.length, Matter._rawSize(signer.code));
        assert.equal(signer.verfer.code, MtrDex.Ed25519);
        assert.equal(
            signer.verfer.raw.length,
            Matter._rawSize(signer.verfer.code)
        );

        const ser = b('abcdefghijklmnopqrstuvwxyz0123456789');

        const cigar = signer.sign(ser);
        assert.equal(cigar.code, MtrDex.Ed25519_Sig);
        assert.equal(cigar.raw.length, Matter._rawSize(cigar.code));
        const result = signer.verfer.verify(cigar.raw, ser);
        assert.equal(result, true);
    });
});
