import * as lockFile from '../lockfile';
import * as path from 'path';
import { pathExists } from '../utils';
import { promises as fspromises } from 'fs';
import { UnknownLockfileStatusError } from '../errors';
import { assertIsError } from '../../__tests__/testUtils/test_utils';
import * as utils from '../utils';

let tmpDir: string;
beforeAll(async () => {
  tmpDir = await utils.createTmpDir('lockfile-mongo-mem-');
});

afterAll(async () => {
  await utils.removeDir(tmpDir);
});

describe('LockFile', () => {
  it('should successfully acquire and release an lock', async () => {
    const lockPath = path.resolve(tmpDir, 'sucessful.lock');
    expect(await pathExists(lockPath)).toBeFalsy();

    expect(lockFile.LockFile.files.size).toBe(0);

    const lock = await lockFile.LockFile.lock(lockPath);
    expect(lock).toBeInstanceOf(lockFile.LockFile);
    expect(await pathExists(lockPath)).toBeTruthy();
    expect(lockFile.LockFile.files.size).toBe(1);
    expect(lockFile.LockFile.files.has(lockPath)).toBeTruthy();

    const lockReadout = parseInt((await fspromises.readFile(lockPath)).toString().split(' ')[0]);
    expect(lockReadout).toEqual(process.pid);

    await lock.unlock();
    expect(await pathExists(lockPath)).toBeFalsy();
    expect(lockFile.LockFile.files.size).toBe(0);
    expect(lockFile.LockFile.files.has(lockPath)).toBeFalsy();

    // @ts-expect-error Somehow jest dosnt find the method "checkLock" in types
    jest.spyOn(lockFile.LockFile, 'checkLock');
    await lock.unlock();
    // @ts-expect-error because "checkLock" is protected
    expect(lockFile.LockFile.checkLock).not.toBeCalled();
  });

  it('should successfully acquire lock after another unlocked', async () => {
    // @ts-expect-error Somehow jest dosnt find the method "waitForLock" in types
    jest.spyOn(lockFile.LockFile, 'waitForLock');
    const lockPath = path.resolve(tmpDir, 'sucessful_another.lock');
    expect(await pathExists(lockPath)).toBeFalsy();

    expect(lockFile.LockFile.files.size).toBe(0);

    const lock1 = await lockFile.LockFile.lock(lockPath);
    expect(lock1).toBeInstanceOf(lockFile.LockFile);
    expect(await pathExists(lockPath)).toBeTruthy();
    expect(lockFile.LockFile.files.size).toBe(1);
    expect(lockFile.LockFile.files.has(lockPath)).toBeTruthy();
    expect(lockFile.LockFile.events.listenerCount(lockFile.LockFileEvents.unlock)).toBe(0);

    const lock2 = lockFile.LockFile.lock(lockPath);
    expect(await pathExists(lockPath)).toBeTruthy();
    expect(lockFile.LockFile.files.size).toBe(1);
    expect(lockFile.LockFile.files.has(lockPath)).toBeTruthy();
    // ensure that "lock2" gets executed as far as possible, which still may be inconsistent
    await new Promise(async (res) => {
      // give some time for the lock promise to work, but return before it finished (because it never will)
      setTimeout(res, 100);
      await lock2;
    });
    // @ts-expect-error because "waitForLock" is protected
    expect(lockFile.LockFile.waitForLock).toBeCalled();
    expect(lockFile.LockFile.events.listenerCount(lockFile.LockFileEvents.unlock)).toBe(1);

    await lock1.unlock();
    await new Promise(async (res) => {
      setTimeout(res, 30);
      await lock2;
    });
    expect(await pathExists(lockPath)).toBeTruthy();
    expect(lockFile.LockFile.files.size).toBe(1);
    expect(lockFile.LockFile.files.has(lockPath)).toBeTruthy();
    expect(lockFile.LockFile.events.listenerCount(lockFile.LockFileEvents.unlock)).toBe(0);

    const lock2return = await lock2;
    expect(lock2return).toBeInstanceOf(lockFile.LockFile);

    await lock2return.unlock();
    expect(await pathExists(lockPath)).toBeFalsy();
    expect(lockFile.LockFile.files.size).toBe(0);
    expect(lockFile.LockFile.files.has(lockPath)).toBeFalsy();
  });

  describe('Unknown Lockfile Status Errors', () => {
    it('should throw "UnknownLockfileStatus" in "lock"', async () => {
      jest
        .spyOn(
          lockFile.LockFile,
          // @ts-expect-error "checkLock" is "protected"
          'checkLock'
        )
        .mockImplementation(
          // @ts-expect-error "-1" is not in "LockFileStatus"
          () => Promise.resolve(-1)
        );
      try {
        await lockFile.LockFile.lock('/hello');
        fail('Expected "lock" to fail');
      } catch (err) {
        expect(err).toBeInstanceOf(UnknownLockfileStatusError);
        assertIsError(err);
        expect(err.message).toMatchSnapshot();
      }
    });

    it('should throw "UnknownLockfileStatus" in "waitForLock"', async () => {
      let calls = 0;
      jest
        .spyOn(
          lockFile.LockFile,
          // @ts-expect-error "checkLock" is "protected"
          'checkLock'
        )
        .mockImplementation(
          // @ts-expect-error "-1" is not in "LockFileStatus"
          () => {
            if (calls === 0) {
              calls++;

              return lockFile.LockFileStatus.available;
            }

            return Promise.resolve(-1);
          }
        );
      try {
        // @ts-expect-error "waitForLock" is "protected"
        await lockFile.LockFile.waitForLock('/hello');
        fail('Expected "waitForLock" to fail');
      } catch (err) {
        expect(err).toBeInstanceOf(UnknownLockfileStatusError);
        assertIsError(err);
        expect(err.message).toMatchSnapshot();
      }
    });
  });
});
