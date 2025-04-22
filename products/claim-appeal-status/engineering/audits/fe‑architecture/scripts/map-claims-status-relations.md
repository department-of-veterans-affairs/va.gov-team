```js
#!/usr/bin/env node

/**
 * map-claims-status-relations.js
 *
 * - Scans src/applications/claims-status for .js/.jsx/.ts/.tsx files
 * - Builds a local‑file import graph & feature‑toggle list
 * - Generates:
 *    • claims-status-report.md   — Markdown overview
 *    • claims-status-graph.dot   — Graphviz dot (clustered)
 *    • claims-status-graph.html  — Self‑contained HTML with legend & Viz.js
 */

const fs   = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const readDir  = util.promisify(fs.readdir);
const stat     = util.promisify(fs.stat);

// —— CONFIG ——
const APP_DIR      = path.join(process.cwd(), 'src/applications/claims-status');
const ENTRY_FILE   = path.join(APP_DIR, 'routes.jsx');
const EXTENSIONS   = ['.js', '.jsx', '.ts', '.tsx'];
const FEATURE_REGEX = [
  /Toggler\.TOGGLE_NAMES\.([A-Za-z0-9_]+)/g,
  /useFeatureFlag\(\s*['"`]([^'"`]+)['"`]\s*\)/g,
  /FEATURE_[A-Z0-9_]+/g,
  /\bFeatureToggle\b/g,
];

// —— STORAGE ——
const fileGraph       = {};  // filePath → [local deps]
const collectedToggles = []; // { file, toggle }

/** Recursively find all code files under `dir` */
async function findAllFiles(dir) {
  let files = [];
  for (const name of await readDir(dir)) {
    const full = path.join(dir, name);
    const info = await stat(full);
    if (info.isDirectory() && name !== 'node_modules') {
      files = files.concat(await findAllFiles(full));
    } else if (info.isFile() && EXTENSIONS.includes(path.extname(full))) {
      files.push(full);
    }
  }
  return files;
}

/** Resolve a local import (`./Foo` or `../Bar`) to a disk file */
function resolveLocalImport(from, imp) {
  if (!imp.startsWith('.')) return null;
  const base = path.resolve(path.dirname(from), imp);
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(base + ext)) return base + ext;
    if (fs.existsSync(path.join(base, 'index' + ext))) {
      return path.join(base, 'index' + ext);
    }
  }
  return null;
}

