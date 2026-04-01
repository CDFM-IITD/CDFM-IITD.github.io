---
published: true
title: "1D-Cu₄I₈(Hdabco)₄"
formula: "Cu<sub>4</sub>I<sub>8</sub>(Hdabco)<sub>4</sub>"
excerpt: "A one-dimensional copper iodide coordination polymer with protonated DABCO ligands, explored for its unique electronic structure and thermal stability."
has_dos: true
has_band: true
has_aimd: true
---

<!-- ─── Load 3Dmol.js once for both viewers ─── -->
<script src="https://3dmol.org/build/3Dmol-min.js" async></script>

<style>
/* ── Shared viewer card style ── */
.viewer-card {
  background: #0f1117;
  border-radius: 10px;
  overflow: hidden;
  margin: 1.2em 0 2em;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}
.viewer-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: #1c1f2e;
  border-bottom: 1px solid #2d3148;
  font-size: 0.78em;
  color: #9ca3af;
}
.viewer-dot { width:11px; height:11px; border-radius:50%; }
.dot-red   { background:#ff5f56; }
.dot-yellow{ background:#ffbd2e; }
.dot-green { background:#27c93f; }
.viewer-title-bar { margin-left:auto; font-family:monospace; font-size:0.9em; color:#6b7280; }

.mol-viewer {
  width: 100%;
  height: 480px;
  position: relative;
}

/* ── Viewer toolbar ── */
.viewer-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 8px 14px;
  background: #161824;
  border-top: 1px solid #2d3148;
}
.v-btn {
  background: #252840;
  color: #c9d1e8;
  border: 1px solid #3d4270;
  border-radius: 5px;
  padding: 4px 12px;
  font-size: 0.78em;
  cursor: pointer;
  transition: background 0.15s;
}
.v-btn:hover { background: #333760; }
.v-btn.active { background: #3b4fd4; border-color: #5470e8; color: #fff; }

.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0f1117;
  color: #7c8aab;
  font-size: 0.85em;
  gap: 12px;
  z-index: 10;
}
.spinner {
  width: 36px; height: 36px;
  border: 3px solid #252840;
  border-top-color: #5470e8;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── DOS / Band side-by-side ── */
.plots-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4em;
  margin: 1.2em 0 2em;
}
@media (max-width: 768px) {
  .plots-grid { grid-template-columns: 1fr; }
}
.plot-panel {
  background: #0f1117;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.35);
}
.plot-panel img {
  width: 100%;
  height: auto;
  display: block;
}
.plot-label {
  text-align: center;
  padding: 6px 0 8px;
  font-size: 0.8em;
  color: #7c8aab;
  background: #161824;
}

/* ── AIMD controls ── */
.aimd-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 8px 14px;
  background: #161824;
  border-top: 1px solid #2d3148;
}
#frame-slider {
  flex: 1;
  min-width: 120px;
  accent-color: #5470e8;
}
.frame-info {
  font-size: 0.78em;
  color: #7c8aab;
  font-family: monospace;
  min-width: 100px;
}
.speed-label {
  font-size: 0.78em;
  color: #7c8aab;
}

/* ── Property table ── */
.prop-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88em;
  margin-bottom: 1.5em;
}
.prop-table th, .prop-table td {
  padding: 6px 14px;
  border: 1px solid #e0e0e0;
  text-align: left;
}
.prop-table th { background: #f4f6fb; font-weight: 600; }
</style>

---

## Crystal Structure

<div class="viewer-card">
  <div class="viewer-bar">
    <span class="viewer-dot dot-red"></span>
    <span class="viewer-dot dot-yellow"></span>
    <span class="viewer-dot dot-green"></span>
    <span class="viewer-title-bar">structure.vasp &mdash; 3Dmol.js</span>
  </div>
  <div style="position:relative;">
    <div id="structure-viewer" class="mol-viewer"></div>
    <div class="loading-overlay" id="struct-loading">
      <div class="spinner"></div>
      <span>Loading crystal structure&hellip;</span>
    </div>
  </div>
  <div class="viewer-toolbar">
    <button class="v-btn" id="btn-spin"   onclick="toggleSpin()">&#9654; Spin</button>
    <button class="v-btn" id="btn-cell"   onclick="toggleCell()">&#9633; Unit Cell</button>
    <button class="v-btn" id="btn-stick"  onclick="setStyle('stick')">Stick</button>
    <button class="v-btn active" id="btn-sphere" onclick="setStyle('sphere')">Sphere</button>
    <button class="v-btn" id="btn-reset"  onclick="resetView()">&#8635; Reset</button>
    <span style="margin-left:auto;font-size:0.75em;color:#555;">
      Drag to rotate &nbsp;|&nbsp; Scroll to zoom &nbsp;|&nbsp; Right-drag to pan
    </span>
  </div>
</div>

<table class="prop-table">
  <tr><th>Property</th><th>Value</th></tr>
  <tr><td>Formula</td><td>Cu<sub>4</sub>I<sub>8</sub>(Hdabco)<sub>4</sub></td></tr>
  <tr><td>Dimensionality</td><td>1D chain</td></tr>
  <tr><td>Crystal system</td><td>Orthorhombic</td></tr>
  <tr><td>Lattice parameters</td><td><i>a</i> = 13.19 Å, <i>b</i> = 9.74 Å, <i>c</i> = 14.90 Å</td></tr>
  <tr><td>Cell volume</td><td>1917 Å<sup>3</sup></td></tr>
  <tr><td>Formula units (<i>Z</i>)</td><td>2</td></tr>
  <tr><td>Atoms per cell</td><td>192 (16 I, 8 Cu, 16 N, 104 H, 48 C)</td></tr>
</table>

---

## Electronic Structure

<div class="plots-grid">
  <div class="plot-panel">
    <img src="/assets/ai4mat/1D-Cu4I8_Hdabco_4/dos.png" alt="Density of States">
    <div class="plot-label">Density of States (DOS)</div>
  </div>
  <div class="plot-panel">
    <img src="/assets/ai4mat/1D-Cu4I8_Hdabco_4/band.png" alt="Band Structure">
    <div class="plot-label">Electronic Band Structure</div>
  </div>
</div>

---

## AIMD Trajectory

<div class="viewer-card">
  <div class="viewer-bar">
    <span class="viewer-dot dot-red"></span>
    <span class="viewer-dot dot-yellow"></span>
    <span class="viewer-dot dot-green"></span>
    <span class="viewer-title-bar">XDATCAR &mdash; 5000 steps &nbsp;|&nbsp; every 50th frame shown</span>
  </div>
  <div style="position:relative;">
    <div id="aimd-viewer" class="mol-viewer"></div>
    <div class="loading-overlay" id="aimd-loading">
      <div class="spinner"></div>
      <span id="aimd-load-msg">Fetching trajectory&hellip;</span>
    </div>
  </div>
  <div class="aimd-controls">
    <button class="v-btn" id="aimd-play-btn" onclick="aimdTogglePlay()">&#9654; Play</button>
    <button class="v-btn" onclick="aimdStepBack()">&#8249;</button>
    <button class="v-btn" onclick="aimdStepFwd()">&#8250;</button>
    <input type="range" id="frame-slider" min="0" value="0" oninput="aimdSeek(this.value)">
    <span class="frame-info" id="frame-info">Frame: 0 / —</span>
    <span class="speed-label">Speed:</span>
    <button class="v-btn" id="speed-slow" onclick="setSpeed(200)">0.5×</button>
    <button class="v-btn active" id="speed-norm" onclick="setSpeed(100)">1×</button>
    <button class="v-btn" id="speed-fast" onclick="setSpeed(40)">2.5×</button>
    <button class="v-btn" onclick="resetAimdView()">&#8635; Reset</button>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════════
     STRUCTURE VIEWER SCRIPT
     ══════════════════════════════════════════════════════════ -->
<script>
(function waitFor3Dmol() {
  if (typeof $3Dmol === 'undefined') { setTimeout(waitFor3Dmol, 80); return; }

  /* ── Create viewer ── */
  var sViewer = $3Dmol.createViewer(document.getElementById('structure-viewer'), {
    backgroundColor: '#0f1117',
    antialias: true
  });

  /* ── Fetch POSCAR ── */
  fetch('/assets/ai4mat/1D-Cu4I8_Hdabco_4/structure.vasp')
    .then(function(r) { return r.text(); })
    .then(function(data) {
      var model = sViewer.addModel(data, 'vasp');
      applyStyle('sphere');
      sViewer.addUnitCell(model, {
        box: { color: '#5470e8', linewidth: 1.5, opacity: 0.85 },
        astyle: { color: '#ff6b6b', radius: 0.06 },
        bstyle: { color: '#4ecdc4', radius: 0.06 },
        cstyle: { color: '#ffe66d', radius: 0.06 }
      });
      sViewer.zoomTo();
      sViewer.render();
      document.getElementById('struct-loading').style.display = 'none';
    });

  /* ── Element colours (Jmol-like but custom) ── */
  var elemColors = {
    'I':  '#8B5CF6',   /* violet  */
    'Cu': '#F97316',   /* orange  */
    'N':  '#3B82F6',   /* blue    */
    'C':  '#6B7280',   /* gray    */
    'H':  '#D1D5DB'    /* light   */
  };

  function applyStyle(mode) {
    /* H atoms hidden for clarity in sphere mode */
    if (mode === 'sphere') {
      for (var el in elemColors) {
        var r = el === 'H' ? 0.15 : 0.35;
        sViewer.setStyle({elem: el}, {sphere: {color: elemColors[el], radius: r}});
      }
    } else {
      sViewer.setStyle({}, {stick: {colorscheme: 'Jmol', radius: 0.12}});
      sViewer.setStyle({elem: 'H'}, {stick: {colorscheme: 'Jmol', radius: 0.06}});
    }
    sViewer.render();
  }

  var spinning = false;
  var showCell = true;
  window.currentStyle = 'sphere';

  window.toggleSpin = function() {
    spinning = !spinning;
    var btn = document.getElementById('btn-spin');
    if (spinning) {
      sViewer.spin('y', 0.5);
      btn.classList.add('active');
    } else {
      sViewer.spin(false);
      btn.classList.remove('active');
    }
  };

  window.toggleCell = function() {
    showCell = !showCell;
    /* Re-render to toggle (3Dmol doesn't have a remove-unitcell; easiest: clear & re-add) */
    sViewer.removeAllShapes();
    if (showCell) {
      var models = sViewer.getModel(0);
      sViewer.addUnitCell(models, {
        box: { color: '#5470e8', linewidth: 1.5, opacity: 0.85 },
        astyle: { color: '#ff6b6b', radius: 0.06 },
        bstyle: { color: '#4ecdc4', radius: 0.06 },
        cstyle: { color: '#ffe66d', radius: 0.06 }
      });
    }
    sViewer.render();
    document.getElementById('btn-cell').classList.toggle('active', showCell);
  };
  document.getElementById('btn-cell').classList.add('active');

  window.setStyle = function(mode) {
    window.currentStyle = mode;
    applyStyle(mode);
    document.getElementById('btn-sphere').classList.toggle('active', mode === 'sphere');
    document.getElementById('btn-stick').classList.toggle('active',  mode === 'stick');
  };

  window.resetView = function() {
    sViewer.zoomTo();
    sViewer.render();
  };
})();
</script>

<!-- ══════════════════════════════════════════════════════════
     AIMD TRAJECTORY VIEWER SCRIPT
     Single-model + position-update approach for smooth animation
     ══════════════════════════════════════════════════════════ -->
<script>
(function() {
  var aViewer    = null;
  var aModel     = null;
  var trajData   = null;
  var atomList   = null;   /* cached selectedAtoms([]) */
  var totalFrames = 0;
  var currentFrame = 0;
  var isPlaying  = false;
  var animInterval = null;
  var intervalMs = 100;

  var elemColors = {
    'I': '#8B5CF6', 'Cu': '#F97316',
    'N': '#3B82F6', 'C':  '#6B7280', 'H': '#D1D5DB'
  };
  var elemRadii = { 'I': 0.38, 'Cu': 0.32, 'N': 0.28, 'C': 0.28, 'H': 0.12 };

  function waitFor3Dmol() {
    if (typeof $3Dmol === 'undefined') { setTimeout(waitFor3Dmol, 80); return; }
    initAimdViewer();
  }
  waitFor3Dmol();

  function initAimdViewer() {
    aViewer = $3Dmol.createViewer(document.getElementById('aimd-viewer'), {
      backgroundColor: '#0f1117',
      antialias: true
    });

    fetch('/assets/ai4mat/1D-Cu4I8_Hdabco_4/trajectory.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        trajData   = data;
        totalFrames = data.n_frames;

        document.getElementById('frame-slider').max = totalFrames - 1;

        /* Build a single XYZ for frame 0 */
        var lines = [data.elements.length.toString(), 'Frame 0'];
        var frame0 = data.frames[0];
        for (var i = 0; i < data.elements.length; i++) {
          var p = frame0[i];
          lines.push(data.elements[i] + ' ' + p[0] + ' ' + p[1] + ' ' + p[2]);
        }
        aModel = aViewer.addModel(lines.join('\n'), 'xyz', {keepH: true});

        /* Apply element styles */
        for (var el in elemColors) {
          aViewer.setStyle({elem: el},
            {sphere: {color: elemColors[el], radius: elemRadii[el] || 0.28}});
        }

        /* Cache atom list (preserves insertion order = trajectory order) */
        atomList = aModel.selectedAtoms({});

        aViewer.zoomTo();
        aViewer.render();
        updateFrameUI(0);
        document.getElementById('aimd-loading').style.display = 'none';
      })
      .catch(function(err) {
        document.getElementById('aimd-load-msg').textContent =
          'Error: ' + err.message;
      });
  }

  /* ── Position update (no model reload) ── */
  function showFrame(n) {
    if (!aViewer || !trajData || !atomList) return;
    n = Math.max(0, Math.min(n, totalFrames - 1));
    currentFrame = n;

    var frame = trajData.frames[n];
    for (var i = 0; i < atomList.length; i++) {
      atomList[i].x = frame[i][0];
      atomList[i].y = frame[i][1];
      atomList[i].z = frame[i][2];
    }
    aViewer.render();
    updateFrameUI(n);
  }

  function updateFrameUI(n) {
    document.getElementById('frame-slider').value = n;
    document.getElementById('frame-info').textContent =
      'Frame: ' + n + '\u202f/\u202f' + (totalFrames - 1) +
      '   (MD step\u202f\u223c' + (n * 50) + ')';
  }

  function tick() { showFrame((currentFrame + 1) % totalFrames); }

  /* ── Public controls ── */
  window.aimdTogglePlay = function() {
    if (!trajData) return;
    isPlaying = !isPlaying;
    var btn = document.getElementById('aimd-play-btn');
    if (isPlaying) {
      animInterval = setInterval(tick, intervalMs);
      btn.innerHTML = '&#9646;&#9646; Pause';
      btn.classList.add('active');
    } else {
      clearInterval(animInterval);
      btn.innerHTML = '&#9654; Play';
      btn.classList.remove('active');
    }
  };

  window.aimdSeek = function(val) {
    showFrame(parseInt(val, 10));
  };

  window.aimdStepBack = function() { showFrame(currentFrame - 1); };
  window.aimdStepFwd  = function() { showFrame(currentFrame + 1); };

  window.setSpeed = function(ms) {
    intervalMs = ms;
    if (isPlaying) { clearInterval(animInterval); animInterval = setInterval(tick, ms); }
    document.getElementById('speed-slow').classList.toggle('active', ms === 200);
    document.getElementById('speed-norm').classList.toggle('active', ms === 100);
    document.getElementById('speed-fast').classList.toggle('active', ms === 40);
  };

  window.resetAimdView = function() {
    if (aViewer) { aViewer.zoomTo(); aViewer.render(); }
  };
})();
</script>
