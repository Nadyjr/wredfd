const pelajaran = [
  "Matematika",
  "B.Inggris",
  "B.indonesia",
  "Olimpiade",
  "Math"
];

const pelajaranSelect = document.getElementById('mataPelajaranSelect');
pelajaran.forEach(mata => {
  const option = document.createElement('option');
  option.value = mata;
  option.textContent = mata;
  pelajaranSelect.appendChild(option);
});