/** Parse a file for imports & feature toggles */
async function parseFile(fp) {
  const src     = await readFile(fp, 'utf8');
  const imports = [];

  // ES imports
  for (const m of src.matchAll(/import\s+.*?['"](.+?)['"]/g)) {
    const r = resolveLocalImport(fp, m[1]);
    if (r) imports.push(r);
  }
  // CommonJS requires
  for (const m of src.matchAll(/require$begin:math:text$\\s*['"](.+?)['"]\\s*$end:math:text$/g)) {
    const r = resolveLocalImport(fp, m[1]);
    if (r) imports.push(r);
  }
  // feature toggles
  FEATURE_REGEX.forEach((re) => {
    for (const m of src.matchAll(re)) {
      collectedToggles.push({ file: fp, toggle: m[1] || m[0] });
    }
  });

  fileGraph[fp] = imports;
}

/** Build the full graph by parsing every file */
async function buildGraph() {
  if (!fs.existsSync(APP_DIR)) {
    console.error(`❌ Directory not found: ${APP_DIR}`);
    process.exit(1);
  }
  const allFiles = await findAllFiles(APP_DIR);
  for (const f of allFiles) await parseFile(f);
  return allFiles;
}

/** DFS to collect all transitive deps of a root file */
function collectDeps(root) {
  const seen = new Set(), out = new Set();
  (function dfs(fp) {
    if (seen.has(fp)) return;
    seen.add(fp);
    for (const dep of fileGraph[fp] || []) {
      if (dep.startsWith(APP_DIR)) {
        out.add(dep);
        dfs(dep);
      }
    }
  })(root);
  out.delete(root);
  return Array.from(out).sort();
}

/** Generate clustered, filtered Graphviz DOT (routes→containers→components) */
function generateDot() {
  const containers = new Set();
  const components = new Set();
  let edges = '';

  // 1) Direct containers from routes.jsx
  (fileGraph[ENTRY_FILE] || []).forEach((d) => {
    if (d.includes('/containers/')) {
      const c = path.relative(APP_DIR, d);
      containers.add(c);
      edges += `"routes.jsx" -> "${c}";\n`;
    }
  });

  // 2) Components from each container
  containers.forEach((cRel) => {
    const abs = path.join(APP_DIR, cRel);
    (fileGraph[abs] || []).forEach((d) => {
      if (d.includes('/components/') && !d.includes('/test')) {
        const comp = path.relative(APP_DIR, d);
        components.add(comp);
        edges += `"${cRel}" -> "${comp}";\n`;
      }
    });
  });

  return `
digraph G {
  rankdir=TB;
  node [fontname="Arial"];

  subgraph cluster_pages {
    label="Entry";
    color=lightgrey;
    "routes.jsx";
  }

  subgraph cluster_containers {
    label="Containers";
    color=blue;
    ${[...containers].map(c => `"${c}";`).join('\n    ')}
  }

  subgraph cluster_components {
    label="Components";
    color=green;
    ${[...components].map(c => `"${c}";`).join('\n    ')}
  }

  // edges
  ${edges}
}
`;
}

/** Generate self‑contained HTML with inline DOT, legend & Viz.js */
function generateHtml(dot) {
  const dotJs = JSON.stringify(dot);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Claims‑Status Dependency Graph</title>
  <style>
    body { margin:0; }
    #graph { width:100vw; height:100vh; }
    #legend {
      position:absolute; top:10px; left:10px;
      background:white; padding:8px; border:1px solid #ccc;
      font-family:sans-serif; font-size:14px;
    }
    #legend div { margin-bottom:4px; }
    #legend span { display:inline-block; width:12px; height:12px; margin-right:6px; vertical-align:middle; }
  </style>
  <script src="https://unpkg.com/viz.js@2.1.2/viz.js"></script>
  <script src="https://unpkg.com/viz.js@2.1.2/full.render.js"></script>
</head>
<body>
  <div id="legend">
    <div><span style="background:lightgrey;"></span>Entry (routes.jsx)</div>
    <div><span style="background:blue;"></span>Containers</div>
    <div><span style="background:green;"></span>Components</div>
  </div>
  <div id="graph"></div>
  <div id="error" style="color:red;padding:1rem;font-family:sans-serif;"></div>
  <script>
    const dot = ${dotJs};
    const viz = new Viz();
    viz.renderSVGElement(dot)
      .then(svg => document.getElementById('graph').appendChild(svg))
      .catch(err => {
        console.error(err);
        document.getElementById('error').textContent = 'Error: ' + err.message;
      });
  </script>
</body>
</html>`;
}

// —— MAIN ——
(async function main() {
  const allFiles = await buildGraph();
  const total    = allFiles.length;
  const routes   = (fileGraph[ENTRY_FILE] || []).filter(f => f.startsWith(APP_DIR));

  // — Markdown report —
  let md = '# Claims‑Status File Relationship Map\n\n';
  md += '## 🔍 Scan Summary\n\n';
  md += `- **Files scanned:** ${total}\n`;
  md += `- **Entry file:** \`${path.relative(process.cwd(), ENTRY_FILE)}\`\n`;
  md += `- **Direct route components:** ${routes.length}\n`;
  md += `- **Feature‑toggle refs:** ${collectedToggles.length}\n\n`;

  md += '## 🗺️ Routes & Dependencies\n\n';
  routes.forEach((r) => {
    md += `### \`${path.relative(APP_DIR, r)}\`\n\n`;
    const deps = collectDeps(r);
    if (deps.length) {
      deps.forEach(d => {
        md += `- \`${path.relative(APP_DIR, d)}\`\n`;
      });
    } else {
      md += '_No local dependencies_\n';
    }
    md += '\n';
  });

  md += '## 🚩 Feature Toggles\n\n';
  md += '| File | Toggle Name |\n| ---- | ----------- |\n';
  collectedToggles.forEach(({ file, toggle }) => {
    md += `| \`${path.relative(APP_DIR, file)}\` | \`${toggle}\` |\n`;
  });

  fs.writeFileSync('claims-status-report.md', md, 'utf8');

  // — DOT & HTML outputs —
  const dot  = generateDot();
  fs.writeFileSync('claims-status-graph.dot', dot, 'utf8');

  const html = generateHtml(dot);
  fs.writeFileSync('claims-status-graph.html', html, 'utf8');

  console.log('✅ Generated:');
  console.log('  • claims-status-report.md');
  console.log('  • claims-status-graph.dot');
  console.log('  • claims-status-graph.html');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
```
`node scripts/map-claims-status-relations.js`
`npx http-server . -p 8000` To preview the graph locally. (Needs some work.)
