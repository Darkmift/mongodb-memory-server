// this file is used by 'mongodb-memory-server' and 'mongodb-memory-server-global' (and '-global-x.x') as an shared install script
// in this file the types for variables are set *explicitly* to prevent issues on type changes

import { homedir } from 'os';
import { resolve } from 'path';
import { MongoBinary } from './MongoBinary';
import {
  envName,
  envToBool,
  findPackageJson,
  resolveConfig,
  ResolveConfigVariables,
  setDefaultValue,
} from './resolveConfig';

findPackageJson(process.env.INIT_CWD);

if (!!envToBool(resolveConfig(ResolveConfigVariables.DISABLE_POSTINSTALL))) {
  console.log(
    'Mongodb-Memory-Server* postinstall skipped because "DISABLE_POSTINSTALL" was set to an truthy value'
  );
  process.exit(0);
}

// value is ensured to be either an string (with more than 0 length) or being undefined
if (typeof resolveConfig(ResolveConfigVariables.SYSTEM_BINARY) === 'string') {
  console.log('Mongodb-Memory-Server* postinstall skipped because "SYSTEM_BINARY" was provided');
  process.exit(0);
}

export async function postInstallEnsureBinary(
  version?: string,
  local?: boolean
): Promise<never | void> {
  console.log('Mongodb-Memory-Server* checking MongoDB binaries');

  if (!local) {
    // set "DOWNLOAD_DIR" to ~/.cache
    setDefaultValue(
      ResolveConfigVariables.DOWNLOAD_DIR,
      resolve(homedir(), '.cache', 'mongodb-binaries')
    );
  } else {
    setDefaultValue(ResolveConfigVariables.PREFER_GLOBAL_PATH, 'false');
  }

  if (version) {
    // if "version" is defined, apply it
    setDefaultValue(ResolveConfigVariables.VERSION, version);
  }

  process.env[envName(ResolveConfigVariables.RUNTIME_DOWNLOAD)] = 'true'; // To make sure to actually download in an postinstall

  const binPath = await MongoBinary.getPath().catch((err) => {
    console.warn('Mongodb-Memory-Server* failed to find an binary:\n', err.message);
    process.exit(0); // Exiting with "0" to not fail the install (because it is an problem that can be solved otherwise)
  });
  console.log(`Mongodb-Memory-Server* found binary: "${binPath}"`);
}
