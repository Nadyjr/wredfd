const tutor = [
  "Ahmad",
  "Sari",
  "Rina",
  "Budi",
  "Tambah nama tutor"
];

const tutorSelect = document.getElementById('namaTutorSelect');
tutor.forEach(nama => {
  const option = document.createElement('option');
  option.value = nama;
  option.textContent = nama;
  tutorSelect.appendChild(option);
});
