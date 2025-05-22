const siswa = [
  "Alya",
  "Eva",
  "edi",
  "Nadi",
  "Supri"
];

const siswaSelect = document.getElementById('namaSiswaSelect');
siswa.forEach(nama => {
  const option = document.createElement('option');
  option.value = nama;
  option.textContent = nama;
  siswaSelect.appendChild(option);
});
