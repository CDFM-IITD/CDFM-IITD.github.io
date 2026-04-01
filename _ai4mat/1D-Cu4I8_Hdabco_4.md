---
published: true
title: "1D-Cu₄I₈(Hdabco)₄"
formula: "Cu<sub>4</sub>I<sub>8</sub>(Hdabco)<sub>4</sub>"
excerpt: "A one-dimensional copper iodide coordination polymer with protonated DABCO ligands, explored for its unique electronic structure and thermal stability."
has_dos: true
has_band: true
has_aimd: true
---

<script src="https://3dmol.org/build/3Dmol-min.js" async></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<style>
/* ── Viewer card shell ─────────────────────────────────────────────── */
.viewer-card {
  background:#0f1117; border-radius:10px; overflow:hidden;
  margin:1.2em 0 2em; box-shadow:0 4px 22px rgba(0,0,0,.45);
}
.viewer-bar {
  display:flex; align-items:center; gap:8px;
  padding:7px 14px; background:#1c1f2e;
  border-bottom:1px solid #2d3148; font-size:.76em; color:#9ca3af;
}
.vdot { width:11px; height:11px; border-radius:50%; }
.vdot-r{background:#ff5f56}.vdot-y{background:#ffbd2e}.vdot-g{background:#27c93f}
.vtitle { margin-left:auto; font-family:monospace; color:#6b7280; font-size:.88em; }

/* ── The 3D canvas ─────────────────────────────────────────────────── */
.mol-canvas { width:100%; height:490px; position:relative; }

/* ── Loading overlay ───────────────────────────────────────────────── */
.load-overlay {
  position:absolute; inset:0; display:flex; flex-direction:column;
  align-items:center; justify-content:center;
  background:#0f1117; color:#7c8aab; gap:14px; z-index:10;
}
.spinner {
  width:34px; height:34px; border:3px solid #252840;
  border-top-color:#5470e8; border-radius:50%;
  animation:spin .8s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg)}}

