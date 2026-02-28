const $ = (id) => document.getElementById(id);

const ui = {
  categorySelect: $('categorySelect'),
  categoryIcon: $('categoryIcon'),
  categoryTitle: $('categoryTitle'),
  valueInput: $('valueInput'),
  fromSelect: $('fromSelect'),
  toSelect: $('toSelect'),
  swapButton: $('swapButton'),
  convertButton: $('convertButton'),
  resultBox: $('resultBox'),
  ruleText: $('ruleText'),
  quickCards: $('quickCards'),
  btnLocal: $('btn-local'),
  btnGlobal: $('btn-global'),
  btnAll: $('btn-all')
};

const ICONS = {
  longitud: '📏', superficie: '🧱', volumen: '🧪', otras_volumen: '🥤',
  masa_y_peso: '⚖️', peso_miel: '🍯', otras_masa_y_peso: '📦', unidad: '🔢',
  otras_unidad: '🧺', energia: '⚡', potencia: '🔋', presion: '🌡️'
};

const LOCAL = ['longitud', 'superficie', 'volumen', 'otras_volumen', 'masa_y_peso', 'peso_miel', 'otras_masa_y_peso', 'unidad', 'otras_unidad'];
const GLOBAL = ['energia', 'potencia', 'presion', 'longitud', 'superficie', 'volumen', 'masa_y_peso'];
let mode = 'local';

function categoriesByMode() {
  if (mode === 'local') return UNITS_CATALOG.categories.filter((c) => LOCAL.includes(c.id));
  if (mode === 'global') return UNITS_CATALOG.categories.filter((c) => GLOBAL.includes(c.id));
  return UNITS_CATALOG.categories;
}

function currentCategory() {
  return categoriesByMode().find((c) => c.id === ui.categorySelect.value);
}

function fillCategories() {
  const list = categoriesByMode();
  ui.categorySelect.innerHTML = '';
  list.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = `${ICONS[category.id] || '📐'} ${category.name}`;
    ui.categorySelect.appendChild(option);
  });
  if (list[0]) fillUnits(list[0].id);
}

function fillUnits(categoryId) {
  const category = categoriesByMode().find((c) => c.id === categoryId);
  if (!category) return;

  ui.categoryTitle.textContent = category.name;
  ui.categoryIcon.textContent = ICONS[category.id] || '📐';

  ui.fromSelect.innerHTML = '';
  ui.toSelect.innerHTML = '';

  category.units.forEach((unit) => {
    const from = document.createElement('option');
    from.value = unit.id;
    from.textContent = `${unit.name} (${unit.symbol})`;

    const to = document.createElement('option');
    to.value = unit.id;
    to.textContent = `${unit.name} (${unit.symbol})`;

    ui.fromSelect.appendChild(from);
    ui.toSelect.appendChild(to);
  });

  if (category.units.length > 1) ui.toSelect.selectedIndex = 1;
  renderQuick(category);
}

function convert() {
  const category = currentCategory();
  if (!category) return;

  const from = category.units.find((u) => u.id === ui.fromSelect.value);
  const to = category.units.find((u) => u.id === ui.toSelect.value);
  const value = Number(ui.valueInput.value);

  if (Number.isNaN(value)) {
    ui.resultBox.textContent = '⚠️ Ingresa un valor numérico válido.';
    return;
  }

  const result = (value * from.to_base) / to.to_base;
  ui.resultBox.textContent = `✅ ${value} ${from.name} = ${result.toLocaleString('es-ES', { maximumFractionDigits: 10 })} ${to.name}`;
}

function swapUnits() {
  const tmp = ui.fromSelect.value;
  ui.fromSelect.value = ui.toSelect.value;
  ui.toSelect.value = tmp;
  convert();
}

function renderQuick(category) {
  ui.quickCards.innerHTML = '';
  category.units.slice(0, 4).forEach((unit, index) => {
    const toUnit = category.units[index + 1] || category.units[0];
    const sample = index === 0 ? 1 : 10;
    const result = (sample * unit.to_base) / toUnit.to_base;

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'quick-card';
    card.textContent = `${sample} ${unit.symbol} → ${result.toLocaleString('es-ES', { maximumFractionDigits: 4 })} ${toUnit.symbol}`;
    card.addEventListener('click', () => {
      ui.valueInput.value = sample;
      ui.fromSelect.value = unit.id;
      ui.toSelect.value = toUnit.id;
      convert();
    });
    ui.quickCards.appendChild(card);
  });
}

function setMode(nextMode) {
  mode = nextMode;
  [ui.btnLocal, ui.btnGlobal, ui.btnAll].forEach((b) => b.classList.remove('active'));
  if (mode === 'local') ui.btnLocal.classList.add('active');
  if (mode === 'global') ui.btnGlobal.classList.add('active');
  if (mode === 'all') ui.btnAll.classList.add('active');
  fillCategories();
  convert();
}

ui.ruleText.textContent = UNITS_CATALOG.conversion_rule;
fillCategories();
convert();

ui.categorySelect.addEventListener('change', (event) => { fillUnits(event.target.value); convert(); });
ui.fromSelect.addEventListener('change', convert);
ui.toSelect.addEventListener('change', convert);
ui.valueInput.addEventListener('input', convert);
ui.swapButton.addEventListener('click', swapUnits);
ui.convertButton.addEventListener('click', convert);
ui.btnLocal.addEventListener('click', () => setMode('local'));
ui.btnGlobal.addEventListener('click', () => setMode('global'));
ui.btnAll.addEventListener('click', () => setMode('all'));
