const semver = require('semver');
const fs = require('fs');
const path = require('path');

const minimumNodeVersion = '8.10.0';

if (!(process.env.INSTALL_HOOKS === 'no')) {
  // Make sure git pre-commit hooks are installed
  ['pre-commit'].forEach(hook => {
    const src = path.join(__dirname, `../hooks/${hook}`);
    const dest = path.join(__dirname, `../.git/hooks/${hook}`);
    if (fs.existsSync(src)) {
      if (!fs.existsSync(dest)) {
        // Install hooks
        fs.linkSync(src, dest);
      }
    }
  });
}

if (semver.compare(process.version, minimumNodeVersion) === -1) {
  process.stdout.write(`Node.js version (mininum): v${minimumNodeVersion}\n`);
  process.stdout.write(`Node.js version (installed): ${process.version}\n`);
  process.exit(1);
}
