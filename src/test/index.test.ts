import { healthcheck } from "../app/healthcheck";

describe('testing healthcheck module', () => {
    test('on healthcheck must confirm its alive!', () => {
        // arrange
        const expectedMsg = "it's alive!";

        //act
        const msg = healthcheck();

        //assert
        expect(msg).toEqual(expectedMsg);
    })
});