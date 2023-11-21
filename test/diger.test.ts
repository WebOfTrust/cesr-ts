import { Matter } from '../src/matter';

import { blake3 } from '@noble/hashes/blake3';
import { strict as assert } from 'assert';

import { Diger } from '../src/diger';
import { MtrDex } from '../src/matter';
import { Buffer } from 'buffer';

describe('Diger', () => {
    it('should generate digests', () => {
        // Create something to digest and verify
        const ser = Buffer.from(
            'abcdefghijklmnopqrstuvwxyz0123456789',
            'binary'
        );
        const digest = blake3
          .create({})
          .update(ser)
          .digest()

        let diger = new Diger({ raw: digest });
        assert.deepStrictEqual(diger.code, MtrDex.Blake3_256);

        let sizage = Matter.Sizes.get(diger.code);
        assert.deepStrictEqual(diger.qb64.length, sizage!.fs);
        let result = diger.verify(ser);
        assert.equal(result, true);

        result = diger.verify(
            Buffer.concat([ser, Buffer.from('2j2idjpwjfepjtgi', 'binary')])
        );
        assert.equal(result, false);
        diger = new Diger({ raw: digest, code: MtrDex.Blake3_256 });
        assert.deepStrictEqual(diger.code, MtrDex.Blake3_256);

        assert.equal(
            diger.qb64,
            'ELC5L3iBVD77d_MYbYGGCUQgqQBju1o4x1Ud-z2sL-ux'
        );
        sizage = Matter.Sizes.get(diger.code);
        assert.deepStrictEqual(diger.qb64.length, sizage!.fs);

        result = diger.verify(ser);
        assert.equal(result, true);

        diger = new Diger({}, ser);
        assert.equal(
            diger.qb64,
            'ELC5L3iBVD77d_MYbYGGCUQgqQBju1o4x1Ud-z2sL-ux'
        );
        sizage = Matter.Sizes.get(diger.code);
        assert.deepStrictEqual(diger.qb64.length, sizage!.fs);
        result = diger.verify(ser);
        assert.equal(result, true);
    });
});
