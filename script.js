const categorySelect = document.getElementById('categorySelect');
const valueInput = document.getElementById('valueInput');
const fromSelect = document.getElementById('fromSelect');
const toSelect = document.getElementById('toSelect');
const convertButton = document.getElementById('convertButton');
const resultBox = document.getElementById('resultBox');
const ruleText = document.getElementById('ruleText');

function formatUnit(unit) {
  return `${unit.name} (${unit.symbol})`;
}

function getCurrentCategory() {
  return UNITS_CATALOG.categories.find((category) => category.id === categorySelect.value);
}

function loadCategories() {
  UNITS_CATALOG.categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  });
}

function loadUnits(categoryId) {
  const category = UNITS_CATALOG.categories.find((item) => item.id === categoryId);
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
}

function convert() {
  const category = getCurrentCategory();
  const from = category.units.find((unit) => unit.id === fromSelect.value);
  const to = category.units.find((unit) => unit.id === toSelect.value);
  const value = Number(valueInput.value);

  if (Number.isNaN(value)) {
    resultBox.textContent = 'Ingresa un valor numérico válido.';
    return;
  }

  const valueInBase = value * from.to_base;
  const result = valueInBase / to.to_base;

  resultBox.textContent = `${value} ${from.name} = ${result.toLocaleString('es-ES', {
    maximumFractionDigits: 10
  })} ${to.name}`;
}

loadCategories();
loadUnits(UNITS_CATALOG.categories[0].id);
ruleText.textContent = UNITS_CATALOG.conversion_rule;
convert();

categorySelect.addEventListener('change', (event) => {
  loadUnits(event.target.value);
  convert();
});
convertButton.addEventListener('click', convert);
fromSelect.addEventListener('change', convert);
toSelect.addEventListener('change', convert);
valueInput.addEventListener('input', convert);