/* ── Toolbar / controls ────────────────────────────────────────────── */
.toolbar {
  display:flex; flex-wrap:wrap; gap:6px; align-items:center;
  padding:8px 12px; background:#161824; border-top:1px solid #2d3148;
}
.vbtn {
  background:#252840; color:#c9d1e8; border:1px solid #3d4270;
  border-radius:5px; padding:4px 11px; font-size:.76em;
  cursor:pointer; transition:background .15s, border-color .15s;
  white-space:nowrap;
}
.vbtn:hover  { background:#333760; }
.vbtn.active { background:#3b4fd4; border-color:#5470e8; color:#fff; }

/* ── Element legend ────────────────────────────────────────────────── */
.elem-legend {
  display:flex; flex-wrap:wrap; gap:10px; align-items:center;
  padding:6px 14px; background:#0d0f1a; border-top:1px solid #1e2135;
  font-size:.74em; color:#9ca3af;
}
.edot {
  display:inline-block; width:10px; height:10px;
  border-radius:50%; margin-right:3px; vertical-align:middle;
}

/* ── DOS / Band side-by-side ───────────────────────────────────────── */
.plots-grid {
  display:grid; grid-template-columns:1fr 1fr; gap:1.4em; margin:1.2em 0 2em;
}
@media(max-width:700px){ .plots-grid{grid-template-columns:1fr;} }
.plot-panel {
  background:#0f1117; border-radius:10px; overflow:hidden;
  box-shadow:0 4px 16px rgba(0,0,0,.35);
}
.plot-panel img { width:100%; height:auto; display:block; }
.plot-lbl {
  text-align:center; padding:6px 0 8px;
  font-size:.78em; color:#7c8aab; background:#161824;
}

/* ── AIMD controls ─────────────────────────────────────────────────── */
.aimd-ctrl {
  display:flex; flex-wrap:wrap; gap:7px; align-items:center;
  padding:8px 12px; background:#161824; border-top:1px solid #2d3148;
}
#frame-slider { flex:1; min-width:100px; accent-color:#5470e8; }
.finfo { font-size:.74em; color:#7c8aab; font-family:monospace; min-width:180px; }

/* ── Property table ────────────────────────────────────────────────── */
.ptable { width:100%; border-collapse:collapse; font-size:.87em; margin-bottom:1.5em; }
.ptable th,.ptable td { padding:6px 13px; border:1px solid #dde; text-align:left; }
.ptable th { background:#f4f6fb; font-weight:600; }
</style>

---

## Crystal Structure

<div class="viewer-card">
  <div class="viewer-bar">
    <span class="vdot vdot-r"></span><span class="vdot vdot-y"></span><span class="vdot vdot-g"></span>
    <span class="vtitle">structure.vasp</span>
  </div>
  <div class="mol-canvas">
    <div id="structure-viewer" style="width:100%;height:100%;"></div>
    <div class="load-overlay" id="struct-loading">
      <div class="spinner"></div><span>Loading crystal structure&hellip;</span>
    </div>
  </div>
  <div class="toolbar">
    <button class="vbtn" id="btn-spin"     onclick="toggleSpin()">&#9654; Spin</button>
    <button class="vbtn active" id="btn-cell" onclick="toggleCell()">&#9633; Unit cell</button>
    <button class="vbtn active" id="btn-ballstick" onclick="setStructStyle('ballstick')">Ball&amp;Stick</button>
    <button class="vbtn" id="btn-sphere"   onclick="setStructStyle('sphere')">Sphere</button>
    <button class="vbtn" id="btn-stick"    onclick="setStructStyle('stick')">Stick</button>
    <button class="vbtn" onclick="resetStructView()">&#8635; Reset</button>
    <span style="margin-left:auto;font-size:.72em;color:#555;">Drag&nbsp;rotate &nbsp;|&nbsp; Scroll&nbsp;zoom &nbsp;|&nbsp; Right-drag&nbsp;pan</span>
  </div>
  <div class="elem-legend">
    <strong style="color:#7c8aab;margin-right:4px;">Elements:</strong>
    <span><span class="edot" style="background:#8B5CF6;"></span>I</span>
    <span><span class="edot" style="background:#F97316;"></span>Cu</span>
    <span><span class="edot" style="background:#3B82F6;"></span>N</span>
    <span><span class="edot" style="background:#6B7280;"></span>C</span>
    <span><span class="edot" style="background:#D1D5DB;"></span>H</span>
    &nbsp;&nbsp;
    <span style="color:#5470e8;">&#9644;</span> <em>a</em>-axis &nbsp;
    <span style="color:#4ecdc4;">&#9644;</span> <em>b</em>-axis &nbsp;
    <span style="color:#ffe66d;">&#9644;</span> <em>c</em>-axis
  </div>
</div>

<table class="ptable">
  <tr><th>Property</th><th>Value</th></tr>
  <tr><td>Formula</td><td>Cu<sub>4</sub>I<sub>8</sub>(Hdabco)<sub>4</sub></td></tr>
  <tr><td>Dimensionality</td><td>1D chain</td></tr>
  <tr><td>Crystal system</td><td>Orthorhombic</td></tr>
  <tr><td>Lattice parameters</td><td><em>a</em> = 13.19 Å, <em>b</em> = 9.74 Å, <em>c</em> = 14.90 Å</td></tr>
  <tr><td>Cell volume</td><td>1917 Å<sup>3</sup></td></tr>
  <tr><td>Formula units (<em>Z</em>)</td><td>2</td></tr>
  <tr><td>Atoms per cell</td><td>192 &nbsp;(16&thinsp;I, 8&thinsp;Cu, 16&thinsp;N, 104&thinsp;H, 48&thinsp;C)</td></tr>
</table>

---

## Electronic Structure

<div class="plots-grid">
  <div class="plot-panel">
    <img src="/assets/ai4mat/1D-Cu4I8_Hdabco_4/dos.png" alt="Density of States">
    <div class="plot-lbl">Density of States (DOS)</div>
  </div>
  <div class="plot-panel">
    <img src="/assets/ai4mat/1D-Cu4I8_Hdabco_4/band.png" alt="Band Structure">
    <div class="plot-lbl">Electronic Band Structure</div>
  </div>
</div>

---

## AIMD Trajectory

<div class="viewer-card">
  <div class="viewer-bar">
    <span class="vdot vdot-r"></span><span class="vdot vdot-y"></span><span class="vdot vdot-g"></span>
    <span class="vtitle">XDATCAR</span>
  </div>
  <div class="mol-canvas">
    <div id="aimd-viewer" style="width:100%;height:100%;"></div>
    <div class="load-overlay" id="aimd-loading">
      <div class="spinner"></div>
      <span id="aimd-msg">Fetching trajectory&hellip;</span>
    </div>
  </div>
  <div class="aimd-ctrl">
    <button class="vbtn" id="aimd-play-btn" onclick="aimdTogglePlay()">&#9654; Play</button>
    <button class="vbtn" onclick="aimdBack()">&#8249;</button>
    <button class="vbtn" onclick="aimdFwd()">&#8250;</button>
    <input type="range" id="frame-slider" min="0" value="0" oninput="aimdSeek(this.value)">
    <span class="finfo" id="frame-info">Step: —</span>
    <span style="font-size:.73em;color:#7c8aab;">Speed:</span>
    <button class="vbtn" id="speed-200" onclick="aimdSpeed(200)">0.5&times;</button>
    <button class="vbtn active" id="speed-100" onclick="aimdSpeed(100)">1&times;</button>
    <button class="vbtn" id="speed-40"  onclick="aimdSpeed(40)">2.5&times;</button>
    <button class="vbtn" onclick="aimdReset()">&#8635; Reset</button>
  </div>
  <div class="elem-legend">
    <strong style="color:#7c8aab;margin-right:4px;">Elements:</strong>
    <span><span class="edot" style="background:#8B5CF6;"></span>I</span>
    <span><span class="edot" style="background:#F97316;"></span>Cu</span>
    <span><span class="edot" style="background:#3B82F6;"></span>N</span>
    <span><span class="edot" style="background:#6B7280;"></span>C</span>
    <span><span class="edot" style="background:#D1D5DB;"></span>H</span>
  </div>
</div>
<script>
(function() {
  /* Element palette -------------------------------------------------- */
  var ELEM = {
    Cu: {color:'#F97316', r:0.42},
    I:  {color:'#8B5CF6', r:0.50},
    N:  {color:'#3B82F6', r:0.30},
    C:  {color:'#6B7280', r:0.28},
    H:  {color:'#D1D5DB', r:0.13}
  };

  /* Bond cutoffs (Angstrom) -- MIC distance must be BELOW these ------- */
  var BONDS = {
    'Cu-I':3.1,'I-Cu':3.1,   /* bridging iodide in Cu4I8 chain   */
    'Cu-N':2.5,'N-Cu':2.5,   /* DABCO coordination to Cu         */
    'C-C': 1.65,              /* DABCO cage C-C                   */
    'C-N': 1.55,'N-C':1.55,  /* DABCO cage C-N                   */
    'C-H': 1.25,'H-C':1.25,  /* C-H                              */
    'N-H': 1.20,'H-N':1.20   /* protonated N-H in Hdabco         */
  };
  var BOND_R = 0.10;   /* cylinder radius (Å) */

  /* Orthorhombic cell dimensions -------------------------------------- */
  var LX=13.1927, LY=9.7396, LZ=14.9025;

  var sv, sm, allAtoms;
  var spinning = false, showCell = true, sMode = 'ballstick';

  function waitFor3Dmol() {
    if (typeof $3Dmol === 'undefined') { setTimeout(waitFor3Dmol, 80); return; }
    sv = $3Dmol.createViewer(document.getElementById('structure-viewer'),
      {backgroundColor:'#0f1117', antialias:true});
    loadStructure();
  }
  waitFor3Dmol();

  function loadStructure() {
    fetch('/assets/ai4mat/1D-Cu4I8_Hdabco_4/structure.vasp')
      .then(function(r){ return r.text(); })
      .then(function(data){
        sm        = sv.addModel(data, 'vasp');
        allAtoms  = sm.selectedAtoms({});
        applyStyle('ballstick');
        addUnitCell();
        sv.zoomTo();
        sv.render();
        document.getElementById('struct-loading').style.display = 'none';
      });
  }

  /* Apply atom spheres for a given mode ------------------------------- */
  function applyStyle(mode) {
    sMode = mode;
    sv.removeAllShapes();   /* removes cylinders + unit cell */
    sv.setStyle({}, {});    /* clear all atom visuals */

    var scale = (mode === 'sphere') ? 1.85 : 1.0;
    Object.keys(ELEM).forEach(function(el) {
      var vis = (mode === 'stick')
        ? {sphere:{color:ELEM[el].color, radius:0.07}}   /* tiny junction dots */
        : {sphere:{color:ELEM[el].color, radius:ELEM[el].r * scale}};
      sv.setStyle({elem:el}, vis);
    });

    if (mode !== 'sphere') drawBonds();
    if (showCell) addUnitCell();
    sv.render();
  }

  /* Custom bond drawing ----------------------------------------------- */
  function drawBonds() {
    if (!allAtoms) return;
    var n = allAtoms.length;

    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        var key = allAtoms[i].elem + '-' + allAtoms[j].elem;
        var cutoff = BONDS[key];
        if (!cutoff) continue;

        /* Minimum-image convention displacement */
        var dx = allAtoms[j].x - allAtoms[i].x;
        var dy = allAtoms[j].y - allAtoms[i].y;
        var dz = allAtoms[j].z - allAtoms[i].z;
        dx -= Math.round(dx/LX)*LX;
        dy -= Math.round(dy/LY)*LY;
        dz -= Math.round(dz/LZ)*LZ;

        if (Math.sqrt(dx*dx+dy*dy+dz*dz) > cutoff) continue;

        /* Draw two half-cylinders (one per atom colour) */
        var xi=allAtoms[i].x, yi=allAtoms[i].y, zi=allAtoms[i].z;
        var xj=xi+dx, yj=yi+dy, zj=zi+dz;
        var xm=(xi+xj)/2, ym=(yi+yj)/2, zm=(zi+zj)/2;
        var ci=ELEM[allAtoms[i].elem] ? ELEM[allAtoms[i].elem].color : '#aaa';
        var cj=ELEM[allAtoms[j].elem] ? ELEM[allAtoms[j].elem].color : '#aaa';

        sv.addCylinder({start:{x:xi,y:yi,z:zi},end:{x:xm,y:ym,z:zm},
          radius:BOND_R,color:ci,fromCap:1,toCap:0});
        sv.addCylinder({start:{x:xm,y:ym,z:zm},end:{x:xj,y:yj,z:zj},
          radius:BOND_R,color:cj,fromCap:0,toCap:1});
      }
    }
  }

  function addUnitCell() {
    if (!sm) return;
    sv.addUnitCell(sm, {
      box:    {color:'#5470e8',linewidth:1.5},
      astyle: {color:'#ff6b6b',radius:0.05},
      bstyle: {color:'#4ecdc4',radius:0.05},
      cstyle: {color:'#ffe66d',radius:0.05}
    });
  }

  /* Public controls --------------------------------------------------- */
  window.toggleSpin = function() {
    spinning = !spinning;
    spinning ? sv.spin('y',0.5) : sv.spin(false);
    document.getElementById('btn-spin').classList.toggle('active', spinning);
  };

  window.toggleCell = function() {
    showCell = !showCell;
    applyStyle(sMode);
    document.getElementById('btn-cell').classList.toggle('active', showCell);
  };

  window.setStructStyle = function(mode) {
    ['ballstick','sphere','stick'].forEach(function(m) {
      document.getElementById('btn-'+m).classList.toggle('active', m===mode);
    });
    applyStyle(mode);
  };

  window.resetStructView = function() { sv.zoomTo(); sv.render(); };
})();
</script>

<script>
(function() {
  var ELEM = {
    Cu:{color:0xF97316, r:0.42},
    I: {color:0x8B5CF6, r:0.50},
    N: {color:0x3B82F6, r:0.30},
    C: {color:0x6B7280, r:0.28},
    H: {color:0xD1D5DB, r:0.13}
  };
  var ELEM_HEX = {
    Cu:'#F97316', I:'#8B5CF6', N:'#3B82F6', C:'#6B7280', H:'#D1D5DB'
  };
  var BONDS = {
    'Cu-I':3.1,'I-Cu':3.1,
    'Cu-N':2.5,'N-Cu':2.5,
    'C-C': 1.65,
    'C-N': 1.55,'N-C':1.55,
    'C-H': 1.25,'H-C':1.25,
    'N-H': 1.20,'H-N':1.20
  };
  var BOND_R = 0.08;

  var renderer, scene, camera, controls;
  var atomMeshes = {}, bondMesh = null;
  var bondList = [];
  var traj, totalF = 0, curF = 0;
  var playing = false, timer = null, ms = 100;
  var dummy, yAxis;

  function waitForThree() {
    if (typeof THREE === 'undefined' || !THREE.OrbitControls) {
      setTimeout(waitForThree, 80); return;
    }
    initScene();
    loadTraj();
  }
  waitForThree();

  function initScene() {
    var container = document.getElementById('aimd-viewer');
    var w = container.clientWidth, h = container.clientHeight || 490;

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x0f1117);
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.set(35, 25, 35);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    var dl = new THREE.DirectionalLight(0xffffff, 0.9);
    dl.position.set(50, 60, 40); scene.add(dl);
    var dl2 = new THREE.DirectionalLight(0xbbd4ff, 0.35);
    dl2.position.set(-40, -20, -50); scene.add(dl2);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;

    dummy = new THREE.Object3D();
    yAxis = new THREE.Vector3(0, 1, 0);

    window.addEventListener('resize', function() {
      var w2 = container.clientWidth, h2 = container.clientHeight || 490;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
    });

    (function loop() {
      requestAnimationFrame(loop);
      controls.update();
      renderer.render(scene, camera);
    })();
  }

  function loadTraj() {
    var xhr = new XMLHttpRequest();
    xhr.onprogress = function(e) {
      if (e.lengthComputable) {
        var pct = Math.round(e.loaded / e.total * 100);
        document.getElementById('aimd-msg').textContent = 'Loading\u2026 ' + pct + '%';
      }
    };
    xhr.onload = function() {
      document.getElementById('aimd-msg').textContent = 'Initialising\u2026';
      setTimeout(function() {
        setup(JSON.parse(xhr.responseText));
      }, 20);
    };
    xhr.onerror = function() {
      document.getElementById('aimd-msg').textContent = 'Failed to load trajectory.';
    };
    xhr.open('GET', '/assets/ai4mat/1D-Cu4I8_Hdabco_4/trajectory.json');
    xhr.send();
  }

  function setup(data) {
    traj   = data;
    totalF = data.n_frames;
    document.getElementById('frame-slider').max = totalF - 1;

    var a = data.lattice[0][0], b = data.lattice[1][1], c = data.lattice[2][2];
    var cx = a/2, cy = b/2, cz = c/2;

    /* ── Atom InstancedMeshes ── */
    var elemIdx = {};
    data.elements.forEach(function(el, i) {
      if (!elemIdx[el]) elemIdx[el] = [];
      elemIdx[el].push(i);
    });
    var sphGeo = {};
    Object.keys(ELEM).forEach(function(el) {
      sphGeo[el] = new THREE.SphereGeometry(ELEM[el].r, 14, 10);
      var count = (elemIdx[el] || []).length;
      if (!count) return;
      var mat = new THREE.MeshPhongMaterial({color: ELEM[el].color, shininess: 70, specular: 0x222222});
      var mesh = new THREE.InstancedMesh(sphGeo[el], mat, count);
      mesh.frustumCulled = false;
      scene.add(mesh);
      atomMeshes[el] = {mesh: mesh, indices: elemIdx[el]};
    });

    /* ── Bond topology from frame 0 (fixed for all frames) ── */
    var f0 = data.frames[0];
    var n  = data.n_atoms;
    bondList = [];
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        var key = data.elements[i] + '-' + data.elements[j];
        var cutoff = BONDS[key];
        if (!cutoff) continue;
        var xi = f0[i*3], yi = f0[i*3+1], zi = f0[i*3+2];
        var xj = f0[j*3], yj = f0[j*3+1], zj = f0[j*3+2];
        var dx = xj-xi, dy = yj-yi, dz = zj-zi;
        dx -= Math.round(dx/a)*a;
        dy -= Math.round(dy/b)*b;
        dz -= Math.round(dz/c)*c;
        if (Math.sqrt(dx*dx+dy*dy+dz*dz) > cutoff) continue;
        bondList.push({
          i: i, j: j,
          ox: dx-(xj-xi), oy: dy-(yj-yi), oz: dz-(zj-zi),
          elA: data.elements[i], elB: data.elements[j]
        });
      }
    }

    /* ── Bond InstancedMesh (2 halves per bond, per-instance colour) ── */
    if (bondList.length > 0) {
      var cylGeo = new THREE.CylinderGeometry(BOND_R, BOND_R, 1, 8, 1);
      var cylMat = new THREE.MeshPhongMaterial({shininess: 30});
      bondMesh = new THREE.InstancedMesh(cylGeo, cylMat, bondList.length * 2);
      bondMesh.frustumCulled = false;
      bondList.forEach(function(b, k) {
        bondMesh.setColorAt(k*2,   new THREE.Color(ELEM_HEX[b.elA] || '#aaa'));
        bondMesh.setColorAt(k*2+1, new THREE.Color(ELEM_HEX[b.elB] || '#aaa'));
      });
      bondMesh.instanceColor.needsUpdate = true;
      scene.add(bondMesh);
    }

    /* ── Unit cell wireframe ── */
    var boxEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(a, b, c));
    var lineBox  = new THREE.LineSegments(boxEdges,
      new THREE.LineBasicMaterial({color: 0x5470e8}));
    lineBox.position.set(cx, cy, cz);
    scene.add(lineBox);

    /* ── Camera ── */
    controls.target.set(cx, cy, cz);
    camera.position.set(cx+38, cy+22, cz+38);
    controls.update();

    updateFrame(0);
    document.getElementById('aimd-loading').style.display = 'none';
  }

  function setCylMatrix(x1,y1,z1, x2,y2,z2, mesh, idx) {
    var dx=x2-x1, dy=y2-y1, dz=z2-z1;
    var len = Math.sqrt(dx*dx+dy*dy+dz*dz);
    if (len < 1e-4) { dummy.scale.setScalar(0); }
    else {
      dummy.position.set((x1+x2)/2, (y1+y2)/2, (z1+z2)/2);
      dummy.quaternion.setFromUnitVectors(yAxis, new THREE.Vector3(dx,dy,dz).normalize());
      dummy.scale.set(1, len, 1);
    }
    dummy.updateMatrix();
    mesh.setMatrixAt(idx, dummy.matrix);
  }

  function updateFrame(n) {
    if (!traj) return;
    n = Math.max(0, Math.min(n, totalF-1));
    curF = n;
    var frame = traj.frames[n];
    var a = traj.lattice[0][0], b = traj.lattice[1][1], c = traj.lattice[2][2];

    /* atoms */
    Object.keys(atomMeshes).forEach(function(el) {
      var mesh = atomMeshes[el].mesh;
      atomMeshes[el].indices.forEach(function(ai, inst) {
        dummy.position.set(frame[ai*3], frame[ai*3+1], frame[ai*3+2]);
        dummy.quaternion.set(0,0,0,1);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        mesh.setMatrixAt(inst, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
    });

    /* bonds */
    if (bondMesh) {
      bondList.forEach(function(b, k) {
        var xi=frame[b.i*3],   yi=frame[b.i*3+1], zi=frame[b.i*3+2];
        var xj=frame[b.j*3]+b.ox, yj=frame[b.j*3+1]+b.oy, zj=frame[b.j*3+2]+b.oz;
        var mx=(xi+xj)/2, my=(yi+yj)/2, mz=(zi+zj)/2;
        setCylMatrix(xi,yi,zi, mx,my,mz, bondMesh, k*2);
        setCylMatrix(mx,my,mz, xj,yj,zj, bondMesh, k*2+1);
      });
      bondMesh.instanceMatrix.needsUpdate = true;
    }

    document.getElementById('frame-slider').value = n;
    document.getElementById('frame-info').textContent = 'Step: ' + (n + 1) + ' / ' + totalF;
  }

  function tick() { updateFrame((curF+1) % totalF); }

  window.aimdTogglePlay = function() {
    if (!traj) return;
    playing = !playing;
    var btn = document.getElementById('aimd-play-btn');
    if (playing) {
      timer = setInterval(tick, ms);
      btn.innerHTML = '&#9646;&#9646; Pause'; btn.classList.add('active');
    } else {
      clearInterval(timer);
      btn.innerHTML = '&#9654; Play'; btn.classList.remove('active');
    }
  };

  window.aimdSeek  = function(v) { updateFrame(+v); };
  window.aimdBack  = function()  { updateFrame(curF-1); };
  window.aimdFwd   = function()  { updateFrame(curF+1); };
  window.aimdReset = function() {
    if (!traj) return;
    var a=traj.lattice[0][0], b=traj.lattice[1][1], c=traj.lattice[2][2];
    controls.target.set(a/2, b/2, c/2);
    camera.position.set(a/2+38, b/2+22, c/2+38);
    controls.update();
  };
  window.aimdSpeed = function(v) {
    ms = v;
    if (playing) { clearInterval(timer); timer = setInterval(tick, ms); }
    [200,100,40].forEach(function(x) {
      document.getElementById('speed-'+x).classList.toggle('active', x===v);
    });
  };
})();
</script>
