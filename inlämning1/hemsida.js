document.addEventListener('DOMContentLoaded', () => {
  const personForm = document.getElementById('person-form');
  const personList = document.getElementById('person-list');
  const searchInput = document.getElementById('search-input');

  const fetchData = async () => {
    const response = await fetch('hemsida.json');
    const data = await response.json();
    displayData(data);
  };

  const displayData = (data) => {
    personList.innerHTML = '';
    data.forEach((person, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${person.name} - ${person.position}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Ta bort';
      removeButton.addEventListener('click', () => removePerson(index));

      listItem.appendChild(removeButton);
      personList.appendChild(listItem);
    });
  };

  const removePerson = async (index) => {
    const response = await fetch('hemsida.json');
    const data = await response.json();
    data.splice(index, 1);

    await fetch('updateData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    fetchData();
  };

  searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const response = await fetch('hemsida.json');
    const data = await response.json();
    const filteredData = data.filter((person) => person.name.toLowerCase().includes(searchTerm));
    displayData(filteredData);
  });

  personForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const positionInput = document.getElementById('position');

    const newPerson = {
      name: nameInput.value,
      position: positionInput.value,
    };

    const response = await fetch('hemsida.json');
    const data = await response.json();
    data.push(newPerson);

    await fetch('updateData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    fetchData();
    personForm.reset();
  });

  fetchData();
});
