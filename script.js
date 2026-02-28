const categorySelect = document.getElementById('categorySelect');
const categoryIcon = document.getElementById('categoryIcon');
const categoryTitle = document.getElementById('categoryTitle');
const valueInput = document.getElementById('valueInput');
const fromSelect = document.getElementById('fromSelect');
const toSelect = document.getElementById('toSelect');
const swapButton = document.getElementById('swapButton');
const convertButton = document.getElementById('convertButton');
const resultBox = document.getElementById('resultBox');
const ruleText = document.getElementById('ruleText');
const quickCards = document.getElementById('quickCards');
const salvadorButton = document.getElementById('salvadorButton');
const globalButton = document.getElementById('globalButton');
const allButton = document.getElementById('allButton');

const CATEGORY_ICONS = {
  longitud: '📏',
  superficie: '🧱',
  volumen: '🧪',
  otras_volumen: '🥤',
  masa_y_peso: '⚖️',
  peso_miel: '🍯',
  otras_masa_y_peso: '📦',
  unidad: '🔢',
  otras_unidad: '🧺',
  energia: '⚡',
  potencia: '🔋',
  presion: '🌡️'
};

const LOCAL_CATEGORY_IDS = ['longitud', 'superficie', 'volumen', 'otras_volumen', 'masa_y_peso', 'peso_miel', 'otras_masa_y_peso', 'unidad', 'otras_unidad'];
const INTERNATIONAL_CATEGORY_IDS = ['energia', 'potencia', 'presion', 'longitud', 'superficie', 'volumen', 'masa_y_peso'];

let currentMode = 'local';

function getCategoriesByMode() {
  if (currentMode === 'local') {
    return UNITS_CATALOG.categories.filter((category) => LOCAL_CATEGORY_IDS.includes(category.id));
  }

  if (currentMode === 'global') {
    return UNITS_CATALOG.categories.filter((category) => INTERNATIONAL_CATEGORY_IDS.includes(category.id));
  }

  return UNITS_CATALOG.categories;
}

function formatUnit(unit) {
  return `${unit.name} (${unit.symbol})`;
}

function getCurrentCategory() {
  return getCategoriesByMode().find((category) => category.id === categorySelect.value);
}

function updateCategoryHeader(category) {
  categoryTitle.textContent = category.name;
  categoryIcon.textContent = CATEGORY_ICONS[category.id] || '📐';
}

function setActiveModeButton() {
  [salvadorButton, globalButton, allButton].forEach((button) => button.classList.remove('active'));

  if (currentMode === 'local') salvadorButton.classList.add('active');
  if (currentMode === 'global') globalButton.classList.add('active');
  if (currentMode === 'all') allButton.classList.add('active');
}

function loadCategories() {
  const categories = getCategoriesByMode();
  categorySelect.innerHTML = '';

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = `${CATEGORY_ICONS[category.id] || '📐'} ${category.name}`;
    categorySelect.appendChild(option);
  });

  if (categories.length > 0) {
    loadUnits(categories[0].id);
  }
}

function loadUnits(categoryId) {
  const category = getCategoriesByMode().find((item) => item.id === categoryId);
  if (!category) return;

  fromSelect.innerHTML = '';
  toSelect.innerHTML = '';

  category.units.forEach((unit) => {
    const fromOption = document.createElement('option');
    fromOption.value = unit.id;
    fromOption.textContent = formatUnit(unit);

    const toOption = document.createElement('option');
    toOption.value = unit.id;
    toOption.textContent = formatUnit(unit);

    fromSelect.appendChild(fromOption);
    toSelect.appendChild(toOption);
  });

  if (category.units.length > 1) {
    toSelect.selectedIndex = 1;
  }

  updateCategoryHeader(category);
  renderQuickConversions(category);
}

function convert() {
  const category = getCurrentCategory();
  if (!category) return;

  const from = category.units.find((unit) => unit.id === fromSelect.value);
  const to = category.units.find((unit) => unit.id === toSelect.value);
  const value = Number(valueInput.value);

  if (Number.isNaN(value)) {
    resultBox.textContent = '⚠️ Ingresa un valor numérico válido.';
    return;
  }

  const valueInBase = value * from.to_base;
  const result = valueInBase / to.to_base;

  resultBox.textContent = `✅ ${value} ${from.name} = ${result.toLocaleString('es-ES', {
    maximumFractionDigits: 10
  })} ${to.name}`;
}

function swapUnits() {
  const fromValue = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = fromValue;
  convert();
}

function renderQuickConversions(category) {
  quickCards.innerHTML = '';
  const topUnits = category.units.slice(0, 4);

  topUnits.forEach((unit, index) => {
    const toUnit = category.units[index + 1] || category.units[0];
    const sampleValue = index === 0 ? 1 : 10;
    const result = (sampleValue * unit.to_base) / toUnit.to_base;

    const card = document.createElement('button');
    card.className = 'quick-card';
    card.type = 'button';
    card.textContent = `${sampleValue} ${unit.symbol} → ${result.toLocaleString('es-ES', { maximumFractionDigits: 4 })} ${toUnit.symbol}`;
    card.addEventListener('click', () => {
      valueInput.value = sampleValue;
      fromSelect.value = unit.id;
      toSelect.value = toUnit.id;
      convert();
    });

    quickCards.appendChild(card);
  });
}

function changeMode(mode) {
  currentMode = mode;
  setActiveModeButton();
  loadCategories();
  convert();
}

ruleText.textContent = UNITS_CATALOG.conversion_rule;
setActiveModeButton();
loadCategories();
convert();

categorySelect.addEventListener('change', (event) => {
  loadUnits(event.target.value);
  convert();
});
convertButton.addEventListener('click', convert);
swapButton.addEventListener('click', swapUnits);
fromSelect.addEventListener('change', convert);
toSelect.addEventListener('change', convert);
valueInput.addEventListener('input', convert);
salvadorButton.addEventListener('click', () => changeMode('local'));
globalButton.addEventListener('click', () => changeMode('global'));
allButton.addEventListener('click', () => changeMode('all'));
